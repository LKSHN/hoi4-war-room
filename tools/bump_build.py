"""Bump the cache-busting version after changing anything in css/, js/ or guides/.

GitHub Pages lets browsers cache files for 10 minutes, so a new page could run with old scripts or data. Every
<link>/<script> in index.html carries ?v=<BUILD>, and js/core.js loads the guide and game data files with the same
version, so one new value makes browsers fetch everything fresh.

Usage: python tools/bump_build.py            -> today's date, numbered (2026-10-28.11, or 2026-10-29.1 on a new day)
       python tools/bump_build.py <version>  -> that exact version
"""
import re
import sys
import datetime
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
CORE = ROOT / "js" / "core.js"
PAGE = ROOT / "index.html"

core = CORE.read_text(encoding="utf-8")
old = re.search(r'const BUILD = "([^"]+)"', core).group(1)

if len(sys.argv) > 1:
    new = sys.argv[1]
else:
    today = datetime.date.today().isoformat()
    day, _, n = old.partition(".")
    new = f"{today}.{int(n) + 1}" if day == today and n.isdigit() else f"{today}.1"

CORE.write_text(core.replace(f'const BUILD = "{old}"', f'const BUILD = "{new}"'), encoding="utf-8", newline="\n")
page = PAGE.read_text(encoding="utf-8")
count = page.count(f"?v={old}")
PAGE.write_text(page.replace(f"?v={old}", f"?v={new}"), encoding="utf-8", newline="\n")
print(f"BUILD {old} -> {new} ({count} tags in index.html)")
