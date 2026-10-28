/*
 * Special projects tab: every project Germany can run, with the guide's picks.
 *
 * Special projects: every project Germany can run, by specialization, with the guide's picks highlighted and numbered.
 * A pick is done when the step it's tied to (usually its research entry) is ticked.
 */

const SP_ICON = {
  tank: "tank",
  artillery: "artillery",
  surface_ship: "ship",
  submarine: "sub",
  aircraft: "plane",
  jet: "plane",
  helicopter: "plane",
  bomb: "plane",
  guided_bomb: "bolt",
  rocket: "bolt",
  radar: "eye",
  nuclear_warfare: "flask",
  nuclear_power: "flask"
};
const SP_ORDER = ["land", "naval", "air", "nuclear"];

function anySteps() {
  const m = {};
  [
    ["plan", "Game plan"],
    ["research", "Research"],
    ["focus", "Focus"]
  ].forEach(([k, lab]) =>
    (G[k] || []).forEach(g => g.steps.forEach(s => m[s.id] = {
      s,
      g,
      lab
    })));
  return m;
}

function buildProjects() {
  if (!SPROJ || !Object.keys(SPROJ.projects).length) return;
  document.querySelector('[data-tab="projects"]').hidden = false;
  renderProjects();
}

function renderProjects() {
  const P = SPROJ.projects,
    picks = G.projects = G.projects || [],
    steps = anySteps();
  const pickOf = id => picks.findIndex(x => x.project === id);
  // the guide's picks, in order
  const top = document.getElementById("spPick");
  top.innerHTML = "";
  const head = el("div", "pch-h");
  head.innerHTML = "<b>Recommended by the guide</b><span></span>";
  head.querySelector("span").textContent = picks.length ? picks.filter(x => store.ticks[x.step]).length + " of " + picks.length + " done" : "none yet";
  const only = !!prefs.spPicksOnly && picks.length > 0;
  const toggle = el("button", "sponly");
  toggle.type = "button";
  toggle.textContent = "Guide picks only";
  toggle.setAttribute("aria-pressed", only);
  toggle.disabled = !picks.length;
  toggle.title = only ? "Show every project" : "Hide the projects the guide doesn't recommend";
  toggle.addEventListener("click", () => {
    prefs.spPicksOnly = !prefs.spPicksOnly;
    savePrefs();
    renderProjects();
  });
  head.appendChild(toggle);
  top.appendChild(head);
  const ol = el("ol", "sppicks");
  picks.forEach((x, i) => {
    const p = P[x.project],
      link = steps[x.step],
      done = !!store.ticks[x.step],
      li = el("li", done ? "done" : "");
    li.innerHTML = "<b></b><span class='sstep'></span>";
    li.querySelector("b").textContent = (done ? "✓ " : "") + (p ? p.name : x.project);
    if (EDITING) {
      const ss = el("select", "ed-select");
      ss.setAttribute("aria-label", "Step it's tied to");
      ss.appendChild(el("option", null, "—")).value = "";
      [
        ["research", "Research"],
        ["plan", "Game plan"]
      ].forEach(([k, lab]) => (G[k] || []).forEach(g => {
        const og = el("optgroup");
        og.label = lab + " · " + (g.title || "");
        g.steps.forEach(s => {
          const o = el("option");
          o.value = s.id;
          o.textContent = s.t.slice(0, 60);
          og.appendChild(o);
        });
        ss.appendChild(og);
      }));
      ss.value = x.step || "";
      ss.addEventListener("change", () => {
        if (ss.value) x.step = ss.value;
        else delete x.step;
        saveEdits();
      });
      li.querySelector(".sstep").append(ss);
      li.append(edText(x.n, "Note (optional)", v => {
          if (v) x.n = v;
          else delete x.n;
          saveEdits();
        }, "ed-note"),
        edBtn("▲", "Earlier", () => {
          if (i) {
            picks.splice(i - 1, 0, picks.splice(i, 1)[0]);
            saveEdits();
            renderProjects();
          }
        }),
        edBtn("▼", "Later", () => {
          if (i < picks.length - 1) {
            picks.splice(i + 1, 0, picks.splice(i, 1)[0]);
            saveEdits();
            renderProjects();
          }
        }),
        edBtn("✕", "Not recommended", () => {
          picks.splice(i, 1);
          saveEdits();
          renderProjects();
        }, "del"));
    } else {
      li.querySelector(".sstep").textContent = link ? link.lab + ": " + link.s.t : "";
      if (x.n) {
        const n = el("span", "snote");
        n.textContent = x.n;
        li.appendChild(n);
      }
    }
    li.addEventListener("click", e => {
      if (e.target.closest("select,button,.ed-text")) return;
      const c = document.getElementById("sp-" + x.project);
      if (c) {
        c.scrollIntoView({
          block: "center",
          behavior: "smooth"
        });
        c.classList.add("flash");
        setTimeout(() => c.classList.remove("flash"), 1200);
      }
    });
    ol.appendChild(li);
  });
  top.appendChild(ol);
  if (EDITING) top.appendChild(el("p", "dsmall", "Use ★ on a project below to recommend it."));
  // every project, one column per specialization; parents come before their children
  const grid = document.getElementById("spGrid");
  grid.innerHTML = "";
  grid.classList.toggle("haspicks", picks.length > 0);
  const depth = (id, seen = []) => {
    const p = P[id];
    if (!p || seen.includes(id)) return 0;
    return p.parents.length ? 1 + Math.max(...p.parents.map(x => depth(x, [...seen, id]))) : 0;
  };
  const specs = [...SP_ORDER.filter(s => Object.values(P).some(p => p.spec === s)), ...new Set(Object.values(P).map(p => p.spec).filter(s => !SP_ORDER.includes(s)))];
  specs.forEach(s => {
    const col = el("section", "pwin spcol");
    const all = Object.values(P).filter(p => p.spec === s),
      nPicks = all.filter(p => pickOf(p.id) >= 0).length;
    col.appendChild(el("div", "dtitle", esc(SPROJ.specs[s] || s) + (nPicks ? ` <i class="spcount">★ ${nPicks}</i>` : "")));
    const list = el("div", "splist");
    const ps = only ? all.filter(p => pickOf(p.id) >= 0).sort((a, b) => pickOf(a.id) - pickOf(b.id)) // in the guide's order
      : all.sort((a, b) => (a.tag || "").localeCompare(b.tag || "") || depth(a.id) - depth(b.id) || a.name.localeCompare(b.name));
    if (!ps.length) list.appendChild(el("p", "spnone", "No guide picks here."));
    let lastTag = null;
    ps.forEach(p => {
      if (p.tag !== lastTag && !only) {
        lastTag = p.tag;
        list.appendChild(el("div", "sptag", esc(SPROJ.tags[p.tag] || p.tag || "Other")));
      }
      list.appendChild(projectCard(p, pickOf(p.id), picks));
    });
    col.appendChild(list);
    grid.appendChild(col);
  });
  grid.appendChild(el("p", "foot", "Breakthrough points are spent to start a project; each prototype iteration takes the days shown and adds the progress shown until 100. " +
    "From the patch " + esc(SPROJ.patch) + " files with every DLC. Effects from prototype rewards and scripts aren't listed."));
}

