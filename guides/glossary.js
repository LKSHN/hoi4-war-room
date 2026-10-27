/* Shared glossary for tooltips. A guide can add or override entries with its own "glossary" (same shape, same id wins).
   Entry: {id, term, match:[exact phrases to underline], cs?(case-sensitive), def, patch?(may change between patches)}
   In def: **gold** for key terms, {+green} for upsides, {-red} for downsides. */
const GLOSSARY = [
  {id: "pp", term: "Political Power (PP)", match: ["PP", "political power", "Political power", "Political Power"], cs: true,
   def: "The main currency for **advisors**, **laws** and **decisions**. You earn a little every day. The guide's costs are in PP, e.g. War Economy at 150 PP."},
  {id: "xp", term: "Experience (XP)", match: ["XP", "army XP", "air XP", "navy XP"], cs: true, patch: true,
   def: "Army, air and navy experience. Army XP pays for **division templates** and army spirits, air XP for **plane designs**, navy XP for **ship designs** and naval spirits."},
  {id: "spg", term: "SPG (self-propelled gun)", match: ["SPG", "SPGs"], cs: true, patch: true,
   def: "Artillery on a tank chassis, made in the tank designer with the **Artillery** role. {+High soft attack}. This guide uses them as the main battalion of its armor template."},
  {id: "mio", term: "MIO (Military Industrial Organization)", match: ["MIO", "MIOs"], cs: true, patch: true,
   def: "A design company you assign to a type of equipment. It levels up as it produces, and each level unlocks a **trait** that improves that equipment. Added in patch 1.13."},
  {id: "up", term: "UP (guide shorthand)", match: ["UP"], cs: true,
   def: "The next level of a tech line you already have. **Support Weapons UP** means research the next Support Weapons tech."},
  {id: "special-project", term: "Special project", match: ["Special project", "special project", "special projects", "special-projects"], patch: true,
   def: "The guide researches these in the **special projects** slot, not a normal research slot."},
  {id: "political-loyalty", term: "Political Loyalty", match: ["Political Loyalty"], cs: true, patch: true,
   def: "An army spirit the guide buys first, for **20 army XP**. Its exact bonuses change between patches, so check the in-game tooltip."},
  {id: "support", term: "Support companies", match: ["support companies", "support company", "support recon", "Support:"],
   def: "Small companies in the left column of the division designer: recon, engineers, artillery, logistics, flame tanks. They add bonuses {+without using combat width}."},
  {id: "cas", term: "CAS (close air support)", match: ["CAS"], cs: true,
   def: "Planes that attack enemy divisions in land battles. Put them on **close air support** over the front your armor is pushing."},
  {id: "civ", term: "Civilian factory (civ)", match: ["civ", "civs", "civilian factory", "civilian factories"],
   def: "Works the **construction** queue and pays for trade and consumer goods."},
  {id: "mil", term: "Military factory (mil)", match: ["mil", "mils", "military factory", "military factories"],
   def: "Runs **production lines**: guns, tanks, planes and the rest of your equipment."},
  {id: "force-deploy", term: "Force deploy", match: ["force deploy", "force deploying"],
   def: "Send divisions out before their training is done. They arrive {-with less experience and equipment}, but {+count right away}, e.g. to unblock a focus that needs troops."}
];
