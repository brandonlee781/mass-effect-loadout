export interface SkillRank {
  id: string;
  rank: number;
  name: string;
  icon: string;
  description: string;
  bonuses: string[];
}
export interface Skill {
  id: string;
  name: string;
  url: string;
  type: 'active' | 'passive';
  stats: string[];
  description: string;
  ranks: SkillRank[]
}

export const combatSkills: Skill[] = [
  {
    "id": "ckqe1w27400098xva2138hets",
    "name": "Omni Grenade",
    "url": "/wiki/Omni_Grenade",
    "type": "active",
    "stats": [
      "Area Damage: 1000",
      "Damage Radius (m): 4",
      "Power Cell (Grenade) Capacity: 1"
    ],
    "description": "TAP BUTTON: Throws a grenade that causes massive area damage after a 2 sec fuse.\n\nHOLD BUTTON: Shortens the grenade's fuse timer before throwing. The grenade will explode if held too long.\n\nActivation requires one power cell from Omni Grenade's limited power cell supply.\n",
    "ranks": [
      {
        "id": "ckqe1w27100008xvaa1lac5uf",
        "rank": 1,
        "name": "Omni Grenade",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/8/82/Omni_Grenade_1_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203065712",
        "description": "TAP BUTTON: Throws a grenade that causes massive area damage after a 2 sec fuse.\n\nHOLD BUTTON: Shortens the grenade's fuse timer before throwing. The grenade will explode if held too long.\n\nActivation requires one power cell from Omni Grenade's limited power cell supply.",
        "bonuses": [
          "Area Damage: 1000",
          "Damage Radius (m): 4",
          "Power Cell (Grenade) Capacity: 1"
        ]
      },
      {
        "id": "ckqe1w27200018xva8jnw0f2a",
        "rank": 2,
        "name": "Grenade Capacity",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/3/36/Flak_Cannon_2_-_Power_Cells_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203061153",
        "description": "",
        "bonuses": [
          "+1 Power Cell (Grenade) Capacity"
        ]
      },
      {
        "id": "ckqe1w27200028xva9vwg6jok",
        "rank": 3,
        "name": "Damage",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/e/e1/Concussive_Shot_3_-_Damage_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203025034",
        "description": "",
        "bonuses": [
          "+20% Direct Damage"
        ]
      },
      {
        "id": "ckqe1w27300038xvaaaryee2o",
        "rank": 4,
        "name": "Sticky Grenade",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/4/4f/Omni_Grenade_4a_-_Sticky_Grenade_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203065714",
        "description": "Grenades stick to surfaces and enemies before detonating. Holding the button no longer affects fuse time (and the grenade can no longer explode while held).",
        "bonuses": []
      },
      {
        "id": "ckqe1w27300048xva3je121nh",
        "rank": 4,
        "name": "Frag Grenade",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/6/60/Frag_Grenade_1_Icon.png/revision/latest/scale-to-width-down/70?cb=20181205082313",
        "description": "",
        "bonuses": [
          "+25% Direct Damage",
          "+60% Damage Radius"
        ]
      },
      {
        "id": "ckqe1w27300058xva27k14zj0",
        "rank": 5,
        "name": "Grenade Capacity",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/3/36/Flak_Cannon_2_-_Power_Cells_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203061153",
        "description": "",
        "bonuses": [
          "+2 Power Cell (Grenade) Capacity"
        ]
      },
      {
        "id": "ckqe1w27300068xva7ki9apcx",
        "rank": 5,
        "name": "Shrapnel",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/8/87/Flak_Cannon_6b_-_Shredder_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203061159",
        "description": "Affected enemies take additional damage over time.",
        "bonuses": [
          "Damage per Second: 100",
          "Damage Duration (s):5"
        ]
      },
      {
        "id": "ckqe1w27400078xvaf8v18hfh",
        "rank": 6,
        "name": "Anti-Armor",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/9/9e/Blood_Rage_3_-_Armor_Smasher_Icon.png/revision/latest/scale-to-width-down/70?cb=20181205172902",
        "description": "",
        "bonuses": [
          "+50% Damage vs. Armor"
        ]
      },
      {
        "id": "ckqe1w27400088xva27qy8p72",
        "rank": 6,
        "name": "Anti-Shield",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/6/67/Concussive_Shot_6b_-_Anti-Shield_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203025038",
        "description": "",
        "bonuses": [
          "+50% Damage vs. Shields"
        ]
      }
    ]
  },
  {
    "id": "ckqe1w2c3001n8xva7fnpdfgm",
    "name": "Concussive Shot",
    "url": "/wiki/Concussive_Shot",
    "type": "active",
    "stats": [
      "Damage: 350",
      "Force: 250",
      "Recharge Time (s): 12"
    ],
    "description": "Fires a target-seeking high-impact round that knocks down unarmored, unshielded, normal-sized enemies and detonates combo primers.\n",
    "ranks": [
      {
        "id": "ckqe1w2c2001e8xva39r34yrk",
        "rank": 1,
        "name": "Concussive Shot",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/1/1b/Concussive_Shot_1_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203025032",
        "description": " Fires a target-seeking high-impact round that knocks down unarmored, unshielded, normal-sized enemies and detonates combo primers.",
        "bonuses": [
          "Damage: 350",
          "Force: 250",
          "Recharge Time (s): 12"
        ]
      },
      {
        "id": "ckqe1w2c2001f8xva31fwhz0t",
        "rank": 2,
        "name": "Force",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/1/1a/Concussive_Shot_2_-_Force_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203025033",
        "description": "",
        "bonuses": [
          "+25% Direct Force"
        ]
      },
      {
        "id": "ckqe1w2c2001g8xva0bk266wj",
        "rank": 3,
        "name": "Damage",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/e/e1/Concussive_Shot_3_-_Damage_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203025034",
        "description": "",
        "bonuses": [
          "+15% Direct Damage"
        ]
      },
      {
        "id": "ckqe1w2c2001h8xvacgbkg98f",
        "rank": 4,
        "name": "Recharge Speed",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/4/4f/Turbocharge_2_-_Recharge_Speed_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203034247",
        "description": "",
        "bonuses": [
          "+30% Recharge Speed"
        ]
      },
      {
        "id": "ckqe1w2c2001i8xvagtt4d430",
        "rank": 4,
        "name": "Repeat Concussion",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/a/a1/Concussive_Shot_4b_-_Repeat_Concussion_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203025035",
        "description": "Concussive Shot has no recharge time but requires one power cell from a limited power cell supply to activate. The shot also inflicts bonus damage on knocked down or floating enemies.",
        "bonuses": [
          "Power Cell Capacity: 5",
          "Damage vs. Knocked Down Enemies: 100%"
        ]
      },
      {
        "id": "ckqe1w2c3001j8xva5s3z1tqn",
        "rank": 5,
        "name": "Radius",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/7/7b/Concussive_Shot_5a_-_Radius_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203025036",
        "description": "The shot damages enemies within a radius.",
        "bonuses": [
          "Radius (m): 2.5"
        ]
      },
      {
        "id": "ckqe1w2c3001k8xvaffvgf67w",
        "rank": 5,
        "name": "Damage & Force",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/e/e1/Concussive_Shot_3_-_Damage_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203025034",
        "description": "",
        "bonuses": [
          "+25% Direct Damage",
          "+25% Direct Force"
        ]
      },
      {
        "id": "ckqe1w2c3001l8xva3fgx2rtc",
        "rank": 6,
        "name": "Anti-Armor",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/9/9e/Blood_Rage_3_-_Armor_Smasher_Icon.png/revision/latest/scale-to-width-down/70?cb=20181205172902",
        "description": "",
        "bonuses": [
          "+125% Damage vs. Armor"
        ]
      },
      {
        "id": "ckqe1w2c3001m8xva1izofic5",
        "rank": 6,
        "name": "Anti-Shield",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/6/67/Concussive_Shot_6b_-_Anti-Shield_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203025038",
        "description": "",
        "bonuses": [
          "+100% Damage vs. Shields"
        ]
      }
    ]
  },
  {
    "id": "ckqe1w2es001x8xvadixkgmox",
    "name": "Barricade",
    "url": "/wiki/Barricade",
    "type": "active",
    "stats": [
      "Duration (s): 13",
      "Power Cell Capacity: 2",
      "Regeneration Delay Reduction: 40%"
    ],
    "description": "Deploys a temporary energy barricade that will boost shield regeneration for everyone who takes cover behind it. Upgraded versions provide additional combat bonuses for allies.\n\nActivation requires one power cell from Barricade's limited power cell supply.\n",
    "ranks": [
      {
        "id": "ckqe1w2er001o8xvaam5lgscz",
        "rank": 1,
        "name": "Barricade",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/e/e3/Barricade_1_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203044418",
        "description": "Deploys a temporary energy barricade that will boost shield regeneration for everyone who takes cover behind it. Upgraded versions provide additional combat bonuses for allies.\n\nActivation requires one power cell from Barricade's limited power cell supply.",
        "bonuses": [
          "Duration (s): 13",
          "Power Cell Capacity: 2",
          "Regeneration Delay Reduction: 40%"
        ]
      },
      {
        "id": "ckqe1w2er001p8xvacc5q0wx5",
        "rank": 2,
        "name": "Power Cells",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/3/36/Flak_Cannon_2_-_Power_Cells_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203061153",
        "description": "",
        "bonuses": [
          "+1 Power Cell Capacity"
        ]
      },
      {
        "id": "ckqe1w2er001q8xva6bqb0345",
        "rank": 3,
        "name": "Duration",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/0/08/Barricade_3_-_Duration_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203044419",
        "description": "",
        "bonuses": [
          "+25% Duration"
        ]
      },
      {
        "id": "ckqe1w2er001r8xvaerut9o99",
        "rank": 4,
        "name": "Duration",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/0/08/Barricade_3_-_Duration_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203044419",
        "description": "",
        "bonuses": [
          "+35% Duration"
        ]
      },
      {
        "id": "ckqe1w2er001s8xvacrov2gjh",
        "rank": 4,
        "name": "Power Cells",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/3/36/Flak_Cannon_2_-_Power_Cells_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203061153",
        "description": "",
        "bonuses": [
          "+1 Power Cell Capacity"
        ]
      },
      {
        "id": "ckqe1w2es001t8xvaaup5d21u",
        "rank": 5,
        "name": "Weapon Feedback",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/3/3e/Barricade_5a_-_Weapon_Feedback_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203044421",
        "description": "Increases weapon damage and accuracy by 15% for all allies (including the user) behind the barricade.",
        "bonuses": []
      },
      {
        "id": "ckqe1w2es001u8xvahnr2ex7v",
        "rank": 5,
        "name": "Power Feedback",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/0/0e/Barricade_5b_-_Power_Feedback_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203044422",
        "description": "Increases power damage and force by 30% for all allies (including the user) behind the barricade.",
        "bonuses": []
      },
      {
        "id": "ckqe1w2es001v8xvahs7w3fa6",
        "rank": 6,
        "name": "Regeneration",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/1/19/Barricade_6a_-_Regeneration_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203044423",
        "description": "Greatly reduces shield regeneration delay for allies (including the user) behind the barricade.",
        "bonuses": []
      },
      {
        "id": "ckqe1w2es001w8xva91gq40eb",
        "rank": 6,
        "name": "Electric Defense",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/9/92/Barricade_6b_-_Electric_Defense_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203044424",
        "description": " The barricade electrocutes nearby enemies with a chance to stun them. Especially damaging to shields and synthetic foes. Affected enemies are primed for combo detonations.",
        "bonuses": [
          "Damage per Second: 110",
          "Shield Damage Bonus: 100%",
          "Synthetic Damage Bonus: 15%"
        ]
      }
    ]
  },
  {
    "id": "ckqe1w3bv007r8xva4uoy1sv6",
    "name": "Turbocharge",
    "url": "/wiki/Turbocharge",
    "type": "active",
    "stats": [
      "Duration (s): 8",
      "Recharge Time (s): 20",
      "+10% Gun Damage Bonus",
      "+20% Rate of Fire Bonus",
      "+20% Clip Size Bonus"
    ],
    "description": "Temporarily vents weapon heat via armor to improve thermal clip efficiency and boost weapon firing rates.\n",
    "ranks": [
      {
        "id": "ckqe1w3bu007i8xva6yzodgmu",
        "rank": 1,
        "name": "Turbocharge",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/9/90/Turbocharge_1_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203034246",
        "description": "Temporarily vents weapon heat via armor to improve thermal clip efficiency and boost weapon firing rates.",
        "bonuses": [
          "Duration (s): 8",
          "Recharge Time (s): 20",
          "+10% Gun Damage Bonus",
          "+20% Rate of Fire Bonus",
          "+20% Clip Size Bonus"
        ]
      },
      {
        "id": "ckqe1w3bu007j8xvaedipfh02",
        "rank": 2,
        "name": "Recharge Speed",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/4/4f/Turbocharge_2_-_Recharge_Speed_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203034247",
        "description": "",
        "bonuses": [
          "+10% Recharge Speed"
        ]
      },
      {
        "id": "ckqe1w3bu007k8xvac7apf6bg",
        "rank": 3,
        "name": "Damage",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/e/e1/Concussive_Shot_3_-_Damage_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203025034",
        "description": "",
        "bonuses": [
          "+10% Gun Damage Bonus"
        ]
      },
      {
        "id": "ckqe1w3bu007l8xvab8l21tb4",
        "rank": 4,
        "name": "Recharge Speed",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/4/4f/Turbocharge_2_-_Recharge_Speed_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203034247",
        "description": "",
        "bonuses": [
          "+20% Recharge Speed"
        ]
      },
      {
        "id": "ckqe1w3bu007m8xvacjbue45t",
        "rank": 4,
        "name": "Duration",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/0/08/Barricade_3_-_Duration_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203044419",
        "description": "",
        "bonuses": [
          "+50% Duration"
        ]
      },
      {
        "id": "ckqe1w3bv007n8xvacf885f16",
        "rank": 5,
        "name": "Damage & Force",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/e/e1/Concussive_Shot_3_-_Damage_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203025034",
        "description": "",
        "bonuses": [
          "+15% Gun Damage Bonus",
          "+15% Gun Force Bonus"
        ]
      },
      {
        "id": "ckqe1w3bv007o8xva3srr496w",
        "rank": 5,
        "name": "Accuracy & Stability",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/3/3c/Turbocharge_5b_-_Accuracy_%26_Stability_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203034251",
        "description": "Increases weapon stability and accuracy while Turbocharge is active.",
        "bonuses": [
          "+40% Gun Accuracy Bonus",
          "+40% Gun Stability Bonus"
        ]
      },
      {
        "id": "ckqe1w3bv007p8xvae54u14p9",
        "rank": 6,
        "name": "Supercharge",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/1/15/Turbocharge_6a_-_Supercharge_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203034252",
        "description": "Increases weapon rate of fire and thermal clip size while Turbocharge is active.",
        "bonuses": [
          "+20% Rate of Fire Bonus",
          "+20% Clip Size Bonus"
        ]
      },
      {
        "id": "ckqe1w3bv007q8xva6s047fyp",
        "rank": 6,
        "name": "Dump Heat",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/1/1e/Turbocharge_6b_-_Dump_Heat_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203034253",
        "description": "Vastly increases thermal clip size while Turbocharge is active.",
        "bonuses": [
          "+80% Clip Size Bonus"
        ]
      }
    ]
  },
  {
    "id": "ckqe1w3eh00818xvac421e28z",
    "name": "Trip Mine",
    "url": "/wiki/Trip_Mine",
    "type": "active",
    "stats": [
      "Maximum Damage: 1350",
      "Damage Radius (m): 8",
      "Trigger Radius (m): 0.5",
      "Laser Range (m): 5",
      " Power Cell Capacity: 2"
    ],
    "description": "Deploys an explosive mine that triggers when an enemy comes within proximity of or crosses a sensor laser. Enemies suffer more damage the closer they are to the mine.\n\nActivation requires one power cell from Trip Mine's limited power cell supply. The maximum number of active mines equals the current number of maximum power cells.\n",
    "ranks": [
      {
        "id": "ckqe1w3ef007s8xvag86b50er",
        "rank": 1,
        "name": "Trip Mine",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/b/b7/Trip_Mine_1_Icon.png/revision/latest/scale-to-width-down/70?cb=20181204220459",
        "description": "Deploys an explosive mine that triggers when an enemy comes within proximity of or crosses a sensor laser. Enemies suffer more damage the closer they are to the mine.\n\nActivation requires one power cell from Trip Mine's limited power cell supply. The maximum number of active mines equals the current number of maximum power cells.",
        "bonuses": [
          "Maximum Damage: 1350",
          "Damage Radius (m): 8",
          "Trigger Radius (m): 0.5",
          "Laser Range (m): 5",
          " Power Cell Capacity: 2"
        ]
      },
      {
        "id": "ckqe1w3eg007t8xva6y7m04xv",
        "rank": 2,
        "name": "Power Cells",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/3/36/Flak_Cannon_2_-_Power_Cells_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203061153",
        "description": "",
        "bonuses": [
          "+1 Power Cell Capacity"
        ]
      },
      {
        "id": "ckqe1w3eg007u8xva0o0cfbb1",
        "rank": 3,
        "name": "Damage & Force",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/e/e1/Concussive_Shot_3_-_Damage_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203025034",
        "description": "",
        "bonuses": [
          "+15% Damage",
          "+15% Force"
        ]
      },
      {
        "id": "ckqe1w3eg007v8xva86j01t6v",
        "rank": 4,
        "name": "Sensor Range",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/0/0e/Trip_Mine_4a_-_Sensor_Range_Icon.png/revision/latest/scale-to-width-down/70?cb=20181204220502",
        "description": "Increases proximity trigger radius and laser sensor distance",
        "bonuses": [
          "+100% Proximity Radius",
          "+60% Laser Range (m)"
        ]
      },
      {
        "id": "ckqe1w3eg007w8xvaa5rz0yw2",
        "rank": 4,
        "name": "Power Cells",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/3/36/Flak_Cannon_2_-_Power_Cells_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203061153",
        "description": "",
        "bonuses": [
          "+1 Power Cell Capacity"
        ]
      },
      {
        "id": "ckqe1w3eg007x8xva4wqfefa0",
        "rank": 5,
        "name": "Damage & Force",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/e/e1/Concussive_Shot_3_-_Damage_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203025034",
        "description": "",
        "bonuses": [
          "+30% Damage",
          "+30% Force"
        ]
      },
      {
        "id": "ckqe1w3eh007y8xva2kqc6jth",
        "rank": 5,
        "name": "Blast Radius",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/7/7b/Concussive_Shot_5a_-_Radius_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203025036",
        "description": "",
        "bonuses": [
          "+30% Damage Radius"
        ]
      },
      {
        "id": "ckqe1w3eh007z8xva5e1r59dl",
        "rank": 6,
        "name": "Detonator",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/2/27/Trip_Mine_6a_-_Detonator_Icon.png/revision/latest/scale-to-width-down/70?cb=20181204220504",
        "description": " Mines act as combo detonators for all affected enemies.",
        "bonuses": [
          "+30% Combo Detonation Damage"
        ]
      },
      {
        "id": "ckqe1w3eh00808xva4pv7eu3s",
        "rank": 6,
        "name": "EMP",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/4/4e/Trip_Mine_6b_-_EMP_Icon.png/revision/latest/scale-to-width-down/70?cb=20181204220505",
        "description": " Mines deliver an electromagnetic pulse, stunning enemies and causing added damage to shields. Electrified enemies are briefly primed for combo detonations.",
        "bonuses": [
          "Stun Duration (s): 2",
          "+35% Damage vs. Shields"
        ]
      }
    ]
  },
  {
    "id": "ckqe1w3hn008b8xva2buoa8vp",
    "name": "Flak Cannon",
    "url": "/wiki/Flak_Cannon",
    "type": "active",
    "stats": [
      "Initial Damage: 180",
      "Shrapnel Damage: 75",
      "Power Cell Capacity: 2",
      "-30% Shrapnel Damage vs. Armor"
    ],
    "description": "Fires krogan-designed shells that burst into shrapnel upon impact. Shrapnel damage is reduced against armored enemies.\n\nActivation requires one power cell from Flak Cannon's limited power cell supply.\n",
    "ranks": [
      {
        "id": "ckqe1w3hl00828xva9808ew5i",
        "rank": 1,
        "name": "Flak Cannon",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/c/c0/Flak_Cannon_1_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203061152",
        "description": "Fires krogan-designed shells that burst into shrapnel upon impact. Shrapnel damage is reduced against armored enemies.\n\nActivation requires one power cell from Flak Cannon's limited power cell supply.",
        "bonuses": [
          "Initial Damage: 180",
          "Shrapnel Damage: 75",
          "Power Cell Capacity: 2",
          "-30% Shrapnel Damage vs. Armor"
        ]
      },
      {
        "id": "ckqe1w3hm00838xva2x2209ao",
        "rank": 2,
        "name": "Power Cells",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/3/36/Flak_Cannon_2_-_Power_Cells_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203061153",
        "description": "",
        "bonuses": [
          "+2 Power Cell Capacity"
        ]
      },
      {
        "id": "ckqe1w3hm00848xva49b46d1d",
        "rank": 3,
        "name": "Damage & Force",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/e/e1/Concussive_Shot_3_-_Damage_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203025034",
        "description": "",
        "bonuses": [
          "+25% Area Damage",
          "+25% Area Force"
        ]
      },
      {
        "id": "ckqe1w3hm00858xva9oce4p8p",
        "rank": 4,
        "name": "Damage & Force",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/e/e1/Concussive_Shot_3_-_Damage_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203025034",
        "description": "",
        "bonuses": [
          "+35% Area Damage",
          "+35% Area Force"
        ]
      },
      {
        "id": "ckqe1w3hm00868xva2e4c5y5s",
        "rank": 4,
        "name": "Power Cells",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/3/36/Flak_Cannon_2_-_Power_Cells_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203061153",
        "description": "",
        "bonuses": [
          "+3 Power Cell Capacity"
        ]
      },
      {
        "id": "ckqe1w3hm00878xvafzqpc6nf",
        "rank": 5,
        "name": "Anti-Armor",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/9/9e/Blood_Rage_3_-_Armor_Smasher_Icon.png/revision/latest/scale-to-width-down/70?cb=20181205172902",
        "description": "Increases both initial and shrapnel damage against enemy armor.",
        "bonuses": [
          "+50% Damage vs. Armor"
        ]
      },
      {
        "id": "ckqe1w3hn00888xvacaedg7qv",
        "rank": 5,
        "name": "Stunning",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/1/10/Avenger_Strike_6a_-_Disrupting_Strike_Icon.png/revision/latest/scale-to-width-down/70?cb=20181207204737",
        "description": "Briefly stuns affected enemies.",
        "bonuses": [
          "Stun Duration (s): 2"
        ]
      },
      {
        "id": "ckqe1w3hn00898xvacwa2gl7m",
        "rank": 6,
        "name": "Flak",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/d/da/Flak_Cannon_6a_-_Flak_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203061158",
        "description": "",
        "bonuses": [
          "50% more shrapnel explosions."
        ]
      },
      {
        "id": "ckqe1w3hn008a8xva1py58r1w",
        "rank": 6,
        "name": "Shredder",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/8/87/Flak_Cannon_6b_-_Shredder_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203061159",
        "description": "Shrapnel inflicts additional damage over time.",
        "bonuses": [
          "Damage per Second: 100",
          "Damage Duration (s): 8"
        ]
      }
    ]
  },
  {
    "id": "ckqe1w3kc008l8xva078i6cgb",
    "name": "Pistols",
    "url": "/wiki/Pistols",
    "type": "passive",
    "stats": [
      "+2% Pistol Damage"
    ],
    "description": "Improves sidearm training for pistols (including submachine guns). Pistols are designed largely for short to mid-range combat and shooting on the move.\n",
    "ranks": [
      {
        "id": "ckqe1w3ka008c8xva70pm9jg5",
        "rank": 1,
        "name": "Pistols",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/3/31/Pistols_1_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203182330",
        "description": "Increases pistol damage with each skill point invested in the Combat Skill Group.",
        "bonuses": [
          "+2% Pistol Damage"
        ]
      },
      {
        "id": "ckqe1w3ka008d8xvad11o540i",
        "rank": 2,
        "name": "Accuracy",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/c/c6/Pistols_2_-_Accuracy_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203182331",
        "description": "Increases pistol accuracy with each skill point invested in the Combat Skill Group.",
        "bonuses": [
          "+2% Pistol Accuracy"
        ]
      },
      {
        "id": "ckqe1w3ka008e8xva9g1763h0",
        "rank": 3,
        "name": "Mobility",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/f/f9/Pistols_3_-_Mobility_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203182332",
        "description": "Reduces the accuracy penalty when firing pistols while moving with each skill point invested in the Combat Skill Group.",
        "bonuses": [
          "+5% Movement Pistol Accuracy"
        ]
      },
      {
        "id": "ckqe1w3kb008f8xva9m64hawb",
        "rank": 4,
        "name": "Weight",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/3/36/APEX_Training_3_-_Weapons_And_Melee_Icon.png/revision/latest/scale-to-width-down/70?cb=20181210075054",
        "description": "",
        "bonuses": [
          "-30% Pistol Weight"
        ]
      },
      {
        "id": "ckqe1w3kb008g8xva7f3fbqca",
        "rank": 4,
        "name": "Spare Ammo",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/2/29/Assault_Rifles_4b_-_Spare_Ammo_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203184831",
        "description": "",
        "bonuses": [
          "+20% Pistol Spare Ammo"
        ]
      },
      {
        "id": "ckqe1w3kb008h8xvadq6aerd3",
        "rank": 5,
        "name": "Reload",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/9/90/Assault_Rifles_5a_-_Reload_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203184832",
        "description": "",
        "bonuses": [
          "+15% Pistol Reload Speed"
        ]
      },
      {
        "id": "ckqe1w3kb008i8xvaa3873pgr",
        "rank": 5,
        "name": "Clip Size",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/f/f4/Assault_Rifles_5b_-_Clip_Size_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203184832",
        "description": "",
        "bonuses": [
          "+20% Pistol Clip Size"
        ]
      },
      {
        "id": "ckqe1w3kb008j8xva1sw09jux",
        "rank": 6,
        "name": "Unassisted Targeting",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/f/ff/Pistols_6a_-_Unassisted_Targeting_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203182336",
        "description": "Increases pistol damage, and also increases accuracy and stability by 20% when firing without using the aim function.",
        "bonuses": [
          "+20% Pistol Damage"
        ]
      },
      {
        "id": "ckqe1w3kc008k8xva1ishfhj2",
        "rank": 6,
        "name": "Augmented Targeting Assistance",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/d/df/Pistols_6b_-_Augmented_Targeting_Assistance_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203182337",
        "description": "Increases pistol damage, and also increases accuracy and weak point bonus damage by 20% when using the aim function to shoot.",
        "bonuses": [
          "+20% Pistol Damage"
        ]
      }
    ]
  },
  {
    "id": "ckqe1w3mz008v8xva96cx4xz4",
    "name": "Assault Rifles",
    "url": "/wiki/Assault_Rifles",
    "type": "passive",
    "stats": [
      "+2% Assault Rifle Damage"
    ],
    "description": "Advanced training improves facility with assault rifles for dedicated combatants. Assault rifles offer moderate accuracy, range, and stopping power.\n",
    "ranks": [
      {
        "id": "ckqe1w3my008m8xvafzfgaigp",
        "rank": 1,
        "name": "Assault Rifles",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/7/77/Assault_Rifles_1_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203184828",
        "description": "Increases assault rifle damage with each skill point invested in the Combat Skill Group.",
        "bonuses": [
          "+2% Assault Rifle Damage"
        ]
      },
      {
        "id": "ckqe1w3my008n8xvafe6n5bkc",
        "rank": 2,
        "name": "Accuracy",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/c/c6/Pistols_2_-_Accuracy_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203182331",
        "description": "Increases assault rifle accuracy with each skill point invested in the Combat Skill Group.",
        "bonuses": [
          "+2% Assault Rifle Accuracy"
        ]
      },
      {
        "id": "ckqe1w3my008o8xva97ezgxff",
        "rank": 3,
        "name": "Stability",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/9/90/Assault_Rifles_3_-_Stability_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203184829",
        "description": "Increases assault rifle stability, reducing recoil with each skill point invested in the Combat Skill Group.",
        "bonuses": [
          "+2% Assault Rifle Stability"
        ]
      },
      {
        "id": "ckqe1w3my008p8xvahkul4gk3",
        "rank": 4,
        "name": "Weight",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/3/36/APEX_Training_3_-_Weapons_And_Melee_Icon.png/revision/latest/scale-to-width-down/70?cb=20181210075054",
        "description": "",
        "bonuses": [
          "-25% Assault Rifle Weight"
        ]
      },
      {
        "id": "ckqe1w3mz008q8xva3j1u0atx",
        "rank": 4,
        "name": "Spare Ammo",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/2/29/Assault_Rifles_4b_-_Spare_Ammo_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203184831",
        "description": "",
        "bonuses": [
          "+15% Assault Rifle Spare Ammo"
        ]
      },
      {
        "id": "ckqe1w3mz008r8xvag1ty3jlf",
        "rank": 5,
        "name": "Reload",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/9/90/Assault_Rifles_5a_-_Reload_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203184832",
        "description": "",
        "bonuses": [
          "+15% Assault Rifle Reload Speed"
        ]
      },
      {
        "id": "ckqe1w3mz008s8xva7h3910er",
        "rank": 5,
        "name": "Clip Size",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/f/f4/Assault_Rifles_5b_-_Clip_Size_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203184832",
        "description": "",
        "bonuses": [
          "+25% Assault Rifle Clip Size"
        ]
      },
      {
        "id": "ckqe1w3mz008t8xva8socbydi",
        "rank": 6,
        "name": "Shatter Defenses",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/b/bf/Assault_Rifles_6a_-_Shatter_Defenses_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203184833",
        "description": "Enemies hit by assault rifle fire take increased damage from all sources by 2% per assault rifle hit, to a maximum of 24%. Resets when the rifle user has not hit the target for 2 sec.",
        "bonuses": []
      },
      {
        "id": "ckqe1w3mz008u8xva564sbv13",
        "rank": 6,
        "name": "Critical Hits",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/c/c5/Assault_Rifles_6b_-_Critical_Hits_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203184833",
        "description": "Increases headshot and other weak point damage from assault rifles, in addition to improved aiming.",
        "bonuses": [
          "+25% Assault Rifle Headshot/Weak Point Bonus",
          "+15% Assault Rifle Accuracy",
          "+15% Assault Rifle Stability"
        ]
      }
    ]
  },
  {
    "id": "ckqe1w3qm00958xvah18rc2ia",
    "name": "Shotguns",
    "url": "/wiki/Shotguns",
    "type": "passive",
    "stats": [
      "+2% Shotgun Damage",
      "+2% Shotgun Force"
    ],
    "description": "Specialized training for close-quarters combatants. Shotguns deal high damage at short range at the expense of poor accuracy at long distances.\n",
    "ranks": [
      {
        "id": "ckqe1w3ql008w8xva0oe44aux",
        "rank": 1,
        "name": "Shotguns",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/0/01/Asari_Commando_3_-_Precision_Icon.png/revision/latest/scale-to-width-down/70?cb=20181205085701",
        "description": "Increases shotgun damage and force with each skill point invested in the Combat Skill Group.",
        "bonuses": [
          "+2% Shotgun Damage",
          "+2% Shotgun Force"
        ]
      },
      {
        "id": "ckqe1w3ql008x8xva8k8z5ehv",
        "rank": 2,
        "name": "Stability",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/9/90/Assault_Rifles_3_-_Stability_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203184829",
        "description": "Decreases shotgun recoil and climb with each skill point invested in the Combat Skill Group.",
        "bonuses": [
          "+5% Shotgun Stability"
        ]
      },
      {
        "id": "ckqe1w3ql008y8xva83ktaed5",
        "rank": 3,
        "name": "Precision",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/c/c6/Pistols_2_-_Accuracy_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203182331",
        "description": "Increases shotgun accuracy and reduces spread with each skill point invested in the Combat Skill Group.",
        "bonuses": [
          "+2% Shotgun Accuracy"
        ]
      },
      {
        "id": "ckqe1w3ql008z8xvahl95bi3u",
        "rank": 4,
        "name": "Weight",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/3/36/APEX_Training_3_-_Weapons_And_Melee_Icon.png/revision/latest/scale-to-width-down/70?cb=20181210075054",
        "description": "",
        "bonuses": [
          "-25% Shotgun Weight"
        ]
      },
      {
        "id": "ckqe1w3qm00908xvac2ctfiwa",
        "rank": 4,
        "name": "Spare Ammo",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/2/29/Assault_Rifles_4b_-_Spare_Ammo_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203184831",
        "description": "",
        "bonuses": [
          "+15% Shotgun Spare Ammo"
        ]
      },
      {
        "id": "ckqe1w3qm00918xva7tpbhibf",
        "rank": 5,
        "name": "Reload",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/9/90/Assault_Rifles_5a_-_Reload_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203184832",
        "description": "",
        "bonuses": [
          "+15% Shotgun Reload Speed"
        ]
      },
      {
        "id": "ckqe1w3qm00928xva8admdiuj",
        "rank": 5,
        "name": "Clip Size",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/f/f4/Assault_Rifles_5b_-_Clip_Size_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203184832",
        "description": "",
        "bonuses": [
          "+25% Shotgun Clip Size"
        ]
      },
      {
        "id": "ckqe1w3qm00938xvaaffe3m4h",
        "rank": 6,
        "name": "Damage & Force",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/a/a0/Krogan_Warrior_4a_-_Explosive_Icon.png/revision/latest/scale-to-width-down/70?cb=20181205181555",
        "description": "",
        "bonuses": [
          "+20% Shotgun Damage",
          "+30% Shotgun Force"
        ]
      },
      {
        "id": "ckqe1w3qm00948xva47od5be2",
        "rank": 6,
        "name": "Melee Synergy",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/4/47/Shotguns_6b_-_Melee_Synergy_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203001749",
        "description": "Melee hits boost shotgun damage for 3 sec. Shotgun hits boost melee damage for 3 sec.",
        "bonuses": [
          "Shotgun Damage Boost: 25%",
          "Melee Damage Boost: 40%"
        ]
      }
    ]
  },
  {
    "id": "ckqe1w3t6009f8xvabns11x2q",
    "name": "Sniper Rifles",
    "url": "/wiki/Sniper_Rifles",
    "type": "passive",
    "stats": [
      "+2% Sniper Rifle Damage"
    ],
    "description": "Improves specialist sniper training for long-range combatants. Sniper rifles deal high damage at a distance at the cost of slow firing rates and capacities.\n",
    "ranks": [
      {
        "id": "ckqe1w3t400968xva0sdo5l93",
        "rank": 1,
        "name": "Sniper Rifles",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/1/10/Sniper_Rifles_1_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203204704",
        "description": "Increases sniper rifle damage with each skill point invested in the Combat Skill Group.",
        "bonuses": [
          "+2% Sniper Rifle Damage"
        ]
      },
      {
        "id": "ckqe1w3t400978xva92ygbn47",
        "rank": 2,
        "name": "Accuracy",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/c/c6/Pistols_2_-_Accuracy_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203182331",
        "description": "Increases sniper rifle accuracy with each skill point invested in the Combat Skill Group.",
        "bonuses": [
          "+2% Sniper Rifle Accuracy"
        ]
      },
      {
        "id": "ckqe1w3t400988xva4vb125ea",
        "rank": 3,
        "name": "Headshots",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/e/e2/Sniper_Rifles_3_-_Headshots_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203204707",
        "description": "Increases headshot and other weak point damage from sniper rifles with each skill point invested in the Combat Skill Group.",
        "bonuses": [
          "+2% Sniper Rifle Headshot/Weak Point Bonus"
        ]
      },
      {
        "id": "ckqe1w3t400998xvah8dk4qfk",
        "rank": 4,
        "name": "Weight",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/3/36/APEX_Training_3_-_Weapons_And_Melee_Icon.png/revision/latest/scale-to-width-down/70?cb=20181210075054",
        "description": "",
        "bonuses": [
          "-25% Sniper Rifle Weight"
        ]
      },
      {
        "id": "ckqe1w3t5009a8xvaebl45zk5",
        "rank": 4,
        "name": "Spare Ammo",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/2/29/Assault_Rifles_4b_-_Spare_Ammo_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203184831",
        "description": "",
        "bonuses": [
          "+15% Sniper Rifle Spare Ammo"
        ]
      },
      {
        "id": "ckqe1w3t5009b8xvabt6o056g",
        "rank": 5,
        "name": "Reload",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/9/90/Assault_Rifles_5a_-_Reload_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203184832",
        "description": "",
        "bonuses": [
          "+15% Sniper Rifle Reload Speed"
        ]
      },
      {
        "id": "ckqe1w3t5009c8xva7jzb0uvl",
        "rank": 5,
        "name": "Clip Size",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/f/f4/Assault_Rifles_5b_-_Clip_Size_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203184832",
        "description": "",
        "bonuses": [
          "+25% Sniper Rifle Clip Size"
        ]
      },
      {
        "id": "ckqe1w3t5009d8xvabqfacqa3",
        "rank": 6,
        "name": "Damage & Force",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/a/a0/Krogan_Warrior_4a_-_Explosive_Icon.png/revision/latest/scale-to-width-down/70?cb=20181205181555",
        "description": "",
        "bonuses": [
          "+20% Sniper Rifle Damage",
          "+20% Sniper Rifle Force"
        ]
      },
      {
        "id": "ckqe1w3t6009e8xva5ojpaega",
        "rank": 6,
        "name": "Killing Spree",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/5/53/Sniper_Rifles_6b_-_Killing_Spree_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203204713",
        "description": "Improves rate of fire, stability, and reload time for 5 sec after killing an enemy with a sniper rifle.",
        "bonuses": [
          "On-Kill Rate of Fire Boost: 30%",
          "On-Kill Stability Boost: 40%",
          "On-Kill Reload Speed Boost: 25%"
        ]
      }
    ]
  },
  {
    "id": "ckqe1w3w6009p8xvaevl57vh3",
    "name": "Combat Fitness",
    "url": "/wiki/Combat_Fitness",
    "type": "passive",
    "stats": [
      "+2% Max Health"
    ],
    "description": "Intense physical and survival training designed to improve a combatant's stamina and versatility in battle.\n",
    "ranks": [
      {
        "id": "ckqe1w3w4009g8xva6wvs6ly1",
        "rank": 1,
        "name": "Health",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/9/97/Combat_Fitness_1_-_Health_Icon.png/revision/latest/scale-to-width-down/70?cb=20181204071450",
        "description": "Increases maximum health with each skill point invested in the Combat Skill Group.",
        "bonuses": [
          "+2% Max Health"
        ]
      },
      {
        "id": "ckqe1w3w4009h8xvafeia3zlv",
        "rank": 2,
        "name": "Shields",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/2/29/Combat_Fitness_2_-_Shields_Icon.png/revision/latest/scale-to-width-down/70?cb=20181204071452",
        "description": "Increases maximum shield rating with each skill point invested in the Combat Skill Group.",
        "bonuses": [
          "+2% Max Shields"
        ]
      },
      {
        "id": "ckqe1w3w4009i8xvaep15b8x8",
        "rank": 3,
        "name": "Extra Holster",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/3/33/Combat_Fitness_3_-_Extra_Holster_Icon.png/revision/latest/scale-to-width-down/70?cb=20181204071453",
        "description": "Up to three weapons can be equipped at once and carrying capacity is increased.",
        "bonuses": [
          "+1 Weapon Loadout Size",
          "+25% Weapon Weight Capacity"
        ]
      },
      {
        "id": "ckqe1w3w4009j8xva0k3cd2oc",
        "rank": 4,
        "name": "Consumables",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/3/3f/Combat_Fitness_4a_-_Consumables_Icon.png/revision/latest/scale-to-width-down/70?cb=20181204071454",
        "description": "Improves the effectiveness of all consumables (such as overdrive packs and shield capacitors).",
        "bonuses": [
          "+30% Consumable Effectiveness"
        ]
      },
      {
        "id": "ckqe1w3w5009k8xvaajgj0f6l",
        "rank": 4,
        "name": "Regeneration",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/4/4b/Combat_Fitness_4b_-_Regeneration_Icon.png/revision/latest/scale-to-width-down/70?cb=20181204071456",
        "description": "Improves health and shield regeneration rates.",
        "bonuses": [
          "+20% Health Regeneration Cap",
          "+50% Health Regeneration",
          "+20% Shield Regeneration"
        ]
      },
      {
        "id": "ckqe1w3w5009l8xvae3ip48xc",
        "rank": 5,
        "name": "Extra Holster",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/3/33/Combat_Fitness_3_-_Extra_Holster_Icon.png/revision/latest/scale-to-width-down/70?cb=20181204071453",
        "description": "Up to four weapons can be equipped at once and carrying capacity is increased.",
        "bonuses": [
          "+1 Weapon Loadout Size",
          "+25% Weapon Weight Capacity"
        ]
      },
      {
        "id": "ckqe1w3w5009m8xva6smzb4q9",
        "rank": 5,
        "name": "Heavy Lifting",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/9/9d/Combat_Fitness_5b_-_Heavy_Lifting_Icon.png/revision/latest/scale-to-width-down/70?cb=20181204071459",
        "description": "Improves thermal clip size, and thermal clip and power cell carrying capacity.",
        "bonuses": [
          "+20% Weapon Clip Size",
          "+25% Weapon Spare Ammo",
          "+1 to all Combat Power Cell Capacities"
        ]
      },
      {
        "id": "ckqe1w3w5009n8xvaf7g0bysa",
        "rank": 6,
        "name": "Hold the Line",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/4/45/Combat_Fitness_6a_-_Hold_The_Line_Icon.png/revision/latest/scale-to-width-down/70?cb=20181204071459",
        "description": "Dramatically increases Damage resistance when below 30% health.",
        "bonuses": [
          "Low Health Damage Resistance: 200"
        ]
      },
      {
        "id": "ckqe1w3w6009o8xvahf7vhzk2",
        "rank": 6,
        "name": "In the Trenches",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/6/60/Combat_Fitness_5a_-_Defensive_Positioning_Icon.png/revision/latest/scale-to-width-down/70?cb=20181204071456",
        "description": "Improves Damage Resistance and reduces Shield Regeneration Delay while in cover.",
        "bonuses": [
          "Regen Delay Reduction In Cover: 50%",
          "Damage Resistance in Cover: 100"
        ]
      }
    ]
  },
  {
    "id": "ckqe1w3yr009z8xva5es3ae2f",
    "name": "Combat Tools",
    "url": "/wiki/Combat_Tools",
    "type": "passive",
    "stats": [
      "+2% Combat Power Damage"
    ],
    "description": "Specialized training that allows the user to expertly wield jump-jets and melee weapons in combat.\n",
    "ranks": [
      {
        "id": "ckqe1w3yp009q8xva7lyidbcw",
        "rank": 1,
        "name": "Power Damage",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/f/fe/Combat_Tools_1_-_Power_Damage_Icon.png/revision/latest/scale-to-width-down/70?cb=20181202235114",
        "description": "Increases combat power damage with each skill point invested in the Combat Skill Group.",
        "bonuses": [
          "+2% Combat Power Damage"
        ]
      },
      {
        "id": "ckqe1w3yp009r8xvagfv11f4k",
        "rank": 2,
        "name": "Melee",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/a/a3/Combat_Fitness_2_-_Melee_Icon.png/revision/latest/scale-to-width-down/70?cb=20181204071451",
        "description": "Increases melee damage with each skill point invested in the Combat Skill Group.",
        "bonuses": [
          "+2% Melee Damage"
        ]
      },
      {
        "id": "ckqe1w3yp009s8xva17g991s6",
        "rank": 3,
        "name": "Detonators",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/1/1d/Combat_Tools_3_-_Detonators_Icon.png/revision/latest/scale-to-width-down/70?cb=20181202235116",
        "description": "Increases combo detonation damage from combat detonators with each skill point invested in the Combat Skill Group.",
        "bonuses": [
          "+2% Combat Detonator Damage Bonus"
        ]
      },
      {
        "id": "ckqe1w3yq009t8xvaaawm1l2x",
        "rank": 4,
        "name": "Hover",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/a/a7/Aerial_Assault_4a_-_Hover_Icon.png/revision/latest/scale-to-width-down/70?cb=20181211000245",
        "description": "Improves hover duration and gun accuracy while hovering.",
        "bonuses": [
          "+50% Hover Duration",
          "+25% Weapon Accuracy While Airborne"
        ]
      },
      {
        "id": "ckqe1w3yq009u8xva7yb05i0u",
        "rank": 4,
        "name": "Evasion",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/5/58/Combat_Fitness_5b_-_Aerial_Evasion_Icon.png/revision/latest/scale-to-width-down/70?cb=20181204071458",
        "description": "Reduces incoming damage while evading.",
        "bonuses": [
          "+100 Damage Resistance While Evading"
        ]
      },
      {
        "id": "ckqe1w3yq009v8xva2dpofzul",
        "rank": 5,
        "name": "Aerial Melee",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/d/d1/Aerial_Assault_5b_-_Dive_Bomb_Icon.png/revision/latest/scale-to-width-down/70?cb=20181211000218",
        "description": "Improves melee damage and radius while jumping.",
        "bonuses": [
          "+20% Jump Melee Damage",
          "+40% Jump Melee Area of Effect Radius"
        ]
      },
      {
        "id": "ckqe1w3yq009w8xva2cuv7uef",
        "rank": 5,
        "name": "Detonators",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/1/1d/Combat_Tools_3_-_Detonators_Icon.png/revision/latest/scale-to-width-down/70?cb=20181202235116",
        "description": "",
        "bonuses": [
          "+30% Combat Detonator Damage Bonus"
        ]
      },
      {
        "id": "ckqe1w3yq009x8xvadsfk1cvr",
        "rank": 6,
        "name": "Aerial Combat",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/0/05/APEX_Training_5b_-_Special_Combat_Training_Icon.png/revision/latest/scale-to-width-down/70?cb=20181210075056",
        "description": "Reduces incoming damage while hovering. Improves hover duration and gun accuracy while hovering.",
        "bonuses": [
          "+30 Damage Resistance While Airborne",
          "+100% Hover Duration",
          "+40% Weapon Accuracy While Airborne"
        ]
      },
      {
        "id": "ckqe1w3yr009y8xvabnpnd7qd",
        "rank": 6,
        "name": "Martial Arts",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/a/a6/Aerial_Assault_6b_-_Close-Quarters_Momentum_Icon.png/revision/latest/scale-to-width-down/70?cb=20181211000220",
        "description": "Improved melee damage with each melee hit or melee kill. Ends after 20 seconds have passed without a melee kill.",
        "bonuses": [
          "Melee Bonus Per Hit: 5%",
          "Melee Bonus Per Kill: 20%",
          "Max Melee Bonus: 65%"
        ]
      }
    ]
  }
]

