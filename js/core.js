/*
 * Core: data registration, preferences, storage and small helpers shared by every tab.
 *
 * Guide files call registerGuide() when their <script> loads. Script tags (not fetch) keep file:// working.
 */

const BUILD = "2026-10-28.31"; // also the ?v= on every css/js/guides tag in index.html: tools/bump_build.py sets them all
const versioned = u => u + (u.includes("?") ? "&" : "?") + "v=" + BUILD;
let G = null,
  TREE = null;

function registerGuide(g) {
  G = g;
}

function registerTree(t) {
  TREE = t;
}
let RES = null,
  DES = null;

function registerResearch(r) {
  RES = r;
}

function registerDesigners(d) {
  DES = d;
}
let SPROJ = null,
  DOC = null,
  POL = null;

function registerPolitics(p) {
  POL = p;
}

function registerDoctrines(d) {
  DOC = d;
}

function registerProjects(p) {
  SPROJ = p;
}
let MIO = null;

function registerMIO(m) {
  MIO = m;
}
let CONS = null;

function registerConstruction(c) {
  CONS = c;
}
let EQUIP = null;

function registerEquipment(e) {
  EQUIP = e;
}
let UNITS = null;

function registerUnits(u) {
  UNITS = u;
}

const TAGS = {
  up: "UP",
  sp: "Special project"
};
const PREFS_KEY = "hoi4-tool-prefs";
const OLD_PREFIX = "hoi4-ger-checklist-v1"; // single-page version, before guides were split out
const load = (k, d) => {
  try {
    return JSON.parse(localStorage.getItem(k) || "null") || d;
  } catch (e) {
    return d;
  }
};
const put = (k, v) => {
  try {
    localStorage.setItem(k, JSON.stringify(v));
  } catch (e) {}
};

let prefs = load(PREFS_KEY, null);
if (!prefs) {
  // first run of this version: carry over tab and hide-done from the old keys
  prefs = {};
  try {
    prefs.tab = localStorage.getItem(OLD_PREFIX + "-tab") || undefined;
    prefs.hide = localStorage.getItem(OLD_PREFIX + "-hide") === "1";
  } catch (e) {}
  put(PREFS_KEY, prefs);
}
const savePrefs = () => put(PREFS_KEY, prefs);

const secs = ts => ts.split(":").map(Number).reduce((a, b) => a * 60 + b, 0);
const vlink = ts => {
  const u = new URL(G.meta.video);
  u.searchParams.set("t", secs(ts) + "s");
  return u.href;
};
const esc = s => String(s).replace(/[&<>"']/g, c => ({
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
} [c]));
const rich = s => esc(s).replace(/\*\*(.+?)\*\*/g, "<b>$1</b>");
const el = (tag, cls, html) => {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (html != null) e.innerHTML = html;
  return e;
};

/* in-game dates are "YYYY-MM-DD" strings, so they compare as text. "YYYY-MM" means the end of that month. */
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const endOf = s => !s ? null : s.length === 7 ? s + "-31" : s;
const fmtDate = s => {
  const [y, m, d] = s.split("-").map(Number);
  return (s.length > 7 ? d + " " : "") + MONTHS[m - 1] + " " + y;
};

function shiftMonth(s, n) {
  const [y, m, d] = s.split("-").map(Number), t = new Date(Date.UTC(y, m - 1 + n, 1));
  const last = new Date(Date.UTC(t.getUTCFullYear(), t.getUTCMonth() + 1, 0)).getUTCDate();
  t.setUTCDate(Math.min(d, last));
  return t.toISOString().slice(0, 10);
}
