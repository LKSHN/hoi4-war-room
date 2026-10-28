/*
 * Focus tree tab: the full game tree with the guide's path numbered, pan and zoom.
 *
 * Focus tree: game facts from guides/trees/*.js, the guide's path numbered on top
 */

const PROJ = {},
  FNODE = {},
  STEP_OF = {},
  ORDER = [],
  LINES = [];
const UX = 64,
  UY = 124,
  NW = 120,
  NB = 80; // grid unit in px, node width, node height to the bottom of the name plate
const isoDay = ms => new Date(ms).toISOString().slice(0, 10);
let treeBuilt = false,
  treeViewed = false,
  panning = false;
const view = {
  x: 0,
  y: 0,
  s: .85
};

/* guide focuses back to back from 1 Jan 1936: each one's start and finish date */
function projectFocuses() {
  if (!TREE) return;
  const T = TREE.byId = {};
  TREE.focuses.forEach(f => T[f.id] = f);
  TREE.hasFx = TREE.focuses.some(f => f.fx);
  let day = Date.UTC(1936, 0, 1);
  (G.focus || []).forEach(g => g.steps.forEach(s => {
    const f = s.focus && T[s.focus];
    if (!f) return;
    STEP_OF[f.id] = s.id;
    ORDER.push(f.id);
    const from = isoDay(day);
    day += f.days * 864e5;
    PROJ[s.id] = {
      from,
      by: isoDay(day),
      days: f.days
    };
  }));
  TREE.end = isoDay(day);
}

const doneF = id => !!(STEP_OF[id] && store.ticks[STEP_OF[id]]);
const EX = {}; // focus id -> {by: guide focus that excludes it} or {via: ruled-out focus it can only be reached through}

/* what the guide's choices rule out: mutually exclusive with a guide focus, then anything only reachable through those */
function computeExcluded() {
  const T = TREE.byId;
  TREE.focuses.forEach(f => {
    if (STEP_OF[f.id]) return;
    const g = (f.mx || []).find(m => STEP_OF[m]) || ORDER.find(id => (T[id].mx || []).includes(f.id));
    if (g) EX[f.id] = {
      by: g
    };
  });
  let changed = true;
  while (changed) {
    changed = false;
    TREE.focuses.forEach(f => {
      if (EX[f.id] || STEP_OF[f.id] || !f.pre) return;
      const dead = f.pre.find(grp => grp.every(p => EX[p]));
      if (dead) {
        EX[f.id] = {
          via: dead[0]
        };
        changed = true;
      }
    });
  }
}

