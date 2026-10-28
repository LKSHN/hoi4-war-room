/*
 * Glossary: underlines known game terms and shows their definition in the shared tooltip.
 *
 * Glossary: underline known terms in rendered text, show a tooltip on hover, focus or tap
 */

const GLOSS = {},
  GL_VARIANTS = {};
let GL_RE = null;

function initGlossary() {
  const list = (typeof GLOSSARY !== "undefined" ? GLOSSARY : []).slice();
  (G.glossary || []).forEach(e => {
    const i = list.findIndex(x => x.id === e.id);
    if (i >= 0) list[i] = e;
    else list.push(e);
  });
  const all = [];
  list.forEach(e => {
    GLOSS[e.id] = e;
    (e.match || [e.term]).forEach(v => {
      (GL_VARIANTS[v.toLowerCase()] = GL_VARIANTS[v.toLowerCase()] || []).push({
        e,
        v
      });
      all.push(v);
    });
  });
  if (!all.length) return;
  all.sort((a, b) => b.length - a.length);
  GL_RE = new RegExp("(?<![\\w-])(" + all.map(v => v.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|") + ")(?![\\w-])", "gi");
}

function glossEntry(m) {
  const hit = (GL_VARIANTS[m.toLowerCase()] || []).find(x => !x.e.cs || x.v === m);
  return hit ? hit.e : null;
}

function glossify(root) {
  if (!GL_RE) return;
  const skip = ".gl,a,button,h2,h3,.phase,.next,.due-line,.count,.chapters";
  const w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode: n => n.parentElement.closest(skip) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT
  });
  const nodes = [];
  while (w.nextNode()) nodes.push(w.currentNode);
  nodes.forEach(n => {
    const t = n.nodeValue;
    let m, last = 0,
      frag = null;
    GL_RE.lastIndex = 0;
    while ((m = GL_RE.exec(t))) {
      const e = glossEntry(m[1]);
      if (!e) continue;
      frag = frag || document.createDocumentFragment();
      frag.append(t.slice(last, m.index));
      const s = el("span", "gl");
      s.textContent = m[1];
      s.dataset.term = e.id;
      s.tabIndex = 0;
      frag.append(s);
      last = m.index + m[1].length;
    }
    if (frag) {
      frag.append(t.slice(last));
      n.replaceWith(frag);
    }
  });
}
const tip = document.getElementById("tip");
let tipFor = null;
const fmtDef = s => esc(s).replace(/\*\*(.+?)\*\*/g, '<b class="k">$1</b>').replace(/\{\+(.+?)\}/g, '<b class="g">$1</b>').replace(/\{-(.+?)\}/g, '<b class="r">$1</b>');

function showTip(g) {
  if (g.classList.contains("fn")) {
    if (!panning) openTip(g, g._f.name, treeTipHtml(g._f));
    return;
  }
  if (g.classList.contains("rt")) {
    if (!panning) openTip(g, g._t.name, techTipHtml(g._t));
    return;
  }
  if (g.dataset.focus) {
    const f = TREE.byId[g.dataset.focus];
    if (f) openTip(g, f.name, treeTipHtml(f));
    return;
  }
  if (g.dataset.tech) {
    const t = RES && RES.byId[g.dataset.tech];
    if (t) openTip(g, t.name, techTipHtml(t));
    return;
  }
  const e = GLOSS[g.dataset.term];
  if (!e) return;
  openTip(g, e.term, '<div class="tip-b">' + fmtDef(e.def) + "</div>" + (e.patch ? '<div class="tip-f">May differ between game patches.</div>' : ""));
}

function openTip(g, head, bodyHtml) {
  if (tipFor === g && !tip.hidden) return;
  if (tipFor) tipFor.removeAttribute("aria-describedby");
  tip.innerHTML = '<div class="tip-h"></div>' + bodyHtml;
  tip.querySelector(".tip-h").textContent = head;
  tip.hidden = false;
  tipFor = g;
  g.setAttribute("aria-describedby", "tip");
  placeTip();
}

function placeTip() {
  const r = tipFor.getBoundingClientRect(),
    tw = tip.offsetWidth,
    th = tip.offsetHeight;
  const vw = document.documentElement.clientWidth,
    vh = document.documentElement.clientHeight;
  if (r.bottom < 0 || r.top > vh) {
    hideTip();
    return;
  }
  let top = r.bottom + 6;
  if (top + th > vh - 8 && r.top - th - 6 > 8) top = r.top - th - 6;
  top = Math.max(8, Math.min(top, vh - th - 8)); // tall tooltips: keep them on screen even if they cover the anchor
  tip.style.left = Math.max(8, Math.min(r.left, vw - tw - 8)) + "px";
  tip.style.top = top + "px";
}

function hideTip() {
  if (tipFor) tipFor.removeAttribute("aria-describedby");
  tip.hidden = true;
  tipFor = null;
}
document.addEventListener("mouseover", e => {
  const g = e.target.closest(".gl,.fn,.rt,.fd[data-focus],.fd[data-tech]");
  if (g) showTip(g);
});
document.addEventListener("mouseout", e => {
  const g = e.target.closest(".gl,.fn,.rt,.fd[data-focus],.fd[data-tech]");
  if (g && !g.contains(e.relatedTarget) && document.activeElement !== g) hideTip();
});
document.addEventListener("focusin", e => {
  const g = e.target.closest(".gl,.fn,.rt,.fd[data-focus],.fd[data-tech]");
  if (g) showTip(g);
  else hideTip();
});
document.addEventListener("focusout", e => {
  if (e.target.closest(".gl,.fn,.rt,.fd[data-focus],.fd[data-tech]")) hideTip();
});
document.addEventListener("click", e => {
  const g = e.target.closest(".gl,.fd[data-focus],.fd[data-tech]");
  if (g) {
    e.preventDefault();
    e.stopPropagation();
    showTip(g);
  } // don't tick the step when tapping a term or focus details
  else if (!tip.hidden) hideTip();
}, true);
document.addEventListener("keydown", e => {
  if (e.key === "Escape" && !tip.hidden) hideTip();
});
addEventListener("scroll", () => {
  if (tipFor) placeTip();
}, {
  passive: true,
  capture: true
});
addEventListener("resize", () => {
  if (tipFor) placeTip();
});
