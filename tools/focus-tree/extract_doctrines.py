"""Extract the doctrine system and the army, navy and air spirits, as facts.

Doctrines (common/doctrines): folders, tracks, grand doctrines (XP cost, tracks, effects, one milestone per track) and
subdoctrines (track, XP cost, effects, rewards in order with the mastery each needs). Spirits (common/ideas/*_spirits.txt,
slots and XP costs from common/idea_tags): name, branch, slot, cost, effects and when they're available. Effects are
summarised in our own words. Spirits that belong to one other country are left out. Every DLC enabled.
Usage: extract_doctrines.py <game dir> <out.js> <patch> [TAG]"""
import sys, os, re, glob
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
read = lambda p: parse(open(p, encoding="utf-8-sig", errors="replace").read())
items = lambda n: [x[2] for x in n if x[0] is None] if isinstance(n, list) else ([n] if n else [])
D = os.path.join(game, "common", "doctrines")
FOLDER_OF_DIR = {"land": "land", "sea": "naval", "air": "air", "special_forces": "special_forces"}

# unit stats have no plain names in the localisation; organisation is a flat amount, the rest are percentages
STATS = {"max_organisation": "organization", "max_strength": "HP", "soft_attack": "soft attack", "hard_attack": "hard attack",
         "breakthrough": "breakthrough", "defense": "defense", "default_morale": "recovery rate", "maximum_speed": "speed",
         "supply_consumption": "supply use", "entrenchment": "entrenchment", "air_attack": "air attack", "ap_attack": "piercing",
         "armor_value": "armor", "recon": "recon", "suppression": "suppression", "reliability": "reliability", "initiative": "initiative",
         "attack": "attack", "experience_loss_factor": "experience loss", "fuel_consumption": "fuel use", "weight": "weight",
         "naval_speed": "speed", "surface_detection": "surface detection", "sub_detection": "sub detection", "surface_visibility": "visibility",
         "sub_visibility": "sub visibility", "lg_attack": "light attack", "hg_attack": "heavy attack", "torpedo_attack": "torpedo attack",
         "anti_air_attack": "anti-air", "naval_range": "range", "air_agility": "agility", "air_defence": "air defense",
         "air_bombing": "strategic bombing", "air_ground_attack": "ground attack", "naval_strike_attack": "naval attack",
         "naval_strike_targetting": "naval targeting", "air_range": "range", "air_superiority": "air superiority", "carrier_size": "deck size"}
FLAT = {"max_organisation", "carrier_size"}
BATTALION = {"battalion_mult", "battalion_add"}
SKIP = {"name", "description", "icon", "available", "ai_will_do", "xp_cost", "xp_type", "tracks", "milestones", "rewards", "track", "folder",
        "reward_gfx", "mastery", "allowed", "visible", "ledger", "cancel", "picture", "on_add", "on_remove", "allowed_civil_war", "removal_cost",
        "cost", "level", "traits", "do_effect", "allowed_to_remove", "default"}


def stat(k, v):
    x = float(v)
    nm = STATS.get(k) or k.replace("_", " ")
    return f"{nm} {x:+g}" if k in FLAT or abs(x) > 5 else f"{nm} {x * 100:+.0f}%" if abs(x * 100 - round(x * 100)) < 1e-6 else f"{nm} {x * 100:+.1f}%"


def fx(block):
    """Short English lines for a doctrine, reward, milestone or spirit block."""
    lines = []
    for k, op, v in block or []:
        if not k or k in SKIP:
            continue
        if k == "enable_tactic":
            lines.append("Unlocks tactic: " + summ.name(v))
        elif k == "custom_modifier_tooltip":
            t = clean(loc.get(v, ""))
            if t:
                lines.append(t)
        elif k == "modifier" and isinstance(v, list):
            lines += fx(v)
        elif k == "equipment_bonus" and isinstance(v, list):   # stats for an equipment type, e.g. capital ships: range +10%
            for eq, _, st in v:
                if eq and isinstance(st, list):
                    lines.append(summ.name(eq) + ": " + ", ".join(stat(x, n) for x, _, n in st if isnum(n)))
        elif k == "effect" and isinstance(v, list):
            lines += [l for l in summ.summarise(v) if "variable" not in l.lower()]
        elif isinstance(v, list) and v and all(isnum(x) or kk in BATTALION for kk, _, x in v):   # stats for a unit category or a battalion
            parts = [", ".join(stat(s, x) for s, _, x in v if isnum(x))] if any(isnum(x) for _, _, x in v) else []
            for kk, _, b in v:   # a support company boosting one kind of battalion in its division
                if kk in BATTALION and isinstance(b, list):
                    parts.append(summ.name(first(b, "category") or "") + " battalions in the division get " +
                                 ", ".join(stat(s, x) for s, _, x in b if isnum(x)))
            lines.append(summ.name(k) + ": " + "; ".join(parts))
        elif isnum(v):
            line = summ.modifier(k, v)
            m = re.search(r" ([+-]0\.\d+)$", line)   # a factor the summariser didn't know as one: show it as a percentage
            lines.append(line[:m.start()] + f" {float(m.group(1)) * 100:+g}%" if m else line)
    return lines


def needs(node):
    flat = [x for x in node or [] if x[0] not in ("has_dlc",)]
    try:
        return [c for c in summ.phr.clauses(flat)] if flat else []
    except Exception:
        return []