function buildTree() {
  if (!TREE) return;
  document.querySelector('[data-tab="tree"]').hidden = false;
  const canvas = document.getElementById("treeCanvas"),
    svg = document.getElementById("treeLines");
  computeExcluded();
  let W = 0,
    H = 0;
  TREE.focuses.forEach(f => {
    const i = ORDER.indexOf(f.id),
      n = el("div", "fn " + (i >= 0 ? "guide" : "off") + (EX[f.id] ? " ex" : ""));
    n._cx = f.x * UX + UX;
    n._top = f.y * UY + 24;
    n._f = f;
    n.style.left = (n._cx - NW / 2) + "px";
    n.style.top = n._top + "px";
    n.innerHTML = '<span class="fn-ico"></span><span class="fn-name"></span><span class="fn-days"></span>';
    const ic = f.ic || "gear",
      ico = n.querySelector(".fn-ico");
    ico.dataset.ic = ic;
    ico.innerHTML = `<svg viewBox="0 0 24 24"><use href="#ic-${ic}"/></svg>`;
    n.querySelector(".fn-name").textContent = f.name;
    n.querySelector(".fn-days").textContent = f.days + "d";
    if (i >= 0) {
      const b = el("span", "fn-num");
      b.textContent = i + 1;
      n.appendChild(b);
      n.tabIndex = 0;
      n.setAttribute("role", "button");
      n.setAttribute("aria-label", "Guide focus " + (i + 1) + ": " + f.name + ", " + f.days + " days. Press Enter to tick.");
    }
    n.dataset.id = f.id;
    canvas.appendChild(n);
    FNODE[f.id] = n;
    W = Math.max(W, n._cx + NW / 2 + 24);
    H = Math.max(H, n._top + UY);
  });
  // lines: down from the parent, across just above the child, then down into it. Dotted = any one of several.
  let d = "";
  TREE.focuses.forEach(f => (f.pre || []).forEach(grp => grp.forEach(p => {
    const a = FNODE[p],
      b = FNODE[f.id];
    if (!a) return;
    const my = b._top - 14;
    d += `<path class="ln${grp.length > 1 ? " or" : ""}${STEP_OF[p] && STEP_OF[f.id] ? " g" : ""}${EX[p] || EX[f.id] ? " ex" : ""}" d="M${a._cx},${a._top + NB}V${my}H${b._cx}V${b._top + 2}"/>`;
    LINES.push(p);
  })));
  svg.setAttribute("width", W);
  svg.setAttribute("height", H);
  svg.innerHTML = d;
  [...svg.children].forEach((path, i) => path._p = LINES[i]);
  // mutually exclusive neighbours on the same row get a red marker between them (far-apart pairs only show in the tooltip)
  const seen = new Set();
  TREE.focuses.forEach(f => (f.mx || []).forEach(m => {
    const k = [f.id, m].sort().join("|"),
      a = FNODE[f.id],
      b = FNODE[m];
    if (seen.has(k) || !b || a._top !== b._top || Math.abs(a._cx - b._cx) > 6 * UX) return;
    seen.add(k);
    const x = el("span", "fx" + (EX[f.id] || EX[m] ? " ex" : ""), "!");
    x.style.left = ((a._cx + b._cx) / 2 - 9) + "px";
    x.style.top = (a._top + 54) + "px";
    canvas.appendChild(x);
  }));
  canvas.style.width = W + "px";
  canvas.style.height = H + "px";
  canvas._w = W;
  canvas._h = H;
  document.getElementById("treeMeta").textContent = "Patch " + TREE.patch + " · " + TREE.focuses.length + " focuses · " + Object.keys(EX).length + " ruled out by the guide";
  treeBuilt = true;
  updateTree();
}

function updateTree() {
  if (!treeBuilt) return;
  const nextId = ORDER.find(id => !doneF(id));
  TREE.focuses.forEach(f => {
    const n = FNODE[f.id],
      guide = !!STEP_OF[f.id];
    let st = EX[f.id] ? "excluded" : doneF(f.id) ? "done" : f.id === nextId ? "next" : "avail";
    if (st === "avail") {
      // a guide focus only waits on prerequisites the guide itself takes (the rest are assumed bypassed)
      const unmet = (f.pre || []).some(grp => !grp.some(doneF) && (!guide || grp.some(p => STEP_OF[p])));
      if (unmet || (f.mx || []).some(doneF)) st = "locked";
    }
    n.dataset.state = st;
  });
  document.querySelectorAll("#treeLines path").forEach(p => p.classList.toggle("done", doneF(p._p)));
  const note = document.getElementById("treeNote");
  if (nextId) {
    const pj = PROJ[STEP_OF[nextId]];
    note.innerHTML = "Next: <b></b> · done ≈ <span></span> back to back · whole guide ≈ <span></span>";
    note.querySelector("b").textContent = "#" + (ORDER.indexOf(nextId) + 1) + " " + TREE.byId[nextId].name;
    const sp = note.querySelectorAll("span");
    sp[0].textContent = fmtDate(pj.by);
    sp[1].textContent = fmtDate(TREE.end);
  } else note.textContent = "Every guide focus is done.";
}

