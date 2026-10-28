"""Extract the research tree as facts: folders, techs (name, position, year, cost, links, exclusives, categories,
effects in our own words) and the techs a country starts with. Every DLC enabled, as at game start.
Usage: extract_research.py <game dir> <country history file> <out.json>"""
import sys, os, re, json, glob, collections
sys.path.insert(0, os.path.dirname(__file__))
from pdx import parse, get, first
from gamedata import load_loc, load_scripted, make_clean
from effects import Summariser

game, history, out = sys.argv[1], sys.argv[2], sys.argv[3]
loc = load_loc(game)
clean = make_clean(loc, load_scripted(game))
summ = Summariser(game, loc, clean)

# folders that exist with every DLC; doctrines have their own system since 1.17
tags = parse(open(os.path.join(game, "common", "technology_tags", "00_technology.txt"), encoding="utf-8-sig").read())
FOLDERS = {}
for k, _, v in first(tags, "technology_folders", []):
    if not isinstance(v, list) or first(v, "doctrine") == "yes" or first(v, "ledger") == "hidden":
        continue
    if summ.cond(first(v, "available", []) or []):
        FOLDERS[k] = {"id": k, "name": summ.name(k), "ledger": first(v, "ledger", "")}

# our own icon themes, from a tech's categories (first match wins)
ICONS = [("sub", r"ss_tech|submarine"), ("plane", r"air|fighter|bomber|cas_|naval_bomber|scout_plane|transport_planes|helicopter|jet"),
         ("ship", r"naval|dd_tech|ca_tech|cv_tech|bc_tech|bb_tech|tp_tech|ship|torpedo|asw|mines|marine"),
         ("tank", r"armor|armou?r|armored_cars"), ("road", r"motorized|mechanized|train_tech|logistics"),
         ("artillery", r"artillery|anti_tank|anti_air|rocket|mot_rockets"), ("fort", r"fortification"),
         ("oil", r"synth"), ("factory", r"industry|production|construction|excavation"),
         ("bolt", r"electronics|computing|radar|encryption|decryption|nuclear|night_vision"),
         ("helmet", r"infantry|support|para|engineers|recon|mountaineers|rangers|military_police|hospital|signal|maintenance|special_forces")]


def icon(cats):
    s = " ".join(cats)
    return next((t for t, rx in ICONS if re.search(rx, s)), "gear")


SKIP = {"path", "research_cost", "start_year", "folder", "ai_will_do", "categories", "allow", "allow_branch", "XOR", "xor",
        "sub_technologies", "dependencies", "doctrine", "doctrine_name", "on_research_complete", "special_project_specialization",
        "is_special_project_tech", "desc", "show_equipment_icon", "show_effect_as_desc", "force_use_small_tech_layout",
        "enable_equipments", "enable_subunits", "enable_building", "enable_equipment_modules", "enable_tactic"}


def effects(t):
    lines = []
    eq = [summ.name(x[2]) for b in get(t, "enable_equipments") for x in b if x[0] is None]
    if eq: lines.append("Unlocks equipment: " + ", ".join(eq))
    mods = [summ.name(x[2]) for b in get(t, "enable_equipment_modules") for x in b if x[0] is None]
    if mods: lines.append("Unlocks modules: " + ", ".join(mods[:6]) + (" …" if len(mods) > 6 else ""))
    su = [summ.name(x[2]) for b in get(t, "enable_subunits") for x in b if x[0] is None]
    if su: lines.append("Unlocks battalion: " + ", ".join(su))
    for b in get(t, "enable_building"):
        lines.append(f"Unlocks building: {summ.name(first(b, 'building', '?'))}")
    for k, _, v in t:
        if not k or k in SKIP or k.startswith("ai_"):   # ai_* only steers the AI
            continue
        if isinstance(v, list):
            # stat bonuses for a unit or equipment type: infantry = { soft_attack = 0.05 }
            stats = [summ.modifier(a, c) for a, _, c in v if a and not isinstance(c, list)]
            if stats:
                lines.append(f"{summ.name(k)}: " + ", ".join(stats[:4]))
        else:
            try:
                float(v)
            except ValueError:
                continue
            lines.append(summ.modifier(k, v))
    return lines[:8]


