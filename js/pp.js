/*
 * Political power planner, a sub-tab of Politics: when each paid pick of the guide becomes affordable.
 *
 * Game facts come from guides/trees/pp-*.js (PPD): the base gain, the 1936 sources, and what focuses, spirits, laws,
 * advisors and decisions do to political power. Daily gain = (base + flat gains) × (1 + gain factors) − daily costs.
 * Day by day from 1 Jan 1936, the guide's focuses complete on the dates projectFocuses() gives them, and the picks
 * (G.politics.picks) are bought in order, each once its phase has started and there's enough political power.
 * The guide's assumptions are in G.politics.pp ({start, stability, extra}); "my game now" is per playthrough
 * (store.ppNow = {date, pp, gain}) and replans the rest from that date.
 */

const PP_DAY = 864e5;
const PP_END = "1942-12-31";
const ppDay = s => Date.UTC(+s.slice(0, 4), +s.slice(5, 7) - 1, +s.slice(8, 10));
const ppIso = ms => new Date(ms).toISOString().slice(0, 10);
const ppSign = (x, d) => (x < 0 ? "−" : "+") + Math.abs(x).toFixed(d == null ? 2 : d);
const ppPct = x => ppSign(x * 100, Math.abs(x * 100 - Math.round(x * 100)) < 1e-6 ? 0 : 1) + "%";
const ppNum = x => Math.round(x).toLocaleString("en-GB");

function ppCfg() {
  const s = (G.politics || {}).pp || {};
  return {
    start: s.start != null ? s.start : 0,
    stability: s.stability != null ? s.stability : PPD.stability != null ? PPD.stability : .5,
    extra: s.extra || 0
  };
}

// above 50% stability the gain goes up, below it goes down; scaled linearly between 50% and 100% / 0% (assumed)
const ppStab = st => st >= .5 ? PPD.static.stabilityGood * (st - .5) / .5 : PPD.static.stabilityBad * (.5 - st) / .5;

function ppRate(active, cfg) {
  let gain = 0,
    factor = ppStab(cfg.stability) + cfg.extra / 100,
    cost = 0;
  active.forEach(a => {
    gain += a.gain || 0;
    factor += a.factor || 0;
    cost += a.cost || 0;
  });
  return (PPD.base + gain) * (1 + factor) - cost;
}

// what a pick costs with the hiring discounts in force, or null when the game doesn't give a number
function ppCost(p, active) {
  const x = polItem(p);
  if (!x || typeof x.cost !== "number") return null;
  if (p.kind === "decision") return x.cost;
  let f = 0;
  active.forEach(a => f += (a.costf || {})[x.slot] || 0);
  return Math.max(0, Math.round(x.cost * (1 + f) * 10) / 10);
}

// each plan step's phase: from (the previous phase's end) and by (its own end)
function ppWindows() {
  const w = {};
  let prev = null;
  (G.plan || []).forEach(g => {
    const by = endOf(g.by),
      from = prev;
    if (by) prev = by;
    g.steps.forEach(s => w[s.id] = {
      from,
      by: endOf(s.by) || by,
      approx: !!g.approx,
      phase: g.title
    });
  });
  return w;
}

function ppFocusEvents() {
  const ev = [];
  (G.focus || []).forEach(g => g.steps.forEach(s => {
    const f = s.focus && PPD.focus[s.focus],
      pj = PROJ[s.id];
    if (f && pj) ev.push({
      day: ppDay(pj.by),
      step: s.id,
      name: (TREE.byId[s.focus] || {}).name || s.t,
      f
    });
  }));
  return ev.sort((a, b) => a.day - b.day);
}

