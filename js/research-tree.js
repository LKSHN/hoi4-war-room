/*
 * Research tree tab: folders, tech cards and links like in game, with the guide's order numbered.
 *
 * Research tree: game facts from guides/trees/research-*.js, drawn per folder like in game, the guide's order numbered
 */

const RSTEP = {},
  RORDER = [],
  RNODE = {};
let resFolder = null,
  resBuilt = false,
  resViewed = false;

function prepResearch() {
  if (!RES) return;
  RES.byId = {};
  RES.techs.forEach(t => RES.byId[t.id] = t);
  RES.folderName = {};
  RES.folders.forEach(f => RES.folderName[f.id] = f.name);
  RES.owned = new Set(RES.start);
  RES.parents = {};
  RES.techs.forEach(t => (t.leads || []).forEach(c => (RES.parents[c] = RES.parents[c] || []).push(t.id)));
  (G.research || []).forEach(g => g.steps.forEach(s => {
    if (s.tech && RES.byId[s.tech] && !RSTEP[s.tech]) {
      RSTEP[s.tech] = s.id;
      RORDER.push(s.tech);
    }
  }));
}
const resDone = id => RES.owned.has(id) || !!(RSTEP[id] && store.ticks[RSTEP[id]]);
const resNext = () => RORDER.find(id => !resDone(id));

function buildResearch() {
  if (!RES) return;
  document.querySelector('[data-tab="restree"]').hidden = false;
  document.getElementById("resMeta").textContent = "Patch " + RES.patch + " · " + RES.techs.length + " techs";
  const bar = document.getElementById("resFolders");
  RES.folders.forEach(f => {
    const b = el("button", "fbtn");
    b.type = "button";
    b.setAttribute("role", "tab");
    b.dataset.folder = f.id;
    b.innerHTML = "<span></span><i></i>";
    b.firstChild.textContent = f.name;
    b.addEventListener("click", () => {
      prefs.resFolder = f.id;
      savePrefs();
      renderFolder(f.id);
    });
    bar.appendChild(b);
  });
  resBuilt = true;
  updateResearch();
}

function researchShown() {
  if (!resBuilt) return;
  const want = prefs.resFolder && RES.folders.some(f => f.id === prefs.resFolder) ? prefs.resFolder : null;
  const nx = resNext();
  if (!resViewed && nx) {
    resViewed = true;
    goNextTech(false);
    return;
  } // open on the next tech, like the focus tree
  renderFolder(resFolder || want || (nx ? RES.byId[nx].f[0][0] : RES.folders[0].id));
}
// switch to the next guide tech's folder and scroll it to the middle of the view
function goNextTech(flash = true) {
  const nx = resNext();
  if (!nx) return;
  const fid = RES.byId[nx].f[0][0];
  if (fid !== resFolder) renderFolder(fid);
  const n = RNODE[nx],
    rv = document.getElementById("resView");
  if (!n) return;
  rv.scrollTo({
    left: n.offsetLeft + n.offsetWidth / 2 - rv.clientWidth / 2,
    top: n.offsetTop + n.offsetHeight / 2 - rv.clientHeight / 2,
    behavior: flash && !matchMedia("(prefers-reduced-motion: reduce)").matches ? "smooth" : "auto"
  });
  if (flash) {
    n.classList.add("flash");
    setTimeout(() => n.classList.remove("flash"), 1200);
  }
}
document.getElementById("resGoNext").addEventListener("click", () => goNextTech());

