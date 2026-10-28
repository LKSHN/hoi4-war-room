/*
 * Divisions tab: training plan and division designer.
 *
 * Divisions: training plan and templates (division designer), battalions from guides/trees/units-*.js.
 * What the unit files give exactly (width, manpower, HP, weight, suppression, recon, entrenchment, training time, equipment)
 * is calculated; attack and defense come from equipment and research, so the guide's in-game numbers are shown for those.
 */

let tplSel = 0,
  tplPick = null; // the template slot being filled in edit mode: {kind: "support", i} or {kind: "combat", c, r}

// battalion groups, in the order the game's picker lists them
const UNIT_GROUPS = [["infantry", "Infantry"], ["mobile", "Mobile"], ["armor", "Armor"], ["combat_support", "Combat support"],
  ["mobile_combat_support", "Mobile combat support"], ["armor_combat_support", "Armor combat support"]];
const slotName = s => s.kind === "support" ? "Support company " + (s.i + 1) : "Combat column " + (s.c + 1) + ", row " + (s.r + 1);
const slotUnit = (t, s) => s.kind === "support" ? (t.support || [])[s.i] : ((t.combat || [])[s.c] || [])[s.r];

// put a unit (or null) in a slot; columns stack from the top like in game, so empty rows close up
function setSlot(t, s, v) {
  if (s.kind === "support") {
    t.support[s.i] = v;
    t.support = t.support.filter(Boolean);
    return;
  }
  t.combat[s.c] = t.combat[s.c] || [];
  t.combat[s.c][s.r] = v;
  t.combat = Array.from(t.combat, col => (col || []).filter(Boolean));
  while (t.combat.length && !t.combat[t.combat.length - 1].length) t.combat.pop();
}

// after filling a slot, move on to the next free one in the same column, so a column fills in a few clicks
function nextSlot(t, s) {
  if (s.kind === "support") return t.support.length < 5 ? {kind: "support", i: t.support.length} : null;
  const n = (t.combat[s.c] || []).length;
  return n < 5 ? {kind: "combat", c: s.c, r: n} : null;
}
const tplUnits = t => [...(t.support || []), ...(t.combat || []).flat()].filter(Boolean).map(id => UNITS.units[id]).filter(Boolean);

function tplStats(t) {
  const us = tplUnits(t),
    sum = k => us.reduce((a, u) => a + (u[k] || 0), 0),
    s = {};
  ["combat_width", "manpower", "max_strength", "weight", "suppression", "recon", "entrenchment", "supply_consumption"].forEach(k => s[k] = sum(k));
  s.training_time = Math.max(0, ...us.map(u => u.training_time || 0));
  s.max_organisation = us.length ? sum("max_organisation") / us.length : 0;
  s.need = {};
  us.forEach(u => Object.entries(u.need || {}).forEach(([e, n]) => s.need[e] = (s.need[e] || 0) + n));
  return s;
}
const tplById = id => (G.divisions.templates || []).find(t => t.id === id);
const designFor = eq => (G.designs || []).find(d => d.role === eq);

function unitIcon(u) {
  if (!u) return "gear";
  if (u.group === "support") return /recon|police/.test(u.id) ? "eye" : /engineer|maintenance/.test(u.id) ? "gear" : /artillery|rocket|anti/.test(u.id) ? "artillery" :
    /logistics|train/.test(u.id) ? "road" : /flame|tank/.test(u.id) ? "tank" : /hospital/.test(u.id) ? "people" : /signal/.test(u.id) ? "bolt" : "gear";
  return /armor/.test(u.group) && !/support/.test(u.group) ? "tank" : /support/.test(u.group) ? "artillery" : u.group === "mobile" ? "road" : "helmet";
}
const eqName = e => (UNITS.equipment[e] || e) + (designFor(e) ? " (" + designFor(e).name + ")" : "");
const num = v => v >= 1000 ? Math.round(v).toLocaleString("en-GB") : +v.toFixed(2) + "";