/* the day-by-day run: balance series, when each pick is bought, and every change to the income */
function ppSimulate(cfg, now) {
  const picks = polPicks(),
    win = ppWindows(),
    focusEv = ppFocusEvents();
  let active = PPD.start.map((m, i) => Object.assign({
      key: "start" + i
    }, m)),
    day = ppDay("1936-01-01"),
    bal = cfg.start,
    ratio = 1,
    fi = 0,
    qi = 0,
    quiet = false;
  const out = {
    series: [],
    buys: picks.map(() => null),
    changes: [],
    win,
    from: day
  };
  const log = (src, text) => {
    if (!quiet) out.changes.push({
      day,
      src,
      text,
      rate: ppRate(active, cfg) * ratio
    });
  };
  const add = (key, src, m, until) => {
    active = active.filter(a => a.key !== key);
    active.push(Object.assign({
      key,
      src,
      until
    }, m));
  };
  const modText = m => [m.gain ? ppSign(m.gain) + "/day" : "", m.factor ? ppPct(m.factor) + " gain" : "", m.cost ? "−" + m.cost + "/day cost" : "",
    m.costf ? Object.entries(m.costf).map(([s, f]) => polSlotName(s) + " cost " + ppPct(f)).join(", ") : ""
  ].filter(Boolean).join(", ");

  function applyFocus(e, payout) {
    const f = e.f;
    if (f.pp && payout) {
      bal = Math.min(2000, bal + f.pp);
      log(e.name, ppSign(f.pp, 0) + " political power");
    }
    (f.remove || []).forEach(id => {
      if (active.some(a => a.key === "idea:" + id)) {
        active = active.filter(a => a.key !== "idea:" + id);
        log(e.name, "Ends " + PPD.ideas[id].name);
      }
    });
    (f.add || []).forEach(id => {
      add("idea:" + id, PPD.ideas[id].name, PPD.ideas[id]);
      log(e.name, PPD.ideas[id].name + ": " + modText(PPD.ideas[id]));
    });
    (f.timed || []).forEach(([id, days]) => {
      add("idea:" + id, PPD.ideas[id].name, PPD.ideas[id], day + days * PP_DAY);
      log(e.name, PPD.ideas[id].name + " for " + days + " days: " + modText(PPD.ideas[id]));
    });
  }

  function applyPick(p, at) {
    const x = polItem(p);
    if (!x) return;
    const name = p.name || (p.kind === "idea" ? ideaName(x) : x.name);
    if (p.kind === "advisor" && PPD.advisors[p.ref]) {
      add("adv:" + p.ref, name, PPD.advisors[p.ref]);
      log(name, modText(PPD.advisors[p.ref]));
    } else if (p.kind === "idea") {
      // a new law or company replaces the one in its slot
      const had = active.find(a => a.slot === x.slot);
      if (had) active = active.filter(a => a !== had);
      const m = PPD.laws[p.ref];
      if (m) {
        add("slot:" + x.slot, name, Object.assign({
          slot: x.slot
        }, m));
        log(name, modText(m));
      } else if (had) log(name, "Replaces " + had.src);
    } else if (p.kind === "decision") {
      const d = PPD.decisions[p.ref];
      if (!d) return;
      if (d.pp) {
        bal += d.pp;
        log(name, ppSign(d.pp, 0) + " political power");
      }
      if (d.active || d.end) {
        add("dec:" + p.ref, name, Object.assign({
          endPP: d.end
        }, d.active || {}), x.days ? at + x.days * PP_DAY : null);
        if (d.active) log(name, "While active: " + modText(d.active));
      }
    }
  }

  // my game: start from its date with its balance; focuses up to then and ticked picks are in place, the gain is scaled to match
  if (now) {
    const d0 = ppDay(now.date);
    quiet = true;
    while (fi < focusEv.length && focusEv[fi].day <= d0) applyFocus(focusEv[fi++], false);
    picks.forEach((p, i) => {
      if (store.ticks[p.step]) {
        applyPick(p, d0);
        out.buys[i] = {
          done: true
        };
      }
    });
    active = active.filter(a => !a.until || a.until > d0);
    quiet = false;
    day = out.from = d0;
    bal = now.pp;
    const model = ppRate(active, cfg);
    ratio = model > 0 && now.gain > 0 ? now.gain / model : 1;
  }
  out.startRate = ppRate(active, cfg) * ratio;
  out.ratio = ratio;

  const end = ppDay(PP_END);
  let lastAt = day;
  for (; day <= end; day += PP_DAY) {
    while (fi < focusEv.length && focusEv[fi].day <= day) applyFocus(focusEv[fi++], true);
    const ending = active.filter(a => a.until && a.until <= day);
    if (ending.length) {
      active = active.filter(a => !ending.includes(a));
      ending.forEach(a => {
        if (a.endPP) bal += a.endPP;
        log(a.src, "Ends" + (a.endPP ? ": " + ppSign(a.endPP, 0) + " political power" : ""));
      });
    }
    while (qi < picks.length) {
      if (out.buys[qi]) {
        qi++;
        continue;
      }
      const p = picks[qi],
        w = win[p.step] || {};
      if (w.from && day <= ppDay(w.from)) break;
      const cost = ppCost(p, active);
      if (cost == null) {
        out.buys[qi++] = {
          day,
          cost: null
        };
        continue;
      }
      if (bal < cost) break;
      out.buys[qi] = {
        day,
        cost,
        before: bal,
        late: !!w.by && day > ppDay(w.by)
      };
      bal -= cost;
      out.buys[qi].after = bal;
      applyPick(p, day);
      lastAt = day;
      qi++;
    }
    out.series.push([day, bal]);
    bal = Math.max(-500, Math.min(2000, bal + ppRate(active, cfg) * ratio));
    // stop a few months after the last pick and focus that matter
    if (qi >= picks.length && fi >= focusEv.length && day > Math.max(lastAt, out.from) + 120 * PP_DAY) break;
  }
  out.to = day;
  out.end = bal;
  return out;
}

