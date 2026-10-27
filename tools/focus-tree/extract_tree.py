"""Extract structural facts from a HoI4 focus tree: ids, names, positions, durations, prerequisites, exclusives.
Assumes every DLC is enabled and game rules are at their defaults. Usage: extract_tree.py <game dir> <tree file> <out.json>"""
import sys, os, re, json, glob, collections
sys.path.insert(0, os.path.dirname(__file__))
from pdx import parse, get, first

game, tree_file, out = sys.argv[1], sys.argv[2], sys.argv[3]
text = open(tree_file, encoding="utf-8-sig").read()
consts = dict(re.findall(r"^@(\w+)\s*=\s*(\d+)", text, re.M))
root = parse(text)
tree = first(root, "focus_tree")
raw = get(tree, "focus")

RULES = {"obsolete_focus_branches_visibility": "HIDE"}
unknown = collections.Counter()


def ev(node, mode="AND"):
    """Evaluate a trigger block under the assumptions above. Unknown triggers count as true."""
    results = []
    i = 0
    while i < len(node):
        k, _, v = node[i]
        if k == "has_dlc":
            r = True
        elif k == "has_game_rule":
            r = RULES.get(first(v, "rule")) == first(v, "option")
        elif k == "NOT":
            r = not ev(v, "OR")
        elif k == "OR":
            r = ev(v, "OR")
        elif k == "AND":
            r = ev(v, "AND")
        elif k == "if":
            branches = [v]
            j = i + 1
            while j < len(node) and node[j][0] in ("else_if", "else"):
                branches.append(node[j][2] if node[j][0] == "else_if" else [("limit", "=", [("always", "=", "yes")])] + node[j][2])
                j += 1
            r = True
            for b in branches:
                if ev(first(b, "limit", [])):
                    r = ev([x for x in b if x[0] != "limit"])
                    break
            i = j - 1
        elif k == "has_completed_focus":
            r = False   # the tree as it looks at game start
        elif k == "always":
            r = v == "yes"
        elif k in ("limit",):
            r = True
        else:
            unknown[k] += 1
            r = True
        results.append(r)
        i += 1
    if not results:
        return True
    return any(results) if mode == "OR" else all(results)


loc = {}
for f in glob.glob(os.path.join(game, "localisation", "english", "*_l_english.yml")):
    for line in open(f, encoding="utf-8-sig", errors="replace"):
        m = re.match(r'\s*([\w.]+):\d*\s+"(.*)"\s*(?:#[^"]*)?$', line)
        if m:
            loc.setdefault(m.group(1), m.group(2))

F = {}
for f in raw:
    fid = first(f, "id")
    cost = first(f, "cost", "10")
    cost = float(consts.get(cost.lstrip("@"), cost))
    F[fid] = {
        "id": fid,
        "x": int(first(f, "x", "0")), "y": int(first(f, "y", "0")),
        "rel": first(f, "relative_position_id"),
        "offsets": [(int(first(o, "x", "0")), int(first(o, "y", "0"))) for o in get(f, "offset") if ev(first(o, "trigger", []))],
        "days": round(cost * 7),
        "pre": [[v for k, _, v in p if k == "focus"] for p in get(f, "prerequisite")],
        "mx": [v for m in get(f, "mutually_exclusive") for k, _, v in m if k == "focus"],
        "bypass": bool(get(f, "bypass")),
        "filters": [v for s in get(f, "search_filters") for _, _, v in s],
        "allowed": all(ev(a) for a in get(f, "allow_branch")),
    }

# hide branches that aren't allowed, then anything that can no longer be reached
hidden = {k for k, v in F.items() if not v["allowed"]}
changed = True
while changed:
    changed = False
    for k, v in F.items():
        if k in hidden:
            continue
        if any(all(p in hidden or p not in F for p in grp) for grp in v["pre"] if grp):
            hidden.add(k); changed = True


