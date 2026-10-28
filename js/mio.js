/*
 * MIOs tab: military industrial organisation trait trees with the guide's queue.
 *
 * MIOs: every German military industrial organisation's trait tree, from guides/trees/mio-*.js, with the guide's
 * trait queue numbered on it. Edit mode: click a trait to add it to the queue or take it out.
 */

let mioSel = null,
  mioTrait = null;
const mioGroup = o => {
  const t = o.types.join(" ");
  return /plane|airframe|fighter|bomber|helicopter/.test(t) ? "Aircraft" : /ship|submarine|cruiser|battleship|carrier|screen/.test(t) ? "Naval" :
    /tank|armor|chassis/.test(t) ? "Tanks" : "Land equipment";
};
const guideMio = id => (G.mios || []).find(m => m.org === id);

function mioIssues(org, gm) { // queue order checks: parents before, nothing exclusive
  const by = {},
    at = {};
  org.traits.forEach(t => by[t.id] = t);
  gm.order.forEach((id, i) => at[id] = i);
  const nm = id => (by[id] || {}).name || id,
    out = [];
  gm.order.forEach((id, i) => {
    const t = by[id];
    if (!t) {
      out.push("Unknown trait " + id);
      return;
    }
    (t.all || []).forEach(p => {
      if (!(at[p] < i)) out.push(t.name + " needs " + nm(p) + " first");
    });
    if (t.any && t.any.length) {
      const n = t.any.filter(p => at[p] < i).length;
      if (n < (t.need || 1)) out.push(t.name + " needs " + (t.need > 1 ? t.need + " of " : "one of ") + t.any.map(nm).join(", ") + " first");
    }
    (t.ex || []).forEach(x => {
      if (at[x] != null && at[x] > i) out.push(t.name + " and " + nm(x) + " can't both be taken");
    });
  });
  return out;
}

function buildMIO() {
  if (!MIO || !Object.keys(MIO.orgs).length) return;
  document.querySelector('[data-tab="mio"]').hidden = false;
  renderMIO();
}

function renderMIO() {
  const orgs = MIO.orgs,
    gms = G.mios || [];
  if (!mioSel || !orgs[mioSel]) mioSel = (gms.find(m => orgs[m.org]) || {}).org || Object.keys(orgs)[0];
  // picker: the guide's MIOs as buttons, every other one in a list by kind
  const pick = document.getElementById("mPick");
  pick.innerHTML = "";
  gms.filter(m => orgs[m.org]).forEach(m => {
    const b = el("button", "pstate mguide");
    b.type = "button";
    b.setAttribute("aria-pressed", m.org === mioSel);
    b.innerHTML = "<span class='pn'>★</span><b></b><span class='pd'></span>";
    b.querySelector("b").textContent = orgs[m.org].name;
    b.querySelector(".pd").textContent = m.order.length + " traits queued";
    b.addEventListener("click", () => {
      mioSel = m.org;
      mioTrait = null;
      renderMIO();
    });
    pick.appendChild(b);
  });
  const sel = el("select", "ed-select mall");
  sel.setAttribute("aria-label", "All German MIOs");
  const groups = {};
  Object.values(orgs).forEach(o => (groups[mioGroup(o)] = groups[mioGroup(o)] || []).push(o));
  Object.entries(groups).forEach(([g, os]) => {
    const og = el("optgroup");
    og.label = g;
    os.sort((a, b) => a.name.localeCompare(b.name)).forEach(o => {
      const op = el("option");
      op.value = o.id;
      op.textContent = o.name + (guideMio(o.id) ? " ★" : "");
      og.appendChild(op);
    });
    sel.appendChild(og);
  });
  sel.value = mioSel;
  sel.addEventListener("change", () => {
    mioSel = sel.value;
    mioTrait = null;
    renderMIO();
  });
  const lab = el("label", "mall-l");
  lab.append(document.createTextNode("All " + Object.keys(orgs).length + " German MIOs "), sel);
  pick.appendChild(lab);
  renderMioInfo();
  renderMioTree();
}

