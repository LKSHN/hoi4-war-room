/*
 * Step lists (game plan, focus, research): progress, rendering, counts, the date tracker and the top bar.
 *
 * Progress per playthrough: {ticks:{id:true}, open:{id:true}, date?, notes?:{id:text}, note?}. A guide can have several
 * playthroughs, listed in hoi4-tool-runs:<guideId> ({current, runs:[{id, name, created}]}); the first one ("main")
 * keeps the original key hoi4-tool:<guideId>, the others get hoi4-tool:<guideId>:<runId>.
 */

let storeKey, store, runs;
const save = () => put(storeKey, store);
const runsKey = () => "hoi4-tool-runs:" + G.meta.id;
const runStoreKey = id => "hoi4-tool:" + G.meta.id + (id === "main" ? "" : ":" + id);

function openStore() {
  runs = load(runsKey(), null);
  if (!runs || !(runs.runs || []).length) runs = {current: "main", runs: [{id: "main", name: "Playthrough 1"}]};
  if (!runs.runs.some(r => r.id === runs.current)) runs.current = runs.runs[0].id;
  storeKey = runStoreKey(runs.current);
  store = load(storeKey, null);
  if (store) {
    store.ticks = store.ticks || {};
    store.open = store.open || {};
    return;
  }
  if (runs.current !== "main") { // a new playthrough starts empty
    store = {ticks: {}, open: {}};
    save();
    return;
  }
  store = {
    ticks: {},
    open: {}
  };
  const L = G.legacy;
  if (L) {
    // one-off migration from positional keys (g12, f3, r40) to stable step IDs. Old keys are left in place.
    const map = id => {
      const m = /^([a-z]+)(\d+)$/.exec(id);
      return m && L[m[1]] ? L[m[1]][m[2] - 1] : null;
    };
    const copy = (from, to) => Object.keys(load(from, {})).forEach(k => {
      const id = map(k);
      if (id) to[id] = true;
    });
    copy(L.key, store.ticks);
    copy(L.key + "-open", store.open);
    if (Object.keys(store.ticks).length || Object.keys(store.open).length) store.migratedFrom = L.key;
  }
  save();
}

