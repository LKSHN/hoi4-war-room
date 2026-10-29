"""Extract what changes a country's political power, as numbers, for the political power planner.

- The base daily gain (defines), the static modifiers for stability, war support and difficulty, and the country's
  1936 stability, war support, spirits and leader traits (history file, common/characters, common/country_leader).
- Per focus of its tree: political power it gives, and spirits it adds (timed or not), removes or swaps.
- Spirits, laws and advisor traits with a political power effect: daily gain (flat), gain factor, daily cost, and
  hiring cost factors per government slot (political_advisor_cost_factor and the like).
- Decisions with a political power effect: given when taken or when they end, and modifiers while active.
Conditions are evaluated as for the effects summaries (at peace, every DLC, first matching branch). Scripted effects and
modifiers whose value is a script variable are skipped.
Usage: extract_pp.py <game dir> <out.js> <patch> [TAG]"""
import sys, os, re, glob
sys.path.insert(0, os.path.dirname(__file__))
from pdx import parse, get, first
from gamedata import load_loc, load_scripted, make_clean, write_register
from effects import Summariser, chains

game, out, patch = sys.argv[1], sys.argv[2], sys.argv[3]
TAG = sys.argv[4] if len(sys.argv) > 4 else "GER"
loc = load_loc(game)
clean = make_clean(loc, load_scripted(game))
summ = Summariser(game, loc, clean)
read = lambda p: parse(open(p, encoding="utf-8-sig", errors="replace").read())
items = lambda n: [x[2] for x in n if x[0] is None] if isinstance(n, list) else ([n] if n else [])
num = lambda v: float(v) if isinstance(v, str) and re.fullmatch(r"-?\d+(\.\d+)?", v) else None
name_of = lambda k: re.sub(r"\s*[\x00-\x1f]+\s*", " ", summ.name(k)).strip()

# government slots, for hiring cost factors (political_advisor_cost_factor, economy_cost_factor...)
tags_root = read(os.path.join(game, "common", "idea_tags", "00_idea.txt"))
SLOTS = set()
for b in get(tags_root, "idea_categories"):
    for k, _, v in b:
        if k and isinstance(v, list):
            SLOTS |= {s for kk, _, s in v if kk in ("slot", "character_slot")}


def pp_mods(block):
    """{gain, factor, cost, costf:{slot: factor}} from a modifier block, or None when it has none of them."""
    o = {}
    for k, _, v in block or []:
        x = num(v)
        if x is None or not k:
            continue
        if k == "political_power_gain":
            o["gain"] = round(o.get("gain", 0) + x, 4)
        elif k == "political_power_factor":
            o["factor"] = round(o.get("factor", 0) + x, 4)
        elif k == "political_power_cost":
            o["cost"] = round(o.get("cost", 0) + x, 4)
        elif k.endswith("_cost_factor") and k[:-12] in SLOTS:
            o.setdefault("costf", {})[k[:-12]] = x
    return o or None


# every spirit and law with its political power modifiers
idea_mods, idea_names, idea_slot, idea_other = {}, {}, {}, set()


def for_others(allowed):
    """An allowed block that names countries, none of them us."""
    tags = re.findall(r"(?:original_)?tag\s*=\s*(\w+)", str(allowed), re.I) or [v for k, _, v in allowed or [] if k and k.lower() in ("original_tag", "tag")]
    return bool(tags) and TAG not in tags
for p in sorted(glob.glob(os.path.join(game, "common", "ideas", "*.txt"))):
    for block in get(read(p), "ideas"):
        for slot, _, group in block:
            if not isinstance(group, list):
                continue
            for iid, _, v in group:
                if iid and isinstance(v, list) and iid not in idea_mods:
                    m = pp_mods(first(v, "modifier", []) or [])
                    idea_mods[iid] = m
                    idea_names[iid] = name_of(first(v, "name") or iid)
                    idea_slot[iid] = slot
                    if for_others(first(v, "allowed", []) or []):
                        idea_other.add(iid)
ideas = {}


def use_idea(iid):
    if idea_mods.get(iid) and iid not in ideas:
        ideas[iid] = dict(name=idea_names[iid], **idea_mods[iid])
    return iid


# what a block of effects does to our political power (our own scope only)
US = {"ROOT", "THIS", TAG}


def pp_walk(node, o):
    for item in chains(node or []):
        if item[0] == "chain":
            main = next((b for lim, b in item[1] if summ.cond(lim)), None)
            if main is not None:
                pp_walk(main, o)
            continue
        k, _, v = item
        if not k:
            continue
        kl = k.lower()
        if kl == "add_political_power" and num(v) is not None:
            o["pp"] = o.get("pp", 0) + num(v)
        elif kl == "add_ideas":
            for i in items(v) if isinstance(v, list) else [v]:
                if idea_mods.get(i):
                    o.setdefault("add", []).append(use_idea(i))
        elif kl == "add_timed_idea" and isinstance(v, list):
            i, d = first(v, "idea"), num(first(v, "days"))
            if idea_mods.get(i) and d:
                o.setdefault("timed", []).append([use_idea(i), int(d)])
        elif kl == "swap_ideas" and isinstance(v, list):
            old, new = first(v, "remove_idea"), first(v, "add_idea")
            if idea_mods.get(old):
                o.setdefault("remove", []).append(use_idea(old))
            if idea_mods.get(new):
                o.setdefault("add", []).append(use_idea(new))
        elif kl == "remove_ideas":
            for i in items(v) if isinstance(v, list) else [v]:
                if idea_mods.get(i):
                    o.setdefault("remove", []).append(use_idea(i))
        elif kl in ("hidden_effect", "root", "this") or k == TAG:
            if isinstance(v, list):
                pp_walk(v, o)
    return o


