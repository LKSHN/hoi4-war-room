/*
 * Designs tab: tank, plane and ship designers with stats worked out from the game files.
 *
 * Equipment designs: tank and plane designers like in game, stats from guides/trees/designers-*.js.
 * Stats are the design's own: (base + module and upgrade adds) x (1 + multipliers). Research and MIO bonuses come on top in game.
 */

let designSel = 0;
const isPlane = d => DES.frames[d.frame] && /airframe/.test(DES.frames[d.frame].arch);
const isShip = d => DES.frames[d.frame] && /^ship_hull_/.test(DES.frames[d.frame].arch);
const dKind = d => isShip(d) ? "ship" : isPlane(d) ? "plane" : "tank";
const TANK_COLS = [
  ["Base Stats", [
    ["maximum_speed", "Max Speed", "km/h"],
    ["reliability", "Reliability", "%"]
  ]],
  ["Combat Stats", [
    ["soft_attack", "Soft Attack"],
    ["hard_attack", "Hard Attack"],
    ["ap_attack", "Piercing"],
    ["hardness", "Hardness", "%"],
    ["armor_value", "Armor"],
    ["breakthrough", "Breakthrough"],
    ["defense", "Defense"],
    ["air_attack", "Air Attack"]
  ]],
  ["Misc. Stats", [
    ["fuel_capacity", "Fuel Capacity"],
    ["fuel_consumption", "Fuel Usage"],
    ["suppression", "Suppression"],
    ["recon", "Reconnaissance"],
    ["entrenchment", "Entrenchment"]
  ]]
];
const PLANE_COLS = [
  ["Base Stats", [
    ["maximum_speed", "Max Speed", "km/h"],
    ["air_range", "Range", "km"],
    ["weight", "Weight"],
    ["thrust", "Thrust"]
  ]],
  ["Combat Stats", [
    ["air_defence", "Air Defense"],
    ["air_attack", "Air Attack"],
    ["air_agility", "Agility"],
    ["air_superiority", "Air Superiority"],
    ["naval_strike_attack", "Naval Attack"],
    ["naval_strike_targetting", "Naval Targeting"],
    ["air_ground_attack", "Ground Attack"],
    ["air_bombing", "Strat. Bombing"]
  ]],
  ["Misc. Stats", [
    ["reliability", "Reliability", "%"],
    ["fuel_consumption", "Fuel Usage"],
    ["surface_detection", "Surface Detection"],
    ["sub_detection", "Sub Detection"],
    ["night_penalty", "Night Penalty", "%"]
  ]]
];
// ship stats; rows marked opt only show when the design has them (mines on a destroyer, deck size on a carrier)
const SHIP_COLS = [
  ["Base Stats", [
    ["naval_speed", "Max Speed", "kn"],
    ["naval_range", "Range", "km"],
    ["max_strength", "HP"],
    ["reliability", "Reliability", "%"],
    ["armor_value", "Armor"],
    ["surface_visibility", "Surface Visibility"],
    ["sub_visibility", "Sub Visibility", "", 1]
  ]],
  ["Combat Stats", [
    ["lg_attack", "Light Attack"],
    ["lg_armor_piercing", "Light Piercing"],
    ["hg_attack", "Heavy Attack"],
    ["hg_armor_piercing", "Heavy Piercing"],
    ["torpedo_attack", "Torpedo Attack"],
    ["sub_attack", "Depth Charges"],
    ["anti_air_attack", "Anti-Air"]
  ]],
  ["Misc. Stats", [
    ["surface_detection", "Surface Detection"],
    ["sub_detection", "Sub Detection"],
    ["fuel_consumption", "Fuel Usage"],
    ["carrier_size", "Deck Size", "", 1],
    ["mines_planting", "Mine Laying", "", 1],
    ["mines_sweeping", "Mine Sweeping", "", 1]
  ]]
];
const ROLE_LABEL = {
  artillery: "Artillery",
  flame: "Flame (Support Company)",
  anti_air: "Anti-Air",
  anti_tank: "Tank Destroyer",
  amphibious: "Amphibious",
  armor: "Tank",
  fighter: "Fighter",
  cas: "CAS",
  naval_bomber: "Naval Bomber",
  interceptor: "Heavy Fighter",
  tactical_bomber: "Tactical Bomber",
  strategic_bomber: "Strategic Bomber",
  air_transport: "Transport",
  suicide: "Suicide",
  scout_plane: "Scout Plane",
  maritime_patrol: "Maritime Patrol"
};
const roleLabel = a => {
  const t = a.type || [];
  return ROLE_LABEL[t[t.length - 1]] || a.name;
};