function renderFolder(fid) {
  resFolder = fid;
  const f = RES.folders.find(x => x.id === fid),
    canvas = document.getElementById("resCanvas");
  canvas.innerHTML = "";
  Object.keys(RNODE).forEach(k => delete RNODE[k]);
  canvas.style.width = f.w + "px";
  canvas.style.height = f.h + "px";
  document.querySelectorAll("#resFolders .fbtn").forEach(b => b.setAttribute("aria-selected", b.dataset.folder === fid));
  // each card is as wide as the gap to its nearest neighbour on the right allows
  const H = 56;
  const pts = RES.techs.flatMap(t => t.f.filter(p => p[0] === fid).map(p => ({
    t,
    x: p[1],
    y: p[2]
  })));
  pts.forEach(a => {
    let gap = 140;
    pts.forEach(b => {
      if (a !== b && Math.abs(a.y - b.y) < H && b.x > a.x) gap = Math.min(gap, b.x - a.x);
    });
    a.w = Math.max(84, Math.min(128, gap - 10));
  });
  f.labels.forEach(l => {
    const s = el("span", "rlab " + l.k);
    s.textContent = l.t;
    s.style.left = l.x + "px";
    s.style.top = l.y + "px";
    canvas.appendChild(s);
  });
  // links: across when the child is to the right, down otherwise
  let d = "";
  pts.forEach(a => (a.t.leads || []).forEach(cid => {
    const b = pts.find(p => p.t.id === cid);
    if (!b) return;
    if (b.x >= a.x + a.w) {
      const mx = Math.round((a.x + a.w + b.x) / 2);
      d += `<path data-p="${a.t.id}" d="M${a.x + a.w},${a.y + H/2}H${mx}V${b.y + H/2}H${b.x}"/>`;
    } else {
      const my = Math.round((a.y + H + b.y) / 2);
      d += `<path data-p="${a.t.id}" d="M${a.x + a.w/2},${a.y + H}V${my}H${b.x + b.w/2}V${b.y}"/>`;
    }
  }));
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("class", "reslines");
  svg.setAttribute("width", f.w);
  svg.setAttribute("height", f.h);
  svg.innerHTML = d;
  canvas.appendChild(svg);
  pts.forEach(({
    t,
    x,
    y,
    w
  }) => {
    const i = RORDER.indexOf(t.id),
      n = el("div", "rt " + (i >= 0 ? "guide" : "off"));
    n.style.left = x + "px";
    n.style.top = y + "px";
    n.style.width = w + "px";
    n.style.height = H + "px";
    n.innerHTML = `<span class="rt-ico" data-ic="${t.ic}"><svg viewBox="0 0 24 24"><use href="#ic-${t.ic}"/></svg></span><span class="rt-name"></span><span class="rt-year"></span>`;
    n.querySelector(".rt-name").textContent = t.name;
    n.querySelector(".rt-year").textContent = t.year || "";
    n._t = t;
    n.dataset.id = t.id;
    if (i >= 0) {
      const b = el("span", "fn-num");
      b.textContent = i + 1;
      n.appendChild(b);
      n.tabIndex = 0;
      n.setAttribute("role", "button");
      n.setAttribute("aria-label", "Guide research " + (i + 1) + ": " + t.name + ". Press Enter to tick.");
    }
    canvas.appendChild(n);
    RNODE[t.id] = n;
  });
  updateResearch();
}

function updateResearch() {
  if (!resBuilt) return;
  const nx = resNext();
  Object.values(RNODE).forEach(n => {
    const id = n._t.id,
      ps = RES.parents[id] || [];
    n.dataset.state = RES.owned.has(id) ? "owned" : resDone(id) ? "done" : id === nx ? "next" :
      (!ps.length || ps.some(resDone)) ? "avail" : "locked";
  });
  document.querySelectorAll("#resCanvas .reslines path").forEach(p => p.classList.toggle("done", resDone(p.dataset.p)));
  // folder buttons show the guide's progress in each folder
  document.querySelectorAll("#resFolders .fbtn").forEach(b => {
    const ids = RORDER.filter(id => RES.byId[id].f.some(p => p[0] === b.dataset.folder));
    b.querySelector("i").textContent = ids.length ? ids.filter(resDone).length + "/" + ids.length : "";
    b.classList.toggle("hasnext", !!nx && RES.byId[nx].f[0][0] === b.dataset.folder);
    b.title = b.classList.contains("hasnext") ? "The next guide tech is in this folder" : "";
  });
  document.getElementById("resGoNext").disabled = !nx;
  const note = document.getElementById("resNote");
  if (nx) {
    note.innerHTML = "Next: <b></b> · <span></span>";
    note.querySelector("b").textContent = "#" + (RORDER.indexOf(nx) + 1) + " " + RES.byId[nx].name;
    note.querySelector("span").textContent = RES.folderName[RES.byId[nx].f[0][0]];
  } else note.textContent = RORDER.length ? "Every guide tech is researched." : "";
}