/* ---------- the view ---------- */
function renderPP(box) {
  if (!PPD) {
    box.appendChild(el("p", "foot", "No political power data for this guide."));
    return;
  }
  const cfg = ppCfg(),
    now = store.ppNow || null,
    sim = ppSimulate(cfg, now),
    picks = polPicks();

  // income at the start, where it comes from, and the guide's assumptions
  const top = el("div", "spick ppinc");
  const head = el("div", "pch-h");
  head.innerHTML = "<b>Political power income</b><span></span>";
  head.querySelector("span").textContent = (now ? fmtDate(now.date) + ": " : "1 Jan 1936: ") + ppSign(sim.startRate) + " a day";
  top.appendChild(head);
  const src = el("ul", "ppsrc");
  const line = (a, b) => {
    const li = el("li");
    li.append(el("span", null, esc(a)), el("b", null, esc(b)));
    src.appendChild(li);
  };
  line("Base gain", ppSign(PPD.base) + "/day");
  PPD.start.forEach(s => line(s.src, [s.gain ? ppSign(s.gain) + "/day" : "", s.factor ? ppPct(s.factor) : ""].filter(Boolean).join(", ")));
  line("Stability " + Math.round(cfg.stability * 100) + "% (assumed to stay there)", ppPct(ppStab(cfg.stability)));
  if (cfg.extra) line("Other modifiers (difficulty, events...)", ppPct(cfg.extra / 100));
  if (cfg.start) line("Political power on 1 Jan 1936", ppNum(cfg.start));
  top.appendChild(src);
  if (EDITING) top.appendChild(ppEditCfg(cfg));
  top.appendChild(ppNowRow(now));
  box.appendChild(top);

  box.appendChild(ppChart(sim, picks));

  // the picks with the day each becomes affordable
  const list = el("div", "spick");
  const lh = el("div", "pch-h");
  lh.innerHTML = "<b>When the guide's picks become affordable</b><span></span>";
  const late = sim.buys.filter(b => b && b.late).length,
    never = sim.buys.filter(b => !b).length;
  lh.querySelector("span").textContent = late || never ? [late ? late + " late" : "", never ? never + " not by " + fmtDate(PP_END) : ""].filter(Boolean).join(", ") : "all on time";
  list.appendChild(lh);
  const ol = el("ol", "pppicks");
  picks.forEach((p, i) => {
    const x = polItem(p),
      b = sim.buys[i],
      w = sim.win[p.step] || {};
    const li = el("li", !b ? "never" : b.done ? "done" : b.late ? "late" : b.cost == null ? "nocost" : "");
    li.innerHTML = '<span class="ppn"></span><div class="pp-main"><b></b><span class="pp-what"></span></div><span class="ppat"></span>';
    li.querySelector(".ppn").textContent = i + 1;
    li.querySelector("b").textContent = p.name || (x ? (p.kind === "idea" ? ideaName(x) : x.name) : p.ref);
    const base = x && typeof x.cost === "number" ? x.cost : null;
    li.querySelector(".pp-what").textContent = [b && b.cost != null ? b.cost + " PP" + (base != null && b.cost !== base ? " (base " + base + ")" : "") :
      x && x.cost === "varies" ? "cost varies, not counted" : base != null ? base + " PP" : "no cost in the game files",
    w.by ? "guide: " + (w.approx ? "≈ " : "") + "by " + fmtDate(w.by.slice(0, 7)) : ""
    ].filter(Boolean).join(" · ");
    const at = li.querySelector(".ppat");
    if (!b) at.textContent = "not affordable by " + fmtDate(PP_END);
    else if (b.done) at.textContent = "✓ done";
    else {
      at.textContent = (b.cost == null ? "from " : "") + fmtDate(ppIso(b.day));
      if (b.cost != null) at.title = ppNum(b.before) + " PP before, " + ppNum(b.after) + " after";
      if (b.late) at.textContent += " · " + Math.round((b.day - ppDay(w.by)) / PP_DAY) + " days late";
    }
    ol.appendChild(li);
  });
  list.appendChild(ol);
  if (!picks.length) list.appendChild(el("p", "dsmall", "The guide has no picks yet. Add them in Guide's picks."));
  box.appendChild(list);

  // every change to the income, in order
  const ch = el("details", "spick ppchanges");
  ch.appendChild(el("summary", null, "Changes to the income (" + sim.changes.length + ")"));
  const tl = el("ol", "ppch");
  sim.changes.forEach(c => {
    const li = el("li");
    li.innerHTML = "<span></span><b></b><i></i><em></em>";
    li.querySelector("span").textContent = fmtDate(ppIso(c.day));
    li.querySelector("b").textContent = c.src;
    li.querySelector("i").textContent = c.text;
    li.querySelector("em").textContent = ppSign(c.rate) + "/day";
    tl.appendChild(li);
  });
  ch.appendChild(tl);
  box.appendChild(ch);

  box.appendChild(el("p", "foot", "An estimate from the patch " + esc(PPD.patch) + " files. Focuses complete on their projected dates and picks are " +
    "bought in the guide's order, each once its phase has started. Not counted: the MEFO Bills mission and other scripted effects, " +
    "spirits added by scripts (some Reichsleiter spirits count only once a focus improves them), political power spent on anything " +
    "the guide doesn't list (war goals, other decisions), and changes in stability. Enter your own numbers under \"My game now\" to replan from there."));
}

