/*
 * Doctrines tab: the four doctrine folders like the in-game screen, the army/navy/air spirits, and everything the
 * guide's choices give in one list.
 *
 * Game facts come from guides/trees/doctrines-*.js (DOC). The guide's choices are G.doctrines: per folder a grand
 * doctrine and a subdoctrine per track (in the order taken), plus the spirits it takes. A choice is done when the plan
 * step it's tied to is ticked.
 */

const DOC_SUBS = [["land", "Land"], ["naval", "Naval"], ["air", "Air"], ["special_forces", "Special forces"], ["spirits", "Spirits"], ["bonuses", "Bonuses"]];
const DOC_ICON = {land: "helmet", naval: "ship", air: "plane", special_forces: "star", army: "helmet", navy: "ship"};
const ROMAN = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII"];
const docPicks = () => (G.doctrines = G.doctrines || {}, G.doctrines.folders = G.doctrines.folders || [], G.doctrines.spirits = G.doctrines.spirits || [], G.doctrines);
const folderPick = fid => docPicks().folders.find(x => x.folder === fid);
const docSub = () => DOC_SUBS.some(([k]) => k === prefs.docSub) ? prefs.docSub : "land";

function buildDoctrines() {
  if (!DOC) return;
  document.querySelector('[data-tab="doctrines"]').hidden = false;
  renderDoctrines();
}

function renderDoctrines() {
  const sub = docSub(),
    bar = document.getElementById("docSubs");
  bar.innerHTML = "";
  DOC_SUBS.forEach(([k, label]) => {
    if (DOC.folders.length && !["spirits", "bonuses"].includes(k) && !DOC.folders.some(f => f.id === k)) return;
    const b = el("button");
    b.type = "button";
    b.setAttribute("role", "tab");
    b.setAttribute("aria-selected", k === sub);
    b.textContent = label;
    b.addEventListener("click", () => {
      prefs.docSub = k;
      savePrefs();
      renderDoctrines();
    });
    bar.appendChild(b);
  });
  const box = document.getElementById("docView");
  box.innerHTML = "";
  if (sub === "spirits") renderSpirits(box);
  else if (sub === "bonuses") renderBonuses(box);
  else renderFolderView(box, sub);
}

const fxList = (lines, cls) => el("ul", "dcfx" + (cls ? " " + cls : ""), (lines || []).map(l => "<li>" + esc(l) + "</li>").join("") || "<li class='none'>No direct effect listed</li>");

// the guide's step for a choice, its done state, and the note and screenshot buttons
function docStepLine(pick) {
  const box = el("div", "dcstep");
  if (!pick) return box;
  const link = planSteps()[pick.step],
    done = !!store.ticks[pick.step];
  if (EDITING) {
    const ss = el("select", "ed-select");
    ss.setAttribute("aria-label", "Plan step");
    ss.appendChild(el("option", null, "—")).value = "";
    (G.plan || []).forEach(g => {
      const og = el("optgroup");
      og.label = g.title || "";
      g.steps.forEach(s => {
        const o = el("option");
        o.value = s.id;
        o.textContent = s.t.slice(0, 70);
        og.appendChild(o);
      });
      ss.appendChild(og);
    });
    ss.value = pick.step || "";
    ss.addEventListener("change", () => {
      if (ss.value) pick.step = ss.value;
      else delete pick.step;
      saveEdits();
      renderDoctrines();
    });
    box.append(ss, edText(pick.n, "Note (optional)", v => {
      if (v) pick.n = v;
      else delete pick.n;
      saveEdits();
    }, "ed-note"));
    return box;
  }
  if (link) box.appendChild(el("span", "dcwhen" + (done ? " done" : ""), (done ? "✓ " : "") + esc(link.s.t)));
  if (pick.n) box.appendChild(el("p", "dcnote", esc(pick.n)));
  if (pick.img && G.images[pick.img]) {
    const b = el("button", "shotbtn");
    b.type = "button";
    b.textContent = "▸ In-game screen";
    b.addEventListener("click", () => openLB(pick.img, b));
    box.appendChild(b);
    if (pick.ts && G.meta.video) {
      box.appendChild(document.createTextNode(" "));
      box.appendChild(tsLink(pick.ts));
    }
  }
  return box;
}

/* one folder, like the game: the grand doctrines on top, then a column per track with the subdoctrine, its rewards
   up the mastery bar and the grand doctrine's milestone for completing the track */