// the class a ship design becomes: a cruiser with a module that adds capital_ship (medium guns) is a heavy cruiser,
// a heavy hull is a battleship or battlecruiser by its armor module
function shipClass(d) {
  const f = DES.frames[d.frame];
  if (!f) return null;
  const mods = Object.values(d.modules || {}),
    added = mods.map(m => (DES.modules[m] || {}).addtype).filter(Boolean);
  const hullTypes = (DES.archetypes[f.arch] || {}).type || [],
    units = Object.values(DES.shipUnits || {}).filter(u => u.hull === f.arch);
  const fits = u => !u.mods || u.mods.some(m => mods.includes(m));
  return units.find(u => fits(u) && u.type.some(t => added.includes(t))) || units.find(u => fits(u) && u.type.some(t => hullTypes.includes(t))) ||
    units.find(fits) || units[0] || null;
}

function frameSlots(d) {
  const f = DES.frames[d.frame];
  if (!f) return {};
  return Object.keys(f.slots || {}).length ? f.slots : (DES.archetypes[f.arch] || {}).slots || {};
}
// a slot also takes what the chosen modules unlock there (a medium turret lets the main armament slot take medium guns)
function slotCats(d, slot) {
  const s = frameSlots(d)[slot];
  if (!s) return [];
  const cats = new Set(s.cats);
  Object.values(d.modules || {}).forEach(m => {
    const mod = DES.modules[m];
    ((mod && mod.slotcats || {})[slot] || []).forEach(c => cats.add(c));
  });
  return [...cats];
}

function rolesFor(d) {
  const f = DES.frames[d.frame];
  if (!f) return [];
  return Object.values(DES.archetypes).filter(a => a.id === f.arch || a.role_of === f.arch);
}

function designStats(d) {
  const f = DES.frames[d.frame],
    role = DES.archetypes[d.role] || {},
    add = {
      ...(f ? f.stats : {})
    },
    mul = {};
  Object.assign(add, role.set || {});
  const put = (o, k, v) => o[k] = (o[k] || 0) + v;
  Object.values(d.modules || {}).forEach(m => {
    const mod = DES.modules[m];
    if (!mod) return;
    Object.entries(mod.add).forEach(([k, v]) => put(add, k, v));
    Object.entries(mod.mul).forEach(([k, v]) => put(mul, k, v));
  });
  // add_average_stats: piercing is the average over the modules that have it
  const avg = {};
  Object.values(d.modules || {}).forEach(m => {
    const mod = DES.modules[m];
    if (!mod) return;
    Object.entries(mod.avg || {}).forEach(([k, v]) => (avg[k] = avg[k] || []).push(v));
  });
  Object.entries(avg).forEach(([k, vs]) => put(add, k, vs.reduce((a, b) => a + b, 0) / vs.length));
  Object.entries(d.upgrades || {}).forEach(([u, lvl]) => {
    const up = DES.upgrades[u];
    if (!up || !lvl) return;
    Object.entries(up.add).forEach(([k, v]) => put(add, k, v * lvl));
    Object.entries(up.mul).forEach(([k, v]) => put(mul, k, v * lvl));
  });
  const out = {};
  new Set([...Object.keys(add), ...Object.keys(mul)]).forEach(k => out[k] = (add[k] || 0) * (1 + (mul[k] || 0)));
  return out;
}