techs, row_years = {}, collections.defaultdict(dict)
for path in sorted(glob.glob(os.path.join(game, "common", "technologies", "*.txt"))):
    for block in get(parse(open(path, encoding="utf-8-sig", errors="replace").read()), "technologies"):
        consts = {k: v for k, _, v in block if k and k.startswith("@") and not isinstance(v, list)}
        num = lambda v, d=0: float(consts.get(v, v)) if v is not None else d
        year_rows = any(re.fullmatch(r"@\d{4}", k) for k in consts)   # this file lays rows out by year
        for k, _, t in block:
            if not k or k.startswith("@") or not isinstance(t, list):
                continue
            if not all(summ.cond(a) for a in get(t, "allow_branch")):
                continue
            places = []
            for f in get(t, "folder"):
                fid, pos = first(f, "name"), first(f, "position", [])
                if fid in FOLDERS:
                    places.append([fid, num(first(pos, "x"), 0), num(first(pos, "y"), 0)])
                    # year labels: the @year constant this row uses, else the tech's own start year
                    yv = first(pos, "y")
                    if isinstance(yv, str) and yv.startswith("@") and yv[1:].isdigit():
                        year = int(yv[1:])
                    else:   # files without year constants: label rows by the techs' start years
                        year = 0 if year_rows else int(first(t, "start_year", "0") or 0)
                    y = num(yv, 0)
                    if year:
                        row_years[fid][y] = min(row_years[fid].get(y, 9999), year)
            if not places:
                continue
            cats = [x[2] for b in get(t, "categories") for x in b if x[0] is None]
            # techs without a name of their own show the equipment they unlock, as in game
            eq = [x[2] for b in get(t, "enable_equipments") + get(t, "enable_equipment_modules") for x in b if x[0] is None]
            name = clean(loc[k]) if loc.get(k) else (summ.name(eq[0]) if eq else summ.name(k))
            o = {"id": k, "name": name, "f": places, "year": int(first(t, "start_year", "0") or 0),
                 "cost": num(first(t, "research_cost"), 1), "ic": icon(cats)}
            leads = [first(p, "leads_to_tech") for p in get(t, "path") if first(p, "leads_to_tech")]
            if leads: o["leads"] = leads
            xor = [x[2] for b in get(t, "XOR") + get(t, "xor") for x in b if x[0] is None]
            if xor: o["xor"] = xor
            if cats: o["cat"] = cats
            fx = effects(t)
            if fx: o["fx"] = fx
            techs[k] = o

# ---- screen layout, from the tech tree GUI ----
# The game draws each folder left to right: years are columns, and every line of techs has its own gridbox
# (70 px slots) stacked down the page. A tech uses the gridbox "<id>_tree" if there is one, else its parent's.
# Inside a gridbox, the tech's y (year) runs across and its x runs down.
gui = parse(open(os.path.join(game, "interface", "countrytechtreeview.gui"), encoding="utf-8-sig", errors="replace").read())
fnum = lambda v: float(v) if isinstance(v, str) and re.fullmatch(r"-?\d+(\.\d+)?", v) else 0.0


def find(node, name):
    for k, _, v in node:
        if isinstance(v, list):
            if k == "containerWindowType" and first(v, "name") == name:
                return v
            r = find(v, name)
            if r is not None:
                return r
    return None


def collect(node, ox, oy, lay):
    for k, _, v in node:
        if not isinstance(v, list):
            continue
        kl = (k or "").lower()
        pos = first(v, "position", []) or []
        x, y = ox + fnum(first(pos, "x")), oy + fnum(first(pos, "y"))
        if kl == "containerwindowtype":
            size = first(v, "size", []) or []
            w, h = fnum(first(size, "width")), fnum(first(size, "height"))
            if w > lay["w"]: lay["w"] = x + w
            if h > lay["h"]: lay["h"] = y + h
            collect(v, x, y, lay)
        elif kl == "gridboxtype":
            slot = first(v, "slotsize", []) or []
            lay["boxes"][first(v, "name")] = (x, y, fnum(first(slot, "width")) or 70, fnum(first(slot, "height")) or 70,
                                              (first(v, "format") or "LEFT").upper())
        elif kl == "instanttextboxtype":
            t = first(v, "text", "")
            if re.fullmatch(r"\d{4}", t or ""):
                lay["labels"].append({"x": x, "y": y, "t": t, "k": "year"})
            elif t and loc.get(t):
                lay["labels"].append({"x": x, "y": y, "t": clean(loc[t]), "k": "title"})


LAYOUT = {}
for fid in FOLDERS:
    node = find(gui, fid)
    lay = {"boxes": {}, "labels": [], "w": 0, "h": 0}
    if node is not None:
        collect(node, 0, 0, lay)
    LAYOUT[fid] = lay

