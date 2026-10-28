/*
 * Production tab: the guide's military production as states over time.
 *
 * Production: the guide's military production as a series of states. The page shows the state before and the
 * selected one side by side, like the in-game production screen, with what changed marked. Lines keep their id
 * between states, so a line switching from Bf 109 D to F1ca is the same line with a new design.
 */

let prodSel = null;
const planSteps = () => {
  const m = {};
  (G.plan || []).forEach(g => g.steps.forEach(s => m[s.id] = {
    s,
    g
  }));
  return m;
};
const pDesign = l => l.design ? (G.designs || []).find(d => d.id === l.design) : null;

function pKind(l) {
  if (l.kind) return l.kind;
  const d = pDesign(l);
  if (d && DES && DES.archetypes[d.role]) return (DES.frames[d.frame] ? DES.frames[d.frame].name + " · " : "") + roleLabel(DES.archetypes[d.role]);
  const e = EQUIP.equipment[l.eq];
  return e ? e.name : "";
}

function pCost(l) { // production cost in IC, only where it's known without modules
  const d = pDesign(l);
  if (d) return DES ? designStats(d).build_cost_ic : null;
  const e = EQUIP.equipment[l.eq];
  return e && e.cat !== "air" ? e.cost : null;
}

function pIcon(l) {
  const d = pDesign(l);
  if (d) return DES ? dKind(d) : "tank";
  const e = EQUIP.equipment[l.eq];
  if (!e) return "factory";
  if (e.cat === "air") return "plane";
  if (e.cat === "armor") return "tank";
  return /support/.test(e.arch) ? "gear" : /artillery|anti_/.test(e.arch) ? "artillery" : /motorized|mechanized/.test(e.arch) ? "road" :
    /train/.test(e.arch) ? "train" : e.cat === "armor" ? "tank" : e.type === "infantry" ? "helmet" : "factory";
}

function pRest(st) { // factories left for the "all the rest" line, when the state's total is known
  if (!st.mils) return null;
  const fixed = st.lines.filter(l => !l.rest);
  if (fixed.some(l => l.f == null)) return null;
  return Math.max(0, st.mils - fixed.reduce((a, l) => a + (+l.f || 0), 0));
}
const facs = n => n + (+n === 1 ? " factory" : " factories");
const pF = (l, st) => l.rest ? (pRest(st) != null ? pRest(st) + "" : "rest") : (l.f != null ? l.f + "" : "—");

function pDiff(prev, cur) {
  const was = {},
    out = {
      lines: {},
      removed: [],
      list: []
    };
  (prev ? prev.lines : []).forEach((l, i) => was[l.id] = {
    l,
    i
  });
  // lines that kept their order: the longest common sequence; anything outside it moved
  const a = prev ? prev.lines.map(l => l.id).filter(id => cur.lines.some(x => x.id === id)) : [],
    b = cur.lines.map(l => l.id).filter(id => was[id]);
  const T = a.map(() => Array(b.length + 1).fill(0)).concat([Array(b.length + 1).fill(0)]);
  for (let x = a.length - 1; x >= 0; x--)
    for (let y = b.length - 1; y >= 0; y--) T[x][y] = a[x] === b[y] ? T[x + 1][y + 1] + 1 : Math.max(T[x + 1][y], T[x][y + 1]);
  const stay = new Set();
  for (let x = 0, y = 0; x < a.length && y < b.length;) {
    if (a[x] === b[y]) {
      stay.add(a[x]);
      x++;
      y++;
    } else if (T[x + 1][y] >= T[x][y + 1]) x++;
    else y++;
  }
  cur.lines.forEach((l, i) => {
    const w = was[l.id],
      ch = out.lines[l.id] = {};
    if (!prev) return;
    if (!w) {
      ch.added = true;
      out.list.push(["add", "Add " + l.name + (l.rest ? ", all the rest" : l.f != null ? ", " + facs(l.f) : "")]);
      return;
    }
    const o = w.l,
      bits = [];
    if (o.name !== l.name) {
      ch.renamed = o.name;
      bits.push(o.name + " → " + l.name);
    }
    const fo = pF(o, prev),
      fn = pF(l, cur);
    if (fo !== fn || !!o.rest !== !!l.rest) {
      ch.f = fo;
      ch.dir = (+fn > +fo) ? "up" : (+fn < +fo) ? "down" : "";
      bits.push((l.rest ? "all the rest" + (fn !== "rest" ? " (" + facs(fn) + ")" : "") : facs(fn)) +
        (fo !== "—" ? " (was " + (o.rest ? "the rest" + (fo !== "rest" ? ", " + fo : "") : fo) + ")" : ""));
    }
    if ((o.cap || null) !== (l.cap || null)) {
      ch.cap = o.cap;
      bits.push(l.cap ? "limit " + l.cap : "no limit");
    }
    if (!stay.has(l.id)) {
      ch.moved = true;
      bits.push(i === cur.lines.length - 1 ? "to lowest priority" : i === 0 ? "to top priority" : "priority " + (i + 1));
    }
    if (bits.length) out.list.push([ch.dir === "down" ? "down" : "change", (ch.renamed ? "" : l.name + ": ") + bits.join(", ")]);
  });
  if (prev) prev.lines.forEach(l => {
    if (!cur.lines.some(x => x.id === l.id)) {
      out.removed.push(l.id);
      out.list.push(["del", "Remove " + l.name]);
    }
  });
  return out;
}