function techTipHtml(t) {
  const nm = id => esc(RES.byId[id] ? RES.byId[id].name : id),
    i = RORDER.indexOf(t.id);
  let h = '<div class="tip-b"><b class="k">' + (t.year ? t.year : "No start year") + "</b> · research cost " + t.cost + " · " + esc(RES.folderName[t.f[0][0]]);
  if (RES.owned.has(t.id)) h += "<br><b class='g'>Researched at the start</b> (1 Jan 1936)";
  else if (i >= 0) h += "<br>Guide research <b class='k'>#" + (i + 1) + "</b>";
  else h += "<br>Not in this guide's research order";
  if (t.fx) h += '<ul class="tip-fx">' + t.fx.map(l => "<li" + (/^\+/.test(l) ? ' class="up"' : /^-/.test(l) ? ' class="down"' : "") + ">" + esc(l) + "</li>").join("") + "</ul>";
  const line = s => '<div class="tip-line">' + s + "</div>";
  const ps = RES.parents[t.id] || [];
  if (ps.length) h += line("Needs " + ps.map(nm).join(" or "));
  if (t.leads) h += line("Leads to " + t.leads.map(nm).join(", "));
  if (t.xor) h += line("<b class='r'>Excludes</b> " + t.xor.map(nm).join(", "));
  return h + '</div><div class="tip-f">From the patch ' + esc(RES.patch) + " game files. Researching before the start year costs extra time.</div>";
}

// clicking a numbered tech ticks it in the research list, like the focus tree
function toggleTech(id) {
  const cb = RSTEP[id] && document.getElementById(RSTEP[id]);
  if (cb) cb.click();
}
const rv = document.getElementById("resView");
let rdrag = null;
rv.addEventListener("pointerdown", e => {
  if (e.pointerType !== "mouse" || e.button !== 0) return;
  rdrag = {
    x: e.clientX,
    y: e.clientY,
    sl: rv.scrollLeft,
    st: rv.scrollTop,
    moved: false,
    id: e.pointerId
  };
});
rv.addEventListener("pointermove", e => {
  if (!rdrag) return;
  const dx = e.clientX - rdrag.x,
    dy = e.clientY - rdrag.y;
  if (!rdrag.moved && Math.abs(dx) + Math.abs(dy) > 5) {
    rdrag.moved = panning = true;
    rv.classList.add("panning");
    try {
      rv.setPointerCapture(rdrag.id);
    } catch (_) {}
    hideTip();
  }
  if (rdrag.moved) {
    rv.scrollLeft = rdrag.sl - dx;
    rv.scrollTop = rdrag.st - dy;
  }
});
const endResDrag = () => {
  if (!rdrag) return;
  if (rdrag.moved) setTimeout(() => panning = false); // the click that ends a drag doesn't tick a tech
  else panning = false;
  rdrag = null;
  rv.classList.remove("panning");
};
rv.addEventListener("pointerup", endResDrag);
rv.addEventListener("pointercancel", endResDrag);
document.getElementById("resCanvas").addEventListener("click", e => {
  if (panning) return;
  const n = e.target.closest(".rt.guide");
  if (n) toggleTech(n.dataset.id);
});
document.getElementById("resCanvas").addEventListener("keydown", e => {
  const n = e.target.closest(".rt.guide");
  if (n && (e.key === "Enter" || e.key === " ")) {
    e.preventDefault();
    toggleTech(n.dataset.id);
  }
});
