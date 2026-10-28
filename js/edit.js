/*
 * Edit mode: the editable layer saved in the browser on top of the guide file, export and import.
 *
 * Editable guide: your edits are a full copy of the editable sections, saved per guide on top of the original file.
 * "base" fingerprints the original, so we can tell you when the guide file changed under your edits.
 */

const EDITABLE = ["plan", "focus", "research", "builds", "designs", "divisions", "production", "construction", "mios", "projects", "doctrines", "politics"];
let G0 = null,
  EDITING = false,
  editKey = "",
  saveTimer = null;
const hashStr = s => {
  let h = 5381;
  for (let i = 0; i < s.length; i++) h = (h * 33 ^ s.charCodeAt(i)) >>> 0;
  return h.toString(36);
};
const sections = g => {
  const o = {};
  EDITABLE.forEach(k => {
    if (g[k]) o[k] = g[k];
  });
  return o;
};
const baseHash = () => hashStr(JSON.stringify(sections(G0)));
const uid = p => p + "u-" + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);

function applyEdits() {
  G0 = JSON.parse(JSON.stringify(G));
  editKey = "hoi4-tool-edits:" + G.meta.id;
  const ed = load(editKey, null),
    note = document.getElementById("editNote");
  if (!ed || !ed.data) return;
  EDITABLE.forEach(k => {
    if (!ed.data[k]) return;
    // parts the guide file gained after these edits were saved (production.naval, say) come from the file
    const was = G[k];
    G[k] = ed.data[k];
    if (was && typeof was === "object" && !Array.isArray(was) && typeof G[k] === "object" && !Array.isArray(G[k]))
      Object.keys(was).forEach(p => {
        if (!(p in G[k])) G[k][p] = was[p];
      });
  });
  note.hidden = false;
  note.innerHTML = "You're viewing <b>your edited version</b> of this guide" +
    (ed.base !== baseHash() ? ". <span class='warn'>The original guide has been updated since you edited it.</span> Reset to original to get the new version (export yours first if you want to keep it)." : ".") +
    " <button type='button' class='ed-link'>Edit</button>";
  note.querySelector("button").addEventListener("click", enterEdit);
}

function saveEdits(now) {
  clearTimeout(saveTimer);
  const go = () => put(editKey, {
    base: baseHash(),
    saved: new Date().toISOString(),
    data: sections(G)
  });
  if (now) go();
  else saveTimer = setTimeout(go, 300);
}

/* small edit controls */
function edText(value, placeholder, onSet, cls) {
  const s = el("span", "ed-text" + (cls ? " " + cls : ""));
  s.contentEditable = "true";
  s.spellcheck = true;
  s.textContent = value || "";
  s.dataset.ph = placeholder;
  s.setAttribute("role", "textbox");
  s.setAttribute("aria-label", placeholder);
  s.addEventListener("input", () => onSet(s.textContent.replace(/\s+/g, " ").trim()));
  s.addEventListener("keydown", e => {
    if (e.key === "Enter") {
      e.preventDefault();
      s.blur();
    }
  });
  s.addEventListener("paste", e => {
    e.preventDefault();
    document.execCommand("insertText", false, e.clipboardData.getData("text/plain"));
  });
  return s;
}

function edInput(value, placeholder, onSet, cls, width) {
  const i = el("input", "ed-input" + (cls ? " " + cls : ""));
  i.type = "text";
  i.value = value || "";
  i.placeholder = placeholder;
  i.setAttribute("aria-label", placeholder);
  if (width) i.style.width = width;
  i.addEventListener("input", () => onSet(i.value.trim(), i));
  return i;
}

