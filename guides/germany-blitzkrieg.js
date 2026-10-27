/* Guide data. Loaded with a <script> tag (not fetch) so the page also works when opened straight from disk.
   Format:
   - meta: id, title, short, author, guideTitle, video, summary, patch (null = not recorded), source
   - images: key -> {file, caption, alt, w, h}
   - plan / focus / research: groups {id, title, ts?, date?, steps:[{id, t, n?, tag?("up"|"sp"), img?, date?, tags?}]}
     Step IDs are stable: never change or reuse one, even if the text is reworded. New steps get new IDs.
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
    "source": "From the video's description and transcript. Designs, template, build queues and doctrines were read from the video frames."
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
    {"id":"plan-day-one-jan","title":"Day one, Jan 1936","ts":"02:57","date":"1936-01-01", "steps": [
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
    {"id":"plan-early-game-political","title":"Early game & political power","ts":"04:54", "steps": [
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
    {"id":"plan-land-doctrine-china","title":"Land doctrine & China","ts":"09:40", "steps": [
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
    {"id":"plan-air-doctrine-czechoslovakia","title":"Air doctrine & Czechoslovakia","ts":"13:10", "steps": [
      {"id":"plan.air-airspace-dominance-then","t":"Air: Airspace Dominance, then Precision Naval Bombing","img":"air"},
      {"id":"plan.fate-czechoslovakia-slovakia-as","t":"Fate of Czechoslovakia: Slovakia as a puppet"},
      {"id":"plan.150-pp-security-advisor","t":"150 PP: security advisor, spies to quiet network"},
      {"id":"plan.60-army-xp-motorization","t":"60 army XP: Motorization Drive"}
    ]},
    {"id":"plan-spg-design-template","title":"SPG design & template","ts":"13:57", "steps": [
      {"id":"plan.design-spg1-medium-chassis","t":"Design SPG1 (medium chassis, Artillery role, engine 7, armor 4) and the Flammpanzer III","n":"Details on the Builds tab","img":"spg1"},
      {"id":"plan.production-flame-tank-1","t":"Production: flame tank 1, SPG all the rest, F1 10, C1 10"},
      {"id":"plan.queue-7-alkett-mio","t":"Queue the 7 Alkett MIO traits","img":"mio"},
      {"id":"plan.force-deploy-last-defensive","t":"Force deploy the last defensive divisions, recruit 9 armored divisions"},
      {"id":"plan.build-mark-template-as","t":"Build the MARK template as XP comes in: 8 motorized + 10 SPG, support recon, engineers, artillery, flame, logistics","img":"template"},
      {"id":"plan.spymaster-then-decisive-battle","t":"Spymaster, then Decisive Battle expert for navy XP, train the new ships"},
      {"id":"plan.after-coal-liquefaction-take","t":"After Coal Liquefaction: take the new decision"},
      {"id":"plan.blitzkrieg-theorist-force-deploy","t":"Blitzkrieg theorist, force deploy, train everything (navy and planes too)"},
      {"id":"plan.import-oil-so-you","t":"Import oil so you don't run dry before the war, take Maneuver Warfare"}
    ]},
    {"id":"plan-naval-doctrine-last","title":"Naval doctrine & last prep","ts":"17:55", "steps": [
      {"id":"plan.naval-trade-interdiction-then","t":"Naval: Trade Interdiction, then Patrol Boats, Line of Battle, Capital Hunters","img":"naval"},
      {"id":"plan.infantry-expert-cas-expert","t":"Infantry expert, CAS expert, Armor Genius"},
      {"id":"plan.start-preparing-collaboration-government","t":"Start preparing a collaboration government in the USA with your spies"},
      {"id":"plan.design-f2-c2-f2","t":"Design F2 and C2, F2 to 25 factories (taken from SPG)","img":"f2"},
      {"id":"plan.more-military-factories-100","t":"More military factories in 100% provinces"}
    ]},
    {"id":"plan-ww2-setup","title":"WW2 setup","ts":"19:42", "steps": [
      {"id":"plan.armor-army-poland-with","t":"Armor army for Poland with your best general and a logistics wizard, promote the top general to marshal"},
      {"id":"plan.promote-defensive-marshal-infantry","t":"Promote a defensive marshal for the infantry armies"},
      {"id":"plan.smallest-infantry-army-covers","t":"Smallest infantry army covers all of Poland, one on the French border, one on northern Poland, the last two also on the Polish front"},
      {"id":"plan.danzig-or-war-70","t":"Danzig or War (70 days)"},
      {"id":"plan.navy-destroyers-patrol-at","t":"Navy: destroyers patrol at low risk, subs convoy-raid the same sea, capital ships on strike force in the best harbor"},
      {"id":"plan.planes-naval-bombers-500","t":"Planes: naval bombers + 500 fighters follow the navy, 500 fighters defend Germany (3 on interception), the rest air superiority + CAS on the armor"}
    ]},
    {"id":"plan-ww2-europe","title":"WW2: Europe","ts":"22:24", "steps": [
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
    {"id":"plan-invading-uk","title":"Invading the UK","ts":"36:15", "steps": [
      {"id":"plan.plan-naval-invasion-two","t":"Plan the naval invasion: two groups of 6 SPG divisions"},
      {"id":"plan.tag-argentina-brazil-mexico","t":"Tag Argentina, Brazil and Mexico, accept the white peace when the USA asks","n":"Important: you don't want war with the USA yet. The UK calls them back in later."},
      {"id":"plan.launch-it-fleet-naval","t":"Launch it: fleet on naval invasion support, others on patrol. Justify on Italy"},
      {"id":"plan.peace-deal-annex-danzig","t":"Peace deal: annex Danzig, Luxembourg and the provinces you need to reach the USA. Annex or balkanize Poland, puppet the rest with resource rights and war reparations","n":"Never keep a puppet Poland"},
      {"id":"plan.production-infantry-c2-f2","t":"Production: infantry, C2, F2 to 50, trucks 15, mechanized ASAP. Recruit 12 more armored"},
      {"id":"plan.radio-propaganda-last-develop","t":"Radio Propaganda and the last Develop Germany decisions"}
    ]},
    {"id":"plan-usa-italy","title":"USA & Italy","ts":"41:21", "steps": [
      {"id":"plan.main-push-with-armor","t":"Main push with armor + 2 infantry armies following, 1 infantry army toward San Francisco, defensive divisions push Seattle from Canada"},
      {"id":"plan.two-submarine-fleets-two","t":"Two submarine fleets and two main fleets, destroyers split across sea regions on patrol, the rest strike force"},
      {"id":"plan.spend-spare-pp-spy","t":"Spend spare PP on spy upgrades"},
      {"id":"plan.italy-crush-them-take","t":"Italy: crush them, take their navy. Mechanized to 150 factories"},
      {"id":"plan.justify-usa-force-deploy","t":"Justify on the USA, force deploy and train the new armor"},
      {"id":"plan.war-with-usa-spgs","t":"War with the USA: SPGs first, then call Canada and Mexico and push with everyone"}
    ]},
    {"id":"plan-operation-barbarossa","title":"Operation Barbarossa","ts":"46:25", "steps": [
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
      {"id":"focus.remilitarize-rhineland","t":"Remilitarize The Rhineland"},
      {"id":"focus.fuhrerprinzip","t":"Fuhrerprinzip"},
      {"id":"focus.reichsleiter-todt","t":"Reichsleiter Todt"},
      {"id":"focus.four-year-plan","t":"The Four-Year Plan"},
      {"id":"focus.autarky-efforts","t":"Autarky Efforts"},
      {"id":"focus.institute-price-controls","t":"Institute Price Controls"},
      {"id":"focus.reorganize-wehrmacht","t":"Reorganize The Wehrmacht"},
      {"id":"focus.construct-reichsautobahn","t":"Construct The Reichsautobahn"},
      {"id":"focus.party-chancellor-hess","t":"Party Chancellor Hess"}
    ]},
    {"id":"focus-expansion-industry","title":"Expansion & industry", "steps": [
      {"id":"focus.anschluss","t":"Anschluss","n":"Force deploy if needed"},
      {"id":"focus.kdf-wagen-factories","t":"KdF-Wagen Factories"},
      {"id":"focus.develop-heraeus-research-facility","t":"Develop Heraeus Research Facility"},
      {"id":"focus.reichsleiter-goebbels","t":"Reichsleiter Goebbels"},
      {"id":"focus.accelerate-rearmament-program","t":"Accelerate the Rearmament Program"},
      {"id":"focus.establish-production-targets","t":"Establish Production Targets"},
      {"id":"focus.concentrated-armament-program","t":"Concentrated Armament Program"},
      {"id":"focus.demand-sudetenland","t":"Demand Sudetenland"},
      {"id":"focus.first-vienna-award","t":"First Vienna Award"},
      {"id":"focus.fate-czechoslovakia","t":"Fate Of Czechoslovakia"}
    ]},
    {"id":"focus-luftwaffe-panzers","title":"Luftwaffe & Panzers", "steps": [
      {"id":"focus.expanding-luftwaffe","t":"Expanding The Luftwaffe"},
      {"id":"focus.aeronautical-research-institute","t":"Aeronautical Research Institute"},
      {"id":"focus.dive-bombers","t":"Dive Bombers"},
      {"id":"focus.coal-liquefaction","t":"Coal Liquefaction"},
      {"id":"focus.develop-modern-maneuver-warfare","t":"Develop Modern Maneuver Warfare"},
      {"id":"focus.adopt-new-panzer-doctrine","t":"Adopt New Panzer Doctrine"},
      {"id":"focus.panzer-troop-schools","t":"Panzer Troop Schools"},
      {"id":"focus.advanced-panzer-research","t":"Advanced Panzer Research"},
      {"id":"focus.combined-arms","t":"Combined Arms"},
      {"id":"focus.form-jagdwaffe","t":"Form The Jagdwaffe"},
      {"id":"focus.instill-auftragstaktik","t":"Instill Auftragstaktik"}
    ]},
    {"id":"focus-war-prep","title":"War prep", "steps": [
      {"id":"focus.establish-reichswerke","t":"Establish The Reichswerke"},
      {"id":"focus.reassert-eastern-claims","t":"Reassert Eastern Claims"},
      {"id":"focus.establish-buna-werke","t":"Establish Buna Werke"},
      {"id":"focus.danzig-or-war","t":"Danzig Or War"},
      {"id":"focus.around-maginot","t":"Around Maginot"},
      {"id":"focus.operation-weserubung","t":"Operation Weserubung"},
      {"id":"focus.form-zentrale-planung","t":"Form The Zentrale Planung"},
      {"id":"focus.operation-sea-lion","t":"Operation Sea Lion"}
    ]},
    {"id":"focus-wartime","title":"Wartime", "steps": [
      {"id":"focus.demonstration-military-achievements","t":"Demonstration Of Military Achievements"},
      {"id":"focus.germany-army-invincible","t":"Germany Army, Invincible"},
      {"id":"focus.loyalty-fuhrer","t":"Loyalty To The Fuhrer"},
      {"id":"focus.triumphant-will","t":"The Triumphant Will","n":"Skip if the war is almost over"},
      {"id":"focus.autarky-achieved","t":"Autarky Achieved","n":"Bypasses the previous focuses"},
      {"id":"focus.supreme-leader","t":"The Supreme Leader"},
      {"id":"focus.panzergrenadier","t":"Panzergrenadier"},
      {"id":"focus.improve-logistics-system","t":"Improve The Logistics System"},
      {"id":"focus.operation-tannenbaum","t":"Operation Tannenbaum"},
      {"id":"focus.reintegrate-luxembourg-alsace-lorraine","t":"Reintegrate Luxembourg and Alsace-Lorraine"},
      {"id":"focus.armament-rationalization","t":"Armament Rationalization"}
    ]}
  ],

  "research": [
    {"id":"res-all","title":null, "steps": [
      {"id":"res.electronic-mechanical-engineering","t":"Electronic Mechanical Engineering"},
      {"id":"res.basic-machine-tools","t":"Basic Machine Tools"},
      {"id":"res.construction-1","t":"Construction 1"},
      {"id":"res.range-improvements","t":"Range Improvements"},
      {"id":"res.military-engineering-vehicles","t":"Military Engineering Vehicles","tag":"sp"},
      {"id":"res.inter-war-artillery","t":"Inter-War Artillery"},
      {"id":"res.mechanical-computing","t":"Mechanical Computing"},
      {"id":"res.concentrated-industry-1","t":"Concentrated Industry 1"},
      {"id":"res.radio","t":"Radio"},
      {"id":"res.support-weapons-up","t":"Support Weapons","tag":"up"},
      {"id":"res.concentrated-industry-up","t":"Concentrated Industry","tag":"up"},
      {"id":"res.machine-tools-up","t":"Machine Tools","tag":"up"},
      {"id":"res.construction-up","t":"Construction","tag":"up"},
      {"id":"res.artillery-up","t":"Artillery","tag":"up"},
      {"id":"res.radio-up","t":"Radio","tag":"up"},
      {"id":"res.computing-up","t":"Computing","tag":"up"},
      {"id":"res.flame-tank","t":"Flame Tank","tag":"sp"},
      {"id":"res.medium-tank","t":"Medium Tank"},
      {"id":"res.logistics-company","t":"Logistics Company"},
      {"id":"res.infantry-equipment-up","t":"Infantry Equipment","tag":"up"},
      {"id":"res.support-weapons-up-2","t":"Support Weapons","tag":"up"},
      {"id":"res.rubber-processing","t":"Rubber Processing"},
      {"id":"res.oil-processing","t":"Oil Processing"},
      {"id":"res.fuel-refining","t":"Fuel Refining"},
      {"id":"res.infantry-equipment-up-2","t":"Infantry Equipment","tag":"up"},
      {"id":"res.engines-3","t":"Engines 3"},
      {"id":"res.improved-small-airframe","t":"Improved Small Airframe"},
      {"id":"res.concentrated-industry-up-2","t":"Concentrated Industry","tag":"up"},
      {"id":"res.rubber-processing-up","t":"Rubber Processing","tag":"up"},
      {"id":"res.heavy-bombs","t":"Heavy Bombs"},
      {"id":"res.heavy-mg","t":"Heavy MG"},
      {"id":"res.survivability-studies","t":"Survivability Studies"},
      {"id":"res.engineer-company-up","t":"Engineer Company","tag":"up"},
      {"id":"res.machine-tools-up-2","t":"Machine Tools","tag":"up"},
      {"id":"res.logistics-company-up","t":"Logistics Company","tag":"up"},
      {"id":"res.artillery-up-2","t":"Artillery","tag":"up"},
      {"id":"res.support-weapons-up-3","t":"Support Weapons","tag":"up"},
      {"id":"res.infantry-equipment-up-3","t":"Infantry Equipment","tag":"up"},
      {"id":"res.rubber-processing-up-2","t":"Rubber Processing","tag":"up"},
      {"id":"res.construction-up-2","t":"Construction","tag":"up"},
      {"id":"res.radio-up-2","t":"Radio","tag":"up"},
      {"id":"res.artillery-up-3","t":"Artillery","tag":"up"},
      {"id":"res.mechanized","t":"Mechanized"},
      {"id":"res.advanced-flamethrower","t":"Advanced Flamethrower"},
      {"id":"res.basic-armor-protection","t":"Basic Armor Protection"},
      {"id":"res.improved-medium-tank","t":"Improved Medium Tank"},
      {"id":"res.excavation-3","t":"Excavation 3"},
      {"id":"res.pulverized-coal-firing-1","t":"Pulverized Coal Firing 1"},
      {"id":"res.excavation-2","t":"Excavation 2"},
      {"id":"res.concentrated-industry-up-3","t":"Concentrated Industry","tag":"up"},
      {"id":"res.machine-tools-up-3","t":"Machine Tools","tag":"up"},
      {"id":"res.construction-up-3","t":"Construction","tag":"up"},
      {"id":"res.mechanized-up","t":"Mechanized","tag":"up"},
      {"id":"res.infantry-equipment-up-4","t":"Infantry Equipment","tag":"up"},
      {"id":"res.support-weapons-up-4","t":"Support Weapons","tag":"up"},
      {"id":"res.panzerfaust-30","t":"Panzerfaust 30"},
      {"id":"res.high-efficiency","t":"High Efficiency"},
      {"id":"res.logistics-up","t":"Logistics","tag":"up"}
    ]}
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
    {"title": "Panzer division", "items": [
      {"type":"fig", "img":"template", "wide":true, "title":"MARK (ARM)", "sub":"final template, Apr 1938 · width 36", "ts":"16:55",
       "pins":[[1.2,40],[9.4,40],[24.6,40],[79.5,11.5]],
       "legend":[
         "**Support:** motorized recon, engineers, artillery, flame tank, logistics",
         "**8 motorized** in the first two columns",
         "**10 medium SP artillery**: 4 + 4 + 2",
         "**715 soft attack**, 427 breakthrough, 285 defense, 4.8 supply use"
       ],
       "text":"About 90 army XP to finish, since SPGs get no Motorization Drive discount. Recruit 9, then 12 more after the UK. If SPGs get nerfed, put medium tanks in the same slots."},
      {"type":"fig", "img":"spg1", "title":"SPG1 (7/4)", "ts":"13:57",
       "text":"Basic Medium Tank chassis, **Artillery** role, Alkett MIO. Engine 7, armor 4, all six modules as shown. 60.9 soft attack, cost 15.2."},
      {"type":"fig", "img":"flame", "title":"Flammpanzer III",
       "text":"Medium chassis, **Flame** role, flamethrower I only. Engine 6, armor 0, Christie suspension, cost 5.88. It won't save, so redo it if it's gone."},
      {"type":"fig", "img":"mio", "title":"Alkett MIO", "sub":"trait queue", "ts":"15:03",
       "text":"The small numbers next to each trait are his queue order, 1 to 7. Take the Alkett MIO for tanks and set the same queue."},
      {"type":"fig", "img":"templates", "title":"Templates",
       "text":"Infantry, armor, motorized, mountain, the Austrian infantry for defense, and a 1-battalion cavalry template for garrisons."}
    ]},
    {"title": "Doctrines", "items": [
      {"type":"fig", "img":"land", "wide":true, "title":"Land · Mobile Warfare", "ts":"9:40",
       "text":"Favourite tactic first, then in order: **Grand Assault** (Operations), **Assault Infantry** (Infantry, off screen to the left), **Self-propelled Support**, **Streamlined Deployment**. Maneuver Warfare later."},
      {"type":"fig", "img":"air", "title":"Air · Battlefield Support", "ts":"13:10",
       "text":"Airspace Dominance first, then Precision Naval Bombing. Operational Air Support and Coastal Air Patrol on the other tracks."},
      {"type":"fig", "img":"naval", "title":"Naval · Trade Interdiction", "ts":"17:55",
       "text":"Defensive build: Patrol Boats, Line of Battle, Capital Hunters. Carriers skipped."}
    ]},
    {"title": "Planes & ships", "items": [
      {"type":"fig", "img":"f2", "title":"F2 fighter", "ts":"19:10",
       "text":"Improved Small Airframe. 62 air attack, 53 agility, 675 km/h, cost 33. Replaces F1 at 25 factories."},
      {"type":"fig", "img":"c2", "title":"C2 CAS",
       "text":"Improved CAS airframe. 53 agility, 572 km/h, 975 km range, cost 27. Doubles as a naval bomber over the Channel."},
      {"type":"card", "title":"Ships",
       "text":"Refit Admiral Hipper into the best light cruiser with Raiding Ship Builders, then put every new dockyard on it. Convoys stay at 1 dockyard."}
    ]},
    {"title": "Economy", "layout": "narrow", "items": [
      {"type":"fig", "img":"build36", "title":"Construction, 1 Jan 1936", "ts":"2:57",
       "text":"Infrastructure in 4 western states, 1 civ in each, then military factories in Westfalen and Hessen."},
      {"type":"fig", "img":"prod36", "title":"Production, 1 Jan 1936",
       "text":"Train 1, Bf 109 1, Ju 87 1, Do 22 3, artillery 3, trucks 3, support 5, Kar 98k the rest."},
      {"type":"fig", "img":"navy36", "title":"Naval lines, 1936",
       "text":"Extra ships cancelled. Subs and destroyers at max, heavy ships at 2, convoys at 1."},
      {"type":"fig", "img":"prodtodt", "title":"After Todt, Nov 1936", "ts":"8:10",
       "text":"Armored support vehicle on top, Kar 98k capped at 25, F1 25, C1 15, Do 22 5."},
      {"type":"fig", "img":"build37", "title":"Construction, Jun 1937", "ts":"10:50",
       "text":"Mils in the 100% states, 2 refineries each, then mils in the 80% states. Gives exactly enough rubber by 1939."},
      {"type":"card", "title":"Production later on", "table":[
        {"head":"Sino-Japanese war starts", "rows":[["Infantry equipment","10"],["New factories","F1, lowest"]]},
        {"head":"SPG unlocked", "rows":[["Flame tank","1"],["SPG","the rest"],["F1 / C1","10 / 10"]]},
        {"head":"F2 and C2 designed", "rows":[["F2 (taken from SPG)","25"]]},
        {"head":"After the UK falls", "rows":[["Infantry eq., C2, F2","50 each"],["Trucks","15"],["Mechanized","150"]]}
      ]}
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