function renderFolderView(box, fid) {
  const pick = folderPick(fid),
    grands = Object.values(DOC.grand).filter(g => g.folder === fid),
    chosen = pick && DOC.grand[pick.grand],
    done = pick && !!store.ticks[pick.step];
  const redo = () => {
    saveEdits();
    renderDoctrines();
  };
  // grand doctrines
  const gwrap = el("div", "dcgrands");
  grands.forEach(g => {
    const on = chosen === g,
      c = el(EDITING ? "button" : "div", "dcgrand" + (on ? " picked" : "") + (on && done ? " done" : "") + (chosen && !on ? " off" : ""));
    if (EDITING) {
      c.type = "button";
      c.title = on ? "The guide's grand doctrine" : "Make this the guide's grand doctrine";
      c.addEventListener("click", () => {
        let p = folderPick(fid);
        if (!p) docPicks().folders.push(p = {id: uid("dc."), folder: fid, subs: []});
        if (p.grand !== g.id) {
          p.grand = g.id;
          p.subs = (p.subs || []).filter(x => g.tracks.includes(x.track));
        }
        redo();
      });
    }
    c.innerHTML = `<div class="dcgrand-h"><span class="dslot-ico"><svg viewBox="0 0 24 24"><use href="#ic-${DOC_ICON[fid] || "star"}"/></svg></span><b></b><i></i></div>`;
    c.querySelector("b").textContent = g.name;
    c.querySelector("i").textContent = g.xp + " " + (g.xpType || "") + " XP";
    if (on) c.prepend(el("div", "dcbanner", done ? "Guide pick · done" : "Guide pick"));
    c.appendChild(fxList(g.fx));
    gwrap.appendChild(c);
  });
  box.appendChild(gwrap);
  if (pick) box.appendChild(docStepLine(pick));
  else box.appendChild(el("p", "dcempty", EDITING ? "Click a grand doctrine to pick it for this guide." : "The guide doesn't choose doctrines in this folder."));
  // tracks
  const tracks = chosen ? chosen.tracks : [...new Set(grands.flatMap(g => g.tracks))];
  const cols = el("div", "dctracks");
  tracks.forEach((t, ti) => {
    const tr = DOC.tracks[t] || {name: t},
      chosenSub = pick && (pick.subs || []).find(x => x.track === t),
      order = pick ? (pick.subs || []).indexOf(chosenSub) : -1,
      s = chosenSub && DOC.subs[chosenSub.sub],
      col = el("section", "dctrack" + (s ? " has" : ""));
    col.appendChild(el("div", "dtitle", esc(tr.name)));
    const options = Object.values(DOC.subs).filter(x => x.track === t);
    if (EDITING && pick) {
      const sel = el("select", "ed-select dcsel");
      sel.setAttribute("aria-label", tr.name + " subdoctrine");
      sel.appendChild(el("option", null, "— none —")).value = "";
      options.forEach(o => {
        const op = el("option");
        op.value = o.id;
        op.textContent = o.name + " (" + o.xp + " XP)";
        sel.appendChild(op);
      });
      sel.value = s ? s.id : "";
      sel.addEventListener("change", () => {
        pick.subs = pick.subs || [];
        const i = pick.subs.findIndex(x => x.track === t);
        if (!sel.value) {
          if (i >= 0) pick.subs.splice(i, 1);
        } else if (i >= 0) pick.subs[i].sub = sel.value;
        else pick.subs.push({track: t, sub: sel.value});
        redo();
      });
      col.appendChild(sel);
      if (order >= 0) {
        const mv = el("div", "dcmove");
        mv.append(el("span", null, "Taken " + (order + 1) + " of " + pick.subs.length), edBtn("◀", "Take earlier", () => {
          if (order) {
            pick.subs.splice(order - 1, 0, pick.subs.splice(order, 1)[0]);
            redo();
          }
        }), edBtn("▶", "Take later", () => {
          if (order < pick.subs.length - 1) {
            pick.subs.splice(order + 1, 0, pick.subs.splice(order, 1)[0]);
            redo();
          }
        }));
        col.appendChild(mv);
      }
    }
    if (s) {
      const card = el("div", "dcsub picked" + (done ? " done" : ""));
      card.innerHTML = `<div class="dcsub-h"><span class="mnum"></span><b></b><i></i></div>`;
      card.querySelector(".mnum").textContent = order + 1;
      card.querySelector(".mnum").title = "Order the guide takes it";
      card.querySelector("b").textContent = s.name;
      card.querySelector("i").textContent = s.xp + " XP";
      card.appendChild(fxList(s.fx));
      col.appendChild(card);
      // rewards up the mastery bar
      const ladder = el("ol", "dcladder");
      s.rewards.forEach((r, i) => {
        const li = el("li", i % 2 ? "right" : "left");
        li.innerHTML = `<span class="dcm"></span><span class="dcr"><b></b></span>`;
        li.querySelector(".dcm").textContent = r.mastery;
        li.querySelector("b").textContent = (ROMAN[i] || i + 1) + " · " + r.name;
        li.querySelector(".dcr").appendChild(fxList(r.fx, "small"));
        ladder.appendChild(li);
      });
      col.appendChild(ladder);
    } else if (!EDITING) col.appendChild(el("p", "dcempty", pick ? "Left empty by the guide." : ""));
    // the grand doctrine's milestone for completing this track
    const ms = chosen && chosen.milestones[ti];
    if (ms && ms.length) {
      const m = el("div", "dcmile");
      m.appendChild(el("b", null, "Milestone · track complete"));
      m.appendChild(fxList(ms, "small"));
      col.appendChild(m);
    }
    // the other subdoctrines this track can take
    const others = options.filter(o => !s || o.id !== s.id);
    if (others.length) {
      const d = el("details", "dcothers");
      d.appendChild(el("summary", null, (s ? "Other subdoctrines" : "Subdoctrines") + " (" + others.length + ")"));
      others.forEach(o => {
        const it = el("div", "dcother");
        it.innerHTML = "<b></b><i></i>";
        it.querySelector("b").textContent = o.name;
        it.querySelector("i").textContent = o.xp + " XP";
        it.appendChild(fxList(o.fx, "small"));
        d.appendChild(it);
      });
      col.appendChild(d);
    }
    cols.appendChild(col);
  });
  box.appendChild(cols);
  box.appendChild(el("p", "foot", "From the patch " + esc(DOC.patch) + " game files with every DLC. Rewards unlock as the track gains mastery " +
    "(the number is the total needed); the milestone comes with completing the track. Effects are summarised in our own words and can change between patches."));
}