function buildDivisions() {
  if (!UNITS || !G.divisions) return;
  document.querySelector('[data-tab="divisions"]').hidden = false;
  document.querySelectorAll(".subtabs [data-sub]").forEach(b => b.addEventListener("click", () => {
    prefs.divSub = b.dataset.sub;
    savePrefs();
    renderDivisions();
  }));
  renderDivisions();
}

function renderDivisions() {
  const sub = prefs.divSub === "templates" ? "templates" : "training";
  document.querySelectorAll(".subtabs [data-sub]").forEach(b => b.setAttribute("aria-selected", b.dataset.sub === sub));
  document.getElementById("divTraining").hidden = sub !== "training";
  document.getElementById("divTemplates").hidden = sub !== "templates";
  if (sub === "training") renderTraining();
  else renderTemplates();
}

function openTemplate(id) {
  tplSel = Math.max(0, G.divisions.templates.findIndex(t => t.id === id));
  prefs.divSub = "templates";
  savePrefs();
  renderDivisions();
}

function renderTraining() {
  const box = document.getElementById("divTraining");
  box.innerHTML = "";
  const rows = G.divisions.training || [],
    steps = {};
  (G.plan || []).forEach(g => g.steps.forEach(s => steps[s.id] = {
    s,
    g
  }));
  // totals over the whole plan
  const totals = {},
    need = {};
  let men = 0;
  rows.forEach(r => {
    const t = tplById(r.template);
    if (!t) return;
    totals[t.id] = (totals[t.id] || 0) + (+r.count || 0);
    const st = tplStats(t);
    men += st.manpower * r.count;
    Object.entries(st.need).forEach(([e, n]) => need[e] = (need[e] || 0) + n * r.count);
  });
  const sum = el("div", "dsum");
  sum.innerHTML = "<div class='dsum-h'>Divisions to train</div><div class='dsum-t'></div><div class='dsum-n'></div>";
  sum.querySelector(".dsum-t").innerHTML = Object.entries(totals).map(([id, n]) => `<button type="button" class="tlink" data-tpl="${esc(id)}"><b>${n}</b> × ${esc(tplById(id).name)}</button>`).join(" ");
  sum.querySelector(".dsum-n").textContent = "Manpower " + num(men) + (Object.keys(need).length ? " · " + Object.entries(need).sort((a, b) => b[1] - a[1]).map(([e, n]) => num(n) + " " + eqName(e)).join(", ") : "") +
    (rows.some(r => {
      const t = tplById(r.template);
      return t && !tplUnits(t).length;
    }) ? " · templates without battalions count as 0" : "");
  box.appendChild(sum);
  const table = el("div", "trows"),
    running = {};
  rows.forEach((r, i) => {
    const t = tplById(r.template),
      link = steps[r.step],
      done = !!(link && store.ticks[r.step]);
    running[r.template] = (running[r.template] || 0) + (+r.count || 0);
    const row = el("div", "trow" + (done ? " done" : ""));
    const when = link ? (link.g.by ? (link.g.approx ? "≈ " : "") + "by " + fmtDate(link.g.by) : "") + " · " + link.g.title : "No plan step";
    if (EDITING) {
      const tsel = el("select", "ed-select");
      tsel.setAttribute("aria-label", "Template");
      G.divisions.templates.forEach(x => {
        const o = el("option");
        o.value = x.id;
        o.textContent = x.name;
        tsel.appendChild(o);
      });
      tsel.value = r.template;
      tsel.addEventListener("change", () => {
        r.template = tsel.value;
        saveEdits();
        renderTraining();
      });
      const cnt = edInput(String(r.count), "Count", v => {
        const n = parseInt(v, 10);
        if (n >= 0) {
          r.count = n;
          saveEdits();
        }
      }, "ed-small", "5em");
      const ssel = el("select", "ed-select tstep");
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
      ssel.value = r.step;
      ssel.addEventListener("change", () => {
        r.step = ssel.value;
        saveEdits();
        renderTraining();
      });
      row.append(cnt, el("span", "tx", "×"), tsel, ssel, edText(r.n, "Note (optional)", v => {
          if (v) r.n = v;
          else delete r.n;
          saveEdits();
        }, "ed-note"),
        confirmTwice(edBtn("✕", "Delete", () => {}, "del"), () => {
          rows.splice(i, 1);
          saveEdits();
          renderTraining();
        }));
    } else {
      row.innerHTML = `<span class="tcount"></span><button type="button" class="tlink tname"></button><span class="twhen"></span><span class="tstep"></span><span class="ttotal"></span>`;
      row.querySelector(".tcount").textContent = r.count + " ×";
      row.querySelector(".tname").textContent = t ? t.name : r.template;
      row.querySelector(".tname").dataset.tpl = r.template;
      row.querySelector(".twhen").textContent = when;
      row.querySelector(".tstep").textContent = (done ? "✓ " : "") + (link ? link.s.t : "") + (r.n ? " · " + r.n : "");
      row.querySelector(".ttotal").textContent = "total " + running[r.template];
      if (t && tplUnits(t).length) {
        const st = tplStats(t),
          nd = el("div", "tneed");
        nd.textContent = "Needs " + num(st.manpower * r.count) + " men, " + Object.entries(st.need).map(([e, n]) => num(n * r.count) + " " + eqName(e)).join(", ");
        row.appendChild(nd);
      }
    }
    table.appendChild(row);
  });
  box.appendChild(table);
  if (EDITING) box.appendChild(edBtn("+ Add training", "Add a row", () => {
    rows.push({
      id: uid("train."),
      step: (G.plan[0] || {
        steps: [{}]
      }).steps[0].id,
      template: G.divisions.templates[0].id,
      count: 1
    });
    saveEdits();
    renderTraining();
  }, "dadd"));
  box.querySelectorAll(".tlink[data-tpl]").forEach(b => b.addEventListener("click", () => openTemplate(b.dataset.tpl)));
  const note = el("p", "foot", "Dates come from each plan step's phase, and a row counts as done when its plan step is ticked. Training takes " +
    "the template's training time on top, so queue early.");
  box.appendChild(note);
}

