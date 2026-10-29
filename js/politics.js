/*
 * Politics tab: the guide's laws, advisors and decisions in order, the government screen's three tabs (Government,
 * Research & Production, Military Staff) and every decision Germany can take.
 *
 * Game facts come from guides/trees/politics-*.js (POL). The guide's choices are G.politics.picks, one ordered list of
 * laws and companies ("idea"), advisors and decisions, each tied to a plan step; a pick is done when its step is ticked.
 */

const POL_SUBS = [["picks", "Guide's picks"], ["pp", "Political power"], ["government", "Government"], ["research_production", "Research & Production"],
  ["military_staff", "Military Staff"], ["decisions", "Decisions"]];
const POL_ICON = {idea: "flag", advisor: "people", decision: "star"};
const DESIGN_SLOTS = ["tank_manufacturer", "naval_manufacturer", "aircraft_manufacturer", "materiel_manufacturer"];
let polSearch = "";
const polPicks = () => (G.politics = G.politics || {}, G.politics.picks = G.politics.picks || [], G.politics.picks);
const polSub = () => POL_SUBS.some(([k]) => k === prefs.polSub) ? prefs.polSub : "picks";
const polItem = p => p.kind === "advisor" ? POL.advisors[p.ref] : p.kind === "decision" ? POL.decisions[p.ref] : POL.ideas[p.ref];
const polPickOf = (kind, ref) => polPicks().findIndex(p => p.kind === kind && p.ref === ref);
const ideaName = i => i.name + (/_improved/.test(i.id) ? " (improved)" : "");

function buildPolitics() {
  if (!POL) return;
  document.querySelector('[data-tab="politics"]').hidden = false;
  renderPolitics();
}

function renderPolitics() {
  const sub = polSub(),
    bar = document.getElementById("polSubs");
  bar.innerHTML = "";
  POL_SUBS.forEach(([k, label]) => {
    const b = el("button");
    b.type = "button";
    b.setAttribute("role", "tab");
    b.setAttribute("aria-selected", k === sub);
    b.textContent = label;
    b.addEventListener("click", () => {
      prefs.polSub = k;
      savePrefs();
      renderPolitics();
    });
    bar.appendChild(b);
  });
  const box = document.getElementById("polView");
  box.innerHTML = "";
  if (sub === "picks") renderPolPicks(box);
  else if (sub === "pp") renderPP(box);
  else if (sub === "decisions") renderDecisions(box);
  else renderGovTab(box, POL.tabs.find(t => t.id === sub));
}

// what a law, company, advisor or decision does, as lines
function polLines(kind, x) {
  if (kind === "advisor") return x.traits.flatMap(t => [t.name + ":", ...t.fx.map(l => "  " + l)]);
  return x.fx || [];
}
const polMeta = (kind, x) => kind === "decision" ? [x.cost != null ? (x.cost === "varies" ? "cost varies" : x.cost + " PP") : "", x.days ? x.days + " days" : "",
  x.mission ? "mission, " + x.mission + " days" : "", x.once ? "once" : "", x.again ? "again after " + x.again + " days" : "", x.targeted ? "targeted" : ""].filter(Boolean).join(" · ") :
  (x.cost != null ? x.cost + " PP" : "");

// one card for a law, company, advisor or decision, gold when the guide takes it
function polCard(kind, x) {
  const picks = polPicks(),
    n = polPickOf(kind, x.id),
    p = picks[n],
    done = p && store.ticks[p.step],
    c = el("article", "spcard pcard" + (n >= 0 ? " picked" : "") + (done ? " done" : ""));
  if (n >= 0) {
    const banner = el("div", "spbanner");
    banner.innerHTML = "<span class='mnum'></span><span></span>";
    banner.firstChild.textContent = n + 1;
    banner.lastChild.textContent = done ? "Guide pick · done" : "Guide pick";
    c.appendChild(banner);
  }
  const h = el("div", "sphead");
  h.innerHTML = `<span class="dslot-ico"><svg viewBox="0 0 24 24"><use href="#ic-${POL_ICON[kind]}"/></svg></span><b></b><i class="pcost"></i>`;
  h.querySelector("b").textContent = (p && p.name) || (kind === "idea" ? ideaName(x) : x.name);
  h.querySelector("i").textContent = polMeta(kind, x);
  if (EDITING) {
    const b = edBtn(n >= 0 ? "★ Taken" : "☆ Take", n >= 0 ? "Not taken" : "Add to the guide's picks", () => {
      if (n >= 0) picks.splice(n, 1);
      else picks.push({id: uid("po."), kind, ref: x.id});
      saveEdits();
      renderPolitics();
    }, "sprec");
    b.setAttribute("aria-pressed", n >= 0);
    h.appendChild(b);
  }
  c.appendChild(h);
  if (x.start) c.appendChild(el("p", "pstart", "In place on 1 Jan 1936"));
  const lines = polLines(kind, x);
  c.appendChild(el("ul", "dcfx small", lines.map(l => /^  /.test(l) ? "<li class='sub'>" + esc(l.trim()) + "</li>" : "<li>" + esc(l) + "</li>").join("") ||
    "<li class='none'>No direct effect listed</li>"));
  if (x.req && x.req.length) c.appendChild(el("p", "dcreq", "Needs: " + esc(x.req.join("; "))));
  return c;
}