// the guide's assumptions, in edit mode
function ppEditCfg(cfg) {
  const row = el("div", "ppcfg");
  const field = (label, value, key, scale) => {
    const l = el("label");
    l.appendChild(document.createTextNode(label + " "));
    const i = el("input", "ed-input");
    i.type = "number";
    i.value = Math.round(value * scale * 100) / 100;
    i.addEventListener("change", () => {
      const s = (G.politics.pp = G.politics.pp || {});
      if (i.value === "") delete s[key];
      else s[key] = +i.value / scale;
      saveEdits();
      renderPolitics();
    });
    l.appendChild(i);
    return l;
  };
  row.append(field("Start PP", cfg.start, "start", 1), field("Stability %", cfg.stability, "stability", 100), field("Other gain %", cfg.extra, "extra", 1));
  return row;
}

// my game now: the real balance and gain at the tracker date, saved in this playthrough
function ppNowRow(now) {
  const row = el("div", "ppnow");
  row.appendChild(el("span", "ppnow-h", "My game now"));
  if (now) {
    row.appendChild(el("span", "dsmall", esc(fmtDate(now.date) + ": " + ppNum(now.pp) + " PP, " + ppSign(now.gain) + " a day. The plan starts from there.")));
    const clear = el("button", null, "Clear");
    clear.type = "button";
    clear.addEventListener("click", () => {
      delete store.ppNow;
      save();
      renderPolitics();
    });
    row.appendChild(clear);
    return row;
  }
  if (!store.date) {
    row.appendChild(el("span", "dsmall", "Set the in-game date in the top bar, then enter your political power here to plan from where you are."));
    return row;
  }
  const pp = el("input", "ed-input"),
    gain = el("input", "ed-input");
  pp.type = gain.type = "number";
  pp.placeholder = "PP";
  gain.placeholder = "per day";
  gain.step = "0.01";
  pp.setAttribute("aria-label", "Political power now");
  gain.setAttribute("aria-label", "Political power gain per day");
  const go = el("button", null, "Plan from " + esc(fmtDate(store.date)));
  go.type = "button";
  go.addEventListener("click", () => {
    if (pp.value === "" || gain.value === "") return;
    store.ppNow = {
      date: store.date,
      pp: +pp.value,
      gain: +gain.value
    };
    save();
    renderPolitics();
  });
  row.append(pp, gain, go);
  return row;
}