function edBtn(label, title, fn, cls) {
  const b = el("button", "ed-btn" + (cls ? " " + cls : ""));
  b.type = "button";
  b.textContent = label;
  b.title = title;
  b.setAttribute("aria-label", title);
  b.addEventListener("click", fn);
  return b;
}
// destructive buttons need a second click within 3 s
function confirmTwice(b, fn) {
  let t = null;
  const label = b.textContent;
  b.addEventListener("click", () => {
    if (!t) {
      b.classList.add("armed");
      b.textContent = "Sure?";
      t = setTimeout(() => {
        t = null;
        b.classList.remove("armed");
        b.textContent = label;
      }, 3000);
      return;
    }
    clearTimeout(t);
    t = null;
    fn();
  });
  return b;
}

/* edit mode for a list of groups (plan phases, focus groups, research) */
function editList(colId, groups, kind) {
  const col = document.getElementById(colId),
    list = col.querySelector("[data-list]");
  list.innerHTML = "";
  const redo = () => {
    saveEdits();
    editList(colId, groups, kind);
  };
  const move = (gi, si, dir) => {
    const g = groups[gi],
      s = g.steps[si],
      to = si + dir;
    if (to >= 0 && to < g.steps.length) {
      g.steps.splice(si, 1);
      g.steps.splice(to, 0, s);
    } else if (groups[gi + dir]) {
      g.steps.splice(si, 1);
      dir < 0 ? groups[gi - 1].steps.push(s) : groups[gi + 1].steps.unshift(s);
    }
    redo();
  };
  let n = 0;
  groups.forEach((g, gi) => {
    if (g.title !== null || kind !== "research") {
      const head = el("li", "ed-phase");
      head.appendChild(edText(g.title, "Phase name", v => {
        g.title = v;
        saveEdits();
      }, "ed-title"));
      if (kind === "plan") {
        head.appendChild(edInput(g.ts, "▶ mm:ss", v => {
          if (v) g.ts = v;
          else delete g.ts;
          saveEdits();
        }, "ed-small", "6.5em"));
        const by = edInput(g.by, "done by YYYY-MM", (v, i) => {
          const ok = !v || /^\d{4}-\d{2}(-\d{2})?$/.test(v);
          i.classList.toggle("bad", !ok);
          if (!ok) return;
          if (v) g.by = v;
          else delete g.by;
          saveEdits();
        }, "ed-small", "9.5em");
        const ap = el("label", "ed-check", "<input type='checkbox'> ≈ estimate");
        ap.querySelector("input").checked = !!g.approx;
        ap.querySelector("input").addEventListener("change", e => {
          if (e.target.checked) g.approx = true;
          else delete g.approx;
          saveEdits();
        });
        head.append(by, ap);
      }
      const tools = el("span", "ed-tools");
      tools.append(
        edBtn("↑", "Move phase up", () => {
          if (gi > 0) {
            groups.splice(gi - 1, 0, groups.splice(gi, 1)[0]);
            redo();
          }
        }),
        edBtn("↓", "Move phase down", () => {
          if (gi < groups.length - 1) {
            groups.splice(gi + 1, 0, groups.splice(gi, 1)[0]);
            redo();
          }
        }),
        confirmTwice(edBtn("✕", "Delete phase and its steps", () => {}, "del"), () => {
          groups.splice(gi, 1);
          redo();
        }));
      head.appendChild(tools);
      list.appendChild(head);
    }
    g.steps.forEach((s, si) => {
      n++;
      const row = el("li", "ed-row");
      row.dataset.sid = s.id;
      row.appendChild(el("span", "num", String(n)));
      const main = el("div", "ed-main");
      if (kind === "research" && RES && !s.project) {
        // pick the tech from the game's research tree by name, like focuses
        const inp = edInput(s.t, "Technology", (v, i) => {
          const t = RES.techs.find(x => x.name.toLowerCase() === v.toLowerCase());
          s.t = t ? t.name : v;
          if (t) s.tech = t.id;
          else delete s.tech;
          i.classList.toggle("bad", !t);
          saveEdits();
        }, "ed-focus");
        inp.setAttribute("list", "edTechList");
        if (!s.tech) inp.classList.add("bad");
        main.appendChild(inp);
      } else if (kind === "focus" && TREE) {
        // pick the focus from the game's tree by name; free text is kept but loses the tree link
        const inp = edInput(s.t, "Focus name", (v, i) => {
          const f = TREE.focuses.find(x => x.name.toLowerCase() === v.toLowerCase());
          s.t = f ? f.name : v;
          if (f) s.focus = f.id;
          else delete s.focus;
          i.classList.toggle("bad", !f);
          saveEdits();
        }, "ed-focus");
        inp.setAttribute("list", "edFocusList");
        if (!s.focus) inp.classList.add("bad");
        main.appendChild(inp);
      } else {
        main.appendChild(edText(s.t, kind === "research" ? "Technology" : "What to do", v => {
          s.t = v;
          saveEdits();
        }));
      }
      main.appendChild(edText(s.n, "Note (optional)", v => {
        if (v) s.n = v;
        else delete s.n;
        saveEdits();
      }, "ed-note"));
      row.appendChild(main);
      const extra = el("span", "ed-extra");
      if (kind === "research") {
        const sel = el("select", "ed-select", "<option value=''>—</option><option value='up'>UP</option><option value='sp'>Special project</option>");
        sel.value = s.tag || "";
        sel.setAttribute("aria-label", "Tag");
        sel.addEventListener("change", () => {
          if (sel.value) s.tag = sel.value;
          else delete s.tag;
          saveEdits();
        });
        extra.appendChild(sel);
      }
      if (kind === "plan" && G.images) {
        const sel = el("select", "ed-select");
        sel.setAttribute("aria-label", "Screenshot");
        sel.appendChild(el("option", null, "No screenshot")).value = "";
        Object.entries(G.images).forEach(([k, im]) => {
          const o = el("option");
          o.value = k;
          o.textContent = im.caption || k;
          sel.appendChild(o);
        });
        sel.value = s.img || "";
        sel.addEventListener("change", () => {
          if (sel.value) s.img = sel.value;
          else delete s.img;
          saveEdits();
        });
        extra.appendChild(sel);
      }
      extra.append(
        edBtn("↑", "Move up", () => move(gi, si, -1)),
        edBtn("↓", "Move down", () => move(gi, si, 1)),
        confirmTwice(edBtn("✕", "Delete", () => {}, "del"), () => {
          g.steps.splice(si, 1);
          redo();
        }));
      row.appendChild(extra);
      list.appendChild(row);
    });
    const add = el("li", "ed-add");
    add.appendChild(edBtn("+ Add " + (kind === "focus" ? "focus" : kind === "research" ? "tech" : "step"), "Add at the end of this phase", () => {
      const id = uid(kind === "research" ? "res." : kind + ".");
      g.steps.push({
        id,
        t: ""
      });
      redo();
      const f = list.querySelector(`[data-sid="${id}"] .ed-text, [data-sid="${id}"] .ed-input`);
      if (f) f.focus();
    }));
    list.appendChild(add);
  });
  if (kind !== "research") {
    const addG = el("li", "ed-add ed-add-phase");
    addG.appendChild(edBtn("+ Add phase", "Add a new phase at the end", () => {
      groups.push({
        id: uid(kind + "-"),
        title: "New phase",
        steps: []
      });
      redo();
    }));
    list.appendChild(addG);
  }
}

