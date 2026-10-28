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


from gamedata import load_loc, load_scripted, make_clean
loc = load_loc(game)

def icon_name(f):
    v = first(f, "icon")
    if isinstance(v, list):   # conditional icon: icon = { trigger = {...} value = GFX_x }
        v = first(v, "value")
    return re.sub(r"^GFX_(focus_|goal_)?", "", v or "")


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
        "icon": icon_name(f),
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


clean = make_clean(loc, load_scripted(game))


# our own icon themes, picked from the in-game icon *name* (no game art is used). First match wins.
ICON_RULES = [
    ("sub", r"submarine|wolf_pack|u_boat"),
    ("plane", r"air|bomber|fighter|_cas|aircraft|luftwaffe|jagdwaffe|flying|helicopter|aeronaut|dive_bomb"),
    ("ship", r"navy|naval|battleship|cruiser|carrier|fleet|panzerschiff|seeherrschaft|zeppelin|high_seas|shipbuild|ships|kriegsmarine|amphibious"),
    ("tank", r"tank|panzer|armou?r|mechani|motor|truck|kdf|combined_arms|wagen|vehicle"),
    ("artillery", r"artiller|_gun"),
    ("fort", r"defen[cs]|fortif|westwall|hedgehog|bulwark|shield|sentinel"),
    ("rings", r"anti_comintern|befriend|alliance|ally_|_ally|treaty|pact|deal|relations|cooperation|influence|align|entente|brothers|exchange|diplomacy|concession|customs_union|confederation|spheres|realpolitik|tech_sharing|commonwealth|support_|license|invite"),
    ("eye", r"secret|intelligence|gestapo|abwehr|ss_security|whisper|stasi|spy|rote_drei"),
    ("star", r"proletar|communis|comintern|spartacus|socialis|soviet_politics|stakhanov|red_army|workers_and_farmers|capitalism|revolution|left_right"),
    ("crown", r"kaiser|monarch|habsburg|tsar|imperial|prussian|restauration|crown"),
    ("swords", r"attack|invade|war_with|_war\b|major_war|total_war|operation|strike|schlieffen|maginot|wess?erubung|conquer|assault|invasion|liberation_or_death"),
    ("helmet", r"army|infantr|troop|wehrmacht|gebirgs|paratroop|strafbat|schutztruppe|position_armies|military_mission|afrikakorps|varnplikt|mobilization_plan|auftrag"),
    ("flag", r"demand|annex|anschluss|fate_of|integrate_|claim|reclaim|colon|rhineland|border|duchies|protectorate|reichskommis|territory|occupy|mittel|sudeten|danzig|austria|czech|polish|qingdao|subdu|subjug|place_in_the_sun|carve|holdings|liechtenstein|congo|europe|volkskommissar|scandinavia|baltic|benelux|middle_east|south_america|africa|asian|eastern|western"),
    ("flask", r"research|universit|scien|radar|rocket|wunderwaffe|wonderweapon|heraeus|tech"),
    ("oil", r"oil|refiner|fuel|rubber|benzin|coal|resource|energy|hydro|electric|natural_wealth|liquefaction|buna"),
    ("coin", r"gold|currency|price|trade|consumer|money|economies|economy|wirtschaft|reform|bonds|privatis|regulations|corruption"),
    ("road", r"infrastructure|road|autobahn|supply|logistic|rail|lokomotive"),
    ("factory", r"factor|industr|production|construct|stahlwerke|armament|todt|holzmann|speer|four_year|autarky|reorient|modernize|central_planning|plenipotentiary|zentrale"),
    ("people", r"farm|housing|welfare|employment|social_mobilization|workers|people|labour|unity|women|public_works"),
    ("horn", r"propaganda|film|enlightenment|rall|goebbels|spread_"),
    ("eagle", r"fuhrer|supreme|party|ascension|chancellor|loyalty|dictatorship|leader|_ss|hegemony|himmler|goring|reich|weltpolitik|neurath|successor|appease|military_achievements|invincible"),
]
FILTER_ICON = {"ann": "flag", "army": "helmet", "mil": "helmet", "navy": "ship", "air": "plane", "ind": "factory", "res": "flask",
               "trade": "coin", "man": "people", "ws": "horn", "pol": "eagle", "char": "eagle", "int": "eagle", "stab": "eagle"}


def icon_theme(icon_name, fid, filters):
    for text in (icon_name.lower(), fid.lower()):
        for theme, rx in ICON_RULES:
            if re.search(rx, text):
                return theme
    for f in filters:
        if f in FILTER_ICON:
            return FILTER_ICON[f]
    return "gear"


# names the game picks at runtime from world state; use the historical one
NAME_OVERRIDES = {"GER_molotov_ribbentrop_pact": "Molotov-Ribbentrop Pact"}
from effects import Summariser
summ = Summariser(game, loc, clean)
RAW = {first(f, "id"): f for f in raw}

kept = [k for k in F if k not in hidden]
res = []
for k in kept:
    v = F[k]
    x, y = pos(k)
    o = {"id": k, "name": NAME_OVERRIDES.get(k) or re.sub(r"\s+", " ", clean(loc.get(k, k)).replace("\x00", "")).strip(), "x": x, "y": y, "days": v["days"]}
    pre = [[p for p in grp if p not in hidden] for grp in v["pre"]]
    pre = [g for g in pre if g]
    if pre: o["pre"] = pre
    mx = [m for m in v["mx"] if m not in hidden]
    if mx: o["mx"] = mx
    if v["bypass"]: o["bypass"] = 1
    fl = [FILTER_SHORT.get(f, f) for f in v["filters"]]
    if fl: o["tags"] = fl
    o["ic"] = icon_theme(v["icon"], k, fl)
    fx = summ.summarise(first(RAW[k], "completion_reward", []))
    if fx: o["fx"] = fx
    # what must be true to take it, and when the game skips it for you
    req = [r for r in summ.phr.clauses(first(RAW[k], "available", []) or []) if r != "we are not a subject"]
    if req: o["req"] = req
    byp = summ.phr.text(first(RAW[k], "bypass", []) or [])
    if byp: o["byp"] = byp
    res.append(o)

json.dump(res, open(out, "w", encoding="utf-8"), ensure_ascii=False)
xs = [r["x"] for r in res]; ys = [r["y"] for r in res]
print("kept", len(res), "hidden", len(hidden), "x", min(xs), max(xs), "y", min(ys), max(ys))
print("days", collections.Counter(r["days"] for r in res).most_common())
print("unnamed", [r["id"] for r in res if r["name"] == r["id"]][:20])
print("unknown triggers", unknown.most_common(10))
dup = collections.Counter((r["x"], r["y"]) for r in res)
print("overlaps", [p for p, n in dup.items() if n > 1][:20])
print("icons", collections.Counter(r["ic"] for r in res).most_common())
print("effects: none for", sum(1 for r in res if not r.get("fx")), "focuses; avg lines", round(sum(len(r.get("fx", [])) for r in res) / len(res), 1))