function build(colId, groups) {
  const col = document.getElementById(colId),
    list = col.querySelector("[data-list]");
  let n = 0,
    prevBy = null;
  groups.forEach(g => {
    let phaseEl = null;
    const by = endOf(g.by),
      from = prevBy;
    if (by) prevBy = by;
    if (g.title) {
      phaseEl = el("li", "phase");
      const s = el("span");
      s.textContent = g.title;
      phaseEl.appendChild(s);
      if (by) {
        const c = el("span", "due");
        c.textContent = (g.approx ? "≈ " : "") + "by " + fmtDate(g.by);
        c.title = g.approx ? "Estimated, not stated in the guide" : "From the guide";
        phaseEl.appendChild(c);
      }
      phaseEl._by = by;
      phaseEl._from = from;
      if (g.ts && G.meta.video) {
        const a = el("a");
        a.href = vlink(g.ts);
        a.target = "_blank";
        a.rel = "noopener";
        a.textContent = "▶ " + g.ts;
        phaseEl.appendChild(a);
      }
      list.appendChild(phaseEl);
    }
    g.steps.forEach(o => {
      n++;
      const id = o.id,
        tag = TAGS[o.tag];
      const li = el("li", null, `<label class="item"><input type="checkbox"><span class="num">${n}</span><span class="txt"></span></label>`);
      li.querySelector("input").id = id;
      const txt = li.querySelector(".txt");
      txt.appendChild(document.createTextNode(o.t));
      if (tag) {
        const s = el("span", "tag" + (o.tag === "sp" ? " sp" : ""));
        s.textContent = tag;
        txt.appendChild(s);
      }
      let pane = null;
      if (o.img && G.images[o.img]) {
        const im = G.images[o.img],
          b = el("button", "shotbtn");
        b.type = "button";
        pane = el("div", "inshot");
        pane.hidden = true;
        const setOpen = open => {
          if (open && !pane.firstChild) {
            const img = el("img");
            img.src = im.file;
            img.alt = im.alt || im.caption || "";
            img.addEventListener("click", () => openLB(o.img, img));
            const cap = el("div", "inshot-cap");
            cap.textContent = (im.caption || "") + " · click to enlarge";
            pane.append(img, cap);
          }
          pane.hidden = !open;
          b.setAttribute("aria-expanded", open);
          b.textContent = open ? "▾ Hide screen" : "▸ Show screen";
        };
        setOpen(!!store.open[id]);
        b.addEventListener("click", e => {
          e.preventDefault();
          e.stopPropagation();
          const open = pane.hidden;
          setOpen(open);
          if (open) store.open[id] = true;
          else delete store.open[id];
          save();
        });
        txt.appendChild(b);
      }
      if (o.n) {
        const s = el("span", "note");
        s.textContent = o.n;
        txt.appendChild(s);
      }
      const label = li.querySelector("label");
      label._phase = phaseEl;
      label._label = o.t + (tag ? " (" + tag + ")" : "");
      label._by = endOf(o.by) || by;
      label._from = from;
      const pj = PROJ[id];
      if (pj) {
        label._by = pj.by;
        label._from = pj.from;
        const fd = el("span", "fd");
        fd.textContent = pj.days + " days · done ≈ " + fmtDate(pj.by);
        fd.dataset.focus = o.focus;
        fd.tabIndex = 0; // hover or tap for what the focus does
        txt.appendChild(fd);
      }
      const tech = o.tech && RES && RES.byId[o.tech];
      if (tech) {
        const fd = el("span", "fd");
        fd.textContent = [tech.year || "", RES.folderName[tech.f[0][0]], "cost " + tech.cost].filter(Boolean).join(" · ");
        fd.dataset.tech = tech.id;
        fd.tabIndex = 0; // hover or tap for the tech's details
        txt.appendChild(fd);
      }
      // your own note for this step, in this playthrough
      const pen = el("button", "notebtn");
      pen.type = "button";
      pen.title = "Your note for this step";
      pen.setAttribute("aria-label", "Your note for this step");
      pen.textContent = "✎";
      txt.appendChild(pen);
      const mine = el("div", "mynote");
      const showNote = () => {
        const t = (store.notes || {})[id] || "";
        mine.textContent = t;
        mine.hidden = !t;
        pen.classList.toggle("has", !!t);
      };
      showNote();
      pen.addEventListener("click", e => {
        e.preventDefault();
        e.stopPropagation();
        const open = li.querySelector(".mynote-ed");
        if (open) return open.querySelector("textarea").focus();
        const ed = el("div", "mynote-ed"),
          ta = el("textarea", "ed-text");
        ta.rows = 2;
        ta.placeholder = "Your note (saved in this playthrough)";
        ta.value = (store.notes || {})[id] || "";
        const done = el("button", null, "Done");
        done.type = "button";
        const close = () => {
          const v = ta.value.trim();
          store.notes = store.notes || {};
          if (v) store.notes[id] = v;
          else delete store.notes[id];
          save();
          ed.remove();
          showNote();
        };
        done.addEventListener("click", close);
        ta.addEventListener("keydown", ev => {
          if (ev.key === "Escape" || (ev.key === "Enter" && (ev.ctrlKey || ev.metaKey))) close();
        });
        ed.append(ta, done);
        mine.after(ed);
        mine.hidden = true;
        ta.focus();
      });
      const cb = li.querySelector("input");
      cb.checked = !!store.ticks[id];
      cb.addEventListener("change", () => {
        if (cb.checked) store.ticks[id] = true;
        else delete store.ticks[id];
        save();
        refresh(col);
      });
      li.appendChild(mine);
      if (pane) li.appendChild(pane);
      list.appendChild(li);
    });
  });
  refresh(col);
}