function renderMioInfo() {
  const org = MIO.orgs[mioSel],
    gm = guideMio(mioSel),
    box = document.getElementById("mInfo");
  box.innerHTML = "";
  const by = {};
  org.traits.forEach(t => by[t.id] = t);
  const h = el("div", "dname");
  h.textContent = org.name;
  box.appendChild(h);
  const sec = (title, fill) => {
    const s = el("div", "msec");
    s.appendChild(el("div", "dcol-h", title));
    fill(s);
    box.appendChild(s);
    return s;
  };
  sec("Equipment", s => s.appendChild(el("p", "dsmall", esc(org.types.map(t => MIO.types[t] || t).join(", ")))));
  if (org.initial) sec("Initial trait", s => {
    const p = el("p", "dsmall");
    p.innerHTML = "<b></b><br>";
    p.querySelector("b").textContent = org.initial.name;
    p.appendChild(document.createTextNode(org.initial.fx.join(", ")));
    s.appendChild(p);
  });
  if (gm) {
    const steps = planSteps(),
      link = steps[gm.step];
    sec("In the guide", s => {
      if (EDITING) {
        const ssel = el("select", "ed-select");
        ssel.setAttribute("aria-label", "Plan step");
        (G.plan || []).forEach(g => {
          const og = el("optgroup");
          og.label = g.title || "";
          g.steps.forEach(st => {
            const o = el("option");
            o.value = st.id;
            o.textContent = st.t.slice(0, 60);
            og.appendChild(o);
          });
          ssel.appendChild(og);
        });
        ssel.value = gm.step || "";
        ssel.addEventListener("change", () => {
          gm.step = ssel.value;
          saveEdits();
        });
        s.append(ssel, edText(gm.n, "Note (optional)", v => {
          if (v) gm.n = v;
          else delete gm.n;
          saveEdits();
        }, "ed-note"));
        const ds = el("div", "mdes");
        ds.appendChild(el("span", "dsmall", "Assigned to: "));
        (G.designs || []).forEach(d => {
          const l = el("label"),
            cb = el("input");
          cb.type = "checkbox";
          cb.checked = (gm.designs || []).includes(d.id);
          cb.addEventListener("change", () => {
            gm.designs = (G.designs || []).filter(x => x.id === d.id ? cb.checked : (gm.designs || []).includes(x.id)).map(x => x.id);
            saveEdits();
          });
          l.append(cb, document.createTextNode(" " + d.name));
          ds.appendChild(l);
        });
        s.appendChild(ds);
        s.appendChild(confirmTwice(edBtn("Remove from guide", "Stop using this MIO in the guide", () => {}, "del"), () => {
          G.mios.splice(G.mios.indexOf(gm), 1);
          saveEdits();
          renderMIO();
        }));
      } else {
        if (link) {
          const p = el("p", "dsmall");
          p.textContent = (store.ticks[gm.step] ? "✓ " : "") + link.s.t;
          s.appendChild(p);
        }
        const des = (gm.designs || []).map(id => (G.designs || []).find(d => d.id === id)).filter(Boolean);
        if (des.length) {
          const p = el("p", "dsmall");
          p.innerHTML = "Assign to: <b></b>";
          p.querySelector("b").textContent = des.map(d => d.name).join(", ");
          s.appendChild(p);
        }
        if (gm.n) {
          const p = el("p", "dsmall");
          p.textContent = gm.n;
          s.appendChild(p);
        }
        if (gm.img && G.images[gm.img]) {
          const b = el("button", "shotbtn");
          b.type = "button";
          b.textContent = "▸ In-game screen";
          b.addEventListener("click", () => openLB(gm.img, b));
          s.appendChild(b);
          if (gm.ts && G.meta.video) {
            s.appendChild(document.createTextNode(" "));
            s.appendChild(tsLink(gm.ts));
          }
        }
      }
    });
    sec("Trait queue (" + gm.order.length + ")", s => {
      const ol = el("ol", "mqueue");
      gm.order.forEach((id, i) => {
        const t = by[id] || {
            name: id,
            fx: []
          },
          li = el("li");
        li.innerHTML = "<b></b><span></span>";
        li.querySelector("b").textContent = t.name;
        li.querySelector("span").textContent = t.fx.join(", ");
        if (EDITING) li.append(edBtn("▲", "Earlier", () => {
            if (i) {
              gm.order.splice(i - 1, 0, gm.order.splice(i, 1)[0]);
              saveEdits();
              renderMIO();
            }
          }),
          edBtn("▼", "Later", () => {
            if (i < gm.order.length - 1) {
              gm.order.splice(i + 1, 0, gm.order.splice(i, 1)[0]);
              saveEdits();
              renderMIO();
            }
          }),
          edBtn("✕", "Take out of the queue", () => {
            gm.order.splice(i, 1);
            saveEdits();
            renderMIO();
          }, "del"));
        li.addEventListener("mouseenter", () => {
          mioTrait = id;
          renderMioDetail();
        });
        ol.appendChild(li);
      });
      s.appendChild(ol);
      if (EDITING) s.appendChild(el("p", "dsmall", "Click a trait in the tree to add it to the end of the queue, or click it again to take it out."));
      mioIssues(org, gm).forEach(w => s.appendChild(el("div", "dwarn", "⚠ " + esc(w))));
    });
  } else if (EDITING) {
    box.appendChild(edBtn("+ Use this MIO in the guide", "Add this MIO to the guide", () => {
      (G.mios = G.mios || []).push({
        id: uid("mio."),
        org: mioSel,
        order: [],
        designs: []
      });
      saveEdits();
      renderMIO();
    }, "dadd"));
  }
  box.appendChild(el("div", "mdetail", ""));
  renderMioDetail();
}

