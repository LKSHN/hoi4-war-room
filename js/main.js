/*
 * Start-up: loads the guide, then its game data files, then renders every tab. Loaded last.
 */

function fail(msg) {
  const m = document.getElementById("loadMsg");
  m.textContent = msg;
  m.hidden = false;
}

function start() {
  if (!G || !G.meta) {
    fail("The guide file loaded but didn't register a guide: " + entry.file);
    return;
  }
  prefs.guide = G.meta.id;
  savePrefs();
  applyEdits();
  const M = G.meta;
  document.title = (M.short || M.title) + " Checklist";
  document.getElementById("gTitle").textContent = M.title;
  const sub = document.getElementById("gSub");
  sub.appendChild(document.createTextNode((M.author ? M.author + " — " : "")));
  if (M.video) {
    const a = el("a");
    a.href = M.video;
    a.target = "_blank";
    a.rel = "noopener";
    a.textContent = M.guideTitle || "Video";
    sub.appendChild(a);
  } else if (M.guideTitle) sub.appendChild(document.createTextNode(M.guideTitle));
  if (M.summary) sub.appendChild(document.createTextNode(" · " + M.summary));
  sub.appendChild(document.createTextNode(" · " + (M.patch ? "Patch " + M.patch : "Game patch not recorded, numbers may have drifted")));
  document.getElementById("gSource").textContent = M.source || "";
  document.getElementById("gDates").textContent = M.datesNote || "";

  openStore();
  projectFocuses();
  prepResearch();
  document.querySelector('[data-res="date"]').hidden = !(G.plan || []).some(g => g.by || g.steps.some(s => s.by));
  dateIn.value = store.date || "";
  build("planCol", G.plan || []);
  build("focusCol", G.focus || []);
  build("researchCol", G.research || []);
  buildBuilds();
  initGlossary();
  glossify(document.querySelector(".main"));
  buildTree();
  buildResearch();
  buildDesigns();
  buildDivisions();
  buildProduction();
  buildConstruction();
  buildMIO();
  buildProjects();
  if ((wantTab === "tree" && TREE) || (wantTab === "restree" && RES) || (wantTab === "designs" && DES) || (wantTab === "divisions" && UNITS) || (wantTab === "production" && EQUIP) || (wantTab === "construction" && CONS) || (wantTab === "mio" && MIO) || (wantTab === "projects" && SPROJ)) showTab(wantTab);

  const ul = document.getElementById("chapters");
  (G.chapters || []).forEach(c => {
    const li = el("li", null, `<a target="_blank" rel="noopener"><time></time><span></span></a>`);
    li.querySelector("a").href = vlink(c.ts);
    li.querySelector("time").textContent = c.ts;
    li.querySelector("span").textContent = c.label;
    ul.appendChild(li);
  });
  ul.parentElement.hidden = !(G.chapters && G.chapters.length && M.video);
}

const s = document.createElement("script");
s.src = versioned(entry.file);
s.onload = () => {
  // then the guide's game data files, one after another (focus tree, research tree)
  const files = G && G.meta ? [G.meta.focusTree, G.meta.researchTree, G.meta.designers, G.meta.units, G.meta.equipment, G.meta.construction, G.meta.mio, G.meta.projects].filter(Boolean) : [];
  const next = () => {
    const f = files.shift();
    if (!f) return start();
    const t = document.createElement("script");
    t.src = versioned(f);
    t.onload = next;
    t.onerror = () => {
      fail("Couldn't load the game data file " + f + ".");
      next();
    };
    document.head.appendChild(t);
  };
  next();
};
s.onerror = () => fail("Couldn't load the guide file " + entry.file + ".");
document.head.appendChild(s);
