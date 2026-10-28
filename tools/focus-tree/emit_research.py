"""Write guides/trees/research-<patch>.js from extract_research.py's JSON.
Usage: emit_research.py <research.json> <out.js> <patch>"""
import json, sys, os
sys.path.insert(0, os.path.dirname(__file__))
from gamedata import write_register
src, out, patch = sys.argv[1:4]
d = json.load(open(src, encoding="utf-8"))
d["techs"].sort(key=lambda t: (t["f"][0][0], t["f"][0][2], t["f"][0][1]))
head = f"""/* Research tree, facts only, extracted from the HoI4 {patch} game files (common/technologies + English localisation)
   with every DLC enabled. Doctrines have their own system since 1.17 and aren't part of it.
   folders: id, name, rows ({{y: year}} labels). techs: id, name, f ([folder, x, y] per folder it shows in), year,
   cost (research cost as the game lists it), leads (techs it unlocks), xor (mutually exclusive), cat (categories),
   ic (our icon theme), fx (effects in our own words). start: techs the country has on 1 Jan 1936. */
"""
write_register(out, head, "registerResearch", {"patch": patch, "folders": d["folders"], "start": d["start"], "techs": d["techs"]})
print("techs", len(d["techs"]))