/* the guide's picks in order */
function renderPolPicks(box) {
  const picks = polPicks(),
    steps = planSteps();
  const top = el("div", "spick");
  const head = el("div", "pch-h");
  head.innerHTML = "<b>Laws, advisors and decisions the guide takes</b><span></span>";
  head.querySelector("span").textContent = picks.length ? picks.filter(x => store.ticks[x.step]).length + " of " + picks.length + " done" : "none yet";
  top.appendChild(head);
  const ol = el("ol", "ppicks");
  picks.forEach((p, i) => {
    const x = polItem(p),
      done = !!store.ticks[p.step],
      li = el("li", done ? "done" : "");
    li.innerHTML = `<span class="dslot-ico"><svg viewBox="0 0 24 24"><use href="#ic-${POL_ICON[p.kind]}"/></svg></span><div class="pp-main"><b></b><i class="pcost"></i><span class="pp-what"></span></div>`;
    li.querySelector("b").textContent = (i + 1) + ". " + (done ? "✓ " : "") + (p.name || (x ? (p.kind === "idea" ? ideaName(x) : x.name) : p.ref));
    li.querySelector(".pcost").textContent = x ? polMeta(p.kind, x) : "not in the game files";
    li.querySelector(".pp-what").textContent = x ? (p.kind === "advisor" ? x.traits.map(t => t.name).join(", ") + " · " + polSlotName(x.slot) :
      p.kind === "decision" ? (POL.categories[x.cat] || {}).name || "" : polSlotName(x.slot)) : "";
    const main = li.querySelector(".pp-main");
    if (EDITING) {
      const ss = el("select", "ed-select");
      ss.setAttribute("aria-label", "Plan step");
      ss.appendChild(el("option", null, "—")).value = "";
      (G.plan || []).forEach(g => {
        const og = el("optgroup");
        og.label = g.title || "";
        g.steps.forEach(s => {
          const o = el("option");
          o.value = s.id;
          o.textContent = s.t.slice(0, 70);
          og.appendChild(o);
        });
        ss.appendChild(og);
      });
      ss.value = p.step || "";
      ss.addEventListener("change", () => {
        if (ss.value) p.step = ss.value;
        else delete p.step;
        saveEdits();
        renderPolitics();
      });
      main.append(ss, edText(p.n, "Note (optional)", v => {
        if (v) p.n = v;
        else delete p.n;
        saveEdits();
      }, "ed-note"));
      const tools = el("div", "pp-tools");
      tools.append(edBtn("▲", "Earlier", () => {
        if (i) {
          picks.splice(i - 1, 0, picks.splice(i, 1)[0]);
          saveEdits();
          renderPolitics();
        }
      }), edBtn("▼", "Later", () => {
        if (i < picks.length - 1) {
          picks.splice(i + 1, 0, picks.splice(i, 1)[0]);
          saveEdits();
          renderPolitics();
        }
      }), edBtn("✕", "Not taken", () => {
        picks.splice(i, 1);
        saveEdits();
        renderPolitics();
      }, "del"));
      li.appendChild(tools);
    } else {
      const link = steps[p.step];
      if (link) main.appendChild(el("span", "dcwhen" + (done ? " done" : ""), esc(link.s.t)));
      if (p.n) main.appendChild(el("span", "snote", esc(p.n)));
      if (x) {
        const d = el("details", "pp-fx");
        d.appendChild(el("summary", null, "What it does"));
        d.appendChild(polCard(p.kind, x).querySelector(".dcfx"));
        if (x.req && x.req.length) d.appendChild(el("p", "dcreq", "Needs: " + esc(x.req.join("; "))));
        main.appendChild(d);
      }
    }
    ol.appendChild(li);
  });
  top.appendChild(ol);
  if (G.politics.note) top.appendChild(el("p", "dsmall", esc(G.politics.note)));
  if (EDITING) top.appendChild(el("p", "dsmall", "Use ★ on a law, advisor or decision in the other views to add it."));
  box.appendChild(top);
  box.appendChild(el("p", "foot", "From the patch " + esc(POL.patch) + " files with every DLC. Costs are the base cost in political power; focuses, advisors and spirits can change them."));
}

const polSlotName = id => {
  for (const t of POL.tabs) {
    const s = t.slots.find(x => x.id === id);
    if (s) return s.name;
  }
  return id.replace(/_/g, " ");
};

