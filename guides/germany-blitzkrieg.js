/* Guide data. Loaded with a <script> tag (not fetch) so the page also works when opened straight from disk.
   Format:
   - meta: id, title, short, author, guideTitle, video, summary, patch (null = not recorded), source, datesNote,
     focusTree (path to a guides/trees/*.js file; focus steps link to it with "focus": "<game focus id>"),
     researchTree (path to a guides/trees/research-*.js file; research steps link to it with "tech": "<game tech id>",
     or "project": "<special project id>" for special projects, which aren't techs)
   - images: key -> {file, caption, alt, w, h}
   - plan / focus / research: groups {id, title, ts?, by?, approx?, steps:[{id, t, n?, tag?("up"|"sp"), img?, by?, tags?}]}
     by = in-game date the group (or step) should be done by: "YYYY-MM-DD", or "YYYY-MM" for the end of that month.
     approx = true when that date is an estimate rather than stated in the guide. A step without "by" uses its group's.
     Step IDs are stable: never change or reuse one, even if the text is reworded. New steps get new IDs.
   - designs: equipment designs {id, name, frame (game frame id), role (archetype id), modules {slot: module},
     upgrades {upgrade: level}, img?, ts?, mio?, n?, seen? (stats as shown in game, research and MIO included)};
     data comes from meta.designers. Ships use the hull (ship_hull_*) as frame and its archetype as role; the class
     (light or heavy cruiser...) follows from the modules
   - divisions: {templates: [{id, name, icon, support: [unit ids], combat: [columns of unit ids], img?, ts?, n?, seen?}],
     training: [{id, step (plan step id it belongs to), template, count, n?}]}; units come from meta.units
   - production: {states: [{id, step (plan step id), title, mils? (military factories), img?, ts?, n?,
     lines: [{id, name, eq? (game equipment id) | design? (designs id), kind? (shown under the name), f? (factories),
     cap? (in-game factory limit), rest? (gets every factory left), n?}]}]}; lines in priority order. A line keeps its id
     from state to state so the page can show what changed; equipment comes from meta.equipment.
     naval: the same for dockyards: [{id, step, title, docks? (dockyards), img?, ts?, n?, lines: [{id, name, design (a ship
     design) | eq (convoy_1), f? (dockyards), count? (ships to build), rest?, n?}]}]
   - construction: {lists: [{id, step (plan step id), title, civs? (civilian factories), uses? [{name, n}] (factories
     taken before the queue: consumer goods, trade...), img?, ts?, n?, items: [{id, state (game state id), b (building id),
     n (levels)}]}]}; items in queue order; buildings and states come from meta.construction
   - mios: [{id, org (game MIO id), step? (plan step id), order: [trait ids in queue order], designs?: [designs ids it's
     assigned to], img?, ts?, n?}]; trees come from meta.mio
   - projects: [{id, project (game special project id), step? (research or plan step id), n?}]: the special projects
     the guide recommends, in order; the full list comes from meta.projects
   - doctrines: {folders: [{id, folder (game folder id), grand (grand doctrine id), step? (plan step id), img?, ts?, n?,
     subs: [{track (track id), sub (subdoctrine id)}] in the order the guide takes them}], spirits: [{id, spirit (game
     spirit id), step?, n?}], spiritsNote?}; the doctrines and spirits come from meta.doctrines
   - glossary: tooltip terms specific to this guide, same shape as guides/glossary.js (same id overrides)
   - chapters: [{ts, label}]
   - builds: sections {title, layout?("narrow"|"cards"), items:[fig|card]}. Text fields allow **bold**.
   - legacy: old positional tick keys from the single-page version, frozen in their 2026-10 order. Used once to migrate saved ticks. */
