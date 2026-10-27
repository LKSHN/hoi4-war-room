"""Turn HoI4 trigger blocks into short English: "we are at war with France", "Czechoslovakia controls North Sudetenland".
Unknown or invisible triggers (flags, variables, DLC checks) are left out rather than guessed."""
import re
from pdx import first

SKIP = {"has_dlc", "has_game_rule", "has_country_flag", "has_global_flag", "has_state_flag", "check_variable", "always",
        "is_ai", "tooltip", "limit", "set_temp_variable", "multiply_temp_variable", "add_to_temp_variable", "is_historical_focus_on",
        "has_variable", "is_literally_china", "has_added_tension_amount", "temp_focus_days", "FLAG_DAYS"}
GOV = {"fascism": "fascist", "communism": "communist", "democratic": "democratic", "neutrality": "non-aligned"}
MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]


class Subj:
    def __init__(self, name, plural=False):
        self.name, self.pl = name, plural

    def be(self, neg=False):
        return ("are" if self.pl else "is") + (" not" if neg else "")

    def perf(self, neg=False):
        """'have'/'has' as an auxiliary: 'has completed', 'have not guaranteed'."""
        return ("have" if self.pl else "has") + (" not" if neg else "")

    def do(self, verb, neg=False):
        if neg:
            return ("don't " if self.pl else "doesn't ") + verb
        if self.pl:
            return verb
        if verb == "have":
            return "has"
        return verb + ("es" if verb.endswith(("s", "sh", "ch")) else "s")


WE = Subj("we", True)