function renderTemplates() {
  const list = document.getElementById("tList");
  list.innerHTML = "";
  const tpls = G.divisions.templates;
  tplSel = Math.min(tplSel, tpls.length - 1);
  tpls.forEach((t, i) => {
    const st = tplStats(t),
      b = el("button", "dcard");
    b.type = "button";
    b.setAttribute("aria-pressed", i === tplSel);
    b.innerHTML = `<span class="fn-ico"><svg viewBox="0 0 24 24"><use href="#ic-${esc(t.icon || "helmet")}"/></svg></span><b></b><span></span>`;
    b.querySelector("b").textContent = t.name;
    b.querySelector("span:last-child").textContent = tplUnits(t).length ? "width " + num(st.combat_width) + " · " + num(st.manpower) + " men" : "battalions not set";
    b.addEventListener("click", () => {
      tplSel = i;
      tplPick = null;
      renderTemplates();
    });
    list.appendChild(b);
  });
  if (EDITING) list.appendChild(edBtn("+ New template", "Add a template", () => {
    tpls.push({
      id: uid("tpl."),
      name: "New template",
      icon: "helmet",
      support: [],
      combat: []
    });
    tplSel = tpls.length - 1;
    saveEdits();
    renderTemplates();
  }, "dadd"));
  renderTemplate(tpls[tplSel]);
}