function buildProduction() {
  if (!EQUIP || !G.production || !(G.production.states || []).length) return;
  document.querySelector('[data-tab="production"]').hidden = false;
  renderProduction();
}

function renderProduction() {
  const states = G.production.states,
    steps = planSteps();
  const nextIdx = states.findIndex(s => !store.ticks[s.step]);
  if (prodSel == null || prodSel >= states.length) prodSel = nextIdx < 0 ? states.length - 1 : nextIdx;
  // timeline
  const tl = document.getElementById("pTimeline");
  tl.innerHTML = "";
  states.forEach((st, i) => {
    const link = steps[st.step],
      done = !!store.ticks[st.step],
      b = el("button", "pstate" + (done ? " done" : "") + (i === nextIdx ? " next" : ""));
    b.type = "button";
    b.setAttribute("role", "tab");
    b.setAttribute("aria-selected", i === prodSel);
    b.innerHTML = "<span class='pn'></span><b></b><span class='pd'></span>";
    b.querySelector(".pn").textContent = done ? "✓" : i + 1;
    b.querySelector("b").textContent = st.title || "State " + (i + 1);
    b.querySelector(".pd").textContent = link ? (link.g.by ? (link.g.approx ? "≈ " : "") + fmtDate(link.g.by) : link.g.title) : "no plan step";
    b.addEventListener("click", () => {
      prodSel = i;
      renderProduction();
    });
    tl.appendChild(b);
  });
  if (EDITING) {
    tl.appendChild(edBtn("+ State", "Add a state after the selected one (a copy of it)", () => {
      const cur = states[prodSel],
        copy = JSON.parse(JSON.stringify(cur));
      copy.id = uid("prod.");
      copy.title = "New state";
      delete copy.img;
      delete copy.ts;
      delete copy.n;
      states.splice(prodSel + 1, 0, copy);
      prodSel++;
      saveEdits();
      renderProduction();
    }, "dadd"));
  }
  const cur = states[prodSel],
    prev = states[prodSel - 1] || null,
    diff = pDiff(prev, cur);
  // what changes
  const chg = document.getElementById("pChanges");
  chg.innerHTML = "";
  const box = el("div", "pchanges"),
    link = steps[cur.step];
  const head = el("div", "pch-h");
  if (EDITING) {
    head.append(edInput(cur.title, "State title", v => {
      cur.title = v;
      saveEdits();
    }, "ptitle"));
    const ssel = el("select", "ed-select");
    ssel.setAttribute("aria-label", "Plan step");
    (G.plan || []).forEach(g => {
      const og = el("optgroup");
      og.label = g.title || "";
      g.steps.forEach(s => {
        const o = el("option");
        o.value = s.id;
        o.textContent = s.t.slice(0, 70);
        og.appendChild(o);
      });
      ssel.appendChild(og);
    });
    ssel.value = cur.step;
    ssel.addEventListener("change", () => {
      cur.step = ssel.value;
      saveEdits();
      renderProduction();
    });
    head.append(ssel, edInput(cur.mils != null ? String(cur.mils) : "", "Military factories", v => {
        const n = parseInt(v, 10);
        if (n > 0) cur.mils = n;
        else delete cur.mils;
        saveEdits();
      }, "ed-small", "9em"),
      confirmTwice(edBtn("Delete state", "Delete this state", () => {}, "del"), () => {
        if (states.length < 2) return;
        states.splice(prodSel, 1);
        prodSel = Math.max(0, prodSel - 1);
        saveEdits();
        renderProduction();
      }));
  } else {
    head.innerHTML = "<b></b><span></span>";
    head.querySelector("b").textContent = (prev ? "What changes: " : "Starting production: ") + (cur.title || "");
    head.querySelector("span").textContent = link ? (store.ticks[cur.step] ? "✓ " : "") + link.s.t : "";
  }
  box.appendChild(head);
  if (diff.list.length) {
    const ul = el("ul", "pch-list");
    diff.list.forEach(([k, t]) => {
      const li = el("li", "pch-" + k);
      li.textContent = t;
      ul.appendChild(li);
    });
    box.appendChild(ul);
  } else if (prev) box.appendChild(el("p", "dsmall", "Same lines as before."));
  if (EDITING) box.appendChild(edText(cur.n, "Note (optional)", v => {
    if (v) cur.n = v;
    else delete cur.n;
    saveEdits();
  }, "ed-note"));
  else if (cur.n) {
    const p = el("p", "dsmall");
    p.textContent = cur.n;
    box.appendChild(p);
  }
  if (!EDITING && cur.img && G.images[cur.img]) {
    const b = el("button", "shotbtn");
    b.type = "button";
    b.textContent = "▸ In-game screen";
    b.addEventListener("click", () => openLB(cur.img, b));
    box.appendChild(b);
    if (cur.ts && G.meta.video) {
      box.appendChild(document.createTextNode(" "));
      box.appendChild(tsLink(cur.ts));
    }
  }
  chg.appendChild(box);
  // before and after
  const cmp = document.getElementById("pCompare");
  cmp.innerHTML = "";
  cmp.append(prodPanel(prev, "Before" + (prev ? " · " + prev.title : ""), {
      removed: diff.removed
    }),
    prodPanel(cur, (prev ? "After · " : "") + cur.title, {
      lines: diff.lines,
      edit: EDITING
    }));
  cmp.appendChild(el("p", "foot", "Lines are in priority order, as in game: factories fill the top lines first. A line's limit is the most factories it takes. " +
    "Costs are production cost per unit from the patch " + esc(EQUIP.patch) + " files, before production research, and are left out for planes without a design here."));
}