class Phraser:
    def __init__(self, summ):
        self.s = summ   # for names: country(), state(), name(), loc, cond()

    def C(self, tag):
        return self.s.country(tag)

    @staticmethod
    def factor(parts, conj):
        """'we own A and we own B and we own C' -> 'we own A, B and C' when every part starts the same way."""
        if len(parts) < 2 or any("(" in p or " and " in p or " or " in p for p in parts):
            return conj.join(parts)
        words = [p.split(" ") for p in parts]
        n = 0
        while all(len(w) > n + 1 for w in words) and len({w[n] for w in words}) == 1:
            n += 1
        # only split right after a verb or preposition, never inside a name ("A German Satellite")
        while n >= 2 and words[0][n - 1] not in ("own", "owns", "control", "controls", "completed", "researched", "with"):
            n -= 1
        if n < 2:
            return conj.join(parts)
        rests = [" ".join(w[n:]) for w in words]
        return " ".join(words[0][:n]) + " " + (", ".join(rests[:-1]) + conj + rests[-1])

    def poss(self, name):
        """Possessive: us -> our, they -> their, Italy -> Italy's."""
        return {"us": "our", "we": "our", "they": "their"}.get(name, name + "'s")

    def cmp(self, op, n, unit=""):
        try:
            x = float(n)
        except ValueError:
            return None
        if op == ">":
            return f"more than {x:,.0f}{unit}" if x >= 1000 else f"more than {x:g}{unit}"
        if op == "<":
            return f"less than {x:,.0f}{unit}" if x >= 1000 else f"less than {x:g}{unit}"
        return f"{x:g}{unit}"

    # ---------- public ----------
    def clauses(self, node, subj=WE, neg=False):
        """All clauses of an AND block (NOT means none of them)."""
        out = []
        i = 0
        while i < len(node):
            k, op, v = node[i]
            if k and k.lower() == "if" and isinstance(v, list):
                # trigger-side if/else: take the branch the game would take under our assumptions
                branches = [v] + [node[j][2] for j in range(i + 1, len(node)) if node[j][0] and node[j][0].lower() in ("else_if", "else")]
                j = i + 1
                while j < len(node) and node[j][0] and node[j][0].lower() in ("else_if", "else"):
                    j += 1
                for b in branches:
                    if self.s.cond(first(b, "limit", []) or []):
                        out += self.clauses([x for x in b if x[0] != "limit"], subj, neg)
                        break
                i = j
                continue
            c = self.clause(k, op, v, subj, neg)
            if c:
                out.append(c)
            i += 1
        return out

    def text(self, node, subj=WE, neg=False, joiner=" and "):
        cs = self.clauses(node, subj, neg)
        if not cs:
            return None
        # bracket mixed logic so "A or B and C" can't be misread
        other = " or " if joiner == " and " else " and "
        cs = [f"({c})" if other in c and len(cs) > 1 else c for c in cs]
        return self.factor(cs, joiner)

    # ---------- one trigger ----------
    def clause(self, k, op, v, s, neg):
        if not k or k in SKIP:
            return None
        kl = k.lower()
        L = isinstance(v, list)
        yesno = (not L) and v in ("yes", "no")
        n = neg ^ (v == "no") if yesno else neg

        # logic
        if kl == "not" and L:
            return self.text(v, s, not neg, " or " if neg else " and ")
        if kl == "or" and L:
            parts = [self.text([x], s, neg) for x in v]
            parts = [p for p in parts if p]
            if not parts:
                return None
            j = " and " if neg else " or "
            other = " or " if j == " and " else " and "
            parts = [f"({p})" if other in p and len(parts) > 1 else p for p in parts]
            return self.factor(parts, j)
        if kl == "and" and L:
            return self.text(v, s, neg, " or " if neg else " and ")

        # custom text the game provides for this condition
        if kl in ("custom_trigger_tooltip", "custom_override_tooltip") and L:
            key = first(v, "tooltip") or first(v, "localization_key")
            t = self.s.clean(self.s.loc.get(key, "")) if isinstance(key, str) else ""
            if t and "\x00" not in t:
                t = t.strip().rstrip(".:")
                return ("not: " + t) if neg else t
            return None

        # scopes
        if L and (k.isdigit() or re.fullmatch(r"[A-Z]{3}", k) or k in ("ROOT", "FROM", "PREV", "THIS")):
            if k.isdigit():
                return self.state_text(v, k, neg)
            sub = WE if k in ("ROOT", "THIS") or self.C(k) == "us" else Subj(self.C(k))
            return self.text(v, sub, neg)
        if kl in ("controller", "owner") and L:
            return self.text(v, Subj(f"the {kl} of {s.name}" if s is not WE else f"our {kl}"), neg)
        if kl == "capital_scope" and L:
            return self.text(v, Subj(f"{self.poss(s.name)} capital"), neg)
        if kl in ("any_other_country", "any_country", "any_neighbor_country", "any_allied_country", "any_enemy_country") and L:
            body = [x for x in v if x[0] != "limit"] + (first(v, "limit", []) or [])
            # "any country whose original tag is AUS and ..." is really just "Austria ..."
            tags = [x[2] for x in body if x[0] in ("original_tag", "tag") and not isinstance(x[2], list)]
            if len(tags) == 1:
                body = [x for x in body if x[0] not in ("original_tag", "tag")]
                return self.text(body, Subj(self.C(tags[0])), neg)
            who = {"any_neighbor_country": "a neighbour", "any_allied_country": "an ally", "any_enemy_country": "an enemy"}.get(kl, "another country")
            t = self.text(body, Subj(who))
            return (("no " + who[2:] if who.startswith("a ") else "no " + who.split(" ", 1)[1]) + " where " + t) if (neg and t) else t

        # country conditions
        if kl == "has_war_with" and not L:
            return f"{s.name} {s.be(n)} at war with {self.C(v)}"
        if kl == "has_war" and yesno:
            return f"{s.name} {s.be(n)} at war"
        if kl == "is_in_faction_with" and not L:
            return f"{s.name} {s.be(n)} in a faction with {self.C(v)}"
        if kl == "is_ally_with" and not L:
            return f"{s.name} {s.be(n)} allied with {self.C(v)}"
        if kl == "is_in_faction" and yesno:
            return f"{s.name} {s.be(n)} in a faction"
        if kl == "is_faction_leader" and yesno:
            return f"{s.name} {s.be(n)} a faction leader"
        if kl == "is_subject" and yesno:
            return f"{s.name} {s.be(n)} a subject"
        if kl == "is_puppet" and yesno:
            return f"{s.name} {s.be(n)} a puppet"
        if kl == "is_subject_of" and not L:
            return f"{s.name} {s.be(n)} a subject of {self.C(v)}"
        if kl == "exists" and yesno:
            return f"{s.name} {'no longer ' if n else ''}exist{'' if s.pl else 's'}"
        if kl == "country_exists" and not L:
            return f"{self.C(v)} {'does not exist' if n else 'exists'}"
        if kl == "has_civil_war" and yesno:
            return f"{s.name} {s.be(n)} in a civil war"
        if kl == "has_capitulated" and yesno:
            return f"{s.name} {s.perf(n)} capitulated"
        if kl == "is_major" and yesno:
            return f"{s.name} {s.be(n)} a major power"
        if kl == "has_government" and not L:
            if v in GOV:
                return f"{s.name} {s.be(n)} {GOV[v]}"
            return f"{s.name} {s.do('share', n)} the ideology of {self.C(v)}"   # has_government = TAG
        if kl in ("tag", "original_tag") and not L:
            return f"{s.name} {s.be(n)} {self.C(v)}"
        if kl in ("controls_state", "owns_state", "has_full_control_of_state") and not L:
            verb = {"controls_state": "control", "owns_state": "own", "has_full_control_of_state": "fully control"}[kl]
            return f"{s.name} {s.do(verb, n)} {self.s.state(v)}"
        if kl == "has_completed_focus" and not L:
            return f"{s.name} {s.perf(n)} completed {self.s.name(v)}"
        if kl == "has_idea" and not L:
            return f"{s.name} {s.do('have', n)} the {self.s.name(v)} spirit"
        if kl == "has_tech" and not L:
            return f"{s.name} {s.perf(n)} researched {self.s.name(v)}"
        if kl == "is_guaranteed_by" and not L:
            return f"{s.name} {s.be(n)} guaranteed by {self.C(v)}"
        if kl == "has_guaranteed" and not L:
            return f"{s.name} {s.perf(n)} guaranteed {self.C(v)}"
        if kl == "has_non_aggression_pact_with" and not L:
            return f"{s.name} {s.do('have', n)} a non-aggression pact with {self.C(v)}"
        if kl in ("has_wargoal_against", "is_justifying_wargoal_against") and not L:
            what = "a war goal against" if kl == "has_wargoal_against" else "a war goal being justified against"
            return f"{s.name} {s.do('have', n)} {what} {self.C(v)}"
        if kl == "is_on_continent" and not L:
            return f"{s.name} {s.be(n)} in {v.replace('_', ' ').title()}"
        if kl in ("has_army_manpower", "has_army_size") and L:
            sz = next(((o, val) for kk, o, val in v if kk == "size"), None)
            if sz:
                o, val = sz
                try:
                    x = float(val)
                except ValueError:
                    return None
                amount = (f"at least {x + 1:,.0f}" if o == ">" else f"less than {x:,.0f}")
                what = "men in the army" if kl == "has_army_manpower" else "divisions"
                return f"{s.name} {s.do('have', n)} {amount} {what}"
            return None
        if kl in ("strength_ratio", "fighting_army_strength_ratio") and L:
            tag = first(v, "tag", "?")
            r = next(((o, val) for kk, o, val in v if kk == "ratio"), None)
            if r and re.fullmatch(r"[\d.]+", r[1]):
                word = "more" if r[0] == ">" else "less"
                return f"{s.name} {s.do('have', n)} {word} than {float(r[1]):.0%} of {self.poss(self.C(tag))} army strength"
            return None
        if kl == "has_opinion" and L:
            val = next(((o, x) for kk, o, x in v if kk == "value"), None)
            if val:
                return f"{self.poss(s.name)} opinion of {self.C(first(v, 'target', '?'))} {'is not' if n else 'is'} {'above' if val[0] == '>' else 'below'} {val[1]}"
            return None
        if kl == "surrender_progress" and not L and re.fullmatch(r"[\d.]+", v):
            return f"{s.name} {s.be(n)} {'more' if op == '>' else 'less'} than {float(v):.0%} of the way to surrender"
        if kl == "num_of_factories" and not L:
            c = self.cmp(op, v)
            return c and f"{s.name} {s.do('have', n)} {c} factories"
        if kl == "date" and not L:
            m = re.match(r"(\d+)\.(\d+)\.(\d+)", v)
            if m:
                d = f"{int(m.group(3))} {MONTHS[int(m.group(2)) - 1]} {m.group(1)}"
                return ("before " if (op == "<") != neg else "after ") + d
        if kl == "threat" and not L and re.fullmatch(r"[\d.]+", v):
            return f"world tension {'above' if (op == '>') != neg else 'below'} {float(v):.0%}"
        return None

    def state_text(self, node, sid, neg):
        st = self.s.state(sid)
        s = Subj(st)
        parts = []
        for k, op, v in node:
            kl = (k or "").lower()
            if kl in ("controller", "owner") and isinstance(v, list):
                # "the controller of X is at war with us or is us" reads better as "X is controlled by ..."
                tags = [val for kk, _, val in v if kk in ("tag", "original_tag")]
                if len(v) == len(tags) == 1:
                    verb = "controlled" if kl == "controller" else "owned"
                    parts.append(f"{st} {s.be(neg)} {verb} by {self.C(tags[0])}")
                    continue
                t = self.text(v, Subj(f"the {kl} of {st}"), neg)
                if t:
                    parts.append(t)
            elif kl in ("is_fully_controlled_by", "is_controlled_by", "is_owned_by", "is_core_of", "is_claimed_by") and not isinstance(v, list):
                what = {"is_fully_controlled_by": "fully controlled by", "is_controlled_by": "controlled by", "is_owned_by": "owned by",
                        "is_core_of": "a core of", "is_claimed_by": "claimed by"}[kl]
                parts.append(f"{st} {s.be(neg)} {what} {self.C(v)}")
            elif kl.startswith("state_is_fully_controlled_by_root"):
                extra = " or a faction member" if "faction" in kl else ""
                parts.append(f"{st} {s.be(neg)} fully controlled by us or a subject{extra}")
            else:
                t = self.clause(k, op, v, s, neg)
                if t:
                    parts.append(t)
        return " and ".join(parts) if parts else None
