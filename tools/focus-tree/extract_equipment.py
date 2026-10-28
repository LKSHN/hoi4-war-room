"""Extract the tank, plane and ship designers as facts: frames (chassis, airframes, hulls) with their module slots, limits,
default modules, upgrades and base stats (resolved through archetype and parents), role variants, modules
(category, stats, allowed roles, categories they forbid, types they add) upgrades (per-level stats) and the ship
classes a hull can become. Every DLC enabled.
Usage: extract_equipment.py <game dir> <out.json | out.js> [patch]"""
import sys, os, re, json, glob
sys.path.insert(0, os.path.dirname(__file__))
from pdx import parse, get, first
from gamedata import load_loc, load_scripted, make_clean
from effects import Summariser

game, out = sys.argv[1], sys.argv[2]
loc = load_loc(game)
clean = make_clean(loc, load_scripted(game))
summ = Summariser(game, loc, clean)
EQ = os.path.join(game, "common", "units", "equipment")
isnum = lambda v: isinstance(v, str) and re.fullmatch(r"-?\d+(\.\d+)?", v) is not None
NOT_STATS = {"year", "priority", "visual_level", "lend_lease_cost", "manpower", "max_military_factories", "max_dockyard_factories"}


def stats(node):
    return {k: float(v) for k, _, v in node if k and isnum(v) and k not in NOT_STATS}


def items(node):
    return [x[2] for x in node if x[0] is None]


raw, roles = {}, {}
for path in glob.glob(os.path.join(EQ, "*.txt")):
    root = parse(open(path, encoding="utf-8-sig", errors="replace").read())
    for block in get(root, "equipments"):
        for k, _, v in block:
            if k and isinstance(v, list):
                raw[k] = v
    for block in get(root, "duplicate_archetypes"):
        for k, _, v in block:
            if k and isinstance(v, list):
                fe = first(v, "for_each", []) or []
                sets = {a: float(first(b, "set")) for a, _, b in fe if isinstance(b, list) and first(b, "set") and isnum(first(b, "set"))}
                t = first(v, "type")
                roles[k] = {"of": first(v, "archetype"), "type": items(t) if isinstance(t, list) else [t], "set": sets}


def slots_of(eid, seen=()):
    """module_slots, resolving 'inherit' through parent then archetype."""
    v = raw.get(eid)
    if v is None or eid in seen:
        return {}
    ms = first(v, "module_slots")
    up = first(v, "parent") or first(v, "archetype")
    if ms == "inherit" or ms is None:
        return slots_of(up, seen + (eid,)) if up else {}
    res = {}
    parent_slots = slots_of(up, seen + (eid,)) if up else {}
    for name, _, s in ms:
        if s == "inherit":
            res[name] = parent_slots.get(name)
        elif isinstance(s, str):
            res[name] = res.get(s)
        else:
            res[name] = {"req": first(s, "required") == "yes", "cats": items(first(s, "allowed_module_categories", []) or [])}
    return {k: v for k, v in res.items() if v}


def chain(eid):
    """archetype first, then parents from oldest to this one."""
    out, cur = [], eid
    while cur and cur in raw and cur not in out:
        out.insert(0, cur)
        cur = first(raw[cur], "parent")
    arch = first(raw[eid], "archetype")
    arch = roles[arch]["of"] if arch in roles and arch not in raw else arch   # role archetypes copy a base archetype
    if arch and arch not in out and arch in raw:
        out.insert(0, arch)
    return out


def base_stats(eid):
    st, res = {}, {}
    for e in chain(eid):
        st.update(stats(raw[e]))
        r = first(raw[e], "resources")
        if isinstance(r, list):
            res = stats(r)
    return st, res


def limits(eid):
    lim = []
    for e in chain(eid):
        for l in get(raw[e], "module_count_limit"):
            cond = {k: v for k, _, v in l if k in ("module", "category")}
            cnt = next(((op, v) for k, op, v in l if k == "count"), None)
            if cnt:
                lim = [x for x in lim if x["match"] != cond] + [{"match": cond, "op": cnt[0], "n": cnt[1]}]
    return lim


