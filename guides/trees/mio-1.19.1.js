/* Military industrial organisations for GER, facts only, extracted from the HoI4 1.19.1 game files
   (common/military_industrial_organization) with every DLC enabled. x/y = trait grid position, absolute. */
registerMIO({
  "patch": "1.19.1",
  "tag": "GER",
  "orgs": {
    "GER_porsche_organization": {
      "id": "GER_porsche_organization",
      "name": "Porsche",
      "types": ["mio_cat_eq_all_heavy_tank"],
      "ic": "gear",
      "headers": [{"t":"Engine and Drive System","x":0.5},{"t":"Chassis","x":4.0},{"t":"Guns and Turret","x":7.0}],
      "initial": {"name":"Heavy Tank Designer","fx":["Armor +5%","Reliability -10%","Military industrial organization research bonus +5%"]},
      "traits": [
        {"id":"generic_mio_trait_wide_tracks","name":"Wide Tracks","x":0.0,"y":0.0,"ic":"fort","fx":["Reliability +5%"]},
        {
          "id": "generic_mio_trait_fire_extinguishers",
          "name": "Fire Extinguishers",
          "x": 0.0,
          "y": 4.0,
          "ic": "tank",
          "fx": ["Reliability +5%","Breakthrough +2%"],
          "all": ["generic_mio_trait_wide_tracks"]
        },
        {
          "id": "generic_mio_trait_one_piece_hull_side_coverings",
          "name": "Modular Assembly",
          "x": 3.0,
          "y": 0.0,
          "ic": "tank",
          "fx": ["Production efficiency cap factor +5%"]
        },
        {
          "id": "generic_mio_trait_simplified_transmission_system",
          "name": "Simplified Transmission System",
          "x": 2.0,
          "y": 2.0,
          "ic": "tank",
          "fx": ["Production efficiency cap factor +5%","Production efficiency gain factor +5%"],
          "all": ["generic_mio_trait_wide_tracks","generic_mio_trait_one_piece_hull_side_coverings"]
        },
        {
          "id": "generic_mio_trait_improved_engine_output",
          "name": "Improved Engine Output",
          "x": 2.0,
          "y": 4.0,
          "ic": "road",
          "fx": ["Max speed +5%","Fuel use -5%"],
          "all": ["generic_mio_trait_simplified_transmission_system"]
        },
        {
          "id": "generic_mio_trait_sloping_armor",
          "name": "Sloped Armor",
          "x": 3.0,
          "y": 2.0,
          "ic": "tank",
          "fx": ["Armor +5%","Defense +5%"],
          "all": ["generic_mio_trait_one_piece_hull_side_coverings"]
        },
        {
          "id": "generic_mio_trait_improved_crew_ergonomics",
          "name": "Improved Crew Ergonomics",
          "x": 3.0,
          "y": 4.0,
          "ic": "swords",
          "fx": ["Breakthrough +5%"],
          "all": ["generic_mio_trait_sloping_armor"],
          "ex": ["generic_mio_trait_reinforced_construction"]
        },
        {
          "id": "generic_mio_trait_reinforced_construction",
          "name": "Reinforced Construction",
          "x": 4.0,
          "y": 4.0,
          "ic": "tank",
          "fx": ["Armor +5%"],
          "all": ["generic_mio_trait_sloping_armor"],
          "ex": ["generic_mio_trait_improved_crew_ergonomics"]
        },
        {"id":"generic_mio_trait_fully_cast_turret","name":"Fully Cast Turret","x":7.0,"y":0.0,"ic":"tank","fx":["Armor +5%","Defense +5%"]},
        {
          "id": "generic_mio_trait_commander_cupola",
          "name": "Commander's Cupola",
          "x": 6.0,
          "y": 2.0,
          "ic": "tank",
          "fx": ["Armor +5%","Defense +5%"],
          "all": ["generic_mio_trait_fully_cast_turret"],
          "ex": ["generic_mio_trait_simplified_layout"]
        },
        {
          "id": "generic_mio_trait_simplified_layout",
          "name": "Simplified Layout",
          "x": 8.0,
          "y": 2.0,
          "ic": "tank",
          "fx": ["Production efficiency gain factor +5%","Production resource penalty factor -10%"],
          "all": ["generic_mio_trait_fully_cast_turret"],
          "ex": ["generic_mio_trait_commander_cupola"]
        },
        {
          "id": "generic_mio_trait_high_explosive_shells",
          "name": "HE-Frag Shells",
          "x": 6.0,
          "y": 4.0,
          "ic": "tank",
          "fx": ["Soft attack +5%","Hard attack +3%"],
          "any": ["generic_mio_trait_commander_cupola","generic_mio_trait_simplified_layout"],
          "ex": ["generic_mio_trait_apcr_hvap_shells"]
        },
        {
          "id": "generic_mio_trait_apcr_hvap_shells",
          "name": "APCR/HVAP Ammunition",
          "x": 8.0,
          "y": 4.0,
          "ic": "swords",
          "fx": ["Piercing +5%","Hard attack +5%"],
          "any": ["generic_mio_trait_commander_cupola","generic_mio_trait_simplified_layout"],
          "ex": ["generic_mio_trait_high_explosive_shells"]
        },
        {
          "id": "GER_mio_trait_hoesch_facilities",
          "name": "Hoesch Facilities",
          "x": 9.0,
          "y": 0.0,
          "ic": "factory",
          "fx": ["Production capacity factor +5%"],
          "special": true
        },
        {
          "id": "GER_mio_trait_involve_porsche_in_special_projects",
          "name": "Involve Porsche in Special Projects",
          "x": 9.0,
          "y": 1.0,
          "ic": "gear",
          "fx": ["Military industrial organization research bonus +5%"],
          "special": true
        },
        {
          "id": "GER_mio_trait_multi_role_tanks",
          "name": "Multi-Role Tanks",
          "x": 5.0,
          "y": 0.0,
          "ic": "tank",
          "fx": ["Soft attack +5%","Air Attack: +5%"],
          "special": true
        },
        {
          "id": "GER_mio_trait_anti_tank_specialization",
          "name": "Anti-tank Specialization",
          "x": 4.0,
          "y": 1.0,
          "ic": "tank",
          "fx": ["Hard attack +5%","Piercing +5%"],
          "all": ["generic_mio_trait_one_piece_hull_side_coverings","GER_mio_trait_multi_role_tanks"],
          "special": true
        },
        {
          "id": "GER_mio_trait_unorthodox_transmission_design",
          "name": "Unorthodox Transmission Design",
          "x": 1.0,
          "y": 3.0,
          "ic": "tank",
          "fx": ["Max speed +5%","Reliability -2%"],
          "all": ["generic_mio_trait_simplified_transmission_system"],
          "for": ["armor"],
          "special": true
        }
      ]
    },
    "GER_henschel_organization": {
      "id": "GER_henschel_organization",
      "name": "Henschel",
      "types": ["armor"],
      "ic": "gear",
      "headers": [{"t":"Engine and Suspension","x":1.0},{"t":"Armament","x":3.0},{"t":"Production","x":6.0},{"t":"Armor","x":9.0}],
      "initial": {"name":"Infantry Tank Designer","fx":["Armor +5%","Max speed -5%"]},
      "traits": [
        {
          "id": "generic_mio_trait_single_engine",
          "name": "Durable Engines",
          "x": 0.0,
          "y": 0.0,
          "ic": "swords",
          "fx": ["Breakthrough +5%"],
          "ex": ["generic_mio_trait_dual_engine_redundancy"]
        },
        {
          "id": "generic_mio_trait_dual_engine_redundancy",
          "name": "Reliable Engines",
          "x": 2.0,
          "y": 0.0,
          "ic": "fort",
          "fx": ["Reliability +5%"],
          "ex": ["generic_mio_trait_single_engine"]
        },
        {
          "id": "generic_mio_trait_interleaved_track_wheels",
          "name": "Large Road Wheels",
          "x": 0.0,
          "y": 2.0,
          "ic": "road",
          "fx": ["Max speed +5%"],
          "any": ["generic_mio_trait_single_engine","generic_mio_trait_dual_engine_redundancy"],
          "ex": ["generic_mio_trait_overlapped_track_wheels"]
        },
        {
          "id": "generic_mio_trait_overlapped_track_wheels",
          "name": "Small Road Wheels",
          "x": 2.0,
          "y": 2.0,
          "ic": "fort",
          "fx": ["Defense +5%"],
          "any": ["generic_mio_trait_single_engine","generic_mio_trait_dual_engine_redundancy"],
          "ex": ["generic_mio_trait_interleaved_track_wheels"]
        },
        {
          "id": "generic_mio_trait_battle_tank_specifications",
          "name": "Breakthrough Tank Specifications",
          "x": 6.0,
          "y": 0.0,
          "ic": "tank",
          "fx": ["Armor +3%","Defense +3%"]
        },
        {
          "id": "generic_mio_trait_adaptable_turret_ring",
          "name": "Adaptable Turret Ring",
          "x": 3.0,
          "y": 1.0,
          "ic": "swords",
          "fx": ["Soft attack +3%","Hard attack +3%"],
          "any": ["generic_mio_trait_battle_tank_specifications"]
        },
        {
          "id": "generic_mio_trait_turret_sights",
          "name": "Improved Cupola Visibility",
          "x": 3.0,
          "y": 3.0,
          "ic": "swords",
          "fx": ["Soft attack +5%","Hard attack +5%","Breakthrough +5%"],
          "any": ["generic_mio_trait_adaptable_turret_ring"]
        },
        {
          "id": "generic_mio_trait_close_support_role",
          "name": "Close Support Role",
          "x": 5.0,
          "y": 1.0,
          "ic": "swords",
          "fx": ["Soft attack +5%"],
          "any": ["generic_mio_trait_battle_tank_specifications"],
          "ex": ["generic_mio_trait_anti_tank_role"]
        },
        {
          "id": "generic_mio_trait_anti_tank_role",
          "name": "Anti-Tank Role",
          "x": 7.0,
          "y": 1.0,
          "ic": "swords",
          "fx": ["Hard attack +5%","Piercing +10%"],
          "any": ["generic_mio_trait_battle_tank_specifications"],
          "ex": ["generic_mio_trait_close_support_role"]
        },
        {
          "id": "generic_mio_trait_adaptable_chassis",
          "name": "Adaptable Chassis",
          "x": 6.0,
          "y": 2.0,
          "ic": "tank",
          "fx": ["Production efficiency cap factor +5%","Production efficiency gain factor +5%"],
          "any": ["generic_mio_trait_close_support_role","generic_mio_trait_anti_tank_role"]
        },
        {
          "id": "generic_mio_trait_light_tank_specialization",
          "name": "Light Tank Specialization",
          "x": 5.0,
          "y": 4.0,
          "ic": "tank",
          "fx": ["Production cost factor -5%"],
          "any": ["GER_mio_trait_technical_superiority"],
          "ex": ["generic_mio_trait_medium_tank_specialization","generic_mio_trait_heavy_tank_specialization"],
          "for": ["mio_cat_eq_all_light_tank"]
        },
        {
          "id": "generic_mio_trait_medium_tank_specialization",
          "name": "Medium Tank Specialization",
          "x": 6.0,
          "y": 4.0,
          "ic": "tank",
          "fx": ["Production cost factor -5%"],
          "any": ["GER_mio_trait_technical_superiority"],
          "ex": ["generic_mio_trait_light_tank_specialization","generic_mio_trait_heavy_tank_specialization"],
          "for": ["mio_cat_eq_all_medium_tank"]
        },
        {
          "id": "generic_mio_trait_heavy_tank_specialization",
          "name": "Heavy Tank Specialization",
          "x": 7.0,
          "y": 4.0,
          "ic": "tank",
          "fx": ["Production cost factor -5%"],
          "any": ["GER_mio_trait_technical_superiority"],
          "ex": ["generic_mio_trait_light_tank_specialization","generic_mio_trait_medium_tank_specialization"],
          "for": ["mio_cat_eq_all_heavy_tank"]
        },
        {
          "id": "generic_mio_trait_thick_armor",
          "name": "Thick Armor",
          "x": 9.0,
          "y": 1.0,
          "ic": "tank",
          "fx": ["Armor +5%"],
          "any": ["generic_mio_trait_battle_tank_specifications"]
        },
        {
          "id": "generic_mio_trait_even_thicker_armor",
          "name": "Even Thicker Armor",
          "x": 9.0,
          "y": 3.0,
          "ic": "tank",
          "fx": ["Armor +10%"],
          "any": ["generic_mio_trait_thick_armor"]
        },
        {
          "id": "GER_mio_trait_hoesch_facilities",
          "name": "Hoesch Facilities",
          "x": 9.0,
          "y": 0.0,
          "ic": "factory",
          "fx": ["Production capacity factor +5%"],
          "special": true
        },
        {
          "id": "GER_mio_trait_involve_henschel_in_special_projects",
          "name": "Involve Henschel in Special Projects",
          "x": 8.0,
          "y": 0.0,
          "ic": "gear",
          "fx": ["Military industrial organization research bonus +5%"],
          "special": true
        },
        {
          "id": "GER_mio_trait_steel_wheel_design",
          "name": "Steel Wheel Design",
          "x": 1.0,
          "y": 3.0,
          "ic": "tank",
          "fx": ["Reliability +3%","Breakthrough +5%","Armor +5%","Production cost factor +3%"],
          "any": ["generic_mio_trait_interleaved_track_wheels","generic_mio_trait_overlapped_track_wheels"],
          "for": ["mio_cat_eq_all_heavy_tank"],
          "special": true
        },
        {
          "id": "GER_mio_trait_telescopic_sight",
          "name": "Telescopic Sight",
          "x": 3.0,
          "y": 4.0,
          "ic": "swords",
          "fx": ["Hard attack +5%","Piercing +5%","Breakthrough +5%","Production cost factor +3%"],
          "any": ["generic_mio_trait_turret_sights"],
          "for": ["mio_cat_eq_all_heavy_tank"],
          "special": true
        },
        {
          "id": "GER_mio_trait_technical_superiority",
          "name": "Technical Superiority",
          "x": 6.0,
          "y": 3.0,
          "ic": "tank",
          "fx": ["Defense +5%","Soft attack +5%","Armor +5%","Production cost factor +3%"],
          "any": ["generic_mio_trait_adaptable_chassis"],
          "special": true
        }
      ]
    },
    "GER_man_organization": {
      "id": "GER_man_organization",
      "name": "MAN",
      "types": ["mio_cat_eq_all_medium_tank"],
      "ic": "gear",
      "headers": [{"t":"Design","x":1.0},{"t":"Armor","x":4.0},{"t":"Engines","x":7.0}],
      "initial": {"name":"Medium Tank Designer","fx":["Production capacity factor +5%","Military industrial organization research bonus +5%"]},
      "traits": [
        {"id":"generic_mio_trait_power_traverse","name":"Power Traverse","x":1.0,"y":0.0,"ic":"swords","fx":["Breakthrough +5%"]},
        {
          "id": "generic_mio_trait_all_round_cupola",
          "name": "All-Round Cupola",
          "x": 1.0,
          "y": 1.0,
          "ic": "swords",
          "fx": ["Breakthrough +5%"],
          "all": ["generic_mio_trait_power_traverse"]
        },
        {
          "id": "generic_mio_trait_simplified_turret_design",
          "name": "Simplified Turret Design",
          "x": 1.0,
          "y": 2.0,
          "ic": "factory",
          "fx": ["Production capacity factor +5%"],
          "all": ["generic_mio_trait_all_round_cupola"]
        },
        {
          "id": "generic_mio_trait_specialist_shells",
          "name": "APBC Ammunition",
          "x": 0.0,
          "y": 3.0,
          "ic": "swords",
          "fx": ["Hard attack +5%"],
          "all": ["generic_mio_trait_simplified_turret_design"]
        },
        {
          "id": "generic_mio_trait_improved_gun_metallurgy",
          "name": "Improved Gun Metallurgy",
          "x": 2.0,
          "y": 3.0,
          "ic": "swords",
          "fx": ["Piercing +5%"],
          "all": ["generic_mio_trait_simplified_turret_design"]
        },
        {
          "id": "generic_mio_trait_advanced_shells",
          "name": "APCR Ammunition",
          "x": 1.0,
          "y": 4.0,
          "ic": "swords",
          "fx": ["Piercing +5%"],
          "any": ["generic_mio_trait_specialist_shells","generic_mio_trait_improved_gun_metallurgy"]
        },
        {
          "id": "generic_mio_trait_armor_steel_working",
          "name": "Armor Mass Production",
          "x": 4.0,
          "y": 0.0,
          "ic": "factory",
          "fx": ["Production capacity factor +5%"]
        },
        {
          "id": "generic_mio_trait_spaced_armor",
          "name": "Spaced Armor",
          "x": 3.0,
          "y": 2.0,
          "ic": "tank",
          "fx": ["Armor +5%"],
          "all": ["generic_mio_trait_armor_steel_working"],
          "ex": ["generic_mio_trait_crew_survival_layout","generic_mio_trait_sloped_side_armor"]
        },
        {
          "id": "generic_mio_trait_crew_survival_layout",
          "name": "Crew Survivability",
          "x": 4.0,
          "y": 2.0,
          "ic": "fort",
          "fx": ["Defense +5%"],
          "all": ["generic_mio_trait_armor_steel_working"],
          "ex": ["generic_mio_trait_spaced_armor","generic_mio_trait_sloped_side_armor"]
        },
        {
          "id": "generic_mio_trait_sloped_side_armor",
          "name": "Sloped Side Armor",
          "x": 5.0,
          "y": 2.0,
          "ic": "swords",
          "fx": ["Breakthrough +5%"],
          "all": ["generic_mio_trait_armor_steel_working"],
          "ex": ["generic_mio_trait_spaced_armor","generic_mio_trait_crew_survival_layout"]
        },
        {
          "id": "generic_mio_trait_truck_engines",
          "name": "Truck Engines",
          "x": 6.0,
          "y": 0.0,
          "ic": "fort",
          "fx": ["Reliability +5%"],
          "ex": ["generic_mio_trait_aircraft_engines"]
        },
        {
          "id": "generic_mio_trait_aircraft_engines",
          "name": "Aircraft Engines",
          "x": 8.0,
          "y": 0.0,
          "ic": "road",
          "fx": ["Max speed +5%"],
          "ex": ["generic_mio_trait_truck_engines"]
        },
        {
          "id": "generic_mio_trait_improved_suspension",
          "name": "Improved Suspension",
          "x": 7.0,
          "y": 1.0,
          "ic": "fort",
          "fx": ["Reliability +5%"],
          "any": ["generic_mio_trait_truck_engines","generic_mio_trait_aircraft_engines"]
        },
        {
          "id": "GER_mio_trait_hoesch_facilities",
          "name": "Hoesch Facilities",
          "x": 9.0,
          "y": 0.0,
          "ic": "factory",
          "fx": ["Production capacity factor +5%"],
          "special": true
        },
        {
          "id": "GER_mio_trait_high_velocity_armament",
          "name": "High Velocity Armament",
          "x": 4.0,
          "y": 4.0,
          "ic": "tank",
          "fx": ["Piercing +5%","Hard attack +5%"],
          "all": ["generic_mio_trait_improved_gun_metallurgy"],
          "any": ["generic_mio_trait_spaced_armor","generic_mio_trait_crew_survival_layout","generic_mio_trait_sloped_side_armor"],
          "special": true
        },
        {
          "id": "GER_mio_trait_schachtellaufwerk",
          "name": "Schachtellaufwerk",
          "x": 6.0,
          "y": 2.0,
          "ic": "tank",
          "fx": ["Breakthrough +3%","Reliability +3%"],
          "all": ["generic_mio_trait_improved_suspension"],
          "special": true
        },
        {
          "id": "GER_mio_trait_mobility_design_philosophy",
          "name": "Mobility Design Philosophy",
          "x": 8.0,
          "y": 2.0,
          "ic": "tank",
          "fx": ["Max speed +5%"],
          "all": ["generic_mio_trait_improved_suspension"],
          "special": true
        }
      ]
    },
    "GER_alkett_organization": {
      "id": "GER_alkett_organization",
      "name": "Alkett",
      "types": ["light_tank_artillery_chassis","medium_tank_artillery_chassis","heavy_tank_artillery_chassis","modern_tank_artillery_chassis"],
      "ic": "gear",
      "headers": [{"t":"Light Tank Department","x":1.0},{"t":"Medium Tank Department","x":4.0},{"t":"Heavy Tank Department","x":7.0}],
      "initial": {"name":"Assault Guns Manufacturer","fx":["Soft attack +5%","Armor -3%","Reliability +5%"]},
      "traits": [
        {
          "id": "generic_mio_trait_light_assault_gun_improvements",
          "name": "Infantry Escort Batteries",
          "x": 1.0,
          "y": 0.0,
          "ic": "tank",
          "fx": ["Soft attack +3%","Max speed +10%"],
          "for": ["light_tank_artillery_chassis"]
        },
        {
          "id": "generic_mio_trait_light_assault_gun_anti_tank_combo",
          "name": "Improved HEAP Ammunition",
          "x": 0.0,
          "y": 2.0,
          "ic": "swords",
          "fx": ["Hard attack +20%"],
          "all": ["generic_mio_trait_light_assault_gun_improvements"],
          "ex": ["generic_mio_trait_light_assault_gun_improved_cannon_stabilization"],
          "for": ["light_tank_artillery_chassis"]
        },
        {
          "id": "generic_mio_trait_light_assault_gun_improved_cannon_stabilization",
          "name": "Improved HE Ammunition",
          "x": 2.0,
          "y": 2.0,
          "ic": "swords",
          "fx": ["Soft attack +3%","Breakthrough +10%"],
          "all": ["generic_mio_trait_light_assault_gun_improvements"],
          "ex": ["generic_mio_trait_light_assault_gun_anti_tank_combo"],
          "for": ["light_tank_artillery_chassis"]
        },
        {
          "id": "generic_mio_trait_light_assault_gun_10_5_iefh_ammunition",
          "name": "Recoil Compensator Improvements",
          "x": 1.0,
          "y": 1.0,
          "ic": "fort",
          "fx": ["Soft attack +5%","Reliability +5%"],
          "all": ["generic_mio_trait_light_assault_gun_improvements"],
          "for": ["light_tank_artillery_chassis"]
        },
        {
          "id": "generic_mio_trait_medium_assault_gun_improvements",
          "name": "Assault Artillery",
          "x": 4.0,
          "y": 0.0,
          "ic": "tank",
          "fx": ["Armor +5%","Breakthrough +5%"],
          "for": ["medium_tank_artillery_chassis"]
        },
        {
          "id": "generic_mio_lighter_materials_assault_guns",
          "name": "Lighter Materials",
          "x": 3.0,
          "y": 1.0,
          "ic": "coin",
          "fx": ["Production resource penalty factor -15%"],
          "any": ["generic_mio_trait_medium_assault_gun_improvements","generic_mio_trait_light_assault_gun_improvements"],
          "ex": ["generic_mio_armor_hardening_process_assault_guns"]
        },
        {
          "id": "generic_mio_armor_hardening_process_assault_guns",
          "name": "Extensive Armor Hardening Processes",
          "x": 5.0,
          "y": 1.0,
          "ic": "tank",
          "fx": ["Defense +5%","Armor +10%"],
          "any": ["generic_mio_trait_medium_assault_gun_improvements","generic_mio_trait_heavy_assault_gun_improvements"],
          "ex": ["generic_mio_lighter_materials_assault_guns"]
        },
        {
          "id": "generic_mio_medium_assault_gun_low_slung_superstructure_and_fighting_compartment",
          "name": "Low-profile Superstructure",
          "x": 4.0,
          "y": 2.0,
          "ic": "tank",
          "fx": ["Defense +10%","Reliability +10%","Armor +5%"],
          "any": ["generic_mio_lighter_materials_assault_guns","generic_mio_armor_hardening_process_assault_guns"],
          "for": ["medium_tank_artillery_chassis","modern_tank_artillery_chassis"]
        },
        {
          "id": "generic_mio_medium_assault_gun_75_mm_43M_tank_gun",
          "name": "Binocular Optics",
          "x": 6.0,
          "y": 2.0,
          "ic": "tank",
          "fx": ["Soft attack +3%","Breakthrough +10%","Defense +5%"],
          "any": ["generic_mio_trait_medium_assault_gun_improvements","generic_mio_trait_heavy_assault_gun_improvements"]
        },
        {
          "id": "generic_mio_trait_heavy_assault_gun_improvements",
          "name": "Mobile Firebases",
          "x": 7.0,
          "y": 0.0,
          "ic": "tank",
          "fx": ["Max speed -10%","Soft attack +15%"],
          "for": ["heavy_tank_artillery_chassis"]
        },
        {
          "id": "generic_mio_trait_fully_cast_turret_assault_gun",
          "name": "Enclosed Superstructure",
          "x": 7.0,
          "y": 1.0,
          "ic": "tank",
          "fx": ["Armor +5%","Defense +5%"],
          "all": ["generic_mio_trait_heavy_assault_gun_improvements"],
          "for": ["heavy_tank_artillery_chassis","modern_tank_artillery_chassis"]
        },
        {
          "id": "generic_mio_trait_assault_gun_improved_tracks",
          "name": "Strengthened Tracks",
          "x": 8.0,
          "y": 2.0,
          "ic": "tank",
          "fx": ["Max speed +10%","Reliability +5%"],
          "all": ["generic_mio_trait_heavy_assault_gun_improvements"],
          "for": ["heavy_tank_artillery_chassis","modern_tank_artillery_chassis"]
        },
        {
          "id": "generic_mio_medium_assault_gun_rocket_tubes",
          "name": "Armoured SP Rocket Launcher",
          "x": 4.0,
          "y": 3.0,
          "ic": "tank",
          "fx": ["Soft attack +5%","Breakthrough +5%","Reliability -10%"],
          "all": ["generic_mio_medium_assault_gun_low_slung_superstructure_and_fighting_compartment"],
          "ex": ["GER_mio_trait_panzerjager"],
          "for": ["medium_tank_artillery_chassis"]
        },
        {
          "id": "GER_mio_trait_hoesch_facilities",
          "name": "Hoesch Facilities",
          "x": 9.0,
          "y": 0.0,
          "ic": "factory",
          "fx": ["Production capacity factor +5%"],
          "special": true
        },
        {
          "id": "GER_mio_trait_panzerjager",
          "name": "Panzerjäger",
          "x": 6.0,
          "y": 3.0,
          "ic": "tank",
          "fx": ["Piercing +5%","Hard attack +10%","Reliability -5%"],
          "all": ["generic_mio_medium_assault_gun_75_mm_43M_tank_gun"],
          "ex": ["generic_mio_medium_assault_gun_rocket_tubes"],
          "for": ["medium_tank_artillery_chassis","heavy_tank_artillery_chassis"],
          "special": true
        },
        {
          "id": "GER_mio_trait_armored_superstructure_specialist",
          "name": "Armored Superstructure Specialist",
          "x": 9.0,
          "y": 1.0,
          "ic": "tank",
          "fx": ["Armor +5%","Defense +5%"],
          "special": true
        },
        {
          "id": "GER_mio_trait_sturmhaubitze",
          "name": "Sturmhaubitze",
          "x": 9.0,
          "y": 2.0,
          "ic": "tank",
          "fx": ["Soft attack +3%","Hard attack +5%","Breakthrough +5%"],
          "for": ["medium_tank_artillery_chassis","heavy_tank_artillery_chassis"],
          "special": true
        }
      ]
    },
    "GER_daimler_benz_organization": {
      "id": "GER_daimler_benz_organization",
      "name": "Daimler-Benz",
      "types": ["mio_cat_eq_all_light_tank","mio_cat_eq_all_medium_tank"],
      "ic": "gear",
      "headers": [{"t":"Tank Construction","x":2.0},{"t":"Equipment and Specialization","x":6.0},{"t":"Armor","x":8.0}],
      "initial": {"name":"","fx":["Military industrial organization research bonus +5%"]},
      "traits": [
        {"id":"generic_mio_trait_simplified_suspension","name":"Simplified Suspension","x":0.0,"y":0.0,"ic":"fort","fx":["Reliability +5%"]},
        {"id":"generic_mio_trait_crew_ergonomics","name":"Crew Ergonomics","x":4.0,"y":0.0,"ic":"road","fx":["Max speed +2%","Defense +2%"]},
        {
          "id": "generic_mio_trait_improved_tracks",
          "name": "Improved Tracks",
          "x": 0.0,
          "y": 2.0,
          "ic": "road",
          "fx": ["Reliability +5%","Max speed +5%"],
          "any": ["generic_mio_trait_simplified_suspension"]
        },
        {
          "id": "generic_mio_trait_command_upgrades",
          "name": "Visibility Improvements",
          "x": 4.0,
          "y": 2.0,
          "ic": "swords",
          "fx": ["Breakthrough +5%"],
          "any": ["generic_mio_trait_crew_ergonomics"]
        },
        {
          "id": "generic_mio_trait_standardized_components",
          "name": "Standardized Components",
          "x": 2.0,
          "y": 1.0,
          "ic": "tank",
          "fx": ["Production efficiency gain factor +15%","Production resource need factor -15%"],
          "all": ["generic_mio_trait_simplified_suspension","generic_mio_trait_crew_ergonomics"]
        },
        {
          "id": "generic_mio_trait_improved_tooling",
          "name": "Improved Tooling",
          "x": 2.0,
          "y": 3.0,
          "ic": "tank",
          "fx": ["Production efficiency cap factor +10%"],
          "all": ["generic_mio_trait_improved_tracks","generic_mio_trait_command_upgrades","GER_mio_trait_versatile_chassis"]
        },
        {
          "id": "generic_mio_trait_mass_production",
          "name": "Mass Production",
          "x": 1.0,
          "y": 4.0,
          "ic": "tank",
          "fx": ["Production cost factor -5%","Production efficiency gain factor +10%"],
          "any": ["generic_mio_trait_improved_tooling"],
          "ex": ["generic_mio_trait_quality_improvements"]
        },
        {
          "id": "generic_mio_trait_quality_improvements",
          "name": "Quality Improvements",
          "x": 3.0,
          "y": 4.0,
          "ic": "tank",
          "fx": ["Armor +10%","Defense +10%"],
          "any": ["generic_mio_trait_improved_tooling"],
          "ex": ["generic_mio_trait_mass_production"]
        },
        {
          "id": "generic_mio_trait_defensive_equipment",
          "name": "Pintle-mounted Weapons",
          "x": 6.0,
          "y": 0.0,
          "ic": "swords",
          "fx": ["Soft attack +2%","Defense +2%"]
        },
        {
          "id": "generic_mio_trait_long_barreled_guns",
          "name": "Long-Barreled Guns",
          "x": 6.0,
          "y": 2.0,
          "ic": "swords",
          "fx": ["Piercing +5%","Hard attack +5%"],
          "all": ["generic_mio_trait_crew_ergonomics","generic_mio_trait_defensive_equipment"]
        },
        {
          "id": "generic_mio_trait_anti_tank_specialization",
          "name": "Anti-Tank Specialization",
          "x": 5.0,
          "y": 4.0,
          "ic": "swords",
          "fx": ["Armor +5%","Hard attack +5%"],
          "any": ["generic_mio_trait_long_barreled_guns"],
          "ex": ["generic_mio_trait_infantry_support_tanks"]
        },
        {
          "id": "generic_mio_trait_infantry_support_tanks",
          "name": "Infantry Support Tanks",
          "x": 7.0,
          "y": 4.0,
          "ic": "swords",
          "fx": ["Soft attack +5%","Production cost factor -2%"],
          "any": ["generic_mio_trait_long_barreled_guns"],
          "ex": ["generic_mio_trait_anti_tank_specialization"]
        },
        {
          "id": "GER_mio_trait_hotrolled_armor",
          "name": "Hot-rolled Armor",
          "x": 8.0,
          "y": 0.0,
          "ic": "tank",
          "fx": ["Production efficiency cap factor +5%","Production efficiency gain factor +5%"],
          "for": ["light_tank_chassis","medium_tank_chassis"],
          "special": true
        },
        {
          "id": "GER_mio_trait_multilayer_armour",
          "name": "Appliqué Armour",
          "x": 8.0,
          "y": 2.0,
          "ic": "tank",
          "fx": ["Armor +10%"],
          "any": ["GER_mio_trait_hotrolled_armor"],
          "for": ["light_tank_chassis","medium_tank_chassis"],
          "special": true
        },
        {
          "id": "GER_mio_trait_hoesch_facilities",
          "name": "Hoesch Facilities",
          "x": 9.0,
          "y": 0.0,
          "ic": "factory",
          "fx": ["Production capacity factor +5%"],
          "special": true
        },
        {
          "id": "GER_mio_trait_versatile_chassis",
          "name": "Versatile Chassis",
          "x": 2.0,
          "y": 2.0,
          "ic": "tank",
          "fx": ["Production capacity factor +5%"],
          "all": ["generic_mio_trait_standardized_components"],
          "special": true
        },
        {
          "id": "GER_mio_trait_tungsten_tipped_rounds",
          "name": "Tungsten Core Rounds",
          "x": 6.0,
          "y": 3.0,
          "ic": "tank",
          "fx": ["Piercing +5%","Hard attack +5%"],
          "all": ["generic_mio_trait_long_barreled_guns"],
          "special": true
        }
      ]
    },
    "GER_deschimag_organization": {
      "id": "GER_deschimag_organization",
      "name": "Deschimag",
      "types": ["screen_ship"],
      "ic": "gear",
      "headers": [{"t":"Systems","x":1.0},{"t":"Weapons","x":5.0}],
      "initial": {"name":"Escort Shipbuilders","fx":["Production capacity factor +5%","Military industrial organization research bonus +5%"]},
      "traits": [
        {
          "id": "generic_mio_trait_submarine_hunters",
          "name": "ASW Role Optimization",
          "x": 1.0,
          "y": 0.0,
          "ic": "ship",
          "fx": ["Sub detection +5%","Sub attack +5%"]
        },
        {
          "id": "generic_mio_trait_high_speed_mine_hunting_equipment",
          "name": "High Speed Minesweeping Equipment",
          "x": 1.0,
          "y": 2.0,
          "ic": "ship",
          "fx": ["Sub detection +5%","Mines sweeping +5%"],
          "any": ["generic_mio_trait_submarine_hunters"]
        },
        {
          "id": "generic_mio_trait_advanced_hydrodynamic_design",
          "name": "Advanced Hydrodynamic Design",
          "x": 1.0,
          "y": 4.0,
          "ic": "road",
          "fx": ["Speed +5%"],
          "any": ["generic_mio_trait_high_speed_mine_hunting_equipment"]
        },
        {"id":"generic_mio_trait_fleet_escorts","name":"Fleet Escort Role","x":5.0,"y":0.0,"ic":"ship","fx":["Anti air attack +5%","Lg attack +5%"]},
        {
          "id": "generic_mio_trait_anti_air_ships",
          "name": "Anti-Air Ships",
          "x": 3.0,
          "y": 2.0,
          "ic": "plane",
          "fx": ["Anti air attack +5%"],
          "any": ["generic_mio_trait_fleet_escorts"],
          "ex": ["generic_mio_trait_escort_in_force"]
        },
        {
          "id": "generic_mio_trait_escort_in_force",
          "name": "Escort in Force",
          "x": 5.0,
          "y": 2.0,
          "ic": "swords",
          "fx": ["Lg attack +5%"],
          "any": ["generic_mio_trait_fleet_escorts"],
          "ex": ["generic_mio_trait_anti_air_ships"]
        },
        {
          "id": "generic_mio_trait_anti_air_layout",
          "name": "Optimized Anti-Aircraft Firing Arcs",
          "x": 7.0,
          "y": 2.0,
          "ic": "plane",
          "fx": ["Anti air attack +5%"],
          "any": ["generic_mio_trait_fleet_escorts"]
        },
        {
          "id": "generic_mio_trait_gyro_stabilized_mounts",
          "name": "Gyro-Stabilized Mounts",
          "x": 7.0,
          "y": 3.0,
          "ic": "ship",
          "fx": ["Anti air attack +5%","Lg attack +5%"],
          "any": ["generic_mio_trait_anti_air_layout"]
        },
        {
          "id": "generic_mio_trait_improved_anti_air_gun_mounting",
          "name": "Improved Anti-Air Gun Mounting",
          "x": 3.0,
          "y": 4.0,
          "ic": "plane",
          "fx": ["Anti air attack +5%"],
          "any": ["generic_mio_trait_anti_air_ships","generic_mio_trait_escort_in_force"]
        },
        {
          "id": "generic_mio_trait_mass_production",
          "name": "Mass Production",
          "x": 4.0,
          "y": 4.0,
          "ic": "ship",
          "fx": ["Production capacity factor +5%"],
          "any": ["generic_mio_trait_anti_air_ships","generic_mio_trait_escort_in_force"]
        },
        {
          "id": "generic_mio_trait_improved_light_gun_mounting",
          "name": "Improved Light Gun Mounting",
          "x": 6.0,
          "y": 4.0,
          "ic": "ship",
          "fx": ["Anti air attack +5%","Lg attack +5%"],
          "any": ["generic_mio_trait_anti_air_ships","generic_mio_trait_escort_in_force"]
        },
        {
          "id": "GER_mio_trait_krupp_contacts",
          "name": "Krupp Contacts",
          "x": 5.0,
          "y": 3.0,
          "ic": "ship",
          "fx": ["Lg attack +5%","Lg armor piercing +5%"],
          "any": ["generic_mio_trait_anti_air_ships","generic_mio_trait_escort_in_force"],
          "special": true
        },
        {
          "id": "GER_mio_trait_armored_design",
          "name": "Armored Design",
          "x": 5.0,
          "y": 4.0,
          "ic": "tank",
          "fx": ["Armor +7%"],
          "all": ["GER_mio_trait_krupp_contacts"],
          "special": true
        },
        {
          "id": "GER_mio_trait_shipyard_conglomerate",
          "name": "Shipyard Conglomerate",
          "x": 8.0,
          "y": 0.0,
          "ic": "gear",
          "fx": ["Production capacity factor +5%"],
          "special": true
        }
      ]
    },
    "GER_germaniawerft_organization": {
      "id": "GER_germaniawerft_organization",
      "name": "Germaniawerft",
      "types": ["mio_cat_eq_all_battleship","mio_cat_eq_all_cruiser"],
      "ic": "gear",
      "headers": [{"t":"Systems","x":1.0},{"t":"Weapons","x":5.0}],
      "initial": {"name":"Battle Line Shipbuilders","fx":["Production capacity factor +5%","Military industrial organization research bonus +5%"]},
      "traits": [
        {
          "id": "generic_mio_trait_external_armor_belt",
          "name": "Vertical Armor Belt",
          "x": 0.0,
          "y": 0.0,
          "ic": "tank",
          "fx": ["Armor +5%"],
          "ex": ["generic_mio_trait_internal_armor_belt"]
        },
        {
          "id": "generic_mio_trait_internal_armor_belt",
          "name": "Inclined Armor Belt",
          "x": 1.0,
          "y": 0.0,
          "ic": "tank",
          "fx": ["Armor +15%","Production cost +5%"],
          "ex": ["generic_mio_trait_external_armor_belt"]
        },
        {
          "id": "generic_mio_trait_hardened_critical_components",
          "name": "Hardened Critical Components",
          "x": 1.0,
          "y": 2.0,
          "ic": "ship",
          "fx": ["Naval torpedo enemy critical chance factor -5%"],
          "any": ["generic_mio_trait_internal_armor_belt","generic_mio_trait_external_armor_belt"]
        },
        {
          "id": "generic_mio_trait_advanced_hydrodynamic_design",
          "name": "Advanced Hydrodynamic Design",
          "x": 0.0,
          "y": 4.0,
          "ic": "road",
          "fx": ["Speed +5%"],
          "any": ["generic_mio_trait_hardened_critical_components"],
          "ex": ["generic_mio_trait_advanced_armor_design"]
        },
        {
          "id": "generic_mio_trait_advanced_armor_design",
          "name": "Advanced Armor Design",
          "x": 1.0,
          "y": 4.0,
          "ic": "tank",
          "fx": ["Armor +5%"],
          "any": ["generic_mio_trait_hardened_critical_components"],
          "ex": ["generic_mio_trait_advanced_hydrodynamic_design"]
        },
        {
          "id": "generic_mio_trait_anti_air_layout",
          "name": "Optimized Anti-Aircraft Firing Arcs",
          "x": 3.0,
          "y": 0.0,
          "ic": "plane",
          "fx": ["Anti air attack +5%"]
        },
        {"id":"generic_mio_trait_secondary_battery_layout","name":"Secondary Battery Layout","x":5.0,"y":0.0,"ic":"swords","fx":["Lg attack +5%"]},
        {
          "id": "generic_mio_trait_gyro_stabilized_mounts",
          "name": "Gyro-Stabilized Mounts",
          "x": 4.0,
          "y": 1.0,
          "ic": "ship",
          "fx": ["Anti air attack +5%","Lg attack +5%"],
          "all": ["generic_mio_trait_anti_air_layout","generic_mio_trait_secondary_battery_layout"]
        },
        {
          "id": "generic_mio_trait_secondary_fire_director_control",
          "name": "Secondary Fire Director Control",
          "x": 4.0,
          "y": 2.0,
          "ic": "ship",
          "fx": ["Anti air attack +5%","Naval light gun hit chance factor +2.5%"],
          "any": ["generic_mio_trait_gyro_stabilized_mounts"]
        },
        {
          "id": "generic_mio_trait_combat_information_center",
          "name": "Combat Information Center",
          "x": 4.0,
          "y": 4.0,
          "ic": "gear",
          "fx": ["Max strength +10%"],
          "all": ["generic_mio_trait_hardened_critical_components","generic_mio_trait_secondary_fire_director_control"],
          "any": ["generic_mio_trait_super_heavy_shells","generic_mio_trait_semi_armor_piercing_shells","generic_mio_trait_high_velocity_guns"]
        },
        {
          "id": "generic_mio_trait_primary_battery_layout",
          "name": "Primary Battery Layout",
          "x": 7.0,
          "y": 0.0,
          "ic": "swords",
          "fx": ["Hg attack +5%"],
          "for": ["capital_ship"]
        },
        {
          "id": "generic_mio_trait_super_heavy_shells",
          "name": "Shatter-Resistant Cap",
          "x": 6.0,
          "y": 2.0,
          "ic": "swords",
          "fx": ["Hg attack +5%","Hg armor piercing +5%"],
          "any": ["generic_mio_trait_primary_battery_layout"],
          "ex": ["generic_mio_trait_semi_armor_piercing_shells","generic_mio_trait_high_velocity_guns"]
        },
        {
          "id": "generic_mio_trait_semi_armor_piercing_shells",
          "name": "Semi-Armor-Piercing Shells",
          "x": 7.0,
          "y": 2.0,
          "ic": "swords",
          "fx": ["Lg attack +5%","Lg armor piercing +5%"],
          "any": ["generic_mio_trait_primary_battery_layout"],
          "ex": ["generic_mio_trait_super_heavy_shells","generic_mio_trait_high_velocity_guns"]
        },
        {
          "id": "generic_mio_trait_high_velocity_guns",
          "name": "High Velocity Guns",
          "x": 8.0,
          "y": 2.0,
          "ic": "swords",
          "fx": ["Lg armor piercing +10%","Hg armor piercing +10%","Production cost +5%"],
          "any": ["generic_mio_trait_primary_battery_layout"],
          "ex": ["generic_mio_trait_super_heavy_shells","generic_mio_trait_semi_armor_piercing_shells"]
        },
        {
          "id": "GER_mio_trait_history_of_battleships",
          "name": "History of Battleships",
          "x": 2.0,
          "y": 0.0,
          "ic": "ship",
          "fx": ["Hg attack +5%","Production cost -5%"],
          "for": ["mio_cat_eq_all_battleship"],
          "special": true
        },
        {
          "id": "GER_mio_trait_krupp_guns",
          "name": "Krupp Guns",
          "x": 2.0,
          "y": 1.0,
          "ic": "ship",
          "fx": ["Hg attack +5%","Lg attack +5%"],
          "all": ["GER_mio_trait_history_of_battleships"],
          "special": true
        },
        {
          "id": "GER_mio_trait_h_class_battleships",
          "name": "H-Class Battleships",
          "x": 2.0,
          "y": 2.0,
          "ic": "ship",
          "fx": ["Hg armor piercing +5%","Speed +5%","Production cost -5%"],
          "all": ["GER_mio_trait_krupp_guns"],
          "for": ["mio_cat_eq_all_battleship"],
          "special": true
        }
      ]
    },
    "GER_blohm_und_voss_organization": {
      "id": "GER_blohm_und_voss_organization",
      "name": "Blohm & Voss",
      "types": ["capital_ship","screen_ship","submarine"],
      "ic": "gear",
      "headers": [{"t":"Long Range Focus","x":1.0},{"t":"High Speed Focus","x":7.0}],
      "initial": {"name":"Raiding Shipbuilders","fx":["Surface visibility -5%","Military industrial organization research bonus +5%"]},
      "traits": [
        {
          "id": "generic_mio_trait_long_range_raiding",
          "name": "Long Range Raiding",
          "x": 1.0,
          "y": 0.0,
          "ic": "plane",
          "fx": ["Naval range +5%","Fuel use +5%"],
          "ex": ["generic_mio_trait_high_speed_raiding"]
        },
        {
          "id": "generic_mio_trait_high_speed_raiding",
          "name": "High Speed Raiding",
          "x": 7.0,
          "y": 0.0,
          "ic": "road",
          "fx": ["Speed +5%","Fuel use +5%"],
          "ex": ["generic_mio_trait_long_range_raiding"]
        },
        {
          "id": "generic_mio_trait_diesel_powerplants",
          "name": "Diesel Powerplants",
          "x": 0.0,
          "y": 1.0,
          "ic": "road",
          "fx": ["Fuel use -5%"],
          "any": ["generic_mio_trait_long_range_raiding"]
        },
        {
          "id": "generic_mio_trait_high_speed_operation_stores",
          "name": "High-Speed Operation Stores",
          "x": 8.0,
          "y": 1.0,
          "ic": "gear",
          "fx": ["Speed +5%","Mines planting +5%"],
          "any": ["generic_mio_trait_high_speed_raiding"]
        },
        {
          "id": "generic_mio_trait_raiding_capital_ships",
          "name": "Raiding Capital Ships",
          "x": 2.0,
          "y": 2.0,
          "ic": "ship",
          "fx": ["Surface visibility -5%","Hg attack +5%"],
          "any": ["generic_mio_trait_long_range_raiding","generic_mio_trait_high_speed_raiding"],
          "for": ["capital_ship"]
        },
        {
          "id": "generic_mio_trait_long_range_engagement_ethos",
          "name": "Long Range Engagement Ethos",
          "x": 1.0,
          "y": 3.0,
          "ic": "ship",
          "fx": ["Surface visibility -5%","Hg attack +5%"],
          "any": ["generic_mio_trait_raiding_capital_ships"],
          "for": ["capital_ship"]
        },
        {
          "id": "generic_mio_trait_high_quality_optics",
          "name": "High-Quality Optics",
          "x": 3.0,
          "y": 3.0,
          "ic": "eye",
          "fx": ["Surface detection +5%"],
          "any": ["generic_mio_trait_raiding_capital_ships"],
          "ex": ["generic_mio_trait_spotting_tops"]
        },
        {
          "id": "generic_mio_trait_raider_escort_requirements",
          "name": "Raider Escort Requirements",
          "x": 1.0,
          "y": 4.0,
          "ic": "plane",
          "fx": ["Naval range +5%","Speed +5%"],
          "any": ["generic_mio_trait_long_range_engagement_ethos"],
          "for": ["screen_ship"]
        },
        {
          "id": "generic_mio_trait_unescorted_raider_requirements",
          "name": "Unescorted Raider Requirements",
          "x": 3.0,
          "y": 4.0,
          "ic": "swords",
          "fx": ["Lg attack +5%"],
          "all": ["generic_mio_trait_long_range_engagement_ethos","generic_mio_trait_high_quality_optics"],
          "for": ["capital_ship"]
        },
        {
          "id": "generic_mio_trait_raiding_cruisers",
          "name": "Raiding Cruisers",
          "x": 4.0,
          "y": 2.0,
          "ic": "gear",
          "fx": ["Surface visibility -5%"],
          "any": ["generic_mio_trait_long_range_raiding","generic_mio_trait_high_speed_raiding"],
          "for": ["ship_hull_cruiser"]
        },
        {
          "id": "generic_mio_trait_raiding_submarines",
          "name": "Raiding Submarines",
          "x": 6.0,
          "y": 2.0,
          "ic": "ship",
          "fx": ["Surface visibility -5%","Sub visibility -5%"],
          "any": ["generic_mio_trait_high_speed_raiding","generic_mio_trait_long_range_raiding"],
          "for": ["submarine"]
        },
        {
          "id": "generic_mio_trait_spotting_tops",
          "name": "Spotting Tops",
          "x": 5.0,
          "y": 3.0,
          "ic": "gear",
          "fx": ["Surface visibility -5%"],
          "all": ["generic_mio_trait_raiding_cruisers","generic_mio_trait_raiding_submarines"],
          "ex": ["generic_mio_trait_high_quality_optics"],
          "for": ["capital_ship","screen_ship"]
        },
        {
          "id": "generic_mio_trait_large_torpedo_banks",
          "name": "Large Torpedo Banks",
          "x": 7.0,
          "y": 3.0,
          "ic": "ship",
          "fx": ["Torpedo attack +5%"],
          "any": ["generic_mio_trait_raiding_submarines"]
        },
        {
          "id": "generic_mio_trait_mass_produced_raiders",
          "name": "Mass-Produced Raiders",
          "x": 6.0,
          "y": 4.0,
          "ic": "ship",
          "fx": ["Production capacity factor +5%"],
          "all": ["generic_mio_trait_spotting_tops","generic_mio_trait_large_torpedo_banks"]
        },
        {
          "id": "GER_mio_trait_heavy_raiders",
          "name": "Heavy Raiders",
          "x": 0.0,
          "y": 3.0,
          "ic": "plane",
          "fx": ["Surface visibility -5%","Speed +5%","Naval range +5%"],
          "all": ["generic_mio_trait_raiding_capital_ships"],
          "for": ["ship_hull_cruiser"],
          "special": true
        },
        {
          "id": "GER_mio_trait_o_class_battlecruisers",
          "name": "O-Class Battlecruisers",
          "x": 0.0,
          "y": 4.0,
          "ic": "plane",
          "fx": ["Hg armor piercing +5%","Speed +5%","Production cost -5%"],
          "all": ["GER_mio_trait_heavy_raiders"],
          "for": ["mio_cat_eq_all_cruiser"],
          "special": true
        },
        {
          "id": "GER_mio_trait_u_boat_yards",
          "name": "U-Boat Yards",
          "x": 8.0,
          "y": 3.0,
          "ic": "ship",
          "fx": ["Production cost -10%"],
          "all": ["generic_mio_trait_raiding_submarines"],
          "for": ["submarine"],
          "special": true
        },
        {
          "id": "GER_mio_trait_high_test_peroxide",
          "name": "High-Test Peroxide",
          "x": 8.0,
          "y": 4.0,
          "ic": "plane",
          "fx": ["Speed +10%"],
          "all": ["GER_mio_trait_u_boat_yards"],
          "for": ["submarine"],
          "special": true
        }
      ]
    },
    "GER_hdw_organization": {
      "id": "GER_hdw_organization",
      "name": "HDW",
      "types": ["ship_hull_submarine"],
      "ic": "gear",
      "headers": [{"t":"Stealth Focus","x":2.0},{"t":"Supremacy Focus","x":5.0}],
      "initial": {"name":"Submarine Builders","fx":["Sub visibility -5%","Military industrial organization research bonus +5%"]},
      "traits": [
        {
          "id": "generic_mio_trait_long_range_raiding",
          "name": "Long Range Raiding",
          "x": 2.0,
          "y": 0.0,
          "ic": "ship",
          "fx": ["Sub visibility -3%","Speed -1%"],
          "ex": ["generic_mio_trait_decalin_fueled_torpedo"]
        },
        {
          "id": "generic_mio_trait_decalin_fueled_torpedo",
          "name": "Decalin Fueled Torpedo",
          "x": 5.0,
          "y": 0.0,
          "ic": "ship",
          "fx": ["Torpedo attack +5%"],
          "ex": ["generic_mio_trait_long_range_raiding"]
        },
        {
          "id": "generic_mio_trait_efficient_fuel_engines",
          "name": "Efficient Fuel Engines",
          "x": 3.0,
          "y": 1.0,
          "ic": "ship",
          "fx": ["Naval range +5%"],
          "all": ["generic_mio_trait_long_range_raiding"]
        },
        {
          "id": "generic_mio_trait_highly_efficient_diesel_electric_propulsion_systems",
          "name": "Highly Efficient Diesel-Electric Propulsion Systems",
          "x": 3.0,
          "y": 2.0,
          "ic": "ship",
          "fx": ["Naval range +6%"],
          "any": ["generic_mio_trait_high_powered_engines","generic_mio_trait_efficient_fuel_engines"],
          "ex": ["generic_mio_trait_open_cycle_propulsion"]
        },
        {
          "id": "generic_mio_trait_high_powered_engines",
          "name": "High-Powered Engines",
          "x": 4.0,
          "y": 1.0,
          "ic": "road",
          "fx": ["Sub visibility +2%","Speed +5%"],
          "all": ["generic_mio_trait_decalin_fueled_torpedo"]
        },
        {
          "id": "generic_mio_trait_open_cycle_propulsion",
          "name": "Open-Cycle Propulsion",
          "x": 4.0,
          "y": 2.0,
          "ic": "road",
          "fx": ["Speed +5%"],
          "any": ["generic_mio_trait_high_powered_engines","generic_mio_trait_efficient_fuel_engines"],
          "ex": ["generic_mio_trait_highly_efficient_diesel_electric_propulsion_systems"]
        },
        {
          "id": "generic_mio_trait_experimental_anechoic_tiles",
          "name": "Experimental Anechoic Tiles",
          "x": 3.0,
          "y": 3.0,
          "ic": "ship",
          "fx": ["Surface visibility -5%","Sub visibility -5%","Production cost +5%"],
          "any": ["generic_mio_trait_highly_efficient_diesel_electric_propulsion_systems","generic_mio_trait_open_cycle_propulsion"]
        },
        {
          "id": "generic_mio_trait_improved_torpedo_detonators",
          "name": "Improved Torpedo Detonators",
          "x": 4.0,
          "y": 3.0,
          "ic": "ship",
          "fx": ["Torpedo attack +5%"],
          "any": ["generic_mio_trait_highly_efficient_diesel_electric_propulsion_systems","generic_mio_trait_open_cycle_propulsion"]
        },
        {
          "id": "generic_mio_trait_simplified_pressure_hull_design",
          "name": "Simplified Pressure Hull Design",
          "x": 4.0,
          "y": 4.0,
          "ic": "ship",
          "fx": ["Production capacity factor +10%"],
          "all": ["generic_mio_trait_experimental_anechoic_tiles","generic_mio_trait_improved_torpedo_detonators"]
        },
        {
          "id": "generic_mio_trait_advanced_periscope",
          "name": "Advanced Periscope",
          "x": 1.0,
          "y": 2.0,
          "ic": "eye",
          "fx": ["Surface detection +3%"],
          "all": ["generic_mio_trait_long_range_raiding"]
        },
        {
          "id": "generic_mio_trait_emergency_main_ballast_tank_blow",
          "name": "Emergency Main Ballast Tank Blow",
          "x": 0.0,
          "y": 3.0,
          "ic": "gear",
          "fx": ["Max strength +6%","Speed +1%"],
          "all": ["generic_mio_trait_advanced_periscope"]
        },
        {
          "id": "generic_mio_trait_radar_warning_receiver",
          "name": "Radar Warning Receiver",
          "x": 2.0,
          "y": 3.0,
          "ic": "ship",
          "fx": ["Surface detection -3%","Sub visibility -5%"],
          "all": ["generic_mio_trait_advanced_periscope"]
        },
        {
          "id": "generic_mio_trait_crash_dive_flood_tanks",
          "name": "Crash-Dive Flood Tanks",
          "x": 1.0,
          "y": 4.0,
          "ic": "gear",
          "fx": ["Max strength +8%","Sub visibility -1%"],
          "all": ["generic_mio_trait_emergency_main_ballast_tank_blow","generic_mio_trait_radar_warning_receiver"]
        },
        {
          "id": "generic_mio_trait_submarine_mass_production",
          "name": "Submarine Mass Production",
          "x": 5.0,
          "y": 2.0,
          "ic": "ship",
          "fx": ["Production capacity factor +7%"],
          "all": ["generic_mio_trait_decalin_fueled_torpedo"]
        },
        {
          "id": "generic_mio_trait_advanced_sonar",
          "name": "Advanced Sonar",
          "x": 7.0,
          "y": 2.0,
          "ic": "eye",
          "fx": ["Surface detection +6%","Sub visibility +2%"],
          "all": ["generic_mio_trait_decalin_fueled_torpedo"],
          "for": ["ship_hull_submarine"]
        },
        {
          "id": "generic_mio_trait_deck_guns",
          "name": "Deck Guns",
          "x": 6.0,
          "y": 3.0,
          "ic": "gear",
          "fx": ["Max strength +8%"],
          "all": ["generic_mio_trait_submarine_mass_production","generic_mio_trait_advanced_sonar"]
        },
        {
          "id": "generic_mio_trait_large_torpedo_banks",
          "name": "Large Torpedo Banks",
          "x": 8.0,
          "y": 3.0,
          "ic": "ship",
          "fx": ["Torpedo attack +5%"],
          "all": ["generic_mio_trait_advanced_sonar"]
        },
        {
          "id": "generic_mio_trait_high_capacity_mine_storage",
          "name": "High-Capacity Mine Storage",
          "x": 7.0,
          "y": 4.0,
          "ic": "gear",
          "fx": ["Mines planting +20%"],
          "any": ["generic_mio_trait_deck_guns","generic_mio_trait_large_torpedo_banks"]
        },
        {
          "id": "GER_mio_trait_ocean_u_boats",
          "name": "Oceangoing U-Boats",
          "x": 2.0,
          "y": 1.0,
          "ic": "plane",
          "fx": ["Sub visibility -3%","Naval range +5%"],
          "all": ["generic_mio_trait_long_range_raiding"],
          "special": true
        },
        {
          "id": "GER_mio_trait_kilian_submarine_bunker",
          "name": "Kilian Submarine Bunker",
          "x": 5.0,
          "y": 3.0,
          "ic": "ship",
          "fx": ["Production cost -5%","Production capacity factor +5%"],
          "all": ["generic_mio_trait_submarine_mass_production"],
          "special": true
        },
        {
          "id": "GER_mio_trait_saddle_tanks",
          "name": "Saddle Tanks",
          "x": 9.0,
          "y": 0.0,
          "ic": "ship",
          "fx": ["Naval range +7%","Production cost +2%"],
          "special": true
        },
        {
          "id": "GER_mio_trait_excellent_diving_performance",
          "name": "Excellent Diving Performance",
          "x": 9.0,
          "y": 1.0,
          "ic": "ship",
          "fx": ["Sub visibility -5%"],
          "all": ["GER_mio_trait_saddle_tanks"],
          "special": true
        },
        {
          "id": "GER_mio_trait_atlantic_raiders",
          "name": "Atlantic Raiders",
          "x": 9.0,
          "y": 2.0,
          "ic": "plane",
          "fx": ["Sub visibility -3%","Naval range +5%","Speed +3%"],
          "all": ["GER_mio_trait_excellent_diving_performance"],
          "special": true
        }
      ]
    },
    "GER_deutsche_werke_organization": {
      "id": "GER_deutsche_werke_organization",
      "name": "Deutsche Werke",
      "types": ["mio_cat_eq_all_carrier","mio_cat_eq_all_cruiser","mio_cat_eq_all_destroyer"],
      "ic": "gear",
      "headers": [{"t":"Systems","x":1.0},{"t":"Weapons","x":5.0}],
      "initial": {"name":"Task Force Shipbuilders","fx":["Max strength +5%","Military industrial organization research bonus +5%"]},
      "traits": [
        {
          "id": "generic_mio_trait_long_range_cruising",
          "name": "Long Range Cruising",
          "x": 0.0,
          "y": 0.0,
          "ic": "ship",
          "fx": ["Naval range +5%","Fuel use +5%"],
          "ex": ["generic_mio_trait_high_speed_cruising"]
        },
        {
          "id": "generic_mio_trait_high_speed_cruising",
          "name": "High Speed Cruising",
          "x": 2.0,
          "y": 0.0,
          "ic": "road",
          "fx": ["Speed +5%","Fuel use +5%"],
          "ex": ["generic_mio_trait_long_range_cruising"]
        },
        {
          "id": "generic_mio_trait_splinter_protection",
          "name": "Splinter Protection",
          "x": 1.0,
          "y": 2.0,
          "ic": "tank",
          "fx": ["Armor +5%"],
          "all": ["GER_mio_trait_raider_doctrine"],
          "any": ["generic_mio_trait_long_range_cruising","generic_mio_trait_high_speed_cruising"],
          "for": ["mio_cat_eq_all_carrier","mio_cat_eq_all_cruiser"]
        },
        {
          "id": "generic_mio_trait_transom_stern",
          "name": "Hydrodynamic Improvements",
          "x": 0.0,
          "y": 4.0,
          "ic": "road",
          "fx": ["Speed +5%","Fuel use -5%"],
          "any": ["generic_mio_trait_splinter_protection"],
          "ex": ["generic_mio_trait_underway_replenishment_equipment"]
        },
        {
          "id": "generic_mio_trait_underway_replenishment_equipment",
          "name": "Underway Replenishment Equipment",
          "x": 1.0,
          "y": 4.0,
          "ic": "road",
          "fx": ["Naval range +5%","Fuel use -5%"],
          "any": ["generic_mio_trait_splinter_protection"],
          "ex": ["generic_mio_trait_transom_stern"]
        },
        {
          "id": "generic_mio_trait_secondary_fire_director_control",
          "name": "Secondary Fire Director Control",
          "x": 5.0,
          "y": 0.0,
          "ic": "plane",
          "fx": ["Anti air attack +5%","Naval light gun hit chance factor +2.5%"],
          "for": ["screen_ship","carrier"]
        },
        {
          "id": "generic_mio_trait_flight_deck_edge_aa_mounts",
          "name": "Flight Deck Edge AA Mounts",
          "x": 4.0,
          "y": 1.0,
          "ic": "ship",
          "fx": ["Anti air attack +5%"],
          "any": ["generic_mio_trait_secondary_fire_director_control"],
          "for": ["mio_cat_eq_all_carrier"]
        },
        {
          "id": "generic_mio_trait_gyro_stabilized_mounts",
          "name": "Gyro-Stabilized Mounts",
          "x": 4.0,
          "y": 2.0,
          "ic": "swords",
          "fx": ["Anti air attack +5%","Lg attack +5%"],
          "any": ["generic_mio_trait_flight_deck_edge_aa_mounts"]
        },
        {
          "id": "generic_mio_trait_rapid_fire_guns",
          "name": "Rapid Fire Guns",
          "x": 6.0,
          "y": 1.0,
          "ic": "ship",
          "fx": ["Anti air attack +5%","Lg attack +5%"],
          "any": ["generic_mio_trait_secondary_fire_director_control"],
          "ex": ["generic_mio_trait_high_velocity_guns"]
        },
        {
          "id": "generic_mio_trait_advanced_fitting_works",
          "name": "Advanced Fitting Works",
          "x": 6.0,
          "y": 2.0,
          "ic": "ship",
          "fx": ["Production capacity factor +5%"],
          "any": ["generic_mio_trait_rapid_fire_guns","generic_mio_trait_high_velocity_guns"]
        },
        {
          "id": "generic_mio_trait_carrier_flight_operations_center",
          "name": "Advanced Firefighting Pumps",
          "x": 5.0,
          "y": 4.0,
          "ic": "gear",
          "fx": ["Max strength +10%"],
          "all": ["generic_mio_trait_gyro_stabilized_mounts","generic_mio_trait_advanced_fitting_works","generic_mio_trait_splinter_protection"]
        },
        {
          "id": "generic_mio_trait_primary_fire_director_control",
          "name": "Primary Fire Director Control",
          "x": 7.0,
          "y": 0.0,
          "ic": "swords",
          "fx": ["Hg attack +5%"],
          "for": ["mio_cat_eq_all_cruiser"]
        },
        {
          "id": "generic_mio_trait_high_velocity_guns",
          "name": "High Velocity Guns",
          "x": 7.0,
          "y": 1.0,
          "ic": "swords",
          "fx": ["Hg armor piercing +5%"],
          "any": ["generic_mio_trait_primary_fire_director_control"],
          "ex": ["generic_mio_trait_rapid_fire_guns"],
          "for": ["mio_cat_eq_all_cruiser"]
        },
        {
          "id": "GER_mio_trait_foreign_influences",
          "name": "Foreign Influences",
          "x": 9.0,
          "y": 0.0,
          "ic": "gear",
          "fx": ["Military industrial organization research bonus +5%"],
          "special": true
        },
        {
          "id": "GER_mio_trait_raider_doctrine",
          "name": "Raider Doctrine",
          "x": 1.0,
          "y": 1.0,
          "ic": "ship",
          "fx": ["Speed +5%","Surface visibility -5%"],
          "any": ["generic_mio_trait_long_range_cruising","generic_mio_trait_high_speed_cruising"],
          "for": ["screen_ship"],
          "special": true
        },
        {
          "id": "GER_mio_trait_fast_raiders",
          "name": "Fast Raiders",
          "x": 2.0,
          "y": 3.0,
          "ic": "plane",
          "fx": ["Speed +5%","Naval range +5%"],
          "any": ["generic_mio_trait_splinter_protection"],
          "for": ["screen_ship"],
          "special": true
        },
        {
          "id": "GER_mio_trait_carrier_raiders",
          "name": "Carrier Raiders",
          "x": 2.0,
          "y": 4.0,
          "ic": "plane",
          "fx": ["Speed +5%","Naval range +5%","Surface visibility -5%"],
          "all": ["GER_mio_trait_fast_raiders"],
          "for": ["mio_cat_eq_all_carrier"],
          "special": true
        }
      ]
    },
    "GER_kriegsmarinewerft_wilhelmshaven_organization": {
      "id": "GER_kriegsmarinewerft_wilhelmshaven_organization",
      "name": "Marinewerft Wilhelmshaven",
      "types": ["mio_cat_eq_all_battleship","mio_cat_eq_all_cruiser"],
      "ic": "gear",
      "headers": [{"t":"Protection","x":3.0},{"t":"Weapons","x":8.0}],
      "initial": {"name":"Refurbishment Repair Manufacturer","fx":["Max strength +3%","Military industrial organization research bonus +1%"]},
      "traits": [
        {"id":"generic_mio_trait_heavy_armored_hull","name":"Heavy Armored Hull","x":1.0,"y":0.0,"ic":"tank","fx":["Armor +3%"]},
        {
          "id": "generic_mio_trait_isolated_firemains",
          "name": "Isolated Firemains",
          "x": 0.0,
          "y": 2.0,
          "ic": "ship",
          "fx": ["Naval torpedo damage reduction factor +3%"],
          "all": ["generic_mio_trait_heavy_armored_hull"]
        },
        {
          "id": "generic_mio_trait_counter_flooding_system",
          "name": "Counter Flooding Systems",
          "x": 3.0,
          "y": 2.0,
          "ic": "ship",
          "fx": ["Naval torpedo enemy critical chance factor -5%"],
          "all": ["generic_mio_trait_heavy_armored_hull"]
        },
        {
          "id": "generic_mio_trait_anti_torpedo_bulge",
          "name": "Anti-Torpedo Bulge",
          "x": 1.0,
          "y": 4.0,
          "ic": "ship",
          "fx": ["Naval torpedo enemy critical chance factor -5%","Naval torpedo damage reduction factor +8%"],
          "all": ["generic_mio_trait_counter_flooding_system","generic_mio_trait_isolated_firemains","generic_mio_trait_high_powered_steering"]
        },
        {"id":"generic_mio_trait_foam_fire_extinguishers","name":"Foam Fire Extinguishers","x":6.0,"y":0.0,"ic":"fort","fx":["Reliability +3%"]},
        {
          "id": "generic_mio_trait_bulkhead_shoring_procedure",
          "name": "Bulkhead Shoring Procedure",
          "x": 6.0,
          "y": 1.0,
          "ic": "tank",
          "fx": ["Reliability +1%","Armor +2%"],
          "all": ["generic_mio_trait_foam_fire_extinguishers"]
        },
        {
          "id": "generic_mio_trait_high_powered_steering",
          "name": "High Powered Steering",
          "x": 5.0,
          "y": 2.0,
          "ic": "tank",
          "fx": ["Reliability +1%","Armor +2%"],
          "all": ["generic_mio_trait_bulkhead_shoring_procedure"]
        },
        {
          "id": "generic_mio_trait_flooding_boundries",
          "name": "Flooding Boundaries",
          "x": 6.0,
          "y": 2.0,
          "ic": "gear",
          "fx": ["Max strength +3%"],
          "all": ["generic_mio_trait_bulkhead_shoring_procedure"]
        },
        {
          "id": "generic_mio_trait_protected_pumps",
          "name": "Protected Pumps",
          "x": 6.0,
          "y": 3.0,
          "ic": "gear",
          "fx": ["Max strength +5%"],
          "all": ["generic_mio_trait_flooding_boundries"]
        },
        {
          "id": "generic_mio_trait_advanced_scanners",
          "name": "Advanced Scanners",
          "x": 7.0,
          "y": 1.0,
          "ic": "eye",
          "fx": ["Sub detection +5%","Surface detection +5%"],
          "all": ["generic_mio_trait_foam_fire_extinguishers"]
        },
        {
          "id": "generic_mio_trait_high_velocity_guns",
          "name": "High Velocity Guns",
          "x": 7.0,
          "y": 2.0,
          "ic": "ship",
          "fx": ["Hg armor piercing +3%"],
          "all": ["generic_mio_trait_advanced_scanners"],
          "for": ["capital_ship"]
        },
        {
          "id": "generic_mio_trait_capital_destroyer_shells",
          "name": "Capital Destroyer Shells",
          "x": 7.0,
          "y": 4.0,
          "ic": "ship",
          "fx": ["Hg armor piercing +5%","Hg attack +10%","Naval range -15%","Speed -8%"],
          "all": ["generic_mio_trait_high_velocity_guns"],
          "ex": ["generic_mio_trait_deck_guns","generic_mio_trait_naval_all_purpose_defense_systems"],
          "for": ["capital_ship"]
        },
        {
          "id": "generic_mio_trait_deck_guns",
          "name": "Deck Guns",
          "x": 8.0,
          "y": 4.0,
          "ic": "plane",
          "fx": ["Anti air attack +6%"],
          "all": ["generic_mio_trait_high_velocity_guns"],
          "ex": ["generic_mio_trait_capital_destroyer_shells","generic_mio_trait_naval_all_purpose_defense_systems"]
        },
        {
          "id": "generic_mio_trait_naval_all_purpose_defense_systems",
          "name": "All-Purpose Defense Systems",
          "x": 9.0,
          "y": 4.0,
          "ic": "tank",
          "fx": ["Anti air attack +3%","Armor +3%","Lg attack +3%","Naval range -5%","Speed -4%"],
          "all": ["generic_mio_trait_high_velocity_guns"],
          "ex": ["generic_mio_trait_capital_destroyer_shells","generic_mio_trait_deck_guns"],
          "for": ["capital_ship"]
        },
        {
          "id": "GER_mio_trait_historical_shipyard",
          "name": "Historical Shipyard",
          "x": 8.0,
          "y": 0.0,
          "ic": "gear",
          "fx": ["Production capacity factor +7%"],
          "special": true
        },
        {
          "id": "GER_mio_trait_upgrade_panzerschiffs",
          "name": "Upgrade Panzerschiffs",
          "x": 9.0,
          "y": 0.0,
          "ic": "plane",
          "fx": ["Speed +5%","Surface visibility -5%"],
          "for": ["ship_hull_cruiser"],
          "special": true
        },
        {
          "id": "GER_mio_trait_innovative_battleship_designs",
          "name": "Innovative Battleship Designs",
          "x": 9.0,
          "y": 1.0,
          "ic": "plane",
          "fx": ["Speed +5%","Surface visibility -3%","Naval torpedo enemy critical chance factor -5%"],
          "all": ["GER_mio_trait_upgrade_panzerschiffs"],
          "for": ["capital_ship"],
          "special": true
        }
      ]
    },
    "GER_messerschmitt_organization": {
      "id": "GER_messerschmitt_organization",
      "name": "Messerschmitt",
      "types": ["mio_cat_eq_only_light_fighter","small_plane_cas_airframe","cv_small_plane_cas_airframe"],
      "ic": "gear",
      "headers": [{"t":"Production","x":1.0},{"t":"Engines","x":3.0},{"t":"Wings","x":5.0},{"t":"Weapons","x":7.0}],
      "initial": {"name":"Light Aircraft Designer","fx":["Agility: +5%","Max speed +5%","Air Attack: +5%"]},
      "traits": [
        {
          "id": "generic_mio_trait_expanded_production_facilities",
          "name": "Expanded Production Facilities",
          "x": 2.0,
          "y": 0.0,
          "ic": "plane",
          "fx": ["Production efficiency gain factor +5%"]
        },
        {
          "id": "generic_mio_trait_fixed_tailwheels",
          "name": "Fixed Tailwheels",
          "x": 1.0,
          "y": 1.0,
          "ic": "fort",
          "fx": ["Reliability +5%"],
          "all": ["generic_mio_trait_expanded_production_facilities"]
        },
        {
          "id": "generic_mio_trait_removable_wings",
          "name": "Removable Wings",
          "x": 1.0,
          "y": 3.0,
          "ic": "plane",
          "fx": ["Reliability +5%","Production efficiency gain factor +5%"],
          "all": ["generic_mio_trait_fixed_tailwheels"]
        },
        {
          "id": "generic_mio_trait_liquid_cooled_engines",
          "name": "Liquid-Cooled Engines",
          "x": 4.0,
          "y": 0.0,
          "ic": "plane",
          "fx": ["Max speed +5%","Agility: +5%"]
        },
        {
          "id": "generic_mio_trait_maritime_duties",
          "name": "Maritime Duties",
          "x": 3.0,
          "y": 1.0,
          "ic": "ship",
          "fx": ["Range: +5%","Naval strike attack +5%"],
          "all": ["generic_mio_trait_liquid_cooled_engines"]
        },
        {
          "id": "generic_mio_trait_advanced_aerodynamics",
          "name": "Advanced Aerodynamics",
          "x": 6.0,
          "y": 0.0,
          "ic": "plane",
          "fx": ["Max speed +5%","Agility: +5%"]
        },
        {
          "id": "generic_mio_trait_fuselage_ordinance_rack",
          "name": "Fuselage Ordinance Rack",
          "x": 7.0,
          "y": 1.0,
          "ic": "plane",
          "fx": ["Max speed +5%","Agility: +5%"],
          "all": ["generic_mio_trait_advanced_aerodynamics"]
        },
        {
          "id": "generic_mio_trait_ongoing_developmental_upgrades",
          "name": "Ongoing Developmental Upgrades",
          "x": 5.0,
          "y": 1.0,
          "ic": "gear",
          "fx": ["Production efficiency gain factor +5%","Military industrial organization research bonus +5%"],
          "all": ["generic_mio_trait_liquid_cooled_engines","generic_mio_trait_advanced_aerodynamics"]
        },
        {
          "id": "generic_mio_trait_heavier_airframe",
          "name": "Heavier Airframe",
          "x": 3.0,
          "y": 2.0,
          "ic": "plane",
          "fx": ["Air Attack: +5%","Ground Attack: +5%","Naval strike attack +5%","Air Defense: +5%"],
          "all": ["generic_mio_trait_ongoing_developmental_upgrades"],
          "ex": ["generic_mio_trait_maximum_wing_loads","generic_mio_trait_gun_pods"]
        },
        {
          "id": "generic_mio_trait_maximum_wing_loads",
          "name": "Maximum Wing Loads",
          "x": 5.0,
          "y": 2.0,
          "ic": "plane",
          "fx": ["Max speed +5%","Agility: +5%"],
          "all": ["generic_mio_trait_ongoing_developmental_upgrades"],
          "ex": ["generic_mio_trait_heavier_airframe","generic_mio_trait_gun_pods"]
        },
        {
          "id": "generic_mio_trait_gun_pods",
          "name": "Gun Pods",
          "x": 7.0,
          "y": 2.0,
          "ic": "plane",
          "fx": ["Ground Attack: +10%","Agility: -3%","Air Attack: +5%"],
          "all": ["generic_mio_trait_ongoing_developmental_upgrades"],
          "ex": ["generic_mio_trait_heavier_airframe","generic_mio_trait_maximum_wing_loads"]
        },
        {
          "id": "generic_mio_trait_multi_purpose_aircraft",
          "name": "Multi-Purpose Aircraft",
          "x": 3.0,
          "y": 3.0,
          "ic": "plane",
          "fx": ["Air Attack: +5%","Ground Attack: +5%","Naval strike attack +5%"],
          "any": ["generic_mio_trait_heavier_airframe","generic_mio_trait_maximum_wing_loads","generic_mio_trait_gun_pods"],
          "ex": ["generic_mio_trait_fighter_specialization","generic_mio_trait_close_air_support_specialization"]
        },
        {
          "id": "generic_mio_trait_fighter_specialization",
          "name": "Fighter Specialization",
          "x": 5.0,
          "y": 3.0,
          "ic": "plane",
          "fx": ["Air Attack: +5%","Agility: +3%","Max speed +5%"],
          "any": ["generic_mio_trait_heavier_airframe","generic_mio_trait_maximum_wing_loads","generic_mio_trait_gun_pods"],
          "ex": ["generic_mio_trait_multi_purpose_aircraft","generic_mio_trait_close_air_support_specialization"]
        },
        {
          "id": "generic_mio_trait_close_air_support_specialization",
          "name": "Close Air Support Specialization",
          "x": 7.0,
          "y": 3.0,
          "ic": "plane",
          "fx": ["Ground Attack: +5%","Air Defense: +5%"],
          "any": ["generic_mio_trait_heavier_airframe","generic_mio_trait_maximum_wing_loads","generic_mio_trait_gun_pods"],
          "ex": ["generic_mio_trait_multi_purpose_aircraft","generic_mio_trait_fighter_specialization"]
        },
        {
          "id": "generic_mio_trait_flexible_design",
          "name": "Flexible Design",
          "x": 3.0,
          "y": 4.0,
          "ic": "fort",
          "fx": ["Range: +5%","Air Defense: +5%","Air Attack: +2%","Ground Attack: +2%"],
          "all": ["generic_mio_trait_multi_purpose_aircraft"]
        },
        {
          "id": "generic_mio_trait_fighter_expertise",
          "name": "Fighter Expertise",
          "x": 5.0,
          "y": 4.0,
          "ic": "road",
          "fx": ["Range: +5%","Max speed +5%","Air Attack: +5%"],
          "all": ["generic_mio_trait_fighter_specialization"]
        },
        {
          "id": "generic_mio_trait_close_air_support_expertise",
          "name": "Close Air Support Expertise",
          "x": 7.0,
          "y": 4.0,
          "ic": "ship",
          "fx": ["Ground Attack: +5%","Range: +5%","Air Defense: +5%"],
          "all": ["generic_mio_trait_close_air_support_specialization"]
        },
        {
          "id": "GER_mio_trait_maintenance_first_design",
          "name": "Maintenance-First Design",
          "x": 0.0,
          "y": 1.0,
          "ic": "plane",
          "fx": ["Reliability +5%","Production efficiency gain factor +5%"],
          "all": ["generic_mio_trait_expanded_production_facilities"],
          "special": true
        },
        {
          "id": "GER_mio_trait_fuselage_based_weapons",
          "name": "Fuselage-Based Weapons",
          "x": 8.0,
          "y": 3.0,
          "ic": "plane",
          "fx": ["Air Attack: +5%","Agility: +5%"],
          "any": ["generic_mio_trait_heavier_airframe","generic_mio_trait_maximum_wing_loads","generic_mio_trait_gun_pods"],
          "special": true
        },
        {
          "id": "GER_mio_trait_hamburger_flugzeugbau",
          "name": "Hamburger Flugzeugbau",
          "x": 9.0,
          "y": 0.0,
          "ic": "factory",
          "fx": ["Production capacity factor +5%"],
          "special": true
        },
        {
          "id": "GER_mio_trait_aerodynamic_research_insitute",
          "name": "Integrated Aerodynamic Research Institute Department",
          "x": 8.0,
          "y": 0.0,
          "ic": "gear",
          "fx": ["Military industrial organization research bonus +10%"],
          "special": true
        },
        {
          "id": "GER_mio_trait_amerikabomber_learnings",
          "name": "Amerikabomber Learnings",
          "x": 9.0,
          "y": 4.0,
          "ic": "plane",
          "fx": ["Range: +10%"],
          "for": ["mio_cat_eq_only_light_fighter"],
          "special": true
        }
      ]
    },
    "GER_junkers_organization": {
      "id": "GER_junkers_organization",
      "name": "Junkers",
      "types": ["small_plane_cas_airframe","cv_small_plane_cas_airframe"],
      "ic": "gear",
      "headers": [{"t":"Production","x":1.0},{"t":"Engines","x":3.0},{"t":"Wings","x":5.0},{"t":"Weapons","x":7.0}],
      "initial": {"name":"CAS Aircraft Designer","fx":["Ground Attack: +5%","Max speed -3%"]},
      "traits": [
        {
          "id": "generic_mio_trait_selectional_construction",
          "name": "Selectional Construction",
          "x": 0.0,
          "y": 0.0,
          "ic": "plane",
          "fx": ["Production efficiency gain factor +5%"]
        },
        {"id":"generic_mio_trait_low_altitude_attacks","name":"Low Altitude Attacks","x":2.0,"y":0.0,"ic":"fort","fx":["Air Defense: +5%"]},
        {
          "id": "generic_mio_trait_canopies_and_firewalls",
          "name": "Canopies and Firewalls",
          "x": 1.0,
          "y": 0.0,
          "ic": "fort",
          "fx": ["Air Defense: +5%","Reliability +5%"]
        },
        {
          "id": "generic_mio_trait_automatic_pull_out",
          "name": "Automatic Pull-Out",
          "x": 2.0,
          "y": 1.0,
          "ic": "plane",
          "fx": ["Ground Attack: +5%","Reliability +5%"],
          "all": ["generic_mio_trait_canopies_and_firewalls"]
        },
        {
          "id": "generic_mio_trait_integrated_armor_designs",
          "name": "Integrated Armor Designs",
          "x": 1.0,
          "y": 2.0,
          "ic": "fort",
          "fx": ["Air Defense: +5%"],
          "all": ["generic_mio_trait_canopies_and_firewalls"]
        },
        {
          "id": "generic_mio_trait_gull_wings",
          "name": "Gull Wings",
          "x": 4.0,
          "y": 0.0,
          "ic": "plane",
          "fx": ["Ground Attack: +10%"],
          "ex": ["generic_mio_trait_reinforced_wings"]
        },
        {
          "id": "generic_mio_trait_reinforced_wings",
          "name": "Reinforced Wings",
          "x": 6.0,
          "y": 0.0,
          "ic": "plane",
          "fx": ["Ground Attack: +3%","Air Attack: +3%","Air Defense: +3%"],
          "ex": ["generic_mio_trait_gull_wings"]
        },
        {
          "id": "generic_mio_trait_heavily_armed_aircraft",
          "name": "Heavily Armed Aircraft",
          "x": 5.0,
          "y": 1.0,
          "ic": "plane",
          "fx": ["Air Attack: +5%","Ground Attack: +5%"],
          "any": ["generic_mio_trait_gull_wings","generic_mio_trait_reinforced_wings"]
        },
        {
          "id": "generic_mio_trait_air_brakes",
          "name": "Air Brakes",
          "x": 4.0,
          "y": 2.0,
          "ic": "plane",
          "fx": ["Ground Attack: +5%"],
          "all": ["generic_mio_trait_gull_wings"]
        },
        {
          "id": "generic_mio_trait_wingborne_fuel_tanks",
          "name": "Wingborne Fuel Tanks",
          "x": 6.0,
          "y": 2.0,
          "ic": "ship",
          "fx": ["Range: +5%"],
          "all": ["generic_mio_trait_reinforced_wings"]
        },
        {
          "id": "generic_mio_trait_bombs",
          "name": "Bombs",
          "x": 4.0,
          "y": 4.0,
          "ic": "plane",
          "fx": ["Ground Attack: +10%"],
          "any": ["generic_mio_trait_air_brakes","generic_mio_trait_wingborne_fuel_tanks"],
          "ex": ["generic_mio_trait_rockets"]
        },
        {
          "id": "generic_mio_trait_rockets",
          "name": "Rockets",
          "x": 6.0,
          "y": 4.0,
          "ic": "plane",
          "fx": ["Ground Attack: +5%","Agility: +5%"],
          "any": ["generic_mio_trait_wingborne_fuel_tanks","generic_mio_trait_air_brakes"],
          "ex": ["generic_mio_trait_bombs"]
        },
        {"id":"generic_mio_heat_bombs","name":"HEAT Bombs","x":7.0,"y":0.0,"ic":"plane","fx":["Ground Attack: +5%"]},
        {
          "id": "generic_mio_cluster_bombs",
          "name": "Cluster Bombs",
          "x": 7.0,
          "y": 2.0,
          "ic": "plane",
          "fx": ["Ground Attack: +5%"],
          "all": ["generic_mio_heat_bombs"]
        },
        {"id":"GER_mio_trait_psychological_warfare","name":"Psychological Warfare","x":8.0,"y":0.0,"ic":"road","fx":["Fuel use -5%"],"special":true},
        {
          "id": "GER_mio_trait_90_degree_dives",
          "name": "90 Degree Dives",
          "x": 2.0,
          "y": 2.0,
          "ic": "plane",
          "fx": ["Ground Attack: +5%"],
          "all": ["generic_mio_trait_automatic_pull_out"],
          "special": true
        },
        {
          "id": "GER_mio_trait_hamburger_flugzeugbau",
          "name": "Hamburger Flugzeugbau",
          "x": 9.0,
          "y": 0.0,
          "ic": "factory",
          "fx": ["Production capacity factor +5%"],
          "special": true
        },
        {
          "id": "GER_mio_trait_aerodynamic_research_insitute",
          "name": "Integrated Aerodynamic Research Institute Department",
          "x": 8.0,
          "y": 1.0,
          "ic": "gear",
          "fx": ["Military industrial organization research bonus +10%"],
          "special": true
        },
        {
          "id": "GER_mio_trait_amerikabomber_learnings",
          "name": "Amerikabomber Learnings",
          "x": 9.0,
          "y": 4.0,
          "ic": "plane",
          "fx": ["Range: +5%","Ground Attack: +5%"],
          "for": ["small_plane_cas_airframe"],
          "special": true
        }
      ]
    },
    "GER_focke_wulf_organization": {
      "id": "GER_focke_wulf_organization",
      "name": "Focke-Wulf",
      "types": ["mio_cat_eq_all_small_plane","mio_cat_eq_all_medium_plane","transport_plane_equipment"],
      "ic": "gear",
      "headers": [{"t":"Production","x":1.0},{"t":"Engines","x":3.0},{"t":"Wings","x":5.0},{"t":"Weapons","x":7.0}],
      "initial": {"name":"Range Focused Aircraft Designer","fx":["Range: +10%"]},
      "traits": [
        {
          "id": "generic_mio_trait_large_rudders_and_flaps",
          "name": "Large Rudders and Flaps",
          "x": 3.0,
          "y": 0.0,
          "ic": "plane",
          "fx": ["Agility: +5%"],
          "for": ["mio_cat_eq_all_medium_plane"]
        },
        {
          "id": "generic_mio_trait_variable_dihedral",
          "name": "Variable Dihedral",
          "x": 5.0,
          "y": 0.0,
          "ic": "plane",
          "fx": ["Range: +10%","Reliability +10%"],
          "for": ["mio_cat_eq_all_medium_plane"]
        },
        {
          "id": "generic_mio_trait_high_capacity_ammunition",
          "name": "High Capacity Ammunition",
          "x": 7.0,
          "y": 0.0,
          "ic": "plane",
          "fx": ["Air Attack: +10%"],
          "for": ["mio_cat_eq_all_small_plane","mio_cat_eq_all_medium_plane"]
        },
        {
          "id": "generic_mio_trait_extra_cargo_doors",
          "name": "Extra Cargo Doors",
          "x": 8.0,
          "y": 0.0,
          "ic": "plane",
          "fx": ["Production capacity factor +10%"],
          "for": ["transport_plane_equipment"]
        },
        {
          "id": "generic_mio_trait_improved_air_frame_strength",
          "name": "Improved Air Frame Strength",
          "x": 6.0,
          "y": 1.0,
          "ic": "ship",
          "fx": ["Range: +10%"],
          "all": ["generic_mio_trait_variable_dihedral"],
          "for": ["mio_cat_eq_all_medium_plane"]
        },
        {
          "id": "generic_mio_trait_glider_hook_modifications",
          "name": "Glider Hook Modifications",
          "x": 8.0,
          "y": 1.0,
          "ic": "ship",
          "fx": ["Range: +10%"],
          "all": ["generic_mio_trait_extra_cargo_doors"],
          "for": ["transport_plane_equipment"]
        },
        {
          "id": "generic_mio_trait_advanced_production_techniques",
          "name": "Advanced Production Techniques",
          "x": 1.0,
          "y": 2.0,
          "ic": "plane",
          "fx": ["Reliability +7%","Production capacity factor +10%"],
          "for": ["mio_cat_eq_all_small_plane","mio_cat_eq_all_medium_plane"]
        },
        {
          "id": "generic_mio_trait_low_drag_wings",
          "name": "Low Drag Wings",
          "x": 5.0,
          "y": 2.0,
          "ic": "road",
          "fx": ["Range: +10%","Max speed +10%"],
          "all": ["generic_mio_trait_variable_dihedral"],
          "for": ["mio_cat_eq_all_small_plane","mio_cat_eq_all_medium_plane"]
        },
        {
          "id": "generic_mio_trait_strafing_techniques",
          "name": "Strafing Techniques",
          "x": 7.0,
          "y": 2.0,
          "ic": "plane",
          "fx": ["Ground Attack: +10%"],
          "all": ["generic_mio_trait_improved_air_frame_strength","generic_mio_trait_high_capacity_ammunition"],
          "for": ["mio_cat_eq_all_small_plane","mio_cat_eq_all_medium_plane"]
        },
        {
          "id": "generic_mio_trait_long_range_modifications",
          "name": "Long Range Modifications",
          "x": 4.0,
          "y": 3.0,
          "ic": "ship",
          "fx": ["Range: +10%"],
          "all": ["generic_mio_trait_large_rudders_and_flaps"],
          "for": ["mio_cat_eq_all_small_plane","mio_cat_eq_all_medium_plane"]
        },
        {
          "id": "generic_mio_trait_anti_interception_tactics",
          "name": "Anti Interception Tactics",
          "x": 6.0,
          "y": 3.0,
          "ic": "road",
          "fx": ["Max speed +10%"],
          "all": ["generic_mio_trait_low_drag_wings"],
          "for": ["mio_cat_eq_all_medium_plane"]
        },
        {
          "id": "generic_mio_trait_high_explosive_payload",
          "name": "High Explosive Payload",
          "x": 8.0,
          "y": 3.0,
          "ic": "plane",
          "fx": ["Ground Attack: +10%","Strat. Bombing: +15%"],
          "all": ["generic_mio_trait_strafing_techniques"],
          "for": ["mio_cat_eq_all_medium_plane"]
        },
        {
          "id": "generic_mio_trait_long_range_fighters",
          "name": "Long Range Fighters",
          "x": 3.0,
          "y": 4.0,
          "ic": "plane",
          "fx": ["Range: +15%","Agility: +15%"],
          "all": ["generic_mio_trait_advanced_production_techniques","generic_mio_trait_long_range_modifications"],
          "for": ["mio_cat_eq_all_small_plane"]
        },
        {
          "id": "generic_mio_trait_heavy_fighters",
          "name": "Heavy Fighters",
          "x": 5.0,
          "y": 4.0,
          "ic": "plane",
          "fx": ["Air Attack: +15%","Range: +10%"],
          "all": ["generic_mio_trait_anti_interception_tactics","generic_mio_trait_long_range_modifications"],
          "for": ["mio_cat_eq_all_medium_plane"]
        },
        {
          "id": "generic_mio_trait_tactical_bombers",
          "name": "Tactical Bombers",
          "x": 7.0,
          "y": 4.0,
          "ic": "swords",
          "fx": ["Strat. Bombing: +15%","Range: +10%"],
          "all": ["generic_mio_trait_anti_interception_tactics","generic_mio_trait_high_explosive_payload"],
          "for": ["mio_cat_eq_all_medium_plane"]
        },
        {
          "id": "GER_mio_trait_work_horse_design_philosophy",
          "name": "Work-horse Design Philosophy",
          "x": 9.0,
          "y": 1.0,
          "ic": "plane",
          "fx": ["Reliability +5%","Air Defense: +3%"],
          "for": ["mio_cat_eq_all_small_plane","mio_cat_eq_all_medium_plane"],
          "special": true
        },
        {
          "id": "GER_mio_trait_aerodynamic_research_insitute",
          "name": "Integrated Aerodynamic Research Institute Department",
          "x": 9.0,
          "y": 2.0,
          "ic": "gear",
          "fx": ["Military industrial organization research bonus +10%"],
          "special": true
        },
        {
          "id": "GER_mio_trait_bomber_destroyer",
          "name": "Bomber Destroyer",
          "x": 7.0,
          "y": 3.0,
          "ic": "plane",
          "fx": ["Air Attack: +5%","Agility: +3%"],
          "all": ["generic_mio_trait_strafing_techniques"],
          "for": ["mio_cat_eq_all_small_plane","mio_cat_eq_all_medium_plane"],
          "special": true
        },
        {
          "id": "GER_mio_trait_radial_engine",
          "name": "Radial Engines",
          "x": 3.0,
          "y": 2.0,
          "ic": "plane",
          "fx": ["Air Defense: +5%","Agility: +5%"],
          "all": ["GER_mio_trait_long_nose_design"],
          "for": ["mio_cat_eq_all_small_plane"],
          "special": true
        },
        {
          "id": "GER_mio_trait_long_nose_design",
          "name": "Long-nose Design",
          "x": 3.0,
          "y": 1.0,
          "ic": "plane",
          "fx": ["Range: +5%","Air Defense: +5%"],
          "all": ["generic_mio_trait_large_rudders_and_flaps"],
          "for": ["mio_cat_eq_all_small_plane"],
          "special": true
        },
        {
          "id": "GER_mio_trait_hamburger_flugzeugbau",
          "name": "Hamburger Flugzeugbau",
          "x": 9.0,
          "y": 0.0,
          "ic": "factory",
          "fx": ["Production capacity factor +5%"],
          "special": true
        },
        {
          "id": "GER_mio_trait_amerikabomber_learnings",
          "name": "Amerikabomber Learnings",
          "x": 9.0,
          "y": 4.0,
          "ic": "plane",
          "fx": ["Range: +10%"],
          "for": ["mio_cat_eq_all_medium_plane"],
          "special": true
        }
      ]
    },
    "GER_heinkel_organization": {
      "id": "GER_heinkel_organization",
      "name": "Heinkel",
      "types": ["mio_cat_eq_only_strategic_bomber","large_plane_maritime_patrol_plane_airframe","transport_plane_equipment"],
      "ic": "gear",
      "headers": [{"t":"Design Department","x":2.0},{"t":"Operational Department","x":7.0}],
      "initial": {"name":"Heavy Aircraft Designer","fx":["Strat. Bombing: +5%","Agility: -5%","Military industrial organization research bonus +5%"]},
      "traits": [
        {
          "id": "generic_mio_trait_reinforced_frames",
          "name": "Reinforced Frames",
          "x": 2.0,
          "y": 0.0,
          "ic": "fort",
          "fx": ["Air Defense: +5%"],
          "for": ["mio_cat_eq_only_strategic_bomber","large_plane_maritime_patrol_plane_airframe"]
        },
        {
          "id": "generic_mio_trait_standardized_alloys",
          "name": "Standardized Alloys",
          "x": 2.0,
          "y": 1.0,
          "ic": "coin",
          "fx": ["Production efficiency gain factor +5%","Production resource penalty factor -10%"],
          "any": ["generic_mio_trait_reinforced_frames"]
        },
        {
          "id": "generic_mio_trait_transport_conversions",
          "name": "Transport Conversions",
          "x": 0.0,
          "y": 2.0,
          "ic": "plane",
          "fx": ["Production capacity factor +10%"],
          "any": ["generic_mio_trait_standardized_alloys"],
          "for": ["transport_plane_equipment"]
        },
        {
          "id": "generic_mio_trait_drop_hammer_alloy_straining",
          "name": "Drop-Hammer Alloy Straining",
          "x": 2.0,
          "y": 2.0,
          "ic": "fort",
          "fx": ["Air Defense: +5%","Reliability +5%"],
          "any": ["generic_mio_trait_standardized_alloys"],
          "for": ["mio_cat_eq_only_strategic_bomber","large_plane_maritime_patrol_plane_airframe"]
        },
        {
          "id": "generic_mio_trait_refined_secondary_aluminium",
          "name": "Refined Secondary Aluminium",
          "x": 1.0,
          "y": 4.0,
          "ic": "coin",
          "fx": ["Production capacity factor +5%","Production resource need factor -15%"],
          "any": ["generic_mio_trait_drop_hammer_alloy_straining"],
          "ex": ["generic_mio_trait_high_quality_aluminium_alloys"],
          "for": ["mio_cat_eq_only_strategic_bomber","large_plane_maritime_patrol_plane_airframe"]
        },
        {
          "id": "generic_mio_trait_high_quality_aluminium_alloys",
          "name": "High-Quality Aluminium Alloys",
          "x": 3.0,
          "y": 4.0,
          "ic": "plane",
          "fx": ["Agility: +5%","Reliability +5%"],
          "any": ["generic_mio_trait_drop_hammer_alloy_straining"],
          "ex": ["generic_mio_trait_refined_secondary_aluminium"],
          "for": ["mio_cat_eq_only_strategic_bomber","large_plane_maritime_patrol_plane_airframe"]
        },
        {
          "id": "generic_mio_trait_pressurized_cockpit",
          "name": "Pressurized Cockpit",
          "x": 4.0,
          "y": 1.0,
          "ic": "ship",
          "fx": ["Range: +5%"],
          "any": ["generic_mio_trait_reinforced_frames","generic_mio_trait_extended_rear_fuselage"],
          "for": ["mio_cat_eq_only_strategic_bomber","large_plane_maritime_patrol_plane_airframe"]
        },
        {
          "id": "generic_mio_trait_advanced_turbochargers",
          "name": "Advanced Turbochargers",
          "x": 4.0,
          "y": 2.0,
          "ic": "plane",
          "fx": ["Agility: +5%"],
          "any": ["generic_mio_trait_pressurized_cockpit"],
          "for": ["mio_cat_eq_only_strategic_bomber","large_plane_maritime_patrol_plane_airframe"]
        },
        {
          "id": "generic_mio_trait_extended_rear_fuselage",
          "name": "Extended Rear Fuselage",
          "x": 7.0,
          "y": 0.0,
          "ic": "swords",
          "fx": ["Strat. Bombing: +5%","Naval strike attack +5%"],
          "for": ["mio_cat_eq_only_strategic_bomber","large_plane_maritime_patrol_plane_airframe"]
        },
        {
          "id": "generic_mio_trait_auto_levelled_bombsights",
          "name": "Auto-Levelled Bombsights",
          "x": 6.0,
          "y": 1.0,
          "ic": "swords",
          "fx": ["Strat. Bombing: +5%"],
          "any": ["generic_mio_trait_extended_rear_fuselage"],
          "ex": ["generic_mio_trait_air_deployed_sonobuoys"],
          "for": ["mio_cat_eq_only_strategic_bomber","large_plane_maritime_patrol_plane_airframe"]
        },
        {
          "id": "generic_mio_trait_air_deployed_sonobuoys",
          "name": "Air-Deployed Sonobuoys",
          "x": 8.0,
          "y": 1.0,
          "ic": "eye",
          "fx": ["Sub detection +5%","Surface detection +5%"],
          "any": ["generic_mio_trait_extended_rear_fuselage"],
          "ex": ["generic_mio_trait_auto_levelled_bombsights"],
          "for": ["mio_cat_eq_only_strategic_bomber","large_plane_maritime_patrol_plane_airframe"]
        },
        {
          "id": "generic_mio_trait_cockpit_controlled_remote_gun_turrets",
          "name": "Cockpit-Controlled Remote Gun Turrets",
          "x": 7.0,
          "y": 2.0,
          "ic": "plane",
          "fx": ["Air Attack: +5%"],
          "any": ["generic_mio_trait_auto_levelled_bombsights","generic_mio_trait_air_deployed_sonobuoys"],
          "for": ["mio_cat_eq_only_strategic_bomber","large_plane_maritime_patrol_plane_airframe"]
        },
        {
          "id": "generic_mio_trait_flying_fortress",
          "name": "Flying Fortress",
          "x": 6.0,
          "y": 4.0,
          "ic": "plane",
          "fx": ["Air Defense: +15%","Range: +15%","Agility: -5%","Fuel use +5%"],
          "any": ["generic_mio_trait_cockpit_controlled_remote_gun_turrets"],
          "ex": ["generic_mio_trait_advanced_instruments"],
          "for": ["mio_cat_eq_only_strategic_bomber","large_plane_maritime_patrol_plane_airframe"]
        },
        {
          "id": "generic_mio_trait_advanced_instruments",
          "name": "Advanced Instruments",
          "x": 8.0,
          "y": 4.0,
          "ic": "swords",
          "fx": ["Strat. Bombing: +5%","Naval strike targetting +5%"],
          "any": ["generic_mio_trait_cockpit_controlled_remote_gun_turrets"],
          "ex": ["generic_mio_trait_flying_fortress"],
          "for": ["mio_cat_eq_only_strategic_bomber","large_plane_maritime_patrol_plane_airframe"]
        },
        {"id":"GER_mio_trait_doppel_blitz","name":"Doppel-Blitz","x":5.0,"y":0.0,"ic":"plane","fx":["Max speed +5%"],"special":true},
        {
          "id": "GER_mio_trait_advanced_night_equipment",
          "name": "Advanced Night Equipment",
          "x": 3.0,
          "y": 2.0,
          "ic": "eye",
          "fx": ["Night penalty -5%"],
          "all": ["generic_mio_trait_pressurized_cockpit"],
          "special": true
        },
        {
          "id": "GER_mio_trait_stepless_cockpit",
          "name": "Stepless Cockpit",
          "x": 5.0,
          "y": 2.0,
          "ic": "swords",
          "fx": ["Strat. Bombing: +5%"],
          "all": ["generic_mio_trait_pressurized_cockpit"],
          "for": ["mio_cat_eq_only_strategic_bomber"],
          "special": true
        },
        {
          "id": "GER_mio_trait_hamburger_flugzeugbau",
          "name": "Hamburger Flugzeugbau",
          "x": 9.0,
          "y": 0.0,
          "ic": "factory",
          "fx": ["Production capacity factor +5%"],
          "special": true
        },
        {
          "id": "GER_mio_trait_aerodynamic_research_insitute",
          "name": "Integrated Aerodynamic Research Institute Department",
          "x": 9.0,
          "y": 1.0,
          "ic": "gear",
          "fx": ["Military industrial organization research bonus +10%"],
          "special": true
        },
        {
          "id": "GER_mio_trait_amerikabomber_learnings",
          "name": "Amerikabomber Learnings",
          "x": 9.0,
          "y": 4.0,
          "ic": "plane",
          "fx": ["Range: +10%","Strat. Bombing: +5%"],
          "for": ["mio_cat_eq_only_strategic_bomber"],
          "special": true
        }
      ]
    },
    "GER_dornier_organization": {
      "id": "GER_dornier_organization",
      "name": "Dornier",
      "types": ["mio_cat_eq_all_medium_plane","transport_plane_equipment"],
      "ic": "gear",
      "headers": [{"t":"Production","x":1.0},{"t":"Engines","x":3.0},{"t":"Wings","x":5.0},{"t":"Weapons","x":7.0}],
      "initial": {"name":"Medium Aircraft Designer","fx":["Surface detection +5%","Ground Attack: +5%"]},
      "traits": [
        {
          "id": "generic_mio_trait_narrow_build",
          "name": "Narrow Build",
          "x": 1.0,
          "y": 0.0,
          "ic": "plane",
          "fx": ["Air Defense: +5%","Production efficiency gain factor +5%"],
          "for": ["mio_cat_eq_all_medium_plane"]
        },
        {
          "id": "generic_mio_trait_mixed_material_construction",
          "name": "Mixed Material Construction",
          "x": 2.0,
          "y": 0.0,
          "ic": "plane",
          "fx": ["Production efficiency gain factor +5%"],
          "for": ["mio_cat_eq_all_medium_plane"]
        },
        {
          "id": "generic_mio_trait_multi_role_transport",
          "name": "Multi-Role Transport",
          "x": 2.0,
          "y": 1.0,
          "ic": "plane",
          "fx": ["Production efficiency gain factor +5%","Production efficiency cap factor +10%"],
          "all": ["generic_mio_trait_mixed_material_construction"],
          "for": ["transport_plane_equipment"]
        },
        {
          "id": "generic_mio_trait_refined_engines",
          "name": "Refined Engines",
          "x": 3.0,
          "y": 2.0,
          "ic": "road",
          "fx": ["Max speed +5%"],
          "all": ["generic_mio_trait_mixed_material_construction"],
          "for": ["mio_cat_eq_all_medium_plane"]
        },
        {
          "id": "generic_mio_trait_twin_tail",
          "name": "Twin-Tail",
          "x": 4.0,
          "y": 0.0,
          "ic": "plane",
          "fx": ["Agility: +5%"],
          "ex": ["generic_mio_trait_reinforced_wing_braces"],
          "for": ["mio_cat_eq_all_medium_plane"]
        },
        {
          "id": "generic_mio_trait_reinforced_wing_braces",
          "name": "Reinforced Wing Braces",
          "x": 6.0,
          "y": 0.0,
          "ic": "plane",
          "fx": ["Ground Attack: +5%"],
          "ex": ["generic_mio_trait_twin_tail"],
          "for": ["mio_cat_eq_all_medium_plane"]
        },
        {
          "id": "generic_mio_trait_expanded_cockpit",
          "name": "Expanded Cockpit",
          "x": 4.0,
          "y": 1.0,
          "ic": "plane",
          "fx": ["Ground Attack: +5%","Strat. Bombing: +5%"],
          "any": ["generic_mio_trait_twin_tail","generic_mio_trait_reinforced_wing_braces"],
          "ex": ["generic_mio_trait_metal_nose_replacement"],
          "for": ["mio_cat_eq_all_medium_plane"]
        },
        {
          "id": "generic_mio_trait_metal_nose_replacement",
          "name": "Metal Nose Replacement",
          "x": 6.0,
          "y": 1.0,
          "ic": "fort",
          "fx": ["Air Defense: +5%"],
          "any": ["generic_mio_trait_twin_tail","generic_mio_trait_reinforced_wing_braces"],
          "ex": ["generic_mio_trait_expanded_cockpit"],
          "for": ["mio_cat_eq_all_medium_plane"]
        },
        {
          "id": "generic_mio_trait_extra_machine_guns",
          "name": "Extra Machine Guns",
          "x": 7.0,
          "y": 2.0,
          "ic": "plane",
          "fx": ["Ground Attack: +10%","Production cost +5%"],
          "for": ["mio_cat_eq_all_medium_plane"]
        },
        {
          "id": "generic_mio_trait_streamlined_fuselage",
          "name": "Streamlined Fuselage",
          "x": 5.0,
          "y": 3.0,
          "ic": "road",
          "fx": ["Air Defense: +5%","Max speed +5%"],
          "all": ["generic_mio_trait_refined_engines"],
          "any": ["generic_mio_trait_expanded_cockpit","generic_mio_trait_metal_nose_replacement"],
          "for": ["mio_cat_eq_all_medium_plane"]
        },
        {
          "id": "generic_mio_trait_adaptable_build",
          "name": "Adaptable Build",
          "x": 3.0,
          "y": 4.0,
          "ic": "plane",
          "fx": ["Range: +5%","Production capacity factor +5%"],
          "all": ["generic_mio_trait_streamlined_fuselage"],
          "ex": ["generic_mio_trait_heavy_fighter_specialization","generic_mio_trait_tactical_bomber_specialization"],
          "for": ["mio_cat_eq_all_medium_plane"]
        },
        {
          "id": "generic_mio_trait_heavy_fighter_specialization",
          "name": "Heavy Fighter Specialization",
          "x": 5.0,
          "y": 4.0,
          "ic": "plane",
          "fx": ["Range: +5%","Air Attack: +5%","Air Defense: +5%"],
          "all": ["generic_mio_trait_streamlined_fuselage"],
          "ex": ["generic_mio_trait_adaptable_build","generic_mio_trait_tactical_bomber_specialization"],
          "for": ["mio_cat_eq_all_medium_plane"]
        },
        {
          "id": "generic_mio_trait_tactical_bomber_specialization",
          "name": "Tactical Bomber Specialization",
          "x": 7.0,
          "y": 4.0,
          "ic": "plane",
          "fx": ["Range: +5%","Ground Attack: +5%","Air Defense: +5%"],
          "all": ["generic_mio_trait_streamlined_fuselage"],
          "ex": ["generic_mio_trait_adaptable_build","generic_mio_trait_heavy_fighter_specialization"],
          "for": ["mio_cat_eq_all_medium_plane"]
        },
        {
          "id": "generic_mio_trait_skip_bombing",
          "name": "Skip Bombing",
          "x": 8.0,
          "y": 0.0,
          "ic": "ship",
          "fx": ["Naval strike attack +3%"],
          "for": ["mio_cat_eq_all_medium_plane"]
        },
        {
          "id": "generic_mio_trait_high_frequency_direction_finding",
          "name": "High-Frequency Direction Finding",
          "x": 8.0,
          "y": 2.0,
          "ic": "ship",
          "fx": ["Sub detection +5%","Naval strike attack +3%"],
          "all": ["generic_mio_trait_skip_bombing"],
          "for": ["mio_cat_eq_all_medium_plane"]
        },
        {
          "id": "GER_mio_trait_flying_boat_specialist",
          "name": "Flying Boat Specialist",
          "x": 7.0,
          "y": 1.0,
          "ic": "ship",
          "fx": ["Surface detection +3%","Naval strike attack +5%"],
          "all": ["generic_mio_trait_skip_bombing"],
          "for": ["mio_cat_eq_all_medium_plane"],
          "special": true
        },
        {
          "id": "GER_mio_trait_schnellbomber_doctrine",
          "name": "Schnellbomber Doctrine",
          "x": 2.0,
          "y": 3.0,
          "ic": "plane",
          "fx": ["Max speed +10%"],
          "all": ["generic_mio_trait_refined_engines"],
          "for": ["mio_cat_eq_all_medium_plane"],
          "special": true
        },
        {
          "id": "GER_mio_trait_hamburger_flugzeugbau",
          "name": "Hamburger Flugzeugbau",
          "x": 9.0,
          "y": 0.0,
          "ic": "factory",
          "fx": ["Production capacity factor +5%"],
          "special": true
        },
        {
          "id": "GER_mio_trait_aerodynamic_research_insitute",
          "name": "Integrated Aerodynamic Research Institute Department",
          "x": 9.0,
          "y": 1.0,
          "ic": "gear",
          "fx": ["Military industrial organization research bonus +10%"],
          "special": true
        }
      ]
    },
    "GER_arado_flugzeugwerke_organization": {
      "id": "GER_arado_flugzeugwerke_organization",
      "name": "Arado Flugzeugwerke",
      "types": ["mio_cat_eq_all_small_plane","mio_cat_eq_all_medium_plane","transport_plane_equipment"],
      "ic": "gear",
      "headers": [{"t":"Light Aircraft","x":3.0},{"t":"Medium Aircraft","x":6.0}],
      "initial": {"name":"Multi-Role Aircraft Designer","fx":["Ground Attack: +2%","Naval strike attack +2%","Air Attack: +2%","Air Defense: +2%"]},
      "traits": [
        {
          "id": "generic_mio_trait_armored_cockpit",
          "name": "Armored Cockpit",
          "x": 3.0,
          "y": 0.0,
          "ic": "fort",
          "fx": ["Air Defense: +5%","Reliability +5%"],
          "for": ["mio_cat_eq_all_small_plane","mio_cat_eq_all_medium_plane"]
        },
        {
          "id": "generic_mio_trait_escort_designs",
          "name": "Escort Designs",
          "x": 6.0,
          "y": 0.0,
          "ic": "ship",
          "fx": ["Range: +5%"],
          "for": ["mio_cat_eq_all_small_plane","mio_cat_eq_all_medium_plane"]
        },
        {
          "id": "generic_mio_trait_light_airframe",
          "name": "Light Airframe",
          "x": 3.0,
          "y": 1.0,
          "ic": "plane",
          "fx": ["Production efficiency gain factor +5%","Military industrial organization research bonus +5%"],
          "all": ["generic_mio_trait_armored_cockpit","generic_mio_trait_escort_designs"],
          "ex": ["generic_mio_trait_medium_airframe"],
          "for": ["mio_cat_eq_all_small_plane"]
        },
        {
          "id": "generic_mio_trait_medium_airframe",
          "name": "Medium Airframe",
          "x": 6.0,
          "y": 1.0,
          "ic": "plane",
          "fx": ["Production efficiency gain factor +5%","Military industrial organization research bonus +5%"],
          "all": ["generic_mio_trait_armored_cockpit","generic_mio_trait_escort_designs"],
          "ex": ["generic_mio_trait_light_airframe"],
          "for": ["mio_cat_eq_all_medium_plane"]
        },
        {
          "id": "generic_mio_trait_hardened_frames",
          "name": "Hardened Frames",
          "x": 1.0,
          "y": 2.0,
          "ic": "fort",
          "fx": ["Air Defense: +5%"],
          "all": ["generic_mio_trait_light_airframe"],
          "for": ["mio_cat_eq_all_small_plane"]
        },
        {
          "id": "generic_mio_trait_belly_shackles",
          "name": "Belly Shackles",
          "x": 2.0,
          "y": 2.0,
          "ic": "plane",
          "fx": ["Ground Attack: +5%","Naval strike attack +5%"],
          "all": ["generic_mio_trait_light_airframe"],
          "for": ["mio_cat_eq_all_small_plane"]
        },
        {
          "id": "generic_mio_trait_oversized_propeller",
          "name": "Oversized Propeller",
          "x": 3.0,
          "y": 3.0,
          "ic": "road",
          "fx": ["Max speed +5%"],
          "all": ["generic_mio_trait_light_airframe"],
          "for": ["mio_cat_eq_all_small_plane"]
        },
        {
          "id": "generic_mio_trait_variable_pitch_propellers",
          "name": "Variable Pitch Propellers",
          "x": 6.0,
          "y": 3.0,
          "ic": "plane",
          "fx": ["Max speed +5%","Agility: +5%"],
          "all": ["generic_mio_trait_medium_airframe"],
          "for": ["mio_cat_eq_all_medium_plane"]
        },
        {
          "id": "generic_mio_trait_upgraded_air_air_weapons",
          "name": "Upgraded Air-Air Weapons",
          "x": 7.0,
          "y": 2.0,
          "ic": "plane",
          "fx": ["Air Attack: +5%"],
          "all": ["generic_mio_trait_medium_airframe"],
          "for": ["mio_cat_eq_all_medium_plane"]
        },
        {
          "id": "generic_mio_trait_reinforced_wing_hardpoints",
          "name": "Reinforced Wing Hardpoints",
          "x": 8.0,
          "y": 2.0,
          "ic": "plane",
          "fx": ["Ground Attack: +5%","Naval strike attack +5%","Strat. Bombing: +5%"],
          "all": ["generic_mio_trait_medium_airframe"],
          "for": ["mio_cat_eq_all_medium_plane"]
        },
        {
          "id": "generic_mio_trait_transport_duties",
          "name": "Transport Duties",
          "x": 9.0,
          "y": 2.0,
          "ic": "plane",
          "fx": ["Production capacity factor +10%"],
          "all": ["generic_mio_trait_medium_airframe"],
          "for": ["transport_plane_equipment"]
        },
        {
          "id": "generic_mio_trait_upgraded_engines",
          "name": "Upgraded Engines",
          "x": 4.0,
          "y": 2.0,
          "ic": "plane",
          "fx": ["Max speed +5%","Agility: +5%"],
          "any": ["generic_mio_trait_light_airframe","generic_mio_trait_medium_airframe"],
          "for": ["mio_cat_eq_all_small_plane","mio_cat_eq_all_medium_plane"]
        },
        {
          "id": "generic_mio_trait_not_enough_guns_never_enough_guns",
          "name": "Not Enough Guns, Never Enough Guns",
          "x": 5.0,
          "y": 2.0,
          "ic": "plane",
          "fx": ["Air Attack: +5%","Ground Attack: +5%"],
          "any": ["generic_mio_trait_light_airframe","generic_mio_trait_medium_airframe"],
          "for": ["mio_cat_eq_all_small_plane","mio_cat_eq_all_medium_plane"]
        },
        {
          "id": "generic_mio_trait_lengthened_wings",
          "name": "Lengthened Wings",
          "x": 4.0,
          "y": 3.0,
          "ic": "ship",
          "fx": ["Range: +5%","Air Attack: +5%"],
          "all": ["generic_mio_trait_upgraded_engines"],
          "for": ["mio_cat_eq_all_small_plane","mio_cat_eq_all_medium_plane"]
        },
        {
          "id": "generic_mio_trait_bubble_canopy",
          "name": "Bubble Canopy",
          "x": 5.0,
          "y": 3.0,
          "ic": "fort",
          "fx": ["Air Defense: +5%"],
          "all": ["generic_mio_trait_not_enough_guns_never_enough_guns"],
          "for": ["mio_cat_eq_all_small_plane","mio_cat_eq_all_medium_plane"]
        },
        {
          "id": "generic_mio_trait_fighter_specialization",
          "name": "Fighter Specialization",
          "x": 3.0,
          "y": 4.0,
          "ic": "plane",
          "fx": ["Air Attack: +5%","Agility: +5%"],
          "all": ["generic_mio_trait_lengthened_wings","generic_mio_trait_bubble_canopy"],
          "ex": ["generic_mio_trait_bomber_specialization"],
          "for": ["mio_cat_eq_all_small_plane","mio_cat_eq_all_medium_plane"]
        },
        {
          "id": "generic_mio_trait_bomber_specialization",
          "name": "Bomber Specialization",
          "x": 6.0,
          "y": 4.0,
          "ic": "plane",
          "fx": ["Ground Attack: +3%","Naval strike attack +3%","Naval strike targetting +3%"],
          "all": ["generic_mio_trait_lengthened_wings","generic_mio_trait_bubble_canopy"],
          "ex": ["generic_mio_trait_fighter_specialization"],
          "for": ["mio_cat_eq_all_small_plane","mio_cat_eq_all_medium_plane"]
        },
        {
          "id": "GER_mio_trait_jet_bomber_innovator",
          "name": "Jet Bomber Innovator",
          "x": 9.0,
          "y": 1.0,
          "ic": "plane",
          "fx": ["Max speed +10%"],
          "for": ["mio_cat_eq_all_medium_plane"],
          "special": true
        },
        {
          "id": "GER_mio_trait_hamburger_flugzeugbau",
          "name": "Hamburger Flugzeugbau",
          "x": 9.0,
          "y": 0.0,
          "ic": "factory",
          "fx": ["Production capacity factor +5%"],
          "special": true
        },
        {
          "id": "GER_mio_trait_aerodynamic_research_insitute",
          "name": "Integrated Aerodynamic Research Institute Department",
          "x": 8.0,
          "y": 0.0,
          "ic": "gear",
          "fx": ["Military industrial organization research bonus +10%"],
          "special": true
        }
      ]
    },
    "GER_fieseler_organization": {
      "id": "GER_fieseler_organization",
      "name": "Fieseler",
      "types": ["small_plane_naval_bomber_airframe","cv_small_plane_airframe","cv_small_plane_cas_airframe","cv_small_plane_naval_bomber_airframe"],
      "ic": "gear",
      "headers": [{"t":"Operational Department","x":1.0},{"t":"Design Department","x":4.0},{"t":"Engines Department","x":7.0}],
      "initial": {
        "name": "Naval Aircraft Designer",
        "fx": ["Naval strike attack +5%","Production capacity factor +5%","Military industrial organization research bonus +5%"]
      },
      "traits": [
        {
          "id": "generic_mio_trait_navigation_equipment",
          "name": "Navigation Equipment",
          "x": 4.0,
          "y": 0.0,
          "ic": "fort",
          "fx": ["Reliability +5%","Surface detection +5%","Sub detection +5%"]
        },
        {
          "id": "generic_mio_trait_patrol_fuel_tanks",
          "name": "Patrol Fuel Tanks",
          "x": 0.0,
          "y": 1.0,
          "ic": "ship",
          "fx": ["Range: +5%"],
          "all": ["generic_mio_trait_navigation_equipment"],
          "ex": ["generic_mio_trait_internal_torpedo_mountings"],
          "for": ["small_plane_naval_bomber_airframe","cv_small_plane_naval_bomber_airframe"]
        },
        {
          "id": "generic_mio_trait_internal_torpedo_mountings",
          "name": "Internal Torpedo Mountings",
          "x": 2.0,
          "y": 1.0,
          "ic": "road",
          "fx": ["Max speed +5%","Naval strike attack +5%"],
          "all": ["generic_mio_trait_navigation_equipment"],
          "ex": ["generic_mio_trait_patrol_fuel_tanks"],
          "for": ["small_plane_naval_bomber_airframe","cv_small_plane_naval_bomber_airframe"]
        },
        {
          "id": "generic_mio_trait_high_speed_torpedo_release",
          "name": "High-Speed Torpedo Release",
          "x": 1.0,
          "y": 2.0,
          "ic": "eye",
          "fx": ["Surface detection +5%","Sub detection +5%","Naval strike attack +5%","Naval strike targetting +5%"],
          "any": ["generic_mio_trait_patrol_fuel_tanks","generic_mio_trait_internal_torpedo_mountings"],
          "for": ["small_plane_naval_bomber_airframe","cv_small_plane_naval_bomber_airframe"]
        },
        {
          "id": "generic_mio_trait_reinforced_fuselage",
          "name": "Reinforced Fuselage",
          "x": 4.0,
          "y": 1.0,
          "ic": "fort",
          "fx": ["Reliability +5%","Air Defense: +5%"],
          "all": ["generic_mio_trait_navigation_equipment"]
        },
        {
          "id": "generic_mio_agility_wing_design",
          "name": "Agility Wing Design",
          "x": 3.0,
          "y": 2.0,
          "ic": "plane",
          "fx": ["Range: +5%","Agility: +5%"],
          "all": ["generic_mio_trait_reinforced_fuselage"],
          "ex": ["generic_mio_strength_wing_design"]
        },
        {
          "id": "generic_mio_strength_wing_design",
          "name": "Strength Wing Design",
          "x": 5.0,
          "y": 2.0,
          "ic": "fort",
          "fx": ["Range: +5%","Air Defense: +5%"],
          "all": ["generic_mio_trait_reinforced_fuselage"],
          "ex": ["generic_mio_agility_wing_design"]
        },
        {
          "id": "generic_mio_high_capacity_ammunition_stores",
          "name": "High-Capacity Ammunition Stores",
          "x": 3.0,
          "y": 4.0,
          "ic": "plane",
          "fx": ["Air Attack: +5%","Ground Attack: +5%"],
          "all": ["generic_mio_agility_wing_design"]
        },
        {
          "id": "generic_mio_larger_bomb_loads",
          "name": "Larger Bomb Loads",
          "x": 5.0,
          "y": 4.0,
          "ic": "plane",
          "fx": ["Naval strike attack +5%","Naval strike targetting +5%"],
          "all": ["generic_mio_strength_wing_design"]
        },
        {
          "id": "generic_mio_air_cooled_engines",
          "name": "Air-Cooled Engines",
          "x": 7.0,
          "y": 1.0,
          "ic": "fort",
          "fx": ["Reliability +5%","Air Defense: +5%"],
          "all": ["generic_mio_trait_navigation_equipment"],
          "for": ["cv_small_plane_airframe","cv_small_plane_cas_airframe","cv_small_plane_naval_bomber_airframe"]
        },
        {
          "id": "generic_mio_multi_stage_super_charger",
          "name": "Multi-Stage Super Charger",
          "x": 7.0,
          "y": 2.0,
          "ic": "road",
          "fx": ["Agility: +5%","Max speed +5%"],
          "all": ["generic_mio_air_cooled_engines"],
          "for": ["cv_small_plane_airframe"]
        },
        {
          "id": "generic_mio_water_injection",
          "name": "Water Injection",
          "x": 7.0,
          "y": 3.0,
          "ic": "road",
          "fx": ["Fuel use -5%","Max speed +5%"],
          "all": ["generic_mio_multi_stage_super_charger"],
          "for": ["cv_small_plane_airframe"]
        },
        {
          "id": "generic_mio_advanced_materials",
          "name": "Advanced Materials",
          "x": 7.0,
          "y": 4.0,
          "ic": "coin",
          "fx": ["Production cost factor -10%","Production resource need factor +10%"],
          "all": ["generic_mio_water_injection"]
        },
        {
          "id": "GER_mio_trait_hamburger_flugzeugbau",
          "name": "Hamburger Flugzeugbau",
          "x": 9.0,
          "y": 0.0,
          "ic": "factory",
          "fx": ["Production capacity factor +5%"],
          "special": true
        },
        {
          "id": "GER_mio_trait_aerodynamic_research_insitute",
          "name": "Integrated Aerodynamic Research Institute Department",
          "x": 9.0,
          "y": 1.0,
          "ic": "gear",
          "fx": ["Military industrial organization research bonus +10%"],
          "special": true
        }
      ]
    },
    "GER_focke_achgelis_organization": {
      "id": "GER_focke_achgelis_organization",
      "name": "Focke-Achgelis",
      "types": ["helicopter_equipment"],
      "ic": "gear",
      "headers": [{"t":"Tandem Rotor","x":1.0},{"t":"Single Rotor","x":3.0},{"t":"Engines","x":5.0},{"t":"Production","x":7.0}],
      "initial": {"name":"Helicopter Development","fx":["Production cost -5%"]},
      "traits": [
        {
          "id": "generic_mio_trait_tandem_rotor_innovations",
          "name": "Tandem Rotor Innovations",
          "x": 1.0,
          "y": 0.0,
          "ic": "tank",
          "fx": ["Hardness +5%","Armor +10%"],
          "ex": ["generic_mio_trait_single_rotor_innovations"]
        },
        {
          "id": "generic_mio_trait_single_rotor_innovations",
          "name": "Single Rotor Innovations",
          "x": 3.0,
          "y": 0.0,
          "ic": "coin",
          "fx": ["Production cost -5%"],
          "ex": ["generic_mio_trait_tandem_rotor_innovations"]
        },
        {"id":"generic_mio_trait_side_venting_exhaust","name":"Side-Venting Exhaust","x":5.0,"y":0.0,"ic":"fort","fx":["Reliability +5%"]},
        {
          "id": "generic_mio_trait_improved_engine",
          "name": "Improved Engine",
          "x": 5.0,
          "y": 1.0,
          "ic": "plane",
          "fx": ["Reliability +5%","Max speed +10%"],
          "any": ["generic_mio_trait_side_venting_exhaust"]
        },
        {
          "id": "generic_mio_trait_extra_seating",
          "name": "Extra Seating",
          "x": 1.0,
          "y": 2.0,
          "ic": "fort",
          "fx": ["Defense +5%"],
          "all": ["generic_mio_trait_tandem_rotor_innovations","generic_mio_trait_improved_engine"]
        },
        {
          "id": "generic_mio_trait_co_axial_rotors",
          "name": "Co-Axial Rotors",
          "x": 3.0,
          "y": 2.0,
          "ic": "road",
          "fx": ["Max speed +10%"],
          "all": ["generic_mio_trait_single_rotor_innovations","generic_mio_trait_improved_engine"]
        },
        {
          "id": "generic_mio_trait_mass_production_certification",
          "name": "Mass Production Certification",
          "x": 7.0,
          "y": 2.0,
          "ic": "factory",
          "fx": ["Production cost factor -5%","Production efficiency gain factor +10%"],
          "any": ["generic_mio_trait_improved_engine"]
        },
        {
          "id": "GER_mio_trait_hamburger_flugzeugbau",
          "name": "Hamburger Flugzeugbau",
          "x": 9.0,
          "y": 0.0,
          "ic": "factory",
          "fx": ["Production capacity factor +5%"],
          "special": true
        },
        {
          "id": "GER_mio_trait_aerodynamic_research_insitute",
          "name": "Integrated Aerodynamic Research Institute Department",
          "x": 9.0,
          "y": 1.0,
          "ic": "gear",
          "fx": ["Military industrial organization research bonus +10%"],
          "special": true
        }
      ]
    },
    "GER_rheinmetall_organization": {
      "id": "GER_rheinmetall_organization",
      "name": "Rheinmetall",
      "types": ["artillery_equipment","anti_tank_equipment","anti_air_equipment","rocket_artillery_equipment"],
      "ic": "gear",
      "headers": [{"t":"Mechanical Design","x":1.0},{"t":"Armament and Ammunition","x":6.0}],
      "initial": {"name":"Artillery Manufacturer","fx":["Production cost factor -3%","Military industrial organization research bonus +5%"]},
      "traits": [
        {
          "id": "generic_mio_trait_mobile_limbers",
          "name": "Mobile Limbers",
          "x": 0.0,
          "y": 0.0,
          "ic": "swords",
          "fx": ["Breakthrough +10%"],
          "ex": ["generic_mio_trait_stable_platforms"]
        },
        {
          "id": "generic_mio_trait_stable_platforms",
          "name": "Stable Platforms",
          "x": 2.0,
          "y": 0.0,
          "ic": "fort",
          "fx": ["Defense +3%"],
          "ex": ["generic_mio_trait_mobile_limbers"]
        },
        {
          "id": "generic_mio_trait_improved_hydraulic_recoil_system",
          "name": "Hydraulic Recoil System",
          "x": 1.0,
          "y": 1.0,
          "ic": "fort",
          "fx": ["Reliability +5%"],
          "any": ["generic_mio_trait_stable_platforms","generic_mio_trait_mobile_limbers"]
        },
        {
          "id": "generic_mio_trait_improved_direct_fire_targeting",
          "name": "Improved Direct Fire Targeting",
          "x": 0.0,
          "y": 4.0,
          "ic": "tank",
          "fx": ["Piercing +5%","Hard attack +5%"],
          "all": ["generic_mio_trait_improved_hydraulic_recoil_system"],
          "ex": ["generic_mio_trait_advanced_anti_air_targeting","generic_mio_trait_advanced_trajectory_calculations"],
          "for": ["anti_tank_equipment"]
        },
        {
          "id": "generic_mio_trait_advanced_anti_air_targeting",
          "name": "Advanced Anti-Air Targeting",
          "x": 1.0,
          "y": 4.0,
          "ic": "gear",
          "fx": ["Air Attack: +7%"],
          "all": ["generic_mio_trait_improved_hydraulic_recoil_system"],
          "ex": ["generic_mio_trait_improved_direct_fire_targeting","generic_mio_trait_advanced_trajectory_calculations"],
          "for": ["anti_air_equipment"]
        },
        {
          "id": "generic_mio_trait_advanced_trajectory_calculations",
          "name": "Advanced Trajectory Calculations",
          "x": 2.0,
          "y": 4.0,
          "ic": "artillery",
          "fx": ["Hard attack +100%","Breakthrough +5%"],
          "all": ["generic_mio_trait_improved_hydraulic_recoil_system"],
          "ex": ["generic_mio_trait_improved_direct_fire_targeting","generic_mio_trait_advanced_anti_air_targeting"],
          "for": ["artillery_equipment","rocket_artillery_equipment"]
        },
        {
          "id": "generic_mio_trait_sliding_breech_block",
          "name": "Sliding Breech Block",
          "x": 4.0,
          "y": 2.0,
          "ic": "swords",
          "fx": ["Soft attack +3%","Breakthrough +3%"],
          "all": ["generic_mio_trait_improved_hydraulic_recoil_system","generic_mio_trait_rapid_fire"]
        },
        {
          "id": "generic_mio_trait_rapid_fire",
          "name": "Rapid Fire",
          "x": 4.0,
          "y": 0.0,
          "ic": "tank",
          "fx": ["Soft attack +10%","Hard attack +4%","Air Attack: +4%"],
          "for": ["anti_tank_equipment","anti_air_equipment"]
        },
        {
          "id": "generic_mio_trait_advanced_barrel_forging",
          "name": "Advanced Barrel Forging",
          "x": 6.0,
          "y": 0.0,
          "ic": "factory",
          "fx": ["Production efficiency gain factor +5%"]
        },
        {
          "id": "generic_mio_trait_big_guns",
          "name": "Big Guns",
          "x": 8.0,
          "y": 0.0,
          "ic": "swords",
          "fx": ["Soft attack +2%","Production cost +3%"],
          "for": ["artillery_equipment","rocket_artillery_equipment"]
        },
        {
          "id": "generic_mio_trait_gun_mass_production",
          "name": "Gun Mass Production",
          "x": 6.0,
          "y": 2.0,
          "ic": "gear",
          "fx": [
            "Production efficiency gain factor +3%",
            "Production efficiency cap factor +3%",
            "Military industrial organization design team assign cost -15%"
          ],
          "all": ["generic_mio_trait_advanced_barrel_forging"]
        },
        {
          "id": "generic_mio_trait_super_charges",
          "name": "Super Charges",
          "x": 8.0,
          "y": 2.0,
          "ic": "gear",
          "fx": [
            "Production efficiency gain factor +3%",
            "Production efficiency cap factor +3%",
            "Military industrial organization design team assign cost -15%"
          ],
          "all": ["generic_mio_trait_big_guns"],
          "for": ["artillery_equipment","rocket_artillery_equipment"]
        },
        {
          "id": "generic_mio_trait_light_weight_barrels",
          "name": "Light Weight Barrels",
          "x": 6.0,
          "y": 4.0,
          "ic": "swords",
          "fx": ["Breakthrough +6%","Defense +10%","Production cost factor -3%"],
          "all": ["generic_mio_trait_super_charges","generic_mio_trait_gun_mass_production","generic_mio_trait_sliding_breech_block"]
        },
        {
          "id": "GER_mio_trait_3_7_cm_pak",
          "name": "3.7cm Panzerabwehrkanone",
          "x": 9.0,
          "y": 0.0,
          "ic": "tank",
          "fx": ["Piercing +5%","Hard attack +5%","Soft attack +10%"],
          "for": ["anti_tank_equipment"],
          "special": true
        },
        {
          "id": "GER_mio_trait_7_5_cm_pak",
          "name": "7.5cm Panzerabwehrkanone",
          "x": 9.0,
          "y": 1.0,
          "ic": "swords",
          "fx": ["Piercing +5%","Hard attack +10%"],
          "any": ["GER_mio_trait_3_7_cm_pak"],
          "for": ["anti_tank_equipment"],
          "special": true
        },
        {
          "id": "GER_mio_trait_versatile_carriage",
          "name": "Versatile Carriage",
          "x": 5.0,
          "y": 1.0,
          "ic": "gear",
          "fx": ["Piercing +3%","Hard attack +3%","Air Attack: +5%"],
          "all": ["generic_mio_trait_rapid_fire","generic_mio_trait_advanced_barrel_forging"],
          "for": ["anti_tank_equipment","anti_air_equipment"],
          "special": true
        },
        {
          "id": "GER_mio_trait_dual_recoil_mechanism",
          "name": "Dual-Recoil Mechanism",
          "x": 7.0,
          "y": 1.0,
          "ic": "artillery",
          "fx": ["Soft attack +10%","Production cost +5%"],
          "all": ["generic_mio_trait_advanced_barrel_forging","generic_mio_trait_big_guns"],
          "for": ["artillery_equipment"],
          "special": true
        }
      ]
    },
    "GER_mauser_organization": {
      "id": "GER_mauser_organization",
      "name": "Mauser",
      "types": ["infantry_equipment"],
      "ic": "gear",
      "headers": [{"t":"Design and Production","x":3.0},{"t":"Anti-Tank","x":8.0}],
      "initial": {
        "name": "Infantry Weapons Manufacturer",
        "fx": ["Soft attack +3%","Production efficiency cap factor +3%","Military industrial organization research bonus +5%"]
      },
      "traits": [
        {"id":"generic_mio_trait_drum_pattern_sights","name":"Drum Pattern Sights","x":1.0,"y":0.0,"ic":"fort","fx":["Defense +3.5%"]},
        {
          "id": "generic_mio_trait_reinforced_stocks",
          "name": "Reinforced Stocks",
          "x": 4.0,
          "y": 0.0,
          "ic": "fort",
          "fx": ["Soft attack +2.5%","Reliability +3%"]
        },
        {
          "id": "generic_mio_trait_bolt_action",
          "name": "Bolt-Action Rifles",
          "x": 3.0,
          "y": 2.0,
          "ic": "factory",
          "fx": ["Soft attack -3%","Production efficiency gain factor +5%"],
          "all": ["generic_mio_trait_reinforced_stocks"],
          "ex": ["generic_mio_trait_semi_auto"]
        },
        {
          "id": "generic_mio_trait_semi_auto",
          "name": "Semi-Auto Rifles",
          "x": 5.0,
          "y": 2.0,
          "ic": "swords",
          "fx": ["Soft attack +3%","Breakthrough +3%","Production efficiency gain factor -5%"],
          "all": ["generic_mio_trait_reinforced_stocks"],
          "ex": ["generic_mio_trait_bolt_action"]
        },
        {
          "id": "generic_mio_trait_medium_machineguns",
          "name": "Medium Machine Guns Production",
          "x": 3.0,
          "y": 4.0,
          "ic": "swords",
          "fx": ["Breakthrough +6%","Production cost +8%"],
          "any": ["generic_mio_trait_semi_auto","generic_mio_trait_bolt_action"]
        },
        {
          "id": "generic_mio_trait_advanced_barrel_forging",
          "name": "Advanced Barrel Forging",
          "x": 2.0,
          "y": 2.0,
          "ic": "factory",
          "fx": ["Production efficiency gain factor +3%"],
          "any": ["generic_mio_trait_reinforced_stocks","generic_mio_trait_drum_pattern_sights"]
        },
        {
          "id": "generic_mio_trait_mass_rifle_production",
          "name": "Mass Rifle Production",
          "x": 2.0,
          "y": 4.0,
          "ic": "gear",
          "fx": ["Production efficiency cap factor +3%","Production cost factor -3%","Military industrial organization design team assign cost -30%"],
          "all": ["generic_mio_trait_advanced_barrel_forging"]
        },
        {
          "id": "generic_mio_trait_quality_materials",
          "name": "Quality Materials",
          "x": 1.0,
          "y": 2.0,
          "ic": "fort",
          "fx": ["Reliability +5%"],
          "all": ["generic_mio_trait_drum_pattern_sights"]
        },
        {
          "id": "generic_mio_trait_improved_small_arms_bullet_design",
          "name": "Improved Small Arms Bullet Design",
          "x": 0.0,
          "y": 4.0,
          "ic": "swords",
          "fx": ["Soft attack +5%","Breakthrough +3%"],
          "all": ["generic_mio_trait_quality_materials"],
          "ex": ["generic_mio_trait_armor_piercing_rounds"]
        },
        {
          "id": "generic_mio_trait_armor_piercing_rounds",
          "name": "Armor-Piercing Rounds",
          "x": 1.0,
          "y": 4.0,
          "ic": "swords",
          "fx": ["Piercing +25%","Hard attack +5%"],
          "all": ["generic_mio_trait_quality_materials"],
          "ex": ["generic_mio_trait_improved_small_arms_bullet_design"]
        },
        {
          "id": "generic_mio_trait_heavy_anti_armor_ammunition",
          "name": "Heavy Anti-Armor Ammunition",
          "x": 7.0,
          "y": 0.0,
          "ic": "swords",
          "fx": ["Hard attack +10%","Piercing +25%"]
        },
        {
          "id": "generic_mio_trait_vehicle_mounted_capabilities",
          "name": "Vehicle Mounted Capabilities",
          "x": 6.0,
          "y": 2.0,
          "ic": "swords",
          "fx": ["Breakthrough +6%","Production cost +5%"],
          "all": ["generic_mio_trait_heavy_anti_armor_ammunition"],
          "ex": ["generic_mio_trait_rubber_cushioned_buttpad"]
        },
        {
          "id": "generic_mio_trait_rubber_cushioned_buttpad",
          "name": "Improved Rifle Recoil",
          "x": 8.0,
          "y": 2.0,
          "ic": "swords",
          "fx": ["Breakthrough +2%"],
          "all": ["generic_mio_trait_heavy_anti_armor_ammunition"],
          "ex": ["generic_mio_trait_vehicle_mounted_capabilities"]
        },
        {
          "id": "generic_mio_trait_anti_vechicle_land_mines",
          "name": "Anti-Vehicle Land Mines",
          "x": 7.0,
          "y": 4.0,
          "ic": "helmet",
          "fx": ["Defense +4%","Hard attack +3%","Production cost +5%"],
          "any": ["generic_mio_trait_rubber_cushioned_buttpad","generic_mio_trait_vehicle_mounted_capabilities"]
        },
        {
          "id": "GER_mio_trait_experienced_manufacturer",
          "name": "Experienced Manufacturer",
          "x": 0.0,
          "y": 0.0,
          "ic": "fort",
          "fx": ["Reliability +5%"],
          "special": true
        },
        {
          "id": "GER_mio_trait_export_models",
          "name": "Export Models",
          "x": 0.0,
          "y": 1.0,
          "ic": "gear",
          "fx": ["Production efficiency cap factor +3%","Production cost factor -3%"],
          "special": true
        },
        {
          "id": "GER_mio_trait_karabiner",
          "name": "Karabiner",
          "x": 4.0,
          "y": 1.0,
          "ic": "factory",
          "fx": ["Soft attack +3%","Production capacity factor +3%"],
          "all": ["generic_mio_trait_reinforced_stocks"],
          "special": true
        },
        {
          "id": "GER_mio_trait_sturmgewehr",
          "name": "Sturmgewehr",
          "x": 5.0,
          "y": 4.0,
          "ic": "helmet",
          "fx": ["Soft attack +7%","Breakthrough +3%","Production cost factor +5%"],
          "any": ["generic_mio_trait_semi_auto","generic_mio_trait_bolt_action"],
          "special": true
        }
      ]
    },
    "GER_opel_organization": {
      "id": "GER_opel_organization",
      "name": "Opel",
      "types": ["motorized_equipment","mechanized_equipment","motorized_rocket_equipment"],
      "ic": "gear",
      "headers": [{"t":"Motorized","x":1.0},{"t":"Mechanized","x":7.0}],
      "initial": {"name":"Automotive Manufacturer","fx":["Military industrial organization research bonus +5%"]},
      "traits": [
        {
          "id": "generic_mio_trait_composite_cargo_bed",
          "name": "Composite Cargo Bed",
          "x": 0.0,
          "y": 0.0,
          "ic": "factory",
          "fx": ["Reliability -7%","Production cost -5%"],
          "ex": ["generic_mio_trait_steel_cargo_bed"],
          "for": ["motorized_equipment","motorized_rocket_equipment"]
        },
        {
          "id": "generic_mio_trait_steel_cargo_bed",
          "name": "Steel Cargo Bed",
          "x": 2.0,
          "y": 0.0,
          "ic": "fort",
          "fx": ["Reliability +5%","Production resource need factor +2%"],
          "ex": ["generic_mio_trait_composite_cargo_bed"],
          "for": ["motorized_equipment","motorized_rocket_equipment"]
        },
        {
          "id": "generic_mio_trait_all_wheel_drive",
          "name": "All Wheel Drive",
          "x": 1.0,
          "y": 2.0,
          "ic": "swords",
          "fx": ["Breakthrough +3.5%"],
          "any": ["generic_mio_trait_composite_cargo_bed","generic_mio_trait_steel_cargo_bed"],
          "for": ["motorized_equipment","motorized_rocket_equipment"]
        },
        {
          "id": "generic_mio_trait_attached_wood_gas_generator",
          "name": "Attached Wood Gas Generator",
          "x": 0.0,
          "y": 4.0,
          "ic": "road",
          "fx": ["Fuel use -5%"],
          "all": ["generic_mio_trait_all_wheel_drive"],
          "ex": ["generic_mio_trait_high_powered_engine"],
          "for": ["motorized_equipment","motorized_rocket_equipment"]
        },
        {
          "id": "generic_mio_trait_high_powered_engine",
          "name": "High-Powered Engine",
          "x": 2.0,
          "y": 4.0,
          "ic": "road",
          "fx": ["Fuel use +5%","Max speed +5%"],
          "all": ["generic_mio_trait_all_wheel_drive"],
          "ex": ["generic_mio_trait_attached_wood_gas_generator"],
          "for": ["motorized_equipment","motorized_rocket_equipment"]
        },
        {
          "id": "generic_mio_trait_medium_machinegun_mounts",
          "name": "Side-Mounted Medium Machine Guns",
          "x": 4.0,
          "y": 0.0,
          "ic": "swords",
          "fx": ["Breakthrough +3%"]
        },
        {
          "id": "generic_mio_trait_armored_pulpit_mount",
          "name": "Armored Pulpit Mount",
          "x": 4.0,
          "y": 2.0,
          "ic": "fort",
          "fx": ["Hardness +5%"],
          "all": ["generic_mio_trait_medium_machinegun_mounts"]
        },
        {
          "id": "generic_mio_trait_advanced_artillery_racks",
          "name": "Advanced Artillery Racks",
          "x": 3.0,
          "y": 4.0,
          "ic": "swords",
          "fx": ["Soft attack +3.5%","Production cost +6%"],
          "all": ["generic_mio_trait_armored_pulpit_mount"],
          "ex": ["generic_mio_trait_heavy_machinegun_mount","generic_mio_trait_mounted_light_anti_tank_gun"],
          "for": ["motorized_rocket_equipment"]
        },
        {
          "id": "generic_mio_trait_heavy_machinegun_mount",
          "name": "Heavy Mounted Machine Gun",
          "x": 5.0,
          "y": 4.0,
          "ic": "swords",
          "fx": ["Breakthrough +4%","Production cost +1%"],
          "all": ["generic_mio_trait_armored_pulpit_mount"],
          "ex": ["generic_mio_trait_advanced_artillery_racks","generic_mio_trait_mounted_light_anti_tank_gun"],
          "for": ["mechanized_equipment","amphibious_mechanized_equipment","motorized_equipment"]
        },
        {
          "id": "generic_mio_trait_mounted_light_anti_tank_gun",
          "name": "Mounted Light Anti-Tank Gun",
          "x": 6.0,
          "y": 4.0,
          "ic": "swords",
          "fx": ["Piercing +10%","Hard attack +2%"],
          "all": ["generic_mio_trait_bulletproof_panels"],
          "ex": ["generic_mio_trait_advanced_artillery_racks","generic_mio_trait_heavy_machinegun_mount"],
          "for": ["mechanized_equipment","amphibious_mechanized_equipment"]
        },
        {
          "id": "generic_mio_trait_open_chassi",
          "name": "Open Chassis",
          "x": 6.0,
          "y": 0.0,
          "ic": "factory",
          "fx": ["Defense -2%","Production cost -3%"],
          "ex": ["generic_mio_trait_closed_chassi"],
          "for": ["mechanized_equipment","amphibious_mechanized_equipment"]
        },
        {
          "id": "generic_mio_trait_closed_chassi",
          "name": "Closed Chassis",
          "x": 8.0,
          "y": 0.0,
          "ic": "ship",
          "fx": ["Armor +5%"],
          "ex": ["generic_mio_trait_open_chassi"],
          "for": ["mechanized_equipment","amphibious_mechanized_equipment"]
        },
        {
          "id": "generic_mio_trait_bulletproof_panels",
          "name": "Bulletproof panels",
          "x": 7.0,
          "y": 2.0,
          "ic": "fort",
          "fx": ["Hardness +5%"],
          "any": ["generic_mio_trait_closed_chassi","generic_mio_trait_open_chassi"],
          "for": ["mechanized_equipment","amphibious_mechanized_equipment"]
        },
        {
          "id": "generic_mio_trait_light_flame_projectors",
          "name": "Light Flame Projectors",
          "x": 7.0,
          "y": 4.0,
          "ic": "swords",
          "fx": ["Breakthrough +3.5%"],
          "all": ["generic_mio_trait_bulletproof_panels"],
          "for": ["mechanized_equipment","amphibious_mechanized_equipment"]
        },
        {
          "id": "generic_mio_trait_land_mine_racks",
          "name": "Land Mine Racks",
          "x": 8.0,
          "y": 4.0,
          "ic": "ship",
          "fx": ["Defense +6%","Max speed -2%"],
          "all": ["generic_mio_trait_bulletproof_panels"],
          "for": ["mechanized_equipment","amphibious_mechanized_equipment"]
        },
        {
          "id": "GER_mio_trait_continental_ag_tires",
          "name": "Continental AG Tires",
          "x": 9.0,
          "y": 0.0,
          "ic": "fort",
          "fx": ["Reliability +5%","Production cost -2%"],
          "special": true
        },
        {
          "id": "GER_mio_trait_ford_facilities",
          "name": "Ford Facilities",
          "x": 9.0,
          "y": 1.0,
          "ic": "factory",
          "fx": ["Production capacity factor +5%"],
          "special": true
        },
        {
          "id": "GER_mio_trait_efficiency_in_mass_production",
          "name": "Efficiency in Mass Production",
          "x": 9.0,
          "y": 2.0,
          "ic": "factory",
          "fx": ["Production efficiency cap factor +5%"],
          "any": ["GER_mio_trait_ford_facilities"],
          "special": true
        },
        {
          "id": "GER_mio_trait_improved_engines",
          "name": "Improved Engines",
          "x": 8.0,
          "y": 2.0,
          "ic": "plane",
          "fx": ["Max speed +5%","Reliability +3%","Production cost +2%"],
          "any": ["GER_mio_trait_ford_facilities"],
          "special": true
        }
      ]
    },
    "GER_carl_walther_organization": {
      "id": "GER_carl_walther_organization",
      "name": "Carl Walther",
      "types": ["infantry_equipment","support_equipment"],
      "ic": "gear",
      "headers": [{"t":"Support","x":1.0},{"t":"Weapons","x":6.5}],
      "initial": {"name":"Support Equipment Manufacturer","fx":["Military industrial organization research bonus +5%"]},
      "traits": [
        {
          "id": "generic_mio_trait_material_recycling",
          "name": "Material Recycling",
          "x": 1.0,
          "y": 0.0,
          "ic": "helmet",
          "fx": ["Production resource need factor -15%"],
          "for": ["support_equipment"]
        },
        {
          "id": "generic_mio_trait_scrap_melting",
          "name": "Scrap Melting",
          "x": 0.0,
          "y": 1.0,
          "ic": "coin",
          "fx": ["Reliability -10%","Production resource need factor -10%"],
          "all": ["generic_mio_trait_material_recycling"],
          "ex": ["generic_mio_trait_high_quality_material_blend"],
          "for": ["support_equipment"]
        },
        {
          "id": "generic_mio_trait_high_quality_material_blend",
          "name": "High-Quality Material Blend",
          "x": 2.0,
          "y": 1.0,
          "ic": "factory",
          "fx": ["Production efficiency cap factor +5%","Production resource need factor +10%"],
          "all": ["generic_mio_trait_material_recycling"],
          "ex": ["generic_mio_trait_scrap_melting"],
          "for": ["support_equipment"]
        },
        {
          "id": "generic_mio_trait_mass_production",
          "name": "Mass Production",
          "x": 1.0,
          "y": 3.0,
          "ic": "factory",
          "fx": ["Production efficiency gain factor +5%"],
          "any": ["generic_mio_trait_high_quality_material_blend","generic_mio_trait_scrap_melting"],
          "for": ["support_equipment"]
        },
        {
          "id": "generic_mio_trait_research_program",
          "name": "Research Program",
          "x": 0.0,
          "y": 4.0,
          "ic": "gear",
          "fx": ["Military industrial organization research bonus +6%"],
          "all": ["generic_mio_trait_mass_production"],
          "ex": ["generic_mio_trait_efficient_scale_up"]
        },
        {
          "id": "generic_mio_trait_efficient_scale_up",
          "name": "Efficient Scale-up",
          "x": 2.0,
          "y": 4.0,
          "ic": "factory",
          "fx": ["Production capacity factor +5%"],
          "all": ["generic_mio_trait_mass_production"],
          "ex": ["generic_mio_trait_research_program"],
          "for": ["support_equipment"]
        },
        {
          "id": "generic_mio_trait_private_scientists_program",
          "name": "Private Scientists Program",
          "x": 5.0,
          "y": 0.0,
          "ic": "gear",
          "fx": ["Military industrial organization research bonus +5%"]
        },
        {
          "id": "generic_mio_trait_private_tenders",
          "name": "Private Tenders",
          "x": 5.0,
          "y": 1.0,
          "ic": "gear",
          "fx": ["Military industrial organization funds gain +0.1"],
          "all": ["generic_mio_trait_private_scientists_program"]
        },
        {
          "id": "generic_mio_trait_anti_tank_rifle",
          "name": "Anti-Tank Rifle",
          "x": 8.0,
          "y": 0.0,
          "ic": "swords",
          "fx": ["Piercing +10%"],
          "for": ["infantry_equipment"]
        },
        {
          "id": "generic_mio_trait_single_shot_man_portable_anti_tank_system",
          "name": "Single-Shot Man-Portable Anti-Tank System",
          "x": 8.0,
          "y": 3.0,
          "ic": "swords",
          "fx": ["Hard attack +10%","Production cost +5%"],
          "all": ["generic_mio_trait_anti_tank_rifle"],
          "ex": ["generic_mio_trait_light_mortar"],
          "for": ["infantry_equipment"]
        },
        {
          "id": "generic_mio_trait_small_sidearms",
          "name": "Small Sidearms",
          "x": 6.0,
          "y": 2.0,
          "ic": "fort",
          "fx": ["Defense +2%"],
          "all": ["generic_mio_trait_private_tenders"],
          "for": ["infantry_equipment"]
        },
        {
          "id": "generic_mio_trait_light_mortar",
          "name": "Light Mortar",
          "x": 6.0,
          "y": 3.0,
          "ic": "swords",
          "fx": ["Breakthrough +5%","Soft attack +2%","Production cost +6%"],
          "all": ["generic_mio_trait_small_sidearms"],
          "ex": ["generic_mio_trait_single_shot_man_portable_anti_tank_system"],
          "for": ["infantry_equipment"]
        },
        {
          "id": "generic_mio_trait_pontoons",
          "name": "Pontoons",
          "x": 4.0,
          "y": 2.0,
          "ic": "road",
          "fx": ["Max speed +5%","Production cost +3.5%"],
          "all": ["generic_mio_trait_private_tenders"],
          "for": ["infantry_equipment"]
        },
        {
          "id": "GER_mio_trait_innovative_safety_features",
          "name": "Innovative Safety Features",
          "x": 6.0,
          "y": 1.0,
          "ic": "gear",
          "fx": [
            "Military industrial organization research bonus +5%",
            "Military industrial organization design team assign cost -5%",
            "Military industrial organization industrial manufacturer assign cost -5%"
          ],
          "all": ["generic_mio_trait_private_scientists_program"],
          "special": true
        },
        {
          "id": "GER_mio_trait_policiary_equipment",
          "name": "Police Equipment",
          "x": 5.0,
          "y": 2.0,
          "ic": "helmet",
          "fx": ["Production cost -5%","Military industrial organization funds gain +0.05"],
          "all": ["generic_mio_trait_private_tenders"],
          "for": ["support_equipment"],
          "special": true
        }
      ]
    },
    "GER_auto_union_organization": {
      "id": "GER_auto_union_organization",
      "name": "Auto Union",
      "types": ["armored_car_equipment"],
      "ic": "gear",
      "headers": [{"t":"Design and Production","x":3.0},{"t":"Equipment and Specialization","x":7.0}],
      "initial": {"name":"Armored Car Designer","fx":["Armor +5%","Defense +5%","Production cost -5%"]},
      "traits": [
        {"id":"generic_mio_trait_simplified_suspension","name":"Simplified Suspension","x":1.0,"y":0.0,"ic":"fort","fx":["Reliability +5%"]},
        {"id":"generic_mio_trait_crew_ergonomics","name":"Crew Ergonomics","x":5.0,"y":0.0,"ic":"fort","fx":["Max speed +2%","Defense +2%"]},
        {
          "id": "generic_mio_trait_reinforced_wheels",
          "name": "Reinforced Wheels",
          "x": 1.0,
          "y": 2.0,
          "ic": "plane",
          "fx": ["Reliability +5%","Max speed +5%"],
          "any": ["generic_mio_trait_simplified_suspension"]
        },
        {
          "id": "generic_mio_trait_command_upgrades",
          "name": "Visibility Improvements",
          "x": 5.0,
          "y": 2.0,
          "ic": "swords",
          "fx": ["Breakthrough +5%"],
          "any": ["generic_mio_trait_crew_ergonomics"]
        },
        {
          "id": "generic_mio_trait_standardized_components",
          "name": "Standardized Components",
          "x": 3.0,
          "y": 1.0,
          "ic": "fort",
          "fx": ["Production efficiency gain factor +15%","Production resource need factor -15%"],
          "all": ["generic_mio_trait_simplified_suspension","generic_mio_trait_crew_ergonomics"]
        },
        {
          "id": "generic_mio_trait_improved_tooling",
          "name": "Improved Tooling",
          "x": 3.0,
          "y": 3.0,
          "ic": "fort",
          "fx": ["Production efficiency cap factor +10%"],
          "all": ["generic_mio_trait_reinforced_wheels","generic_mio_trait_standardized_components","generic_mio_trait_command_upgrades"]
        },
        {
          "id": "generic_mio_trait_mass_production",
          "name": "Mass Production",
          "x": 2.0,
          "y": 4.0,
          "ic": "fort",
          "fx": ["Production cost factor -5%","Production efficiency gain factor +10%"],
          "any": ["generic_mio_trait_improved_tooling"],
          "ex": ["generic_mio_trait_quality_improvements"]
        },
        {
          "id": "generic_mio_trait_quality_improvements",
          "name": "Quality Improvements",
          "x": 4.0,
          "y": 4.0,
          "ic": "tank",
          "fx": ["Armor +10%","Defense +10%"],
          "any": ["generic_mio_trait_improved_tooling"],
          "ex": ["generic_mio_trait_mass_production"]
        },
        {
          "id": "generic_mio_trait_defensive_equipment",
          "name": "Pintle-mounted Weapons",
          "x": 7.0,
          "y": 0.0,
          "ic": "swords",
          "fx": ["Soft attack +2%","Defense +2%"]
        },
        {
          "id": "generic_mio_trait_long_barreled_guns",
          "name": "Long-Barreled Guns",
          "x": 7.0,
          "y": 2.0,
          "ic": "fort",
          "fx": ["Piercing +5%","Hard attack +5%"],
          "all": ["generic_mio_trait_crew_ergonomics","generic_mio_trait_defensive_equipment"]
        },
        {
          "id": "generic_mio_trait_heavy_anti_tank_gun",
          "name": "Heavy Anti-Tank Gun",
          "x": 6.0,
          "y": 4.0,
          "ic": "swords",
          "fx": ["Armor +5%","Hard attack +5%"],
          "any": ["generic_mio_trait_long_barreled_guns"],
          "ex": ["generic_mio_trait_officer_support_car"]
        },
        {
          "id": "generic_mio_trait_officer_support_car",
          "name": "Officer Support Car",
          "x": 8.0,
          "y": 4.0,
          "ic": "swords",
          "fx": ["Soft attack +5%","Production cost -3%"],
          "any": ["generic_mio_trait_long_barreled_guns"],
          "ex": ["generic_mio_trait_heavy_anti_tank_gun"]
        },
        {
          "id": "GER_mio_trait_racing_pedigree",
          "name": "Racing Pedigree",
          "x": 0.0,
          "y": 1.0,
          "ic": "plane",
          "fx": ["Max speed +7%"],
          "all": ["generic_mio_trait_simplified_suspension"],
          "special": true
        },
        {
          "id": "GER_mio_trait_military_exclusivity",
          "name": "Military Exclusivity",
          "x": 0.0,
          "y": 4.0,
          "ic": "fort",
          "fx": ["Production efficiency gain factor +5%","Production efficiency cap factor +5%"],
          "all": ["GER_mio_trait_racing_pedigree","generic_mio_trait_improved_tooling"],
          "special": true
        },
        {
          "id": "GER_mio_trait_schwerer_panzerspahwagen",
          "name": "Schwerer Panzerspähwagen",
          "x": 8.0,
          "y": 1.0,
          "ic": "fort",
          "fx": ["Breakthrough +3%","Armor +5%"],
          "all": ["generic_mio_trait_defensive_equipment"],
          "special": true
        }
      ]
    },
    "GER_henschel_kassel_organization": {
      "id": "GER_henschel_kassel_organization",
      "name": "Henschel-Kassel",
      "types": ["train_equipment","railway_gun_equipment","support_equipment"],
      "ic": "gear",
      "headers": [{"t":"Design and Production","x":4.0},{"t":"Support","x":1.0},{"t":"Weapons","x":7.0}],
      "initial": {"name":"Train Manufacturer","fx":["Production efficiency cap factor +5%","Military industrial organization research bonus +10%"]},
      "traits": [
        {
          "id": "generic_mio_trait_material_improvements",
          "name": "Material Improvements",
          "x": 3.0,
          "y": 0.0,
          "ic": "tank",
          "fx": ["Production efficiency cap factor +5%"],
          "for": ["train_equipment"]
        },
        {
          "id": "generic_mio_trait_joint_stock_scheme",
          "name": "Joint Stock Schemes",
          "x": 5.0,
          "y": 0.0,
          "ic": "gear",
          "fx": ["Production efficiency gain factor +2%","Military industrial organization funds gain +0.2"],
          "for": ["train_equipment"]
        },
        {
          "id": "generic_rapid_production_upscaling",
          "name": "Rapid Production Upscaling",
          "x": 6.0,
          "y": 1.0,
          "ic": "factory",
          "fx": [
            "Production efficiency gain factor +3%",
            "Military industrial organization funds gain +0.05",
            "Military industrial organization size up requirement -25%"
          ],
          "all": ["generic_mio_trait_joint_stock_scheme"],
          "for": ["train_equipment"]
        },
        {
          "id": "generic_mio_trait_additional_flak_wagons",
          "name": "Additional Flak Wagons",
          "x": 7.0,
          "y": 0.0,
          "ic": "plane",
          "fx": ["Air Attack: +10%"],
          "for": ["train_equipment"]
        },
        {
          "id": "generic_mio_trait_improved_axle_fitting",
          "name": "Improved Axle Fitting",
          "x": 4.0,
          "y": 1.0,
          "ic": "factory",
          "fx": ["Production efficiency gain factor +5%","Production resource penalty factor -5%"],
          "any": ["generic_mio_trait_material_improvements","generic_mio_trait_joint_stock_scheme"],
          "for": ["train_equipment","railway_gun_equipment"]
        },
        {
          "id": "generic_mio_trait_improved_wagon_design",
          "name": "Improved Wagon Design",
          "x": 1.0,
          "y": 2.0,
          "ic": "factory",
          "fx": ["Reliability +2%","Production cost factor -3%"],
          "all": ["generic_mio_trait_improved_axle_fitting"],
          "for": ["support_equipment"]
        },
        {
          "id": "generic_mio_trait_improved_loading",
          "name": "Improved Loading Methods",
          "x": 1.0,
          "y": 3.0,
          "ic": "factory",
          "fx": ["Production efficiency gain factor +3%"],
          "all": ["generic_mio_trait_improved_wagon_design"],
          "for": ["support_equipment"]
        },
        {
          "id": "CZE_mio_trait_minimalist_wagon_design",
          "name": "Minimalist Wagon Design",
          "x": 1.0,
          "y": 4.0,
          "ic": "helmet",
          "fx": ["Production resource need factor -5%","Production resource penalty factor -1%"],
          "all": ["generic_mio_trait_improved_loading"],
          "for": ["support_equipment"]
        },
        {
          "id": "generic_mio_trait_ugly_ducklings",
          "name": "Ugly Ducklings",
          "x": 3.0,
          "y": 2.0,
          "ic": "factory",
          "fx": ["Production cost factor -5%","Production resource penalty factor -5%"],
          "all": ["generic_mio_trait_improved_axle_fitting"],
          "ex": ["generic_mio_trait_armor_plating"],
          "for": ["train_equipment"]
        },
        {
          "id": "generic_mio_trait_armor_plating",
          "name": "Armor Plating",
          "x": 5.0,
          "y": 2.0,
          "ic": "fort",
          "fx": ["Armor +10%","Production resource penalty factor +10%"],
          "all": ["generic_mio_trait_improved_axle_fitting"],
          "ex": ["generic_mio_trait_ugly_ducklings"],
          "for": ["train_equipment"]
        },
        {
          "id": "generic_mio_trait_simplified_rail_carrier",
          "name": "Simplified Rail Carrier",
          "x": 7.0,
          "y": 2.0,
          "ic": "coin",
          "fx": ["Production capacity factor +10%"],
          "all": ["generic_mio_trait_improved_axle_fitting"],
          "for": ["railway_gun"]
        },
        {
          "id": "generic_mio_trait_improved_barrel_lining",
          "name": "Improved Barrel Lining",
          "x": 7.0,
          "y": 3.0,
          "ic": "tank",
          "fx": ["Reliability +10%"],
          "any": ["generic_mio_trait_simplified_rail_carrier"],
          "for": ["railway_gun"]
        },
        {
          "id": "generic_mio_trait_quick_design_turnarounds",
          "name": "Quick Design Turnarounds",
          "x": 4.0,
          "y": 3.0,
          "ic": "road",
          "fx": [
            "Production efficiency gain factor +5%",
            "Military industrial organization design team assign cost -100%",
            "Military industrial organization design team change cost -100%"
          ],
          "any": ["generic_mio_trait_armor_plating","generic_mio_trait_ugly_ducklings"],
          "for": ["train_equipment"]
        },
        {
          "id": "generic_mio_trait_salavage_destoryed_locomotives",
          "name": "Salvage Destroyed Locomotives",
          "x": 3.0,
          "y": 4.0,
          "ic": "coin",
          "fx": ["Production resource need factor -25%"],
          "all": ["generic_mio_trait_quick_design_turnarounds"],
          "for": ["train_equipment"]
        },
        {
          "id": "generic_mio_trait_train_production_at_scale",
          "name": "Production at Scale",
          "x": 4.0,
          "y": 4.0,
          "ic": "factory",
          "fx": ["Production capacity factor +5%"],
          "all": ["generic_mio_trait_quick_design_turnarounds"],
          "for": ["train_equipment"]
        },
        {
          "id": "generic_mio_trait_machine_assembly",
          "name": "Machine Assembly",
          "x": 5.0,
          "y": 4.0,
          "ic": "factory",
          "fx": ["Production efficiency cap factor +5%"],
          "all": ["generic_mio_trait_quick_design_turnarounds"],
          "for": ["train_equipment"]
        },
        {
          "id": "GER_mio_trait_lokomotivfabrik_floridsdorf",
          "name": "Lokomotivfabrik Floridsdorf Facilities",
          "x": 9.0,
          "y": 0.0,
          "ic": "gear",
          "fx": ["Production capacity factor +5%"],
          "for": ["train_equipment"],
          "special": true
        }
      ]
    }
  },
  "types": {
    "mio_cat_eq_all_heavy_tank": "All Heavy Tank Equipment",
    "armor": "Armor technology",
    "mio_cat_eq_all_medium_tank": "All Medium Tank Equipment",
    "light_tank_artillery_chassis": "Light SP Artillery",
    "medium_tank_artillery_chassis": "Medium SP Artillery",
    "heavy_tank_artillery_chassis": "Heavy SP Artillery",
    "modern_tank_artillery_chassis": "Modern SP Artillery",
    "mio_cat_eq_all_light_tank": "All Light Tank Equipment",
    "screen_ship": "Screens",
    "mio_cat_eq_all_battleship": "All Battleship",
    "mio_cat_eq_all_cruiser": "All Cruiser Ships",
    "capital_ship": "Capital Ships",
    "submarine": "Submarine",
    "ship_hull_submarine": "Submarine",
    "mio_cat_eq_all_carrier": "All Carrier Ships",
    "mio_cat_eq_all_destroyer": "All Destroyer Ship",
    "mio_cat_eq_only_light_fighter": "Fighter and Carrier Fighter",
    "small_plane_cas_airframe": "Close Air Support",
    "cv_small_plane_cas_airframe": "Carrier Close Air Support",
    "mio_cat_eq_all_small_plane": "All Small and Carrier Planes",
    "mio_cat_eq_all_medium_plane": "All Medium Planes",
    "transport_plane_equipment": "Transport Plane",
    "mio_cat_eq_only_strategic_bomber": "Strategic Bomber",
    "large_plane_maritime_patrol_plane_airframe": "Naval Patrol Bomber",
    "small_plane_naval_bomber_airframe": "Naval Bomber",
    "cv_small_plane_airframe": "Carrier Fighter",
    "cv_small_plane_naval_bomber_airframe": "Carrier Naval Bomber",
    "helicopter_equipment": "Helicopter",
    "artillery_equipment": "Towed Artillery",
    "anti_tank_equipment": "Towed Anti-Tank",
    "anti_air_equipment": "Towed Anti-Aircraft",
    "rocket_artillery_equipment": "Towed Rocket Artillery",
    "infantry_equipment": "Infantry Equipment",
    "motorized_equipment": "Truck",
    "mechanized_equipment": "Mechanized",
    "motorized_rocket_equipment": "Motorized Rocket Artillery",
    "support_equipment": "Support Equipment",
    "armored_car_equipment": "Armored Car",
    "train_equipment": "Train",
    "railway_gun_equipment": "Railway Artillery"
  }
});
