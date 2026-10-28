"""Match a guide's research order to real tech ids, resolving "UP" (= the next tech in that line).
Walks the order keeping track of what the country owns (start techs + earlier entries).
Usage: map_research.py <research.json> <guide.js> [--write]   (--write adds "tech" ids and real names to the guide)"""
import json, sys, re

ROMAN = {"1": "I", "2": "II", "3": "III", "4": "IV", "5": "V"}
# guide wording that differs from the game's tech names, and UPs the name rule gets wrong (checked by hand, 1.19.1)
OVERRIDES = {
    "res.pulverized-coal-firing-1": "improved_equipment_conversion",   # Pulverized Coal-Firing Boilers
    "res.high-efficiency": "advanced_equipment_conversion",           # High-Efficiency Turbines
    "res.panzerfaust-30": "infantry_at",                              # Germany's name for Infantry Anti-Tank I
    "res.machine-tools-up-3": "assembly_line_production",             # next after Advanced Machine Tools
    "res.engineer-company-up": "tech_engineers2",                     # Germany starts with Engineer Company I
    "res.artillery-up-3": "artillery3",                               # the artillery line, not rockets
}
# entries that are special projects, not techs (linked for the special projects view)
PROJECTS = {
    "res.flame-tank": "sp_land_flamethrower_tank",
    "res.military-engineering-vehicles": "sp_land_military_engineering_vehicles",
}

data = json.load(open(sys.argv[1], encoding="utf-8"))
T = {t["id"]: t for t in data["techs"]}
parents = {}
for t in data["techs"]:
    for c in t.get("leads", []):
        parents.setdefault(c, []).append(t["id"])
owned = set(data["start"])
norm = lambda s: re.sub(r"[^a-z0-9 ]", "", s.lower()).strip()


def by_name(name):
    n = norm(re.sub(r"\b(\d)$", lambda m: ROMAN[m.group(1)], name))
    hits = [t for t in data["techs"] if norm(t["name"]) == n]
    return hits[0]["id"] if hits else None


def reachable(tid):
    ps = parents.get(tid, [])
    return not ps or any(p in owned for p in ps)


def next_in_line(base):
    """The cheapest-earliest unowned tech whose name contains the base name and that we can research now."""
    b = norm(base)
    cands = [t for t in data["techs"] if b in norm(t["name"]) and t["id"] not in owned and reachable(t["id"])]
    cands.sort(key=lambda t: (t["year"] or 0, t["cost"]))
    return cands[0]["id"] if cands else None


guide = open(sys.argv[2], encoding="utf-8").read()
steps = re.findall(r'\{"id":"(res\.[^"]+)","t":"([^"]+)"(,"tag":"(up|sp)")?', guide)
result = []
for sid, t, _, tag in steps:
    if sid in PROJECTS:
        result.append((sid, t, tag, None)); continue
    tid = OVERRIDES.get(sid) or (next_in_line(t) if tag == "up" else by_name(t) or next_in_line(t))
    result.append((sid, t, tag, tid))
    if tid:
        owned.add(tid)
for sid, t, tag, tid in result:
    print(f"{sid:38} {t + (' UP' if tag == 'up' else ''):32} -> {tid or PROJECTS.get(sid, '???'):34} {T[tid]['name'] if tid else ''}")
print("unresolved:", sum(1 for r in result if not r[3] and r[0] not in PROJECTS))

if "--write" in sys.argv:
    out = guide
    for sid, t, tag, tid in result:
        old = re.search(r'\{"id":"' + re.escape(sid) + r'","t":"[^"]+"(,"tag":"(up|sp)")?', out).group(0)
        if sid in PROJECTS:
            out = out.replace(old, old + ',"project":"' + PROJECTS[sid] + '"', 1)
            continue
        if not tid:
            continue
        keep_sp = ',"tag":"sp"' if tag == "sp" else ""   # UP goes away: the real name says which level it is
        new = '{"id":"' + sid + '","t":' + json.dumps(T[tid]["name"], ensure_ascii=False) + keep_sp + ',"tech":"' + tid + '"'
        out = out.replace(old, new, 1)
    open(sys.argv[2], "w", encoding="utf-8", newline="\n").write(out)
    print("written")