export const techSkills: Skill[] = [
  {
    "id": "ckqe1w289000t8xva51ek62b5",
    "name": "Overload",
    "url": "/wiki/Overload",
    "type": "passive",
    "stats": [
      "Initial Damage (Uncharged): 150",
      "Initial Damage (Charged): 200",
      "Chain Damage: 100",
      "Shield Damage Bonus: 125%",
      "Synthetic Damage Bonus: 30%",
      "Recharge Time (s): 15"
    ],
    "description": "TAP BUTTON: Unleashes an electrostatic discharge upon a target. High damage to shields and synthetic enemies. Detonates combo primers.\n\nHOLD BUTTON: Charges Overload, causing it to \"chain\" to two additional targets.\n",
    "ranks": [
      {
        "id": "ckqe1w287000k8xvagvtf4xws",
        "rank": 1,
        "name": "Overload",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/b/bc/Overload_1_Icon.png/revision/latest/scale-to-width-down/70?cb=20181202201845",
        "description": " TAP BUTTON: Unleashes an electrostatic discharge upon a target. High damage to shields and synthetic enemies. Detonates combo primers.\n\nHOLD BUTTON: Charges Overload, causing it to \"chain\" to two additional targets.",
        "bonuses": [
          "Initial Damage (Uncharged): 150",
          "Initial Damage (Charged): 200",
          "Chain Damage: 100",
          "Shield Damage Bonus: 125%",
          "Synthetic Damage Bonus: 30%",
          "Recharge Time (s): 15"
        ]
      },
      {
        "id": "ckqe1w287000l8xvadvxe6wcv",
        "rank": 2,
        "name": "Recharge Speed",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/c/c4/Assault_Turret_4b_-_Recharge_Speed_Icon.png/revision/latest/scale-to-width-down/70?cb=20181208072710",
        "description": "",
        "bonuses": [
          "+10% Recharge Speed"
        ]
      },
      {
        "id": "ckqe1w287000m8xva8gnw9tfl",
        "rank": 3,
        "name": "Damage",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/4/4e/Assault_Turret_3_-_Damage_Icon.png/revision/latest/scale-to-width-down/70?cb=20181208072708",
        "description": "",
        "bonuses": [
          "+15% All Damage"
        ]
      },
      {
        "id": "ckqe1w288000n8xva5dwv30cx",
        "rank": 4,
        "name": "Damage",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/4/4e/Assault_Turret_3_-_Damage_Icon.png/revision/latest/scale-to-width-down/70?cb=20181208072708",
        "description": "",
        "bonuses": [
          "+25% All Damage"
        ]
      },
      {
        "id": "ckqe1w288000o8xva5g0303zt",
        "rank": 4,
        "name": "Recharge Speed",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/c/c4/Assault_Turret_4b_-_Recharge_Speed_Icon.png/revision/latest/scale-to-width-down/70?cb=20181208072710",
        "description": "",
        "bonuses": [
          "+25% Recharge Speed"
        ]
      },
      {
        "id": "ckqe1w288000p8xva55z6aawu",
        "rank": 5,
        "name": "Charged Overload",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/f/f5/Overload_5a_-_Charged_Overload_Icon.png/revision/latest/scale-to-width-down/70?cb=20181202201849",
        "description": "Chains to one additional target when charged.",
        "bonuses": []
      },
      {
        "id": "ckqe1w288000q8xvab9qw8xnh",
        "rank": 5,
        "name": "Anti-Shield",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/2/26/Overload_5b_-_Anti-Shield_Icon.png/revision/latest/scale-to-width-down/70?cb=20181202201849",
        "description": "",
        "bonuses": [
          "+60% Damage vs. Shields"
        ]
      },
      {
        "id": "ckqe1w288000r8xva5fka28za",
        "rank": 6,
        "name": "Maximum Charge",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/f/f5/Overload_5a_-_Charged_Overload_Icon.png/revision/latest/scale-to-width-down/70?cb=20181202201849",
        "description": "When charged, chains to an additional target and deals increased damage to chained enemies.",
        "bonuses": [
          "+30% All Damage"
        ]
      },
      {
        "id": "ckqe1w289000s8xvac3i7bn55",
        "rank": 6,
        "name": "EMP",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/3/3e/Overload_6b_-_EMP_Icon.png/revision/latest/scale-to-width-down/70?cb=20181202201851",
        "description": "",
        "bonuses": [
          "+60% Damage vs. Shields",
          "+15% Damage vs. Synthetics"
        ]
      }
    ]
  },
  {
    "id": "ckqe1w2b200138xva4ldy8i3y",
    "name": "Incinerate",
    "url": "/wiki/Incinerate",
    "type": "passive",
    "stats": [
      "Initial Damage: 120",
      "Damage per Second: 50",
      "Burning Duration (s): 6",
      "Armor Damage Bonus: 60%",
      "Recharge Time (s): 12"
    ],
    "description": "Fires a plasma projectile that does bonus damage to armor and inflicts ongoing burning damage to unshielded foes. Burning enemies are primed for combo detonations.\n",
    "ranks": [
      {
        "id": "ckqe1w2b0000u8xva47k23n6b",
        "rank": 1,
        "name": "Incinerate",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/4/48/Incinerate_1_Icon.png/revision/latest/scale-to-width-down/70?cb=20181208202316",
        "description": " Fires a plasma projectile that does bonus damage to armor and inflicts ongoing burning damage to unshielded foes. Burning enemies are primed for combo detonations.",
        "bonuses": [
          "Initial Damage: 120",
          "Damage per Second: 50",
          "Burning Duration (s): 6",
          "Armor Damage Bonus: 60%",
          "Recharge Time (s): 12"
        ]
      },
      {
        "id": "ckqe1w2b0000v8xva3p77hebz",
        "rank": 2,
        "name": "Recharge Speed",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/c/c4/Assault_Turret_4b_-_Recharge_Speed_Icon.png/revision/latest/scale-to-width-down/70?cb=20181208072710",
        "description": "",
        "bonuses": [
          "+15% Recharge Speed"
        ]
      },
      {
        "id": "ckqe1w2b1000w8xvaeuea736p",
        "rank": 3,
        "name": "Damage",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/4/4e/Assault_Turret_3_-_Damage_Icon.png/revision/latest/scale-to-width-down/70?cb=20181208072708",
        "description": "",
        "bonuses": [
          "+25% All Damage"
        ]
      },
      {
        "id": "ckqe1w2b1000x8xva7v31cmzs",
        "rank": 4,
        "name": "Radius",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/5/5b/Cryo_Beam_5b_-_Radius_Icon.png/revision/latest/scale-to-width-down/70?cb=20181208080709",
        "description": "The projectile affects all enemies in a 2 m radius.",
        "bonuses": []
      },
      {
        "id": "ckqe1w2b1000y8xva1ogn0plt",
        "rank": 4,
        "name": "Burning",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/c/ce/Incinerate_4b_-_Burning_Icon.png/revision/latest/scale-to-width-down/70?cb=20181208202324",
        "description": "",
        "bonuses": [
          "+30% Damage Over Time",
          "+50% Duration"
        ]
      },
      {
        "id": "ckqe1w2b1000z8xvaef3sbbbc",
        "rank": 5,
        "name": "Impact",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/4/4e/Assault_Turret_3_-_Damage_Icon.png/revision/latest/scale-to-width-down/70?cb=20181208072708",
        "description": "",
        "bonuses": [
          "+30% Initial Damage"
        ]
      },
      {
        "id": "ckqe1w2b200108xvadd6dccv4",
        "rank": 5,
        "name": "Anti-Armor",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/9/9e/Incinerate_5b_-_Anti-Armor_Icon.png/revision/latest/scale-to-width-down/70?cb=20181208202328",
        "description": "",
        "bonuses": [
          "+50% Damage vs. Armor"
        ]
      },
      {
        "id": "ckqe1w2b200118xvadedch6s5",
        "rank": 6,
        "name": "Detonator",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/5/5f/Incinerate_6a_-_Detonator_Icon.png/revision/latest/scale-to-width-down/70?cb=20181208202330",
        "description": " Incinerate's initial attack now triggers combo detonations.",
        "bonuses": []
      },
      {
        "id": "ckqe1w2b200128xva0cihg3zq",
        "rank": 6,
        "name": "Double Incinerate",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/6/61/Incinerate_6b_-_Double_Incinerate_Icon.png/revision/latest/scale-to-width-down/70?cb=20181208202331",
        "description": "Launches two projectiles (instead of one) that seek separate targets.",
        "bonuses": []
      }
    ]
  },
  {
    "id": "ckqe1w2f800278xva4apxfnsy",
    "name": "Assault Turret",
    "url": "/wiki/Assault_Turret",
    "type": "passive",
    "stats": [
      "Turret Base Health: 400",
      "Damage Per Shot: 23",
      "Recharge Time: 24",
      "Area Damage When Destroyed: 340"
    ],
    "description": "Deploys an automated assault turret that counts as a tech construct.\n\nTAP BUTTON: Directs the turret to attack a particular target.\n\nHOLD BUTTON: Detonates the turret, damaging nearby enemies.\n",
    "ranks": [
      {
        "id": "ckqe1w2f6001y8xvab5noa8cl",
        "rank": 1,
        "name": "Assault Turret",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/c/c8/Assault_Turret_1_Icon.png/revision/latest/scale-to-width-down/70?cb=20181208072706",
        "description": "Deploys an automated assault turret that counts as a tech construct.\n\nTAP BUTTON: Directs the turret to attack a particular target.\n\nHOLD BUTTON: Detonates the turret, damaging nearby enemies.",
        "bonuses": [
          "Turret Base Health: 400",
          "Damage Per Shot: 23",
          "Recharge Time: 24",
          "Area Damage When Destroyed: 340"
        ]
      },
      {
        "id": "ckqe1w2f6001z8xvabrz09hff",
        "rank": 2,
        "name": "Durability",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/7/7a/Assault_Turret_2_-_Durability_Icon.png/revision/latest/scale-to-width-down/70?cb=20181208072707",
        "description": "",
        "bonuses": [
          "+50% Turret Health"
        ]
      },
      {
        "id": "ckqe1w2f600208xvahd3z7rvl",
        "rank": 3,
        "name": "Damage",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/4/4e/Assault_Turret_3_-_Damage_Icon.png/revision/latest/scale-to-width-down/70?cb=20181208072708",
        "description": "",
        "bonuses": [
          "+20% Turret Gun Damage"
        ]
      },
      {
        "id": "ckqe1w2f700218xvaba7t0azs",
        "rank": 4,
        "name": "Durability",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/7/7a/Assault_Turret_2_-_Durability_Icon.png/revision/latest/scale-to-width-down/70?cb=20181208072707",
        "description": "",
        "bonuses": [
          "+75% Turret Health"
        ]
      },
      {
        "id": "ckqe1w2f700228xva4ech2qom",
        "rank": 4,
        "name": "Recharge Speed",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/c/c4/Assault_Turret_4b_-_Recharge_Speed_Icon.png/revision/latest/scale-to-width-down/70?cb=20181208072710",
        "description": "",
        "bonuses": [
          "+200% Recharge Speed"
        ]
      },
      {
        "id": "ckqe1w2f700238xva6o6eaveq",
        "rank": 5,
        "name": "Damage",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/4/4e/Assault_Turret_3_-_Damage_Icon.png/revision/latest/scale-to-width-down/70?cb=20181208072708",
        "description": "",
        "bonuses": [
          "+35% Turret Gun Damage"
        ]
      },
      {
        "id": "ckqe1w2f700248xva1g582w45",
        "rank": 5,
        "name": "Omni-Link",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/4/4b/Assault_Turret_5b_-_Omni-Link_Icon.png/revision/latest/scale-to-width-down/70?cb=20181208072712",
        "description": "While its creator is in close proximity, the turret repairs itself (via omni-tool link) and improves tech power refresh rates.",
        "bonuses": [
          "Omni-Link Range (m): 10",
          "Omni-Link Tech Recharge Speed: 35%",
          "Omni-Link Turret Heal per Second: 3%"
        ]
      },
      {
        "id": "ckqe1w2f700258xvaeorta8v1",
        "rank": 6,
        "name": "Cryo Ammo",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/8/8a/Assault_Turret_6a_-_Cryo_Ammo_Icon.png/revision/latest/scale-to-width-down/70?cb=20181208072714",
        "description": " Turret shots chill enemies, slowing them and weakening armor. Sustained fire can freeze targets solid, priming them for combo detonations.",
        "bonuses": [
          "Armor Defense Debuff: 100%",
          "+60% Turret Gun Damage"
        ]
      },
      {
        "id": "ckqe1w2f800268xva0cny6jmg",
        "rank": 6,
        "name": "Flamethrower",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/3/3f/Assault_Turret_6b_-_Flamethrower_Icon.png/revision/latest/scale-to-width-down/70?cb=20181208072716",
        "description": " At close range, the turret employs a short-range flamethrower to burn enemies, causing bonus damage to armor and priming enemies for combo detonations.",
        "bonuses": [
          "Flamethrower Damage per Second: 45",
          "Burn Damage per Second: 22",
          "Flamethrower Range (m): 15",
          "Flamethrower Damage Bonus vs. Armor: 60%"
        ]
      }
    ]
  },
  {
    "id": "ckqe1w2j100318xvacurp2vav",
    "name": "Cryo Beam",
    "url": "/wiki/Cryo_Beam",
    "type": "passive",
    "stats": [
      "Damage per Second: 135",
      "Defense Debuff vs. Armor: 50%",
      "Recharge Time (s): 15"
    ],
    "description": "HOLD BUTTON: Directs a continuous stream of super-cooled particles that freezes targets, priming them for combo detonations. Freezing disables unarmored enemies and weakens enemy armor, but has no effect on shielded foes.\n",
    "ranks": [
      {
        "id": "ckqe1w2iz002s8xva17g8eboc",
        "rank": 1,
        "name": "Cryo Beam",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/1/13/Cryo_Beam_1_Icon.png/revision/latest/scale-to-width-down/70?cb=20181208080701",
        "description": " HOLD BUTTON: Directs a continuous stream of super-cooled particles that freezes targets, priming them for combo detonations.\nFreezing disables unarmored enemies and weakens enemy armor, but has no effect on shielded foes.",
        "bonuses": [
          "Damage per Second: 135",
          "Defense Debuff vs. Armor: 50%",
          "Recharge Time (s): 15"
        ]
      },
      {
        "id": "ckqe1w2iz002t8xvafir37wr0",
        "rank": 2,
        "name": "Recharge Speed",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/c/c4/Assault_Turret_4b_-_Recharge_Speed_Icon.png/revision/latest/scale-to-width-down/70?cb=20181208072710",
        "description": "",
        "bonuses": [
          "+10% Recharge Speed"
        ]
      },
      {
        "id": "ckqe1w2j0002u8xva0doyexrv",
        "rank": 3,
        "name": "Damage",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/4/4e/Assault_Turret_3_-_Damage_Icon.png/revision/latest/scale-to-width-down/70?cb=20181208072708",
        "description": "",
        "bonuses": [
          "+20% Damage"
        ]
      },
      {
        "id": "ckqe1w2j0002v8xvac73u202d",
        "rank": 4,
        "name": "Damage",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/4/4e/Assault_Turret_3_-_Damage_Icon.png/revision/latest/scale-to-width-down/70?cb=20181208072708",
        "description": "",
        "bonuses": [
          "+40% Damage"
        ]
      },
      {
        "id": "ckqe1w2j0002w8xvaa4ipaxh0",
        "rank": 4,
        "name": "Recharge Speed",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/c/c4/Assault_Turret_4b_-_Recharge_Speed_Icon.png/revision/latest/scale-to-width-down/70?cb=20181208072710",
        "description": "",
        "bonuses": [
          "+30% Recharge Speed"
        ]
      },
      {
        "id": "ckqe1w2j0002x8xva5twbarby",
        "rank": 5,
        "name": "Brittle Freeze",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/0/09/Invasion_5b_-_Weaken_Icon.png/revision/latest/scale-to-width-down/70?cb=20181209022117",
        "description": "",
        "bonuses": [
          "+65% Armor Defense Debuff"
        ]
      },
      {
        "id": "ckqe1w2j0002y8xva3xu15xnq",
        "rank": 5,
        "name": "Radius",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/5/5b/Cryo_Beam_5b_-_Radius_Icon.png/revision/latest/scale-to-width-down/70?cb=20181208080709",
        "description": "The beam freezes targets in a small radius around its impact point.",
        "bonuses": [
          "Radius (m): 2.5"
        ]
      },
      {
        "id": "ckqe1w2j1002z8xvaa886f9b3",
        "rank": 6,
        "name": "Snap Freeze",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/4/4f/Cryo_Beam_6a_-_Snap_Freeze_Icon.png/revision/latest/scale-to-width-down/70?cb=20181208080710",
        "description": "Shattering frozen targets causes additional damage to nearby foes and snap-freezes nearby defenseless enemies.",
        "bonuses": [
          "+200% Frozen Shatter Damage",
          "+100% Frozen Shatter Force",
          "+150% Frozen Shatter Radius"
        ]
      },
      {
        "id": "ckqe1w2j100308xva91pnht3l",
        "rank": 6,
        "name": "Cryo Trap",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/0/0e/Cryo_Beam_6b_-_Cryo_Trap_Icon.png/revision/latest/scale-to-width-down/70?cb=20181208080711",
        "description": " When aimed away from a direct target, the beam creates a temporary freezing zone that chills enemies who enter.",
        "bonuses": []
      }
    ]
  },
  {
    "id": "ckqe1w2lv003l8xvabi3weqa7",
    "name": "Energy Drain",
    "url": "/wiki/Energy_Drain",
    "type": "passive",
    "stats": [
      "Shields Restored: 35%",
      "Primary Damage: 160",
      "Energy Drain Shield Damage Bonus: 100%",
      "Synthetic Damage Bonus: 15%",
      "Recharge Time (s): 15"
    ],
    "description": "Restores shields by sapping electromagnetic energy around a target. Causes bonus damage to shields and synthetic enemies and detonates combo primers on all primed enemies.\n",
    "ranks": [
      {
        "id": "ckqe1w2lu003c8xvabnxb1okd",
        "rank": 1,
        "name": "Energy Drain",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/4/48/Energy_Drain_1_Icon.png/revision/latest/scale-to-width-down/70?cb=20181208194156",
        "description": " Restores shields by sapping electromagnetic energy around a target. Causes bonus damage to shields and synthetic enemies and detonates combo primers on all primed enemies.",
        "bonuses": [
          "Shields Restored: 35%",
          "Primary Damage: 160",
          "Energy Drain Shield Damage Bonus: 100%",
          "Synthetic Damage Bonus: 15%",
          "Recharge Time (s): 15"
        ]
      },
      {
        "id": "ckqe1w2lu003d8xva3gfncszo",
        "rank": 2,
        "name": "Recharge Speed",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/c/c4/Assault_Turret_4b_-_Recharge_Speed_Icon.png/revision/latest/scale-to-width-down/70?cb=20181208072710",
        "description": "",
        "bonuses": [
          "+10% Recharge Speed"
        ]
      },
      {
        "id": "ckqe1w2lu003e8xva187ncscd",
        "rank": 3,
        "name": "Effectiveness",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/5/5c/Energy_Drain_3_-_Effectiveness_Icon.png/revision/latest/scale-to-width-down/70?cb=20181208194158",
        "description": "",
        "bonuses": [
          "+15% Damage",
          "+15% Shields Restored"
        ]
      },
      {
        "id": "ckqe1w2lu003f8xva232j1llu",
        "rank": 4,
        "name": "Effectiveness",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/5/5c/Energy_Drain_3_-_Effectiveness_Icon.png/revision/latest/scale-to-width-down/70?cb=20181208194158",
        "description": "",
        "bonuses": [
          "+20% Damage",
          "+20% Shields Restored"
        ]
      },
      {
        "id": "ckqe1w2lv003g8xvaf1p3f8nn",
        "rank": 4,
        "name": "Recharge Speed",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/c/c4/Assault_Turret_4b_-_Recharge_Speed_Icon.png/revision/latest/scale-to-width-down/70?cb=20181208072710",
        "description": "",
        "bonuses": [
          "+30% Recharge Speed"
        ]
      },
      {
        "id": "ckqe1w2lv003h8xva8songr2z",
        "rank": 5,
        "name": "Extended Drain",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/8/8f/Energy_Drain_5a_-_Extended_Drain_Icon.png/revision/latest/scale-to-width-down/70?cb=20181208194201",
        "description": " Restores additional shields over time, and the target is primed for combo detonations for the same duration.",
        "bonuses": [
          "Shields Restored per Second: 6%",
          "Shield Restore Duration (s): 4"
        ]
      },
      {
        "id": "ckqe1w2lv003i8xvafecmbip9",
        "rank": 5,
        "name": "Auxiliary Drain",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/5/5b/Cryo_Beam_5b_-_Radius_Icon.png/revision/latest/scale-to-width-down/70?cb=20181208080709",
        "description": "Affects up to three additional nearby enemies, and grants added delayed shield restoration per additional enemy hit.",
        "bonuses": [
          "Impact Radius (m): 8",
          "Shields Restored per Additional Target 33%"
        ]
      },
      {
        "id": "ckqe1w2lv003j8xvahczc3sfq",
        "rank": 6,
        "name": "Damage",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/4/4e/Assault_Turret_3_-_Damage_Icon.png/revision/latest/scale-to-width-down/70?cb=20181208072708",
        "description": "Increases both standard damage and damage bonus against shields and synthetic enemies.",
        "bonuses": [
          "+25% Damage",
          "+50% Damage vs. Shields",
          "+15% Damage vs. Synthetics"
        ]
      },
      {
        "id": "ckqe1w2lv003k8xva66d0aj09",
        "rank": 6,
        "name": "Team Drain",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/6/6f/Energy_Drain_6b_-_Team_Drain_Icon.png/revision/latest/scale-to-width-down/70?cb=20181208194204",
        "description": "Initial draining effect also restores the shields of allies near the user.",
        "bonuses": [
          "Ally Shields Restored: 50%",
          "Ally Effect Radius: 8",
          "+25% Shields Restored"
        ]
      }
    ]
  },
  {
    "id": "ckqe1w2p400458xvac0x08cuk",
    "name": "Tactical Cloak",
    "url": "/wiki/Tactical_Cloak",
    "type": "passive",
    "stats": [
      "Duration (s): 6.5",
      "Recharge Time (s): 15",
      "Gun Damage Bonus: 50%",
      "Power Damage Bonus: 50%",
      "Melee Damage Bonus: 75%"
    ],
    "description": "Employs light-bending technology to render the user invisible at the cost of shield and health regeneration. Guns, powers, and melee attacks used from cloak gain a damage bonus but break the cloaking effect.\n",
    "ranks": [
      {
        "id": "ckqe1w2p3003w8xva1bgiabl0",
        "rank": 1,
        "name": "Tactical Cloak",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/e/ed/Tactical_Cloak_1_Icon.png/revision/latest/scale-to-width-down/70?cb=20181208014601",
        "description": "Employs light-bending technology to render the user invisible at the cost of shield and health regeneration. Guns, powers, and melee attacks used from cloak gain a damage bonus but break the cloaking effect.",
        "bonuses": [
          "Duration (s): 6.5",
          "Recharge Time (s): 15",
          "Gun Damage Bonus: 50%",
          "Power Damage Bonus: 50%",
          "Melee Damage Bonus: 75%"
        ]
      },
      {
        "id": "ckqe1w2p3003x8xvadz907an3",
        "rank": 2,
        "name": "Recharge Speed",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/c/c4/Assault_Turret_4b_-_Recharge_Speed_Icon.png/revision/latest/scale-to-width-down/70?cb=20181208072710",
        "description": "",
        "bonuses": [
          "+15% Recharge Speed"
        ]
      },
      {
        "id": "ckqe1w2p3003y8xvads9j6ua5",
        "rank": 3,
        "name": "Duration",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/8/8f/Energy_Drain_5a_-_Extended_Drain_Icon.png/revision/latest/scale-to-width-down/70?cb=20181208194201",
        "description": "",
        "bonuses": [
          "+25% Duration"
        ]
      },
      {
        "id": "ckqe1w2p3003z8xva5l7g72b6",
        "rank": 4,
        "name": "Recharge Speed",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/c/c4/Assault_Turret_4b_-_Recharge_Speed_Icon.png/revision/latest/scale-to-width-down/70?cb=20181208072710",
        "description": "",
        "bonuses": [
          "+30% Recharge Speed"
        ]
      },
      {
        "id": "ckqe1w2p400408xva8uxmepdd",
        "rank": 4,
        "name": "Damage Bonus",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/4/4e/Assault_Turret_3_-_Damage_Icon.png/revision/latest/scale-to-width-down/70?cb=20181208072708",
        "description": "",
        "bonuses": [
          "+40% Gun Damage Bonus",
          "+50% Power Damage Bonus",
          "+50% Melee Damage Bonus"
        ]
      },
      {
        "id": "ckqe1w2p400418xva6hnk0kq7",
        "rank": 5,
        "name": "Duration",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/8/8f/Energy_Drain_5a_-_Extended_Drain_Icon.png/revision/latest/scale-to-width-down/70?cb=20181208194201",
        "description": "",
        "bonuses": [
          "+50% Duration"
        ]
      },
      {
        "id": "ckqe1w2p400428xva00sl5ppv",
        "rank": 5,
        "name": "Speed",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/4/4b/Tactical_Cloak_5b_-_Speed_Icon.png/revision/latest/scale-to-width-down/70?cb=20181208014605",
        "description": "",
        "bonuses": [
          "+20% Movement Speed While Cloaked"
        ]
      },
      {
        "id": "ckqe1w2p400438xva83xgcx5x",
        "rank": 6,
        "name": "Escape Artist",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/3/35/Tactical_Cloak_6a_-_Escape_Artist_Icon.png/revision/latest/scale-to-width-down/70?cb=20181208014606",
        "description": "Melee kills briefly activate Tactical Cloak and the cloak no longer prevents health and shield regeneration.",
        "bonuses": []
      },
      {
        "id": "ckqe1w2p400448xvacu837g1y",
        "rank": 6,
        "name": "Combat Cloak",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/f/f1/Tactical_Cloak_6b_-_Combat_Cloak_Icon.png/revision/latest/scale-to-width-down/70?cb=20181208014606",
        "description": "Tactical Cloak remains active briefly after attacking. Damage bonuses remain in effect during this time.",
        "bonuses": [
          "Cloak Duration After Attack (s): 2"
        ]
      }
    ]
  },
  {
    "id": "ckqe1w2sc004p8xva7pu99a2v",
    "name": "Flamethrower",
    "url": "/wiki/Flamethrower",
    "type": "passive",
    "stats": [
      "Sustained Damage per Second: 225",
      "Burn Damage per Second: 120",
      "Burning Duration (s): 5",
      "Armor Damage Bonus: 25%",
      "Recharge Time (s): 12"
    ],
    "description": "HOLD BUTTON: Unleashes a short-range jet of flame that causes bonus damage to armor and ongoing burn damage. Unshielded enemies held in the jet catch fire, priming them for combo detonations.\n",
    "ranks": [
      {
        "id": "ckqe1w2sa004g8xva9egc6x8c",
        "rank": 1,
        "name": "Flamethrower",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/a/ad/Flamethrower_1_Icon.png/revision/latest/scale-to-width-down/70?cb=20181202194208",
        "description": " HOLD BUTTON: Unleashes a short-range jet of flame that causes bonus damage to armor and ongoing burn damage. Unshielded enemies held in the jet catch fire, priming them for combo detonations.",
        "bonuses": [
          "Sustained Damage per Second: 225",
          "Burn Damage per Second: 120",
          "Burning Duration (s): 5",
          "Armor Damage Bonus: 25%",
          "Recharge Time (s): 12"
        ]
      },
      {
        "id": "ckqe1w2sa004h8xva88324s8e",
        "rank": 2,
        "name": "Recharge Speed",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/c/c4/Assault_Turret_4b_-_Recharge_Speed_Icon.png/revision/latest/scale-to-width-down/70?cb=20181208072710",
        "description": "",
        "bonuses": [
          "+20% Recharge Speed"
        ]
      },
      {
        "id": "ckqe1w2sb004i8xvaau6z9x8a",
        "rank": 3,
        "name": "Damage",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/4/4e/Assault_Turret_3_-_Damage_Icon.png/revision/latest/scale-to-width-down/70?cb=20181208072708",
        "description": "",
        "bonuses": [
          "+15% All Damage"
        ]
      },
      {
        "id": "ckqe1w2sb004j8xvab2yq8a2g",
        "rank": 4,
        "name": "Damage",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/4/4e/Assault_Turret_3_-_Damage_Icon.png/revision/latest/scale-to-width-down/70?cb=20181208072708",
        "description": "",
        "bonuses": [
          "+25% All Damage"
        ]
      },
      {
        "id": "ckqe1w2sb004k8xva49mbchwo",
        "rank": 4,
        "name": "Recharge Speed",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/c/c4/Assault_Turret_4b_-_Recharge_Speed_Icon.png/revision/latest/scale-to-width-down/70?cb=20181208072710",
        "description": "",
        "bonuses": [
          "+30% Recharge Speed"
        ]
      },
      {
        "id": "ckqe1w2sb004l8xva9l3y9e71",
        "rank": 5,
        "name": "Reach",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/c/ce/Flamethrower_5a_-_Reach_Icon.png/revision/latest/scale-to-width-down/70?cb=20181202194212",
        "description": "Increases the flamethrower's range.",
        "bonuses": [
          "+50% Damage Radius"
        ]
      },
      {
        "id": "ckqe1w2sb004m8xva6didckl9",
        "rank": 5,
        "name": "Lingering Burn",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/8/8f/Energy_Drain_5a_-_Extended_Drain_Icon.png/revision/latest/scale-to-width-down/70?cb=20181208194201",
        "description": "Increases burning damage and duration.",
        "bonuses": [
          "+40% Damage Over Time",
          "+50% Duration"
        ]
      },
      {
        "id": "ckqe1w2sc004n8xva45pigv9r",
        "rank": 6,
        "name": "Anti-Armor",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/9/9e/Incinerate_5b_-_Anti-Armor_Icon.png/revision/latest/scale-to-width-down/70?cb=20181208202328",
        "description": "",
        "bonuses": [
          "+65% Damage vs. Armor"
        ]
      },
      {
        "id": "ckqe1w2sc004o8xva3ip5cusc",
        "rank": 6,
        "name": "Blinding Heat",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/1/15/Flamethrower_6b_-_Blinding_Heat_Icon.png/revision/latest/scale-to-width-down/70?cb=20181202194214",
        "description": "Damage output from enemies on fire is reduced by 50%.",
        "bonuses": []
      }
    ]
  },
  {
    "id": "ckqe1w2uv00598xvahr76cae6",
    "name": "Remnant VI",
    "url": "/wiki/Remnant_VI",
    "type": "passive",
    "stats": [
      "VI Health: 800",
      "Beam Damage per Second: 66",
      "Recharge Time (s): 24"
    ],
    "description": "Deploys a retrofitted Remnant Observer that repairs itself over time, cloaks when critically damaged and counts as a tech construct.\n\nTAP BUTTON: Directs the VI to attack a particular target.\n\nHOLD BUTTON: Deactivates the VI.\n",
    "ranks": [
      {
        "id": "ckqe1w2ut00508xva6ai74y3m",
        "rank": 1,
        "name": "Remnant VI",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/d/d3/Remnant_VI_1_Icon.png/revision/latest/scale-to-width-down/70?cb=20181201183634",
        "description": "Deploys a retrofitted Remnant Observer that repairs itself over time, cloaks when critically damaged and counts as a tech construct.\n\nTAP BUTTON: Directs the VI to attack a particular target.\n\nHOLD BUTTON: Deactivates the VI.",
        "bonuses": [
          "VI Health: 800",
          "Beam Damage per Second: 66",
          "Recharge Time (s): 24"
        ]
      },
      {
        "id": "ckqe1w2ut00518xva06gh3aju",
        "rank": 2,
        "name": "Durability",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/7/7a/Assault_Turret_2_-_Durability_Icon.png/revision/latest/scale-to-width-down/70?cb=20181208072707",
        "description": "",
        "bonuses": [
          "+50 VI Health"
        ]
      },
      {
        "id": "ckqe1w2uu00528xva82hcbove",
        "rank": 3,
        "name": "Beam Damage",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/4/4e/Assault_Turret_3_-_Damage_Icon.png/revision/latest/scale-to-width-down/70?cb=20181208072708",
        "description": "",
        "bonuses": [
          "+25% VI Beam Damage"
        ]
      },
      {
        "id": "ckqe1w2uu00538xvaabdm0z5r",
        "rank": 4,
        "name": "Expedited Repairs",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/4/4b/Assault_Turret_5b_-_Omni-Link_Icon.png/revision/latest/scale-to-width-down/70?cb=20181208072712",
        "description": "",
        "bonuses": [
          "+50% VI Health Regen",
          "+80% VI Health Regen Delay Reduction"
        ]
      },
      {
        "id": "ckqe1w2uu00548xvaay3221jm",
        "rank": 4,
        "name": "Recharge Speed",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/c/c4/Assault_Turret_4b_-_Recharge_Speed_Icon.png/revision/latest/scale-to-width-down/70?cb=20181208072710",
        "description": "",
        "bonuses": [
          "+40% Recharge Speed"
        ]
      },
      {
        "id": "ckqe1w2uu00558xva8yl00hpw",
        "rank": 5,
        "name": "Focus Module",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/1/1b/Remnant_VI_5a_-_Focus_Module_Icon.png/revision/latest/scale-to-width-down/70?cb=20181201183638",
        "description": "",
        "bonuses": [
          "+50% VI Beam Damage"
        ]
      },
      {
        "id": "ckqe1w2uu00568xva7hu44fe6",
        "rank": 5,
        "name": "Close Combat Module",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/5/5e/Remnant_VI_5b_-_Close_Combat_Module_Icon.png/revision/latest/scale-to-width-down/70?cb=20181201183639",
        "description": "The VI engages enemies at a closer range, demanding foes' attention. Also improves VI health.",
        "bonuses": [
          "+200% VI Health"
        ]
      },
      {
        "id": "ckqe1w2uv00578xvacoj7eo14",
        "rank": 6,
        "name": "Detonating Missiles",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/5/5f/Incinerate_6a_-_Detonator_Icon.png/revision/latest/scale-to-width-down/70?cb=20181208202330",
        "description": " Adds explosive missiles to the VI's arsenal (in addition to its beam weapon). Missiles trigger combo detonations.",
        "bonuses": [
          "Missile Damage: 90",
          "Missile Damage Radius (m): 2.5",
          "Missile Frequency (s): 6"
        ]
      },
      {
        "id": "ckqe1w2uv00588xva73u05ww1",
        "rank": 6,
        "name": "Electric Beam",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/0/09/Remnant_VI_6b_-_Electric_Beam_Icon.png/revision/latest/scale-to-width-down/70?cb=20181201183641",
        "description": " The VI's beam attack has a chance to electrically prime enemies for combo detonations and stun them. Increases damage to shields and synthetic enemies.",
        "bonuses": [
          "Shield Damage Bonus: 75%",
          "Synthetic Damage Bonus: 15%",
          "Stun Duration (s): 1",
          "+50% VI Beam Damage"
        ]
      }
    ]
  },
  {
    "id": "ckqe1w2xk005t8xva64c5b9g3",
    "name": "Invasion",
    "url": "/wiki/Invasion",
    "type": "passive",
    "stats": [
      "Enemy Defense Debuff: 30%",
      "Duration: 15",
      "Damage: 30",
      "Recharge Time (s): 24",
      "Spread Radius (m): 6"
    ],
    "description": "Infects opponents with an invasive VI-controlled machine swarm that weakens defenses and spreads itself to nearby enemies.\n",
    "ranks": [
      {
        "id": "ckqe1w2xi005k8xva8lkybid1",
        "rank": 1,
        "name": "Invasion",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/7/75/Invasion_1_Icon.png/revision/latest/scale-to-width-down/70?cb=20181209022109",
        "description": "Infects opponents with an invasive VI-controlled machine swarm that weakens defenses and spreads itself to nearby enemies.",
        "bonuses": [
          "Enemy Defense Debuff: 30%",
          "Duration: 15",
          "Damage: 30",
          "Recharge Time (s): 24",
          "Spread Radius (m): 6"
        ]
      },
      {
        "id": "ckqe1w2xi005l8xvab2vnd2y8",
        "rank": 2,
        "name": "Recharge Speed",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/c/c4/Assault_Turret_4b_-_Recharge_Speed_Icon.png/revision/latest/scale-to-width-down/70?cb=20181208072710",
        "description": "",
        "bonuses": [
          "+10% Recharge Speed"
        ]
      },
      {
        "id": "ckqe1w2xj005m8xvad0e3gdlo",
        "rank": 3,
        "name": "Duration",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/8/8f/Energy_Drain_5a_-_Extended_Drain_Icon.png/revision/latest/scale-to-width-down/70?cb=20181208194201",
        "description": "",
        "bonuses": [
          "+30% Duration"
        ]
      },
      {
        "id": "ckqe1w2xj005n8xvabatf6gy7",
        "rank": 4,
        "name": "Recharge Speed",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/c/c4/Assault_Turret_4b_-_Recharge_Speed_Icon.png/revision/latest/scale-to-width-down/70?cb=20181208072710",
        "description": "",
        "bonuses": [
          "+40% Recharge Speed"
        ]
      },
      {
        "id": "ckqe1w2xj005o8xvahs8t8vj2",
        "rank": 4,
        "name": "Outbreak",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/5/5b/Cryo_Beam_5b_-_Radius_Icon.png/revision/latest/scale-to-width-down/70?cb=20181208080709",
        "description": "Invasion now infects up to three enemies near the target location.",
        "bonuses": [
          "Effect Radius: 4"
        ]
      },
      {
        "id": "ckqe1w2xj005p8xvafi5zd6fs",
        "rank": 5,
        "name": "Epidemic",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/6/6f/Invasion_5a_-_Epidemic_Icon.png/revision/latest/scale-to-width-down/70?cb=20181209022116",
        "description": "Invasion now lasts longer and spreads to more distant enemies.",
        "bonuses": [
          "+40% Duration",
          "+30% Spread Radius (m)"
        ]
      },
      {
        "id": "ckqe1w2xj005q8xvadjknfuf2",
        "rank": 5,
        "name": "Weaken",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/0/09/Invasion_5b_-_Weaken_Icon.png/revision/latest/scale-to-width-down/70?cb=20181209022117",
        "description": "",
        "bonuses": [
          "+10% Enemy Defense Debuff"
        ]
      },
      {
        "id": "ckqe1w2xk005r8xva9vbcha44",
        "rank": 6,
        "name": "Virulence",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/2/2d/Invasion_6a_-_Virulence_Icon.png/revision/latest/scale-to-width-down/70?cb=20181209022118",
        "description": "When an affected enemy falls below 15% health, Invasion triggers an explosion that damage the enemy and other enemies nearby.",
        "bonuses": []
      },
      {
        "id": "ckqe1w2xk005s8xva5qc4a0u1",
        "rank": 6,
        "name": "Sabotage",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/8/8d/Invasion_6b_-_Sabotage_Icon.png/revision/latest/scale-to-width-down/70?cb=20181209022120",
        "description": "Affected enemies do less weapon damage.",
        "bonuses": [
          "-15% Enemy Weapon Damage"
        ]
      }
    ]
  },
  {
    "id": "ckqe1w306006d8xva6va726e8",
    "name": "Team Support",
    "url": "/wiki/Team_Support",
    "type": "passive",
    "stats": [
      "+2% Team Shields"
    ],
    "description": "Improves defenses and support for the whole squad through kinetic barrier generator and hardsuit enhancements.\n",
    "ranks": [
      {
        "id": "ckqe1w30400648xva9x0ohz7p",
        "rank": 1,
        "name": "Shields",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/0/00/Team_Support_1_-_Shields_Icon.png/revision/latest/scale-to-width-down/70?cb=20181202185406",
        "description": "Improves maximum shields for the user and all squadmates with each skill point invested in the Tech Skill Group.",
        "bonuses": [
          "+2% Team Shields"
        ]
      },
      {
        "id": "ckqe1w30500658xva4irrdgdx",
        "rank": 2,
        "name": "Shield Recovery",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/f/f7/Tech_Armor_6a_-_Shield_Feedback_Icon.png/revision/latest/scale-to-width-down/70?cb=20181211004940",
        "description": "Improves shield regeneration speed for the user and squadmates, as well as health recovery speed for tech constructs, with each skill point invested in the Tech Skill Group.",
        "bonuses": [
          "+2% Team Shield Delay Reduction",
          "+2% Team Shield Regeneration",
          "+2% Tech Construct Health Regeneration"
        ]
      },
      {
        "id": "ckqe1w30500668xva23v5dsjg",
        "rank": 3,
        "name": "Support",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/d/de/Support_Systems_2_-_Support_Icon.png/revision/latest/scale-to-width-down/70?cb=20190302124516",
        "description": "Improves shield restoration and defensive effects from powers with each skill point invested in the Tech Skill Group.",
        "bonuses": [
          "+2% Power Restoration &amp; Defense"
        ]
      },
      {
        "id": "ckqe1w30500678xva38j57d85",
        "rank": 4,
        "name": "Squad Offense",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/7/73/Team_Support_4a_-_Squad_Offense_Icon.png/revision/latest/scale-to-width-down/70?cb=20181202185408",
        "description": "Increases damage from tech constructs and squadmate powers.",
        "bonuses": [
          "+20% Squadmate Power Damage",
          "+20% Tech Construct Damage"
        ]
      },
      {
        "id": "ckqe1w30500688xvaa2nv20cz",
        "rank": 4,
        "name": "Support",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/d/de/Support_Systems_2_-_Support_Icon.png/revision/latest/scale-to-width-down/70?cb=20190302124516",
        "description": "Improves all shield restoration and defensive effects.",
        "bonuses": [
          "+20% Power Restoration &amp; Defense"
        ]
      },
      {
        "id": "ckqe1w30500698xva101f3zv0",
        "rank": 5,
        "name": "Team Recovery",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/3/31/Team_Support_5a_-_Team_Recovery_Icon.png/revision/latest/scale-to-width-down/70?cb=20181202185410",
        "description": "Reduces shield regeneration delay and improves shield regeneration rate for the user and squadmates. Increases health recovery rate for tech constructs.",
        "bonuses": [
          "+15% Team Shield Delay Reduction",
          "+15% Team Shield Regeneration",
          "15% Tech Construct Health Regeneration"
        ]
      },
      {
        "id": "ckqe1w306006a8xvaa46ybigy",
        "rank": 5,
        "name": "Tactical Revive",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/9/91/Support_Systems_5b_-_Tactical_Revive_Icon.png/revision/latest/scale-to-width-down/70?cb=20181211002956",
        "description": "Grants Damage Resistance during squadmate revival and for 5 sec afterwards. Restores shields to maximum upon reviving a squadmate. Both effects also apply to successfully revived squadmates.",
        "bonuses": [
          "Damage Resistance During Revive: 120",
          "Damage Resistance after Revive: 120"
        ]
      },
      {
        "id": "ckqe1w306006b8xvafz6g18v8",
        "rank": 6,
        "name": "Defense Grid",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/e/e9/Team_Support_6a_-_Defense_Grid_Icon.png/revision/latest/scale-to-width-down/70?cb=20181202185411",
        "description": "Increases Damage Resistance for each conscious squadmate or tech construct within 8 m. The increase applies to the user and those squadmates and tech constructs.",
        "bonuses": [
          "Damage Resistance per Ally: 6"
        ]
      },
      {
        "id": "ckqe1w306006c8xva8042hsp5",
        "rank": 6,
        "name": "Life Support",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/9/9b/Bioelectric_Defense_4b_-_Regeneration_Icon.png/revision/latest/scale-to-width-down/70?cb=20181210062753",
        "description": "Improves health regeneration rate for the user and nearby squadmates and tech constructs for 3 sec after using a tech power.",
        "bonuses": [
          "Health Regeneration Bonus: 150%",
          "Health Regeneration Cap: 50%",
          "Life Support Cooldown (s): 8"
        ]
      }
    ]
  },
  {
    "id": "ckqe1w32v006x8xvafc366ibd",
    "name": "Offensive Tech",
    "url": "/wiki/Offensive_Tech",
    "type": "passive",
    "stats": [
      "+2% Tech Power Damage"
    ],
    "description": "Maximizes the offensive capabilities of tech powers through specialized omni-tool software and hardware.\n",
    "ranks": [
      {
        "id": "ckqe1w32u006o8xva7npj6oiu",
        "rank": 1,
        "name": "Damage",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/0/0c/Offensive_Tech_1_-_Damage_Icon.png/revision/latest/scale-to-width-down/70?cb=20181209074157",
        "description": "Increases tech power damage with each skill point invested in the Tech Skill Group.",
        "bonuses": [
          "+2% Tech Power Damage"
        ]
      },
      {
        "id": "ckqe1w32u006p8xvags9aa7ox",
        "rank": 2,
        "name": "Recharge Speed",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/1/1d/Bioelectric_Defense_5b_-_Augmentation_Icon.png/revision/latest/scale-to-width-down/70?cb=20190215185245",
        "description": "Improves tech power recharge speeds with each skill point invested in the Tech Skill Group.",
        "bonuses": [
          "+2% Tech Recharge Speed"
        ]
      },
      {
        "id": "ckqe1w32u006q8xva4bqc9zom",
        "rank": 3,
        "name": "Detonators",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/4/4f/Offensive_Tech_3_-_Detonators_Icon.png/revision/latest/scale-to-width-down/70?cb=20181209074159",
        "description": "Increases combo detonation damage from tech detonators with each skill point invested in the Tech Skill Group.",
        "bonuses": [
          "+2% Tech Detonator Damage Bonus"
        ]
      },
      {
        "id": "ckqe1w32u006r8xva7cv4acdp",
        "rank": 4,
        "name": "Anti-Armor",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/c/ca/Offensive_Tech_4a_-_Anti-Armor_Icon.png/revision/latest/scale-to-width-down/70?cb=20181209074159",
        "description": "",
        "bonuses": [
          "+20% Tech Damage Bonus to Armor"
        ]
      },
      {
        "id": "ckqe1w32v006s8xvaeg1aad9s",
        "rank": 4,
        "name": "Anti-Shield",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/e/ea/Offensive_Tech_4b_-_Anti-Shield_Icon.png/revision/latest/scale-to-width-down/70?cb=20181209074200",
        "description": "",
        "bonuses": [
          "+20% Tech Damage Bonus to Shields"
        ]
      },
      {
        "id": "ckqe1w32v006t8xva594p4rw5",
        "rank": 5,
        "name": "Detonators",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/4/4f/Offensive_Tech_3_-_Detonators_Icon.png/revision/latest/scale-to-width-down/70?cb=20181209074159",
        "description": "Increased combo detonation damage from tech detonators.",
        "bonuses": [
          "+30% Tech Detonator Damage Bonus"
        ]
      },
      {
        "id": "ckqe1w32v006u8xvaamw969ja",
        "rank": 5,
        "name": "Anti-Synthetic",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/8/88/Offensive_Tech_5b_-_Anti-Synthetic_Icon.png/revision/latest/scale-to-width-down/70?cb=20181209074202",
        "description": "Improves existing damage bonuses against synthetic enemies for electric powers.",
        "bonuses": [
          "+25% Electric Damage Bonus to Synthetics"
        ]
      },
      {
        "id": "ckqe1w32v006v8xva9xhodrck",
        "rank": 6,
        "name": "Elemental Tech",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/1/14/Offensive_Tech_6a_-_Elemental_Tech_Icon.png/revision/latest/scale-to-width-down/70?cb=20181209074205",
        "description": "Enemies suffering ongoing effects of the user's tech powers take increased damage from heat, cold, and electricity.",
        "bonuses": [
          "Elemental Defense Debuff: 35%"
        ]
      },
      {
        "id": "ckqe1w32v006w8xvaah8wdnah",
        "rank": 6,
        "name": "Technical Rounds",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/4/45/Offensive_Tech_6a_-_Weapon_Boost_Icon.png/revision/latest/scale-to-width-down/70?cb=20190303013029",
        "description": "Increases gun damage for a short period after using a tech power.",
        "bonuses": [
          "Weapon Damage Bonus: 30%",
          "Weapon Damage Bonus Duration: 5"
        ]
      }
    ]
  },
  {
    "id": "ckqe1w35n007h8xva8kjg6cje",
    "name": "Auxiliary Systems",
    "url": "/wiki/Auxiliary_Systems",
    "type": "passive",
    "stats": [
      "+2% Tech Effect Duration"
    ],
    "description": "Improves the effectiveness of tech powers and constructs in a variety of ways, thanks to customized omni-tool and hardsuit subsystems.\n",
    "ranks": [
      {
        "id": "ckqe1w35l00788xva09qygg0a",
        "rank": 1,
        "name": "Duration",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/d/d3/Auxiliary_Systems_1_-_Duration_Icon.png/revision/latest/scale-to-width-down/70?cb=20181209034121",
        "description": "Increases tech effect duration with each skill point invested in the Tech Skill Group.",
        "bonuses": [
          "+2% Tech Effect Duration"
        ]
      },
      {
        "id": "ckqe1w35l00798xva0a7e0g4d",
        "rank": 2,
        "name": "Force",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/2/2c/Auxiliary_Systems_2_-_Force_Icon.png/revision/latest/scale-to-width-down/70?cb=20181209034122",
        "description": "Increases tech power force with each skill point invested in the Tech Skill Group.",
        "bonuses": [
          "+2% Tech Force"
        ]
      },
      {
        "id": "ckqe1w35l007a8xva49z6fsqh",
        "rank": 3,
        "name": "Constructs",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/4/4e/Support_Systems_2_-_Defense_Systems_Icon.png/revision/latest/scale-to-width-down/70?cb=20181211002948",
        "description": "Improves tech construct health and damage output with each skill point invested in the Tech Skill Group.",
        "bonuses": [
          "+2% Tech Construct Damage",
          "+2% Tech Construct Health"
        ]
      },
      {
        "id": "ckqe1w35m007b8xvabdfhfiqf",
        "rank": 4,
        "name": "Weapon Mass Reduction",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/0/08/Auxiliary_Systems_4a_-_Weapon_Mass_Reduction_Icon.png/revision/latest/scale-to-width-down/70?cb=20181209034124",
        "description": "",
        "bonuses": [
          "+40% Weapon Weight Capacity"
        ]
      },
      {
        "id": "ckqe1w35m007c8xvads3396jh",
        "rank": 4,
        "name": "Priming",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/0/0d/Auxiliary_Systems_4b_-_Priming_Icon.png/revision/latest/scale-to-width-down/70?cb=20181209034124",
        "description": "Increases combo detonation priming rate for guns, melee attacks, powers, and constructs (for attacks that don't prime instantly).",
        "bonuses": [
          "+100% Combo Priming Rate"
        ]
      },
      {
        "id": "ckqe1w35m007d8xva3hckfhkg",
        "rank": 5,
        "name": "Enduring Tech",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/c/ce/Support_Systems_4a_-_Tech_Duration_Icon.png/revision/latest/scale-to-width-down/70?cb=20181211002952",
        "description": "Increases the duration of the user's ongoing tech power effects on enemies and allies.",
        "bonuses": [
          "+25% Tech Effect Duration"
        ]
      },
      {
        "id": "ckqe1w35m007e8xvab8c8fo87",
        "rank": 5,
        "name": "Impact Dilation",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/5/5c/Support_Systems_4b_-_Tech_Radius_Icon.png/revision/latest/scale-to-width-down/70?cb=20181211002953",
        "description": "Increases the radius of all tech powers that affect an area (including the area attacks of tech constructs).",
        "bonuses": [
          "+25% Tech Area of Effect Radius"
        ]
      },
      {
        "id": "ckqe1w35m007f8xva76fl3xud",
        "rank": 6,
        "name": "Shield Feedback",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/5/5c/Support_Systems_6a_-_Shield_Reset_Icon.png/revision/latest/scale-to-width-down/70?cb=20181211002958",
        "description": "Begins shield regeneration immediately, eliminating any delay, when a tech power is activated. Only functions once every 12 sec.",
        "bonuses": []
      },
      {
        "id": "ckqe1w35n007g8xva0nxx9tyb",
        "rank": 6,
        "name": "Omni-Vents",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/2/2c/Auxiliary_Systems_6b_-_Omni-Vents_Icon.png/revision/latest/scale-to-width-down/70?cb=20181209034129",
        "description": "Improves all recharge rates for currently recharging powers by 50% when a tech power is activated. Only functions once every 15 sec.",
        "bonuses": [
          "Power Recharge Time Rebate: 50%"
        ]
      }
    ]
  }
]