function prodPanel(st, title, o) {
  const w = el("section", "pwin");
  w.appendChild(el("div", "dtitle", "Production"));
  const h = el("div", "phead");
  h.innerHTML = "<span></span><b></b>";
  h.querySelector("span").textContent = title;
  h.querySelector("b").textContent = st && st.mils ? "Military Factories " + st.mils : "";
  w.appendChild(h);
  if (!st) {
    w.appendChild(el("p", "dsmall pempty", "Game start: the lines Germany begins with."));
    return w;
  }
  const list = el("ol", "plines");
  st.lines.forEach((l, i) => {
    const ch = (o.lines || {})[l.id] || {},
      li = el("li", "pline" + (ch.added ? " added" : "") + ((o.removed || []).includes(l.id) ? " removed" : "") + (ch.renamed ? " renamed" : ""));
    const cost = pCost(l);
    li.innerHTML = `<div class="pl-top"><span class="pl-n"></span><span class="pl-name"></span><span class="pl-f"></span></div>
      <div class="pl-body"><span class="dslot-ico"><svg viewBox="0 0 24 24"><use href="#ic-${pIcon(l)}"/></svg></span><span class="pl-kind"></span><span class="pl-cost"></span></div>`;
    li.querySelector(".pl-n").textContent = i + 1;
    li.querySelector(".pl-kind").textContent = pKind(l);
    li.querySelector(".pl-cost").textContent = cost != null ? +cost.toFixed(2) + " IC" : "";
    if (o.edit) {
      const nm = li.querySelector(".pl-name"),
        redo = () => {
          saveEdits();
          renderProduction();
        };
      nm.appendChild(edInput(l.name, "Line name", v => {
        l.name = v;
        saveEdits();
      }));
      const fbox = li.querySelector(".pl-f");
      fbox.append(edInput(l.f != null ? String(l.f) : "", "Factories", v => {
          const n = parseInt(v, 10);
          if (n >= 0) l.f = n;
          else delete l.f;
          saveEdits();
        }, "ed-small", "3.5em"),
        el("span", "tx", "/"), edInput(l.cap != null ? String(l.cap) : "", "Limit", v => {
          const n = parseInt(v, 10);
          if (n > 0) l.cap = n;
          else delete l.cap;
          saveEdits();
        }, "ed-small", "3.5em"));
      const rl = el("label", "prest"),
        cb = el("input");
      cb.type = "checkbox";
      cb.checked = !!l.rest;
      cb.addEventListener("change", () => {
        if (cb.checked) {
          st.lines.forEach(x => delete x.rest);
          l.rest = true;
        } else delete l.rest;
        redo();
      });
      rl.append(cb, document.createTextNode(" rest"));
      fbox.appendChild(rl);
      // what it builds: one of the guide's designs, or a piece of game equipment
      const sel = el("select", "ed-select pl-what");
      sel.setAttribute("aria-label", "Equipment");
      const og1 = el("optgroup");
      og1.label = "Guide designs";
      (G.designs || []).forEach(d => {
        const op = el("option");
        op.value = "d:" + d.id;
        op.textContent = d.name;
        og1.appendChild(op);
      });
      const og2 = el("optgroup");
      og2.label = "Equipment";
      Object.values(EQUIP.equipment).filter(e => !e.isArch || e.id === l.eq || /support_vehicle/.test(e.id)).sort((a, b) => a.cat.localeCompare(b.cat) || a.year - b.year || a.name.localeCompare(b.name))
        .forEach(e => {
          const op = el("option");
          op.value = "e:" + e.id;
          op.textContent = (e.ger ? e.ger + " · " : "") + e.name + (e.year > 1930 ? " (" + e.year + ")" : "");
          og2.appendChild(op);
        });
      sel.append(og1, og2);
      sel.value = l.design ? "d:" + l.design : "e:" + l.eq;
      sel.addEventListener("change", () => {
        const [k, id] = [sel.value.slice(0, 1), sel.value.slice(2)];
        if (k === "d") {
          l.design = id;
          delete l.eq;
          delete l.kind;
          l.name = (G.designs.find(d => d.id === id) || {}).name || l.name;
        } else {
          l.eq = id;
          delete l.design;
          delete l.kind;
          const e = EQUIP.equipment[id];
          l.name = e.ger || e.name;
        }
        redo();
      });
      li.querySelector(".pl-kind").replaceWith(sel);
      const tools = el("div", "pl-tools");
      tools.append(edText(l.n, "Note (optional)", v => {
          if (v) l.n = v;
          else delete l.n;
          saveEdits();
        }, "ed-note"),
        edBtn("▲", "Higher priority", () => {
          if (i) {
            st.lines.splice(i - 1, 0, st.lines.splice(i, 1)[0]);
            redo();
          }
        }),
        edBtn("▼", "Lower priority", () => {
          if (i < st.lines.length - 1) {
            st.lines.splice(i + 1, 0, st.lines.splice(i, 1)[0]);
            redo();
          }
        }),
        confirmTwice(edBtn("✕", "Delete line", () => {}, "del"), () => {
          st.lines.splice(i, 1);
          redo();
        }));
      li.appendChild(tools);
    } else {
      li.querySelector(".pl-name").textContent = l.name;
      const f = li.querySelector(".pl-f"),
        fv = pF(l, st);
      f.innerHTML = "<b></b>";
      f.querySelector("b").textContent = l.rest && pRest(st) != null ? fv + " (rest)" : fv === "rest" ? "all the rest" : fv;
      if (l.cap) f.appendChild(document.createTextNode(" / " + l.cap));
      if (ch.f != null) {
        const was = el("i", "pl-was " + (ch.dir || ""));
        was.textContent = (ch.dir === "up" ? "▲ " : ch.dir === "down" ? "▼ " : "") + "was " + ch.f;
        f.appendChild(was);
      }
      if (ch.renamed) {
        const r = el("div", "pl-note was");
        r.textContent = "Was " + ch.renamed;
        li.appendChild(r);
      }
      if (ch.moved) li.classList.add("moved");
      if (l.n) {
        const n = el("div", "pl-note");
        n.textContent = l.n;
        li.appendChild(n);
      }
    }
    list.appendChild(li);
  });
  w.appendChild(list);
  if (o.edit) w.appendChild(edBtn("+ Add line", "Add a production line", () => {
    st.lines.push({
      id: uid("pl."),
      name: "Karabiner 98k",
      eq: "infantry_equipment_1",
      f: 1
    });
    saveEdits();
    renderProduction();
  }, "dadd"));
  return w;
}
