"""Summarise a focus's completion_reward into short lines in our own words ("+75 political power",
"+2 civilian factories in random states", "New spirit: Mefo Bills (Consumer Goods +5%)").
Conditions are evaluated as for Germany at peace in 1936-39 with every DLC; unknown conditions count as true,
so the first matching branch of an if/else chain is used. Scripted effects and events are skipped."""
import os, re, glob
from pdx import parse, get, first

BUILDINGS = {"industrial_complex": "civilian factory", "arms_factory": "military factory", "dockyard": "naval dockyard",
             "infrastructure": "infrastructure", "synthetic_refinery": "synthetic refinery", "fuel_silo": "fuel silo",
             "air_base": "air base", "radar_station": "radar", "anti_air_building": "anti-air", "bunker": "land fort",
             "coastal_bunker": "coastal fort", "naval_base": "naval base", "rocket_site": "rocket site",
             "nuclear_reactor": "nuclear reactor", "supply_node": "supply hub", "rail_way": "railway"}
FALSE_TRIGGERS = {"has_war", "has_completed_focus", "is_subject", "has_civil_war", "is_puppet", "has_capitulated",
                  "is_in_faction", "has_war_with", "has_country_flag", "has_global_flag", "is_ai", "is_subject_of"}
RULES = {"obsolete_focus_branches_visibility": "HIDE"}
PERCENT = re.compile(r"factor|_mult|speed|efficiency|chance|_rate|_modifier|consumer_goods|stability|war_support|attack|defen[cs]e|"
                     r"breakthrough|morale|output|_cost|organisation|_org|recovery|_reduction|capacity|export|contribution|research_speed")


def chains(node):
    """Group if / else_if / else siblings into chains; yield ('chain', [(limit, body)]) or (k, op, v)."""
    i = 0
    while i < len(node):
        k, op, v = node[i]
        if k and k.lower() == "if" and isinstance(v, list):
            branches = [(first(v, "limit", []), [x for x in v if x[0] != "limit"])]
            j = i + 1
            while j < len(node) and node[j][0] and node[j][0].lower() in ("else_if", "else"):
                b = node[j][2]
                if node[j][0].lower() == "else":
                    branches.append(([("always", "=", "yes")], b))
                else:
                    branches.append((first(b, "limit", []), [x for x in b if x[0] != "limit"]))
                j += 1
            yield ("chain", branches)
            i = j
        else:
            yield node[i]
            i += 1


RELATIONS = {"non_aggression_pact": "non-aggression pact", "military_access": "military access", "guarantee": "guarantee",
              "docking_rights": "docking rights", "puppet": "puppet status"}
US = {"ROOT", "THIS", "PREV", "FROM", "GER"}   # in this tree, every one of these means Germany


