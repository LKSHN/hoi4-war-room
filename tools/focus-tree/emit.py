"""Write guides/trees/<name>.js from the extracted JSON, and add "focus" ids to the guide's focus steps."""
import json, sys, re, unicodedata
tree_json, out_js, guide_path, patch = sys.argv[1:5]
tree = json.load(open(tree_json, encoding="utf-8"))
tree.sort(key=lambda r: (r["y"], r["x"]))

head = f"""/* German national focus tree, facts only (names, positions, durations, prerequisites, exclusives).
   Extracted from the HoI4 {patch} game files (common/national_focus/germany.txt + English localisation).
   Assumes every DLC is enabled and default game rules, as seen at game start. Durations change between patches.
   Focus: id, name, x/y (grid units), days, pre (list of groups: all groups needed, any focus within a group),
   mx (mutually exclusive), bypass (1 = can be bypassed), tags (search filters), ic (our emblem theme),
   fx (effects summarised in our own words by tools/focus-tree/effects.py, as for Germany at peace with all DLC). */
registerTree({{
  "id": "GER",
  "patch": "{patch}",
  "assumptions": "All DLC enabled, default game rules, tree as at game start.",
  "focuses": [
"""
lines = ",\n".join("    " + json.dumps(r, ensure_ascii=False, separators=(",", ":")) for r in tree)
open(out_js, "w", encoding="utf-8", newline="\n").write(head + lines + "\n  ]\n});\n")

# link guide steps to tree ids
norm = lambda s: re.sub(r"[^a-z0-9]", "", unicodedata.normalize("NFD", s).encode("ascii", "ignore").decode().lower())
by = {norm(r["name"]): r["id"] for r in tree}
ids = {r["id"] for r in tree}
OVERRIDES = {  # guide wording differs from the game's
    "focus.panzer-troop-schools": "GER_panzer_troops_school",
    "focus.develop-heraeus-research-facility": "GER_develop_heraeus_facilities",
    "focus.germany-army-invincible": "GER_an_invincible_army",
    "focus.reintegrate-luxembourg-alsace-lorraine": "GER_reintegrate_luxemburg_and_alsace_lorraine",
}
g = open(guide_path, encoding="utf-8").read()
missing = []
def add(m):
    sid, t = m.group(1), m.group(2)
    fid = OVERRIDES.get(sid) or by.get(norm(t))
    if not fid or fid not in ids:
        missing.append((sid, t)); return m.group(0)
    return m.group(0) + f',"focus":"{fid}"'
g2 = re.sub(r'\{"id":"(focus\.[^"]+)","t":"([^"]+)"(?!.*"focus":)', add, g)
open(guide_path, "w", encoding="utf-8", newline="\n").write(g2)
print("tree", len(tree), "linked", len(re.findall(r'"focus":"GER_', g2)), "missing", missing)
