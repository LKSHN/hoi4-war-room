/*
 * Builds & numbers tab, rendered from guide.builds.
 *
 * Builds tab, rendered from guide.builds
 */

function tsLink(ts) {
  const a = el("a", "ts");
  a.href = vlink(ts);
  a.target = "_blank";
  a.rel = "noopener";
  a.textContent = "▶ " + ts;
  return a;
}
// remember which data field an element shows, so edit mode can write changes back ([object, key, rich text?])
const bindEl = (e, obj, key, isRich) => {
  e._bind = [obj, key, !!isRich];
  return e;
};

function buildFig(it) {
  const im = G.images[it.img] || {},
    fig = el("figure", "fig" + (it.wide ? " wide" : ""));
  const shot = el("button", "shot");
  shot.dataset.img = it.img;
  shot.setAttribute("aria-label", "Enlarge " + (im.caption || it.title || "screenshot"));
  const img = el("img");
  img.src = im.file;
  img.alt = im.alt || "";
  img.loading = "lazy";
  if (im.w) {
    img.width = im.w;
    img.height = im.h;
  }
  shot.appendChild(img);
  (it.pins || []).forEach(([x, y], i) => {
    const p = el("span", "pin");
    p.style.left = x + "%";
    p.style.top = y + "%";
    p.textContent = i + 1;
    shot.appendChild(p);
  });
  shot.addEventListener("click", () => openLB(it.img, shot));
  const cap = el("figcaption"),
    row = el("div", "caprow");
  const b = el("b");
  b.textContent = it.title || "";
  row.appendChild(bindEl(b, it, "title"));
  if (it.sub) {
    row.appendChild(document.createTextNode(" · "));
    const sb = el("span");
    sb.textContent = it.sub;
    row.appendChild(bindEl(sb, it, "sub"));
  }
  if (it.ts && G.meta.video) {
    row.appendChild(document.createTextNode(" "));
    row.appendChild(tsLink(it.ts));
  }
  cap.appendChild(row);
  if (it.legend) {
    const ol = el("ol", "legend");
    it.legend.forEach((s, i) => ol.appendChild(bindEl(el("li", null, rich(s)), it.legend, i, true)));
    cap.appendChild(ol);
  }
  if (it.text) cap.appendChild(bindEl(el("p", "small", rich(it.text)), it, "text", true));
  fig.append(shot, cap);
  return fig;
}

function buildCard(it) {
  const card = el("div", "card"),
    h = el("h3");
  h.textContent = it.title || "";
  card.appendChild(bindEl(h, it, "title"));
  if (it.text) card.appendChild(bindEl(el("p", "small", rich(it.text)), it, "text", true));
  if (it.list) {
    const l = el(it.ordered ? "ol" : "ul", it.ordered ? "seq" : null);
    it.list.forEach((s, i) => l.appendChild(bindEl(el("li", null, rich(s)), it.list, i, true)));
    card.appendChild(l);
  }
  if (it.table) {
    const t = el("table", "prod");
    it.table.forEach(sec => {
      const hr = el("tr"),
        th = el("th");
      th.colSpan = 2;
      th.textContent = sec.head;
      hr.appendChild(bindEl(th, sec, "head"));
      t.appendChild(hr);
      sec.rows.forEach(row => {
        const tr = el("tr"),
          a = el("td"),
          b = el("td");
        a.textContent = row[0];
        b.textContent = row[1];
        tr.append(bindEl(a, row, 0), bindEl(b, row, 1));
        t.appendChild(tr);
      });
    });
    card.appendChild(t);
  }
  return card;
}

function buildBuilds() {
  const root = document.getElementById("builds");
  root.innerHTML = "";
  (G.builds || []).forEach(sec => {
    const s = el("div", "sect"),
      h = el("h2", "sh");
    h.textContent = sec.title;
    s.appendChild(bindEl(h, sec, "title"));
    const grid = el("div", sec.layout === "cards" ? "cards" : "figs" + (sec.layout === "narrow" ? " narrow" : ""));
    sec.items.forEach(it => grid.appendChild(it.type === "fig" ? buildFig(it) : buildCard(it)));
    s.appendChild(grid);
    root.appendChild(s);
  });
}