def pos(fid, seen=()):
    v = F[fid]
    x, y = v["x"], v["y"]
    for ox, oy in v["offsets"]:
        x += ox; y += oy
    if v["rel"] and v["rel"] in F and v["rel"] not in seen:
        px, py = pos(v["rel"], seen + (fid,))
        x += px; y += py
    return x, y


FILTER_SHORT = {"FOCUS_FILTER_POLITICAL": "pol", "FOCUS_FILTER_RESEARCH": "res", "FOCUS_FILTER_INDUSTRY": "ind",
                "FOCUS_FILTER_STABILITY": "stab", "FOCUS_FILTER_WAR_SUPPORT": "ws", "FOCUS_FILTER_MANPOWER": "man",
                "FOCUS_FILTER_ANNEXATION": "ann", "FOCUS_FILTER_INTERNAL_AFFAIRS": "int", "FOCUS_FILTER_ARMY_XP": "army",
                "FOCUS_FILTER_NAVY_XP": "navy", "FOCUS_FILTER_AIR_XP": "air", "FOCUS_FILTER_BALANCE_OF_POWER": "bop",
                "FOCUS_FILTER_POLITICAL_CHARACTER": "char", "FOCUS_FILTER_MILITARY_CHARACTER": "mil",
                "FOCUS_FILTER_INTERNATIONAL_TRADE": "trade", "FOCUS_FILTER_HISTORICAL": "hist"}


# scripted localisation: [GetX] -> its fallback text (the option without a trigger), else the first option
scripted = {}
for f in glob.glob(os.path.join(game, "common", "scripted_localisation", "*.txt")):
    for k, _, v in parse(open(f, encoding="utf-8-sig", errors="replace").read()):
        if k != "defined_text":
            continue
        opts = [(first(t, "trigger"), first(t, "localization_key")) for t in get(v, "text")]
        pick = next((key for trig, key in opts if trig is None and key), None) or next((key for _, key in opts if key), None)
        if pick:
            scripted[first(v, "name")] = pick


def clean(s, depth=0):
    if depth > 4:
        return s
    s = re.sub(r"\$(\w+)\$", lambda m: clean(loc.get(m.group(1), ""), depth + 1), s)
    def sub(m):
        inner = m.group(1)
        c = re.match(r"(\w{3})\.GetName$", inner)
        if c:
            return loc.get(c.group(1), c.group(1))
        key = scripted.get(inner)
        return clean(loc.get(key, ""), depth + 1) if key else ""
    s = re.sub(r"\[([^\]]*)\]", sub, s)
    s = re.sub(r"Â§.|Â£\w+", "", s)
    return re.sub(r"\s+", " ", s).strip()


# names the game picks at runtime from world state; use the historical one
NAME_OVERRIDES = {"GER_molotov_ribbentrop_pact": "Molotov-Ribbentrop Pact"}
kept = [k for k in F if k not in hidden]
res = []
for k in kept:
    v = F[k]
    x, y = pos(k)
    o = {"id": k, "name": NAME_OVERRIDES.get(k) or clean(loc.get(k, k)), "x": x, "y": y, "days": v["days"]}
    pre = [[p for p in grp if p not in hidden] for grp in v["pre"]]
    pre = [g for g in pre if g]
    if pre: o["pre"] = pre
    mx = [m for m in v["mx"] if m not in hidden]
    if mx: o["mx"] = mx
    if v["bypass"]: o["bypass"] = 1
    fl = [FILTER_SHORT.get(f, f) for f in v["filters"]]
    if fl: o["tags"] = fl
    res.append(o)

json.dump(res, open(out, "w", encoding="utf-8"), ensure_ascii=False)
xs = [r["x"] for r in res]; ys = [r["y"] for r in res]
print("kept", len(res), "hidden", len(hidden), "x", min(xs), max(xs), "y", min(ys), max(ys))
print("days", collections.Counter(r["days"] for r in res).most_common())
print("unnamed", [r["id"] for r in res if r["name"] == r["id"]][:20])
print("unknown triggers", unknown.most_common(10))
dup = collections.Counter((r["x"], r["y"]) for r in res)
print("overlaps", [p for p, n in dup.items() if n > 1][:20])
