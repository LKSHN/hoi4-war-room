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

/* tabs: each menu item is a link to #<tab>, so it can open in a new browser tab; a normal click switches in place */
const tabs = [...document.querySelectorAll("nav.tabs a")];

// push: add a history entry (a click), so Back returns to the previous menu; otherwise the address is only corrected
function showTab(name, push = false) {
  if (!tabs.some(t => t.dataset.tab === name && !t.hidden)) name = "plan";
  tabs.forEach(t => t.setAttribute("aria-selected", t.dataset.tab === name));
  document.querySelectorAll("[data-panel]").forEach(p => p.hidden = p.dataset.panel !== name);
  prefs.tab = name;
  savePrefs();
  if (location.hash !== "#" + name) history[push ? "pushState" : "replaceState"](null, "", "#" + name);
  if (name === "tree") requestAnimationFrame(treeShown);
  if (name === "restree") researchShown();
  if (name === "divisions" && UNITS && G && G.divisions) renderDivisions(); // ticks on the plan change what's done
  if (name === "production" && EQUIP && G && G.production) renderProduction();
  if (name === "construction" && CONS && G && G.construction) renderConstruction();
  if (name === "mio" && MIO) renderMIO();
  if (name === "projects" && SPROJ) renderProjects();
  if (name === "doctrines" && DOC) renderDoctrines();
  if (name === "politics" && POL) renderPolitics();
}
const currentTab = () => (tabs.find(t => t.getAttribute("aria-selected") === "true") || tabs[0]).dataset.tab;
tabs.forEach(t => t.addEventListener("click", e => {
  if (e.button !== 0 || e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) return; // new tab or window: the browser's job
  e.preventDefault();
  showTab(t.dataset.tab, true);
}));
window.addEventListener("popstate", () => showTab(location.hash.slice(1) || "plan"));
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

/* several browser tabs: when another one saves ticks or the game date, take them here too. Without this, ticking in
   a stale tab would also save its old copy over the other tab's ticks. */
window.addEventListener("storage", e => {
  if (!G || !store || e.key !== storeKey) return;
  store = load(storeKey, store);
  document.querySelectorAll("label.item input").forEach(cb => cb.checked = !!store.ticks[cb.id]);
  dateIn.value = store.date || "";
  ["planCol", "focusCol", "researchCol"].forEach(id => refresh(document.getElementById(id)));
  showTab(currentTab()); // tabs drawn from the ticks (production, divisions...) redraw
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