function treeTipHtml(f) {
  const T = TREE.byId,
    i = ORDER.indexOf(f.id),
    nm = id => esc(T[id] ? T[id].name : id);
  const grp = g => g.map(nm).join(" or ");
  let h = '<div class="tip-b"><b class="k">' + f.days + " days</b> (" + f.days + " political power)";
  if (i >= 0) {
    const pj = PROJ[STEP_OF[f.id]];
    h += "<br>Guide focus <b class='k'>#" + (i + 1) + "</b> · done ≈ " + fmtDate(pj.by) + " back to back";
  } else if (EX[f.id]) {
    const x = EX[f.id];
    h += "<br><b class='r'>Ruled out by the guide</b>: " + (x.by ? "it excludes " + nm(x.by) + " (guide focus #" + (ORDER.indexOf(x.by) + 1) + ")" : "only reachable through " + nm(x.via) + ", which is ruled out");
  } else h += "<br>Not taken in this guide, still possible";
  const cap = s => s.charAt(0).toUpperCase() + s.slice(1);
  if (f.req) h += '<div class="tip-sec">Requires</div><ul class="tip-req">' + f.req.map(r => "<li>" + esc(cap(r)) + "</li>").join("") + "</ul>";
  if (f.fx) {
    // effects, summarised from the game files; signed numbers get coloured like the game (tension is the exception)
    h += '<ul class="tip-fx">' + f.fx.map(l => {
      const ai = l.indexOf(" (AI: "),
        main = ai > 0 ? l.slice(0, ai) : l,
        odds = ai > 0 ? l.slice(ai + 2, -1) : "";
      const m = /^([+-])/.exec(l),
        bad = /tension/i.test(l),
        alt = /^(Instead, if|In other cases)/.test(l);
      const cls = alt ? "alt" : m ? ((m[1] === "+") !== bad ? "up" : "down") : "";
      return "<li" + (cls ? ' class="' + cls + '"' : "") + ">" + esc(main) + (odds ? ' <span class="tip-ai">' + esc(odds) + "</span>" : "") + "</li>";
    }).join("") + "</ul>";
  } else if (!TREE.hasFx) {
    h += '<div class="tip-none">Effects didn\'t load: your browser has an old copy of the focus data. Reload with Ctrl+F5.</div>';
  } else h += '<div class="tip-none">No direct effect listed: it runs a scripted effect or event.</div>';
  // one block per line, so nothing runs together after the lists above
  const line = s => '<div class="tip-line">' + s + "</div>";
  if (f.pre) h += line("Needs " + f.pre.map(g => f.pre.length > 1 && g.length > 1 ? "(" + grp(g) + ")" : grp(g)).join(" and "));
  const mx = (f.mx || []).filter(m => !EX[f.id] || m !== EX[f.id].by); // the ruled-out line already names it
  if (mx.length) h += line("<b class='r'>Excludes</b> " + mx.map(nm).join(", "));
  if (f.byp) h += line("<b class='k'>Bypassed if</b> " + esc(f.byp));
  else if (f.bypass) h += line("Can be bypassed");
  if (i >= 0) {
    const skipped = (f.pre || []).filter(g => !g.some(p => {
      const j = ORDER.indexOf(p);
      return j >= 0 && j < i;
    }));
    if (skipped.length) h += line("<b class='r'>The guide never takes</b> " + skipped.map(grp).join(" and ") + ". Probably bypassed, or the tree changed since the video.");
  }
  return h + '</div><div class="tip-f">From the patch ' + esc(TREE.patch) + " game files. Durations change between patches.</div>";
}

/* pan and zoom */
const tv = document.getElementById("treeView"),
  tc = document.getElementById("treeCanvas");

function applyView() {
  tc.style.transform = `translate(${view.x}px,${view.y}px) scale(${view.s})`;
  if (tipFor && tipFor.classList.contains("fn")) placeTip();
}

function zoomAt(f, cx, cy) {
  const ns = Math.min(1.6, Math.max(.12, view.s * f));
  view.x = cx - (cx - view.x) * ns / view.s;
  view.y = cy - (cy - view.y) * ns / view.s;
  view.s = ns;
  applyView();
}

function centerOn(id, s) {
  const n = FNODE[id];
  if (!n) return;
  if (s) view.s = s;
  view.x = tv.clientWidth / 2 - n._cx * view.s;
  view.y = tv.clientHeight / 2.4 - (n._top + NB / 2) * view.s;
  applyView();
}