/* balance over time, with a marker where each pick is bought */
function ppChart(sim, picks) {
  const W = 1000,
    H = 240,
    L = 44,
    R = 10,
    T = 12,
    B = 26;
  const x0 = sim.from,
    x1 = Math.max(sim.to, x0 + 60 * PP_DAY);
  const top = Math.max(100, ...sim.series.map(s => s[1]), ...sim.buys.filter(b => b && b.before != null).map(b => b.before));
  const yMax = Math.ceil(top / 100) * 100;
  const X = d => L + (d - x0) / (x1 - x0) * (W - L - R),
    Y = v => T + (1 - Math.max(0, v) / yMax) * (H - T - B);
  let s = `<svg viewBox="0 0 ${W} ${H}" class="ppsvg" role="img" aria-label="Political power over time">`;
  for (let v = 0; v <= yMax; v += yMax / 4) s += `<line class="g" x1="${L}" x2="${W - R}" y1="${Y(v)}" y2="${Y(v)}"/><text class="ax" x="${L - 6}" y="${Y(v) + 4}" text-anchor="end">${ppNum(v)}</text>`;
  const y0 = new Date(x0).getUTCFullYear(),
    yEnd = new Date(x1).getUTCFullYear();
  for (let y = y0; y <= yEnd; y++)
    for (const m of [0, 6]) {
      const d = Date.UTC(y, m, 1);
      if (d < x0 || d > x1) continue;
      s += `<line class="${m ? "g" : "gy"}" x1="${X(d)}" x2="${X(d)}" y1="${T}" y2="${H - B}"/>`;
      if (!m) s += `<text class="ax" x="${X(d)}" y="${H - 8}" text-anchor="middle">${y}</text>`;
    }
  const pts = sim.series.filter((p, i) => i % 2 === 0 || i === sim.series.length - 1).map(p => X(p[0]).toFixed(1) + "," + Y(p[1]).toFixed(1)).join(" ");
  s += `<polyline class="ln" points="${pts}"/>`;
  if (store.date && ppDay(store.date) >= x0 && ppDay(store.date) <= x1) s += `<line class="today" x1="${X(ppDay(store.date))}" x2="${X(ppDay(store.date))}" y1="${T}" y2="${H - B}"/>`;
  sim.buys.forEach((b, i) => {
    if (!b || b.done || b.before == null) return;
    const cx = X(b.day),
      cy = Y(b.before);
    s += `<g class="buy${b.late ? " late" : ""}"><line x1="${cx}" x2="${cx}" y1="${cy}" y2="${Y(b.after)}"/><circle cx="${cx}" cy="${cy}" r="7"/><text x="${cx}" y="${cy + 3.5}" text-anchor="middle">${i + 1}</text><title>${esc((i + 1) + ". " + (picks[i].name || (polItem(picks[i]) || {}).name || picks[i].ref) + " · " + b.cost + " PP · " + fmtDate(ppIso(b.day)))}</title></g>`;
  });
  s += "</svg>";
  const wrap = el("div", "spick ppchart");
  wrap.innerHTML = s;
  wrap.appendChild(el("p", "dsmall", "Political power over time. Gold numbers are the picks, bought as soon as they're affordable; red ones are later than the guide's phase. Hover for details."));
  return wrap;
}
