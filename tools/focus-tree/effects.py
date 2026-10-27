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
                  "is_in_faction", "has_war_with", "has_country_flag", "has_global_flag", "is_ai"}
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


class Summariser:
    def __init__(self, game, loc, clean):
        self.loc, self.clean = loc, clean
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
        n = self.clean(self.loc.get(key, ""))
        if n:
            return n
        # no English name: GER_operation_sea_lion_ns -> Operation sea lion
        key = re.sub(r"^[A-Z]{3}_|_(ns|idea|spirit|improved)$", "", key, flags=re.I)
        return key.replace("_", " ").strip().capitalize()

    def country(self, tag):
        return self.name(tag) if tag not in ("ROOT", "THIS", "PREV", "FROM") else "us"

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
        return self.clean(raw) or None

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
    def summarise(self, reward):
        out = []
        self.walk(reward, out, "")
        seen, lines = set(), []
        for line in out:
            line = re.sub(r"\s+([.,:;!?])", r"\1", re.sub(r"\s+", " ", line or "")).strip()
            # "Available as Chief of Army:" etc. lose the name that follows them in game, so drop bare headers
            if not line or line in seen or re.fullmatch(r"Available as [\w ]+:?", line):
                continue
            seen.add(line); lines.append(line)
        return lines[:14]

    def walk(self, node, out, where, who=""):
        pre = (who + ": ") if who else ""
        for item in chains(node):
            if item[0] == "chain":
                for limit, body in item[1]:
                    if self.cond(limit):
                        self.walk(body, out, where, who); break
                continue
            k, op, v = item
            if k is None:
                continue
            kl = k.lower()
            if kl in ("hidden_effect", "limit", "random_select_amount", "tooltip", "add_extra_state_shared_building_slots",
                      "set_country_flag", "set_global_flag", "add_ai_strategy", "add_opinion_modifier", "country_event",
                      "news_event", "clr_country_flag", "set_variable", "mark_focus_tree_layout_dirty"):
                continue
            if kl == "effect_tooltip":
                self.walk(v, out, where, who); continue
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
                    if t and len(t) < 160:
                        if t[0].islower() and who:      # "[FRA.GetName] and other nations..." lost its subject
                            t = who + " " + t
                        out.append(t.rstrip(".: "))   # tooltips usually say who they're about
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
                    self.walk(v, out, f" in {self.state(k)}", who)
                elif re.fullmatch(r"[A-Z]{3}", k) or k in ("ROOT", "owner", "controller"):
                    self.walk(v, out, where, "" if k in ("ROOT", "GER", "owner", "controller") else self.country(k))
                elif kl.startswith("random_") and "state" in kl:
                    self.walk(v, out, " in a random state", who)
                elif kl.startswith("every_") and "state" in kl:
                    n = first(v, "random_select_amount")
                    self.walk(v, out, f" in each of {n} states" if n else " in every such state", who)
                elif kl.startswith(("every_", "random_")):
                    continue   # other countries / characters: too situational to summarise
                elif kl in ("if", "else", "else_if"):
                    self.walk([x for x in v if x[0] != "limit"], out, where, who)
