/* Doctrines and army/navy/air spirits, facts only, extracted from the HoI4 1.19.1 game files (common/doctrines,
   common/ideas/*_spirits.txt, common/idea_tags) with every DLC enabled. Effects are summarised in our own words;
   reward mastery is cumulative (100 per reward unless the file says otherwise). */
registerDoctrines({
  "patch": "1.19.1",
  "folders": [
    {"id":"land","name":"Land Doctrine"},
    {"id":"naval","name":"Naval Doctrine"},
    {"id":"air","name":"Air Doctrine"},
    {"id":"special_forces","name":"Special Forces"}
  ],
  "tracks": {
    "fighter_aircraft": {"id":"fighter_aircraft","name":"Fighter Aircraft","folder":"air"},
    "strike_aircraft": {"id":"strike_aircraft","name":"Strike Aircraft","folder":"air"},
    "medium_aircraft": {"id":"medium_aircraft","name":"Medium Aircraft","folder":"air"},
    "heavy_aircraft": {"id":"heavy_aircraft","name":"Heavy Aircraft","folder":"air"},
    "infantry": {"id":"infantry","name":"Infantry","folder":"land"},
    "combat_support": {"id":"combat_support","name":"Artillery & Combat Support","folder":"land"},
    "armor": {"id":"armor","name":"Armor","folder":"land"},
    "operations": {"id":"operations","name":"Operations","folder":"land"},
    "capital_ships": {"id":"capital_ships","name":"Capital Ships","folder":"naval"},
    "carriers": {"id":"carriers","name":"Carriers","folder":"naval"},
    "screens": {"id":"screens","name":"Screens","folder":"naval"},
    "submarines": {"id":"submarines","name":"Submarines","folder":"naval"},
    "special_forces_first": {"id":"special_forces_first","name":"Special Forces","folder":"special_forces"},
    "special_forces_second": {"id":"special_forces_second","name":"Special Forces","folder":"special_forces"}
  },
  "grand": {
    "new_strategic_destruction": {
      "id": "new_strategic_destruction",
      "name": "Strategic Destruction",
      "folder": "air",
      "xp": 100,
      "xpType": "air",
      "tracks": ["fighter_aircraft","strike_aircraft","medium_aircraft","heavy_aircraft"],
      "fx": ["Escort Efficiency +25%","Air strategic bomber bombing factor +20%"],
      "milestones": [
        ["Fighter: agility +10%","Interception Mission Efficiency +20%"],
        ["Air Superiority +15%","Naval Mission Efficiency +15%"],
        ["Heavy Fighter: agility +10%","Air strategic bomber defence factor +25%"],
        ["Air strategic bomber bombing factor +20%","Air mission xp gain factor +5%"]
      ]
    },
    "new_battlefield_support": {
      "id": "new_battlefield_support",
      "name": "Battlefield Support",
      "folder": "air",
      "xp": 100,
      "xpType": "air",
      "tracks": ["fighter_aircraft","strike_aircraft","medium_aircraft","heavy_aircraft"],
      "fx": ["Fighter Detection +15%","Air Support Mission Efficiency +20%"],
      "milestones": [
        ["Ace generation chance +15%","Air Superiority +15%"],
        ["Ground support +20%","Close Air Support: agility +20%"],
        ["Air mission xp gain factor +10%","Tactical Bomber: strategic bombing +10%"],
        ["Air strategic bomber bombing factor +15%","Interception Detection +10%"]
      ]
    },
    "new_operational_integrity": {
      "id": "new_operational_integrity",
      "name": "Operational Integrity",
      "folder": "air",
      "xp": 100,
      "xpType": "air",
      "tracks": ["fighter_aircraft","strike_aircraft","medium_aircraft","heavy_aircraft"],
      "fx": ["Interception Detection +20%","Air Superiority Mission Efficiency +10%"],
      "milestones": [
        ["Fighter: agility +10%","Air mission xp gain factor +15%"],
        ["Ace generation chance +10%","Air Superiority +10%"],
        ["Tactical Bombers: strategic bombing +20%","Heavy Fighter: agility +10%"],
        ["Air strategic bomber defence factor +15%","Strategic bomb visibility -40%"]
      ]
    },
    "new_mobile_warfare": {
      "id": "new_mobile_warfare",
      "name": "Mobile Warfare",
      "folder": "land",
      "xp": 100,
      "xpType": "army",
      "tracks": ["infantry","combat_support","armor","operations"],
      "fx": ["Planning Speed +20%","Divisions speed +10%","Unlocks tactic: Unexpected Thrust"],
      "milestones": [
        ["Org Loss when Moving -15%","Reinforce Rate +2%","Unlocks tactic: Delay"],
        ["Planning Speed +10%","Organization loss when below 25% -10%","Unlocks tactic: Overwhelming Fire"],
        ["Additional brigade column size +1","Unlocks tactic: Blitz"],
        ["Planning Speed +20%","Regimental Support Companies: organization +10, breakthrough +10%","Unlocks tactic: Backhand Blow"]
      ]
    },
    "superior_firepower": {
      "id": "superior_firepower",
      "name": "Superior Firepower",
      "folder": "land",
      "xp": 100,
      "xpType": "army",
      "tracks": ["infantry","combat_support","armor","operations"],
      "fx": ["Unlocks tactic: Overwhelming Fire","Line Artillery: soft attack +10%","Support Artillery: soft attack +5%"],
      "milestones": [
        ["Unlocks tactic: Elastic Defense","Supply Consumption -10%"],
        [
          "Additional brigade column size +1",
          "All Support Companies: organization +10",
          "Plan Preparation Decay Rate -10%",
          "Unlocks tactic: Suppressive Barrage"
        ],
        ["Unlocks tactic: Delay","Army: recovery rate +10%","Regimental Support Companies: soft attack +5%, hard attack +5%"],
        ["Unlocks tactic: Tactical Withdrawal","Army: recovery rate +20%","Plan Preparation Decay Rate -10%"]
      ]
    },
    "grand_battleplan": {
      "id": "grand_battleplan",
      "name": "Grand Battleplan",
      "folder": "land",
      "xp": 100,
      "xpType": "army",
      "tracks": ["infantry","combat_support","armor","operations"],
      "fx": ["Unlocks tactic: Well-Planned Attack","Max planning +10%","Daily Command Power Gain +25%"],
      "milestones": [
        ["Additional brigade column size +1","Unlocks tactic: Elastic Defense","Max Entrenchment +5%"],
        ["Coordination +10%","Regimental Support Companies: defense +10%, entrenchment +20%","Unlocks tactic: Overwhelming Fire"],
        ["Reinforce Rate +2%","Unlocks tactic: Breakthrough"],
        ["Coordination +10%","Maximum Command Power Increase +30"]
      ]
    },
    "mass_assault": {
      "id": "mass_assault",
      "name": "Mass Assault",
      "folder": "land",
      "xp": 100,
      "xpType": "army",
      "tracks": ["infantry","combat_support","armor","operations"],
      "fx": ["Supply Grace +48","Non-Combat Out of Supply Penalties -10%","Unlocks tactic: Relentless Assault"],
      "milestones": [
        ["Unlocks tactic: Mass Charge","Additional brigade column size +1","Regimental Support Companies: supply use -2%, recovery rate +10%"],
        ["Unlocks tactic: Elastic Defense","Non-Combat Out of Supply Penalties -5%","Minimum training level -5%"],
        ["Reinforce Rate +2%","Unlocks tactic: Overwhelming Fire"],
        ["Unlocks tactic: Backhand Blow","Weekly War Support (Combat Casualties) +0.1%","Minimum training level -5%","Entrenchment speed +5%"]
      ]
    },
    "new_fleet_in_being": {
      "id": "new_fleet_in_being",
      "name": "Fleet in Being",
      "folder": "naval",
      "xp": 100,
      "xpType": "navy",
      "tracks": ["submarines","screens","carriers","capital_ships"],
      "fx": ["Battleship: organization +15","Capital Ship Armor +10%"],
      "milestones": [
        ["Torpedo reveal chance -5%","Naval minelaying efficiency +20%"],
        ["Naval AA attack +10%","Convoy escort efficiency +15%"],
        ["Capital Ship Attack +10%"],
        ["Strike force movement org loss -20%"]
      ]
    },
    "new_convoy_raiding": {
      "id": "new_convoy_raiding",
      "name": "Trade Interdiction",
      "folder": "naval",
      "xp": 100,
      "xpType": "navy",
      "tracks": ["submarines","screens","carriers","capital_ships"],
      "fx": ["Submarine: organization +10, surface detection +10%","Convoy Raiding Efficiency +15%"],
      "milestones": [
        ["Submarine Attack +10%","Torpedo reveal chance -10%","Convoy Raiding Efficiency +10%"],
        ["Strike force movement org loss -15%","Naval Detection +10%"],
        ["Sortie efficiency +30%","Naval Targeting +10%"],
        ["Convoy escort efficiency +10%"]
      ]
    },
    "new_base_strike": {
      "id": "new_base_strike",
      "name": "Base Strike",
      "folder": "naval",
      "xp": 100,
      "xpType": "navy",
      "tracks": ["submarines","screens","carriers","capital_ships"],
      "fx": ["Carrier: organization +20","Port strike +40%"],
      "milestones": [
        ["Torpedo reveal chance -10%","Naval Targeting +10%"],
        ["Convoy escort efficiency +15%"],
        ["Naval Targeting +10%","Sortie efficiency +30%","Navy carrier air agility factor +10%"],
        ["Carrier overcrowding -10%","Naval Detection +5%"]
      ]
    },
    "special_forces_quantity": {
      "id": "special_forces_quantity",
      "name": "Expanded Special Forces",
      "folder": "special_forces",
      "xp": 60,
      "xpType": "army",
      "tracks": ["special_forces_first","special_forces_second"],
      "fx": ["Special Forces Capacity Multiplier +4%","Special Forces Division training time -20%"],
      "milestones": [
        ["Special Forces Capacity Multiplier +4%","Special Forces: soft attack +5%"],
        ["Special Forces Capacity Multiplier +4%","Special Forces: organization +5"]
      ]
    },
    "special_forces_quality": {
      "id": "special_forces_quality",
      "name": "Elite Special Forces",
      "folder": "special_forces",
      "xp": 60,
      "xpType": "army",
      "tracks": ["special_forces_first","special_forces_second"],
      "fx": ["Special Forces: organization +10","Special Forces Supply Grace +24"],
      "milestones": [
        [
          "Special Forces: acclimatization hot climate gain factor +10%, acclimatization cold climate gain factor +10%, soft attack +5%, breakthrough +5%",
          "Special Forces Capacity Multiplier +2%"
        ],
        [
          "Special Forces: acclimatization hot climate gain factor +10%, acclimatization cold climate gain factor +10%, soft attack +5%, defense +5%",
          "Special Forces Capacity Multiplier +2%"
        ]
      ]
    }
  },
  "subs": {
    "air_subdoctrine_fighter_homeland_defense": {
      "id": "air_subdoctrine_fighter_homeland_defense",
      "name": "Homeland Air Defense",
      "track": "fighter_aircraft",
      "folder": "air",
      "xp": 100,
      "xpType": "air",
      "fx": ["Air home defence factor +10%"],
      "rewards": [
        {"id":"interception_priority","name":"Big Wing Tactics","mastery":100,"fx":["Interception Mission Efficiency +15%"]},
        {"id":"air_defense_grids","name":"Air Early Warning System","mastery":200,"fx":["Interception Detection +20%"]},
        {"id":"air_wing_knowledge_transfer","name":"Pilot Mentorship","mastery":300,"fx":["Untrained pilots penalty for new Air Wings -15%"]},
        {"id":"experienced_pilots_protection","name":"Kill Board Competition","mastery":400,"fx":["Ace generation chance +10%"]},
        {"id":"mass_sorties","name":"Efficient Ground Crews","mastery":500,"fx":["Air Mission Efficiency +5%"]}
      ]
    },
    "air_subdoctrine_escort_fighter": {
      "id": "air_subdoctrine_escort_fighter",
      "name": "Medium-Range Escort",
      "track": "fighter_aircraft",
      "folder": "air",
      "xp": 100,
      "xpType": "air",
      "fx": ["Fighter: range +10%"],
      "rewards": [
        {"id":"escort_procedures","name":"Top Cover","mastery":100,"fx":["Escort Efficiency +10%"]},
        {"id":"extended_search_patterns","name":"Offensive Fighter Sweep","mastery":200,"fx":["Air Superiority Mission Efficiency +10%"]},
        {"id":"improved_maintenance_protocols","name":"Regular Engine Overhauls","mastery":300,"fx":["Air Accidents Chance -20%"]},
        {"id":"increased_sky_presence","name":"Enemy Airfield Suppression","mastery":400,"fx":["Air power projection factor +10%"]},
        {
          "id": "constant_air_offensive",
          "name": "Continuous Air Offensive",
          "mastery": 500,
          "fx": ["Bad Weather Penalty -10%","Night Operations Penalty -10%"]
        }
      ]
    },
    "air_subdoctrine_fighter_bombers": {
      "id": "air_subdoctrine_fighter_bombers",
      "name": "Fighter-Bombers",
      "track": "fighter_aircraft",
      "folder": "air",
      "xp": 100,
      "xpType": "air",
      "fx": ["Fighter: ground attack +10%"],
      "rewards": [
        {"id":"target_prioritization","name":"Air-Ground Comms Channels","mastery":100,"fx":["Air Support Mission Efficiency +10%"]},
        {"id":"strafing_runs","name":"Battlefield Loitering","mastery":200,"fx":["Ground support +10%"]},
        {"id":"versatile_experience","name":"Extensive Debriefing","mastery":300,"fx":["Air mission xp gain factor +10%"]},
        {"id":"multi_mission_assignment","name":"Multi-role Capability","mastery":400,"fx":["Air Mission Efficiency +5%"]},
        {"id":"night_target_search","name":"Night Flying Experience","mastery":500,"fx":["Night Operations Penalty -10%"]}
      ]
    },
    "air_subdoctrine_tactical_flexibility": {
      "id": "air_subdoctrine_tactical_flexibility",
      "name": "Airspace Dominance",
      "track": "fighter_aircraft",
      "folder": "air",
      "xp": 100,
      "xpType": "air",
      "fx": ["Air Superiority Mission Efficiency +10%"],
      "rewards": [
        {"id":"loose_formation","name":"Loose Formations","mastery":100,"fx":["Fighter: agility +5%, air attack +5%"]},
        {"id":"high_altitude_approach","name":"Unpredictable Air Patrol Patterns","mastery":200,"fx":["Fighter Detection +15%"]},
        {"id":"combat_discipline","name":"Efficient Search and Rescue Organization","mastery":300,"fx":["Air Wing Experience loss when killed -10%"]},
        {"id":"high_speed_dive","name":"Boom and Zoom Tactics","mastery":400,"fx":["Fighter: speed +5%"]},
        {"id":"aces_of_the_sky","name":"Aerial Elite Mentality","mastery":500,"fx":["Ace Effectiveness +15%"]}
      ]
    },
    "air_subdoctrine_dogfighting_mastery": {
      "id": "air_subdoctrine_dogfighting_mastery",
      "name": "Knights of the Air",
      "track": "fighter_aircraft",
      "folder": "air",
      "xp": 100,
      "xpType": "air",
      "fx": ["Ace generation chance +10%"],
      "rewards": [
        {
          "id": "pilot_quality_focus",
          "name": "Veteran Instructor Cadre",
          "mastery": 100,
          "fx": ["Air mission xp gain factor +10%","Air Wing Training Experience Gain +10%"]
        },
        {"id":"force_rotation","name":"Rapid Interception Vectoring","mastery":200,"fx":["Interception Detection +15%"]},
        {"id":"fighter_command_system","name":"Dogfight Situational Awareness","mastery":300,"fx":["Fighter: agility +10%"]},
        {"id":"combat_routines","name":"Counter-Air Patrol","mastery":400,"fx":["Air Superiority Mission Efficiency +15%"]},
        {
          "id": "improved_support_integration",
          "name": "Short Range Sortie Efficiency",
          "mastery": 500,
          "fx": ["Air Accidents Chance -10%","Air manpower requirement -10%"]
        }
      ]
    },
    "air_subdoctrine_fighter_central_field": {
      "id": "air_subdoctrine_fighter_central_field",
      "name": "Naval Aviation",
      "track": "fighter_aircraft",
      "folder": "air",
      "xp": 100,
      "xpType": "air",
      "fx": ["Sortie efficiency +15%"],
      "rewards": [
        {"id":"decoy_tactic","name":"Combat Air Patrol","mastery":100,"fx":["Fighter Detection +10%","Air Superiority Mission Efficiency +5%"]},
        {"id":"three_plane_formation","name":"Thach Weave","mastery":200,"fx":["Carrier Fighter: agility +10%, speed +10%"]},
        {"id":"aggressive_spirit","name":"Naval Aces","mastery":300,"fx":["Ace generation chance +5%","Ace Effectiveness +10%"]},
        {"id":"naval_expertise","name":"Fighter Escort Target Spotting","mastery":400,"fx":["Naval Targeting +10%"]},
        {"id":"all_weather_operations","name":"All-Weather Operations","mastery":500,"fx":["Bad Weather Penalty -10%","Carrier Traffic +15%"]}
      ]
    },
    "air_subdoctrine_night_bombing": {
      "id": "air_subdoctrine_night_bombing",
      "name": "Night Strategic Bombing",
      "track": "heavy_aircraft",
      "folder": "air",
      "xp": 100,
      "xpType": "air",
      "fx": ["Air strategic bomber night penalty -25%"],
      "rewards": [
        {"id":"night_raids","name":"Night Flying Training","mastery":100,"fx":["Night Operations Penalty -15%"]},
        {"id":"stealth_approach","name":"Stealthy Approach","mastery":200,"fx":["Strategic bomb visibility -15%"]},
        {"id":"shared_principles","name":"Electronic Navigation Aid Training","mastery":300,"fx":["Untrained pilots penalty for new Air Wings -10%"]},
        {"id":"bombing_discipline","name":"HE/Incendiary Bomb Mix","mastery":400,"fx":["Air strategic bomber bombing factor +15%"]},
        {"id":"durable_airframes","name":"Night Fighter Avoidance","mastery":500,"fx":["Air strategic bomber defence factor +15%"]}
      ]
    },
    "air_subdoctrine_carpet_bombing": {
      "id": "air_subdoctrine_carpet_bombing",
      "name": "Carpet Bombing",
      "track": "heavy_aircraft",
      "folder": "air",
      "xp": 100,
      "xpType": "air",
      "fx": ["Strategic Bombers: strategic bombing +20%"],
      "rewards": [
        {"id":"veteran_bomber_crews","name":"Veteran Bomber Crews","mastery":100,"fx":["Ace Effectiveness +10%","Air mission xp gain factor +5%"]},
        {"id":"breaking_the_spirit","name":"Transport Network Disruption","mastery":200,"fx":["Air Superiority +5%"]},
        {"id":"destruction_campaigns","name":"Aerial Pathfinders","mastery":300,"fx":["Air strategic bomber bombing factor +10%"]},
        {"id":"coordinated_air_operations","name":"Secondary Target Designation","mastery":400,"fx":["Air Mission Efficiency +5%"]},
        {
          "id": "defensive_formation",
          "name": "Tight Defensive Formations",
          "mastery": 500,
          "fx": ["Air strategic bomber defence factor +10%","Strategic Bombers: air attack +5%"]
        }
      ]
    },
    "air_subdoctrine_deep_air_raids": {
      "id": "air_subdoctrine_deep_air_raids",
      "name": "Deep Air Raids",
      "track": "heavy_aircraft",
      "folder": "air",
      "xp": 100,
      "xpType": "air",
      "fx": ["Strategic Bombers: range +10%"],
      "rewards": [
        {"id":"bad_weather_operations","name":"Dead Reckoning Bomb Release","mastery":100,"fx":["Bad Weather Penalty -15%"]},
        {"id":"effective_targetting","name":"Delayed-Action Bombs","mastery":200,"fx":["Air strategic bomber bombing factor +20%"]},
        {"id":"improved_mission_control","name":"Crew Rotation","mastery":300,"fx":["Air mission xp gain factor +10%"]},
        {"id":"escort_cooperation","name":"Escort Cooperation","mastery":400,"fx":["Escort Efficiency +10%","Fighter Detection +10%"]},
        {"id":"long_range_missions","name":"Bomb/Fuel Balancing","mastery":500,"fx":["Air Range +5%"]}
      ]
    },
    "air_subdoctrine_flying_fortresses": {
      "id": "air_subdoctrine_flying_fortresses",
      "name": "Flying Fortresses",
      "track": "heavy_aircraft",
      "folder": "air",
      "xp": 100,
      "xpType": "air",
      "fx": ["Strategic Bombers: air defense +10%"],
      "rewards": [
        {"id":"high_level_bombing","name":"Combat Box","mastery":100,"fx":["Air strategic bomber defence factor +20%"]},
        {"id":"experienced_gunners","name":"Collective Firepower","mastery":200,"fx":["Strategic Bombers: air attack +10%"]},
        {"id":"pilot_rescue_missions","name":"Dead Engine Prop Feathering","mastery":300,"fx":["Air Wing Experience loss when killed -10%"]},
        {
          "id": "extensive_training",
          "name": "Veteran Crew Teamwork",
          "mastery": 400,
          "fx": ["Air Wing Training Experience Gain +10%","Ace generation chance +5%"]
        },
        {"id":"safety_landing_procedures","name":"Mass Production Reliability Improvements","mastery":500,"fx":["Air Accidents Chance -10%"]}
      ]
    },
    "air_subdoctrine_coastal_air_patrol": {
      "id": "air_subdoctrine_coastal_air_patrol",
      "name": "Coastal Air Patrol",
      "track": "heavy_aircraft",
      "folder": "air",
      "xp": 100,
      "xpType": "air",
      "fx": ["Maritime Patrol Bombers: naval attack +10%"],
      "rewards": [
        {"id":"coastal_air_minelaying","name":"Coastal Air Minelaying","mastery":100,"fx":["Aerial minelaying efficiency +20%"]},
        {"id":"evasive_techniques","name":"Disengagement Tactics","mastery":200,"fx":["Maritime Patrol Bombers: agility +5%, air defense +5%"]},
        {"id":"efficient_maritime_patrols","name":"Patrol Plane Secondary Strike Role","mastery":300,"fx":["Naval Mission Efficiency +10%"]},
        {"id":"fog_patrol","name":"Rain or Shine Mindset","mastery":400,"fx":["Bad Weather Penalty -10%"]},
        {
          "id": "improved_targetting_techniques",
          "name": "Naval Munitions Targeting Experience",
          "mastery": 500,
          "fx": ["Maritime Patrol Bombers: naval targeting +10%"]
        }
      ]
    },
    "air_subdoctrine_open_ocean_air_patrol": {
      "id": "air_subdoctrine_open_ocean_air_patrol",
      "name": "Deep Ocean Air Patrol",
      "track": "heavy_aircraft",
      "folder": "air",
      "xp": 100,
      "xpType": "air",
      "fx": ["Maritime Patrol Bombers: range +15%"],
      "rewards": [
        {"id":"harbor_raids","name":"Harbor Raids","mastery":100,"fx":["Port strike +20%"]},
        {"id":"aerial_minesweeping","name":"Offensive Minefield Lane Clearance","mastery":200,"fx":["Aerial minesweeping efficiency +20%"]},
        {"id":"self_reliance","name":"Escort Independence","mastery":300,"fx":["Maritime Patrol Bombers: agility +5%, air attack +10%"]},
        {"id":"night_patrols","name":"Night Patrols","mastery":400,"fx":["Night Operations Penalty -10%","Spotting Speed +5%"]},
        {"id":"naval_destruction","name":"One Torpedo - One Hit Spirit","mastery":500,"fx":["Naval Targeting +10%"]}
      ]
    },
    "air_subdoctrine_heavy_aircraft_focus": {
      "id": "air_subdoctrine_heavy_aircraft_focus",
      "name": "Multi-Role Heavy Aircraft Focus",
      "track": "heavy_aircraft",
      "folder": "air",
      "xp": 100,
      "xpType": "air",
      "fx": ["Strategic Bombers: agility +10%"],
      "rewards": [
        {"id":"heavy_aircraft_application","name":"Bombload Templates","mastery":100,"fx":["Air Mission Efficiency +5%"]},
        {
          "id": "specialized_payloads",
          "name": "Mission-Oriented Payloads",
          "mastery": 200,
          "fx": ["Strategic Bombers: strategic bombing +10%","Maritime Patrol Bombers: naval attack +5%"]
        },
        {
          "id": "developed_training_programs",
          "name": "Aircrew Knowledge Transfer",
          "mastery": 300,
          "fx": ["Air Wing Training Experience Gain +5%","Untrained pilots penalty for new Air Wings -5%"]
        },
        {"id":"long_range_missions","name":"Continental Reach","mastery":400,"fx":["Strategic Bombers: range +10%"]},
        {"id":"efficient_fuel_management","name":"Efficient Fuel Management","mastery":500,"fx":["Air Fuel Consumption -5%"]}
      ]
    },
    "air_subdoctrine_bomber_interception": {
      "id": "air_subdoctrine_bomber_interception",
      "name": "Heavy Interceptors",
      "track": "medium_aircraft",
      "folder": "air",
      "xp": 100,
      "xpType": "air",
      "fx": ["Heavy Fighter: air attack +10%"],
      "rewards": [
        {"id":"night_interceptions","name":"Night Fighter Training","mastery":100,"fx":["Night Operations Penalty -15%"]},
        {"id":"dispersed_fighting","name":"Bomber Formation Disruption","mastery":200,"fx":["Interception Mission Efficiency +10%"]},
        {
          "id": "heavy_fighter_veteran_initiative",
          "name": "Heavy Fighter Aces",
          "mastery": 300,
          "fx": ["Ace generation chance +5%","Air mission xp gain factor +10%"]
        },
        {"id":"high_altitude_approach","name":"Turn Fight Avoidance","mastery":400,"fx":["Heavy Fighter: air defense +10%"]},
        {"id":"bomber_interception_patrols","name":"Air Spotting Relays","mastery":500,"fx":["Interception Detection +15%"]}
      ]
    },
    "air_subdoctrine_long_range_escort": {
      "id": "air_subdoctrine_long_range_escort",
      "name": "Long-Range Escort",
      "track": "medium_aircraft",
      "folder": "air",
      "xp": 100,
      "xpType": "air",
      "fx": ["Escort Efficiency +10%"],
      "rewards": [
        {"id":"efficient_fly_routes","name":"Widespread Drop Tanks Usage","mastery":100,"fx":["Heavy Fighter: range +10%"]},
        {"id":"mutual_air_cover","name":"All-Around Formation Defense","mastery":200,"fx":["Fighter Detection +15%"]},
        {"id":"training_instructors","name":"Comprehensive Pilot Training","mastery":300,"fx":["Air Wing Training Experience Gain +10%"]},
        {"id":"fighter_baiting","name":"Fighter Baiting","mastery":400,"fx":["Heavy Fighter: agility +10%"]},
        {"id":"far_reaching_airforce","name":"Fuel-Saving Expertise","mastery":500,"fx":["Air Range +5%"]}
      ]
    },
    "air_subdoctrine_operational_air_support": {
      "id": "air_subdoctrine_operational_air_support",
      "name": "Operational Air Support",
      "track": "medium_aircraft",
      "folder": "air",
      "xp": 100,
      "xpType": "air",
      "fx": ["Air Mission Efficiency +5%"],
      "rewards": [
        {
          "id": "efficient_support_crews",
          "name": "Aircrew Survival and Evasion Training",
          "mastery": 100,
          "fx": ["Air manpower requirement -10%","Air Wing Experience loss when killed -5%"]
        },
        {"id":"ground_interdictions","name":"Cab Rank Bombing","mastery":200,"fx":["Air Superiority +10%"]},
        {"id":"operational_airforce_presence","name":"Enemy Airfield Harassment","mastery":300,"fx":["Air power projection factor +10%"]},
        {"id":"heavy_fighter_support","name":"Heavy Fighter-Bombers","mastery":400,"fx":["Heavy Fighter: agility +5%, air attack +5%"]},
        {
          "id": "tactical_bomber_preservation",
          "name": "Counter-Interception Techniques",
          "mastery": 500,
          "fx": ["Tactical Bombers: agility +5%, air defense +5%"]
        }
      ]
    },
    "air_subdoctrine_tactical_battlefield_support": {
      "id": "air_subdoctrine_tactical_battlefield_support",
      "name": "Tactical Battlefield Support",
      "track": "medium_aircraft",
      "folder": "air",
      "xp": 100,
      "xpType": "air",
      "fx": ["Tactical Bombers: ground attack +10%"],
      "rewards": [
        {"id":"keypoint_bombing","name":"Preparatory Aerial Bombardment","mastery":100,"fx":["Ground support +10%"]},
        {"id":"logistical_bombing","name":"Logistical Bombing","mastery":200,"fx":["Air Superiority +5%","Air Support Mission Efficiency +5%"]},
        {"id":"ship_hunters","name":"Armor-Piercing Bomb Availability","mastery":300,"fx":["Tactical Bombers: naval attack +10%"]},
        {"id":"dedicated_record_keeping","name":"Short-Range Fuel Economy","mastery":400,"fx":["Air Fuel Consumption -5%"]},
        {"id":"bomber_aces","name":"Bomber Aces","mastery":500,"fx":["Ace Effectiveness +15%"]}
      ]
    },
    "air_subdoctrine_theater_interdiction": {
      "id": "air_subdoctrine_theater_interdiction",
      "name": "Theater Interdiction",
      "track": "medium_aircraft",
      "folder": "air",
      "xp": 100,
      "xpType": "air",
      "fx": ["Air strategic bomber bombing factor +15%"],
      "rewards": [
        {"id":"extended_reach","name":"Flightpath Optimization","mastery":100,"fx":["Tactical Bombers: range +10%"]},
        {"id":"night_bombing","name":"Night Bombing","mastery":200,"fx":["Night Operations Penalty -10%","Air strategic bomber night penalty -10%"]},
        {"id":"precision_bombing","name":"Deep Penetration Raids","mastery":300,"fx":["Tactical Bombers: strategic bombing +5%, agility +5%"]},
        {"id":"port_raids","name":"Dockyard Raids","mastery":400,"fx":["Port strike +20%"]},
        {
          "id": "improved_casualty_recovery",
          "name": "Bail Out Drills",
          "mastery": 500,
          "fx": ["Air Accidents Chance -5%","Air Wing Experience loss when killed -10%"]
        }
      ]
    },
    "air_subdoctrine_aerial_reconnaissance": {
      "id": "air_subdoctrine_aerial_reconnaissance",
      "name": "Aerial Recon",
      "track": "medium_aircraft",
      "folder": "air",
      "xp": 100,
      "xpType": "air",
      "fx": ["Scout Plane: agility +10%"],
      "rewards": [
        {"id":"extended_reconnaissance_radius","name":"Wide Search Patterns","mastery":100,"fx":["Scout Plane: range +15%"]},
        {
          "id": "improved_observation_procedures",
          "name": "Photo Analysis Department",
          "mastery": 200,
          "fx": ["Intelligence gained from Combat +10%","Army Intelligence +10%"]
        },
        {"id":"naval_recon","name":"Ship Silhouette Recognition","mastery":300,"fx":["Navy Intelligence +10%","Spotting Speed +5%"]},
        {
          "id": "distant_aerial_observation",
          "name": "Air Intelligence Collation",
          "mastery": 400,
          "fx": ["Air Intelligence +10%","Air mission xp gain factor +5%"]
        },
        {
          "id": "well_coordinated_strikes",
          "name": "Bomb Damage Assessment",
          "mastery": 500,
          "fx": ["Civilian Intelligence +10%","Air strategic bomber bombing factor +5%"]
        }
      ]
    },
    "air_subdoctrine_flying_artillery": {
      "id": "air_subdoctrine_flying_artillery",
      "name": "Flying Artillery",
      "track": "strike_aircraft",
      "folder": "air",
      "xp": 100,
      "xpType": "air",
      "fx": ["Close Air Support: air defense +15%"],
      "rewards": [
        {"id":"suppression_runs","name":"Multiple Daily Sorties","mastery":100,"fx":["Air Support Mission Efficiency +10%"]},
        {"id":"terrain_familiarity","name":"Priority Target Suppression","mastery":200,"fx":["Ground support +10%"]},
        {"id":"effective_payloads","name":"Point Target Destruction","mastery":300,"fx":["Close Air Support: ground attack +5%"]},
        {
          "id": "rugged_airframes",
          "name": "Austere Airfield Experience",
          "mastery": 400,
          "fx": ["Air Accidents Chance -5%","Air Wing Experience loss when killed -5%"]
        },
        {
          "id": "movement_interdiction",
          "name": "Offensive Interdiction",
          "mastery": 500,
          "fx": ["Close Air Support Organization Damage Factor +5%","Air Superiority +5%"]
        }
      ]
    },
    "air_subdoctrine_dive_bombers": {
      "id": "air_subdoctrine_dive_bombers",
      "name": "Pinpoint Strikes",
      "track": "strike_aircraft",
      "folder": "air",
      "xp": 100,
      "xpType": "air",
      "fx": ["Close Air Support: ground attack +10%"],
      "rewards": [
        {"id":"forward_air_controllers","name":"Forward Air Controllers","mastery":100,"fx":["Air Mission Efficiency +5%","Ground attack factor +5%"]},
        {
          "id": "all_weather_drills",
          "name": "Rugged Front Line Support Ethos",
          "mastery": 200,
          "fx": ["Bad Weather Penalty -5%","Close Air Support: agility +5%"]
        },
        {
          "id": "terrifying_precision",
          "name": "Systematic Aerial Terrorization",
          "mastery": 300,
          "fx": ["Close Air Support Organization Damage Factor +10%"]
        },
        {"id":"close_air_support_aces","name":"Close Air Support Aces","mastery":400,"fx":["Ace generation chance +5%","Ace Effectiveness +5%"]},
        {"id":"fighter_bomber_coordination","name":"Fighter Cooperation","mastery":500,"fx":["Escort Efficiency +10%"]}
      ]
    },
    "air_subdoctrine_flexible_fire_support": {
      "id": "air_subdoctrine_flexible_fire_support",
      "name": "Ground-Naval Coordination",
      "track": "strike_aircraft",
      "folder": "air",
      "xp": 100,
      "xpType": "air",
      "fx": ["Ground attack factor +5%","Naval Targeting +5%"],
      "rewards": [
        {"id":"cas_preservation","name":"Thorough Air Gunner Training","mastery":100,"fx":["Close Air Support: air defense +5%, air attack +5%"]},
        {"id":"adaptable_nav_bombers","name":"Anti-Shipping Attacks","mastery":200,"fx":["Naval Bombers: naval attack +5%, range +5%"]},
        {
          "id": "forward_spotters",
          "name": "Streamlined Support Request Procedure",
          "mastery": 300,
          "fx": ["Air Support Mission Efficiency +5%","Naval Mission Efficiency +5%"]
        },
        {"id":"continuous_fire_support","name":"Mission-Capable Airframe Priority","mastery":400,"fx":["Air Mission Efficiency +5%"]},
        {
          "id": "quick_turnaround",
          "name": "Aerial Evasion Techniques",
          "mastery": 500,
          "fx": ["Naval Bombers: agility +5%","Close Air Support: agility +5%"]
        }
      ]
    },
    "air_subdoctrine_carrier_strikes": {
      "id": "air_subdoctrine_carrier_strikes",
      "name": "Sea-To-Shore Air Power",
      "track": "strike_aircraft",
      "folder": "air",
      "xp": 100,
      "xpType": "air",
      "fx": ["Carrier Close Air Support: range +10%","Carrier Naval Bombers: range +10%"],
      "rewards": [
        {"id":"deck_coordination","name":"Mass Coordinated Strikes","mastery":100,"fx":["Naval Mission Efficiency +10%"]},
        {
          "id": "specialized_torpedoes",
          "name": "Torpedo Target Selection",
          "mastery": 200,
          "fx": ["Naval Targeting +10%","Carrier Naval Bombers: naval attack +8%"]
        },
        {
          "id": "strike_wave_tactics",
          "name": "Dual-Purpose Munitions",
          "mastery": 300,
          "fx": ["Air Support Mission Efficiency +5%","Carrier Close Air Support: ground attack +8%"]
        },
        {"id":"deck_cycle_training","name":"Well-Trained Catapult Crews","mastery":400,"fx":["Sortie efficiency +10%"]},
        {
          "id": "optimized_deck_space_usage",
          "name": "Hangar Space Optimization",
          "mastery": 500,
          "fx": ["Carrier overcrowding -10%","Air Accidents Chance -5%"]
        }
      ]
    },
    "air_subdoctrine_naval_strike_tactics": {
      "id": "air_subdoctrine_naval_strike_tactics",
      "name": "Precision Naval Bombing",
      "track": "strike_aircraft",
      "folder": "air",
      "xp": 100,
      "xpType": "air",
      "fx": ["Naval Targeting +10%"],
      "rewards": [
        {"id":"naval_disruption","name":"Interception Evasion Techniques","mastery":100,"fx":["Naval Bombers: air defense +7%, air attack +7%"]},
        {"id":"attack_synchronization","name":"Last Moment Munitions Release","mastery":200,"fx":["Naval Mission Efficiency +12%"]},
        {"id":"naval_strike_aces","name":"Naval Strike Aces","mastery":300,"fx":["Ace generation chance +5%","Ace Effectiveness +10%"]},
        {"id":"safety_protocols","name":"Take-Off and Landing Safety Measures","mastery":400,"fx":["Air Accidents Chance -10%"]},
        {"id":"optimized_payload","name":"Long-Range Sealane Denial","mastery":500,"fx":["Naval Bombers: range +5%, naval attack +5%"]}
      ]
    },
    "air_subdoctrine_naval_torpedo_tactics": {
      "id": "air_subdoctrine_naval_torpedo_tactics",
      "name": "Torpedo Swarm Tactics",
      "track": "strike_aircraft",
      "folder": "air",
      "xp": 100,
      "xpType": "air",
      "fx": ["Naval Bombers: naval attack +10%"],
      "rewards": [
        {"id":"port_strikes","name":"Shallow-Running Torpedos","mastery":100,"fx":["Port strike +20%"]},
        {"id":"low_level_attack_runs","name":"Wavetop Attack Runs","mastery":200,"fx":["Naval Bombers: agility +10%"]},
        {"id":"extended_sea_patrols","name":"Extensive Patrolling","mastery":300,"fx":["Naval Bombers: range +5%","Carrier Naval Bombers: range +5%"]},
        {"id":"all_weather_training","name":"All-Weather Training","mastery":400,"fx":["Bad Weather Penalty -10%"]},
        {"id":"naval_strike_mastery","name":"Naval Strike Mastery","mastery":500,"fx":["Naval Mission Efficiency +10%"]}
      ]
    },
    "armored_spearhead": {
      "id": "armored_spearhead",
      "name": "Armored Spearhead",
      "track": "armor",
      "folder": "land",
      "xp": 100,
      "xpType": "army",
      "fx": ["Unlocks tactic: Breakthrough"],
      "rewards": [
        {"id":"force_concentration","name":"Point of Main Effort","mastery":100,"fx":["Tanks: organization +2, recovery rate +5%"]},
        {"id":"armored_breakthrough_exploits","name":"Breakthrough Exploitation","mastery":200,"fx":["Tanks & Armor Variants: breakthrough +10%"]},
        {
          "id": "local_reserves",
          "name": "Local Reserves",
          "mastery": 300,
          "fx": [
            "Armored Car: recovery rate +10%, organization +7",
            "Light Tank: recovery rate +10%, organization +3",
            "Self-Propelled Anti-Air Regimental Support: organization +10, air attack +5%"
          ]
        },
        {"id":"tactical_reconnaissance","name":"Strong Point Bypassing","mastery":400,"fx":["Tanks & Armor Variants: breakthrough +10%"]},
        {
          "id": "assault_detachments",
          "name": "Flank Protection",
          "mastery": 500,
          "fx": ["Armored Car: recovery rate +20%, organization +3, breakthrough +20%","Tanks: organization +3, breakthrough +20%"]
        }
      ]
    },
    "armored_spearhead_no_lar": {
      "id": "armored_spearhead_no_lar",
      "name": "Armored Spearhead",
      "track": "armor",
      "folder": "land",
      "xp": 100,
      "xpType": "army",
      "fx": ["Unlocks tactic: Breakthrough"],
      "rewards": [
        {"id":"force_concentration","name":"Point of Main Effort","mastery":100,"fx":["Tanks: organization +2, recovery rate +5%"]},
        {"id":"armored_breakthrough_exploits","name":"Breakthrough Exploitation","mastery":200,"fx":["Tanks & Armor Variants: breakthrough +10%"]},
        {
          "id": "local_reserves",
          "name": "Local Reserves",
          "mastery": 300,
          "fx": ["Cavalry Recon Detachment: organization +10","Light Tank: recovery rate +10%, organization +3"]
        },
        {"id":"tactical_reconnaissance","name":"Strong Point Bypassing","mastery":400,"fx":["Tanks & Armor Variants: breakthrough +10%"]},
        {"id":"assault_detachments","name":"Flank Protection","mastery":500,"fx":["Tanks: organization +3, breakthrough +20%"]}
      ]
    },
    "armored_infantry_support": {
      "id": "armored_infantry_support",
      "name": "Armored Infantry Support",
      "track": "armor",
      "folder": "land",
      "xp": 100,
      "xpType": "army",
      "fx": ["Unlocks tactic: Blitz","100% research bonus: Heavy Tank models (1 use)"],
      "rewards": [
        {
          "id": "mobile_reserves",
          "name": "Assault Overrun",
          "mastery": 100,
          "fx": ["Medium Tank: breakthrough +5%, soft attack +10%","Heavy Tank: breakthrough +5%, soft attack +10%"]
        },
        {
          "id": "armored_cohorts",
          "name": "Armored Cohorts",
          "mastery": 200,
          "fx": ["Medium Tank: organization +5","Heavy Tank: organization +5","Tank Destroyer Regimental Support: organization +5, piercing +10%"]
        },
        {
          "id": "maintenance_routines",
          "name": "Maintenance Routines",
          "mastery": 300,
          "fx": ["Armored Maintenance Company: Tanks & Armor Variants battalions in the division get HP +15%"]
        },
        {"id":"fuel_rationing","name":"Fuel Rationing","mastery":400,"fx":["Heavy Tank: supply use -8%"]},
        {
          "id": "mobile_armored_strongpoints",
          "name": "Mobile Armored Strongpoints",
          "mastery": 500,
          "fx": ["All Infantry & Mot/Mech: breakthrough +5%","Heavy Tank: breakthrough +10%","Heavy SP Anti-Air Support: organization +5, air attack +10%"]
        }
      ]
    },
    "streamlined_deployment": {
      "id": "streamlined_deployment",
      "name": "Streamlined Deployment",
      "track": "armor",
      "folder": "land",
      "xp": 100,
      "xpType": "army",
      "fx": ["Tanks & Armor Variants: soft attack +10%, breakthrough +10%"],
      "rewards": [
        {
          "id": "flexible_armored_battalions",
          "name": "Army Mechanization Drive",
          "mastery": 100,
          "fx": [
            "Unit medium armor design cost factor -50%",
            "Unit light armor design cost factor -50%",
            "Armored Recon Company: Tanks & Armor Variants battalions in the division get organization +2"
          ]
        },
        {
          "id": "mechanized_wave",
          "name": "Mechanized Wave",
          "mastery": 200,
          "fx": ["Mechanized Infantry: organization +5, recovery rate +10%","Tanks & Armor Variants: recovery rate +5%"]
        },
        {
          "id": "tank_desant",
          "name": "Tank Desant",
          "mastery": 300,
          "fx": [
            "Armored Signal Company: Leg Infantry battalions in the division get speed +5%",
            "Armored Recon Company: Leg Infantry battalions in the division get speed +5%"
          ]
        },
        {"id":"full_front_deployment","name":"Austere Logistics","mastery":400,"fx":["Tanks & Armor Variants: reliability +5%, supply use -2%"]},
        {
          "id": "continuous_offensives",
          "name": "Continuous Offensives",
          "mastery": 500,
          "fx": ["Tanks & Armor Variants: recovery rate +5%, organization +3, breakthrough +10%"]
        }
      ]
    },
    "mobile_defense": {
      "id": "mobile_defense",
      "name": "Mobile Defense",
      "track": "armor",
      "folder": "land",
      "xp": 100,
      "xpType": "army",
      "fx": ["Armored Engineer Company: Tanks & Armor Variants battalions in the division get entrenchment +2%","Tanks & Armor Variants: defense +10%"],
      "rewards": [
        {"id":"mechanized_offensive","name":"Battle Taxis","mastery":100,"fx":["Mechanized Infantry: defense +10%, soft attack +10%"]},
        {
          "id": "advance_under_fire",
          "name": "Advance Under Fire",
          "mastery": 200,
          "fx": ["Light Tank: breakthrough +10%, recovery rate +20%","Medium Tank: breakthrough +10%, recovery rate +10%"]
        },
        {
          "id": "attached_support",
          "name": "Tracked Combat Support",
          "mastery": 300,
          "fx": [
            "Assault Engineer Company: organization +10",
            "Armored Engineer Company: organization +10",
            "Armored Signal Company: organization +10",
            "Self-Propelled Anti-Air Regimental Support: organization +10, air attack +5%"
          ]
        },
        {
          "id": "combined_anti_armor",
          "name": "Combined Anti-armor",
          "mastery": 400,
          "fx": [
            "Support Anti-Tank: Tanks & Armor Variants battalions in the division get hard attack +5%, piercing +5%",
            "Tank Destroyer Regimental Support: organization +5, hard attack +5%, piercing +15%"
          ]
        },
        {
          "id": "tank_on_tank_engagement",
          "name": "Tank-on-Tank Engagement",
          "mastery": 500,
          "fx": ["Tanks & Armor Variants: hard attack +10%, soft attack +10%, piercing +5%"]
        }
      ]
    },
    "armored_cavalry": {
      "id": "armored_cavalry",
      "name": "Armored Cavalry",
      "track": "armor",
      "folder": "land",
      "xp": 100,
      "xpType": "army",
      "fx": ["Armored Car: organization +5, defense +10%","Mechanized Infantry: organization +5, defense +5%"],
      "rewards": [
        {"id":"cruiser_tanks","name":"Cruiser Tanks","mastery":100,"fx":["Light Tank: speed +10%, organization +5, breakthrough +5%"]},
        {
          "id": "quick_response_force",
          "name": "Motorized Security Forces",
          "mastery": 200,
          "fx": [
            "Motorized Military Police: Motorized & Mechanized Infantry battalions in the division get suppression factor +5%",
            "Armored Car: suppression factor +20%"
          ]
        },
        {
          "id": "speed_as_armour",
          "name": "Speed as Armour",
          "mastery": 300,
          "fx": [
            "Light Tank: speed +5%, breakthrough +5%",
            "Armored Car: speed +5%, breakthrough +10%, soft attack +10%",
            "Mechanized Infantry: speed +5%, breakthrough +5%"
          ]
        },
        {
          "id": "fighting_reconnaissance",
          "name": "Fighting Reconnaissance",
          "mastery": 400,
          "fx": [
            "Light Armored Recon Company: organization +3, soft attack +5%",
            "Armored Recon Company: organization +2, soft attack +5%",
            "Anti-Tank Battery: piercing +10%",
            "Motorized Heavy Weapons Company: organization +5, soft attack +5%, recovery rate +10%"
          ]
        },
        {
          "id": "sustained_deployments",
          "name": "External Stowage",
          "mastery": 500,
          "fx": [
            "Armored Car: organization +5, soft attack +5%, recovery rate +20%",
            "Light Tank: organization +5, soft attack +5%, hard attack +10%, recovery rate +15%",
            "Mechanized Infantry: organization +5, soft attack +5%, recovery rate +10%",
            "Motorized Infantry: organization +5, soft attack +5%, recovery rate +10%"
          ]
        }
      ]
    },
    "armored_cavalry_no_lar": {
      "id": "armored_cavalry_no_lar",
      "name": "Armored Cavalry",
      "track": "armor",
      "folder": "land",
      "xp": 100,
      "xpType": "army",
      "fx": ["Motorized Infantry: organization +5, defense +10%","Mechanized Infantry: organization +5, defense +5%"],
      "rewards": [
        {"id":"cruiser_tanks","name":"Cruiser Tanks","mastery":100,"fx":["Light Tank: speed +10%, organization +5, breakthrough +5%"]},
        {
          "id": "quick_response_force",
          "name": "Motorized Security Forces",
          "mastery": 200,
          "fx": ["Motorized Military Police: Motorized & Mechanized Infantry battalions in the division get suppression factor +5%"]
        },
        {
          "id": "speed_as_armour",
          "name": "Speed as Armour",
          "mastery": 300,
          "fx": ["Light Tank: speed +5%, breakthrough +5%","Motorized Infantry: speed +5%","Mechanized Infantry: speed +5%, breakthrough +5%"]
        },
        {
          "id": "fighting_reconnaissance",
          "name": "Fighting reconnaissance",
          "mastery": 400,
          "fx": [
            "Cavalry Recon Detachment: organization +3, soft attack +5%",
            "Armored Recon Company: organization +2, soft attack +5%",
            "Anti-Tank Battery: organization +2, piercing +5%"
          ]
        },
        {
          "id": "sustained_deployments",
          "name": "External Stowage",
          "mastery": 500,
          "fx": [
            "Light Tank: organization +5, soft attack +5%, hard attack +10%, recovery rate +15%",
            "Mechanized Infantry: organization +5, soft attack +5%, recovery rate +10%",
            "Motorized Infantry: organization +5, soft attack +5%, recovery rate +10%",
            "Motorized Heavy Weapons Company: organization +5, soft attack +5%, recovery rate +10%"
          ]
        }
      ]
    },
    "tank_destroyer_force": {
      "id": "tank_destroyer_force",
      "name": "Tank Destroyer Force",
      "track": "armor",
      "folder": "land",
      "xp": 100,
      "xpType": "army",
      "fx": ["Tanks & Armor Variants: defense +10%, hard attack +10%, piercing +10%"],
      "rewards": [
        {
          "id": "mobile_anti_tank",
          "name": "Mobile Anti-Tank Reserves",
          "mastery": 100,
          "fx": ["Motorized Anti-Tank: organization +8, hard attack +10%, piercing +10%"]
        },
        {
          "id": "committed_operational_units",
          "name": "Organic Combat Engineer Platoons",
          "mastery": 200,
          "fx": ["Assault Engineer Company: Tank Destroyers battalions in the division get reliability +2%, soft attack +5%, hard attack +10%"]
        },
        {"id":"redeployment_priority","name":"Rapid Riposte","mastery":300,"fx":["Tank Destroyers: supply use -2%, recovery rate +10%"]},
        {
          "id": "independent_counterattacks",
          "name": "Independent Counterattacks",
          "mastery": 400,
          "fx": ["Tank Destroyers: organization +6, initiative +1%"]
        },
        {
          "id": "selfsufficient_battalion",
          "name": "Radio-Directed Breakthrough Containment",
          "mastery": 500,
          "fx": [
            "Armored Signal Company: Tank Destroyers battalions in the division get hard attack +10%, piercing +10%",
            "Tank Destroyer Regimental Support: organization +5, hard attack +10%, piercing +10%"
          ]
        }
      ]
    },
    "fire_concentration": {
      "id": "fire_concentration",
      "name": "Fire Concentration",
      "track": "combat_support",
      "folder": "land",
      "xp": 100,
      "xpType": "army",
      "fx": ["Unlocks tactic: Overwhelming Fire","Line Artillery: defense +5%, organization +5"],
      "rewards": [
        {"id":"predicted_fire","name":"Predicted Fire","mastery":100,"fx":["Line Artillery: defense +5%"]},
        {"id":"standing_barrage","name":"Prepared Gun Pits","mastery":200,"fx":["Artillery: combat width -80%","Rocket Artillery: combat width -80%"]},
        {
          "id": "artillery_groups",
          "name": "Battery Local Security",
          "mastery": 300,
          "fx": [
            "Infantry Guns and Rocket Battery: soft attack +5%, breakthrough +10%",
            "Support Artillery: soft attack +5%, breakthrough +10%",
            "Line Artillery: soft attack +5%, breakthrough +10%"
          ]
        },
        {"id":"dedicated_air_support","name":"Centralized Anti-Aircraft Support","mastery":400,"fx":["Anti-Air Battalions: air attack +10%"]},
        {
          "id": "weakpoint_studies",
          "name": "Flanking Fire Emplacement",
          "mastery": 500,
          "fx": ["Anti-Tank: piercing +10%, hard attack +10%","Artillery: soft attack +5%","Rocket Artillery: soft attack +5%"]
        }
      ]
    },
    "anti_tank_frontline": {
      "id": "anti_tank_frontline",
      "name": "Anti-Tank Frontline",
      "track": "combat_support",
      "folder": "land",
      "xp": 100,
      "xpType": "army",
      "fx": ["Engineer Company: Line Artillery battalions in the division get entrenchment +20%"],
      "rewards": [
        {"id":"pakfront","name":"Pakfront","mastery":100,"fx":["Anti-Tank: piercing +10%","Anti-Tank Battery: piercing +20%, hard attack +20%"]},
        {"id":"emplacement_rotation","name":"Emplacement Rotation","mastery":200,"fx":["Anti-Tank: defense +20%, organization +10"]},
        {"id":"weakpoint_studies","name":"Weak-point Studies","mastery":300,"fx":["Anti-Tank: piercing +10%, hard attack +10%, soft attack +20%"]},
        {"id":"offensive_deployments","name":"Offensive Deployment","mastery":400,"fx":["Motorized Anti-Tank: breakthrough +20%, piercing +20%"]},
        {"id":"assault_anti_tank","name":"Direct Fire Bunker-Busting","mastery":500,"fx":["Motorized Anti-Tank: soft attack +20%, hard attack +20%"]}
      ]
    },
    "flying_batteries": {
      "id": "flying_batteries",
      "name": "Flying Batteries",
      "track": "combat_support",
      "folder": "land",
      "xp": 100,
      "xpType": "army",
      "fx": ["50% research bonus: Rocketry technology (1 use)","Line Artillery: soft attack +10%"],
      "rewards": [
        {
          "id": "deployment_drills",
          "name": "Deployment Drills",
          "mastery": 100,
          "fx": [
            "Truck-drawn Rocket Artillery: organization +10",
            "Motorized Rocket Artillery: organization +10",
            "Motorized Artillery: organization +10",
            "Motorized Heavy Weapons Company: organization +10, soft attack +10%"
          ]
        },
        {
          "id": "counter_battery_tasks",
          "name": "Counter-battery Tasks",
          "mastery": 200,
          "fx": [
            "Cavalry Recon Detachment: recon +25%; Line Artillery battalions in the division get soft attack +5%, defense +10%",
            "Motorized Recon Company: recon +25%; Line Artillery battalions in the division get soft attack +5%, defense +10%"
          ]
        },
        {
          "id": "ballistics_corrections",
          "name": "Armored Forward Observer Vehicles",
          "mastery": 300,
          "fx": [
            "Armored Signal Company: Line Artillery battalions in the division get supply use -1%; Line Artillery battalions in the division get initiative +2%"
          ]
        },
        {"id":"mobile_barrages","name":"Fast Unlimbering","mastery":400,"fx":["Line Artillery: recovery rate +5%, breakthrough +5%"]},
        {
          "id": "wide_dispersal_positions",
          "name": "Widely Dispersed Batteries",
          "mastery": 500,
          "fx": ["Truck-drawn Rocket Artillery: organization +10","Motorized Rocket Artillery: organization +10","Motorized Artillery: organization +10"]
        }
      ]
    },
    "air_cavalry": {
      "id": "air_cavalry",
      "name": "Air Cavalry",
      "track": "combat_support",
      "folder": "land",
      "xp": 100,
      "xpType": "army",
      "fx": ["50% research bonus: Helicopters (2 uses)"],
      "rewards": [
        {
          "id": "airborne_observers",
          "name": "Heliborne Observers",
          "mastery": 100,
          "fx": ["Helicopter Recon: organization +10; Artillery Support & Line battalions in the division get soft attack +10%"]
        },
        {"id":"service_and_support","name":"Service & Support","mastery":200,"fx":["Helicopter Support Companies: HP +3%"]},
        {
          "id": "rescue_liasions",
          "name": "Rescue Liaisons",
          "mastery": 300,
          "fx": [
            "Helicopter Med-Evac: organization +5, casualty trickleback +5%; All Infantry & Mot/Mech battalions in the division get HP +5%, recovery rate +5%"
          ]
        },
        {
          "id": "transport_assault",
          "name": "Transport-Assault",
          "mastery": 400,
          "fx": ["Helicopter Transports: breakthrough +5%, organization +10; Leg Infantry battalions in the division get speed +20%, breakthrough +5%"]
        },
        {
          "id": "intervention_units",
          "name": "Intervention Units",
          "mastery": 500,
          "fx": ["Helicopter Brigade: organization +10; All Infantry & Mot/Mech battalions in the division get soft attack +10%"]
        }
      ]
    },
    "mobile_recon_and_assault": {
      "id": "mobile_recon_and_assault",
      "name": "Mobile Recon & Assault",
      "track": "combat_support",
      "folder": "land",
      "xp": 100,
      "xpType": "army",
      "fx": ["Armored Car: organization +3","Light Tank: organization +5"],
      "rewards": [
        {
          "id": "motorization_support",
          "name": "Organic Motorized Supply",
          "mastery": 100,
          "fx": ["Mobile Battalions & Combat Support: speed +10%, recovery rate +10%","Motorized Heavy Weapons Company: organization +10, soft attack +10%"]
        },
        {"id":"long_range_reconnaissance","name":"Long Range Reconnaissance","mastery":200,"fx":["Recon: speed +15%"]},
        {
          "id": "mobile_operational_deployments",
          "name": "Mobile Operational Deployment",
          "mastery": 300,
          "fx": ["Armored Recon Company: Tanks & Armor Variants battalions in the division get breakthrough +10%","Motorized Artillery: soft attack +5%"]
        },
        {
          "id": "self_propelled_support_elements",
          "name": "Fire On The Move",
          "mastery": 400,
          "fx": [
            "Self-Propelled Artillery: soft attack +10%",
            "Self-Propelled Anti-Air: air attack +15%, soft attack +5%",
            "Tank Destroyers: hard attack +10%, piercing +3%",
            "Armored Car: breakthrough +20%, recovery rate +20%"
          ]
        },
        {
          "id": "deep_reconnaissance_focus",
          "name": "Deep Reconnaissance Focus",
          "mastery": 500,
          "fx": [
            "Recon: speed +10%",
            "Armored Recon Company: recon +20%, breakthrough +10%",
            "Tank Destroyer Regimental Support: breakthrough +20%",
            "Self-Propelled Anti-Air Regimental Support: breakthrough +20%"
          ]
        }
      ]
    },
    "mobile_recon_and_assault_no_lar": {
      "id": "mobile_recon_and_assault_no_lar",
      "name": "Mobile Recon & Assault",
      "track": "combat_support",
      "folder": "land",
      "xp": 100,
      "xpType": "army",
      "fx": ["Light Tank: organization +5"],
      "rewards": [
        {
          "id": "motorization_support",
          "name": "Organic Motorized Supply",
          "mastery": 100,
          "fx": ["Mobile Battalions & Combat Support: speed +10%, recovery rate +10%"]
        },
        {"id":"long_range_reconnaissance","name":"Long range reconnaissance","mastery":200,"fx":["Recon: speed +15%"]},
        {
          "id": "mobile_operational_deployments",
          "name": "Mobile Operational Deployment",
          "mastery": 300,
          "fx": ["Armored Recon Company: Tanks & Armor Variants battalions in the division get breakthrough +10%","Motorized Artillery: soft attack +5%"]
        },
        {
          "id": "self_propelled_support_elements",
          "name": "Self propelled support elements",
          "mastery": 400,
          "fx": [
            "Self-Propelled Artillery: soft attack +10%",
            "Self-Propelled Anti-Air: air attack +15%, soft attack +5%",
            "Tank Destroyers: hard attack +10%, piercing +3%"
          ]
        },
        {
          "id": "deep_reconnaissance_focus",
          "name": "Deep Reconnaissance Focus",
          "mastery": 500,
          "fx": [
            "Recon: speed +10%",
            "Armored Recon Company: recon +20%, breakthrough +10%",
            "Tank Destroyer Regimental Support: breakthrough +20%",
            "Self-Propelled Anti-Air Regimental Support: breakthrough +20%"
          ]
        }
      ]
    },
    "self_propelled_support": {
      "id": "self_propelled_support",
      "name": "Self-propelled Support",
      "track": "combat_support",
      "folder": "land",
      "xp": 100,
      "xpType": "army",
      "fx": ["Self-Propelled Artillery: soft attack +10%","Self-Propelled Anti-Air: air attack +10%","Tank Destroyers: hard attack +5%"],
      "rewards": [
        {
          "id": "mobile_battery_management_platoons",
          "name": "Mobile Fire Direction Center",
          "mastery": 100,
          "fx": ["Self-Propelled Artillery: organization +10","Self-Propelled Anti-Air: organization +10","Tank Destroyers: organization +10"]
        },
        {
          "id": "screening_attacks",
          "name": "Time-On-Target Fire Missions",
          "mastery": 200,
          "fx": [
            "Cavalry Recon Detachment: Self-Propelled Artillery battalions in the division get soft attack +10%, recovery rate +10%",
            "Motorized Recon Company: Self-Propelled Artillery battalions in the division get soft attack +10%, recovery rate +10%",
            "Armored Recon Company: Self-Propelled Artillery battalions in the division get soft attack +10%, recovery rate +10%"
          ]
        },
        {
          "id": "all_terrain_mobility",
          "name": "All-terrain Mobility",
          "mastery": 300,
          "fx": ["Self-Propelled Artillery: speed +30%","Self-Propelled Anti-Air: speed +30%","Tank Destroyers: speed +30%"]
        },
        {
          "id": "multirole_support_vehicles",
          "name": "Multi-role Support Vehicles",
          "mastery": 400,
          "fx": [
            "Tank Destroyer Regimental Support: organization +10, hard attack +10%, breakthrough +20%",
            "Self-Propelled Anti-Air Regimental Support: organization +10, air attack +10%, breakthrough +20%"
          ]
        },
        {
          "id": "shoot_and_scoot",
          "name": "Shoot & Scoot",
          "mastery": 500,
          "fx": [
            "Self-Propelled Artillery: organization +5, recovery rate +15%, soft attack +5%",
            "Self-Propelled Anti-Air: organization +5, recovery rate +15%, air attack +5%",
            "Tank Destroyers: organization +5, recovery rate +15%, hard attack +5%"
          ]
        }
      ]
    },
    "siege_artillery": {
      "id": "siege_artillery",
      "name": "Siege Artillery",
      "track": "combat_support",
      "folder": "land",
      "xp": 100,
      "xpType": "army",
      "fx": [
        "Super-Heavy Artillery: Army battalions in the division get soft attack +10%, defense +10%",
        "Railway Artillery: railway gun attack +25%",
        "Super-Heavy Railway Gun: railway gun attack +25%"
      ],
      "rewards": [
        {"id":"fortress_busters","name":"Fortress Busters","mastery":100,"fx":[]},
        {
          "id": "improved_transport_preparation",
          "name": "Improved Transport Preparation",
          "mastery": 200,
          "fx": [
            "Line Artillery: recovery rate +10%",
            "Railway Artillery: railway gun hours between redistribution -50%",
            "Super-Heavy Railway Gun: railway gun hours between redistribution -50%"
          ]
        },
        {
          "id": "precomputed_firing_data",
          "name": "Pre-computed Firing Data",
          "mastery": 300,
          "fx": ["Super-Heavy Artillery: organization +10, defense +20%","Self-Propelled Super-Heavy Artillery: organization +10, defense +20%"]
        },
        {
          "id": "urban_strongpoint_sieges",
          "name": "Advanced Fire Correction",
          "mastery": 400,
          "fx": ["Artillery Support & Line: soft attack +5%","Heavy Weapons Company: soft attack +10%","Infantry Guns and Rocket Battery: soft attack +10%"]
        },
        {
          "id": "mobile_artillery_command",
          "name": "Mobile Artillery Command",
          "mastery": 500,
          "fx": [
            "Support Artillery: organization +10",
            "Self-Propelled Super-Heavy Artillery: organization +10, speed +50%",
            "Railway Artillery: speed +100%",
            "Super-Heavy Railway Gun: speed +100%"
          ]
        }
      ]
    },
    "field_engineering": {
      "id": "field_engineering",
      "name": "Field Engineering",
      "track": "combat_support",
      "folder": "land",
      "xp": 100,
      "xpType": "army",
      "fx": [],
      "rewards": [
        {
          "id": "rapid_fire_lane_clearance",
          "name": "Rapid Fire Lane Clearance",
          "mastery": 100,
          "fx": [
            "Engineer Company: organization +5; All Infantry & Mot/Mech battalions in the division get entrenchment +10%",
            "Maintenance Company: organization +5"
          ]
        },
        {
          "id": "sapper_fieldcraft",
          "name": "Sapper Fieldcraft",
          "mastery": 200,
          "fx": ["Engineer Company: HP +25%, defense +10%","Maintenance Company: HP +25%"]
        },
        {
          "id": "engineerdug_gun_emplacements",
          "name": "Engineer-dug Gun Emplacements",
          "mastery": 300,
          "fx": [
            "Engineer Company: Artillery Support & Line battalions in the division get soft attack +10%, defense +10%; All Infantry & Mot/Mech battalions in the division get soft attack +5%",
            "Infantry Guns: soft attack +10%, defense +10%"
          ]
        },
        {
          "id": "smoke_projector_training",
          "name": "Smoke Projector Training",
          "mastery": 400,
          "fx": [
            "Engineer Company: breakthrough +50%",
            "Maintenance Company: supply use -1%; Tanks battalions in the division get reliability +5%, strength +5%"
          ]
        },
        {
          "id": "charge_and_flame",
          "name": "Flames & Satchel Charges",
          "mastery": 500,
          "fx": [
            "Engineer Company: organization +5, soft attack +5%, hard attack +100%",
            "Maintenance Company: organization +5",
            "Heavy Weapons Company: organization +5, breakthrough +10%"
          ]
        }
      ]
    },
    "mobile_infantry": {
      "id": "mobile_infantry",
      "name": "Mobile Infantry",
      "track": "infantry",
      "folder": "land",
      "xp": 100,
      "xpType": "army",
      "fx": ["Unlocks tactic: Overwhelming Fire","All Infantry & Mot/Mech: breakthrough +10%","50% research bonus: Truck (1 use)"],
      "rewards": [
        {"id":"cavalry_charge","name":"Modernized Cavalry","mastery":100,"fx":["Mounted Infantry: breakthrough +20%"]},
        {"id":"combined_arms_planning","name":"Infiltration","mastery":200,"fx":["All Infantry & Mot/Mech: organization +10, speed +5%"]},
        {
          "id": "decisive_operations",
          "name": "First Strike Operations",
          "mastery": 300,
          "fx": ["Motorized & Mechanized Infantry: organization +20","Infantry Guns and Rocket Battery: soft attack +15%"]
        },
        {
          "id": "delegated_authority",
          "name": "Delegated Authority",
          "mastery": 400,
          "fx": ["Motorized & Mechanized Infantry: recovery rate +10%, soft attack +10%"]
        },
        {
          "id": "maneuver_warfare",
          "name": "Maneuver Warfare",
          "mastery": 500,
          "fx": ["All Infantry & Mot/Mech: organization +10, speed +20%","Motorized Heavy Weapons Company: organization +5, soft attack +10%"]
        }
      ]
    },
    "defensive_postures": {
      "id": "defensive_postures",
      "name": "Defensive Postures",
      "track": "infantry",
      "folder": "land",
      "xp": 100,
      "xpType": "army",
      "fx": ["Mounted Infantry: supply use -1%","All Infantry & Mot/Mech: entrenchment +20%"],
      "rewards": [
        {
          "id": "improvised_fighting_position",
          "name": "Improvised Fighting Positions",
          "mastery": 100,
          "fx": ["Entrenchment speed +5%","Heavy Weapons Company: supply use -1%, soft attack +20%"]
        },
        {"id":"elastic_operations","name":"Outpost Line","mastery":200,"fx":["All Infantry & Mot/Mech: organization +10, defense +10%"]},
        {"id":"developed_trench_networking","name":"Strongpoint Network","mastery":300,"fx":["All Infantry & Mot/Mech: entrenchment +20%"]},
        {
          "id": "field_emplacements",
          "name": "Interlocking Fields of Fire",
          "mastery": 400,
          "fx": ["All Infantry & Mot/Mech: soft attack +10%","Infantry Guns and Rocket Battery: soft attack +20%"]
        },
        {"id":"field_construction_training","name":"Infantry Engineer Training","mastery":500,"fx":["Entrenchment speed +15%"]}
      ]
    },
    "large_unit_tactics": {
      "id": "large_unit_tactics",
      "name": "Large Unit Tactics",
      "track": "infantry",
      "folder": "land",
      "xp": 100,
      "xpType": "army",
      "fx": ["All Infantry & Mot/Mech: supply use -1%"],
      "rewards": [
        {"id":"wide_trench_networks","name":"Overnight Entrenchment","mastery":100,"fx":["Entrenchment speed +10%"]},
        {
          "id": "flexible_division_structures",
          "name": "Flexible Division Structures",
          "mastery": 200,
          "fx": ["Unit infantry design cost factor -100%","Infantry: combat width -30%"]
        },
        {"id":"unit_knowledge_sharing","name":"Unit Knowledge Sharing","mastery":300,"fx":["All Infantry & Mot/Mech: experience loss -1%"]},
        {
          "id": "large_front_offensive",
          "name": "Large Front Offensive",
          "mastery": 400,
          "fx": [
            "All Infantry & Mot/Mech: organization +10, soft attack +10%",
            "Heavy Weapons Company: breakthrough +10%",
            "Infantry Guns and Rocket Battery: soft attack +10%",
            "Division Recovery Rate +10%"
          ]
        },
        {
          "id": "motorization_initiative",
          "name": "Motorization Initiative",
          "mastery": 500,
          "fx": ["All Infantry & Mot/Mech: breakthrough +10%, soft attack +10%","Motorized & Mechanized Infantry: supply use -2%, reliability +10%"]
        }
      ]
    },
    "assault_infantry": {
      "id": "assault_infantry",
      "name": "Assault Infantry",
      "track": "infantry",
      "folder": "land",
      "xp": 100,
      "xpType": "army",
      "fx": ["Support Artillery: soft attack +10%"],
      "rewards": [
        {
          "id": "low_echelon_fire_support",
          "name": "Low Echelon Fire Support",
          "mastery": 100,
          "fx": ["Support Artillery: Leg Infantry battalions in the division get soft attack +20%","Infantry Guns: soft attack +20%"]
        },
        {
          "id": "organic_battalion_fire_support",
          "name": "Organic Battalion Fire Support",
          "mastery": 200,
          "fx": [
            "Infantry Guns and Rocket Battery: soft attack +10%",
            "Anti-Tank Battery: piercing +10%, hard attack +10%",
            "Anti-Air Battery: air attack +10%"
          ]
        },
        {
          "id": "integrated_support_batteries",
          "name": "Infantry Forward Observer Training",
          "mastery": 300,
          "fx": [
            "Support Artillery: organization +20, soft attack +5%",
            "Support Anti-Tank: organization +20, piercing +5%, hard attack +5%",
            "Support Anti-Air: organization +20, air attack +5%"
          ]
        },
        {
          "id": "breakthrough_fireteams",
          "name": "Recon Pull",
          "mastery": 400,
          "fx": [
            "Armored Recon Company: organization +20; All Infantry & Mot/Mech battalions in the division get breakthrough +20%; All Infantry & Mot/Mech battalions in the division get organization +5",
            "Motorized Recon Company: organization +20; All Infantry & Mot/Mech battalions in the division get breakthrough +10%; All Infantry & Mot/Mech battalions in the division get organization +5"
          ]
        },
        {
          "id": "assault_detachments",
          "name": "Assault Detachments",
          "mastery": 500,
          "fx": [
            "Support Artillery: supply use -2%",
            "Infantry Guns and Rocket Battery: supply use -1%",
            "Light Flame Tank Company: All Infantry & Mot/Mech battalions in the division get breakthrough +10%, soft attack +10%",
            "Medium Flame Tank Company: All Infantry & Mot/Mech battalions in the division get breakthrough +10%, soft attack +10%",
            "Heavy Flame Tank Company: All Infantry & Mot/Mech battalions in the division get breakthrough +10%, soft attack +10%"
          ]
        }
      ]
    },
    "mounted_infantry": {
      "id": "mounted_infantry",
      "name": "Mounted Infantry",
      "track": "infantry",
      "folder": "land",
      "xp": 100,
      "xpType": "army",
      "fx": ["Mounted Infantry: soft attack +10%, breakthrough +10%","Unit cavalry design cost factor -100%"],
      "rewards": [
        {"id":"dragoon_traditions","name":"Dragoon Traditions","mastery":100,"fx":["Mounted Infantry: breakthrough +20%, defense +10%"]},
        {
          "id": "mounted_skirmish_groups",
          "name": "Regimental Scout Troop",
          "mastery": 200,
          "fx": [
            "Cavalry Recon Detachment: organization +10, soft attack +20%; Leg Infantry battalions in the division get soft attack +10%, defense +10%; Leg Infantry battalions in the division get organization +5",
            "Mounted Infantry: organization +5"
          ]
        },
        {
          "id": "anti_mechanized_cavalry_groups",
          "name": "Anti-Mechanized Cavalry Groups",
          "mastery": 300,
          "fx": ["Mounted Infantry: hard attack +20%, piercing +20%"]
        },
        {
          "id": "beasts_of_war",
          "name": "Beasts of War",
          "mastery": 400,
          "fx": ["Mounted Infantry: speed +50%, HP +5%","Cavalry Recon Detachment: speed +50%"]
        },
        {
          "id": "limbered_combat_support",
          "name": "Limbered Combat Support",
          "mastery": 500,
          "fx": ["Artillery: speed +50%","Anti-Tank: speed +50%","Anti-Air: speed +50%","Rocket Artillery: speed +50%"]
        }
      ]
    },
    "commandos": {
      "id": "commandos",
      "name": "Individual Excellence",
      "track": "infantry",
      "folder": "land",
      "xp": 100,
      "xpType": "army",
      "fx": ["Unlocks tactic: Infiltration Assault","Logistics Company: Leg Infantry battalions in the division get HP +500%"],
      "rewards": [
        {
          "id": "isolated_combat_elements",
          "name": "Isolated Combat Elements",
          "mastery": 100,
          "fx": [
            "Leg Infantry: supply use -1%, reliability +5%",
            "Field Hospital: casualty trickleback +5%",
            "Helicopter Brigade: casualty trickleback +5%",
            "Helicopter Med-Evac: casualty trickleback +5%",
            "Infantry Guns and Rocket Battery: supply use -1%, soft attack +5%"
          ]
        },
        {
          "id": "security_zone_operations",
          "name": "Dispersed Element Coordination",
          "mastery": 200,
          "fx": [
            "Signal Company: All Infantry & Mot/Mech battalions in the division get defense +10%",
            "Logistics Company: Motorized & Mechanized Infantry battalions in the division get HP +500%",
            "Motorized & Mechanized Infantry: reliability +5%, breakthrough +10%"
          ]
        },
        {
          "id": "rigorous_training_regimen",
          "name": "Rigorous Training Regime",
          "mastery": 300,
          "fx": [
            "Cavalry Recon Detachment: All Infantry & Mot/Mech battalions in the division get soft attack +10%",
            "Motorized Recon Company: All Infantry & Mot/Mech battalions in the division get soft attack +10%",
            "Armored Recon Company: All Infantry & Mot/Mech battalions in the division get soft attack +10%",
            "Anti-Tank Battery: Leg Infantry battalions in the division get hard attack +10%"
          ]
        },
        {"id":"field_intel_retrieval","name":"Field Intelligence Gathering","mastery":400,"fx":["Intelligence gained from Combat +15%"]},
        {
          "id": "integrated_assaults",
          "name": "Integrated Assaults",
          "mastery": 500,
          "fx": [
            "All Infantry & Mot/Mech: soft attack +10%, breakthrough +10%",
            "Infantry Guns and Rocket Battery: breakthrough +15%",
            "Heavy Weapons Company: breakthrough +15%",
            "Motorized Heavy Weapons Company: breakthrough +15%"
          ]
        }
      ]
    },
    "irregulars": {
      "id": "irregulars",
      "name": "Irregulars",
      "track": "infantry",
      "folder": "land",
      "xp": 50,
      "xpType": "army",
      "fx": ["Irregular Infantry: defense +10%, supply use -5%","Militia: defense +10%, supply use -1%"],
      "rewards": [
        {"id":"service_by_lot","name":"Service By Lot","mastery":100,"fx":["Mobilization speed +5%"]},
        {
          "id": "partisan_regiments",
          "name": "Partisan Regiments",
          "mastery": 200,
          "fx": ["Irregular Infantry: combat width -40%","Militia: combat width -40%","Leg Infantry: defense +10%"]
        },
        {
          "id": "improvised_officer_groups",
          "name": "Improvised Officer Groups",
          "mastery": 300,
          "fx": ["Leg Infantry: organization +10, soft attack +10%, breakthrough +10%"]
        },
        {"id":"levee_en_masse","name":"Levée En Masse","mastery":400,"fx":["Conscription +2%","Mobilization speed +5%"]},
        {
          "id": "standardization_efforts",
          "name": "Standardization Efforts",
          "mastery": 500,
          "fx": ["Leg Infantry: organization +10, soft attack +10%","50% research bonus: Support technology (2 uses)"]
        }
      ]
    },
    "peoples_war": {
      "id": "peoples_war",
      "name": "People's Militia",
      "track": "infantry",
      "folder": "land",
      "xp": 50,
      "xpType": "army",
      "fx": ["Unlocks tactic: Guerrilla Tactics","Militia: soft attack +10%, defense +20%"],
      "rewards": [
        {
          "id": "revolutionary_base_area",
          "name": "Revolutionary Base Area",
          "mastery": 50,
          "fx": ["Militia: defense +10%, supply use -2%","Leg Infantry: organization +5"]
        },
        {
          "id": "destruction_over_land_gains",
          "name": "Destruction over Land Gains",
          "mastery": 100,
          "fx": ["Leg Infantry: recovery rate +10%","Militia: equipment capture factor +1%","Infantry Guns: soft attack +15%"]
        },
        {
          "id": "quick_decision_offensive_warfare",
          "name": "Quick Decision Offensive Warfare",
          "mastery": 200,
          "fx": ["Militia: initiative +1.5%, organization +10, breakthrough +20%"]
        },
        {"id":"people_not_things","name":"People, not Things","mastery":250,"fx":["Leg Infantry: soft attack +10%, HP +15%"]}
      ]
    },
    "great_war_infantry": {
      "id": "great_war_infantry",
      "name": "Great War Infantry",
      "track": "infantry",
      "folder": "land",
      "xp": 50,
      "xpType": "army",
      "fx": ["Mounted Infantry: supply use -2%","Leg Infantry: defense +10%","Production speed bunker factor +25%"],
      "rewards": [
        {
          "id": "traverse_digging",
          "name": "Zig-zag Trenches",
          "mastery": 100,
          "fx": [
            "Entrenchment speed +5%",
            "Heavy Weapons Company: soft attack +10%, defense +10%",
            "Engineer Company: Leg Infantry battalions in the division get entrenchment +5%"
          ]
        },
        {
          "id": "sapping_operations",
          "name": "Communication Trenches",
          "mastery": 200,
          "fx": ["Leg Infantry: defense +10%","Field Hospital: casualty trickleback +10%"]
        },
        {
          "id": "centralized_artillery_control",
          "name": "Creeping Barrages",
          "mastery": 300,
          "fx": [
            "Support Artillery: soft attack +10%; Leg Infantry battalions in the division get soft attack +10%, breakthrough +5%",
            "Infantry Guns and Rocket Battery: soft attack +20%"
          ]
        },
        {
          "id": "field_fortification_emphasis",
          "name": "Overhead Cover",
          "mastery": 400,
          "fx": ["Leg Infantry: reliability +5%, defense +5%, organization +5"]
        },
        {"id":"redoubt_networks","name":"Redoubt Networks","mastery":500,"fx":["Entrenchment speed +10%"]}
      ]
    },
    "mission_type_tactics": {
      "id": "mission_type_tactics",
      "name": "Mission-Type Tactics",
      "track": "operations",
      "folder": "land",
      "xp": 100,
      "xpType": "army",
      "fx": ["Daily Command Power Gain +2%","All Infantry & Mot/Mech: organization +15"],
      "rewards": [
        {
          "id": "low_level_delegation",
          "name": "Low-level Delegation",
          "mastery": 100,
          "fx": ["All Infantry & Mot/Mech: recovery rate +10%","Infantry Guns and Rocket Battery: organization +5, soft attack +5%"]
        },
        {"id":"flexible_command","name":"Flexible Command","mastery":200,"fx":["Org Loss when Moving -15%"]},
        {"id":"maneouver_drills","name":"Combined Arms Battle Groups","mastery":300,"fx":["Reinforce Rate +2%","Tanks & Armor Variants: speed +10%"]},
        {
          "id": "flexible_combat_formations",
          "name": "Offensive Posture",
          "mastery": 400,
          "fx": ["All Infantry & Mot/Mech: breakthrough +10%, organization +10"]
        },
        {
          "id": "control_zone_responsibilities",
          "name": "Control Zone Responsibilities",
          "mastery": 500,
          "fx": ["All Infantry & Mot/Mech: recovery rate +20%","Tanks: recovery rate +10%"]
        }
      ]
    },
    "last_stand": {
      "id": "last_stand",
      "name": "Desperate Defense",
      "track": "operations",
      "folder": "land",
      "xp": 100,
      "xpType": "army",
      "fx": ["Conscription +5%"],
      "rewards": [
        {"id":"werwolf_groups","name":"Sabotage Groups","mastery":100,"fx":["Resistance damage to garrison on our occupied states +25%"]},
        {"id":"pocket_consolidation","name":"Pocket Consolidation","mastery":200,"fx":["All Infantry & Mot/Mech: defense +10%"]},
        {
          "id": "digging_in",
          "name": "Trench-Huddling",
          "mastery": 300,
          "fx": ["Non-Combat Out of Supply Penalties -20%","All Infantry & Mot/Mech: entrenchment +10%"]
        },
        {"id":"stocking_up","name":"Supply Cache Retrieval","mastery":400,"fx":["Supply Grace +72"]},
        {
          "id": "breaking_out",
          "name": "Final Offensive",
          "mastery": 500,
          "fx": ["Army: soft attack +15%","Infantry Guns and Rocket Battery: organization +5, soft attack +10%"]
        }
      ]
    },
    "infiltration_tactics": {
      "id": "infiltration_tactics",
      "name": "Infiltration Tactics",
      "track": "operations",
      "folder": "land",
      "xp": 100,
      "xpType": "army",
      "fx": ["Unlocks tactic: Infiltration Assault","Max planning +5%"],
      "rewards": [
        {
          "id": "infiltration_assault",
          "name": "Infiltration Assault",
          "mastery": 100,
          "fx": ["Army: breakthrough +10%, organization +5","Heavy Weapons Company: soft attack +10%"]
        },
        {"id":"nightly_assaults","name":"Attacks At Night","mastery":200,"fx":["Land Night Attack +25%"]},
        {
          "id": "self_sustaining_infiltration_units",
          "name": "Self-sustaining Infiltration Units",
          "mastery": 300,
          "fx": ["Supply Consumption -10%","Daily Command Power Gain +1.5%","Tanks: organization +2","Tanks & Armor Variants: recovery rate +10%"]
        },
        {
          "id": "terrain_and_situation_assessment",
          "name": "Terrain and Situation Assessment",
          "mastery": 400,
          "fx": [
            "Cavalry Recon Detachment: Leg Infantry battalions in the division get soft attack +10%; Mounted Infantry battalions in the division get soft attack +10%",
            "Motorized Recon Company: Leg Infantry battalions in the division get soft attack +10%; Mounted Infantry battalions in the division get soft attack +10%",
            "Armored Recon Company: Leg Infantry battalions in the division get soft attack +10%; Mounted Infantry battalions in the division get soft attack +10%",
            "Recon: recon +100%"
          ]
        },
        {"id":"infiltration_in_depth","name":"Infiltration in Depth","mastery":500,"fx":["Reinforce Rate +2%","Org Loss when Moving -20%"]}
      ]
    },
    "grand_assault": {
      "id": "grand_assault",
      "name": "Grand Assault",
      "track": "operations",
      "folder": "land",
      "xp": 100,
      "xpType": "army",
      "fx": ["Max planning +10%","Army: breakthrough +10%, soft attack +5%"],
      "rewards": [
        {
          "id": "central_planning",
          "name": "Central Planning",
          "mastery": 100,
          "fx": ["Maximum Command Power Increase +30","Logistics Company: All Infantry & Mot/Mech battalions in the division get defense +5%"]
        },
        {
          "id": "multiple_attack_directions",
          "name": "Diversionary Attacks",
          "mastery": 200,
          "fx": ["Army: breakthrough +15%","Heavy Weapons Company: soft attack +10%"]
        },
        {
          "id": "combined_arms_integration",
          "name": "Combined Arms Integration",
          "mastery": 300,
          "fx": [
            "Air Superiority +5%",
            "Coordination +10%",
            "Tank Destroyer Regimental Support: organization +5",
            "Anti-Air Battery: organization +5, air attack +10%",
            "Motorized Heavy Weapons Company: organization +5, soft attack +10%"
          ]
        },
        {
          "id": "forward_command_posts",
          "name": "Forward Command Posts",
          "mastery": 400,
          "fx": ["Logistics Company: All Infantry & Mot/Mech battalions in the division get supply use -1%","Recon: recon +10%"]
        },
        {"id":"c3i_theory","name":"C3I","mastery":500,"fx":["Max planning +10%","All Infantry & Mot/Mech: organization +8"]}
      ]
    },
    "deep_battle": {
      "id": "deep_battle",
      "name": "Deep Battle",
      "track": "operations",
      "folder": "land",
      "xp": 100,
      "xpType": "army",
      "fx": ["Unlocks tactic: Backhand Blow","Tanks: organization +4"],
      "rewards": [
        {
          "id": "bounding_overwatch",
          "name": "Bounding Overwatch",
          "mastery": 100,
          "fx": [
            "Cavalry Recon Detachment: Leg Infantry battalions in the division get soft attack +5%, defense +5%",
            "Motorized Recon Company: Leg Infantry battalions in the division get soft attack +5%, defense +5%",
            "Armored Recon Company: Leg Infantry battalions in the division get soft attack +5%, defense +5%",
            "Motorized & Mechanized Infantry: organization +2"
          ]
        },
        {
          "id": "operational_concentration",
          "name": "Operational Reserves",
          "mastery": 200,
          "fx": ["Tanks: organization +4","Armored Car: organization +4","Reinforce Rate +5%"]
        },
        {
          "id": "maskirovka",
          "name": "Strategic Deception",
          "mastery": 300,
          "fx": ["Army intelligence to others -10","Air Force intelligence to others -5","Army Intelligence +5%"]
        },
        {
          "id": "breakthrough_priority",
          "name": "Breakthrough Priority",
          "mastery": 400,
          "fx": [
            "Org Loss when Moving -20%",
            "Motorized & Mechanized Infantry: organization +10, recovery rate +10%",
            "Tanks: organization +2",
            "Tanks & Armor Variants: recovery rate +10%",
            "Armored Car: organization +4",
            "Motorized Heavy Weapons Company: organization +5, soft attack +10%"
          ]
        },
        {
          "id": "operational_depth_control",
          "name": "Operational Offensive Momentum",
          "mastery": 500,
          "fx": [
            "Org Loss when Moving -10%",
            "Reinforce Rate +5%",
            "Light Armored Recon Company: Leg Infantry battalions in the division get organization +10",
            "Armored Recon Company: Leg Infantry battalions in the division get organization +10",
            "Infantry Guns and Rocket Battery: organization +5, soft attack +10%"
          ]
        }
      ]
    },
    "deep_battle_no_lar": {
      "id": "deep_battle_no_lar",
      "name": "Deep Battle",
      "track": "operations",
      "folder": "land",
      "xp": 100,
      "xpType": "army",
      "fx": ["Unlocks tactic: Backhand Blow","Tanks: organization +4"],
      "rewards": [
        {
          "id": "bounding_overwatch",
          "name": "Bounding Overwatch",
          "mastery": 100,
          "fx": [
            "Cavalry Recon Detachment: Leg Infantry battalions in the division get soft attack +5%, defense +5%",
            "Motorized Recon Company: Leg Infantry battalions in the division get soft attack +5%, defense +5%",
            "Armored Recon Company: Leg Infantry battalions in the division get soft attack +5%, defense +5%",
            "Motorized & Mechanized Infantry: organization +2"
          ]
        },
        {
          "id": "operational_concentration",
          "name": "Operational Reserves",
          "mastery": 200,
          "fx": ["Tanks: organization +4","Mechanized Infantry: organization +10","Reinforce Rate +5%"]
        },
        {
          "id": "maskirovka",
          "name": "Strategic Deception",
          "mastery": 300,
          "fx": ["Army intelligence to others -10","Air Force intelligence to others -5","Army Intelligence +5%"]
        },
        {
          "id": "breakthrough_priority",
          "name": "Breakthrough Priority",
          "mastery": 400,
          "fx": [
            "Org Loss when Moving -20%",
            "Motorized & Mechanized Infantry: organization +10, recovery rate +10%",
            "Tanks: organization +2",
            "Tanks & Armor Variants: recovery rate +10%",
            "Mechanized Infantry: breakthrough +10%"
          ]
        },
        {
          "id": "operational_depth_control",
          "name": "Operational Offensive Momentum",
          "mastery": 500,
          "fx": [
            "Org Loss when Moving -10%",
            "Reinforce Rate +5%",
            "Cavalry Recon Detachment: Leg Infantry battalions in the division get organization +10",
            "Armored Recon Company: Leg Infantry battalions in the division get organization +10"
          ]
        }
      ]
    },
    "guerilla_war": {
      "id": "guerilla_war",
      "name": "Guerilla War",
      "track": "operations",
      "folder": "land",
      "xp": 100,
      "xpType": "army",
      "fx": ["Unlocks tactic: Guerrilla Tactics","Irregular Infantry: soft attack +10%, defense +20%","Militia: soft attack +10%, defense +20%"],
      "rewards": [
        {"id":"catch_and_seize","name":"The Enemy Will Supply Us","mastery":100,"fx":["Encirclement penalty -10%"]},
        {
          "id": "galvanize_support",
          "name": "Galvanize Support",
          "mastery": 200,
          "fx": ["Army intelligence to others -10","Army Intelligence +5%","War Support +10%","Political Power Gain +10%","Mobilization speed +15%"]
        },
        {
          "id": "scorched_earth",
          "name": "Scorched Earth",
          "mastery": 300,
          "fx": [
            "Resistance damage to garrison on our occupied states +10%",
            "Resistance Target in our states occupied by the enemy +10%",
            "Army: defense +10%"
          ]
        },
        {"id":"urban_assaults","name":"Urban Combat Tactics","mastery":400,"fx":[]},
        {
          "id": "defense_of_gained_power",
          "name": "Defense of Gained Power",
          "mastery": 500,
          "fx": ["Stability +10%","Party popularity stability factor +5%","Army: defense +10%"]
        }
      ]
    },
    "rapid_domination": {
      "id": "rapid_domination",
      "name": "Rapid Domination",
      "track": "operations",
      "folder": "land",
      "xp": 100,
      "xpType": "army",
      "fx": ["Unlocks tactic: Breakthrough","Reinforce Rate +2%","All Infantry & Mot/Mech: soft attack +10%","Line Artillery: soft attack +10%"],
      "rewards": [
        {
          "id": "forward_observers",
          "name": "Scouts Out",
          "mastery": 100,
          "fx": ["Reinforce Rate +2%","Recon: recon +100%","Support Artillery: soft attack +5%","Infantry Guns and Rocket Battery: breakthrough +10%"]
        },
        {
          "id": "advanced_firebases",
          "name": "Advanced Firebases",
          "mastery": 200,
          "fx": [
            "Support Artillery: supply use -10%; Army battalions in the division get recovery rate +10%",
            "Infantry Guns and Rocket Battery: soft attack +10%"
          ]
        },
        {
          "id": "centralized_fire_control",
          "name": "Dynamic Fire Control",
          "mastery": 300,
          "fx": ["Signal Company: Artillery Support & Line battalions in the division get soft attack +10%"]
        },
        {
          "id": "regimental_combat_teams",
          "name": "Regimental Combat Teams",
          "mastery": 400,
          "fx": ["All Support Companies: organization +10, soft attack +10%"]
        },
        {
          "id": "shock_and_awe",
          "name": "Shock & Awe",
          "mastery": 500,
          "fx": ["Army: soft attack +5%","All Infantry & Mot/Mech: soft attack +10%, hard attack +10%","Air Superiority +10%"]
        }
      ]
    },
    "expeditionary_warfare": {
      "id": "expeditionary_warfare",
      "name": "Expeditionary Warfare",
      "track": "operations",
      "folder": "land",
      "xp": 100,
      "xpType": "army",
      "fx": ["Divisions required for sending volunteer force -50%","Max volunteer force divisions +25%","Send volunteers tension -10%"],
      "rewards": [
        {
          "id": "staging_area_security",
          "name": "Beachhead Security",
          "mastery": 100,
          "fx": ["Entrenchment speed +5%","Non-Combat Out of Supply Penalties -20%","Army: defense +10%"]
        },
        {
          "id": "landing_operations",
          "name": "Landing Operations",
          "mastery": 200,
          "fx": ["Naval invasion prep speed +20%","Invasion Penalty -15%","Naval invasion planning bonus speed +20%","Army: soft attack +10%"]
        },
        {"id":"shore_fire_control_parties","name":"Shore Fire Control Parties","mastery":300,"fx":["Shore bombardment bonus +25%"]},
        {"id":"breakout_emphasis","name":"Resupply Emphasis","mastery":400,"fx":["Supply Grace +32"]},
        {"id":"withdrawal_protocols","name":"Orderly Withdrawal Protocols","mastery":500,"fx":["Org Loss when Moving -20%"]}
      ]
    },
    "dispersed_operations": {
      "id": "dispersed_operations",
      "name": "Dispersed Operations",
      "track": "operations",
      "folder": "land",
      "xp": 100,
      "xpType": "army",
      "fx": ["Enemy Air Support -10%","Reinforce Rate +5%"],
      "rewards": [
        {
          "id": "camouflage_discipline",
          "name": "Camouflage Discipline",
          "mastery": 100,
          "fx": ["Enemy Air Support -15%","Logistics Company: All Infantry & Mot/Mech battalions in the division get entrenchment +10%"]
        },
        {"id":"hardened_logistics","name":"Hardened Logistics","mastery":200,"fx":["Logistics Company: organization +5","Supply Grace +24"]},
        {
          "id": "local_air_defense",
          "name": "Local Air Defense",
          "mastery": 300,
          "fx": ["Anti-Air Battery: air attack +20%","Support Anti-Air: air attack +20%","Self-Propelled Anti-Air Regimental Support: air attack +20%"]
        },
        {"id":"scattered_formations","name":"Scattered Formations","mastery":400,"fx":["Damage Reduction Against CAS +5%"]},
        {
          "id": "independent_operations",
          "name": "Independent Operations",
          "mastery": 500,
          "fx": [
            "All Infantry & Mot/Mech: initiative +1%, breakthrough +10%, organization +5",
            "Tanks & Armor Variants: initiative +1%, breakthrough +10%, organization +2",
            "Non-Combat Out of Supply Penalties -15%"
          ]
        }
      ]
    },
    "line_of_battle": {
      "id": "line_of_battle",
      "name": "Line of Battle",
      "track": "capital_ships",
      "folder": "naval",
      "xp": 100,
      "xpType": "navy",
      "fx": ["Navy Fuel Consumption -5%","Attack when in combat alongside the Pride of the Fleet +10%"],
      "rewards": [
        {"id":"flagships","name":"Flagship Coordination","mastery":100,"fx":["Battleship: organization +5","Heavy Cruiser: organization +5"]},
        {
          "id": "ordnance_handling_training",
          "name": "Ordnance Handling Training",
          "mastery": 200,
          "fx": ["Battleship: heavy attack +5%, light attack +5%, hg armor piercing +5%","Heavy Cruiser: heavy attack +5%"]
        },
        {
          "id": "blue_water_logistics",
          "name": "Blue Water Logistics",
          "mastery": 300,
          "fx": ["Battleship: supply use -10%","Battlecruiser: supply use -10%"]
        },
        {
          "id": "bulkhead_drills",
          "name": "Enhanced Counterflooding Techniques",
          "mastery": 400,
          "fx": ["Battleship: naval torpedo damage reduction factor +10%","Heavy Cruiser: naval torpedo damage reduction factor +10%"]
        },
        {
          "id": "modernized_line_of_battle",
          "name": "Updated Signals Protocols",
          "mastery": 500,
          "fx": ["Battleship: organization +10","Heavy Cruiser: organization +5","Battlecruiser: organization +5"]
        }
      ]
    },
    "battlecruiser_supremacy": {
      "id": "battlecruiser_supremacy",
      "name": "Fast Battleships",
      "track": "capital_ships",
      "folder": "naval",
      "xp": 100,
      "xpType": "navy",
      "fx": ["Naval Supply Consumption -5%","Chance to score Critical Hit +3%"],
      "rewards": [
        {"id":"ship_of_the_line","name":"Ships of the Line","mastery":100,"fx":["Battlecruiser: organization +10","Heavy Cruiser: organization +10"]},
        {
          "id": "coordinated_strike_protocol",
          "name": "Rapid Fire Training",
          "mastery": 200,
          "fx": ["Battlecruiser: heavy attack +10%, light attack +5%","Battleship: light attack +5%"]
        },
        {
          "id": "open_water_patrolling",
          "name": "High Seas Patrol Patterns",
          "mastery": 300,
          "fx": ["Battlecruiser: surface detection +5%","Heavy Cruiser: surface detection +10%"]
        },
        {
          "id": "planning_at_speed",
          "name": "Planning at Speed",
          "mastery": 400,
          "fx": ["Battleship: speed +10%","Battlecruiser: speed +5%","Heavy Cruiser: speed +5%"]
        },
        {
          "id": "capital_drills",
          "name": "Fast Division Principle",
          "mastery": 500,
          "fx": ["Battleship: organization +5","Battlecruiser: organization +10","Heavy Cruiser: organization +5"]
        }
      ]
    },
    "armored_raiders": {
      "id": "armored_raiders",
      "name": "Armored Raiders",
      "track": "capital_ships",
      "folder": "naval",
      "xp": 100,
      "xpType": "navy",
      "fx": ["Naval Supply Consumption -10%","Screening bonus when using only capital ships +10%"],
      "rewards": [
        {
          "id": "expert_reconnaissance",
          "name": "Expert Spotting",
          "mastery": 100,
          "fx": ["Battlecruiser: surface detection +10%","Battleship: surface detection +10%"]
        },
        {"id":"speed_trials","name":"Efficient Cruising Speed","mastery":200,"fx":["Capital Ships: range +10%"]},
        {
          "id": "modernized_officer_education",
          "name": "Modernized Search Protocols",
          "mastery": 300,
          "fx": ["Battlecruiser: organization +5","Battleship: organization +5"]
        },
        {
          "id": "capital_raiders",
          "name": "Hit & Run",
          "mastery": 400,
          "fx": [
            "Battleship: organization +5, convoy raiding coordination +25%, surface detection +10%",
            "Battlecruiser: organization +5, convoy raiding coordination +15%, surface detection +15%",
            "Heavy Cruiser: organization +5"
          ]
        },
        {"id":"crisis_management","name":"Disaster Management","mastery":500,"fx":["Navy casualty on hit -40%","Navy casualty on sink -20%"]}
      ]
    },
    "coastal_defence_fleet": {
      "id": "coastal_defence_fleet",
      "name": "Coastal Defense Fleet",
      "track": "capital_ships",
      "folder": "naval",
      "xp": 100,
      "xpType": "navy",
      "fx": ["Naval Supply Consumption -15%","Naval Max Range Factor -10%"],
      "rewards": [
        {"id":"aging_navy","name":"Modernization Drive","mastery":100,"fx":["Refit speed +15%"]},
        {
          "id": "casemate_upgrades",
          "name": "Secondary Armament Modernization",
          "mastery": 200,
          "fx": ["Coastal Defense Ship: anti-air +15%, light attack +5%"]
        },
        {
          "id": "escort_duties",
          "name": "Maritime Trade Security",
          "mastery": 300,
          "fx": ["Heavy Cruiser: sub detection +15%","Light Cruiser: sub detection +10%"]
        },
        {"id":"hail_of_fire","name":"Hail of Fire","mastery":400,"fx":["Light Gun hit chance +5%"]},
        {"id":"spare_part_logistics","name":"Tried & Tested Design Principles","mastery":500,"fx":["Refit ic cost -15%"]}
      ]
    },
    "naval_gunfire_support": {
      "id": "naval_gunfire_support",
      "name": "Naval Gunfire Support",
      "track": "capital_ships",
      "folder": "naval",
      "xp": 100,
      "xpType": "navy",
      "fx": ["Shore bombardment bonus +25%","Navy Fuel Consumption -10%"],
      "rewards": [
        {
          "id": "landing_lane_clearance",
          "name": "Landing Lane Clearance",
          "mastery": 100,
          "fx": ["Chance to hit naval mine -10%","Naval minesweeping efficiency +10%"]
        },
        {
          "id": "inshore_aa_screen",
          "name": "Inshore AA Screen",
          "mastery": 200,
          "fx": ["Heavy Cruiser: anti-air +15%","Battleship: anti-air +15%","Battlecruiser: anti-air +15%"]
        },
        {
          "id": "joint_operations",
          "name": "Joint Operations",
          "mastery": 300,
          "fx": ["Naval invasion planning bonus speed +20%","Repair Ships - Repair Value $RIGHT|+=%$ +10%","Support Ships - Support Value $RIGHT|+=%$ +10%"]
        },
        {
          "id": "floating_base",
          "name": "Floating Base",
          "mastery": 400,
          "fx": ["Navy casualty on hit -20%","Navy casualty on sink -10%","Floating Harbor Supply +25%"]
        },
        {
          "id": "green_water_operations",
          "name": "Green Water Operations",
          "mastery": 500,
          "fx": [
            "Battleship: visibility -10%",
            "Battlecruiser: visibility -10%",
            "Heavy Cruiser: visibility -10%",
            "Fleet Coordination +10%",
            "Refit speed +20%"
          ]
        }
      ]
    },
    "battleship_antiair_screen": {
      "id": "battleship_antiair_screen",
      "name": "Anti-Aircraft Battleships",
      "track": "capital_ships",
      "folder": "naval",
      "xp": 100,
      "xpType": "navy",
      "fx": ["Naval AA attack +10%"],
      "rewards": [
        {"id":"all_seas_anti_aircraft","name":"High Seas AA","mastery":100,"fx":["Battleship: anti-air +10%","Battlecruiser: anti-air +10%"]},
        {"id":"efficient_navigation","name":"Efficient Navigation","mastery":200,"fx":["Battleship: fuel use -10%"]},
        {
          "id": "broad_air_cover",
          "name": "Air Strike Detection Priority",
          "mastery": 300,
          "fx": ["Battleship: organization +15, surface detection +5%","Battlecruiser: organization +15, surface detection +5%"]
        },
        {
          "id": "inaccessible_skies",
          "name": "Inaccessible Skies",
          "mastery": 400,
          "fx": ["Battleship: anti-air +15%, light attack +5%","Battlecruiser: anti-air +15%, light attack +5%"]
        },
        {"id":"capital_screens","name":"Capital Screens","mastery":500,"fx":["Heavy Ship: armor +15%, HP +5%, light attack +5%"]}
      ]
    },
    "carrier_battlegroups": {
      "id": "carrier_battlegroups",
      "name": "Carrier Battlegroups",
      "track": "carriers",
      "folder": "naval",
      "xp": 100,
      "xpType": "navy",
      "fx": ["Port strike +20%"],
      "rewards": [
        {"id":"long_distance_logistics","name":"Forward Logistics","mastery":100,"fx":["Naval Max Range Factor +10%"]},
        {"id":"long_range_target_acquisition","name":"Air Strike Target Acquisition","mastery":200,"fx":["Navy carrier air targetting factor +10%"]},
        {"id":"personnel_management","name":"Personnel Management","mastery":300,"fx":["Carrier: organization +60"]},
        {"id":"dedicated_record_keeping","name":"Meticulous Record Keeping","mastery":400,"fx":["Carrier: carrier surface detection +20%"]},
        {"id":"floating_fortresses","name":"Massed Anti-Aircraft Fire","mastery":500,"fx":["Carrier: anti-air +35%"]}
      ]
    },
    "floating_airfields": {
      "id": "floating_airfields",
      "name": "Floating Airfields",
      "track": "carriers",
      "folder": "naval",
      "xp": 100,
      "xpType": "navy",
      "fx": ["Sortie efficiency +10%"],
      "rewards": [
        {"id":"traffic_control_systems","name":"Air Traffic Coordination","mastery":100,"fx":["Carrier overcrowding -20%"]},
        {"id":"floating_city","name":"Staff Operations Management","mastery":200,"fx":["Carrier: organization +40"]},
        {"id":"veteran_pilots","name":"Air Group Attack Planning","mastery":300,"fx":["Navy carrier air attack factor +15%"]},
        {"id":"night_fighting_expertise","name":"Night Operations Training","mastery":400,"fx":["Carrier night penalty reduction +15%"]},
        {"id":"rough_weather_procedures","name":"Rough Weather Procedures","mastery":500,"fx":["Carrier: naval weather penalty factor -25%"]}
      ]
    },
    "escort_carrier_support": {
      "id": "escort_carrier_support",
      "name": "Escort Carrier Support",
      "track": "carriers",
      "folder": "naval",
      "xp": 100,
      "xpType": "navy",
      "fx": ["Convoy escort efficiency +50%"],
      "rewards": [
        {"id":"evasive_convoy_maneuvers","name":"Evasive Convoy Maneuvers","mastery":100,"fx":["Convoy speed while retreating +50%"]},
        {"id":"anti_submarine_escorts","name":"Anti-Submarine Escorts","mastery":200,"fx":["Carrier: sub detection +20%"]},
        {"id":"civilian_hull_shapes","name":"Civilian Hull Shapes","mastery":300,"fx":["Escort Carrier: visibility -20%"]},
        {
          "id": "integrated_convoy_escorts",
          "name": "Roving Escorts",
          "mastery": 400,
          "fx": ["Escort Carrier: sub detection +15%","Convoy: speed +25%","Carrier: organization +20"]
        },
        {
          "id": "convoy_carrier_support_groups",
          "name": "Convoy-Carrier Support Groups",
          "mastery": 500,
          "fx": ["Escort Carrier: build cost ic -10%","Repair Ship: reliability +20%","Support Ship: reliability +20%"]
        }
      ]
    },
    "broad_naval_support": {
      "id": "broad_naval_support",
      "name": "Generalized Support",
      "track": "carriers",
      "folder": "naval",
      "xp": 100,
      "xpType": "navy",
      "fx": ["Critical receive chance -10%"],
      "rewards": [
        {"id":"carrier_maneuvering","name":"Carrier Maneuvering","mastery":100,"fx":["Carrier: speed +10%"]},
        {"id":"task_force_concentration","name":"Task Force Concentration","mastery":200,"fx":["Ships at battle start +10%"]},
        {
          "id": "organized_support_protocols",
          "name": "Organized Support Protocols",
          "mastery": 300,
          "fx": ["Repair Ships - Repair Value $RIGHT|+=%$ +25%","Support Ships - Support Value $RIGHT|+=%$ +25%"]
        },
        {
          "id": "escorts_in_battle",
          "name": "Escort Carrier Self-Sufficiency",
          "mastery": 400,
          "fx": ["Escort Carrier: light attack +15%, anti-air +10%, lg armor piercing +15%"]
        },
        {
          "id": "support_rotation",
          "name": "Support Rotation",
          "mastery": 500,
          "fx": [
            "Repair Ships - Maximum Repair Effect $RIGHT|+=%$ +25%",
            "Support Ships - Maximum Support Effect $RIGHT|+=%$ +25%",
            "Repair Ship: organization +20",
            "Support Ship: organization +20"
          ]
        }
      ]
    },
    "massed_carrier_fleet": {
      "id": "massed_carrier_fleet",
      "name": "Massed Carrier Fleet",
      "track": "carriers",
      "folder": "naval",
      "xp": 100,
      "xpType": "navy",
      "fx": ["Ship Recovery Rate +5%"],
      "rewards": [
        {"id":"deep_operative_support","name":"Carrier Force Projection","mastery":100,"fx":["Carrier: reliability +5%, range +20%"]},
        {"id":"carrier_independence","name":"Carrier Independence","mastery":200,"fx":["Screening bonus when using only capital ships +30%"]},
        {"id":"crew_shifts","name":"Crew Shifts","mastery":300,"fx":["Sortie efficiency +30%","Carrier Air Wing sortie delay (hours) -2"]},
        {"id":"efficient_rearming","name":"Efficient Re-arming","mastery":400,"fx":["Carrier: supply use -20%, fuel use -10%"]},
        {
          "id": "unceasing_airpower",
          "name": "Unceasing Airpower",
          "mastery": 500,
          "fx": ["Carrier Traffic +30%","Carrier Night Traffic +30%","Carrier: anti-air +20%"]
        }
      ]
    },
    "light_task_forces": {
      "id": "light_task_forces",
      "name": "Light Task Forces",
      "track": "carriers",
      "folder": "naval",
      "xp": 100,
      "xpType": "navy",
      "fx": ["Retreat Speed after initial stage: +20%"],
      "rewards": [
        {"id":"direct_fire_avoidance","name":"Direct Fire Avoidance","mastery":100,"fx":["Carrier: speed +10%, visibility -10%"]},
        {"id":"surface_fleets","name":"Littoral Operations","mastery":200,"fx":["Carrier: visibility -10%","Destroyer: visibility -5%"]},
        {"id":"screen_raiders","name":"Screen Raiders","mastery":300,"fx":["Destroyer: light attack +20%, lg armor piercing +20%, organization +20"]},
        {
          "id": "evasive_engagements_focus",
          "name": "Effective Surface Screening",
          "mastery": 400,
          "fx": ["Carrier: organization +30","Destroyer: speed +20%, surface detection +20%"]
        },
        {
          "id": "localized_sea_power",
          "name": "Localized Sea Power",
          "mastery": 500,
          "fx": ["Strike force movement org loss -30%","Enemy fleet size penalty +20%"]
        }
      ]
    },
    "convoy_escort": {
      "id": "convoy_escort",
      "name": "Convoy Escort",
      "track": "screens",
      "folder": "naval",
      "xp": 100,
      "xpType": "navy",
      "fx": ["Convoy escort efficiency +10%","Convoy speed while retreating +10%"],
      "rewards": [
        {"id":"anti_submarine_sweep_training","name":"Pre-Emptive Submarine Detection","mastery":100,"fx":["Destroyer: sub detection +10%"]},
        {"id":"escort_reclassification","name":"Tenacious Convoy Defense","mastery":200,"fx":["Destroyer: organization +10"]},
        {"id":"sweeping_duty","name":"Lane Clearance Maps","mastery":300,"fx":["Naval minesweeping efficiency +15%"]},
        {"id":"creeping_attack","name":"Creeping Attack Patterns","mastery":400,"fx":["Destroyer: sub detection +10%, light attack +5%"]},
        {"id":"as_below_so_above","name":"Dual-Purpose Gun Experience","mastery":500,"fx":["Destroyer: anti-air +15%"]}
      ]
    },
    "support_integrated_operations": {
      "id": "support_integrated_operations",
      "name": "Integrated Operations",
      "track": "screens",
      "folder": "naval",
      "xp": 100,
      "xpType": "navy",
      "fx": ["Screening Efficiency +5%"],
      "rewards": [
        {
          "id": "first_line_of_defense",
          "name": "First Line of Defense",
          "mastery": 100,
          "fx": ["Destroyer: organization +5, naval torpedo damage reduction factor -15%"]
        },
        {
          "id": "first_line_of_attack",
          "name": "First Line of Attack",
          "mastery": 200,
          "fx": ["Light Cruiser: organization +5, naval light gun hit chance factor +5%"]
        },
        {"id":"blue_water_training","name":"Blue Water Training","mastery":300,"fx":["Cruiser: naval weather penalty factor -25%"]},
        {"id":"fleet_coordination","name":"Cohesive Fleet Coordination","mastery":400,"fx":["Screening Efficiency +10%"]},
        {
          "id": "early_warning",
          "name": "Early Warning Patrols",
          "mastery": 500,
          "fx": ["Destroyer: surface detection +10%","Light Cruiser: surface detection +10%"]
        }
      ]
    },
    "hunter_killers": {
      "id": "hunter_killers",
      "name": "Hunter Killer Groups",
      "track": "screens",
      "folder": "naval",
      "xp": 100,
      "xpType": "navy",
      "fx": ["Fleet Coordination +10%"],
      "rewards": [
        {"id":"search_and_destroy","name":"Search and Destroy","mastery":100,"fx":["Destroyer: sub detection +15%"]},
        {"id":"flotilla_leader","name":"Flotilla Central Control","mastery":200,"fx":["Carrier: carrier sub detection +15%"]},
        {"id":"group_operations","name":"Delegated Group Operations","mastery":300,"fx":["Destroyer: sub attack +10%"]},
        {"id":"combat_readiness","name":"High Operational Tempo","mastery":400,"fx":["Carrier: organization +15"]},
        {
          "id": "escort_group_patrols",
          "name": "Combined Air/Surface Patrols",
          "mastery": 500,
          "fx": ["Carrier: patrol coordination +20%","Destroyer: patrol coordination +20%"]
        }
      ]
    },
    "torpedo_primacy": {
      "id": "torpedo_primacy",
      "name": "Torpedo Primacy",
      "track": "screens",
      "folder": "naval",
      "xp": 100,
      "xpType": "navy",
      "fx": ["Night-time Attack +25%"],
      "rewards": [
        {"id":"modern_broadsides","name":"Modern Broadsides","mastery":100,"fx":["Destroyer: torpedo attack +20%"]},
        {"id":"coordinated_fire_patterns","name":"Audacious Attacks","mastery":200,"fx":["Destroyer: organization +20"]},
        {
          "id": "dedicated_torpedo_task_forces",
          "name": "Flotilla Leaders",
          "mastery": 300,
          "fx": ["Light Cruiser: sub attack +20%, torpedo attack +20%","Destroyer: sub attack +20%"]
        },
        {"id":"improved_escort_role","name":"Periscope Spotting","mastery":400,"fx":["Destroyer: sub detection +20%"]},
        {
          "id": "task_force_integration",
          "name": "Task Force Integration",
          "mastery": 500,
          "fx": ["Light Cruiser: organization +20","Heavy Cruiser: organization +20, sub detection +20%"]
        }
      ]
    },
    "anti_aircraft_cruisers": {
      "id": "anti_aircraft_cruisers",
      "name": "Anti-Aircraft Cruisers",
      "track": "screens",
      "folder": "naval",
      "xp": 100,
      "xpType": "navy",
      "fx": ["Naval AA attack +20%"],
      "rewards": [
        {"id":"calibrated_deck_guns","name":"Rapid Target Tracking","mastery":100,"fx":["Light Cruiser: anti-air +20%"]},
        {"id":"priority_air_targets","name":"Skillful Range Finding","mastery":200,"fx":["Heavy Cruiser: anti-air +20%"]},
        {
          "id": "evasion_techniques",
          "name": "Evasive Action Techniques",
          "mastery": 300,
          "fx": ["Heavy Cruiser: speed +15%, organization +15","Light Cruiser: visibility -5%, organization +15"]
        },
        {"id":"air_interdiction_screening","name":"Air Interdiction Screening","mastery":400,"fx":["Destroyer: anti-air +20%, light attack +20%"]},
        {
          "id": "sustained_engagements",
          "name": "Sustained Engagements",
          "mastery": 500,
          "fx": ["Light Cruiser: armor +10%","Destroyer: HP +10%, organization +20"]
        }
      ]
    },
    "screen_support_focus": {
      "id": "screen_support_focus",
      "name": "Screen Support Focus",
      "track": "screens",
      "folder": "naval",
      "xp": 100,
      "xpType": "navy",
      "fx": ["Naval Max Range Factor +10%"],
      "rewards": [
        {
          "id": "close_support_integration",
          "name": "Close Support Integration",
          "mastery": 100,
          "fx": ["Support Ships - Support Value $RIGHT|+=%$ +10%","Destroyer: organization +30"]
        },
        {
          "id": "sustainable_task_forces",
          "name": "Self-Sustaining Task Forces",
          "mastery": 200,
          "fx": ["Support Ships - Maximum Support Effect $RIGHT|+=%$ +10%","Light Cruiser: range +10%"]
        },
        {"id":"maintenance_routines","name":"Naval Forward Replenishment","mastery":300,"fx":["Support Ship: organization +20, HP +20%"]},
        {
          "id": "protected_naval_expansion",
          "name": "Protected Naval Expansion",
          "mastery": 400,
          "fx": ["Destroyer: range +10%","Heavy Cruiser: heavy attack +10%"]
        },
        {
          "id": "patrol_pattern_improvements",
          "name": "Patrol Pattern Improvements",
          "mastery": 500,
          "fx": ["Destroyer: patrol coordination +20%","Light Cruiser: patrol coordination +20%"]
        }
      ]
    },
    "jeune_ecole": {
      "id": "jeune_ecole",
      "name": "The New School",
      "track": "screens",
      "folder": "naval",
      "xp": 100,
      "xpType": "navy",
      "fx": ["Convoy Raiding Efficiency +30%"],
      "rewards": [
        {
          "id": "commerce_raiding_priority",
          "name": "Commerce Raiding Priority",
          "mastery": 100,
          "fx": ["Light Cruiser: convoy raiding coordination +5%, organization +20, light attack +10%"]
        },
        {
          "id": "large_torpedo_boats",
          "name": "Large Torpedo Boats",
          "mastery": 200,
          "fx": ["Light Cruiser: torpedo attack +10%","Torpedo Cruiser: torpedo attack +10%, light attack +10%"]
        },
        {
          "id": "total_economic_warfare",
          "name": "Total Economic Warfare",
          "mastery": 300,
          "fx": ["Destroyer: convoy raiding coordination +5%, organization +20"]
        },
        {
          "id": "sea_scabs",
          "name": "Sea Scabs",
          "mastery": 400,
          "fx": ["Convoy speed while retreating +10%","Destroyer: speed +10%, patrol coordination +10%"]
        },
        {
          "id": "autonomous_cruisers",
          "name": "Autonomous Cruisers",
          "mastery": 500,
          "fx": ["Battlecruiser: heavy attack +10%, range +10%, speed +10%, convoy raiding coordination +10%"]
        }
      ]
    },
    "patrol_boats": {
      "id": "patrol_boats",
      "name": "Patrol Boats",
      "track": "screens",
      "folder": "naval",
      "xp": 50,
      "xpType": "navy",
      "fx": ["Retreat chance after initial stage: +25%","Naval Max Range Factor -10%","Destroyer: speed +10%, fuel use -25%, supply use -1%"],
      "rewards": [
        {"id":"hit_and_run","name":"Fire & Disengage","mastery":100,"fx":["Fleet speed while retreating +20%"]},
        {
          "id": "small_craft_harassment",
          "name": "Small Craft Harassment",
          "mastery": 200,
          "fx": ["Amphibious invasion defence +10%","Destroyer: torpedo attack +20%"]
        },
        {"id":"lie_in_wait","name":"Lie in Wait","mastery":300,"fx":["Destroyer: visibility -5%"]},
        {"id":"fast_sortie_turnaround","name":"Fast Sortie Turnaround","mastery":400,"fx":["Ship Recovery Rate +10%","Destroyer: organization +10"]},
        {"id":"home_waters_defense","name":"Home Waters Defense","mastery":500,"fx":["Industrial capacity dockyard +5%"]}
      ]
    },
    "wolfpacks": {
      "id": "wolfpacks",
      "name": "Wolfpacks",
      "track": "submarines",
      "folder": "naval",
      "xp": 100,
      "xpType": "navy",
      "fx": ["Retreat Speed after initial stage: +15%","Submarine: organization +10"],
      "rewards": [
        {"id":"predictive_expertise","name":"Rapid Approach","mastery":100,"fx":["Submarine: naval torpedo hit chance factor +5%"]},
        {
          "id": "pack_search_patterns",
          "name": "Pack Search Patterns",
          "mastery": 200,
          "fx": ["Submarine: surface detection +15%, convoy raiding coordination +20%"]
        },
        {"id":"improvisation","name":"Improvisation Culture","mastery":300,"fx":["Submarine: HP +20%, organization +10"]},
        {"id":"rough_weather_procedure","name":"Rough Weather Procedure","mastery":400,"fx":["Submarine: naval weather penalty factor -15%"]},
        {
          "id": "wolfpack_coordination",
          "name": "Centralized Callsign Identification",
          "mastery": 500,
          "fx": ["Submarine: surface detection +15%, convoy raiding coordination +10%"]
        }
      ]
    },
    "submarine_fleet_operations": {
      "id": "submarine_fleet_operations",
      "name": "Fleet Operations",
      "track": "submarines",
      "folder": "naval",
      "xp": 100,
      "xpType": "navy",
      "fx": ["Torpedo screen penetration +5%"],
      "rewards": [
        {"id":"long_range_patrol_schedule","name":"Long-Range Patrol Schedule","mastery":100,"fx":["Submarine: surface detection +30%, range +10%"]},
        {"id":"sustained_operations","name":"Sustained Operations","mastery":200,"fx":["Submarine: organization +15"]},
        {"id":"ambush_tactics","name":"Ambush Tactics","mastery":300,"fx":["Submarine Attack +10%"]},
        {"id":"diverse_operations","name":"Diverse Operations","mastery":400,"fx":["Submarine: mines planting +20%"]},
        {
          "id": "predictive_search_patterns",
          "name": "Predictive Search Patterns",
          "mastery": 500,
          "fx": ["Submarine: surface detection +20%, convoy raiding coordination +20%"]
        }
      ]
    },
    "capital_hunters": {
      "id": "capital_hunters",
      "name": "Capital Hunters",
      "track": "submarines",
      "folder": "naval",
      "xp": 100,
      "xpType": "navy",
      "fx": ["Torpedo reveal chance -10%"],
      "rewards": [
        {"id":"fire_protocol_drills","name":"Fire Protocol Drills","mastery":100,"fx":["Submarine: naval torpedo hit chance factor +15%"]},
        {"id":"battle_line_priority","name":"Battle Line Priority","mastery":200,"fx":["Torpedo screen penetration +5%"]},
        {"id":"quick_reload_procedures","name":"Rapid Reloading Drills","mastery":300,"fx":["Submarine: torpedo attack +10%"]},
        {"id":"battleship_chase","name":"Battleship Chase","mastery":400,"fx":["Submarine: fuel use -10%, range +10%"]},
        {
          "id": "escape_when_empty",
          "name": "Escape When Empty",
          "mastery": 500,
          "fx": ["Submarine: sub visibility -5%, speed +10%","Submarine speed while retreating +10%"]
        }
      ]
    },
    "submarine_coastal_defense": {
      "id": "submarine_coastal_defense",
      "name": "Coastal Defense",
      "track": "submarines",
      "folder": "naval",
      "xp": 100,
      "xpType": "navy",
      "fx": ["Submarine: supply use -2%"],
      "rewards": [
        {"id":"optimized_compartments","name":"Miniaturized Systems","mastery":100,"fx":["Midget Submarine: reliability +20%"]},
        {"id":"patrol_vigilance","name":"Patrol Vigilance","mastery":200,"fx":["Submarine: organization +20, surface detection +20%"]},
        {"id":"maneuever_fire","name":"Too Close To Miss","mastery":300,"fx":["Midget Submarine: torpedo attack +10%"]},
        {"id":"locals_knowledge","name":"Knowledge From Locals","mastery":400,"fx":["Submarine: sub visibility -5%"]},
        {
          "id": "counter_submarine_operations",
          "name": "Escort Avoidance",
          "mastery": 500,
          "fx": ["Submarine: torpedo attack +10%","Midget Submarine: sub visibility -5%"]
        }
      ]
    },
    "coastal_minelaying": {
      "id": "coastal_minelaying",
      "name": "Coastal Minelaying",
      "track": "submarines",
      "folder": "naval",
      "xp": 100,
      "xpType": "navy",
      "fx": ["Naval mines avoidance +10%"],
      "rewards": [
        {"id":"covert_buildup","name":"Covert Build-up","mastery":100,"fx":["Submarine: speed +10%, mines planting +25%"]},
        {"id":"placement_for_effect","name":"Placement For Effect","mastery":200,"fx":["Naval mines damage +25%"]},
        {"id":"minefield_patrols","name":"Minefield Patrols","mastery":300,"fx":["Destroyer: mines planting +25%, light attack +10%"]},
        {"id":"overhead_protection","name":"Anti-Aircraft Crew Drills","mastery":400,"fx":["Destroyer: anti-air +10%"]},
        {"id":"clearing_procedures","name":"Clearing Procedures","mastery":500,"fx":["Destroyer: mines sweeping +25%"]}
      ]
    },
    "long_range_submarines": {
      "id": "long_range_submarines",
      "name": "Long Range Submarines",
      "track": "submarines",
      "folder": "naval",
      "xp": 100,
      "xpType": "navy",
      "fx": ["Torpedo hit chance +10%"],
      "rewards": [
        {
          "id": "ocean_patrols",
          "name": "Marathon Patrols",
          "mastery": 100,
          "fx": [
            "Fleet Submarine: surface detection +10%",
            "Cruiser Submarine: surface detection +10%",
            "Nuclear Submarine: surface detection +10%",
            "Submarine: organization +10"
          ]
        },
        {
          "id": "improved_dive_protocols",
          "name": "Crash Dive Drills",
          "mastery": 200,
          "fx": [
            "Fleet Submarine: visibility -5%",
            "Cruiser Submarine: visibility -5%",
            "Submarine Carrier: visibility -10%",
            "Nuclear Submarine: visibility -5%"
          ]
        },
        {
          "id": "support_the_surface",
          "name": "Battlefleet Support Tactics",
          "mastery": 300,
          "fx": [
            "Fleet Submarine: speed +10%, torpedo attack +20%",
            "Cruiser Submarine: speed +10%, torpedo attack +20%",
            "Submarine Carrier: speed +20%",
            "Nuclear Submarine: speed +10%, torpedo attack +10%"
          ]
        },
        {
          "id": "stowage_efficiency",
          "name": "Stowage Efficiency",
          "mastery": 400,
          "fx": ["Fleet Submarine: fuel use -20%","Cruiser Submarine: fuel use -20%","Submarine Carrier: submarine carrier size +200%"]
        },
        {"id":"deep_water_supremacy","name":"Deep Sea Supremacy","mastery":500,"fx":["Submarine: sub detection +20%, torpedo attack +10%"]}
      ]
    },
    "mountaineers_1": {
      "id": "mountaineers_1",
      "name": "Cold Weather Specialists",
      "track": [[null,null,"special_forces_first"],[null,null,"special_forces_second"]],
      "folder": "special_forces",
      "xp": 60,
      "xpType": "army",
      "fx": ["Mountaineer Special Forces Cap Contribution -25%"],
      "rewards": [
        {
          "id": "reward_1",
          "name": "Cold Weather Training",
          "mastery": 60,
          "fx": ["Special Forces Non-Combat Out of Supply -10%","Cold acclimatization gain factor +10%","Special Forces: organization +5, soft attack +5%"]
        },
        {
          "id": "reward_2",
          "name": "Shared Instructors",
          "mastery": 120,
          "fx": ["Special Forces Division training time -10%","Mountaineer Special Forces Cap Contribution -25%"]
        },
        {"id":"reward_3","name":"Holding the Line","mastery":180,"fx":["All Mountaineers: defense +10%","Mountaineers: combat width -20%"]},
        {"id":"reward_4","name":"Combined Arms Training","mastery":240,"fx":["All Mountaineers: organization +10"]},
        {"id":"reward_5","name":"Backbone of the Armed Forces","mastery":300,"fx":["All Mountaineers: soft attack +10%"]}
      ]
    },
    "mountaineers_2": {
      "id": "mountaineers_2",
      "name": "Elevate the Mountaineers",
      "track": [[null,null,"special_forces_first"],[null,null,"special_forces_second"]],
      "folder": "special_forces",
      "xp": 60,
      "xpType": "army",
      "fx": ["Mountaineer Special Forces Cap Contribution -25%"],
      "rewards": [
        {
          "id": "reward_1",
          "name": "Rough Terrain Specialists",
          "mastery": 60,
          "fx": ["Hot acclimatization gain factor +10%","Cold acclimatization gain factor +10%"]
        },
        {
          "id": "reward_2",
          "name": "Battlefield Intelligence",
          "mastery": 120,
          "fx": ["All Mountaineers: initiative +1%","Unit mountaineers design cost factor -50%","Unit rangers support design cost factor -50%"]
        },
        {
          "id": "reward_3",
          "name": "Mountain Artillery",
          "mastery": 180,
          "fx": [
            "Support Artillery: All Mountaineers battalions in the division get breakthrough +15%",
            "Recon Rangers: Line Artillery battalions in the division get soft attack +20%"
          ]
        },
        {
          "id": "reward_4",
          "name": "Adaptation to Hardships",
          "mastery": 240,
          "fx": ["Mountaineer Special Forces Cap Contribution -25%","All Mountaineers: supply use -2%, organization +10"]
        },
        {"id":"reward_5","name":"Mountain Warfare Lessons","mastery":300,"fx":["Special forces Attack +10%"]}
      ]
    },
    "marines_1": {
      "id": "marines_1",
      "name": "Marine Commandos",
      "track": [[null,null,"special_forces_first"],[null,null,"special_forces_second"]],
      "folder": "special_forces",
      "xp": 60,
      "xpType": "navy",
      "fx": ["Marine Special Forces Cap Contribution -25%"],
      "rewards": [
        {
          "id": "reward_1",
          "name": "Organize Marine Commandos",
          "mastery": 60,
          "fx": ["Marine Commandos have the ability to exfiltrate from any coastal province"]
        },
        {"id":"reward_2","name":"Gruelling Training Regimen","mastery":120,"fx":["Unit marine design cost factor -50%","Marines: organization +5"]},
        {
          "id": "reward_3",
          "name": "Demolition Experts",
          "mastery": 180,
          "fx": [
            "Marine Commandos: breakthrough +15%",
            "Marine Commando divisions will cause 1 level of damage to all strategic state buildings after any successful naval invasion"
          ]
        },
        {
          "id": "reward_4",
          "name": "Marine Corps Expansion",
          "mastery": 240,
          "fx": ["Naval Invasion Plan Capacity +2","Marine Special Forces Cap Contribution -25%"]
        },
        {
          "id": "reward_5",
          "name": "Mechanized Marine Corps",
          "mastery": 300,
          "fx": [
            "New spirit: Improved Amphibious Designs",
            "Amtrac Battalion: soft attack +10%, breakthrough +10%, organization +5",
            "Pioneers: Amphibious Armor battalions in the division get armor +15%, breakthrough +15%"
          ]
        }
      ]
    },
    "marines_2": {
      "id": "marines_2",
      "name": "Expeditionary Units",
      "track": [[null,null,"special_forces_first"],[null,null,"special_forces_second"]],
      "folder": "special_forces",
      "xp": 60,
      "xpType": "navy",
      "fx": ["Marine Special Forces Cap Contribution -25%"],
      "rewards": [
        {
          "id": "reward_1",
          "name": "Shore Parties",
          "mastery": 60,
          "fx": [
            "Naval invasion prep days -5",
            "Division Capacity Per Naval Invasion +2",
            "Naval Invasion Plan Capacity +1",
            "Marine Special Forces Cap Contribution -25%"
          ]
        },
        {
          "id": "reward_2",
          "name": "Increased Artillery Coordination",
          "mastery": 120,
          "fx": [
            "Pioneers: Line Artillery battalions in the division get organization +2",
            "Support Artillery: All Marines battalions in the division get defense +5%",
            "Support Anti-Air: All Marines battalions in the division get defense +5%",
            "Support Anti-Tank: All Marines battalions in the division get defense +5%"
          ]
        },
        {
          "id": "reward_3",
          "name": "Defending Beachhead",
          "mastery": 180,
          "fx": ["Marines: organization +5, soft attack +5%","Extra marine supply grace +36"]
        },
        {
          "id": "reward_4",
          "name": "Blowtorch and Corkscrew",
          "mastery": 240,
          "fx": ["Naval invasion planning bonus speed +20%","Shore bombardment bonus +15%","Air Superiority +10%"]
        },
        {"id":"reward_5","name":"Expeditionary Task Forces","mastery":300,"fx":["Special forces Attack +10%"]}
      ]
    },
    "paratroopers_1": {
      "id": "paratroopers_1",
      "name": "Sabotage Parties",
      "track": [[null,null,"special_forces_first"],[null,null,"special_forces_second"]],
      "folder": "special_forces",
      "xp": 60,
      "xpType": "air",
      "fx": [
        "Paratrooper Special Forces Cap Contribution -25%",
        "Signal Company: All Paratroopers battalions in the division get defense +15%",
        "Extra paratrooper supply grace +48"
      ],
      "rewards": [
        {"id":"reward_1","name":"Sabotage Missions","mastery":60,"fx":["Transport: air defense +20%"]},
        {
          "id": "reward_2",
          "name": "Survival Training",
          "mastery": 120,
          "fx": ["All Paratroopers: supply use -2%","Hot acclimatization gain factor +10%","Cold acclimatization gain factor +10%"]
        },
        {"id":"reward_3","name":"Branch Knowledge Sharing","mastery":180,"fx":["Special Forces: organization +10, soft attack +5%"]},
        {
          "id": "reward_4",
          "name": "Enhanced Navigational Training",
          "mastery": 240,
          "fx": ["All Paratroopers: recovery rate +15%","Signal Company: All Paratroopers battalions in the division get HP +10%"]
        },
        {
          "id": "reward_5",
          "name": "Best of the Best",
          "mastery": 300,
          "fx": ["Paratrooper Special Forces Cap Contribution -25%","All Paratroopers: soft attack +15%, breakthrough +15%"]
        }
      ]
    },
    "paratroopers_2": {
      "id": "paratroopers_2",
      "name": "Concentrated Drops",
      "track": [[null,null,"special_forces_first"],[null,null,"special_forces_second"]],
      "folder": "special_forces",
      "xp": 60,
      "xpType": "air",
      "fx": [
        "Paratrooper Special Forces Cap Contribution -25%",
        "Field Hospital: All Paratroopers battalions in the division get recovery rate +15%",
        "Organization After Paradropping +50%"
      ],
      "rewards": [
        {
          "id": "reward_1",
          "name": "Combat Insertion",
          "mastery": 60,
          "fx": [
            "Paratrooper Special Forces Cap Contribution -25%",
            "Enemy divisions in states we Paradrop into will have their current Organization reduced. This effect can occur once per state every 30 days"
          ]
        },
        {"id":"reward_2","name":"Expedited Training Process","mastery":120,"fx":["Special Forces Division training time -10%"]},
        {
          "id": "reward_3",
          "name": "Airborne Medical Detail",
          "mastery": 180,
          "fx": ["Field Hospital: All Paratroopers battalions in the division get organization +5"]
        },
        {"id":"reward_4","name":"Strategic Air Lift Corps","mastery":240,"fx":["Paratrooper weight factor -50%","Paratrooper aa defense +10%"]},
        {"id":"reward_5","name":"Backbone of the Armed Forces","mastery":300,"fx":["Special forces Attack +10%"]}
      ]
    },
    "rangers_1": {
      "id": "rangers_1",
      "name": "Jaeger Traditions",
      "track": [[null,null,"special_forces_first"],[null,null,"special_forces_second"]],
      "folder": "special_forces",
      "xp": 60,
      "xpType": "army",
      "fx": ["Rangers Special Forces Cap Contribution -25%"],
      "rewards": [
        {"id":"reward_1","name":"Forest Guerillas","mastery":60,"fx":["All Rangers: defense +10%, initiative +1%, speed +10%"]},
        {
          "id": "reward_2",
          "name": "Light Infantry Specialization",
          "mastery": 120,
          "fx": ["Special Forces: soft attack +5%, organization +5","Rangers Special Forces Cap Contribution -25%"]
        },
        {
          "id": "reward_3",
          "name": "Fire Support Integration",
          "mastery": 180,
          "fx": [
            "Support Artillery: All Rangers battalions in the division get defense +5%, breakthrough +5%",
            "Recon Rangers: Line Artillery battalions in the division get defense +15%, breakthrough +15%"
          ]
        },
        {"id":"reward_4","name":"Rangers Urban Combat Expertise","mastery":240,"fx":["All Rangers: recovery rate +10%, supply use -2%"]},
        {"id":"reward_5","name":"Elite Rangers","mastery":300,"fx":["Rangers: organization +10, soft attack +10%, breakthrough +10%"]}
      ]
    },
    "rangers_2": {
      "id": "rangers_2",
      "name": "Rangers Jungle Training",
      "track": [[null,null,"special_forces_first"],[null,null,"special_forces_second"]],
      "folder": "special_forces",
      "xp": 60,
      "xpType": "army",
      "fx": ["Rangers Special Forces Cap Contribution -25%"],
      "rewards": [
        {"id":"reward_1","name":"Recon Rangers Terrain Mastery","mastery":60,"fx":[]},
        {"id":"reward_2","name":"Elevate the Rangers","mastery":120,"fx":["All Rangers: soft attack +10%, defense +10%, organization +5"]},
        {"id":"reward_3","name":"Jungle Guerillas","mastery":180,"fx":["Rangers: supply use -3%","Special Forces Supply Grace +36"]},
        {
          "id": "reward_4",
          "name": "Ranger Training Brigade",
          "mastery": 240,
          "fx": ["Special Forces Division training time -10%","Rangers Special Forces Cap Contribution -25%"]
        },
        {"id":"reward_5","name":"Establish Ranger School","mastery":300,"fx":["Special forces Attack +10%"]}
      ]
    }
  },
  "slots": {
    "country": {"id":"country","name":"Country","branch":"national","cost":0},
    "academy_spirit": {"id":"academy_spirit","name":"Spirit of the Academy","branch":"army","cost":20},
    "army_spirit": {"id":"army_spirit","name":"Spirit of the Army","branch":"army","cost":35},
    "division_command_spirit": {"id":"division_command_spirit","name":"Spirit of Division Command","branch":"army","cost":50},
    "naval_academy_spirit": {"id":"naval_academy_spirit","name":"Spirit of Naval Academy","branch":"navy","cost":20},
    "navy_spirit": {"id":"navy_spirit","name":"Spirit of the Navy","branch":"navy","cost":35},
    "naval_command_spirit": {"id":"naval_command_spirit","name":"Spirit of Naval Command","branch":"navy","cost":50},
    "air_force_academy_spirit": {"id":"air_force_academy_spirit","name":"Spirit of the Air Force Academy","branch":"air","cost":50},
    "air_force_spirit": {"id":"air_force_spirit","name":"Spirit of the Air Force","branch":"air","cost":50},
    "air_force_command_spirit": {"id":"air_force_command_spirit","name":"Spirit of Air Force Command","branch":"air","cost":50}
  },
  "spirits": {
    "independent_air_force_spirit": {"id":"independent_air_force_spirit","name":"Independent Air Force","slot":"air_force_spirit","branch":"air","fx":["Air Advisor Cost -75%"]},
    "industrial_destruction_spirit": {
      "id": "industrial_destruction_spirit",
      "name": "Industrial Destruction",
      "slot": "air_force_spirit",
      "branch": "air",
      "fx": ["Research bonus: heavy air +5%","Large Plane Design Cost -75%"]
    },
    "dive_bombing_spirit": {
      "id": "dive_bombing_spirit",
      "name": "Dive Bombing",
      "slot": "air_force_spirit",
      "branch": "air",
      "fx": ["Research bonus: cas bomber +5%","Small CAS Airframe Design Cost -75%","Small CAS Carrier Airframe Design Cost -75%"]
    },
    "material_destruction_spirit": {
      "id": "material_destruction_spirit",
      "name": "Material Destruction",
      "slot": "air_force_spirit",
      "branch": "air",
      "fx": ["Research bonus: tactical bomber +5%","Medium Airframe Design Cost -75%"]
    },
    "industry_liasons_spirit": {
      "id": "industry_liasons_spirit",
      "name": "Industry Liaisons",
      "slot": "air_force_spirit",
      "branch": "air",
      "fx": ["Research bonus: light air +15%, medium air +15%, heavy air +15%"]
    },
    "effective_training_programs_spirit": {
      "id": "effective_training_programs_spirit",
      "name": "Effective Training Programs",
      "slot": "air_force_spirit",
      "branch": "air",
      "fx": ["Air Wing Training Experience Gain +25%"]
    },
    "branch_independence_spirit": {
      "id": "branch_independence_spirit",
      "name": "Branch Independence Spirit",
      "slot": "air_force_spirit",
      "branch": "air",
      "fx": ["Experience gain air +10%","Air Force intelligence to others -5"]
    },
    "air_crew_surveys_spirit": {
      "id": "air_crew_surveys_spirit",
      "name": "Air Crew Surveys",
      "slot": "air_force_spirit",
      "branch": "air",
      "fx": [
        "Fighter aircraft track mastery gain factor +5%",
        "Strike aircraft track mastery gain factor +5%",
        "Medium aircraft track mastery gain factor +5%",
        "Heavy aircraft track mastery gain factor +5%",
        "Air Accidents Chance -25%"
      ]
    },
    "battlefield_air_interdiction_spirit": {
      "id": "battlefield_air_interdiction_spirit",
      "name": "Battlefield Air Interdiction",
      "slot": "air_force_command_spirit",
      "branch": "air",
      "fx": ["Ground attack factor +5%","Escort Efficiency +5%"]
    },
    "cag_night_fighting_spirit": {
      "id": "cag_night_fighting_spirit",
      "name": "CAG Night Fighting",
      "slot": "air_force_command_spirit",
      "branch": "air",
      "fx": ["Carrier night penalty reduction +25%","Carrier Night Traffic +50%"],
      "req": ["we are United Kingdom"]
    },
    "veteran_air_instructors_spirit": {
      "id": "veteran_air_instructors_spirit",
      "name": "Veteran Air Instructors",
      "slot": "air_force_command_spirit",
      "branch": "air",
      "fx": ["Air Wing Experience loss when killed -25%"]
    },
    "centralized_control_spirit": {
      "id": "centralized_control_spirit",
      "name": "Centralized Control",
      "slot": "air_force_command_spirit",
      "branch": "air",
      "fx": ["Fighter Detection +10%","Air Mission Efficiency +10%"]
    },
    "steel_wings_steel_hearts_spirit": {
      "id": "steel_wings_steel_hearts_spirit",
      "name": "Steel Wings, Steel Hearts",
      "slot": "air_force_command_spirit",
      "branch": "air",
      "fx": ["Untrained pilots penalty for new Air Wings -33%"],
      "req": ["we are communist"]
    },
    "home_defence_spirit": {"id":"home_defence_spirit","name":"Airborne Heroes","slot":"air_force_command_spirit","branch":"air","fx":["Ace Effectiveness +50%"]},
    "air_power_projection_spirit": {
      "id": "air_power_projection_spirit",
      "name": "Air Power Projection",
      "slot": "air_force_command_spirit",
      "branch": "air",
      "fx": ["Air power projection factor +10%"]
    },
    "massed_strike_spirit": {"id":"massed_strike_spirit","name":"Massed Strike","slot":"air_force_command_spirit","branch":"air","fx":["Air Superiority +5%"]},
    "continuous_strike_spirit": {
      "id": "continuous_strike_spirit",
      "name": "Continuous Strike",
      "slot": "air_force_command_spirit",
      "branch": "air",
      "fx": ["Air Support Mission Efficiency +25%"]
    },
    "strategic_strike_spirit": {
      "id": "strategic_strike_spirit",
      "name": "Total Devastation",
      "slot": "air_force_command_spirit",
      "branch": "air",
      "fx": ["Air strategic bomber bombing factor +10%"]
    },
    "bold_attack_spirit": {"id":"bold_attack_spirit","name":"Bold Attack","slot":"academy_spirit","branch":"army","fx":["Officers: 50% chance of +1 Attack on level up."]},
    "tenacious_defense_spirit": {
      "id": "tenacious_defense_spirit",
      "name": "Tenacious Defense",
      "slot": "academy_spirit",
      "branch": "army",
      "fx": ["Officers: 50% chance of +1 Defense on level up."]
    },
    "meticulous_preparation_spirit": {
      "id": "meticulous_preparation_spirit",
      "name": "Meticulous Preparation",
      "slot": "academy_spirit",
      "branch": "army",
      "fx": ["Officers: 50% chance of +1 Planning and Logistics on level up."]
    },
    "best_of_the_best_spirit": {
      "id": "best_of_the_best_spirit",
      "name": "Best of the Best",
      "slot": "academy_spirit",
      "branch": "army",
      "fx": ["Starting level of new army leaders +2","Army intelligence to others -5","New Officers: no personality traits gained on hiring."],
      "req": ["we are democratic"]
    },
    "academy_scholarships_spirit": {
      "id": "academy_scholarships_spirit",
      "name": "Academy Scholarships",
      "slot": "academy_spirit",
      "branch": "army",
      "fx": [
        "Starting level of new army leaders +1",
        "Army Leader Cost -30%",
        "Commander as Advisor Cost -75%",
        "New Officers: no personality traits gained on hiring."
      ],
      "req": ["we are communist"]
    },
    "political_loyalty_spirit": {
      "id": "political_loyalty_spirit",
      "name": "Political Loyalty",
      "slot": "academy_spirit",
      "branch": "army",
      "fx": [
        "Army Leader Cost -50%",
        "Party popularity stability factor +10%",
        "New Officers: begin with either \"Politically Connected\" or \"Media Personality\" traits."
      ],
      "req": ["we are fascist or we are non-aligned"]
    },
    "inventive_leadership_spirit": {
      "id": "inventive_leadership_spirit",
      "name": "Inventive Leadership",
      "slot": "academy_spirit",
      "branch": "army",
      "fx": [
        "New Officers: 50% chance to begin with \"Commando\" , \"Trickster\" , or \"Invader\" traits.",
        "Trait naval invader xp gain factor +20%",
        "Trait commando xp gain factor +20%",
        "Trait trickster xp gain factor +20%"
      ]
    },
    "mobile_warfare_academy_spirit": {
      "id": "mobile_warfare_academy_spirit",
      "name": "Embrace the Future",
      "slot": "academy_spirit",
      "branch": "army",
      "fx": ["New Officers: Gain a chance to begin with \"Armor Officer\" trait.","Trait panzer leader xp gain factor +20%"]
    },
    "superior_firepower_academy_spirit": {
      "id": "superior_firepower_academy_spirit",
      "name": "Engineering Schools",
      "slot": "academy_spirit",
      "branch": "army",
      "fx": ["New Officers: Gain a chance to begin with \"Engineer Officer\" trait.","Trait engineer xp gain factor +20%","Initiative +4%"]
    },
    "theatre_training_spirit": {
      "id": "theatre_training_spirit",
      "name": "Theatre Training",
      "slot": "academy_spirit",
      "branch": "army",
      "fx": ["50% chance that new officers are created with the \"Brilliant Strategist\" or \"Inflexible Strategist\" trait.","Terrain traits XP Gain +20%"]
    },
    "mass_assault_academy_spirit": {
      "id": "mass_assault_academy_spirit",
      "name": "The Queen of Battle",
      "slot": "academy_spirit",
      "branch": "army",
      "fx": ["New Officers: Gain a chance to begin with \"Infantry Officer\" trait.","Trait infantry leader xp gain factor +20%"]
    },
    "cult_of_heroism_army_spirit": {
      "id": "cult_of_heroism_army_spirit",
      "name": "Cult of Heroism",
      "slot": "academy_spirit",
      "branch": "army",
      "fx": ["Automatic Free Medal Chance +50%","Unit Medal Effectiveness -25%"]
    },
    "professional_officer_corps_spirit": {
      "id": "professional_officer_corps_spirit",
      "name": "Professional Officer Corps",
      "slot": "academy_spirit",
      "branch": "army",
      "fx": ["Experience gain army unit factor +15%","Maximum Command Power Increase +30"]
    },
    "elevated_engineering_corps_spirit": {
      "id": "elevated_engineering_corps_spirit",
      "name": "Elevated Engineer Corps",
      "slot": "army_spirit",
      "branch": "army",
      "fx": ["Unit engineer design cost factor -100%","Entrenchment speed +10%","Railway Gun Bombardment +25%"]
    },
    "proper_heritage_spirit": {
      "id": "proper_heritage_spirit",
      "name": "Proper Heritage",
      "slot": "army_spirit",
      "branch": "army",
      "fx": ["Experience gain factor +10%","Unit cavalry design cost factor -100%","Supply Combat Penalties on Core Territory -20%"],
      "req": ["we have completed Reintroduce War Elephants"]
    },
    "relief_of_command_spirit": {
      "id": "relief_of_command_spirit",
      "name": "Relief of Command",
      "slot": "army_spirit",
      "branch": "army",
      "fx": ["Experience gain army factor +25%","Army Advisor Cost -50%"],
      "req": ["we are democratic"]
    },
    "ideological_loyalty_spirit": {
      "id": "ideological_loyalty_spirit",
      "name": "Ideological Loyalty",
      "slot": "army_spirit",
      "branch": "army",
      "fx": ["Encirclement penalty -20%","Weekly Manpower +500"],
      "req": ["we are communist"]
    },
    "state_serves_the_military_spirit": {
      "id": "state_serves_the_military_spirit",
      "name": "State serves the Military",
      "slot": "army_spirit",
      "branch": "army",
      "fx": ["Offensive war stability factor +10%","Conscription Laws Cost -25%"],
      "req": ["we are fascist"]
    },
    "mobile_warfare_army_spirit": {
      "id": "mobile_warfare_army_spirit",
      "name": "Motorization Drive",
      "slot": "army_spirit",
      "branch": "army",
      "fx": [
        "Experience gain motorized combat factor +10%",
        "Experience gain mechanized combat factor +10%",
        "Unit light armor design cost factor -100%",
        "Unit medium armor design cost factor -100%",
        "Unit modern armor design cost factor -100%",
        "Unit heavy armor design cost factor -100%",
        "Unit super heavy armor design cost factor -100%",
        "Unit motorized design cost factor -100%",
        "Unit mechanized design cost factor -100%"
      ]
    },
    "superior_firepower_army_spirit": {
      "id": "superior_firepower_army_spirit",
      "name": "Overwhelming Firepower",
      "slot": "army_spirit",
      "branch": "army",
      "fx": [
        "Experience gain artillery combat factor +10%",
        "Unit infantry design cost factor -100%",
        "Unit artillery brigade design cost factor -100%",
        "Unit artillery design cost factor -100%",
        "Unit mot artillery brigade design cost factor -100%",
        "Unit light sp artillery brigade design cost factor -100%",
        "Unit medium sp artillery brigade design cost factor -100%",
        "Unit heavy sp artillery brigade design cost factor -100%",
        "Unit super heavy sp artillery brigade design cost factor -100%",
        "Unit bicycle battalion design cost factor -100%"
      ]
    },
    "grand_battleplan_army_spirit": {
      "id": "grand_battleplan_army_spirit",
      "name": "Tip of the Spear",
      "slot": "army_spirit",
      "branch": "army",
      "fx": [
        "Unit marine design cost factor -50%",
        "Unit mountaineers design cost factor -50%",
        "Unit paratrooper design cost factor -50%",
        "Unit ranger battalion design cost factor -50%",
        "Special Forces Cap +24",
        "Extra paratrooper supply grace +24",
        "Extra marine supply grace +24"
      ]
    },
    "mass_assault_army_spirit": {
      "id": "mass_assault_army_spirit",
      "name": "Bayonet Strength",
      "slot": "army_spirit",
      "branch": "army",
      "fx": [
        "Experience gain infantry combat factor +10%",
        "Unit infantry design cost factor -100%",
        "Unit motorized design cost factor -100%",
        "Unit mechanized design cost factor -100%",
        "Unit bicycle battalion design cost factor -100%"
      ]
    },
    "heritage_of_accomplishment": {
      "id": "heritage_of_accomplishment",
      "name": "Accomplished Heritage",
      "slot": "army_spirit",
      "branch": "army",
      "fx": ["Grant Medal Cost -50%","Field Officer Division Penalty -1"]
    },
    "living_off_the_land_army_spirit": {
      "id": "living_off_the_land_army_spirit",
      "name": "Living off the Land",
      "slot": "army_spirit",
      "branch": "army",
      "fx": ["Non-Combat Out of Supply Penalties -10%","Division Attrition -10%"]
    },
    "subsidized_contracts_army_spirit": {
      "id": "subsidized_contracts_army_spirit",
      "name": "Subsidized Contracts",
      "slot": "army_spirit",
      "branch": "army",
      "fx": ["Armored Car: build cost ic -15%","Light Tank: build cost ic -10%","Armored Support Vehicle: build cost ic -10%"]
    },
    "subsidized_contracts_no_lar_army_spirit": {
      "id": "subsidized_contracts_no_lar_army_spirit",
      "name": "Subsidized Contracts",
      "slot": "army_spirit",
      "branch": "army",
      "fx": ["Light Tank: build cost ic -10%","Armored Support Vehicle: build cost ic -10%"]
    },
    "spirit_of_defiance_army_spirit": {
      "id": "spirit_of_defiance_army_spirit",
      "name": "Spirit of Defiance",
      "slot": "army_spirit",
      "branch": "army",
      "fx": ["Resistance Target in our states occupied by the enemy +25%","Resistance Growth Speed in our states occupied by the enemy +50%"]
    },
    "proxy_wars_army_spirit": {
      "id": "proxy_wars_army_spirit",
      "name": "Intervention Specialists",
      "slot": "army_spirit",
      "branch": "army",
      "fx": ["Army Experience from Volunteers +50%"]
    },
    "static_warfare_spirit": {
      "id": "static_warfare_spirit",
      "name": "Static Warfare",
      "slot": "division_command_spirit",
      "branch": "army",
      "fx": ["Additional Elastic Defense Tactic Chance if it is Preferred tactic +100%","Max Entrenchment +10%","Entrenchment speed +10%"]
    },
    "flexible_organization_spirit": {
      "id": "flexible_organization_spirit",
      "name": "Flexible Organization",
      "slot": "division_command_spirit",
      "branch": "army",
      "fx": ["Org Loss when Moving -15%","Divisions speed +5%","Choose preferred tactics cost -15"]
    },
    "aggressive_reconnaisance_spirit": {
      "id": "aggressive_reconnaisance_spirit",
      "name": "Aggressive Reconnaissance",
      "slot": "division_command_spirit",
      "branch": "army",
      "fx": ["Additional Infiltration Assault Tactic Chance if it is Preferred tactic +100%","Intelligence gained from Combat +15%","Reconnaissance +15%"]
    },
    "reserve_officers_spirit": {"id":"reserve_officers_spirit","name":"Reserve Officers","slot":"division_command_spirit","branch":"army","fx":["Division training time -15%"]},
    "victory_or_death_spirit": {
      "id": "victory_or_death_spirit",
      "name": "Victory or Death",
      "slot": "division_command_spirit",
      "branch": "army",
      "fx": ["Additional Mass Charge Tactic Chance if it is Preferred tactic +100%","Organization loss when below 25% -15%"]
    },
    "maneuver_warfare_spirit": {
      "id": "maneuver_warfare_spirit",
      "name": "Maneuver Warfare",
      "slot": "division_command_spirit",
      "branch": "army",
      "fx": ["Additional Unexpected Thrust Tactic Chance if it is Preferred tactic +100%","Divisions speed +5%","Coordination +5%"]
    },
    "smoke_and_fire_spirit": {
      "id": "smoke_and_fire_spirit",
      "name": "Smoke and Fire",
      "slot": "division_command_spirit",
      "branch": "army",
      "fx": ["Additional Suppressive Barrage Tactic Chance if it is Preferred tactic +100%","Breakthrough factor +6%"]
    },
    "logistical_focus_spirit": {
      "id": "logistical_focus_spirit",
      "name": "Logistical Focus",
      "slot": "division_command_spirit",
      "branch": "army",
      "fx": [
        "Additional Well Planned Attack Tactic Chance if it is Preferred tactic +100%",
        "Supply Consumption -10%",
        "Air Fuel Consumption -10%",
        "Navy Fuel Consumption -10%"
      ]
    },
    "operational_reserve_spirit": {
      "id": "operational_reserve_spirit",
      "name": "Operational Reserves",
      "slot": "division_command_spirit",
      "branch": "army",
      "fx": ["Additional Relentless Assault Tactic Chance if it is Preferred tactic +100%","Army strength factor +10%"]
    },
    "all_arms_at_defense_army_spirit": {
      "id": "all_arms_at_defense_army_spirit",
      "name": "All-Arms Anti-tank Defense",
      "slot": "division_command_spirit",
      "branch": "army",
      "fx": ["Additional Tactical Withdrawal Tactic Chance if it is Preferred tactic +100%","Infantry Equipment: hard attack +25%"]
    },
    "direct_fire_support_army_spirit": {
      "id": "direct_fire_support_army_spirit",
      "name": "Direct Fire Support",
      "slot": "division_command_spirit",
      "branch": "army",
      "fx": [
        "Additional Overwhelming Fire Tactic Chance if it is Preferred tactic +100%",
        "Light SP Artillery: hard attack +50%, piercing +100%",
        "Medium SP Artillery: hard attack +50%, piercing +100%",
        "Heavy SP Artillery: hard attack +50%, piercing +100%",
        "Modern SP Artillery: hard attack +50%, piercing +100%"
      ]
    },
    "rapid_emplacement_army_spirit": {
      "id": "rapid_emplacement_army_spirit",
      "name": "Rapid Emplacement",
      "slot": "division_command_spirit",
      "branch": "army",
      "fx": [
        "Additional Breakthrough Tactic Chance if it is Preferred tactic +100%",
        "Towed Artillery: breakthrough +10%, defense +10%",
        "Towed Rocket Artillery: breakthrough +10%, defense +10%",
        "Motorized Rocket Artillery: breakthrough +10%, defense +10%",
        "Towed Anti-Tank: breakthrough +10%, defense +10%",
        "Towed Anti-Aircraft: breakthrough +10%, defense +10%"
      ]
    },
    "quick_improvisation_spirit": {
      "id": "quick_improvisation_spirit",
      "name": "Quick Improvisation",
      "slot": "division_command_spirit",
      "branch": "army",
      "fx": ["Commander Abilities Cost -20%","Daily Command Power Gain +20%","Planning Speed +20%"]
    },
    "instilled_aggression_spirit": {
      "id": "instilled_aggression_spirit",
      "name": "Instilled Aggression",
      "slot": "naval_academy_spirit",
      "branch": "navy",
      "fx": ["Admirals: 50% chance to gain +1 Attack on level up."]
    },
    "calculated_restraint_spirit": {
      "id": "calculated_restraint_spirit",
      "name": "Calculated Restraint",
      "slot": "naval_academy_spirit",
      "branch": "navy",
      "fx": ["Admirals: 50% chance to gain +1 Defense on level up."]
    },
    "signals_training_spirit": {
      "id": "signals_training_spirit",
      "name": "Signals Training",
      "slot": "naval_academy_spirit",
      "branch": "navy",
      "fx": ["Admirals: 50% chance to gain +1 Maneuvering and Coordination on level up."]
    },
    "fleet_in_being_academy_spirit": {
      "id": "fleet_in_being_academy_spirit",
      "name": "Grand Fleet",
      "slot": "naval_academy_spirit",
      "branch": "navy",
      "fx": [
        "New Admirals: 50% chance to begin with \"Gunnery Expert\" trait.",
        "Trait ironside xp gain factor +20%",
        "Trait superior tactician xp gain factor +20%"
      ]
    },
    "trade_interdiction_academy_spirit": {
      "id": "trade_interdiction_academy_spirit",
      "name": "Convoy Warfare",
      "slot": "naval_academy_spirit",
      "branch": "navy",
      "fx": [
        "New Admirals: 50% chance to begin with \"Seawolf\" or \"Blockade Runner\" traits.",
        "Trait seawolf xp gain factor +20%",
        "Trait blockade runner xp gain factor +20%"
      ]
    },
    "base_strike_academy_spirit": {
      "id": "base_strike_academy_spirit",
      "name": "Integrated Air Arm",
      "slot": "naval_academy_spirit",
      "branch": "navy",
      "fx": [
        "New Admirals: 50% chance to begin with \"Aviation Enthusiast\" trait.",
        "Trait air controller xp gain factor +20%",
        "Trait fleet protector xp gain factor +20%"
      ]
    },
    "best_of_the_best_naval_academy_spirit": {
      "id": "best_of_the_best_naval_academy_spirit",
      "name": "Best of the Best",
      "slot": "naval_academy_spirit",
      "branch": "navy",
      "fx": ["Starting level of new navy leaders +2","Navy intelligence to others -5","New Admirals: begin without any personality traits."]
    },
    "naval_academy_scholarships_spirit": {
      "id": "naval_academy_scholarships_spirit",
      "name": "Academy Scholarships",
      "slot": "naval_academy_spirit",
      "branch": "navy",
      "fx": ["Starting level of new navy leaders +1","Navy Leader Cost -40%","New Admirals: begin without any personality traits."]
    },
    "ship_to_shore_navy_spirit": {
      "id": "ship_to_shore_navy_spirit",
      "name": "Ship to Shore Training",
      "slot": "naval_academy_spirit",
      "branch": "navy",
      "fx": ["Trait ironside xp gain factor +35%","Shore Bombardment Collateral Damage +50%"]
    },
    "stay_at_your_posts_navy_spirit": {
      "id": "stay_at_your_posts_navy_spirit",
      "name": "Stay at your Posts",
      "slot": "naval_academy_spirit",
      "branch": "navy",
      "fx": ["Trait blockade runner xp gain factor +35%","Accident chance -15%"]
    },
    "jeune_ecole_spirit": {
      "id": "jeune_ecole_spirit",
      "name": "Jeune École",
      "slot": "navy_spirit",
      "branch": "navy",
      "fx": ["Research bonus: dd tech +20%","Light Ship Design Cost -60%"]
    },
    "flexible_contracts_spirit": {
      "id": "flexible_contracts_spirit",
      "name": "Flexible Contracts",
      "slot": "navy_spirit",
      "branch": "navy",
      "fx": ["Naval Designer Cost -80%","Cruiser Design Cost -60%"]
    },
    "integrated_designers_spirit": {
      "id": "integrated_designers_spirit",
      "name": "Integrated Designers",
      "slot": "navy_spirit",
      "branch": "navy",
      "fx": ["Research bonus: ship modules tech +20%"]
    },
    "naval_reform_spirit": {"id":"naval_reform_spirit","name":"Naval Reform","slot":"navy_spirit","branch":"navy","fx":["Naval mastery gain factor +10%"]},
    "naval_refit_yards_spirit": {
      "id": "naval_refit_yards_spirit",
      "name": "Naval Refit Yards",
      "slot": "navy_spirit",
      "branch": "navy",
      "fx": ["Refit speed +25%","Ship Repair Speed +15%"]
    },
    "fleet_in_being_navy_spirit": {
      "id": "fleet_in_being_navy_spirit",
      "name": "Global Presence",
      "slot": "navy_spirit",
      "branch": "navy",
      "fx": ["Research bonus: bb tech +20%, ca tech +20%","Heavy Ship Design Cost -60%"]
    },
    "trade_interdiction_navy_spirit": {
      "id": "trade_interdiction_navy_spirit",
      "name": "Submarine Primacy",
      "slot": "navy_spirit",
      "branch": "navy",
      "fx": ["Research bonus: ss tech +20%","Submarine Design Cost -60%"]
    },
    "base_strike_navy_spirit": {
      "id": "base_strike_navy_spirit",
      "name": "Mobile Force",
      "slot": "navy_spirit",
      "branch": "navy",
      "fx": ["Research bonus: cv tech +20%","Carrier Design Cost -60%"]
    },
    "sea_lane_denial_navy_spirit": {
      "id": "sea_lane_denial_navy_spirit",
      "name": "Sea Lane Denial",
      "slot": "navy_spirit",
      "branch": "navy",
      "fx": ["Research bonus: naval minelaying +30%","Naval minelaying efficiency +15%"]
    },
    "fleet_interoperability_navy_spirit": {
      "id": "fleet_interoperability_navy_spirit",
      "name": "Fleet Interoperability",
      "slot": "navy_spirit",
      "branch": "navy",
      "fx": ["Research bonus: naval equipment +5%","Ship Recovery Rate +20%"]
    },
    "close_combat_navy_spirit": {
      "id": "close_combat_navy_spirit",
      "name": "Close Combat",
      "slot": "naval_command_spirit",
      "branch": "navy",
      "fx": ["Screen Attack +5%","Torpedo screen penetration +5%"]
    },
    "night_fighting_spirit": {
      "id": "night_fighting_spirit",
      "name": "Night Fighting",
      "slot": "naval_command_spirit",
      "branch": "navy",
      "fx": ["Night-time Spotting +10%","Night-time Attack +10%","Navy visibility -5%"]
    },
    "surprise_attacks_spirit": {
      "id": "surprise_attacks_spirit",
      "name": "Surprise Attacks",
      "slot": "naval_command_spirit",
      "branch": "navy",
      "fx": ["Retreat Speed after initial stage: +10%","Retreat chance after initial stage: +10%"]
    },
    "efficient_communications_spirit": {"id":"efficient_communications_spirit","name":"Efficient Communications","slot":"naval_command_spirit","branch":"navy","fx":["Positioning +15%"]},
    "surface_raiders_spirit": {
      "id": "surface_raiders_spirit",
      "name": "Surface Raiders",
      "slot": "naval_command_spirit",
      "branch": "navy",
      "fx": ["Screening bonus when using only capital ships +20%","Fleet speed while retreating +10%","Retreat Decision Chance +10%"]
    },
    "decisive_battle_spirit": {
      "id": "decisive_battle_spirit",
      "name": "Decisive Battle",
      "slot": "naval_command_spirit",
      "branch": "navy",
      "fx": ["Retreat Decision Chance -10%","Fleet speed while retreating -10%","Torpedo hit chance +10%","Naval Hit Chance +10%"]
    },
    "inclimate_weather_experience_spirit": {
      "id": "inclimate_weather_experience_spirit",
      "name": "Inclement Weather Experience",
      "slot": "naval_command_spirit",
      "branch": "navy",
      "fx": ["Bad Weather Penalty -40%"]
    },
    "brave_commanders_spirit": {
      "id": "brave_commanders_spirit",
      "name": "Brave Commanders",
      "slot": "naval_command_spirit",
      "branch": "navy",
      "fx": ["Chance to score Critical Hit +15%","Retreat Decision Chance -5%"]
    },
    "bureau_of_ordnance_spirit": {
      "id": "bureau_of_ordnance_spirit",
      "name": "Bureau of Ordnance",
      "slot": "naval_command_spirit",
      "branch": "navy",
      "fx": ["Torpedo hit chance -10%"],
      "req": ["we are United States"]
    },
    "naval_tripwire_navy_spirit": {"id":"naval_tripwire_navy_spirit","name":"Naval Tripwire","slot":"naval_command_spirit","branch":"navy","fx":["Enemy fleet size penalty +20%"]},
    "scouting_force_navy_spirit": {
      "id": "scouting_force_navy_spirit",
      "name": "Scouting Force",
      "slot": "naval_command_spirit",
      "branch": "navy",
      "fx": ["Spotting Speed +10%","Naval Detection +10%"]
    },
    "fleet_defense_navy_spirit": {
      "id": "fleet_defense_navy_spirit",
      "name": "Fleet Defense",
      "slot": "naval_command_spirit",
      "branch": "navy",
      "fx": ["Screening Efficiency +10%","Fighter sortie efficiency +10%"]
    },
    "rapid_concentration_navy_spirit": {
      "id": "rapid_concentration_navy_spirit",
      "name": "Rapid Concentration",
      "slot": "naval_command_spirit",
      "branch": "navy",
      "fx": ["Fleet Coordination +15%"]
    },
    "aa_curtain_navy_spirit": {"id":"aa_curtain_navy_spirit","name":"Anti-aircraft Curtain","slot":"naval_command_spirit","branch":"navy","fx":["Naval AA attack +15%"]},
    "selective_engagement_navy_spirit": {
      "id": "selective_engagement_navy_spirit",
      "name": "Selective Engagement",
      "slot": "naval_command_spirit",
      "branch": "navy",
      "fx": ["Navy visibility -10%"]
    }
  }
});
