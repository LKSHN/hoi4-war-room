/*
 * Construction tab: the guide's construction queues.
 *
 * Construction: the guide's construction queues, each tied to a plan step, drawn like the in-game queue.
 * Each item gets up to 15 civilian factories in queue order from what's left after consumer goods and the like.
 */

let consSel = null;
const C_MAX = 15; // civilian factories one queue item can use
const bIcon = b => ({
  infrastructure: "road",
  industrial_complex: "factory",
  arms_factory: "factory",
  synthetic_refinery: "oil",
  fuel_silo: "oil",
  dockyard: "ship",
  floating_harbor: "ship",
  naval_base: "ship",
  air_base: "plane",
  anti_air_building: "plane",
  radar_station: "eye",
  bunker: "fort",
  coastal_bunker: "fort",
  rail_way: "train",
  supply_node: "gear",
  nuclear_reactor: "flask",
  rocket_site: "bolt"
})[b] || "factory";
const stName = id => (CONS.states[id] || {}).name || "State " + id;

function consAlloc(list) {
  let left = Math.max(0, (list.civs || 0) - (list.uses || []).reduce((a, u) => a + (+u.n || 0), 0));
  const free = left;
  return {
    free,
    per: list.items.map(() => {
      const n = Math.min(C_MAX, left);
      left -= n;
      return n;
    })
  };
}
const bCost = (b, n) => {
  const d = CONS.buildings[b];
  if (!d) return 0;
  let t = 0;
  for (let i = 0; i < n; i++) t += d.cost + (d.extra || 0) * i;
  return t;
};

function buildConstruction() {
  if (!CONS || !G.construction || !(G.construction.lists || []).length) return;
  document.querySelector('[data-tab="construction"]').hidden = false;
  renderConstruction();
}

function renderConstruction() {
  const lists = G.construction.lists,
    steps = planSteps();
  const nextIdx = lists.findIndex(l => !store.ticks[l.step]);
  if (consSel == null || consSel >= lists.length) consSel = nextIdx < 0 ? lists.length - 1 : nextIdx;
  const tl = document.getElementById("cTimeline");
  tl.innerHTML = "";
  lists.forEach((l, i) => {
    const link = steps[l.step],
      done = !!store.ticks[l.step],
      b = el("button", "pstate" + (done ? " done" : "") + (i === nextIdx ? " next" : ""));
    b.type = "button";
    b.setAttribute("role", "tab");
    b.setAttribute("aria-selected", i === consSel);
    b.innerHTML = "<span class='pn'></span><b></b><span class='pd'></span>";
    b.querySelector(".pn").textContent = done ? "✓" : i + 1;
    b.querySelector("b").textContent = l.title || "List " + (i + 1);
    b.querySelector(".pd").textContent = link ? (link.g.by ? (link.g.approx ? "≈ " : "") + fmtDate(link.g.by) : link.g.title) : "no plan step";
    b.addEventListener("click", () => {
      consSel = i;
      renderConstruction();
    });
    tl.appendChild(b);
  });
  if (EDITING) tl.appendChild(edBtn("+ List", "Add a construction list after the selected one", () => {
    lists.splice(consSel + 1, 0, {
      id: uid("cons."),
      step: lists[consSel].step,
      title: "New list",
      civs: lists[consSel].civs,
      uses: JSON.parse(JSON.stringify(lists[consSel].uses || [])),
      items: []
    });
    consSel++;
    saveEdits();
    renderConstruction();
  }, "dadd"));
  const list = lists[consSel],
    wrap = document.getElementById("cWrap");
  wrap.innerHTML = "";
  wrap.append(consQueue(list), consSide(list, steps[list.step]));
}

