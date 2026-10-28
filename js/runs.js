/*
 * Playthroughs and notes: several saved runs of the same guide, each with its own ticks, game date and notes.
 *
 * The list lives in hoi4-tool-runs:<guideId> (see openStore() in lists.js). Switching reloads the page, so every tab
 * draws from the chosen playthrough. The panel renames, duplicates, deletes and holds the playthrough's notes.
 */

const saveRuns = () => put(runsKey(), runs);
const curRun = () => runs.runs.find(r => r.id === runs.current);

function switchRun(id) {
  runs.current = id;
  saveRuns();
  location.reload();
}

function buildRuns() {
  const pick = document.getElementById("runPick");
  pick.innerHTML = "";
  runs.runs.forEach(r => {
    const o = el("option");
    o.value = r.id;
    o.textContent = r.name;
    pick.appendChild(o);
  });
  const add = el("option");
  add.value = "+new";
  add.textContent = "+ New playthrough";
  pick.appendChild(add);
  pick.value = runs.current;
  pick.onchange = () => {
    if (pick.value === "+new") newRun(false);
    else switchRun(pick.value);
  };
  const btn = document.getElementById("runBtn"),
    panel = document.getElementById("runPanel");
  btn.classList.toggle("has", !!store.note);
  btn.onclick = () => {
    panel.hidden = !panel.hidden;
    btn.setAttribute("aria-expanded", !panel.hidden);
    if (!panel.hidden) renderRunPanel();
  };
}

// a new playthrough, empty or a copy of this one (ticks, date and notes)
function newRun(copy) {
  const id = "r" + Date.now().toString(36);
  runs.runs.push({id, name: copy ? curRun().name + " (copy)" : "Playthrough " + (runs.runs.length + 1), created: new Date().toISOString().slice(0, 10)});
  if (copy) put(runStoreKey(id), JSON.parse(JSON.stringify(store)));
  switchRun(id);
}

function renderRunPanel() {
  const panel = document.getElementById("runPanel"),
    r = curRun();
  panel.innerHTML = "";
  const head = el("div", "runhead");
  const name = el("input", "ed-input runname");
  name.value = r.name;
  name.setAttribute("aria-label", "Playthrough name");
  name.addEventListener("input", () => {
    r.name = name.value.trim() || r.name;
    saveRuns();
    const o = document.querySelector('#runPick option[value="' + r.id + '"]');
    if (o) o.textContent = r.name;
  });
  const ticks = Object.keys(store.ticks).length,
    notes = Object.keys(store.notes || {}).length;
  head.append(name, el("span", "runinfo", esc(ticks + " step" + (ticks === 1 ? "" : "s") + " ticked" + (store.date ? " · " + fmtDate(store.date) : "") +
    (notes ? " · " + notes + " step note" + (notes === 1 ? "" : "s") : "") + (r.created ? " · started " + r.created : ""))));
  panel.appendChild(head);
  const ta = el("textarea", "ed-text runnote");
  ta.rows = 5;
  ta.placeholder = "Notes for this playthrough: settings, what went wrong, what to try next time...";
  ta.value = store.note || "";
  let t = null;
  ta.addEventListener("input", () => {
    clearTimeout(t);
    t = setTimeout(() => {
      if (ta.value.trim()) store.note = ta.value;
      else delete store.note;
      save();
      document.getElementById("runBtn").classList.toggle("has", !!store.note);
    }, 300);
  });
  panel.appendChild(ta);
  const tools = el("div", "runtools");
  const button = (label, fn, cls) => {
    const x = el("button", cls || null, esc(label));
    x.type = "button";
    if (fn) x.addEventListener("click", fn);
    return x;
  };
  tools.append(button("New playthrough", () => newRun(false)), button("Duplicate this one", () => newRun(true)));
  if (runs.runs.length > 1) {
    tools.appendChild(confirmTwice(button("Delete this playthrough", null, "danger"), () => {
      try {
        localStorage.removeItem(storeKey);
      } catch (e) {}
      runs.runs = runs.runs.filter(x => x.id !== r.id);
      switchRun(runs.runs[0].id);
    }));
  }
  tools.appendChild(el("span", "runinfo", "Step notes: the ✎ on each step. Everything is saved in this browser."));
  panel.appendChild(tools);
}
