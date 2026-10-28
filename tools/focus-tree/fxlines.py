"""Short English lines for game effect blocks (doctrines, spirits, laws, advisor traits, decisions): modifiers,
unit-category stats, support companies boosting a kind of battalion, equipment bonuses and tactics. Shared by the
extractors; build one with make_fx(summ, loc, clean)."""
import re
from pdx import first

isnum = lambda v: isinstance(v, str) and re.fullmatch(r"-?\d+(\.\d+)?", v) is not None

# unit stats have no plain names in the localisation; organisation and deck size are flat amounts, the rest percentages
STATS = {"max_organisation": "organization", "max_strength": "HP", "soft_attack": "soft attack", "hard_attack": "hard attack",
         "breakthrough": "breakthrough", "defense": "defense", "default_morale": "recovery rate", "maximum_speed": "speed",
         "supply_consumption": "supply use", "entrenchment": "entrenchment", "air_attack": "air attack", "ap_attack": "piercing",
         "armor_value": "armor", "recon": "recon", "suppression": "suppression", "reliability": "reliability", "initiative": "initiative",
         "attack": "attack", "experience_loss_factor": "experience loss", "fuel_consumption": "fuel use", "weight": "weight",
         "naval_speed": "speed", "surface_detection": "surface detection", "sub_detection": "sub detection", "surface_visibility": "visibility",
         "sub_visibility": "sub visibility", "lg_attack": "light attack", "hg_attack": "heavy attack", "torpedo_attack": "torpedo attack",
         "anti_air_attack": "anti-air", "naval_range": "range", "air_agility": "agility", "air_defence": "air defense",
         "air_bombing": "strategic bombing", "air_ground_attack": "ground attack", "naval_strike_attack": "naval attack",
         "naval_strike_targetting": "naval targeting", "air_range": "range", "air_superiority": "air superiority", "carrier_size": "deck size"}
FLAT = {"max_organisation", "carrier_size"}
BATTALION = {"battalion_mult", "battalion_add"}
SKIP = {"name", "description", "icon", "available", "ai_will_do", "xp_cost", "xp_type", "tracks", "milestones", "rewards", "track", "folder",
        "reward_gfx", "mastery", "allowed", "visible", "ledger", "cancel", "picture", "on_add", "on_remove", "allowed_civil_war", "removal_cost",
        "cost", "level", "traits", "do_effect", "allowed_to_remove", "default", "sprite", "random", "type", "slot", "token", "idea_token",
        "gfx", "ai_strategy", "targeted_modifier"}


def stat(k, v):
    x = float(v)
    nm = STATS.get(k) or k.replace("_", " ")
    if k in FLAT or abs(x) > 5:
        return f"{nm} {x:+g}"
    return f"{nm} {x * 100:+.0f}%" if abs(x * 100 - round(x * 100)) < 1e-6 else f"{nm} {x * 100:+.1f}%"


def make_fx(summ, loc, clean):
    def fx(block):
        """Short English lines for a doctrine, reward, milestone, spirit, law, trait or decision block."""
        lines = []
        for k, op, v in block or []:
            if not k or k in SKIP:
                continue
            if k == "enable_tactic":
                lines.append("Unlocks tactic: " + summ.name(v))
            elif k == "custom_modifier_tooltip":
                t = clean(loc.get(v, ""))
                if t:
                    lines.append(t)
            elif k == "modifier" and isinstance(v, list):
                lines += fx(v)
            elif k == "equipment_bonus" and isinstance(v, list):   # stats for an equipment type, e.g. capital ships: range +10%
                for eq, _, st in v:
                    if eq and isinstance(st, list):
                        lines.append(summ.name(eq) + ": " + ", ".join(stat(x, n) for x, _, n in st if isnum(n)))
            elif k == "effect" and isinstance(v, list):
                lines += [l for l in summ.summarise(v) if "variable" not in l.lower()]
            elif isinstance(v, list) and v and all(isnum(x) or kk in BATTALION for kk, _, x in v):   # stats for a unit category or a battalion
                parts = [", ".join(stat(s, x) for s, _, x in v if isnum(x))] if any(isnum(x) for _, _, x in v) else []
                for kk, _, b in v:   # a support company boosting one kind of battalion in its division
                    if kk in BATTALION and isinstance(b, list):
                        parts.append(summ.name(first(b, "category") or "") + " battalions in the division get " +
                                     ", ".join(stat(s, x) for s, _, x in b if isnum(x)))
                lines.append(summ.name(k) + ": " + "; ".join(parts))
            elif isnum(v):
                line = summ.modifier(k, v)
                m = re.search(r" ([+-]0\.\d+)$", line)   # a factor the summariser didn't know as one: show it as a percentage
                lines.append(line[:m.start()] + f" {float(m.group(1)) * 100:+g}%" if m else line)
        return lines

    return fx