/* one tab of the government screen: its slots across the top, then every option for each slot */
function renderGovTab(box, tab) {
  const picks = polPicks();
  // the slots, like the game's row: what the guide has there (its last pick for that slot), else the 1936 law
  const row = el("div", "pslots");
  tab.slots.forEach((s, si) => {
    const sameBefore = tab.slots.slice(0, si).filter(x => x.id === s.id).length;
    let holder = null;
    if (s.kind === "idea") {
      const taken = picks.filter(p => p.kind === "idea" && POL.ideas[p.ref] && POL.ideas[p.ref].slot === s.id);
      holder = taken.length ? POL.ideas[taken[taken.length - 1].ref] : Object.values(POL.ideas).find(i => i.slot === s.id && i.start);
      if (holder) holder = ideaName(holder);
    } else {
      const taken = picks.filter(p => p.kind === "advisor" && POL.advisors[p.ref] && POL.advisors[p.ref].slot === s.id);
      holder = taken[sameBefore] ? POL.advisors[taken[sameBefore].ref].name : null;
    }
    const c = el("div", "pslot" + (holder ? " full" : "") + (DESIGN_SLOTS.includes(s.id) ? " design" : ""));
    c.innerHTML = `<span class="dslot-ico"><svg viewBox="0 0 24 24"><use href="#ic-${s.kind === "advisor" ? "people" : "flag"}"/></svg></span><span class="ps-slot"></span><b></b>`;
    c.querySelector(".ps-slot").textContent = s.name;
    c.querySelector("b").textContent = holder || "—";
    row.appendChild(c);
  });
  box.appendChild(row);
  box.appendChild(el("p", "dsmall pslots-note", "The guide's latest pick for each slot (or the 1936 law). Base cost " + tab.cost + " PP unless a card says otherwise."));
  // every option, one column per slot kind
  const seen = new Set(),
    cols = el("div", "pcols"),
    folded = [];
  tab.slots.forEach(s => {
    if (seen.has(s.id)) return;
    seen.add(s.id);
    const list = s.kind === "advisor" ? Object.values(POL.advisors).filter(a => a.slot === s.id).sort((a, b) => a.name.localeCompare(b.name)) :
      Object.values(POL.ideas).filter(i => i.slot === s.id);
    if (!list.length) return;
    const col = el("section", "pwin pcol");
    col.appendChild(el("div", "dtitle", esc(s.name) + ` <i class="pcount">${list.length}</i>`));
    const l = el("div", "splist");
    list.forEach(x => l.appendChild(polCard(s.kind, x)));
    col.appendChild(l);
    if (DESIGN_SLOTS.includes(s.id)) folded.push(col);
    else cols.appendChild(col);
  });
  cols.classList.toggle("haspicks", picks.length > 0);
  box.appendChild(cols);
  if (folded.length) {
    const d = el("details", "pfold");
    d.appendChild(el("summary", null, "Design companies (" + folded.length + " slots): with Arms Against Tyranny these are replaced by military industrial organisations, see the MIOs tab"));
    const g = el("div", "pcols");
    folded.forEach(c => g.appendChild(c));
    d.appendChild(g);
    box.appendChild(d);
  }
}

/* every decision Germany can take, by category, with a filter */
function renderDecisions(box) {
  const picks = polPicks();
  const bar = el("div", "psearch");
  const input = el("input", "ed-input");
  input.type = "search";
  input.placeholder = "Filter decisions (name, category or effect)";
  input.value = polSearch;
  input.setAttribute("aria-label", "Filter decisions");
  bar.appendChild(input);
  box.appendChild(bar);
  const list = el("div", "pdecs");
  box.appendChild(list);
  const draw = () => {
    list.innerHTML = "";
    const q = polSearch.trim().toLowerCase();
    const byCat = {};
    Object.values(POL.decisions).forEach(d => (byCat[d.cat] = byCat[d.cat] || []).push(d));
    const cats = Object.keys(byCat).sort((a, b) => {
      const pa = byCat[a].some(d => polPickOf("decision", d.id) >= 0),
        pb = byCat[b].some(d => polPickOf("decision", d.id) >= 0);
      return (pb - pa) || (POL.categories[a] || {name: a}).name.localeCompare((POL.categories[b] || {name: b}).name);
    });
    let shown = 0;
    cats.forEach(cat => {
      const cname = (POL.categories[cat] || {}).name || cat;
      const ds = byCat[cat].filter(d => !q || (d.name + " " + cname + " " + (d.fx || []).join(" ")).toLowerCase().includes(q));
      if (!ds.length) return;
      shown += ds.length;
      const nPicks = ds.filter(d => polPickOf("decision", d.id) >= 0).length;
      const det = el("details", "pcat" + (nPicks ? " haspicks" : ""));
      det.open = !!nPicks || !!q;
      det.appendChild(el("summary", null, esc(cname) + ` <i>${ds.length}</i>` + (nPicks ? ` <b class="pcount">★ ${nPicks}</b>` : "")));
      const g = el("div", "pdgrid");
      ds.forEach(d => g.appendChild(polCard("decision", d)));
      det.appendChild(g);
      list.appendChild(det);
    });
    if (!shown) list.appendChild(el("p", "dcempty", "No decision matches."));
  };
  input.addEventListener("input", () => {
    polSearch = input.value;
    draw();
  });
  draw();
  box.appendChild(el("p", "foot", "Categories with the guide's picks come first and open. From the patch " + esc(POL.patch) + " files with every DLC; " +
    "requirements that depend on another country are left out, and some decisions only show up after focuses or events."));
}
