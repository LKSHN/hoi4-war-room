"""Minimal Paradox script parser: returns nested lists of (key, op, value) where value is a str or a list."""
import re

TOKEN = re.compile(r'"(?:[^"\\]|\\.)*"|[{}]|[<>!]=|[=<>]|[^\s{}=<>"#]+|#[^\n]*')


def tokenize(text):
    for m in TOKEN.finditer(text):
        t = m.group(0)
        if t.startswith("#"):
            continue
        yield t


def parse(text):
    toks = list(tokenize(text))
    pos = 0

    def block():
        nonlocal pos
        out = []
        while pos < len(toks):
            t = toks[pos]
            if t == "}":
                pos += 1
                return out
            if pos + 1 < len(toks) and toks[pos + 1] in ("=", "<", ">", "<=", ">=", "!="):
                key, op = t, toks[pos + 1]
                pos += 2
                if toks[pos] == "{":
                    pos += 1
                    out.append((key, op, block()))
                else:
                    out.append((key, op, toks[pos].strip('"')))
                    pos += 1
            elif t == "{":
                pos += 1
                out.append((None, None, block()))
            else:
                out.append((None, None, t.strip('"')))
                pos += 1
        return out

    return block()


def get(node, key):
    return [v for k, _, v in node if k == key]


def first(node, key, default=None):
    v = get(node, key)
    return v[0] if v else default
