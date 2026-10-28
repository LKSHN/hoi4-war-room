"""Extract land battalions and support companies as facts: name, group (support or a combat group), type, width,
HP, organisation, manpower, training time, supply use, suppression, speed and equipment needs (with archetype names).
Usage: extract_units.py <game dir> <out.js> <patch>"""
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
KEEP = ("combat_width", "max_strength", "max_organisation", "default_morale", "manpower", "training_time", "supply_consumption",
        "suppression", "maximum_speed", "weight", "recon", "entrenchment", "reliability_factor", "soft_attack", "hard_attack",
        "defense", "breakthrough", "air_attack", "initiative", "casualty_trickleback", "experience_loss_factor", "fuel_consumption")
units, equipment = {}, set()
for path in sorted(glob.glob(os.path.join(game, "common", "units", "*.txt"))):
    for block in get(parse(open(path, encoding="utf-8-sig", errors="replace").read()), "sub_units"):
        for uid, _, u in block:
            if not uid or not isinstance(u, list):
                continue
            mc = first(u, "map_icon_category")
            if mc in ("ship", "transport", "uboat") or first(u, "group") in (None,):   # land units only
                continue
            need = {k: int(float(n)) for k, _, n in (first(u, "need", []) or []) if k and isnum(n)}
            equipment.update(need)
            t = first(u, "type")
            o = {"id": uid, "name": summ.name(uid), "abbr": first(u, "abbreviation", ""), "group": first(u, "group"),
                 "type": [x[2] for x in t if x[0] is None] if isinstance(t, list) else ([t] if t else []),
                 "need": need, **{k: float(first(u, k)) for k in KEEP if isnum(first(u, k))}}
            units[uid] = o
eqnames = {e: summ.name(e) for e in sorted(equipment)}
head = (f"/* Land battalions and support companies, facts only, extracted from the HoI4 {patch} game files (common/units)\n"
        f"   with every DLC enabled. Combat values here are battalion modifiers; most attack and defense comes from equipment. */\n")
write_register(out, head, "registerUnits", {"patch": patch, "units": units, "equipment": eqnames})
print("units", len(units), "support", sum(1 for u in units.values() if u["group"] == "support"), "equipment types", len(eqnames))
for k in ("motorized", "medium_sp_artillery_brigade", "recon", "mot_recon", "engineer", "artillery", "logistics_company", "cavalry", "infantry"):
    if k in units: print(k, {x: units[k][x] for x in units[k] if x not in ("type",)})
print([u["id"] for u in units.values() if "flame" in u["id"]])
