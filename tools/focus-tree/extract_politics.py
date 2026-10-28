"""Extract what the political screens and decisions offer a country, as facts.

- The government screen's three tabs (common/idea_tags): Government (economy, trade and mobilization laws, political
  advisors), Research & Production (manufacturers, industrial concern, theorist) and Military Staff (army, navy and air
  chiefs, high command), with each slot's base cost.
- Ideas for those slots (common/ideas): laws and companies the country can take, with cost, effects and requirements.
  Germany's 1936 laws are marked from its history file.
- Advisors (common/characters/<TAG>.txt): name, slot, cost, traits with their effects (common/country_leader) and when
  they can be hired.
- Decisions (common/decisions): every category and decision the country can see, with cost, duration, requirements
  and what it does.
Effects are summarised in our own words; every DLC enabled; versions shown only without a DLC are dropped.
Usage: extract_politics.py <game dir> <out.js> <patch> [TAG]"""
import sys, os, re, glob
sys.path.insert(0, os.path.dirname(__file__))
from pdx import parse, get, first
from gamedata import load_loc, load_scripted, make_clean, write_register
from effects import Summariser
from fxlines import make_fx, isnum

game, out, patch = sys.argv[1], sys.argv[2], sys.argv[3]
TAG = sys.argv[4] if len(sys.argv) > 4 else "GER"
loc = load_loc(game)
clean = make_clean(loc, load_scripted(game))
summ = Summariser(game, loc, clean)
fx = make_fx(summ, loc, clean)
read = lambda p: parse(open(p, encoding="utf-8-sig", errors="replace").read())
items = lambda n: [x[2] for x in n if x[0] is None] if isinstance(n, list) else ([n] if n else [])
name_of = lambda k: re.sub(r"\s*[\x00-\x1f]+\s*", " ", clean(loc.get(k, "")) or k.replace("_", " ").capitalize()).strip()
TABS = [("government", "Government"), ("research_production", "Research & Production"), ("military_staff", "Military Staff")]


# scripted triggers that only check the country or DLC (PHI_SEA = Philippines with a DLC) can be decided here
scripted = {}
for p in glob.glob(os.path.join(game, "common", "scripted_triggers", "*.txt")):
    for k, _, v in read(p):
        if k and isinstance(v, list):
            scripted[k] = v
def passes(node):
    """allowed/visible blocks, as far as tags and DLC go (every DLC owned, other conditions assumed true)."""
    ok = True
    for k, op, v in node or []:
        k = k.lower() if k and k.lower() in ("not", "or", "and") else k
        if k and k.lower() in ("original_tag", "tag"):
            ok = ok and v == TAG
        elif k == "has_dlc":
            ok = ok and True
        elif k in scripted and v == "yes":   # e.g. is_literally_china_not_prc
            ok = ok and passes(scripted[k])
        elif k == "not" and isinstance(v, list):
            ok = ok and not any_true(v)
        elif k == "or" and isinstance(v, list):
            ok = ok and any_true(v)
        elif k == "and" and isinstance(v, list):
            ok = ok and passes(v)
    return ok


def any_true(node):
    for k, op, v in node or []:
        k = k.lower() if k and k.lower() in ("not", "or", "and") else k
        if k and k.lower() in ("original_tag", "tag") and v == TAG:
            return True
        if k == "has_dlc":
            return True
        if k in scripted and v == "yes" and passes(scripted[k]):
            return True
        if k == "and" and isinstance(v, list) and passes(v):
            return True
        if k == "or" and isinstance(v, list) and any_true(v):
            return True
    return False


def only_without_dlc(v):
    for key in ("visible", "allowed"):
        for k, _, b in first(v, key, []) or []:
            if k == "NOT" and isinstance(b, list) and any(x[0] == "has_dlc" for x in b):
                return True
    return False


NO = object()   # a branch that can't be true for this country
KEYWORDS = {"if", "else_if", "else", "limit", "or", "and", "not"}