function consQueue(list) {
  const w = el("section", "pwin cqueue"),
    al = consAlloc(list),
    redo = () => {
      saveEdits();
      renderConstruction();
    };
  w.appendChild(el("div", "dtitle", "Construction"));
  const h = el("div", "phead");
  if (EDITING) {
    h.append(el("span", null, "Civilian factories"), edInput(list.civs != null ? String(list.civs) : "", "Civilian factories", v => {
      const n = parseInt(v, 10);
      if (n >= 0) list.civs = n;
      else delete list.civs;
      saveEdits();
    }, "ed-small", "5em"));
  } else {
    h.innerHTML = "<span>Civilian factories</span><b></b>";
    h.querySelector("b").textContent = list.civs != null ? list.civs + " · " + al.free + " free for the queue" : "not given";
  }
  w.appendChild(h);
  const ol = el("ol", "clines");
  (list.uses || []).forEach((u, i) => {
    const li = el("li", "cuse");
    if (EDITING) li.append(edInput(u.name, "Used for", v => {
        u.name = v;
        saveEdits();
      }), edInput(String(u.n), "Factories", v => {
        const n = parseInt(v, 10);
        if (n >= 0) {
          u.n = n;
          saveEdits();
        }
      }, "ed-small", "4em"),
      edBtn("✕", "Remove", () => {
        list.uses.splice(i, 1);
        redo();
      }, "del"));
    else {
      li.innerHTML = "<span></span><b></b>";
      li.querySelector("span").textContent = u.name;
      li.querySelector("b").textContent = u.n;
    }
    ol.appendChild(li);
  });
  if (EDITING) {
    const li = el("li", "cuse");
    li.appendChild(edBtn("+ Factories used elsewhere", "Add consumer goods, trade or national projects", () => {
      (list.uses = list.uses || []).push({
        name: "Consumer Goods",
        n: 0
      });
      redo();
    }));
    ol.appendChild(li);
  }
  list.items.forEach((it, i) => {
    const b = CONS.buildings[it.b] || {},
      got = al.per[i],
      li = el("li", "citem b-" + it.b + (got ? "" : " idle"));
    li.innerHTML = `<span class="cn"></span><span class="cstate"></span><span class="cb"><span class="dslot-ico"><svg viewBox="0 0 24 24"><use href="#ic-${bIcon(it.b)}"/></svg></span><i></i></span>
      <span class="cfac"><b></b><span class="cbar"><span></span></span></span>`;
    li.querySelector(".cn").textContent = i + 1;
    li.querySelector(".cb i").textContent = it.n;
    li.querySelector(".cb").title = (b.name || it.b) + " × " + it.n;
    li.querySelector(".cfac b").textContent = (list.civs != null ? got : "?") + "/" + C_MAX;
    li.querySelector(".cbar span").style.width = (got / C_MAX * 100) + "%";
    if (EDITING) {
      const ss = el("select", "ed-select");
      ss.setAttribute("aria-label", "State");
      const ger = el("optgroup"),
        oth = el("optgroup");
      ger.label = "German states in 1936";
      oth.label = "Other states";
      Object.values(CONS.states).sort((a, b) => a.name.localeCompare(b.name)).forEach(s => {
        const o = el("option");
        o.value = s.id;
        o.textContent = s.name;
        (s.owner === "GER" ? ger : oth).appendChild(o);
      });
      ss.append(ger, oth);
      ss.value = it.state;
      ss.addEventListener("change", () => {
        it.state = +ss.value;
        redo();
      });
      li.querySelector(".cstate").appendChild(ss);
      const bs = el("select", "ed-select");
      bs.setAttribute("aria-label", "Building");
      Object.values(CONS.buildings).sort((a, b) => a.name.localeCompare(b.name)).forEach(x => {
        const o = el("option");
        o.value = x.id;
        o.textContent = x.name;
        bs.appendChild(o);
      });
      bs.value = it.b;
      bs.addEventListener("change", () => {
        it.b = bs.value;
        redo();
      });
      const tools = el("div", "pl-tools");
      tools.append(bs, edInput(String(it.n), "Levels", v => {
          const n = parseInt(v, 10);
          if (n > 0) {
            it.n = n;
            li.querySelector(".cb i").textContent = n;
            saveEdits();
          }
        }, "ed-small", "3.5em"),
        edBtn("▲", "Earlier in the queue", () => {
          if (i) {
            list.items.splice(i - 1, 0, list.items.splice(i, 1)[0]);
            redo();
          }
        }),
        edBtn("▼", "Later in the queue", () => {
          if (i < list.items.length - 1) {
            list.items.splice(i + 1, 0, list.items.splice(i, 1)[0]);
            redo();
          }
        }),
        confirmTwice(edBtn("✕", "Delete", () => {}, "del"), () => {
          list.items.splice(i, 1);
          redo();
        }));
      li.appendChild(tools);
    } else li.querySelector(".cstate").textContent = stName(it.state);
    ol.appendChild(li);
  });
  w.appendChild(ol);
  if (!list.items.length && !EDITING) w.appendChild(el("p", "dsmall pempty", "No queue items listed for this moment."));
  if (EDITING) w.appendChild(edBtn("+ Add to queue", "Add a building to the queue", () => {
    const last = list.items[list.items.length - 1];
    list.items.push({
      id: uid("cq."),
      state: last ? last.state : 57,
      b: last ? last.b : "arms_factory",
      n: 1
    });
    redo();
  }, "dadd"));
  return w;
}