FRAME_ARCH = re.compile(r"(tank_chassis|airframe|^ship_hull_[a-z]+)$")
frames, archetypes = {}, {}
for eid, v in raw.items():
    arch = first(v, "archetype")
    if first(v, "is_archetype") == "yes" and FRAME_ARCH.search(eid):
        st, res = base_stats(eid)
        t = first(v, "type")
        archetypes[eid] = {"id": eid, "name": summ.name(eid), "type": items(t) if isinstance(t, list) else ([t] if t else []),
                           "slots": slots_of(eid), "limits": limits(eid), "stats": st, "res": res,
                           "defaults": {k: x for k, _, x in (first(v, "default_modules", []) or [])}}
    elif arch and FRAME_ARCH.search(arch) and first(v, "is_buildable") != "no" and (not arch.startswith("ship_hull_") or eid.startswith("ship_hull_")):
        # ships: only the hulls of the designer; destroyer_1 and the like are the premade ships of the old naval system
        st, res = base_stats(eid)
        if arch in roles:   # e.g. small_plane_cas_airframe: stat overrides of the role apply
            st.update(roles[arch]["set"])
        ups = []
        for e in chain(eid):
            u = first(raw[e], "upgrades")
            if isinstance(u, list):
                ups = items(u)
        frames[eid] = {"id": eid, "name": summ.name(eid), "arch": arch, "year": int(first(v, "year", "0") or 0),
                       "stats": st, "res": res, "upgrades": ups,
                       "slots": slots_of(eid), "limits": limits(eid)}   # later frames can add slots (improved airframes)

# roles: duplicated archetypes (medium_tank_artillery_chassis ...) with their own type and stat overrides
for rid, r in roles.items():
    if r["of"] in archetypes:
        archetypes[rid] = {**archetypes[r["of"]], "id": rid, "name": summ.name(rid), "type": r["type"], "role_of": r["of"], "set": r["set"]}

modules = {}
for path in glob.glob(os.path.join(EQ, "modules", "*.txt")):
    for block in get(parse(open(path, encoding="utf-8-sig", errors="replace").read()), "equipment_modules"):
        for k, _, v in block:
            if not k or not isinstance(v, list) or k == "limit":
                continue
            # e.g. a medium turret lets the main armament slot take medium guns
            slotcats = {s: items(c) for s, _, c in (first(v, "allowed_module_categories", []) or []) if isinstance(c, list)}
            allow = [x for b in get(v, "allow_equipment_type") for x in ([b] if isinstance(b, str) else items(b))]
            forbid = [x for b in get(v, "forbid_equipment_type") for x in ([b] if isinstance(b, str) else items(b))]
            modules[k] = {"id": k, "name": summ.name(k), "cat": first(v, "category"),
                          "add": stats(first(v, "add_stats", []) or []), "mul": stats(first(v, "multiply_stats", []) or []),
                          "avg": stats(first(v, "add_average_stats", []) or []),
                          **({"allow": allow} if allow else {}), **({"forbid": forbid} if forbid else {}),
                          **({"slotcats": slotcats} if slotcats else {})}
            fc = first(v, "forbid_module_categories")
            if isinstance(fc, list):   # a medium battery rules out light guns on the same ship
                modules[k]["forbidcats"] = items(fc)
            if first(v, "add_equipment_type"):   # e.g. capital_ship: a cruiser with medium guns is a heavy cruiser
                modules[k]["addtype"] = first(v, "add_equipment_type")

upgrades = {}
for path in glob.glob(os.path.join(EQ, "upgrades", "*.txt")):
    for block in get(parse(open(path, encoding="utf-8-sig", errors="replace").read()), "upgrades"):
        for k, _, v in block:
            if k and isinstance(v, list):
                upgrades[k] = {"id": k, "name": summ.name(k), "max": int(first(v, "max_level", "5")),
                               "mul": stats([x for x in v if x[0] not in ("max_level",)]), "add": stats(first(v, "add_stats", []) or [])}