/* army, navy and air spirits: one column per branch, grouped by slot, the guide's picks highlighted */
function renderSpirits(box) {
  const picks = docPicks().spirits,
    steps = planSteps();
  const pickOf = id => picks.findIndex(x => x.spirit === id);
  const top = el("div", "spick");
  const head = el("div", "pch-h");
  head.innerHTML = "<b>Spirits the guide takes</b><span></span>";
  head.querySelector("span").textContent = picks.length ? picks.filter(x => store.ticks[x.step]).length + " of " + picks.length + " done" : "none yet";
  top.appendChild(head);
  const ol = el("ol", "sppicks");
  picks.forEach((x, i) => {
    const sp = DOC.spirits[x.spirit],
      li = el("li", store.ticks[x.step] ? "done" : "");
    li.innerHTML = "<b></b><span class='sstep'></span>";
    li.querySelector("b").textContent = (store.ticks[x.step] ? "✓ " : "") + (sp ? sp.name : x.spirit) + (sp ? " · " + DOC.slots[sp.slot].cost + " " + sp.branch + " XP" : "");
    if (EDITING) {
      li.querySelector(".sstep").appendChild(docStepLine(x));
      li.append(edBtn("▲", "Earlier", () => {
        if (i) {
          picks.splice(i - 1, 0, picks.splice(i, 1)[0]);
          saveEdits();
          renderDoctrines();
        }
      }), edBtn("▼", "Later", () => {
        if (i < picks.length - 1) {
          picks.splice(i + 1, 0, picks.splice(i, 1)[0]);
          saveEdits();
          renderDoctrines();
        }
      }), edBtn("✕", "Not taken", () => {
        picks.splice(i, 1);
        saveEdits();
        renderDoctrines();
      }, "del"));
    } else {
      const link = steps[x.step];
      li.querySelector(".sstep").textContent = link ? link.s.t : "";
      if (x.n) li.appendChild(el("span", "snote", esc(x.n)));
    }
    ol.appendChild(li);
  });
  top.appendChild(ol);
  if (G.doctrines.spiritsNote) top.appendChild(el("p", "dsmall", esc(G.doctrines.spiritsNote)));
  if (EDITING) top.appendChild(el("p", "dsmall", "Use ★ on a spirit below to take it."));
  box.appendChild(top);
  const grid = el("div", "dcspirits");
  [["army", "Army spirits"], ["navy", "Navy spirits"], ["air", "Air spirits"]].forEach(([br, title]) => {
    const col = el("section", "pwin dcbranch");
    col.appendChild(el("div", "dtitle", esc(title)));
    const list = el("div", "splist");
    Object.values(DOC.slots).filter(s => s.branch === br).forEach(slot => {
      const sps = Object.values(DOC.spirits).filter(s => s.slot === slot.id);
      if (!sps.length) return;
      list.appendChild(el("div", "sptag", esc(slot.name) + ` <i>${slot.cost} XP</i>`));
      sps.forEach(sp => {
        const n = pickOf(sp.id),
          x = picks[n],
          done = x && store.ticks[x.step],
          c = el("article", "spcard" + (n >= 0 ? " picked" : "") + (done ? " done" : ""));
        if (n >= 0) {
          const banner = el("div", "spbanner");
          banner.innerHTML = "<span class='mnum'></span><span></span>";
          banner.firstChild.textContent = n + 1;
          banner.lastChild.textContent = done ? "Guide pick · done" : "Guide pick";
          c.appendChild(banner);
        }
        const h = el("div", "sphead");
        h.innerHTML = `<span class="dslot-ico"><svg viewBox="0 0 24 24"><use href="#ic-${DOC_ICON[br] || "plane"}"/></svg></span><b></b>`;
        h.querySelector("b").textContent = sp.name;
        if (EDITING) {
          const b = edBtn(n >= 0 ? "★ Taken" : "☆ Take", n >= 0 ? "Not taken" : "Take this spirit", () => {
            if (n >= 0) picks.splice(n, 1);
            else picks.push({id: uid("ds."), spirit: sp.id});
            saveEdits();
            renderDoctrines();
          }, "sprec");
          b.setAttribute("aria-pressed", n >= 0);
          h.appendChild(b);
        }
        c.appendChild(h);
        c.appendChild(fxList(sp.fx, "small"));
        if (sp.req) c.appendChild(el("p", "dcreq", "Needs: " + esc(sp.req.join("; "))));
        list.appendChild(c);
      });
    });
    col.appendChild(list);
    grid.appendChild(col);
  });
  grid.classList.toggle("haspicks", picks.length > 0);
  box.appendChild(grid);
  box.appendChild(el("p", "foot", "XP costs are the slot's base cost from the patch " + esc(DOC.patch) + " files; advisors and focuses can lower them. " +
    "Spirits that belong to another country are left out."));
}