function refresh(col) {
  const items = [...col.querySelectorAll("label.item")];
  let done = 0,
    next = null;
  items.forEach(l => {
    const c = l.querySelector("input").checked;
    l.classList.toggle("done", c);
    if (c) done++;
    l.classList.remove("is-next");
    if (!c && !next) {
      next = l;
      l.classList.add("is-next");
    }
  });
  const nx = col.querySelector("[data-next]");
  if (next) {
    nx.innerHTML = "Next: <b></b>";
    nx.querySelector("b").textContent = (col.id === "planCol" ? "" : next.querySelector(".num").textContent + ". ") + next._label;
  } else nx.textContent = items.length ? "All done." : "";
  col.querySelector("[data-count]").textContent = done + " / " + items.length;
  col.querySelector("[data-bar]").style.width = (items.length ? done / items.length * 100 : 0) + "%";
  col.querySelectorAll(".phase").forEach(p => {
    const mine = items.filter(l => l._phase === p);
    p.classList.toggle("empty", mine.length > 0 && mine.every(l => l.querySelector("input").checked));
  });
  col._late = applyDates(col, items);
  updateTabCounts();
  if (col.id === "focusCol") updateTree();
  if (col.id === "researchCol") updateResearch();
}

/* date tracker: behind = unticked and past its "by" date; later = its phase hasn't started yet */
function applyDates(col, items) {
  if (!items.some(l => l._by)) return 0;
  const d = store.date;
  let late = 0,
    nowPhase = null;
  items.forEach(l => {
    const c = l.querySelector("input").checked;
    const behind = !!d && !c && !!l._by && d > l._by;
    l.classList.toggle("behind", behind);
    if (behind) late++;
    l.classList.toggle("later", !!d && !c && !!l._from && d <= l._from);
  });
  col.querySelectorAll(".phase").forEach(p => {
    const when = !d || !p._by ? "" : d > p._by ? "past" : (!p._from || d > p._from) ? "now" : "later";
    p.dataset.when = when;
    if (when === "now") nowPhase = p;
    p.classList.toggle("has-behind", items.some(l => l._phase === p && l.classList.contains("behind")));
  });
  const due = col.querySelector("[data-due]");
  if (due) {
    due.hidden = false;
    if (!d) due.textContent = "Set the in-game date in the top bar to see what's behind.";
    else {
      due.innerHTML = "<span></span> · <b></b>";
      due.firstChild.textContent = fmtDate(d) + (nowPhase ? ": " + nowPhase.firstChild.textContent : "");
      const b = due.querySelector("b");
      b.className = late ? "late" : "ok";
      b.textContent = late ? late + (late === 1 ? " step" : " steps") + " behind schedule" : "On schedule";
    }
  }
  return late;
}

function updateTabCounts() {
  const pct = ids => {
    let d = 0,
      t = 0;
    ids.forEach(id => {
      const c = document.getElementById(id);
      if (!c) return;
      const it = c.querySelectorAll("label.item");
      t += it.length;
      it.forEach(l => {
        if (l.querySelector("input").checked) d++;
      });
    });
    return t ? Math.round(d / t * 100) + "%" : "";
  };
  const a = document.querySelector('[data-tc="planCol"]'),
    b = document.querySelector('[data-tc="trees"]');
  if (a) a.textContent = pct(["planCol"]);
  if (b) b.textContent = pct(["focusCol", "researchCol"]);
  updateRes();
}

/* top bar segments */
function updateRes() {
  [
    ["plan", "planCol"],
    ["focus", "focusCol"],
    ["res", "researchCol"]
  ].forEach(([k, id]) => {
    const c = document.getElementById(id),
      seg = document.querySelector(`[data-res="${k}"] b`);
    const n = c.querySelectorAll("label.item").length;
    seg.textContent = n ? c.querySelectorAll("label.item input:checked").length + "/" + n : "–";
  });
  const nx = document.querySelector("#planCol label.is-next"),
    now = document.querySelector('[data-res="now"] b');
  now.textContent = nx ? (nx._phase ? nx._phase.firstChild.textContent : "–") : "Done";
  now.title = now.textContent;
  const late = document.getElementById("planCol")._late || 0,
    lateSeg = document.querySelector('[data-res="late"]');
  lateSeg.hidden = !late;
  lateSeg.querySelector("b").textContent = late;
}

/* date control */
const dateIn = document.getElementById("gameDate");

function setDate(v) {
  if (v) store.date = v;
  else delete store.date;
  save();
  dateIn.value = v || "";
  ["planCol", "focusCol"].forEach(id => refresh(document.getElementById(id)));
}
dateIn.addEventListener("change", () => setDate(dateIn.value));
document.querySelectorAll(".mo").forEach(b => b.addEventListener("click", () =>
  setDate(store.date ? shiftMonth(store.date, +b.dataset.mo) : "1936-01-01")));