function projectCard(p, n, picks) {
  const P = SPROJ.projects,
    x = picks[n],
    done = x && store.ticks[x.step];
  const c = el("article", "spcard" + (n >= 0 ? " picked" : "") + (done ? " done" : ""));
  c.id = "sp-" + p.id;
  c.innerHTML = `<div class="sphead"><span class="dslot-ico"><svg viewBox="0 0 24 24"><use href="#ic-${SP_ICON[p.tag] || "flask"}"/></svg></span><b></b></div><div class="spmeta"></div>`;
  c.querySelector("b").textContent = p.name;
  if (n >= 0) { // the guide's pick: a banner on top and why it's recommended
    const banner = el("div", "spbanner");
    banner.innerHTML = `<span class="mnum"></span><span></span>`;
    banner.firstChild.textContent = n + 1;
    banner.lastChild.textContent = done ? "Guide pick · done" : "Guide pick";
    c.prepend(banner);
    if (x.n) {
      const why = el("p", "spwhy");
      why.textContent = x.n;
      c.querySelector(".spmeta").after(why);
    }
  }
  const cost = Object.entries(p.cost).map(([s, v]) => v + " " + (SPROJ.specs[s] || s).split(" ")[0].toLowerCase() + " breakthrough").join(", ") || "no breakthrough cost";
  c.querySelector(".spmeta").textContent = cost + " · " + (p.time ? p.time + " days per prototype" : "") + (p.complexity ? " · " + p.complexity.join("–") + "% per prototype" : "");
  const det = el("ul", "spfx");
  const add = (cls, t) => {
    const li = el("li", cls);
    li.textContent = t;
    det.appendChild(li);
  };
  if (p.parents.length) add("need", "After " + p.parents.map(id => (P[id] || {}).name || id).join(" and "));
  p.needs.forEach(t => add("need", "Needs: " + t.replace(/^we have researched /, "")));
  Object.keys(p.res || {}).length && add("", "Uses " + Object.entries(p.res).map(([r, v]) => v + " " + r).join(", "));
  p.out.forEach(t => add("out", t));
  if (!p.out.length) add("", "Effects come from prototype rewards or scripts.");
  c.appendChild(det);
  if (EDITING) {
    const b = edBtn(n >= 0 ? "★ Recommended" : "☆ Recommend", n >= 0 ? "Stop recommending" : "Recommend this project", () => {
      if (n >= 0) picks.splice(n, 1);
      else picks.push({
        id: uid("sp."),
        project: p.id
      });
      saveEdits();
      renderProjects();
    }, "sprec");
    b.setAttribute("aria-pressed", n >= 0);
    c.querySelector(".sphead").appendChild(b);
  }
  return c;
}
