"""Extract the special projects a country can run, as facts: name, specialization, tag, parent projects, what it needs
(in short English), breakthrough cost, prototype time, complexity, resources, and what completing it gives
(modules, equipment, battalions, techs, battalion bonuses, other effects). Every DLC enabled.
Usage: extract_projects.py <game dir> <out.js> <patch> [TAG]"""
import sys, os, re, json, glob
sys.path.insert(0, os.path.dirname(__file__))
from pdx import parse, get, first
from gamedata import load_loc, load_scripted, make_clean
from effects import Summariser

game, out, patch = sys.argv[1], sys.argv[2], sys.argv[3]
TAG = sys.argv[4] if len(sys.argv) > 4 else "GER"
loc = load_loc(game)
clean = make_clean(loc, load_scripted(game))
summ = Summariser(game, loc, clean)
isnum = lambda v: isinstance(v, str) and re.fullmatch(r"-?\d+(\.\d+)?", v) is not None
SP = os.path.join(game, "common", "special_projects")
read = lambda p: parse(open(p, encoding="utf-8-sig", errors="replace").read())
items = lambda n: [x[2] for x in n if x[0] is None] if isinstance(n, list) else ([n] if n else [])

# named constants: sp_time.prototype.short = 45, sp_complexity.small = {min, max}
const = {}
for k, _, v in read(os.path.join(game, "common", "script_constants", "special_project_constants.txt")):
    if not isinstance(v, list):
        continue
    for k2, _, v2 in v:
        if k2 == "schema" or not isinstance(v2, list):
            continue
        if first(v2, "min") is not None:
            const[f"{k}.{k2}"] = [int(first(v2, "min")), int(first(v2, "max"))]
        else:
            for k3, _, v3 in v2:
                if isnum(v3):
                    const[f"{k}.{k2}.{k3}"] = float(v3) if "." in v3 else int(v3)


def allowed(node):
    """allowed only checks tags and DLC: every DLC counts as owned."""
    ok = True
    for k, op, v in node or []:
        if k in ("original_tag", "tag"):
            ok = ok and v == TAG
        elif k == "NOT":
            ok = ok and not any_true(v)
        elif k == "OR":
            ok = ok and any_true(v)
        elif k == "AND":
            ok = ok and allowed(v)
    return ok


def any_true(node):
    for k, op, v in node or []:
        if k in ("original_tag", "tag") and v == TAG:
            return True
        if k == "has_dlc":
            return True
        if k == "AND" and allowed(v):
            return True
        if k == "OR" and any_true(v):
            return True
    return False


def needs(node):
    """available: unwrap FROM (the country) and phrase what's left."""
    flat = []
    for k, op, v in node or []:
        if k == "FROM" and isinstance(v, list):
            flat += v
        elif k != "has_dlc":
            flat.append((k, op, v))
    return [c for c in summ.phr.clauses(flat)] if flat else []


def output(node):
    lines = []
    for key, label in (("enable_equipment_modules", "modules"), ("enable_equipments", "equipment"), ("enable_subunits", "battalions")):
        names = []   # several blocks (some limited to a DLC, all owned) can unlock the same thing twice
        for b in get(node, key):
            names += [summ.name(x) for x in items(b) if isinstance(x, str)]
        if names:
            lines.append(f"Unlocks {label}: " + ", ".join(dict.fromkeys(names)))
    for b in get(node, "sub_unit_bonus"):
        for unit, _, st in b:
            if isinstance(st, list):
                lines.append(summ.name(unit) + ": " + ", ".join(f"{summ.name(k) if loc.get(k) else k.replace('_', ' ')} {float(x) * 100:+g}%" for k, _, x in st if isnum(x)))
    ce = first(node, "country_effects", []) or []
    techs = [first(t, "TECH") for t in get(ce, "custom_effect_tooltip") if isinstance(t, list) and first(t, "TECH")]
    if techs:
        lines.append("Unlocks tech: " + ", ".join(summ.name(t) for t in techs))
    for t in get(ce, "add_design_template_bonus"):
        eq = [x for k, _, x in t if k == "equipment"]
        n, f = first(t, "uses"), first(t, "cost_factor")
        if eq and n and isnum(f):
            lines.append(f"Next {'' if n == '1' else n + ' '}design{'s' if n != '1' else ''} of {', '.join(sorted({summ.name(e) for e in eq}))}: {float(f) * 100:g}% off the design cost")
    rest = [x for x in ce if x[0] not in ("custom_effect_tooltip", "add_design_template_bonus", "hidden_effect")]
    lines += [l.replace("Instead, if we are us: ", "") for l in summ.summarise(rest)]   # tag checks for the country itself
    return lines


projects = {}
for p in sorted(glob.glob(os.path.join(SP, "projects", "*.txt"))):
    for k, _, v in read(p):
        if not k or not isinstance(v, list) or not first(v, "specialization"):
            continue
        if not allowed(first(v, "allowed", []) or []):
            continue
        bc = first(v, "breakthrough_cost", []) or []
        cost = {}
        for s, _, n in bc if isinstance(bc, list) else []:
            cost[s.replace("specialization_", "")] = int(float(n)) if isnum(n) else int(float(first(n, "base", "0") or 0))
        pt, cx = first(v, "prototype_time"), first(v, "complexity")
        res = first(first(v, "resource_cost", []) or [], "resources", []) or []
        o = {"id": k, "name": summ.name(k), "spec": first(v, "specialization").replace("specialization_", ""),
             "tag": ((items(first(v, "project_tags")) or [""])[0] or "").replace("sp_tag_", ""),
             "parents": items(first(v, "special_project_parent")), "needs": needs(first(v, "available", []) or []),
             "cost": cost, "time": const.get(pt, int(pt) if isnum(pt) else None), "complexity": const.get(cx, int(cx) if isnum(cx) else None),
             "res": {r: int(float(n)) for r, _, n in res if isnum(n)}, "out": output(first(v, "project_output", []) or [])}
        projects[k] = o
spec_names = {s: clean(loc.get(s, "")) or s.replace("specialization_", "").capitalize() for s in {"specialization_" + p["spec"] for p in projects.values()}}
spec_names = {k.replace("specialization_", ""): v for k, v in spec_names.items()}
tag_names = {t: clean(loc.get("sp_tag_" + t, "")) or t.replace("_", " ").capitalize() for t in {p["tag"] for p in projects.values()} if t}
head = (f"/* Special projects for {TAG}, facts only, extracted from the HoI4 {patch} game files (common/special_projects,\n"
        f"   script_constants) with every DLC enabled. time = days per prototype iteration; complexity = progress per iteration (min, max). */\n")
open(out, "w", encoding="utf-8", newline="\n").write(head + "registerProjects(" + json.dumps({"patch": patch, "projects": projects, "specs": spec_names, "tags": tag_names}, ensure_ascii=False, separators=(",", ":")) + ");\n")
print("projects", len(projects), spec_names, tag_names)
for k in ("sp_land_flamethrower_tank", "sp_land_military_engineering_vehicles"):
    print(json.dumps(projects.get(k), ensure_ascii=False, indent=1))
