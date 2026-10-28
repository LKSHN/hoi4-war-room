"""Extract what a construction queue needs, as facts: buildings (name, cost per level, max level, whether it shares
the state's building slots or sits in a province) and states (name, 1936 owner, building slots from the state
category, buildings on 1 Jan 1936, number of provinces).
Usage: extract_construction.py <game dir> <out.js> <patch>"""
import sys, os, re, json, glob
sys.path.insert(0, os.path.dirname(__file__))
from pdx import parse, get, first
from gamedata import load_loc, load_scripted, make_clean, write_register
from effects import Summariser

game, out, patch = sys.argv[1], sys.argv[2], sys.argv[3]
loc = load_loc(game)
clean = make_clean(loc, load_scripted(game))
summ = Summariser(game, loc, clean)
isnum = lambda v: isinstance(v, str) and re.fullmatch(r"-?\d+(\.\d+)?", v) is not None
read = lambda p: parse(open(p, encoding="utf-8-sig", errors="replace").read())

buildings = {}
for block in get(read(os.path.join(game, "common", "buildings", "00_buildings.txt")), "buildings"):
    for k, _, v in block:
        if not k or not isinstance(v, list):
            continue
        cap = first(v, "level_cap", []) or []
        o = {"id": k, "name": summ.name(k), "cost": float(first(v, "base_cost", "0")),
             "max": int(first(cap, "state_max") or first(cap, "province_max") or 0)}
        if isnum(first(v, "per_level_extra_cost")):
            o["extra"] = float(first(v, "per_level_extra_cost"))
        if first(cap, "province_max"):
            o["prov"] = True
        if first(cap, "shares_slots") == "yes":
            o["slots"] = True
        buildings[k] = o

slots = {}
for p in glob.glob(os.path.join(game, "common", "state_category", "*.txt")):
    for block in get(read(p), "state_categories"):
        for k, _, v in block:
            if k and isinstance(v, list) and isnum(first(v, "local_building_slots")):
                slots[k] = int(first(v, "local_building_slots"))

states = {}
for p in glob.glob(os.path.join(game, "history", "states", "*.txt")):
    for s in get(read(p), "state"):
        sid = first(s, "id")
        h = first(s, "history", []) or []
        b = first(h, "buildings", []) or []
        o = {"id": int(sid), "name": clean(loc.get(first(s, "name", ""), "")) or "State " + sid, "owner": first(h, "owner"),
             "slots": slots.get(first(s, "state_category"), 0), "cat": first(s, "state_category"),
             "b": {k: int(float(n)) for k, _, n in b if k in buildings and isnum(n)},
             "provs": len([x for x in (first(s, "provinces", []) or []) if x[0] is None])}
        states[sid] = o
head = (f"/* Buildings and states for construction queues, facts only, extracted from the HoI4 {patch} game files\n"
        f"   (common/buildings, common/state_category, history/states) with every DLC enabled. cost = construction points per level;\n"
        f"   b = state buildings on 1 Jan 1936; slots = building slots from the state category, before research and focus bonuses. */\n")
write_register(out, head, "registerConstruction", {"patch": patch, "buildings": buildings, "states": states})
print("buildings", len(buildings), "states", len(states), "german", sum(1 for s in states.values() if s["owner"] == "GER"))
for k in ("infrastructure", "arms_factory", "industrial_complex", "synthetic_refinery", "fuel_silo", "dockyard", "air_base"):
    print(k, buildings.get(k))
for s in states.values():
    if s["name"] in ("Westfalen", "Hessen", "Moselland", "Rhineland", "Sachsen", "Hannover"):
        print(s)