def prune(node):
    """Keep what applies to this country: tag checks are decided, if/else branches for other countries dropped, OR
    alternatives for other countries removed. An if/else that depends on something else is kept as ("__if__", chain).
    Returns the remaining triggers, or NO if they can't be met."""
    out, state, chain = [], None, None

    def flush():
        nonlocal chain
        if chain:
            out.append(("__if__", None, chain))
        chain = None

    for k, op, v in node or []:
        k = k.lower() if k and k.lower() in KEYWORDS else k   # the game reads IF, OR, NOT... in any case
        if k not in ("else_if", "else"):
            flush()
        if k and k.lower() in ("original_tag", "tag"):
            if v == TAG:
                continue
            return NO
        if k in ("has_dlc", "hidden_trigger", "custom_trigger_tooltip"):
            continue
        if k in scripted and v == "yes" and all(x[0] and x[0].lower() in ("original_tag", "tag", "has_dlc") for x in scripted[k]):
            if prune(scripted[k]) is NO:
                return NO
            continue
        if k in ("if", "else_if", "else") and isinstance(v, list):
            if k == "if":
                state = None
            if state == "taken":
                continue
            lim = [] if k == "else" else prune(next((b for kk, _, b in v if kk and kk.lower() == "limit"), []) or [])
            if lim is NO:
                continue
            body = prune([x for x in v if not (x[0] and x[0].lower() == "limit")])
            if state == "chain":
                chain.append((lim, body))
                if not lim:
                    state = "taken"
                    flush()
                continue
            if not lim:   # decided for this country: its body is the requirement
                state = "taken"
                if body is NO:
                    return NO
                out += body
            else:
                state, chain = "chain", [(lim, body)]
        elif k == "or" and isinstance(v, list):
            alts = []
            for x in v:
                r = prune([x])
                if r == []:
                    alts = None
                    break
                if r is not NO:
                    alts += [y for y in r if y[0] != "__if__"]
            if alts is None:
                continue
            if not alts:
                return NO
            out += alts if len(alts) == 1 else [("OR", op, alts)]
        elif k == "and" and isinstance(v, list):
            r = prune(v)
            if r is NO:
                return NO
            out += r
        elif k == "not" and isinstance(v, list):
            kids = []
            for x in v:
                r = prune([x])
                if r == []:
                    return NO
                if r is not NO:
                    kids += [y for y in r if y[0] != "__if__"]
            if kids:
                out.append(("NOT", op, kids))
        else:
            out.append((k, op, v))
    flush()
    return out


def phrase(items):
    if items is NO:
        return ["not possible for us"]
    plain = [x for x in items if x[0] != "__if__"]
    try:
        out = list(summ.phr.clauses(plain)) if plain else []
    except Exception:
        out = []
    for _, _, chain in (x for x in items if x[0] == "__if__"):
        bodies = [phrase(body) for _, body in chain]
        if not any(bodies) or any(lim and not phrase(lim) for lim, _ in chain):
            continue   # asks for nothing we can put in words, or its condition can't be put in words
        parts = []
        for (lim, body), said in zip(chain, bodies):
            then = "; ".join(said) or "nothing more"
            parts.append(("if " + " and ".join(phrase(lim)) + ": " if lim else "otherwise: ") + then)
        out.append(", ".join(parts))
    return out


def needs(node):
    return list(dict.fromkeys(phrase(prune(node))))


def summary(node):
    try:
        return [l for l in summ.summarise(node or []) if "variable" not in l.lower() and "flag" not in l.lower()]
    except Exception:
        return []


# the three tabs and their slots
tags_root = read(os.path.join(game, "common", "idea_tags", "00_idea.txt"))
cats = {k: v for b in get(tags_root, "idea_categories") for k, _, v in b if k and isinstance(v, list)}
tabs, slot_cost = [], {}
for tid, tname in TABS:
    c = cats.get(tid) or []
    cost = int(float(first(c, "cost", "0")))
    slots = [{"id": s, "name": name_of(s), "kind": "idea"} for k, _, s in c if k == "slot"]
    chars = [{"id": s, "name": name_of(s), "kind": "advisor"} for k, _, s in c if k == "character_slot"]
    for s in slots + chars:
        slot_cost[s["id"]] = cost
    tabs.append({"id": tid, "name": tname, "cost": cost, "slots": slots + chars})
idea_slots = {s["id"] for t in tabs for s in t["slots"] if s["kind"] == "idea"}

# ideas for those slots
start = set()
hist = read(os.path.join(game, "history", "countries", "GER - Germany.txt")) if TAG == "GER" else []
for b in get(hist, "add_ideas"):
    start |= set(items(b)) if isinstance(b, list) else {b}
ideas = {}
for p in sorted(glob.glob(os.path.join(game, "common", "ideas", "*.txt"))):
    base = os.path.basename(p)
    generic = base.startswith("_") or base.startswith("zzz") or base == TAG + ".txt"
    for block in get(read(p), "ideas"):
        for slot, _, group in block:
            if slot not in idea_slots or not isinstance(group, list):
                continue
            law = first(group, "law") == "yes"
            for iid, _, v in group:
                if not iid or not isinstance(v, list) or iid in ("law", "use_list_view"):
                    continue
                allowed = first(v, "allowed", []) or []
                if (not allowed and not generic) or not passes(allowed) or only_without_dlc(v):
                    continue
                o = {"id": iid, "name": name_of(first(v, "name") or iid), "slot": slot, "fx": fx(v)}
                cost = first(v, "cost")
                o["cost"] = int(float(cost)) if isnum(cost) else slot_cost.get(slot, 0)
                if law:
                    o["law"] = True
                if first(v, "default") == "yes":
                    o["default"] = True
                if iid in start:
                    o["start"] = True
                req = needs(first(v, "available", []) or [])
                if req:
                    o["req"] = req
                ideas[iid] = o

