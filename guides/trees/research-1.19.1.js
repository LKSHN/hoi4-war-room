/* Research tree, facts only, extracted from the HoI4 1.19.1 game files (common/technologies + English localisation)
   with every DLC enabled. Doctrines have their own system since 1.17 and aren't part of it.
   folders: id, name, rows ({y: year} labels). techs: id, name, f ([folder, x, y] per folder it shows in), year,
   cost (research cost as the game lists it), leads (techs it unlocks), xor (mutually exclusive), cat (categories),
   ic (our icon theme), fx (effects in our own words). start: techs the country has on 1 Jan 1936. */
registerResearch({
  "patch": "1.19.1",
  "folders": [
    {
      "id": "infantry_folder",
      "name": "Infantry",
      "ledger": "army",
      "labels": [
        {"x":20,"y":70,"t":"WEAPONS & EQUIPMENT","k":"title"},
        {"x":30,"y":920,"t":"SPECIAL FORCES","k":"title"},
        {"x":20,"y":480,"t":"MOBILE INFANTRY","k":"title"},
        {"x":120,"y":20,"t":"1918","k":"year"},
        {"x":260,"y":20,"t":"1936","k":"year"},
        {"x":400,"y":20,"t":"1938","k":"year"},
        {"x":540,"y":20,"t":"1939","k":"year"},
        {"x":680,"y":20,"t":"1940","k":"year"},
        {"x":820,"y":20,"t":"1941","k":"year"},
        {"x":960,"y":20,"t":"1942","k":"year"},
        {"x":1100,"y":20,"t":"1943","k":"year"},
        {"x":1240,"y":20,"t":"1944","k":"year"},
        {"x":1380,"y":20,"t":"1945","k":"year"},
        {"x":1520,"y":20,"t":"1946","k":"year"}
      ],
      "w": 1710,
      "h": 1710,
      "count": 42
    },
    {
      "id": "support_folder",
      "name": "Support Companies",
      "ledger": "army",
      "labels": [
        {"x":70,"y":20,"t":"1918","k":"year"},
        {"x":223,"y":20,"t":"1936","k":"year"},
        {"x":503,"y":20,"t":"1939","k":"year"},
        {"x":923,"y":20,"t":"1942","k":"year"},
        {"x":1343,"y":20,"t":"1945","k":"year"},
        {"x":20,"y":1250,"t":"Trains","k":"title"}
      ],
      "w": 1520,
      "h": 1740,
      "count": 42
    },
    {
      "id": "nsb_armour_folder",
      "name": "Armor",
      "ledger": "army",
      "labels": [
        {"x":20,"y":32,"t":"1918","k":"year"},
        {"x":20,"y":170,"t":"1934","k":"year"},
        {"x":20,"y":308,"t":"1936","k":"year"},
        {"x":20,"y":450,"t":"1939","k":"year"},
        {"x":20,"y":590,"t":"1941","k":"year"},
        {"x":20,"y":728,"t":"1943","k":"year"},
        {"x":20,"y":868,"t":"1945","k":"year"},
        {"x":1750,"y":32,"t":"1918","k":"year"},
        {"x":1750,"y":170,"t":"1934","k":"year"},
        {"x":1750,"y":308,"t":"1936","k":"year"},
        {"x":1750,"y":450,"t":"1939","k":"year"},
        {"x":1750,"y":590,"t":"1941","k":"year"},
        {"x":1750,"y":728,"t":"1943","k":"year"},
        {"x":1750,"y":868,"t":"1945","k":"year"},
        {"x":700,"y":70,"t":"HEAVY","k":"title"},
        {"x":850,"y":320,"t":"MEDIUM","k":"title"},
        {"x":560,"y":75,"t":"LIGHT","k":"title"},
        {"x":300,"y":325,"t":"AMPHIBIOUS","k":"title"}
      ],
      "w": 1790,
      "h": 978,
      "count": 28
    },
    {
      "id": "artillery_folder",
      "name": "Artillery",
      "ledger": "army",
      "labels": [
        {"x":800,"y":425,"t":"ROCKET ARTILLERY","k":"title"},
        {"x":1040,"y":125,"t":"ANTI-TANK","k":"title"},
        {"x":490,"y":20,"t":"ARTILLERY","k":"title"},
        {"x":95,"y":125,"t":"ANTI-AIR","k":"title"},
        {"x":380,"y":100,"t":"1934","k":"year"},
        {"x":380,"y":238,"t":"1936","k":"year"},
        {"x":380,"y":380,"t":"1939","k":"year"},
        {"x":380,"y":520,"t":"1940","k":"year"},
        {"x":380,"y":658,"t":"1941","k":"year"},
        {"x":380,"y":798,"t":"1942","k":"year"},
        {"x":380,"y":938,"t":"1943","k":"year"},
        {"x":380,"y":1078,"t":"1944","k":"year"},
        {"x":380,"y":1218,"t":"1945","k":"year"},
        {"x":250,"y":100,"t":"1934","k":"year"},
        {"x":250,"y":238,"t":"1936","k":"year"},
        {"x":250,"y":380,"t":"1939","k":"year"},
        {"x":250,"y":520,"t":"1940","k":"year"},
        {"x":250,"y":658,"t":"1941","k":"year"},
        {"x":250,"y":798,"t":"1942","k":"year"},
        {"x":250,"y":938,"t":"1943","k":"year"},
        {"x":250,"y":1078,"t":"1944","k":"year"},
        {"x":250,"y":1218,"t":"1945","k":"year"}
      ],
      "w": 1320,
      "h": 1328,
      "count": 28
    },
    {
      "id": "bba_air_techs_folder",
      "name": "Air",
      "ledger": "air",
      "labels": [
        {"x":20,"y":95,"t":"1933","k":"year"},
        {"x":20,"y":233,"t":"1936","k":"year"},
        {"x":20,"y":375,"t":"1940","k":"year"},
        {"x":20,"y":515,"t":"1944","k":"year"},
        {"x":20,"y":793,"t":"1945","k":"year"},
        {"x":20,"y":933,"t":"1950","k":"year"},
        {"x":2050,"y":95,"t":"1933","k":"year"},
        {"x":2050,"y":233,"t":"1936","k":"year"},
        {"x":2050,"y":375,"t":"1940","k":"year"},
        {"x":2050,"y":515,"t":"1944","k":"year"},
        {"x":2050,"y":793,"t":"1945","k":"year"},
        {"x":2050,"y":933,"t":"1950","k":"year"},
        {"x":325,"y":20,"t":"Airframes","k":"title"},
        {"x":960,"y":20,"t":"Transport Planes","k":"title"},
        {"x":1330,"y":20,"t":"Weaponry","k":"title"},
        {"x":1865,"y":20,"t":"Engines","k":"title"}
      ],
      "w": 2040,
      "h": 1043,
      "count": 41
    },
    {
      "id": "mtgnavalfolder",
      "name": "Naval",
      "ledger": "navy",
      "labels": [
        {"x":200,"y":20,"t":"1922","k":"year"},
        {"x":620,"y":20,"t":"1936","k":"year"},
        {"x":1040,"y":20,"t":"1939","k":"year"},
        {"x":1460,"y":20,"t":"1943","k":"year"},
        {"x":20,"y":55,"t":"DESTROYERS","k":"title"},
        {"x":20,"y":310,"t":"CRUISERS","k":"title"},
        {"x":20,"y":425,"t":"CRUISER & BATTLESHIP ARMOR","k":"title"},
        {"x":20,"y":545,"t":"BATTLESHIPS","k":"title"},
        {"x":20,"y":660,"t":"CARRIERS","k":"title"},
        {"x":20,"y":835,"t":"SUBMARINES","k":"title"}
      ],
      "w": 1850,
      "h": 1155,
      "count": 38
    },
    {
      "id": "mtgnavalsupportfolder",
      "name": "Naval support",
      "ledger": "navy",
      "labels": [
        {"x":214,"y":20,"t":"1922","k":"year"},
        {"x":634,"y":20,"t":"1936","k":"year"},
        {"x":1054,"y":20,"t":"1940","k":"year"},
        {"x":1474,"y":20,"t":"1944","k":"year"},
        {"x":20,"y":55,"t":"ARMAMENTS","k":"title"},
        {"x":20,"y":385,"t":"TORPEDOES","k":"title"},
        {"x":20,"y":515,"t":"DAMAGE CONTROL","k":"title"},
        {"x":20,"y":655,"t":"FIRE CONTROL METHODS","k":"title"},
        {"x":20,"y":795,"t":"TRANSPORTS","k":"title"},
        {"x":20,"y":1005,"t":"MINE WARFARE","k":"title"}
      ],
      "w": 1650,
      "h": 1270,
      "count": 41
    },
    {
      "id": "industry_folder",
      "name": "Industry",
      "ledger": "civilian",
      "labels": [
        {"x":120,"y":85,"t":"1936","k":"year"},
        {"x":120,"y":365,"t":"1937","k":"year"},
        {"x":120,"y":505,"t":"1939","k":"year"},
        {"x":120,"y":645,"t":"1941","k":"year"},
        {"x":120,"y":785,"t":"1943","k":"year"},
        {"x":1590,"y":85,"t":"1936","k":"year"},
        {"x":1590,"y":365,"t":"1937","k":"year"},
        {"x":1590,"y":505,"t":"1939","k":"year"},
        {"x":1590,"y":645,"t":"1941","k":"year"},
        {"x":1590,"y":785,"t":"1943","k":"year"},
        {"x":600,"y":115,"t":"INDUSTRY","k":"title"},
        {"x":250,"y":20,"t":"PRODUCTION","k":"title"},
        {"x":1298,"y":20,"t":"SYNTHETIC OIL","k":"title"},
        {"x":861,"y":160,"t":"CONSTRUCTION","k":"title"}
      ],
      "w": 1630,
      "h": 895,
      "count": 43
    },
    {
      "id": "electronics_folder",
      "name": "Engineering",
      "ledger": "civilian",
      "labels": [
        {"x":1150,"y":110,"t":"1940","k":"year"},
        {"x":1150,"y":235,"t":"1942","k":"year"},
        {"x":1150,"y":340,"t":"1943","k":"year"},
        {"x":1150,"y":460,"t":"1944","k":"year"},
        {"x":1150,"y":580,"t":"1945","k":"year"},
        {"x":1150,"y":700,"t":"1946","k":"year"},
        {"x":230,"y":100,"t":"1936","k":"year"},
        {"x":230,"y":460,"t":"1938","k":"year"},
        {"x":230,"y":580,"t":"1939","k":"year"},
        {"x":230,"y":700,"t":"1940","k":"year"},
        {"x":230,"y":820,"t":"1941","k":"year"},
        {"x":230,"y":940,"t":"1942","k":"year"},
        {"x":230,"y":1060,"t":"1943","k":"year"},
        {"x":230,"y":1180,"t":"1944","k":"year"},
        {"x":250,"y":1300,"t":"1945","k":"year"},
        {"x":390,"y":20,"t":"Electronic Engineering","k":"title"},
        {"x":870,"y":20,"t":"Fortification Engineering","k":"title"},
        {"x":1400,"y":150,"t":"Experimental Rockets","k":"title"},
        {"x":1200,"y":20,"t":"Atomic Research","k":"title"}
      ],
      "w": 1550,
      "h": 1410,
      "count": 27
    }
  ],
  "start": [
    "aa_cannon_1",
    "aa_lmg",
    "air_torpedoe_1",
    "aircraft_construction",
    "armored_car1",
    "basic_battery",
    "basic_cruiser_armor_scheme",
    "basic_depth_charges",
    "basic_heavy_battery",
    "basic_heavy_tank_chassis",
    "basic_light_battery",
    "basic_light_tank_chassis",
    "basic_medium_airframe",
    "basic_naval_mines",
    "basic_ship_hull_cruiser",
    "basic_ship_hull_heavy",
    "basic_ship_hull_light",
    "basic_ship_hull_submarine",
    "basic_small_airframe",
    "basic_torpedo",
    "basic_train",
    "bba_early_transport_plane",
    "early_bombs",
    "early_ship_hull_cruiser",
    "early_ship_hull_heavy",
    "early_ship_hull_light",
    "early_ship_hull_submarine",
    "engine_tech_1",
    "engines_1",
    "engines_2",
    "fuel_refining",
    "fuel_silos",
    "gw_artillery",
    "gwtank_chassis",
    "improved_light_tank_chassis",
    "improved_ship_torpedo_launcher",
    "infantry_weapons",
    "infantry_weapons1",
    "interwar_antiair",
    "iw_large_airframe",
    "iw_medium_airframe",
    "iw_small_airframe",
    "motorised_infantry",
    "mtg_transport",
    "photo_reconnaisance",
    "sonar",
    "submarine_mine_laying",
    "synth_oil_experiments",
    "tech_engineers",
    "tech_mountaineers",
    "tech_recon",
    "tech_support",
    "tech_trucks"
  ],
  "techs": [
    {
      "id": "gw_artillery",
      "name": "Towed Artillery",
      "f": [["artillery_folder",650,87]],
      "year": 0,
      "cost": 1.5,
      "ic": "artillery",
      "leads": ["interwar_artillery","interwar_antitank","interwar_antiair"],
      "cat": ["artillery","mio_cat_all_artillery_equipment","mio_cat_artillery"],
      "fx": [
        "Unlocks equipment: Towed Artillery",
        "Unlocks modules: .50 cal. MG, Small Cannon, Small Cannon",
        "Unlocks battalion: Infantry Guns",
        "Armored Car: Soft attack +10%"
      ]
    },
    {
      "id": "interwar_antiair",
      "name": "Anti-Air",
      "f": [["artillery_folder",160,227]],
      "year": 1936,
      "cost": 1.5,
      "ic": "plane",
      "leads": ["antiair1"],
      "cat": ["artillery","cat_anti_air","mio_cat_all_artillery_equipment"],
      "fx": [
        "Unlocks equipment: Towed Anti-Aircraft",
        "Unlocks modules: 20mm AA, Automatic Cannon, Basic Anti-Air Gun, Basic Heavy Cannon, Light Anti-Air Battery",
        "Unlocks battalion: Anti-Air Battery",
        "Unlocks building: Anti-Air",
        "Armored Car: Hard attack +10%"
      ]
    },
    {
      "id": "interwar_artillery",
      "name": "Inter-War Artillery",
      "f": [["artillery_folder",650,227]],
      "year": 1936,
      "cost": 1.5,
      "ic": "artillery",
      "leads": ["artillery1"],
      "cat": ["artillery","mio_cat_all_artillery_equipment","mio_cat_artillery"],
      "fx": [
        "Unlocks modules: Improved Small Cannon, Close Support Gun",
        "Support Artillery: Soft attack +5%",
        "Artillery: Soft attack +10%",
        "Motorized Artillery: Soft attack +10%",
        "Self-Propelled Artillery: Soft attack +15%"
      ]
    },
    {
      "id": "interwar_antitank",
      "name": "Anti-tank",
      "f": [["artillery_folder",1140,227]],
      "year": 1936,
      "cost": 1.5,
      "ic": "artillery",
      "leads": ["antitank1"],
      "cat": ["artillery","cat_anti_tank","mio_cat_all_artillery_equipment"],
      "fx": [
        "Unlocks equipment: Towed Anti-Tank",
        "Unlocks modules: Basic High-Velocity Cannon, Basic Heavy Cannon, Anti-Tank Cannon I, Coaxial High-Velocity Cannon",
        "Unlocks battalion: Anti-Tank Battery",
        "Armored Car: Ap attack +10%"
      ]
    },
    {
      "id": "antiair1",
      "name": "Anti-Air Upgrade",
      "f": [["artillery_folder",160,367]],
      "year": 1939,
      "cost": 1.0,
      "ic": "plane",
      "leads": ["antiair2"],
      "cat": ["artillery","cat_anti_air","mio_cat_all_artillery_equipment"],
      "fx": [
        "Support Anti-Air: Air Attack +10%",
        "Anti-Air: Air Attack +10%",
        "Anti-Air Battery: Air Attack +10%",
        "Motorized Anti-Air: Air Attack +10%",
        "Self-Propelled Anti-Air: Air Attack +15%",
        "Anti-Air Bombing Damage Reduction -2%"
      ]
    },
    {
      "id": "artillery1",
      "name": "Artillery I",
      "f": [["artillery_folder",650,367]],
      "year": 1939,
      "cost": 1.0,
      "ic": "artillery",
      "leads": ["artillery2","sp_artillery_rocket_assisted_projectiles_tech","sp_artillery_purpose_built_gun_motor_carriages_tech"],
      "cat": ["artillery","mio_cat_all_artillery_equipment","mio_cat_artillery"],
      "fx": [
        "Unlocks equipment: Improved Artillery",
        "Unlocks modules: Medium Howitzer, Medium Cannon, Coaxial Medium Cannon, Assault Gun",
        "Armored Car: Soft attack +10%"
      ]
    },
    {
      "id": "antitank1",
      "name": "Anti-Tank Upgrade",
      "f": [["artillery_folder",1140,367]],
      "year": 1939,
      "cost": 1.0,
      "ic": "artillery",
      "leads": ["antitank2"],
      "cat": ["artillery","cat_anti_tank","mio_cat_all_artillery_equipment"],
      "fx": [
        "Unlocks modules: Medium Cannon, Squeeze-bore Adaptor",
        "All Anti-Tank Artillery: Hard attack +10%, Ap attack +20%",
        "Tank Destroyers: Hard attack +15%, Ap attack +20%"
      ]
    },
    {
      "id": "antiair2",
      "name": "Anti-Air II",
      "f": [["artillery_folder",160,507]],
      "year": 1940,
      "cost": 1.0,
      "ic": "plane",
      "leads": ["antiair3","sp_shock_hardening_techniques"],
      "cat": ["artillery","cat_anti_air","mio_cat_all_artillery_equipment"],
      "fx": [
        "Unlocks equipment: Improved Anti-Air",
        "Unlocks modules: 37mm AA, Improved Automatic Cannon, Improved Anti-Air Gun, Heavy Anti-Air Battery",
        "Armored Car: Hard attack +10%",
        "Static Anti Air damage factor +10%"
      ]
    },
    {
      "id": "sp_artillery_purpose_built_gun_motor_carriages_tech",
      "name": "Purpose-Built Gun Motor Carriages",
      "f": [["artillery_folder",370,507]],
      "year": 1940,
      "cost": 1.5,
      "ic": "artillery",
      "cat": ["artillery","mio_cat_all_artillery_equipment","mio_cat_artillery"],
      "fx": [
        "Super-Heavy Artillery: Reliability +0.07, Supply Consumption -0.1",
        "Self-Propelled Super-Heavy Artillery: Reliability +0.07, Supply Consumption -0.1"
      ]
    },
    {
      "id": "sp_artillery_rocket_assisted_projectiles_tech",
      "name": "Rocket-Assisted Projectiles",
      "f": [["artillery_folder",510,507]],
      "year": 1940,
      "cost": 1.5,
      "ic": "artillery",
      "cat": ["artillery","mio_cat_all_artillery_equipment","mio_cat_artillery"],
      "fx": ["Super-Heavy Artillery: Soft attack +10%","Self-Propelled Super-Heavy Artillery: Soft attack +10%"]
    },
    {
      "id": "artillery2",
      "name": "Improved Artillery Upgrade I",
      "f": [["artillery_folder",650,507]],
      "year": 1940,
      "cost": 1.0,
      "ic": "artillery",
      "leads": ["artillery3","rocket_artillery"],
      "cat": ["artillery","mio_cat_all_artillery_equipment","mio_cat_artillery"],
      "fx": [
        "Support Artillery: Soft attack +5%",
        "Artillery: Soft attack +10%",
        "Motorized Artillery: Soft attack +10%",
        "Self-Propelled Artillery: Soft attack +10%"
      ]
    },
    {
      "id": "rocket_artillery",
      "name": "Support Rocket Artillery",
      "f": [["artillery_folder",860,507]],
      "year": 1940,
      "cost": 2.0,
      "ic": "artillery",
      "leads": ["rocket_artillery2"],
      "cat": ["rocketry","mio_cat_all_artillery_equipment"],
      "fx": ["Unlocks equipment: Towed Rocket Artillery","Unlocks modules: Rocket Launcher, Rocket Rails, Rocket Launcher"]
    },
    {
      "id": "antitank2",
      "name": "Anti-Tank II",
      "f": [["artillery_folder",1140,507]],
      "year": 1940,
      "cost": 1.0,
      "ic": "artillery",
      "leads": ["antitank3"],
      "cat": ["artillery","cat_anti_tank","mio_cat_all_artillery_equipment"],
      "fx": [
        "Unlocks equipment: Improved Anti-Tank",
        "Unlocks modules: Improved Heavy Cannon, Anti-Tank Cannon II",
        "Motorized Anti-Tank: Hard attack +10%, Ap attack +10%",
        "Armored Car: Ap attack +10%"
      ]
    },
    {
      "id": "sp_shock_hardening_techniques",
      "name": "Shock-Hardening Techniques",
      "f": [["artillery_folder",20,647]],
      "year": 1941,
      "cost": 1.5,
      "ic": "artillery",
      "leads": ["sp_variable_time_fuze_shells"],
      "cat": ["artillery","mio_cat_all_artillery_equipment","mio_cat_artillery"],
      "fx": ["Static Anti Air damage factor +15%","Static Anti Air hit chance factor +30%"]
    },
    {
      "id": "antiair3",
      "name": "Improved Anti-Air Upgrade I",
      "f": [["artillery_folder",160,647]],
      "year": 1941,
      "cost": 1.0,
      "ic": "plane",
      "leads": ["antiair4"],
      "cat": ["artillery","cat_anti_air","mio_cat_all_artillery_equipment"],
      "fx": [
        "Unlocks modules: Improved Heavy Cannon",
        "Support Anti-Air: Air Attack +10%",
        "Anti-Air: Air Attack +10%",
        "Anti-Air Battery: Air Attack +10%",
        "Motorized Anti-Air: Air Attack +10%",
        "Self-Propelled Anti-Air: Air Attack +10%",
        "Anti-Air Bombing Damage Reduction -2%"
      ]
    },
    {
      "id": "artillery3",
      "name": "Improved Artillery Upgrade II",
      "f": [["artillery_folder",650,647]],
      "year": 1941,
      "cost": 1.0,
      "ic": "artillery",
      "leads": ["artillery4"],
      "cat": ["artillery","mio_cat_all_artillery_equipment","mio_cat_artillery"],
      "fx": [
        "Unlocks modules: Improved Medium Howitzer",
        "Support Artillery: Soft attack +5%",
        "Artillery: Soft attack +10%",
        "Motorized Artillery: Soft attack +10%",
        "Self-Propelled Artillery: Soft attack +5%"
      ]
    },
    {
      "id": "rocket_artillery2",
      "name": "Rocket Artillery Upgrade I",
      "f": [["artillery_folder",860,647]],
      "year": 1941,
      "cost": 1.0,
      "ic": "artillery",
      "leads": ["rocket_artillery3"],
      "cat": ["rocketry","mio_cat_all_artillery_equipment"],
      "fx": ["All Rocket Artillery: Soft attack +15%","Regimental Rocket Battery: Soft attack +15%"]
    },
    {
      "id": "antitank3",
      "name": "Improved Anti-Tank Upgrade I",
      "f": [["artillery_folder",1140,647]],
      "year": 1941,
      "cost": 1.0,
      "ic": "artillery",
      "leads": ["antitank4","sp_advance_sabot_shells"],
      "cat": ["artillery","cat_anti_tank","mio_cat_all_artillery_equipment"],
      "fx": [
        "Unlocks modules: Improved Medium Cannon",
        "All Anti-Tank Artillery: Hard attack +10%, Ap attack +10%",
        "Tank Destroyers: Hard attack +10%, Ap attack +5%"
      ]
    },
    {
      "id": "sp_variable_time_fuze_shells",
      "name": "Variable Time Fuze Shells",
      "f": [["artillery_folder",20,787]],
      "year": 1942,
      "cost": 1.5,
      "ic": "artillery",
      "cat": ["artillery","mio_cat_all_artillery_equipment","mio_cat_artillery"],
      "fx": [
        "Support Artillery: Soft attack +10%",
        "Artillery: Soft attack +20%",
        "Motorized Artillery: Soft attack +20%",
        "Self-Propelled Artillery: Soft attack +10%"
      ]
    },
    {
      "id": "antiair4",
      "name": "Improved Anti-Air Upgrade II",
      "f": [["artillery_folder",160,787]],
      "year": 1942,
      "cost": 1.0,
      "ic": "plane",
      "leads": ["antiair5"],
      "cat": ["artillery","cat_anti_air","mio_cat_all_artillery_equipment"],
      "fx": [
        "Support Anti-Air: Air Attack +10%",
        "Anti-Air: Air Attack +10%",
        "Anti-Air Battery: Air Attack +10%",
        "Motorized Anti-Air: Air Attack +10%",
        "Self-Propelled Anti-Air: Air Attack +5%",
        "Anti-Air Bombing Damage Reduction -2%"
      ]
    },
    {
      "id": "artillery4",
      "name": "Artillery IV",
      "f": [["artillery_folder",650,787]],
      "year": 1942,
      "cost": 2.0,
      "ic": "artillery",
      "leads": ["artillery5"],
      "cat": ["artillery","mio_cat_all_artillery_equipment","mio_cat_artillery"],
      "fx": ["Unlocks equipment: Advanced Artillery","Unlocks modules: Improved Medium Cannon","Armored Car: Soft attack +10%"]
    },
    {
      "id": "rocket_artillery3",
      "name": "Rocket Artillery Upgrade II",
      "f": [["artillery_folder",860,787]],
      "year": 1942,
      "cost": 1.0,
      "ic": "artillery",
      "leads": ["rocket_artillery4"],
      "cat": ["rocketry","mio_cat_all_artillery_equipment"],
      "fx": ["All Rocket Artillery: Soft attack +15%","Regimental Rocket Battery: Soft attack +15%"]
    },
    {
      "id": "sp_advance_sabot_shells",
      "name": "Advanced Sabot Rounds",
      "f": [["artillery_folder",1000,787]],
      "year": 1942,
      "cost": 1.5,
      "ic": "artillery",
      "cat": ["artillery","cat_anti_tank","mio_cat_all_artillery_equipment"],
      "fx": [
        "Static Anti Air hit chance factor +15%",
        "Support Anti-Tank: Ap attack +15%",
        "Anti-Tank: Ap attack +15%",
        "Motorized Anti-Tank: Ap attack +15%",
        "Anti-Tank Battery: Ap attack +15%",
        "Tank Destroyers: Ap attack +5%"
      ]
    },
    {
      "id": "antitank4",
      "name": "Improved Anti-Tank Upgrade II",
      "f": [["artillery_folder",1140,787]],
      "year": 1942,
      "cost": 1.0,
      "ic": "artillery",
      "leads": ["antitank5"],
      "cat": ["artillery","cat_anti_tank","mio_cat_all_artillery_equipment"],
      "fx": [
        "Unlocks modules: Improved High-Velocity Cannon",
        "All Anti-Tank Artillery: Hard attack +10%, Ap attack +10%",
        "Tank Destroyers: Hard attack +5%, Ap attack +5%"
      ]
    },
    {
      "id": "antiair5",
      "name": "Anti-Air V",
      "f": [["artillery_folder",160,927]],
      "year": 1943,
      "cost": 1.0,
      "ic": "plane",
      "cat": ["artillery","cat_anti_air","mio_cat_all_artillery_equipment"],
      "fx": [
        "Unlocks equipment: Advanced Anti-Air",
        "Unlocks modules: 40mm Quad AA, Advanced Heavy Cannon, Advanced Anti-Air Gun, Auto Loader, Heavy Anti-Air Platform",
        "Armored Car: Hard attack +10%",
        "Static Anti Air damage factor +10%"
      ]
    },
    {
      "id": "artillery5",
      "name": "Advanced Artillery Upgrade",
      "f": [["artillery_folder",650,927]],
      "year": 1943,
      "cost": 1.0,
      "ic": "artillery",
      "cat": ["artillery","mio_cat_all_artillery_equipment","mio_cat_artillery"],
      "fx": [
        "Unlocks modules: Auto Loader, Heavy Howitzer",
        "Support Artillery: Soft attack +5%",
        "Artillery: Soft attack +10%",
        "Motorized Artillery: Soft attack +10%",
        "Self-Propelled Artillery: Soft attack +5%"
      ]
    },
    {
      "id": "rocket_artillery4",
      "name": "Rocket Artillery III",
      "f": [["artillery_folder",860,927]],
      "year": 1943,
      "cost": 1.0,
      "ic": "artillery",
      "cat": ["rocketry","mio_cat_all_artillery_equipment"],
      "fx": ["Unlocks equipment: Advanced Rocket Artillery","Unlocks modules: Improved Rocket Launcher","Motorized Rocket Artillery: Soft attack +30%"]
    },
    {
      "id": "antitank5",
      "name": "Anti-Tank V",
      "f": [["artillery_folder",1140,927]],
      "year": 1943,
      "cost": 1.0,
      "ic": "artillery",
      "cat": ["artillery","cat_anti_tank","mio_cat_all_artillery_equipment"],
      "fx": [
        "Unlocks equipment: Advanced Anti-Tank",
        "Unlocks modules: Advanced High-Velocity Cannon, Advanced Heavy Cannon, Auto Loader, Heavy High-Velocity Cannons",
        "Armored Car: Ap attack +10%"
      ]
    },
    {
      "id": "iw_small_airframe",
      "name": "Inter-War Small Airframe",
      "f": [["bba_air_techs_folder",80,82]],
      "year": 1926,
      "cost": 2.0,
      "ic": "plane",
      "leads": ["basic_small_airframe"],
      "cat": [
        "light_air",
        "light_fighter",
        "cas_bomber",
        "naval_air",
        "naval_bomber",
        "air_equipment",
        "mio_cat_all_light_fighter_and_modules",
        "mio_cat_all_cas_and_modules",
        "mio_cat_all_naval_bomber_and_modules",
        "mio_cat_all_light_aircraft_and_modules"
      ],
      "fx": [
        "Unlocks equipment: Inter-War Small Airframe, Inter-War Close Air Support, Inter-War Naval Bomber, Inter-War Suicide Airframe, Inter-War Carrier Airframe, Inter-War Carrier Close Air Support, Inter-War Carrier Naval Bomber, Inter-War Carrier Suicide Airframe"
      ]
    },
    {
      "id": "iw_medium_airframe",
      "name": "Inter-War Medium Airframe",
      "f": [["bba_air_techs_folder",285,82]],
      "year": 1926,
      "cost": 2.0,
      "ic": "plane",
      "leads": ["basic_medium_airframe"],
      "cat": ["medium_air","tactical_bomber","cat_heavy_fighter","air_equipment","mio_cat_all_medium_aircraft_and_modules"],
      "fx": ["Unlocks equipment: Inter-War Medium Airframe, Inter-War Heavy Fighter, Inter-War Scout Plane"]
    },
    {
      "id": "iw_large_airframe",
      "name": "Inter-War Large Airframe",
      "f": [["bba_air_techs_folder",595,82]],
      "year": 1926,
      "cost": 2.0,
      "ic": "plane",
      "leads": ["basic_large_airframe"],
      "cat": ["heavy_air","air_equipment","cat_strategic_bomber","cat_maritime_patrol","mio_cat_all_heavy_aircraft_and_modules"],
      "fx": ["Unlocks equipment: Inter-War Large Airframe, Inter-War Maritime Patrol Plane"]
    },
    {
      "id": "bba_early_transport_plane",
      "name": "Inter-War Transport Plane",
      "f": [["bba_air_techs_folder",910,82]],
      "year": 1933,
      "cost": 2.0,
      "ic": "plane",
      "leads": ["bba_improved_transport_plane"],
      "cat": ["air_equipment","transport_planes_cat"],
      "fx": ["Unlocks equipment: Inter-War Transport Plane"]
    },
    {
      "id": "early_bombs",
      "name": "Bombs",
      "f": [["bba_air_techs_folder",1140,82]],
      "year": 1922,
      "cost": 1.0,
      "ic": "plane",
      "leads": ["armor_piercing_bombs","heavy_bombs"],
      "cat": [
        "air_equipment",
        "plane_modules_tech",
        "cat_air_bombs",
        "mio_cat_all_cas_and_modules",
        "mio_cat_all_medium_aircraft_and_modules",
        "mio_cat_all_heavy_aircraft_and_modules",
        "mio_cat_all_light_aircraft_and_modules"
      ],
      "fx": ["Unlocks modules: Bomb Locks, Small Bomb Bay, Medium Bomb Bay, Large Bomb Bay"]
    },
    {
      "id": "armor_piercing_bombs",
      "name": "Armor Piercing Bombs",
      "f": [["bba_air_techs_folder",1280,82]],
      "year": 1936,
      "cost": 1.0,
      "ic": "plane",
      "cat": [
        "air_equipment",
        "plane_modules_tech",
        "cat_air_bombs",
        "mio_cat_all_cas_and_modules",
        "mio_cat_all_medium_aircraft_and_modules",
        "mio_cat_all_light_aircraft_and_modules"
      ],
      "fx": ["Unlocks modules: Armor Piercing Bomb Locks"]
    },
    {
      "id": "aa_lmg",
      "name": "Light MG",
      "f": [["bba_air_techs_folder",1385,82]],
      "year": 1922,
      "cost": 1.0,
      "ic": "plane",
      "leads": ["aa_hmg","aa_cannon_1","survivability_studies"],
      "cat": [
        "air_equipment",
        "plane_modules_tech",
        "cat_air_guns",
        "mio_cat_all_light_fighter_and_modules",
        "mio_cat_all_medium_aircraft_and_modules",
        "mio_cat_all_heavy_aircraft_and_modules",
        "mio_cat_all_light_aircraft_and_modules"
      ],
      "fx": ["Unlocks modules: 2x Light Machine Gun, 4x Light Machine Gun, Light MG Defense Turret, Light MG Defense Turret 2x"]
    },
    {
      "id": "photo_reconnaisance",
      "name": "Photo Reconnaissance",
      "f": [["bba_air_techs_folder",1520,82]],
      "year": 1922,
      "cost": 1.0,
      "ic": "plane",
      "cat": ["air_equipment","plane_modules_tech","mio_cat_all_medium_aircraft_and_modules"],
      "fx": ["Unlocks modules: Recon Camera"]
    },
    {
      "id": "air_torpedoe_1",
      "name": "Air Launched Torpedoes",
      "f": [["bba_air_techs_folder",1620,82]],
      "year": 1936,
      "cost": 1.0,
      "ic": "plane",
      "leads": ["air_torpedoe_2"],
      "cat": [
        "air_equipment",
        "plane_modules_tech",
        "cat_air_bombs",
        "cat_maritime_patrol",
        "mio_cat_all_naval_bomber_and_modules",
        "mio_cat_all_medium_aircraft_and_modules",
        "mio_cat_all_heavy_aircraft_and_modules",
        "mio_cat_all_light_aircraft_and_modules"
      ],
      "fx": ["Unlocks modules: Light Torpedo Mountings"]
    },
    {
      "id": "aircraft_construction",
      "name": "Aircraft Construction",
      "f": [["bba_air_techs_folder",1720,82]],
      "year": 1936,
      "cost": 1.0,
      "ic": "plane",
      "cat": [
        "air_equipment",
        "plane_modules_tech",
        "mio_cat_all_light_fighter_and_modules",
        "mio_cat_all_cas_and_modules",
        "mio_cat_all_naval_bomber_and_modules",
        "mio_cat_all_medium_aircraft_and_modules",
        "mio_cat_all_heavy_aircraft_and_modules",
        "mio_cat_all_light_aircraft_and_modules"
      ],
      "fx": [
        "Unlocks modules: Dive Brakes, Non-Strategic Materials Usage, Floats, Non-Strategic Materials Usage, Flying Boat, Non-Strategic Materials Usage …"
      ]
    },
    {
      "id": "engines_1",
      "name": "Engines I",
      "f": [["bba_air_techs_folder",1860,82]],
      "year": 1922,
      "cost": 1.0,
      "ic": "plane",
      "leads": ["engines_2","range_improvements","aircraft_construction"],
      "cat": [
        "air_equipment",
        "plane_modules_tech",
        "cat_air_engine",
        "mio_cat_all_light_fighter_and_modules",
        "mio_cat_all_cas_and_modules",
        "mio_cat_all_naval_bomber_and_modules",
        "mio_cat_all_medium_aircraft_and_modules",
        "mio_cat_all_heavy_aircraft_and_modules",
        "mio_cat_all_light_aircraft_and_modules"
      ],
      "fx": ["Unlocks modules: 1x Engine I, 2x Engine I, 3x Engine I, 4x Engine I, 6x Engine I"]
    },
    {
      "id": "basic_small_airframe",
      "name": "Basic Small Airframe",
      "f": [["bba_air_techs_folder",80,222]],
      "year": 1936,
      "cost": 2.0,
      "ic": "plane",
      "leads": ["improved_small_airframe"],
      "cat": [
        "light_air",
        "light_fighter",
        "cas_bomber",
        "naval_air",
        "naval_bomber",
        "air_equipment",
        "mio_cat_all_light_fighter_and_modules",
        "mio_cat_all_cas_and_modules",
        "mio_cat_all_naval_bomber_and_modules",
        "mio_cat_all_light_aircraft_and_modules"
      ],
      "fx": [
        "Unlocks equipment: Basic Small Airframe, Basic Close Air Support, Basic Naval Bomber, Basic Suicide Airframe, Basic Carrier Airframe, Basic Carrier Close Air Support, Basic Carrier Naval Bomber, Basic Carrier Suicide Airframe"
      ]
    },
    {
      "id": "basic_medium_airframe",
      "name": "Basic Medium Airframe",
      "f": [["bba_air_techs_folder",285,222]],
      "year": 1936,
      "cost": 2.0,
      "ic": "plane",
      "leads": ["improved_medium_airframe"],
      "cat": ["medium_air","tactical_bomber","cat_heavy_fighter","air_equipment","mio_cat_all_medium_aircraft_and_modules"],
      "fx": ["Unlocks equipment: Basic Medium Airframe, Basic Heavy Fighter, Basic Scout Plane"]
    },
    {
      "id": "basic_large_airframe",
      "name": "Basic Large Airframe",
      "f": [["bba_air_techs_folder",595,222]],
      "year": 1936,
      "cost": 2.0,
      "ic": "plane",
      "leads": ["improved_large_airframe"],
      "cat": ["heavy_air","air_equipment","cat_strategic_bomber","cat_maritime_patrol","mio_cat_all_heavy_aircraft_and_modules"],
      "fx": ["Unlocks equipment: Basic Large Airframe, Basic Maritime Patrol Plane"]
    },
    {
      "id": "range_improvements",
      "name": "Range Improvements",
      "f": [["bba_air_techs_folder",1720,222]],
      "year": 1936,
      "cost": 1.0,
      "ic": "plane",
      "cat": [
        "air_equipment",
        "plane_modules_tech",
        "mio_cat_all_light_fighter_and_modules",
        "mio_cat_all_cas_and_modules",
        "mio_cat_all_naval_bomber_and_modules",
        "mio_cat_all_medium_aircraft_and_modules",
        "mio_cat_all_heavy_aircraft_and_modules",
        "mio_cat_all_light_aircraft_and_modules"
      ],
      "fx": ["Unlocks modules: Extra Fuel Tanks, Extra Fuel Tanks, Extra Fuel Tanks, Drop Tanks"]
    },
    {
      "id": "engines_2",
      "name": "Engines II",
      "f": [["bba_air_techs_folder",1860,222]],
      "year": 1936,
      "cost": 1.0,
      "ic": "plane",
      "leads": ["engines_3"],
      "cat": [
        "air_equipment",
        "plane_modules_tech",
        "cat_air_engine",
        "mio_cat_all_light_fighter_and_modules",
        "mio_cat_all_cas_and_modules",
        "mio_cat_all_naval_bomber_and_modules",
        "mio_cat_all_medium_aircraft_and_modules",
        "mio_cat_all_heavy_aircraft_and_modules",
        "mio_cat_all_light_aircraft_and_modules"
      ],
      "fx": ["Unlocks modules: 1x Engine II, 2x Engine II, 3x Engine II, 4x Engine II, 6x Engine II"]
    },
    {
      "id": "survivability_studies",
      "name": "Survivability Studies",
      "f": [["bba_air_techs_folder",1245,292]],
      "year": 1939,
      "cost": 1.0,
      "ic": "plane",
      "cat": [
        "air_equipment",
        "plane_modules_tech",
        "mio_cat_all_light_fighter_and_modules",
        "mio_cat_all_medium_aircraft_and_modules",
        "mio_cat_all_heavy_aircraft_and_modules",
        "mio_cat_all_light_aircraft_and_modules"
      ],
      "fx": ["Unlocks modules: Self-Sealing Fuel Tanks, Self-Sealing Fuel Tanks, Self-Sealing Fuel Tanks, Armor Plates, Armor Plates, Armor Plates"]
    },
    {
      "id": "aa_hmg",
      "name": "Heavy MG",
      "f": [["bba_air_techs_folder",1385,292]],
      "year": 1939,
      "cost": 1.0,
      "ic": "plane",
      "cat": [
        "air_equipment",
        "plane_modules_tech",
        "cat_air_guns",
        "mio_cat_all_light_fighter_and_modules",
        "mio_cat_all_medium_aircraft_and_modules",
        "mio_cat_all_heavy_aircraft_and_modules",
        "mio_cat_all_light_aircraft_and_modules"
      ],
      "fx": ["Unlocks modules: 2x Heavy Machine Gun, 4x Heavy Machine Gun, Heavy MG Defense Turret, Heavy MG Defense Turret 2x"]
    },
    {
      "id": "aa_cannon_1",
      "name": "Cannons I",
      "f": [["bba_air_techs_folder",1525,292]],
      "year": 1939,
      "cost": 1.0,
      "ic": "plane",
      "leads": ["aa_cannon_2","aa_cannon_3"],
      "cat": [
        "air_equipment",
        "plane_modules_tech",
        "cat_air_guns",
        "mio_cat_all_light_fighter_and_modules",
        "mio_cat_all_medium_aircraft_and_modules",
        "mio_cat_all_heavy_aircraft_and_modules",
        "mio_cat_all_light_aircraft_and_modules"
      ],
      "fx": ["Unlocks modules: 1x Cannon I, 2x Cannon I"]
    },
    {
      "id": "improved_small_airframe",
      "name": "Improved Small Airframe",
      "f": [["bba_air_techs_folder",80,362]],
      "year": 1940,
      "cost": 2.0,
      "ic": "plane",
      "leads": ["advanced_small_airframe"],
      "cat": [
        "light_air",
        "light_fighter",
        "cas_bomber",
        "naval_air",
        "naval_bomber",
        "air_equipment",
        "mio_cat_all_light_fighter_and_modules",
        "mio_cat_all_cas_and_modules",
        "mio_cat_all_naval_bomber_and_modules",
        "mio_cat_all_light_aircraft_and_modules"
      ],
      "fx": [
        "Unlocks equipment: Improved Small Airframe, Improved Close Air Support, Improved Naval Bomber, Improved Suicide Airframe, Improved Carrier Airframe, Improved Carrier Close Air Support, Improved Carrier Naval Bomber, Improved Carrier Suicide Airframe"
      ]
    },
    {
      "id": "improved_medium_airframe",
      "name": "Improved Medium Airframe",
      "f": [["bba_air_techs_folder",285,362]],
      "year": 1940,
      "cost": 2.0,
      "ic": "plane",
      "leads": ["advanced_medium_airframe"],
      "cat": ["medium_air","tactical_bomber","cat_heavy_fighter","air_equipment","mio_cat_all_medium_aircraft_and_modules"],
      "fx": ["Unlocks equipment: Improved Medium Airframe, Improved Heavy Fighter, Improved Scout Plane"]
    },
    {
      "id": "improved_large_airframe",
      "name": "Improved Large Airframe",
      "f": [["bba_air_techs_folder",595,362]],
      "year": 1940,
      "cost": 2.0,
      "ic": "plane",
      "leads": ["advanced_large_airframe","reinforced_wings_mothership"],
      "cat": ["heavy_air","air_equipment","cat_strategic_bomber","cat_maritime_patrol","mio_cat_all_heavy_aircraft_and_modules"],
      "fx": ["Unlocks equipment: Improved Large Airframe, Improved Maritime Patrol Plane"]
    },
    {
      "id": "bba_improved_transport_plane",
      "name": "Improved Transport Plane",
      "f": [["bba_air_techs_folder",910,362]],
      "year": 1940,
      "cost": 2.0,
      "ic": "plane",
      "leads": ["bba_strategic_airlifter"],
      "cat": ["air_equipment","transport_planes_cat"],
      "fx": ["Unlocks equipment: Improved Transport Plane"]
    },
    {
      "id": "heavy_bombs",
      "name": "Heavy Bombs",
      "f": [["bba_air_techs_folder",1140,362]],
      "year": 1940,
      "cost": 1.0,
      "ic": "plane",
      "cat": [
        "air_equipment",
        "plane_modules_tech",
        "cat_air_bombs",
        "mio_cat_all_cas_and_modules",
        "mio_cat_all_medium_aircraft_and_modules",
        "mio_cat_all_light_aircraft_and_modules"
      ],
      "fx": ["Unlocks modules: Heavy Bomb Locks"]
    },
    {
      "id": "air_torpedoe_2",
      "name": "Improved Air Launched Torpedoes",
      "f": [["bba_air_techs_folder",1620,362]],
      "year": 1940,
      "cost": 1.0,
      "ic": "plane",
      "leads": ["air_torpedoe_3"],
      "cat": [
        "air_equipment",
        "plane_modules_tech",
        "cat_air_bombs",
        "cat_maritime_patrol",
        "mio_cat_all_naval_bomber_and_modules",
        "mio_cat_all_medium_aircraft_and_modules",
        "mio_cat_all_heavy_aircraft_and_modules",
        "mio_cat_all_light_aircraft_and_modules"
      ],
      "fx": ["Unlocks modules: Medium Torpedo Mountings"]
    },
    {
      "id": "engines_3",
      "name": "Engines III",
      "f": [["bba_air_techs_folder",1860,362]],
      "year": 1940,
      "cost": 1.5,
      "ic": "plane",
      "leads": ["engines_4"],
      "cat": [
        "air_equipment",
        "plane_modules_tech",
        "cat_air_engine",
        "mio_cat_all_light_fighter_and_modules",
        "mio_cat_all_cas_and_modules",
        "mio_cat_all_naval_bomber_and_modules",
        "mio_cat_all_medium_aircraft_and_modules",
        "mio_cat_all_heavy_aircraft_and_modules",
        "mio_cat_all_light_aircraft_and_modules"
      ],
      "fx": ["Unlocks modules: 1x Engine III, 2x Engine III, 3x Engine III, 4x Engine III, 6x Engine III"]
    },
    {
      "id": "reinforced_wings_mothership",
      "name": "Reinforced Mothership Wings",
      "f": [["bba_air_techs_folder",805,432]],
      "year": 1942,
      "cost": 1.75,
      "ic": "plane",
      "leads": ["miniature_fighters"],
      "cat": ["heavy_air","air_equipment","cat_strategic_bomber","mio_cat_all_heavy_aircraft_and_modules"],
      "fx": ["Mothership Aircraft: Air Defense +8%"]
    },
    {
      "id": "aa_cannon_2",
      "name": "Large Cannons",
      "f": [["bba_air_techs_folder",1385,432]],
      "year": 1943,
      "cost": 1.5,
      "ic": "plane",
      "cat": [
        "air_equipment",
        "plane_modules_tech",
        "cat_air_guns",
        "mio_cat_all_light_fighter_and_modules",
        "mio_cat_all_medium_aircraft_and_modules",
        "mio_cat_all_heavy_aircraft_and_modules",
        "mio_cat_all_light_aircraft_and_modules"
      ],
      "fx": ["Unlocks modules: 1x Large Cannon, 2x Large Cannon, Cannon Defense Turret, Cannon Defense Turret 2x"]
    },
    {
      "id": "advanced_small_airframe",
      "name": "Advanced Small Airframe",
      "f": [["bba_air_techs_folder",80,502]],
      "year": 1944,
      "cost": 2.0,
      "ic": "plane",
      "leads": ["modern_small_airframe"],
      "cat": [
        "light_air",
        "light_fighter",
        "cas_bomber",
        "naval_air",
        "naval_bomber",
        "air_equipment",
        "mio_cat_all_light_fighter_and_modules",
        "mio_cat_all_cas_and_modules",
        "mio_cat_all_naval_bomber_and_modules",
        "mio_cat_all_light_aircraft_and_modules"
      ],
      "fx": [
        "Unlocks equipment: Advanced Small Airframe, Advanced Close Air Support, Advanced Naval Bomber, Advanced Suicide Airframe, Advanced Carrier Airframe, Advanced Carrier Close Air Support, Advanced Carrier Naval Bomber, Advanced Carrier Suicide Airframe"
      ]
    },
    {
      "id": "advanced_medium_airframe",
      "name": "Advanced Medium Airframe",
      "f": [["bba_air_techs_folder",285,502]],
      "year": 1944,
      "cost": 2.0,
      "ic": "plane",
      "leads": ["modern_medium_airframe"],
      "cat": ["medium_air","tactical_bomber","cat_heavy_fighter","air_equipment","mio_cat_all_medium_aircraft_and_modules"],
      "fx": ["Unlocks equipment: Advanced Medium Airframe, Advanced Heavy Fighter, Advanced Scout Plane"]
    },
    {
      "id": "advanced_large_airframe",
      "name": "Advanced Large Airframe",
      "f": [["bba_air_techs_folder",595,502]],
      "year": 1944,
      "cost": 2.0,
      "ic": "plane",
      "leads": ["modern_large_airframe"],
      "cat": ["heavy_air","air_equipment","cat_strategic_bomber","cat_maritime_patrol","mio_cat_all_heavy_aircraft_and_modules"],
      "fx": ["Unlocks equipment: Advanced Large Airframe, Advanced Maritime Patrol Plane"]
    },
    {
      "id": "engines_4",
      "name": "Engines IV",
      "f": [["bba_air_techs_folder",1860,502]],
      "year": 1944,
      "cost": 1.5,
      "ic": "plane",
      "leads": ["sp_centrifugal_jet_tech"],
      "cat": [
        "air_equipment",
        "plane_modules_tech",
        "cat_air_engine",
        "mio_cat_all_light_fighter_and_modules",
        "mio_cat_all_cas_and_modules",
        "mio_cat_all_naval_bomber_and_modules",
        "mio_cat_all_medium_aircraft_and_modules",
        "mio_cat_all_heavy_aircraft_and_modules",
        "mio_cat_all_light_aircraft_and_modules"
      ],
      "fx": ["Unlocks modules: 1x Engine IV, 2x Engine IV, 3x Engine IV, 4x Engine IV, 6x Engine IV"]
    },
    {
      "id": "miniature_fighters",
      "name": "Miniature Fighters",
      "f": [["bba_air_techs_folder",805,642]],
      "year": 1944,
      "cost": 1.5,
      "ic": "plane",
      "leads": ["aerial_hangars"],
      "cat": ["heavy_air","air_equipment","cat_strategic_bomber","mio_cat_all_heavy_aircraft_and_modules"],
      "fx": ["Mothership Aircraft: Agility +0.06, Air Attack +6%, Fuel consumption factor -8%"]
    },
    {
      "id": "air_torpedoe_3",
      "name": "Advanced Air Launched Torpedoes",
      "f": [["bba_air_techs_folder",1620,642]],
      "year": 1944,
      "cost": 1.0,
      "ic": "plane",
      "cat": [
        "air_equipment",
        "plane_modules_tech",
        "cat_air_bombs",
        "cat_maritime_patrol",
        "mio_cat_all_naval_bomber_and_modules",
        "mio_cat_all_medium_aircraft_and_modules",
        "mio_cat_all_heavy_aircraft_and_modules",
        "mio_cat_all_light_aircraft_and_modules"
      ],
      "fx": ["Unlocks modules: Heavy Torpedo Mountings"]
    },
    {
      "id": "modern_small_airframe",
      "name": "Modern Small Airframe",
      "f": [["bba_air_techs_folder",80,782]],
      "year": 1945,
      "cost": 2.0,
      "ic": "plane",
      "cat": [
        "light_air",
        "light_fighter",
        "cas_bomber",
        "air_equipment",
        "naval_air",
        "naval_bomber",
        "jet_technology",
        "mio_cat_all_light_fighter_and_modules",
        "mio_cat_all_cas_and_modules",
        "mio_cat_all_naval_bomber_and_modules",
        "mio_cat_all_light_aircraft_and_modules"
      ],
      "fx": [
        "Unlocks equipment: Modern Small Airframe, Modern Close Air Support, Modern Naval Bomber, Modern Suicide Airframe, Modern Carrier Airframe, Modern Carrier Close Air Support, Modern Carrier Naval Bomber, Modern Carrier Suicide Airframe"
      ]
    },
    {
      "id": "modern_medium_airframe",
      "name": "Modern Medium Airframe",
      "f": [["bba_air_techs_folder",285,782]],
      "year": 1945,
      "cost": 2.0,
      "ic": "plane",
      "cat": ["medium_air","jet_technology","cat_heavy_fighter","tactical_bomber","mio_cat_all_medium_aircraft_and_modules"],
      "fx": ["Unlocks equipment: Modern Medium Airframe, Modern Heavy Fighter, Modern Scout Plane"]
    },
    {
      "id": "modern_large_airframe",
      "name": "Modern Large Airframe",
      "f": [["bba_air_techs_folder",595,782]],
      "year": 1945,
      "cost": 2.0,
      "ic": "plane",
      "cat": ["heavy_air","jet_technology","cat_strategic_bomber","cat_maritime_patrol","mio_cat_all_heavy_aircraft_and_modules"],
      "fx": ["Unlocks equipment: Modern Large Airframe, Modern Maritime Patrol Airframe"]
    },
    {
      "id": "bba_strategic_airlifter",
      "name": "Modern Transport Plane",
      "f": [["bba_air_techs_folder",910,782]],
      "year": 1945,
      "cost": 2.0,
      "ic": "plane",
      "cat": ["air_equipment","transport_planes_cat"],
      "fx": ["Unlocks equipment: Modern Transport Plane"]
    },
    {
      "id": "aa_cannon_3",
      "name": "Cannons II",
      "f": [["bba_air_techs_folder",1525,782]],
      "year": 1945,
      "cost": 2.0,
      "ic": "plane",
      "cat": [
        "air_equipment",
        "plane_modules_tech",
        "cat_air_guns",
        "mio_cat_all_light_fighter_and_modules",
        "mio_cat_all_medium_aircraft_and_modules",
        "mio_cat_all_heavy_aircraft_and_modules",
        "mio_cat_all_light_aircraft_and_modules"
      ],
      "fx": ["Unlocks modules: 1x Cannon II, 2x Cannon II, Cannon Defense Turret, Cannon Defense Turret 2x"]
    },
    {
      "id": "sp_centrifugal_jet_tech",
      "name": "Centrifugal Jet",
      "f": [["bba_air_techs_folder",1860,782]],
      "year": 1945,
      "cost": 2.0,
      "ic": "plane",
      "cat": ["jet_technology","cat_air_engine","helicopter_tech"],
      "fx": ["Helicopter Support Companies: Fuel consumption -0.05, Maximum speed +10%, Defense +5%, Breakthrough +5%"]
    },
    {
      "id": "aerial_hangars",
      "name": "Aerial Hangars",
      "f": [["bba_air_techs_folder",805,852]],
      "year": 1946,
      "cost": 1.75,
      "ic": "plane",
      "cat": ["heavy_air","air_equipment","cat_strategic_bomber","mio_cat_all_heavy_aircraft_and_modules"],
      "fx": ["Mothership Aircraft: Agility +0.1, Air Range +0.2, Air Attack +10%"]
    },
    {
      "id": "electronic_mechanical_engineering",
      "name": "Electronic Mechanical Engineering",
      "f": [["electronics_folder",140,92]],
      "year": 1936,
      "cost": 1.0,
      "ic": "bolt",
      "leads": ["radio","mechanical_computing","cavity_magnatron"],
      "cat": ["electronics"],
      "fx": ["Unlocks modules: Central Rangefinding","Research Speed +3%"]
    },
    {
      "id": "basic_fortification_tech",
      "name": "Basic Fortification",
      "f": [["electronics_folder",660,92]],
      "year": 1936,
      "cost": 1.5,
      "ic": "fort",
      "leads": ["coastal_fort_tech_1","land_fort_tech_1"],
      "cat": ["cat_fortification"],
      "fx": ["Bunker max level terrain limit +1","Coastal bunker max level terrain limit +1"]
    },
    {
      "id": "atomic_research",
      "name": "Atomic Research",
      "f": [["electronics_folder",950,92]],
      "year": 1940,
      "cost": 5.0,
      "ic": "bolt",
      "cat": ["nuclear"],
      "fx": ["Research Speed +4%"]
    },
    {
      "id": "radio",
      "name": "Radio",
      "f": [["electronics_folder",20,212],["support_folder",710,1040]],
      "year": 0,
      "cost": 2.0,
      "ic": "bolt",
      "leads": ["improved_radio"],
      "cat": ["electronics"],
      "fx": ["Unlocks modules: Basic Radio, Radio Navigation I, Basic Radio","Reinforce Rate +2%","Coordination +0.02"]
    },
    {
      "id": "mechanical_computing",
      "name": "Mechanical Computing",
      "f": [["electronics_folder",380,212]],
      "year": 0,
      "cost": 2.5,
      "ic": "bolt",
      "leads": ["computing_machine","basic_fire_control_system"],
      "cat": ["electronics","computing_tech"],
      "fx": ["Unlocks modules: Bomb Sights I","Research Speed +4%"]
    },
    {
      "id": "coastal_fort_tech_1",
      "name": "Improved Coastal Fortifications",
      "f": [["electronics_folder",720,212]],
      "year": 1936,
      "cost": 1.5,
      "ic": "fort",
      "leads": ["coastal_fort_tech_2"],
      "cat": ["cat_fortification"],
      "fx": ["Coastal bunker max level terrain limit +1"]
    },
    {
      "id": "experimental_rockets",
      "name": "Experimental Rockets",
      "f": [["electronics_folder",1250,212]],
      "year": 1942,
      "cost": 1.5,
      "ic": "artillery",
      "leads": ["sp_rockets_improved_guidance","sp_rockets_rocket_bomber","sp_rockets_dual_chamber_rocket_engine_1"],
      "cat": ["rocketry"],
      "fx": ["Unlocks building: Rocket Site"]
    },
    {
      "id": "basic_fire_control_system",
      "name": "Basic Fire Control System",
      "f": [["electronics_folder",440,332]],
      "year": 0,
      "cost": 1.0,
      "ic": "ship",
      "cat": ["electronics","computing_tech","naval_equipment"],
      "fx": ["Unlocks modules: Director Fire"]
    },
    {
      "id": "sp_rockets_improved_guidance",
      "name": "Improved Guidance",
      "f": [["electronics_folder",1250,332]],
      "year": 1943,
      "cost": 1.0,
      "ic": "artillery",
      "cat": ["rocketry"],
      "fx": [
        "Unlocks modules: Guided Anti-Ship Missile",
        "Rocket: Air Range +0.25",
        "Support Rocket Artillery: Soft attack +10%",
        "Rocket Artillery: Soft attack +10%",
        "Truck-drawn Rocket Artillery: Soft attack +10%",
        "Motorized Rocket Artillery: Soft attack +10%",
        "Regimental Rocket Battery: Soft attack +10%"
      ]
    },
    {
      "id": "improved_radio",
      "name": "Improved Radio",
      "f": [["electronics_folder",20,452]],
      "year": 1938,
      "cost": 2.0,
      "ic": "bolt",
      "leads": ["advanced_radio"],
      "cat": ["electronics"],
      "fx": ["Unlocks modules: Radio Navigation II, Improved Radio, Improved Radio","Reinforce Rate +2%","Coordination +0.02"]
    },
    {
      "id": "cavity_magnatron",
      "name": "Cavity Magnetron",
      "f": [["electronics_folder",140,452]],
      "year": 1938,
      "cost": 1.25,
      "ic": "bolt",
      "leads": ["centimetric_radar"],
      "cat": ["electronics","radar_tech"],
      "fx": ["Unlocks modules: Improved Decimetric Naval Search Radar","Unlocks building: Radar Station","Coordination +0.01"]
    },
    {
      "id": "computing_machine",
      "name": "Computing Machine",
      "f": [["electronics_folder",380,452]],
      "year": 1938,
      "cost": 2.5,
      "ic": "bolt",
      "leads": ["improved_computing_machine","improved_fire_control_system"],
      "cat": ["electronics","encryption_tech","decryption_tech","computing_tech"],
      "fx": ["Research Speed +5%"]
    },
    {
      "id": "land_fort_tech_1",
      "name": "Improved Land Forts",
      "f": [["electronics_folder",600,452]],
      "year": 1938,
      "cost": 1.5,
      "ic": "fort",
      "leads": ["land_fort_tech_2"],
      "cat": ["cat_fortification"],
      "fx": ["Unlocks modules: Bunker Emplacement","Bunker max level terrain limit +1"]
    },
    {
      "id": "sp_rockets_dual_chamber_rocket_engine_1",
      "name": "Dual Chamber Rocket Engines",
      "f": [["electronics_folder",1130,452]],
      "year": 1944,
      "cost": 1.5,
      "ic": "artillery",
      "leads": ["sp_rockets_dual_chamber_rocket_engine_2"],
      "cat": ["rocketry"],
      "fx": ["Unlocks equipment: Rocket Interceptor II","Unlocks modules: Rocket Engine II"]
    },
    {
      "id": "sp_rockets_rocket_bomber",
      "name": "Rocket Propelled Bombs",
      "f": [["electronics_folder",1370,452]],
      "year": 1944,
      "cost": 1.0,
      "ic": "artillery",
      "leads": ["sp_rockets_improved_rocket_bomber"],
      "cat": ["rocketry"],
      "fx": ["Unlocks modules: Rocket Propelled Bombs"]
    },
    {
      "id": "improved_fire_control_system",
      "name": "Improved Fire Control System",
      "f": [["electronics_folder",440,572]],
      "year": 0,
      "cost": 1.0,
      "ic": "ship",
      "cat": ["electronics","computing_tech","naval_equipment"],
      "fx": ["Unlocks modules: Mechanical Rangekeeper"]
    },
    {
      "id": "sp_rockets_improved_rocket_bomber",
      "name": "Heavy Rocket Propelled Bombs",
      "f": [["electronics_folder",1370,572]],
      "year": 1945,
      "cost": 1.0,
      "ic": "artillery",
      "cat": ["rocketry"],
      "fx": ["Unlocks modules: Heavy Rocket Propelled Bombs"]
    },
    {
      "id": "centimetric_radar",
      "name": "Centimetric Radar",
      "f": [["electronics_folder",140,692]],
      "year": 1940,
      "cost": 1.25,
      "ic": "bolt",
      "leads": ["phased_array"],
      "cat": ["electronics","radar_tech"],
      "fx": [
        "Unlocks modules: Air-Air Radar I, Air-Ground Radar I",
        "Unlocks building: Radar Station",
        "Coordination +0.02",
        "Static Anti Air hit chance factor +20%"
      ]
    },
    {
      "id": "improved_computing_machine",
      "name": "Improved Computing Machine",
      "f": [["electronics_folder",380,692]],
      "year": 1940,
      "cost": 2.5,
      "ic": "bolt",
      "leads": ["advanced_computing_machine","advanced_fire_control_system"],
      "cat": ["electronics","encryption_tech","decryption_tech","computing_tech"],
      "fx": ["Unlocks modules: Stabilizer, Bomb Sights II","Research Speed +8%"]
    },
    {
      "id": "land_fort_tech_2",
      "name": "Advanced Land Forts",
      "f": [["electronics_folder",600,692]],
      "year": 1940,
      "cost": 1.5,
      "ic": "fort",
      "cat": ["cat_fortification"],
      "fx": ["Bunker max level terrain limit +1"]
    },
    {
      "id": "coastal_fort_tech_2",
      "name": "Advanced Coastal Fortifications",
      "f": [["electronics_folder",720,692]],
      "year": 1940,
      "cost": 1.5,
      "ic": "fort",
      "cat": ["cat_fortification"],
      "fx": ["Coastal bunker max level terrain limit +2"]
    },
    {
      "id": "sp_rockets_dual_chamber_rocket_engine_2",
      "name": "Advanced Dual Chamber Rocket Engines",
      "f": [["electronics_folder",1130,692]],
      "year": 1946,
      "cost": 1.5,
      "ic": "artillery",
      "cat": ["rocketry"],
      "fx": ["Unlocks equipment: Rocket Interceptor III","Unlocks modules: Rocket Engine III"]
    },
    {
      "id": "advanced_radio",
      "name": "Advanced Radio",
      "f": [["electronics_folder",20,812]],
      "year": 1941,
      "cost": 2.0,
      "ic": "bolt",
      "cat": ["electronics"],
      "fx": ["Unlocks modules: Advanced Radio, Advanced Radio","Reinforce Rate +1%","Coordination +0.02"]
    },
    {
      "id": "phased_array",
      "name": "Phased Array",
      "f": [["electronics_folder",140,812]],
      "year": 1941,
      "cost": 1.25,
      "ic": "bolt",
      "leads": ["monopulse_radar"],
      "cat": ["electronics","radar_tech"],
      "fx": [
        "Unlocks modules: Air-Air Radar II, Centimetric Gunnery Radar",
        "Unlocks building: Radar Station",
        "Coordination +0.01",
        "Static Anti Air hit chance factor +20%"
      ]
    },
    {
      "id": "advanced_fire_control_system",
      "name": "Advanced Fire Control System",
      "f": [["electronics_folder",440,812]],
      "year": 0,
      "cost": 1.0,
      "ic": "ship",
      "cat": ["electronics","computing_tech","naval_equipment"],
      "fx": ["Unlocks modules: Ballistic Computer"]
    },
    {
      "id": "monopulse_radar",
      "name": "Monopulse Radar",
      "f": [["electronics_folder",140,932]],
      "year": 1942,
      "cost": 1.25,
      "ic": "bolt",
      "cat": ["electronics","radar_tech"],
      "fx": [
        "Unlocks modules: Integrated Fire Control Radar, Air-Ground Radar II",
        "Unlocks building: Radar Station",
        "Coordination +0.01",
        "Static Anti Air hit chance factor +20%"
      ]
    },
    {
      "id": "advanced_computing_machine",
      "name": "Advanced Computing Machine",
      "f": [["electronics_folder",380,932]],
      "year": 1942,
      "cost": 2.5,
      "ic": "bolt",
      "cat": ["electronics","encryption_tech","decryption_tech","computing_tech"],
      "fx": ["Research Speed +8%"],
      "leads": ["advanced_encryption","advanced_decryption"]
    },
    {
      "id": "basic_machine_tools",
      "name": "Basic Machine Tools",
      "f": [["industry_folder",90,77]],
      "year": 1936,
      "cost": 1.5,
      "ic": "factory",
      "leads": ["improved_machine_tools","concentrated_industry","dispersed_industry"],
      "cat": ["industry","cat_production"],
      "fx": ["Production Efficiency Cap +10%","Equipment Conversion Speed +20%"]
    },
    {
      "id": "fuel_silos",
      "name": "Fuel Storage",
      "f": [["industry_folder",1310,77]],
      "year": 1936,
      "cost": 1.0,
      "ic": "oil",
      "leads": ["synth_oil_experiments","fuel_refining"],
      "cat": ["industry","synth_resources"],
      "fx": ["Unlocks building: Fuel Silo"]
    },
    {
      "id": "concentrated_industry",
      "name": "Concentrated Industry I",
      "f": [["industry_folder",370,217]],
      "year": 0,
      "cost": 2.0,
      "ic": "factory",
      "leads": ["concentrated_industry2"],
      "xor": ["dispersed_industry"],
      "cat": ["industry","concentrated_industry_category"],
      "fx": ["Industrial capacity factory +15%","Industrial capacity dockyard +10%","Max Factories in a State +20%"]
    },
    {
      "id": "dispersed_industry",
      "name": "Dispersed Industry I",
      "f": [["industry_folder",510,217]],
      "year": 0,
      "cost": 2.0,
      "ic": "factory",
      "leads": ["dispersed_industry2"],
      "xor": ["concentrated_industry"],
      "cat": ["industry","dispersed_industry_category"],
      "fx": [
        "Industrial capacity factory +10%",
        "Industrial capacity dockyard +10%",
        "Production Efficiency Retention +10%",
        "Production Efficiency Base +5%",
        "Factory Bomb Vulnerability -15%",
        "Max Factories in a State +20%"
      ]
    },
    {
      "id": "construction1",
      "name": "Construction I",
      "f": [["industry_folder",884,217]],
      "year": 1936,
      "cost": 2.0,
      "ic": "factory",
      "leads": ["construction2","excavation1"],
      "cat": ["industry","construction_tech"],
      "fx": ["Construction Speed +10%","Factory Repair Speed +10%"]
    },
    {
      "id": "excavation1",
      "name": "Excavation I",
      "f": [["industry_folder",1024,217]],
      "year": 0,
      "cost": 2.0,
      "ic": "factory",
      "cat": ["industry","construction_tech","excavation_tech"],
      "fx": ["Resource Gain Efficiency +10%","Coal Gain Efficiency +5%"]
    },
    {
      "id": "synth_oil_experiments",
      "name": "Synthetic Oil Experiments",
      "f": [["industry_folder",1240,217]],
      "year": 1936,
      "cost": 3.0,
      "ic": "oil",
      "leads": ["oil_processing","rubber_processing"],
      "cat": ["industry","synth_resources","cat_synth_oil"],
      "fx": ["Unlocks building: Synthetic Refinery"]
    },
    {
      "id": "fuel_refining",
      "name": "Fuel Refining I",
      "f": [["industry_folder",1450,217]],
      "year": 1936,
      "cost": 3.0,
      "ic": "oil",
      "leads": ["fuel_refining2"],
      "cat": ["industry","synth_resources"],
      "fx": ["Fuel gain per oil +20%","Fuel gain from refineries +10%"]
    },
    {
      "id": "improved_machine_tools",
      "name": "Improved Machine Tools",
      "f": [["industry_folder",90,357]],
      "year": 1937,
      "cost": 1.5,
      "ic": "factory",
      "leads": ["advanced_machine_tools","improved_equipment_conversion"],
      "cat": ["industry","cat_production"],
      "fx": ["Production Efficiency Cap +10%","Equipment Conversion Speed +20%"]
    },
    {
      "id": "improved_equipment_conversion",
      "name": "Pulverized Coal-Firing Boilers",
      "f": [["industry_folder",230,357]],
      "year": 1937,
      "cost": 2.0,
      "ic": "factory",
      "leads": ["advanced_equipment_conversion"],
      "cat": ["industry","cat_production","construction_tech","excavation_tech"],
      "fx": ["Energy gain per coal +15%"]
    },
    {
      "id": "concentrated_industry2",
      "name": "Concentrated Industry II",
      "f": [["industry_folder",370,357]],
      "year": 1937,
      "cost": 2.0,
      "ic": "factory",
      "leads": ["concentrated_industry3"],
      "cat": ["industry","concentrated_industry_category"],
      "fx": ["Industrial capacity factory +15%","Industrial capacity dockyard +10%","Max Factories in a State +20%"]
    },
    {
      "id": "dispersed_industry2",
      "name": "Dispersed Industry II",
      "f": [["industry_folder",510,357]],
      "year": 1937,
      "cost": 2.0,
      "ic": "factory",
      "leads": ["dispersed_industry3"],
      "cat": ["industry","dispersed_industry_category"],
      "fx": [
        "Industrial capacity factory +10%",
        "Industrial capacity dockyard +10%",
        "Production Efficiency Retention +10%",
        "Production Efficiency Base +5%",
        "Factory Bomb Vulnerability -10%",
        "Max Factories in a State +20%"
      ]
    },
    {
      "id": "construction2",
      "name": "Construction II",
      "f": [["industry_folder",884,357]],
      "year": 1937,
      "cost": 2.0,
      "ic": "factory",
      "leads": ["construction3","excavation2"],
      "cat": ["industry","construction_tech"],
      "fx": ["Construction Speed +10%","Factory Repair Speed +10%"]
    },
    {
      "id": "excavation2",
      "name": "Excavation II",
      "f": [["industry_folder",1024,357]],
      "year": 1937,
      "cost": 2.0,
      "ic": "factory",
      "cat": ["industry","construction_tech","excavation_tech"],
      "fx": ["Resource Gain Efficiency +10%","Coal Gain Efficiency +5%"]
    },
    {
      "id": "oil_processing",
      "name": "Oil Processing",
      "f": [["industry_folder",1170,357]],
      "year": 1937,
      "cost": 1.5,
      "ic": "oil",
      "leads": ["improved_oil_processing"],
      "cat": ["industry","synth_resources","cat_synth_oil"],
      "fx": ["Fuel gain from refineries +50%"]
    },
    {
      "id": "rubber_processing",
      "name": "Rubber Processing",
      "f": [["industry_folder",1310,357]],
      "year": 1937,
      "cost": 1.5,
      "ic": "oil",
      "leads": ["improved_rubber_processing"],
      "cat": ["industry","synth_resources","cat_synth_rubber"]
    },
    {
      "id": "fuel_refining2",
      "name": "Fuel Refining II",
      "f": [["industry_folder",1450,357]],
      "year": 1937,
      "cost": 3.0,
      "ic": "oil",
      "leads": ["fuel_refining3"],
      "cat": ["industry","synth_resources"],
      "fx": ["Fuel gain per oil +20%","Fuel gain from refineries +10%"]
    },
    {
      "id": "advanced_machine_tools",
      "name": "Advanced Machine Tools",
      "f": [["industry_folder",90,497]],
      "year": 1939,
      "cost": 2.0,
      "ic": "factory",
      "leads": ["assembly_line_production"],
      "cat": ["industry","cat_production"],
      "fx": ["Production Efficiency Cap +10%","Equipment Conversion Speed +20%"]
    },
    {
      "id": "advanced_equipment_conversion",
      "name": "High-Efficiency Turbines",
      "f": [["industry_folder",230,497]],
      "year": 1939,
      "cost": 2.0,
      "ic": "factory",
      "cat": ["industry","cat_production","construction_tech","excavation_tech"],
      "fx": ["Energy gain per coal +15%"]
    },
    {
      "id": "concentrated_industry3",
      "name": "Concentrated Industry III",
      "f": [["industry_folder",370,497]],
      "year": 1939,
      "cost": 2.0,
      "ic": "factory",
      "leads": ["concentrated_industry4"],
      "cat": ["industry","concentrated_industry_category"],
      "fx": ["Industrial capacity factory +15%","Industrial capacity dockyard +10%","Max Factories in a State +20%"]
    },
    {
      "id": "dispersed_industry3",
      "name": "Dispersed Industry III",
      "f": [["industry_folder",510,497]],
      "year": 1939,
      "cost": 2.0,
      "ic": "factory",
      "leads": ["dispersed_industry4"],
      "cat": ["industry","dispersed_industry_category"],
      "fx": [
        "Industrial capacity factory +10%",
        "Industrial capacity dockyard +10%",
        "Production Efficiency Retention +10%",
        "Production Efficiency Base +5%",
        "Factory Bomb Vulnerability -10%",
        "Max Factories in a State +20%"
      ]
    },
    {
      "id": "construction3",
      "name": "Construction III",
      "f": [["industry_folder",884,497]],
      "year": 1939,
      "cost": 2.0,
      "ic": "factory",
      "leads": ["construction4","excavation3"],
      "cat": ["industry","construction_tech"],
      "fx": ["Construction Speed +10%","Factory Repair Speed +10%"]
    },
    {
      "id": "excavation3",
      "name": "Excavation III",
      "f": [["industry_folder",1024,497]],
      "year": 1939,
      "cost": 2.0,
      "ic": "factory",
      "cat": ["industry","construction_tech","excavation_tech"],
      "fx": ["Resource Gain Efficiency +10%","Coal Gain Efficiency +5%"]
    },
    {
      "id": "improved_oil_processing",
      "name": "Improved Oil Processing",
      "f": [["industry_folder",1170,497]],
      "year": 1939,
      "cost": 1.5,
      "ic": "oil",
      "leads": ["advanced_oil_processing"],
      "cat": ["industry","synth_resources","cat_synth_oil"],
      "fx": ["Fuel gain from refineries +50%"]
    },
    {
      "id": "improved_rubber_processing",
      "name": "Improved Rubber Processing",
      "f": [["industry_folder",1310,497]],
      "year": 1939,
      "cost": 1.5,
      "ic": "oil",
      "leads": ["advanced_rubber_processing"],
      "cat": ["industry","synth_resources","cat_synth_rubber"]
    },
    {
      "id": "fuel_refining3",
      "name": "Fuel Refining III",
      "f": [["industry_folder",1450,497]],
      "year": 1939,
      "cost": 3.0,
      "ic": "oil",
      "leads": ["fuel_refining4"],
      "cat": ["industry","synth_resources"],
      "fx": ["Fuel gain per oil +20%","Fuel gain from refineries +10%"]
    },
    {
      "id": "assembly_line_production",
      "name": "Assembly Line Production",
      "f": [["industry_folder",90,637]],
      "year": 1941,
      "cost": 2.0,
      "ic": "factory",
      "leads": ["flexible_line","streamlined_line"],
      "cat": ["industry","cat_production"],
      "fx": ["Production Efficiency Cap +10%","Equipment Conversion Speed +20%"]
    },
    {
      "id": "concentrated_industry4",
      "name": "Concentrated Industry IV",
      "f": [["industry_folder",370,637]],
      "year": 1941,
      "cost": 2.0,
      "ic": "factory",
      "leads": ["concentrated_industry5"],
      "cat": ["industry","concentrated_industry_category"],
      "fx": ["Industrial capacity factory +15%","Industrial capacity dockyard +10%","Max Factories in a State +20%"]
    },
    {
      "id": "dispersed_industry4",
      "name": "Dispersed Industry IV",
      "f": [["industry_folder",510,637]],
      "year": 1941,
      "cost": 2.0,
      "ic": "factory",
      "leads": ["dispersed_industry5"],
      "cat": ["industry","dispersed_industry_category"],
      "fx": [
        "Industrial capacity factory +10%",
        "Industrial capacity dockyard +10%",
        "Production Efficiency Retention +10%",
        "Production Efficiency Base +5%",
        "Factory Bomb Vulnerability -10%",
        "Max Factories in a State +20%"
      ]
    },
    {
      "id": "construction4",
      "name": "Construction IV",
      "f": [["industry_folder",884,637]],
      "year": 1941,
      "cost": 2.0,
      "ic": "factory",
      "leads": ["construction5","excavation4"],
      "cat": ["industry","construction_tech"],
      "fx": ["Construction Speed +10%","Factory Repair Speed +10%"]
    },
    {
      "id": "excavation4",
      "name": "Excavation IV",
      "f": [["industry_folder",1024,637]],
      "year": 1941,
      "cost": 2.0,
      "ic": "factory",
      "cat": ["industry","construction_tech","excavation_tech"],
      "fx": ["Resource Gain Efficiency +10%","Coal Gain Efficiency +5%"]
    },
    {
      "id": "advanced_oil_processing",
      "name": "Advanced Oil Processing",
      "f": [["industry_folder",1170,637]],
      "year": 1941,
      "cost": 1.5,
      "ic": "oil",
      "leads": ["modern_oil_processing"],
      "cat": ["industry","synth_resources","cat_synth_oil"],
      "fx": ["Fuel gain from refineries +50%"]
    },
    {
      "id": "advanced_rubber_processing",
      "name": "Advanced Rubber Processing",
      "f": [["industry_folder",1310,637]],
      "year": 1941,
      "cost": 1.5,
      "ic": "oil",
      "leads": ["modern_rubber_processing"],
      "cat": ["industry","synth_resources","cat_synth_rubber"]
    },
    {
      "id": "fuel_refining4",
      "name": "Fuel Refining IV",
      "f": [["industry_folder",1450,637]],
      "year": 1941,
      "cost": 3.0,
      "ic": "oil",
      "leads": ["fuel_refining5"],
      "cat": ["industry","synth_resources"],
      "fx": ["Fuel gain per oil +20%","Fuel gain from refineries +10%"]
    },
    {
      "id": "flexible_line",
      "name": "Flexible Line",
      "f": [["industry_folder",20,777]],
      "year": 1943,
      "cost": 2.5,
      "ic": "factory",
      "xor": ["streamlined_line"],
      "cat": ["industry","cat_production"],
      "fx": ["Production Efficiency Cap +10%","Production Efficiency Retention +20%"]
    },
    {
      "id": "streamlined_line",
      "name": "Streamlined Line",
      "f": [["industry_folder",160,777]],
      "year": 1943,
      "cost": 2.5,
      "ic": "factory",
      "xor": ["flexible_line"],
      "cat": ["industry","cat_production"],
      "fx": ["Production Efficiency Cap +10%","Production Efficiency growth +10%"]
    },
    {
      "id": "concentrated_industry5",
      "name": "Concentrated Industry V",
      "f": [["industry_folder",370,777]],
      "year": 1943,
      "cost": 2.0,
      "ic": "factory",
      "cat": ["industry","concentrated_industry_category"],
      "fx": ["Industrial capacity factory +15%","Industrial capacity dockyard +10%","Max Factories in a State +20%"]
    },
    {
      "id": "dispersed_industry5",
      "name": "Dispersed Industry V",
      "f": [["industry_folder",510,777]],
      "year": 1943,
      "cost": 2.0,
      "ic": "factory",
      "cat": ["industry","dispersed_industry_category"],
      "fx": [
        "Industrial capacity factory +10%",
        "Industrial capacity dockyard +10%",
        "Production Efficiency Retention +10%",
        "Production Efficiency Base +5%",
        "Factory Bomb Vulnerability -10%",
        "Max Factories in a State +20%"
      ]
    },
    {
      "id": "construction5",
      "name": "Construction V",
      "f": [["industry_folder",884,777]],
      "year": 1943,
      "cost": 2.0,
      "ic": "factory",
      "leads": ["excavation5"],
      "cat": ["industry","construction_tech"],
      "fx": ["Construction Speed +10%","Factory Repair Speed +10%"]
    },
    {
      "id": "excavation5",
      "name": "Excavation V",
      "f": [["industry_folder",1024,777]],
      "year": 1943,
      "cost": 2.0,
      "ic": "factory",
      "cat": ["industry","construction_tech","excavation_tech"],
      "fx": ["Resource Gain Efficiency +10%","Coal Gain Efficiency +5%"]
    },
    {
      "id": "modern_oil_processing",
      "name": "Modern Oil Processing",
      "f": [["industry_folder",1170,777]],
      "year": 1943,
      "cost": 1.5,
      "ic": "oil",
      "cat": ["industry","synth_resources","cat_synth_oil"],
      "fx": ["Fuel gain from refineries +50%"]
    },
    {
      "id": "modern_rubber_processing",
      "name": "Modern Rubber Processing",
      "f": [["industry_folder",1310,777]],
      "year": 1943,
      "cost": 1.5,
      "ic": "oil",
      "cat": ["industry","synth_resources","cat_synth_rubber"]
    },
    {
      "id": "fuel_refining5",
      "name": "Fuel Refining V",
      "f": [["industry_folder",1450,777]],
      "year": 1943,
      "cost": 3.0,
      "ic": "oil",
      "cat": ["industry","synth_resources"],
      "fx": ["Fuel gain per oil +20%","Fuel gain from refineries +10%"]
    },
    {
      "id": "support_weapons",
      "name": "Support Weapons I",
      "f": [["infantry_folder",130,180]],
      "year": 1918,
      "cost": 1.5,
      "ic": "helmet",
      "leads": ["support_weapons2"],
      "cat": ["infantry_weapons"],
      "fx": ["Unlocks battalion: Heavy Weapons Company, Motorized Heavy Weapons Company"]
    },
    {
      "id": "support_weapons2",
      "name": "Support Weapons II",
      "f": [["infantry_folder",410,180]],
      "year": 1938,
      "cost": 1.5,
      "ic": "helmet",
      "leads": ["support_weapons3"],
      "cat": ["infantry_weapons"],
      "fx": [
        "Infantry Guns: Defense +10%, Soft attack +10%",
        "Heavy Weapons Company: Defense +15%, Breakthrough +15%, Soft attack +10%",
        "Motorized Heavy Weapons Company: Defense +15%, Breakthrough +5%, Soft attack +10%"
      ]
    },
    {
      "id": "support_weapons3",
      "name": "Support Weapons III",
      "f": [["infantry_folder",690,180]],
      "year": 1940,
      "cost": 1.5,
      "ic": "helmet",
      "leads": ["support_weapons4"],
      "cat": ["infantry_weapons"],
      "fx": [
        "Infantry Guns: Defense +10%, Soft attack +10%",
        "Heavy Weapons Company: Defense +15%, Breakthrough +15%, Soft attack +10%",
        "Motorized Heavy Weapons Company: Defense +15%, Breakthrough +5%, Soft attack +10%"
      ]
    },
    {
      "id": "support_weapons4",
      "name": "Support Weapons IV",
      "f": [["infantry_folder",970,180]],
      "year": 1942,
      "cost": 1.5,
      "ic": "helmet",
      "cat": ["infantry_weapons"],
      "fx": [
        "Infantry Guns: Defense +10%, Soft attack +10%",
        "Heavy Weapons Company: Defense +15%, Breakthrough +15%, Soft attack +10%",
        "Motorized Heavy Weapons Company: Defense +15%, Breakthrough +5%, Soft attack +10%"
      ]
    },
    {
      "id": "night_vision",
      "name": "Night Vision I",
      "f": [["infantry_folder",1110,180]],
      "year": 1943,
      "cost": 2.5,
      "ic": "bolt",
      "leads": ["night_vision2"],
      "cat": ["night_vision"],
      "fx": ["Land Night Attack +10%"]
    },
    {
      "id": "night_vision2",
      "name": "Night Vision II",
      "f": [["infantry_folder",1530,180]],
      "year": 1946,
      "cost": 2.0,
      "ic": "bolt",
      "cat": ["night_vision"],
      "fx": ["Land Night Attack +15%"]
    },
    {
      "id": "infantry_weapons",
      "name": "Infantry Weapons",
      "f": [["infantry_folder",60,295]],
      "year": 1918,
      "cost": 1.5,
      "ic": "helmet",
      "leads": ["infantry_weapons1"],
      "cat": ["infantry_weapons"],
      "fx": [
        "Unlocks equipment: Basic Infantry Equipment",
        "Unlocks modules: Heavy Machine Gun, Heavy Machine Gun, Additional Machineguns",
        "Unlocks battalion: Infantry"
      ]
    },
    {
      "id": "infantry_weapons1",
      "name": "Infantry Equipment I",
      "f": [["infantry_folder",270,295]],
      "year": 1936,
      "cost": 1.5,
      "ic": "helmet",
      "leads": ["infantry_weapons2"],
      "cat": ["infantry_weapons"],
      "fx": ["Unlocks equipment: Infantry Equipment I"]
    },
    {
      "id": "infantry_weapons2",
      "name": "Improved Infantry Equipment I",
      "f": [["infantry_folder",410,295]],
      "year": 1938,
      "cost": 1.5,
      "ic": "helmet",
      "leads": ["improved_infantry_weapons"],
      "cat": ["infantry_weapons"],
      "fx": ["Leg Infantry: Soft attack +5%","Mounted Infantry: Soft attack +5%","Motorized & Mechanized Infantry: Soft attack +5%"]
    },
    {
      "id": "improved_infantry_weapons",
      "name": "Infantry Equipment II",
      "f": [["infantry_folder",550,295]],
      "year": 1939,
      "cost": 2.0,
      "ic": "helmet",
      "leads": ["improved_infantry_weapons_2","infantry_at"],
      "cat": ["infantry_weapons"],
      "fx": ["Unlocks equipment: Infantry Equipment II"]
    },
    {
      "id": "improved_infantry_weapons_2",
      "name": "Improved Infantry Equipment II",
      "f": [["infantry_folder",690,295]],
      "year": 1940,
      "cost": 2.0,
      "ic": "helmet",
      "leads": ["advanced_infantry_weapons"],
      "cat": ["infantry_weapons"],
      "fx": ["Leg Infantry: Soft attack +5%","Mounted Infantry: Soft attack +5%","Motorized & Mechanized Infantry: Soft attack +5%"]
    },
    {
      "id": "advanced_infantry_weapons",
      "name": "Infantry Equipment III",
      "f": [["infantry_folder",970,295]],
      "year": 1942,
      "cost": 2.0,
      "ic": "helmet",
      "leads": ["advanced_infantry_weapons2"],
      "cat": ["infantry_weapons"],
      "fx": ["Unlocks equipment: Infantry Equipment III"]
    },
    {
      "id": "advanced_infantry_weapons2",
      "name": "Improved Infantry Equipment III",
      "f": [["infantry_folder",1250,295]],
      "year": 1944,
      "cost": 1.5,
      "ic": "helmet",
      "cat": ["infantry_weapons"],
      "fx": ["Leg Infantry: Soft attack +5%","Mounted Infantry: Soft attack +5%","Motorized & Mechanized Infantry: Soft attack +10%"]
    },
    {
      "id": "infantry_at",
      "name": "Infantry Anti-Tank I",
      "f": [["infantry_folder",970,435]],
      "year": 1942,
      "cost": 1.5,
      "ic": "helmet",
      "leads": ["infantry_at2"],
      "cat": ["infantry_weapons"],
      "fx": [
        "All Infantry & Mot/Mech: Hard attack +25%, Ap attack +100%",
        "Mounted Infantry: Hard attack +10%, Ap attack +40%",
        "Heavy Weapons Company: Hard attack +15%, Ap attack +50%",
        "Motorized Heavy Weapons Company: Hard attack +15%, Ap attack +50%"
      ]
    },
    {
      "id": "infantry_at2",
      "name": "Infantry Anti-Tank II",
      "f": [["infantry_folder",1110,435]],
      "year": 1943,
      "cost": 1.5,
      "ic": "helmet",
      "cat": ["infantry_weapons"],
      "fx": [
        "All Infantry & Mot/Mech: Hard attack +25%, Ap attack +100%",
        "Mounted Infantry: Hard attack +10%, Ap attack +40%",
        "Heavy Weapons Company: Hard attack +15%, Ap attack +50%",
        "Motorized Heavy Weapons Company: Hard attack +15%, Ap attack +50%"
      ]
    },
    {
      "id": "tech_trucks",
      "name": "Early Truck",
      "f": [["infantry_folder",60,590]],
      "year": 1936,
      "cost": 1.5,
      "ic": "road",
      "leads": ["motorised_infantry","armored_car1"],
      "cat": ["motorized_equipment","mio_cat_tech_all_motorized_mechanized","infantry_tech"],
      "fx": [
        "Unlocks equipment: Early Truck",
        "Unlocks modules: Wheeled Suspension",
        "Unlocks battalion: Motorized Anti-Tank, Motorized Artillery, Motorized Anti-Air, Motorized HQ Security"
      ]
    },
    {
      "id": "motorised_infantry",
      "name": "Motorized Infantry",
      "f": [["infantry_folder",270,590],["support_folder",710,680]],
      "year": 1936,
      "cost": 2.0,
      "ic": "road",
      "leads": ["mechanised_infantry"],
      "cat": ["motorized_equipment","mio_cat_tech_all_motorized_mechanized","infantry_tech"],
      "fx": ["Unlocks equipment: Truck","Unlocks battalion: Motorized Infantry","Motorized Heavy Weapons Company: Breakthrough +10%"]
    },
    {
      "id": "mechanised_infantry",
      "name": "Mechanized Equipment I",
      "f": [["infantry_folder",690,590]],
      "year": 1940,
      "cost": 2.0,
      "ic": "road",
      "leads": ["mechanised_infantry2","amphibious_mechanized_infantry"],
      "cat": ["motorized_equipment","mio_cat_tech_all_motorized_mechanized","infantry_tech","cat_mechanized_equipment"],
      "fx": [
        "Unlocks equipment: Mechanized Equipment I",
        "Unlocks modules: Half-track Suspension",
        "Unlocks battalion: Mechanized Infantry",
        "Motorized Heavy Weapons Company: Breakthrough +10%, Soft attack +5%",
        "Motorized Infantry: Hardness +1",
        "Motorized Artillery: Hardness +1",
        "Motorized Anti-Tank: Hardness +1",
        "Motorized Anti-Air: Hardness +1"
      ]
    },
    {
      "id": "mechanised_infantry2",
      "name": "Mechanized Equipment II",
      "f": [["infantry_folder",970,590]],
      "year": 1942,
      "cost": 2.0,
      "ic": "road",
      "leads": ["mechanised_infantry3"],
      "cat": ["motorized_equipment","mio_cat_tech_all_motorized_mechanized","infantry_tech","cat_mechanized_equipment"],
      "fx": ["Unlocks equipment: Mechanized Equipment II","Motorized Heavy Weapons Company: Breakthrough +10%, Soft attack +5%"]
    },
    {
      "id": "mechanised_infantry3",
      "name": "Mechanized Equipment III",
      "f": [["infantry_folder",1250,590]],
      "year": 1944,
      "cost": 3.0,
      "ic": "road",
      "cat": ["motorized_equipment","mio_cat_tech_all_motorized_mechanized","infantry_tech","cat_mechanized_equipment"],
      "fx": [
        "Unlocks equipment: Mechanized Equipment III",
        "Mechanized Infantry: Soft attack +15%, Hard attack +15%",
        "Motorized Heavy Weapons Company: Breakthrough +10%, Soft attack +5%"
      ]
    },
    {
      "id": "amphibious_mechanized_infantry",
      "name": "Amphibious Tractors",
      "f": [["infantry_folder",830,730]],
      "year": 1941,
      "cost": 2.0,
      "ic": "ship",
      "leads": ["amphibious_mechanized_infantry_2"],
      "cat": ["motorized_equipment","mio_cat_tech_all_motorized_mechanized","infantry_tech","cat_mechanized_equipment","tp_tech"],
      "fx": ["Unlocks equipment: Basic Amphibious Tractor","Unlocks battalion: Amtrac Battalion"]
    },
    {
      "id": "amphibious_mechanized_infantry_2",
      "name": "Improved Amphibious Tractors",
      "f": [["infantry_folder",1110,730]],
      "year": 1943,
      "cost": 2.0,
      "ic": "ship",
      "cat": ["motorized_equipment","mio_cat_tech_all_motorized_mechanized","infantry_tech","cat_mechanized_equipment","tp_tech"],
      "fx": ["Unlocks equipment: Improved Amphibious Tractor"]
    },
    {
      "id": "armored_car1",
      "name": "Inter-War Armored Car",
      "f": [["infantry_folder",200,870]],
      "year": 1914,
      "cost": 2.0,
      "ic": "tank",
      "leads": ["armored_car2"],
      "cat": ["motorized_equipment","armor","cat_armored_cars"],
      "fx": ["Unlocks equipment: Inter-War Armored Car","Unlocks battalion: Armored Car"]
    },
    {
      "id": "armored_car2",
      "name": "Basic Armored Car",
      "f": [["infantry_folder",690,870]],
      "year": 1940,
      "cost": 2.0,
      "ic": "tank",
      "leads": ["armored_car3"],
      "cat": ["motorized_equipment","armor","cat_armored_cars"],
      "fx": ["Unlocks equipment: Basic Armored Car"]
    },
    {
      "id": "armored_car3",
      "name": "Improved Armored Car",
      "f": [["infantry_folder",970,870]],
      "year": 1942,
      "cost": 2.0,
      "ic": "tank",
      "cat": ["motorized_equipment","armor","cat_armored_cars"],
      "fx": ["Unlocks equipment: Improved Armored Car"]
    },
    {
      "id": "marines",
      "name": "Marines I",
      "f": [["infantry_folder",270,1005]],
      "year": 1936,
      "cost": 2.0,
      "ic": "ship",
      "leads": ["marines2"],
      "cat": ["marine_tech","cat_special_forces_generic"],
      "fx": ["Unlocks battalion: Marines"]
    },
    {
      "id": "marines2",
      "name": "Marines II",
      "f": [["infantry_folder",550,1005]],
      "year": 1939,
      "cost": 1.5,
      "ic": "ship",
      "leads": ["marines3"],
      "cat": ["marine_tech","cat_special_forces_generic"],
      "fx": ["Marines: Max organisation +500%, Soft attack +5%"]
    },
    {
      "id": "marines3",
      "name": "Marines III",
      "f": [["infantry_folder",1110,1005]],
      "year": 1943,
      "cost": 2.0,
      "ic": "ship",
      "cat": ["marine_tech","cat_special_forces_generic"],
      "fx": ["Marines: Max organisation +500%"]
    },
    {
      "id": "tech_mountaineers",
      "name": "Mountain Infantry I",
      "f": [["infantry_folder",270,1105]],
      "year": 1936,
      "cost": 2.0,
      "ic": "helmet",
      "leads": ["tech_mountaineers2"],
      "cat": ["infantry_tech","mountaineers_tech","cat_special_forces_generic"],
      "fx": ["Unlocks battalion: Mountaineers"]
    },
    {
      "id": "tech_mountaineers2",
      "name": "Mountain Infantry II",
      "f": [["infantry_folder",550,1105]],
      "year": 1939,
      "cost": 1.5,
      "ic": "helmet",
      "leads": ["tech_mountaineers3"],
      "cat": ["infantry_tech","mountaineers_tech","cat_special_forces_generic"],
      "fx": ["Mountaineers: Max organisation +500%, Soft attack +5%"]
    },
    {
      "id": "tech_mountaineers3",
      "name": "Mountain Infantry III",
      "f": [["infantry_folder",1110,1105]],
      "year": 1943,
      "cost": 2.0,
      "ic": "helmet",
      "cat": ["infantry_tech","mountaineers_tech","cat_special_forces_generic"],
      "fx": ["Mountaineers: Max organisation +500%"]
    },
    {
      "id": "paratroopers",
      "name": "Paratroopers I",
      "f": [["infantry_folder",270,1205]],
      "year": 1936,
      "cost": 2.0,
      "ic": "helmet",
      "leads": ["paratroopers2"],
      "cat": ["para_tech","cat_special_forces_generic"],
      "fx": ["Unlocks battalion: Paratroopers, Paratrooper HQ Security"]
    },
    {
      "id": "paratroopers2",
      "name": "Paratroopers II",
      "f": [["infantry_folder",550,1205]],
      "year": 1939,
      "cost": 1.5,
      "ic": "helmet",
      "leads": ["paratroopers3"],
      "cat": ["para_tech","cat_special_forces_generic"],
      "fx": ["Paratroopers: Max organisation +500%, Soft attack +5%"]
    },
    {
      "id": "paratroopers3",
      "name": "Paratroopers III",
      "f": [["infantry_folder",1110,1205]],
      "year": 1943,
      "cost": 2.0,
      "ic": "helmet",
      "cat": ["para_tech","cat_special_forces_generic"],
      "fx": ["Paratroopers: Max organisation +500%"]
    },
    {
      "id": "rangers_tech",
      "name": "Rangers I",
      "f": [["infantry_folder",270,1305]],
      "year": 1936,
      "cost": 2.0,
      "ic": "helmet",
      "leads": ["rangers_tech2"],
      "cat": ["infantry_tech","rangers_tech_cat","cat_special_forces_generic"],
      "fx": ["Unlocks battalion: Rangers"]
    },
    {
      "id": "rangers_tech2",
      "name": "Rangers II",
      "f": [["infantry_folder",550,1305]],
      "year": 1939,
      "cost": 1.5,
      "ic": "helmet",
      "leads": ["rangers_tech3"],
      "cat": ["infantry_tech","rangers_tech_cat","cat_special_forces_generic"],
      "fx": ["Rangers: Max organisation +500%, Soft attack +5%"]
    },
    {
      "id": "rangers_tech3",
      "name": "Rangers III",
      "f": [["infantry_folder",1110,1305]],
      "year": 1943,
      "cost": 1.5,
      "ic": "helmet",
      "cat": ["infantry_tech","rangers_tech_cat","cat_special_forces_generic"],
      "fx": ["Rangers: Max organisation +500%"]
    },
    {
      "id": "advanced_special_forces",
      "name": "Advanced Special Forces Training",
      "f": [["infantry_folder",690,1460]],
      "year": 1940,
      "cost": 2.0,
      "ic": "ship",
      "leads": ["extreme_environment_training"],
      "xor": ["improved_special_forces"],
      "cat": ["mountaineers_tech","marine_tech","para_tech","cat_special_forces_generic"],
      "fx": ["Special Forces: Max organisation +500%, Defense +5%","Special Forces Division training time +10%"]
    },
    {
      "id": "extreme_environment_training",
      "name": "Extreme Environment Training",
      "f": [["infantry_folder",970,1460]],
      "year": 1942,
      "cost": 2.0,
      "ic": "ship",
      "leads": ["elite_forces"],
      "cat": ["mountaineers_tech","marine_tech","para_tech","cat_special_forces_generic"],
      "fx": [
        "Special Forces: Hot acclimatization gain factor +20%, Cold acclimatization gain factor +20%",
        "Special Forces Supply Grace +24",
        "Special Forces Division training time +10%"
      ]
    },
    {
      "id": "elite_forces",
      "name": "Elite Forces",
      "f": [["infantry_folder",1250,1530]],
      "year": 1944,
      "cost": 2.0,
      "ic": "ship",
      "cat": ["mountaineers_tech","marine_tech","para_tech","cat_special_forces_generic"],
      "fx": ["Special Forces: Max organisation +500%, Soft attack +5%","Special Forces Supply Grace +24"]
    },
    {
      "id": "improved_special_forces",
      "name": "Expanded Special Forces Program",
      "f": [["infantry_folder",690,1600]],
      "year": 1940,
      "cost": 2.0,
      "ic": "ship",
      "leads": ["survival_training"],
      "xor": ["advanced_special_forces"],
      "cat": ["mountaineers_tech","marine_tech","para_tech","cat_special_forces_generic"],
      "fx": ["Special Forces Capacity Multiplier +0.1","Special Forces Division training time -10%"]
    },
    {
      "id": "survival_training",
      "name": "Survival Training",
      "f": [["infantry_folder",970,1600]],
      "year": 1942,
      "cost": 2.0,
      "ic": "ship",
      "leads": ["elite_forces"],
      "cat": ["mountaineers_tech","marine_tech","para_tech","cat_special_forces_generic"],
      "fx": ["Special Forces: Hot acclimatization gain factor +10%, Cold acclimatization gain factor +10%","Special Forces Non-Combat Out of Supply -10%"]
    },
    {
      "id": "early_ship_hull_light",
      "name": "Early Destroyer",
      "f": [["mtgnavalfolder",200,60]],
      "year": 1922,
      "cost": 1.5,
      "ic": "ship",
      "leads": ["basic_ship_hull_light","smoke_generator","basic_depth_charges","sonar"],
      "cat": ["naval_equipment","dd_tech","mio_cat_tech_all_screen_ship_and_modules","mio_cat_tech_all_destroyer_and_modules"],
      "fx": ["Unlocks equipment: Early Destroyer","Unlocks modules: 35,000 Shp Engine, Seaplane Tender"]
    },
    {
      "id": "basic_ship_hull_light",
      "name": "Basic Destroyer",
      "f": [["mtgnavalfolder",620,60]],
      "year": 1936,
      "cost": 1.5,
      "ic": "ship",
      "leads": ["improved_ship_hull_light"],
      "cat": ["naval_equipment","dd_tech","mio_cat_tech_all_screen_ship_and_modules","mio_cat_tech_all_destroyer_and_modules"],
      "fx": ["Unlocks equipment: Basic Destroyer","Unlocks modules: 40,000 Shp Engine, Improved Seaplane Tender"]
    },
    {
      "id": "improved_ship_hull_light",
      "name": "Improved Destroyer",
      "f": [["mtgnavalfolder",1040,60]],
      "year": 1939,
      "cost": 1.5,
      "ic": "ship",
      "leads": ["advanced_ship_hull_light"],
      "cat": ["naval_equipment","dd_tech","mio_cat_tech_all_screen_ship_and_modules","mio_cat_tech_all_destroyer_and_modules"],
      "fx": ["Unlocks equipment: Improved Destroyer","Unlocks modules: 45,000 Shp Engine"]
    },
    {
      "id": "advanced_ship_hull_light",
      "name": "Advanced Destroyer",
      "f": [["mtgnavalfolder",1460,60]],
      "year": 1943,
      "cost": 2.0,
      "ic": "ship",
      "cat": ["naval_equipment","dd_tech","mio_cat_tech_all_screen_ship_and_modules","mio_cat_tech_all_destroyer_and_modules"],
      "fx": ["Unlocks equipment: Advanced Destroyer","Unlocks modules: 50,000 Shp Engine"]
    },
    {
      "id": "smoke_generator",
      "name": "Smoke Generators",
      "f": [["mtgnavalfolder",200,130]],
      "year": 1922,
      "cost": 0.75,
      "ic": "ship",
      "cat": ["naval_equipment","dd_tech","ship_modules_tech","mio_cat_tech_all_screen_ship_and_modules","mio_cat_tech_all_destroyer_and_modules"],
      "fx": ["Fleet speed while retreating +20%"]
    },
    {
      "id": "basic_depth_charges",
      "name": "Basic Depth Charges",
      "f": [["mtgnavalfolder",340,130]],
      "year": 1922,
      "cost": 1.5,
      "ic": "ship",
      "leads": ["improved_depth_charges"],
      "cat": ["naval_equipment","dd_tech","asw_tech","ship_modules_tech","mio_cat_tech_all_screen_ship_and_modules","mio_cat_tech_all_destroyer_and_modules"],
      "fx": ["Unlocks modules: Depth Charge Rails","Xp boost cost +50","Xp research bonus +1.5"]
    },
    {
      "id": "improved_depth_charges",
      "name": "Depth Charge Thrower",
      "f": [["mtgnavalfolder",620,130]],
      "year": 1936,
      "cost": 1.5,
      "ic": "ship",
      "leads": ["advanced_depth_charges"],
      "cat": ["naval_equipment","dd_tech","asw_tech","ship_modules_tech","mio_cat_tech_all_screen_ship_and_modules","mio_cat_tech_all_destroyer_and_modules"],
      "fx": ["Unlocks modules: Depth Charge Thrower","Xp boost cost +50","Xp research bonus +1.5"]
    },
    {
      "id": "advanced_depth_charges",
      "name": "Depth Charge Mortar",
      "f": [["mtgnavalfolder",1040,130]],
      "year": 1939,
      "cost": 1.5,
      "ic": "ship",
      "leads": ["modern_depth_charges"],
      "cat": ["naval_equipment","dd_tech","asw_tech","ship_modules_tech","mio_cat_tech_all_screen_ship_and_modules","mio_cat_tech_all_destroyer_and_modules"],
      "fx": ["Unlocks modules: Anti-submarine Mortar","Xp boost cost +50","Xp research bonus +1.5"]
    },
    {
      "id": "modern_depth_charges",
      "name": "Improved Depth Charge Mortar",
      "f": [["mtgnavalfolder",1460,130]],
      "year": 1943,
      "cost": 1.5,
      "ic": "ship",
      "cat": ["naval_equipment","dd_tech","asw_tech","ship_modules_tech","mio_cat_tech_all_screen_ship_and_modules","mio_cat_tech_all_destroyer_and_modules"],
      "fx": ["Unlocks modules: Advanced Anti-submarine Mortar","Xp boost cost +50","Xp research bonus +1.5"]
    },
    {
      "id": "sonar",
      "name": "Passive Sonar",
      "f": [["mtgnavalfolder",130,200]],
      "year": 1922,
      "cost": 1.5,
      "ic": "ship",
      "leads": ["improved_sonar"],
      "cat": ["naval_equipment","dd_tech","asw_tech","ship_modules_tech","mio_cat_tech_all_screen_ship_and_modules","mio_cat_tech_all_destroyer_and_modules"],
      "fx": ["Unlocks modules: Hydrophones"]
    },
    {
      "id": "improved_sonar",
      "name": "Active Sonar",
      "f": [["mtgnavalfolder",550,200]],
      "year": 1936,
      "cost": 1.0,
      "ic": "ship",
      "leads": ["advanced_sonar"],
      "cat": ["naval_equipment","dd_tech","asw_tech","ship_modules_tech","mio_cat_tech_all_screen_ship_and_modules","mio_cat_tech_all_destroyer_and_modules"],
      "fx": ["Unlocks modules: Active Sonar"]
    },
    {
      "id": "advanced_sonar",
      "name": "Advanced Sonar",
      "f": [["mtgnavalfolder",970,200]],
      "year": 1939,
      "cost": 1.0,
      "ic": "ship",
      "leads": ["modern_sonar"],
      "cat": ["naval_equipment","dd_tech","asw_tech","ship_modules_tech","mio_cat_tech_all_screen_ship_and_modules","mio_cat_tech_all_destroyer_and_modules"],
      "fx": ["Unlocks modules: Advanced Sonar"]
    },
    {
      "id": "modern_sonar",
      "name": "Modern Sonar",
      "f": [["mtgnavalfolder",1390,200]],
      "year": 1943,
      "cost": 1.0,
      "ic": "ship",
      "cat": ["naval_equipment","dd_tech","asw_tech","ship_modules_tech","mio_cat_tech_all_screen_ship_and_modules","mio_cat_tech_all_destroyer_and_modules"],
      "fx": ["Unlocks modules: Modern Sonar"]
    },
    {
      "id": "early_ship_hull_cruiser",
      "name": "Early Cruiser",
      "f": [["mtgnavalfolder",200,310]],
      "year": 1922,
      "cost": 1.5,
      "ic": "ship",
      "leads": ["basic_ship_hull_cruiser"],
      "cat": [
        "naval_equipment",
        "ca_tech",
        "mio_cat_tech_all_capital_ship_and_modules",
        "mio_cat_tech_all_screen_ship_and_modules",
        "mio_cat_tech_all_cruiser_and_modules"
      ],
      "fx": ["Unlocks equipment: Early Cruiser","Unlocks modules: Floatplane Catapult, 60,000 Shp Engine, 50mm Belt/40mm Deck"]
    },
    {
      "id": "basic_ship_hull_cruiser",
      "name": "1936 Cruiser Hull",
      "f": [["mtgnavalfolder",620,310]],
      "year": 1936,
      "cost": 1.5,
      "ic": "ship",
      "leads": ["improved_ship_hull_cruiser"],
      "cat": [
        "naval_equipment",
        "ca_tech",
        "mio_cat_tech_all_capital_ship_and_modules",
        "mio_cat_tech_all_screen_ship_and_modules",
        "mio_cat_tech_all_cruiser_and_modules"
      ],
      "fx": ["Unlocks equipment: Basic Cruiser","Unlocks modules: 70,000 Shp Engine, Improved Floatplane Catapult"]
    },
    {
      "id": "improved_ship_hull_cruiser",
      "name": "Improved Cruiser",
      "f": [["mtgnavalfolder",1040,310]],
      "year": 1939,
      "cost": 1.5,
      "ic": "ship",
      "leads": ["advanced_ship_hull_cruiser"],
      "cat": [
        "naval_equipment",
        "ca_tech",
        "mio_cat_tech_all_capital_ship_and_modules",
        "mio_cat_tech_all_screen_ship_and_modules",
        "mio_cat_tech_all_cruiser_and_modules"
      ],
      "fx": ["Unlocks equipment: Improved Cruiser","Unlocks modules: 80,000 Shp Engine"]
    },
    {
      "id": "advanced_ship_hull_cruiser",
      "name": "Advanced Cruiser",
      "f": [["mtgnavalfolder",1460,310]],
      "year": 1943,
      "cost": 1.5,
      "ic": "ship",
      "cat": [
        "naval_equipment",
        "ca_tech",
        "mio_cat_tech_all_capital_ship_and_modules",
        "mio_cat_tech_all_screen_ship_and_modules",
        "mio_cat_tech_all_cruiser_and_modules"
      ],
      "fx": ["Unlocks equipment: Advanced Cruiser","Unlocks modules: 90,000 Shp Engine"]
    },
    {
      "id": "basic_cruiser_armor_scheme",
      "name": "Basic Cruiser Armor Scheme",
      "f": [["mtgnavalfolder",200,395]],
      "year": 1922,
      "cost": 0.5,
      "ic": "ship",
      "leads": ["basic_heavy_armor_scheme"],
      "cat": [
        "naval_armor",
        "naval_equipment",
        "ca_tech",
        "ship_modules_tech",
        "mio_cat_tech_all_capital_ship_and_modules",
        "mio_cat_tech_all_cruiser_and_modules",
        "mio_cat_tech_all_carrier_and_modules"
      ],
      "fx": ["Unlocks modules: 100mm Belt/30mm Deck","Xp boost cost +50","Xp research bonus +1.5"]
    },
    {
      "id": "basic_heavy_armor_scheme",
      "name": "Inclined Belt Armor Scheme",
      "f": [["mtgnavalfolder",410,395]],
      "year": 1936,
      "cost": 1.25,
      "ic": "ship",
      "leads": ["improved_heavy_armor_scheme"],
      "cat": ["naval_armor","naval_equipment","bb_tech","bc_tech","ship_modules_tech","mio_cat_tech_all_capital_ship_and_modules"],
      "fx": ["Unlocks modules: 350mm Belt/150mm Deck, 305mm Belt/100mm Deck, 120mm Belt/50mm Deck","Xp boost cost +50","Xp research bonus +1.5"]
    },
    {
      "id": "improved_heavy_armor_scheme",
      "name": "All-or-Nothing Armor Scheme",
      "f": [["mtgnavalfolder",620,395]],
      "year": 0,
      "cost": 1.25,
      "ic": "ship",
      "cat": ["naval_armor","naval_equipment","bb_tech","bc_tech","ship_modules_tech","mio_cat_tech_all_capital_ship_and_modules"],
      "fx": ["Unlocks modules: 380mm Belt/155mm Deck, 330mm Belt/130mm Deck, 150mm Belt/60mm Deck","Xp boost cost +50","Xp research bonus +1.25"]
    },
    {
      "id": "early_ship_hull_heavy",
      "name": "Early Heavy Ship",
      "f": [["mtgnavalfolder",200,550]],
      "year": 1922,
      "cost": 1.75,
      "ic": "ship",
      "leads": ["basic_ship_hull_heavy"],
      "cat": ["naval_equipment","bb_tech","bc_tech","mio_cat_tech_all_capital_ship_and_modules"],
      "fx": ["Unlocks equipment: Early Heavy Ship","Unlocks modules: 200mm Belt/40mm Deck, 30,000 Shp Engine, 150mm Belt/25mm Deck"]
    },
    {
      "id": "basic_ship_hull_heavy",
      "name": "1936 Heavy Ship Hull",
      "f": [["mtgnavalfolder",620,550]],
      "year": 1936,
      "cost": 1.5,
      "ic": "ship",
      "leads": ["improved_ship_hull_heavy","basic_heavy_armor_scheme"],
      "cat": ["naval_equipment","bb_tech","bc_tech","mio_cat_tech_all_capital_ship_and_modules"],
      "fx": ["Unlocks equipment: Basic Heavy Ship","Unlocks modules: 90,000 Shp Engine"]
    },
    {
      "id": "improved_ship_hull_heavy",
      "name": "Improved Heavy Ship",
      "f": [["mtgnavalfolder",1040,550]],
      "year": 1939,
      "cost": 1.5,
      "ic": "ship",
      "leads": ["advanced_ship_hull_heavy"],
      "cat": ["naval_equipment","bb_tech","bc_tech","mio_cat_tech_all_capital_ship_and_modules"],
      "fx": ["Unlocks equipment: Improved Heavy Ship","Unlocks modules: 150,000 Shp Engine"]
    },
    {
      "id": "advanced_ship_hull_heavy",
      "name": "Advanced Heavy Ship",
      "f": [["mtgnavalfolder",1460,550]],
      "year": 1943,
      "cost": 1.5,
      "ic": "ship",
      "cat": ["naval_equipment","bb_tech","bc_tech","mio_cat_tech_all_capital_ship_and_modules"],
      "fx": ["Unlocks equipment: Advanced Heavy Ship","Unlocks modules: 210,000 Shp Engine"]
    },
    {
      "id": "early_ship_hull_carrier",
      "name": "Deck Conversions",
      "f": [["mtgnavalfolder",200,660]],
      "year": 1922,
      "cost": 1.75,
      "ic": "ship",
      "leads": ["basic_ship_hull_carrier"],
      "cat": ["naval_equipment","cv_tech","mio_cat_tech_all_carrier_and_modules"],
      "fx": ["Unlocks equipment: Converted Battleship, Converted Cruiser","Unlocks modules: 90mm Deck, 50,000 Shp Engine, Hangar Space"]
    },
    {
      "id": "basic_ship_hull_carrier",
      "name": "1936 Carrier Hull",
      "f": [["mtgnavalfolder",620,660]],
      "year": 1936,
      "cost": 1.5,
      "ic": "ship",
      "leads": ["improved_ship_hull_carrier"],
      "cat": ["naval_equipment","cv_tech","mio_cat_tech_all_carrier_and_modules"],
      "fx": ["Unlocks equipment: Basic Carrier","Unlocks modules: 120,000 Shp Engine"]
    },
    {
      "id": "improved_ship_hull_carrier",
      "name": "Improved Carrier",
      "f": [["mtgnavalfolder",1040,660]],
      "year": 1939,
      "cost": 1.5,
      "ic": "ship",
      "leads": ["advanced_ship_hull_carrier","sp_refined_pykrete"],
      "cat": ["naval_equipment","cv_tech","mio_cat_tech_all_carrier_and_modules"],
      "fx": ["Unlocks equipment: Improved Carrier","Unlocks modules: 150,000 Shp Engine"]
    },
    {
      "id": "advanced_ship_hull_carrier",
      "name": "Advanced Carrier",
      "f": [["mtgnavalfolder",1460,660]],
      "year": 1943,
      "cost": 1.5,
      "ic": "ship",
      "cat": ["naval_equipment","cv_tech","mio_cat_tech_all_carrier_and_modules"],
      "fx": ["Unlocks equipment: Advanced Carrier","Unlocks modules: 210,000 Shp Engine"]
    },
    {
      "id": "sp_refined_pykrete",
      "name": "Refined Pykrete",
      "f": [["mtgnavalfolder",1250,730]],
      "year": 1942,
      "cost": 1.0,
      "ic": "ship",
      "leads": ["sp_ice_composite_runawayas"],
      "cat": ["naval_equipment","cv_tech","mio_cat_tech_all_carrier_and_modules","pykrete_tech"],
      "fx": ["Unlocks modules: Steel-Reinforced Pykrete Runway"]
    },
    {
      "id": "sp_ice_composite_runawayas",
      "name": "Ice Composite Runways",
      "f": [["mtgnavalfolder",1670,730]],
      "year": 1944,
      "cost": 1.0,
      "ic": "ship",
      "cat": ["naval_equipment","cv_tech","mio_cat_tech_all_carrier_and_modules","pykrete_tech"],
      "fx": ["Unlocks modules: Ice-Composite Runway"]
    },
    {
      "id": "early_ship_hull_submarine",
      "name": "Early Submarine",
      "f": [["mtgnavalfolder",200,835]],
      "year": 1922,
      "cost": 1.5,
      "ic": "sub",
      "leads": ["basic_ship_hull_submarine"],
      "cat": ["naval_equipment","ss_tech","mio_cat_tech_all_submarine_and_modules"],
      "fx": ["Unlocks equipment: Early Submarine","Unlocks modules: 1,000 Shp Engine"]
    },
    {
      "id": "basic_ship_hull_submarine",
      "name": "Basic Submarine",
      "f": [["mtgnavalfolder",620,835]],
      "year": 1936,
      "cost": 1.5,
      "ic": "sub",
      "leads": ["improved_ship_hull_submarine","sp_aip_engine_improved_tech"],
      "cat": ["naval_equipment","ss_tech","mio_cat_tech_all_submarine_and_modules"],
      "fx": ["Unlocks equipment: Basic Submarine","Unlocks modules: 2,000 Shp Engine"]
    },
    {
      "id": "improved_ship_hull_submarine",
      "name": "Improved Submarine",
      "f": [["mtgnavalfolder",1040,835]],
      "year": 1939,
      "cost": 2.0,
      "ic": "sub",
      "leads": ["advanced_ship_hull_submarine","basic_submarine_snorkel"],
      "cat": ["naval_equipment","ss_tech","mio_cat_tech_all_submarine_and_modules"],
      "fx": ["Unlocks equipment: Improved Submarine","Unlocks modules: 3,000 Shp Engine"]
    },
    {
      "id": "advanced_ship_hull_submarine",
      "name": "Advanced Submarine",
      "f": [["mtgnavalfolder",1460,835]],
      "year": 1943,
      "cost": 2.0,
      "ic": "sub",
      "cat": ["naval_equipment","ss_tech","mio_cat_tech_all_submarine_and_modules"],
      "fx": ["Unlocks equipment: Advanced Submarine","Unlocks modules: 4,000 Shp Engine"]
    },
    {
      "id": "basic_submarine_snorkel",
      "name": "Basic Submarine Snorkel",
      "f": [["mtgnavalfolder",970,905]],
      "year": 1939,
      "cost": 1.0,
      "ic": "sub",
      "leads": ["improved_submarine_snorkel"],
      "cat": ["naval_equipment","ss_tech","ship_modules_tech","mio_cat_tech_all_submarine_and_modules"],
      "fx": ["Unlocks modules: Basic Schnorkel"]
    },
    {
      "id": "improved_submarine_snorkel",
      "name": "Improved Submarine Snorkel",
      "f": [["mtgnavalfolder",1390,905]],
      "year": 1943,
      "cost": 2.0,
      "ic": "sub",
      "cat": ["naval_equipment","ss_tech","ship_modules_tech","mio_cat_tech_all_submarine_and_modules"],
      "fx": ["Unlocks modules: Improved Schnorkel","Xp boost cost +50","Xp research bonus +1.5"]
    },
    {
      "id": "sp_aip_engine_improved_tech",
      "name": "AIP-Diesel Combination Engines",
      "f": [["mtgnavalfolder",970,1045]],
      "year": 1939,
      "cost": 2.0,
      "ic": "sub",
      "leads": ["sp_aip_engine_advanced_tech"],
      "cat": ["naval_equipment","ss_tech","ship_modules_tech","mio_cat_tech_all_submarine_and_modules"],
      "fx": ["Unlocks modules: AIP-Diesel Combination Engine"]
    },
    {
      "id": "sp_aip_engine_advanced_tech",
      "name": "High-Speed Walter Engines",
      "f": [["mtgnavalfolder",1390,1045]],
      "year": 1943,
      "cost": 2.0,
      "ic": "sub",
      "cat": ["naval_equipment","ss_tech","ship_modules_tech","mio_cat_tech_all_submarine_and_modules"],
      "fx": ["Unlocks modules: High Speed Walter Engines"]
    },
    {
      "id": "basic_light_battery",
      "name": "Basic Light Battery",
      "f": [["mtgnavalsupportfolder",490,45]],
      "year": 1936,
      "cost": 1.0,
      "ic": "ship",
      "leads": ["basic_light_shell"],
      "cat": [
        "naval_artillery",
        "naval_equipment",
        "ship_modules_tech",
        "cat_ship_light_battery",
        "mio_cat_tech_all_screen_ship_and_modules",
        "mio_cat_tech_all_cruiser_and_modules",
        "mio_cat_tech_all_destroyer_and_modules"
      ],
      "fx": ["Unlocks modules: 105 mm RF. Cannon, 15 cm Cannon, 120mm RF. Cannon"]
    },
    {
      "id": "basic_light_shell",
      "name": "Small-Caliber Semi-Armor Piercing Shell",
      "f": [["mtgnavalsupportfolder",630,45]],
      "year": 1936,
      "cost": 0.5,
      "ic": "ship",
      "leads": ["improved_light_battery"],
      "cat": [
        "naval_artillery",
        "naval_equipment",
        "ship_modules_tech",
        "mio_cat_tech_all_screen_ship_and_modules",
        "mio_cat_tech_all_cruiser_and_modules",
        "mio_cat_tech_all_destroyer_and_modules"
      ],
      "fx": [
        "Destroyer: Lg attack +5%, Lg armor piercing +0.05",
        "Light Cruiser: Lg attack +5%, Lg armor piercing +0.05",
        "Heavy Cruiser: Lg attack +5%, Lg armor piercing +0.05",
        "Battleship: Lg attack +5%, Lg armor piercing +0.05",
        "Battlecruiser: Lg attack +5%, Lg armor piercing +0.05",
        "Carrier: Lg attack +5%, Lg armor piercing +0.05"
      ]
    },
    {
      "id": "improved_light_battery",
      "name": "Improved Light Battery",
      "f": [["mtgnavalsupportfolder",910,45]],
      "year": 1939,
      "cost": 1.0,
      "ic": "ship",
      "leads": ["improved_light_shell","basic_dp_light_battery"],
      "cat": [
        "naval_artillery",
        "naval_equipment",
        "ship_modules_tech",
        "cat_ship_light_battery",
        "mio_cat_tech_all_screen_ship_and_modules",
        "mio_cat_tech_all_cruiser_and_modules",
        "mio_cat_tech_all_destroyer_and_modules"
      ],
      "fx": ["Unlocks modules: 127 mm RF. Cannon, 15.5 cm Cannon"]
    },
    {
      "id": "improved_light_shell",
      "name": "Small-Caliber Armor Piercing Shell",
      "f": [["mtgnavalsupportfolder",1260,45]],
      "year": 1942,
      "cost": 0.5,
      "ic": "ship",
      "leads": ["advanced_light_battery"],
      "cat": [
        "naval_artillery",
        "naval_equipment",
        "ship_modules_tech",
        "mio_cat_tech_all_screen_ship_and_modules",
        "mio_cat_tech_all_cruiser_and_modules",
        "mio_cat_tech_all_destroyer_and_modules"
      ],
      "fx": [
        "Destroyer: Lg attack +5%, Lg armor piercing +0.05",
        "Light Cruiser: Lg attack +5%, Lg armor piercing +0.05",
        "Heavy Cruiser: Lg attack +5%, Lg armor piercing +0.05",
        "Battleship: Lg attack +5%, Lg armor piercing +0.05",
        "Battlecruiser: Lg attack +5%, Lg armor piercing +0.05",
        "Carrier: Lg attack +5%, Lg armor piercing +0.05"
      ]
    },
    {
      "id": "advanced_light_battery",
      "name": "Advanced Light Battery",
      "f": [["mtgnavalsupportfolder",1470,45]],
      "year": 1944,
      "cost": 1.0,
      "ic": "ship",
      "cat": [
        "naval_artillery",
        "naval_equipment",
        "ship_modules_tech",
        "cat_ship_light_battery",
        "mio_cat_tech_all_screen_ship_and_modules",
        "mio_cat_tech_all_cruiser_and_modules",
        "mio_cat_tech_all_destroyer_and_modules"
      ],
      "fx": ["Unlocks modules: 130 mm RF. Cannon, 15.5 cm Auto-Loading Cannon"]
    },
    {
      "id": "basic_battery",
      "name": "Naval Gunnery",
      "f": [["mtgnavalsupportfolder",210,150]],
      "year": 1922,
      "cost": 1.0,
      "ic": "ship",
      "leads": ["basic_light_battery","basic_heavy_battery"],
      "cat": [
        "naval_artillery",
        "naval_equipment",
        "ship_modules_tech",
        "cat_ship_light_battery",
        "cat_ship_medium_battery",
        "cat_ship_heavy_battery",
        "mio_cat_tech_all_capital_ship_and_modules",
        "mio_cat_tech_all_screen_ship_and_modules",
        "mio_cat_tech_all_carrier_and_modules",
        "mio_cat_tech_all_cruiser_and_modules",
        "mio_cat_tech_all_destroyer_and_modules"
      ],
      "fx": ["Unlocks modules: 85 mm RF. Cannon, 17 cm Cannon, 14.5 cm Cannon, 28 cm Cannon, 75mm RF. Cannon"]
    },
    {
      "id": "basic_dp_light_battery",
      "name": "Basic Dual-Purpose Battery",
      "f": [["mtgnavalsupportfolder",910,150]],
      "year": 1939,
      "cost": 1.0,
      "ic": "ship",
      "leads": ["improved_dp_light_battery"],
      "cat": [
        "naval_artillery",
        "naval_equipment",
        "ship_modules_tech",
        "mio_cat_tech_all_capital_ship_and_modules",
        "mio_cat_tech_all_screen_ship_and_modules",
        "mio_cat_tech_all_carrier_and_modules",
        "mio_cat_tech_all_cruiser_and_modules",
        "mio_cat_tech_all_destroyer_and_modules"
      ],
      "fx": [
        "Unlocks modules: 113mm Dual-Purpose Battery, 113mm Dual-Purpose Secondary Battery, 100mm Dual-Purpose Battery, 100mm Dual-Purpose Secondary Battery"
      ]
    },
    {
      "id": "improved_dp_light_battery",
      "name": "Improved Dual-Purpose Battery",
      "f": [["mtgnavalsupportfolder",1050,150]],
      "year": 1940,
      "cost": 1.0,
      "ic": "ship",
      "leads": ["advanced_dp_light_battery"],
      "cat": [
        "naval_artillery",
        "naval_equipment",
        "ship_modules_tech",
        "mio_cat_tech_all_capital_ship_and_modules",
        "mio_cat_tech_all_screen_ship_and_modules",
        "mio_cat_tech_all_carrier_and_modules",
        "mio_cat_tech_all_cruiser_and_modules",
        "mio_cat_tech_all_destroyer_and_modules"
      ],
      "fx": ["Unlocks modules: 127mm Dual-Purpose Battery, 127mm Dual-Purpose Secondary Battery"]
    },
    {
      "id": "advanced_dp_light_battery",
      "name": "Advanced Dual-Purpose Battery",
      "f": [["mtgnavalsupportfolder",1470,150]],
      "year": 1944,
      "cost": 1.0,
      "ic": "ship",
      "cat": [
        "naval_artillery",
        "naval_equipment",
        "ship_modules_tech",
        "mio_cat_tech_all_capital_ship_and_modules",
        "mio_cat_tech_all_screen_ship_and_modules",
        "mio_cat_tech_all_carrier_and_modules",
        "mio_cat_tech_all_cruiser_and_modules",
        "mio_cat_tech_all_destroyer_and_modules"
      ],
      "fx": ["Unlocks modules: 127mm RF. Dual-Purpose Battery, 127mm RF. Dual-Purpose Secondary Battery, 152mm RF. Dual-Purpose Battery"]
    },
    {
      "id": "basic_heavy_battery",
      "name": "Basic Heavy Battery",
      "f": [["mtgnavalsupportfolder",490,255]],
      "year": 1936,
      "cost": 1.0,
      "ic": "ship",
      "leads": ["basic_heavy_shell"],
      "cat": ["naval_artillery","naval_equipment","ship_modules_tech","cat_ship_heavy_battery","mio_cat_tech_all_capital_ship_and_modules"],
      "fx": ["Unlocks modules: 30.5 cm Cannon, 46 cm Cannon, 19 cm Cannon"]
    },
    {
      "id": "basic_heavy_shell",
      "name": "Armor-Piercing Capped Shell",
      "f": [["mtgnavalsupportfolder",630,255]],
      "year": 1936,
      "cost": 0.5,
      "ic": "ship",
      "leads": ["improved_heavy_battery"],
      "cat": ["naval_artillery","naval_equipment","mio_cat_tech_all_capital_ship_and_modules"],
      "fx": [
        "Battleship: Hg attack +5%, Hg armor piercing +0.05",
        "Battlecruiser: Hg attack +5%, Hg armor piercing +0.05",
        "Heavy Cruiser: Hg attack +5%, Hg armor piercing +0.05"
      ]
    },
    {
      "id": "improved_heavy_battery",
      "name": "Improved Heavy Battery",
      "f": [["mtgnavalsupportfolder",910,255]],
      "year": 1939,
      "cost": 1.0,
      "ic": "ship",
      "leads": ["improved_heavy_shell"],
      "cat": ["naval_artillery","naval_equipment","ship_modules_tech","cat_ship_heavy_battery","mio_cat_tech_all_capital_ship_and_modules"],
      "fx": ["Unlocks modules: 38 cm Cannon, 20.3 cm Cannon"]
    },
    {
      "id": "improved_heavy_shell",
      "name": "Super-Heavy Armor Piercing Shell",
      "f": [["mtgnavalsupportfolder",1260,255]],
      "year": 1942,
      "cost": 0.5,
      "ic": "ship",
      "leads": ["advanced_heavy_battery"],
      "cat": ["naval_artillery","naval_equipment","mio_cat_tech_all_capital_ship_and_modules"],
      "fx": [
        "Battleship: Hg attack +5%, Hg armor piercing +0.05",
        "Battlecruiser: Hg attack +5%, Hg armor piercing +0.05",
        "Heavy Cruiser: Hg attack +5%, Hg armor piercing +0.05"
      ]
    },
    {
      "id": "advanced_heavy_battery",
      "name": "Advanced Heavy Battery",
      "f": [["mtgnavalsupportfolder",1470,255]],
      "year": 1944,
      "cost": 1.0,
      "ic": "ship",
      "cat": ["naval_artillery","naval_equipment","ship_modules_tech","cat_ship_heavy_battery","mio_cat_tech_all_capital_ship_and_modules"],
      "fx": ["Unlocks modules: 40.6 cm Cannon, 20.3 cm Auto-Loading Cannon"]
    },
    {
      "id": "basic_torpedo",
      "name": "Basic Torpedo",
      "f": [["mtgnavalsupportfolder",210,395]],
      "year": 1922,
      "cost": 2.0,
      "ic": "sub",
      "leads": ["improved_ship_torpedo_launcher"],
      "cat": [
        "naval_equipment",
        "ship_modules_tech",
        "cat_torpedoes",
        "mio_cat_tech_all_screen_ship_and_modules",
        "mio_cat_tech_all_cruiser_and_modules",
        "mio_cat_tech_all_destroyer_and_modules",
        "mio_cat_tech_all_submarine_and_modules"
      ],
      "fx": ["Unlocks modules: 3x 450mm Torpedo Launcher, 4x 450mm Torpedo Tubes"]
    },
    {
      "id": "improved_ship_torpedo_launcher",
      "name": "Improved Ship Torpedo Launcher",
      "f": [["mtgnavalsupportfolder",490,395]],
      "year": 1936,
      "cost": 1.5,
      "ic": "sub",
      "leads": ["magnetic_detonator"],
      "cat": [
        "naval_equipment",
        "ship_modules_tech",
        "cat_torpedoes",
        "mio_cat_tech_all_screen_ship_and_modules",
        "mio_cat_tech_all_cruiser_and_modules",
        "mio_cat_tech_all_destroyer_and_modules",
        "mio_cat_tech_all_submarine_and_modules"
      ],
      "fx": ["Unlocks modules: 4x 450mm Torpedo Launcher, 6x 450mm Torpedo Tubes"]
    },
    {
      "id": "magnetic_detonator",
      "name": "Magnetic Detonator",
      "f": [["mtgnavalsupportfolder",630,395]],
      "year": 1936,
      "cost": 2.5,
      "ic": "sub",
      "leads": ["advanced_ship_torpedo_launcher"],
      "cat": [
        "naval_equipment",
        "ship_modules_tech",
        "cat_torpedoes",
        "mio_cat_tech_all_screen_ship_and_modules",
        "mio_cat_tech_all_cruiser_and_modules",
        "mio_cat_tech_all_destroyer_and_modules",
        "mio_cat_tech_all_submarine_and_modules"
      ],
      "fx": [
        "Xp boost cost +50",
        "Xp research bonus +1.5",
        "Destroyer: Torpedo attack +20%",
        "Submarine: Torpedo attack +20%",
        "Light Cruiser: Torpedo attack +20%",
        "Heavy Cruiser: Torpedo attack +20%"
      ]
    },
    {
      "id": "advanced_ship_torpedo_launcher",
      "name": "Advanced Ship Torpedo Launcher",
      "f": [["mtgnavalsupportfolder",1050,395]],
      "year": 1940,
      "cost": 1.5,
      "ic": "sub",
      "leads": ["homing_torpedo"],
      "cat": [
        "naval_equipment",
        "ship_modules_tech",
        "cat_torpedoes",
        "mio_cat_tech_all_screen_ship_and_modules",
        "mio_cat_tech_all_cruiser_and_modules",
        "mio_cat_tech_all_destroyer_and_modules",
        "mio_cat_tech_all_submarine_and_modules"
      ],
      "fx": ["Unlocks modules: 3x 533mm Torpedo Launcher, 4x 533mm Torpedo Tubes"]
    },
    {
      "id": "homing_torpedo",
      "name": "Homing Torpedo",
      "f": [["mtgnavalsupportfolder",1260,395]],
      "year": 1942,
      "cost": 2.5,
      "ic": "sub",
      "leads": ["modern_ship_torpedo_launcher"],
      "cat": [
        "naval_equipment",
        "ship_modules_tech",
        "cat_torpedoes",
        "mio_cat_tech_all_screen_ship_and_modules",
        "mio_cat_tech_all_cruiser_and_modules",
        "mio_cat_tech_all_destroyer_and_modules",
        "mio_cat_tech_all_submarine_and_modules"
      ],
      "fx": [
        "Xp boost cost +50",
        "Xp research bonus +1.5",
        "Destroyer: Torpedo hit chance +10%",
        "Submarine: Torpedo hit chance +10%",
        "Light Cruiser: Torpedo hit chance +10%",
        "Heavy Cruiser: Torpedo hit chance +10%",
        "Torpedo reveal chance -25%"
      ]
    },
    {
      "id": "modern_ship_torpedo_launcher",
      "name": "Modern Ship Torpedo Launcher",
      "f": [["mtgnavalsupportfolder",1470,395]],
      "year": 1944,
      "cost": 1.5,
      "ic": "sub",
      "cat": [
        "naval_equipment",
        "ship_modules_tech",
        "cat_torpedoes",
        "mio_cat_tech_all_screen_ship_and_modules",
        "mio_cat_tech_all_cruiser_and_modules",
        "mio_cat_tech_all_destroyer_and_modules",
        "mio_cat_tech_all_submarine_and_modules"
      ],
      "fx": ["Unlocks modules: 4x 533mm Torpedo Launcher, 6x 533mm Torpedo Tubes"]
    },
    {
      "id": "damage_control_1",
      "name": "Fire Fighting Drills",
      "f": [["mtgnavalsupportfolder",210,535]],
      "year": 0,
      "cost": 2.5,
      "ic": "sub",
      "leads": ["damage_control_2"],
      "cat": [
        "naval_equipment",
        "ship_modules_tech",
        "mio_cat_tech_all_capital_ship_and_modules",
        "mio_cat_tech_all_screen_ship_and_modules",
        "mio_cat_tech_all_submarine_and_modules",
        "mio_cat_tech_all_carrier_and_modules",
        "mio_cat_tech_all_cruiser_and_modules",
        "mio_cat_tech_all_destroyer_and_modules"
      ],
      "fx": ["Critical receive chance -10%","Effects of sustained Critical Hits -10%","Xp boost cost +50","Xp research bonus +1.5"]
    },
    {
      "id": "damage_control_2",
      "name": "Separate Fire Mains",
      "f": [["mtgnavalsupportfolder",560,535]],
      "year": 0,
      "cost": 2.5,
      "ic": "sub",
      "leads": ["damage_control_3"],
      "cat": [
        "naval_equipment",
        "ship_modules_tech",
        "mio_cat_tech_all_capital_ship_and_modules",
        "mio_cat_tech_all_screen_ship_and_modules",
        "mio_cat_tech_all_submarine_and_modules",
        "mio_cat_tech_all_carrier_and_modules",
        "mio_cat_tech_all_cruiser_and_modules",
        "mio_cat_tech_all_destroyer_and_modules"
      ],
      "fx": ["Critical receive chance -10%","Effects of sustained Critical Hits -10%","Xp boost cost +50","Xp research bonus +1.5"]
    },
    {
      "id": "damage_control_3",
      "name": "Diesel-powered Emergency Pumps",
      "f": [["mtgnavalsupportfolder",980,535]],
      "year": 0,
      "cost": 2.5,
      "ic": "sub",
      "leads": ["sp_improved_repair_ship"],
      "cat": [
        "naval_equipment",
        "ship_modules_tech",
        "mio_cat_tech_all_capital_ship_and_modules",
        "mio_cat_tech_all_screen_ship_and_modules",
        "mio_cat_tech_all_submarine_and_modules",
        "mio_cat_tech_all_carrier_and_modules",
        "mio_cat_tech_all_cruiser_and_modules",
        "mio_cat_tech_all_destroyer_and_modules"
      ],
      "fx": ["Critical receive chance -10%","Effects of sustained Critical Hits -10%","Xp boost cost +50","Xp research bonus +1.5"]
    },
    {
      "id": "sp_improved_repair_ship",
      "name": "Improved Repair Ship",
      "f": [["mtgnavalsupportfolder",1330,535]],
      "year": 1942,
      "cost": 2.0,
      "ic": "ship",
      "cat": ["naval_equipment","tp_tech"],
      "fx": ["Unlocks equipment: Improved Repair Ship","Xp boost cost +75","Xp research bonus +1"]
    },
    {
      "id": "fire_control_methods_1",
      "name": "Bracket Shooting",
      "f": [["mtgnavalsupportfolder",210,675]],
      "year": 0,
      "cost": 2.5,
      "ic": "ship",
      "leads": ["fire_control_methods_2"],
      "cat": [
        "naval_equipment",
        "ship_modules_tech",
        "mio_cat_tech_all_capital_ship_and_modules",
        "mio_cat_tech_all_screen_ship_and_modules",
        "mio_cat_tech_all_cruiser_and_modules",
        "mio_cat_tech_all_destroyer_and_modules"
      ],
      "fx": ["Battleship: Lg attack +5%, Hg attack +5%","Battlecruiser: Lg attack +5%, Hg attack +5%","Xp boost cost +50","Xp research bonus +1.5"]
    },
    {
      "id": "fire_control_methods_2",
      "name": "Ladder Shooting",
      "f": [["mtgnavalsupportfolder",560,675]],
      "year": 0,
      "cost": 2.5,
      "ic": "ship",
      "leads": ["fire_control_methods_3"],
      "cat": [
        "naval_equipment",
        "ship_modules_tech",
        "mio_cat_tech_all_capital_ship_and_modules",
        "mio_cat_tech_all_screen_ship_and_modules",
        "mio_cat_tech_all_cruiser_and_modules",
        "mio_cat_tech_all_destroyer_and_modules"
      ],
      "fx": [
        "Xp boost cost +50",
        "Xp research bonus +1.5",
        "Battleship: Lg attack +10%, Hg attack +10%",
        "Battlecruiser: Lg attack +10%, Hg attack +10%",
        "Heavy Cruiser: Lg attack +5%, Hg attack +5%"
      ]
    },
    {
      "id": "fire_control_methods_3",
      "name": "Shell Dyes",
      "f": [["mtgnavalsupportfolder",980,675]],
      "year": 0,
      "cost": 2.5,
      "ic": "ship",
      "cat": [
        "naval_equipment",
        "ship_modules_tech",
        "mio_cat_tech_all_capital_ship_and_modules",
        "mio_cat_tech_all_screen_ship_and_modules",
        "mio_cat_tech_all_cruiser_and_modules",
        "mio_cat_tech_all_destroyer_and_modules"
      ],
      "fx": [
        "Battleship: Lg attack +15%, Hg attack +15%",
        "Battlecruiser: Lg attack +15%, Hg attack +15%",
        "Heavy Cruiser: Lg attack +10%, Hg attack +10%",
        "Light Cruiser: Lg attack +10%, Hg attack +10%",
        "Destroyer: Lg attack +5%, Hg attack +5%",
        "Xp boost cost +50",
        "Xp research bonus +1.5"
      ]
    },
    {
      "id": "sp_improved_support_ship",
      "name": "Improved Support Ship",
      "f": [["mtgnavalsupportfolder",1330,675]],
      "year": 1942,
      "cost": 2.0,
      "ic": "ship",
      "cat": ["naval_equipment","tp_tech"],
      "fx": ["Unlocks equipment: Improved Support Ship","Xp boost cost +75","Xp research bonus +1"]
    },
    {
      "id": "mtg_transport",
      "name": "Transport Ship",
      "f": [["mtgnavalsupportfolder",210,815]],
      "year": 1922,
      "cost": 1.5,
      "ic": "ship",
      "leads": ["mtg_landing_craft","sp_multi_product_supply_ships"],
      "cat": ["naval_equipment","tp_tech"],
      "fx": ["Troop convoy requirements -33%","Naval invasion prep days -10","Division Capacity Per Naval Invasion +2","Naval Invasion Plan Capacity +1"]
    },
    {
      "id": "mtg_landing_craft",
      "name": "Landing Craft",
      "f": [["mtgnavalsupportfolder",1050,815]],
      "year": 1940,
      "cost": 2.0,
      "ic": "ship",
      "leads": ["mtg_tank_landing_craft","sp_improved_support_ship"],
      "cat": ["naval_equipment","tp_tech"],
      "fx": [
        "Unlocks equipment: Floating Harbor",
        "Amphibious invasion defence +15%",
        "Naval invasion prep days -10",
        "Division Capacity Per Naval Invasion +4",
        "Naval Invasion Plan Capacity +3"
      ]
    },
    {
      "id": "mtg_tank_landing_craft",
      "name": "Advanced Landing Craft",
      "f": [["mtgnavalsupportfolder",1470,815]],
      "year": 1944,
      "cost": 2.0,
      "ic": "ship",
      "cat": ["naval_equipment","tp_tech"],
      "fx": [
        "Amphibious Invasion Speed +0.25",
        "Amphibious invasion defence +50%",
        "Naval invasion prep days -10",
        "Division Capacity Per Naval Invasion +5",
        "Naval Invasion Plan Capacity +4"
      ]
    },
    {
      "id": "sp_multi_product_supply_ships",
      "name": "Multi-Product Supply Ship",
      "f": [["mtgnavalsupportfolder",840,885]],
      "year": 1938,
      "cost": 2.0,
      "ic": "ship",
      "leads": ["sp_standard_tenshioned_replenishment_alongside_method"],
      "cat": ["naval_equipment","tp_tech"],
      "fx": ["Underway Replenishment Range +0.25","Underway Replenishment Convoy Usage -20%","Xp boost cost +75","Xp research bonus +1.75"]
    },
    {
      "id": "sp_standard_tenshioned_replenishment_alongside_method",
      "name": "Standardized Tensioned Replenishment Alongside Method",
      "f": [["mtgnavalsupportfolder",1330,885]],
      "year": 1943,
      "cost": 2.5,
      "ic": "ship",
      "cat": ["naval_equipment","tp_tech"],
      "fx": ["Underway Replenishment Range +0.25","Underway Replenishment Convoy Usage -20%","Xp boost cost +75","Xp research bonus +1.5"]
    },
    {
      "id": "basic_naval_mines",
      "name": "Contact Mine",
      "f": [["mtgnavalsupportfolder",210,1020]],
      "year": 1922,
      "cost": 2.0,
      "ic": "ship",
      "leads": ["improved_naval_mines","submarine_mine_laying"],
      "cat": [
        "naval_mines",
        "naval_minelaying",
        "naval_equipment",
        "mio_cat_tech_all_screen_ship_and_modules",
        "mio_cat_tech_all_cruiser_and_modules",
        "mio_cat_tech_all_destroyer_and_modules"
      ],
      "fx": ["Unlocks modules: Minelaying Rails, Minesweeping Gear"]
    },
    {
      "id": "improved_naval_mines",
      "name": "Magnetic Mine",
      "f": [["mtgnavalsupportfolder",560,1020]],
      "year": 1936,
      "cost": 2.0,
      "ic": "ship",
      "leads": ["advanced_naval_mines","degaussing"],
      "cat": [
        "naval_mines",
        "naval_minelaying",
        "naval_equipment",
        "mio_cat_tech_all_screen_ship_and_modules",
        "mio_cat_tech_all_cruiser_and_modules",
        "mio_cat_tech_all_destroyer_and_modules"
      ],
      "fx": ["Naval mines damage +30%"]
    },
    {
      "id": "advanced_naval_mines",
      "name": "Acoustic Mine",
      "f": [["mtgnavalsupportfolder",1050,1020]],
      "year": 1940,
      "cost": 2.0,
      "ic": "ship",
      "leads": ["airdrop_mines_bba","airsweep_mines_bba"],
      "cat": [
        "naval_mines",
        "naval_minelaying",
        "naval_equipment",
        "mio_cat_tech_all_screen_ship_and_modules",
        "mio_cat_tech_all_cruiser_and_modules",
        "mio_cat_tech_all_destroyer_and_modules"
      ],
      "fx": ["Naval mines damage +30%"]
    },
    {
      "id": "airsweep_mines_bba",
      "name": "Aerial Minesweeping",
      "f": [["mtgnavalsupportfolder",1260,1020]],
      "year": 1942,
      "cost": 1.0,
      "ic": "ship",
      "cat": ["naval_mines","naval_minesweeping","naval_equipment"],
      "fx": ["Unlocks modules: Demining Coil"]
    },
    {
      "id": "degaussing",
      "name": "Degaussing",
      "f": [["mtgnavalsupportfolder",840,1090]],
      "year": 1938,
      "cost": 1.0,
      "ic": "sub",
      "cat": [
        "naval_mines",
        "naval_minesweeping",
        "naval_equipment",
        "mio_cat_tech_all_capital_ship_and_modules",
        "mio_cat_tech_all_screen_ship_and_modules",
        "mio_cat_tech_all_submarine_and_modules",
        "mio_cat_tech_all_carrier_and_modules",
        "mio_cat_tech_all_cruiser_and_modules",
        "mio_cat_tech_all_destroyer_and_modules"
      ],
      "fx": ["Naval mines avoidance +50%","Destroyer: Sub detection +0.1","Light Cruiser: Sub detection +0.1","Heavy Cruiser: Sub detection +0.1"]
    },
    {
      "id": "submarine_mine_laying",
      "name": "Minelaying Submarine",
      "f": [["mtgnavalsupportfolder",210,1160]],
      "year": 1922,
      "cost": 2.0,
      "ic": "sub",
      "leads": ["improved_submarine_mine_laying"],
      "cat": ["naval_mines","naval_minelaying","naval_equipment","ship_modules_tech","mio_cat_tech_all_submarine_and_modules"],
      "fx": ["Unlocks modules: Minelaying Tubes"]
    },
    {
      "id": "improved_submarine_mine_laying",
      "name": "Torpedo-tube Mine Deployment",
      "f": [["mtgnavalsupportfolder",1050,1160]],
      "year": 1940,
      "cost": 2.0,
      "ic": "sub",
      "cat": ["naval_mines","naval_minelaying","naval_equipment","ship_modules_tech","mio_cat_tech_all_submarine_and_modules"],
      "fx": ["Submarine: Mines planting +0.2"]
    },
    {
      "id": "airdrop_mines_bba",
      "name": "Aerial Minelaying",
      "f": [["mtgnavalsupportfolder",1260,1160]],
      "year": 1942,
      "cost": 1.0,
      "ic": "ship",
      "cat": ["naval_mines","naval_minelaying","naval_equipment"],
      "fx": ["Unlocks modules: Airdropped Mines"]
    },
    {
      "id": "gwtank_chassis",
      "name": "Inter-War Tank Development",
      "f": [["nsb_armour_folder",840,20]],
      "year": 1918,
      "cost": 2.0,
      "ic": "tank",
      "leads": ["basic_light_tank_chassis","basic_heavy_tank_chassis","basic_medium_tank_chassis","sp_armored_advanced_flamethrower_tech"],
      "cat": ["armor","mio_cat_tech_all_armor_and_modules","cat_light_armor","mio_cat_tech_light_armor_and_modules"],
      "fx": [
        "Unlocks equipment: Inter-War Light Tank, Inter-War Medium Tank, Inter-War Heavy Tank, Inter-War Light Tank Destroyer, Inter-War Medium Tank Destroyer, Inter-War Heavy Tank Destroyer, Inter-War Light SP Artillery, Inter-War Medium SP Artillery, Inter-War Heavy SP Artillery, Inter-War Light SP Anti-Air, Inter-War Medium SP Anti-Air, Inter-War Heavy SP Anti-Air",
        "Unlocks modules: Torsion Bar, Riveted Armor, Gasoline Engine, Diesel Engine, Petrol-Electric Engine, Cast Armor …",
        "Unlocks battalion: Light Tank, Medium Tank, Heavy Tank"
      ]
    },
    {
      "id": "basic_light_tank_chassis",
      "name": "Basic Light Tank",
      "f": [["nsb_armour_folder",630,160]],
      "year": 1934,
      "cost": 2.0,
      "ic": "tank",
      "leads": ["improved_light_tank_chassis"],
      "cat": ["armor","mio_cat_tech_all_armor_and_modules","cat_light_armor","mio_cat_tech_light_armor_and_modules"],
      "fx": [
        "Unlocks equipment: Basic Light Tank, Basic Light Tank Destroyer, Basic Light SP Artillery, Basic Light SP Anti-Air",
        "Unlocks battalion: Light Tank"
      ]
    },
    {
      "id": "basic_heavy_tank_chassis",
      "name": "Basic Heavy Tank",
      "f": [["nsb_armour_folder",1050,160]],
      "year": 1934,
      "cost": 2.0,
      "ic": "tank",
      "leads": ["improved_heavy_tank_chassis"],
      "cat": ["armor","mio_cat_tech_all_armor_and_modules","cat_heavy_armor","mio_cat_tech_heavy_armor_and_modules"],
      "fx": [
        "Unlocks equipment: Basic Heavy Tank, Basic Heavy Tank Destroyer, Basic Heavy SP Artillery, Basic Heavy SP Anti-Air",
        "Unlocks battalion: Heavy Tank"
      ]
    },
    {
      "id": "armor_tech_1",
      "name": "Basic Armor Protection",
      "f": [["nsb_armour_folder",160,230]],
      "year": 1936,
      "cost": 1.0,
      "ic": "tank",
      "leads": ["armor_tech_2"],
      "cat": [
        "armor",
        "mio_cat_tech_all_armor_and_modules",
        "mio_cat_tech_light_armor_and_modules",
        "mio_cat_tech_medium_armor_and_modules",
        "mio_cat_tech_heavy_armor_and_modules"
      ],
      "fx": ["Unlocks modules: Welded Armor"]
    },
    {
      "id": "engine_tech_1",
      "name": "Basic Engine",
      "f": [["nsb_armour_folder",265,230]],
      "year": 1934,
      "cost": 1.0,
      "ic": "tank",
      "leads": ["engine_tech_2"],
      "cat": [
        "armor",
        "mio_cat_tech_all_armor_and_modules",
        "mio_cat_tech_light_armor_and_modules",
        "mio_cat_tech_medium_armor_and_modules",
        "mio_cat_tech_heavy_armor_and_modules"
      ]
    },
    {
      "id": "improved_light_tank_chassis",
      "name": "Improved Light Tank",
      "f": [["nsb_armour_folder",630,300]],
      "year": 1936,
      "cost": 2.0,
      "ic": "tank",
      "leads": ["advanced_light_tank_chassis","amphibious_tank_chassis"],
      "cat": ["armor","mio_cat_tech_all_armor_and_modules","cat_light_armor","mio_cat_tech_light_armor_and_modules"],
      "fx": ["Unlocks equipment: Improved Light Tank, Improved Light Tank Destroyer, Improved Light SP Artillery, Improved Light SP Anti-Air"]
    },
    {
      "id": "armor_tech_2",
      "name": "Improved Armor Protection",
      "f": [["nsb_armour_folder",160,370]],
      "year": 1938,
      "cost": 1.0,
      "ic": "tank",
      "leads": ["armor_tech_3"],
      "cat": [
        "armor",
        "mio_cat_tech_all_armor_and_modules",
        "mio_cat_tech_light_armor_and_modules",
        "mio_cat_tech_medium_armor_and_modules",
        "mio_cat_tech_heavy_armor_and_modules"
      ],
      "fx": ["Unlocks modules: Armor Skirts"]
    },
    {
      "id": "engine_tech_2",
      "name": "Improved Engine",
      "f": [["nsb_armour_folder",265,370]],
      "year": 1938,
      "cost": 1.0,
      "ic": "tank",
      "leads": ["engine_tech_3"],
      "cat": [
        "armor",
        "mio_cat_tech_all_armor_and_modules",
        "mio_cat_tech_light_armor_and_modules",
        "mio_cat_tech_medium_armor_and_modules",
        "mio_cat_tech_heavy_armor_and_modules"
      ]
    },
    {
      "id": "amphibious_tank_chassis",
      "name": "Amphibious Tank",
      "f": [["nsb_armour_folder",420,370]],
      "year": 1938,
      "cost": 2.0,
      "ic": "ship",
      "leads": ["amphibious_drive"],
      "cat": ["armor","mio_cat_tech_all_armor_and_modules","tp_tech","mio_cat_tech_light_armor_and_modules"],
      "fx": ["Unlocks equipment: Amphibious Tank","Unlocks battalion: Amphibious Tank Battalion"]
    },
    {
      "id": "basic_medium_tank_chassis",
      "name": "Basic Medium Tank",
      "f": [["nsb_armour_folder",840,370]],
      "year": 1938,
      "cost": 2.0,
      "ic": "tank",
      "leads": ["improved_medium_tank_chassis"],
      "cat": ["armor","mio_cat_tech_all_armor_and_modules","cat_medium_armor","mio_cat_tech_medium_armor_and_modules"],
      "fx": [
        "Unlocks equipment: Basic Medium Tank, Basic Medium Tank Destroyer, Basic Medium SP Artillery, Basic Medium SP Anti-Air",
        "Unlocks battalion: Medium Tank"
      ]
    },
    {
      "id": "improved_medium_tank_chassis",
      "name": "Improved Medium Tank",
      "f": [["nsb_armour_folder",840,510]],
      "year": 1940,
      "cost": 2.0,
      "ic": "tank",
      "leads": ["advanced_medium_tank_chassis"],
      "cat": ["armor","mio_cat_tech_all_armor_and_modules","cat_medium_armor","mio_cat_tech_medium_armor_and_modules"],
      "fx": ["Unlocks equipment: Improved Medium Tank, Improved Medium Tank Destroyer, Improved Medium SP Artillery, Improved Medium SP Anti-Air"]
    },
    {
      "id": "improved_heavy_tank_chassis",
      "name": "Improved Heavy Tank",
      "f": [["nsb_armour_folder",1050,510]],
      "year": 1940,
      "cost": 2.5,
      "ic": "tank",
      "leads": ["advanced_heavy_tank_chassis","super_heavy_tank_chassis"],
      "cat": ["armor","mio_cat_tech_all_armor_and_modules","cat_heavy_armor","mio_cat_tech_heavy_armor_and_modules"],
      "fx": ["Unlocks equipment: Improved Heavy Tank, Improved Heavy Tank Destroyer, Improved Heavy SP Artillery, Improved Heavy SP Anti-Air"]
    },
    {
      "id": "armor_tech_3",
      "name": "Advanced Armor Protection",
      "f": [["nsb_armour_folder",160,580]],
      "year": 1941,
      "cost": 1.0,
      "ic": "tank",
      "leads": ["armor_tech_4"],
      "cat": [
        "armor",
        "mio_cat_tech_all_armor_and_modules",
        "mio_cat_tech_light_armor_and_modules",
        "mio_cat_tech_medium_armor_and_modules",
        "mio_cat_tech_heavy_armor_and_modules"
      ],
      "fx": ["Unlocks modules: Armored Skirts"]
    },
    {
      "id": "engine_tech_3",
      "name": "Advanced Engine",
      "f": [["nsb_armour_folder",265,580]],
      "year": 1941,
      "cost": 1.0,
      "ic": "tank",
      "leads": ["engine_tech_4"],
      "cat": [
        "armor",
        "mio_cat_tech_all_armor_and_modules",
        "mio_cat_tech_light_armor_and_modules",
        "mio_cat_tech_medium_armor_and_modules",
        "mio_cat_tech_heavy_armor_and_modules"
      ]
    },
    {
      "id": "amphibious_drive",
      "name": "Amphibious Drive",
      "f": [["nsb_armour_folder",420,580]],
      "year": 1941,
      "cost": 2.0,
      "ic": "ship",
      "cat": ["armor","mio_cat_tech_all_armor_and_modules","tp_tech","mio_cat_tech_light_armor_and_modules"],
      "fx": [
        "Unlocks equipment: Inter-War Light Tank (Amphibious), Inter-War Medium Tank (Amphibious), Inter-War Heavy Tank (Amphibious), Basic Light Tank (Amphibious), Basic Medium Tank (Amphibious), Basic Heavy Tank (Amphibious), Improved Light Tank (Amphibious), Improved Medium Tank (Amphibious), Improved Heavy Tank (Amphibious), Advanced Light Tank (Amphibious), Advanced Medium Tank (Amphibious), Advanced Heavy Tank (Amphibious)",
        "Unlocks modules: Amphibious Drive"
      ]
    },
    {
      "id": "advanced_light_tank_chassis",
      "name": "Advanced Light Tank",
      "f": [["nsb_armour_folder",630,580]],
      "year": 1941,
      "cost": 2.0,
      "ic": "tank",
      "cat": ["armor","mio_cat_tech_all_armor_and_modules","cat_light_armor","mio_cat_tech_light_armor_and_modules"],
      "fx": ["Unlocks equipment: Advanced Light Tank, Advanced Light Tank Destroyer, Advanced Light SP Artillery, Advanced Light SP Anti-Air"]
    },
    {
      "id": "super_heavy_tank_chassis",
      "name": "Super-Heavy Tank",
      "f": [["nsb_armour_folder",1330,580]],
      "year": 1941,
      "cost": 3.0,
      "ic": "tank",
      "leads": [
        "sp_armored_lc_high_impact_obliterator_cannon_tech",
        "sp_armored_lc_naval_engine_conversion_tech",
        "sp_armored_lc_transmission_improvements_tech",
        "sp_armored_lc_specialized_field_manuals_tech"
      ],
      "cat": ["armor","mio_cat_tech_all_armor_and_modules","cat_heavy_armor","mio_cat_tech_heavy_armor_and_modules"],
      "fx": [
        "Unlocks equipment: Super-Heavy Tank, Super-Heavy Tank Destroyer, Super-Heavy SP Artillery, Super-Heavy SP Anti-Air",
        "Unlocks modules: Super-Heavy Cannon",
        "Unlocks battalion: Super-Heavy Tank"
      ]
    },
    {
      "id": "sp_armored_advanced_flamethrower_tech",
      "name": "Advanced Flamethrower",
      "f": [["nsb_armour_folder",1540,580]],
      "year": 1941,
      "cost": 1.0,
      "ic": "tank",
      "cat": [
        "armor",
        "mio_cat_tech_all_armor_and_modules",
        "mio_cat_tech_light_armor_and_modules",
        "mio_cat_tech_medium_armor_and_modules",
        "mio_cat_tech_heavy_armor_and_modules"
      ],
      "fx": ["Unlocks modules: Advanced Flamethrower"]
    },
    {
      "id": "advanced_medium_tank_chassis",
      "name": "Advanced Medium Tank",
      "f": [["nsb_armour_folder",840,720]],
      "year": 1943,
      "cost": 2.0,
      "ic": "tank",
      "leads": ["main_battle_tank_chassis"],
      "cat": ["armor","mio_cat_tech_all_armor_and_modules","cat_medium_armor","mio_cat_tech_medium_armor_and_modules"],
      "fx": ["Unlocks equipment: Advanced Medium Tank, Advanced Medium Tank Destroyer, Advanced Medium SP Artillery, Advanced Medium SP Anti-Air"]
    },
    {
      "id": "advanced_heavy_tank_chassis",
      "name": "Advanced Heavy Tank",
      "f": [["nsb_armour_folder",1050,720]],
      "year": 1943,
      "cost": 2.5,
      "ic": "tank",
      "leads": ["main_battle_tank_chassis"],
      "cat": ["armor","mio_cat_tech_all_armor_and_modules","cat_heavy_armor","mio_cat_tech_heavy_armor_and_modules"],
      "fx": ["Unlocks equipment: Advanced Heavy Tank, Advanced Heavy Tank Destroyer, Advanced Heavy SP Artillery, Advanced Heavy SP Anti-Air"]
    },
    {
      "id": "sp_armored_lc_naval_engine_conversion_tech",
      "name": "Naval Engine Conversion",
      "f": [["nsb_armour_folder",1190,720]],
      "year": 1943,
      "cost": 1.0,
      "ic": "tank",
      "leads": ["sp_armored_lc_weapon_fire_control_tech"],
      "cat": ["armor","mio_cat_tech_all_armor_and_modules","cat_heavy_armor","mio_cat_tech_heavy_armor_and_modules"],
      "fx": ["Land Cruiser: Maximum speed +5%, Supply Consumption -0.02","Super-Heavy Tank: Maximum speed +5%, Supply Consumption -0.02"]
    },
    {
      "id": "sp_armored_lc_transmission_improvements_tech",
      "name": "Transmission Improvements",
      "f": [["nsb_armour_folder",1330,720]],
      "year": 1943,
      "cost": 1.0,
      "ic": "tank",
      "leads": ["sp_armored_lc_weapon_fire_control_tech"],
      "cat": ["armor","mio_cat_tech_all_armor_and_modules","cat_heavy_armor","mio_cat_tech_heavy_armor_and_modules"],
      "fx": ["Land Cruiser: Reliability +0.05, Supply Consumption -0.02","Super-Heavy Tank: Reliability +0.05, Supply Consumption -0.02"]
    },
    {
      "id": "sp_armored_lc_specialized_field_manuals_tech",
      "name": "Specialized Field Manuals",
      "f": [["nsb_armour_folder",1470,720]],
      "year": 1943,
      "cost": 1.0,
      "ic": "tank",
      "leads": ["sp_armored_lc_weapon_fire_control_tech"],
      "cat": ["armor","mio_cat_tech_all_armor_and_modules","cat_heavy_armor","mio_cat_tech_heavy_armor_and_modules"],
      "fx": ["Land Cruiser: Entrenchment +0.05, Max strength +0.05, Max organisation +10"]
    },
    {
      "id": "sp_armored_lc_high_impact_obliterator_cannon_tech",
      "name": "High-Impact Obliterator Cannon",
      "f": [["nsb_armour_folder",1610,720]],
      "year": 1943,
      "cost": 1.0,
      "ic": "tank",
      "cat": ["armor","mio_cat_tech_all_armor_and_modules","cat_heavy_armor","mio_cat_tech_heavy_armor_and_modules"],
      "fx": ["Unlocks modules: High-Impact Obliterator Cannon"]
    },
    {
      "id": "armor_tech_4",
      "name": "Modern Armor Protection",
      "f": [["nsb_armour_folder",160,790]],
      "year": 1944,
      "cost": 1.0,
      "ic": "tank",
      "cat": [
        "armor",
        "mio_cat_tech_all_armor_and_modules",
        "mio_cat_tech_light_armor_and_modules",
        "mio_cat_tech_medium_armor_and_modules",
        "mio_cat_tech_heavy_armor_and_modules"
      ]
    },
    {
      "id": "engine_tech_4",
      "name": "Modern Engine",
      "f": [["nsb_armour_folder",265,790]],
      "year": 1944,
      "cost": 1.0,
      "ic": "tank",
      "cat": [
        "armor",
        "mio_cat_tech_all_armor_and_modules",
        "mio_cat_tech_light_armor_and_modules",
        "mio_cat_tech_medium_armor_and_modules",
        "mio_cat_tech_heavy_armor_and_modules"
      ]
    },
    {
      "id": "main_battle_tank_chassis",
      "name": "Modern Tank",
      "f": [["nsb_armour_folder",840,860]],
      "year": 1945,
      "cost": 2.5,
      "ic": "tank",
      "cat": ["armor","mio_cat_tech_all_armor_and_modules","cat_medium_armor","mio_cat_tech_medium_armor_and_modules"],
      "fx": ["Unlocks equipment: Modern Tank, Modern Tank Destroyer, Modern SP Artillery, Modern SP Anti-Air","Unlocks battalion: Modern Tank"]
    },
    {
      "id": "sp_armored_lc_weapon_fire_control_tech",
      "name": "Weapon Fire Control",
      "f": [["nsb_armour_folder",1330,860]],
      "year": 1945,
      "cost": 1.0,
      "ic": "tank",
      "cat": ["armor","mio_cat_tech_all_armor_and_modules","cat_heavy_armor","mio_cat_tech_heavy_armor_and_modules"],
      "fx": ["Land Cruiser: Breakthrough +10%, Defense +10%"]
    },
    {
      "id": "tech_support",
      "name": "Support Equipment",
      "f": [["support_folder",80,130]],
      "year": 1918,
      "cost": 1.0,
      "ic": "helmet",
      "leads": [
        "tech_engineers",
        "tech_recon",
        "tech_field_hospital",
        "tech_logistics_company",
        "tech_military_police",
        "tech_signal_company",
        "tech_maintenance_company"
      ],
      "cat": ["support_tech"],
      "fx": ["Unlocks equipment: Support Equipment"]
    },
    {
      "id": "tech_engineers",
      "name": "Engineer Company I",
      "f": [["support_folder",220,130]],
      "year": 1936,
      "cost": 1.25,
      "ic": "helmet",
      "leads": ["tech_engineers2","sp_armored_engineer_tech"],
      "cat": ["support_tech","engineers_tech"],
      "fx": ["Unlocks battalion: Engineer Company, Engineer Staff"]
    },
    {
      "id": "tech_engineers2",
      "name": "Engineer Company II",
      "f": [["support_folder",500,130]],
      "year": 1939,
      "cost": 1.5,
      "ic": "helmet",
      "leads": ["tech_engineers3"],
      "cat": ["support_tech","engineers_tech"],
      "fx": [
        "Unlocks modules: Dozer Blade",
        "Engineer Company: Entrenchment +0.5",
        "Assault Engineer Company: Breakthrough +10%",
        "Armored Engineer Company: Entrenchment +1"
      ]
    },
    {
      "id": "tech_engineers3",
      "name": "Engineer Company III",
      "f": [["support_folder",920,130]],
      "year": 1942,
      "cost": 2.0,
      "ic": "helmet",
      "leads": ["tech_engineers4"],
      "cat": ["support_tech","engineers_tech"],
      "fx": [
        "Unlocks modules: Obstacle-Clearance Gear",
        "Engineer Company: Entrenchment +0.5",
        "Assault Engineer Company: Breakthrough +10%",
        "Armored Engineer Company: Entrenchment +1"
      ]
    },
    {
      "id": "tech_engineers4",
      "name": "Engineer Company IV",
      "f": [["support_folder",1340,130]],
      "year": 1945,
      "cost": 2.0,
      "ic": "helmet",
      "cat": ["support_tech","engineers_tech"],
      "fx": ["Engineer Company: Entrenchment +0.5","Assault Engineer Company: Breakthrough +10%","Armored Engineer Company: Entrenchment +1"]
    },
    {
      "id": "sp_armored_engineer_tech",
      "name": "Armored Engineer Company",
      "f": [["support_folder",360,200]],
      "year": 1938,
      "cost": 2.0,
      "ic": "helmet",
      "cat": ["support_tech","engineers_tech"],
      "fx": ["Unlocks battalion: Armored Engineer Company"]
    },
    {
      "id": "tech_recon",
      "name": "Recon Company I",
      "f": [["support_folder",220,270]],
      "year": 1936,
      "cost": 1.25,
      "ic": "helmet",
      "leads": ["tech_recon2","sp_helicopter_artillery_observers_tech"],
      "cat": ["support_tech","recon_tech"],
      "fx": [
        "Unlocks battalion: Cavalry Recon Detachment, Motorized Recon Company, Light Armored Recon Company, Armored Recon Company, Reconnaissance Staff"
      ]
    },
    {
      "id": "tech_recon2",
      "name": "Recon Company II",
      "f": [["support_folder",500,270]],
      "year": 1939,
      "cost": 1.5,
      "ic": "helmet",
      "leads": ["tech_recon3"],
      "cat": ["support_tech","recon_tech"],
      "fx": ["Recon: Cavalry Recon Detachment +2","Helicopter Recon: Cavalry Recon Detachment +1"]
    },
    {
      "id": "tech_recon3",
      "name": "Recon Company III",
      "f": [["support_folder",920,270]],
      "year": 1942,
      "cost": 2.0,
      "ic": "helmet",
      "leads": ["tech_recon4"],
      "cat": ["support_tech","recon_tech"],
      "fx": ["Recon: Cavalry Recon Detachment +2","Helicopter Recon: Cavalry Recon Detachment +1","Helicopter Brigade: Cavalry Recon Detachment +2"]
    },
    {
      "id": "tech_recon4",
      "name": "Recon Company IV",
      "f": [["support_folder",1340,270]],
      "year": 1945,
      "cost": 2.0,
      "ic": "helmet",
      "cat": ["support_tech","recon_tech"],
      "fx": ["Recon: Cavalry Recon Detachment +2","Helicopter Recon: Cavalry Recon Detachment +2"]
    },
    {
      "id": "sp_helicopter_artillery_observers_tech",
      "name": "Helicopter Recon Company",
      "f": [["support_folder",360,340]],
      "year": 1938,
      "cost": 2.0,
      "ic": "plane",
      "cat": ["support_tech","recon_tech","helicopter_tech"],
      "fx": ["Unlocks battalion: Helicopter Recon"]
    },
    {
      "id": "tech_military_police",
      "name": "Military Police I",
      "f": [["support_folder",220,410]],
      "year": 1936,
      "cost": 1.25,
      "ic": "helmet",
      "leads": ["tech_military_police2","sp_armored_motorized_military_police_tech"],
      "cat": ["support_tech","military_police_tech"],
      "fx": ["Unlocks battalion: Military Police, Military Police Staff"]
    },
    {
      "id": "tech_military_police2",
      "name": "Military Police II",
      "f": [["support_folder",500,410]],
      "year": 1939,
      "cost": 1.5,
      "ic": "helmet",
      "leads": ["tech_military_police3"],
      "cat": ["support_tech","military_police_tech"],
      "fx": ["Military Police: Suppression factor +10%","Motorized Military Police: Suppression factor +10%"]
    },
    {
      "id": "tech_military_police3",
      "name": "Military Police III",
      "f": [["support_folder",920,410]],
      "year": 1942,
      "cost": 2.0,
      "ic": "helmet",
      "leads": ["tech_military_police4"],
      "cat": ["support_tech","military_police_tech"],
      "fx": ["Military Police: Suppression factor +10%","Motorized Military Police: Suppression factor +10%"]
    },
    {
      "id": "tech_military_police4",
      "name": "Military Police IV",
      "f": [["support_folder",1340,410]],
      "year": 1945,
      "cost": 2.0,
      "ic": "helmet",
      "cat": ["support_tech","military_police_tech"],
      "fx": ["Military Police: Suppression factor +10%","Motorized Military Police: Suppression factor +10%"]
    },
    {
      "id": "sp_armored_motorized_military_police_tech",
      "name": "Motorized Military Police",
      "f": [["support_folder",360,480]],
      "year": 1938,
      "cost": 2.0,
      "ic": "helmet",
      "cat": ["support_tech","military_police_tech"],
      "fx": ["Unlocks equipment: Military Motorcycle","Unlocks battalion: Motorized Military Police"]
    },
    {
      "id": "tech_maintenance_company",
      "name": "Maintenance Company I",
      "f": [["support_folder",220,550]],
      "year": 1936,
      "cost": 1.25,
      "ic": "helmet",
      "leads": ["tech_maintenance_company2","sp_armored_maintenance_tech"],
      "cat": ["support_tech","maintenance_company_tech"],
      "fx": ["Unlocks battalion: Maintenance Company, Maintenance Planning Staff"]
    },
    {
      "id": "tech_maintenance_company2",
      "name": "Maintenance Company II",
      "f": [["support_folder",500,550]],
      "year": 1939,
      "cost": 1.5,
      "ic": "helmet",
      "leads": ["tech_maintenance_company3"],
      "cat": ["support_tech","maintenance_company_tech"],
      "fx": [
        "Unlocks modules: Easy Maintenance",
        "Maintenance Company: Reliability factor +5%, Equipment Capture Ratio Factor +5%",
        "Armored Maintenance Company: Reliability factor +2%, Recovery +3%, Equipment Capture Ratio Factor +10%"
      ]
    },
    {
      "id": "tech_maintenance_company3",
      "name": "Maintenance Company III",
      "f": [["support_folder",920,550]],
      "year": 1942,
      "cost": 2.0,
      "ic": "helmet",
      "leads": ["tech_maintenance_company4"],
      "cat": ["support_tech","maintenance_company_tech"],
      "fx": ["Maintenance Company: Reliability factor +5%","Armored Maintenance Company: Reliability factor +2%, Recovery +3%"]
    },
    {
      "id": "tech_maintenance_company4",
      "name": "Maintenance Company IV",
      "f": [["support_folder",1340,550]],
      "year": 1945,
      "cost": 2.0,
      "ic": "helmet",
      "cat": ["support_tech","maintenance_company_tech"],
      "fx": [
        "Maintenance Company: Reliability factor +5%, Equipment Capture Ratio Factor +5%",
        "Armored Maintenance Company: Reliability factor +2%, Recovery +3%, Equipment Capture Ratio Factor +10%"
      ]
    },
    {
      "id": "sp_armored_maintenance_tech",
      "name": "Armored Maintenance Company",
      "f": [["support_folder",360,620]],
      "year": 1938,
      "cost": 2.0,
      "ic": "helmet",
      "cat": ["support_tech","maintenance_company_tech"],
      "fx": ["Unlocks battalion: Armored Maintenance Company"]
    },
    {
      "id": "tech_field_hospital",
      "name": "Field Hospital I",
      "f": [["support_folder",220,760]],
      "year": 1936,
      "cost": 1.25,
      "ic": "road",
      "leads": ["tech_field_hospital2","sp_helicopter_med_evac_tech"],
      "cat": ["support_tech","hospital_tech","motorized_equipment","mio_cat_tech_all_motorized_mechanized"],
      "fx": ["Unlocks battalion: Field Hospital, Hospital Group Staff"]
    },
    {
      "id": "tech_field_hospital2",
      "name": "Field Hospital II",
      "f": [["support_folder",500,760]],
      "year": 1939,
      "cost": 1.5,
      "ic": "road",
      "leads": ["tech_field_hospital3"],
      "cat": ["support_tech","hospital_tech","motorized_equipment","mio_cat_tech_all_motorized_mechanized"],
      "fx": [
        "Field Hospital: Casualty Trickleback +0.1, Experienced soldier losses -10%",
        "Helicopter Med-Evac: Casualty Trickleback +0.12, Experienced soldier losses -8%"
      ]
    },
    {
      "id": "tech_field_hospital3",
      "name": "Field Hospital III",
      "f": [["support_folder",920,760]],
      "year": 1942,
      "cost": 2.0,
      "ic": "road",
      "leads": ["tech_field_hospital4"],
      "cat": ["support_tech","hospital_tech","motorized_equipment","mio_cat_tech_all_motorized_mechanized"],
      "fx": [
        "Field Hospital: Casualty Trickleback +0.1, Experienced soldier losses -10%",
        "Helicopter Med-Evac: Casualty Trickleback +0.12, Experienced soldier losses -8%",
        "Helicopter Brigade: Casualty Trickleback +0.15, Experienced soldier losses -10%"
      ]
    },
    {
      "id": "tech_field_hospital4",
      "name": "Field Hospital IV",
      "f": [["support_folder",1340,760]],
      "year": 1945,
      "cost": 2.0,
      "ic": "road",
      "cat": ["support_tech","hospital_tech","motorized_equipment","mio_cat_tech_all_motorized_mechanized"],
      "fx": [
        "Field Hospital: Casualty Trickleback +0.1, Experienced soldier losses -10%",
        "Helicopter Med-Evac: Casualty Trickleback +0.12, Experienced soldier losses -8%"
      ]
    },
    {
      "id": "sp_helicopter_med_evac_tech",
      "name": "Helicopter Med-Evac Company",
      "f": [["support_folder",360,830]],
      "year": 1938,
      "cost": 2.0,
      "ic": "plane",
      "cat": ["support_tech","hospital_tech","helicopter_tech"],
      "fx": ["Unlocks battalion: Helicopter Med-Evac"]
    },
    {
      "id": "tech_logistics_company",
      "name": "Logistics Company I",
      "f": [["support_folder",220,900]],
      "year": 1936,
      "cost": 1.25,
      "ic": "road",
      "leads": ["tech_logistics_company2","sp_helicopter_transport_pods_tech"],
      "cat": ["support_tech","logistics_tech","motorized_equipment","mio_cat_tech_all_motorized_mechanized"],
      "fx": ["Unlocks battalion: Logistics Company, Logistics & Service Staff"]
    },
    {
      "id": "tech_logistics_company2",
      "name": "Logistics Company II",
      "f": [["support_folder",500,900]],
      "year": 1939,
      "cost": 1.5,
      "ic": "road",
      "leads": ["tech_logistics_company3"],
      "cat": ["support_tech","logistics_tech","motorized_equipment","mio_cat_tech_all_motorized_mechanized"],
      "fx": ["Logistics Company: Supply Consumption -10%, Fuel consumption factor -5%","Helicopter Transports: Supply Consumption -12%"]
    },
    {
      "id": "tech_logistics_company3",
      "name": "Logistics Company III",
      "f": [["support_folder",920,900]],
      "year": 1942,
      "cost": 2.0,
      "ic": "road",
      "leads": ["tech_logistics_company4"],
      "cat": ["support_tech","logistics_tech","motorized_equipment","mio_cat_tech_all_motorized_mechanized"],
      "fx": [
        "Logistics Company: Supply Consumption -10%, Fuel consumption factor -5%",
        "Helicopter Transports: Supply Consumption -12%",
        "Helicopter Brigade: Supply Consumption -12%"
      ]
    },
    {
      "id": "tech_logistics_company4",
      "name": "Logistics Company IV",
      "f": [["support_folder",1340,900]],
      "year": 1945,
      "cost": 2.0,
      "ic": "road",
      "cat": ["support_tech","logistics_tech","motorized_equipment","mio_cat_tech_all_motorized_mechanized"],
      "fx": ["Logistics Company: Supply Consumption -10%, Fuel consumption factor -5%","Helicopter Transports: Supply Consumption -15%"]
    },
    {
      "id": "sp_helicopter_transport_pods_tech",
      "name": "Helicopter Transport Company",
      "f": [["support_folder",360,970]],
      "year": 1938,
      "cost": 2.0,
      "ic": "plane",
      "cat": ["support_tech","logistics_tech","helicopter_tech"],
      "fx": ["Unlocks battalion: Helicopter Transports"]
    },
    {
      "id": "tech_signal_company",
      "name": "Signal Company I",
      "f": [["support_folder",220,1110]],
      "year": 1936,
      "cost": 1.25,
      "ic": "bolt",
      "leads": ["tech_signal_company2","sp_armored_signal_tech"],
      "cat": ["support_tech","signal_company_tech","electronics"],
      "fx": ["Unlocks battalion: Signal Company, Signal & Intelligence Staff"]
    },
    {
      "id": "tech_signal_company2",
      "name": "Signal Company II",
      "f": [["support_folder",500,1110]],
      "year": 1939,
      "cost": 1.5,
      "ic": "bolt",
      "leads": ["tech_signal_company3"],
      "cat": ["support_tech","signal_company_tech","electronics"],
      "fx": ["Signal Company: Initiative +0.12","Armored Signal Company: Initiative +0.08"]
    },
    {
      "id": "tech_signal_company3",
      "name": "Signal Company III",
      "f": [["support_folder",920,1110]],
      "year": 1942,
      "cost": 2.0,
      "ic": "bolt",
      "leads": ["tech_signal_company4"],
      "cat": ["support_tech","signal_company_tech","electronics"],
      "fx": ["Signal Company: Initiative +0.12","Armored Signal Company: Initiative +0.08"]
    },
    {
      "id": "tech_signal_company4",
      "name": "Signal Company IV",
      "f": [["support_folder",1340,1110]],
      "year": 1945,
      "cost": 2.0,
      "ic": "bolt",
      "cat": ["support_tech","signal_company_tech","electronics"],
      "fx": ["Signal Company: Initiative +0.12","Armored Signal Company: Initiative +0.08"]
    },
    {
      "id": "sp_armored_signal_tech",
      "name": "Armored Signal Company",
      "f": [["support_folder",360,1180]],
      "year": 1938,
      "cost": 2.0,
      "ic": "bolt",
      "cat": ["support_tech","signal_company_tech","electronics"],
      "fx": ["Unlocks modules: Command Center","Unlocks battalion: Armored Signal Company"]
    },
    {
      "id": "basic_train",
      "name": "Civilian Train",
      "f": [["support_folder",80,1350]],
      "year": 1910,
      "cost": 1.5,
      "ic": "road",
      "leads": ["wartime_train","armored_train"],
      "cat": ["train_tech"],
      "fx": ["Unlocks equipment: Civilian Train"]
    },
    {
      "id": "wartime_train",
      "name": "War Austerity Train",
      "f": [["support_folder",500,1350]],
      "year": 1939,
      "cost": 1.5,
      "ic": "road",
      "cat": ["train_tech"],
      "fx": ["Unlocks equipment: War Austerity Train"]
    },
    {
      "id": "armored_train",
      "name": "Armored Train",
      "f": [["support_folder",290,1490]],
      "year": 1936,
      "cost": 1.5,
      "ic": "road",
      "leads": ["railway_gun"],
      "cat": ["train_tech"],
      "fx": ["Unlocks equipment: Armored Train"]
    },
    {
      "id": "railway_gun",
      "name": "Railway Gun",
      "f": [["support_folder",290,1630]],
      "year": 1936,
      "cost": 1.5,
      "ic": "road",
      "cat": ["train_tech","artillery"],
      "fx": ["Unlocks equipment: Railway Gun","Unlocks modules: Hull-Mounted Railway Gun"]
    }
  ]
});