// battalion picker for the selected slot, grouped like the game's (support companies for the support column)
function unitPicker(t, redo) {
  const box = el("div", "tpick");
  if (!tplPick) {
    box.appendChild(el("p", "dsmall", "Click a slot in the grid, then pick its battalion here."));
    return box;
  }
  const s = tplPick,
    cur = slotUnit(t, s);
  const head = el("div", "tpick-h");
  head.appendChild(el("b", null, esc(slotName(s))));
  const clear = edBtn("Empty slot", "Empty this slot", () => {
    setSlot(t, s, null);
    redo();
  });
  clear.disabled = !cur;
  head.append(clear, edBtn("Done", "Stop picking", () => {
    tplPick = null;
    redo();
  }));
  box.appendChild(head);
  const units = Object.values(UNITS.units),
    support = s.kind === "support";
  const groups = support ? [["support", "Support companies"]] :
    [...UNIT_GROUPS, ...[...new Set(units.map(u => u.group))].filter(g => g !== "support" && !UNIT_GROUPS.some(([k]) => k === g)).map(g => [g, g.replace(/_/g, " ")])];
  groups.forEach(([g, label]) => {
    const list = units.filter(u => u.group === g).sort((a, b) => a.name.localeCompare(b.name));
    if (!list.length) return;
    box.appendChild(el("div", "tpick-g", esc(label)));
    const wrap = el("div", "tpick-list");
    list.forEach(u => {
      const b = el("button");
      b.type = "button";
      b.setAttribute("aria-pressed", u.id === cur);
      b.innerHTML = `<span class="dslot-ico"><svg viewBox="0 0 24 24"><use href="#ic-${unitIcon(u)}"/></svg></span><span></span>`;
      b.lastChild.textContent = u.name;
      b.title = u.name + (u.abbr ? " (" + u.abbr + ")" : "") + " · width " + num(u.combat_width || 0) + " · " + num(u.manpower || 0) + " men";
      b.addEventListener("click", () => {
        setSlot(t, s, u.id);
        tplPick = cur ? s : nextSlot(t, s); // replacing keeps the slot; filling moves on down the column
        redo();
      });
      wrap.appendChild(b);
    });
    box.appendChild(wrap);
  });
  return box;
}