/* edit mode for the Builds tab: text in place, **bold** kept */
function toMarkup(node) {
  const html = node.innerHTML.replace(/<(b|strong)>([\s\S]*?)<\/\1>/gi, "**$2**").replace(/<br\s*\/?>/gi, " ").replace(/<[^>]+>/g, "");
  const ta = document.createElement("textarea");
  ta.innerHTML = html;
  return ta.value.replace(/\s+/g, " ").trim();
}

function editBuilds() {
  buildBuilds();
  document.querySelectorAll("#builds *").forEach(e => {
    if (!e._bind) return;
    const [obj, key, isRich] = e._bind;
    e.contentEditable = "true";
    e.classList.add("ed-inplace");
    e.addEventListener("input", () => {
      obj[key] = isRich ? toMarkup(e) : e.textContent.replace(/\s+/g, " ").trim();
      saveEdits();
    });
    e.addEventListener("keydown", ev => {
      if (ev.key === "Enter") {
        ev.preventDefault();
        e.blur();
      }
    });
  });
}

function enterEdit() {
  if (EDITING) return;
  EDITING = true;
  hideTip();
  document.body.classList.add("editing");
  document.getElementById("editBar").hidden = false;
  document.getElementById("editNote").hidden = true;
  document.getElementById("editBtn").setAttribute("aria-pressed", "true");
  if (RES && !document.getElementById("edTechList")) {
    const dl = el("datalist");
    dl.id = "edTechList";
    [...new Set(RES.techs.map(t => t.name))].sort().forEach(nm => {
      const o = el("option");
      o.value = nm;
      dl.appendChild(o);
    });
    document.body.appendChild(dl);
  }
  if (TREE && !document.getElementById("edFocusList")) {
    const dl = el("datalist");
    dl.id = "edFocusList";
    [...new Set(TREE.focuses.map(f => f.name))].sort().forEach(nm => {
      const o = el("option");
      o.value = nm;
      dl.appendChild(o);
    });
    document.body.appendChild(dl);
  }
  editList("planCol", G.plan, "plan");
  editList("focusCol", G.focus, "focus");
  editList("researchCol", G.research, "research");
  editBuilds();
  if (DES) renderDesigns(); // designer controls switch on in edit mode
  if (UNITS && G.divisions) renderDivisions();
  if (EQUIP && G.production) renderProduction();
  if (CONS && G.construction) renderConstruction();
  if (MIO) renderMIO();
  if (SPROJ) renderProjects();
  if (DOC) renderDoctrines();
  if (POL) renderPolitics();
}