function consSide(list, link) {
  const box = el("div", "pchanges cside");
  const head = el("div", "pch-h");
  if (EDITING) {
    const lists = G.construction.lists,
      ssel = el("select", "ed-select");
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
    ssel.value = list.step;
    ssel.addEventListener("change", () => {
      list.step = ssel.value;
      saveEdits();
      renderConstruction();
    });
    head.append(edInput(list.title, "List title", v => {
        list.title = v;
        saveEdits();
      }, "ptitle"), ssel,
      confirmTwice(edBtn("Delete list", "Delete this list", () => {}, "del"), () => {
        if (lists.length < 2) return;
        lists.splice(consSel, 1);
        consSel = Math.max(0, consSel - 1);
        saveEdits();
        renderConstruction();
      }));
  } else {
    head.innerHTML = "<b></b><span></span>";
    head.querySelector("b").textContent = list.title;
    head.querySelector("span").textContent = link ? (store.ticks[list.step] ? "✓ " : "") + link.s.t : "";
  }
  box.appendChild(head);
  if (EDITING) box.appendChild(edText(list.n, "Note (optional)", v => {
    if (v) list.n = v;
    else delete list.n;
    saveEdits();
  }, "ed-note"));
  else if (list.n) {
    const p = el("p", "dsmall");
    p.textContent = list.n;
    box.appendChild(p);
  }
  if (!EDITING && list.img && G.images[list.img]) {
    const b = el("button", "shotbtn");
    b.type = "button";
    b.textContent = "▸ In-game screen";
    b.addEventListener("click", () => openLB(list.img, b));
    box.appendChild(b);
    if (list.ts && G.meta.video) {
      box.appendChild(document.createTextNode(" "));
      box.appendChild(tsLink(list.ts));
    }
  }
  if (list.items.length) {
    // totals per building
    const tot = {};
    list.items.forEach(it => {
      const t = tot[it.b] = tot[it.b] || {
        n: 0,
        cp: 0
      };
      t.n += it.n;
      t.cp += bCost(it.b, it.n);
    });
    const tt = el("div", "ctotals");
    tt.appendChild(el("div", "dcol-h", "In this queue"));
    Object.entries(tot).forEach(([b, t]) => {
      const r = el("div", "dstat");
      r.innerHTML = "<span></span><b></b>";
      r.querySelector("span").textContent = (CONS.buildings[b] || {}).name || b;
      r.querySelector("b").textContent = t.n + " · " + Math.round(t.cp).toLocaleString("en-GB") + " CP";
      tt.appendChild(r);
    });
    box.appendChild(tt);
    // the states it builds in, with what they had on 1 Jan 1936
    const short = {
      infrastructure: "infra",
      industrial_complex: "civ",
      arms_factory: "mil",
      synthetic_refinery: "refinery",
      dockyard: "dockyard",
      air_base: "air base"
    };
    const st = el("div", "ctotals");
    st.appendChild(el("div", "dcol-h", "States"));
    [...new Set(list.items.map(it => it.state))].forEach(id => {
      const s = CONS.states[id] || {
          b: {}
        },
        add = {};
      list.items.filter(it => it.state === id).forEach(it => add[it.b] = (add[it.b] || 0) + it.n);
      const r = el("div", "cstrow");
      r.innerHTML = "<b></b><span></span><i></i>";
      r.querySelector("b").textContent = stName(id);
      r.querySelector("span").textContent = "+ " + Object.entries(add).map(([b, n]) => n + " " + (short[b] || (CONS.buildings[b] || {}).name || b)).join(", ");
      r.querySelector("i").textContent = "1936: " + (Object.entries(s.b).filter(([b]) => short[b]).map(([b, n]) => (b === "infrastructure" ? "infra " + n : n + " " + short[b])).join(", ") || "nothing");
      st.appendChild(r);
    });
    box.appendChild(st);
  }
  box.appendChild(el("p", "dsmall", "Factories per item: each item takes up to " + C_MAX + " civilian factories, in queue order, from what's left after the factories used elsewhere. " +
    "Costs are construction points per level from the patch " + esc(CONS.patch) + " files, before construction speed bonuses. The 1936 buildings come from the game's start date."));
  return box;
}