# advisor traits and advisors
traits = {}
for p in glob.glob(os.path.join(game, "common", "country_leader", "*.txt")):
    for b in get(read(p), "leader_traits"):
        for k, _, v in b:
            if k and isinstance(v, list):
                traits[k] = v
advisors = {}
chars = read(os.path.join(game, "common", "characters", TAG + ".txt"))
for block in get(chars, "characters"):
    for cid, _, c in block:
        if not cid or not isinstance(c, list):
            continue
        nm = first(c, "name") or cid
        cname = clean(loc.get(nm, "")) or (nm if " " in nm else name_of(cid))
        for a in get(c, "advisor"):
            slot, token = first(a, "slot"), first(a, "idea_token") or cid
            if not slot or only_without_dlc(a) or not passes(first(a, "allowed", []) or []):
                continue
            cost = first(a, "cost")
            tr = items(first(a, "traits"))
            o = {"id": token, "char": cid, "name": cname, "slot": slot, "cost": int(float(cost)) if isnum(cost) else slot_cost.get(slot, 0),
                 "traits": [{"id": t, "name": name_of(t), "fx": fx(traits.get(t, []))} for t in tr]}
            if first(a, "ledger"):
                o["ledger"] = first(a, "ledger")
            req = list(dict.fromkeys(needs(first(a, "available", []) or []) + needs(first(a, "visible", []) or [])))
            if req:
                o["req"] = req
            advisors[token] = o

# decisions
categories = {}
for p in sorted(glob.glob(os.path.join(game, "common", "decisions", "categories", "*.txt"))):
    base = os.path.basename(p)
    if re.match(r"[A-Z]{2,}", base) and not base.startswith(TAG + "_"):
        continue
    for k, _, v in read(p):
        if k and isinstance(v, list) and "debug" not in k and passes(first(v, "allowed", []) or []) and not only_without_dlc(v):
            categories[k] = {"id": k, "name": name_of(k)}
decisions = {}
for p in sorted(glob.glob(os.path.join(game, "common", "decisions", "*.txt"))):
    base = os.path.basename(p)
    if base.startswith("_debug") or (re.match(r"[A-Z]{2,}", base) and not base.startswith(TAG)):
        continue
    for cat, _, block in read(p):
        if cat not in categories or not isinstance(block, list):
            continue
        for did, _, v in block:
            if not did or not isinstance(v, list) or only_without_dlc(v):
                continue
            al = first(v, "allowed", []) or []
            if not passes(al) or any(k == "always" and x == "no" for k, _, x in al):
                continue
            o = {"id": did, "name": name_of(did), "cat": cat}
            cost = first(v, "cost")
            if isnum(cost):
                o["cost"] = int(float(cost))
            elif cost:
                o["cost"] = "varies"
            for key, out_key in (("days_remove", "days"), ("days_mission_timeout", "mission"), ("days_re_enable", "again")):
                x = first(v, key)
                if isnum(x):
                    o[out_key] = int(float(x))
            if first(v, "fire_only_once") == "yes":
                o["once"] = True
            if first(v, "target_trigger") or first(v, "targets") or first(v, "target_array"):
                o["targeted"] = True
            req = needs(first(v, "available", []) or [])
            if req:
                o["req"] = req
            done = summary(first(v, "complete_effect", []) or [])
            active = fx(first(v, "modifier", []) or [])
            ends = summary(first(v, "remove_effect", []) or [])
            o["fx"] = done + (["While active: " + l for l in active]) + (["When it ends: " + l for l in ends])
            decisions[did] = o
used = {d["cat"] for d in decisions.values()}
categories = {k: c for k, c in categories.items() if k in used}

head = (f"/* Government, research & production, military staff and decisions for {TAG}, facts only, extracted from the HoI4 {patch}\n"
        f"   game files (common/idea_tags, common/ideas, common/characters/{TAG}.txt, common/country_leader, common/decisions) with\n"
        f"   every DLC enabled. cost = political power (or the slot's base cost); effects summarised in our own words. */\n")
write_register(out, head, "registerPolitics", {"patch": patch, "tag": TAG, "tabs": tabs, "ideas": ideas, "advisors": advisors,
                                               "categories": categories, "decisions": decisions})
print("tabs", [(t["id"], t["cost"], [s["id"] for s in t["slots"]]) for t in tabs])
print("ideas", len(ideas), "advisors", len(advisors), "categories", len(categories), "decisions", len(decisions))
for k in ("war_economy", "extensive_conscription", "GER_organization_todt", "partial_economic_mobilisation"):
    print(k, ideas.get(k))
for k in ("hjalmar_schacht", "ludwig_beck", "goering", "heinz_guderian", "raeder", "GER_franz_seldte"):
    print(k, advisors.get(k))
for k in ("GER_guns_before_butter", "GER_western_state_development", "war_bonds", "improved_worker_conditions", "war_propaganda_radio_industry", "war_propaganda_film_industry"):
    print(k, decisions.get(k))