export const bioticSkills: Skill[] = [
  {
    "id": "ckqe1w27o000j8xva1yh01sbn",
    "name": "Pull",
    "url": "/wiki/Pull",
    "type": "passive",
    "stats": [
      "Duration (s): 5",
      "Recharge Time (s): 10"
    ],
    "description": "TAP BUTTON: Lifts an unshielded, unarmored enemy helplessly in the air and primes the target for combo detonations.\n\nHOLD BUTTON: Drags the target enemy or object along with the user.\n\nCombine with the Throw power to hurl a held target.\n",
    "ranks": [
      {
        "id": "ckqe1w27m000a8xvadirlbrz5",
        "rank": 1,
        "name": "Pull",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/2/28/Pull_1_Icon.png/revision/latest/scale-to-width-down/70?cb=20181207060912",
        "description": " TAP BUTTON: Lifts an unshielded, unarmored enemy helplessly in the air and primes the target for combo detonations.\n\nHOLD BUTTON: Drags the target enemy or object along with the user.\n\nCombine with the Throw power to hurl a held target.",
        "bonuses": [
          "Duration (s): 5",
          "Recharge Time (s): 10"
        ]
      },
      {
        "id": "ckqe1w27m000b8xva7mywenac",
        "rank": 2,
        "name": "Recharge Speed",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/5/5a/Annihilation_2_-_Recharge_Penalty_Icon.png/revision/latest/scale-to-width-down/70?cb=20181202180339",
        "description": "",
        "bonuses": [
          "+30% Recharge Speed"
        ]
      },
      {
        "id": "ckqe1w27m000c8xvag84476c5",
        "rank": 3,
        "name": "Duration",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/f/f2/Pull_3_-_Duration_Icon.png/revision/latest/scale-to-width-down/70?cb=20181207060917",
        "description": "",
        "bonuses": [
          "+40% Duration"
        ]
      },
      {
        "id": "ckqe1w27n000d8xva9l6jbett",
        "rank": 4,
        "name": "Duration",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/f/f2/Pull_3_-_Duration_Icon.png/revision/latest/scale-to-width-down/70?cb=20181207060917",
        "description": "",
        "bonuses": [
          "+50% Duration"
        ]
      },
      {
        "id": "ckqe1w27n000e8xva2o6h4yjd",
        "rank": 4,
        "name": "Radius",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/b/bd/Annihilation_4a_-_Radius_Icon.png/revision/latest/scale-to-width-down/70?cb=20181202180340",
        "description": "Pull affects up to two enemies within a radius.",
        "bonuses": [
          "Radius (m): 4"
        ]
      },
      {
        "id": "ckqe1w27n000f8xva02ug9tpp",
        "rank": 5,
        "name": "Crushing Grip",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/8/8a/Pull_5a_-_Crushing_Grip_Icon.png/revision/latest/scale-to-width-down/70?cb=20181207060922",
        "description": "Targets take damage while in the air.",
        "bonuses": [
          "Damage per Second 35"
        ]
      },
      {
        "id": "ckqe1w27n000g8xva1b7fdnmj",
        "rank": 5,
        "name": "Expose",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/7/7f/Pull_5b_-_Expose_Icon.png/revision/latest/scale-to-width-down/70?cb=20181207060923",
        "description": "Affected targets take more damage from all sources.",
        "bonuses": [
          "Defense Debuff: 30%"
        ]
      },
      {
        "id": "ckqe1w27o000h8xva4l40e9zw",
        "rank": 6,
        "name": "Anti-Shields",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/b/b3/Lance_5b_-_Anti-Shield_Icon.png/revision/latest/scale-to-width-down/70?cb=20181201210018",
        "description": "Drains enemy shields on initial hit (but targets whose shields endure still cannot be lifted or held).",
        "bonuses": [
          "Shield Damage Bonus: 600"
        ]
      },
      {
        "id": "ckqe1w27o000i8xva71x7bluw",
        "rank": 6,
        "name": "Biotic Drain",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/a/a5/Annihilation_6a_-_Draining_Field_Icon.png/revision/latest/scale-to-width-down/70?cb=20181202180343",
        "description": "Restores shields while Pull is maintained to hold an enemy.",
        "bonuses": [
          "Shields Restored per Second: 10%"
        ]
      }
    ]
  },
  {
    "id": "ckqe1w2bo001d8xva8pm4gqx8",
    "name": "Throw",
    "url": "/wiki/Throw",
    "type": "passive",
    "stats": [
      "Force: 850",
      "Damage on World Collision: 250",
      "Recharge Time (s): 10"
    ],
    "description": "Hurls a gravity field projectile to throw unshielded and unarmored targets away and detonate combo primers.\n\nCombine with the Pull power to hurl held targets.\n",
    "ranks": [
      {
        "id": "ckqe1w2bm00148xva4jv215lu",
        "rank": 1,
        "name": "Throw",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/4/4e/Throw_1_Icon.png/revision/latest/scale-to-width-down/70?cb=20181202044843",
        "description": " Hurls a gravity field projectile to throw unshielded and unarmored targets away and detonate combo primers.\n\nCombine with the Pull power to hurl held targets.",
        "bonuses": [
          "Force: 850",
          "Damage on World Collision: 250",
          "Recharge Time (s): 10"
        ]
      },
      {
        "id": "ckqe1w2bm00158xva34tf6isz",
        "rank": 2,
        "name": "Recharge Speed",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/5/5a/Annihilation_2_-_Recharge_Penalty_Icon.png/revision/latest/scale-to-width-down/70?cb=20181202180339",
        "description": "",
        "bonuses": [
          "+25% Recharge Speed"
        ]
      },
      {
        "id": "ckqe1w2bn00168xva49ewgsee",
        "rank": 3,
        "name": "Damage & Force",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/4/4b/Annihilation_3_-_Damage_Icon.png/revision/latest/scale-to-width-down/70?cb=20181202180340",
        "description": "",
        "bonuses": [
          "+20% All Damage",
          "+20% All Force"
        ]
      },
      {
        "id": "ckqe1w2bn00178xva4edi7czc",
        "rank": 4,
        "name": "Damage & Force",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/4/4b/Annihilation_3_-_Damage_Icon.png/revision/latest/scale-to-width-down/70?cb=20181202180340",
        "description": "",
        "bonuses": [
          "+30% All Damage",
          "+30% All Force"
        ]
      },
      {
        "id": "ckqe1w2bn00188xva2ude16ie",
        "rank": 4,
        "name": "Radius",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/b/bd/Annihilation_4a_-_Radius_Icon.png/revision/latest/scale-to-width-down/70?cb=20181202180340",
        "description": "Throw affects nearby enemies in a radius.",
        "bonuses": [
          "Radius (m): 2.5"
        ]
      },
      {
        "id": "ckqe1w2bn00198xva3xfe7r30",
        "rank": 5,
        "name": "Duration",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/f/f2/Pull_3_-_Duration_Icon.png/revision/latest/scale-to-width-down/70?cb=20181207060917",
        "description": " Extends float duration and length of time targets are primed for combo detonations.",
        "bonuses": [
          "+400% Duration"
        ]
      },
      {
        "id": "ckqe1w2bo001a8xva4r56bvyr",
        "rank": 5,
        "name": "Recharge Speed",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/5/5a/Annihilation_2_-_Recharge_Penalty_Icon.png/revision/latest/scale-to-width-down/70?cb=20181202180339",
        "description": "",
        "bonuses": [
          "+30% Recharge Speed"
        ]
      },
      {
        "id": "ckqe1w2bo001b8xva949xekc7",
        "rank": 6,
        "name": "Double Throw",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/5/5d/Throw_6a_-_Double_Throw_Icon.png/revision/latest/scale-to-width-down/70?cb=20181202044848",
        "description": "Launches two projectiles that seek separate targets.",
        "bonuses": []
      },
      {
        "id": "ckqe1w2bo001c8xvab3wz196z",
        "rank": 6,
        "name": "Swift Detonation",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/5/5e/Throw_6b_-_Swift_Detonation_Icon.png/revision/latest/scale-to-width-down/70?cb=20181202044848",
        "description": "",
        "bonuses": [
          "+30% Combo Detonation Damage",
          "+50% Recharge Speed"
        ]
      }
    ]
  },
  {
    "id": "ckqe1w2ft002h8xva64jahtf1",
    "name": "Charge",
    "url": "/wiki/Charge",
    "type": "passive",
    "stats": [
      "Damage: 275",
      "Force: 500",
      "Recharge Time (s): 8",
      "Shields Restored: 50%"
    ],
    "description": "Alters the biotic's mass, launching the user at an opponent. Restores some shield strengt at the charge's end. Charge detonates combo primers on targets.\n",
    "ranks": [
      {
        "id": "ckqe1w2fr00288xva7thyelko",
        "rank": 1,
        "name": "Charge",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/f/fe/Charge_1_Icon.png/revision/latest/scale-to-width-down/70?cb=20181201191502",
        "description": " Alters the biotic's mass, launching the user at an opponent. Restores some shield strength at the charge's end. Charge detonates combo primers on targets.",
        "bonuses": [
          "Damage: 275",
          "Force: 500",
          "Recharge Time (s): 8",
          "Shields Restored: 50%"
        ]
      },
      {
        "id": "ckqe1w2fr00298xva390sfvrh",
        "rank": 2,
        "name": "Recharge Speed",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/5/5a/Annihilation_2_-_Recharge_Penalty_Icon.png/revision/latest/scale-to-width-down/70?cb=20181202180339",
        "description": "",
        "bonuses": [
          "+35% Recharge Speed"
        ]
      },
      {
        "id": "ckqe1w2fr002a8xva0k1e9ymo",
        "rank": 3,
        "name": "Damage & Force",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/4/4b/Annihilation_3_-_Damage_Icon.png/revision/latest/scale-to-width-down/70?cb=20181202180340",
        "description": "",
        "bonuses": [
          "+25% Damage",
          "+25% Force"
        ]
      },
      {
        "id": "ckqe1w2fr002b8xva6ma7ak9r",
        "rank": 4,
        "name": "Damage & Force",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/4/4b/Annihilation_3_-_Damage_Icon.png/revision/latest/scale-to-width-down/70?cb=20181202180340",
        "description": "",
        "bonuses": [
          "+35% Damage",
          "+35% Force"
        ]
      },
      {
        "id": "ckqe1w2fr002c8xva8cra3jr3",
        "rank": 4,
        "name": "Radius",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/b/bd/Annihilation_4a_-_Radius_Icon.png/revision/latest/scale-to-width-down/70?cb=20181202180340",
        "description": "Damages enemies within a radius at the end point of the charge.",
        "bonuses": [
          "Radius (m): 3.5"
        ]
      },
      {
        "id": "ckqe1w2fs002d8xva05pw9z8c",
        "rank": 5,
        "name": "Weapons & Melee",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/b/b7/Charge_5a_-_Weapons_%26_Melee_Icon.png/revision/latest/scale-to-width-down/70?cb=20181201191506",
        "description": "Improves weapon and melee damage for 3 sec after charging.",
        "bonuses": [
          "Gun Damage Bonus: 15%",
          "Melee Damage Bonus: 30%"
        ]
      },
      {
        "id": "ckqe1w2fs002e8xvadoagd9vf",
        "rank": 5,
        "name": "Power Synergy",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/e/e7/Charge_5b_-_Power_Synergy_Icon.png/revision/latest/scale-to-width-down/70?cb=20181201191506",
        "description": "Enhances all powers for 5 sec after charging.",
        "bonuses": [
          "Power Damage Bonus: 25%",
          "Power Force Bonus: 25%"
        ]
      },
      {
        "id": "ckqe1w2fs002f8xva8abk0spf",
        "rank": 6,
        "name": "Shock Trooper",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/0/09/Charge_6a_-_Shock_Trooper_Icon.png/revision/latest/scale-to-width-down/70?cb=20181201191507",
        "description": "",
        "bonuses": [
          "+75% Recharge Speed"
        ]
      },
      {
        "id": "ckqe1w2fs002g8xva412ihyjj",
        "rank": 6,
        "name": "Bastion",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/3/3f/Charge_6b_-_Bastion_Icon.png/revision/latest/scale-to-width-down/70?cb=20181201191508",
        "description": "Fully restores shields and reduces incoming damage for 5 sec.",
        "bonuses": [
          "Damage Resistance: 75",
          "+50% Shields Restored",
          "+35% Damage"
        ]
      }
    ]
  },
  {
    "id": "ckqe1w2if002r8xvae3i100vl",
    "name": "Nova",
    "url": "/wiki/Nova",
    "type": "passive",
    "stats": [
      "Area Damage: 450",
      "Effect Radius (m): 4",
      "Force: 450",
      "Recharge Time (s):12"
    ],
    "description": "Channels energy into a point-blank, high-damage explosion around the user.\n",
    "ranks": [
      {
        "id": "ckqe1w2ic002i8xvagw102jg1",
        "rank": 1,
        "name": "Nova",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/2/26/Nova_1_Icon.png/revision/latest/scale-to-width-down/70?cb=20181207012136",
        "description": "Channels energy into a point-blank, high-damage explosion around the user.",
        "bonuses": [
          "Area Damage: 450",
          "Effect Radius (m): 4",
          "Force: 450",
          "Recharge Time (s):12"
        ]
      },
      {
        "id": "ckqe1w2ic002j8xva64fqgzo2",
        "rank": 2,
        "name": "Radius",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/b/bd/Annihilation_4a_-_Radius_Icon.png/revision/latest/scale-to-width-down/70?cb=20181202180340",
        "description": "",
        "bonuses": [
          "+25% Damage Radius"
        ]
      },
      {
        "id": "ckqe1w2ic002k8xva3ip9611x",
        "rank": 3,
        "name": "Damage & Force",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/4/4b/Annihilation_3_-_Damage_Icon.png/revision/latest/scale-to-width-down/70?cb=20181202180340",
        "description": "",
        "bonuses": [
          "+20% Damage",
          "+25% Force"
        ]
      },
      {
        "id": "ckqe1w2ic002l8xva0qbx6jsy",
        "rank": 4,
        "name": "Damage & Force",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/4/4b/Annihilation_3_-_Damage_Icon.png/revision/latest/scale-to-width-down/70?cb=20181202180340",
        "description": "",
        "bonuses": [
          "+30% Damage",
          "+30% Force"
        ]
      },
      {
        "id": "ckqe1w2ic002m8xvafkdfbbpx",
        "rank": 4,
        "name": "Radius",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/b/bd/Annihilation_4a_-_Radius_Icon.png/revision/latest/scale-to-width-down/70?cb=20181202180340",
        "description": "",
        "bonuses": [
          "+40% Damage Radius"
        ]
      },
      {
        "id": "ckqe1w2id002n8xvafg934rdo",
        "rank": 5,
        "name": "Anti-Armor",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/b/b9/Nova_5a_-_Anti-Armor_Icon.png/revision/latest/scale-to-width-down/70?cb=20181207012141",
        "description": "Increased damage to enemy armor.",
        "bonuses": [
          "+60% Damage vs. Armor"
        ]
      },
      {
        "id": "ckqe1w2id002o8xva9g2x8uat",
        "rank": 5,
        "name": "Anti-Shield",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/b/b3/Lance_5b_-_Anti-Shield_Icon.png/revision/latest/scale-to-width-down/70?cb=20181201210018",
        "description": "Increased damage to enemy shields.",
        "bonuses": [
          "+60% Damage vs. Shields"
        ]
      },
      {
        "id": "ckqe1w2if002p8xvacs61eyx1",
        "rank": 6,
        "name": "Seismic Nova",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/8/8f/Lance_6a_-_Knockdown_Icon.png/revision/latest/scale-to-width-down/70?cb=20181201210015",
        "description": " Knocks enemies to the ground and primes them for combo detonations. Only unarmored, unshielded, normal-sized enemies are affected.",
        "bonuses": [
          "+30% Damage"
        ]
      },
      {
        "id": "ckqe1w2if002q8xvab55b9lt6",
        "rank": 6,
        "name": "Shield-Powered",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/3/3f/Lance_6b_-_Shield-Powered_Icon.png/revision/latest/scale-to-width-down/70?cb=20181201210018",
        "description": "Nova has no recharge time, but consumes shields when used.",
        "bonuses": [
          "Shield Cost: 100%"
        ]
      }
    ]
  },
  {
    "id": "ckqe1w2li003b8xvacql0hj2n",
    "name": "Shockwave",
    "url": "/wiki/Shockwave",
    "type": "passive",
    "stats": [
      "Damage: 260",
      "Force: 525",
      "Effect Radius (m): 1.5",
      "Recharge Time (s): 15"
    ],
    "description": "Blasts enemies with a line of explosions that proceeds through walls and other solid objects. Shockwave detonates combo primers.\n",
    "ranks": [
      {
        "id": "ckqe1w2lg00328xva2iaz8jt9",
        "rank": 1,
        "name": "Shockwave",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/9/9a/Shockwave_1_Icon.png/revision/latest/scale-to-width-down/70?cb=20181202060911",
        "description": " Blasts enemies with a line of explosions that proceeds through walls and other solid objects. Shockwave detonates combo primers.",
        "bonuses": [
          "Damage: 260",
          "Force: 525",
          "Effect Radius (m): 1.5",
          "Recharge Time (s): 15"
        ]
      },
      {
        "id": "ckqe1w2lg00338xva3qnx7whf",
        "rank": 2,
        "name": "Recharge Speed",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/5/5a/Annihilation_2_-_Recharge_Penalty_Icon.png/revision/latest/scale-to-width-down/70?cb=20181202180339",
        "description": "",
        "bonuses": [
          "+20% Recharge Speed"
        ]
      },
      {
        "id": "ckqe1w2lg00348xva2ie5ebg7",
        "rank": 3,
        "name": "Damage & Force",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/4/4b/Annihilation_3_-_Damage_Icon.png/revision/latest/scale-to-width-down/70?cb=20181202180340",
        "description": "",
        "bonuses": [
          "+20% Damage",
          "+20% Force"
        ]
      },
      {
        "id": "ckqe1w2lh00358xvagn4h3c2n",
        "rank": 4,
        "name": "Damage & Force",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/4/4b/Annihilation_3_-_Damage_Icon.png/revision/latest/scale-to-width-down/70?cb=20181202180340",
        "description": "",
        "bonuses": [
          "+30% Damage",
          "+30% Force"
        ]
      },
      {
        "id": "ckqe1w2lh00368xva4fjedxyf",
        "rank": 4,
        "name": "Radius",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/b/bd/Annihilation_4a_-_Radius_Icon.png/revision/latest/scale-to-width-down/70?cb=20181202180340",
        "description": "",
        "bonuses": [
          "+100% Damage Radius"
        ]
      },
      {
        "id": "ckqe1w2lh00378xva1u336nf6",
        "rank": 5,
        "name": "Recharge Speed",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/5/5a/Annihilation_2_-_Recharge_Penalty_Icon.png/revision/latest/scale-to-width-down/70?cb=20181202180339",
        "description": "",
        "bonuses": [
          "+35% Recharge Speed"
        ]
      },
      {
        "id": "ckqe1w2lh00388xva0ble9rg0",
        "rank": 5,
        "name": "Reach",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/1/16/Shockwave_5b_-_Reach_Icon.png/revision/latest/scale-to-width-down/70?cb=20181202060915",
        "description": "Increases maximum Shockwave distance by 50%.",
        "bonuses": []
      },
      {
        "id": "ckqe1w2lh00398xva5z5e2qzl",
        "rank": 6,
        "name": "Anti-Armor",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/b/b3/Lance_5b_-_Anti-Shield_Icon.png/revision/latest/scale-to-width-down/70?cb=20181201210018",
        "description": "",
        "bonuses": [
          "+75% Damage vs. Armor"
        ]
      },
      {
        "id": "ckqe1w2li003a8xvab4mg1aas",
        "rank": 6,
        "name": "Lifting Shockwave",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/8/8f/Lance_6a_-_Knockdown_Icon.png/revision/latest/scale-to-width-down/70?cb=20181201210015",
        "description": " Affected enemies are briefly suspended in midair and primed for combo detonations.",
        "bonuses": []
      }
    ]
  },
  {
    "id": "ckqe1w2o8003v8xvafk0fa9sj",
    "name": "Annihilation",
    "url": "/wiki/Annihilation",
    "type": "passive",
    "stats": [
      "Effect Radius (m): 3.5",
      "Damage per Second: 55",
      "Power Recharge Penalty: 75%",
      "Recharge Time (s): 8"
    ],
    "description": "Weaves rapidly shifting mass effect fields to slowly damage nearby enemies. Enemies caught are primed for combo detonations. Other powers activated while Annihilation is in use suffer reduced recharge speed.\n",
    "ranks": [
      {
        "id": "ckqe1w2o6003m8xva909n6ttl",
        "rank": 1,
        "name": "Annihilation",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/7/7a/Annihilation_1_Icon.png/revision/latest/scale-to-width-down/70?cb=20181202180338",
        "description": " Weaves rapidly shifting mass effect fields to slowly damage nearby enemies. Enemies caught are primed for combo detonations. Other powers activated while Annihilation is in use suffer reduced recharge speed.",
        "bonuses": [
          "Effect Radius (m): 3.5",
          "Damage per Second: 55",
          "Power Recharge Penalty: 75%",
          "Recharge Time (s): 8"
        ]
      },
      {
        "id": "ckqe1w2o6003n8xvadgua1vup",
        "rank": 2,
        "name": "Recharge Penalty",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/5/5a/Annihilation_2_-_Recharge_Penalty_Icon.png/revision/latest/scale-to-width-down/70?cb=20181202180339",
        "description": "Reduces the recharge speed penalty on other powers.",
        "bonuses": [
          "-10% Power Recharge Penalty"
        ]
      },
      {
        "id": "ckqe1w2o7003o8xva4fzk1ik7",
        "rank": 3,
        "name": "Damage",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/4/4b/Annihilation_3_-_Damage_Icon.png/revision/latest/scale-to-width-down/70?cb=20181202180340",
        "description": "",
        "bonuses": [
          "+15% Damage"
        ]
      },
      {
        "id": "ckqe1w2o7003p8xva25v22ids",
        "rank": 4,
        "name": "Radius",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/b/bd/Annihilation_4a_-_Radius_Icon.png/revision/latest/scale-to-width-down/70?cb=20181202180340",
        "description": "",
        "bonuses": [
          "+35% Damage Radius"
        ]
      },
      {
        "id": "ckqe1w2o7003q8xvaalmh596z",
        "rank": 4,
        "name": "Recharge Penalty",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/5/5a/Annihilation_2_-_Recharge_Penalty_Icon.png/revision/latest/scale-to-width-down/70?cb=20181202180339",
        "description": "Reduces the recharge speed penalty on other powers.",
        "bonuses": [
          "-30% Power Recharge Penalty"
        ]
      },
      {
        "id": "ckqe1w2o7003r8xva0ley6vxu",
        "rank": 5,
        "name": "Damage Attractor",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/c/c5/Annihilation_5a_-_Damage_Attractor_Icon.png/revision/latest/scale-to-width-down/70?cb=20181202180342",
        "description": "Enemies affected take 20% additional damage from all sources.",
        "bonuses": []
      },
      {
        "id": "ckqe1w2o7003s8xva2ktkheg1",
        "rank": 5,
        "name": "Biotic Wind",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/d/d0/Annihilation_5b_-_Biotic_Wind_Icon.png/revision/latest/scale-to-width-down/70?cb=20181202180343",
        "description": "Increases movement speed for all allies (including the user) within Annihilation's radius.",
        "bonuses": [
          "Movement Speed Bonus: 25%"
        ]
      },
      {
        "id": "ckqe1w2o8003t8xvacxg80xu9",
        "rank": 6,
        "name": "Draining Field",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/a/a5/Annihilation_6a_-_Draining_Field_Icon.png/revision/latest/scale-to-width-down/70?cb=20181202180343",
        "description": "Partially restores shields for all allies (including the user) within 8 m when an enemy affected by Annihilation dies.",
        "bonuses": [
          "Shields Restored: 30%"
        ]
      },
      {
        "id": "ckqe1w2o8003u8xvacsp0fhkt",
        "rank": 6,
        "name": "Vortex",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/8/89/Annihilation_6b_-_Vortex_Icon.png/revision/latest/scale-to-width-down/70?cb=20181202180344",
        "description": "Unarmored, unshielded, normal-sized enemies are lifted into the air for 8 sec. Each enemy can only be affected once every 15 sec.",
        "bonuses": []
      }
    ]
  },
  {
    "id": "ckqe1w2qs004f8xva4nhd458f",
    "name": "Backlash",
    "url": "/wiki/Backlash",
    "type": "passive",
    "stats": [
      "Aegis Health: 300",
      "Projectile Damage Returned: 120%",
      "Frontal Damage Resistance: 75",
      "Recharge Time (s): 20"
    ],
    "description": "HOLD BUTTON: Generates a frontal biotic aegis barrier that reflects most projectiles and reduces the damage of other enemy attacks. A well-timed initial activation interrupts melee attacks.\n",
    "ranks": [
      {
        "id": "ckqe1w2qq00468xva9wuufqy3",
        "rank": 1,
        "name": "Backlash",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/e/ea/Backlash_1_Icon.png/revision/latest/scale-to-width-down/70?cb=20181207005210",
        "description": "HOLD BUTTON: Generates a frontal biotic aegis barrier that reflects most projectiles and reduces the damage of other enemy attacks. A well-timed initial activation interrupts melee attacks.",
        "bonuses": [
          "Aegis Health: 300",
          "Projectile Damage Returned: 120%",
          "Frontal Damage Resistance: 75",
          "Recharge Time (s): 20"
        ]
      },
      {
        "id": "ckqe1w2qr00478xvaagsi604c",
        "rank": 2,
        "name": "Recharge Speed",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/5/5a/Annihilation_2_-_Recharge_Penalty_Icon.png/revision/latest/scale-to-width-down/70?cb=20181202180339",
        "description": "",
        "bonuses": [
          "+25% Recharge Speed"
        ]
      },
      {
        "id": "ckqe1w2qr00488xvafqxyaxyr",
        "rank": 3,
        "name": "Durability",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/2/2b/Backlash_3_-_Durability_Icon.png/revision/latest/scale-to-width-down/70?cb=20181207005213",
        "description": "",
        "bonuses": [
          "+35% Aegis Health"
        ]
      },
      {
        "id": "ckqe1w2qr00498xva4fgk7y75",
        "rank": 4,
        "name": "Durability",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/2/2b/Backlash_3_-_Durability_Icon.png/revision/latest/scale-to-width-down/70?cb=20181207005213",
        "description": "",
        "bonuses": [
          "+40% Aegis Health"
        ]
      },
      {
        "id": "ckqe1w2qr004a8xvag9e489ns",
        "rank": 4,
        "name": "Recharge Speed",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/5/5a/Annihilation_2_-_Recharge_Penalty_Icon.png/revision/latest/scale-to-width-down/70?cb=20181202180339",
        "description": "",
        "bonuses": [
          "+40% Recharge Speed"
        ]
      },
      {
        "id": "ckqe1w2qr004b8xva6irx0eab",
        "rank": 5,
        "name": "Durability",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/2/2b/Backlash_3_-_Durability_Icon.png/revision/latest/scale-to-width-down/70?cb=20181207005213",
        "description": "",
        "bonuses": [
          "+40% Aegis Health"
        ]
      },
      {
        "id": "ckqe1w2qr004c8xva87m28a7g",
        "rank": 5,
        "name": "Reflection",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/1/16/Backlash_5b_-_Reflection_Icon.png/revision/latest/scale-to-width-down/70?cb=20181207005221",
        "description": "Reflected projectiles inflict more damage.",
        "bonuses": [
          "+100% Projectile Damage Returned"
        ]
      },
      {
        "id": "ckqe1w2qs004d8xvafney2rz6",
        "rank": 6,
        "name": "Shield Resurgence",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/a/a5/Annihilation_6a_-_Draining_Field_Icon.png/revision/latest/scale-to-width-down/70?cb=20181202180343",
        "description": "Restores shields over 3 sec after releasing Backlash. Can restore up to 50% of shield strength, scaled to damage absorbed by the aegis.",
        "bonuses": []
      },
      {
        "id": "ckqe1w2qs004e8xva3jish81g",
        "rank": 6,
        "name": "Damage Aftermath",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/4/4b/Annihilation_3_-_Damage_Icon.png/revision/latest/scale-to-width-down/70?cb=20181202180340",
        "description": "Increases damage inflicted for 3 sec after releasing Backlash. Scales with the amount of damage absorbed by the aegis.",
        "bonuses": [
          "+20% Gun Damage Bonus",
          "+30% Power Damage Bonus",
          "+30% Melee Damage Bonus"
        ]
      }
    ]
  },
  {
    "id": "ckqe1w2t7004z8xvaa85nc0jo",
    "name": "Singularity",
    "url": "/wiki/Singularity",
    "type": "passive",
    "stats": [
      "Damage per Second: 35",
      "Radius (m): 3",
      "Duration (s): 8",
      "Recharge Time (s): 24"
    ],
    "description": "TAP BUTTON: Deploys a gravity well that lifts and damages unshielded and unarmored enemies. Primes enemies for combo detonations.\n\nTAP AGAIN: End the effect early.\n",
    "ranks": [
      {
        "id": "ckqe1w2t5004q8xva9ah752o1",
        "rank": 1,
        "name": "Singularity",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/f/f0/Singularity_1_Icon.png/revision/latest/scale-to-width-down/70?cb=20181205064531",
        "description": " TAP BUTTON: Deploys a gravity well that lifts and damages unshielded and unarmored enemies.\nPrimes enemies for combo detonations.\n\nTAP AGAIN: End the effect early.",
        "bonuses": [
          "Damage per Second: 35",
          "Radius (m): 3",
          "Duration (s): 8",
          "Recharge Time (s): 24"
        ]
      },
      {
        "id": "ckqe1w2t5004r8xva9njt3oyn",
        "rank": 2,
        "name": "Recharge Speed",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/5/5a/Annihilation_2_-_Recharge_Penalty_Icon.png/revision/latest/scale-to-width-down/70?cb=20181202180339",
        "description": "",
        "bonuses": [
          "+10% Recharge Speed"
        ]
      },
      {
        "id": "ckqe1w2t6004s8xvagssk1cce",
        "rank": 3,
        "name": "Damage",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/4/4b/Annihilation_3_-_Damage_Icon.png/revision/latest/scale-to-width-down/70?cb=20181202180340",
        "description": "",
        "bonuses": [
          "+25% Damage per Second"
        ]
      },
      {
        "id": "ckqe1w2t6004t8xvacu9lda19",
        "rank": 4,
        "name": "Duration",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/f/f2/Pull_3_-_Duration_Icon.png/revision/latest/scale-to-width-down/70?cb=20181207060917",
        "description": "",
        "bonuses": [
          "+40% Duration"
        ]
      },
      {
        "id": "ckqe1w2t6004u8xva23mv47da",
        "rank": 4,
        "name": "Radius",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/b/bd/Annihilation_4a_-_Radius_Icon.png/revision/latest/scale-to-width-down/70?cb=20181202180340",
        "description": "",
        "bonuses": [
          "+25% Effect Radius"
        ]
      },
      {
        "id": "ckqe1w2t6004v8xva6rn6av0q",
        "rank": 5,
        "name": "Anti-Shield",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/b/b3/Lance_5b_-_Anti-Shield_Icon.png/revision/latest/scale-to-width-down/70?cb=20181201210018",
        "description": "",
        "bonuses": [
          "+100% Damage vs. Shields"
        ]
      },
      {
        "id": "ckqe1w2t6004w8xvaales6rd7",
        "rank": 5,
        "name": "Recharge Speed",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/5/5a/Annihilation_2_-_Recharge_Penalty_Icon.png/revision/latest/scale-to-width-down/70?cb=20181202180339",
        "description": "",
        "bonuses": [
          "+40% Recharge Speed"
        ]
      },
      {
        "id": "ckqe1w2t7004x8xva5atl0a72",
        "rank": 6,
        "name": "Exploding Singularity",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/a/a7/Singularity_6a_-_Exploding_Singularity_Icon.png/revision/latest/scale-to-width-down/70?cb=20181205064536",
        "description": "The singularity explodes after the effect ends, dealing damage in a 7m radius.",
        "bonuses": [
          "Area Damage: 350"
        ]
      },
      {
        "id": "ckqe1w2t7004y8xvaaiut4b5r",
        "rank": 6,
        "name": "Expanding Singularity",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/b/b9/Singularity_6b_-_Expanding_Singularity_Icon.png/revision/latest/scale-to-width-down/70?cb=20181205064536",
        "description": "Radius expands by 200% over the singularity lifetime.",
        "bonuses": []
      }
    ]
  },
  {
    "id": "ckqe1w2w1005j8xva6mt9fvt3",
    "name": "Lance",
    "url": "/wiki/Lance",
    "type": "passive",
    "stats": [
      "Damage: 320",
      "Force: 400",
      "Impact Radius: 1",
      "Recharge Time (s): 10"
    ],
    "description": "Devastates a small area with a swiftly thrown shaft of energy. Inflicts bonus damage against enemy weak points (such as heads) and detonates combo primers.\n",
    "ranks": [
      {
        "id": "ckqe1w2vz005a8xva18ey8dup",
        "rank": 1,
        "name": "Lance",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/8/8a/Lance_1_Icon.png/revision/latest/scale-to-width-down/70?cb=20181201210011",
        "description": " Devastates a small area with a swiftly thrown shaft of energy. Inflicts bonus damage against enemy weak points (such as heads) and detonates combo primers.",
        "bonuses": [
          "Damage: 320",
          "Force: 400",
          "Impact Radius: 1",
          "Recharge Time (s): 10"
        ]
      },
      {
        "id": "ckqe1w2w0005b8xvab6mi1psl",
        "rank": 2,
        "name": "Recharge Speed",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/5/5a/Annihilation_2_-_Recharge_Penalty_Icon.png/revision/latest/scale-to-width-down/70?cb=20181202180339",
        "description": "",
        "bonuses": [
          "+10% Recharge Speed"
        ]
      },
      {
        "id": "ckqe1w2w0005c8xvackzzaocc",
        "rank": 3,
        "name": "Damage & Force",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/4/4b/Annihilation_3_-_Damage_Icon.png/revision/latest/scale-to-width-down/70?cb=20181202180340",
        "description": "",
        "bonuses": [
          "+15% Damage",
          "+15% Force"
        ]
      },
      {
        "id": "ckqe1w2w0005d8xva7zw18hal",
        "rank": 4,
        "name": "Damage & Force",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/4/4b/Annihilation_3_-_Damage_Icon.png/revision/latest/scale-to-width-down/70?cb=20181202180340",
        "description": "",
        "bonuses": [
          "+20% Damage",
          "+20% Force"
        ]
      },
      {
        "id": "ckqe1w2w1005e8xvaasnu8h9y",
        "rank": 4,
        "name": "Radius",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/b/bd/Annihilation_4a_-_Radius_Icon.png/revision/latest/scale-to-width-down/70?cb=20181202180340",
        "description": "",
        "bonuses": [
          "+100% Damage Radius"
        ]
      },
      {
        "id": "ckqe1w2w1005f8xva94sbcyd8",
        "rank": 5,
        "name": "Focused Blast",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/d/de/Lance_5a_-_Focused_Blast_Icon.png/revision/latest/scale-to-width-down/70?cb=20181201210014",
        "description": "Increases bonus damage against heads and other weak points.",
        "bonuses": [
          "+40% Headshot/Weak Point Bonus"
        ]
      },
      {
        "id": "ckqe1w2w1005g8xva7mxzg0dt",
        "rank": 5,
        "name": "Anti-Shield",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/b/b3/Lance_5b_-_Anti-Shield_Icon.png/revision/latest/scale-to-width-down/70?cb=20181201210018",
        "description": "",
        "bonuses": [
          "+35% Damage vs. Shields"
        ]
      },
      {
        "id": "ckqe1w2w1005h8xva0t2e4jw5",
        "rank": 6,
        "name": "Knockdown",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/8/8f/Lance_6a_-_Knockdown_Icon.png/revision/latest/scale-to-width-down/70?cb=20181201210015",
        "description": "Enemies within 1.5m of the blast's impact are knocked to the ground. Only unarmored, unshielded, normal-sized enemies are affected.",
        "bonuses": [
          "+20% Damage",
          "+20% Force"
        ]
      },
      {
        "id": "ckqe1w2w1005i8xva7591b9wh",
        "rank": 6,
        "name": "Shield-Powered",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/3/3f/Lance_6b_-_Shield-Powered_Icon.png/revision/latest/scale-to-width-down/70?cb=20181201210018",
        "description": "Lance has no recharge time, but consumes shields when used.",
        "bonuses": [
          "Shield Cost: 45%"
        ]
      }
    ]
  },
  {
    "id": "ckqe1w2z400638xvah49d47ny",
    "name": "Barrier",
    "url": "/wiki/Barrier",
    "type": "passive",
    "stats": [
      "+2% Max Shields"
    ],
    "description": "Specialized training reinforces ordinary shields with biotically empowered mass effect fields.\n",
    "ranks": [
      {
        "id": "ckqe1w2z1005u8xvab8dxgmtg",
        "rank": 1,
        "name": "Barrier",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/9/94/Barrier_1_Icon.png/revision/latest/scale-to-width-down/70?cb=20181207041418",
        "description": "Maximum shield strength scales with each skill point invested in the Biotic Skill Group.",
        "bonuses": [
          "+2% Max Shields"
        ]
      },
      {
        "id": "ckqe1w2z1005v8xvafyal8pk2",
        "rank": 2,
        "name": "Barrier Speed",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/d/dd/Barrier_2_-_Barrier_Regeneration_Icon.png/revision/latest/scale-to-width-down/70?cb=20181207044624",
        "description": "Decreases the delay before shields begin regenerating with each skill point invested in the Biotic Skill Group.",
        "bonuses": [
          "+2% Health &amp; Shield Regeneration Delay Reduction"
        ]
      },
      {
        "id": "ckqe1w2z1005w8xvabi7ed52z",
        "rank": 3,
        "name": "Barrier Regeneration",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/0/09/Barrier_3_-_Barrier_Regeneration_Icon.png/revision/latest/scale-to-width-down/70?cb=20181207041420",
        "description": "Increases shield regeneration speed with each skill point invested in the Biotic Skill Group.",
        "bonuses": [
          "+2% Shield Regeneration"
        ]
      },
      {
        "id": "ckqe1w2z2005x8xva0bo24lva",
        "rank": 4,
        "name": "Unyielding Barrier",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/c/c9/Barrier_4a_-_Unyielding_Barrier_Icon.png/revision/latest/scale-to-width-down/70?cb=20181207041421",
        "description": "",
        "bonuses": [
          "+10% Max Shields"
        ]
      },
      {
        "id": "ckqe1w2z2005y8xva37n0aa5d",
        "rank": 4,
        "name": "Recuperative Barrier",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/5/5d/Barrier_4b_-_Recuperative_Barrier_Icon.png/revision/latest/scale-to-width-down/70?cb=20181207041422",
        "description": "",
        "bonuses": [
          "+10% Health &amp; Shield Regeneration Delay Reduction",
          "+10% Shield Regeneration"
        ]
      },
      {
        "id": "ckqe1w2z2005z8xva6hsn37uc",
        "rank": 5,
        "name": "Biotic Link",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/e/e6/Barrier_5a_-_Biotic_Link_Icon.png/revision/latest/scale-to-width-down/70?cb=20181207041423",
        "description": "Increases maximum shield strength while a biotic effect is active upon an enemy.",
        "bonuses": [
          "Max Shields With an Active Biotic Effect: 40%",
          "Biotic Link Cooldown (s): 5"
        ]
      },
      {
        "id": "ckqe1w2z200608xva1v713t75",
        "rank": 5,
        "name": "Biotic Alacrity",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/2/2e/Barrier_5b_-_Biotic_Alacrity_Icon.png/revision/latest/scale-to-width-down/70?cb=20181207041424",
        "description": "Reduces weapon weight and improves speed while shields are active. For biotic powers that deplete shields to activate, shield cost is reduced.",
        "bonuses": [
          "+10% Weapon Weight Capacity",
          "+10% Biotic Power Shield Cost Reduction",
          "+10% Movement Speed While Shields Active"
        ]
      },
      {
        "id": "ckqe1w2z200618xva7jml4h44",
        "rank": 6,
        "name": "Active Barrier",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/5/5f/Barrier_6a_-_Active_Barrier_Icon.png/revision/latest/scale-to-width-down/70?cb=20181207041426",
        "description": "Restores shields after an enemy is killed by a biotic power. Also affects squadmates within 6 m.",
        "bonuses": [
          "Shields Restored on Biotic Kill: 10%"
        ]
      },
      {
        "id": "ckqe1w2z400628xva79en157y",
        "rank": 6,
        "name": "Saving Barrier",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/3/35/Barrier_6b_-_Saving_Barrier_Icon.png/revision/latest/scale-to-width-down/70?cb=20181207041428",
        "description": "Automatically restores shields upon reaching low health on a cooldown.",
        "bonuses": [
          "Shields Restored at Low Health: 100%",
          "Low Health Threshold: 20%",
          "Saving Barrier Cooldown (s): 15"
        ]
      }
    ]
  },
  {
    "id": "ckqe1w31t006n8xvaby96fb1v",
    "name": "Offensive Biotics",
    "url": "/wiki/Offensive_Biotics",
    "type": "passive",
    "stats": [
      "+2% Biotic Power Damage"
    ],
    "description": "Allows a biotic to maximize damage against foes both directly and indirectly.\n",
    "ranks": [
      {
        "id": "ckqe1w31r006e8xva8g6c1w4w",
        "rank": 1,
        "name": "Offensive Biotics",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/7/77/Offensive_Biotics_1_Icon.png/revision/latest/scale-to-width-down/70?cb=20181202035029",
        "description": "Increases biotic power damage and force with each skill point invested in the Biotic Skill Group.",
        "bonuses": [
          "+2% Biotic Power Damage"
        ]
      },
      {
        "id": "ckqe1w31s006f8xvaedd3ae9l",
        "rank": 2,
        "name": "Speed",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/0/00/Duelist_4b_-_Efficiency_Icon.png/revision/latest/scale-to-width-down/70?cb=20181207073814",
        "description": "Improves biotic power recharge speeds with each skill point invested in the Biotic Skill Group.",
        "bonuses": [
          "+2% Biotic Recharge Speed"
        ]
      },
      {
        "id": "ckqe1w31s006g8xvac9vxb5h5",
        "rank": 3,
        "name": "Detonators",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/3/39/Offensive_Biotics_3_-_Detonators_Icon.png/revision/latest/scale-to-width-down/70?cb=20181202035030",
        "description": "Increases combo detonation damage from biotic detonators with each skill point invested in the Biotic Skill Group.",
        "bonuses": [
          "+2% Biotic Detonator Damage Bonus"
        ]
      },
      {
        "id": "ckqe1w31s006h8xva21097086",
        "rank": 4,
        "name": "Amplitude",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/d/d4/Biotic_Ascension_2_-_Biotics_Icon.png/revision/latest/scale-to-width-down/70?cb=20181207082859",
        "description": "",
        "bonuses": [
          "+15% Biotic Power Damage"
        ]
      },
      {
        "id": "ckqe1w31s006i8xvagxtg24of",
        "rank": 4,
        "name": "Alacrity",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/6/6a/Offensive_Biotics_4b_-_Alacrity_Icon.png/revision/latest/scale-to-width-down/70?cb=20181202035032",
        "description": "",
        "bonuses": [
          "+15% Biotic Recharge Speed"
        ]
      },
      {
        "id": "ckqe1w31s006j8xvae6qe7bif",
        "rank": 5,
        "name": "Exploitation",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/5/51/Offensive_Biotics_5a_-_Explotation_Icon.png/revision/latest/scale-to-width-down/70?cb=20181202035032",
        "description": "Increases damage from all sources against enemies suffering ongoing effects of the user's biotic powers.",
        "bonuses": [
          "Defense Debuff from Biotic Effects: 20%"
        ]
      },
      {
        "id": "ckqe1w31t006k8xvab1s401kr",
        "rank": 5,
        "name": "Detonation",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/a/ac/Biotic_Ascension_5b_-_Combo_Detonation_Icon.png/revision/latest/scale-to-width-down/70?cb=20181207082900",
        "description": "Increases combo detonation damage from biotic detonators and increases the radius of all combo detonations.",
        "bonuses": [
          "+25% Biotic Detonator Damage Bonus",
          "+40% All Combo Radiuses"
        ]
      },
      {
        "id": "ckqe1w31t006l8xva3jvh8qvp",
        "rank": 6,
        "name": "Biotic Expert",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/a/a0/Offensive_Biotics_6a_-_Biotic_Expert_Icon.png/revision/latest/scale-to-width-down/70?cb=20181202035034",
        "description": "Increases power damage for 3 sec after using a biotic power.",
        "bonuses": [
          "+30% Biotic Damage Bonus"
        ]
      },
      {
        "id": "ckqe1w31t006m8xvah1ly9iv1",
        "rank": 6,
        "name": "Biotic Warrior",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/1/1f/Duelist_6a_-_Biotic_Synergy_Icon.png/revision/latest/scale-to-width-down/70?cb=20181207073818",
        "description": "Increases weapon and melee damage for 3 seconds after using a biotic power. During this time, melee attacks also knock down unarmored, unshielded, standard-sized enemies.",
        "bonuses": [
          "+15% Weapon Damage Bonus",
          "+15% Melee Damage Bonus",
          "+15% Melee Force"
        ]
      }
    ]
  },
  {
    "id": "ckqe1w34l00778xva3t1xayzr",
    "name": "Containment",
    "url": "/wiki/Containment",
    "type": "passive",
    "stats": [
      "+2% Biotic Effect Duration"
    ],
    "description": "Enhances a biotic's control over mass effect fields, allowing unsurpassed manipulation of enemies and objects.\n",
    "ranks": [
      {
        "id": "ckqe1w34j006y8xvab51igope",
        "rank": 1,
        "name": "Containment",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/a/a8/Containment_1_Icon.png/revision/latest/scale-to-width-down/70?cb=20181207053213",
        "description": "Increases the duration of biotic power effects with each skill point invested in the Biotic Skill Group.",
        "bonuses": [
          "+2% Biotic Effect Duration"
        ]
      },
      {
        "id": "ckqe1w34k006z8xvagy1z7bl9",
        "rank": 2,
        "name": "Effectiveness",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/9/93/Containment_2_-_Effectiveness_Icon.png/revision/latest/scale-to-width-down/70?cb=20181207053213",
        "description": "Improves biotic power force, biotic shield restoration effects, and defensive biotic effects with each skill point invested in the Biotic Skill Group.",
        "bonuses": [
          "+2% Biotic Force",
          "+5% Biotic Restoration &amp; Defense"
        ]
      },
      {
        "id": "ckqe1w34k00708xvahsep6qac",
        "rank": 3,
        "name": "Anti-Shield",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/6/67/Containment_3_-_Anti-Shield_Icon.png/revision/latest/scale-to-width-down/70?cb=20181207053214",
        "description": "Increases damage dealt to shields by biotic powers with each skill point invested in the Biotic Skill Group.",
        "bonuses": [
          "+2% Biotic Damage Bonus to Shields"
        ]
      },
      {
        "id": "ckqe1w34k00718xva6jvc2zie",
        "rank": 4,
        "name": "Radius",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/8/87/Containment_4a_-_Radius_Icon.png/revision/latest/scale-to-width-down/70?cb=20181207053215",
        "description": "Increases the radius of all biotic area effects.",
        "bonuses": [
          "+15% Biotic Area of Effect Radius"
        ]
      },
      {
        "id": "ckqe1w34k00728xva2oumchdx",
        "rank": 4,
        "name": "Duration",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/b/b6/Containment_4b_-_Duration_Icon.png/revision/latest/scale-to-width-down/70?cb=20181207053216",
        "description": "Increases the duration of biotic power effects.",
        "bonuses": [
          "+15% Biotic Effect Duration"
        ]
      },
      {
        "id": "ckqe1w34k00738xva2mzx3sfl",
        "rank": 5,
        "name": "Shield Detonation",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/a/ac/Biotic_Ascension_5b_-_Combo_Detonation_Icon.png/revision/latest/scale-to-width-down/70?cb=20181207082900",
        "description": "Increases all combo detonation damage against shields.",
        "bonuses": [
          "+50% All Combo Damage vs. Shields"
        ]
      },
      {
        "id": "ckqe1w34l00748xva8x2obbsv",
        "rank": 5,
        "name": "Concussive Detonation",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/a/ac/Biotic_Ascension_5b_-_Combo_Detonation_Icon.png/revision/latest/scale-to-width-down/70?cb=20181207082900",
        "description": "Biotic combo detonations knock down unarmored, unshielded, normal-sized enemies.",
        "bonuses": []
      },
      {
        "id": "ckqe1w34l00758xva39jw714c",
        "rank": 6,
        "name": "Manifold Duration",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/b/b6/Containment_4b_-_Duration_Icon.png/revision/latest/scale-to-width-down/70?cb=20181207053216",
        "description": "Increases duration of biotic power effects by 10% per affected enemy, up to a maximum of 40%.",
        "bonuses": []
      },
      {
        "id": "ckqe1w34l00768xva522b4lmo",
        "rank": 6,
        "name": "Event Horizon",
        "icon": "https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/d/d4/Biotic_Ascension_2_-_Biotics_Icon.png/revision/latest/scale-to-width-down/70?cb=20181207082859",
        "description": "Increases the radius and force of all biotic area effects.",
        "bonuses": [
          "+20% Biotic Area of Effect Radius",
          "+40% Biotic Area of Effect Force"
        ]
      }
    ]
  }
]

  