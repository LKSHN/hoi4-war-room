import json, sys, re, datetime
tree = {r["id"]: r for r in json.load(open(sys.argv[1], encoding="utf-8"))}
g = open(sys.argv[2], encoding="utf-8").read()
order = re.findall(r'"focus":"(GER_\w+)"', g)
seen, day = set(), 0
start = datetime.date(1936, 1, 1)
for i, fid in enumerate(order, 1):
    f = tree[fid]
    probs = []
    for grp in f.get("pre", []):
        if not any(p in seen for p in grp):
            probs.append("needs " + " or ".join(tree[p]["name"] for p in grp))
    for m in f.get("mx", []):
        if m in order:
            probs.append("EXCLUSIVE with " + tree[m]["name"])
    day += f["days"]
    print(f'{i:2} {f["name"][:40]:40} {f["days"]:3}d  done {start + datetime.timedelta(days=day)}  ' + ("; ".join(probs)) + (" [bypass]" if f.get("bypass") else ""))
    seen.add(fid)
print("total days", day)