function fitTree() {
  // fit whatever is shown: every focus, or only what the guide leaves possible
  const ns = Object.values(FNODE).filter(n => !prefs.treeHideEx || !EX[n._f.id]);
  const x0 = Math.min(...ns.map(n => n._cx)) - NW / 2 - 24,
    x1 = Math.max(...ns.map(n => n._cx)) + NW / 2 + 24;
  const y0 = Math.min(...ns.map(n => n._top)) - 24,
    y1 = Math.max(...ns.map(n => n._top)) + NB + 40;
  view.s = Math.min(1.2, tv.clientWidth / (x1 - x0), tv.clientHeight / (y1 - y0));
  view.x = (tv.clientWidth - (x1 - x0) * view.s) / 2 - x0 * view.s;
  view.y = (tv.clientHeight - (y1 - y0) * view.s) / 2 - y0 * view.s;
  applyView();
}
const allBtn = document.getElementById("treeAll");

function applyTreeMode() {
  tv.classList.toggle("hide-ex", !!prefs.treeHideEx);
  allBtn.setAttribute("aria-pressed", !prefs.treeHideEx);
  allBtn.title = prefs.treeHideEx ? "Show focuses the guide rules out" : "Hide focuses the guide rules out";
}
allBtn.addEventListener("click", () => {
  prefs.treeHideEx = !prefs.treeHideEx;
  savePrefs();
  applyTreeMode();
  hideTip();
});
applyTreeMode();

function treeShown() {
  if (!treeBuilt || treeViewed || !tv.clientWidth) return;
  treeViewed = true;
  centerOn(ORDER.find(id => !doneF(id)) || ORDER[ORDER.length - 1], .85);
}

function toggleFocus(id) {
  const cb = STEP_OF[id] && document.getElementById(STEP_OF[id]);
  if (cb) cb.click();
}
tv.addEventListener("wheel", e => {
  e.preventDefault();
  const r = tv.getBoundingClientRect();
  zoomAt(Math.exp(-e.deltaY * .0015), e.clientX - r.left, e.clientY - r.top);
}, {
  passive: false
});
let drag = null;
tv.addEventListener("pointerdown", e => {
  if (e.button !== 0) return;
  drag = {
    x: e.clientX,
    y: e.clientY,
    vx: view.x,
    vy: view.y,
    target: e.target,
    moved: false
  };
  tv.setPointerCapture(e.pointerId);
});
tv.addEventListener("pointermove", e => {
  if (!drag) return;
  const dx = e.clientX - drag.x,
    dy = e.clientY - drag.y;
  if (!drag.moved && Math.abs(dx) + Math.abs(dy) > 5) {
    drag.moved = panning = true;
    tv.classList.add("panning");
    hideTip();
  }
  if (drag.moved) {
    view.x = drag.vx + dx;
    view.y = drag.vy + dy;
    applyView();
  }
});
const endDrag = e => {
  if (!drag) return;
  if (!drag.moved && e.type === "pointerup") {
    const n = drag.target.closest(".fn.guide");
    if (n) toggleFocus(n.dataset.id);
  }
  drag = null;
  panning = false;
  tv.classList.remove("panning");
};
tv.addEventListener("pointerup", endDrag);
tv.addEventListener("pointercancel", endDrag);
tv.addEventListener("keydown", e => {
  const n = e.target.closest(".fn.guide");
  if (n && (e.key === "Enter" || e.key === " ")) {
    e.preventDefault();
    toggleFocus(n.dataset.id);
  }
});
document.querySelectorAll("[data-zoom]").forEach(b => b.addEventListener("click", () => zoomAt(+b.dataset.zoom > 0 ? 1.25 : .8, tv.clientWidth / 2, tv.clientHeight / 2)));
document.getElementById("treeFit").addEventListener("click", fitTree);
document.getElementById("treeNext").addEventListener("click", () => centerOn(ORDER.find(id => !doneF(id)) || ORDER[0], Math.max(view.s, .85)));