registerGuide({
  "meta": {
    "id": "germany-blitzkrieg",
    "title": "Germany · Blitzkrieg Run",
    "short": "Germany · Blitzkrieg",
    "author": "MachiavellianStrategist",
    "guideTitle": "Ultimate Germany Guide",
    "video": "https://www.youtube.com/watch?v=s0zNamkHkG0",
    "summary": "Allies down by May 1940, USA, then Barbarossa by Aug 1941",
    "patch": null,
    "focusTree": "guides/trees/germany-1.19.1.js",
    "researchTree": "guides/trees/research-1.19.1.js",
    "designers": "guides/trees/designers-1.19.1.js",
    "units": "guides/trees/units-1.19.1.js",
    "equipment": "guides/trees/equipment-1.19.1.js",
    "construction": "guides/trees/construction-1.19.1.js",
    "mio": "guides/trees/mio-1.19.1.js",
    "projects": "guides/trees/projects-1.19.1.js",
    "doctrines": "guides/trees/doctrines-1.19.1.js",
    "source": "From the video's description and transcript. Designs, template, build queues and doctrines were read from the video frames.",
    "datesNote": "Phase dates marked ≈ are estimates. The guide only pins a few: production after Todt in Nov 1936, the construction queue in Jun 1937, the final template in Apr 1938, the Allies down by May 1940 and Barbarossa by Aug 1941."
  },

  "images": {
    "template":  {"file": "img/template.jpg",  "w": 973,  "h": 487, "caption": "MARK (ARM) division template · Apr 1938", "alt": "Division designer showing the MARK armor template"},
    "spg1":      {"file": "img/spg1.jpg",      "w": 967,  "h": 485, "caption": "SPG1 (7/4) tank design", "alt": "Tank designer showing SPG1"},
    "flame":     {"file": "img/flame.jpg",     "w": 967,  "h": 485, "caption": "Flammpanzer III design", "alt": "Tank designer showing Flammpanzer III"},
    "mio":       {"file": "img/mio.jpg",       "w": 1143, "h": 635, "caption": "Alkett MIO · numbers are the trait queue", "alt": "Alkett MIO trait tree with queue numbers"},
    "templates": {"file": "img/templates.jpg", "w": 330,  "h": 510, "caption": "Template list", "alt": "Template list"},
    "land":      {"file": "img/land.jpg",      "w": 1420, "h": 860, "caption": "Land doctrine · Mobile Warfare", "alt": "Mobile Warfare land doctrine tracks"},
    "air":       {"file": "img/air.jpg",       "w": 1510, "h": 860, "caption": "Air doctrine · Battlefield Support", "alt": "Battlefield Support air doctrine"},
    "naval":     {"file": "img/naval.jpg",     "w": 1510, "h": 860, "caption": "Naval doctrine · Trade Interdiction", "alt": "Trade Interdiction naval doctrine"},
    "f2":        {"file": "img/f2.jpg",        "w": 972,  "h": 487, "caption": "F2 fighter design", "alt": "Plane designer showing F2"},
    "c2":        {"file": "img/c2.jpg",        "w": 972,  "h": 487, "caption": "C2 CAS design", "alt": "Plane designer showing C2"},
    "build36":   {"file": "img/build36.jpg",   "w": 365,  "h": 640, "caption": "Construction queue · 1 Jan 1936", "alt": "Construction queue on 1 Jan 1936"},
    "prod36":    {"file": "img/prod36.jpg",    "w": 476,  "h": 990, "caption": "Military production · 1 Jan 1936", "alt": "Military production on 1 Jan 1936"},
    "navy36":    {"file": "img/navy36.jpg",    "w": 476,  "h": 990, "caption": "Naval production lines · 1936", "alt": "Naval production lines in 1936"},
    "prodtodt":  {"file": "img/prodtodt.jpg",  "w": 476,  "h": 990, "caption": "Production after Organisation Todt · Nov 1936", "alt": "Production after Organisation Todt, Nov 1936"},
    "build37":   {"file": "img/build37.jpg",   "w": 365,  "h": 990, "caption": "Construction queue · Jun 1937", "alt": "Construction queue, June 1937"}
  },

  "plan": [
    {"id":"plan-day-one-jan","title":"Day one, Jan 1936","ts":"02:57","by":"1936-01-01", "steps": [
      {"id":"plan.construction-infrastructure-westfalen-hessen","t":"Construction: infrastructure in Westfalen, Hessen, Moselland, Rhineland, then 1 civ in each, then mils (Westfalen 4, Hessen 5)","img":"build36"},
      {"id":"plan.production-train-1-bf","t":"Production: train 1, Bf 109 1, Ju 87 1, Do 22 3, artillery 3, trucks 3, support eq. 5, Kar 98k the rest","img":"prod36"},
      {"id":"plan.navy-cancel-extra-ships","t":"Navy: cancel extra ships, 2 dockyards on the heavy ships, max on the rest, 1 on convoys","n":"Light cruisers come later once you have navy XP","img":"navy36"},
      {"id":"plan.fix-trade","t":"Fix trade"},
      {"id":"plan.templates-infantry-armor-motorized","t":"Templates: infantry, armor, motorized (used less), mountaineers (unused)","img":"templates"},
      {"id":"plan.split-off-armored-divisions","t":"Split off the armored divisions, convert everything else to infantry, queue 21 infantry"},
      {"id":"plan.fleet-submarines-one-fleet","t":"Fleet: submarines in one fleet, the rest in another, each with an admiral, train both"},
      {"id":"plan.merge-planes-send-bombers","t":"Merge planes, send the bombers as air volunteers to Italy","n":"Bombers only. Land divisions get stuck there."},
      {"id":"plan.3-infantry-armies-under","t":"3 infantry armies under one marshal, armor under another"},
      {"id":"plan.fallback-lines-so-nobody","t":"Fallback lines so nobody dies of attrition, shift-click Train to train everyone to Regular, train the other planes"}
    ]},
    {"id":"plan-early-game-political","title":"Early game & political power","ts":"04:54","by":"1936-12","approx":true, "steps": [
      {"id":"plan.army-organization-farm-army","t":"Army Organization to farm army XP, then the Mefo Bills architect"},
      {"id":"plan.at-20-army-xp","t":"At 20 army XP: Political Loyalty"},
      {"id":"plan.refit-admiral-hipper-into","t":"Refit Admiral Hipper into the best light cruiser with Raiding Ship Builders, all new dockyards on it"},
      {"id":"plan.first-event-that-pops","t":"First event that pops: take the first option"},
      {"id":"plan.with-air-xp-design","t":"With air XP: design the F1 fighter and C1 CAS"},
      {"id":"plan.when-focus-unlocks-mefo","t":"When the focus unlocks the Mefo decisions: take all of them except Implementations and Wage Controls","n":"Cuts consumer goods about 17%. Rubber deficit is fine."},
      {"id":"plan.spanish-civil-war-force","t":"Spanish Civil War: force deploy, send volunteers under von Manstein, plus air volunteers","n":"Helping the Republicans makes the war longer and gives more army XP"},
      {"id":"plan.queue-another-24-infantry","t":"Queue another 24 infantry"},
      {"id":"plan.150-pp-war-economy","t":"150 PP: War Economy, then military factories in 100% provinces first"},
      {"id":"plan.anschluss-force-deploy-divisions","t":"Anschluss: force deploy divisions if it's blocked","n":"Keep force deploying so it doesn't cancel"},
      {"id":"plan.organisation-todt-as-industrial","t":"Organisation Todt as industrial concern when the notification shows"},
      {"id":"plan.production-armored-support-vehicles","t":"Production: armored support vehicles at top priority, Kar 98k capped at 25, F1 25, C1 15, Do 22 5","img":"prodtodt"},
      {"id":"plan.austrian-infantry-template-1","t":"Austrian infantry template, 1-cavalry garrison template, occupation law Local Police Force, convert Austrian divisions and train them"},
      {"id":"plan.fix-trade-again-more","t":"Fix trade again (more rubber for planes), take the Reichsmarschall specialist"},
      {"id":"plan.100-pp-improved-worker","t":"100 PP: Improved Worker Conditions, then the last price control measures"}
    ]},
    {"id":"plan-land-doctrine-china","title":"Land doctrine & China","ts":"09:40","by":"1937-09","approx":true, "steps": [
      {"id":"plan.favourite-tactic-then-grand","t":"Favourite tactic, then Grand Assault > Assault Infantry > Self-Propelled Support > Streamlined Deployment","img":"land"},
      {"id":"plan.event-stick-with-todt","t":"Event: stick with Todt. Pick the SPG tank MIO"},
      {"id":"plan.decisions-develop-western-develop","t":"Decisions: Develop Western and Develop Central Germany"},
      {"id":"plan.queue-mils-100-states","t":"Queue: mils in the 100% states, then 2 refineries each, then mils in the 80% states","n":"Exact state order is on the Builds tab","img":"build37"},
      {"id":"plan.recruit-42-more-defensive","t":"Recruit 42 more defensive divisions (48 total), improve relations with Japan, take the air spirits"},
      {"id":"plan.gold-event-always-take","t":"Gold event: always take the gold"},
      {"id":"plan.china-war-attache-japan","t":"China war: attaché to Japan, deploy everything, then send max volunteers to Spain, Japan and every Japanese puppet at the same moment","n":"Air volunteers too. Push along the Chinese coast to farm XP, level up the strong general who'll become a marshal."},
      {"id":"plan.intelligence-agency-with-5","t":"Intelligence agency with 5 upgrades"},
      {"id":"plan.infantry-equipment-down-10","t":"Infantry equipment down to 10, new factories on F1 at lowest priority"},
      {"id":"plan.spies-one-usa-one","t":"Spies: one in the USA, one in the UK"},
      {"id":"plan.150-pp-reich-minister","t":"150 PP: Reich Minister of Labour. Force deploy and send more volunteers"}
    ]},
    {"id":"plan-air-doctrine-czechoslovakia","title":"Air doctrine & Czechoslovakia","ts":"13:10","by":"1938-02","approx":true, "steps": [
      {"id":"plan.air-airspace-dominance-then","t":"Air: Airspace Dominance, then Precision Naval Bombing","img":"air"},
      {"id":"plan.fate-czechoslovakia-slovakia-as","t":"Fate of Czechoslovakia: Slovakia as a puppet"},
      {"id":"plan.150-pp-security-advisor","t":"150 PP: security advisor, spies to quiet network"},
      {"id":"plan.60-army-xp-motorization","t":"60 army XP: Motorization Drive"}
    ]},
    {"id":"plan-spg-design-template","title":"SPG design & template","ts":"13:57","by":"1938-04","approx":true, "steps": [
      {"id":"plan.design-spg1-medium-chassis","t":"Design SPG1 (medium chassis, Artillery role, engine 7, armor 4) and the Flammpanzer III","n":"Details on the Designs tab","img":"spg1"},
      {"id":"plan.production-flame-tank-1","t":"Production: flame tank 1, SPG all the rest, F1 10, C1 10"},
      {"id":"plan.queue-7-alkett-mio","t":"Queue the 7 Alkett MIO traits","img":"mio"},
      {"id":"plan.force-deploy-last-defensive","t":"Force deploy the last defensive divisions, recruit 9 armored divisions"},
      {"id":"plan.build-mark-template-as","t":"Build the MARK template as XP comes in: 8 motorized + 10 SPG, support recon, engineers, artillery, flame, logistics","img":"template"},
      {"id":"plan.spymaster-then-decisive-battle","t":"Spymaster, then Decisive Battle expert for navy XP, train the new ships"},
      {"id":"plan.after-coal-liquefaction-take","t":"After Coal Liquefaction: take the new decision"},
      {"id":"plan.blitzkrieg-theorist-force-deploy","t":"Blitzkrieg theorist, force deploy, train everything (navy and planes too)"},
      {"id":"plan.import-oil-so-you","t":"Import oil so you don't run dry before the war, take Maneuver Warfare"}
    ]},
    {"id":"plan-naval-doctrine-last","title":"Naval doctrine & last prep","ts":"17:55","by":"1938-12","approx":true, "steps": [
      {"id":"plan.naval-trade-interdiction-then","t":"Naval: Trade Interdiction, then Patrol Boats, Line of Battle, Capital Hunters","img":"naval"},
      {"id":"plan.infantry-expert-cas-expert","t":"Infantry expert, CAS expert, Armor Genius"},
      {"id":"plan.start-preparing-collaboration-government","t":"Start preparing a collaboration government in the USA with your spies"},
      {"id":"plan.design-f2-c2-f2","t":"Design F2 and C2, F2 to 25 factories (taken from SPG)","img":"f2"},
      {"id":"plan.more-military-factories-100","t":"More military factories in 100% provinces"}
    ]},
    {"id":"plan-ww2-setup","title":"WW2 setup","ts":"19:42","by":"1939-06","approx":true, "steps": [
      {"id":"plan.armor-army-poland-with","t":"Armor army for Poland with your best general and a logistics wizard, promote the top general to marshal"},
      {"id":"plan.promote-defensive-marshal-infantry","t":"Promote a defensive marshal for the infantry armies"},
      {"id":"plan.smallest-infantry-army-covers","t":"Smallest infantry army covers all of Poland, one on the French border, one on northern Poland, the last two also on the Polish front"},
      {"id":"plan.danzig-or-war-70","t":"Danzig or War (70 days)"},
      {"id":"plan.navy-destroyers-patrol-at","t":"Navy: destroyers patrol at low risk, subs convoy-raid the same sea, capital ships on strike force in the best harbor"},
      {"id":"plan.planes-naval-bombers-500","t":"Planes: naval bombers + 500 fighters follow the navy, 500 fighters defend Germany (3 on interception), the rest air superiority + CAS on the armor"}
    ]},
    {"id":"plan-ww2-europe","title":"WW2: Europe","ts":"22:24","by":"1940-03","approx":true, "steps": [
      {"id":"plan.war-bonds-reich-minister","t":"War bonds, Reich Minister of Foreign Affairs, justify on Hungary"},
      {"id":"plan.from-now-every-free","t":"From now on every free civilian factory builds military factories"},
      {"id":"plan.poland-down-seize-their","t":"Poland down: seize their gold, then Netherlands, Belgium, Luxembourg (take their gold too)"},
      {"id":"plan.france-down-justify-yugoslavia","t":"France down. Justify Yugoslavia after Hungary, then Bulgaria and Greece. Watch the claim timers"},
      {"id":"plan.cas-naval-bombing-channel","t":"CAS naval-bombing the Channel with fighters, naval bombers on patrol and port strikes"},
      {"id":"plan.tag-saudi-arabia-iraq","t":"Tag Saudi Arabia, Iraq and Iran (declare war, don't invade)"},
      {"id":"plan.hungary-yugoslavia-campaign-instructions","t":"Hungary, Yugoslavia (campaign instructions help), Bulgaria, Romania, Greece"},
      {"id":"plan.extensive-conscription-if-manpower","t":"Extensive Conscription if manpower gets tight"},
      {"id":"plan.block-every-sea-region","t":"Block every sea region except the Channel, repair the fleet when damaged"},
      {"id":"plan.tag-ireland-declare-denmark","t":"Tag Ireland, declare on Denmark and Norway to get the Iceland claim, justify Portugal"},
      {"id":"plan.domestic-film-industry-more","t":"Domestic Film Industry, more tags (Liberia, Yemen, others)"},
      {"id":"plan.spain-then-portugal","t":"Spain, then Portugal","n":"If the Republicans won the civil war, they're in the peace deal anyway and you can skip invading"}
    ]},
    {"id":"plan-invading-uk","title":"Invading the UK","ts":"36:15","by":"1940-05","approx":true, "steps": [
      {"id":"plan.plan-naval-invasion-two","t":"Plan the naval invasion: two groups of 6 SPG divisions"},
      {"id":"plan.tag-argentina-brazil-mexico","t":"Tag Argentina, Brazil and Mexico, accept the white peace when the USA asks","n":"Important: you don't want war with the USA yet. The UK calls them back in later."},
      {"id":"plan.launch-it-fleet-naval","t":"Launch it: fleet on naval invasion support, others on patrol. Justify on Italy"},
      {"id":"plan.peace-deal-annex-danzig","t":"Peace deal: annex Danzig, Luxembourg and the provinces you need to reach the USA. Annex or balkanize Poland, puppet the rest with resource rights and war reparations","n":"Never keep a puppet Poland"},
      {"id":"plan.production-infantry-c2-f2","t":"Production: infantry, C2, F2 to 50, trucks 15, mechanized ASAP. Recruit 12 more armored"},
      {"id":"plan.radio-propaganda-last-develop","t":"Radio Propaganda and the last Develop Germany decisions"}
    ]},
    {"id":"plan-usa-italy","title":"USA & Italy","ts":"41:21","by":"1941-03","approx":true, "steps": [
      {"id":"plan.main-push-with-armor","t":"Main push with armor + 2 infantry armies following, 1 infantry army toward San Francisco, defensive divisions push Seattle from Canada"},
      {"id":"plan.two-submarine-fleets-two","t":"Two submarine fleets and two main fleets, destroyers split across sea regions on patrol, the rest strike force"},
      {"id":"plan.spend-spare-pp-spy","t":"Spend spare PP on spy upgrades"},
      {"id":"plan.italy-crush-them-take","t":"Italy: crush them, take their navy. Mechanized to 150 factories"},
      {"id":"plan.justify-usa-force-deploy","t":"Justify on the USA, force deploy and train the new armor"},
      {"id":"plan.war-with-usa-spgs","t":"War with the USA: SPGs first, then call Canada and Mexico and push with everyone"}
    ]},
    {"id":"plan-operation-barbarossa","title":"Operation Barbarossa","ts":"46:25","by":"1941-08","approx":true, "steps": [
      {"id":"plan.all-infantry-marshal-line","t":"All infantry on a marshal line in support, SPGs do the main push"},
      {"id":"plan.optional-justify-everyone-left","t":"Optional: justify on everyone left for a world-conquest peace deal"},
      {"id":"plan.spg-ii-flame-tank","t":"SPG II and flame tank upgrade, motorized to mechanized, add an SPG to the infantry template"},
      {"id":"plan.take-switzerland-with-spare","t":"Take Switzerland with spare SPGs, use medals to cut supply use"},
      {"id":"plan.leningrad-stalingrad-then-sweep","t":"Leningrad, Stalingrad, then sweep the victory points"},
      {"id":"plan.don-t-forget-yugoslavia","t":"Don't forget Yugoslavia","n":"He nearly did"}
    ]}
  ],

  "focus": [
    {"id":"focus-1936-opening","title":"1936 · Opening", "steps": [
      {"id":"focus.remilitarize-rhineland","t":"Remilitarize The Rhineland","focus":"GER_remilitarize_the_rhineland"},
      {"id":"focus.fuhrerprinzip","t":"Fuhrerprinzip","focus":"GER_fuhrerprinzip"},
      {"id":"focus.reichsleiter-todt","t":"Reichsleiter Todt","focus":"GER_ascension_of_todt"},
      {"id":"focus.four-year-plan","t":"The Four-Year Plan","focus":"GER_the_four_year_plan"},
      {"id":"focus.autarky-efforts","t":"Autarky Efforts","focus":"GER_autarky_efforts"},
      {"id":"focus.institute-price-controls","t":"Institute Price Controls","focus":"GER_institute_price_controls"},
      {"id":"focus.reorganize-wehrmacht","t":"Reorganize The Wehrmacht","focus":"GER_reorganize_the_wehrmacht"},
      {"id":"focus.construct-reichsautobahn","t":"Construct The Reichsautobahn","focus":"GER_construct_the_reichsautobahn"},
      {"id":"focus.party-chancellor-hess","t":"Party Chancellor Hess","focus":"GER_party_chancellor_hess"}
    ]},
    {"id":"focus-expansion-industry","title":"Expansion & industry", "steps": [
      {"id":"focus.anschluss","t":"Anschluss","focus":"GER_anschluss","n":"Force deploy if needed"},
      {"id":"focus.kdf-wagen-factories","t":"KdF-Wagen Factories","focus":"GER_kdf_wagen_factories"},
      {"id":"focus.develop-heraeus-research-facility","t":"Develop Heraeus Research Facility","focus":"GER_develop_heraeus_facilities"},
      {"id":"focus.reichsleiter-goebbels","t":"Reichsleiter Goebbels","focus":"GER_ascension_of_goebbels"},
      {"id":"focus.accelerate-rearmament-program","t":"Accelerate the Rearmament Program","focus":"GER_accelerate_the_rearmament_program"},
      {"id":"focus.establish-production-targets","t":"Establish Production Targets","focus":"GER_establish_production_targets"},
      {"id":"focus.concentrated-armament-program","t":"Concentrated Armament Program","focus":"GER_concentrated_armament_program"},
      {"id":"focus.demand-sudetenland","t":"Demand Sudetenland","focus":"GER_demand_sudetenland"},
      {"id":"focus.first-vienna-award","t":"First Vienna Award","focus":"GER_first_vienna_award"},
      {"id":"focus.fate-czechoslovakia","t":"Fate Of Czechoslovakia","focus":"GER_fate_of_czechoslovakia"}
    ]},
    {"id":"focus-luftwaffe-panzers","title":"Luftwaffe & Panzers", "steps": [
      {"id":"focus.expanding-luftwaffe","t":"Expanding The Luftwaffe","focus":"GER_expanding_the_luftwaffe"},
      {"id":"focus.aeronautical-research-institute","t":"Aeronautical Research Institute","focus":"GER_aeronautical_research_institute"},
      {"id":"focus.dive-bombers","t":"Dive Bombers","focus":"GER_dive_bombers"},
      {"id":"focus.coal-liquefaction","t":"Coal Liquefaction","focus":"GER_coal_liquefaction"},
      {"id":"focus.develop-modern-maneuver-warfare","t":"Develop Modern Maneuver Warfare","focus":"GER_develop_modern_maneuver_warfare"},
      {"id":"focus.adopt-new-panzer-doctrine","t":"Adopt New Panzer Doctrine","focus":"GER_adopt_new_panzer_doctrine"},
      {"id":"focus.panzer-troop-schools","t":"Panzer Troop Schools","focus":"GER_panzer_troops_school"},
      {"id":"focus.advanced-panzer-research","t":"Advanced Panzer Research","focus":"GER_advanced_panzer_research"},
      {"id":"focus.combined-arms","t":"Combined Arms","focus":"GER_combined_arms"},
      {"id":"focus.form-jagdwaffe","t":"Form The Jagdwaffe","focus":"GER_form_the_jagdwaffe"},
      {"id":"focus.instill-auftragstaktik","t":"Instill Auftragstaktik","focus":"GER_instill_auftragstaktik"}
    ]},
    {"id":"focus-war-prep","title":"War prep", "steps": [
      {"id":"focus.establish-reichswerke","t":"Establish The Reichswerke","focus":"GER_establish_the_reichswerke"},
      {"id":"focus.reassert-eastern-claims","t":"Reassert Eastern Claims","focus":"GER_reassert_eastern_claims"},
      {"id":"focus.establish-buna-werke","t":"Establish Buna Werke","focus":"GER_establish_buna_werke"},
      {"id":"focus.danzig-or-war","t":"Danzig Or War","focus":"GER_danzig_or_war"},
      {"id":"focus.around-maginot","t":"Around Maginot","focus":"GER_around_maginot"},
      {"id":"focus.operation-weserubung","t":"Operation Weserubung","focus":"GER_operation_weserubung"},
      {"id":"focus.form-zentrale-planung","t":"Form The Zentrale Planung","focus":"GER_zentrale_planung"},
      {"id":"focus.operation-sea-lion","t":"Operation Sea Lion","focus":"GER_operation_sea_lion"}
    ]},
    {"id":"focus-wartime","title":"Wartime", "steps": [
      {"id":"focus.demonstration-military-achievements","t":"Demonstration Of Military Achievements","focus":"GER_demonstration_of_military_achievements"},
      {"id":"focus.germany-army-invincible","t":"Germany Army, Invincible","focus":"GER_an_invincible_army"},
      {"id":"focus.loyalty-fuhrer","t":"Loyalty To The Fuhrer","focus":"GER_loyalty_to_the_fuhrer"},
      {"id":"focus.triumphant-will","t":"The Triumphant Will","focus":"GER_the_triumphant_will","n":"Skip if the war is almost over"},
      {"id":"focus.autarky-achieved","t":"Autarky Achieved","focus":"GER_autarky_achieved","n":"Bypasses the previous focuses"},
      {"id":"focus.supreme-leader","t":"The Supreme Leader","focus":"GER_the_supreme_leader"},
      {"id":"focus.panzergrenadier","t":"Panzergrenadier","focus":"GER_panzergrenadier"},
      {"id":"focus.improve-logistics-system","t":"Improve The Logistics System","focus":"GER_improve_the_logistics_system"},
      {"id":"focus.operation-tannenbaum","t":"Operation Tannenbaum","focus":"GER_operation_tannenbaum"},
      {"id":"focus.reintegrate-luxembourg-alsace-lorraine","t":"Reintegrate Luxembourg and Alsace-Lorraine","focus":"GER_reintegrate_luxemburg_and_alsace_lorraine"},
      {"id":"focus.armament-rationalization","t":"Armament Rationalization","focus":"GER_armament_rationalization"}
    ]}
  ],

  "research": [
    {"id":"res-all","title":null, "steps": [
      {"id":"res.electronic-mechanical-engineering","t":"Electronic Mechanical Engineering","tech":"electronic_mechanical_engineering"},
      {"id":"res.basic-machine-tools","t":"Basic Machine Tools","tech":"basic_machine_tools"},
      {"id":"res.construction-1","t":"Construction I","tech":"construction1"},
      {"id":"res.range-improvements","t":"Range Improvements","tech":"range_improvements"},
      {"id":"res.military-engineering-vehicles","t":"Military Engineering Vehicles","tag":"sp","project":"sp_land_military_engineering_vehicles"},
      {"id":"res.inter-war-artillery","t":"Inter-War Artillery","tech":"interwar_artillery"},
      {"id":"res.mechanical-computing","t":"Mechanical Computing","tech":"mechanical_computing"},
      {"id":"res.concentrated-industry-1","t":"Concentrated Industry I","tech":"concentrated_industry"},
      {"id":"res.radio","t":"Radio","tech":"radio"},
      {"id":"res.support-weapons-up","t":"Support Weapons I","tech":"support_weapons"},
      {"id":"res.concentrated-industry-up","t":"Concentrated Industry II","tech":"concentrated_industry2"},
      {"id":"res.machine-tools-up","t":"Improved Machine Tools","tech":"improved_machine_tools"},
      {"id":"res.construction-up","t":"Construction II","tech":"construction2"},
      {"id":"res.artillery-up","t":"Artillery I","tech":"artillery1"},
      {"id":"res.radio-up","t":"Improved Radio","tech":"improved_radio"},
      {"id":"res.computing-up","t":"Computing Machine","tech":"computing_machine"},
      {"id":"res.flame-tank","t":"Flame Tank","tag":"sp","project":"sp_land_flamethrower_tank"},
      {"id":"res.medium-tank","t":"Basic Medium Tank","tech":"basic_medium_tank_chassis"},
      {"id":"res.logistics-company","t":"Logistics Company I","tech":"tech_logistics_company"},
      {"id":"res.infantry-equipment-up","t":"Improved Infantry Equipment I","tech":"infantry_weapons2"},
      {"id":"res.support-weapons-up-2","t":"Support Weapons II","tech":"support_weapons2"},
      {"id":"res.rubber-processing","t":"Rubber Processing","tech":"rubber_processing"},
      {"id":"res.oil-processing","t":"Oil Processing","tech":"oil_processing"},
      {"id":"res.fuel-refining","t":"Fuel Refining II","tech":"fuel_refining2"},
      {"id":"res.infantry-equipment-up-2","t":"Infantry Equipment II","tech":"improved_infantry_weapons"},
      {"id":"res.engines-3","t":"Engines III","tech":"engines_3"},
      {"id":"res.improved-small-airframe","t":"Improved Small Airframe","tech":"improved_small_airframe"},
      {"id":"res.concentrated-industry-up-2","t":"Concentrated Industry III","tech":"concentrated_industry3"},
      {"id":"res.rubber-processing-up","t":"Improved Rubber Processing","tech":"improved_rubber_processing"},
      {"id":"res.heavy-bombs","t":"Heavy Bombs","tech":"heavy_bombs"},
      {"id":"res.heavy-mg","t":"Heavy MG","tech":"aa_hmg"},
      {"id":"res.survivability-studies","t":"Survivability Studies","tech":"survivability_studies"},
      {"id":"res.engineer-company-up","t":"Engineer Company II","tech":"tech_engineers2"},
      {"id":"res.machine-tools-up-2","t":"Advanced Machine Tools","tech":"advanced_machine_tools"},
      {"id":"res.logistics-company-up","t":"Logistics Company II","tech":"tech_logistics_company2"},
      {"id":"res.artillery-up-2","t":"Improved Artillery Upgrade I","tech":"artillery2"},
      {"id":"res.support-weapons-up-3","t":"Support Weapons III","tech":"support_weapons3"},
      {"id":"res.infantry-equipment-up-3","t":"Improved Infantry Equipment II","tech":"improved_infantry_weapons_2"},
      {"id":"res.rubber-processing-up-2","t":"Advanced Rubber Processing","tech":"advanced_rubber_processing"},
      {"id":"res.construction-up-2","t":"Construction III","tech":"construction3"},
      {"id":"res.radio-up-2","t":"Advanced Radio","tech":"advanced_radio"},
      {"id":"res.artillery-up-3","t":"Improved Artillery Upgrade II","tech":"artillery3"},
      {"id":"res.mechanized","t":"Mechanized Equipment I","tech":"mechanised_infantry"},
      {"id":"res.advanced-flamethrower","t":"Advanced Flamethrower","tech":"sp_armored_advanced_flamethrower_tech"},
      {"id":"res.basic-armor-protection","t":"Basic Armor Protection","tech":"armor_tech_1"},
      {"id":"res.improved-medium-tank","t":"Improved Medium Tank","tech":"improved_medium_tank_chassis"},
      {"id":"res.excavation-3","t":"Excavation III","tech":"excavation3"},
      {"id":"res.pulverized-coal-firing-1","t":"Pulverized Coal-Firing Boilers","tech":"improved_equipment_conversion"},
      {"id":"res.excavation-2","t":"Excavation II","tech":"excavation2"},
      {"id":"res.concentrated-industry-up-3","t":"Concentrated Industry IV","tech":"concentrated_industry4"},
      {"id":"res.machine-tools-up-3","t":"Assembly Line Production","tech":"assembly_line_production"},
      {"id":"res.construction-up-3","t":"Construction IV","tech":"construction4"},
      {"id":"res.mechanized-up","t":"Mechanized Equipment II","tech":"mechanised_infantry2"},
      {"id":"res.infantry-equipment-up-4","t":"Infantry Equipment III","tech":"advanced_infantry_weapons"},
      {"id":"res.support-weapons-up-4","t":"Support Weapons IV","tech":"support_weapons4"},
      {"id":"res.panzerfaust-30","t":"Infantry Anti-Tank I","tech":"infantry_at"},
      {"id":"res.high-efficiency","t":"High-Efficiency Turbines","tech":"advanced_equipment_conversion"},
      {"id":"res.logistics-up","t":"Logistics Company III","tech":"tech_logistics_company3"}
    ]}
  ],

  "glossary": [
    {"id": "f1c1", "term": "F1 / C1", "match": ["F1", "C1"], "cs": true,
     "def": "The guide's names for its first **fighter** (F) and **CAS** (C) designs, made in the plane designer as soon as you have air XP."},
    {"id": "f2c2", "term": "F2 / C2", "match": ["F2", "C2"], "cs": true,
     "def": "The improved designs: F2 on the **Improved Small Airframe**, C2 on the improved CAS airframe. F2 replaces F1 at 25 factories. Details on the Builds tab."},
    {"id": "spg1", "term": "SPG1 / SPG II", "match": ["SPG1", "SPG II"], "cs": true,
     "def": "The guide's SPG design: Basic Medium Tank chassis, **Artillery** role, engine 7, armor 4. SPG II is the upgrade later in the war."},
    {"id": "mark", "term": "MARK (ARM)", "match": ["MARK"], "cs": true,
     "def": "The guide's armor template: **8 motorized** and **10 SPG** battalions, with recon, engineer, artillery, flame tank and logistics support. Width 36."}
  ],

  "divisions": {
    "templates": [
      {"id":"tpl.lucas", "name":"LUCAS (INF)", "icon":"helmet", "support":[], "combat":[],
       "n":"Infantry, used for most of the 45 infantry divisions queued in 1936. Its battalions aren't shown in the guide: fill them in with Edit guide."},
      {"id":"tpl.mark", "name":"MARK (ARM)", "icon":"tank", "img":"template", "ts":"16:55",
       "support":["mot_recon", "engineer", "artillery", "medium_flame_tank", "logistics_company"],
       "combat":[["motorized","motorized","motorized","motorized"], ["motorized","motorized","motorized","motorized"],
         ["medium_sp_artillery_brigade","medium_sp_artillery_brigade","medium_sp_artillery_brigade","medium_sp_artillery_brigade"],
         ["medium_sp_artillery_brigade","medium_sp_artillery_brigade","medium_sp_artillery_brigade","medium_sp_artillery_brigade"],
         ["medium_sp_artillery_brigade","medium_sp_artillery_brigade"]],
       "n":"Final template, Apr 1938. About 90 army XP to finish, since SPGs get no Motorization Drive discount. If SPGs get nerfed, put medium tanks in the same slots.",
       "seen":{"maximum_speed":7.0, "max_strength":213.2, "max_organisation":23.9, "supply_consumption":4.81, "soft_attack":714.9, "hard_attack":20.8,
         "defense":285.0, "breakthrough":426.9, "armor":25.8, "piercing":14.3, "manpower":16500, "training_time":180, "combat_width":36}},
      {"id":"tpl.gatorcat", "name":"GATORCAT (MOT)", "icon":"road", "support":[], "combat":[],
       "n":"Motorized, used less. Its battalions aren't shown in the guide."},
      {"id":"tpl.andrew", "name":"ANDREW (ALP)", "icon":"helmet", "support":[], "combat":[],
       "n":"Mountaineers, unused in the guide."},
      {"id":"tpl.def", "name":"DEF (Austrian infantry)", "icon":"fort", "support":[], "combat":[], "img":"templates",
       "n":"The Austrian infantry template, for the 48 defensive divisions. Its full name is hidden in the screenshot, and its battalions aren't shown."},
      {"id":"tpl.cav", "name":"CAV", "icon":"road", "support":[], "combat":[["cavalry"]],
       "n":"One cavalry battalion, for garrisons (occupation law Local Police Force)."}
    ],
    "training": [
      {"id":"train.inf-1", "step":"plan.split-off-armored-divisions", "template":"tpl.lucas", "count":21},
      {"id":"train.inf-2", "step":"plan.queue-another-24-infantry", "template":"tpl.lucas", "count":24},
      {"id":"train.def", "step":"plan.recruit-42-more-defensive", "template":"tpl.def", "count":42, "n":"48 defensive divisions in total"},
      {"id":"train.arm-1", "step":"plan.force-deploy-last-defensive", "template":"tpl.mark", "count":9},
      {"id":"train.arm-2", "step":"plan.production-infantry-c2-f2", "template":"tpl.mark", "count":12, "n":"After the UK falls"}
    ]
  },

  "production": {
    "states": [
      {"id": "prod.1936", "step": "plan.production-train-1-bf", "title": "Day one", "mils": 28, "img": "prod36", "ts": "02:57", "lines":[
        {"id": "pl.train", "name": "Class 18.4-5", "eq": "train_equipment_1", "f": 1},
        {"id": "pl.fighter", "name": "Bf 109 D", "eq": "small_plane_airframe_1", "kind": "Basic Small Airframe", "f": 1},
        {"id": "pl.cas", "name": "Ju 87", "eq": "small_plane_airframe_1", "kind": "Basic Close Air Support", "f": 1},
        {"id": "pl.navbomber", "name": "Do 22", "eq": "small_plane_airframe_1", "kind": "Basic Naval Bomber", "f": 3},
        {"id": "pl.art", "name": "10,5-cm leichte Feldhaubitze 18", "eq": "artillery_equipment_1", "f": 3},
        {"id": "pl.truck", "name": "Opel Blitz", "eq": "motorized_equipment_1", "f": 3},
        {"id": "pl.support", "name": "Support Equipment", "eq": "support_equipment_1", "f": 5},
        {"id": "pl.inf", "name": "Karabiner 98k", "eq": "infantry_equipment_1", "f": 11, "cap": 150, "rest": true}
      ]},
      {"id": "prod.todt", "step": "plan.production-armored-support-vehicles", "title": "After Organisation Todt", "mils": 36, "img": "prodtodt", "ts": "08:10", "n": "F1 and C1 replace the Bf 109 and Ju 87 lines. The caps are the targets: new factories fill the lines in priority order.", "lines":[
        {"id": "pl.asv", "name": "Minenräumer mit Pz…", "eq": "armored_support_vehicle", "f": 1, "n": "Top priority"},
        {"id": "pl.inf", "name": "Karabiner 98k", "eq": "infantry_equipment_1", "f": 18, "cap": 25},
        {"id": "pl.fighter", "name": "F1ca", "eq": "small_plane_airframe_1", "kind": "Basic Small Airframe", "f": 1, "cap": 25},
        {"id": "pl.cas", "name": "C1", "eq": "small_plane_airframe_1", "kind": "Basic Close Air Support", "f": 1, "cap": 15},
        {"id": "pl.navbomber", "name": "Do 22", "eq": "small_plane_airframe_1", "kind": "Basic Naval Bomber", "f": 3, "cap": 5},
        {"id": "pl.train", "name": "Class 18.4-5", "eq": "train_equipment_1", "f": 1},
        {"id": "pl.art", "name": "10,5-cm leichte Feldhaubitze 18", "eq": "artillery_equipment_1", "f": 3},
        {"id": "pl.truck", "name": "Opel Blitz", "eq": "motorized_equipment_1", "f": 3},
        {"id": "pl.support", "name": "Support Equipment", "eq": "support_equipment_1", "f": 5}
      ]},
      {"id": "prod.china", "step": "plan.infantry-equipment-down-10", "title": "Sino-Japanese war starts", "n": "Lines the guide doesn't mention are assumed unchanged.", "lines":[
        {"id": "pl.asv", "name": "Minenräumer mit Pz…", "eq": "armored_support_vehicle", "f": 1},
        {"id": "pl.inf", "name": "Karabiner 98k", "eq": "infantry_equipment_1", "f": 10, "cap": 10},
        {"id": "pl.cas", "name": "C1", "eq": "small_plane_airframe_1", "kind": "Basic Close Air Support", "f": 1, "cap": 15},
        {"id": "pl.navbomber", "name": "Do 22", "eq": "small_plane_airframe_1", "kind": "Basic Naval Bomber", "f": 3, "cap": 5},
        {"id": "pl.train", "name": "Class 18.4-5", "eq": "train_equipment_1", "f": 1},
        {"id": "pl.art", "name": "10,5-cm leichte Feldhaubitze 18", "eq": "artillery_equipment_1", "f": 3},
        {"id": "pl.truck", "name": "Opel Blitz", "eq": "motorized_equipment_1", "f": 3},
        {"id": "pl.support", "name": "Support Equipment", "eq": "support_equipment_1", "f": 5},
        {"id": "pl.fighter", "name": "F1ca", "eq": "small_plane_airframe_1", "kind": "Basic Small Airframe", "rest": true, "n": "Lowest priority: every new factory"}
      ]},
      {"id": "prod.spg", "step": "plan.production-flame-tank-1", "title": "SPG unlocked", "n": "Lines the guide doesn't mention are assumed unchanged.", "lines":[
        {"id": "pl.flame", "name": "Flammpanzer III", "design": "design.flammpanzer", "f": 1},
        {"id": "pl.spg", "name": "SPG1 (7/4)", "design": "design.spg1", "rest": true, "n": "All the rest"},
        {"id": "pl.inf", "name": "Karabiner 98k", "eq": "infantry_equipment_1", "f": 10, "cap": 10},
        {"id": "pl.fighter", "name": "F1ca", "eq": "small_plane_airframe_1", "kind": "Basic Small Airframe", "f": 10},
        {"id": "pl.cas", "name": "C1", "eq": "small_plane_airframe_1", "kind": "Basic Close Air Support", "f": 10},
        {"id": "pl.navbomber", "name": "Do 22", "eq": "small_plane_airframe_1", "kind": "Basic Naval Bomber", "f": 3, "cap": 5},
        {"id": "pl.train", "name": "Class 18.4-5", "eq": "train_equipment_1", "f": 1},
        {"id": "pl.art", "name": "10,5-cm leichte Feldhaubitze 18", "eq": "artillery_equipment_1", "f": 3},
        {"id": "pl.truck", "name": "Opel Blitz", "eq": "motorized_equipment_1", "f": 3},
        {"id": "pl.support", "name": "Support Equipment", "eq": "support_equipment_1", "f": 5}
      ]},
      {"id": "prod.f2", "step": "plan.design-f2-c2-f2", "title": "F2 and C2 designed", "n": "The fighter line switches to F2 and goes to 25 factories, taken from the SPG line. The guide doesn't say when C1 becomes C2.", "lines":[
        {"id": "pl.flame", "name": "Flammpanzer III", "design": "design.flammpanzer", "f": 1},
        {"id": "pl.spg", "name": "SPG1 (7/4)", "design": "design.spg1", "rest": true},
        {"id": "pl.inf", "name": "Karabiner 98k", "eq": "infantry_equipment_1", "f": 10, "cap": 10},
        {"id": "pl.fighter", "name": "F2", "design": "design.f2", "f": 25, "n": "Taken from SPG"},
        {"id": "pl.cas", "name": "C1", "eq": "small_plane_airframe_1", "kind": "Basic Close Air Support", "f": 10},
        {"id": "pl.navbomber", "name": "Do 22", "eq": "small_plane_airframe_1", "kind": "Basic Naval Bomber", "f": 3, "cap": 5},
        {"id": "pl.train", "name": "Class 18.4-5", "eq": "train_equipment_1", "f": 1},
        {"id": "pl.art", "name": "10,5-cm leichte Feldhaubitze 18", "eq": "artillery_equipment_1", "f": 3},
        {"id": "pl.truck", "name": "Opel Blitz", "eq": "motorized_equipment_1", "f": 3},
        {"id": "pl.support", "name": "Support Equipment", "eq": "support_equipment_1", "f": 5}
      ]},
      {"id": "prod.uk", "step": "plan.production-infantry-c2-f2", "title": "After the UK falls", "n": "Infantry equipment, C2 and F2 to 50 each, trucks to 15, mechanized as soon as it's researched.", "lines":[
        {"id": "pl.mech", "name": "Sonderkraftfahrzeug 11", "eq": "mechanized_equipment_1", "n": "As soon as possible"},
        {"id": "pl.flame", "name": "Flammpanzer III", "design": "design.flammpanzer", "f": 1},
        {"id": "pl.spg", "name": "SPG1 (7/4)", "design": "design.spg1", "rest": true},
        {"id": "pl.inf", "name": "Karabiner 98k", "eq": "infantry_equipment_1", "f": 50},
        {"id": "pl.fighter", "name": "F2", "design": "design.f2", "f": 50},
        {"id": "pl.cas", "name": "C2", "design": "design.c2", "f": 50},
        {"id": "pl.navbomber", "name": "Do 22", "eq": "small_plane_airframe_1", "kind": "Basic Naval Bomber", "f": 3, "cap": 5},
        {"id": "pl.train", "name": "Class 18.4-5", "eq": "train_equipment_1", "f": 1},
        {"id": "pl.art", "name": "10,5-cm leichte Feldhaubitze 18", "eq": "artillery_equipment_1", "f": 3},
        {"id": "pl.truck", "name": "Opel Blitz", "eq": "motorized_equipment_1", "f": 15},
        {"id": "pl.support", "name": "Support Equipment", "eq": "support_equipment_1", "f": 5}
      ]},
      {"id": "prod.italy", "step": "plan.italy-crush-them-take", "title": "Italy", "n": "Mechanized goes up to 150 factories.", "lines":[
        {"id": "pl.mech", "name": "Sonderkraftfahrzeug 11", "eq": "mechanized_equipment_1", "f": 150},
        {"id": "pl.flame", "name": "Flammpanzer III", "design": "design.flammpanzer", "f": 1},
        {"id": "pl.spg", "name": "SPG1 (7/4)", "design": "design.spg1", "rest": true},
        {"id": "pl.inf", "name": "Karabiner 98k", "eq": "infantry_equipment_1", "f": 50},
        {"id": "pl.fighter", "name": "F2", "design": "design.f2", "f": 50},
        {"id": "pl.cas", "name": "C2", "design": "design.c2", "f": 50},
        {"id": "pl.navbomber", "name": "Do 22", "eq": "small_plane_airframe_1", "kind": "Basic Naval Bomber", "f": 3, "cap": 5},
        {"id": "pl.train", "name": "Class 18.4-5", "eq": "train_equipment_1", "f": 1},
        {"id": "pl.art", "name": "10,5-cm leichte Feldhaubitze 18", "eq": "artillery_equipment_1", "f": 3},
        {"id": "pl.truck", "name": "Opel Blitz", "eq": "motorized_equipment_1", "f": 15},
        {"id": "pl.support", "name": "Support Equipment", "eq": "support_equipment_1", "f": 5}
      ]}
    ],
    "naval": [
      {"id": "nav.start", "step": "plan.navy-cancel-extra-ships", "title": "Game start", "docks": 10,
       "n": "The naval lines Germany starts with in the game files: 11 lines asking for 1 dockyard each, for 10 dockyards.", "lines":[
        {"id": "nl.u1", "name": "Type II", "design": "design.type2", "f": 1, "count": 2},
        {"id": "nl.u2", "name": "Type II", "design": "design.type2", "f": 1, "count": 2},
        {"id": "nl.u3", "name": "Type II", "design": "design.type2", "f": 1, "count": 2},
        {"id": "nl.u4", "name": "Type II", "design": "design.type2", "f": 1, "count": 2},
        {"id": "nl.z1", "name": "Zerstörer 1934", "design": "design.z1934", "f": 1, "count": 2},
        {"id": "nl.z2", "name": "Zerstörer 1934", "design": "design.z1934", "f": 1, "count": 2},
        {"id": "nl.spee", "name": "Deutschland (Admiral Graf Spee)", "design": "design.deutschland", "f": 1, "count": 1},
        {"id": "nl.hipper", "name": "Admiral Hipper", "design": "design.hipper", "f": 1, "count": 1},
        {"id": "nl.scharnhorst", "name": "Scharnhorst", "design": "design.scharnhorst", "f": 1, "count": 1},
        {"id": "nl.gneisenau", "name": "Scharnhorst (Gneisenau)", "design": "design.scharnhorst", "f": 1, "count": 1},
        {"id": "nl.z34a1", "name": "Zerstörer 1934A", "design": "design.z1934a", "f": 1, "count": 4},
        {"id": "nl.z34a2", "name": "Zerstörer 1934A", "design": "design.z1934a", "f": 1, "count": 4},
        {"id": "nl.z34a3", "name": "Zerstörer 1934A", "design": "design.z1934a", "f": 1, "count": 4}
      ]},
      {"id": "nav.1936", "step": "plan.navy-cancel-extra-ships", "title": "Navy set up", "docks": 10, "img": "navy36",
       "n": "The submarine and destroyer lines match the screenshot (1 dockyard each, one Type II per line). Its dockyard count says 4 go to capital ships, so two heavy ships get 2 each as the guide says; which two isn't shown, Scharnhorst and Gneisenau are assumed. Convoys at 1 is from the guide and isn't on screen. Admiral Hipper waits at 0 for its refit.", "lines":[
        {"id": "nl.u1", "name": "Type II", "design": "design.type2", "f": 1, "count": 1},
        {"id": "nl.u2", "name": "Type II", "design": "design.type2", "f": 1, "count": 1},
        {"id": "nl.u3", "name": "Type II", "design": "design.type2", "f": 1, "count": 1},
        {"id": "nl.u4", "name": "Type II", "design": "design.type2", "f": 1, "count": 1},
        {"id": "nl.z1", "name": "Zerstörer 1934", "design": "design.z1934", "f": 1, "count": 2},
        {"id": "nl.z2", "name": "Zerstörer 1934", "design": "design.z1934", "f": 1, "count": 2},
        {"id": "nl.scharnhorst", "name": "Scharnhorst", "design": "design.scharnhorst", "f": 2, "count": 1},
        {"id": "nl.gneisenau", "name": "Scharnhorst (Gneisenau)", "design": "design.scharnhorst", "f": 2, "count": 1},
        {"id": "nl.spee", "name": "Deutschland (Admiral Graf Spee)", "design": "design.deutschland", "f": 0, "count": 1},
        {"id": "nl.hipper", "name": "Admiral Hipper", "design": "design.hipper", "f": 0, "count": 1},
        {"id": "nl.convoy", "name": "Convoy", "eq": "convoy_1", "f": 1}
      ]},
      {"id": "nav.hipper", "step": "plan.refit-admiral-hipper-into", "title": "Hipper refit",
       "n": "Admiral Hipper becomes the light cruiser design and takes every new dockyard. Lines the guide doesn't mention are assumed unchanged.", "lines":[
        {"id": "nl.u1", "name": "Type II", "design": "design.type2", "f": 1, "count": 1},
        {"id": "nl.u2", "name": "Type II", "design": "design.type2", "f": 1, "count": 1},
        {"id": "nl.u3", "name": "Type II", "design": "design.type2", "f": 1, "count": 1},
        {"id": "nl.u4", "name": "Type II", "design": "design.type2", "f": 1, "count": 1},
        {"id": "nl.z1", "name": "Zerstörer 1934", "design": "design.z1934", "f": 1, "count": 2},
        {"id": "nl.z2", "name": "Zerstörer 1934", "design": "design.z1934", "f": 1, "count": 2},
        {"id": "nl.scharnhorst", "name": "Scharnhorst", "design": "design.scharnhorst", "f": 2, "count": 1},
        {"id": "nl.gneisenau", "name": "Scharnhorst (Gneisenau)", "design": "design.scharnhorst", "f": 2, "count": 1},
        {"id": "nl.spee", "name": "Deutschland (Admiral Graf Spee)", "design": "design.deutschland", "f": 0, "count": 1},
        {"id": "nl.hipper", "name": "Admiral Hipper (light cruiser refit)", "design": "design.hipper-cl", "rest": true, "count": 1},
        {"id": "nl.convoy", "name": "Convoy", "eq": "convoy_1", "f": 1}
      ]}
    ]
  },

  "construction": {
    "lists": [
      {"id": "cons.1936", "step": "plan.construction-infrastructure-westfalen-hessen", "title": "Day one", "civs": 35, "uses": [{"name": "Consumer Goods", "n": 15}], "img": "build36", "ts": "02:57", "items":[
        {"id": "cq.1", "state": 57, "b": "infrastructure", "n": 1},
        {"id": "cq.2", "state": 55, "b": "infrastructure", "n": 1},
        {"id": "cq.3", "state": 42, "b": "infrastructure", "n": 1},
        {"id": "cq.4", "state": 51, "b": "infrastructure", "n": 1},
        {"id": "cq.5", "state": 57, "b": "industrial_complex", "n": 1},
        {"id": "cq.6", "state": 55, "b": "industrial_complex", "n": 1},
        {"id": "cq.7", "state": 42, "b": "industrial_complex", "n": 1},
        {"id": "cq.8", "state": 51, "b": "industrial_complex", "n": 1},
        {"id": "cq.9", "state": 57, "b": "arms_factory", "n": 4},
        {"id": "cq.10", "state": 55, "b": "arms_factory", "n": 5}
      ]},
      {"id": "cons.1937", "step": "plan.queue-mils-100-states", "title": "Jun 1937 queue", "civs": 59, "uses": [{"name": "Consumer Goods", "n": 15}, {"name": "National Projects", "n": 6}, {"name": "Traded Goods", "n": 4}], "img": "build37", "ts": "10:50", "n": "Mils in the 100% states, then 2 refineries each, then mils in the 80% states. Gives exactly enough rubber by 1939. The screenshot stops at Sachsen; the guide goes on with the 80% states.", "items":[
        {"id": "cq.11", "state": 59, "b": "arms_factory", "n": 4},
        {"id": "cq.12", "state": 64, "b": "arms_factory", "n": 5},
        {"id": "cq.13", "state": 60, "b": "arms_factory", "n": 8},
        {"id": "cq.14", "state": 57, "b": "arms_factory", "n": 1},
        {"id": "cq.15", "state": 55, "b": "arms_factory", "n": 1},
        {"id": "cq.16", "state": 51, "b": "arms_factory", "n": 2},
        {"id": "cq.17", "state": 42, "b": "arms_factory", "n": 3},
        {"id": "cq.18", "state": 42, "b": "synthetic_refinery", "n": 2},
        {"id": "cq.19", "state": 51, "b": "synthetic_refinery", "n": 2},
        {"id": "cq.20", "state": 55, "b": "synthetic_refinery", "n": 2},
        {"id": "cq.21", "state": 57, "b": "synthetic_refinery", "n": 2},
        {"id": "cq.22", "state": 60, "b": "synthetic_refinery", "n": 2},
        {"id": "cq.23", "state": 54, "b": "synthetic_refinery", "n": 2},
        {"id": "cq.24", "state": 64, "b": "synthetic_refinery", "n": 2},
        {"id": "cq.25", "state": 59, "b": "synthetic_refinery", "n": 2},
        {"id": "cq.26", "state": 65, "b": "arms_factory", "n": 5}
      ]},
      {"id": "cons.poland", "step": "plan.from-now-every-free", "title": "After Poland", "n": "From here on every free civilian factory builds military factories. The guide doesn't list the states.", "items":[]}
    ]
  },

  "mios": [
    {"id": "mio.alkett", "org": "GER_alkett_organization", "step": "plan.queue-7-alkett-mio", "order": ["GER_mio_trait_hoesch_facilities", "GER_mio_trait_sturmhaubitze", "generic_mio_trait_medium_assault_gun_improvements", "generic_mio_medium_assault_gun_75_mm_43M_tank_gun", "generic_mio_armor_hardening_process_assault_guns", "generic_mio_medium_assault_gun_low_slung_superstructure_and_fighting_compartment", "GER_mio_trait_armored_superstructure_specialist"], "designs": ["design.spg1"], "img": "mio", "ts": "15:03", "n": "Pick it for the SPG after sticking with Todt, assign it to the SPG design and queue the 7 traits."}
  ],

  "projects": [
    {"id": "sp.mev", "project": "sp_land_military_engineering_vehicles", "step": "res.military-engineering-vehicles", "n": "Unlocks the armored support vehicle that goes on top of production after Todt."},
    {"id": "sp.flame", "project": "sp_land_flamethrower_tank", "step": "res.flame-tank", "n": "Unlocks the flame tank company in the MARK template and the Flammpanzer III design."}
  ],

  "doctrines": {
    "folders": [
      {"id": "dc.land", "folder": "land", "grand": "new_mobile_warfare", "step": "plan.favourite-tactic-then-grand", "img": "land", "ts": "9:40",
       "n": "Favourite tactic first, then the subdoctrines in this order. Assault Infantry is off screen to the left. Maneuver Warfare later.",
       "subs": [{"track": "operations", "sub": "grand_assault"}, {"track": "infantry", "sub": "assault_infantry"},
                {"track": "combat_support", "sub": "self_propelled_support"}, {"track": "armor", "sub": "streamlined_deployment"}]},
      {"id": "dc.naval", "folder": "naval", "grand": "new_convoy_raiding", "step": "plan.naval-trade-interdiction-then", "img": "naval", "ts": "17:55",
       "n": "Defensive build. Carriers skipped.",
       "subs": [{"track": "screens", "sub": "patrol_boats"}, {"track": "capital_ships", "sub": "line_of_battle"}, {"track": "submarines", "sub": "capital_hunters"}]},
      {"id": "dc.air", "folder": "air", "grand": "new_battlefield_support", "step": "plan.air-airspace-dominance-then", "img": "air", "ts": "13:10",
       "n": "Airspace Dominance first, then Precision Naval Bombing. Operational Air Support and Coastal Air Patrol on the other tracks.",
       "subs": [{"track": "fighter_aircraft", "sub": "air_subdoctrine_tactical_flexibility"}, {"track": "strike_aircraft", "sub": "air_subdoctrine_naval_strike_tactics"},
                {"track": "medium_aircraft", "sub": "air_subdoctrine_operational_air_support"}, {"track": "heavy_aircraft", "sub": "air_subdoctrine_coastal_air_patrol"}]}
    ],
    "spirits": [
      {"id": "ds.loyalty", "spirit": "political_loyalty_spirit", "step": "plan.at-20-army-xp"},
      {"id": "ds.motor", "spirit": "mobile_warfare_army_spirit", "step": "plan.60-army-xp-motorization", "n": "The guide puts it at 60 army XP."}
    ],
    "spiritsNote": "The guide also takes \"the air spirits\" without naming them."
  },

  "designs": [
    {"id":"design.spg1", "name":"SPG1 (7/4)", "frame":"medium_tank_chassis_1", "role":"medium_tank_artillery_chassis",
     "modules":{"turret_type_slot":"tank_medium_three_man_tank_turret", "main_armament_slot":"tank_medium_howitzer",
       "special_type_slot_1":"tank_radio_2", "special_type_slot_2":"secondary_turret_hmg", "special_type_slot_3":"secondary_turret_hmg",
       "special_type_slot_4":"wet_ammo_storage", "suspension_type_slot":"tank_christie_suspension", "armor_type_slot":"tank_riveted_armor",
       "engine_type_slot":"tank_gasoline_engine"},
     "upgrades":{"tank_nsb_engine_upgrade":7, "tank_nsb_armor_upgrade":4}, "img":"spg1", "ts":"13:57", "mio":"Alkett",
     "n":"The main battalion of the MARK template. Built with the Alkett MIO. If SPGs get nerfed, put medium tanks in the same slots.",
     "seen":{"maximum_speed":7.0, "reliability":0.663, "soft_attack":60.9, "hard_attack":1.0, "ap_attack":20.0, "armor_value":38.8, "breakthrough":30.8, "defense":2.8, "fuel_consumption":2.35, "build_cost_ic":15.2}},
    {"id":"design.flammpanzer", "name":"Flammpanzer III", "frame":"medium_tank_chassis_1", "role":"medium_tank_flame_chassis",
     "modules":{"turret_type_slot":"tank_light_one_man_tank_turret", "main_armament_slot":"flamethrower", "suspension_type_slot":"tank_christie_suspension",
       "armor_type_slot":"tank_riveted_armor", "engine_type_slot":"tank_gasoline_engine"},
     "upgrades":{"tank_nsb_engine_upgrade":6, "tank_nsb_armor_upgrade":0}, "img":"flame",
     "n":"The flame tank support company of the MARK template. It won't save, so redo it if it's gone.",
     "seen":{"maximum_speed":8.2, "reliability":0.682, "fuel_consumption":2.3, "build_cost_ic":5.88}},
    {"id":"design.f2", "name":"F2", "frame":"small_plane_airframe_2", "role":"small_plane_airframe",
     "modules":{"fixed_main_weapon_slot":"heavy_mg_4x", "fixed_auxiliary_weapon_slot_1":"heavy_mg_4x", "fixed_auxiliary_weapon_slot_2":"heavy_mg_4x",
       "engine_type_slot":"engine_3_1x", "special_type_slot_1":"armor_plate_small", "special_type_slot_2":"self_sealing_fuel_tanks_small", "special_type_slot_3":"fuel_tanks_small"},
     "img":"f2", "ts":"19:10", "n":"Replaces F1 at 25 factories.",
     "seen":{"maximum_speed":675, "air_range":910, "weight":25, "thrust":25, "air_defence":19.9, "air_attack":62.1, "air_agility":53.1, "reliability":0.8, "build_cost_ic":33.15}},
    {"id":"design.c2", "name":"C2", "frame":"small_plane_airframe_2", "role":"small_plane_cas_airframe",
     "modules":{"fixed_main_weapon_slot":"light_mg_2x", "fixed_auxiliary_weapon_slot_1":"bomb_locks", "fixed_auxiliary_weapon_slot_2":"bomb_locks",
       "engine_type_slot":"engine_3_1x", "special_type_slot_1":"fuel_tanks_small", "special_type_slot_2":"floats"},
     "img":"c2", "n":"Doubles as a naval bomber over the Channel.",
     "seen":{"maximum_speed":571.5, "air_range":975, "weight":9, "thrust":25, "air_defence":9.0, "air_agility":53.0, "reliability":0.8, "build_cost_ic":27.3}},
    {"id":"design.type2", "name":"Type II", "frame":"ship_hull_submarine_1", "role":"ship_hull_submarine",
     "modules":{"fixed_ship_torpedo_slot":"ship_torpedo_sub_1", "fixed_ship_engine_slot":"sub_ship_engine_1"},
     "img":"navy36", "n":"Germany's starting submarine design, as in the game files. Four lines are in production in 1936: see Production, Dockyards."},
    {"id":"design.z1934", "name":"Zerstörer 1934", "frame":"ship_hull_light_2", "role":"ship_hull_light",
     "modules":{"fixed_ship_battery_slot":"ship_light_battery_2", "fixed_ship_anti_air_slot":"ship_anti_air_1", "fixed_ship_fire_control_system_slot":"ship_fire_control_system_0",
       "fixed_ship_engine_slot":"light_ship_engine_2", "fixed_ship_torpedo_slot":"ship_torpedo_1", "mid_1_custom_slot":"ship_torpedo_1", "rear_1_custom_slot":"ship_mine_layer_1"},
     "img":"navy36", "n":"Germany's starting destroyer design, as in the game files. Two lines are in production in 1936: see Production, Dockyards."},
    {"id":"design.hipper", "name":"Admiral Hipper", "frame":"ship_hull_cruiser_2", "role":"ship_hull_cruiser",
     "modules":{"fixed_ship_battery_slot":"ship_medium_battery_2", "fixed_ship_anti_air_slot":"ship_anti_air_1", "fixed_ship_fire_control_system_slot":"ship_fire_control_system_0",
       "fixed_ship_engine_slot":"cruiser_ship_engine_2", "fixed_ship_armor_slot":"ship_armor_cruiser_2", "front_1_custom_slot":"ship_anti_air_1",
       "mid_1_custom_slot":"ship_torpedo_1", "mid_2_custom_slot":"ship_airplane_launcher_1", "rear_1_custom_slot":"ship_medium_battery_2"},
     "n":"Germany's starting heavy cruiser design, as in the game files. It's in production in 1936 (2 dockyards on the heavy ships), then refitted below."},
    {"id":"design.hipper-cl", "name":"Admiral Hipper (light cruiser refit)", "frame":"ship_hull_cruiser_2", "role":"ship_hull_cruiser", "mio":"Blohm & Voss",
     "modules":{"fixed_ship_battery_slot":"ship_light_battery_2", "fixed_ship_anti_air_slot":"ship_anti_air_1", "fixed_ship_fire_control_system_slot":"ship_fire_control_system_0",
       "fixed_ship_engine_slot":"cruiser_ship_engine_2", "fixed_ship_armor_slot":"ship_armor_cruiser_2", "front_1_custom_slot":"ship_light_battery_2",
       "mid_1_custom_slot":"ship_light_battery_2", "mid_2_custom_slot":"ship_light_battery_2", "rear_1_custom_slot":"ship_light_battery_2"},
     "n":"The guide refits Admiral Hipper into \"the best light cruiser\" with Blohm & Voss (Raiding Shipbuilders) and puts every new dockyard on it, without showing the modules. These are a guess: Hipper's hull, engine and armor with light guns in every battery slot. Edit them to match yours."},
    {"id":"design.z1934a", "name":"Zerstörer 1934A", "frame":"ship_hull_light_2", "role":"ship_hull_light",
     "modules":{"fixed_ship_battery_slot":"ship_light_battery_2", "fixed_ship_anti_air_slot":"ship_anti_air_1", "fixed_ship_fire_control_system_slot":"ship_fire_control_system_0",
       "fixed_ship_engine_slot":"light_ship_engine_2", "fixed_ship_torpedo_slot":"ship_torpedo_1", "mid_1_custom_slot":"ship_torpedo_1", "rear_1_custom_slot":"ship_depth_charge_1"},
     "n":"Germany's starting design, as in the game files: three lines of 4 are in production in 1936. The guide cancels them."},
    {"id":"design.deutschland", "name":"Deutschland", "frame":"ship_hull_cruiser_panzerschiff", "role":"ship_hull_cruiser",
     "modules":{"fixed_ship_anti_air_slot":"ship_anti_air_1", "fixed_ship_battery_slot":"ship_heavy_battery_2", "fixed_ship_secondaries_slot":"ship_secondaries_1",
       "fixed_ship_armor_slot":"ship_armor_cruiser_1", "fixed_ship_fire_control_system_slot":"ship_fire_control_system_0", "fixed_ship_engine_slot":"cruiser_ship_engine_2",
       "rear_1_custom_slot":"ship_torpedo_1", "mid_1_custom_slot":"ship_airplane_launcher_1"},
     "n":"Germany's starting panzerschiff design, as in the game files. Admiral Graf Spee is in production in 1936."},
    {"id":"design.scharnhorst", "name":"Scharnhorst", "frame":"ship_hull_heavy_2", "role":"ship_hull_heavy",
     "modules":{"fixed_ship_battery_slot":"ship_heavy_battery_2", "fixed_ship_anti_air_slot":"ship_anti_air_1", "fixed_ship_fire_control_system_slot":"ship_fire_control_system_0",
       "fixed_ship_engine_slot":"heavy_ship_engine_2", "fixed_ship_secondaries_slot":"ship_secondaries_1", "fixed_ship_armor_slot":"ship_armor_bc_1",
       "front_1_custom_slot":"ship_anti_air_1", "mid_2_custom_slot":"ship_secondaries_1", "rear_1_custom_slot":"ship_heavy_battery_2"},
     "n":"Germany's starting battlecruiser design, as in the game files. Scharnhorst and Gneisenau are in production in 1936."}
  ],

  "chapters": [
    {"ts":"00:00","label":"Intro & setup"},
    {"ts":"04:54","label":"Early game setup & PP management"},
    {"ts":"09:40","label":"Land doctrines build"},
    {"ts":"13:10","label":"Air doctrines build"},
    {"ts":"13:57","label":"New SPG design, MIO and template"},
    {"ts":"17:55","label":"Naval doctrines build"},
    {"ts":"19:42","label":"WW2 setup"},
    {"ts":"22:24","label":"WW2"},
    {"ts":"36:15","label":"UK invasion & final stats"},
    {"ts":"41:21","label":"USA setup & war (and Italy)"},
    {"ts":"46:25","label":"Operation Barbarossa"},
    {"ts":"52:58","label":"Barbarossa with 16k casualties, what's next"},
    {"ts":"54:25","label":"They almost got away with it"}
  ],

  "builds": [
    {"title": "Planes & ships", "items": [
      {"type":"card", "title":"Ships",
       "text":"Refit Admiral Hipper into the best light cruiser with Raiding Ship Builders, then put every new dockyard on it. Convoys stay at 1 dockyard."}
    ]},
    {"title": "Reference", "layout": "cards", "items": [
      {"type":"card", "title":"Advisors & spirits, in order", "ordered":true, "list":[
        "Army Organization (army XP farm)",
        "Mefo Bills architect",
        "Political Loyalty (20 army XP)",
        "War Economy (150 PP)",
        "Organisation Todt as industrial concern",
        "Reichsmarschall specialist",
        "Improved Worker Conditions (100 PP)",
        "Air spirits",
        "Reich Minister of Labour (150 PP)",
        "Security advisor (150 PP), spies to quiet network",
        "Motorization Drive (60 army XP)",
        "Spymaster",
        "Decisive Battle expert (navy XP)",
        "Blitzkrieg theorist",
        "Infantry expert, CAS expert, Armor Genius",
        "War bonds, Reich Minister of Foreign Affairs",
        "Extensive Conscription, Domestic Film Industry, Radio Propaganda"
      ]},
      {"type":"card", "title":"WW2 air & naval setup", "list":[
        "Destroyers on patrol, engage at low risk. Submarines convoy-raid the same sea.",
        "Capital ships on strike force in the best harbor.",
        "Naval bombers follow the navy, escorted by 500 fighters.",
        "500 fighters defend Germany: 3 wings on interception, the rest air superiority.",
        "Everything else: air superiority + CAS over the armor.",
        "After France: CAS naval-bombing the Channel, naval bombers on patrol, then port strikes.",
        "Block every sea region except the Channel."
      ]},
      {"type":"card", "title":"Rules of thumb", "list":[
        "The rubber deficit after the Mefo decisions is fine.",
        "Send all volunteer groups at the same moment, or the cap drops.",
        "No land volunteers to Italy, they get stuck. Bombers only.",
        "Spearheads are broken, use normal battle plans.",
        "Stop fleet training by hand if one damaged ship keeps it going.",
        "Every free civilian factory after Poland builds military factories.",
        "Never keep a puppet Poland, or the USSR attacks it.",
        "Claims expire, you get about a month each."
      ]}
    ]}
  ],

  "legacy": {
    "key": "hoi4-ger-checklist-v1",
    "g": ["plan.construction-infrastructure-westfalen-hessen","plan.production-train-1-bf","plan.navy-cancel-extra-ships","plan.fix-trade","plan.templates-infantry-armor-motorized","plan.split-off-armored-divisions","plan.fleet-submarines-one-fleet","plan.merge-planes-send-bombers","plan.3-infantry-armies-under","plan.fallback-lines-so-nobody",
          "plan.army-organization-farm-army","plan.at-20-army-xp","plan.refit-admiral-hipper-into","plan.first-event-that-pops","plan.with-air-xp-design","plan.when-focus-unlocks-mefo","plan.spanish-civil-war-force","plan.queue-another-24-infantry","plan.150-pp-war-economy","plan.anschluss-force-deploy-divisions",
          "plan.organisation-todt-as-industrial","plan.production-armored-support-vehicles","plan.austrian-infantry-template-1","plan.fix-trade-again-more","plan.100-pp-improved-worker","plan.favourite-tactic-then-grand","plan.event-stick-with-todt","plan.decisions-develop-western-develop","plan.queue-mils-100-states","plan.recruit-42-more-defensive",
          "plan.gold-event-always-take","plan.china-war-attache-japan","plan.intelligence-agency-with-5","plan.infantry-equipment-down-10","plan.spies-one-usa-one","plan.150-pp-reich-minister","plan.air-airspace-dominance-then","plan.fate-czechoslovakia-slovakia-as","plan.150-pp-security-advisor","plan.60-army-xp-motorization",
          "plan.design-spg1-medium-chassis","plan.production-flame-tank-1","plan.queue-7-alkett-mio","plan.force-deploy-last-defensive","plan.build-mark-template-as","plan.spymaster-then-decisive-battle","plan.after-coal-liquefaction-take","plan.blitzkrieg-theorist-force-deploy","plan.import-oil-so-you","plan.naval-trade-interdiction-then",
          "plan.infantry-expert-cas-expert","plan.start-preparing-collaboration-government","plan.design-f2-c2-f2","plan.more-military-factories-100","plan.armor-army-poland-with","plan.promote-defensive-marshal-infantry","plan.smallest-infantry-army-covers","plan.danzig-or-war-70","plan.navy-destroyers-patrol-at","plan.planes-naval-bombers-500",
          "plan.war-bonds-reich-minister","plan.from-now-every-free","plan.poland-down-seize-their","plan.france-down-justify-yugoslavia","plan.cas-naval-bombing-channel","plan.tag-saudi-arabia-iraq","plan.hungary-yugoslavia-campaign-instructions","plan.extensive-conscription-if-manpower","plan.block-every-sea-region","plan.tag-ireland-declare-denmark",
          "plan.domestic-film-industry-more","plan.spain-then-portugal","plan.plan-naval-invasion-two","plan.tag-argentina-brazil-mexico","plan.launch-it-fleet-naval","plan.peace-deal-annex-danzig","plan.production-infantry-c2-f2","plan.radio-propaganda-last-develop","plan.main-push-with-armor","plan.two-submarine-fleets-two",
          "plan.spend-spare-pp-spy","plan.italy-crush-them-take","plan.justify-usa-force-deploy","plan.war-with-usa-spgs","plan.all-infantry-marshal-line","plan.optional-justify-everyone-left","plan.spg-ii-flame-tank","plan.take-switzerland-with-spare","plan.leningrad-stalingrad-then-sweep","plan.don-t-forget-yugoslavia"],
    "f": ["focus.remilitarize-rhineland","focus.fuhrerprinzip","focus.reichsleiter-todt","focus.four-year-plan","focus.autarky-efforts","focus.institute-price-controls","focus.reorganize-wehrmacht","focus.construct-reichsautobahn","focus.party-chancellor-hess","focus.anschluss",
          "focus.kdf-wagen-factories","focus.develop-heraeus-research-facility","focus.reichsleiter-goebbels","focus.accelerate-rearmament-program","focus.establish-production-targets","focus.concentrated-armament-program","focus.demand-sudetenland","focus.first-vienna-award","focus.fate-czechoslovakia","focus.expanding-luftwaffe",
          "focus.aeronautical-research-institute","focus.dive-bombers","focus.coal-liquefaction","focus.develop-modern-maneuver-warfare","focus.adopt-new-panzer-doctrine","focus.panzer-troop-schools","focus.advanced-panzer-research","focus.combined-arms","focus.form-jagdwaffe","focus.instill-auftragstaktik",
          "focus.establish-reichswerke","focus.reassert-eastern-claims","focus.establish-buna-werke","focus.danzig-or-war","focus.around-maginot","focus.operation-weserubung","focus.form-zentrale-planung","focus.operation-sea-lion","focus.demonstration-military-achievements","focus.germany-army-invincible",
          "focus.loyalty-fuhrer","focus.triumphant-will","focus.autarky-achieved","focus.supreme-leader","focus.panzergrenadier","focus.improve-logistics-system","focus.operation-tannenbaum","focus.reintegrate-luxembourg-alsace-lorraine","focus.armament-rationalization"],
    "r": ["res.electronic-mechanical-engineering","res.basic-machine-tools","res.construction-1","res.range-improvements","res.military-engineering-vehicles","res.inter-war-artillery","res.mechanical-computing","res.concentrated-industry-1","res.radio","res.support-weapons-up",
          "res.concentrated-industry-up","res.machine-tools-up","res.construction-up","res.artillery-up","res.radio-up","res.computing-up","res.flame-tank","res.medium-tank","res.logistics-company","res.infantry-equipment-up",
          "res.support-weapons-up-2","res.rubber-processing","res.oil-processing","res.fuel-refining","res.infantry-equipment-up-2","res.engines-3","res.improved-small-airframe","res.concentrated-industry-up-2","res.rubber-processing-up","res.heavy-bombs",
          "res.heavy-mg","res.survivability-studies","res.engineer-company-up","res.machine-tools-up-2","res.logistics-company-up","res.artillery-up-2","res.support-weapons-up-3","res.infantry-equipment-up-3","res.rubber-processing-up-2","res.construction-up-2",
          "res.radio-up-2","res.artillery-up-3","res.mechanized","res.advanced-flamethrower","res.basic-armor-protection","res.improved-medium-tank","res.excavation-3","res.pulverized-coal-firing-1","res.excavation-2","res.concentrated-industry-up-3",
          "res.machine-tools-up-3","res.construction-up-3","res.mechanized-up","res.infantry-equipment-up-4","res.support-weapons-up-4","res.panzerfaust-30","res.high-efficiency","res.logistics-up"]
  }
});