# the focus tree
focus = {}
for p in glob.glob(os.path.join(game, "common", "national_focus", "*.txt")):
    root = read(p)
    trees = [t for t in get(root, "focus_tree") if any(kk == "country" and TAG in str(c) for kk, _, c in t) or first(t, "id") == "german_focus"]
    blocks = [f for t in trees for f in get(t, "focus")] + (get(root, "shared_focus") if trees else [])
    for f in blocks:
        fid = first(f, "id")
        o = pp_walk(first(f, "completion_reward", []) or [], {})
        if fid and o:
            if "pp" in o:
                o["pp"] = round(o["pp"], 2)
            focus[fid] = o

# leader traits and advisors
traits = {}
for p in glob.glob(os.path.join(game, "common", "country_leader", "*.txt")):
    for b in get(read(p), "leader_traits"):
        for k, _, v in b:
            if k and isinstance(v, list):
                traits[k] = v
ideologies = {}
for p in glob.glob(os.path.join(game, "common", "ideologies", "*.txt")):
    for b in get(read(p), "ideologies"):
        for k, _, v in b:
            if k and isinstance(v, list):
                for t in get(v, "types"):
                    for sub, _, _ in t:
                        if sub:
                            ideologies[sub] = k
hist = read(os.path.join(game, "history", "countries", "GER - Germany.txt")) if TAG == "GER" else []
party = first(first(hist, "set_politics", []) or [], "ruling_party")
recruited = set(items([(None, "=", x) for x in get(hist, "recruit_character")]))
chars = read(os.path.join(game, "common", "characters", TAG + ".txt"))
advisors, start = {}, []
for block in get(chars, "characters"):
    for cid, _, c in block:
        if not cid or not isinstance(c, list):
            continue
        for cl in get(c, "country_leader"):
            if cid in recruited and ideologies.get(first(cl, "ideology")) == party:
                for t in items(first(cl, "traits")):
                    m = pp_mods(traits.get(t, []))
                    if m:
                        start.append(dict(src="Leader: " + name_of(t), **m))
        for a in get(c, "advisor"):
            token = first(a, "idea_token") or cid
            m = {}
            for t in items(first(a, "traits")):
                for key, x in (pp_mods(traits.get(t, [])) or {}).items():
                    if key == "costf":
                        m.setdefault("costf", {}).update(x)
                    else:
                        m[key] = round(m.get(key, 0) + x, 4)
            if m:
                advisors[token] = m

# 1936 spirits and laws, stability and war support
stab = None
for k, _, v in hist:
    if k == "add_ideas":
        for i in items(v) if isinstance(v, list) else [v]:
            if idea_mods.get(i):
                start.append(dict(src=idea_names[i], **idea_mods[i]))
    elif k == "set_stability":
        stab = num(v)
    elif k and k.lower() == "if" and isinstance(v, list) and stab is None:
        x = num(first(v, "set_stability"))   # the version with every DLC
        if x is not None:
            stab = x

# laws with a political power effect (the slot ideas)
laws = {i: m for i, m in idea_mods.items() if m and idea_slot.get(i) in SLOTS and i not in idea_other}

# decisions
decisions = {}
for p in sorted(glob.glob(os.path.join(game, "common", "decisions", "*.txt"))):
    base_name = os.path.basename(p)
    if base_name.startswith("_debug") or (re.match(r"[A-Z]{2,}", base_name) and not base_name.startswith(TAG)):
        continue   # other countries' decisions
    for cat, _, block in read(p):
        if not isinstance(block, list):
            continue
        for did, _, v in block:
            if not did or not isinstance(v, list):
                continue
            o = {}
            done = pp_walk(first(v, "complete_effect", []) or [], {}).get("pp")
            ends = pp_walk(first(v, "remove_effect", []) or [], {}).get("pp")
            active = pp_mods(first(v, "modifier", []) or [])
            if done:
                o["pp"] = done
            if ends:
                o["end"] = ends
            if active:
                o["active"] = active
            if o:
                decisions[did] = o

defines = open(os.path.join(game, "common", "defines", "00_defines.lua"), encoding="utf-8-sig", errors="replace").read()
base = float(re.search(r"BASE_POLITICAL_POWER_INCREASE\s*=\s*([\d.]+)", defines).group(1))
statics = read(os.path.join(game, "common", "modifiers", "00_static_modifiers.txt"))
sfac = lambda k: num(first(first(statics, k, []) or [], "political_power_factor")) or 0

head = (f"/* Political power for {TAG}, facts only, extracted from the HoI4 {patch} game files (defines, static modifiers, history,\n"
        f"   characters, country_leader, ideas, national_focus, decisions) with every DLC enabled. gain = flat daily gain,\n"
        f"   factor = gain factor, cost = flat daily cost, costf = hiring cost factor per government slot. */\n")
write_register(out, head, "registerPP", {
    "patch": patch, "tag": TAG, "base": base,
    "stability": stab,
    "static": {"stabilityGood": sfac("stability_good_modifier"), "stabilityBad": sfac("stability_bad_modifier")},
    "start": start,
    "focus": dict(sorted(focus.items())),
    "ideas": dict(sorted(ideas.items())),
    "advisors": dict(sorted(advisors.items())),
    "laws": dict(sorted(laws.items())),
    "decisions": dict(sorted(decisions.items())),
})
print("base", base, "stability", stab, "party", party)
print("start", start)
print("focus", len(focus), "ideas", len(ideas), "advisors", len(advisors), "decisions", len(decisions))
for k in list(focus)[:8]:
    print(k, focus[k])
print({k: advisors[k] for k in list(advisors)[:10]})
