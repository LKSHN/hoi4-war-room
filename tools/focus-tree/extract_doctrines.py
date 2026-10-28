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
from fxlines import make_fx

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

fx = make_fx(summ, loc, clean)


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