function renderTemplate(t) {
  const box = document.getElementById("tDesigner");
  box.innerHTML = "";
  if (!t) return;
  const st = tplStats(t),
    seen = t.seen || {},
    redo = () => {
      saveEdits();
      renderTemplates();
    };
  box.appendChild(el("div", "dtitle", "Division Designer"));
  const body = el("div", "dbody"),
    left = el("div", "dleft"),
    right = el("div", "dright");
  if (EDITING) left.appendChild(edInput(t.name, "Template name", v => {
    t.name = v;
    saveEdits();
  }, "dname"));
  else {
    const n = el("div", "dname");
    n.textContent = t.name;
    left.appendChild(n);
  }
  // support column (5) and combat grid (5 x 5), like the game. In edit mode a click selects a slot and the
  // battalion picker under the grid fills it.
  t.support = t.support || [];
  t.combat = t.combat || [];
  const same = (a, b) => !!a && !!b && a.kind === b.kind && a.i === b.i && a.c === b.c && a.r === b.r;
  const grid = el("div", "tgrid");
  const cell = (id, slot) => {
    const u = UNITS.units[id],
      c = el(EDITING ? "button" : "div", "tcell" + (id ? "" : " empty") + (same(slot, tplPick) ? " picked" : ""));
    c.innerHTML = `<span class="dslot-ico"><svg viewBox="0 0 24 24"><use href="#ic-${unitIcon(u)}"/></svg></span>`;
    c.appendChild(el("span", "tabbr", u ? esc(u.abbr || u.name) : ""));
    c.title = slotName(slot) + ": " + (u ? u.name : "empty");
    if (EDITING) {
      c.type = "button";
      c.setAttribute("aria-label", c.title);
      c.addEventListener("click", () => {
        tplPick = same(slot, tplPick) ? null : slot;
        renderTemplate(t);
        const picker = document.querySelector("#tDesigner .tpick");
        if (picker && tplPick) picker.scrollIntoView({block: "nearest"});
      });
    }
    return c;
  };
  const sup = el("div", "tsup");
  sup.appendChild(el("div", "tcol-h", "Support"));
  for (let i = 0; i < 5; i++) sup.appendChild(cell(t.support[i], {kind: "support", i}));
  const com = el("div", "tcombat");
  com.appendChild(el("div", "tcol-h wide", "Combat"));
  for (let c = 0; c < 5; c++) {
    const col = el("div", "tcolumn");
    for (let r = 0; r < 5; r++) col.appendChild(cell((t.combat[c] || [])[r], {kind: "combat", c, r}));
    com.appendChild(col);
  }
  grid.append(sup, com);
  left.appendChild(grid);
  if (EDITING) left.appendChild(unitPicker(t, redo));
  // stats: calculated from the unit files, with the in-game value from the guide next to it
  const sheet = el("div", "dsheet");
  const col = (title, rows) => {
    const c = el("div", "dcol");
    c.appendChild(el("div", "dcol-h", title));
    rows.forEach(([label, v, k, approx]) => {
      const row = el("div", "dstat");
      row.innerHTML = "<span></span><b></b>";
      row.querySelector("span").textContent = label + ":";
      row.querySelector("b").textContent = v == null ? "—" : (approx ? "≈ " : "") + v;
      if (seen[k] != null) {
        const g = el("i", "dseen");
        g.textContent = "game " + num(seen[k]);
        row.appendChild(g);
      }
      c.appendChild(row);
    });
    return c;
  };
  sheet.append(
    col("Base Stats", [
      ["Combat width", num(st.combat_width), "combat_width"],
      ["HP", num(st.max_strength), "max_strength"],
      ["Organization", num(st.max_organisation), "max_organisation", 1],
      ["Recon", num(st.recon), "recon"],
      ["Suppression", num(st.suppression), "suppression"],
      ["Weight", num(st.weight), "weight"],
      ["Supply use", num(st.supply_consumption), "supply_consumption", 1]
    ]),
    col("Combat Stats", [
      ["Soft attack", null, "soft_attack"],
      ["Hard attack", null, "hard_attack"],
      ["Defense", null, "defense"],
      ["Breakthrough", null, "breakthrough"],
      ["Armor", null, "armor"],
      ["Piercing", null, "piercing"],
      ["Entrenchment", num(st.entrenchment), "entrenchment"],
      ["Max speed", null, "maximum_speed"]
    ]),
    col("Equipment", [
      ["Manpower", num(st.manpower), "manpower"],
      ["Training time", st.training_time + " days", "training_time"],
      ...Object.entries(st.need).map(([e, n]) => [eqName(e), num(n), "eq:" + e])
    ]));
  right.appendChild(sheet);
  const note = el("div", "dnote");
  note.innerHTML = (t.n ? "<p></p>" : "") + "<p class='dsmall'>Width, HP, manpower, weight, suppression, recon, entrenchment, training time and equipment are exact from the patch " +
    esc(UNITS.patch) + " unit files. ≈ values leave out research (logistics research cuts supply use). Attack, defense and speed come from equipment and research, so only the in-game values from the guide are shown." +
    (EDITING ? "" : " Use Edit guide to change its battalions.") + "</p>";
  if (t.n) note.querySelector("p").textContent = t.n;
  if (t.img && G.images[t.img]) {
    const b = el("button", "shotbtn");
    b.type = "button";
    b.textContent = "▸ In-game screen";
    b.addEventListener("click", () => openLB(t.img, b));
    note.appendChild(b);
    if (t.ts && G.meta.video) {
      note.appendChild(document.createTextNode(" "));
      note.appendChild(tsLink(t.ts));
    }
  }
  const used = (G.divisions.training || []).filter(r => r.template === t.id).reduce((a, r) => a + (+r.count || 0), 0);
  if (used) note.appendChild(el("p", "dsmall", "Trained in the plan: <b>" + used + "</b> divisions."));
  if (EDITING) note.appendChild(confirmTwice(edBtn("Delete template", "Delete this template", () => {}, "del"), () => {
    G.divisions.templates.splice(tplSel, 1);
    tplSel = 0;
    saveEdits();
    renderTemplates();
  }));
  right.appendChild(note);
  body.append(left, right);
  box.appendChild(body);
}