function designWarnings(d) {
  const w = [],
    slots = frameSlots(d),
    role = DES.archetypes[d.role] || {},
    types = role.type || [];
  Object.entries(slots).forEach(([s, v]) => {
    if (v.req && !(d.modules || {})[s]) w.push("Required slot is empty: " + slotLabel(s));
  });
  const mods = Object.values(d.modules || {}).filter(Boolean).map(m => DES.modules[m]).filter(Boolean);
  mods.forEach(m => {
    if (m.allow && !m.allow.some(t => types.includes(t))) w.push(m.name + " needs the " + m.allow.map(t => ROLE_LABEL[t] || t).join(" or ") + " role");
    if (m.forbid && m.forbid.some(t => types.includes(t))) w.push(m.name + " can't be used in this role");
  });
  mods.forEach(m => (m.forbidcats || []).forEach(c => mods.filter(o => o !== m && o.cat === c)
    .forEach(o => w.push(m.name + " can't share a ship with " + o.name))));
  const extra = types.filter(t => !((DES.archetypes[(DES.frames[d.frame] || {}).arch] || {}).type || []).includes(t));
  // some roles need a module that unlocks them (a howitzer for Artillery); plane roles aren't gated this way
  const gated = extra.length && Object.values(DES.modules).some(m => (m.allow || []).some(t => extra.includes(t)));
  if (gated && !mods.some(m => (m.allow || []).some(t => extra.includes(t)))) w.push("No module allows the " + roleLabel(role) + " role");
  ((DES.frames[d.frame] || {}).limits || []).forEach(l => {
    const n = mods.filter(m => (l.match.module && (l.match.module === m.id || l.match.module === "any")) || (l.match.category && (l.match.category === m.cat || l.match.category === "any"))).length;
    const lim = +l.n,
      bad = l.op === "<" ? n >= lim : l.op === ">" ? n <= lim : n !== lim;
    if (bad && n) w.push("Too many " + (l.match.module ? (DES.modules[l.match.module] || {}).name || l.match.module : l.match.category.replace(/_/g, " ")) + " (" + n + ")");
  });
  const st = designStats(d);
  if (isPlane(d) && (st.thrust || 0) < (st.weight || 0)) w.push("Weight is above thrust: the game won't let you save this design");
  return [...new Set(w)];
}
const slotLabel = s => s.replace(/^fixed_(ship_)?/, "").replace(/^(front|mid|rear)_(\d)_custom_slot$/, "$1 $2 (custom)").replace(/_slot(_\d+)?$/, m => m.match(/\d+/) ? " " + m.match(/\d+/)[0] : "").replace(/_/g, " ");

// icon for a module tile: our own drawings (ic-m-* in the sprite), picked from the module's id and category
const MOD_ICONS = [
  [/flamethrower/, "m-flame"], [/turret_type/, "m-turret"], [/howitzer|close_support/, "artillery"],
  [/rocket_launcher|rocket_rails|rocket_propelled|missile|slbm/, "m-rocket"], [/anti_air/, "m-aa"],
  [/machine_gun|(^|_)[lh]?mg(_|$)|_mg_/, "m-mg"], [/torpedo/, "m-torpedo"],
  [/bomb_locks|bomb_bay|bomb_release|explosive_charge|airdropped/, "m-bomb"],
  [/main_armament|secondary_turret|cannon/, "m-cannon"], [/suspension/, "m-wheels"], [/radio/, "m-radio"],
  [/radar/, "m-radar"], [/sonar/, "m-sonar"], [/bomb_sights|fire_control|stabilizer/, "m-sight"], [/camera/, "m-camera"],
  [/jet_engine|rocket_engine/, "m-jet"], [/plane.*engine|engine_\d_\d+x/, "m-prop"], [/engine/, "m-engine"],
  [/fuel|drop_tanks/, "m-fuel"], [/armor|skirts|anechoic/, "m-armor"], [/ammo|auto_loader|squeezebore/, "m-ammo"],
  [/smoke/, "m-smoke"], [/floats/, "m-float"], [/amphibious/, "m-wave"], [/depth_charge/, "m-depth"],
  [/mine/, "m-mine"], [/battery|secondaries/, "m-shipgun"], [/deck_space|airplane_launcher|seaplane/, "plane"],
];
function modIcon(mod) {
  const key = mod.cat + " " + mod.id;
  const hit = MOD_ICONS.find(([rx]) => rx.test(key));
  return hit ? hit[1] : "gear";
}
// tier of a module from its id (tank_radio_2, engine_3_1x), shown as I, II, III on the tile like in game
function modTier(mod) {
  const m = /_(\d)(?:_\d+x)?$/.exec(mod.id);
  return m && +m[1] ? ["", "I", "II", "III", "IV", "V"][+m[1]] || m[1] : "";
}
const fmtStat = (v, unit) => unit === "%" ? (v * 100).toFixed(1) + "%" : Math.abs(v) >= 100 ? v.toFixed(1) : v.toFixed(2).replace(/\.?0+$/, "") || "0";

