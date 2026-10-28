"""Extract Germany's military industrial organisations as facts: name, equipment types, department headers, the
initial trait, and every trait with its absolute grid position, parents (all / any / n of), mutually exclusive traits,
equipment it applies to, bonuses in short English and an icon theme for our own symbols. Generic templates
(include = ...) are resolved with the country file's trait, add_trait, override_trait and remove_trait on top.
Usage: extract_mio.py <game dir> <out.js> <patch> [TAG]"""
import sys, os, re, json, glob
sys.path.insert(0, os.path.dirname(__file__))
from pdx import parse, get, first
from gamedata import load_loc, load_scripted, make_clean, write_register
from effects import Summariser

game, out, patch = sys.argv[1], sys.argv[2], sys.argv[3]
TAG = sys.argv[4] if len(sys.argv) > 4 else "GER"
loc = load_loc(game)
clean = make_clean(loc, load_scripted(game))
summ = Summariser(game, loc, clean)
isnum = lambda v: isinstance(v, str) and re.fullmatch(r"-?\d+(\.\d+)?", v) is not None
DIR = os.path.join(game, "common", "military_industrial_organization", "organizations")

orgs, var = {}, {}
for p in sorted(glob.glob(os.path.join(DIR, "*.txt"))):
    text = open(p, encoding="utf-8-sig", errors="replace").read()
    for k, v in re.findall(r"^\s*(@\w+)\s*=\s*(-?[\d.]+)", text, re.M):
        var[k] = float(v)
    for k, _, v in parse(text):
        if k and isinstance(v, list) and not k.startswith("@"):
            orgs[k] = (v, os.path.basename(p))
num = lambda v: var.get(v, float(v) if isnum(v) else 0.0)
items = lambda n: [x[2] for x in n if x[0] is None] if isinstance(n, list) else ([n] if n else [])


def resolve(oid, seen=()):
    v, _ = orgs[oid]
    inc = first(v, "include")
    if inc and inc in orgs and inc not in seen:
        base = resolve(inc, seen + (oid,))
        traits = {t: list(b) for t, b in base["traits"].items()}
        res = {**base, "traits": traits}
    else:
        res = {"traits": {}, "headers": [], "types": [], "initial": None}
    own_heads = [(first(h, "text"), num(first(h, "x", "0"))) for h in get(v, "tree_header_text")]
    if own_heads:
        res["headers"] = own_heads
    if first(v, "equipment_type"):
        res["types"] = items(first(v, "equipment_type"))
    if first(v, "initial_trait"):
        res["initial"] = first(v, "initial_trait")
    for kind in ("trait", "add_trait"):
        for t in get(v, kind):
            res["traits"][first(t, "token")] = list(t)
    for t in get(v, "override_trait"):
        tok = first(t, "token")
        if tok in res["traits"]:
            keys = {k for k, _, _ in t if k}
            res["traits"][tok] = [x for x in res["traits"][tok] if x[0] not in keys] + list(t)
    for r in get(v, "remove_trait"):
        for tok in items(r):
            res["traits"].pop(tok, None)
    res["icon"] = first(v, "icon") or res.get("icon")
    return res


ICONS = [(r"tank|armor_|armou?r$|chassis", "tank"), (r"aircraft|plane|air_|fighter|bomber|fuselage|engine|airframe", "plane"),
         (r"ship|naval|hull|torpedo|sub|convoy|maritime", "ship"), (r"artillery|gun|cannon|howitzer", "artillery"),
         (r"attack|breakthrough|weapon|ordinance", "swords"), (r"defen|hardness|armor|reliab|protect", "fort"),
         (r"speed|range|mobility|fuel", "road"), (r"resource|steel|rubber|oil|cost", "coin"),
         (r"production|capacity|efficiency|factory|industr", "factory"), (r"research|design|tech", "flask"),
         (r"infantry|small_arms|rifle|support", "helmet"), (r"recon|radar|spot|detect", "eye"), (r"reliab|maint", "gear")]


def theme(icon):
    s = (icon or "").lower()
    for rx, ic in ICONS:
        if re.search(rx, s):
            return ic
    return "gear"


