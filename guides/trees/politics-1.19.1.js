/* Government, research & production, military staff and decisions for GER, facts only, extracted from the HoI4 1.19.1
   game files (common/idea_tags, common/ideas, common/characters/GER.txt, common/country_leader, common/decisions) with
   every DLC enabled. cost = political power (or the slot's base cost); effects summarised in our own words. */
registerPolitics({
  "patch": "1.19.1",
  "tag": "GER",
  "tabs": [
    {
      "id": "government",
      "name": "Government",
      "cost": 150,
      "slots": [
        {"id":"mobilization_laws","name":"Conscription Law","kind":"idea"},
        {"id":"trade_laws","name":"Trade Law","kind":"idea"},
        {"id":"economy","name":"Economy Law","kind":"idea"},
        {"id":"political_advisor","name":"Political Advisor","kind":"advisor"},
        {"id":"political_advisor","name":"Political Advisor","kind":"advisor"},
        {"id":"political_advisor","name":"Political Advisor","kind":"advisor"}
      ]
    },
    {
      "id": "research_production",
      "name": "Research & Production",
      "cost": 150,
      "slots": [
        {"id":"tank_manufacturer","name":"Tank Designer","kind":"idea"},
        {"id":"naval_manufacturer","name":"Ship Designer","kind":"idea"},
        {"id":"aircraft_manufacturer","name":"Aircraft Designer","kind":"idea"},
        {"id":"materiel_manufacturer","name":"Materiel Designer","kind":"idea"},
        {"id":"industrial_concern","name":"Industrial Concern","kind":"idea"},
        {"id":"theorist","name":"Theorist","kind":"advisor"}
      ]
    },
    {
      "id": "military_staff",
      "name": "Military Staff",
      "cost": 150,
      "slots": [
        {"id":"army_chief","name":"Chief of Army","kind":"advisor"},
        {"id":"navy_chief","name":"Chief of Navy","kind":"advisor"},
        {"id":"air_chief","name":"Chief of Air Force","kind":"advisor"},
        {"id":"high_command","name":"Military High Command","kind":"advisor"},
        {"id":"high_command","name":"Military High Command","kind":"advisor"},
        {"id":"high_command","name":"Military High Command","kind":"advisor"}
      ]
    }
  ],
  "ideas": {
    "porsche": {"id":"porsche","name":"Porsche","slot":"tank_manufacturer","fx":["Research bonus: armor +15%"],"cost":150},
    "GER_porsche_improved": {
      "id": "GER_porsche_improved",
      "name": "Porsche",
      "slot": "tank_manufacturer",
      "fx": ["Research bonus: armor +15%","Heavy Tank: build cost ic -5%"],
      "cost": 150
    },
    "henschel": {"id":"henschel","name":"Henschel","slot":"tank_manufacturer","fx":["Research bonus: armor +15%"],"cost":150},
    "GER_henschel_improved": {
      "id": "GER_henschel_improved",
      "name": "Henschel",
      "slot": "tank_manufacturer",
      "fx": ["Research bonus: armor +15%","Light Tank: build cost ic -5%"],
      "cost": 150
    },
    "GER_MAN": {"id":"GER_MAN","name":"MAN","slot":"tank_manufacturer","fx":["Research bonus: armor +15%"],"cost":150},
    "GER_MAN_improved": {"id":"GER_MAN_improved","name":"MAN","slot":"tank_manufacturer","fx":["Research bonus: armor +15%","Medium Tank: build cost ic -5%"],"cost":150},
    "GER_alkett": {"id":"GER_alkett","name":"Alkett","slot":"tank_manufacturer","fx":["Research bonus: armor +15%"],"cost":150},
    "GER_alkett_improved": {
      "id": "GER_alkett_improved",
      "name": "Alkett",
      "slot": "tank_manufacturer",
      "fx": [
        "Research bonus: armor +15%",
        "Light SP Artillery: build cost ic -5%",
        "Medium SP Artillery: build cost ic -5%",
        "Heavy SP Artillery: build cost ic -5%"
      ],
      "cost": 150
    },
    "GER_daimler_benz": {
      "id": "GER_daimler_benz",
      "name": "Daimler Benz",
      "slot": "tank_manufacturer",
      "fx": ["Research bonus: armor +10%","Armor technology: build cost ic -5%","Truck: build cost ic -5%","Mechanized: build cost ic -5%"],
      "cost": 150
    },
    "GER_daimler_benz_improved": {
      "id": "GER_daimler_benz_improved",
      "name": "Daimler Benz",
      "slot": "tank_manufacturer",
      "fx": ["Research bonus: armor +10%","Armor technology: build cost ic -5%","Truck: build cost ic -5%","Mechanized: build cost ic -10%"],
      "cost": 150
    },
    "germaniawerft": {"id":"germaniawerft","name":"Germaniawerft","slot":"naval_manufacturer","fx":["Research bonus: naval equipment +15%"],"cost":150},
    "GER_germaniawerft_improved": {
      "id": "GER_germaniawerft_improved",
      "name": "Germaniawerft",
      "slot": "naval_manufacturer",
      "fx": ["Research bonus: naval equipment +15%","Chance to score Critical Hit +10%"],
      "cost": 150
    },
    "blohm_und_voss": {"id":"blohm_und_voss","name":"Blohm & Voss","slot":"naval_manufacturer","fx":["Research bonus: naval equipment +15%"],"cost":150},
    "GER_blohm_und_voss_improved": {
      "id": "GER_blohm_und_voss_improved",
      "name": "Blohm & Voss",
      "slot": "naval_manufacturer",
      "fx": ["Research bonus: naval equipment +15%","Convoy Raiding Efficiency +10%"],
      "cost": 150
    },
    "GER_hdw": {"id":"GER_hdw","name":"HDW","slot":"naval_manufacturer","fx":["Research bonus: naval equipment +15%"],"cost":150},
    "GER_hdw_improved": {
      "id": "GER_hdw_improved",
      "name": "HDW",
      "slot": "naval_manufacturer",
      "fx": ["Research bonus: naval equipment +15%","Torpedo reveal chance -5%","Submarine Attack +5%"],
      "cost": 150
    },
    "GER_deschimag": {"id":"GER_deschimag","name":"Deschimag","slot":"naval_manufacturer","fx":["Research bonus: naval equipment +15%"],"cost":150},
    "GER_deschimag_improved": {
      "id": "GER_deschimag_improved",
      "name": "Deschimag",
      "slot": "naval_manufacturer",
      "fx": ["Research bonus: naval equipment +15%","Escort Efficiency +10%"],
      "cost": 150
    },
    "GER_deutsche_werke": {"id":"GER_deutsche_werke","name":"Deutsche Werke","slot":"naval_manufacturer","fx":["Research bonus: naval equipment +10%"],"cost":150},
    "GER_deutsche_werke_improved": {
      "id": "GER_deutsche_werke_improved",
      "name": "Deutsche Werke",
      "slot": "naval_manufacturer",
      "fx": ["Research bonus: naval equipment +15%","Carrier: range +10%","Capital Ships: range +10%","Screens: range +10%","Submarine: range +10%"],
      "cost": 150
    },
    "GER_kriegsmarinewerft_wilhelmshaven": {
      "id": "GER_kriegsmarinewerft_wilhelmshaven",
      "name": "Marinewerft Wilhelmshaven",
      "slot": "naval_manufacturer",
      "fx": ["Research bonus: naval equipment +15%","Accident chance -15%","Ship Repair Speed +10%","Refit ic cost -10%","Refit speed +10%"],
      "cost": 150
    },
    "GER_kriegsmarinewerft_wilhelmshaven_improved": {
      "id": "GER_kriegsmarinewerft_wilhelmshaven_improved",
      "name": "Marinewerft Wilhelmshaven",
      "slot": "naval_manufacturer",
      "fx": [
        "Research bonus: naval equipment +15%",
        "Accident chance -15%",
        "Ship Repair Speed +15%",
        "Refit ic cost -15%",
        "Refit speed +15%",
        "Production speed dockyard factor +10%"
      ],
      "cost": 150
    },
    "messerschmitt": {"id":"messerschmitt","name":"Messerschmitt","slot":"aircraft_manufacturer","fx":["Research bonus: air equipment +15%"],"cost":150},
    "GER_messerschmitt_improved": {
      "id": "GER_messerschmitt_improved",
      "name": "Messerschmitt",
      "slot": "aircraft_manufacturer",
      "fx": ["Research bonus: air equipment +15%","Fighter: build cost ic -5%"],
      "cost": 150
    },
    "junkers": {"id":"junkers","name":"Junkers","slot":"aircraft_manufacturer","fx":["Research bonus: air equipment +15%"],"cost":150},
    "GER_junkers_improved": {
      "id": "GER_junkers_improved",
      "name": "Junkers",
      "slot": "aircraft_manufacturer",
      "fx": ["Research bonus: air equipment +15%","Close Air Support: build cost ic -5%"],
      "cost": 150
    },
    "focke_wulf": {"id":"focke_wulf","name":"Focke-Wulf","slot":"aircraft_manufacturer","fx":["Research bonus: air equipment +15%"],"cost":150},
    "GER_focke_wulf_improved": {
      "id": "GER_focke_wulf_improved",
      "name": "Focke-Wulf",
      "slot": "aircraft_manufacturer",
      "fx": ["Research bonus: air equipment +15%","Fighter: agility +5%","Tactical Bomber: agility +5%","Strategic Bomber: agility +5%"],
      "cost": 150
    },
    "heinkel": {"id":"heinkel","name":"Heinkel","slot":"aircraft_manufacturer","fx":["Research bonus: air equipment +15%"],"cost":150},
    "GER_heinkel_improved": {
      "id": "GER_heinkel_improved",
      "name": "Heinkel",
      "slot": "aircraft_manufacturer",
      "fx": ["Research bonus: air equipment +15%","Strategic Bomber: build cost ic -5%"],
      "cost": 150
    },
    "dornier": {"id":"dornier","name":"Dornier","slot":"aircraft_manufacturer","fx":["Research bonus: air equipment +15%"],"cost":150},
    "GER_dornier_improved": {
      "id": "GER_dornier_improved",
      "name": "Dornier",
      "slot": "aircraft_manufacturer",
      "fx": ["Research bonus: air equipment +15%","Tactical Bomber: build cost ic -5%"],
      "cost": 150
    },
    "GER_arado_flugzeugwerke": {
      "id": "GER_arado_flugzeugwerke",
      "name": "Arado Flugzeugwerke",
      "slot": "aircraft_manufacturer",
      "fx": ["Air Equipment Experience Cost -10%","Research bonus: air equipment +15%"],
      "cost": 150
    },
    "GER_arado_flugzeugwerke_improved": {
      "id": "GER_arado_flugzeugwerke_improved",
      "name": "Arado Flugzeugwerke",
      "slot": "aircraft_manufacturer",
      "fx": [
        "Air Equipment Experience Cost -10%",
        "Fighter: speed +5%",
        "Tactical Bomber: speed +5%",
        "Strategic Bomber: speed +5%",
        "Research bonus: air equipment +15%"
      ],
      "cost": 150
    },
    "GER_fieseler": {"id":"GER_fieseler","name":"Fieseler","slot":"aircraft_manufacturer","fx":["Research bonus: air equipment +15%"],"cost":150},
    "GER_fieseler_improved": {
      "id": "GER_fieseler_improved",
      "name": "Fieseler",
      "slot": "aircraft_manufacturer",
      "fx": [
        "Research bonus: air equipment +15%",
        "Naval Bomber: build cost ic -5%",
        "Carrier Naval Bomber: build cost ic -5%",
        "Carrier Fighter: build cost ic -5%",
        "Carrier Close Air Support: build cost ic -5%"
      ],
      "cost": 150
    },
    "rheinmetall": {"id":"rheinmetall","name":"Rheinmetall","slot":"materiel_manufacturer","fx":["Research bonus: artillery +15%"],"cost":150},
    "mauser": {"id":"mauser","name":"Mauser","slot":"materiel_manufacturer","fx":["Research bonus: infantry weapons +15%"],"cost":150},
    "opel": {"id":"opel","name":"Opel","slot":"materiel_manufacturer","fx":["Research bonus: motorized equipment +15%"],"cost":150},
    "GER_opel_improved": {
      "id": "GER_opel_improved",
      "name": "Opel",
      "slot": "materiel_manufacturer",
      "fx": ["Research bonus: motorized equipment +15%","Truck: build cost ic -5%"],
      "cost": 150
    },
    "GER_carl_walther": {"id":"GER_carl_walther","name":"Carl Walther","slot":"materiel_manufacturer","fx":["Research bonus: support tech +10%"],"cost":150},
    "GER_auto_union": {"id":"GER_auto_union","name":"Auto Union","slot":"materiel_manufacturer","fx":["Research bonus: armor +15%"],"cost":150},
    "GER_auto_union_improved": {"id":"GER_auto_union_improved","name":"Auto Union","slot":"materiel_manufacturer","fx":["Armored Car: build cost ic -5%, armor +5%"],"cost":150},
    "GER_henschel_kassel_manufacturer": {
      "id": "GER_henschel_kassel_manufacturer",
      "name": "Henschel-Kassel",
      "slot": "materiel_manufacturer",
      "fx": ["Research bonus: train tech +15%, support tech +7%","Train: build cost ic -10%, armor +10%, air attack +10%"],
      "cost": 150
    },
    "GER_focke_achgelis": {
      "id": "GER_focke_achgelis",
      "name": "Focke-Achgelis",
      "slot": "materiel_manufacturer",
      "fx": ["Research bonus: support tech +5%, air equipment +5%"],
      "cost": 150
    },
    "ig_faben": {"id":"ig_faben","name":"IG Farben","slot":"industrial_concern","fx":["Research bonus: industry +5%, synth resources +15%"],"cost":150},
    "GER_ig_faben_improved": {
      "id": "GER_ig_faben_improved",
      "name": "IG Farben",
      "slot": "industrial_concern",
      "fx": [
        "Research bonus: industry +5%, synth resources +15%",
        "Production speed synthetic refinery factor +10%",
        "Production speed fuel silo factor +10%"
      ],
      "cost": 150
    },
    "krupp": {"id":"krupp","name":"Krupp","slot":"industrial_concern","fx":["Research bonus: industry +15%"],"cost":150},
    "siemens": {"id":"siemens","name":"Siemens","slot":"industrial_concern","fx":["Research bonus: electronics +15%"],"cost":150},
    "GER_vereinigte_stahlwerke": {
      "id": "GER_vereinigte_stahlwerke",
      "name": "Vereinigte Stahlwerke",
      "slot": "industrial_concern",
      "fx": ["Research bonus: excavation tech +15%"],
      "cost": 150
    },
    "GER_deutsche_reichsbahn": {"id":"GER_deutsche_reichsbahn","name":"Deutsche Reichsbahn","slot":"industrial_concern","fx":["Research bonus: train tech +15%"],"cost":150},
    "GER_deutsche_reichsbahn_improved": {
      "id": "GER_deutsche_reichsbahn_improved",
      "name": "Deutsche Reichsbahn",
      "slot": "industrial_concern",
      "fx": ["Research bonus: train tech +15%","War Austerity Train: build cost ic -15%"],
      "cost": 150
    },
    "GER_philipp_holzmann": {"id":"GER_philipp_holzmann","name":"Philipp Holzmann","slot":"industrial_concern","fx":[],"cost":150},
    "GER_philipp_holzmann_improved": {
      "id": "GER_philipp_holzmann_improved",
      "name": "Philipp Holzmann",
      "slot": "industrial_concern",
      "fx": ["Research bonus: construction tech +15%"],
      "cost": 150
    },
    "GER_philipp_holzmann_improved_2": {
      "id": "GER_philipp_holzmann_improved_2",
      "name": "Philipp Holzmann",
      "slot": "industrial_concern",
      "fx": ["Research bonus: construction tech +15%"],
      "cost": 150
    },
    "GER_organization_todt": {"id":"GER_organization_todt","name":"Organization Todt","slot":"industrial_concern","fx":["Research bonus: construction tech +15%"],"cost":75},
    "GER_organization_todt_improved": {
      "id": "GER_organization_todt_improved",
      "name": "Organization Todt",
      "slot": "industrial_concern",
      "fx": ["Research bonus: construction tech +15%"],
      "cost": 75
    },
    "GER_rwe": {"id":"GER_rwe","name":"RWE","slot":"industrial_concern","fx":["Research bonus: nuclear +5%"],"cost":150},
    "GER_reichswerke": {
      "id": "GER_reichswerke",
      "name": "Reichswerke",
      "slot": "industrial_concern",
      "fx": ["Research bonus: excavation tech +5%, industry +5%"],
      "cost": 150,
      "req": ["we have completed Establish the Reichswerke"]
    },
    "GER_reichswerke_improved": {
      "id": "GER_reichswerke_improved",
      "name": "Reichswerke",
      "slot": "industrial_concern",
      "fx": ["Research bonus: excavation tech +5%, industry +5%"],
      "cost": 100,
      "req": ["we have completed Establish the Reichswerke"]
    },
    "GER_reichswerke_improved_2": {
      "id": "GER_reichswerke_improved_2",
      "name": "Reichswerke",
      "slot": "industrial_concern",
      "fx": ["Research bonus: excavation tech +15%, industry +15%"],
      "cost": 100,
      "req": ["we have completed Establish the Reichswerke"]
    },
    "undisturbed_isolation": {
      "id": "undisturbed_isolation",
      "name": "Undisturbed Isolation",
      "slot": "economy",
      "fx": [
        "Expected number of factories put on Consumer Goods +50%",
        "Production speed industrial complex factor -50%",
        "Production speed arms factory factor -50%",
        "Production speed dockyard factor -50%",
        "Civilian to Military Factory conversion cost +50%",
        "Military to Civilian Factory conversion cost +50%",
        "Generate wargoal tension +1",
        "Join faction tension +20%",
        "Lend lease tension +50%",
        "Send volunteers tension +20%",
        "Guarantee tension +75%",
        "Fuel Capacity -45%",
        "Fuel gain per oil -60%",
        "Agency upgrade time +1",
        "Factory Energy Consumption -30%"
      ],
      "cost": 150,
      "law": true
    },
    "isolation": {
      "id": "isolation",
      "name": "Isolation",
      "slot": "economy",
      "fx": [
        "Expected number of factories put on Consumer Goods +40%",
        "Production speed industrial complex factor -40%",
        "Production speed arms factory factor -40%",
        "Production speed dockyard factor -40%",
        "Civilian to Military Factory conversion cost +40%",
        "Military to Civilian Factory conversion cost +40%",
        "Generate wargoal tension +1",
        "Join faction tension +20%",
        "Lend lease tension +10%",
        "Send volunteers tension +20%",
        "Guarantee tension +50%",
        "Fuel Capacity -35%",
        "Fuel gain per oil -50%",
        "Agency upgrade time +80%",
        "Factory Energy Consumption -30%"
      ],
      "cost": 150,
      "law": true
    },
    "civilian_economy": {
      "id": "civilian_economy",
      "name": "Civilian Economy",
      "slot": "economy",
      "fx": [
        "Expected number of factories put on Consumer Goods +35%",
        "Production speed industrial complex factor -30%",
        "Production speed arms factory factor -30%",
        "Civilian to Military Factory conversion cost +30%",
        "Military to Civilian Factory conversion cost +30%",
        "Fuel Capacity -25%",
        "Fuel gain per oil -40%",
        "Factory Energy Consumption -30%"
      ],
      "cost": 150,
      "law": true,
      "default": true
    },
    "low_economic_mobilisation": {
      "id": "low_economic_mobilisation",
      "name": "Early Mobilization",
      "slot": "economy",
      "fx": [
        "Expected number of factories put on Consumer Goods +30%",
        "Production speed industrial complex factor -10%",
        "Production speed arms factory factor -10%",
        "Fuel gain per oil -25%",
        "Factory Energy Consumption -15%"
      ],
      "cost": 150,
      "law": true
    },
    "partial_economic_mobilisation": {
      "id": "partial_economic_mobilisation",
      "name": "Partial Mobilization",
      "slot": "economy",
      "fx": [
        "Expected number of factories put on Consumer Goods +25%",
        "Production speed arms factory factor +10%",
        "Civilian to Military Factory conversion cost -10%",
        "Military to Civilian Factory conversion cost -10%",
        "Fuel gain per oil -10%"
      ],
      "cost": 150,
      "law": true,
      "start": true
    },
    "war_economy": {
      "id": "war_economy",
      "name": "War Economy",
      "slot": "economy",
      "fx": [
        "Expected number of factories put on Consumer Goods +20%",
        "Production speed arms factory factor +20%",
        "Civilian to Military Factory conversion cost -20%",
        "Military to Civilian Factory conversion cost -20%",
        "Factory Energy Consumption +25%"
      ],
      "cost": 150,
      "law": true
    },
    "tot_economic_mobilisation": {
      "id": "tot_economic_mobilisation",
      "name": "Total Mobilization",
      "slot": "economy",
      "fx": [
        "Expected number of factories put on Consumer Goods +15%",
        "Conscription -3%",
        "Production speed arms factory factor +30%",
        "Civilian to Military Factory conversion cost -30%",
        "Military to Civilian Factory conversion cost -30%",
        "Factory Energy Consumption +50%"
      ],
      "cost": 150,
      "law": true,
      "req": ["we are at war"]
    },
    "totaler_krieg_economy": {
      "id": "totaler_krieg_economy",
      "name": "Totaler Krieg",
      "slot": "economy",
      "fx": [
        "Expected number of factories put on Consumer Goods +15%",
        "Conscription -2%",
        "Production speed arms factory factor +20%",
        "Production speed dockyard factor +20%",
        "Civilian to Military Factory conversion cost -30%",
        "Military to Civilian Factory conversion cost -30%",
        "Industrial capacity factory +5%",
        "Industrial capacity dockyard +5%",
        "Factory Energy Consumption +50%"
      ],
      "cost": 150,
      "law": true,
      "req": ["we have completed Totaler Krieg"]
    },
    "national_defense_state": {
      "id": "national_defense_state",
      "name": "National Defense State",
      "slot": "economy",
      "fx": [
        "Expected number of factories put on Consumer Goods +15%",
        "Production speed arms factory factor +30%",
        "Civilian to Military Factory conversion cost -30%",
        "Military to Civilian Factory conversion cost -30%",
        "Factory Energy Consumption +45%"
      ],
      "cost": 150,
      "law": true,
      "req": ["we have completed Prepare for the Final War or National Defense State"]
    },
    "new_economic_policy": {
      "id": "new_economic_policy",
      "name": "New Economic Policy",
      "slot": "economy",
      "fx": ["Expected number of factories put on Consumer Goods +15%","Construction Speed -15%","Factory Energy Consumption +25%"],
      "cost": 150,
      "law": true
    },
    "new_economic_policy_2": {
      "id": "new_economic_policy_2",
      "name": "New Economic Policy",
      "slot": "economy",
      "fx": [
        "Expected number of factories put on Consumer Goods +10%",
        "Construction Speed -20%",
        "Max Factories in a State +10%",
        "Factory Energy Consumption +35%"
      ],
      "cost": 150,
      "law": true
    },
    "capital_investment_model": {
      "id": "capital_investment_model",
      "name": "Capital Investment Model",
      "slot": "economy",
      "fx": [
        "Expected number of factories put on Consumer Goods +15%",
        "Production speed industrial complex factor +15%",
        "Civilian to Military Factory conversion cost -40%",
        "Production speed infrastructure factor +15%",
        "Production speed arms factory factor -15%",
        "Trade deal opinion factor +75%",
        "Stability -15%",
        "Political Power Gain -10%",
        "Factory Energy Consumption +35%"
      ],
      "cost": 150,
      "law": true
    },
    "JAP_war_communism_idea": {
      "id": "JAP_war_communism_idea",
      "name": "War Communism",
      "slot": "economy",
      "fx": [
        "Expected number of factories put on Consumer Goods +15%",
        "Production speed industrial complex factor -10%",
        "Max Factories in a State +10%",
        "Factory Energy Consumption +30%",
        "War Support +10%",
        "Stability -10%",
        "Conscription +2%",
        "Industrial capacity factory +5%",
        "Industrial capacity dockyard +5%",
        "Production speed arms factory factor +20%",
        "Production speed dockyard factor +20%"
      ],
      "cost": 150,
      "law": true
    },
    "uncontrolled_exports": {
      "id": "uncontrolled_exports",
      "name": "Embargoed Economy",
      "slot": "trade_laws",
      "fx": [
        "Min export +25%",
        "Expected number of factories put on Consumer Goods +5%",
        "Civilian intelligence to others +40",
        "Navy intelligence to others +40",
        "Agency upgrade time +15%",
        "Base construction line speed boost +15%"
      ],
      "cost": 150,
      "law": true
    },
    "free_trade": {
      "id": "free_trade",
      "name": "Free Trade",
      "slot": "trade_laws",
      "fx": [
        "Min export +80%",
        "Industrial capacity factory +15%",
        "Industrial capacity dockyard +15%",
        "Construction Speed +15%",
        "Research Speed +10%",
        "Civilian intelligence to others +40",
        "Navy intelligence to others +20",
        "Market construction boost multiplier +5%"
      ],
      "cost": 150,
      "law": true,
      "req": ["we have not completed Autarky Efforts"]
    },
    "export_focus": {
      "id": "export_focus",
      "name": "Export Focus",
      "slot": "trade_laws",
      "fx": [
        "Min export +50%",
        "Industrial capacity factory +10%",
        "Industrial capacity dockyard +10%",
        "Construction Speed +10%",
        "Research Speed +5%",
        "Civilian intelligence to others +20",
        "Navy intelligence to others +10",
        "Market construction boost multiplier +10%"
      ],
      "cost": 150,
      "law": true,
      "default": true,
      "req": ["we have not completed Autarky Efforts"]
    },
    "limited_exports": {
      "id": "limited_exports",
      "name": "Limited Exports",
      "slot": "trade_laws",
      "fx": [
        "Min export +25%",
        "Industrial capacity factory +5%",
        "Industrial capacity dockyard +5%",
        "Construction Speed +5%",
        "Research Speed +1%",
        "Civilian intelligence to others +10",
        "Navy intelligence to others +5",
        "Lend lease tension +20%",
        "Base construction line speed boost -5%"
      ],
      "cost": 150,
      "law": true,
      "start": true
    },
    "autarkic_economy": {
      "id": "autarkic_economy",
      "name": "Autarky",
      "slot": "trade_laws",
      "fx": ["Min export +15%","Construction Speed +5%","Research Speed +5%","Lend lease tension +20%","Faction trade deal opinion factor +25%"],
      "cost": 150,
      "law": true
    },
    "autarkic_economy_improved": {
      "id": "autarkic_economy_improved",
      "name": "Autarky",
      "slot": "trade_laws",
      "fx": [
        "Min export +15%",
        "Industrial capacity factory +5%",
        "Industrial capacity dockyard +5%",
        "Construction Speed +10%",
        "Research Speed +5%",
        "Lend lease tension +20%",
        "Faction trade deal opinion factor +50%"
      ],
      "cost": 150,
      "law": true
    },
    "closed_economy": {
      "id": "closed_economy",
      "name": "Closed Economy",
      "slot": "trade_laws",
      "fx": ["Min export +0%","Lend lease tension +40%","Base construction line speed boost -10%"],
      "cost": 150,
      "law": true,
      "req": ["we are at war","we are fascist or we are communist"]
    },
    "special_economic_zones": {
      "id": "special_economic_zones",
      "name": "Special economic zones",
      "slot": "trade_laws",
      "fx": [
        "Research bonus: industry +15%",
        "Min export +90%",
        "Industrial capacity factory +20%",
        "Industrial capacity dockyard +20%",
        "Construction Speed +20%",
        "Civilian intelligence to others +80",
        "Navy intelligence to others +30",
        "Trade extra resource per factory +100%"
      ],
      "cost": 0,
      "law": true
    },
    "disarmed_nation": {"id":"disarmed_nation","name":"Disarmed Nation","slot":"mobilization_laws","fx":["Conscription +1%"],"cost":150,"law":true},
    "volunteer_only": {
      "id": "volunteer_only",
      "name": "Volunteer Only",
      "slot": "mobilization_laws",
      "fx": ["Conscription +1.5%"],
      "cost": 150,
      "law": true,
      "default": true,
      "req": ["we don't have the Undisturbed Isolation spirit","we don't have the Isolation spirit"]
    },
    "limited_conscription": {
      "id": "limited_conscription",
      "name": "Limited Conscription",
      "slot": "mobilization_laws",
      "fx": ["Conscription +2.5%"],
      "cost": 150,
      "law": true,
      "start": true,
      "req": ["we don't have the Undisturbed Isolation spirit","we don't have the Isolation spirit"]
    },
    "extensive_conscription": {
      "id": "extensive_conscription",
      "name": "Extensive Conscription",
      "slot": "mobilization_laws",
      "fx": ["Conscription +5%","Training time +10%"],
      "cost": 150,
      "law": true
    },
    "service_by_requirement": {
      "id": "service_by_requirement",
      "name": "Service by Requirement",
      "slot": "mobilization_laws",
      "fx": ["Conscription +10%","Industrial capacity factory -10%","Industrial capacity dockyard -10%","Construction Speed -10%","Training time +20%"],
      "cost": 150,
      "law": true,
      "req": ["we are more than 0% of the way to surrender"]
    },
    "all_adults_serve": {
      "id": "all_adults_serve",
      "name": "All Adults Serve",
      "slot": "mobilization_laws",
      "fx": ["Conscription +20%","Industrial capacity factory -30%","Industrial capacity dockyard -30%","Construction Speed -30%","Training time +30%"],
      "cost": 150,
      "law": true,
      "req": ["we are at war","we are more than 0% of the way to surrender"]
    },
    "scraping_the_barrel": {
      "id": "scraping_the_barrel",
      "name": "Scraping the Barrel",
      "slot": "mobilization_laws",
      "fx": ["Conscription +25%","Industrial capacity factory -40%","Industrial capacity dockyard -40%","Construction Speed -40%","Training time +50%"],
      "cost": 150,
      "law": true,
      "req": ["we are at war","we are more than 25% of the way to surrender"]
    },
    "ETH_chitet_law": {
      "id": "ETH_chitet_law",
      "name": "The Chitet",
      "slot": "mobilization_laws",
      "fx": [
        "Conscription +4.5%",
        "Automatic increase of penalties and manpower reserves when at war. Can raise the National Levy when at war.",
        "Industrial capacity factory -5%",
        "Industrial capacity dockyard -5%",
        "Construction Speed -5%"
      ],
      "cost": 150,
      "law": true,
      "default": true
    },
    "ETH_chitet_law_peace_time": {
      "id": "ETH_chitet_law_peace_time",
      "name": "The Chitet",
      "slot": "mobilization_laws",
      "fx": [
        "Conscription +0.5%",
        "Automatic increase of penalties and manpower reserves when at war. Can raise the National Levy when at war.",
        "Industrial capacity factory +5%",
        "Industrial capacity dockyard +5%",
        "Construction Speed +5%"
      ],
      "cost": 150,
      "law": true,
      "default": true
    },
    "SWI_citizen_militia_1": {
      "id": "SWI_citizen_militia_1",
      "name": "Swiss Citizen Militias",
      "slot": "mobilization_laws",
      "fx": [
        "Conscription +10%",
        "Cannot train regular forces outside of Citizen Militias, and cannot edit existing templates outside of the Military Readiness decisions Switzerland relies on their civilian population to take up arms when needed. A limited amount of militias can be trained, and they will have their Organization initially capped. Once the focus Armed Neutrality is completed, the militias will be able to be expanded, improved and eventually, deployed using the Deploy Citizen Militias decision. While the militias are deployed, penalties to the Swiss economy will stack up over time, but they'll reset after they're recalled.",
        "AI Modifier: Desired Divisions Factor +100%"
      ],
      "cost": 200,
      "law": true
    },
    "SWI_citizen_militia_2": {
      "id": "SWI_citizen_militia_2",
      "name": "Expanded Swiss Citizen Militias",
      "slot": "mobilization_laws",
      "fx": [
        "Conscription +20%",
        "Cannot train regular forces outside of Citizen Militias, and cannot edit existing templates outside of the Military Readiness decisions Switzerland relies on their civilian population to take up arms when needed. A limited amount of militias can be trained, and they will have their Organization initially capped. Once the focus Armed Neutrality is completed, the militias will be able to be expanded, improved and eventually, deployed using the Deploy Citizen Militias decision. While the militias are deployed, penalties to the Swiss economy will stack up over time, but they'll reset after they're recalled.",
        "AI Modifier: Desired Divisions Factor +200%"
      ],
      "cost": 200,
      "law": true
    },
    "CZE_skoda_works_german_manufacturer": {
      "id": "CZE_skoda_works_german_manufacturer",
      "name": "Skoda Works-Prague",
      "slot": "tank_manufacturer",
      "fx": ["Research bonus: armor +10%","Equipment Conversion Speed +15%","Equipment Capture Ratio Factor +15%","Land Equipment Experience Cost -10%"],
      "cost": 150,
      "req": ["we have completed Integrate Czech Manufacturers"]
    },
    "CZE_bohmische_mahrische_maschinenfabrik_ag_german_manufacturer": {
      "id": "CZE_bohmische_mahrische_maschinenfabrik_ag_german_manufacturer",
      "name": "Böhmische-Mährische Maschinenfabrik AG",
      "slot": "tank_manufacturer",
      "fx": ["Research bonus: armor +15%, artillery +5%","Equipment Conversion Speed +5%","Light Tank Destroyer: build cost ic -10%"],
      "cost": 150,
      "req": ["we have completed Integrate Czech Manufacturers"]
    },
    "CZE_zlin_aircraft": {
      "id": "CZE_zlin_aircraft",
      "name": "Zlín Aircraft",
      "slot": "aircraft_manufacturer",
      "fx": ["Research bonus: air equipment +15%"],
      "cost": 150,
      "req": ["we have completed Integrate Czech Manufacturers"]
    },
    "CZE_ceska_zbrojovka_uhersky_brod": {
      "id": "CZE_ceska_zbrojovka_uhersky_brod",
      "name": "CZ Uherský Brod",
      "slot": "materiel_manufacturer",
      "fx": [
        "Research bonus: infantry weapons +15%, air equipment +1%",
        "Infantry Equipment: build cost ic -5%, breakthrough +3%",
        "Fighter: build cost ic -1%, air attack +1%"
      ],
      "cost": 150,
      "req": ["we have completed Integrate Czech Manufacturers"]
    },
    "CZE_anglo_czechoslovak_bank": {
      "id": "CZE_anglo_czechoslovak_bank",
      "name": "Anglo-Czechoslovak and Prague Credit Bank",
      "slot": "industrial_concern",
      "fx": [],
      "cost": 150,
      "req": ["we are not at war with United Kingdom","we have completed Establish a Customs Union"]
    },
    "SPR_collectivized_society": {
      "id": "SPR_collectivized_society",
      "name": "Collectivized Society",
      "slot": "economy",
      "fx": [
        "Resistance Target -20%",
        "Expected number of factories put on Consumer Goods +15%",
        "Production speed industrial complex factor +15%",
        "Production speed arms factory factor +30%",
        "Civilian to Military Factory conversion cost -30%",
        "Military to Civilian Factory conversion cost -30%",
        "Max Factories in a State +10%",
        "Industrial capacity factory +70%",
        "Industrial capacity dockyard +70%",
        "Research Speed -10%",
        "Production Efficiency growth -20%",
        "Production Efficiency Cap -20%",
        "Production Efficiency Retention +10%",
        "Factory Energy Consumption +45%"
      ],
      "cost": 150,
      "law": true
    }
  },
  "advisors": {
    "GER_otto_strasser": {
      "id": "GER_otto_strasser",
      "char": "GER_otto_strasser",
      "name": "Otto Strasser",
      "slot": "political_advisor",
      "cost": 150,
      "traits": [{"id":"GER_revolutionary_nationalist_advisor","name":"Revolutionary Nationalist","fx":["Daily Fascism Support +12%","War Support +5%"]}],
      "req": ["we have completed Expatriate the Communists"]
    },
    "GER_werner_von_blomberg": {
      "id": "GER_werner_von_blomberg",
      "char": "GER_werner_von_blomberg",
      "name": "Werner von Blomberg",
      "slot": "theorist",
      "cost": 150,
      "traits": [{"id":"grand_battle_plan_expert","name":"Grand Battleplan Expert","fx":["Grand battleplan mastery gain factor +15%"]}],
      "ledger": "army",
      "req": ["we have not completed Reorganize the Wehrmacht"]
    },
    "gerd_von_rundstedt": {
      "id": "gerd_von_rundstedt",
      "char": "GER_gerd_von_rundstedt",
      "name": "Gerd von Rundstedt",
      "slot": "high_command",
      "cost": 100,
      "traits": [{"id":"army_regrouping_2","name":"Army Regrouping (Expert)","fx":["Division Recovery Rate +8%"]}],
      "ledger": "army"
    },
    "werner_von_fritsch_high_command": {
      "id": "werner_von_fritsch_high_command",
      "char": "GER_werner_von_fritsch",
      "name": "Werner von Fritsch",
      "slot": "high_command",
      "cost": 100,
      "traits": [{"id":"army_logistics_2","name":"Army Logistics (Expert)","fx":["Division Attrition -8%"]}],
      "ledger": "army",
      "req": ["we have not completed Reorganize the Wehrmacht"]
    },
    "werner_von_fritsch_army_chief": {
      "id": "werner_von_fritsch_army_chief",
      "char": "GER_werner_von_fritsch",
      "name": "Werner von Fritsch",
      "slot": "army_chief",
      "cost": 100,
      "traits": [
        {
          "id": "army_chief_army_high_command",
          "name": "Oberkommando des Heeres",
          "fx": ["Artillery Attack +15%","Artillery Defense +10%","Max planning factor +10%"]
        }
      ],
      "ledger": "army",
      "req": [
        "we have completed Prussian Artillery Doctrine",
        "we have not completed Remilitarize the Rhineland, The Monarchy Compromise and Start The Proletarian Revolution"
      ]
    },
    "erwin_rommel": {
      "id": "erwin_rommel",
      "char": "GER_erwin_rommel",
      "name": "Erwin Rommel",
      "slot": "high_command",
      "cost": 200,
      "traits": [{"id":"army_armored_3","name":"Armor (Genius)","fx":["Armor Division Attack +15%","Armor Division Defense +15%"]}],
      "ledger": "army",
      "req": ["we have completed Adopt New Panzer Doctrine"]
    },
    "manstein": {
      "id": "manstein",
      "char": "GER_erich_von_manstein",
      "name": "Erich von Manstein",
      "slot": "theorist",
      "cost": 150,
      "traits": [{"id":"mobile_warfare_expert","name":"Mobile Warfare Expert","fx":["New mobile warfare mastery gain factor +15%"]}],
      "ledger": "army"
    },
    "heinz_guderian": {
      "id": "heinz_guderian",
      "char": "GER_heinz_guderian",
      "name": "Heinz Guderian",
      "slot": "theorist",
      "cost": 200,
      "traits": [{"id":"blitzkrieg_theorist","name":"Blitzkrieg Theorist","fx":["Armor technology: speed +10%","New mobile warfare mastery gain factor +15%"]}],
      "ledger": "army",
      "req": ["we have completed Adopt New Panzer Doctrine"]
    },
    "kurt_student": {
      "id": "kurt_student",
      "char": "GER_kurt_student",
      "name": "Kurt Student",
      "slot": "high_command",
      "cost": 100,
      "traits": [{"id":"air_airborne_2","name":"Airborne Assault (Expert)","fx":["Organization After Paradropping +180%","Paratrooper aa defense +15%"]}],
      "ledger": "air",
      "req": ["we have completed Fallschirmjäger"]
    },
    "albert_kesselring": {
      "id": "albert_kesselring",
      "char": "GER_albert_kesselring",
      "name": "Albert Kesselring",
      "slot": "air_chief",
      "cost": 100,
      "traits": [{"id":"air_chief_reform_2","name":"Air Reformer (Expert)","fx":["Experience gain air factor +10%"]}]
    },
    "GER_paul_von_lettow_vorbeck": {
      "id": "GER_paul_von_lettow_vorbeck",
      "char": "GER_paul_von_lettow_vorbeck",
      "name": "Paul von Lettow-Vorbeck",
      "slot": "high_command",
      "cost": 150,
      "traits": [{"id":"army_concealment_2","name":"Concealment (Expert)","fx":["Enemy Air Support -10%"]}],
      "req": ["we are non-aligned"]
    },
    "donitz": {
      "id": "donitz",
      "char": "GER_karl_donitz",
      "name": "Karl Dönitz",
      "slot": "navy_chief",
      "cost": 200,
      "traits": [{"id":"navy_chief_commerce_raiding_3","name":"Commerce Raiding (Genius)","fx":["Convoy Raiding Efficiency +20%"]}],
      "req": ["we have completed Trade Interdiction"]
    },
    "raeder": {
      "id": "raeder",
      "char": "GER_erich_raeder",
      "name": "Erich Raeder",
      "slot": "navy_chief",
      "cost": 100,
      "traits": [
        {
          "id": "navy_chief_decisive_battle_2",
          "name": "Decisive Battle (Expert)",
          "fx": ["Capital Ship Attack +10%","Capital Ship Armor +10%","Screen Attack +10%","Screen Defense +10%"]
        }
      ]
    },
    "alfred_saalwachter": {
      "id": "alfred_saalwachter",
      "char": "GER_alfred_saalwachter",
      "name": "Alfred Saalwächter",
      "slot": "theorist",
      "cost": 150,
      "traits": [{"id":"submarine_specialist","name":"Submarine Specialist","fx":["New convoy raiding mastery gain factor +15%"]}],
      "ledger": "navy",
      "req": ["we have completed Wolfpack Tactics"]
    },
    "gunther_lutjens": {
      "id": "gunther_lutjens",
      "char": "GER_gunther_lutjens",
      "name": "Günther Lütjens",
      "slot": "high_command",
      "cost": 100,
      "traits": [{"id":"navy_fleet_logistics_2","name":"Fleet Logistics (Expert)","fx":["Naval Max Range Factor +10%"]}],
      "ledger": "navy"
    },
    "wolfram_von_richthofen": {
      "id": "wolfram_von_richthofen",
      "char": "GER_wolfram_von_richthofen",
      "name": "W. von Richthofen",
      "slot": "theorist",
      "cost": 150,
      "traits": [{"id":"close_air_support_proponent","name":"Close Air Support Proponent","fx":["New battlefield support mastery gain factor +15%"]}],
      "ledger": "air"
    },
    "walther_wever": {
      "id": "walther_wever",
      "char": "GER_walther_wever",
      "name": "Walther Wever",
      "slot": "theorist",
      "cost": 100,
      "traits": [{"id":"air_warfare_theorist","name":"Air Warfare Theorist","fx":["Air Doctrine Cost -10%"]}],
      "ledger": "air"
    },
    "ernst_udet": {
      "id": "ernst_udet",
      "char": "GER_ernst_udet",
      "name": "Ernst Udet",
      "slot": "theorist",
      "cost": 100,
      "traits": [{"id":"dive_bomber","name":"Dive Bomber","fx":["Close Air Support: ground attack +10%","Air Doctrine Cost -10%"]}],
      "ledger": "air",
      "req": ["we have completed Dive Bombers"]
    },
    "otto_ciliax": {
      "id": "otto_ciliax",
      "char": "GER_otto_ciliax",
      "name": "Otto Ciliax",
      "slot": "theorist",
      "cost": 100,
      "traits": [{"id":"naval_theorist","name":"Naval Theorist","fx":["Naval Doctrine Cost -10%"]}],
      "ledger": "navy"
    },
    "ludwig_beck": {
      "id": "ludwig_beck",
      "char": "GER_ludwig_beck",
      "name": "Ludwig Beck",
      "slot": "army_chief",
      "cost": 100,
      "traits": [{"id":"army_chief_organizational_2","name":"Army Organization (Expert)","fx":["Division Organization +8%"]}]
    },
    "wilhelm_keitel": {
      "id": "wilhelm_keitel",
      "char": "GER_wilhelm_keitel",
      "name": "Wilhelm Keitel",
      "slot": "army_chief",
      "cost": 100,
      "traits": [{"id":"army_chief_drill_2","name":"Army Drill (Expert)","fx":["Division training time -10%"]}],
      "req": ["we are fascist"]
    },
    "franz_halder": {
      "id": "franz_halder",
      "char": "GER_franz_halder",
      "name": "Franz Halder",
      "slot": "army_chief",
      "cost": 100,
      "traits": [{"id":"army_chief_offensive_2","name":"Army Offense (Expert)","fx":["Army attack factor +10%"]}],
      "req": ["we have completed Instill Auftragstaktik"]
    },
    "walther_von_brauchitsch": {
      "id": "walther_von_brauchitsch",
      "char": "GER_walther_von_brauchitsch",
      "name": "W. von Brauchitsch",
      "slot": "army_chief",
      "cost": 100,
      "traits": [{"id":"army_chief_maneuver_2","name":"Army Maneuver (Expert)","fx":["Divisions speed +10%"]}],
      "req": ["we have completed Develop Modern Maneuver Warfare"]
    },
    "GER_rolf_carls": {
      "id": "GER_rolf_carls",
      "char": "GER_rolf_carls",
      "name": "Rolf Carls",
      "slot": "navy_chief",
      "cost": 100,
      "traits": [{"id":"navy_chief_maneuver_2","name":"Naval Maneuver (Expert)","fx":["Naval Speed +10%"]}],
      "req": ["we have completed Re-establish the Seekriegsleitung"]
    },
    "GER_hermann_goring": {
      "id": "GER_hermann_goring",
      "char": "GER_hermann_goring",
      "name": "Hermann Göring",
      "slot": "political_advisor",
      "cost": 150,
      "traits": [{"id":"GER_overseer_four_year_plan","name":"Overseer of the Four-Year Plan","fx":["Resource Gain Efficiency +5%","Political Power Gain +5%"]}],
      "req": ["we are fascist","we have not completed Reichsleiter Göring","we have not completed Rally the Wehrmacht"]
    },
    "goering": {
      "id": "goering",
      "char": "GER_hermann_goring",
      "name": "Hermann Göring",
      "slot": "air_chief",
      "cost": 100,
      "traits": [
        {
          "id": "GER_reich_marshal",
          "name": "Reich Marshal (Specialist)",
          "fx": ["Air Superiority +5%","Tactical Bomber: build cost ic -2.5%","Strategic Bomber: build cost ic -2.5%","Fighter: build cost ic -2.5%"]
        }
      ],
      "req": ["we are fascist","we have not completed Rally the Wehrmacht"]
    },
    "ritter_von_greim": {
      "id": "ritter_von_greim",
      "char": "GER_ritter_von_greim",
      "name": "Ritter von Greim",
      "slot": "air_chief",
      "cost": 100,
      "traits": [{"id":"air_chief_all_weather_2","name":"All-Weather (Expert)","fx":["Bad Weather Penalty -20%"]}],
      "req": ["we have completed Expanding the Luftwaffe"]
    },
    "GER_helmuth_wilberg": {
      "id": "GER_helmuth_wilberg",
      "char": "GER_helmuth_wilberg",
      "name": "Helmuth Wilberg",
      "slot": "air_chief",
      "cost": 100,
      "traits": [{"id":"air_chief_ground_support_3","name":"Ground Support (Genius)","fx":["Air Superiority +15%"]}],
      "req": ["we are not fascist","we have completed Reorganize the Luftwaffe"]
    },
    "ferdinand_schorner": {
      "id": "ferdinand_schorner",
      "char": "GER_ferdinand_schorner",
      "name": "Ferdinand Schörner",
      "slot": "high_command",
      "cost": 100,
      "traits": [{"id":"army_infantry_2","name":"Infantry (Expert)","fx":["Infantry Division Attack +10%","Infantry Division Defense +15%"]}],
      "ledger": "army"
    },
    "erich_bey": {
      "id": "erich_bey",
      "char": "GER_erich_bey",
      "name": "Erich Bey",
      "slot": "high_command",
      "cost": 100,
      "traits": [{"id":"navy_naval_air_defense_2","name":"Naval Air Defense (Expert)","fx":["Naval AA attack +15%"]}],
      "ledger": "navy"
    },
    "viktor_schutze": {
      "id": "viktor_schutze",
      "char": "GER_viktor_schutze",
      "name": "Viktor Schütze",
      "slot": "high_command",
      "cost": 50,
      "traits": [{"id":"navy_submarine_1","name":"Submarines (Specialist)","fx":["Submarine Attack +10%","Submarine Defense +5%"]}],
      "ledger": "navy"
    },
    "hugo_sperrle": {
      "id": "hugo_sperrle",
      "char": "GER_hugo_sperrle",
      "name": "Hugo Sperrle",
      "slot": "high_command",
      "cost": 100,
      "traits": [{"id":"air_close_air_support_2","name":"Close Air Support (Expert)","fx":["Air Support Mission Efficiency +10%","Ground attack factor +5%"]}],
      "ledger": "air",
      "req": ["we have completed Dive Bombers"]
    },
    "erhard_milch": {
      "id": "erhard_milch",
      "char": "GER_erhard_milch",
      "name": "Erhard Milch",
      "slot": "high_command",
      "cost": 100,
      "traits": [{"id":"air_tactical_bombing_2","name":"Tactical Bombing (Expert)","fx":["Ground support +15%"]}],
      "ledger": "air",
      "req": ["we have completed Tactical Bombers"]
    },
    "GER_robert_knauss": {
      "id": "GER_robert_knauss",
      "char": "GER_robert_knauss",
      "name": "Robert Knauss",
      "slot": "high_command",
      "cost": 100,
      "traits": [
        {
          "id": "air_strategic_bombing_2",
          "name": "Strategic Bombing (Expert)",
          "fx": ["Air strategic bomber defence factor +2%","Air strategic bomber bombing factor +5%"]
        }
      ],
      "ledger": "air",
      "req": ["we have completed Uralbomber Program"]
    },
    "GER_josef_kammhuber": {
      "id": "GER_josef_kammhuber",
      "char": "GER_josef_kammhuber",
      "name": "Josef Kammhuber",
      "slot": "high_command",
      "cost": 100,
      "traits": [{"id":"air_bomber_interception_2","name":"Bomber Interception (Expert)","fx":["Interception Mission Efficiency +10%"]}],
      "ledger": "air"
    },
    "GER_alfred_becker": {
      "id": "GER_alfred_becker",
      "char": "GER_alfred_becker",
      "name": "Alfred Becker",
      "slot": "high_command",
      "cost": 100,
      "traits": [
        {
          "id": "GER_adaptive_engineer",
          "name": "Adaptive Engineer",
          "fx": ["Equipment Conversion Speed +10%","Equipment Capture Ratio Factor +5%","Civilian to Military Factory conversion cost -15%"]
        }
      ],
      "ledger": "army",
      "req": ["we have completed Salvage Captured Equipment"]
    },
    "GER_walter_dornberger": {
      "id": "GER_walter_dornberger",
      "char": "GER_walter_dornberger",
      "name": "Walter Dornberger",
      "slot": "high_command",
      "cost": 100,
      "traits": [
        {
          "id": "GER_head_of_the_missile_department",
          "name": "Head of the Missile Department",
          "fx": ["Aerodynamics and Avionics Special Projects Speed +10%","Land Warfare Special Projects Speed +10%"]
        }
      ],
      "ledger": "army",
      "req": ["we have completed Rocketry Innovations, Wonder Weapons or Glorious Mechanical Machinations"]
    },
    "joachim_von_ribbentrop": {
      "id": "joachim_von_ribbentrop",
      "char": "GER_joachim_von_ribbentrop",
      "name": "Joachim von Ribbentrop",
      "slot": "political_advisor",
      "cost": 50,
      "traits": [
        {
          "id": "GER_reich_minister_foreign_affairs_ribbentrop",
          "name": "Reich Minister of Foreign Affairs",
          "fx": [
            "Subversive activities cost -25%",
            "Ideology drift defense +25%",
            "Justify war goal time -15%",
            "Faction trade deal opinion factor +10%",
            "Same ideology monthly opinion +5"
          ]
        }
      ],
      "req": ["we have completed Reorganize the Wehrmacht or we are fascist","we have not completed Heed von Neurath's Concerns and Rally the Wehrmacht"]
    },
    "konstantin_von_neurath": {
      "id": "konstantin_von_neurath",
      "char": "GER_konstantin_von_neurath",
      "name": "Konstantin von Neurath",
      "slot": "political_advisor",
      "cost": 50,
      "traits": [
        {
          "id": "GER_reich_minister_foreign_affairs_neurath",
          "name": "Reich Minister of Foreign Affairs",
          "fx": [
            "Improve relations maintain cost -50%",
            "Trade deal opinion factor +10%",
            "Subjects autonomy gain -10%",
            "Compliance Growth Speed +1%",
            "Foreign subversive activites -25%"
          ]
        }
      ],
      "req": [
        "we are not communist",
        "we have completed Heed von Neurath's Concerns",
        "we have not completed Reorganize the Wehrmacht and Rally the Wehrmacht"
      ]
    },
    "todt": {
      "id": "todt",
      "char": "GER_fritz_todt",
      "name": "Fritz Todt",
      "slot": "political_advisor",
      "cost": 150,
      "traits": [
        {
          "id": "GER_reich_engineer",
          "name": "Reich Engineer",
          "fx": ["Production speed industrial complex factor +10%","Production speed infrastructure factor +10%","Production speed rail way factor +10%"]
        }
      ]
    },
    "speer": {
      "id": "speer",
      "char": "GER_albert_speer",
      "name": "Albert Speer",
      "slot": "political_advisor",
      "cost": 150,
      "traits": [{"id":"GER_reich_architect","name":"Reich Architect","fx":["Construction Speed +5%","Daily Fascism Support +1%"]}]
    },
    "hjalmar_schacht": {
      "id": "hjalmar_schacht",
      "char": "GER_hjalmar_schacht",
      "name": "Hjalmar Schacht",
      "slot": "political_advisor",
      "cost": 75,
      "traits": [
        {
          "id": "GER_mefo_bills_architect",
          "name": "MEFO Bills Architect",
          "fx": ["Production speed arms factory factor +10%","Production speed dockyard factor +10%","Consumer Goods Factories factor -10%"]
        }
      ],
      "req": ["we are not communist"]
    },
    "walther_funk": {
      "id": "walther_funk",
      "char": "GER_walther_funk",
      "name": "Walther Funk",
      "slot": "political_advisor",
      "cost": 150,
      "traits": [
        {
          "id": "GER_reich_minister_of_economy",
          "name": "Reich Minister of Economy",
          "fx": ["Consumer Goods Factories factor -10%","Production speed supply node factor +15%","Lack of Resources Penalty -5%","Free repair +15%"]
        }
      ],
      "req": ["we are fascist","we have not completed Oppose Hitler and Rally the Wehrmacht"]
    },
    "joseph_goebbels": {
      "id": "joseph_goebbels",
      "char": "GER_joseph_goebbels",
      "name": "Joseph Goebbels",
      "slot": "political_advisor",
      "cost": 150,
      "traits": [{"id":"GER_reich_minister_of_propaganda","name":"Reich Minister of Propaganda","fx":["War Support +5%","Daily Fascism Support +10%"]}],
      "req": ["we have not completed Reichsleiter Goebbels"]
    },
    "rudolf_hess": {
      "id": "rudolf_hess",
      "char": "GER_rudolf_hess",
      "name": "Rudolf Hess",
      "slot": "political_advisor",
      "cost": 150,
      "traits": [{"id":"GER_first_among_equals","name":"First Among Equals","fx":["Same ideology monthly opinion +100%","Political Power Gain +10%"]}],
      "req": ["we have not completed Party Chancellor Hess","we are fascist","we have not completed Rally the Wehrmacht"]
    },
    "heinrich_himmler": {
      "id": "heinrich_himmler",
      "char": "GER_heinrich_himmler",
      "name": "Heinrich Himmler",
      "slot": "political_advisor",
      "cost": 150,
      "traits": [
        {
          "id": "prince_of_terror",
          "name": "Prince of Terror",
          "fx": ["Resistance damage to garrison -25%","Foreign subversive activites -30%","Non core manpower +2%"]
        }
      ],
      "req": ["we are fascist","we have not completed Reichsleiter Himmler","we have not completed Rally the Wehrmacht"]
    },
    "martin_bormann": {
      "id": "martin_bormann",
      "char": "GER_martin_bormann",
      "name": "Martin Bormann",
      "slot": "political_advisor",
      "cost": 150,
      "traits": [{"id":"GER_secretary_to_the_fuhrer","name":"Secretary to the Führer","fx":["Political Advisor Cost -10%","Political Power Gain +10%"]}],
      "req": ["we have not completed Party Chancellor Bormann","we are fascist","we have not completed Rally the Wehrmacht"]
    },
    "GER_leni_riefenstahl": {
      "id": "GER_leni_riefenstahl",
      "char": "GER_leni_riefenstahl",
      "name": "Leni Riefenstahl",
      "slot": "political_advisor",
      "cost": 150,
      "traits": [
        {
          "id": "GER_film_director",
          "name": "Film Director",
          "fx": [
            "Weekly War Support (Combat Casualties) +0.1%",
            "Offensive war stability factor +5%",
            "Defensive war stability factor +5%",
            "Ideology drift defense +15%"
          ]
        }
      ],
      "req": ["we have completed Fund the Film Department","we are fascist"]
    },
    "GER_franz_seldte": {
      "id": "GER_franz_seldte",
      "char": "GER_franz_seldte",
      "name": "Franz Seldte",
      "slot": "political_advisor",
      "cost": 150,
      "traits": [
        {
          "id": "GER_reich_minister_for_labor",
          "name": "Reich Minister for Labor",
          "fx": [
            "Stability -5%",
            "Compliance Growth Speed -1%",
            "Resistance Growth Speed +3%",
            "Industrial capacity factory +2.5%",
            "Industrial capacity dockyard +2.5%",
            "Production Efficiency growth +2.5%",
            "Production Efficiency Base +2.5%"
          ]
        }
      ],
      "req": ["we are fascist"]
    },
    "GER_hanns_kerrl": {
      "id": "GER_hanns_kerrl",
      "char": "GER_hanns_kerrl",
      "name": "Hanns Kerrl",
      "slot": "political_advisor",
      "cost": 150,
      "traits": [
        {
          "id": "GER_reich_minister_of_church_affairs",
          "name": "Reich Minister of Church Affairs",
          "fx": [
            "Political Power Gain +5%",
            "Party popularity stability factor +10%",
            "Resistance Growth Speed -2.5%",
            "Research Speed -2.5%",
            "Weekly War Support (Enemy Bombing) +0.2%"
          ]
        }
      ],
      "req": ["we are fascist","we have not completed Hegemony of the SS"]
    },
    "GER_wilhelm_canaris": {
      "id": "GER_wilhelm_canaris",
      "char": "GER_wilhelm_canaris",
      "name": "Wilhelm Canaris",
      "slot": "political_advisor",
      "cost": 150,
      "traits": [{"id":"head_of_the_abwehr","name":"Chief of the Abwehr","fx":["Operative slots +1","Agency upgrade time -20%"]}],
      "req": [
        "we have not completed Reorganize Secret Services and Start The Proletarian Revolution",
        "we have not completed Start The Proletarian Revolution"
      ]
    },
    "GER_hans_oster": {
      "id": "GER_hans_oster",
      "char": "GER_hans_oster",
      "name": "Hans Oster",
      "slot": "political_advisor",
      "cost": 150,
      "traits": [{"id":"anti_fascist_agent","name":"Anti-Fascist Agent","fx":["Daily Fascism Support -5%","Stability +10%"]}],
      "req": ["we have completed Rally the Wehrmacht","we are not fascist and we have not completed Remilitarize the Rhineland"]
    },
    "GER_alfred_hugenberg": {
      "id": "GER_alfred_hugenberg",
      "char": "GER_alfred_hugenberg",
      "name": "Alfred Hugenberg",
      "slot": "political_advisor",
      "cost": 150,
      "traits": [{"id":"monarchist_media_mogul","name":"Monarchist Media Mogul","fx":["Daily Support for Unaligned +10%","War stability factor +10%"]}],
      "req": [
        "we have completed Revive the Kaiserreich or Invite German Monarchists",
        "we are not fascist and we have not completed Remilitarize the Rhineland and we have not completed Start The Proletarian Revolution"
      ]
    },
    "GER_carl_friedrich_goerdeler": {
      "id": "GER_carl_friedrich_goerdeler",
      "char": "GER_carl_friedrich_goerdeler",
      "name": "Carl Friedrich Goerdeler",
      "slot": "political_advisor",
      "cost": 150,
      "traits": [
        {
          "id": "GER_price_commissioner",
          "name": "Price Commissioner",
          "fx": ["Lack of Resources Penalty -5%","Resource Gain Efficiency +5%","Trade deal opinion factor +15%","Consumer Goods Factories factor -5%"]
        }
      ],
      "req": [
        "we have completed Revive the Kaiserreich, Invite German Monarchists or Strive for Conservative Values",
        "we are not fascist and we have not completed Remilitarize the Rhineland and we have not completed Start The Proletarian Revolution"
      ]
    },
    "GER_julius_leber": {
      "id": "GER_julius_leber",
      "char": "GER_julius_leber",
      "name": "Julius Leber",
      "slot": "political_advisor",
      "cost": 150,
      "traits": [{"id":"connected_citizen","name":"Connected Citizen","fx":["Political Power Gain +5%","Stability +5%","Ideology drift defense +15%"]}],
      "req": [
        "we have completed Re-establish Free Elections",
        "we are not fascist and we have not completed Remilitarize the Rhineland and we have not completed Revive the Kaiserreich and we have not completed Revive the Kaiserreich and we have not completed Start The Proletarian Revolution"
      ]
    },
    "kurt_schumacher": {
      "id": "kurt_schumacher",
      "char": "GER_kurt_schumacher",
      "name": "Kurt Schumacher",
      "slot": "political_advisor",
      "cost": 150,
      "traits": [{"id":"democratic_reformer","name":"Democratic Reformer","fx":["Daily Democracy Support +10%"]}],
      "req": [
        "we have completed Re-establish Free Elections",
        "we are not fascist and we have not completed Remilitarize the Rhineland and we have not completed Revive the Kaiserreich and we have not completed Revive the Kaiserreich and we have not completed Start The Proletarian Revolution"
      ]
    },
    "GER_theodor_heuss": {
      "id": "GER_theodor_heuss",
      "char": "GER_theodor_heuss",
      "name": "Theodor Heuss",
      "slot": "political_advisor",
      "cost": 150,
      "traits": [{"id":"liberal_journalist","name":"Liberal Journalist","fx":["Daily Democracy Support +5%","Political Power Gain +10%"]}],
      "req": [
        "we have completed Monarchist Sentiment",
        "we are not fascist and we have not completed Remilitarize the Rhineland and we have not completed Revive the Kaiserreich and we have not completed Revive the Kaiserreich and we have not completed Start The Proletarian Revolution"
      ]
    },
    "GER_hans_luther": {
      "id": "GER_hans_luther",
      "char": "GER_hans_luther",
      "name": "Hans Luther",
      "slot": "political_advisor",
      "cost": 150,
      "traits": [
        {
          "id": "GER_former_reichsbank_president",
          "name": "Former Reichsbank President",
          "fx": ["Production speed infrastructure factor +10%","Production speed industrial complex factor +10%","Consumer Goods Factories factor -10%"]
        }
      ],
      "req": ["we are not fascist","we have not completed Remilitarize the Rhineland and we are not fascist"]
    },
    "GER_ludwig_erhard": {
      "id": "GER_ludwig_erhard",
      "char": "GER_ludwig_erhard",
      "name": "Ludwig Erhard",
      "slot": "political_advisor",
      "cost": 150,
      "traits": [
        {
          "id": "economic_reformer",
          "name": "Economic Reformer",
          "fx": ["Trade Laws Cost -33%","Economy Laws Cost -33%","Consumer Goods Factories factor -15%"]
        }
      ],
      "req": ["we have completed Prioritize Economic Growth","we have not completed The Four-Year Plan"]
    },
    "GER_hermann_erhardt": {
      "id": "GER_hermann_erhardt",
      "char": "GER_hermann_erhardt",
      "name": "Hermann Ehrhardt",
      "slot": "political_advisor",
      "cost": 150,
      "traits": [
        {
          "id": "GER_freikorps_commander",
          "name": "Freikorps Commander",
          "fx": ["Recruitable Population +3%","Militia Defense +5%","Militia Attack +5%","Militia Organization +5%","Ideology drift defense +15%"]
        }
      ],
      "req": [
        "we are non-aligned",
        "we have completed Reestablish the Freikorps",
        "we have not completed Remilitarize the Rhineland, Start The Proletarian Revolution and The Monarchy Compromise"
      ]
    },
    "GER_adolf_friedrich_von_mecklenburg": {
      "id": "GER_adolf_friedrich_von_mecklenburg",
      "char": "GER_adolf_friedrich_von_mecklenburg",
      "name": "Adolf Friedrich of Mecklenburg",
      "slot": "political_advisor",
      "cost": 150,
      "traits": [
        {
          "id": "GER_minister_of_the_colonies",
          "name": "State Secretary for the Colonies",
          "fx": ["Political Power Gain +5%","Non core manpower +2%","Garrison Penetration Chance -10%"]
        }
      ],
      "req": [
        "we are non-aligned or we are democratic",
        "we are not fascist and we have not completed Remilitarize the Rhineland and we have not completed Start The Proletarian Revolution"
      ]
    },
    "GER_wilhelm_von_gayl": {
      "id": "GER_wilhelm_von_gayl",
      "char": "GER_wilhelm_von_gayl",
      "name": "Wilhelm von Gayl",
      "slot": "political_advisor",
      "cost": 150,
      "traits": [
        {
          "id": "GER_monarchist_jurist",
          "name": "Monarchist Jurist",
          "fx": [
            "Political Power Gain +5%",
            "Stability +5%",
            "Weekly War Support (Combat Casualties) +0.1%",
            "Offensive war stability factor +5%",
            "Defensive war stability factor +5%"
          ]
        }
      ],
      "req": ["we have completed Monarchist Sentiment","we have not completed Remilitarize the Rhineland and Start The Proletarian Revolution"]
    },
    "GER_andreas_hermes": {
      "id": "GER_andreas_hermes",
      "char": "GER_andreas_hermes",
      "name": "Andreas Hermes",
      "slot": "political_advisor",
      "cost": 150,
      "traits": [
        {
          "id": "GER_minister_of_agriculture",
          "name": "Minister of Food and Agriculture",
          "fx": ["Non-Combat Out of Supply Penalties -10%","Monthly population +10%","Industrial capacity factory +5%","Industrial capacity dockyard +5%"]
        }
      ],
      "req": ["we have completed Monarchist Sentiment","we have not completed Remilitarize the Rhineland and Start The Proletarian Revolution"]
    },
    "GER_dietrich_bonhoeffer": {
      "id": "GER_dietrich_bonhoeffer",
      "char": "GER_dietrich_bonhoeffer",
      "name": "Dietrich Bonhoeffer",
      "slot": "political_advisor",
      "cost": 150,
      "traits": [
        {
          "id": "GER_influential_pastor",
          "name": "Influential Pastor",
          "fx": [
            "Political Power Gain +5%",
            "Party popularity stability factor +10%",
            "Resistance Growth Speed -3%",
            "Daily Fascism Support -5%",
            "Daily Communism Support -3%",
            "Acceptance of Communist Diplomacy -25",
            "Acceptance of Fascist Diplomacy -50"
          ]
        }
      ],
      "req": ["we are non-aligned or we are democratic","we have not completed Remilitarize the Rhineland"]
    },
    "GER_walter_ulbricht": {
      "id": "GER_walter_ulbricht",
      "char": "GER_walter_ulbricht",
      "name": "Walter Ulbricht",
      "slot": "political_advisor",
      "cost": 150,
      "traits": [
        {
          "id": "GER_inflexible_communist_organizer",
          "name": "Inflexible Communist Organizer",
          "fx": ["Daily Communism Support +5%","Political Power Gain +10%"]
        }
      ],
      "req": [
        "we have completed Start The Proletarian Revolution or we are communist",
        "we have not completed Revive the Kaiserreich",
        "we are not fascist and we have not completed Remilitarize the Rhineland and we have not completed Revive the Kaiserreich"
      ]
    },
    "GER_wilhelm_zaisser": {
      "id": "GER_wilhelm_zaisser",
      "char": "GER_wilhelm_zaisser",
      "name": "Wilhelm Zaisser",
      "slot": "political_advisor",
      "cost": 150,
      "traits": [{"id":"GER_intelligence_coordinator","name":"Intelligence Coordinator","fx":["Operative slots +1","Agency upgrade time -20%"]}],
      "req": ["we have completed Formalize the Intelligence Wing","we have not completed Remilitarize the Rhineland and Monarchist Sentiment"]
    },
    "GER_otto_ruhle": {
      "id": "GER_otto_ruhle",
      "char": "GER_otto_ruhle",
      "name": "Otto Rühle",
      "slot": "political_advisor",
      "cost": 150,
      "traits": [
        {
          "id": "marxist_philosopher",
          "name": "Marxist Philosopher",
          "fx": ["Daily Communism Support +5%","Political Power Gain +10%","Research Speed +5%"]
        }
      ],
      "req": ["we have completed Legacy of the Spartacus League","we have not completed Remilitarize the Rhineland and Monarchist Sentiment"]
    },
    "GER_hermann_duncker": {
      "id": "GER_hermann_duncker",
      "char": "GER_hermann_duncker",
      "name": "Hermann Duncker",
      "slot": "political_advisor",
      "cost": 150,
      "traits": [
        {
          "id": "GER_workers_educator",
          "name": "Worker's Educator",
          "fx": ["Compliance gain +5%","Production Efficiency growth +5%","Production Efficiency Retention +5%"]
        }
      ],
      "req": [
        "we are communist",
        "we are not fascist and we have not completed Remilitarize the Rhineland and we are not non-aligned and we are not democratic and we have not completed Monarchist Sentiment"
      ]
    },
    "GER_august_thalheimer": {
      "id": "GER_august_thalheimer",
      "char": "GER_august_thalheimer",
      "name": "August Thalheimer",
      "slot": "political_advisor",
      "cost": 150,
      "traits": [
        {
          "id": "GER_stakhonovite_collectivist1",
          "name": "Stakhonovite Collectivist",
          "fx": ["Industrial capacity factory +5%","Resource Gain Efficiency +5%","Lack of Resources Penalty -5%"]
        }
      ],
      "req": [
        "we are communist",
        "we are not fascist and we have not completed Remilitarize the Rhineland and we are not non-aligned and we are not democratic and we have not completed Monarchist Sentiment"
      ]
    },
    "GER_bernhard_bastlein": {
      "id": "GER_bernhard_bastlein",
      "char": "GER_bernhard_bastlein",
      "name": "Bernhard Bästlein",
      "slot": "political_advisor",
      "cost": 150,
      "traits": [
        {
          "id": "GER_seasoned_socialist_resistance_fighter",
          "name": "Socialist Resistance Fighter",
          "fx": ["Army core defence factor +5%","Recruitable Population +5%"]
        }
      ],
      "req": ["we have completed Start The Proletarian Revolution","we have not completed Remilitarize the Rhineland and Monarchist Sentiment"]
    }
  },
  "categories": {
    "propaganda_efforts": {"id":"propaganda_efforts","name":"Propaganda Efforts"},
    "war_measures": {"id":"war_measures","name":"War Measures"},
    "operations": {"id":"operations","name":"Operations"},
    "foreign_support": {"id":"foreign_support","name":"Support China"},
    "foreign_politics": {"id":"foreign_politics","name":"Foreign Policy"},
    "political_actions": {"id":"political_actions","name":"Political Actions"},
    "foreign_influence": {"id":"foreign_influence","name":"Foreign Influence"},
    "fascism_on_the_rise": {"id":"fascism_on_the_rise","name":"Fascism on the Rise"},
    "crisis": {"id":"crisis","name":"Crisis"},
    "demobilization": {"id":"demobilization","name":"Demobilization"},
    "economy_decisions": {"id":"economy_decisions","name":"Economic Policy"},
    "prospect_for_resources": {"id":"prospect_for_resources","name":"Prospect for Resources"},
    "special_projects": {"id":"special_projects","name":"Heavy Industrial Projects"},
    "governments_in_exile": {"id":"governments_in_exile","name":"Governments In Exile"},
    "category_exile_forces": {"id":"category_exile_forces","name":"Exile Forces"},
    "lar_local_recruitment": {"id":"lar_local_recruitment","name":"Local Agent Recruitment"},
    "form_european_union_category": {"id":"form_european_union_category","name":"Realize European Unity"},
    "form_hre_category": {"id":"form_hre_category","name":"Revive the Holy Roman Empire"},
    "form_greater_german_reich_category": {"id":"form_greater_german_reich_category","name":"The Greater Germanic Reich of the German Nation"},
    "form_greater_german_state_category": {"id":"form_greater_german_state_category","name":"The New Proletarian Order"},
    "form_andalusia_category": {"id":"form_andalusia_category","name":"The Moorish Restoration"},
    "form_turan_category": {"id":"form_turan_category","name":"Form the Turanian Empire"},
    "african_union_category": {"id":"african_union_category","name":"Organization of African Unity"},
    "GER_mefo_bills_category": {"id":"GER_mefo_bills_category","name":"MEFO Bills"},
    "GER_seize_gold_reserves_cat": {"id":"GER_seize_gold_reserves_cat","name":"Seize Gold Reserves"},
    "GER_operational_planning_category": {"id":"GER_operational_planning_category","name":"Operational Planning"},
    "GER_price_controls_cat": {"id":"GER_price_controls_cat","name":"Price Control Measures"},
    "GER_case_anton_category": {"id":"GER_case_anton_category","name":"Case Anton"},
    "GER_the_fading_eagle_category": {"id":"GER_the_fading_eagle_category","name":"The Fading Eagle"},
    "GER_reichskommissariats": {"id":"GER_reichskommissariats","name":"The Reichskommissariats"},
    "GER_military_buildup": {"id":"GER_military_buildup","name":"Military Buildup"},
    "GER_aid_hun_rom_democratic_civil_war": {"id":"GER_aid_hun_rom_democratic_civil_war","name":"Fledgling Democracies"},
    "GER_hilfskreuzer_cat": {"id":"GER_hilfskreuzer_cat","name":"Hilfskreuzer"},
    "GER_fortify_the_vaterland_cat": {"id":"GER_fortify_the_vaterland_cat","name":"Fortify the Vaterland"},
    "GER_middle_eastern_trade_cat": {"id":"GER_middle_eastern_trade_cat","name":"Middle-Eastern Trade Negotiations"},
    "GER_influence_countries_cat": {"id":"GER_influence_countries_cat","name":"Extend Influence"},
    "GER_invite_to_faction_cat": {"id":"GER_invite_to_faction_cat","name":"Expanding our Alliance"},
    "GER_reich_labor_service_cat": {"id":"GER_reich_labor_service_cat","name":"Reich Labor Service Initiative"},
    "GER_integration_of_puppet_economies_dec_cat": {"id":"GER_integration_of_puppet_economies_dec_cat","name":"Integration of Puppet Economies"},
    "GER_south_east_asian_natural_wealth_cat": {"id":"GER_south_east_asian_natural_wealth_cat","name":"South-East Asian Natural Wealth"},
    "GER_a_fourth_silesian_uprising_cat": {"id":"GER_a_fourth_silesian_uprising_cat","name":"The Fourth Silesian Uprising"},
    "GER_rebuild_the_nation_cat": {"id":"GER_rebuild_the_nation_cat","name":"Rebuilding the Nation"},
    "GER_weltpolitik_cat": {"id":"GER_weltpolitik_cat","name":"Weltpolitik"},
    "GER_realpolitik_cat": {"id":"GER_realpolitik_cat","name":"Realpolitik"},
    "GER_mitteleuropa_allied_trade_cat": {"id":"GER_mitteleuropa_allied_trade_cat","name":"Allied Trade Agreements"},
    "GER_mitteleuropa_economic_integration_cat": {"id":"GER_mitteleuropa_economic_integration_cat","name":"Economic Integration"},
    "GER_monroe_doctrine_cat": {"id":"GER_monroe_doctrine_cat","name":"Reinforcing the Monroe Doctrine"},
    "GER_proletarian_revolution_cat": {"id":"GER_proletarian_revolution_cat","name":"The Proletarian Revolution"},
    "GER_volkskommissariats_cat": {"id":"GER_volkskommissariats_cat","name":"Volkskommissariats"},
    "GER_spreading_the_red_flame_cat": {"id":"GER_spreading_the_red_flame_cat","name":"Spreading the Flames of Revolution"},
    "GER_industrial_relocation_cat": {"id":"GER_industrial_relocation_cat","name":"Industrial Relocation"},
    "GER_anti_colonialism_category": {"id":"GER_anti_colonialism_category","name":"Anti-Colonialism"}
  },
  "decisions": {
    "invite_to_ACB": {"id":"invite_to_ACB","name":"Invite to African Central Bank","cat":"african_union_category","cost":25,"days":5,"targeted":true,"fx":[]},
    "invite_to_exec_council": {"id":"invite_to_exec_council","name":"Invite to Executive Council","cat":"african_union_category","cost":50,"days":5,"targeted":true,"fx":[]},
    "integrate_into_org": {
      "id": "integrate_into_org",
      "name": "Integrate into African Union",
      "cat": "african_union_category",
      "days": 10,
      "once": true,
      "targeted": true,
      "fx": ["-2% stability","When it ends: Effects if they accept","When it ends: +150 political power"]
    },
    "invite_to_org_alliance": {
      "id": "invite_to_org_alliance",
      "name": "Invite to Mutual Defense Agreement",
      "cat": "african_union_category",
      "cost": 25,
      "days": 5,
      "targeted": true,
      "fx": []
    },
    "leave_org_of_african_unity": {
      "id": "leave_org_of_african_unity",
      "name": "Leave the Organization of African Unity",
      "cat": "african_union_category",
      "cost": 150,
      "days": 30,
      "once": true,
      "fx": []
    },
    "threaten_member_state": {
      "id": "threaten_member_state",
      "name": "Intimidate leadership",
      "cat": "african_union_category",
      "cost": 25,
      "days": 60,
      "targeted": true,
      "fx": ["The leadership of the intimidated country will be more likely to accept integration proposals for the 60 days this decision is active"]
    },
    "GER_cancel_mefos": {"id":"GER_cancel_mefos","name":"Cancel MEFO Bills","cat":"GER_mefo_bills_category","cost":0,"fx":[]},
    "GER_seize_gold_reserves": {
      "id": "GER_seize_gold_reserves",
      "name": "Seize Gold Reserves",
      "cat": "GER_seize_gold_reserves_cat",
      "cost": 25,
      "once": true,
      "targeted": true,
      "req": ["Economy of Conquest has Consumer Goods Factories factor higher than 0.0%"],
      "fx": ["Modify Economy of Conquest by","Consumer Goods Factories factor: occupied_state_num_factory"]
    },
    "GER_seize_russian_citites_gold_reserves": {
      "id": "GER_seize_russian_citites_gold_reserves",
      "name": "Seize the Gold Reserve of",
      "cat": "GER_seize_gold_reserves_cat",
      "cost": 10,
      "once": true,
      "targeted": true,
      "fx": []
    },
    "GER_operational_planning": {
      "id": "GER_operational_planning",
      "name": "Campaign Instructions against",
      "cat": "GER_operational_planning_category",
      "days": 365,
      "targeted": true,
      "req": ["we are at war with us or we have a war goal against us"],
      "fx": []
    },
    "GER_operational_planning_africa": {
      "id": "GER_operational_planning_africa",
      "name": "African Campaign Instructions against",
      "cat": "GER_operational_planning_category",
      "days": 365,
      "once": true,
      "targeted": true,
      "req": ["we are at war with us or we have a war goal against us"],
      "fx": []
    },
    "GER_guns_before_butter": {
      "id": "GER_guns_before_butter",
      "name": "Launch Guns before Butter Campaign",
      "cat": "GER_price_controls_cat",
      "cost": 30,
      "once": true,
      "fx": ["Consumer Goods Factories factor: -5%","+2% war support"]
    },
    "GER_arbeit_und_brot": {
      "id": "GER_arbeit_und_brot",
      "name": "Launch Arbeit und Brot Campaign",
      "cat": "GER_price_controls_cat",
      "cost": 30,
      "once": true,
      "fx": ["Consumer Goods Factories factor: -5%","+2% ruling party popularity"]
    },
    "GER_collect_scrap_metal": {
      "id": "GER_collect_scrap_metal",
      "name": "Collect Scrap Metal",
      "cat": "GER_price_controls_cat",
      "cost": 30,
      "once": true,
      "fx": ["Consumer Goods Factories factor: -5%","Spirit for 90 days: Collect scrap metal (Steel +10)"]
    },
    "GER_ersatz_material": {
      "id": "GER_ersatz_material",
      "name": "Develop Ersatz Material",
      "cat": "GER_price_controls_cat",
      "cost": 30,
      "once": true,
      "req": ["we have completed Coal Liquefaction"],
      "fx": ["Consumer Goods Factories factor: -5%"]
    },
    "GER_import_tariffs": {
      "id": "GER_import_tariffs",
      "name": "Import Tariffs",
      "cat": "GER_price_controls_cat",
      "cost": 15,
      "once": true,
      "fx": ["Consumer Goods Factories factor: -15%","Spirit for 365 days: Import tariffs (Trade extra resource per factory -100%)"]
    },
    "GER_implement_rations": {
      "id": "GER_implement_rations",
      "name": "Implement Rations",
      "cat": "GER_price_controls_cat",
      "cost": 15,
      "once": true,
      "fx": ["Consumer Goods Factories factor: -10%","-2% stability"]
    },
    "GER_implement_wage_controls": {
      "id": "GER_implement_wage_controls",
      "name": "Implement Wage Controls",
      "cat": "GER_price_controls_cat",
      "cost": 15,
      "once": true,
      "fx": ["Consumer Goods Factories factor: -10%","-2% stability"]
    },
    "GER_exploit_the_gombos_treaty": {
      "id": "GER_exploit_the_gombos_treaty",
      "name": "Exploit the Gömbös Trade Treaty",
      "cat": "GER_price_controls_cat",
      "cost": 30,
      "once": true,
      "req": ["Kingdom of Hungary has the Gömbös Trade Treaty spirit and Kingdom of Hungary is not in a faction with us"],
      "fx": [
        "Consumer Goods Factories factor: -15%",
        "This will likely lock us out of any potential alliance with Hungary",
        "Kingdom of Hungary, may answer: their opinion of us -100; they: Removes spirit: Gömbös Trade Treaty",
        "Kingdom of Hungary: opinion of us -100",
        "Kingdom of Hungary: Removes spirit: Gömbös Trade Treaty"
      ]
    },
    "GER_construct_the_westwall": {
      "id": "GER_construct_the_westwall",
      "name": "Construct the Westwall",
      "cat": "GER_fortify_the_vaterland_cat",
      "days": 90,
      "once": true,
      "req": ["Rhineland is fully controlled by us","Moselland is fully controlled by us","Baden is fully controlled by us"],
      "fx": ["While active: Civilian Factory Use +200%"]
    },
    "GER_construct_the_ostwall": {
      "id": "GER_construct_the_ostwall",
      "name": "Construct the Ostwall",
      "cat": "GER_fortify_the_vaterland_cat",
      "days": 180,
      "once": true,
      "fx": ["While active: Civilian Factory Use +500%","When it ends: +1 land fort in every such state"]
    },
    "GER_construct_the_north_atlantikwall": {
      "id": "GER_construct_the_north_atlantikwall",
      "name": "Construct the North Atlantikwall",
      "cat": "GER_fortify_the_vaterland_cat",
      "days": 90,
      "once": true,
      "fx": ["While active: Civilian Factory Use +300%","When it ends: +1 coastal fort in every such state"]
    },
    "GER_construct_the_central_atlantikwall": {
      "id": "GER_construct_the_central_atlantikwall",
      "name": "Construct the Central Atlantikwall",
      "cat": "GER_fortify_the_vaterland_cat",
      "days": 90,
      "once": true,
      "fx": ["While active: Civilian Factory Use +300%","When it ends: +1 coastal fort in every such state"]
    },
    "GER_construct_the_west_atlantikwall": {
      "id": "GER_construct_the_west_atlantikwall",
      "name": "Construct the West Atlantikwall",
      "cat": "GER_fortify_the_vaterland_cat",
      "days": 90,
      "once": true,
      "fx": ["While active: Civilian Factory Use +300%","When it ends: +1 coastal fort in every such state"]
    },
    "GER_construct_the_south_atlantikwall": {
      "id": "GER_construct_the_south_atlantikwall",
      "name": "Construct the South Atlantikwall",
      "cat": "GER_fortify_the_vaterland_cat",
      "days": 90,
      "once": true,
      "fx": ["While active: Civilian Factory Use +300%","When it ends: +1 coastal fort in every such state"]
    },
    "GER_construct_the_alpenwall": {
      "id": "GER_construct_the_alpenwall",
      "name": "Construct the Alpenwall",
      "cat": "GER_fortify_the_vaterland_cat",
      "days": 90,
      "once": true,
      "fx": ["While active: Civilian Factory Use +400%","When it ends: +1 land fort in every such state"]
    },
    "GER_refit_convoys_to_cruisers": {"id":"GER_refit_convoys_to_cruisers","name":"Refit Merchant Ships to Merchant Raiders","cat":"GER_hilfskreuzer_cat","cost":25,"days":25,"fx":[]},
    "GER_case_anton": {
      "id": "GER_case_anton",
      "name": "Execute Case Anton",
      "cat": "GER_case_anton_category",
      "cost": 50,
      "once": true,
      "req": ["we are at war","we are fascist","Italy owns Savoy"],
      "fx": [
        "Annexes Vichy France in 7 days and seizes the French fleet. France will be able to scuttle their fleet unless German troops are in Toulon within 2 days!"
      ]
    },
    "GER_reichskommissariat_norwegen": {
      "id": "GER_reichskommissariat_norwegen",
      "name": "Reichskommissariat Norwegen",
      "cat": "GER_reichskommissariats",
      "cost": 25,
      "once": true,
      "req": ["we are not a subject","Norway has not completed Quisling's Coup","we have completed Heed von Neurath's Concerns or Reorganize the Wehrmacht"],
      "fx": [
        "Every required state other than 110 comes under the control of Reichskommissariat Norwegen",
        "Makes Reichskommissariat Norwegen a Integrated Puppet"
      ]
    },
    "GER_reichskommissariat_niederlande": {
      "id": "GER_reichskommissariat_niederlande",
      "name": "Reichskommissariat Niederlande",
      "cat": "GER_reichskommissariats",
      "cost": 25,
      "once": true,
      "req": ["we are not a subject","we have completed Heed von Neurath's Concerns or Reorganize the Wehrmacht"],
      "fx": ["Makes Reichskommissariat Niederlande a Integrated Puppet"]
    },
    "GER_reichskommissariat_belgien_nordfrankreich": {
      "id": "GER_reichskommissariat_belgien_nordfrankreich",
      "name": "Reichskommissariat Belgien-Nordfrankreich",
      "cat": "GER_reichskommissariats",
      "cost": 25,
      "once": true,
      "req": ["we are not a subject","we have completed Heed von Neurath's Concerns or Reorganize the Wehrmacht"],
      "fx": ["Makes Reichskommissariat Belgien-Nordfrankreich a Integrated Puppet"]
    },
    "GER_reichskommissariat_ostland": {
      "id": "GER_reichskommissariat_ostland",
      "name": "Reichskommissariat Ostland",
      "cat": "GER_reichskommissariats",
      "cost": 25,
      "once": true,
      "req": ["we are not a subject","we have completed Heed von Neurath's Concerns or Reorganize the Wehrmacht"],
      "fx": [
        "Every required state other than 808 comes under the control of Reichskommissariat Ostland",
        "Makes Reichskommissariat Ostland a Integrated Puppet"
      ]
    },
    "GER_reichskommissariat_ukraine": {
      "id": "GER_reichskommissariat_ukraine",
      "name": "Reichskommissariat Ukraine",
      "cat": "GER_reichskommissariats",
      "cost": 25,
      "once": true,
      "req": ["we are not a subject","we have completed Heed von Neurath's Concerns or Reorganize the Wehrmacht"],
      "fx": [
        "Every required state other than 202 comes under the control of Reichskommissariat Ukraine",
        "Makes Reichskommissariat Ukraine a Integrated Puppet"
      ]
    },
    "GER_expand_ukraine_adminsitrative_area": {
      "id": "GER_expand_ukraine_adminsitrative_area",
      "name": "Expand the Ukraine Administrative Area",
      "cat": "GER_reichskommissariats",
      "cost": 10,
      "once": true,
      "req": ["we are not a subject","we have completed Heed von Neurath's Concerns or Reorganize the Wehrmacht"],
      "fx": ["Every state in the Transnistria interest zone comes under the control of Reichskommissariat Ukraine"]
    },
    "GER_further_expand_ukraine_adminsitrative_area": {
      "id": "GER_further_expand_ukraine_adminsitrative_area",
      "name": "Expand the Ukraine Administrative Area Further",
      "cat": "GER_reichskommissariats",
      "cost": 10,
      "once": true,
      "req": [
        "we are not a subject",
        "Reichskommissariat Balkan no longer exists",
        "we have completed Heed von Neurath's Concerns or Reorganize the Wehrmacht"
      ],
      "fx": ["Every state in the Bessarabia interest zone comes under the control of Reichskommissariat Ukraine"]
    },
    "GER_reichskommissariat_kaukasien": {
      "id": "GER_reichskommissariat_kaukasien",
      "name": "Reichskommissariat Kaukasien",
      "cat": "GER_reichskommissariats",
      "cost": 25,
      "once": true,
      "req": [
        "we have completed Uplift the Rosenberg Office",
        "we are not a subject",
        "we have completed Heed von Neurath's Concerns or Reorganize the Wehrmacht"
      ],
      "fx": [
        "Every required state other than 231 comes under the control of Reichskommissariat Kaukasien",
        "Makes Reichskommissariat Kaukasien a Integrated Puppet"
      ]
    },
    "GER_reichskommissariat_turkestan": {
      "id": "GER_reichskommissariat_turkestan",
      "name": "Reichskommissariat Turkestan",
      "cat": "GER_reichskommissariats",
      "cost": 25,
      "once": true,
      "req": ["we are not a subject","we have completed Heed von Neurath's Concerns or Reorganize the Wehrmacht"],
      "fx": [
        "Every required state other than 405 comes under the control of Reichskommissariat Turkestan",
        "Makes Reichskommissariat Turkestan a Integrated Puppet"
      ]
    },
    "GER_reichskommissariat_moskowien": {
      "id": "GER_reichskommissariat_moskowien",
      "name": "Reichskommissariat Moskowien",
      "cat": "GER_reichskommissariats",
      "cost": 25,
      "once": true,
      "req": ["we are not a subject","we have completed Heed von Neurath's Concerns or Reorganize the Wehrmacht"],
      "fx": [
        "Every required state other than 219 comes under the control of Reichskommissariat Moskowien",
        "Makes Reichskommissariat Moskowien a Integrated Puppet"
      ]
    },
    "GER_the_fate_of_the_volga_german_autonomous_area": {
      "id": "GER_the_fate_of_the_volga_german_autonomous_area",
      "name": "The Fate of the Volga German Colony",
      "cat": "GER_reichskommissariats",
      "cost": 15,
      "once": true,
      "req": ["we have completed The Triumphant Will or Soviet Union no longer exists"],
      "fx": []
    },
    "GER_send_wehrbauern_to_the_rks": {
      "id": "GER_send_wehrbauern_to_the_rks",
      "name": "Send Wehrbauern to the Eastern European Reichskommissariats",
      "cat": "GER_reichskommissariats",
      "cost": 30,
      "again": 91,
      "req": [
        "Reichskommissariat Moskowien exists or Reichskommissariat Ostland exists or Reichskommissariat Ukraine exists or Reichskommissariat Turkestan exists or Reichskommissariat Kaukasien exists or Reichskommissariat Ural exists"
      ],
      "fx": [
        "-2,500 manpower",
        "Reichskommissariat Moskowien: +2,500 manpower",
        "Reichskommissariat Moskowien: +15 army XP",
        "Reichskommissariat Ostland: +2,500 manpower",
        "Reichskommissariat Ostland: +15 army XP",
        "Reichskommissariat Ukraine: +2,500 manpower",
        "Reichskommissariat Ukraine: +15 army XP",
        "Reichskommissariat Turkestan: +2,500 manpower",
        "Reichskommissariat Turkestan: +15 army XP",
        "Reichskommissariat Kaukasien: +2,500 manpower",
        "Reichskommissariat Kaukasien: +15 army XP",
        "Reichskommissariat Ural: +2,500 manpower",
        "Reichskommissariat Ural: +15 army XP"
      ]
    },
    "GER_the_fate_of_the_south_ural_area": {
      "id": "GER_the_fate_of_the_south_ural_area",
      "name": "The Fate of the South Urals Region",
      "cat": "GER_reichskommissariats",
      "cost": 15,
      "once": true,
      "req": ["we are not a subject","we have completed Heed von Neurath's Concerns or Reorganize the Wehrmacht"],
      "fx": []
    },
    "GER_the_fate_of_the_north_ural_area": {
      "id": "GER_the_fate_of_the_north_ural_area",
      "name": "Hand the North Urals Administration to Moskowien",
      "cat": "GER_reichskommissariats",
      "cost": 20,
      "once": true,
      "req": ["we are not a subject","we have completed Heed von Neurath's Concerns or Reorganize the Wehrmacht"],
      "fx": ["Every state in the North Ural interest zone comes under the control of Reichskommissariat Moskowien"]
    },
    "GER_the_fate_of_the_west_yenisei_area": {
      "id": "GER_the_fate_of_the_west_yenisei_area",
      "name": "Hand the West Yenisei Administration over to Moskowien",
      "cat": "GER_reichskommissariats",
      "cost": 20,
      "once": true,
      "req": ["we are not a subject","we have completed Heed von Neurath's Concerns or Reorganize the Wehrmacht"],
      "fx": ["Every state in the West Yenisei interest zone comes under the control of Reichskommissariat Moskowien"]
    },
    "GER_the_fate_of_greater_finland": {
      "id": "GER_the_fate_of_greater_finland",
      "name": "The Fate of Karelia",
      "cat": "GER_reichskommissariats",
      "cost": 25,
      "once": true,
      "req": ["we are not a subject","we have completed The Triumphant Will or Soviet Union no longer exists"],
      "fx": []
    },
    "GER_generalgouvernement": {
      "id": "GER_generalgouvernement",
      "name": "Establish the Generalgouvernement",
      "cat": "GER_reichskommissariats",
      "cost": 30,
      "once": true,
      "req": ["we are not a subject","we have completed Reassert Eastern Claims"],
      "fx": ["Makes Generalgouvernement a Integrated Puppet"]
    },
    "GER_expand_generalgouvernement_adminsitrative_area": {
      "id": "GER_expand_generalgouvernement_adminsitrative_area",
      "name": "Expand the Generalgouvernement Administrative Area",
      "cat": "GER_reichskommissariats",
      "cost": 10,
      "once": true,
      "req": ["we are not a subject","we have completed Heed von Neurath's Concerns or Reorganize the Wehrmacht"],
      "fx": ["Every state in the Austrian Galicia interest zone comes under the control of Generalgouvernement"]
    },
    "GER_reichsprotektorat_bohemia_moravia": {
      "id": "GER_reichsprotektorat_bohemia_moravia",
      "name": "Reichsprotektorat Böhmen und Mähren",
      "cat": "GER_reichskommissariats",
      "cost": 25,
      "once": true,
      "req": ["we are not a subject","we have completed Heed von Neurath's Concerns or Reorganize the Wehrmacht"],
      "fx": ["Makes Protektorat Böhmen-Mähren a Reichsprotectorate"]
    },
    "GER_reichskommissariat_iberien": {
      "id": "GER_reichskommissariat_iberien",
      "name": "Reichskommissariat Iberien",
      "cat": "GER_reichskommissariats",
      "cost": 30,
      "once": true,
      "req": ["we are not a subject","we have completed Heed von Neurath's Concerns or Reorganize the Wehrmacht"],
      "fx": ["Makes Reichskommissariat Iberien a Integrated Puppet"]
    },
    "GER_reichskommissariat_balkan": {
      "id": "GER_reichskommissariat_balkan",
      "name": "Reichskommissariat Balkan",
      "cat": "GER_reichskommissariats",
      "cost": 30,
      "once": true,
      "req": ["we are not a subject","we have completed Heed von Neurath's Concerns or Reorganize the Wehrmacht"],
      "fx": [
        "Every required state other than 109 comes under the control of Reichskommissariat Balkan",
        "Makes Reichskommissariat Balkan a Integrated Puppet"
      ]
    },
    "GER_expand_rkc_adminsitrative_area": {
      "id": "GER_expand_rkc_adminsitrative_area",
      "name": "Expand the Balkan Administrative Area",
      "cat": "GER_reichskommissariats",
      "cost": 10,
      "once": true,
      "req": ["we are not a subject","we have completed Heed von Neurath's Concerns or Reorganize the Wehrmacht"],
      "fx": ["The Zadar interest zone comes under the control of Reichskommissariat Balkan"]
    },
    "GER_reichskommissariat_grossbritannien": {
      "id": "GER_reichskommissariat_grossbritannien",
      "name": "Reichskommissariat Großbritannien",
      "cat": "GER_reichskommissariats",
      "cost": 25,
      "once": true,
      "req": ["we are not a subject","we have completed Heed von Neurath's Concerns or Reorganize the Wehrmacht"],
      "fx": [
        "Every required state other than 126 comes under the control of Reichskommissariat Großbritannien",
        "Makes Reichskommissariat Großbritannien a Integrated Puppet"
      ]
    },
    "GER_the_fate_of_the_greek_area": {
      "id": "GER_the_fate_of_the_greek_area",
      "name": "Hand the Greek Administration to Reichskommissariat Balkan",
      "cat": "GER_reichskommissariats",
      "cost": 15,
      "once": true,
      "req": ["we are not a subject","we have completed Heed von Neurath's Concerns or Reorganize the Wehrmacht"],
      "fx": ["Every state in the Mainland Greek interest zone comes under the control of Reichskommissariat Balkan"]
    },
    "GER_the_fate_of_the_hungarian_area": {
      "id": "GER_the_fate_of_the_hungarian_area",
      "name": "Hand the Hungarian Administration to Reichskommissariat Balkan",
      "cat": "GER_reichskommissariats",
      "cost": 15,
      "once": true,
      "req": ["we are not a subject","we have completed Heed von Neurath's Concerns or Reorganize the Wehrmacht"],
      "fx": ["Every state in the Greater Hungarian interest zone comes under the control of Reichskommissariat Balkan"]
    },
    "GER_the_fate_of_slovakia": {
      "id": "GER_the_fate_of_slovakia",
      "name": "The Fate of Slovakia",
      "cat": "GER_reichskommissariats",
      "cost": 25,
      "once": true,
      "req": [
        "we are not a subject",
        "Reichskommissariat Balkan exists or we have completed The Triumphant Will or (we have completed Reintegrate Luxemburg and Alsace-Lorraine) or Slovakia no longer exists"
      ],
      "fx": []
    },
    "GER_the_fate_of_the_irish_area": {
      "id": "GER_the_fate_of_the_irish_area",
      "name": "Hand the Irish Administration to Reichskommissariat Großbritannien",
      "cat": "GER_reichskommissariats",
      "cost": 15,
      "once": true,
      "req": ["we are not a subject","we have completed Heed von Neurath's Concerns or Reorganize the Wehrmacht"],
      "fx": ["Every state in the Irish interest zone comes under the control of Reichskommissariat Großbritannien"]
    },
    "GER_reichskommissariat_nordafrika": {
      "id": "GER_reichskommissariat_nordafrika",
      "name": "Reichskommissariat Nordafrika",
      "cat": "GER_reichskommissariats",
      "cost": 30,
      "once": true,
      "req": ["we are not a subject","we have completed Heed von Neurath's Concerns or Reorganize the Wehrmacht"],
      "fx": [
        "Every required state other than 458 comes under the control of Reichskommissariat Nordafrika",
        "Makes Reichskommissariat Nordafrika a Integrated Puppet",
        "Reichskommissariat Nordafrika: New spirit: Reichskommissariat Zivilverwaltung (Resource Gain Efficiency +25%, Industrial capacity factory +10%, Construction Speed +10%, Lack of Resources Penalty -10%, +4 more)"
      ]
    },
    "GER_reichskommissariat_mittelafrika": {
      "id": "GER_reichskommissariat_mittelafrika",
      "name": "Reichskommissariat Mittelafrika",
      "cat": "GER_reichskommissariats",
      "cost": 30,
      "once": true,
      "req": ["we are not a subject","we have completed Heed von Neurath's Concerns or Reorganize the Wehrmacht"],
      "fx": [
        "Every required state other than 546 comes under the control of Reichskommissariat Mittelafrika",
        "Makes Reichskommissariat Mittelafrika a Integrated Puppet"
      ]
    },
    "GER_the_fate_of_the_saf_area": {
      "id": "GER_the_fate_of_the_saf_area",
      "name": "Hand the South African Administration to Reichskommissariat Mittelafrika",
      "cat": "GER_reichskommissariats",
      "cost": 10,
      "once": true,
      "req": ["we are not a subject"],
      "fx": ["Every state in the South African interest zone comes under the control of Reichskommissariat Mittelafrika"]
    },
    "GER_reichskommissariat_klein_venedig": {
      "id": "GER_reichskommissariat_klein_venedig",
      "name": "Reichskommissariat Klein-Venedig",
      "cat": "GER_reichskommissariats",
      "cost": 25,
      "once": true,
      "req": ["we are not a subject","we have completed Heed von Neurath's Concerns or Reorganize the Wehrmacht"],
      "fx": [
        "Every required state other than 489 comes under the control of Reichskommissariat Klein-Venedig",
        "Makes Reichskommissariat Klein-Venedig a Integrated Puppet"
      ]
    },
    "GER_reichskommissariat_anden": {
      "id": "GER_reichskommissariat_anden",
      "name": "Reichskommissariat Anden",
      "cat": "GER_reichskommissariats",
      "cost": 25,
      "once": true,
      "req": ["we are not a subject","we have completed Heed von Neurath's Concerns or Reorganize the Wehrmacht"],
      "fx": ["Every required state other than 494 comes under the control of Reichskommissariat Anden","Makes Reichskommissariat Anden a Integrated Puppet"]
    },
    "GER_reichskommissariat_kolumbus": {
      "id": "GER_reichskommissariat_kolumbus",
      "name": "Reichskommissariat Kolumbus",
      "cat": "GER_reichskommissariats",
      "cost": 25,
      "once": true,
      "req": ["we are not a subject","we have completed Heed von Neurath's Concerns or Reorganize the Wehrmacht"],
      "fx": [
        "Every required state other than 695 comes under the control of Reichskommissariat Kolumbus",
        "Makes Reichskommissariat Kolumbus a Integrated Puppet"
      ]
    },
    "GER_reichskommissariat_nordamerika": {
      "id": "GER_reichskommissariat_nordamerika",
      "name": "Reichskommissariat Nordamerika",
      "cat": "GER_reichskommissariats",
      "cost": 30,
      "once": true,
      "req": ["we are not a subject","we have completed Heed von Neurath's Concerns or Reorganize the Wehrmacht"],
      "fx": [
        "Every required state other than 395 comes under the control of Reichskommissariat Nordamerika",
        "Makes Reichskommissariat Nordamerika a Integrated Puppet"
      ]
    },
    "GER_the_fate_of_greenland_and_nfl": {
      "id": "GER_the_fate_of_greenland_and_nfl",
      "name": "Expand the Nordamerika Administrative Area",
      "cat": "GER_reichskommissariats",
      "cost": 10,
      "once": true,
      "req": ["we are not a subject"],
      "fx": ["Every state in the Newfoundland interest zone comes under the control of Reichskommissariat Nordamerika"]
    },
    "GER_the_fate_of_west_coast_america": {
      "id": "GER_the_fate_of_west_coast_america",
      "name": "The Fate of West-Coast America",
      "cat": "GER_reichskommissariats",
      "cost": 25,
      "once": true,
      "req": ["we are not a subject","we have completed Establish Protectorates in America or United States no longer exists"],
      "fx": []
    },
    "GER_the_fate_of_the_east_yenisei_area": {
      "id": "GER_the_fate_of_the_east_yenisei_area",
      "name": "Hand the East Yenisei Administration over to Moskowien",
      "cat": "GER_reichskommissariats",
      "cost": 20,
      "once": true,
      "req": ["we are not a subject","we have completed Create Asian Reichskommisariats"],
      "fx": ["Every state in the East Yenisei interest zone comes under the control of Reichskommissariat Moskowien"]
    },
    "GER_the_fate_of_east_turkestan_area": {
      "id": "GER_the_fate_of_east_turkestan_area",
      "name": "Hand the East Turkestan Administration over to Turkestan",
      "cat": "GER_reichskommissariats",
      "cost": 20,
      "once": true,
      "req": ["we are not a subject","we have completed Create Asian Reichskommisariats"],
      "fx": ["Every state in the East Turkestan interest zone comes under the control of Reichskommissariat Turkestan"]
    },
    "GER_reichskommissariat_arabien": {
      "id": "GER_reichskommissariat_arabien",
      "name": "Reichskommissariat Arabien",
      "cat": "GER_reichskommissariats",
      "cost": 30,
      "once": true,
      "req": ["we are not a subject","we have completed Heed von Neurath's Concerns or Reorganize the Wehrmacht"],
      "fx": [
        "Every required state other than 291 comes under the control of Reichskommissariat Arabien",
        "Makes Reichskommissariat Arabien a Integrated Puppet"
      ]
    },
    "GER_the_fate_of_turkey_area": {
      "id": "GER_the_fate_of_turkey_area",
      "name": "Hand the Turkish Administration over to Arabien",
      "cat": "GER_reichskommissariats",
      "cost": 20,
      "once": true,
      "req": ["we are not a subject","we have completed Create Asian Reichskommisariats"],
      "fx": ["Every state in the Turkey interest zone comes under the control of Reichskommissariat Arabien"]
    },
    "GER_the_fate_of_iran_area": {
      "id": "GER_the_fate_of_iran_area",
      "name": "Hand the Iranian Administration over to Arabien",
      "cat": "GER_reichskommissariats",
      "cost": 20,
      "once": true,
      "req": ["we are not a subject","we have completed Create Asian Reichskommisariats"],
      "fx": ["Every state in the Iran interest zone comes under the control of Reichskommissariat Arabien"]
    },
    "GER_reichskommissariat_hindustan": {
      "id": "GER_reichskommissariat_hindustan",
      "name": "Reichskommissariat Großhindustan",
      "cat": "GER_reichskommissariats",
      "cost": 35,
      "once": true,
      "req": ["we are not a subject","we have completed Heed von Neurath's Concerns or Reorganize the Wehrmacht"],
      "fx": [
        "Every required state other than 439 comes under the control of Reichskommissariat Hindustan",
        "Makes Reichskommissariat Hindustan a Integrated Puppet"
      ]
    },
    "GER_reichskommissariat_ostasien": {
      "id": "GER_reichskommissariat_ostasien",
      "name": "Reichskommissariat Ostasien",
      "cat": "GER_reichskommissariats",
      "cost": 35,
      "once": true,
      "req": ["we are not a subject","we have completed Heed von Neurath's Concerns or Reorganize the Wehrmacht"],
      "fx": [
        "Every required state other than 743 comes under the control of Reichskommissariat Ostasien",
        "Makes Reichskommissariat Ostasien a Integrated Puppet"
      ]
    },
    "GER_reichskommissariat_australasien": {
      "id": "GER_reichskommissariat_australasien",
      "name": "Reichskommissariat Australasien",
      "cat": "GER_reichskommissariats",
      "cost": 30,
      "once": true,
      "req": ["we are not a subject","we have completed Heed von Neurath's Concerns or Reorganize the Wehrmacht"],
      "fx": [
        "Every required state other than 979 comes under the control of Reichskommissariat Australasien",
        "Makes Reichskommissariat Australasien a Integrated Puppet"
      ]
    },
    "GER_democratic_shield_send_support": {
      "id": "GER_democratic_shield_send_support",
      "name": "Send Military Support to",
      "cat": "political_actions",
      "days": 35,
      "again": 365,
      "once": true,
      "targeted": true,
      "req": ["we have completed Democratic Shield","we are democratic"],
      "fx": []
    },
    "reinstate_wilhelm_iv_succession_rights": {
      "id": "reinstate_wilhelm_iv_succession_rights",
      "name": "Reinstate Prince Wilhelm's Right of Succession",
      "cat": "political_actions",
      "cost": 100,
      "once": true,
      "fx": ["-10% stability","-5% Non-Aligned popularity","The line of succession is altered"]
    },
    "modernize_the_succession_laws": {
      "id": "modernize_the_succession_laws",
      "name": "Modernize the Succession Laws",
      "cat": "political_actions",
      "cost": 150,
      "once": true,
      "fx": ["+5% stability","Women may inherit the throne"]
    },
    "recall_von_lettow_vorbeck": {
      "id": "recall_von_lettow_vorbeck",
      "name": "Recall Paul von Lettow-Vorbeck",
      "cat": "political_actions",
      "cost": 25,
      "once": true,
      "req": ["we are not in a civil war"],
      "fx": ["Paul von Lettow-Vorbeck becomes available as a level 4 General"]
    },
    "GER_sharpen_air_safety_regulations": {
      "id": "GER_sharpen_air_safety_regulations",
      "name": "Sharpen Air Safety Regulations",
      "cat": "political_actions",
      "cost": 50,
      "once": true,
      "fx": ["Spirit for 1095 days: Air Safety Regulations"]
    },
    "request_restoration_of_british_titles": {
      "id": "request_restoration_of_british_titles",
      "name": "Request Restoration of British Titles",
      "cat": "foreign_politics",
      "cost": 150,
      "once": true,
      "req": ["United Kingdom's opinion of us is above 79"],
      "fx": ["This will undoubtedly lead to unparalleled rewards"]
    },
    "GER_request_polish_war_participation": {
      "id": "GER_request_polish_war_participation",
      "name": "Demand Polish War Participation",
      "cat": "foreign_politics",
      "cost": 50,
      "once": true,
      "req": ["we are at war with Soviet Union","we are not in a faction with Poland"],
      "fx": [
        "Poland, may answer: Poland joins our faction (AI: less likely if their opinion of us is below 0 …)",
        "Poland, if they refuse: War goal against Poland (AI: less likely if their opinion of us is above 50 …)"
      ]
    },
    "GER_install_franz_anton_bach_in_hungary": {
      "id": "GER_install_franz_anton_bach_in_hungary",
      "name": "Install a Loyal Puppet Government in Hungary",
      "cat": "foreign_politics",
      "cost": 25,
      "once": true,
      "req": ["we are not in a civil war"],
      "fx": ["Some countries: -5% stability","Some countries: +50 political power","Some countries: +10,000 manpower"]
    },
    "GER_plan_z": {"id":"GER_plan_z","name":"Plan Z","cat":"GER_military_buildup","mission":1800,"once":true,"fx":["+5% war support","+150 navy XP"]},
    "GER_jaegernotprogramm": {
      "id": "GER_jaegernotprogramm",
      "name": "Jägernotprogramm",
      "cat": "GER_military_buildup",
      "cost": 50,
      "once": true,
      "req": ["we are at war","we don't have the Jägernotprogramm spirit"],
      "fx": ["-5% stability","-5% war support","Spirit for 90 days: Jägernotprogramm (War Support -5%)"]
    },
    "GER_begin_heavy_water_production": {
      "id": "GER_begin_heavy_water_production",
      "name": "Begin Heavy Water Production",
      "cat": "special_projects",
      "cost": 0,
      "days": 365,
      "req": ["the controller of Telemark is us or the controller of Telemark is a subject of us"],
      "fx": []
    },
    "GER_dismantle_maginot": {
      "id": "GER_dismantle_maginot",
      "name": "Dismantle the Maginot Line",
      "cat": "special_projects",
      "cost": 50,
      "days": 180,
      "once": true,
      "req": ["we control Alsace-Lorraine","if France has completed Extend the Maginot Line: we control Champagne; we control Nord-Pas-de-Calais"],
      "fx": [
        "Instead, if France has completed Extend the Maginot Line: Spirit for 270 days: Dismantle the Maginot Line (Production speed coastal bunker factor +25%, Production speed bunker factor +25%); Spirit for 180 days: Dismantle the Maginot Line (Production speed coastal bunker factor +25%, Production speed bunker factor +25%)",
        "In other cases: Spirit for 180 days: Fortification Destruction Research (Large Caliber Kinetic Energy Sabot Research Speed +50%)",
        "While active: Civilian Factory Use +300%",
        "When it ends: Removes spirit: Protected by the Maginot Line"
      ]
    },
    "GER_dismantle_czechoslovakian_forts": {
      "id": "GER_dismantle_czechoslovakian_forts",
      "name": "Dismantle the Czechoslovakian Forts",
      "cat": "special_projects",
      "cost": 50,
      "days": 180,
      "once": true,
      "req": ["we control North Sudetenland","we control South Sudetenland","we control Sudeten Silesia","we control Bohemia","we control Moravia"],
      "fx": [
        "Spirit for 180 days: Dismantle the Czechoslovakian Forts (Production speed coastal bunker factor +25%, Production speed bunker factor +25%)",
        "In other cases: Spirit for 180 days: Fortification Destruction Research (Large Caliber Kinetic Energy Sabot Research Speed +50%)",
        "While active: Civilian Factory Use +100%"
      ]
    },
    "GER_aid_hun_democratic_civil_war": {
      "id": "GER_aid_hun_democratic_civil_war",
      "name": "Intervene in the Hungarian Civil War",
      "cat": "GER_aid_hun_rom_democratic_civil_war",
      "cost": 0,
      "req": [
        "Kingdom of Hungary is not democratic and Kingdom of Hungary is not at war with us and Kingdom of Hungary is in a civil war and Kingdom of Hungary exists and Kingdom of Hungary is democratic"
      ],
      "fx": ["us joins our faction"]
    },
    "GER_aid_rom_democratic_civil_war": {
      "id": "GER_aid_rom_democratic_civil_war",
      "name": "Intervene in the Romanian Civil War",
      "cat": "GER_aid_hun_rom_democratic_civil_war",
      "cost": 0,
      "req": ["Romania is not democratic and Romania is not at war with us and Romania is in a civil war and Romania exists and Romania is democratic"],
      "fx": ["us joins our faction"]
    },
    "GER_western_state_development": {
      "id": "GER_western_state_development",
      "name": "Develop Western Germany",
      "cat": "GER_reich_labor_service_cat",
      "cost": 50,
      "days": 30,
      "once": true,
      "req": [
        "Weser-Ems is fully controlled by us",
        "Hannover is fully controlled by us",
        "Westfalen is fully controlled by us",
        "Hessen is fully controlled by us",
        "Rhineland is fully controlled by us",
        "Moselland is fully controlled by us"
      ],
      "fx": ["While active: Civilian Factory Use +300%"]
    },
    "GER_northern_state_development": {
      "id": "GER_northern_state_development",
      "name": "Develop Northern Germany",
      "cat": "GER_reich_labor_service_cat",
      "cost": 50,
      "days": 30,
      "once": true,
      "req": [
        "Schleswig is fully controlled by us",
        "Holstein is fully controlled by us",
        "Mecklenburg is fully controlled by us",
        "Vorpommern is fully controlled by us",
        "Hinterpommern is fully controlled by us"
      ],
      "fx": ["While active: Civilian Factory Use +300%"]
    },
    "GER_eastern_state_development": {
      "id": "GER_eastern_state_development",
      "name": "Develop Eastern Germany",
      "cat": "GER_reich_labor_service_cat",
      "cost": 50,
      "days": 30,
      "once": true,
      "req": [
        "Königsberg is fully controlled by us",
        "Ermland-Masuren is fully controlled by us",
        "Lower Silesia is fully controlled by us",
        "Upper Silesia is fully controlled by us"
      ],
      "fx": ["While active: Civilian Factory Use +300%"]
    },
    "GER_central_state_development": {
      "id": "GER_central_state_development",
      "name": "Develop Central Germany",
      "cat": "GER_reich_labor_service_cat",
      "cost": 50,
      "days": 30,
      "once": true,
      "req": [
        "Brandenburg is fully controlled by us",
        "Sachsen is fully controlled by us",
        "Thüringen is fully controlled by us",
        "Ostmark is fully controlled by us"
      ],
      "fx": ["While active: Civilian Factory Use +300%"]
    },
    "GER_southern_state_development": {
      "id": "GER_southern_state_development",
      "name": "Develop Southern Germany",
      "cat": "GER_reich_labor_service_cat",
      "cost": 50,
      "days": 30,
      "once": true,
      "req": [
        "Oberbayern is fully controlled by us",
        "Baden is fully controlled by us",
        "Württemberg is fully controlled by us",
        "Niederbayern is fully controlled by us",
        "Franken is fully controlled by us"
      ],
      "fx": ["While active: Civilian Factory Use +300%"]
    },
    "GER_develop_puppet": {
      "id": "GER_develop_puppet",
      "name": "Develop",
      "cat": "GER_integration_of_puppet_economies_dec_cat",
      "cost": 120,
      "targeted": true,
      "fx": ["While active: Consumer Goods Factories factor +10%","While active: Industrial capacity factory +2%"]
    },
    "GER_exploit_puppet": {
      "id": "GER_exploit_puppet",
      "name": "Exploit",
      "cat": "GER_integration_of_puppet_economies_dec_cat",
      "cost": 120,
      "targeted": true,
      "fx": ["While active: Consumer Goods Factories factor -10%"]
    },
    "GER_state_development_west": {
      "id": "GER_state_development_west",
      "name": "Public Works Programs in Western Germany",
      "cat": "GER_rebuild_the_nation_cat",
      "cost": 50,
      "days": 30,
      "once": true,
      "req": [
        "Weser-Ems is fully controlled by us",
        "Hannover is fully controlled by us",
        "Westfalen is fully controlled by us",
        "Hessen is fully controlled by us",
        "Rhineland is fully controlled by us",
        "Moselland is fully controlled by us"
      ],
      "fx": ["While active: Civilian Factory Use +300%"]
    },
    "GER_state_development_north": {
      "id": "GER_state_development_north",
      "name": "Public Works Programs in Northern Germany",
      "cat": "GER_rebuild_the_nation_cat",
      "cost": 50,
      "days": 30,
      "once": true,
      "req": [
        "Schleswig is fully controlled by us",
        "Holstein is fully controlled by us",
        "Mecklenburg is fully controlled by us",
        "Vorpommern is fully controlled by us",
        "Hinterpommern is fully controlled by us"
      ],
      "fx": ["While active: Civilian Factory Use +300%"]
    },
    "GER_state_development_east": {
      "id": "GER_state_development_east",
      "name": "Public Works Programs in Eastern Germany",
      "cat": "GER_rebuild_the_nation_cat",
      "cost": 50,
      "days": 30,
      "once": true,
      "req": [
        "Königsberg is fully controlled by us",
        "Ermland-Masuren is fully controlled by us",
        "Lower Silesia is fully controlled by us",
        "Upper Silesia is fully controlled by us"
      ],
      "fx": ["While active: Civilian Factory Use +300%"]
    },
    "GER_state_development_central": {
      "id": "GER_state_development_central",
      "name": "Public Works Programs in Central Germany",
      "cat": "GER_rebuild_the_nation_cat",
      "cost": 50,
      "days": 30,
      "once": true,
      "req": [
        "Brandenburg is fully controlled by us",
        "Sachsen is fully controlled by us",
        "Thüringen is fully controlled by us",
        "Ostmark is fully controlled by us"
      ],
      "fx": ["While active: Civilian Factory Use +300%"]
    },
    "GER_state_development_south": {
      "id": "GER_state_development_south",
      "name": "Public Works Programs in Southern Germany",
      "cat": "GER_rebuild_the_nation_cat",
      "cost": 50,
      "days": 30,
      "once": true,
      "req": [
        "Oberbayern is fully controlled by us",
        "Baden is fully controlled by us",
        "Württemberg is fully controlled by us",
        "Niederbayern is fully controlled by us",
        "Franken is fully controlled by us"
      ],
      "fx": ["While active: Civilian Factory Use +300%"]
    },
    "GER_influence_baltics_decision": {"id":"GER_influence_baltics_decision","name":"Influence","cat":"GER_influence_countries_cat","cost":25,"again":732,"targeted":true,"fx":[]},
    "GER_influence_nordics_decision": {"id":"GER_influence_nordics_decision","name":"Influence","cat":"GER_influence_countries_cat","cost":25,"again":732,"targeted":true,"fx":[]},
    "GER_influence_benelux_decision": {"id":"GER_influence_benelux_decision","name":"Influence","cat":"GER_influence_countries_cat","cost":25,"again":732,"targeted":true,"fx":[]},
    "GER_influence_middle_east_decision": {"id":"GER_influence_middle_east_decision","name":"Influence","cat":"GER_influence_countries_cat","cost":25,"again":732,"targeted":true,"fx":[]},
    "GER_influence_middle_east_democratic_decision": {
      "id": "GER_influence_middle_east_democratic_decision",
      "name": "Influence",
      "cat": "GER_influence_countries_cat",
      "cost": 25,
      "again": 732,
      "targeted": true,
      "fx": []
    },
    "GER_influence_middle_east_neutrality_decision": {
      "id": "GER_influence_middle_east_neutrality_decision",
      "name": "Influence",
      "cat": "GER_influence_countries_cat",
      "cost": 25,
      "again": 732,
      "targeted": true,
      "fx": []
    },
    "GER_influence_balkans_neutrality_decision": {
      "id": "GER_influence_balkans_neutrality_decision",
      "name": "Influence",
      "cat": "GER_influence_countries_cat",
      "cost": 25,
      "again": 732,
      "targeted": true,
      "fx": []
    },
    "GER_influence_balkans_democratic_decision": {
      "id": "GER_influence_balkans_democratic_decision",
      "name": "Influence",
      "cat": "GER_influence_countries_cat",
      "cost": 25,
      "days": 365,
      "again": 732,
      "targeted": true,
      "fx": []
    },
    "GER_influence_balkans_fascism_decision": {
      "id": "GER_influence_balkans_fascism_decision",
      "name": "Influence",
      "cat": "GER_influence_countries_cat",
      "cost": 25,
      "days": 365,
      "again": 732,
      "targeted": true,
      "fx": []
    },
    "GER_invite_to_faction_decision": {
      "id": "GER_invite_to_faction_decision",
      "name": "Invite to",
      "cat": "GER_invite_to_faction_cat",
      "cost": 25,
      "once": true,
      "targeted": true,
      "req": ["our opinion of us is above 49"],
      "fx": ["Effects if they accept","us joins our faction"]
    },
    "GER_middle_eastern_trade_decision": {
      "id": "GER_middle_eastern_trade_decision",
      "name": "Trade Negotiations with",
      "cat": "GER_middle_eastern_trade_cat",
      "cost": 25,
      "days": 365,
      "once": true,
      "targeted": true,
      "fx": ["Effects if they accept"]
    },
    "GER_mitteleuropa_trade_decision": {
      "id": "GER_mitteleuropa_trade_decision",
      "name": "Initiate Trade Negotiations with",
      "cat": "GER_mitteleuropa_allied_trade_cat",
      "cost": 25,
      "once": true,
      "targeted": true,
      "fx": ["Effects if they accept"]
    },
    "GER_south_east_asian_construction_push_decision": {
      "id": "GER_south_east_asian_construction_push_decision",
      "name": "Infrastructure Construction Efforts in",
      "cat": "GER_south_east_asian_natural_wealth_cat",
      "cost": 75,
      "days": 50,
      "once": true,
      "targeted": true,
      "fx": ["While active: Civilian Factory Use +100%"]
    },
    "GER_south_east_asian_resources_push_decision": {
      "id": "GER_south_east_asian_resources_push_decision",
      "name": "Expand Resource Extraction in",
      "cat": "GER_south_east_asian_natural_wealth_cat",
      "cost": 100,
      "days": 30,
      "once": true,
      "targeted": true,
      "fx": []
    },
    "GER_destabilize_the_monroe_doctrine_decision": {
      "id": "GER_destabilize_the_monroe_doctrine_decision",
      "name": "Destabilize the Monroe Doctrine",
      "cat": "GER_monroe_doctrine_cat",
      "cost": 100,
      "days": 7,
      "once": true,
      "fx": ["When it ends: Informs all countries that have been involved with the Monroe Doctrine of its downfall"]
    },
    "GER_demand_abandon_of_doctrine_decision": {
      "id": "GER_demand_abandon_of_doctrine_decision",
      "name": "Demand Abandon the Monroe Doctrine",
      "cat": "GER_monroe_doctrine_cat",
      "cost": 50,
      "days": 14,
      "once": true,
      "targeted": true,
      "fx": []
    },
    "GER_doctrine_abandoned_dummy_decision": {
      "id": "GER_doctrine_abandoned_dummy_decision",
      "name": "Germany has secured opposition to the Monroe Doctrine in",
      "cat": "GER_monroe_doctrine_cat",
      "targeted": true,
      "fx": []
    },
    "GER_doctrine_reinforced_dummy_decision": {
      "id": "GER_doctrine_reinforced_dummy_decision",
      "name": "America has secured support for the Monroe Doctrine in",
      "cat": "GER_monroe_doctrine_cat",
      "targeted": true,
      "fx": []
    },
    "GER_monroe_doctrine_USA_sway_ideology": {
      "id": "GER_monroe_doctrine_USA_sway_ideology",
      "name": "Bolster sentiments in",
      "cat": "GER_monroe_doctrine_cat",
      "cost": 50,
      "days": 14,
      "once": true,
      "targeted": true,
      "fx": []
    },
    "GER_reestablish_the_black_reichswehr": {
      "id": "GER_reestablish_the_black_reichswehr",
      "name": "Reestablish the Schwarze Reichswehr",
      "cat": "GER_a_fourth_silesian_uprising_cat",
      "cost": 25,
      "days": 14,
      "once": true,
      "fx": ["-4% stability"]
    },
    "GER_mobilize_the_selbschutz": {
      "id": "GER_mobilize_the_selbschutz",
      "name": "Mobilize the Selbstschutz",
      "cat": "GER_a_fourth_silesian_uprising_cat",
      "cost": 15,
      "once": true,
      "fx": ["+150 manpower"]
    },
    "GER_disband_the_schutztruppen": {
      "id": "GER_disband_the_schutztruppen",
      "name": "Disband the Schutztruppen",
      "cat": "GER_weltpolitik_cat",
      "cost": 5,
      "fx": ["All Schutztruppe divisions will be disbanded. (Manpower and equipment will not be refunded)"]
    },
    "GER_reorganize_african_schutztruppe": {"id":"GER_reorganize_african_schutztruppe","name":"Reorganize the African Schutztruppe","cat":"GER_weltpolitik_cat","days":35,"fx":[]},
    "GER_reorganize_asian_schutztruppe": {"id":"GER_reorganize_asian_schutztruppe","name":"Reorganize the Asian Schutztruppe","cat":"GER_weltpolitik_cat","days":35,"fx":[]},
    "GER_train_schutztruppe_in_togoland": {
      "id": "GER_train_schutztruppe_in_togoland",
      "name": "Recruit Schutztruppe in Togoland",
      "cat": "GER_weltpolitik_cat",
      "days": 21,
      "once": true,
      "fx": ["When it ends: Recruit one Afrikanische Schutztruppe and one Askari Schutztruppe in the selected state"]
    },
    "GER_train_schutztruppe_in_kamerun": {
      "id": "GER_train_schutztruppe_in_kamerun",
      "name": "Recruit Schutztruppe in Kamerun",
      "cat": "GER_weltpolitik_cat",
      "days": 21,
      "once": true,
      "fx": ["When it ends: Recruit one Afrikanische Schutztruppe and one Askari Schutztruppe in the selected state"]
    },
    "GER_train_schutztruppe_in_tanganyika": {
      "id": "GER_train_schutztruppe_in_tanganyika",
      "name": "Recruit Schutztruppe in Tanganyika",
      "cat": "GER_weltpolitik_cat",
      "days": 21,
      "once": true,
      "fx": ["When it ends: Recruit one Afrikanische Schutztruppe and one Askari Schutztruppe in the selected state"]
    },
    "GER_train_schutztruppe_in_ruanda": {
      "id": "GER_train_schutztruppe_in_ruanda",
      "name": "Recruit Schutztruppe in Ruanda",
      "cat": "GER_weltpolitik_cat",
      "days": 21,
      "once": true,
      "fx": ["When it ends: Recruit one Afrikanische Schutztruppe and one Askari Schutztruppe in the selected state"]
    },
    "GER_train_schutztruppe_in_urundi": {
      "id": "GER_train_schutztruppe_in_urundi",
      "name": "Recruit Schutztruppe in Urundi",
      "cat": "GER_weltpolitik_cat",
      "days": 21,
      "once": true,
      "fx": ["When it ends: Recruit one Afrikanische Schutztruppe and one Askari Schutztruppe in the selected state"]
    },
    "GER_train_schutztruppe_in_otjozondjupa": {
      "id": "GER_train_schutztruppe_in_otjozondjupa",
      "name": "Recruit Schutztruppe in Otjozondjupa",
      "cat": "GER_weltpolitik_cat",
      "days": 21,
      "once": true,
      "fx": ["When it ends: Recruit one Afrikanische Schutztruppe and one Askari Schutztruppe in the selected state"]
    },
    "GER_train_schutztruppe_in_kunene": {
      "id": "GER_train_schutztruppe_in_kunene",
      "name": "Recruit Schutztruppe in Kunene",
      "cat": "GER_weltpolitik_cat",
      "days": 21,
      "once": true,
      "fx": ["When it ends: Recruit one Afrikanische Schutztruppe and one Askari Schutztruppe in the selected state"]
    },
    "GER_train_schutztruppe_in_khomas": {
      "id": "GER_train_schutztruppe_in_khomas",
      "name": "Recruit Schutztruppe in Khomas",
      "cat": "GER_weltpolitik_cat",
      "days": 21,
      "once": true,
      "fx": ["When it ends: Recruit one Afrikanische Schutztruppe and one Askari Schutztruppe in the selected state"]
    },
    "GER_train_schutztruppe_in_karas": {
      "id": "GER_train_schutztruppe_in_karas",
      "name": "Recruit Schutztruppe in Karas",
      "cat": "GER_weltpolitik_cat",
      "days": 21,
      "once": true,
      "fx": ["When it ends: Recruit one Afrikanische Schutztruppe and one Askari Schutztruppe in the selected state"]
    },
    "GER_train_schutztruppe_in_tsingtao": {
      "id": "GER_train_schutztruppe_in_tsingtao",
      "name": "Recruit Schutztruppe in Tsingtau",
      "cat": "GER_weltpolitik_cat",
      "days": 21,
      "once": true,
      "fx": ["When it ends: Recruit two Asiatische Schutztruppe divisions in the selected state"]
    },
    "GER_train_schutztruppe_in_saipan": {
      "id": "GER_train_schutztruppe_in_saipan",
      "name": "Recruit Schutztruppe in Saipan",
      "cat": "GER_weltpolitik_cat",
      "days": 21,
      "once": true,
      "fx": ["When it ends: Recruit one Asiatische Schutztruppe in the selected state"]
    },
    "GER_train_schutztruppe_in_palau": {
      "id": "GER_train_schutztruppe_in_palau",
      "name": "Recruit Schutztruppe in Palau",
      "cat": "GER_weltpolitik_cat",
      "days": 21,
      "once": true,
      "fx": ["When it ends: Recruit one Asiatische Schutztruppe in the selected state"]
    },
    "GER_train_schutztruppe_in_karolinen": {
      "id": "GER_train_schutztruppe_in_karolinen",
      "name": "Recruit Schutztruppe in Karolinen",
      "cat": "GER_weltpolitik_cat",
      "days": 21,
      "once": true,
      "fx": ["When it ends: Recruit two Asiatische Schutztruppe divisions in the selected state"]
    },
    "GER_train_schutztruppe_in_marshallinseln": {
      "id": "GER_train_schutztruppe_in_marshallinseln",
      "name": "Recruit Schutztruppe in Marshallinseln",
      "cat": "GER_weltpolitik_cat",
      "days": 21,
      "once": true,
      "fx": ["When it ends: Recruit two Asiatische Schutztruppe divisions in the selected state"]
    },
    "GER_train_schutztruppe_in_nauru": {
      "id": "GER_train_schutztruppe_in_nauru",
      "name": "Recruit Schutztruppe in Nauru",
      "cat": "GER_weltpolitik_cat",
      "days": 21,
      "once": true,
      "fx": ["When it ends: Recruit one Asiatische Schutztruppe in the selected state"]
    },
    "GER_train_schutztruppe_in_samoa": {
      "id": "GER_train_schutztruppe_in_samoa",
      "name": "Recruit Schutztruppe in Samoa",
      "cat": "GER_weltpolitik_cat",
      "days": 21,
      "once": true,
      "fx": ["When it ends: Recruit one Asiatische Schutztruppe in the selected state"]
    },
    "GER_train_schutztruppe_in_nordlische_salomonen": {
      "id": "GER_train_schutztruppe_in_nordlische_salomonen",
      "name": "Recruit Schutztruppe in Nördliche Salomonen",
      "cat": "GER_weltpolitik_cat",
      "days": 21,
      "once": true,
      "fx": ["When it ends: Recruit two Asiatische Schutztruppe divisions in the selected state"]
    },
    "GER_train_schutztruppe_in_bismarck": {
      "id": "GER_train_schutztruppe_in_bismarck",
      "name": "Recruit Schutztruppe in Bismarck",
      "cat": "GER_weltpolitik_cat",
      "days": 21,
      "once": true,
      "fx": ["When it ends: Recruit two Asiatische Schutztruppe divisions in the selected state"]
    },
    "GER_train_schutztruppe_in_kaiser_wilhelmsland": {
      "id": "GER_train_schutztruppe_in_kaiser_wilhelmsland",
      "name": "Recruit Schutztruppe in Kaiser-Wilhelmsland",
      "cat": "GER_weltpolitik_cat",
      "days": 21,
      "once": true,
      "fx": ["When it ends: Recruit two Asiatische Schutztruppe divisions in the selected state"]
    },
    "GER_support_independence_africa_decision": {
      "id": "GER_support_independence_africa_decision",
      "name": "Support Independence",
      "cat": "GER_weltpolitik_cat",
      "cost": 15,
      "days": 90,
      "again": 30,
      "targeted": true,
      "req": ["we are not in a faction with us"],
      "fx": ["While active: Political Power Gain -25%"]
    },
    "GER_support_independence_asia_decision": {
      "id": "GER_support_independence_asia_decision",
      "name": "Support Independence",
      "cat": "GER_weltpolitik_cat",
      "cost": 15,
      "days": 90,
      "again": 30,
      "targeted": true,
      "req": ["we are not in a faction with us"],
      "fx": ["While active: Political Power Gain -25%"]
    },
    "GER_invite_HOL_to_attack_BEL_decision": {
      "id": "GER_invite_HOL_to_attack_BEL_decision",
      "name": "Backdoor Negotiations with Netherlands",
      "cat": "GER_realpolitik_cat",
      "cost": 50,
      "once": true,
      "targeted": true,
      "req": [
        "we are not a subject",
        "we are a faction leader or we are not in a faction",
        "Netherlands exists and Netherlands is not at war with us and Netherlands is not in a faction and Netherlands is not a subject",
        "Belgium exists and Belgium is not a subject of us and Belgium is not a subject of Netherlands and Belgium is not at war with us and Belgium is not at war with Netherlands"
      ],
      "fx": [
        "Effects if they accept",
        "Netherlands: Claim on Antwerp",
        "Netherlands: Claim on Flanders",
        "Claims on Ardennes, Wallonia",
        "Netherlands joins our faction",
        "War goal against Belgium"
      ]
    },
    "GER_invite_BEL_to_attack_HOL_decision": {
      "id": "GER_invite_BEL_to_attack_HOL_decision",
      "name": "Backdoor Negotiations with Belgium",
      "cat": "GER_realpolitik_cat",
      "cost": 50,
      "once": true,
      "targeted": true,
      "req": [
        "we are not a subject",
        "we are a faction leader or we are not in a faction",
        "Belgium exists and Belgium is not at war with us and Belgium is not in a faction and Belgium is not a subject",
        "Netherlands exists and Netherlands is not a subject of us and Netherlands is not a subject of Belgium and Netherlands is not at war with us and Netherlands is not at war with Belgium"
      ],
      "fx": ["Effects if they accept","Belgium: Claim on Brabant","Claims on Holland, Friesland","Belgium joins our faction","War goal against Netherlands"]
    },
    "GER_sway_the_austrians_decision": {
      "id": "GER_sway_the_austrians_decision",
      "name": "Sway Public Opinion in Austria to our side",
      "cat": "GER_realpolitik_cat",
      "cost": 50,
      "once": true,
      "targeted": true,
      "req": ["we are not a subject","we are non-aligned or we are democratic","Austria doesn't share the ideology of us"],
      "fx": [
        "Austria, may answer: they get +10% Germany popularity; they: Spirit for 180 days: Propaganda Swaying Public Opinion (Daily Democracy Support +0.1, Political Power Gain +5%); their opinion of us +50",
        "Austria, may answer: they get +10% Germany popularity; their opinion of us -50",
        "Austria: +10% ruling party popularity",
        "Austria: Spirit for 180 days: Propaganda Swaying Public Opinion (Daily Democracy Support +0.1, Political Power Gain +5%)",
        "Instead, if we are non-aligned: Austria: Spirit for 180 days: Propagandists swaying public opinion neu (Daily Support for Unaligned +0.1, Political Power Gain +5%)",
        "Austria: opinion of us +50"
      ]
    },
    "GER_found_a_baltic_german_state_decision": {
      "id": "GER_found_a_baltic_german_state_decision",
      "name": "Found a Baltic-German State",
      "cat": "GER_realpolitik_cat",
      "cost": 25,
      "once": true,
      "req": ["we are not a subject","we have completed Eastern Autonomous States"],
      "fx": [
        "Every highlighted state is transferred to United Baltic Duchy",
        "Makes United Baltic Duchy a Personal Union",
        "Instead, if we are democratic: Makes United Baltic Duchy a Colony",
        "Instead, if we are not non-aligned: Makes United Baltic Duchy a Puppet"
      ]
    },
    "GER_restore_the_ukrainian_state_decision": {
      "id": "GER_restore_the_ukrainian_state_decision",
      "name": "Restore the Ukrainian State",
      "cat": "GER_realpolitik_cat",
      "cost": 50,
      "once": true,
      "req": ["we have completed Eastern Autonomous States","Ukraine no longer exists","we are not a subject"],
      "fx": [
        "Every highlighted state is transferred to Ukraine",
        "Makes Ukraine a Personal Union",
        "Instead, if we are democratic: Makes Ukraine a Colony",
        "Instead, if we are not non-aligned: Makes Ukraine a Puppet"
      ]
    },
    "GER_found_a_transcacuasian_satellite_state_decision": {
      "id": "GER_found_a_transcacuasian_satellite_state_decision",
      "name": "Found a Transcaucasian Satellite State",
      "cat": "GER_realpolitik_cat",
      "cost": 25,
      "once": true,
      "req": ["we are not a subject","we have completed Eastern Autonomous States"],
      "fx": [
        "Every highlighted state is transferred to Georgia, and the nation is reformed into the Transcaucasian State",
        "Makes Georgia a Personal Union",
        "Instead, if we are democratic: Makes Georgia a Colony",
        "Instead, if we are not non-aligned: Makes Georgia a Puppet"
      ]
    },
    "GER_expand_transcacuasian_administrative_duties_decision": {
      "id": "GER_expand_transcacuasian_administrative_duties_decision",
      "name": "Expand Transcaucasian Administrative Duties in the Northern Caucasus",
      "cat": "GER_realpolitik_cat",
      "cost": 15,
      "once": true,
      "req": ["we are not a subject","Georgia exists and Georgia is a subject of us","we have completed Eastern Autonomous States"],
      "fx": ["Every highlighted state is transferred to Georgia"]
    },
    "GER_establish_a_belarusian_state_decision": {
      "id": "GER_establish_a_belarusian_state_decision",
      "name": "Establish a Belarusian State",
      "cat": "GER_realpolitik_cat",
      "cost": 35,
      "once": true,
      "req": ["we have completed Eastern Autonomous States","Belarus no longer exists","we are not a subject"],
      "fx": [
        "Every highlighted state is transferred to Belarus",
        "Makes Belarus a Personal Union",
        "Instead, if we are democratic: Makes Belarus a Colony",
        "Instead, if we are not non-aligned: Makes Belarus a Puppet"
      ]
    },
    "GER_establish_greater_flanders_decision": {
      "id": "GER_establish_greater_flanders_decision",
      "name": "Establish Greater Flanders",
      "cat": "GER_realpolitik_cat",
      "cost": 25,
      "once": true,
      "req": ["we are not a subject","we have completed Western Autonomous States"],
      "fx": [
        "Every highlighted state is transferred to The State of Flanders",
        "Makes Belgium a Personal Union",
        "Instead, if we are democratic and Belgium is not a subject of us: Makes Belgium a Colony",
        "Instead, if Belgium is not a subject of us: Makes Belgium a Puppet",
        "Belgium: +150 political power",
        "Belgium: +10% stability",
        "Belgium: +10% war support"
      ]
    },
    "GER_establish_greater_brittany_decision": {
      "id": "GER_establish_greater_brittany_decision",
      "name": "Establish a Grand Breton State",
      "cat": "GER_realpolitik_cat",
      "cost": 25,
      "once": true,
      "req": ["we are not a subject","we have completed Western Autonomous States"],
      "fx": [
        "Every highlighted state is transferred to Brittany",
        "Makes Brittany a Personal Union",
        "Instead, if we are democratic and Brittany is not a subject of us: Makes Brittany a Colony",
        "Instead, if Brittany is not a subject of us: Makes Brittany a Puppet"
      ]
    },
    "GER_establish_wales_decision": {
      "id": "GER_establish_wales_decision",
      "name": "Establish a Greater Welsh State",
      "cat": "GER_realpolitik_cat",
      "cost": 25,
      "once": true,
      "req": ["we are not a subject","we have completed Western Autonomous States"],
      "fx": [
        "Every highlighted state is transferred to Wales",
        "Makes Wales a Personal Union",
        "Instead, if we are democratic and Wales is not a subject of us: Makes Wales a Colony",
        "Instead, if Wales is not a subject of us: Makes Wales a Puppet"
      ]
    },
    "GER_establish_scotland_decision": {
      "id": "GER_establish_scotland_decision",
      "name": "Establish a Greater Scottish State",
      "cat": "GER_realpolitik_cat",
      "cost": 25,
      "once": true,
      "req": ["we are not a subject","we have completed Western Autonomous States"],
      "fx": [
        "Every highlighted state is transferred to Scotland",
        "Makes Scotland a Personal Union",
        "Instead, if we are democratic and Scotland is not a subject of us: Makes Scotland a Colony",
        "Instead, if Scotland is not a subject of us: Makes Scotland a Puppet"
      ]
    },
    "GER_mitteleuropa_customs_union_decision": {
      "id": "GER_mitteleuropa_customs_union_decision",
      "name": "Invite to a Customs Union",
      "cat": "GER_mitteleuropa_economic_integration_cat",
      "cost": 15,
      "once": true,
      "targeted": true,
      "fx": ["Effects if they accept"]
    },
    "GER_mitteleuropa_economic_integration_decision": {
      "id": "GER_mitteleuropa_economic_integration_decision",
      "name": "Offer Economic Integration to",
      "cat": "GER_mitteleuropa_economic_integration_cat",
      "cost": 15,
      "once": true,
      "targeted": true,
      "fx": ["Effects if they accept"]
    },
    "GER_further_increase_froms_dependency_decision": {
      "id": "GER_further_increase_froms_dependency_decision",
      "name": "Further Increase Economic Dependency",
      "cat": "GER_mitteleuropa_economic_integration_cat",
      "cost": 50,
      "days": 35,
      "once": true,
      "targeted": true,
      "req": ["we are not a subject","we are a faction leader"],
      "fx": ["When it ends: Effects if they accept","When it ends: Puppets us"]
    },
    "GER_annex_integrated_puppet_decision": {
      "id": "GER_annex_integrated_puppet_decision",
      "name": "Integrate the Civilian Administration",
      "cat": "GER_mitteleuropa_economic_integration_cat",
      "cost": 75,
      "days": 35,
      "once": true,
      "targeted": true,
      "req": ["we are not a subject","we are a faction leader"],
      "fx": ["When it ends: Effects if they accept","When it ends: Annexes us"]
    },
    "GER_imminent_proletarian_revolution_mission": {
      "id": "GER_imminent_proletarian_revolution_mission",
      "name": "Imminent Proletarian Revolution",
      "cat": "GER_proletarian_revolution_cat",
      "mission": 120,
      "once": true,
      "fx": []
    },
    "GER_expand_the_proletarian_uprisings_decision": {
      "id": "GER_expand_the_proletarian_uprisings_decision",
      "name": "Expand the Proletarian Uprising in",
      "cat": "GER_proletarian_revolution_cat",
      "cost": 25,
      "days": 30,
      "once": true,
      "targeted": true,
      "fx": []
    },
    "GER_organize_worker_rally_decision": {
      "id": "GER_organize_worker_rally_decision",
      "name": "Organize Worker Rally",
      "cat": "GER_proletarian_revolution_cat",
      "cost": 25,
      "days": 30,
      "once": true,
      "fx": ["While active: Civilian Factory Use +100%","When it ends: -2% stability"]
    },
    "GER_establish_volkskommissariat_decision": {
      "id": "GER_establish_volkskommissariat_decision",
      "name": "Establish Volkskommissariats in",
      "cat": "GER_volkskommissariats_cat",
      "cost": 25,
      "days": 20,
      "once": true,
      "targeted": true,
      "fx": []
    },
    "GER_volkskommissariat_industrial_effort_decision": {
      "id": "GER_volkskommissariat_industrial_effort_decision",
      "name": "Industrialization Efforts in",
      "cat": "GER_volkskommissariats_cat",
      "cost": 15,
      "days": 30,
      "once": true,
      "targeted": true,
      "fx": ["While active: Civilian Factory Use +300%"]
    },
    "GER_integrate_volkskommissariats_decision": {
      "id": "GER_integrate_volkskommissariats_decision",
      "name": "Integrate",
      "cat": "GER_volkskommissariats_cat",
      "cost": 50,
      "days": 15,
      "once": true,
      "targeted": true,
      "fx": []
    },
    "GER_communist_propaganda_decision": {
      "id": "GER_communist_propaganda_decision",
      "name": "Communist propaganda in",
      "cat": "GER_spreading_the_red_flame_cat",
      "cost": 25,
      "once": true,
      "targeted": true,
      "fx": ["+1 world tension","Effects if they accept","Effects if they refuse","War goal against us"]
    },
    "GER_communist_propaganda_expanded_decision": {
      "id": "GER_communist_propaganda_expanded_decision",
      "name": "Communist propaganda in",
      "cat": "GER_spreading_the_red_flame_cat",
      "cost": 25,
      "once": true,
      "targeted": true,
      "fx": ["+1 world tension","Effects if they accept","Effects if they refuse","War goal against us"]
    },
    "GER_communist_propaganda_south_america_decision": {
      "id": "GER_communist_propaganda_south_america_decision",
      "name": "Communist propaganda in",
      "cat": "GER_spreading_the_red_flame_cat",
      "cost": 25,
      "once": true,
      "targeted": true,
      "fx": ["+1 world tension","Effects if they accept","Effects if they refuse","War goal against us"]
    },
    "GER_communist_propaganda_middle_east_decision": {
      "id": "GER_communist_propaganda_middle_east_decision",
      "name": "Communist propaganda in",
      "cat": "GER_spreading_the_red_flame_cat",
      "cost": 25,
      "once": true,
      "targeted": true,
      "fx": ["+1 world tension","Effects if they accept","Effects if they refuse","War goal against us"]
    },
    "GER_supporting_the_uprising_decision": {
      "id": "GER_supporting_the_uprising_decision",
      "name": "Support the Uprising in",
      "cat": "GER_spreading_the_red_flame_cat",
      "days": 15,
      "once": true,
      "targeted": true,
      "fx": []
    },
    "GER_demand_communist_subjugation_decision": {
      "id": "GER_demand_communist_subjugation_decision",
      "name": "Demand subjugation of",
      "cat": "GER_spreading_the_red_flame_cat",
      "cost": 50,
      "days": 30,
      "once": true,
      "targeted": true,
      "fx": ["When it ends: Effects if they accept","When it ends: Puppets us"]
    },
    "GER_proletarian_solidarity_decision": {
      "id": "GER_proletarian_solidarity_decision",
      "name": "Encourage Proletarian Solidarity in",
      "cat": "GER_spreading_the_red_flame_cat",
      "cost": 25,
      "once": true,
      "targeted": true,
      "fx": [
        "Effects if they accept",
        "New spirit: Proletarian solidarity subject (Construction Speed +15%, Civilian industry to overlord +10%, Military industry to overlord +10%)",
        "Instead, if we are not a subject of us: New spirit: Proletarian Trade Solidarity (Trade deal opinion factor +25%, Trade Laws Cost -15%)"
      ]
    },
    "GER_industrial_relocation_oil_decision": {
      "id": "GER_industrial_relocation_oil_decision",
      "name": "Relocate Industry to for Oil from",
      "cat": "GER_industrial_relocation_cat",
      "cost": 50,
      "days": 30,
      "once": true,
      "targeted": true,
      "fx": ["When it ends: Effects if they accept"]
    },
    "GER_industrial_relocation_tungsten_decision": {
      "id": "GER_industrial_relocation_tungsten_decision",
      "name": "Relocate Industry to for Tungsten from",
      "cat": "GER_industrial_relocation_cat",
      "cost": 50,
      "days": 30,
      "once": true,
      "targeted": true,
      "fx": ["When it ends: Effects if they accept"]
    },
    "GER_industrial_relocation_chromium_decision": {
      "id": "GER_industrial_relocation_chromium_decision",
      "name": "Relocate Industry to for Chromium from",
      "cat": "GER_industrial_relocation_cat",
      "cost": 50,
      "days": 30,
      "once": true,
      "targeted": true,
      "fx": ["When it ends: Effects if they accept"]
    },
    "GER_support_resistance_decision": {
      "id": "GER_support_resistance_decision",
      "name": "Support Anti- Resistance in",
      "cat": "GER_anti_colonialism_category",
      "days": 30,
      "once": true,
      "targeted": true,
      "fx": ["While active: Industrial capacity factory -10%"]
    },
    "GER_arm_resistance_decision": {
      "id": "GER_arm_resistance_decision",
      "name": "Arm the Anti- Resistance in",
      "cat": "GER_anti_colonialism_category",
      "days": 7,
      "once": true,
      "targeted": true,
      "fx": ["+-1000 Infantry Equipment"]
    },
    "GER_support_independence_decision": {
      "id": "GER_support_independence_decision",
      "name": "Support Independence",
      "cat": "GER_anti_colonialism_category",
      "cost": 15,
      "days": 90,
      "again": 30,
      "targeted": true,
      "req": ["we are not in a faction with us"],
      "fx": ["While active: Political Power Gain -25%"]
    },
    "GER_anti_colonialism_decision": {
      "id": "GER_anti_colonialism_decision",
      "name": "Anti- Propaganda",
      "cat": "GER_anti_colonialism_category",
      "cost": 15,
      "days": 30,
      "once": true,
      "targeted": true,
      "req": ["we are not in a faction with us"],
      "fx": ["While active: Political Power Gain -25%"]
    },
    "GER_occupy_albania_decision": {
      "id": "GER_occupy_albania_decision",
      "name": "Occupy Albania",
      "cat": "GER_the_fading_eagle_category",
      "cost": 50,
      "req": ["we are fascist","Albanian Kingdom is in a faction with us and Albanian Kingdom is not a subject"],
      "fx": ["Effects if they accept","Puppets Albanian Kingdom"]
    },
    "GER_occupy_montenegro_decision": {
      "id": "GER_occupy_montenegro_decision",
      "name": "Occupy Montenegro",
      "cat": "GER_the_fading_eagle_category",
      "cost": 50,
      "req": ["we are fascist","Republic of Montenegro is in a faction with us and Republic of Montenegro is not a subject"],
      "fx": ["Effects if they accept","Puppets Republic of Montenegro"]
    },
    "GER_occupy_croatia_decision": {
      "id": "GER_occupy_croatia_decision",
      "name": "Occupy Croatia",
      "cat": "GER_the_fading_eagle_category",
      "cost": 50,
      "req": ["we are fascist","Independent State of Croatia is in a faction with us and Independent State of Croatia is not a subject"],
      "fx": ["Effects if they accept","Puppets Independent State of Croatia"]
    },
    "GER_occupy_serbia_decision": {
      "id": "GER_occupy_serbia_decision",
      "name": "Occupy Serbia",
      "cat": "GER_the_fading_eagle_category",
      "cost": 50,
      "req": ["we are fascist","Serbia is in a faction with us and Serbia is not a subject"],
      "fx": ["Effects if they accept","Puppets Serbia"]
    },
    "GER_occupy_bosnia_decision": {
      "id": "GER_occupy_bosnia_decision",
      "name": "Occupy Bosnia",
      "cat": "GER_the_fading_eagle_category",
      "cost": 50,
      "req": ["we are fascist","Bosnia-Herzegovina is in a faction with us and Bosnia-Herzegovina is not a subject"],
      "fx": ["Effects if they accept","Puppets Bosnia-Herzegovina"]
    },
    "GER_occupy_herzegovina_decision": {
      "id": "GER_occupy_herzegovina_decision",
      "name": "Occupy Herzegovina",
      "cat": "GER_the_fading_eagle_category",
      "cost": 50,
      "req": ["we are fascist","Herzegovina is in a faction with us and Herzegovina is not a subject"],
      "fx": ["Effects if they accept","Puppets Herzegovina"]
    },
    "GER_occupy_macedonian_decision": {
      "id": "GER_occupy_macedonian_decision",
      "name": "Occupy Macedonia",
      "cat": "GER_the_fading_eagle_category",
      "cost": 50,
      "req": ["we are fascist","Republic of Macedonia is in a faction with us and Republic of Macedonia is not a subject"],
      "fx": ["Effects if they accept","Puppets Republic of Macedonia"]
    },
    "GER_occupy_slovenia_decision": {
      "id": "GER_occupy_slovenia_decision",
      "name": "Occupy Slovenia",
      "cat": "GER_the_fading_eagle_category",
      "cost": 50,
      "req": ["we are fascist","Republic of Slovenia is in a faction with us and Republic of Slovenia is not a subject"],
      "fx": ["Effects if they accept","Puppets Republic of Slovenia"]
    },
    "GER_occupy_kosovo_decision": {
      "id": "GER_occupy_kosovo_decision",
      "name": "Occupy Kosovo",
      "cat": "GER_the_fading_eagle_category",
      "cost": 50,
      "req": ["we are fascist","Republic of Kosovo is in a faction with us and Republic of Kosovo is not a subject"],
      "fx": ["Effects if they accept","Puppets Republic of Kosovo"]
    },
    "request_reinstatement": {"id":"request_reinstatement","name":"Request Reinstatement from","cat":"governments_in_exile","cost":10,"again":120,"targeted":true,"fx":[]},
    "grant_parliamentary_audience": {
      "id": "grant_parliamentary_audience",
      "name": "Parliamentary Speech",
      "cat": "governments_in_exile",
      "days": 120,
      "targeted": true,
      "fx": ["While active: Daily Political Power Cost +15%"]
    },
    "lobby_for_parliamentary_support": {
      "id": "lobby_for_parliamentary_support",
      "name": "Lobby for Support",
      "cat": "governments_in_exile",
      "days": 120,
      "targeted": true,
      "fx": ["While active: Daily Political Power Cost +25%","While active: Daily Legitimacy Gain +5%"]
    },
    "public_support_for_from": {
      "id": "public_support_for_from",
      "name": "Public Recognition of the Exile Government",
      "cat": "governments_in_exile",
      "days": 120,
      "targeted": true,
      "fx": ["While active: Daily Political Power Cost +25%"]
    },
    "exile_recruitment_campaign": {
      "id": "exile_recruitment_campaign",
      "name": "Exile Recruitment Campaign",
      "cat": "governments_in_exile",
      "days": 120,
      "targeted": true,
      "fx": ["While active: Daily Political Power Cost +100%","While active: Exile manpower factor +50%"]
    },
    "exile_extraction_campaign": {"id":"exile_extraction_campaign","name":"Extraction Campaign","cat":"governments_in_exile","cost":0,"days":60,"targeted":true,"fx":[]},
    "purge_infiltrators": {
      "id": "purge_infiltrators",
      "name": "Purge Infiltrators",
      "cat": "governments_in_exile",
      "days": 30,
      "targeted": true,
      "fx": ["When it ends: +50 political power"]
    },
    "expatriate_donations": {
      "id": "expatriate_donations",
      "name": "Expatriate Donations from",
      "cat": "governments_in_exile",
      "cost": 25,
      "days": 360,
      "targeted": true,
      "fx": ["While active: Industrial Factory Donations +100%","While active: Military Factory Donations +100%"]
    },
    "request_control_of_navy": {"id":"request_control_of_navy","name":"Request Control of Navy","cat":"governments_in_exile","cost":25,"once":true,"targeted":true,"fx":[]},
    "weapons_for_the_resistance": {
      "id": "weapons_for_the_resistance",
      "name": "Weapons for the Resistance",
      "cat": "category_exile_forces",
      "cost": 50,
      "days": 120,
      "targeted": true,
      "fx": ["+resistance_equipment_needed Infantry Equipment"]
    },
    "unity_parade": {
      "id": "unity_parade",
      "name": "- Unity Parade",
      "cat": "category_exile_forces",
      "cost": 50,
      "days": 45,
      "once": true,
      "targeted": true,
      "fx": ["While active: Weekly War Support +1%","While active: Daily Political Power Cost +15%"]
    },
    "joint_training_exercise": {
      "id": "joint_training_exercise",
      "name": "Joint - Training Exercise",
      "cat": "category_exile_forces",
      "cost": 0,
      "again": 270,
      "targeted": true,
      "fx": ["+25 army XP","+50 air XP","+50 navy XP"]
    },
    "targeted_race_for_the_bomb": {
      "id": "targeted_race_for_the_bomb",
      "name": "Race for the Bomb",
      "cat": "political_actions",
      "targeted": true,
      "req": ["we have researched Atomic Research","we don't have the Race for the Bomb spirit"],
      "fx": [
        "New spirit: Race for the Bomb (Production speed nuclear reactor factor +15%, Nuclear Research Special Projects Speed +5%, Production speed nuclear facility factor +5%)"
      ]
    },
    "improved_worker_conditions": {
      "id": "improved_worker_conditions",
      "name": "Improved Worker Conditions",
      "cat": "political_actions",
      "cost": 100,
      "days": 180,
      "again": 540,
      "fx": ["While active: Weekly Stability +0.5%","While active: Consumer Goods Factories factor +10%","While active: Industrial capacity factory -10%"]
    },
    "restructure_supply_system": {
      "id": "restructure_supply_system",
      "name": "Reorganize the Railway System",
      "cat": "economy_decisions",
      "days": 120,
      "once": true,
      "fx": ["While active: Production speed supply node factor +300%"]
    },
    "seize_some_trains_woo": {
      "id": "seize_some_trains_woo",
      "name": "Commandeer Civilian Trains",
      "cat": "economy_decisions",
      "days": 180,
      "req": ["we have researched Civilian Train"],
      "fx": ["+15 Civilian Train","-5% stability"]
    },
    "war_propaganda": {
      "id": "war_propaganda",
      "name": "War Propaganda",
      "cat": "propaganda_efforts",
      "cost": 150,
      "days": 90,
      "again": 180,
      "fx": ["While active: Weekly War Support +0.5%"]
    },
    "war_propaganda_casualties": {
      "id": "war_propaganda_casualties",
      "name": "Exhort Heroism",
      "cat": "propaganda_efforts",
      "cost": 100,
      "days": 180,
      "fx": ["While active: Weekly War Support (Combat Casualties) +0.6%"]
    },
    "war_propaganda_convoys": {
      "id": "war_propaganda_convoys",
      "name": "Encourage Frugality",
      "cat": "propaganda_efforts",
      "cost": 100,
      "days": 180,
      "fx": ["While active: Weekly War Support (Sunk Convoys) +0.6%"]
    },
    "war_propaganda_bombing": {
      "id": "war_propaganda_bombing",
      "name": "Bolster Spirits",
      "cat": "propaganda_efforts",
      "cost": 100,
      "days": 180,
      "fx": ["While active: Weekly War Support (Enemy Bombing) +0.6%"]
    },
    "war_propaganda_radio_industry": {
      "id": "war_propaganda_radio_industry",
      "name": "Radio Propaganda",
      "cat": "propaganda_efforts",
      "cost": 75,
      "once": true,
      "req": ["world tension above 25%","we have researched Radio"],
      "fx": ["+5% war support"]
    },
    "war_propaganda_film_industry": {
      "id": "war_propaganda_film_industry",
      "name": "Import Propaganda Films",
      "cat": "propaganda_efforts",
      "cost": 100,
      "once": true,
      "req": ["we are a major power or an ally is a major power","if we are not fascist: world tension above 50%, otherwise: world tension above 30%"],
      "fx": ["+10% war support"]
    },
    "blow_suez_canal": {
      "id": "blow_suez_canal",
      "name": "Blow the Suez Canal",
      "cat": "operations",
      "cost": 75,
      "days": 30,
      "req": [
        "we control Suez",
        "we control Sinai",
        "(we don't own Suez and Sinai) or an enemy controls Matrouh, Alexandria, Aswan, Eastern Desert, Palestine or Jordan"
      ],
      "fx": ["While active: Civilian Factory Use +500%","When it ends: -5% war support","When it ends: -5% stability"]
    },
    "blow_panama_canal": {
      "id": "blow_panama_canal",
      "name": "Blow the Panama Canal",
      "cat": "operations",
      "cost": 75,
      "days": 30,
      "req": ["we fully control Panamá Canal"],
      "fx": ["While active: Civilian Factory Use +500%","When it ends: -5% war support","When it ends: -5% stability"]
    },
    "rebuild_suez_canal": {
      "id": "rebuild_suez_canal",
      "name": "Repair the Suez Canal",
      "cat": "special_projects",
      "cost": 120,
      "days": 365,
      "req": ["we fully control Suez","we fully control Sinai"],
      "fx": ["While active: Civilian Factory Use +15"]
    },
    "rebuild_panama_canal": {
      "id": "rebuild_panama_canal",
      "name": "Repair the Panama Canal",
      "cat": "special_projects",
      "cost": 400,
      "days": 180,
      "req": ["we fully control Panamá Canal","no enemy where an enemy controls Panamá"],
      "fx": ["While active: Civilian Factory Use +25"]
    },
    "emergency_factory_conversion_defensive": {
      "id": "emergency_factory_conversion_defensive",
      "name": "Emergency Factory Conversion",
      "cat": "war_measures",
      "cost": 100,
      "again": 90,
      "fx": ["-5% war support"]
    },
    "emergency_factory_conversion_offensive": {
      "id": "emergency_factory_conversion_offensive",
      "name": "Emergency Factory Conversion",
      "cat": "war_measures",
      "cost": 100,
      "again": 90,
      "fx": ["-5% war support","-3% stability"]
    },
    "desperate_defense": {
      "id": "desperate_defense",
      "name": "Desperate Defense",
      "cat": "war_measures",
      "cost": 50,
      "days": 45,
      "again": 360,
      "req": ["we are more than 50% of the way to surrender"],
      "fx": ["While active: Defense +20%","While active: Entrenchment speed +50%"]
    },
    "women_in_the_workforce": {
      "id": "women_in_the_workforce",
      "name": "Women in the Workforce",
      "cat": "war_measures",
      "cost": 100,
      "days": -1,
      "req": [
        "we are at war",
        "we have the Total Mobilization spirit or we have the Totaler Krieg spirit",
        "we have not completed Women's Rights and Equality",
        "we are democratic or we are communist or we are fascist or we are more than 0% of the way to surrender or we are non-aligned"
      ],
      "fx": ["While active: Conscription +3%","While active: Stability -5%"]
    },
    "war_bonds": {
      "id": "war_bonds",
      "name": "War Bonds",
      "cat": "war_measures",
      "cost": "varies",
      "days": 180,
      "req": ["we are at war","we are democratic or we are communist or we are fascist or we are more than 0% of the way to surrender or we are non-aligned"],
      "fx": ["While active: Consumer Goods Factories factor -20%"]
    },
    "object_to_attaches": {"id":"object_to_attaches","name":"Object to Attaché","cat":"foreign_politics","cost":50,"again":30,"targeted":true,"fx":[]},
    "infrastructure_building_slot": {"id":"infrastructure_building_slot","name":"Region-wide Industrial Integration","cat":"economy_decisions","cost":100,"again":30,"fx":[]},
    "war_building_slot": {"id":"war_building_slot","name":"Industrial Land Appropriation","cat":"economy_decisions","cost":50,"fx":["-2% war support","-2% stability"]},
    "CHI_close_burma_road": {
      "id": "CHI_close_burma_road",
      "name": "Close the Burma Road",
      "cat": "foreign_support",
      "cost": 0,
      "req": ["the controller of Magwe is a subject of us or the controller of Yunnan is a subject of us or the controller of Mandalay is a subject of us"],
      "fx": []
    },
    "CHI_reopen_burma_road": {
      "id": "CHI_reopen_burma_road",
      "name": "Reopen the Burma Road",
      "cat": "foreign_support",
      "cost": 0,
      "req": ["the controller of Magwe is a subject of us or the controller of Yunnan is a subject of us or the controller of Mandalay is a subject of us"],
      "fx": ["Reopen Burma Road in this state"]
    },
    "CHI_close_ledo_road": {
      "id": "CHI_close_ledo_road",
      "name": "Close Ledo Road",
      "cat": "foreign_support",
      "cost": 0,
      "req": ["the controller of Assam is a subject of us or the controller of Yunnan is a subject of us or the controller of Mandalay is a subject of us"],
      "fx": []
    },
    "CHI_reopen_ledo_road": {
      "id": "CHI_reopen_ledo_road",
      "name": "Reopen Ledo Road",
      "cat": "foreign_support",
      "cost": 0,
      "req": ["the controller of Assam is a subject of us or the controller of Yunnan is a subject of us or the controller of Mandalay is a subject of us"],
      "fx": ["Reopen Ledo Road in this state"]
    },
    "CHI_close_the_hump": {
      "id": "CHI_close_the_hump",
      "name": "Close the Hump",
      "cat": "foreign_support",
      "cost": 0,
      "req": ["the controller of Arunachal Pradesh is a subject of us or the controller of Dali is a subject of us"],
      "fx": []
    },
    "CHI_reopen_the_hump": {
      "id": "CHI_reopen_the_hump",
      "name": "Reopen the Hump",
      "cat": "foreign_support",
      "cost": 0,
      "req": ["the controller of Arunachal Pradesh is a subject of us or the controller of Chamdo is a subject of us"],
      "fx": ["Reopen Airlift in this state"]
    },
    "CHI_close_hanoi_route": {
      "id": "CHI_close_hanoi_route",
      "name": "Close the Hanoi Route",
      "cat": "foreign_support",
      "cost": 0,
      "req": ["the controller of Tonkin is a subject of us or the controller of Yunnan is a subject of us"],
      "fx": []
    },
    "nation_building": {
      "id": "nation_building",
      "name": "Nation Building in",
      "cat": "foreign_influence",
      "days": 120,
      "targeted": true,
      "fx": ["While active: Daily Political Power Cost +50%"]
    },
    "socialist_education": {
      "id": "socialist_education",
      "name": "Socialist Education in",
      "cat": "foreign_influence",
      "days": 120,
      "targeted": true,
      "fx": ["While active: Daily Political Power Cost +50%"]
    },
    "paramilitary_training": {
      "id": "paramilitary_training",
      "name": "Paramilitary Training in",
      "cat": "foreign_influence",
      "days": 120,
      "targeted": true,
      "fx": ["While active: Daily Political Power Cost +50%"]
    },
    "military_parade": {
      "id": "military_parade",
      "name": "Military Parade in",
      "cat": "foreign_influence",
      "days": 120,
      "targeted": true,
      "fx": ["While active: Daily Political Power Cost +50%"]
    },
    "fraternal_republic": {
      "id": "fraternal_republic",
      "name": "Fraternal Republic in",
      "cat": "foreign_influence",
      "cost": 50,
      "targeted": true,
      "req": ["we are not communist"],
      "fx": []
    },
    "ultranationalist_coup": {
      "id": "ultranationalist_coup",
      "name": "Ultranationalist Coup in",
      "cat": "foreign_influence",
      "cost": 50,
      "targeted": true,
      "req": ["we are not fascist"],
      "fx": []
    },
    "military_dictatorship": {
      "id": "military_dictatorship",
      "name": "Military Dictatorship in",
      "cat": "foreign_influence",
      "cost": 50,
      "targeted": true,
      "req": ["we are not non-aligned"],
      "fx": []
    },
    "instantiate_collaboration": {"id":"instantiate_collaboration","name":"Create a Collaboration Government in","cat":"foreign_influence","cost":0,"targeted":true,"fx":[]},
    "form_european_union": {
      "id": "form_european_union",
      "name": "Realize European Unity",
      "cat": "form_european_union_category",
      "req": ["we are not a subject","we control Luxembourg"],
      "fx": [
        "Core on Luxembourg",
        "Gain cores on all Dutch states in Europe",
        "Gain cores on all Belgian states in Europe",
        "Gain cores on all French states in Europe",
        "Gain cores on all Italian states in Europe",
        "Gain cores on all German states",
        "Core on Malta"
      ]
    },
    "EU_alpine_expansion_decision": {
      "id": "EU_alpine_expansion_decision",
      "name": "Alpine Expansion",
      "cat": "form_european_union_category",
      "cost": 100,
      "days": 70,
      "req": [
        "we control Jura Mountains",
        "we control Swiss Plateau",
        "we control Western Swiss Alps",
        "we control Ticino",
        "we control Eastern Swiss Alps",
        "we control Vorarlberg",
        "we control Tyrol",
        "we control Upper Austria",
        "we control Steiermark-Kärnten",
        "we control Lower Austria",
        "we control Burgenland"
      ],
      "fx": ["When it ends: Gain cores on all Highlighted states"]
    },
    "EU_iberian_expansion_decision": {
      "id": "EU_iberian_expansion_decision",
      "name": "Iberian Expansion",
      "cat": "form_european_union_category",
      "cost": 100,
      "days": 70,
      "req": [
        "we control Islas Baleares",
        "we control Catalonia",
        "we control Valencia",
        "we control Eastern Aragón",
        "we control Western Aragón",
        "we control Navarra",
        "we control País Vasco",
        "we control Asturias",
        "we control Galicia",
        "we control León",
        "we control Valladolid",
        "we control Burgos",
        "we control Guadalajara",
        "we control Murcia",
        "we control Salamanca",
        "we control Madrid",
        "we control Ciudad Real",
        "we control Extremadura",
        "we control Córdoba",
        "we control Granada",
        "we control Sevilla",
        "we control Gibraltar",
        "we control Porto",
        "we control Guarda",
        "we control Lisbon",
        "we control Santarém",
        "we control Beja"
      ],
      "fx": ["When it ends: Gain cores on all Highlighted states"]
    },
    "EU_west_slavic_expansion_decision": {
      "id": "EU_west_slavic_expansion_decision",
      "name": "West Slavic Expansion",
      "cat": "form_european_union_category",
      "cost": 100,
      "days": 70,
      "req": [
        "we control North Sudetenland",
        "we control South Sudetenland",
        "we control Bohemia",
        "we control Moravia",
        "we control Sudeten Silesia",
        "we control Trans-Olza",
        "we control Western Slovakia",
        "we control Southern Slovakia",
        "we control Eastern Slovakia",
        "we control Carpathian Ruthenia",
        "we control Katowice",
        "we control Poznań",
        "we control Danzig",
        "we control Gdynia",
        "we control Płock",
        "we control Łódz",
        "we control Warsaw",
        "we control Kielce",
        "we control Kraków",
        "we control Stanisławów",
        "we control Lwów",
        "we control Lublin",
        "we control Białystok",
        "we control Nowogródek",
        "we control Wilejka",
        "we control Vilna",
        "we control Polesie",
        "we control Wołyn"
      ],
      "fx": ["When it ends: Gain cores on all Highlighted states"]
    },
    "EU_baltic_expansion_decision": {
      "id": "EU_baltic_expansion_decision",
      "name": "Baltic Expansion",
      "cat": "form_european_union_category",
      "cost": 100,
      "days": 70,
      "req": [
        "we control Memel",
        "we control Žemaitija",
        "we control Sūduva",
        "we control Kaunas",
        "we control Aukštaitija",
        "we control Kurzeme",
        "we control Zemgale",
        "we control Rīga",
        "we control Latgale",
        "we control Vidzeme",
        "we control Tartu",
        "we control Pärnu",
        "we control Virumaa",
        "we control Harju",
        "we control Saaremaa"
      ],
      "fx": ["When it ends: Gain cores on all Highlighted states"]
    },
    "EU_british_isles_expansion_decision": {
      "id": "EU_british_isles_expansion_decision",
      "name": "Expansion into the Isles",
      "cat": "form_european_union_category",
      "cost": 100,
      "days": 70,
      "req": [
        "we control Sussex",
        "we control South-West England",
        "we control Gloucestershire",
        "we control Greater London Area",
        "we control East Anglia",
        "we control East Midlands",
        "we control West Midlands",
        "we control Wales",
        "we control Lancashire",
        "we control Yorkshire",
        "we control Cumbria",
        "we control Northumberland",
        "we control Isle of Man",
        "we control Lanark",
        "we control Lothian",
        "we control Aberdeenshire",
        "we control Scottish Highlands",
        "we control Shetland Islands",
        "we control Northern Ireland",
        "we control Leinster",
        "we control Connaught",
        "we control Munster"
      ],
      "fx": ["When it ends: Gain cores on all Highlighted states"]
    },
    "EU_scandinavian_expansion_decision": {
      "id": "EU_scandinavian_expansion_decision",
      "name": "Scandinavian Expansion",
      "cat": "form_european_union_category",
      "cost": 100,
      "days": 70,
      "req": [
        "we control Southern Jutland",
        "we control Jutland",
        "we control Fyn",
        "we control Sjaelland",
        "we control Bornholm",
        "we control Skåne",
        "we control Gotland",
        "we control Småland",
        "we control Västergötland",
        "we control Bohuslän",
        "we control Östergötland",
        "we control Värmland",
        "we control Södermanland",
        "we control Dalarna",
        "we control Gävleborg",
        "we control Jämtland",
        "we control Västerbotten",
        "we control Norrbotten",
        "we control Oslofjord",
        "we control Telemark",
        "we control Agder",
        "we control Vestlandet",
        "we control Opplandene",
        "we control Trøndelag",
        "we control Helgeland",
        "we control Nordland",
        "we control Troms",
        "we control Finnmark"
      ],
      "fx": ["When it ends: Gain cores on all Highlighted states","When it ends: Cores on Faroe Islands, Jan Mayen, Iceland, Greenland"]
    },
    "EU_karelo_finnish_expansion_decision": {
      "id": "EU_karelo_finnish_expansion_decision",
      "name": "Karelo-Finnish Expansion",
      "cat": "form_european_union_category",
      "cost": 100,
      "days": 70,
      "req": [
        "we control Lappi",
        "we control Petsamo",
        "we control Salla",
        "we control Oulu",
        "we control Kuopio",
        "we control Karjala",
        "we control Kymi",
        "we control Mikkeli",
        "we control Vaasa",
        "we control Häme",
        "we control Turku",
        "we control Uusimaa",
        "we control Åland",
        "we control Murmansk",
        "we control Onega",
        "we control Olonets"
      ],
      "fx": ["When it ends: Gain cores on all Highlighted states"]
    },
    "EU_balkan_expansion_decision": {
      "id": "EU_balkan_expansion_decision",
      "name": "Balkan Expansion",
      "cat": "form_european_union_category",
      "cost": 150,
      "days": 70,
      "req": [
        "we control North Transdanubia",
        "we control South Transdanubia",
        "we control Bács-Kiskun",
        "we control Northern Hungary",
        "we control Transtisza",
        "we control Bucovina",
        "we control Bessarabia",
        "we control Southern Bessarabia",
        "we control Moldova",
        "we control North Transylvania",
        "we control Crisana",
        "we control Transylvania",
        "we control Banat",
        "we control Oltenia",
        "we control Muntenia",
        "we control Northern Dobruja",
        "we control Dobrudja",
        "we control North Slovenia",
        "we control Ljubljana",
        "we control Dalmatia",
        "we control Croatia",
        "we control Vojvodina",
        "we control West Banat",
        "we control Bosnia",
        "we control Herzegovina",
        "we control Montenegro",
        "we control Serbia",
        "we control Morava",
        "we control Kosovo",
        "we control Southern Serbia",
        "we control Debar",
        "we control Macedonia",
        "we control Shkodër",
        "we control Central Albania",
        "we control Northern Epirus",
        "we control Sofia",
        "we control Moesia",
        "we control Burgas",
        "we control Plovdiv"
      ],
      "fx": ["When it ends: Gain cores on all Highlighted states"]
    },
    "EU_aegean_expansion_decision": {
      "id": "EU_aegean_expansion_decision",
      "name": "Aegean Expansion",
      "cat": "form_european_union_category",
      "cost": 100,
      "days": 70,
      "req": [
        "we control Epirus",
        "we control Peloponnese",
        "we control Attica",
        "we control Central Macedonia",
        "we control Thrace",
        "we control Edirne",
        "we control Istanbul",
        "we control Aegean Islands",
        "we control Crete",
        "we control Dodecanese"
      ],
      "fx": ["When it ends: Gain cores on all Highlighted states","When it ends: Core on Cyprus"]
    },
    "EU_belarusian_and_ukrainian_expansion_decision": {
      "id": "EU_belarusian_and_ukrainian_expansion_decision",
      "name": "Belarusian and Ukrainian Expansion",
      "cat": "form_european_union_category",
      "cost": 100,
      "days": 70,
      "req": [
        "we control Vitebsk",
        "we control Minsk",
        "we control Bobruysk",
        "we control Mozyr",
        "we control Gomel",
        "we control Proskuriv",
        "we control Zhytomyr",
        "we control Vinnytsia",
        "we control Kiev",
        "we control Chernigov",
        "we control Cherkasy",
        "we control Balta-Tiraspol",
        "we control Odessa",
        "we control Mykolaiv",
        "we control Poltava",
        "we control Sumy",
        "we control Dnipropetrovsk",
        "we control Kherson",
        "we control Zaporozhe",
        "we control Kharkov",
        "we control Stalino",
        "we control Voroshilovgrad",
        "we control Crimea"
      ],
      "fx": ["When it ends: Gain cores on all Highlighted states"]
    },
    "EU_caucasian_expansion_decision": {
      "id": "EU_caucasian_expansion_decision",
      "name": "Caucasian Expansion",
      "cat": "form_european_union_category",
      "cost": 100,
      "days": 70,
      "req": [
        "we control Sochi",
        "we control Kabardino-Balkaria",
        "we control North Ossetia",
        "we control Chechnya-Ingushetia",
        "we control Dagestan",
        "we control Abkhazia",
        "we control Georgia",
        "we control Armenia",
        "we control Azerbaijan"
      ],
      "fx": ["When it ends: Gain cores on all Highlighted states"]
    },
    "EU_kuban_expansion_decision": {
      "id": "EU_kuban_expansion_decision",
      "name": "Kuban Expansion",
      "cat": "form_european_union_category",
      "cost": 100,
      "days": 70,
      "req": [
        "we control Stavropol",
        "we control Krasnodar",
        "we control Rostov",
        "we control Volgodonsk",
        "we control Millerovo",
        "we control Kalmykia",
        "we control Stalingrad",
        "we control Astrakhan",
        "we control Mikhaylovka",
        "we control Saratov",
        "we control Engels-Marxstadt",
        "we control Balakovo",
        "we control Ural'sk",
        "we control Guryev"
      ],
      "fx": ["When it ends: Gain cores on all Highlighted states"]
    },
    "EU_russian_expansion_decision": {
      "id": "EU_russian_expansion_decision",
      "name": "Russian Expansion",
      "cat": "form_european_union_category",
      "cost": 150,
      "days": 70,
      "req": [
        "we control Leningrad",
        "we control Luga",
        "we control Volkhov",
        "we control Novgorod",
        "we control Pskov",
        "we control Nevel",
        "we control Rzhev",
        "we control Tikhvin",
        "we control Kalinin",
        "we control Yaroslavl",
        "we control Vologda",
        "we control Kargopol",
        "we control Kotlas",
        "we control Arkhangelsk",
        "we control Nenets",
        "we control Pechora",
        "we control Syktyvkar",
        "we control Kirov",
        "we control Northern Urals",
        "we control Perm",
        "we control Smolensk",
        "we control Roslavl",
        "we control Bryansk",
        "we control Orel",
        "we control Kursk",
        "we control Belgorod",
        "we control Voronezh",
        "we control Lipetsk",
        "we control Tambov",
        "we control Kaluga",
        "we control Tula",
        "we control Ryazan",
        "we control Moscow",
        "we control Ivanovo",
        "we control Penza",
        "we control Gorky",
        "we control Ulyanovsky",
        "we control Kuybyshev",
        "we control Orenburg",
        "we control Ufa",
        "we control Udmurtia",
        "we control Kazan",
        "we control Mari El",
        "we control Chuvashia",
        "we control Zlatoust"
      ],
      "fx": ["When it ends: Gain cores on all Highlighted states"]
    },
    "form_hre": {
      "id": "form_hre",
      "name": "Revive the Holy Roman Empire",
      "cat": "form_hre_category",
      "req": [
        "we are not a subject",
        "we control Luxembourg",
        "we control Alsace-Lorraine",
        "we control Savoy",
        "we control North Sudetenland",
        "we control South Sudetenland",
        "we control Bohemia",
        "we control Moravia",
        "we control Sudeten Silesia",
        "we control Piedmont",
        "we control Lombardy",
        "we control South Tyrol",
        "we control Trentino",
        "we control Veneto",
        "we control Emilia Romagna",
        "we control Tuscany",
        "we control Litorale",
        "we control Istria",
        "we control North Slovenia",
        "we control Ljubljana"
      ],
      "fx": [
        "Cores on Luxembourg, Alsace-Lorraine, Savoy, Piedmont, Lombardy, South Tyrol, Veneto, Emilia Romagna, Tuscany, Litorale, Trentino, Istria, North Slovenia, Ljubljana, North Sudetenland, South Sudetenland, Bohemia, Moravia, Sudeten Silesia",
        "Gain cores on all German states except Ostpreussen",
        "Gain cores on all Swiss states",
        "Gain cores on all Austrian states",
        "Gain cores on all Dutch states in Europe",
        "Gain cores on all Belgian states in Europe"
      ]
    },
    "form_greater_german_reich": {
      "id": "form_greater_german_reich",
      "name": "Proclaim the New Order",
      "cat": "form_greater_german_reich_category",
      "cost": 25,
      "req": [
        "we are not a subject",
        "Ile de France is fully controlled by us or a subject",
        "Bohemia is fully controlled by us or a subject",
        "Warsaw is fully controlled by us or a subject",
        "Leningrad is fully controlled by us or a subject",
        "Moscow is fully controlled by us or a subject",
        "Stalingrad is fully controlled by us or a subject"
      ],
      "fx": ["+5% war support","+5% stability"]
    },
    "form_greater_proletarian_state": {
      "id": "form_greater_proletarian_state",
      "name": "Proclaim the Greater German Proletarian State",
      "cat": "form_greater_german_state_category",
      "req": ["we are not a subject","we control Luxembourg"],
      "fx": [
        "Core on Luxembourg",
        "Gain cores on all Dutch states in Europe",
        "Gain cores on all Belgian states in Europe",
        "Gain cores on all French states in Europe",
        "Gain cores on all German states",
        "Gain cores on all of mainland Britain"
      ]
    },
    "adu_restore_sultanate_of_africa": {
      "id": "adu_restore_sultanate_of_africa",
      "name": "Restore the Sultanate of Africa",
      "cat": "form_andalusia_category",
      "req": ["we are not a subject"],
      "fx": ["Gain cores on all Moroccan, Tunisian, Algerian, West Saharan, and Libyan states"]
    },
    "adu_mediterrenean_emirates": {
      "id": "adu_mediterrenean_emirates",
      "name": "Restore the Emirate of Sicily",
      "cat": "form_andalusia_category",
      "req": ["we are not a subject","we control Sicily","we control Malta","we control Dodecanese","we control Crete","we control Cyprus"],
      "fx": ["Cores on Sicily, Malta, Dodecanese, Crete, Cyprus, Sardinia, Corsica"]
    },
    "adu_restore_umayyad_caliphate": {
      "id": "adu_restore_umayyad_caliphate",
      "name": "Recreate the Umayyad Caliphate",
      "cat": "form_andalusia_category",
      "req": [
        "we are not a subject",
        "we control Madinah",
        "we control North Yemen",
        "we control Muscat",
        "we control Palestine",
        "we control Jordan",
        "we control Kuwait",
        "we control Abu Dhabi",
        "we control Qatar",
        "we control South Yemen",
        "we control Socotra",
        "we control Al Anbar",
        "we control Al Basrah",
        "we control Province of Aden",
        "we control Bahrain",
        "we control Musandam",
        "we control Oman",
        "we control Dhofar"
      ],
      "fx": ["Gain cores on all Middle Eastern states"]
    },
    "adu_recreate_rashid_expansion": {
      "id": "adu_recreate_rashid_expansion",
      "name": "The Rashidi Expansion",
      "cat": "form_andalusia_category",
      "req": ["we are not a subject"],
      "fx": ["Gain cores on all Iranian states","Gain cores on all Afghan states","Gain cores on all Pakistani states except 430"]
    },
    "adu_northern_expansion": {
      "id": "adu_northern_expansion",
      "name": "The Northern Expansion",
      "cat": "form_andalusia_category",
      "req": [
        "we are not a subject",
        "we control Azerbaijan",
        "we control Armenia",
        "we control Georgia",
        "we control Dagestan",
        "we control Sochi",
        "we control Chechnya-Ingushetia",
        "we control North Ossetia",
        "we control Kabardino-Balkaria",
        "we control Abkhazia",
        "we control Diyarbakır",
        "we control Hakkari",
        "we control Tunceli",
        "we control Trabzon",
        "we control Van"
      ],
      "fx": [
        "Cores on Azerbaijan, Armenia, Georgia, Dagestan, Sochi, Chechnya-Ingushetia, North Ossetia, Kabardino-Balkaria, Abkhazia, Diyarbakır, Hakkari, Tunceli, Trabzon, Van"
      ]
    },
    "integrate_the_magyars": {
      "id": "integrate_the_magyars",
      "name": "Integrate the Magyars",
      "cat": "form_turan_category",
      "once": true,
      "req": [
        "we are not a subject",
        "we control North Transdanubia",
        "we control Northern Hungary",
        "we control Bács-Kiskun",
        "we control South Transdanubia",
        "we control Transtisza",
        "we control Southern Slovakia",
        "we control North Transylvania",
        "we control Transylvania",
        "we control Banat",
        "we control West Banat",
        "we control Vojvodina",
        "we control Crisana"
      ],
      "fx": []
    },
    "assimilate_the_chinese_turks": {
      "id": "assimilate_the_chinese_turks",
      "name": "Assimilate the Chinese Turks",
      "cat": "form_turan_category",
      "once": true,
      "req": [
        "we are not a subject",
        "we control Yarkand",
        "we control Taklamakan",
        "we control Kunlun Shan",
        "we control Dabancheng",
        "we control Urumqi",
        "we control Dzungaria",
        "we control Khotan",
        "we control Qinghai",
        "we control Haixi",
        "we control Jiuquan",
        "we control Golog",
        "we control Gansu",
        "we control Gannan",
        "we control Ningxia",
        "we control Alxa",
        "we control Wuwei",
        "we control Guyuan",
        "we control Ganzi",
        "we control Liangshan",
        "we control Chamdo",
        "we control Ordos",
        "we control Ulaanbaatar",
        "we control Gobi",
        "we control Khovd",
        "we control Dornod",
        "we control Khövsgöl",
        "we control Xilingol",
        "we control Chahar",
        "we control Suiyuan",
        "we control Hulunbuir",
        "we control Heilungkiang",
        "we control Sungkiang",
        "we control Hebei-Chahar",
        "we control Pailingmiao"
      ],
      "fx": ["Cores on Yarkand, Taklamakan, Kunlun Shan, Dabancheng, Urumqi, Dzungaria, Khotan"]
    },
    "unite_with_the_finno_ugrians": {
      "id": "unite_with_the_finno_ugrians",
      "name": "Unite with the Finno-Ugrians",
      "cat": "form_turan_category",
      "once": true,
      "req": [
        "we are not a subject",
        "we control Uusimaa",
        "we control Kuopio",
        "we control Vaasa",
        "we control Lappi",
        "we control Karjala",
        "we control Salla",
        "we control Petsamo",
        "we control Turku",
        "we control Häme",
        "we control Kymi",
        "we control Oulu",
        "we control Mikkeli",
        "we control Murmansk",
        "we control Onega",
        "we control Olonets",
        "we control Åland",
        "we control Pärnu",
        "we control Tartu",
        "we control Virumaa",
        "we control Harju",
        "we control Saaremaa"
      ],
      "fx": []
    },
    "recruit_in_europe": {
      "id": "recruit_in_europe",
      "name": "Create the European Section",
      "cat": "lar_local_recruitment",
      "cost": 50,
      "days": 90,
      "once": true,
      "fx": ["While active: Civilian Factory Use +300%"]
    },
    "recruit_in_europe_state": {"id":"recruit_in_europe_state","name":"Recruit in","cat":"lar_local_recruitment","cost":0,"again":180,"targeted":true,"fx":[]},
    "recruit_in_north_america": {
      "id": "recruit_in_north_america",
      "name": "Create the North American Section",
      "cat": "lar_local_recruitment",
      "cost": 50,
      "days": 90,
      "once": true,
      "fx": ["While active: Civilian Factory Use +300%"]
    },
    "recruit_in_north_america_state": {
      "id": "recruit_in_north_america_state",
      "name": "Recruit in north america state",
      "cat": "lar_local_recruitment",
      "cost": 0,
      "again": 180,
      "targeted": true,
      "fx": []
    },
    "recruit_in_south_america": {
      "id": "recruit_in_south_america",
      "name": "Create the South American Section",
      "cat": "lar_local_recruitment",
      "cost": 50,
      "days": 90,
      "once": true,
      "fx": ["While active: Civilian Factory Use +300%"]
    },
    "recruit_in_south_america_state": {
      "id": "recruit_in_south_america_state",
      "name": "Recruit in south america state",
      "cat": "lar_local_recruitment",
      "cost": 0,
      "again": 180,
      "targeted": true,
      "fx": []
    },
    "recruit_in_africa": {
      "id": "recruit_in_africa",
      "name": "Create the African Section",
      "cat": "lar_local_recruitment",
      "cost": 50,
      "days": 90,
      "once": true,
      "fx": ["While active: Civilian Factory Use +300%"]
    },
    "recruit_in_africa_state": {"id":"recruit_in_africa_state","name":"Recruit in africa state","cat":"lar_local_recruitment","cost":0,"again":180,"targeted":true,"fx":[]},
    "recruit_in_middle_east": {
      "id": "recruit_in_middle_east",
      "name": "Create the Middle Eastern Section",
      "cat": "lar_local_recruitment",
      "cost": 50,
      "days": 90,
      "once": true,
      "fx": ["While active: Civilian Factory Use +300%"]
    },
    "recruit_in_middle_east_state": {
      "id": "recruit_in_middle_east_state",
      "name": "Recruit in middle east state",
      "cat": "lar_local_recruitment",
      "cost": 0,
      "again": 180,
      "targeted": true,
      "fx": []
    },
    "recruit_in_asia": {
      "id": "recruit_in_asia",
      "name": "Create the Asian Section",
      "cat": "lar_local_recruitment",
      "cost": 50,
      "days": 90,
      "once": true,
      "fx": ["While active: Civilian Factory Use +300%"]
    },
    "recruit_in_asia_state": {"id":"recruit_in_asia_state","name":"Recruit in asia state","cat":"lar_local_recruitment","cost":0,"again":180,"targeted":true,"fx":[]},
    "recruit_in_australia": {
      "id": "recruit_in_australia",
      "name": "Create the Oceanian Section",
      "cat": "lar_local_recruitment",
      "cost": 50,
      "days": 90,
      "once": true,
      "fx": ["While active: Civilian Factory Use +300%"]
    },
    "recruit_in_australia_state": {"id":"recruit_in_australia_state","name":"Recruit in australia state","cat":"lar_local_recruitment","cost":0,"again":180,"targeted":true,"fx":[]},
    "recruit_in_india": {
      "id": "recruit_in_india",
      "name": "Create the Indian Section",
      "cat": "lar_local_recruitment",
      "cost": 50,
      "days": 90,
      "once": true,
      "fx": ["While active: Civilian Factory Use +300%"]
    },
    "recruit_in_india_state": {"id":"recruit_in_india_state","name":"Recruit in india state","cat":"lar_local_recruitment","cost":0,"again":180,"targeted":true,"fx":[]},
    "prepare_for_fascist_civil_war": {"id":"prepare_for_fascist_civil_war","name":"Prepare for Civil War","cat":"fascism_on_the_rise","cost":50,"once":true,"fx":[]},
    "expand_civil_fascism_support": {
      "id": "expand_civil_fascism_support",
      "name": "Expand Civil Support",
      "cat": "fascism_on_the_rise",
      "cost": 25,
      "days": 30,
      "fx": ["While active: Daily Fascism Support +2%","While active: Weekly Stability -3%","While active: Daily Political Power Gain -20%"]
    },
    "army_support_for_fascist_civil_war": {
      "id": "army_support_for_fascist_civil_war",
      "name": "Expand Military Support",
      "cat": "fascism_on_the_rise",
      "cost": 50,
      "days": 30,
      "fx": [
        "While active: Daily Command Power Gain -20%",
        "When it ends: Each time army support is increased, 10% is added to the strength of your faction in the civil war, up to a maximum total strength of 70%"
      ]
    },
    "ensure_general_loyalty_for_fascist_civil_war": {
      "id": "ensure_general_loyalty_for_fascist_civil_war",
      "name": "Ensure Lower Army Command Loyalty",
      "cat": "fascism_on_the_rise",
      "cost": 50,
      "once": true,
      "fx": []
    },
    "ensure_marshal_loyalty_for_fascist_civil_war": {
      "id": "ensure_marshal_loyalty_for_fascist_civil_war",
      "name": "Ensure Upper Army Command Loyalty",
      "cat": "fascism_on_the_rise",
      "cost": 50,
      "once": true,
      "fx": []
    },
    "siphon_equipment_stockpiles_for_fascist_civil_war": {
      "id": "siphon_equipment_stockpiles_for_fascist_civil_war",
      "name": "Siphon Equipment",
      "cat": "fascism_on_the_rise",
      "cost": 50,
      "fx": ["+-1000 Infantry Equipment"]
    },
    "formulate_surprise_attack_plan_for_fascist_civil_war": {
      "id": "formulate_surprise_attack_plan_for_fascist_civil_war",
      "name": "Formulate Surprise Attack Plan",
      "cat": "fascism_on_the_rise",
      "cost": 50,
      "once": true,
      "fx": ["The Surprise Attack Plan gives a 25% attack bonus to all divisions on core territory, for 30 days"]
    },
    "ignite_the_fascist_civil_war_single_state": {
      "id": "ignite_the_fascist_civil_war_single_state",
      "name": "Ignite the fascist civil war single state",
      "cat": "fascism_on_the_rise",
      "cost": 50,
      "once": true,
      "fx": []
    },
    "ignite_the_fascist_civil_war": {"id":"ignite_the_fascist_civil_war","name":"Ignite Civil War","cat":"fascism_on_the_rise","cost":50,"once":true,"fx":[]},
    "rebuild_the_nation_fascism": {
      "id": "rebuild_the_nation_fascism",
      "name": "Rebuild the Nation",
      "cat": "fascism_on_the_rise",
      "cost": 25,
      "days": 365,
      "once": true,
      "fx": [
        "While active: Daily Political Power Gain -1",
        "While active: Factory Repair Speed +20%",
        "While active: Production speed industrial complex factor +10%",
        "While active: Production speed infrastructure factor +10%",
        "While active: Industrial capacity factory +10%",
        "While active: Industrial capacity dockyard +10%"
      ]
    },
    "open_up_political_discourse_fascism": {"id":"open_up_political_discourse_fascism","name":"Open Up Political Discourse","cat":"fascism_on_the_rise","cost":75,"once":true,"fx":[]},
    "discredit_government_fascism": {
      "id": "discredit_government_fascism",
      "name": "Discredit Government",
      "cat": "fascism_on_the_rise",
      "cost": 50,
      "once": true,
      "fx": ["-1% stability","-10% Democratic popularity","-10% Communist popularity","-10% Non-Aligned popularity"]
    },
    "hold_the_fascist_national_referendum": {"id":"hold_the_fascist_national_referendum","name":"Hold National Referendum","cat":"fascism_on_the_rise","cost":100,"once":true,"fx":[]},
    "anti_fascist_raids": {
      "id": "anti_fascist_raids",
      "name": "Anti-Fascist Raids",
      "cat": "political_actions",
      "cost": 50,
      "days": 120,
      "fx": ["-10% stability","While active: Daily Fascism Support -5%","While active: Weekly Stability +0.7%"]
    },
    "anti_democratic_raids": {
      "id": "anti_democratic_raids",
      "name": "Anti-Democratic Raids",
      "cat": "political_actions",
      "cost": 50,
      "days": 120,
      "fx": ["-10% stability","While active: Daily Democracy Support -5%","While active: Weekly Stability +0.7%"]
    },
    "anti_communist_raids": {
      "id": "anti_communist_raids",
      "name": "Anti-Communist Raids",
      "cat": "political_actions",
      "cost": 50,
      "days": 120,
      "fx": ["-10% stability","While active: Daily Communism Support -5%","While active: Weekly Stability +0.7%"]
    },
    "anti_neutrality_raids": {
      "id": "anti_neutrality_raids",
      "name": "Raid Political Dissidents",
      "cat": "political_actions",
      "cost": 50,
      "days": 120,
      "fx": ["-10% stability","While active: Daily Support for Unaligned -5%","While active: Weekly Stability +0.7%"]
    },
    "ban_fascist_party": {"id":"ban_fascist_party","name":"Ban Fascism","cat":"political_actions","cost":100,"days":-1,"fx":["While active: Daily Fascism Support -5%"]},
    "ban_democratic_party": {
      "id": "ban_democratic_party",
      "name": "Ban Democratic Parties",
      "cat": "political_actions",
      "cost": 100,
      "days": -1,
      "fx": ["While active: Daily Democracy Support -5%"]
    },
    "ban_communist_party": {
      "id": "ban_communist_party",
      "name": "Ban Communism",
      "cat": "political_actions",
      "cost": 100,
      "days": -1,
      "fx": ["While active: Daily Communism Support -5%"]
    },
    "ban_neutrality_party": {
      "id": "ban_neutrality_party",
      "name": "Outlaw Activities",
      "cat": "political_actions",
      "cost": 100,
      "days": -1,
      "fx": ["While active: Daily Support for Unaligned -5%"]
    },
    "institute_press_censorship_fascist_state": {
      "id": "institute_press_censorship_fascist_state",
      "name": "Institute Press Censorship",
      "cat": "political_actions",
      "cost": 150,
      "days": 360,
      "fx": [
        "While active: Daily Communism Support -1%",
        "While active: Daily Fascism Support +3%",
        "While active: Daily Democracy Support -1%",
        "While active: Daily Support for Unaligned -1%"
      ]
    },
    "institute_press_censorship_democratic_state": {
      "id": "institute_press_censorship_democratic_state",
      "name": "Institute Press Censorship",
      "cat": "political_actions",
      "cost": 150,
      "days": 360,
      "fx": [
        "While active: Daily Communism Support -1%",
        "While active: Daily Fascism Support -1%",
        "While active: Daily Democracy Support +3%",
        "While active: Daily Support for Unaligned -1%"
      ]
    },
    "institute_press_censorship_communist_state": {
      "id": "institute_press_censorship_communist_state",
      "name": "Institute Press Censorship",
      "cat": "political_actions",
      "cost": 150,
      "days": 360,
      "fx": [
        "While active: Daily Communism Support +3%",
        "While active: Daily Fascism Support -1%",
        "While active: Daily Democracy Support -1%",
        "While active: Daily Support for Unaligned -1%"
      ]
    },
    "institute_press_censorship_neutrality_state": {
      "id": "institute_press_censorship_neutrality_state",
      "name": "Institute Press Censorship",
      "cat": "political_actions",
      "cost": 150,
      "days": 360,
      "fx": [
        "While active: Daily Communism Support -1%",
        "While active: Daily Fascism Support -1%",
        "While active: Daily Democracy Support -1%",
        "While active: Daily Support for Unaligned +3%"
      ]
    },
    "develop_shandong_aluminium_deposits": {
      "id": "develop_shandong_aluminium_deposits",
      "name": "Develop Shandong Bauxite Deposits",
      "cat": "prospect_for_resources",
      "cost": 25,
      "days": 60,
      "once": true,
      "req": ["we have researched Excavation III","we own Shandong","we control Shandong"],
      "fx": ["While active: Civilian Factory Use +300%"]
    },
    "develop_suiyuan_steel_deposits": {
      "id": "develop_suiyuan_steel_deposits",
      "name": "Develop Suiyuan Iron Ore Deposits",
      "cat": "prospect_for_resources",
      "cost": 25,
      "days": 60,
      "once": true,
      "req": ["we have researched Excavation II","we own Suiyuan","we control Suiyuan"],
      "fx": ["While active: Civilian Factory Use +300%"]
    },
    "develop_daqing_deposits": {
      "id": "develop_daqing_deposits",
      "name": "Explore Daqing Oil Fields",
      "cat": "prospect_for_resources",
      "cost": 25,
      "days": 60,
      "once": true,
      "req": ["we have researched Excavation II","we own Heilungkiang","we control Heilungkiang"],
      "fx": ["While active: Civilian Factory Use +300%"]
    },
    "develop_daqing_deposits_2": {
      "id": "develop_daqing_deposits_2",
      "name": "Expand Daqing Oil Fields",
      "cat": "prospect_for_resources",
      "cost": 25,
      "days": 120,
      "once": true,
      "req": ["we have researched Excavation IV","we own Heilungkiang","we control Heilungkiang"],
      "fx": ["While active: Civilian Factory Use +500%"]
    },
    "develop_yunnan_aluminium_deposits": {
      "id": "develop_yunnan_aluminium_deposits",
      "name": "Develop Yunnan Bauxite Deposits",
      "cat": "prospect_for_resources",
      "cost": 25,
      "days": 60,
      "once": true,
      "req": ["we have researched Excavation III","we own Yunnan","we control Yunnan"],
      "fx": ["While active: Civilian Factory Use +300%"]
    },
    "develop_kirin_aluminium_deposits": {
      "id": "develop_kirin_aluminium_deposits",
      "name": "Develop Kirin Bauxite Deposits",
      "cat": "prospect_for_resources",
      "cost": 25,
      "days": 60,
      "once": true,
      "req": ["we have researched Excavation II","we own Kirin","we control Kirin"],
      "fx": ["While active: Civilian Factory Use +300%"]
    },
    "develop_sichuan_aluminium_deposits": {
      "id": "develop_sichuan_aluminium_deposits",
      "name": "Develop Sichuan Bauxite Deposits",
      "cat": "prospect_for_resources",
      "cost": 25,
      "days": 60,
      "once": true,
      "req": ["we have researched Excavation III","we own Sichuan","we control Sichuan"],
      "fx": ["While active: Civilian Factory Use +300%"]
    },
    "develop_nauru_tungsten_deposits": {
      "id": "develop_nauru_tungsten_deposits",
      "name": "Develop Nauru Tungsten Deposits",
      "cat": "prospect_for_resources",
      "cost": 25,
      "days": 60,
      "once": true,
      "req": ["we have researched Excavation IV","we own Nauru","we control Nauru"],
      "fx": ["While active: Civilian Factory Use +300%"]
    },
    "develop_tonkin_aluminium_deposits": {
      "id": "develop_tonkin_aluminium_deposits",
      "name": "Develop Tonkin Bauxite Deposits",
      "cat": "prospect_for_resources",
      "cost": 25,
      "days": 60,
      "once": true,
      "req": ["we have researched Excavation IV","we own Tonkin","we control Tonkin"],
      "fx": ["While active: Civilian Factory Use +300%"]
    },
    "develop_singapore_aluminium_deposits": {
      "id": "develop_singapore_aluminium_deposits",
      "name": "Develop Malayan Bauxite Deposits",
      "cat": "prospect_for_resources",
      "cost": 25,
      "days": 60,
      "once": true,
      "req": ["we have researched Excavation II","we own Kuala Lumpur","we control Kuala Lumpur"],
      "fx": ["While active: Civilian Factory Use +300%"]
    },
    "develop_sirte_oil_fields": {
      "id": "develop_sirte_oil_fields",
      "name": "Develop the Oil Fields in the Sirte",
      "cat": "prospect_for_resources",
      "cost": 25,
      "days": 60,
      "once": true,
      "req": ["we have researched Excavation III","we own Sirte","we control Sirte"],
      "fx": ["While active: Civilian Factory Use +300%"]
    },
    "develop_benghazi_oil_fields": {
      "id": "develop_benghazi_oil_fields",
      "name": "Develop the Benghasi Oil Fields",
      "cat": "prospect_for_resources",
      "cost": 25,
      "days": 60,
      "once": true,
      "req": ["we have researched Excavation IV","we own Benghasi","we control Benghasi"],
      "fx": ["While active: Civilian Factory Use +300%"]
    },
    "develop_tasmania_aluminium_deposits": {
      "id": "develop_tasmania_aluminium_deposits",
      "name": "Exploit Bauxite Deposits in Tasmania",
      "cat": "prospect_for_resources",
      "cost": 25,
      "days": 90,
      "once": true,
      "req": ["we have researched Excavation III","we own Tasmania","we control Tasmania"],
      "fx": ["While active: Civilian Factory Use +300%"]
    },
    "develop_west_africa_aluminium_deposits": {
      "id": "develop_west_africa_aluminium_deposits",
      "name": "Exploit Bauxite Deposits in West Africa",
      "cat": "prospect_for_resources",
      "cost": 25,
      "days": 90,
      "once": true,
      "req": ["we have researched Excavation III","we own Bamako","we control Bamako"],
      "fx": ["While active: Civilian Factory Use +300%"]
    },
    "develop_west_africa_aluminium_deposits_2": {
      "id": "develop_west_africa_aluminium_deposits_2",
      "name": "Expand Bauxite Mines in West Africa",
      "cat": "prospect_for_resources",
      "cost": 25,
      "days": 90,
      "once": true,
      "req": ["we have researched Excavation V","we own Bamako","we control Bamako"],
      "fx": ["While active: Civilian Factory Use +300%"]
    },
    "develop_madagascar_rubber_plantations": {
      "id": "develop_madagascar_rubber_plantations",
      "name": "Grow Rubber Plantations in Madagascar",
      "cat": "prospect_for_resources",
      "cost": 25,
      "days": 180,
      "once": true,
      "req": ["we own Madagascar","we control Madagascar"],
      "fx": ["While active: Civilian Factory Use +300%"]
    },
    "develop_madagascar_rubber_plantations_2": {
      "id": "develop_madagascar_rubber_plantations_2",
      "name": "Expand Rubber Plantations in Madagascar",
      "cat": "prospect_for_resources",
      "cost": 25,
      "days": 180,
      "once": true,
      "req": ["we own Madagascar","we control Madagascar"],
      "fx": ["While active: Civilian Factory Use +500%"]
    },
    "develop_sidamo_rubber_plantations": {
      "id": "develop_sidamo_rubber_plantations",
      "name": "Grow Rubber Plantations in Sidamo",
      "cat": "prospect_for_resources",
      "cost": 25,
      "days": 180,
      "once": true,
      "req": ["we own Sidamo","we control Sidamo","we have researched Excavation III"],
      "fx": ["While active: Civilian Factory Use +500%"]
    },
    "develop_nigeria_rubber_plantations": {
      "id": "develop_nigeria_rubber_plantations",
      "name": "Grow Rubber Plantations in Nigeria",
      "cat": "prospect_for_resources",
      "cost": 25,
      "days": 180,
      "once": true,
      "req": ["we own Lagos","we control Lagos"],
      "fx": ["While active: Civilian Factory Use +300%"]
    },
    "develop_ems_oil_fields": {
      "id": "develop_ems_oil_fields",
      "name": "Develop Emsland Oil Fields",
      "cat": "prospect_for_resources",
      "cost": 25,
      "days": 120,
      "once": true,
      "req": ["we have researched Excavation IV","we own Weser-Ems","we control Weser-Ems"],
      "fx": ["While active: Civilian Factory Use +300%"]
    },
    "develop_matzen_oil_fields": {
      "id": "develop_matzen_oil_fields",
      "name": "Develop the Matzen Oil Fields",
      "cat": "prospect_for_resources",
      "cost": 25,
      "days": 120,
      "once": true,
      "req": ["we have researched Excavation V","we own Lower Austria","we control Lower Austria"],
      "fx": ["While active: Civilian Factory Use +300%"]
    },
    "develop_friesland_oil_fields": {
      "id": "develop_friesland_oil_fields",
      "name": "Develop Friesland Oil Fields",
      "cat": "prospect_for_resources",
      "cost": 25,
      "days": 120,
      "once": true,
      "req": ["we have researched Excavation IV","we own Friesland","we control Friesland"],
      "fx": ["While active: Civilian Factory Use +300%"]
    },
    "expand_eregli_steel_works": {
      "id": "expand_eregli_steel_works",
      "name": "Expand Eregli Steel Works",
      "cat": "prospect_for_resources",
      "cost": 25,
      "days": 90,
      "once": true,
      "req": ["we have researched Construction III","we own Izmit","we control Izmit"],
      "fx": ["While active: Civilian Factory Use +15"]
    },
    "develop_newfoundland_steel": {
      "id": "develop_newfoundland_steel",
      "name": "Expand Iron Ore Mines in Newfoundland",
      "cat": "prospect_for_resources",
      "cost": 25,
      "days": 90,
      "once": true,
      "req": ["we have researched Excavation III","we own Newfoundland","we control Newfoundland"],
      "fx": ["While active: Civilian Factory Use +300%"]
    },
    "develop_quebec_steel": {
      "id": "develop_quebec_steel",
      "name": "Expand Iron Ore Mines in Quebec",
      "cat": "prospect_for_resources",
      "cost": 25,
      "days": 90,
      "once": true,
      "req": ["we have researched Excavation II","we own Ouest du Quebec","we control Ouest du Quebec"],
      "fx": ["While active: Civilian Factory Use +300%"]
    },
    "develop_cuba_steel": {
      "id": "develop_cuba_steel",
      "name": "Expand Iron Ore Mines in Cuba",
      "cat": "prospect_for_resources",
      "cost": 25,
      "days": 90,
      "once": true,
      "req": ["we have researched Excavation III","we own Cuba","we control Cuba"],
      "fx": ["While active: Civilian Factory Use +300%"]
    },
    "develop_arkansas_aluminium_deposits": {
      "id": "develop_arkansas_aluminium_deposits",
      "name": "Develop Arkansas Bauxite Deposits",
      "cat": "prospect_for_resources",
      "cost": 25,
      "req": ["we have researched Excavation II","we own Arkansas","we control Arkansas"],
      "fx": ["While active: Civilian Factory Use +12","When it ends: This action is repeatable"]
    },
    "develop_new_york_aluminium_deposits": {
      "id": "develop_new_york_aluminium_deposits",
      "name": "Develop Aluminium Production in New York",
      "cat": "prospect_for_resources",
      "cost": 25,
      "req": ["we have researched Construction II","we own New York","we control New York"],
      "fx": ["While active: Civilian Factory Use +12","When it ends: This action is repeatable"]
    },
    "develop_tennessee_aluminium_deposits": {
      "id": "develop_tennessee_aluminium_deposits",
      "name": "Develop Aluminium Production in Tennessee",
      "cat": "prospect_for_resources",
      "cost": 25,
      "req": ["we have researched Construction II","we own Tennessee","we control Tennessee"],
      "fx": ["While active: Civilian Factory Use +12","When it ends: This action is repeatable"]
    },
    "develop_washington_aluminium_deposits": {
      "id": "develop_washington_aluminium_deposits",
      "name": "Develop Aluminium Production in Washington State",
      "cat": "prospect_for_resources",
      "cost": 25,
      "req": ["we have researched Construction II","we own Washington","we control Washington"],
      "fx": ["While active: Civilian Factory Use +12","When it ends: This action is repeatable"]
    },
    "develop_idaho_tungsten_deposits": {
      "id": "develop_idaho_tungsten_deposits",
      "name": "Develop Idaho Tungsten Deposits",
      "cat": "prospect_for_resources",
      "cost": 25,
      "req": ["we have researched Excavation III","we own Idaho","we control Idaho"],
      "fx": ["While active: Civilian Factory Use +12","When it ends: This action is repeatable"]
    },
    "develop_california_tungsten_deposits": {
      "id": "develop_california_tungsten_deposits",
      "name": "Develop California Tungsten Deposits",
      "cat": "prospect_for_resources",
      "cost": 25,
      "req": ["we have researched Excavation III","we own California","we control California"],
      "fx": ["While active: Civilian Factory Use +12","When it ends: This action is repeatable"]
    },
    "develop_minnesota_steel_deposits": {
      "id": "develop_minnesota_steel_deposits",
      "name": "Expand Steel Works in Minnesota",
      "cat": "prospect_for_resources",
      "cost": 25,
      "req": ["we have researched Construction III","we own Minnesota","we control Minnesota"],
      "fx": ["While active: Civilian Factory Use +12","When it ends: This action is repeatable"]
    },
    "develop_pennsylvania_steel_deposits": {
      "id": "develop_pennsylvania_steel_deposits",
      "name": "Develop Pennsylvania Iron Ore Deposits",
      "cat": "prospect_for_resources",
      "cost": 25,
      "req": ["we have researched Excavation III","we own Pennsylvania","we control Pennsylvania"],
      "fx": ["While active: Civilian Factory Use +12","When it ends: This action is repeatable"]
    },
    "develop_ohio_steel_deposits": {
      "id": "develop_ohio_steel_deposits",
      "name": "Expand Steel Works in Ohio",
      "cat": "prospect_for_resources",
      "cost": 25,
      "req": ["we have researched Construction III","we own Ohio","we control Ohio"],
      "fx": ["While active: Civilian Factory Use +12","When it ends: This action is repeatable"]
    },
    "develop_indiana_steel_deposits": {
      "id": "develop_indiana_steel_deposits",
      "name": "Expand Steel Works in Indiana",
      "cat": "prospect_for_resources",
      "cost": 25,
      "req": ["we have researched Construction III","we own Indiana","we control Indiana"],
      "fx": ["While active: Civilian Factory Use +12","When it ends: This action is repeatable"]
    },
    "develop_montana_chromium_deposits": {
      "id": "develop_montana_chromium_deposits",
      "name": "Develop Montana Chromium Deposits",
      "cat": "prospect_for_resources",
      "cost": 25,
      "req": ["we have researched Excavation IV","we own Montana","we control Montana"],
      "fx": ["While active: Civilian Factory Use +12","When it ends: This action is repeatable"]
    },
    "develop_katanga_cobalt_deposits": {
      "id": "develop_katanga_cobalt_deposits",
      "name": "Develop Katanga Cobalt Deposits",
      "cat": "prospect_for_resources",
      "cost": 25,
      "days": 60,
      "once": true,
      "req": ["we own Elisabethville","we control Elisabethville","we have researched Excavation III"],
      "fx": ["While active: Civilian Factory Use +500%"]
    },
    "develop_katanga_cobalt_deposits_2": {
      "id": "develop_katanga_cobalt_deposits_2",
      "name": "Further Expand the Katanga Cobalt Deposits",
      "cat": "prospect_for_resources",
      "cost": 25,
      "days": 60,
      "once": true,
      "req": ["we own Elisabethville","we control Elisabethville","we have researched Excavation III"],
      "fx": ["While active: Civilian Factory Use +7"]
    },
    "develop_california_chromium_deposits": {
      "id": "develop_california_chromium_deposits",
      "name": "Develop California Chromium Deposits",
      "cat": "prospect_for_resources",
      "cost": 25,
      "req": ["we have researched Excavation IV","we own California","we control California"],
      "fx": ["While active: Civilian Factory Use +12","When it ends: This action is repeatable"]
    },
    "develop_oregon_chromium_deposits": {
      "id": "develop_oregon_chromium_deposits",
      "name": "Develop Oregon Chromium Deposits",
      "cat": "prospect_for_resources",
      "cost": 25,
      "req": ["we have researched Excavation IV","we own Oregon","we control Oregon"],
      "fx": ["While active: Civilian Factory Use +12","When it ends: This action is repeatable"]
    },
    "develop_alaska_chromium_deposits": {
      "id": "develop_alaska_chromium_deposits",
      "name": "Develop Alaska Chromium Deposits",
      "cat": "prospect_for_resources",
      "cost": 25,
      "req": ["we have researched Excavation V","we own Alaska","we control Alaska"],
      "fx": ["While active: Civilian Factory Use +12","When it ends: This action is repeatable"]
    },
    "develop_south_sakhalin_oil_deposits": {
      "id": "develop_south_sakhalin_oil_deposits",
      "name": "Develop South Sakhalin Oil Fields",
      "cat": "prospect_for_resources",
      "cost": 25,
      "days": 60,
      "once": true,
      "req": ["we fully control South Sakhalin","we have researched Excavation III","we control South Sakhalin"],
      "fx": ["While active: Civilian Factory Use +300%"]
    },
    "develop_palau_aluminium_deposits": {
      "id": "develop_palau_aluminium_deposits",
      "name": "Develop Palau Bauxite Deposits",
      "cat": "prospect_for_resources",
      "cost": 25,
      "days": 60,
      "once": true,
      "req": ["we fully control Palau","we have researched Excavation II","we control Palau"],
      "fx": ["While active: Civilian Factory Use +300%"]
    },
    "develop_taiwan_aluminium_deposits": {
      "id": "develop_taiwan_aluminium_deposits",
      "name": "Develop the Sun Moon Lake Aluminum Industry",
      "cat": "prospect_for_resources",
      "cost": 25,
      "days": 60,
      "once": true,
      "req": ["we fully control Taiwan","we have researched Excavation II","we control Taiwan"],
      "fx": ["While active: Civilian Factory Use +300%"]
    },
    "develop_taiwan_oil_deposits": {
      "id": "develop_taiwan_oil_deposits",
      "name": "Develop the Formosan Oil Fields",
      "cat": "prospect_for_resources",
      "cost": 25,
      "days": 60,
      "once": true,
      "req": ["we fully control Taiwan","we have researched Excavation III","we control Taiwan"],
      "fx": ["While active: Civilian Factory Use +300%"]
    },
    "develop_cornwall_tungsten_deposits_1": {
      "id": "develop_cornwall_tungsten_deposits_1",
      "name": "Develop Drakelands Tungsten Mine",
      "cat": "prospect_for_resources",
      "cost": 25,
      "days": 60,
      "once": true,
      "req": ["we have researched Excavation II","we own South-West England","we control South-West England"],
      "fx": ["While active: Civilian Factory Use +300%"]
    },
    "develop_cornwall_tungsten_deposits_2": {
      "id": "develop_cornwall_tungsten_deposits_2",
      "name": "Expand Drakelands Tungsten Mine",
      "cat": "prospect_for_resources",
      "cost": 25,
      "days": 90,
      "once": true,
      "req": ["we have researched Excavation IV","we own South-West England","we control South-West England"],
      "fx": ["While active: Civilian Factory Use +500%"]
    },
    "develop_leningrad_aluminium_deposits": {
      "id": "develop_leningrad_aluminium_deposits",
      "name": "Expand Aluminium Plant in Leningrad",
      "cat": "prospect_for_resources",
      "cost": 25,
      "days": 60,
      "once": true,
      "req": ["we fully control Leningrad","we have researched Excavation II","we control Leningrad"],
      "fx": ["While active: Civilian Factory Use +300%"]
    },
    "develop_kamensk_aluminium_deposits": {
      "id": "develop_kamensk_aluminium_deposits",
      "name": "Expand Kamensk Aluminium Plant",
      "cat": "prospect_for_resources",
      "cost": 25,
      "days": 60,
      "once": true,
      "req": ["we fully control Sverdlovsk","we have researched Excavation II","we control Sverdlovsk"],
      "fx": ["While active: Civilian Factory Use +300%"]
    },
    "develop_stalingrad_aluminium_deposits": {
      "id": "develop_stalingrad_aluminium_deposits",
      "name": "Expand Aluminium Plant in Stalingrad",
      "cat": "prospect_for_resources",
      "cost": 25,
      "days": 60,
      "once": true,
      "req": ["we fully control Stalingrad","we have researched Excavation IV","we control Stalingrad"],
      "fx": ["While active: Civilian Factory Use +300%"]
    },
    "develop_caucasus_tungsten_deposits_1": {
      "id": "develop_caucasus_tungsten_deposits_1",
      "name": "Develop Tungsten Mines in the Caucasus",
      "cat": "prospect_for_resources",
      "cost": 25,
      "days": 60,
      "once": true,
      "req": ["we have researched Excavation III","we own Sochi","we control Sochi"],
      "fx": ["While active: Civilian Factory Use +300%"]
    },
    "develop_caucasus_tungsten_deposits_2": {
      "id": "develop_caucasus_tungsten_deposits_2",
      "name": "Expand Tungsten Mines in the Caucasus",
      "cat": "prospect_for_resources",
      "cost": 25,
      "days": 90,
      "once": true,
      "req": ["we have researched Excavation V","we own Sochi","we control Sochi"],
      "fx": ["While active: Civilian Factory Use +500%"]
    },
    "develop_kyzyl_tungsten_deposits": {
      "id": "develop_kyzyl_tungsten_deposits",
      "name": "Develop Tungsten Mines in Kyzyl",
      "cat": "prospect_for_resources",
      "cost": 25,
      "days": 60,
      "once": true,
      "req": ["we have researched Excavation IV","we own Kyzyl Orda","we control Kyzyl Orda"],
      "fx": ["While active: Civilian Factory Use +300%"]
    },
    "develop_chelyabinsk_steel_deposits": {
      "id": "develop_chelyabinsk_steel_deposits",
      "name": "Expand Steel Mill in Chelyabinsk",
      "cat": "prospect_for_resources",
      "cost": 25,
      "days": 90,
      "req": ["we have researched Construction IV","we own Chelyabinsk","we control Chelyabinsk","we have researched Construction III"],
      "fx": ["While active: Civilian Factory Use +500%"]
    },
    "develop_zlatoust_steel_deposits_1": {
      "id": "develop_zlatoust_steel_deposits_1",
      "name": "Build Steel Mill in Zlatoust",
      "cat": "prospect_for_resources",
      "cost": 25,
      "days": 60,
      "once": true,
      "req": ["we have researched Construction III","we own Zlatoust","we control Zlatoust"],
      "fx": ["While active: Civilian Factory Use +300%"]
    },
    "develop_zlatoust_steel_deposits_2": {
      "id": "develop_zlatoust_steel_deposits_2",
      "name": "Expand Steel Mill in Zlatoust",
      "cat": "prospect_for_resources",
      "cost": 25,
      "days": 90,
      "once": true,
      "req": ["we have researched Construction IV","we own Zlatoust","we control Zlatoust"],
      "fx": ["While active: Civilian Factory Use +500%"]
    },
    "develop_kursk_steel_deposits": {
      "id": "develop_kursk_steel_deposits",
      "name": "Develop Iron Ore Mines near Kursk",
      "cat": "prospect_for_resources",
      "cost": 25,
      "req": ["we have researched Excavation II","we own Kursk","we control Kursk"],
      "fx": ["While active: Civilian Factory Use +9"]
    },
    "develop_kursk_steel_deposits_2": {
      "id": "develop_kursk_steel_deposits_2",
      "name": "Expand Iron Ore Mines near Kursk",
      "cat": "prospect_for_resources",
      "cost": 25,
      "req": ["we have researched Excavation III","we own Kursk","we control Kursk"],
      "fx": ["While active: Civilian Factory Use +12"]
    },
    "develop_kursk_steel_deposits_3": {
      "id": "develop_kursk_steel_deposits_3",
      "name": "Strip Mine Iron Ore Deposits near Kursk",
      "cat": "prospect_for_resources",
      "cost": 25,
      "req": ["we have researched Excavation IV","we own Kursk","we control Kursk"],
      "fx": ["While active: Civilian Factory Use +15"]
    },
    "develop_Belgorod_steel_deposits": {
      "id": "develop_Belgorod_steel_deposits",
      "name": "Develop Iron Ore Mines near Belgorod",
      "cat": "prospect_for_resources",
      "cost": 25,
      "req": ["we have researched Excavation II","we own Belgorod","we control Belgorod"],
      "fx": ["While active: Civilian Factory Use +9"]
    },
    "develop_Belgorod_steel_deposits_2": {
      "id": "develop_Belgorod_steel_deposits_2",
      "name": "Expand Iron Ore Mines near Belgorod",
      "cat": "prospect_for_resources",
      "cost": 25,
      "req": ["we have researched Excavation III","we own Belgorod","we control Belgorod"],
      "fx": ["While active: Civilian Factory Use +12"]
    },
    "develop_Belgorod_steel_deposits_3": {
      "id": "develop_Belgorod_steel_deposits_3",
      "name": "Strip Mine Iron Ore Deposits near Belgorod",
      "cat": "prospect_for_resources",
      "cost": 25,
      "req": ["we have researched Excavation IV","we own Belgorod","we control Belgorod"],
      "fx": ["While active: Civilian Factory Use +15"]
    },
    "develop_uralsk_chromium_deposits_1": {
      "id": "develop_uralsk_chromium_deposits_1",
      "name": "Develop Uralsk Chromium Mines",
      "cat": "prospect_for_resources",
      "cost": 25,
      "days": 60,
      "once": true,
      "req": ["we have researched Excavation III","we own Ural'sk","we control Ural'sk"],
      "fx": ["While active: Civilian Factory Use +300%"]
    },
    "develop_uralsk_chromium_deposits_2": {
      "id": "develop_uralsk_chromium_deposits_2",
      "name": "Expand Uralsk Chromium Mines",
      "cat": "prospect_for_resources",
      "cost": 25,
      "days": 90,
      "once": true,
      "req": ["we have researched Excavation V","we own Ural'sk","we control Ural'sk"],
      "fx": ["While active: Civilian Factory Use +500%"]
    },
    "develop_liaotung_iron_ore_deposits": {
      "id": "develop_liaotung_iron_ore_deposits",
      "name": "Develop Liaotung Iron Ore Deposits",
      "cat": "prospect_for_resources",
      "cost": 25,
      "days": 90,
      "once": true,
      "req": ["we have researched Construction III","we have researched Excavation I","we own Liaoning","we control Liaoning"],
      "fx": ["While active: Civilian Factory Use +300%"]
    },
    "develop_chosen_tungsten_deposits": {
      "id": "develop_chosen_tungsten_deposits",
      "name": "Expand Tungsten Mines around Chosin",
      "cat": "prospect_for_resources",
      "cost": 25,
      "req": ["we have researched Excavation III","we own Pyongan-Hwanghae","we control Pyongan-Hwanghae"],
      "fx": ["While active: Civilian Factory Use +500%"]
    },
    "develop_abu_dhabi_oil_fields": {
      "id": "develop_abu_dhabi_oil_fields",
      "name": "Develop Abu Dhabi Oil Fields",
      "cat": "prospect_for_resources",
      "cost": 25,
      "days": 120,
      "once": true,
      "req": ["we have researched Excavation V","we own Abu Dhabi","we control Abu Dhabi"],
      "fx": ["While active: Civilian Factory Use +9"]
    },
    "develop_kuwait_oil_fields": {
      "id": "develop_kuwait_oil_fields",
      "name": "Develop Burgan Oil Fields",
      "cat": "prospect_for_resources",
      "cost": 25,
      "req": ["we have researched Excavation V","we own Kuwait","we control Kuwait"],
      "fx": ["While active: Civilian Factory Use +12"]
    },
    "develop_omani_oil_fields": {
      "id": "develop_omani_oil_fields",
      "name": "Develop Inner Omani Oil Fields",
      "cat": "prospect_for_resources",
      "cost": 25,
      "days": 120,
      "once": true,
      "req": ["we have researched Excavation V","we own Oman","we control Oman"],
      "fx": ["While active: Civilian Factory Use +9"]
    },
    "develop_khuzestan_oil_fields": {
      "id": "develop_khuzestan_oil_fields",
      "name": "Develop Aghajari Oil Fields",
      "cat": "prospect_for_resources",
      "cost": 25,
      "days": 180,
      "once": true,
      "req": ["we have researched Excavation IV","we own Khuzestan","we control Khuzestan"],
      "fx": ["While active: Civilian Factory Use +9"]
    },
    "develop_fars_oil_fields": {
      "id": "develop_fars_oil_fields",
      "name": "Expand Gachsaran Oil Fields",
      "cat": "prospect_for_resources",
      "cost": 25,
      "days": 120,
      "once": true,
      "req": ["we have researched Excavation IV","we own Fars","we control Fars"],
      "fx": ["While active: Civilian Factory Use +300%"]
    },
    "develop_baghdad_oil_fields": {
      "id": "develop_baghdad_oil_fields",
      "name": "Develop Az Zubair and Nahr Umr Oil Fields",
      "cat": "prospect_for_resources",
      "cost": 25,
      "days": 90,
      "once": true,
      "req": ["we have researched Excavation V","we own Baghdad","we control Baghdad"],
      "fx": ["While active: Civilian Factory Use +12"]
    },
    "develop_mosul_oil_fields": {
      "id": "develop_mosul_oil_fields",
      "name": "Develop Baba Gurgur Oil Fields",
      "cat": "prospect_for_resources",
      "cost": 25,
      "days": 180,
      "once": true,
      "req": ["we own Mosul","we control Mosul"],
      "fx": ["While active: Civilian Factory Use +15"]
    },
    "develop_nejd_oil_fields": {
      "id": "develop_nejd_oil_fields",
      "name": "Develop Ghawar Oil Fields",
      "cat": "prospect_for_resources",
      "cost": 25,
      "req": ["we have researched Excavation V","we own Dammam","we control Dammam"],
      "fx": ["While active: Civilian Factory Use +15"]
    },
    "develop_eastern_desert_oil_fields": {
      "id": "develop_eastern_desert_oil_fields",
      "name": "Develop Ras Gharib Oil Fields",
      "cat": "prospect_for_resources",
      "cost": 25,
      "days": 60,
      "once": true,
      "req": ["we have researched Excavation III","we own Eastern Desert","we control Eastern Desert"],
      "fx": ["While active: Civilian Factory Use +300%"]
    },
    "develop_qatar_oil_fields": {
      "id": "develop_qatar_oil_fields",
      "name": "Develop Dukhan Oil Fields",
      "cat": "prospect_for_resources",
      "cost": 25,
      "days": 90,
      "once": true,
      "req": ["we have researched Excavation IV","we own Qatar","we control Qatar"],
      "fx": ["While active: Civilian Factory Use +6"]
    },
    "develop_malatya_chromium_deposits": {
      "id": "develop_malatya_chromium_deposits",
      "name": "Develop Malatya Chromium Deposits",
      "cat": "prospect_for_resources",
      "cost": 25,
      "days": 90,
      "once": true,
      "req": ["we have researched Excavation II","we own Malatya","we control Malatya"],
      "fx": ["While active: Civilian Factory Use +500%"]
    },
    "develop_mersin_chromium_mines": {
      "id": "develop_mersin_chromium_mines",
      "name": "Develop Mersin Chromium Mines",
      "cat": "prospect_for_resources",
      "cost": 25,
      "days": 120,
      "once": true,
      "req": ["we have researched Excavation III","we own Mersin","we control Mersin"],
      "fx": ["While active: Civilian Factory Use +6"]
    },
    "utilize_diyarbakir_chromium_deposits": {
      "id": "utilize_diyarbakir_chromium_deposits",
      "name": "Utilize Diyarbakır Chromium Deposits",
      "cat": "prospect_for_resources",
      "cost": 25,
      "days": 180,
      "once": true,
      "req": ["we have researched Excavation II","we own Diyarbakır","we control Diyarbakır"],
      "fx": ["While active: Civilian Factory Use +400%"]
    },
    "expand_the_kirikkale_steel_mills": {
      "id": "expand_the_kirikkale_steel_mills",
      "name": "Expand the Kırıkkale Steel Mills",
      "cat": "prospect_for_resources",
      "cost": 25,
      "days": 45,
      "once": true,
      "req": ["we have researched Construction III","we own Ankara","we control Ankara"],
      "fx": ["While active: Civilian Factory Use +15"]
    },
    "develop_the_iron_mines_in_divrigi": {
      "id": "develop_the_iron_mines_in_divrigi",
      "name": "Develop the Iron Mines in Divriği",
      "cat": "prospect_for_resources",
      "cost": 25,
      "days": 40,
      "once": true,
      "req": ["we have researched Excavation IV","we own Sivas","we control Sivas"],
      "fx": ["While active: Civilian Factory Use +20"]
    },
    "exploit_the_raman_oil_field": {
      "id": "exploit_the_raman_oil_field",
      "name": "Exploit the Raman Oil Field",
      "cat": "prospect_for_resources",
      "cost": 25,
      "days": 60,
      "once": true,
      "req": ["we have researched Excavation III","we own Diyarbakır","we control Diyarbakır"],
      "fx": ["While active: Civilian Factory Use +500%"]
    },
    "drill_in_the_garzan_oil_field": {
      "id": "drill_in_the_garzan_oil_field",
      "name": "Drill in the Garzan Oil Field",
      "cat": "prospect_for_resources",
      "cost": 25,
      "days": 80,
      "once": true,
      "req": ["we have researched Excavation IV","we own Diyarbakır","we control Diyarbakır"],
      "fx": ["While active: Civilian Factory Use +10"]
    },
    "expand_the_west_raman_oil_field": {
      "id": "expand_the_west_raman_oil_field",
      "name": "Expand the West Raman Oil Field",
      "cat": "prospect_for_resources",
      "cost": 25,
      "days": 180,
      "once": true,
      "req": ["we have researched Excavation V","we own Diyarbakır","we control Diyarbakır"],
      "fx": ["While active: Civilian Factory Use +15"]
    },
    "develop_transdanubia_aluminium_deposits": {
      "id": "develop_transdanubia_aluminium_deposits",
      "name": "Develop Transdanubia Bauxite Deposits",
      "cat": "prospect_for_resources",
      "cost": 25,
      "days": 60,
      "once": true,
      "req": ["we have researched Excavation II","we own North Transdanubia","we control North Transdanubia"],
      "fx": ["While active: Civilian Factory Use +6"]
    },
    "expand_the_rudabanya_iron_mine": {
      "id": "expand_the_rudabanya_iron_mine",
      "name": "Expand the Rudabánya Iron Mine",
      "cat": "prospect_for_resources",
      "cost": 25,
      "days": 60,
      "once": true,
      "req": ["we have researched Excavation II","we own Northern Hungary","we control Northern Hungary"],
      "fx": ["While active: Civilian Factory Use +6"]
    },
    "develop_derna_oilfield": {
      "id": "develop_derna_oilfield",
      "name": "Tap Derna Oilfields",
      "cat": "prospect_for_resources",
      "cost": 50,
      "days": 60,
      "once": true,
      "req": ["we have researched Excavation IV","we own North Transylvania","we control North Transylvania"],
      "fx": ["While active: Civilian Factory Use +15"]
    },
    "deeper_swedish_mines": {
      "id": "deeper_swedish_mines",
      "name": "Deeper mines",
      "cat": "prospect_for_resources",
      "cost": 50,
      "days": 60,
      "once": true,
      "req": ["we have researched Excavation IV","we control Norrbotten","we own Norrbotten"],
      "fx": ["While active: Civilian Factory Use +500%"]
    },
    "drill_for_oil_in_chaco_boreal": {
      "id": "drill_for_oil_in_chaco_boreal",
      "name": "Drill for oil in Chaco",
      "cat": "prospect_for_resources",
      "cost": 50,
      "days": 60,
      "once": true,
      "req": ["we have researched Excavation III","we own Chaco Boreal","we control Chaco Boreal"],
      "fx": ["While active: Civilian Factory Use +500%"]
    },
    "drill_for_oil_in_chaco_boreal_2": {
      "id": "drill_for_oil_in_chaco_boreal_2",
      "name": "We must drill deeper",
      "cat": "prospect_for_resources",
      "cost": 50,
      "days": 120,
      "once": true,
      "req": ["we have researched Excavation IV","we own Chaco Boreal","we control Chaco Boreal"],
      "fx": ["While active: Civilian Factory Use +500%"]
    },
    "AUS_develop_bleiberger_mines": {
      "id": "AUS_develop_bleiberger_mines",
      "name": "Develop the Bleiberger Mines",
      "cat": "prospect_for_resources",
      "cost": 25,
      "days": 60,
      "once": true,
      "req": ["we have researched Excavation II","we own Steiermark-Kärnten","we control Steiermark-Kärnten"],
      "fx": ["While active: Civilian Factory Use +300%"]
    },
    "CHI_develop_coal_mines": {
      "id": "CHI_develop_coal_mines",
      "name": "Expand Coal Mines in",
      "cat": "prospect_for_resources",
      "cost": 25,
      "days": 60,
      "once": true,
      "targeted": true,
      "req": ["we have researched Excavation II"],
      "fx": ["While active: Civilian Factory Use +300%"]
    },
    "develop_rio_grande_sul_coal_mines": {
      "id": "develop_rio_grande_sul_coal_mines",
      "name": "Expand 502 Coal Mines",
      "cat": "prospect_for_resources",
      "cost": 25,
      "days": 90,
      "once": true,
      "req": ["we own Rio Grande do Sul","we control Rio Grande do Sul","we have researched Excavation III"],
      "fx": ["While active: Civilian Factory Use +300%"]
    },
    "develop_guapore_casserite_deposits": {
      "id": "develop_guapore_casserite_deposits",
      "name": "Develop 942 Cassiterite Deposits",
      "cat": "prospect_for_resources",
      "cost": 25,
      "days": 90,
      "once": true,
      "req": ["we own Guaporé","we control Guaporé","we have researched Excavation IV"],
      "fx": ["While active: Civilian Factory Use +500%"]
    },
    "develop_la_libertad_coal_mines": {
      "id": "develop_la_libertad_coal_mines",
      "name": "Expand 493 Coal Mines",
      "cat": "prospect_for_resources",
      "cost": 25,
      "days": 60,
      "once": true,
      "req": ["we own La Libertad","we control La Libertad","we have researched Excavation III"],
      "fx": ["While active: Civilian Factory Use +300%"]
    },
    "develop_western_visayas_coal_mines": {
      "id": "develop_western_visayas_coal_mines",
      "name": "Found 628 Coal Mines",
      "cat": "prospect_for_resources",
      "cost": 25,
      "days": 60,
      "once": true,
      "req": ["we own Western Visayas","we control Western Visayas","we have researched Excavation III"],
      "fx": ["While active: Civilian Factory Use +300%"]
    },
    "expand_tomsk_coal_mines": {
      "id": "expand_tomsk_coal_mines",
      "name": "Expand 578 Coal Mines",
      "cat": "prospect_for_resources",
      "cost": 25,
      "days": 120,
      "once": true,
      "req": ["we own Tomsk","we control Tomsk","we have researched Excavation III"],
      "fx": ["While active: Civilian Factory Use +6"]
    },
    "expand_sofia_coal_mines": {
      "id": "expand_sofia_coal_mines",
      "name": "Expand Coal Mines",
      "cat": "prospect_for_resources",
      "cost": 25,
      "days": 60,
      "once": true,
      "req": ["we own Sofia","we control Sofia","we have researched Excavation III"],
      "fx": ["While active: Civilian Factory Use +300%"]
    },
    "expand_north_transdanubia_coal_mines": {
      "id": "expand_north_transdanubia_coal_mines",
      "name": "Expand 155 Coal Mines",
      "cat": "prospect_for_resources",
      "cost": 25,
      "days": 60,
      "once": true,
      "req": ["we own North Transdanubia","we control North Transdanubia","we have researched Excavation III"],
      "fx": ["While active: Civilian Factory Use +300%"]
    },
    "expand_bosnia_coal_mines": {
      "id": "expand_bosnia_coal_mines",
      "name": "Expand 104 Coal Mines",
      "cat": "prospect_for_resources",
      "cost": 25,
      "days": 60,
      "once": true,
      "req": ["we own Bosnia","we control Bosnia","we have researched Excavation III"],
      "fx": ["While active: Civilian Factory Use +300%"]
    },
    "expand_lima_coal_mines": {
      "id": "expand_lima_coal_mines",
      "name": "Expand 303 Coal Mines",
      "cat": "prospect_for_resources",
      "cost": 25,
      "days": 60,
      "once": true,
      "req": ["we own Lima","we control Lima","we have researched Excavation III"],
      "fx": ["While active: Civilian Factory Use +300%"]
    },
    "expand_antofagasta_coal_mines": {
      "id": "expand_antofagasta_coal_mines",
      "name": "Expand 506 Coal Mines",
      "cat": "prospect_for_resources",
      "cost": 25,
      "days": 60,
      "once": true,
      "req": ["we own Antofagasta","we control Antofagasta","we have researched Excavation III"],
      "fx": ["While active: Civilian Factory Use +300%"]
    },
    "develop_mendoza_coal_mines": {
      "id": "develop_mendoza_coal_mines",
      "name": "Found 511 Coal Mines",
      "cat": "prospect_for_resources",
      "cost": 25,
      "days": 60,
      "once": true,
      "req": ["we own Mendoza","we control Mendoza","we have researched Excavation III"],
      "fx": ["While active: Civilian Factory Use +300%"]
    },
    "develop_western_slovakia_coal_mines": {
      "id": "develop_western_slovakia_coal_mines",
      "name": "Found Coal Mines",
      "cat": "prospect_for_resources",
      "cost": 25,
      "days": 90,
      "once": true,
      "req": ["we own Western Slovakia","we control Western Slovakia","we have researched Excavation III"],
      "fx": ["While active: Civilian Factory Use +300%"]
    },
    "expand_tesinsko_coal_mines": {
      "id": "expand_tesinsko_coal_mines",
      "name": "Expand Coal Mines",
      "cat": "prospect_for_resources",
      "cost": 25,
      "days": 60,
      "once": true,
      "req": ["we own Trans-Olza","we control Trans-Olza","we have researched Excavation III"],
      "fx": ["While active: Civilian Factory Use +300%"]
    },
    "expand_german_coal_mines": {
      "id": "expand_german_coal_mines",
      "name": "Expand Coal Mines",
      "cat": "prospect_for_resources",
      "cost": 25,
      "days": 90,
      "once": true,
      "targeted": true,
      "req": ["we own state FROM","we control state FROM","we have researched Excavation III"],
      "fx": ["While active: Civilian Factory Use +300%"]
    },
    "expand_transvaal_coal_mines": {
      "id": "expand_transvaal_coal_mines",
      "name": "Expand 275 Coal Mines",
      "cat": "prospect_for_resources",
      "cost": 25,
      "days": 60,
      "once": true,
      "req": ["we own Transvaal","we control Transvaal","we have researched Excavation III"],
      "fx": ["While active: Civilian Factory Use +300%"]
    },
    "expand_bihar_coal_mines": {
      "id": "expand_bihar_coal_mines",
      "name": "Expand 435 Coal Mines",
      "cat": "prospect_for_resources",
      "cost": 25,
      "days": 60,
      "once": true,
      "req": ["we own Bihar","we control Bihar","we have researched Excavation III"],
      "fx": ["While active: Civilian Factory Use +300%"]
    },
    "open_mae_moh_lignite_mine": {
      "id": "open_mae_moh_lignite_mine",
      "name": "Open Mae Moh Lignite Mine",
      "cat": "prospect_for_resources",
      "cost": 25,
      "days": 60,
      "once": true,
      "req": ["we own Lanna","we control Lanna","we have researched Excavation IV or Excavation V"],
      "fx": ["While active: Civilian Factory Use +300%"]
    },
    "draft_dodging": {
      "id": "draft_dodging",
      "name": "Draft Dodging",
      "cat": "crisis",
      "cost": 0,
      "req": [
        "we are in a civil war",
        "we have the Draft Dodging spirit or we have the Extensive Draft Dodging spirit or we have the Widespread Draft Dodging spirit"
      ],
      "fx": []
    },
    "strikes_1": {
      "id": "strikes_1",
      "name": "Strikes",
      "cat": "crisis",
      "cost": 0,
      "req": ["we are in a civil war","we have the Strikes spirit or we have the Widespread Strikes spirit or we have the General Strike spirit"],
      "fx": []
    },
    "draft_dodging_mission": {
      "id": "draft_dodging_mission",
      "name": "Solve the Draft Evasion Crisis",
      "cat": "crisis",
      "mission": 90,
      "req": [
        "we don't have the Draft Dodging spirit and we don't have the Extensive Draft Dodging spirit and we don't have the Widespread Draft Dodging spirit"
      ],
      "fx": []
    },
    "strikes_mission": {
      "id": "strikes_mission",
      "name": "Address the Strike Crisis",
      "cat": "crisis",
      "mission": 90,
      "req": ["we don't have the Strikes spirit and we don't have the Widespread Strikes spirit and we don't have the General Strike spirit"],
      "fx": []
    },
    "mutiny_1": {
      "id": "mutiny_1",
      "name": "Mutinies",
      "cat": "crisis",
      "cost": 5,
      "req": ["we are in a civil war","we have the Mutinies spirit or we have the Extensive Mutinies spirit or we have the Widespread Mutinies spirit"],
      "fx": []
    },
    "mutiny_mission": {
      "id": "mutiny_mission",
      "name": "Restore Order in the Military",
      "cat": "crisis",
      "mission": 90,
      "req": ["we don't have the Mutinies spirit and we don't have the Extensive Mutinies spirit and we don't have the Widespread Mutinies spirit"],
      "fx": []
    },
    "demobilization_economic": {
      "id": "demobilization_economic",
      "name": "Demobilize Our Economy",
      "cat": "demobilization",
      "cost": 50,
      "req": ["we are not at war"],
      "fx": [
        "New spirit: Civilian Economy (Expected number of factories put on Consumer Goods +35%, Production speed industrial complex factor -30%, Production speed arms factory factor -30%, Civilian to Military Factory conversion cost +30%, +4 more)",
        "Removes spirit: Strikes",
        "Removes spirit: Widespread Strikes",
        "Removes spirit: General Strike"
      ]
    },
    "demob_economic_mission": {
      "id": "demob_economic_mission",
      "name": "Demobilize Our Economy",
      "cat": "demobilization",
      "mission": 120,
      "req": ["we are at war"],
      "fx": ["Removes spirit: Strikes","Removes spirit: Widespread Strikes","Removes spirit: General Strike"]
    },
    "demobilization_manpower": {
      "id": "demobilization_manpower",
      "name": "Ease up Conscription",
      "cat": "demobilization",
      "cost": 50,
      "req": ["we are not at war"],
      "fx": ["New spirit: Volunteer Only (Conscription +0.015)"]
    },
    "demob_manpower_mission": {"id":"demob_manpower_mission","name":"Ease up Conscription","cat":"demobilization","mission":120,"req":["we are at war"],"fx":[]}
  }
});
