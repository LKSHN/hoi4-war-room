"""Shared game-file helpers for the extractors: English localisation and turning game text into plain names."""
import os, re, glob
from pdx import parse, get, first


def load_loc(game):
    """All English localisation keys -> raw text (first definition wins)."""
    loc = {}
    for f in glob.glob(os.path.join(game, "localisation", "english", "*_l_english.yml")):
        for line in open(f, encoding="utf-8-sig", errors="replace"):
            m = re.match(r'\s*([\w.]+):\d*\s+"(.*)"\s*(?:#[^"]*)?$', line)
            if m:
                loc.setdefault(m.group(1), m.group(2))
    return loc


def load_scripted(game):
    """Scripted localisation: [GetX] -> its fallback text key (the option without a trigger), else the first option."""
    scripted = {}
    for f in glob.glob(os.path.join(game, "common", "scripted_localisation", "*.txt")):
        for k, _, v in parse(open(f, encoding="utf-8-sig", errors="replace").read()):
            if k != "defined_text":
                continue
            opts = [(first(t, "trigger"), first(t, "localization_key")) for t in get(v, "text")]
            pick = next((key for trig, key in opts if trig is None and key), None) or next((key for _, key in opts if key), None)
            if pick:
                scripted[first(v, "name")] = pick
    return scripted


def make_clean(loc, scripted):
    """Resolve $KEY$, [TAG.GetName] and [GetX], strip colour codes and icons. \\x00 marks a name only known at runtime."""
    def clean(s, depth=0):
        if depth > 4:
            return s
        s = re.sub(r"\$(\w+)\$", lambda m: clean(loc.get(m.group(1), ""), depth + 1), s)

        def sub(m):
            inner = m.group(1)
            c = re.match(r"(\w{3})\.GetName(?:DefCap|Def|WithFlag)?$", inner)
            if c:
                return loc.get(c.group(1), c.group(1))
            key = scripted.get(inner) or scripted.get(inner.split(".")[-1])   # [GER.GetTheUSSRName] -> GetTheUSSRName
            return clean(loc.get(key, ""), depth + 1) if key else "\x00"
        s = re.sub(r"\[([^\]]*)\]", sub, s)
        s = re.sub(r"§.|£\w+|\\n", " ", s)
        return re.sub(r"\s+", " ", s).strip()
    return clean