class Summariser:
    def __init__(self, game, loc, clean):
        self.loc, self.clean = loc, clean
        # SOU -> SOV etc. (aliases that pick a country at runtime)
        self.alias = {}
        for f in glob.glob(os.path.join(game, "common", "country_tag_aliases", "*.txt")):
            for k, _, v in parse(open(f, encoding="utf-8-sig", errors="replace").read()):
                if k and isinstance(v, list) and first(v, "original_tag"):
                    self.alias[k] = first(v, "original_tag")
        # name countries by their 1936 ruling party: SOV is "Soviet Union", not the base "Russia"
        self.party = {}
        for f in glob.glob(os.path.join(game, "history", "countries", "*.txt")):
            tag = os.path.basename(f)[:3]
            m = re.search(r"ruling_party\s*=\s*(\w+)", open(f, encoding="utf-8-sig", errors="replace").read())
            if m:
                self.party[tag] = m.group(1)
        # events: id -> list of option bodies (to summarise what another country's answer does)
        self.events = {}
        for f in glob.glob(os.path.join(game, "events", "*.txt")):
            try:
                root = parse(open(f, encoding="utf-8-sig", errors="replace").read())
            except Exception:
                continue
            for k, _, v in root:
                if k in ("country_event", "news_event") and isinstance(v, list) and first(v, "id"):
                    self.events[first(v, "id")] = [[x for x in o if x[0] not in ("name", "trigger", "ai_chance")] for o in get(v, "option")]
        self.cur_tag, self.depth = None, 0
        self.opinion = {}
        for f in glob.glob(os.path.join(game, "common", "opinion_modifiers", "*.txt")):
            try:
                root = parse(open(f, encoding="utf-8-sig", errors="replace").read())
            except Exception:
                continue
            for block in get(root, "opinion_modifiers"):
                for name, _, body in block:
                    if name and isinstance(body, list):
                        self.opinion[name] = (first(body, "value", "0"), first(body, "trade") == "yes")
        self.ideas = {}
        for f in glob.glob(os.path.join(game, "common", "ideas", "*.txt")):
            try:
                root = parse(open(f, encoding="utf-8-sig", errors="replace").read())
            except Exception:
                continue
            for cat in get(root, "ideas"):
                for _, _, group in cat:
                    if not isinstance(group, list):
                        continue
                    for name, _, body in group:
                        if isinstance(body, list) and name:
                            mods = [(k, v) for k, _, v in (first(body, "modifier", []) or []) if k and not isinstance(v, list)]
                            self.ideas.setdefault(name, mods)

    # ---------- naming ----------
    def name(self, key):
        n = self.clean(self.loc.get(key, "")).replace("\x00", "").strip()
        if n:
            return n
        # no English name: GER_operation_sea_lion_ns -> Operation sea lion
        key = re.sub(r"^[A-Z]{3}_|_(ns|idea|spirit|improved)$", "", key, flags=re.I)
        return key.replace("_", " ").strip().capitalize()

    def country(self, tag):
        if tag in US:
            return "us"
        tag = self.alias.get(tag, tag)
        party = self.party.get(tag)
        return self.name(f"{tag}_{party}") if party and self.loc.get(f"{tag}_{party}") else self.name(tag)

    def state(self, sid):
        return self.clean(self.loc.get(f"STATE_{sid}", "")) or f"state {sid}"

    def modifier(self, k, v):
        nm = self.clean(self.loc.get("MODIFIER_" + k.upper(), "") or self.loc.get(k, "")) or k.replace("_", " ").capitalize()
        try:
            x = float(v)
        except ValueError:
            return f"{nm}: {v}"
        if PERCENT.search(k) and not k.endswith("_gain") and abs(x) <= 5:
            s = f"{x * 100:+.0f}%" if abs(x * 100 - round(x * 100)) < 1e-6 else f"{x * 100:+.1f}%"
        else:
            s = f"{x:+g}"
        return f"{nm} {s}"

    def idea(self, key):
        mods = self.ideas.get(key, [])
        text = self.name(key)
        shown = [self.modifier(k, v) for k, v in mods[:4]]
        if len(mods) > 4:
            shown.append(f"+{len(mods) - 4} more")
        return text + (f" ({', '.join(shown)})" if shown else "")

    def tooltip_value(self, key, value):
        raw = self.loc.get(key, "")
        if not raw:
            return None
        def fmt(m):
            spec = m.group(1)
            try:
                x = float(value)
            except ValueError:
                return value
            if "%" in spec:
                return f"{x * 100:+.0f}%"
            return f"{x:+g}"
        raw = re.sub(r"\$(?:RIGHT|VALUE)\|([^$]*)\$", fmt, raw)
        return self.clean(raw).replace("\x00", "").strip() or None

    # ---------- conditions ----------
    def cond(self, node, mode="AND"):
        res = []
        for k, _, v in node:
            if k is None:
                continue
            kl = k.lower()
            if kl == "has_dlc" or kl == "always" and v == "yes":
                r = True
            elif kl == "always":
                r = False
            elif kl == "has_game_rule":
                r = RULES.get(first(v, "rule")) == first(v, "option")
            elif kl == "tag" and not isinstance(v, list):
                # limits ask about other countries (a state's controller, a loop's country), which are never us at start
                r = v not in US
            elif kl in FALSE_TRIGGERS:
                r = (v == "no") if not isinstance(v, list) else False
            elif kl == "not":
                r = not self.cond(v, "OR")
            elif kl == "or":
                r = self.cond(v, "OR")
            elif kl == "and" or (isinstance(v, list) and (k.isdigit() or re.fullmatch(r"[A-Z]{3}", k) or kl in ("owner", "controller"))):
                r = self.cond(v)
            else:
                r = True
            res.append(r)
        if not res:
            return True
        return any(res) if mode == "OR" else all(res)

    # ---------- effects ----------
    @staticmethod
    def merge(lines):
        """Many claims, cores or gained states in a row read better as one line."""
        gained = {l[6:] for l in lines if l and l.startswith("Gains ")}
        cored = {l[8:] for l in lines if l and l.startswith("Core on ")}
        both = gained & cored
        lines = [("Gains and cores " + l[6:] if l.startswith("Gains ") and l[6:] in both else l) for l in lines
                 if l and not (l.startswith("Core on ") and l[8:] in both)]
        merged = []
        for line in lines:
            m = re.match(r"(Claim on|Core on|Gains and cores|Gains) (.+)$", line or "")
            if m and merged and isinstance(merged[-1], list) and merged[-1][0] == m.group(1):
                if m.group(2) not in merged[-1][1]:
                    merged[-1][1].append(m.group(2))
            elif m:
                merged.append([m.group(1), [m.group(2)]])
            else:
                merged.append(line)
        plural = {"Claim on": "Claims on", "Core on": "Cores on", "Gains": "Gains", "Gains and cores": "Gains and cores"}
        return [x if isinstance(x, str) else (plural[x[0]] if len(x[1]) > 1 else x[0]) + " " + ", ".join(x[1]) for x in merged]

    def rewrite(self, node, recipient):
        """Inside an event, ROOT/THIS is the country that gets it and FROM is us."""
        swap = lambda s: recipient if s in ("ROOT", "THIS") else ("GER" if s == "FROM" else s)
        return [(swap(k) if k else k, op, self.rewrite(v, recipient) if isinstance(v, list) else swap(v)) for k, op, v in node]

    def event_answers(self, eid, tag, out):
        """Summarise each answer another country can give to our event."""
        opts = self.events.get(eid)
        if not opts or self.depth:
            return
        self.depth += 1
        country = self.country(tag)
        for body in opts[:3]:
            sub, saved = [], self.cur_tag
            self.cur_tag = tag
            self.walk(self.rewrite(body, tag), sub, "", "THEM")
            self.cur_tag = saved
            ours = self.merge([s for s in sub if s and not s.startswith("THEM: ") and not s.startswith(country + ": ")])
            # effects on the answering country itself: "they get -150 political power"
            theirs = [re.sub(r"^(THEM|" + re.escape(country) + r"): ", "", s) for s in sub if s and (s.startswith("THEM: ") or s.startswith(country + ": "))]
            def they(s):
                if s[:1] in "+-":
                    return "they get " + s
                for a, b in (("Gains and cores ", "they gain and core "), ("Gains ", "they gain "), ("Annexes ", "they annex "),
                             ("Ends ", "they end "), ("opinion of", "their opinion of"), ("trade opinion of", "their trade opinion of"),
                             ("New spirit: ", "they get spirit ")):
                    if s.startswith(a):
                        return b + s[len(a):]
                return "they: " + s
            theirs = [they(s) for s in theirs]
            parts = ours + theirs
            if not parts:
                continue
            label = ("if they refuse" if any(s.startswith("War goal") for s in ours)
                     else "if they accept" if any(re.match(r"(Gains|Annexes|Cores? on|Puppets)", s) for s in ours) else "may answer")
            out.append("\x01" + f"{country}, {label}: " + "; ".join(parts[:4]))   # \x01 marks an event answer
        self.depth -= 1

    def summarise(self, reward):
        out = []
        self.walk(reward, out, "")
        # when the game already spells out "Effects if they accept/refuse", the event answers would repeat it
        spelled_out = any(l and l.lower().startswith("effects if they") for l in out)
        out = [l[1:] if l and l.startswith("\x01") else l for l in out if not (spelled_out and l and l.startswith("\x01"))]
        out = self.merge(out)
        seen, lines = set(), []
        for line in out:
            line = re.sub(r"\s+([.,:;!?])", r"\1", re.sub(r"\s+", " ", line or "")).strip()
            # "Available as Chief of Army:" etc. lose the name that follows them in game, so drop bare headers
            if not line or line in seen or re.fullmatch(r"Available as [\w ]+:?", line):
                continue
            seen.add(line); lines.append(line)
        return lines[:14]

    def walk(self, node, out, where, who="", state=None):
        pre = (who + ": ") if who else ""
        for item in chains(node):
            if item[0] == "chain":
                for limit, body in item[1]:
                    if self.cond(limit):
                        self.walk(body, out, where, who, state); break
                continue
            k, op, v = item
            if k is None:
                continue
            kl = k.lower()
            if kl == "country_event":
                # an event sent to another country: show what its answers do (our own events are skipped)
                if self.cur_tag and self.cur_tag not in US:
                    self.event_answers(first(v, "id") if isinstance(v, list) else v, self.cur_tag, out)
                continue
            if kl in ("hidden_effect", "limit", "random_select_amount", "tooltip", "add_extra_state_shared_building_slots",
                      "set_country_flag", "set_global_flag", "add_ai_strategy",
                      "news_event", "clr_country_flag", "set_variable", "mark_focus_tree_layout_dirty"):
                continue   # hidden in game too (AI strategy, flags)
            if kl == "effect_tooltip":
                self.walk(v, out, where, who, state); continue
            # ---- claims and diplomacy ----
            if kl in ("add_claim_by", "add_core_of") and not isinstance(v, list):
                what = "Claim" if kl == "add_claim_by" else "Core"
                place = self.state(state) if state else "several states"
                out.append(f"{what} on {place}" if v in US else f"{self.country(v)} gets a {what.lower()} on {place}")
                continue
            if kl == "add_opinion_modifier" and isinstance(v, list):
                val, trade = self.opinion.get(first(v, "modifier", ""), ("?", False))
                kind = "trade opinion" if trade else "opinion"
                try:
                    val = f"{float(val):+g}"
                except ValueError:
                    pass
                tgt = first(v, "target", "ROOT")
                if who:
                    out.append(f"{who}: {kind} of {self.country(tgt)} {val}")
                else:   # target "us" here means the countries of an outer loop (Germany's opinion of each of them)
                    out.append(f"Our {kind} of {'them' if tgt in US else self.country(tgt)} {val}")
                continue
            if kl == "give_guarantee" and not isinstance(v, list):
                out.append(f"{who or 'We'} guarantee{'s' if who else ''} {self.country(v)}")
                continue
            if kl == "add_to_faction" and not isinstance(v, list):
                out.append(f"{self.country(v)} joins {'our' if not who else who + chr(39) + 's'} faction")
                continue
            if kl == "create_faction":
                out.append(pre + "Creates a faction"); continue
            if kl == "puppet" and not isinstance(v, list):
                out.append(pre + f"Puppets {self.country(v)}"); continue
            if kl == "set_autonomy" and isinstance(v, list):
                out.append(pre + f"Makes {self.country(first(v, 'target', '?'))} a {self.name(first(v, 'autonomy_state', 'subject'))}"); continue
            if kl == "diplomatic_relation" and isinstance(v, list):
                rel = RELATIONS.get(first(v, "relation", ""), first(v, "relation", "relation").replace("_", " "))
                other = self.country(first(v, "country", "?"))
                ends = first(v, "active", "yes") == "no"
                out.append(pre + (f"Ends {rel} with {other}" if ends else f"{rel[0].upper() + rel[1:]} with {other}"))
                continue
            if kl == "add_political_power":
                out.append(pre + f"{float(v):+g} political power")
            elif kl in ("army_experience", "air_experience", "navy_experience"):
                out.append(pre + f"{float(v):+g} {kl.split('_')[0]} XP")
            elif kl in ("add_stability", "add_war_support"):
                out.append(pre + f"{float(v) * 100:+.0f}% {'stability' if kl == 'add_stability' else 'war support'}")
            elif kl == "add_manpower":
                out.append(pre + f"{float(v):+,.0f} manpower")
            elif kl == "add_research_slot":
                out.append(pre + "+1 research slot")
            elif kl == "add_tech_bonus" and isinstance(v, list):
                what = [self.name(c) for c in get(v, "category")] + [self.name(t) for t in get(v, "technology")]
                bonus = float(first(v, "bonus", "0")) * 100
                uses = first(v, "uses", "1")
                out.append(pre + f"{bonus:.0f}% research bonus: {', '.join(what) or 'some techs'} ({uses} use{'s' if uses != '1' else ''})")
            elif kl == "add_ideas":
                for idea in ([v] if not isinstance(v, list) else [x[2] for x in v]):
                    out.append(pre + "New spirit: " + self.idea(idea))
            elif kl == "add_timed_idea" and isinstance(v, list):
                out.append(pre + f"Spirit for {first(v, 'days', '?')} days: " + self.idea(first(v, "idea", "")))
            elif kl == "swap_ideas" and isinstance(v, list):
                old, new = first(v, "remove_idea", ""), first(v, "add_idea", "")
                if self.loc.get(new):
                    out.append(pre + f"Spirit {self.name(old)} becomes " + self.idea(new))
                else:   # upgraded spirits often have no name of their own
                    out.append(pre + f"Spirit {self.name(old)} improves" + self.idea(new)[len(self.name(new)):])
            elif kl == "remove_ideas":
                for idea in ([v] if not isinstance(v, list) else [x[2] for x in v]):
                    out.append(pre + "Removes spirit: " + self.name(idea))
            elif kl == "add_building_construction" and isinstance(v, list):
                b = BUILDINGS.get(first(v, "type", ""), first(v, "type", "building").replace("_", " "))
                n = first(v, "level", "1")
                plural = "ies" if b.endswith("y") and n != "1" else ("s" if n != "1" else "")
                b = b[:-1] + plural if plural == "ies" else b + plural
                out.append(pre + f"+{n} {b}{where}")
            elif kl == "add_offsite_building" and isinstance(v, list):
                out.append(pre + f"+{first(v, 'level', '1')} {BUILDINGS.get(first(v, 'type', ''), 'building')} (not tied to a state)")
            elif kl == "annex_country":
                out.append(pre + "Annexes " + self.country(first(v, "target", "?") if isinstance(v, list) else v))
            elif kl == "create_wargoal" and isinstance(v, list):
                out.append(pre + "War goal against " + self.country(first(v, "target", "?")))
            elif kl in ("add_state_core", "add_core_of"):
                sid = first(v, "state", "?") if isinstance(v, list) else v
                out.append(pre + "Core on " + (self.state(sid) if str(sid).isdigit() else where.replace(" in ", "") or "a state"))
            elif kl == "add_state_claim":
                out.append(pre + "Claim on " + self.state(v))
            elif kl == "transfer_state":
                out.append(pre + "Gains " + self.state(first(v, "state", "?") if isinstance(v, list) else v))
            elif kl == "set_demilitarized_zone" and v == "no":
                out.append(pre + "Remilitarises" + (where or " a state"))
            elif kl == "add_named_threat" and isinstance(v, list):
                out.append(pre + f"+{first(v, 'threat', '?')} world tension")
            elif kl in ("unlock_decision_tooltip", "unlock_decision_category_tooltip"):
                key = first(v, "decision", "") if isinstance(v, list) else v
                out.append(pre + "Unlocks decision: " + self.name(key))
            elif kl == "add_equipment_to_stockpile" and isinstance(v, list):
                out.append(pre + f"+{first(v, 'amount', '?')} {self.name(first(v, 'type', 'equipment'))}")
            elif kl == "add_popularity" and isinstance(v, list):
                ide = first(v, "ideology", "ROOT")
                party = "ruling party" if ide in ("ROOT", "THIS") else self.name(ide)
                out.append(pre + f"{float(first(v, 'popularity', '0')) * 100:+.0f}% {party} popularity")
            elif kl in ("add_advisor_role", "add_country_leader_role", "recruit_character", "promote_character"):
                ch = first(v, "character", "") if isinstance(v, list) else v
                if ch:
                    out.append(pre + "New character: " + self.name(ch))
            elif kl == "custom_effect_tooltip":
                if not isinstance(v, list) and "skip_one_line" not in v:
                    t = self.clean(self.loc.get(v, ""))
                    # \x00 = a name only known at runtime; "game will end" is only for whoever plays the other side
                    if t and "\x00" not in t and len(t) < 160 and "game will end" not in t.lower():
                        if t[0].islower() and who and who != "THEM":   # "[FRA.GetName] and other nations..." lost its subject
                            t = who + " " + t
                        # in another country's event answer, game tooltips speak for that country ("we" = them)
                        out.append((pre if self.depth else "") + t.rstrip(".: "))
            elif kl == "add_to_variable" and isinstance(v, list):
                tt = first(v, "tooltip")
                val = next((x[2] for x in v if x[0] not in ("tooltip", "value", "var")), None) or first(v, "value")
                if tt and val is not None:
                    t = self.tooltip_value(tt, val)
                    if t:
                        out.append(pre + t)
            elif isinstance(v, list):
                # scopes: a state id, a country tag, or every_/random_ iterators
                if k.isdigit():
                    self.walk(v, out, f" in {self.state(k)}", who, state=k)
                elif re.fullmatch(r"[A-Z]{3}", k) or k in ("ROOT", "owner", "controller"):
                    ours = k in US or k in ("owner", "controller")
                    saved, self.cur_tag = self.cur_tag, (None if ours else k)
                    self.walk(v, out, where, "" if ours else self.country(k))
                    self.cur_tag = saved
                elif kl.startswith("random_") and "state" in kl:
                    self.walk(v, out, " in a random state", who)
                elif kl.startswith("every_") and "state" in kl:
                    n = first(v, "random_select_amount")
                    self.walk(v, out, f" in each of {n} states" if n else " in every such state", who)
                elif kl.startswith(("every_", "random_")) and "country" in kl:
                    # which countries depends on a condition we can't evaluate, so stay vague
                    saved, self.cur_tag = self.cur_tag, None   # unknown countries: don't follow their events
                    self.walk(v, out, where, "Some countries" if kl.startswith("every_") else "Another country")
                    self.cur_tag = saved
                elif kl.startswith(("every_", "random_")):
                    continue   # characters, units...: too situational to summarise
                elif kl in ("if", "else", "else_if"):
                    self.walk([x for x in v if x[0] != "limit"], out, where, who, state)