stat_names = {}
for st in {s for m in modules.values() for s in list(m["add"]) + list(m["mul"]) + list(m["avg"])} | {s for f in frames.values() for s in f["stats"]}:
    stat_names[st] = clean(loc.get("STAT_" + st.upper(), "") or loc.get(st, "") or "") or st.replace("_", " ").capitalize()

# which battalions use each archetype (sub_units ... need = { medium_tank_artillery_chassis = 40 })
used_by, ship_units = {}, {}
for path in glob.glob(os.path.join(game, "common", "units", "*.txt")):
    for block in get(parse(open(path, encoding="utf-8-sig", errors="replace").read()), "sub_units"):
        for uid, _, u in block:
            if not uid or not isinstance(u, list):
                continue
            for k, _, n in first(u, "need", []) or []:
                if k in archetypes:
                    used_by.setdefault(k, []).append({"id": uid, "name": summ.name(uid), "n": int(float(n))})
            # ships: the class a hull becomes (light or heavy cruiser, battleship or battlecruiser by armor)
            ne = first(u, "need_equipment") or first(u, "need")
            hull = [k for k, _, _ in ne or [] if k and k.startswith("ship_hull_") and k in archetypes]
            if hull:
                t = first(u, "type")
                any_mods = [k for b in get(first(u, "need_equipment_modules", []) or [], "any") for k, _, _ in b if k]
                ship_units[uid] = {"id": uid, "name": summ.name(uid), "hull": hull[0], "type": items(t) if isinstance(t, list) else [t],
                                   **({"mods": any_mods} if any_mods else {})}
for aid, units in used_by.items():
    archetypes[aid]["usedBy"] = units

# keep only modules some tank or plane slot can take
cats = {c for a in archetypes.values() for s in a["slots"].values() for c in s["cats"]}
cats |= {c for f in frames.values() for s in f.get("slots", {}).values() for c in s["cats"]}
cats |= {c for m in modules.values() for cs in m.get("slotcats", {}).values() for c in cs}
modules = {k: m for k, m in modules.items() if m["cat"] in cats}
ups_used = {u for f in frames.values() for u in f["upgrades"]}
upgrades = {k: u for k, u in upgrades.items() if k in ups_used}

data = {"archetypes": archetypes, "frames": frames, "modules": modules, "upgrades": upgrades, "statNames": stat_names, "shipUnits": ship_units}
if out.endswith(".js"):
    patch = sys.argv[3] if len(sys.argv) > 3 else "?"
    head = (f"/* Tank, plane and ship designers, facts only, extracted from the HoI4 {patch} game files (common/units/equipment, modules,\n"
            f"   upgrades, common/units for which battalions use what) with every DLC enabled.\n"
            f"   Stats: (base + module and upgrade adds) x (1 + multipliers); research and MIO bonuses are not included. */\n")
    open(out, "w", encoding="utf-8", newline="\n").write(head + "registerDesigners(" + json.dumps({"patch": patch, **data}, ensure_ascii=False, separators=(",", ":")) + ");\n")
else:
    json.dump(data, open(out, "w", encoding="utf-8"), ensure_ascii=False)
print("archetypes", len(archetypes), "frames", len(frames), "modules", len(modules), "upgrades", len(upgrades))
for k in ("medium_tank_chassis_1", "small_plane_airframe_2", "cas_airframe_2"):
    if k in frames:
        print(k, frames[k]["name"], frames[k]["stats"], frames[k]["upgrades"])
print("medium artillery role:", archetypes.get("medium_tank_artillery_chassis", {}).get("type"), archetypes.get("medium_tank_artillery_chassis", {}).get("set"))
for k in ("ship_hull_light_2", "ship_hull_cruiser_2", "ship_hull_submarine_1"):
    print(k, frames[k]["name"], frames[k]["stats"], frames[k]["upgrades"], list(frames[k]["slots"]) or "arch slots")
print("ship units", ship_units)
print("medium slots:", {k: v["cats"] for k, v in archetypes["medium_tank_chassis"]["slots"].items()})