/* everything the guide's choices give, in one place */
function renderBonuses(box) {
  const wrap = el("div", "dcbonus");
  const card = (title, sub, lines, done) => {
    const c = el("section", "dcbcard" + (done ? " done" : ""));
    c.innerHTML = "<div class='dcb-h'><b></b><i></i></div>";
    c.querySelector("b").textContent = title;
    c.querySelector("i").textContent = sub || "";
    c.appendChild(fxList(lines));
    return c;
  };
  DOC.folders.forEach(f => {
    const pick = folderPick(f.id),
      g = pick && DOC.grand[pick.grand];
    if (!g) return;
    const done = !!store.ticks[pick.step],
      sec = el("div", "dcbsec");
    sec.appendChild(el("h3", null, esc(f.name) + " · " + esc(g.name)));
    const cards = el("div", "dcbcards");
    cards.appendChild(card(g.name, "grand doctrine", g.fx, done));
    (pick.subs || []).forEach((x, i) => {
      const s = DOC.subs[x.sub];
      if (!s) return;
      const ti = g.tracks.indexOf(x.track);
      cards.appendChild(card((i + 1) + ". " + s.name, (DOC.tracks[x.track] || {}).name + " · on taking it", s.fx, done));
      const rc = card(s.name + " rewards", "up to " + (s.rewards.length ? s.rewards[s.rewards.length - 1].mastery : 0) + " mastery", [], false);
      rc.querySelector(".dcfx").replaceWith(el("ol", "dcrew", s.rewards.map((r, ri) =>
        `<li><b>${ROMAN[ri] || ri + 1} · ${esc(r.name)}</b> <i>${r.mastery}</i>${fxList(r.fx, "small").outerHTML}</li>`).join("")));
      cards.appendChild(rc);
      if (ti >= 0 && (g.milestones[ti] || []).length) cards.appendChild(card((DOC.tracks[x.track] || {}).name + " milestone", "track complete", g.milestones[ti], false));
    });
    sec.appendChild(cards);
    wrap.appendChild(sec);
  });
  const sp = docPicks().spirits.filter(x => DOC.spirits[x.spirit]);
  if (sp.length) {
    const sec = el("div", "dcbsec");
    sec.appendChild(el("h3", null, "Spirits"));
    const cards = el("div", "dcbcards");
    sp.forEach(x => {
      const s = DOC.spirits[x.spirit];
      cards.appendChild(card(s.name, DOC.slots[s.slot].name + " · " + DOC.slots[s.slot].cost + " " + s.branch + " XP", s.fx, !!store.ticks[x.step]));
    });
    sec.appendChild(cards);
    wrap.appendChild(sec);
  }
  if (!wrap.children.length) wrap.appendChild(el("p", "dcempty", "The guide doesn't choose any doctrines or spirits yet."));
  box.appendChild(wrap);
  box.appendChild(el("p", "foot", "What the guide's doctrines and spirits give, from the patch " + esc(DOC.patch) + " files: green once the step they're tied to is ticked. " +
    "Rewards and milestones come later, as the tracks gain mastery."));
}