function leaveEdit() {
  saveEdits(true);
  location.reload();
} // reload so the tree, dates and counts all use the edits

function download(name, text, type) {
  const a = el("a");
  a.href = URL.createObjectURL(new Blob([text], {
    type
  }));
  a.download = name;
  document.body.appendChild(a);
  a.click();
  setTimeout(() => {
    URL.revokeObjectURL(a.href);
    a.remove();
  }, 1000);
}
document.getElementById("editBtn").addEventListener("click", () => EDITING ? leaveEdit() : enterEdit());
document.getElementById("edDone").addEventListener("click", leaveEdit);
document.getElementById("edExportJson").addEventListener("click", () => download(G.meta.id + "-edited.json", JSON.stringify(G, null, 1), "application/json"));
document.getElementById("edExportJs").addEventListener("click", () => download(G.meta.id + "-edited.js",
  "/* Edited copy of the " + G.meta.id + " guide, exported " + new Date().toISOString().slice(0, 10) + ". Same format as guides/germany-blitzkrieg.js:\n   save it in guides/, give meta.id a new value, and add it to guides/index.js to make it a guide of its own. */\nregisterGuide(" + JSON.stringify(G, null, 1) + ");\n",
  "text/javascript"));
document.getElementById("edImport").addEventListener("change", e => {
  const file = e.target.files[0];
  if (!file) return;
  file.text().then(text => {
    let g;
    try {
      g = JSON.parse(text.slice(text.indexOf("{"), text.lastIndexOf("}") + 1));
    } catch (err) {
      g = null;
    }
    if (!g || !Array.isArray(g.plan)) {
      alert("That file doesn't look like a guide export (no plan found).");
      return;
    }
    put(editKey, {
      base: baseHash(),
      saved: new Date().toISOString(),
      data: sections(g)
    });
    location.reload();
  });
});
confirmTwice(document.getElementById("edReset"), () => {
  try {
    localStorage.removeItem(editKey);
  } catch (e) {}
  location.reload();
});