STATS = {"ap_attack": "Piercing", "armor_value": "Armor", "build_cost_ic": "Production cost", "max_strength": "Max strength",
         "maximum_speed": "Max speed", "fuel_consumption": "Fuel use", "naval_speed": "Speed", "surface_detection": "Surface detection"}


def stat_name(k):
    if k in STATS:
        return STATS[k]
    return clean(loc.get("STAT_" + k.upper(), "") or loc.get(k, "")) or k.replace("_", " ").capitalize()


def bonuses(t):
    out = []
    for b in get(t, "equipment_bonus"):
        for k, _, x in b:
            if k and isnum(x):
                out.append(f"{stat_name(k)} {float(x) * 100:+g}%")
    for kind in ("production_bonus", "organization_modifier"):
        for b in get(t, kind):
            for k, _, x in b:
                if k and isnum(x):
                    out.append(summ.modifier(k, x))
    return out


data = {}
for oid, (v, fname) in orgs.items():
    if not fname.startswith(TAG + "_"):   # the country's own MIOs; generic ones mention it only to exclude it
        continue
    r = resolve(oid)
    if not r["traits"]:
        continue
    raw = r["traits"]
    pos = {}

    def where(tok, seen=()):
        if tok in pos:
            return pos[tok]
        t = raw.get(tok)
        if t is None or tok in seen:
            return (0.0, 0.0)
        p = first(t, "position", []) or []
        x, y = num(first(p, "x", "0")), num(first(p, "y", "0"))
        rel = first(t, "relative_position_id")
        if rel and rel in raw:
            rx, ry = where(rel, seen + (tok,))
            x, y = x + rx, y + ry
        pos[tok] = (x, y)
        return pos[tok]

    def without_dlc(t):   # versions shown only when a DLC is missing (every DLC is assumed)
        vis = first(t, "visible", []) or []
        return any(k == "NOT" and isinstance(b, list) and any(x[0] == "has_dlc" for x in b) for k, _, b in vis)

    traits = []
    for tok, t in raw.items():
        if without_dlc(t):
            continue
        x, y = where(tok)
        o = {"id": tok, "name": summ.name(first(t, "name") or tok), "x": x, "y": y, "ic": theme(first(t, "icon")), "fx": bonuses(t)}
        for key, out_key in (("all_parents", "all"), ("any_parent", "any"), ("mutually_exclusive", "ex"), ("limit_to_equipment_type", "for")):
            if first(t, key):
                o[out_key] = items(first(t, key))
        par = first(t, "parent")
        if isinstance(par, list):
            o["any"] = items(first(par, "traits", []))
            o["need"] = int(num(first(par, "num_parents_needed", "1")))
        if first(t, "special_trait_background") == "yes":
            o["special"] = True
        traits.append(o)
    ini = r["initial"]
    data[oid] = {"id": oid, "name": summ.name(oid), "types": r["types"], "ic": theme(r.get("icon")),
                 "headers": [{"t": summ.name(h), "x": x} for h, x in r["headers"]],
                 "initial": {"name": summ.name(first(ini, "name") or ""), "fx": bonuses(ini)} if ini else None, "traits": traits}

eq_names = {e: clean(loc.get(e, "")) or summ.name(e) for o in data.values() for e in o["types"]}
head = (f"/* Military industrial organisations for {TAG}, facts only, extracted from the HoI4 {patch} game files\n"
        f"   (common/military_industrial_organization) with every DLC enabled. x/y = trait grid position, absolute. */\n")
write_register(out, head, "registerMIO", {"patch": patch, "tag": TAG, "orgs": data, "types": eq_names})
print("orgs", len(data))
a = data.get("GER_alkett_organization")
if a:
    print(a["name"], a["types"], a["headers"], a["initial"])
    for t in sorted(a["traits"], key=lambda t: (t["y"], t["x"])):
        print(f'  ({t["x"]:g},{t["y"]:g}) {t["name"]} [{t["ic"]}] all={t.get("all")} any={t.get("any")} ex={t.get("ex")} {t["fx"]}')