function renderMioDetail() {
  const box = document.querySelector("#mInfo .mdetail");
  if (!box) return;
  const org = MIO.orgs[mioSel],
    by = {};
  org.traits.forEach(t => by[t.id] = t);
  const t = by[mioTrait];
  box.innerHTML = "";
  if (!t) {
    box.appendChild(el("p", "dsmall", "Hover or click a trait to see what it does."));
    return;
  }
  const nm = id => (by[id] || {}).name || id;
  box.appendChild(el("div", "dcol-h", esc(t.name)));
  const lines = [...t.fx];
  if (t.all) lines.push("Needs " + t.all.map(nm).join(" and "));
  if (t.any) lines.push("Needs " + (t.need > 1 ? t.need + " of " : "one of ") + t.any.map(nm).join(", "));
  if (t.ex) lines.push("Can't take with " + t.ex.map(nm).join(", "));
  if (t.for) lines.push("Only for " + t.for.map(x => MIO.types[x] || x).join(", "));
  lines.forEach(l => box.appendChild(el("p", "dsmall", esc(l))));
}

function renderMioTree() {
  const org = MIO.orgs[mioSel],
    gm = guideMio(mioSel),
    wrap = document.getElementById("mTree");
  wrap.innerHTML = "";
  document.getElementById("mTitle").textContent = org.name;
  const ts = org.traits,
    xs = ts.map(t => t.x).concat(org.headers.map(h => h.x)),
    minX = Math.min(...xs),
    maxX = Math.max(...xs),
    maxY = Math.max(...ts.map(t => t.y));
  const cols = maxX - minX + 1,
    CW = Math.max(62, Math.min(110, Math.floor(((wrap.clientWidth || 800) - 14) / cols))),
    CH = 104,
    TOP = 34;
  const W = cols * CW,
    H = TOP + (maxY + 1) * CH,
    cx = t => (t.x - minX) * CW + CW / 2,
    cy = t => TOP + t.y * CH + 28;
  const order = gm ? gm.order : [],
    by = {};
  ts.forEach(t => by[t.id] = t);
  const ex = new Set();
  order.forEach(id => ((by[id] || {}).ex || []).forEach(x => {
    if (!order.includes(x)) ex.add(x);
  }));
  const inner = el("div", "mcanvas");
  inner.style.width = W + "px";
  inner.style.height = H + "px";
  org.headers.forEach(h => {
    const d = el("div", "mhead");
    d.textContent = h.t;
    d.style.left = ((h.x - minX) * CW + CW / 2) + "px";
    inner.appendChild(d);
  });
  // links: parent to child as elbows (dotted when any one parent will do), exclusives as a bar with a red mark
  let svg = `<svg class="mlinks" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">`;
  ts.forEach(t => {
    [
      ["all", ""],
      ["any", " any"]
    ].forEach(([k, cls]) => (t[k] || []).forEach(pid => {
      const p = by[pid];
      if (!p) return;
      const x1 = cx(p),
        y1 = cy(p) + 24,
        x2 = cx(t),
        y2 = cy(t) - 24,
        my = y2 - 14;
      svg += `<path class="ml${cls}" d="M${x1} ${y1}V${my}H${x2}V${y2}"/>`;
    }));
    (t.ex || []).forEach(xid => {
      const o = by[xid];
      if (!o || xid < t.id) return;
      const x1 = cx(t),
        x2 = cx(o),
        y1 = cy(t),
        y2 = cy(o),
        mx = (x1 + x2) / 2,
        my = (y1 + y2) / 2;
      svg += `<path class="mlx" d="M${x1 + (x2 > x1 ? 26 : -26)} ${y1}L${x2 + (x2 > x1 ? -26 : 26)} ${y2}"/><rect class="mlxm" x="${mx - 3}" y="${my - 8}" width="6" height="16"/>`;
    });
  });
  inner.insertAdjacentHTML("beforeend", svg + "</svg>");
  ts.forEach(t => {
    const n = order.indexOf(t.id),
      b = el("button", "mnode" + (n >= 0 ? " chosen" : "") + (ex.has(t.id) ? " ex" : "") + (t.special ? " special" : "") + (t.id === mioTrait ? " sel" : ""));
    b.type = "button";
    b.style.left = (cx(t) - CW / 2) + "px";
    b.style.top = (cy(t) - 26) + "px";
    b.style.width = CW + "px";
    b.innerHTML = `<span class="mico"><svg viewBox="0 0 24 24"><use href="#ic-${esc(t.ic)}"/></svg></span><span class="mname"></span>`;
    b.querySelector(".mname").textContent = t.name;
    b.setAttribute("aria-label", t.name + (n >= 0 ? ", queued " + (n + 1) : ""));
    if (n >= 0) {
      const k = el("span", "mnum");
      k.textContent = n + 1;
      b.appendChild(k);
    }
    const show = () => {
      mioTrait = t.id;
      renderMioDetail();
      inner.querySelectorAll(".mnode.sel").forEach(x => x.classList.remove("sel"));
      b.classList.add("sel");
    };
    b.addEventListener("mouseenter", show);
    b.addEventListener("focus", show);
    b.addEventListener("click", () => {
      show();
      if (!EDITING || !gm) return;
      const i = gm.order.indexOf(t.id);
      if (i >= 0) gm.order.splice(i, 1);
      else gm.order.push(t.id);
      saveEdits();
      renderMIO();
    });
    inner.appendChild(b);
  });
  wrap.appendChild(inner);
  const legend = el("p", "foot", "Numbers are the guide's trait queue. Solid lines: needs every parent; dotted: any one of them. A red mark between two traits: you can only take one; " +
    "struck-through traits are ruled out by the guide's picks. Trees from the patch " + esc(MIO.patch) + " files.");
  wrap.appendChild(legend);
}