function buildDesigns() {
  if (!DES || !G.designs) return;
  document.querySelector('[data-tab="designs"]').hidden = false;
  renderDesigns();
}

function renderDesigns() {
  const list = document.getElementById("dList");
  list.innerHTML = "";
  designSel = Math.min(designSel, G.designs.length - 1);
  G.designs.forEach((d, i) => {
    const b = el("button", "dcard");
    b.type = "button";
    b.setAttribute("aria-pressed", i === designSel);
    const f = DES.frames[d.frame],
      role = DES.archetypes[d.role];
    b.innerHTML = `<span class="fn-ico" data-ic="${dKind(d)}"><svg viewBox="0 0 24 24"><use href="#ic-${dKind(d)}"/></svg></span><b></b><span></span>`;
    b.querySelector("b").textContent = d.name || "Untitled";
    const cls = isShip(d) ? shipClass(d) : null;
    b.querySelector("span:last-child").textContent = [f ? f.name : d.frame, cls ? cls.name : role ? roleLabel(role) : ""].filter(Boolean).join(" · ") + " · cost " + fmtStat(designStats(d).build_cost_ic || 0);
    b.addEventListener("click", () => {
      designSel = i;
      renderDesigns();
    });
    list.appendChild(b);
  });
  if (EDITING) {
    const add = (label, kind) => list.appendChild(edBtn(label, label, () => {
      const f = kind === "ship" ? DES.frames.ship_hull_light_2 :
        Object.values(DES.frames).find(x => kind === "plane" ? x.arch === "small_plane_airframe" : x.arch === "medium_tank_chassis" && x.year >= 1936);
      const a = DES.archetypes[f.arch];
      G.designs.push({
        id: uid("design."),
        name: "New " + kind,
        frame: f.id,
        role: f.arch,
        modules: Object.fromEntries(Object.entries(a.defaults || {}).filter(([, m]) => m && m !== "empty")),
        upgrades: Object.fromEntries((f.upgrades || []).map(u => [u, 0]))
      });
      designSel = G.designs.length - 1;
      saveEdits();
      renderDesigns();
    }, "dadd"));
    add("+ New tank design", "tank");
    add("+ New plane design", "plane");
    add("+ New ship design", "ship");
  }
  renderDesigner(G.designs[designSel]);
}

