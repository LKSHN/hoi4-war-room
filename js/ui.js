/*
 * Page chrome: lightbox, tab switching, hide-completed, reset and the guide picker.
 *
 * Lightbox
 */

const lb = document.getElementById("lb"),
  lbImg = document.getElementById("lbImg"),
  lbCap = document.getElementById("lbCap");
let lbReturn = null;

function openLB(key, from) {
  const im = G.images[key] || {};
  lbImg.src = im.file;
  lbImg.alt = im.alt || im.caption || "";
  lbCap.textContent = im.caption || "";
  lbReturn = from || null;
  lb.hidden = false;
  document.getElementById("lbClose").focus();
}

function closeLB() {
  lb.hidden = true;
  lbImg.removeAttribute("src");
  if (lbReturn) lbReturn.focus();
}
document.getElementById("lbClose").addEventListener("click", closeLB);
lb.addEventListener("click", e => {
  if (e.target === lb || e.target === lbImg) closeLB();
});
document.addEventListener("keydown", e => {
  if (e.key === "Escape" && !lb.hidden) closeLB();
});

/* tabs */
const tabs = [...document.querySelectorAll("nav.tabs button")];

function showTab(name) {
  if (!tabs.some(t => t.dataset.tab === name && !t.hidden)) name = "plan";
  tabs.forEach(t => t.setAttribute("aria-selected", t.dataset.tab === name));
  document.querySelectorAll("[data-panel]").forEach(p => p.hidden = p.dataset.panel !== name);
  prefs.tab = name;
  savePrefs();
  if (name === "tree") requestAnimationFrame(treeShown);
  if (name === "restree") researchShown();
  if (name === "divisions" && UNITS && G && G.divisions) renderDivisions(); // ticks on the plan change what's done
  if (name === "production" && EQUIP && G && G.production) renderProduction();
  if (name === "construction" && CONS && G && G.construction) renderConstruction();
  if (name === "mio" && MIO) renderMIO();
  if (name === "projects" && SPROJ) renderProjects();
}
tabs.forEach(t => t.addEventListener("click", () => showTab(t.dataset.tab)));
const wantTab = (location.hash || "").slice(1) || prefs.tab || "plan"; // the tree tab only exists once the guide has loaded
showTab(wantTab);

/* hide done */
const hideBtn = document.getElementById("hideDone");
const applyHide = () => {
  document.body.classList.toggle("hide-done", !!prefs.hide);
  hideBtn.setAttribute("aria-pressed", !!prefs.hide);
};
applyHide();
hideBtn.addEventListener("click", () => {
  prefs.hide = !prefs.hide;
  savePrefs();
  applyHide();
});

/* reset with in-page confirm (current guide only) */
const resetBtn = document.getElementById("resetBtn");
let armed = null;
resetBtn.addEventListener("click", () => {
  if (!G) return;
  if (!armed) {
    resetBtn.classList.add("armed");
    resetBtn.textContent = "Click again to reset";
    armed = setTimeout(() => {
      armed = null;
      resetBtn.classList.remove("armed");
      resetBtn.textContent = "Reset all";
    }, 3000);
    return;
  }
  clearTimeout(armed);
  armed = null;
  store.ticks = {};
  delete store.date;
  save();
  dateIn.value = "";
  document.querySelectorAll("label.item input").forEach(cb => cb.checked = false);
  ["planCol", "focusCol", "researchCol"].forEach(id => refresh(document.getElementById(id)));
  resetBtn.classList.remove("armed");
  resetBtn.textContent = "Reset all";
});

/* guide picker + loading */
const pick = document.getElementById("guidePick");
const wanted = new URLSearchParams(location.search).get("guide") || prefs.guide;
const entry = GUIDES.find(g => g.id === wanted) || GUIDES[0];
GUIDES.forEach(g => {
  const o = el("option");
  o.value = g.id;
  o.textContent = g.title;
  o.selected = g === entry;
  pick.appendChild(o);
});
pick.addEventListener("change", () => {
  prefs.guide = pick.value;
  savePrefs();
  const u = new URL(location.href);
  u.searchParams.set("guide", pick.value);
  location.href = u.href;
});