folders = []
for k, _, v in read(os.path.join(D, "folders", "doctrine_folders.txt")):
    if k and isinstance(v, list):
        folders.append({"id": k, "name": clean(loc.get(first(v, "name") or "", "")) or k.capitalize()})

tracks = {}
for p in sorted(glob.glob(os.path.join(D, "tracks", "*.txt"))):
    for k, _, v in read(p):
        if k and isinstance(v, list):
            tracks[k] = {"id": k, "name": clean(loc.get(first(v, "name") or "", "")) or k.replace("_", " ").capitalize()}

grand = {}
for p in sorted(glob.glob(os.path.join(D, "grand_doctrines", "*.txt"))):
    for k, _, v in read(p):
        if not k or not isinstance(v, list):
            continue
        tr = items(first(v, "tracks"))
        ms = first(v, "milestones", []) or []
        o = {"id": k, "name": clean(loc.get(first(v, "name") or "", "")) or summ.name(k), "folder": first(v, "folder"),
             "xp": int(float(first(v, "xp_cost", "0"))), "xpType": first(v, "xp_type"), "tracks": tr, "fx": fx(v),
             "milestones": [fx(m) for _, _, m in ms if isinstance(m, list)]}
        for t in tr:
            tracks.setdefault(t, {"id": t, "name": t.replace("_", " ").capitalize()})["folder"] = o["folder"]
        grand[k] = o

subs = {}
for p in sorted(glob.glob(os.path.join(D, "subdoctrines", "*", "*.txt"))):
    folder = FOLDER_OF_DIR.get(os.path.basename(os.path.dirname(p)), os.path.basename(os.path.dirname(p)))
    for k, _, v in read(p):
        if not k or not isinstance(v, list) or not first(v, "track"):
            continue
        rewards, need = [], 0
        for rk, _, rv in first(v, "rewards", []) or []:
            if not rk or not isinstance(rv, list):
                continue
            need += float(first(rv, "mastery") or 100)   # DEFAULT_REWARD_MASTERY in the defines
            rewards.append({"id": rk, "name": clean(loc.get(k + "_" + rk, "")) or rk.replace("_", " ").capitalize(), "mastery": int(need), "fx": fx(rv)})
        subs[k] = {"id": k, "name": clean(loc.get(first(v, "name") or "", "")) or summ.name(k), "track": first(v, "track"), "folder": folder,
                   "xp": int(float(first(v, "xp_cost", "0"))), "xpType": first(v, "xp_type"), "fx": fx(v), "rewards": rewards}

# spirit slots and their XP cost
slots = {}
for block in get(read(os.path.join(game, "common", "idea_tags", "00_idea.txt")), "idea_categories"):
    for k, _, v in block:
        if k and isinstance(v, list) and (first(v, "type") or "").endswith("_spirit"):
            slots[k] = {"id": k, "name": clean(loc.get(k, "")) or k.replace("_", " ").capitalize(), "branch": first(v, "type").replace("_spirit", ""),
                        "cost": int(float(first(v, "cost", "0")))}


def other_country(sid, v):
    m = re.match(r"([A-Z]{3})_", sid)
    if m and m.group(1) != TAG:
        return True
    tags = [x for k, _, x in (first(v, "allowed", []) or []) if k in ("original_tag", "tag")]
    return bool(tags) and TAG not in tags


spirits = {}
for p in sorted(glob.glob(os.path.join(game, "common", "ideas", "*_spirits.txt"))):
    if os.path.basename(p).startswith("_"):
        continue
    for ideas in get(read(p), "ideas"):
        for slot, _, block in ideas:
            if slot not in slots or not isinstance(block, list):
                continue
            for sid, _, v in block:
                if not sid or not isinstance(v, list) or other_country(sid, v):
                    continue
                o = {"id": sid, "name": clean(loc.get(sid, "")) or summ.name(sid), "slot": slot, "branch": slots[slot]["branch"], "fx": fx(v)}
                req = needs(first(v, "visible", []) or []) + needs(first(v, "available", []) or [])
                if req:
                    o["req"] = req
                spirits[sid] = o

order = {f["id"]: i for i, f in enumerate(folders)}
head = (f"/* Doctrines and army/navy/air spirits, facts only, extracted from the HoI4 {patch} game files (common/doctrines,\n"
        f"   common/ideas/*_spirits.txt, common/idea_tags) with every DLC enabled. Effects are summarised in our own words;\n"
        f"   reward mastery is cumulative (100 per reward unless the file says otherwise). */\n")
write_register(out, head, "registerDoctrines", {"patch": patch, "folders": folders, "tracks": tracks, "grand": grand, "subs": subs,
                                                "slots": slots, "spirits": spirits})
print("folders", [f["id"] for f in folders], "tracks", len(tracks), "grand", len(grand), "subs", len(subs), "slots", len(slots), "spirits", len(spirits))
for k in ("new_mobile_warfare", "battlefield_support", "trade_interdiction"):
    g = grand.get(k)
    if g:
        print(k, g["name"], g["xp"], g["tracks"], g["fx"][:3], g["milestones"][:1])
for k in ("mobile_infantry", "airspace_dominance", "patrol_boats"):
    s = subs.get(k)
    if s:
        print(k, s["name"], s["track"], s["xp"], s["fx"][:3], [(r["name"], r["mastery"], r["fx"][:2]) for r in s["rewards"]][:3])
for k in ("political_loyalty_spirit", "mobile_warfare_army_spirit", "decisive_battle_spirit"):
    print(k, spirits.get(k))