function renderDesigner(d) {
  const box = document.getElementById("designer");
  box.innerHTML = "";
  if (!d) return;
  const plane = isPlane(d),
    ship = isShip(d),
    st = designStats(d),
    seen = d.seen || {},
    f = DES.frames[d.frame];
  const changed = () => {
    saveEdits();
    renderDesigns();
  };
  box.appendChild(el("div", "dtitle", ship ? "Ship Designer" : plane ? "Plane Designer" : "Tank Designer"));
  const body = el("div", "dbody"),
    left = el("div", "dleft"),
    right = el("div", "dright");
  // name, role and frame
  const head = el("div", "dhead");
  if (EDITING) head.appendChild(edInput(d.name, "Design name", v => {
    d.name = v;
    saveEdits();
    document.querySelector('#dList [aria-pressed="true"] b').textContent = v || "Untitled";
  }, "dname"));
  else {
    const n = el("div", "dname");
    n.textContent = d.name;
    head.appendChild(n);
  }
  const roleSel = el("select", "ed-select drole");
  roleSel.disabled = !EDITING;
  roleSel.setAttribute("aria-label", "Role");
  rolesFor(d).forEach(a => {
    const o = el("option");
    o.value = a.id;
    o.textContent = roleLabel(a);
    roleSel.appendChild(o);
  });
  roleSel.value = d.role;
  roleSel.addEventListener("change", () => {
    d.role = roleSel.value;
    changed();
  });
  const frameSel = el("select", "ed-select dframe");
  frameSel.disabled = !EDITING;
  frameSel.setAttribute("aria-label", ship ? "Hull" : plane ? "Airframe" : "Chassis");
  const opt = (x, to) => {
    const o = el("option");
    o.value = x.id;
    o.textContent = x.name + (x.year ? " (" + x.year + ")" : "");
    to.appendChild(o);
  };
  if (ship) // any hull: the hull decides the kind of ship, so it can change here
    [...new Set(Object.values(DES.frames).map(x => x.arch).filter(a => /^ship_hull_/.test(a)))].forEach(a => {
      const g = el("optgroup");
      g.label = DES.archetypes[a].name;
      Object.values(DES.frames).filter(x => x.arch === a).sort((x, y) => x.year - y.year).forEach(x => opt(x, g));
      frameSel.appendChild(g);
    });
  else Object.values(DES.frames).filter(x => x.arch === (f && f.arch)).sort((a, b) => a.year - b.year).forEach(x => opt(x, frameSel));
  frameSel.value = d.frame;
  frameSel.addEventListener("change", () => {
    const oldArch = f && f.arch;
    d.frame = frameSel.value;
    const slots = frameSlots(d);
    if (ship) d.role = DES.frames[d.frame].arch;
    // drop modules for slots the new frame doesn't have, or that the slot no longer takes (a destroyer engine on a cruiser)
    Object.keys(d.modules || {}).forEach(s => {
      const m = DES.modules[d.modules[s]];
      if (!slots[s] || (m && !slotCats(d, s).includes(m.cat))) delete d.modules[s];
    });
    if (ship && d.role !== oldArch) // a new kind of hull starts with its own default modules where the slot is free
      Object.entries((DES.archetypes[d.role] || {}).defaults || {}).forEach(([s, m]) => {
        if (m && m !== "empty" && slots[s] && !d.modules[s]) d.modules[s] = m;
      });
    changed();
  });
  if (ship) { // ships have no role to pick: the modules decide the class
    const c = shipClass(d),
      lab = el("div", "dclass");
    lab.textContent = c ? c.name : "—";
    lab.title = "Ship class, from the hull and modules (medium guns make a cruiser a heavy cruiser, the armor a battleship or battlecruiser)";
    head.append(lab, frameSel);
  } else head.append(roleSel, frameSel);
  left.appendChild(head);
  // module slots like the game: a row of tiles above the blueprint, the rest below it next to the upgrades
  const slots = frameSlots(d),
    entries = Object.keys(slots);
  const rows = ship ? [entries.filter(s => /custom/.test(s)), entries.filter(s => !/custom/.test(s))] :
    plane ? [entries.filter(s => /weapon/.test(s)), entries.filter(s => !/weapon/.test(s))] :
    [entries.filter(s => /turret|armament|special/.test(s)), entries.filter(s => !/turret|armament|special/.test(s))];
  const modOf = s => {
    const cur = (d.modules || {})[s];
    return cur && cur !== "empty" ? cur : "";
  };
  const tile = s => {
    const cur = modOf(s),
      mod = DES.modules[cur],
      req = slots[s].req;
    const t = el(EDITING ? "button" : "div", "dtile" + (cur ? "" : " empty") + (req ? " req" : ""));
    const label = slotLabel(s) + ": " + (mod ? mod.name : cur || "empty") + (req && !cur ? " (required)" : "");
    t.title = label;
    t.setAttribute("aria-label", label);
    if (cur) t.innerHTML = `<svg viewBox="0 0 24 24" aria-hidden="true"><use href="#ic-${mod ? modIcon(mod) : "gear"}"/></svg>` +
      (mod && modTier(mod) ? `<i>${modTier(mod)}</i>` : "");
    if (EDITING) { // the module itself is picked in the list on the right
      t.type = "button";
      t.addEventListener("click", () => {
        const sel = document.getElementById("dsel-" + s);
        if (sel) {
          sel.focus();
          sel.scrollIntoView({block: "nearest"});
        }
      });
    }
    return t;
  };
  const tileRow = row => {
    const r = el("div", "dtiles");
    row.forEach(s => r.appendChild(tile(s)));
    return r;
  };
  const bay = el("div", "dbay");
  bay.appendChild(tileRow(rows[0]));
  const blue = el("div", "dblue");
  const outline = ship ? (/submarine/.test(f ? f.arch : "") ? "sub" : "ship") : plane ? "plane" : "tank";
  blue.innerHTML = `<div class="dblue-name"></div><svg viewBox="0 0 240 100" aria-hidden="true"><use href="#bp-${outline}"/></svg>`;
  blue.querySelector(".dblue-name").textContent = f ? f.name : d.frame;
  bay.appendChild(blue);
  const bottom = el("div", "dbottom");
  bottom.appendChild(tileRow(rows[1]));
  // engine / armor upgrades (tanks), XP upgrades (some ships)
  const ups = (f && f.upgrades) || [];
  if (ups.length) {
    const u = el("div", "dups");
    ups.forEach(id => {
      const up = DES.upgrades[id],
        lvl = (d.upgrades || {})[id] || 0,
        g = el("div", "dup");
      g.appendChild(el("span", "dup-name", ship ? esc(up.name) : id.includes("engine") ? "Engine" : id.includes("armor") ? "Armor" : esc(up.name)));
      const set = v => {
        d.upgrades = d.upgrades || {};
        d.upgrades[id] = Math.max(0, Math.min(up.max, v));
        changed();
      };
      const minus = edBtn("−", "Lower", () => set(lvl - 1)),
        plus = edBtn("+", "Raise", () => set(lvl + 1));
      minus.disabled = plus.disabled = !EDITING;
      const ctl = el("div", "dup-ctl");
      ctl.append(minus, el("b", null, String(lvl)), plus);
      g.appendChild(ctl);
      u.appendChild(g);
    });
    bottom.appendChild(u);
  }
  bay.appendChild(bottom);
  left.appendChild(bay);
  // stats sheet like the game's, with the in-game value from the guide's screenshot next to it
  const sheet = el("div", "dsheet");
  (ship ? SHIP_COLS : plane ? PLANE_COLS : TANK_COLS).forEach(([title, rowsC]) => {
    const c = el("div", "dcol");
    c.appendChild(el("div", "dcol-h", title));
    rowsC.forEach(([k, label, unit, opt]) => {
      if (opt && !st[k] && seen[k] == null) return;
      const v = st[k] || 0,
        row = el("div", "dstat");
      row.innerHTML = `<span></span><b></b>`;
      row.querySelector("span").textContent = label + ":";
      row.querySelector("b").textContent = fmtStat(v, unit === "%" ? "%" : "") + (unit && unit !== "%" ? " " + unit : "");
      if (seen[k] != null) {
        const g = el("i", "dseen");
        g.textContent = "game " + fmtStat(seen[k], unit === "%" ? "%" : "");
        g.title = "As shown in game in the guide (research and MIO bonuses included)";
        row.appendChild(g);
      }
      c.appendChild(row);
    });
    sheet.appendChild(c);
  });
  right.appendChild(sheet);
  // what each slot holds (the game shows this only on hover); edit mode picks modules here
  const list = el("div", "dmods");
  list.appendChild(el("div", "dmods-h", "Modules"));
  [...rows[0], ...rows[1]].forEach(s => {
    const cur = modOf(s),
      mod = DES.modules[cur],
      row = el("div", "dmod" + (cur ? "" : " empty") + (slots[s].req && !cur ? " req" : ""));
    row.innerHTML = `<span class="dmod-ico"><svg viewBox="0 0 24 24" aria-hidden="true"><use href="#ic-${mod ? modIcon(mod) : "gear"}"/></svg></span><span class="dmod-slot"></span>`;
    row.querySelector(".dmod-slot").textContent = slotLabel(s);
    if (EDITING) {
      const sel = el("select", "ed-select");
      sel.id = "dsel-" + s;
      sel.setAttribute("aria-label", slotLabel(s));
      sel.appendChild(el("option", null, "— empty —")).value = "";
      const cats = slotCats(d, s);
      Object.values(DES.modules).filter(m => cats.includes(m.cat)).sort((a, b) => a.cat.localeCompare(b.cat) || a.name.localeCompare(b.name))
        .forEach(m => {
          const o = el("option");
          o.value = m.id;
          o.textContent = m.name;
          sel.appendChild(o);
        });
      sel.value = cur;
      sel.addEventListener("change", () => {
        d.modules = d.modules || {};
        if (sel.value) d.modules[s] = sel.value;
        else delete d.modules[s];
        changed();
      });
      row.appendChild(sel);
    } else {
      const n = el("span", "dmod-name");
      n.textContent = mod ? mod.name : cur || (slots[s].req ? "Empty (required)" : "Empty");
      row.appendChild(n);
    }
    list.appendChild(row);
  });
  right.appendChild(list);
  const cost = el("div", "dcost");
  cost.innerHTML = "Production cost: <b></b>" + (seen.build_cost_ic != null ? " <i class='dseen'></i>" : "");
  cost.querySelector("b").textContent = fmtStat(st.build_cost_ic || 0);
  if (seen.build_cost_ic != null) cost.querySelector("i").textContent = "game " + fmtStat(seen.build_cost_ic);
  right.appendChild(cost);
  // who uses it
  const role = DES.archetypes[d.role] || {},
    users = ship ? [shipClass(d)].filter(Boolean).map(u => ({
      name: u.name
    })) : role.usedBy || [];
  if (users.length) right.appendChild(el("div", "duse", "Used by: " + users.map(u => "<b>" + esc(u.name) + "</b>" + (u.n ? " (" + u.n + " per battalion)" : "")).join(", ")));
  const warns = designWarnings(d);
  if (warns.length) right.appendChild(el("ul", "dwarn", warns.map(w => "<li>" + esc(w) + "</li>").join("")));
  const note = el("div", "dnote");
  note.innerHTML = (d.n ? "<p></p>" : "") + "<p class='dsmall'>Stats are the design's own, from the patch " + esc(DES.patch) + " game files. Research" +
    (d.mio ? ", the " + esc(d.mio) + " MIO" : " and MIO") + " bonuses come on top in game, so the in-game numbers (\"game\") can be higher." +
    (ship ? " Ship stats haven't been checked against an in-game screen yet." : "") + "</p>";
  if (d.n) note.querySelector("p").textContent = d.n;
  if (d.img && G.images[d.img]) {
    const im = G.images[d.img],
      b = el("button", "shotbtn");
    b.type = "button";
    b.textContent = "▸ In-game screen";
    b.addEventListener("click", () => openLB(d.img, b));
    note.appendChild(b);
    if (d.ts && G.meta.video) {
      note.appendChild(document.createTextNode(" "));
      note.appendChild(tsLink(d.ts));
    }
  }
  if (EDITING) {
    note.appendChild(confirmTwice(edBtn("Delete design", "Delete this design", () => {}, "del"), () => {
      G.designs.splice(designSel, 1);
      designSel = 0;
      saveEdits();
      renderDesigns();
    }));
  }
  right.appendChild(note);
  body.append(left, right);
  box.appendChild(body);
}
