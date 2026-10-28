"""Extract the land and air equipment (and convoys) a production line can build, as facts: id, name, Germany's own name
for it (GER_<id> in localisation), archetype, year, production cost and interface category. Warships are left out:
they're built from designs (extract_equipment.py).
Usage: extract_production.py <game dir> <out.js> <patch>"""
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
SKIP = re.compile(r"ship_hull|mothership|floating_harbor|repair_ship|support_ship")

raw = {}
for path in glob.glob(os.path.join(game, "common", "units", "equipment", "*.txt")):
    if SKIP.search(os.path.basename(path)):
        continue
    for block in get(parse(open(path, encoding="utf-8-sig", errors="replace").read()), "equipments"):
        for k, _, v in block:
            if k and isinstance(v, list):
                raw[k] = v


def look(eid, key, seen=()):
    """a value from the equipment, else its parent, else its archetype."""
    v = raw.get(eid)
    if v is None or eid in seen:
        return None
    x = first(v, key)
    if x is not None:
        return x
    for up in (first(v, "parent"), first(v, "archetype")):
        if up:
            x = look(up, key, seen + (eid,))
            if x is not None:
                return x
    return None


eq = {}
for eid, v in raw.items():
    arch = first(v, "archetype") or (eid if first(v, "is_archetype") == "yes" else None)
    cost = look(eid, "build_cost_ic")
    if not arch or not isnum(cost) or SKIP.search(arch):
        continue
    cat = look(eid, "interface_category") or ""
    t = look(eid, "type")
    o = {"id": eid, "name": summ.name(eid), "arch": arch, "year": int(look(eid, "year") or 0), "cost": float(cost),
         "cat": cat.replace("interface_category_", ""), "type": t if isinstance(t, str) else (t[0][2] if isinstance(t, list) and t else "")}
    ger = clean(loc.get("GER_" + eid, ""))
    if ger:
        o["ger"] = ger
    if first(v, "is_archetype") == "yes":
        o["isArch"] = True
    eq[eid] = o
head = (f"/* Land and air equipment and convoys for production lines, facts only, extracted from the HoI4 {patch} game files\n"
        f"   (common/units/equipment, localisation for Germany's own names) with every DLC enabled. cost = production cost in IC. */\n")
write_register(out, head, "registerEquipment", {"patch": patch, "equipment": eq})
print("equipment", len(eq))
for k in ("infantry_equipment_1", "support_equipment_1", "artillery_equipment_1", "motorized_equipment_1", "mechanized_equipment_1",
          "train_equipment_1", "armored_support_vehicle", "small_plane_airframe_1", "small_plane_cas_airframe_1", "small_plane_naval_bomber_airframe_1", "cas_equipment_1"):
    print(k, eq.get(k))