unplaced = collections.Counter()
for fid, lay in LAYOUT.items():
    members = {t["id"]: next(p for p in t["f"] if p[0] == fid) for t in techs.values() if any(p[0] == fid for p in t["f"])}
    box = {tid: tid + "_tree" for tid in members if tid + "_tree" in lay["boxes"]}

    def inherit():
        changed = True
        while changed:   # children inherit their parent's gridbox
            changed = False
            for tid in members:
                if tid in box:
                    continue
                for p in techs:
                    if p in box and tid in techs[p].get("leads", []) and p in members:
                        box[tid] = box[p]; changed = True; break
    inherit()
    # a gridbox named after a root tech that doesn't exist with every DLC (tech_special_forces_tree):
    # give it to techs whose id shares its name and that still have no parent placed
    for tid in members:
        if tid in box:
            continue
        for bname in lay["boxes"]:
            core = re.sub(r"^tech_|_tree$", "", bname)
            if len(core) > 4 and core in tid and not any(p in members for p in techs if tid in techs[p].get("leads", [])):
                box[tid] = bname; break
    inherit()
    for tid, place in members.items():
        if tid not in box:
            unplaced[fid] += 1
            continue
        bx, by, sw, sh, fmt = lay["boxes"][box[tid]]
        if fmt == "LEFT":   # years run across: the tech's y gives screen x, its x gives screen y
            place[1], place[2] = bx + place[2] * sw, by + place[1] * sh
        else:               # UP / UPPER_LEFT: x across, years down
            place[1], place[2] = bx + place[1] * sw, by + place[2] * sh
    # techs without a gridbox are dropped from that folder rather than drawn in a wrong spot
    for tid in members:
        if tid not in box:
            techs[tid]["f"] = [p for p in techs[tid]["f"] if p[0] != fid]
techs = {k: t for k, t in techs.items() if t["f"]}
print("unplaced per folder", dict(unplaced))

# drop links to techs that don't exist with every DLC
for t in techs.values():
    if "leads" in t: t["leads"] = [x for x in t["leads"] if x in techs] or t.pop("leads")
    if "xor" in t: t["xor"] = [x for x in t["xor"] if x in techs] or t.pop("xor")

# the country's starting techs (set_technology blocks, DLC conditions evaluated)
start = []
def walk(node):
    for item in __import__("effects").chains(node):
        if item[0] == "chain":
            for lim, body in item[1]:
                if summ.cond(lim):
                    walk(body); break
        elif item[0] == "set_technology" and isinstance(item[2], list):
            start.extend(k for k, _, v in item[2] if k and v == "1")
walk(parse(open(history, encoding="utf-8-sig", errors="replace").read()))
start = sorted(set(s for s in start if s in techs))

folders = []
for fid, f in FOLDERS.items():
    lay = LAYOUT[fid]
    # shift the folder so techs and labels start at a small margin (some gridboxes use negative offsets)
    places = [p for t in techs.values() for p in t["f"] if p[0] == fid]
    xs = [p[1] for p in places] + [l["x"] for l in lay["labels"]]
    ys = [p[2] for p in places] + [l["y"] for l in lay["labels"]]
    if not places:
        continue
    dx, dy = 20 - min(xs), 20 - min(ys)
    for p in places:
        p[1] += dx; p[2] += dy
    f["labels"] = [{**l, "x": round(l["x"] + dx), "y": round(l["y"] + dy)} for l in lay["labels"]]
    f["w"] = round(max(p[1] for p in places) + 180)
    f["h"] = round(max(max(p[2] for p in places), max([l["y"] for l in f["labels"]] or [0])) + 110)
    f["count"] = sum(1 for t in techs.values() if any(p[0] == fid for p in t["f"]))
    if f["count"]:
        folders.append(f)
for t in techs.values():
    t["f"] = [[p[0], round(p[1]), round(p[2])] for p in t["f"]]

json.dump({"folders": folders, "techs": list(techs.values()), "start": start}, open(out, "w", encoding="utf-8"), ensure_ascii=False)
print("folders", [(f["id"], f["count"]) for f in folders])
print("techs", len(techs), "start", len(start), "icons", collections.Counter(t["ic"] for t in techs.values()).most_common())
print("unnamed", [t["id"] for t in techs.values() if t["name"].lower().replace(" ", "_") == t["id"]][:15])
