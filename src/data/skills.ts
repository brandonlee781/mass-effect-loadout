export interface SkillBonus {
  id: string
  text: string
  attribute: string
  value: number
}
export interface SkillRank {
  id: string
  rank: number
  name: string
  icon: string
  description: string
  bonuses: SkillBonus[]
}
export interface Skill {
  id: string
  name: string
  url: string
  type: 'active' | 'passive'
  stats: string[]
  description: string
  ranks: SkillRank[]
}

export const combatSkills: Skill[] = [
  {
    id: 'ckqgnj3vz001tgyxx4qm460wf',
    name: 'Omni Grenade',
    url: '/wiki/Omni_Grenade',
    type: 'active',
    stats: [
      'Area Damage: 1000',
      'Damage Radius (m): 4',
      'Power Cell (Grenade) Capacity: 1',
    ],
    description:
      "TAP BUTTON: Throws a grenade that causes massive area damage after a 2 sec fuse.\n\nHOLD BUTTON: Shortens the grenade's fuse timer before throwing. The grenade will explode if held too long.\n\nActivation requires one power cell from Omni Grenade's limited power cell supply.\n",
    ranks: [
      {
        id: 'ckqgnj3vw0018gyxxcef21kv7',
        rank: 1,
        name: 'Omni Grenade',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/8/82/Omni_Grenade_1_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203065712',
        description:
          "TAP BUTTON: Throws a grenade that causes massive area damage after a 2 sec fuse.\n\nHOLD BUTTON: Shortens the grenade's fuse timer before throwing. The grenade will explode if held too long.\n\nActivation requires one power cell from Omni Grenade's limited power cell supply.",
        bonuses: [
          {
            id: 'ckqgnj3vw0019gyxxdgl7fk4p',
            text: 'Area Damage: 1000',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj3vw001agyxxgefp2568',
            text: 'Damage Radius (m): 4',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj3vw001bgyxx76le7m9p',
            text: 'Power Cell (Grenade) Capacity: 1',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj3vx001cgyxx1ngq06qb',
        rank: 2,
        name: 'Grenade Capacity',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/3/36/Flak_Cannon_2_-_Power_Cells_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203061153',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj3vx001dgyxx28y59rel',
            text: '+1 Power Cell (Grenade) Capacity',
            value: '1',
            attribute: 'grenadeCapacity',
          },
        ],
      },
      {
        id: 'ckqgnj3vx001egyxx1t1cbw8e',
        rank: 3,
        name: 'Damage',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/e/e1/Concussive_Shot_3_-_Damage_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203025034',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj3vx001fgyxx2mp55sj9',
            text: '+20% Direct Damage',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj3vx001ggyxx94pcepoq',
        rank: 4,
        name: 'Sticky Grenade',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/4/4f/Omni_Grenade_4a_-_Sticky_Grenade_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203065714',
        description:
          'Grenades stick to surfaces and enemies before detonating. Holding the button no longer affects fuse time (and the grenade can no longer explode while held).',
        bonuses: [],
      },
      {
        id: 'ckqgnj3vx001hgyxx5qo1gzj8',
        rank: 4,
        name: 'Frag Grenade',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/6/60/Frag_Grenade_1_Icon.png/revision/latest/scale-to-width-down/70?cb=20181205082313',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj3vx001igyxx8du4bqek',
            text: '+25% Direct Damage',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj3vx001jgyxxdq9i99gg',
            text: '+60% Damage Radius',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj3vy001kgyxx29hg1lgn',
        rank: 5,
        name: 'Grenade Capacity',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/3/36/Flak_Cannon_2_-_Power_Cells_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203061153',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj3vy001lgyxx10jj3imd',
            text: '+2 Power Cell (Grenade) Capacity',
            value: '2',
            attribute: 'grenadeCapacity',
          },
        ],
      },
      {
        id: 'ckqgnj3vy001mgyxxekvy00za',
        rank: 5,
        name: 'Shrapnel',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/8/87/Flak_Cannon_6b_-_Shredder_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203061159',
        description: 'Affected enemies take additional damage over time.',
        bonuses: [
          {
            id: 'ckqgnj3vy001ngyxx38jj67s3',
            text: 'Damage per Second: 100',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj3vy001ogyxx0foh8fx0',
            text: 'Damage Duration (s):5',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj3vy001pgyxx1ukufeyn',
        rank: 6,
        name: 'Anti-Armor',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/9/9e/Blood_Rage_3_-_Armor_Smasher_Icon.png/revision/latest/scale-to-width-down/70?cb=20181205172902',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj3vy001qgyxxez5ufxrp',
            text: '+50% Damage vs. Armor',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj3vy001rgyxxc9b85zk2',
        rank: 6,
        name: 'Anti-Shield',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/6/67/Concussive_Shot_6b_-_Anti-Shield_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203025038',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj3vy001sgyxx4kjy70k3',
            text: '+50% Damage vs. Shields',
            value: 0,
            attribute: '',
          },
        ],
      },
    ],
  },
  {
    id: 'ckqgnj41u003ogyxxcw72hv6t',
    name: 'Concussive Shot',
    url: '/wiki/Concussive_Shot',
    type: 'active',
    stats: ['Damage: 350', 'Force: 250', 'Recharge Time (s): 12'],
    description:
      'Fires a target-seeking high-impact round that knocks down unarmored, unshielded, normal-sized enemies and detonates combo primers.\n',
    ranks: [
      {
        id: 'ckqgnj41s0032gyxx68xycvpp',
        rank: 1,
        name: 'Concussive Shot',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/1/1b/Concussive_Shot_1_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203025032',
        description:
          ' Fires a target-seeking high-impact round that knocks down unarmored, unshielded, normal-sized enemies and detonates combo primers.',
        bonuses: [
          {
            id: 'ckqgnj41s0033gyxx72t77fu7',
            text: 'Damage: 350',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj41s0034gyxx8k1z0uym',
            text: 'Force: 250',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj41s0035gyxxg0jka1df',
            text: 'Recharge Time (s): 12',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj41s0036gyxxdcnq20w2',
        rank: 2,
        name: 'Force',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/1/1a/Concussive_Shot_2_-_Force_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203025033',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj41s0037gyxxebc03ll0',
            text: '+25% Direct Force',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj41t0038gyxx6ci5fc7r',
        rank: 3,
        name: 'Damage',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/e/e1/Concussive_Shot_3_-_Damage_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203025034',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj41t0039gyxxeo862iz4',
            text: '+15% Direct Damage',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj41t003agyxxge180uta',
        rank: 4,
        name: 'Recharge Speed',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/4/4f/Turbocharge_2_-_Recharge_Speed_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203034247',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj41t003bgyxx2ac52my9',
            text: '+30% Recharge Speed',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj41t003cgyxxgj5d5084',
        rank: 4,
        name: 'Repeat Concussion',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/a/a1/Concussive_Shot_4b_-_Repeat_Concussion_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203025035',
        description:
          'Concussive Shot has no recharge time but requires one power cell from a limited power cell supply to activate. The shot also inflicts bonus damage on knocked down or floating enemies.',
        bonuses: [
          {
            id: 'ckqgnj41t003dgyxxhwnfa78x',
            text: 'Power Cell Capacity: 5',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj41t003egyxxg7rc4diy',
            text: 'Damage vs. Knocked Down Enemies: 100%',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj41t003fgyxxhfxh2at0',
        rank: 5,
        name: 'Radius',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/7/7b/Concussive_Shot_5a_-_Radius_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203025036',
        description: 'The shot damages enemies within a radius.',
        bonuses: [
          {
            id: 'ckqgnj41t003ggyxxcc4a5x1j',
            text: 'Radius (m): 2.5',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj41u003hgyxx5e9w70pu',
        rank: 5,
        name: 'Damage & Force',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/e/e1/Concussive_Shot_3_-_Damage_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203025034',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj41u003igyxx0lr2cxw5',
            text: '+25% Direct Damage',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj41u003jgyxx3w6g0hsd',
            text: '+25% Direct Force',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj41u003kgyxxfny5d3bj',
        rank: 6,
        name: 'Anti-Armor',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/9/9e/Blood_Rage_3_-_Armor_Smasher_Icon.png/revision/latest/scale-to-width-down/70?cb=20181205172902',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj41u003lgyxxe4jpg3nn',
            text: '+125% Damage vs. Armor',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj41u003mgyxx97fq49h4',
        rank: 6,
        name: 'Anti-Shield',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/6/67/Concussive_Shot_6b_-_Anti-Shield_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203025038',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj41u003ngyxx3p3tgfcx',
            text: '+100% Damage vs. Shields',
            value: 0,
            attribute: '',
          },
        ],
      },
    ],
  },
  {
    id: 'ckqgnj482005sgyxx02g5hkmg',
    name: 'Barricade',
    url: '/wiki/Barricade',
    type: 'active',
    stats: [
      'Duration (s): 13',
      'Power Cell Capacity: 2',
      'Regeneration Delay Reduction: 40%',
    ],
    description:
      "Deploys a temporary energy barricade that will boost shield regeneration for everyone who takes cover behind it. Upgraded versions provide additional combat bonuses for allies.\n\nActivation requires one power cell from Barricade's limited power cell supply.\n",
    ranks: [
      {
        id: 'ckqgnj47z0059gyxxgwy728hd',
        rank: 1,
        name: 'Barricade',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/e/e3/Barricade_1_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203044418',
        description:
          "Deploys a temporary energy barricade that will boost shield regeneration for everyone who takes cover behind it. Upgraded versions provide additional combat bonuses for allies.\n\nActivation requires one power cell from Barricade's limited power cell supply.",
        bonuses: [
          {
            id: 'ckqgnj480005agyxx43343zoe',
            text: 'Duration (s): 13',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj480005bgyxx2ja09ttu',
            text: 'Power Cell Capacity: 2',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj480005cgyxx886506u5',
            text: 'Regeneration Delay Reduction: 40%',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj480005dgyxxarb62q09',
        rank: 2,
        name: 'Power Cells',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/3/36/Flak_Cannon_2_-_Power_Cells_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203061153',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj480005egyxxgrhb2zz7',
            text: '+1 Power Cell Capacity',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj480005fgyxxe4hf2hat',
        rank: 3,
        name: 'Duration',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/0/08/Barricade_3_-_Duration_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203044419',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj480005ggyxx85gzej3o',
            text: '+25% Duration',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj480005hgyxxadj7acyt',
        rank: 4,
        name: 'Duration',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/0/08/Barricade_3_-_Duration_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203044419',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj480005igyxx4arhethw',
            text: '+35% Duration',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj481005jgyxxfir6hzj7',
        rank: 4,
        name: 'Power Cells',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/3/36/Flak_Cannon_2_-_Power_Cells_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203061153',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj481005kgyxxamcu22hc',
            text: '+1 Power Cell Capacity',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj481005lgyxxezgaf5ta',
        rank: 5,
        name: 'Weapon Feedback',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/3/3e/Barricade_5a_-_Weapon_Feedback_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203044421',
        description:
          'Increases weapon damage and accuracy by 15% for all allies (including the user) behind the barricade.',
        bonuses: [],
      },
      {
        id: 'ckqgnj481005mgyxx8me35xto',
        rank: 5,
        name: 'Power Feedback',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/0/0e/Barricade_5b_-_Power_Feedback_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203044422',
        description:
          'Increases power damage and force by 30% for all allies (including the user) behind the barricade.',
        bonuses: [],
      },
      {
        id: 'ckqgnj481005ngyxx2mpr5g6q',
        rank: 6,
        name: 'Regeneration',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/1/19/Barricade_6a_-_Regeneration_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203044423',
        description:
          'Greatly reduces shield regeneration delay for allies (including the user) behind the barricade.',
        bonuses: [],
      },
      {
        id: 'ckqgnj482005ogyxxe1rb1yeo',
        rank: 6,
        name: 'Electric Defense',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/9/92/Barricade_6b_-_Electric_Defense_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203044424',
        description:
          ' The barricade electrocutes nearby enemies with a chance to stun them. Especially damaging to shields and synthetic foes. Affected enemies are primed for combo detonations.',
        bonuses: [
          {
            id: 'ckqgnj482005pgyxx8heq61r7',
            text: 'Damage per Second: 110',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj482005qgyxxcqbzcxaq',
            text: 'Shield Damage Bonus: 100%',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj482005rgyxxbr7n6hb8',
            text: 'Synthetic Damage Bonus: 15%',
            value: 0,
            attribute: '',
          },
        ],
      },
    ],
  },
  {
    id: 'ckqgnj4dy007sgyxxe7aa8tw6',
    name: 'Turbocharge',
    url: '/wiki/Turbocharge',
    type: 'active',
    stats: [
      'Duration (s): 8',
      'Recharge Time (s): 20',
      '+10% Gun Damage Bonus',
      '+20% Rate of Fire Bonus',
      '+20% Clip Size Bonus',
    ],
    description:
      'Temporarily vents weapon heat via armor to improve thermal clip efficiency and boost weapon firing rates.\n',
    ranks: [
      {
        id: 'ckqgnj4dw0073gyxxd1jw990w',
        rank: 1,
        name: 'Turbocharge',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/9/90/Turbocharge_1_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203034246',
        description:
          'Temporarily vents weapon heat via armor to improve thermal clip efficiency and boost weapon firing rates.',
        bonuses: [
          {
            id: 'ckqgnj4dw0074gyxx8wz963my',
            text: 'Duration (s): 8',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj4dw0075gyxxam2cha2v',
            text: 'Recharge Time (s): 20',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj4dw0076gyxx1qiy721w',
            text: '+10% Gun Damage Bonus',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj4dw0077gyxxgi8g8og6',
            text: '+20% Rate of Fire Bonus',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj4dw0078gyxx1elt5shn',
            text: '+20% Clip Size Bonus',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj4dw0079gyxxbfv39wjj',
        rank: 2,
        name: 'Recharge Speed',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/4/4f/Turbocharge_2_-_Recharge_Speed_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203034247',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj4dw007agyxxewcs3qfn',
            text: '+10% Recharge Speed',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj4dw007bgyxx4scqfbk9',
        rank: 3,
        name: 'Damage',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/e/e1/Concussive_Shot_3_-_Damage_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203025034',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj4dw007cgyxxefhw46i0',
            text: '+10% Gun Damage Bonus',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj4dw007dgyxxgio3cqdf',
        rank: 4,
        name: 'Recharge Speed',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/4/4f/Turbocharge_2_-_Recharge_Speed_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203034247',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj4dw007egyxxhugo9k5y',
            text: '+20% Recharge Speed',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj4dx007fgyxx8bpj4vxs',
        rank: 4,
        name: 'Duration',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/0/08/Barricade_3_-_Duration_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203044419',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj4dx007ggyxx9ovdfnzt',
            text: '+50% Duration',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj4dx007hgyxxhfdobuc3',
        rank: 5,
        name: 'Damage & Force',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/e/e1/Concussive_Shot_3_-_Damage_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203025034',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj4dx007igyxx5cem72hi',
            text: '+15% Gun Damage Bonus',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj4dx007jgyxx65ef1lr0',
            text: '+15% Gun Force Bonus',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj4dx007kgyxx66e90y2f',
        rank: 5,
        name: 'Accuracy & Stability',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/3/3c/Turbocharge_5b_-_Accuracy_%26_Stability_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203034251',
        description:
          'Increases weapon stability and accuracy while Turbocharge is active.',
        bonuses: [
          {
            id: 'ckqgnj4dx007lgyxx4qctc10e',
            text: '+40% Gun Accuracy Bonus',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj4dx007mgyxx7t8t1fab',
            text: '+40% Gun Stability Bonus',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj4dx007ngyxx2zav5477',
        rank: 6,
        name: 'Supercharge',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/1/15/Turbocharge_6a_-_Supercharge_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203034252',
        description:
          'Increases weapon rate of fire and thermal clip size while Turbocharge is active.',
        bonuses: [
          {
            id: 'ckqgnj4dx007ogyxx7xjgd57a',
            text: '+20% Rate of Fire Bonus',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj4dx007pgyxxhtw8gmjg',
            text: '+20% Clip Size Bonus',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj4dy007qgyxxfzih69t8',
        rank: 6,
        name: 'Dump Heat',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/1/1e/Turbocharge_6b_-_Dump_Heat_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203034253',
        description:
          'Vastly increases thermal clip size while Turbocharge is active.',
        bonuses: [
          {
            id: 'ckqgnj4dy007rgyxxf2wpbcol',
            text: '+80% Clip Size Bonus',
            value: 0,
            attribute: '',
          },
        ],
      },
    ],
  },
  {
    id: 'ckqgnj4k800a0gyxx9376csdh',
    name: 'Trip Mine',
    url: '/wiki/Trip_Mine',
    type: 'active',
    stats: [
      'Maximum Damage: 1350',
      'Damage Radius (m): 8',
      'Trigger Radius (m): 0.5',
      'Laser Range (m): 5',
      ' Power Cell Capacity: 2',
    ],
    description:
      "Deploys an explosive mine that triggers when an enemy comes within proximity of or crosses a sensor laser. Enemies suffer more damage the closer they are to the mine.\n\nActivation requires one power cell from Trip Mine's limited power cell supply. The maximum number of active mines equals the current number of maximum power cells.\n",
    ranks: [
      {
        id: 'ckqgnj4k5009agyxxasfa7ufj',
        rank: 1,
        name: 'Trip Mine',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/b/b7/Trip_Mine_1_Icon.png/revision/latest/scale-to-width-down/70?cb=20181204220459',
        description:
          "Deploys an explosive mine that triggers when an enemy comes within proximity of or crosses a sensor laser. Enemies suffer more damage the closer they are to the mine.\n\nActivation requires one power cell from Trip Mine's limited power cell supply. The maximum number of active mines equals the current number of maximum power cells.",
        bonuses: [
          {
            id: 'ckqgnj4k5009bgyxx262ge4tr',
            text: 'Maximum Damage: 1350',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj4k5009cgyxx8fwlhzmz',
            text: 'Damage Radius (m): 8',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj4k5009dgyxx7hnj3yux',
            text: 'Trigger Radius (m): 0.5',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj4k5009egyxx4qqzfmrm',
            text: 'Laser Range (m): 5',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj4k5009fgyxxeah8fo7f',
            text: ' Power Cell Capacity: 2',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj4k6009ggyxxa9zec3ma',
        rank: 2,
        name: 'Power Cells',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/3/36/Flak_Cannon_2_-_Power_Cells_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203061153',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj4k6009hgyxx3habhs3j',
            text: '+1 Power Cell Capacity',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj4k6009igyxx5rym8s1t',
        rank: 3,
        name: 'Damage & Force',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/e/e1/Concussive_Shot_3_-_Damage_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203025034',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj4k6009jgyxxaiw1h8k9',
            text: '+15% Damage',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj4k6009kgyxxauvkec26',
            text: '+15% Force',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj4k6009lgyxx4cvj3vut',
        rank: 4,
        name: 'Sensor Range',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/0/0e/Trip_Mine_4a_-_Sensor_Range_Icon.png/revision/latest/scale-to-width-down/70?cb=20181204220502',
        description:
          'Increases proximity trigger radius and laser sensor distance',
        bonuses: [
          {
            id: 'ckqgnj4k6009mgyxx43uf8ktp',
            text: '+100% Proximity Radius',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj4k6009ngyxxem92cbsd',
            text: '+60% Laser Range (m)',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj4k6009ogyxx6u515c5s',
        rank: 4,
        name: 'Power Cells',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/3/36/Flak_Cannon_2_-_Power_Cells_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203061153',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj4k6009pgyxx9else3bx',
            text: '+1 Power Cell Capacity',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj4k7009qgyxx1br32lmf',
        rank: 5,
        name: 'Damage & Force',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/e/e1/Concussive_Shot_3_-_Damage_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203025034',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj4k7009rgyxx2qzie4wn',
            text: '+30% Damage',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj4k7009sgyxxd3es886k',
            text: '+30% Force',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj4k7009tgyxxbsuy40zg',
        rank: 5,
        name: 'Blast Radius',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/7/7b/Concussive_Shot_5a_-_Radius_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203025036',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj4k7009ugyxxcqiy86am',
            text: '+30% Damage Radius',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj4k7009vgyxxhsmdfbo7',
        rank: 6,
        name: 'Detonator',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/2/27/Trip_Mine_6a_-_Detonator_Icon.png/revision/latest/scale-to-width-down/70?cb=20181204220504',
        description: ' Mines act as combo detonators for all affected enemies.',
        bonuses: [
          {
            id: 'ckqgnj4k7009wgyxxe36heq0u',
            text: '+30% Combo Detonation Damage',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj4k8009xgyxxdzy1ct7m',
        rank: 6,
        name: 'EMP',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/4/4e/Trip_Mine_6b_-_EMP_Icon.png/revision/latest/scale-to-width-down/70?cb=20181204220505',
        description:
          ' Mines deliver an electromagnetic pulse, stunning enemies and causing added damage to shields. Electrified enemies are briefly primed for combo detonations.',
        bonuses: [
          {
            id: 'ckqgnj4k8009ygyxx99q5fszk',
            text: 'Stun Duration (s): 2',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj4k8009zgyxxdpe70p0c',
            text: '+35% Damage vs. Shields',
            value: 0,
            attribute: '',
          },
        ],
      },
    ],
  },
  {
    id: 'ckqgnj4qa00bxgyxx22po24o4',
    name: 'Flak Cannon',
    url: '/wiki/Flak_Cannon',
    type: 'active',
    stats: [
      'Initial Damage: 180',
      'Shrapnel Damage: 75',
      'Power Cell Capacity: 2',
      '-30% Shrapnel Damage vs. Armor',
    ],
    description:
      "Fires krogan-designed shells that burst into shrapnel upon impact. Shrapnel damage is reduced against armored enemies.\n\nActivation requires one power cell from Flak Cannon's limited power cell supply.\n",
    ranks: [
      {
        id: 'ckqgnj4q800b9gyxx6f3kd4py',
        rank: 1,
        name: 'Flak Cannon',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/c/c0/Flak_Cannon_1_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203061152',
        description:
          "Fires krogan-designed shells that burst into shrapnel upon impact. Shrapnel damage is reduced against armored enemies.\n\nActivation requires one power cell from Flak Cannon's limited power cell supply.",
        bonuses: [
          {
            id: 'ckqgnj4q800bagyxx6zzzew8h',
            text: 'Initial Damage: 180',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj4q800bbgyxxdrrqbodl',
            text: 'Shrapnel Damage: 75',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj4q800bcgyxxhv0z65bn',
            text: 'Power Cell Capacity: 2',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj4q800bdgyxx8rfparfp',
            text: '-30% Shrapnel Damage vs. Armor',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj4q800begyxx6sjt8jqk',
        rank: 2,
        name: 'Power Cells',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/3/36/Flak_Cannon_2_-_Power_Cells_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203061153',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj4q800bfgyxxgrpde6pl',
            text: '+2 Power Cell Capacity',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj4q800bggyxx42cyeeg0',
        rank: 3,
        name: 'Damage & Force',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/e/e1/Concussive_Shot_3_-_Damage_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203025034',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj4q800bhgyxxfhq8cu47',
            text: '+25% Area Damage',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj4q800bigyxx5il3ejdm',
            text: '+25% Area Force',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj4q900bjgyxx5fhu5ue8',
        rank: 4,
        name: 'Damage & Force',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/e/e1/Concussive_Shot_3_-_Damage_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203025034',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj4q900bkgyxxes2nfosl',
            text: '+35% Area Damage',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj4q900blgyxx5mzigvwt',
            text: '+35% Area Force',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj4q900bmgyxxav1o0mhc',
        rank: 4,
        name: 'Power Cells',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/3/36/Flak_Cannon_2_-_Power_Cells_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203061153',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj4q900bngyxx5ty56uo9',
            text: '+3 Power Cell Capacity',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj4q900bogyxxdqagf4c6',
        rank: 5,
        name: 'Anti-Armor',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/9/9e/Blood_Rage_3_-_Armor_Smasher_Icon.png/revision/latest/scale-to-width-down/70?cb=20181205172902',
        description:
          'Increases both initial and shrapnel damage against enemy armor.',
        bonuses: [
          {
            id: 'ckqgnj4q900bpgyxxgxz0czqs',
            text: '+50% Damage vs. Armor',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj4q900bqgyxx4s0kdflt',
        rank: 5,
        name: 'Stunning',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/1/10/Avenger_Strike_6a_-_Disrupting_Strike_Icon.png/revision/latest/scale-to-width-down/70?cb=20181207204737',
        description: 'Briefly stuns affected enemies.',
        bonuses: [
          {
            id: 'ckqgnj4q900brgyxxevyohg4q',
            text: 'Stun Duration (s): 2',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj4qa00bsgyxx766437j0',
        rank: 6,
        name: 'Flak',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/d/da/Flak_Cannon_6a_-_Flak_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203061158',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj4qa00btgyxx4mjdh6ti',
            text: '50% more shrapnel explosions.',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj4qa00bugyxxbl3obyau',
        rank: 6,
        name: 'Shredder',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/8/87/Flak_Cannon_6b_-_Shredder_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203061159',
        description: 'Shrapnel inflicts additional damage over time.',
        bonuses: [
          {
            id: 'ckqgnj4qa00bvgyxx2oi89uoo',
            text: 'Damage per Second: 100',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj4qa00bwgyxxcjbd3sym',
            text: 'Damage Duration (s): 8',
            value: 0,
            attribute: '',
          },
        ],
      },
    ],
  },
  {
    id: 'ckqgnj4w900dqgyxx42ts57se',
    name: 'Pistols',
    url: '/wiki/Pistols',
    type: 'passive',
    stats: ['+2% Pistol Damage'],
    description:
      'Improves sidearm training for pistols (including submachine guns). Pistols are designed largely for short to mid-range combat and shooting on the move.\n',
    ranks: [
      {
        id: 'ckqgnj4w700d8gyxx32142j2b',
        rank: 1,
        name: 'Pistols',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/3/31/Pistols_1_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203182330',
        description:
          'Increases pistol damage with each skill point invested in the Combat Skill Group.',
        bonuses: [
          {
            id: 'ckqgnj4w700d9gyxx97ge6x0e',
            text: '+2% Pistol Damage',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj4w800dagyxxa4k3fxrx',
        rank: 2,
        name: 'Accuracy',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/c/c6/Pistols_2_-_Accuracy_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203182331',
        description:
          'Increases pistol accuracy with each skill point invested in the Combat Skill Group.',
        bonuses: [
          {
            id: 'ckqgnj4w800dbgyxxbnn5aadq',
            text: '+2% Pistol Accuracy',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj4w800dcgyxxfdnldvsn',
        rank: 3,
        name: 'Mobility',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/f/f9/Pistols_3_-_Mobility_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203182332',
        description:
          'Reduces the accuracy penalty when firing pistols while moving with each skill point invested in the Combat Skill Group.',
        bonuses: [
          {
            id: 'ckqgnj4w800ddgyxxg5xsdpyc',
            text: '+5% Movement Pistol Accuracy',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj4w800degyxxg4es58lz',
        rank: 4,
        name: 'Weight',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/3/36/APEX_Training_3_-_Weapons_And_Melee_Icon.png/revision/latest/scale-to-width-down/70?cb=20181210075054',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj4w800dfgyxxe7wqflyt',
            text: '-30% Pistol Weight',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj4w800dggyxx3yraa016',
        rank: 4,
        name: 'Spare Ammo',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/2/29/Assault_Rifles_4b_-_Spare_Ammo_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203184831',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj4w800dhgyxxhqt27jce',
            text: '+20% Pistol Spare Ammo',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj4w800digyxxe7126byz',
        rank: 5,
        name: 'Reload',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/9/90/Assault_Rifles_5a_-_Reload_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203184832',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj4w800djgyxx6txaag39',
            text: '+15% Pistol Reload Speed',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj4w900dkgyxxcbe00ih2',
        rank: 5,
        name: 'Clip Size',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/f/f4/Assault_Rifles_5b_-_Clip_Size_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203184832',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj4w900dlgyxx029f43f5',
            text: '+20% Pistol Clip Size',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj4w900dmgyxxby9o6m28',
        rank: 6,
        name: 'Unassisted Targeting',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/f/ff/Pistols_6a_-_Unassisted_Targeting_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203182336',
        description:
          'Increases pistol damage, and also increases accuracy and stability by 20% when firing without using the aim function.',
        bonuses: [
          {
            id: 'ckqgnj4w900dngyxx8dl1aabn',
            text: '+20% Pistol Damage',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj4w900dogyxxc4pmd4np',
        rank: 6,
        name: 'Augmented Targeting Assistance',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/d/df/Pistols_6b_-_Augmented_Targeting_Assistance_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203182337',
        description:
          'Increases pistol damage, and also increases accuracy and weak point bonus damage by 20% when using the aim function to shoot.',
        bonuses: [
          {
            id: 'ckqgnj4w900dpgyxx70wd09gj',
            text: '+20% Pistol Damage',
            value: 0,
            attribute: '',
          },
        ],
      },
    ],
  },
  {
    id: 'ckqgnj52c00fmgyxx4u4r77bp',
    name: 'Assault Rifles',
    url: '/wiki/Assault_Rifles',
    type: 'passive',
    stats: ['+2% Assault Rifle Damage'],
    description:
      'Advanced training improves facility with assault rifles for dedicated combatants. Assault rifles offer moderate accuracy, range, and stopping power.\n',
    ranks: [
      {
        id: 'ckqgnj52a00f3gyxx9zdlatrm',
        rank: 1,
        name: 'Assault Rifles',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/7/77/Assault_Rifles_1_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203184828',
        description:
          'Increases assault rifle damage with each skill point invested in the Combat Skill Group.',
        bonuses: [
          {
            id: 'ckqgnj52a00f4gyxx5qkb36gy',
            text: '+2% Assault Rifle Damage',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj52a00f5gyxxcs6m8q0h',
        rank: 2,
        name: 'Accuracy',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/c/c6/Pistols_2_-_Accuracy_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203182331',
        description:
          'Increases assault rifle accuracy with each skill point invested in the Combat Skill Group.',
        bonuses: [
          {
            id: 'ckqgnj52a00f6gyxx1xg7hnxu',
            text: '+2% Assault Rifle Accuracy',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj52a00f7gyxxd7cmcono',
        rank: 3,
        name: 'Stability',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/9/90/Assault_Rifles_3_-_Stability_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203184829',
        description:
          'Increases assault rifle stability, reducing recoil with each skill point invested in the Combat Skill Group.',
        bonuses: [
          {
            id: 'ckqgnj52a00f8gyxx3yk870oe',
            text: '+2% Assault Rifle Stability',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj52a00f9gyxx3ryoh2pn',
        rank: 4,
        name: 'Weight',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/3/36/APEX_Training_3_-_Weapons_And_Melee_Icon.png/revision/latest/scale-to-width-down/70?cb=20181210075054',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj52a00fagyxxbc4849g5',
            text: '-25% Assault Rifle Weight',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj52b00fbgyxx17qn7uq0',
        rank: 4,
        name: 'Spare Ammo',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/2/29/Assault_Rifles_4b_-_Spare_Ammo_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203184831',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj52b00fcgyxx3yx2fsb8',
            text: '+15% Assault Rifle Spare Ammo',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj52b00fdgyxx1hewa97w',
        rank: 5,
        name: 'Reload',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/9/90/Assault_Rifles_5a_-_Reload_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203184832',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj52b00fegyxx8l347vok',
            text: '+15% Assault Rifle Reload Speed',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj52b00ffgyxxcztg55lh',
        rank: 5,
        name: 'Clip Size',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/f/f4/Assault_Rifles_5b_-_Clip_Size_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203184832',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj52b00fggyxx82uk9cqy',
            text: '+25% Assault Rifle Clip Size',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj52b00fhgyxx401ubfnt',
        rank: 6,
        name: 'Shatter Defenses',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/b/bf/Assault_Rifles_6a_-_Shatter_Defenses_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203184833',
        description:
          'Enemies hit by assault rifle fire take increased damage from all sources by 2% per assault rifle hit, to a maximum of 24%. Resets when the rifle user has not hit the target for 2 sec.',
        bonuses: [],
      },
      {
        id: 'ckqgnj52b00figyxx1kssb9ov',
        rank: 6,
        name: 'Critical Hits',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/c/c5/Assault_Rifles_6b_-_Critical_Hits_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203184833',
        description:
          'Increases headshot and other weak point damage from assault rifles, in addition to improved aiming.',
        bonuses: [
          {
            id: 'ckqgnj52b00fjgyxx8jdjezmg',
            text: '+25% Assault Rifle Headshot/Weak Point Bonus',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj52c00fkgyxxcx15a2c1',
            text: '+15% Assault Rifle Accuracy',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj52c00flgyxx9nel1fkf',
            text: '+15% Assault Rifle Stability',
            value: 0,
            attribute: '',
          },
        ],
      },
    ],
  },
  {
    id: 'ckqgnj58400hkgyxxfbjs6yt7',
    name: 'Shotguns',
    url: '/wiki/Shotguns',
    type: 'passive',
    stats: ['+2% Shotgun Damage', '+2% Shotgun Force'],
    description:
      'Specialized training for close-quarters combatants. Shotguns deal high damage at short range at the expense of poor accuracy at long distances.\n',
    ranks: [
      {
        id: 'ckqgnj58200gzgyxxdg2obh50',
        rank: 1,
        name: 'Shotguns',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/0/01/Asari_Commando_3_-_Precision_Icon.png/revision/latest/scale-to-width-down/70?cb=20181205085701',
        description:
          'Increases shotgun damage and force with each skill point invested in the Combat Skill Group.',
        bonuses: [
          {
            id: 'ckqgnj58200h0gyxx6w5bf3sm',
            text: '+2% Shotgun Damage',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj58200h1gyxxhoo90m14',
            text: '+2% Shotgun Force',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj58200h2gyxxcd81fwqa',
        rank: 2,
        name: 'Stability',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/9/90/Assault_Rifles_3_-_Stability_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203184829',
        description:
          'Decreases shotgun recoil and climb with each skill point invested in the Combat Skill Group.',
        bonuses: [
          {
            id: 'ckqgnj58200h3gyxx8y1a7y84',
            text: '+5% Shotgun Stability',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj58200h4gyxxamky6svd',
        rank: 3,
        name: 'Precision',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/c/c6/Pistols_2_-_Accuracy_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203182331',
        description:
          'Increases shotgun accuracy and reduces spread with each skill point invested in the Combat Skill Group.',
        bonuses: [
          {
            id: 'ckqgnj58200h5gyxxe3pq40i4',
            text: '+2% Shotgun Accuracy',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj58200h6gyxx1qarbx81',
        rank: 4,
        name: 'Weight',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/3/36/APEX_Training_3_-_Weapons_And_Melee_Icon.png/revision/latest/scale-to-width-down/70?cb=20181210075054',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj58200h7gyxx69flekmm',
            text: '-25% Shotgun Weight',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj58300h8gyxxcebg9sme',
        rank: 4,
        name: 'Spare Ammo',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/2/29/Assault_Rifles_4b_-_Spare_Ammo_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203184831',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj58300h9gyxx4j7c6o9e',
            text: '+15% Shotgun Spare Ammo',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj58300hagyxx0zawd3vy',
        rank: 5,
        name: 'Reload',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/9/90/Assault_Rifles_5a_-_Reload_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203184832',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj58300hbgyxx3gv5e5aa',
            text: '+15% Shotgun Reload Speed',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj58300hcgyxx9rubc22q',
        rank: 5,
        name: 'Clip Size',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/f/f4/Assault_Rifles_5b_-_Clip_Size_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203184832',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj58300hdgyxx5byydau8',
            text: '+25% Shotgun Clip Size',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj58300hegyxxdxlcgyb4',
        rank: 6,
        name: 'Damage & Force',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/a/a0/Krogan_Warrior_4a_-_Explosive_Icon.png/revision/latest/scale-to-width-down/70?cb=20181205181555',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj58300hfgyxxe5k0457v',
            text: '+20% Shotgun Damage',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj58300hggyxxe1n619i3',
            text: '+30% Shotgun Force',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj58400hhgyxxcy4b7lt0',
        rank: 6,
        name: 'Melee Synergy',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/4/47/Shotguns_6b_-_Melee_Synergy_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203001749',
        description:
          'Melee hits boost shotgun damage for 3 sec. Shotgun hits boost melee damage for 3 sec.',
        bonuses: [
          {
            id: 'ckqgnj58400higyxx1qkc40p7',
            text: 'Shotgun Damage Boost: 25%',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj58400hjgyxxd0sl4iya',
            text: 'Melee Damage Boost: 40%',
            value: 0,
            attribute: '',
          },
        ],
      },
    ],
  },
  {
    id: 'ckqgnj5dz00jmgyxx0swo0h2y',
    name: 'Sniper Rifles',
    url: '/wiki/Sniper_Rifles',
    type: 'passive',
    stats: ['+2% Sniper Rifle Damage'],
    description:
      'Improves specialist sniper training for long-range combatants. Sniper rifles deal high damage at a distance at the cost of slow firing rates and capacities.\n',
    ranks: [
      {
        id: 'ckqgnj5dx00j1gyxxhvapech7',
        rank: 1,
        name: 'Sniper Rifles',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/1/10/Sniper_Rifles_1_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203204704',
        description:
          'Increases sniper rifle damage with each skill point invested in the Combat Skill Group.',
        bonuses: [
          {
            id: 'ckqgnj5dx00j2gyxxdghmctpd',
            text: '+2% Sniper Rifle Damage',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj5dx00j3gyxx9ekw51fu',
        rank: 2,
        name: 'Accuracy',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/c/c6/Pistols_2_-_Accuracy_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203182331',
        description:
          'Increases sniper rifle accuracy with each skill point invested in the Combat Skill Group.',
        bonuses: [
          {
            id: 'ckqgnj5dx00j4gyxx1vsi2unf',
            text: '+2% Sniper Rifle Accuracy',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj5dx00j5gyxxasqj3mfr',
        rank: 3,
        name: 'Headshots',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/e/e2/Sniper_Rifles_3_-_Headshots_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203204707',
        description:
          'Increases headshot and other weak point damage from sniper rifles with each skill point invested in the Combat Skill Group.',
        bonuses: [
          {
            id: 'ckqgnj5dx00j6gyxxhcr2eirx',
            text: '+2% Sniper Rifle Headshot/Weak Point Bonus',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj5dy00j7gyxx4nsw2oqp',
        rank: 4,
        name: 'Weight',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/3/36/APEX_Training_3_-_Weapons_And_Melee_Icon.png/revision/latest/scale-to-width-down/70?cb=20181210075054',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj5dy00j8gyxxhntt7fgh',
            text: '-25% Sniper Rifle Weight',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj5dy00j9gyxx4zv15xzr',
        rank: 4,
        name: 'Spare Ammo',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/2/29/Assault_Rifles_4b_-_Spare_Ammo_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203184831',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj5dy00jagyxx66kzd147',
            text: '+15% Sniper Rifle Spare Ammo',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj5dy00jbgyxxgf4ag379',
        rank: 5,
        name: 'Reload',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/9/90/Assault_Rifles_5a_-_Reload_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203184832',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj5dy00jcgyxx4oxe815i',
            text: '+15% Sniper Rifle Reload Speed',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj5dy00jdgyxx3kvy97sy',
        rank: 5,
        name: 'Clip Size',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/f/f4/Assault_Rifles_5b_-_Clip_Size_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203184832',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj5dy00jegyxx6jr51421',
            text: '+25% Sniper Rifle Clip Size',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj5dz00jfgyxxdl970ckl',
        rank: 6,
        name: 'Damage & Force',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/a/a0/Krogan_Warrior_4a_-_Explosive_Icon.png/revision/latest/scale-to-width-down/70?cb=20181205181555',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj5dz00jggyxxdyr7f6f1',
            text: '+20% Sniper Rifle Damage',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj5dz00jhgyxx8zap8tfy',
            text: '+20% Sniper Rifle Force',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj5dz00jigyxx089pblxt',
        rank: 6,
        name: 'Killing Spree',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/5/53/Sniper_Rifles_6b_-_Killing_Spree_Icon.png/revision/latest/scale-to-width-down/70?cb=20181203204713',
        description:
          'Improves rate of fire, stability, and reload time for 5 sec after killing an enemy with a sniper rifle.',
        bonuses: [
          {
            id: 'ckqgnj5dz00jjgyxxdweublvr',
            text: 'On-Kill Rate of Fire Boost: 30%',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj5dz00jkgyxx1qa0bkfo',
            text: 'On-Kill Stability Boost: 40%',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj5dz00jlgyxx3ub14ayy',
            text: 'On-Kill Reload Speed Boost: 25%',
            value: 0,
            attribute: '',
          },
        ],
      },
    ],
  },
  {
    id: 'ckqgnj5ka00ligyxxg8aa6gi9',
    name: 'Combat Fitness',
    url: '/wiki/Combat_Fitness',
    type: 'passive',
    stats: ['+2% Max Health'],
    description:
      "Intense physical and survival training designed to improve a combatant's stamina and versatility in battle.\n",
    ranks: [
      {
        id: 'ckqgnj5k800ktgyxx5t54fvv6',
        rank: 1,
        name: 'Health',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/9/97/Combat_Fitness_1_-_Health_Icon.png/revision/latest/scale-to-width-down/70?cb=20181204071450',
        description:
          'Increases maximum health with each skill point invested in the Combat Skill Group.',
        bonuses: [
          {
            id: 'ckqgnj5k800kugyxx536ta0jz',
            text: '+2% Max Health',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj5k800kvgyxx1pq0fa4t',
        rank: 2,
        name: 'Shields',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/2/29/Combat_Fitness_2_-_Shields_Icon.png/revision/latest/scale-to-width-down/70?cb=20181204071452',
        description:
          'Increases maximum shield rating with each skill point invested in the Combat Skill Group.',
        bonuses: [
          {
            id: 'ckqgnj5k800kwgyxx9pkmbu2u',
            text: '+2% Max Shields',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj5k800kxgyxxcty45qqy',
        rank: 3,
        name: 'Extra Holster',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/3/33/Combat_Fitness_3_-_Extra_Holster_Icon.png/revision/latest/scale-to-width-down/70?cb=20181204071453',
        description:
          'Up to three weapons can be equipped at once and carrying capacity is increased.',
        bonuses: [
          {
            id: 'ckqgnj5k800kygyxxdzrn9s18',
            text: '+1 Weapon Loadout Size',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj5k800kzgyxxbj0r1grs',
            text: '+25% Weapon Weight Capacity',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj5k800l0gyxxaeewbfse',
        rank: 4,
        name: 'Consumables',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/3/3f/Combat_Fitness_4a_-_Consumables_Icon.png/revision/latest/scale-to-width-down/70?cb=20181204071454',
        description:
          'Improves the effectiveness of all consumables (such as overdrive packs and shield capacitors).',
        bonuses: [
          {
            id: 'ckqgnj5k800l1gyxx311vhtz9',
            text: '+30% Consumable Effectiveness',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj5k900l2gyxx4xjbho1w',
        rank: 4,
        name: 'Regeneration',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/4/4b/Combat_Fitness_4b_-_Regeneration_Icon.png/revision/latest/scale-to-width-down/70?cb=20181204071456',
        description: 'Improves health and shield regeneration rates.',
        bonuses: [
          {
            id: 'ckqgnj5k900l3gyxx08o17okv',
            text: '+20% Health Regeneration Cap',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj5k900l4gyxxf62201lk',
            text: '+50% Health Regeneration',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj5k900l5gyxxf63khbq7',
            text: '+20% Shield Regeneration',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj5k900l6gyxxdbe3b715',
        rank: 5,
        name: 'Extra Holster',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/3/33/Combat_Fitness_3_-_Extra_Holster_Icon.png/revision/latest/scale-to-width-down/70?cb=20181204071453',
        description:
          'Up to four weapons can be equipped at once and carrying capacity is increased.',
        bonuses: [
          {
            id: 'ckqgnj5k900l7gyxxfwxa6ctx',
            text: '+1 Weapon Loadout Size',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj5k900l8gyxxb75p2q65',
            text: '+25% Weapon Weight Capacity',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj5k900l9gyxxb7j4935x',
        rank: 5,
        name: 'Heavy Lifting',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/9/9d/Combat_Fitness_5b_-_Heavy_Lifting_Icon.png/revision/latest/scale-to-width-down/70?cb=20181204071459',
        description:
          'Improves thermal clip size, and thermal clip and power cell carrying capacity.',
        bonuses: [
          {
            id: 'ckqgnj5k900lagyxx9kui3acx',
            text: '+20% Weapon Clip Size',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj5k900lbgyxxfy2hajo1',
            text: '+25% Weapon Spare Ammo',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj5k900lcgyxxdxzq00zw',
            text: '+1 to all Combat Power Cell Capacities',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj5ka00ldgyxx5zea3n5n',
        rank: 6,
        name: 'Hold the Line',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/4/45/Combat_Fitness_6a_-_Hold_The_Line_Icon.png/revision/latest/scale-to-width-down/70?cb=20181204071459',
        description:
          'Dramatically increases Damage resistance when below 30% health.',
        bonuses: [
          {
            id: 'ckqgnj5ka00legyxxa1kn8v01',
            text: 'Low Health Damage Resistance: 200',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj5ka00lfgyxxcxcr6rag',
        rank: 6,
        name: 'In the Trenches',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/6/60/Combat_Fitness_5a_-_Defensive_Positioning_Icon.png/revision/latest/scale-to-width-down/70?cb=20181204071456',
        description:
          'Improves Damage Resistance and reduces Shield Regeneration Delay while in cover.',
        bonuses: [
          {
            id: 'ckqgnj5ka00lggyxx4b3y7bvj',
            text: 'Regen Delay Reduction In Cover: 50%',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj5ka00lhgyxx2xt874tl',
            text: 'Damage Resistance in Cover: 100',
            value: 0,
            attribute: '',
          },
        ],
      },
    ],
  },
  {
    id: 'ckqgnj5q600n9gyxx736l1hk0',
    name: 'Combat Tools',
    url: '/wiki/Combat_Tools',
    type: 'passive',
    stats: ['+2% Combat Power Damage'],
    description:
      'Specialized training that allows the user to expertly wield jump-jets and melee weapons in combat.\n',
    ranks: [
      {
        id: 'ckqgnj5q400mlgyxxcy1w3qmx',
        rank: 1,
        name: 'Power Damage',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/f/fe/Combat_Tools_1_-_Power_Damage_Icon.png/revision/latest/scale-to-width-down/70?cb=20181202235114',
        description:
          'Increases combat power damage with each skill point invested in the Combat Skill Group.',
        bonuses: [
          {
            id: 'ckqgnj5q400mmgyxx9goug959',
            text: '+2% Combat Power Damage',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj5q400mngyxx11jse1bm',
        rank: 2,
        name: 'Melee',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/a/a3/Combat_Fitness_2_-_Melee_Icon.png/revision/latest/scale-to-width-down/70?cb=20181204071451',
        description:
          'Increases melee damage with each skill point invested in the Combat Skill Group.',
        bonuses: [
          {
            id: 'ckqgnj5q400mogyxx92nb1dww',
            text: '+2% Melee Damage',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj5q400mpgyxxh8jjgmwn',
        rank: 3,
        name: 'Detonators',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/1/1d/Combat_Tools_3_-_Detonators_Icon.png/revision/latest/scale-to-width-down/70?cb=20181202235116',
        description:
          'Increases combo detonation damage from combat detonators with each skill point invested in the Combat Skill Group.',
        bonuses: [
          {
            id: 'ckqgnj5q400mqgyxxchudcipq',
            text: '+2% Combat Detonator Damage Bonus',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj5q500mrgyxx7digdyhb',
        rank: 4,
        name: 'Hover',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/a/a7/Aerial_Assault_4a_-_Hover_Icon.png/revision/latest/scale-to-width-down/70?cb=20181211000245',
        description: 'Improves hover duration and gun accuracy while hovering.',
        bonuses: [
          {
            id: 'ckqgnj5q500msgyxxelds7oad',
            text: '+50% Hover Duration',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj5q500mtgyxxgttra1a6',
            text: '+25% Weapon Accuracy While Airborne',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj5q500mugyxxhulx5sej',
        rank: 4,
        name: 'Evasion',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/5/58/Combat_Fitness_5b_-_Aerial_Evasion_Icon.png/revision/latest/scale-to-width-down/70?cb=20181204071458',
        description: 'Reduces incoming damage while evading.',
        bonuses: [
          {
            id: 'ckqgnj5q500mvgyxx15hv18w6',
            text: '+100 Damage Resistance While Evading',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj5q500mwgyxx4qkhfwhy',
        rank: 5,
        name: 'Aerial Melee',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/d/d1/Aerial_Assault_5b_-_Dive_Bomb_Icon.png/revision/latest/scale-to-width-down/70?cb=20181211000218',
        description: 'Improves melee damage and radius while jumping.',
        bonuses: [
          {
            id: 'ckqgnj5q500mxgyxx1jeo2wz0',
            text: '+20% Jump Melee Damage',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj5q500mygyxx8readd8b',
            text: '+40% Jump Melee Area of Effect Radius',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj5q500mzgyxxe6x4hudn',
        rank: 5,
        name: 'Detonators',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/1/1d/Combat_Tools_3_-_Detonators_Icon.png/revision/latest/scale-to-width-down/70?cb=20181202235116',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj5q500n0gyxx12tl3l58',
            text: '+30% Combat Detonator Damage Bonus',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj5q600n1gyxxaxbmhbzz',
        rank: 6,
        name: 'Aerial Combat',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/0/05/APEX_Training_5b_-_Special_Combat_Training_Icon.png/revision/latest/scale-to-width-down/70?cb=20181210075056',
        description:
          'Reduces incoming damage while hovering. Improves hover duration and gun accuracy while hovering.',
        bonuses: [
          {
            id: 'ckqgnj5q600n2gyxx3ma16sr4',
            text: '+30 Damage Resistance While Airborne',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj5q600n3gyxx7z409fwp',
            text: '+100% Hover Duration',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj5q600n4gyxx5pb018d7',
            text: '+40% Weapon Accuracy While Airborne',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj5q600n5gyxxbk5r0wvm',
        rank: 6,
        name: 'Martial Arts',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/a/a6/Aerial_Assault_6b_-_Close-Quarters_Momentum_Icon.png/revision/latest/scale-to-width-down/70?cb=20181211000220',
        description:
          'Improved melee damage with each melee hit or melee kill. Ends after 20 seconds have passed without a melee kill.',
        bonuses: [
          {
            id: 'ckqgnj5q600n6gyxx7kx144ei',
            text: 'Melee Bonus Per Hit: 5%',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj5q600n7gyxx4q9w4g0q',
            text: 'Melee Bonus Per Kill: 20%',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj5q600n8gyxxfny4hudk',
            text: 'Max Melee Bonus: 65%',
            value: 0,
            attribute: '',
          },
        ],
      },
    ],
  },
]

export const techSkills: Skill[] = [
  {
    id: 'ckqgnj3sc000ngyxxbjnw5mz3',
    name: 'Overload',
    url: '/wiki/Overload',
    type: 'passive',
    stats: [
      'Initial Damage (Uncharged): 150',
      'Initial Damage (Charged): 200',
      'Chain Damage: 100',
      'Shield Damage Bonus: 125%',
      'Synthetic Damage Bonus: 30%',
      'Recharge Time (s): 15',
    ],
    description:
      'TAP BUTTON: Unleashes an electrostatic discharge upon a target. High damage to shields and synthetic enemies. Detonates combo primers.\n\nHOLD BUTTON: Charges Overload, causing it to "chain" to two additional targets.\n',
    ranks: [
      {
        id: 'ckqgnj3s80000gyxx0h6mgzkk',
        rank: 1,
        name: 'Overload',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/b/bc/Overload_1_Icon.png/revision/latest/scale-to-width-down/70?cb=20181202201845',
        description:
          ' TAP BUTTON: Unleashes an electrostatic discharge upon a target. High damage to shields and synthetic enemies. Detonates combo primers.\n\nHOLD BUTTON: Charges Overload, causing it to "chain" to two additional targets.',
        bonuses: [
          {
            id: 'ckqgnj3s90001gyxx6chhhtsx',
            text: 'Initial Damage (Uncharged): 150',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj3s90002gyxxcswmbxml',
            text: 'Initial Damage (Charged): 200',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj3s90003gyxx4j3i9qs1',
            text: 'Chain Damage: 100',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj3s90004gyxx7xb10ig2',
            text: 'Shield Damage Bonus: 125%',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj3s90005gyxxeobe4etd',
            text: 'Synthetic Damage Bonus: 30%',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj3s90006gyxx32nkhzzg',
            text: 'Recharge Time (s): 15',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj3s90007gyxx34a6coei',
        rank: 2,
        name: 'Recharge Speed',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/c/c4/Assault_Turret_4b_-_Recharge_Speed_Icon.png/revision/latest/scale-to-width-down/70?cb=20181208072710',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj3s90008gyxx8gkl3gdu',
            text: '+10% Recharge Speed',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj3sa0009gyxx2c1gc8qw',
        rank: 3,
        name: 'Damage',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/4/4e/Assault_Turret_3_-_Damage_Icon.png/revision/latest/scale-to-width-down/70?cb=20181208072708',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj3sa000agyxx80yuguos',
            text: '+15% All Damage',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj3sa000bgyxxh2g1a974',
        rank: 4,
        name: 'Damage',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/4/4e/Assault_Turret_3_-_Damage_Icon.png/revision/latest/scale-to-width-down/70?cb=20181208072708',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj3sa000cgyxx0wz3cpu7',
            text: '+25% All Damage',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj3sb000dgyxx0rpw2sca',
        rank: 4,
        name: 'Recharge Speed',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/c/c4/Assault_Turret_4b_-_Recharge_Speed_Icon.png/revision/latest/scale-to-width-down/70?cb=20181208072710',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj3sb000egyxx26xeehdk',
            text: '+25% Recharge Speed',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj3sb000fgyxx60sdgc3j',
        rank: 5,
        name: 'Charged Overload',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/f/f5/Overload_5a_-_Charged_Overload_Icon.png/revision/latest/scale-to-width-down/70?cb=20181202201849',
        description: 'Chains to one additional target when charged.',
        bonuses: [],
      },
      {
        id: 'ckqgnj3sb000ggyxx2ne38b43',
        rank: 5,
        name: 'Anti-Shield',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/2/26/Overload_5b_-_Anti-Shield_Icon.png/revision/latest/scale-to-width-down/70?cb=20181202201849',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj3sb000hgyxxhqvdcxry',
            text: '+60% Damage vs. Shields',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj3sc000igyxx7e102c2a',
        rank: 6,
        name: 'Maximum Charge',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/f/f5/Overload_5a_-_Charged_Overload_Icon.png/revision/latest/scale-to-width-down/70?cb=20181202201849',
        description:
          'When charged, chains to an additional target and deals increased damage to chained enemies.',
        bonuses: [
          {
            id: 'ckqgnj3sc000jgyxxh01qc2on',
            text: '+30% All Damage',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj3sc000kgyxx4cohfk9k',
        rank: 6,
        name: 'EMP',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/3/3e/Overload_6b_-_EMP_Icon.png/revision/latest/scale-to-width-down/70?cb=20181202201851',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj3sc000lgyxxfaoxe9cq',
            text: '+60% Damage vs. Shields',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj3sc000mgyxx22q1g21d',
            text: '+15% Damage vs. Synthetics',
            value: 0,
            attribute: '',
          },
        ],
      },
    ],
  },
  {
    id: 'ckqgnj3y9002egyxx77f3cpku',
    name: 'Incinerate',
    url: '/wiki/Incinerate',
    type: 'passive',
    stats: [
      'Initial Damage: 120',
      'Damage per Second: 50',
      'Burning Duration (s): 6',
      'Armor Damage Bonus: 60%',
      'Recharge Time (s): 12',
    ],
    description:
      'Fires a plasma projectile that does bonus damage to armor and inflicts ongoing burning damage to unshielded foes. Burning enemies are primed for combo detonations.\n',
    ranks: [
      {
        id: 'ckqgnj3y6001ugyxx9kyy5mpz',
        rank: 1,
        name: 'Incinerate',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/4/48/Incinerate_1_Icon.png/revision/latest/scale-to-width-down/70?cb=20181208202316',
        description:
          ' Fires a plasma projectile that does bonus damage to armor and inflicts ongoing burning damage to unshielded foes. Burning enemies are primed for combo detonations.',
        bonuses: [
          {
            id: 'ckqgnj3y7001vgyxx2gv2cdb1',
            text: 'Initial Damage: 120',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj3y7001wgyxxd57xccfj',
            text: 'Damage per Second: 50',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj3y7001xgyxx0cdu8mts',
            text: 'Burning Duration (s): 6',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj3y7001ygyxx281ggrqs',
            text: 'Armor Damage Bonus: 60%',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj3y7001zgyxxh3ehct0d',
            text: 'Recharge Time (s): 12',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj3y70020gyxx4g3q7oi7',
        rank: 2,
        name: 'Recharge Speed',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/c/c4/Assault_Turret_4b_-_Recharge_Speed_Icon.png/revision/latest/scale-to-width-down/70?cb=20181208072710',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj3y70021gyxxaq4jbm35',
            text: '+15% Recharge Speed',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj3y70022gyxx6uh81lsz',
        rank: 3,
        name: 'Damage',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/4/4e/Assault_Turret_3_-_Damage_Icon.png/revision/latest/scale-to-width-down/70?cb=20181208072708',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj3y70023gyxx2vqu876d',
            text: '+25% All Damage',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj3y70024gyxx799m7t8r',
        rank: 4,
        name: 'Radius',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/5/5b/Cryo_Beam_5b_-_Radius_Icon.png/revision/latest/scale-to-width-down/70?cb=20181208080709',
        description: 'The projectile affects all enemies in a 2 m radius.',
        bonuses: [],
      },
      {
        id: 'ckqgnj3y80025gyxx2ocy6diu',
        rank: 4,
        name: 'Burning',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/c/ce/Incinerate_4b_-_Burning_Icon.png/revision/latest/scale-to-width-down/70?cb=20181208202324',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj3y80026gyxxazpl90rx',
            text: '+30% Damage Over Time',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj3y80027gyxxacw26s7y',
            text: '+50% Duration',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj3y80028gyxx0l7vcjfw',
        rank: 5,
        name: 'Impact',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/4/4e/Assault_Turret_3_-_Damage_Icon.png/revision/latest/scale-to-width-down/70?cb=20181208072708',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj3y80029gyxxakij8w0t',
            text: '+30% Initial Damage',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj3y8002agyxxczx2885a',
        rank: 5,
        name: 'Anti-Armor',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/9/9e/Incinerate_5b_-_Anti-Armor_Icon.png/revision/latest/scale-to-width-down/70?cb=20181208202328',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj3y8002bgyxx6xv87y99',
            text: '+50% Damage vs. Armor',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj3y9002cgyxx82un3cqk',
        rank: 6,
        name: 'Detonator',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/5/5f/Incinerate_6a_-_Detonator_Icon.png/revision/latest/scale-to-width-down/70?cb=20181208202330',
        description:
          " Incinerate's initial attack now triggers combo detonations.",
        bonuses: [],
      },
      {
        id: 'ckqgnj3y9002dgyxxeubyfth1',
        rank: 6,
        name: 'Double Incinerate',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/6/61/Incinerate_6b_-_Double_Incinerate_Icon.png/revision/latest/scale-to-width-down/70?cb=20181208202331',
        description:
          'Launches two projectiles (instead of one) that seek separate targets.',
        bonuses: [],
      },
    ],
  },
  {
    id: 'ckqgnj44k004ggyxxd6lja3b7',
    name: 'Assault Turret',
    url: '/wiki/Assault_Turret',
    type: 'passive',
    stats: [
      'Turret Base Health: 400',
      'Damage Per Shot: 23',
      'Recharge Time: 24',
      'Area Damage When Destroyed: 340',
    ],
    description:
      'Deploys an automated assault turret that counts as a tech construct.\n\nTAP BUTTON: Directs the turret to attack a particular target.\n\nHOLD BUTTON: Detonates the turret, damaging nearby enemies.\n',
    ranks: [
      {
        id: 'ckqgnj44i003pgyxxfmjg9pfh',
        rank: 1,
        name: 'Assault Turret',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/c/c8/Assault_Turret_1_Icon.png/revision/latest/scale-to-width-down/70?cb=20181208072706',
        description:
          'Deploys an automated assault turret that counts as a tech construct.\n\nTAP BUTTON: Directs the turret to attack a particular target.\n\nHOLD BUTTON: Detonates the turret, damaging nearby enemies.',
        bonuses: [
          {
            id: 'ckqgnj44i003qgyxx0cr25us1',
            text: 'Turret Base Health: 400',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj44i003rgyxxeaxz90e8',
            text: 'Damage Per Shot: 23',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj44i003sgyxxejk99e28',
            text: 'Recharge Time: 24',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj44i003tgyxx8mpz3qxd',
            text: 'Area Damage When Destroyed: 340',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj44i003ugyxxa7zjekdc',
        rank: 2,
        name: 'Durability',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/7/7a/Assault_Turret_2_-_Durability_Icon.png/revision/latest/scale-to-width-down/70?cb=20181208072707',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj44i003vgyxx2lri22n6',
            text: '+50% Turret Health',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj44i003wgyxxgl0v12ur',
        rank: 3,
        name: 'Damage',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/4/4e/Assault_Turret_3_-_Damage_Icon.png/revision/latest/scale-to-width-down/70?cb=20181208072708',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj44i003xgyxxg0bnajle',
            text: '+20% Turret Gun Damage',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj44j003ygyxx3t04a11k',
        rank: 4,
        name: 'Durability',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/7/7a/Assault_Turret_2_-_Durability_Icon.png/revision/latest/scale-to-width-down/70?cb=20181208072707',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj44j003zgyxxcsj78z2r',
            text: '+75% Turret Health',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj44j0040gyxx9rd11kro',
        rank: 4,
        name: 'Recharge Speed',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/c/c4/Assault_Turret_4b_-_Recharge_Speed_Icon.png/revision/latest/scale-to-width-down/70?cb=20181208072710',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj44j0041gyxx0ujr7bxb',
            text: '+200% Recharge Speed',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj44j0042gyxxhkw89138',
        rank: 5,
        name: 'Damage',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/4/4e/Assault_Turret_3_-_Damage_Icon.png/revision/latest/scale-to-width-down/70?cb=20181208072708',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj44j0043gyxx5if91y8e',
            text: '+35% Turret Gun Damage',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj44j0044gyxx1hjnhpai',
        rank: 5,
        name: 'Omni-Link',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/4/4b/Assault_Turret_5b_-_Omni-Link_Icon.png/revision/latest/scale-to-width-down/70?cb=20181208072712',
        description:
          'While its creator is in close proximity, the turret repairs itself (via omni-tool link) and improves tech power refresh rates.',
        bonuses: [
          {
            id: 'ckqgnj44j0045gyxx4ktb3oux',
            text: 'Omni-Link Range (m): 10',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj44j0046gyxx3i3c7s83',
            text: 'Omni-Link Tech Recharge Speed: 35%',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj44k0047gyxxf0ti95rv',
            text: 'Omni-Link Turret Heal per Second: 3%',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj44k0048gyxx6mu320oq',
        rank: 6,
        name: 'Cryo Ammo',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/8/8a/Assault_Turret_6a_-_Cryo_Ammo_Icon.png/revision/latest/scale-to-width-down/70?cb=20181208072714',
        description:
          ' Turret shots chill enemies, slowing them and weakening armor. Sustained fire can freeze targets solid, priming them for combo detonations.',
        bonuses: [
          {
            id: 'ckqgnj44k0049gyxx56xk5lvi',
            text: 'Armor Defense Debuff: 100%',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj44k004agyxx9kek19uc',
            text: '+60% Turret Gun Damage',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj44k004bgyxx6tot2ylm',
        rank: 6,
        name: 'Flamethrower',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/3/3f/Assault_Turret_6b_-_Flamethrower_Icon.png/revision/latest/scale-to-width-down/70?cb=20181208072716',
        description:
          ' At close range, the turret employs a short-range flamethrower to burn enemies, causing bonus damage to armor and priming enemies for combo detonations.',
        bonuses: [
          {
            id: 'ckqgnj44k004cgyxxdq2q2miq',
            text: 'Flamethrower Damage per Second: 45',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj44k004dgyxxb01l1x55',
            text: 'Burn Damage per Second: 22',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj44k004egyxxdbnl1895',
            text: 'Flamethrower Range (m): 15',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj44k004fgyxxee0s3in4',
            text: 'Flamethrower Damage Bonus vs. Armor: 60%',
            value: 0,
            attribute: '',
          },
        ],
      },
    ],
  },
  {
    id: 'ckqgnj4aj006egyxx33t85l5w',
    name: 'Cryo Beam',
    url: '/wiki/Cryo_Beam',
    type: 'passive',
    stats: [
      'Damage per Second: 135',
      'Defense Debuff vs. Armor: 50%',
      'Recharge Time (s): 15',
    ],
    description:
      'HOLD BUTTON: Directs a continuous stream of super-cooled particles that freezes targets, priming them for combo detonations. Freezing disables unarmored enemies and weakens enemy armor, but has no effect on shielded foes.\n',
    ranks: [
      {
        id: 'ckqgnj4af005tgyxxhqkw38ri',
        rank: 1,
        name: 'Cryo Beam',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/1/13/Cryo_Beam_1_Icon.png/revision/latest/scale-to-width-down/70?cb=20181208080701',
        description:
          ' HOLD BUTTON: Directs a continuous stream of super-cooled particles that freezes targets, priming them for combo detonations.\nFreezing disables unarmored enemies and weakens enemy armor, but has no effect on shielded foes.',
        bonuses: [
          {
            id: 'ckqgnj4af005ugyxxf57wa7ee',
            text: 'Damage per Second: 135',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj4af005vgyxx6cp3dneg',
            text: 'Defense Debuff vs. Armor: 50%',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj4af005wgyxxeq8t8opy',
            text: 'Recharge Time (s): 15',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj4af005xgyxx73qs60lp',
        rank: 2,
        name: 'Recharge Speed',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/c/c4/Assault_Turret_4b_-_Recharge_Speed_Icon.png/revision/latest/scale-to-width-down/70?cb=20181208072710',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj4af005ygyxx685hckj3',
            text: '+10% Recharge Speed',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj4af005zgyxxdwhuhjqu',
        rank: 3,
        name: 'Damage',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/4/4e/Assault_Turret_3_-_Damage_Icon.png/revision/latest/scale-to-width-down/70?cb=20181208072708',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj4af0060gyxxcz1fcqlm',
            text: '+20% Damage',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj4ag0061gyxx459f3xv7',
        rank: 4,
        name: 'Damage',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/4/4e/Assault_Turret_3_-_Damage_Icon.png/revision/latest/scale-to-width-down/70?cb=20181208072708',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj4ag0062gyxxexnoaovu',
            text: '+40% Damage',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj4ag0063gyxxavws0b4u',
        rank: 4,
        name: 'Recharge Speed',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/c/c4/Assault_Turret_4b_-_Recharge_Speed_Icon.png/revision/latest/scale-to-width-down/70?cb=20181208072710',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj4ag0064gyxxc9by8cvw',
            text: '+30% Recharge Speed',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj4ag0065gyxxb3q61g1l',
        rank: 5,
        name: 'Brittle Freeze',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/0/09/Invasion_5b_-_Weaken_Icon.png/revision/latest/scale-to-width-down/70?cb=20181209022117',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj4ag0066gyxxg38fdjbj',
            text: '+65% Armor Defense Debuff',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj4ag0067gyxx1a1f04k6',
        rank: 5,
        name: 'Radius',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/5/5b/Cryo_Beam_5b_-_Radius_Icon.png/revision/latest/scale-to-width-down/70?cb=20181208080709',
        description:
          'The beam freezes targets in a small radius around its impact point.',
        bonuses: [
          {
            id: 'ckqgnj4ag0068gyxxduhs4n4h',
            text: 'Radius (m): 2.5',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj4aj0069gyxxcqwo510i',
        rank: 6,
        name: 'Snap Freeze',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/4/4f/Cryo_Beam_6a_-_Snap_Freeze_Icon.png/revision/latest/scale-to-width-down/70?cb=20181208080710',
        description:
          'Shattering frozen targets causes additional damage to nearby foes and snap-freezes nearby defenseless enemies.',
        bonuses: [
          {
            id: 'ckqgnj4aj006agyxx7lj1gva7',
            text: '+200% Frozen Shatter Damage',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj4aj006bgyxx9h04guui',
            text: '+100% Frozen Shatter Force',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj4aj006cgyxxa878hjyk',
            text: '+150% Frozen Shatter Radius',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj4aj006dgyxx0dz6dsfn',
        rank: 6,
        name: 'Cryo Trap',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/0/0e/Cryo_Beam_6b_-_Cryo_Trap_Icon.png/revision/latest/scale-to-width-down/70?cb=20181208080711',
        description:
          ' When aimed away from a direct target, the beam creates a temporary freezing zone that chills enemies who enter.',
        bonuses: [],
      },
    ],
  },
  {
    id: 'ckqgnj4gw008ngyxx6w8o1npz',
    name: 'Energy Drain',
    url: '/wiki/Energy_Drain',
    type: 'passive',
    stats: [
      'Shields Restored: 35%',
      'Primary Damage: 160',
      'Energy Drain Shield Damage Bonus: 100%',
      'Synthetic Damage Bonus: 15%',
      'Recharge Time (s): 15',
    ],
    description:
      'Restores shields by sapping electromagnetic energy around a target. Causes bonus damage to shields and synthetic enemies and detonates combo primers on all primed enemies.\n',
    ranks: [
      {
        id: 'ckqgnj4gt007tgyxx403a638r',
        rank: 1,
        name: 'Energy Drain',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/4/48/Energy_Drain_1_Icon.png/revision/latest/scale-to-width-down/70?cb=20181208194156',
        description:
          ' Restores shields by sapping electromagnetic energy around a target. Causes bonus damage to shields and synthetic enemies and detonates combo primers on all primed enemies.',
        bonuses: [
          {
            id: 'ckqgnj4gu007ugyxxgmzo8r56',
            text: 'Shields Restored: 35%',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj4gu007vgyxx4yikalvo',
            text: 'Primary Damage: 160',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj4gu007wgyxx16sa50qg',
            text: 'Energy Drain Shield Damage Bonus: 100%',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj4gu007xgyxxcw1t2otx',
            text: 'Synthetic Damage Bonus: 15%',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj4gu007ygyxxe8ad3g1n',
            text: 'Recharge Time (s): 15',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj4gu007zgyxxf9za4fz4',
        rank: 2,
        name: 'Recharge Speed',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/c/c4/Assault_Turret_4b_-_Recharge_Speed_Icon.png/revision/latest/scale-to-width-down/70?cb=20181208072710',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj4gu0080gyxx448c7qnp',
            text: '+10% Recharge Speed',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj4gu0081gyxx9r4o88nv',
        rank: 3,
        name: 'Effectiveness',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/5/5c/Energy_Drain_3_-_Effectiveness_Icon.png/revision/latest/scale-to-width-down/70?cb=20181208194158',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj4gu0082gyxx333380bp',
            text: '+15% Damage',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj4gu0083gyxxc0spgzg4',
            text: '+15% Shields Restored',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj4gu0084gyxxhu4f3whf',
        rank: 4,
        name: 'Effectiveness',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/5/5c/Energy_Drain_3_-_Effectiveness_Icon.png/revision/latest/scale-to-width-down/70?cb=20181208194158',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj4gu0085gyxx40aw6m2e',
            text: '+20% Damage',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj4gu0086gyxx0iadbbni',
            text: '+20% Shields Restored',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj4gv0087gyxx1v6cgceg',
        rank: 4,
        name: 'Recharge Speed',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/c/c4/Assault_Turret_4b_-_Recharge_Speed_Icon.png/revision/latest/scale-to-width-down/70?cb=20181208072710',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj4gv0088gyxxbybbf0pw',
            text: '+30% Recharge Speed',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj4gv0089gyxx23mr8jed',
        rank: 5,
        name: 'Extended Drain',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/8/8f/Energy_Drain_5a_-_Extended_Drain_Icon.png/revision/latest/scale-to-width-down/70?cb=20181208194201',
        description:
          ' Restores additional shields over time, and the target is primed for combo detonations for the same duration.',
        bonuses: [
          {
            id: 'ckqgnj4gv008agyxx94x24pck',
            text: 'Shields Restored per Second: 6%',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj4gv008bgyxx19j751ya',
            text: 'Shield Restore Duration (s): 4',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj4gv008cgyxx7x9s6gdt',
        rank: 5,
        name: 'Auxiliary Drain',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/5/5b/Cryo_Beam_5b_-_Radius_Icon.png/revision/latest/scale-to-width-down/70?cb=20181208080709',
        description:
          'Affects up to three additional nearby enemies, and grants added delayed shield restoration per additional enemy hit.',
        bonuses: [
          {
            id: 'ckqgnj4gv008dgyxx76yb1b1g',
            text: 'Impact Radius (m): 8',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj4gv008egyxx1y7phj1g',
            text: 'Shields Restored per Additional Target 33%',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj4gv008fgyxxgtov4z6w',
        rank: 6,
        name: 'Damage',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/4/4e/Assault_Turret_3_-_Damage_Icon.png/revision/latest/scale-to-width-down/70?cb=20181208072708',
        description:
          'Increases both standard damage and damage bonus against shields and synthetic enemies.',
        bonuses: [
          {
            id: 'ckqgnj4gv008ggyxx28f691vm',
            text: '+25% Damage',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj4gw008hgyxxdxn85iu9',
            text: '+50% Damage vs. Shields',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj4gw008igyxx8un55fzh',
            text: '+15% Damage vs. Synthetics',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj4gw008jgyxx55wef9c6',
        rank: 6,
        name: 'Team Drain',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/6/6f/Energy_Drain_6b_-_Team_Drain_Icon.png/revision/latest/scale-to-width-down/70?cb=20181208194204',
        description:
          'Initial draining effect also restores the shields of allies near the user.',
        bonuses: [
          {
            id: 'ckqgnj4gw008kgyxxdej32hky',
            text: 'Ally Shields Restored: 50%',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj4gw008lgyxx0fh888tk',
            text: 'Ally Effect Radius: 8',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj4gw008mgyxx3blvcij8',
            text: '+25% Shields Restored',
            value: 0,
            attribute: '',
          },
        ],
      },
    ],
  },
  {
    id: 'ckqgnj4my00aogyxx7tnqf0i1',
    name: 'Tactical Cloak',
    url: '/wiki/Tactical_Cloak',
    type: 'passive',
    stats: [
      'Duration (s): 6.5',
      'Recharge Time (s): 15',
      'Gun Damage Bonus: 50%',
      'Power Damage Bonus: 50%',
      'Melee Damage Bonus: 75%',
    ],
    description:
      'Employs light-bending technology to render the user invisible at the cost of shield and health regeneration. Guns, powers, and melee attacks used from cloak gain a damage bonus but break the cloaking effect.\n',
    ranks: [
      {
        id: 'ckqgnj4mw00a1gyxx53ve8mv5',
        rank: 1,
        name: 'Tactical Cloak',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/e/ed/Tactical_Cloak_1_Icon.png/revision/latest/scale-to-width-down/70?cb=20181208014601',
        description:
          'Employs light-bending technology to render the user invisible at the cost of shield and health regeneration. Guns, powers, and melee attacks used from cloak gain a damage bonus but break the cloaking effect.',
        bonuses: [
          {
            id: 'ckqgnj4mw00a2gyxxb78y51mg',
            text: 'Duration (s): 6.5',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj4mw00a3gyxxfo00aerf',
            text: 'Recharge Time (s): 15',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj4mw00a4gyxx1ual1jmj',
            text: 'Gun Damage Bonus: 50%',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj4mw00a5gyxx4ki8cpua',
            text: 'Power Damage Bonus: 50%',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj4mw00a6gyxx5uqq0f93',
            text: 'Melee Damage Bonus: 75%',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj4mx00a7gyxx94fp5eus',
        rank: 2,
        name: 'Recharge Speed',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/c/c4/Assault_Turret_4b_-_Recharge_Speed_Icon.png/revision/latest/scale-to-width-down/70?cb=20181208072710',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj4mx00a8gyxxbivq7cf6',
            text: '+15% Recharge Speed',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj4mx00a9gyxxapue1p9z',
        rank: 3,
        name: 'Duration',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/8/8f/Energy_Drain_5a_-_Extended_Drain_Icon.png/revision/latest/scale-to-width-down/70?cb=20181208194201',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj4mx00aagyxx69mk1isw',
            text: '+25% Duration',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj4mx00abgyxx7mdaas3r',
        rank: 4,
        name: 'Recharge Speed',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/c/c4/Assault_Turret_4b_-_Recharge_Speed_Icon.png/revision/latest/scale-to-width-down/70?cb=20181208072710',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj4mx00acgyxxay6bbuxh',
            text: '+30% Recharge Speed',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj4mx00adgyxx4er5bbfb',
        rank: 4,
        name: 'Damage Bonus',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/4/4e/Assault_Turret_3_-_Damage_Icon.png/revision/latest/scale-to-width-down/70?cb=20181208072708',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj4mx00aegyxxfjhu9f4a',
            text: '+40% Gun Damage Bonus',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj4mx00afgyxx9z3644m7',
            text: '+50% Power Damage Bonus',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj4mx00aggyxx81zhet46',
            text: '+50% Melee Damage Bonus',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj4my00ahgyxxhon31ohk',
        rank: 5,
        name: 'Duration',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/8/8f/Energy_Drain_5a_-_Extended_Drain_Icon.png/revision/latest/scale-to-width-down/70?cb=20181208194201',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj4my00aigyxx8dorbsi0',
            text: '+50% Duration',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj4my00ajgyxxczex6ml7',
        rank: 5,
        name: 'Speed',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/4/4b/Tactical_Cloak_5b_-_Speed_Icon.png/revision/latest/scale-to-width-down/70?cb=20181208014605',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj4my00akgyxx89j3ckfo',
            text: '+20% Movement Speed While Cloaked',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj4my00algyxxguo12a4w',
        rank: 6,
        name: 'Escape Artist',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/3/35/Tactical_Cloak_6a_-_Escape_Artist_Icon.png/revision/latest/scale-to-width-down/70?cb=20181208014606',
        description:
          'Melee kills briefly activate Tactical Cloak and the cloak no longer prevents health and shield regeneration.',
        bonuses: [],
      },
      {
        id: 'ckqgnj4my00amgyxx985pgghn',
        rank: 6,
        name: 'Combat Cloak',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/f/f1/Tactical_Cloak_6b_-_Combat_Cloak_Icon.png/revision/latest/scale-to-width-down/70?cb=20181208014606',
        description:
          'Tactical Cloak remains active briefly after attacking. Damage bonuses remain in effect during this time.',
        bonuses: [
          {
            id: 'ckqgnj4my00angyxx3eesdn0x',
            text: 'Cloak Duration After Attack (s): 2',
            value: 0,
            attribute: '',
          },
        ],
      },
    ],
  },
  {
    id: 'ckqgnj4st00ckgyxxfdk1a3u6',
    name: 'Flamethrower',
    url: '/wiki/Flamethrower',
    type: 'passive',
    stats: [
      'Sustained Damage per Second: 225',
      'Burn Damage per Second: 120',
      'Burning Duration (s): 5',
      'Armor Damage Bonus: 25%',
      'Recharge Time (s): 12',
    ],
    description:
      'HOLD BUTTON: Unleashes a short-range jet of flame that causes bonus damage to armor and ongoing burn damage. Unshielded enemies held in the jet catch fire, priming them for combo detonations.\n',
    ranks: [
      {
        id: 'ckqgnj4sr00bygyxx1cvq83qg',
        rank: 1,
        name: 'Flamethrower',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/a/ad/Flamethrower_1_Icon.png/revision/latest/scale-to-width-down/70?cb=20181202194208',
        description:
          ' HOLD BUTTON: Unleashes a short-range jet of flame that causes bonus damage to armor and ongoing burn damage. Unshielded enemies held in the jet catch fire, priming them for combo detonations.',
        bonuses: [
          {
            id: 'ckqgnj4sr00bzgyxxbbrvaql1',
            text: 'Sustained Damage per Second: 225',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj4sr00c0gyxxah450n60',
            text: 'Burn Damage per Second: 120',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj4sr00c1gyxxb1gb0gja',
            text: 'Burning Duration (s): 5',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj4sr00c2gyxx045nblbb',
            text: 'Armor Damage Bonus: 25%',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj4sr00c3gyxx068y024s',
            text: 'Recharge Time (s): 12',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj4sr00c4gyxxczhzaoup',
        rank: 2,
        name: 'Recharge Speed',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/c/c4/Assault_Turret_4b_-_Recharge_Speed_Icon.png/revision/latest/scale-to-width-down/70?cb=20181208072710',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj4sr00c5gyxx8rwe877l',
            text: '+20% Recharge Speed',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj4sr00c6gyxx9lpu8l4u',
        rank: 3,
        name: 'Damage',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/4/4e/Assault_Turret_3_-_Damage_Icon.png/revision/latest/scale-to-width-down/70?cb=20181208072708',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj4sr00c7gyxxclcq6ggb',
            text: '+15% All Damage',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj4sr00c8gyxx8htfh5w8',
        rank: 4,
        name: 'Damage',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/4/4e/Assault_Turret_3_-_Damage_Icon.png/revision/latest/scale-to-width-down/70?cb=20181208072708',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj4sr00c9gyxx9ytzft84',
            text: '+25% All Damage',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj4ss00cagyxxdyhbbqvf',
        rank: 4,
        name: 'Recharge Speed',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/c/c4/Assault_Turret_4b_-_Recharge_Speed_Icon.png/revision/latest/scale-to-width-down/70?cb=20181208072710',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj4ss00cbgyxxfdb1g4hy',
            text: '+30% Recharge Speed',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj4ss00ccgyxxcvxl8wyb',
        rank: 5,
        name: 'Reach',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/c/ce/Flamethrower_5a_-_Reach_Icon.png/revision/latest/scale-to-width-down/70?cb=20181202194212',
        description: "Increases the flamethrower's range.",
        bonuses: [
          {
            id: 'ckqgnj4ss00cdgyxxdg5q7r81',
            text: '+50% Damage Radius',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj4ss00cegyxx14bfc2cq',
        rank: 5,
        name: 'Lingering Burn',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/8/8f/Energy_Drain_5a_-_Extended_Drain_Icon.png/revision/latest/scale-to-width-down/70?cb=20181208194201',
        description: 'Increases burning damage and duration.',
        bonuses: [
          {
            id: 'ckqgnj4ss00cfgyxx3gz79cql',
            text: '+40% Damage Over Time',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj4ss00cggyxx5dek1w81',
            text: '+50% Duration',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj4ss00chgyxxhtce2mpn',
        rank: 6,
        name: 'Anti-Armor',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/9/9e/Incinerate_5b_-_Anti-Armor_Icon.png/revision/latest/scale-to-width-down/70?cb=20181208202328',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj4ss00cigyxxdvhwctdk',
            text: '+65% Damage vs. Armor',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj4st00cjgyxxegrfcx2h',
        rank: 6,
        name: 'Blinding Heat',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/1/15/Flamethrower_6b_-_Blinding_Heat_Icon.png/revision/latest/scale-to-width-down/70?cb=20181202194214',
        description: 'Damage output from enemies on fire is reduced by 50%.',
        bonuses: [],
      },
    ],
  },
  {
    id: 'ckqgnj4yt00ehgyxx7bkp11zy',
    name: 'Remnant VI',
    url: '/wiki/Remnant_VI',
    type: 'passive',
    stats: [
      'VI Health: 800',
      'Beam Damage per Second: 66',
      'Recharge Time (s): 24',
    ],
    description:
      'Deploys a retrofitted Remnant Observer that repairs itself over time, cloaks when critically damaged and counts as a tech construct.\n\nTAP BUTTON: Directs the VI to attack a particular target.\n\nHOLD BUTTON: Deactivates the VI.\n',
    ranks: [
      {
        id: 'ckqgnj4yp00drgyxxaz2lbniq',
        rank: 1,
        name: 'Remnant VI',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/d/d3/Remnant_VI_1_Icon.png/revision/latest/scale-to-width-down/70?cb=20181201183634',
        description:
          'Deploys a retrofitted Remnant Observer that repairs itself over time, cloaks when critically damaged and counts as a tech construct.\n\nTAP BUTTON: Directs the VI to attack a particular target.\n\nHOLD BUTTON: Deactivates the VI.',
        bonuses: [
          {
            id: 'ckqgnj4yp00dsgyxx3s5l2tnj',
            text: 'VI Health: 800',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj4yp00dtgyxx9zsiconz',
            text: 'Beam Damage per Second: 66',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj4yp00dugyxx9fu33mo9',
            text: 'Recharge Time (s): 24',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj4yp00dvgyxx8ijtg6jq',
        rank: 2,
        name: 'Durability',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/7/7a/Assault_Turret_2_-_Durability_Icon.png/revision/latest/scale-to-width-down/70?cb=20181208072707',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj4yp00dwgyxx8n3ba8e3',
            text: '+50 VI Health',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj4yq00dxgyxx9bww3rxn',
        rank: 3,
        name: 'Beam Damage',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/4/4e/Assault_Turret_3_-_Damage_Icon.png/revision/latest/scale-to-width-down/70?cb=20181208072708',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj4yq00dygyxx78c7h5lm',
            text: '+25% VI Beam Damage',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj4yq00dzgyxx0o3s6pbq',
        rank: 4,
        name: 'Expedited Repairs',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/4/4b/Assault_Turret_5b_-_Omni-Link_Icon.png/revision/latest/scale-to-width-down/70?cb=20181208072712',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj4yq00e0gyxxe43c3qpl',
            text: '+50% VI Health Regen',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj4yq00e1gyxxc2630dl7',
            text: '+80% VI Health Regen Delay Reduction',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj4yq00e2gyxxcdnb26da',
        rank: 4,
        name: 'Recharge Speed',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/c/c4/Assault_Turret_4b_-_Recharge_Speed_Icon.png/revision/latest/scale-to-width-down/70?cb=20181208072710',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj4yq00e3gyxxcsocfiw8',
            text: '+40% Recharge Speed',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj4yq00e4gyxxgsyebp30',
        rank: 5,
        name: 'Focus Module',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/1/1b/Remnant_VI_5a_-_Focus_Module_Icon.png/revision/latest/scale-to-width-down/70?cb=20181201183638',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj4yq00e5gyxxg35mg458',
            text: '+50% VI Beam Damage',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj4yr00e6gyxxau8ifs7t',
        rank: 5,
        name: 'Close Combat Module',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/5/5e/Remnant_VI_5b_-_Close_Combat_Module_Icon.png/revision/latest/scale-to-width-down/70?cb=20181201183639',
        description:
          "The VI engages enemies at a closer range, demanding foes' attention. Also improves VI health.",
        bonuses: [
          {
            id: 'ckqgnj4yr00e7gyxx5cvwfeok',
            text: '+200% VI Health',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj4yr00e8gyxx4ye4dtlx',
        rank: 6,
        name: 'Detonating Missiles',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/5/5f/Incinerate_6a_-_Detonator_Icon.png/revision/latest/scale-to-width-down/70?cb=20181208202330',
        description:
          " Adds explosive missiles to the VI's arsenal (in addition to its beam weapon). Missiles trigger combo detonations.",
        bonuses: [
          {
            id: 'ckqgnj4yr00e9gyxx7n677eee',
            text: 'Missile Damage: 90',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj4yr00eagyxx0m060gjt',
            text: 'Missile Damage Radius (m): 2.5',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj4yr00ebgyxx7cnw2csr',
            text: 'Missile Frequency (s): 6',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj4yt00ecgyxxa4kzh5w1',
        rank: 6,
        name: 'Electric Beam',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/0/09/Remnant_VI_6b_-_Electric_Beam_Icon.png/revision/latest/scale-to-width-down/70?cb=20181201183641',
        description:
          " The VI's beam attack has a chance to electrically prime enemies for combo detonations and stun them. Increases damage to shields and synthetic enemies.",
        bonuses: [
          {
            id: 'ckqgnj4yt00edgyxxgm3p562u',
            text: 'Shield Damage Bonus: 75%',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj4yt00eegyxx9hkkg44w',
            text: 'Synthetic Damage Bonus: 15%',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj4yt00efgyxxau6f7ivz',
            text: 'Stun Duration (s): 1',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj4yt00eggyxxbm61d8h8',
            text: '+50% VI Beam Damage',
            value: 0,
            attribute: '',
          },
        ],
      },
    ],
  },
  {
    id: 'ckqgnj54n00g9gyxxddog9itl',
    name: 'Invasion',
    url: '/wiki/Invasion',
    type: 'passive',
    stats: [
      'Enemy Defense Debuff: 30%',
      'Duration: 15',
      'Damage: 30',
      'Recharge Time (s): 24',
      'Spread Radius (m): 6',
    ],
    description:
      'Infects opponents with an invasive VI-controlled machine swarm that weakens defenses and spreads itself to nearby enemies.\n',
    ranks: [
      {
        id: 'ckqgnj54l00fngyxxfd1ngkkg',
        rank: 1,
        name: 'Invasion',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/7/75/Invasion_1_Icon.png/revision/latest/scale-to-width-down/70?cb=20181209022109',
        description:
          'Infects opponents with an invasive VI-controlled machine swarm that weakens defenses and spreads itself to nearby enemies.',
        bonuses: [
          {
            id: 'ckqgnj54m00fogyxxfefvafi3',
            text: 'Enemy Defense Debuff: 30%',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj54m00fpgyxx1kgy0vkc',
            text: 'Duration: 15',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj54m00fqgyxx8hvw6v2k',
            text: 'Damage: 30',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj54m00frgyxxa3r0ckpf',
            text: 'Recharge Time (s): 24',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj54m00fsgyxxa1e90ka0',
            text: 'Spread Radius (m): 6',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj54m00ftgyxxfi3wefrp',
        rank: 2,
        name: 'Recharge Speed',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/c/c4/Assault_Turret_4b_-_Recharge_Speed_Icon.png/revision/latest/scale-to-width-down/70?cb=20181208072710',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj54m00fugyxx4lib3f8b',
            text: '+10% Recharge Speed',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj54m00fvgyxxflty7dxu',
        rank: 3,
        name: 'Duration',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/8/8f/Energy_Drain_5a_-_Extended_Drain_Icon.png/revision/latest/scale-to-width-down/70?cb=20181208194201',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj54m00fwgyxxclu77ae0',
            text: '+30% Duration',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj54m00fxgyxxfuy66hqz',
        rank: 4,
        name: 'Recharge Speed',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/c/c4/Assault_Turret_4b_-_Recharge_Speed_Icon.png/revision/latest/scale-to-width-down/70?cb=20181208072710',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj54m00fygyxxdb8mgqkk',
            text: '+40% Recharge Speed',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj54m00fzgyxxf0b9ar8r',
        rank: 4,
        name: 'Outbreak',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/5/5b/Cryo_Beam_5b_-_Radius_Icon.png/revision/latest/scale-to-width-down/70?cb=20181208080709',
        description:
          'Invasion now infects up to three enemies near the target location.',
        bonuses: [
          {
            id: 'ckqgnj54m00g0gyxx16h17avf',
            text: 'Effect Radius: 4',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj54n00g1gyxx5ogsauxp',
        rank: 5,
        name: 'Epidemic',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/6/6f/Invasion_5a_-_Epidemic_Icon.png/revision/latest/scale-to-width-down/70?cb=20181209022116',
        description:
          'Invasion now lasts longer and spreads to more distant enemies.',
        bonuses: [
          {
            id: 'ckqgnj54n00g2gyxxdn9cgaw7',
            text: '+40% Duration',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj54n00g3gyxx3ng74as3',
            text: '+30% Spread Radius (m)',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj54n00g4gyxx5sqpee76',
        rank: 5,
        name: 'Weaken',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/0/09/Invasion_5b_-_Weaken_Icon.png/revision/latest/scale-to-width-down/70?cb=20181209022117',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj54n00g5gyxx33cee07k',
            text: '+10% Enemy Defense Debuff',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj54n00g6gyxx0e66ef33',
        rank: 6,
        name: 'Virulence',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/2/2d/Invasion_6a_-_Virulence_Icon.png/revision/latest/scale-to-width-down/70?cb=20181209022118',
        description:
          'When an affected enemy falls below 15% health, Invasion triggers an explosion that damage the enemy and other enemies nearby.',
        bonuses: [],
      },
      {
        id: 'ckqgnj54n00g7gyxxekl8dxbo',
        rank: 6,
        name: 'Sabotage',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/8/8d/Invasion_6b_-_Sabotage_Icon.png/revision/latest/scale-to-width-down/70?cb=20181209022120',
        description: 'Affected enemies do less weapon damage.',
        bonuses: [
          {
            id: 'ckqgnj54n00g8gyxxaql5fh1i',
            text: '-15% Enemy Weapon Damage',
            value: 0,
            attribute: '',
          },
        ],
      },
    ],
  },
  {
    id: 'ckqgnj5ar00ibgyxx6j5l5cdh',
    name: 'Team Support',
    url: '/wiki/Team_Support',
    type: 'passive',
    stats: ['+2% Team Shields'],
    description:
      'Improves defenses and support for the whole squad through kinetic barrier generator and hardsuit enhancements.\n',
    ranks: [
      {
        id: 'ckqgnj5ap00hlgyxxf73o3d00',
        rank: 1,
        name: 'Shields',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/0/00/Team_Support_1_-_Shields_Icon.png/revision/latest/scale-to-width-down/70?cb=20181202185406',
        description:
          'Improves maximum shields for the user and all squadmates with each skill point invested in the Tech Skill Group.',
        bonuses: [
          {
            id: 'ckqgnj5ap00hmgyxx2ulh21cm',
            text: '+2% Team Shields',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj5ap00hngyxxgbhoarcj',
        rank: 2,
        name: 'Shield Recovery',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/f/f7/Tech_Armor_6a_-_Shield_Feedback_Icon.png/revision/latest/scale-to-width-down/70?cb=20181211004940',
        description:
          'Improves shield regeneration speed for the user and squadmates, as well as health recovery speed for tech constructs, with each skill point invested in the Tech Skill Group.',
        bonuses: [
          {
            id: 'ckqgnj5ap00hogyxx77p65k2d',
            text: '+2% Team Shield Delay Reduction',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj5ap00hpgyxx3cs4ew84',
            text: '+2% Team Shield Regeneration',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj5ap00hqgyxxf74ygd5t',
            text: '+2% Tech Construct Health Regeneration',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj5aq00hrgyxx8azc6tk7',
        rank: 3,
        name: 'Support',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/d/de/Support_Systems_2_-_Support_Icon.png/revision/latest/scale-to-width-down/70?cb=20190302124516',
        description:
          'Improves shield restoration and defensive effects from powers with each skill point invested in the Tech Skill Group.',
        bonuses: [
          {
            id: 'ckqgnj5aq00hsgyxx1mg0dyrn',
            text: '+2% Power Restoration &amp; Defense',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj5aq00htgyxx5d7eczqm',
        rank: 4,
        name: 'Squad Offense',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/7/73/Team_Support_4a_-_Squad_Offense_Icon.png/revision/latest/scale-to-width-down/70?cb=20181202185408',
        description:
          'Increases damage from tech constructs and squadmate powers.',
        bonuses: [
          {
            id: 'ckqgnj5aq00hugyxx9bvcaooc',
            text: '+20% Squadmate Power Damage',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj5aq00hvgyxxgzm2ai8j',
            text: '+20% Tech Construct Damage',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj5aq00hwgyxx6luy1px8',
        rank: 4,
        name: 'Support',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/d/de/Support_Systems_2_-_Support_Icon.png/revision/latest/scale-to-width-down/70?cb=20190302124516',
        description: 'Improves all shield restoration and defensive effects.',
        bonuses: [
          {
            id: 'ckqgnj5aq00hxgyxx5d7m0d1m',
            text: '+20% Power Restoration &amp; Defense',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj5aq00hygyxx1tok2ge3',
        rank: 5,
        name: 'Team Recovery',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/3/31/Team_Support_5a_-_Team_Recovery_Icon.png/revision/latest/scale-to-width-down/70?cb=20181202185410',
        description:
          'Reduces shield regeneration delay and improves shield regeneration rate for the user and squadmates. Increases health recovery rate for tech constructs.',
        bonuses: [
          {
            id: 'ckqgnj5aq00hzgyxxfzhoaj0h',
            text: '+15% Team Shield Delay Reduction',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj5aq00i0gyxxc04i386y',
            text: '+15% Team Shield Regeneration',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj5aq00i1gyxxfone94z7',
            text: '15% Tech Construct Health Regeneration',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj5ar00i2gyxxg2jfb5qi',
        rank: 5,
        name: 'Tactical Revive',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/9/91/Support_Systems_5b_-_Tactical_Revive_Icon.png/revision/latest/scale-to-width-down/70?cb=20181211002956',
        description:
          'Grants Damage Resistance during squadmate revival and for 5 sec afterwards. Restores shields to maximum upon reviving a squadmate. Both effects also apply to successfully revived squadmates.',
        bonuses: [
          {
            id: 'ckqgnj5ar00i3gyxx911whtq0',
            text: 'Damage Resistance During Revive: 120',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj5ar00i4gyxxa65ze79w',
            text: 'Damage Resistance after Revive: 120',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj5ar00i5gyxxdnvoheue',
        rank: 6,
        name: 'Defense Grid',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/e/e9/Team_Support_6a_-_Defense_Grid_Icon.png/revision/latest/scale-to-width-down/70?cb=20181202185411',
        description:
          'Increases Damage Resistance for each conscious squadmate or tech construct within 8 m. The increase applies to the user and those squadmates and tech constructs.',
        bonuses: [
          {
            id: 'ckqgnj5ar00i6gyxx9u453rhd',
            text: 'Damage Resistance per Ally: 6',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj5ar00i7gyxx9axrgren',
        rank: 6,
        name: 'Life Support',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/9/9b/Bioelectric_Defense_4b_-_Regeneration_Icon.png/revision/latest/scale-to-width-down/70?cb=20181210062753',
        description:
          'Improves health regeneration rate for the user and nearby squadmates and tech constructs for 3 sec after using a tech power.',
        bonuses: [
          {
            id: 'ckqgnj5ar00i8gyxxdoqneeqa',
            text: 'Health Regeneration Bonus: 150%',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj5ar00i9gyxxg1cq9lvz',
            text: 'Health Regeneration Cap: 50%',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj5ar00iagyxx97ix00ke',
            text: 'Life Support Cooldown (s): 8',
            value: 0,
            attribute: '',
          },
        ],
      },
    ],
  },
  {
    id: 'ckqgnj5gt00k6gyxxdr4745rd',
    name: 'Offensive Tech',
    url: '/wiki/Offensive_Tech',
    type: 'passive',
    stats: ['+2% Tech Power Damage'],
    description:
      'Maximizes the offensive capabilities of tech powers through specialized omni-tool software and hardware.\n',
    ranks: [
      {
        id: 'ckqgnj5gs00jngyxxfbtgd50t',
        rank: 1,
        name: 'Damage',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/0/0c/Offensive_Tech_1_-_Damage_Icon.png/revision/latest/scale-to-width-down/70?cb=20181209074157',
        description:
          'Increases tech power damage with each skill point invested in the Tech Skill Group.',
        bonuses: [
          {
            id: 'ckqgnj5gs00jogyxx9wjp4u6o',
            text: '+2% Tech Power Damage',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj5gs00jpgyxxgmiv5aqn',
        rank: 2,
        name: 'Recharge Speed',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/1/1d/Bioelectric_Defense_5b_-_Augmentation_Icon.png/revision/latest/scale-to-width-down/70?cb=20190215185245',
        description:
          'Improves tech power recharge speeds with each skill point invested in the Tech Skill Group.',
        bonuses: [
          {
            id: 'ckqgnj5gs00jqgyxx1ggzc7uu',
            text: '+2% Tech Recharge Speed',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj5gs00jrgyxx3puh8iz9',
        rank: 3,
        name: 'Detonators',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/4/4f/Offensive_Tech_3_-_Detonators_Icon.png/revision/latest/scale-to-width-down/70?cb=20181209074159',
        description:
          'Increases combo detonation damage from tech detonators with each skill point invested in the Tech Skill Group.',
        bonuses: [
          {
            id: 'ckqgnj5gs00jsgyxx33xs2067',
            text: '+2% Tech Detonator Damage Bonus',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj5gs00jtgyxx4u2yhhyj',
        rank: 4,
        name: 'Anti-Armor',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/c/ca/Offensive_Tech_4a_-_Anti-Armor_Icon.png/revision/latest/scale-to-width-down/70?cb=20181209074159',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj5gs00jugyxx1ebv0972',
            text: '+20% Tech Damage Bonus to Armor',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj5gt00jvgyxx5u1uf004',
        rank: 4,
        name: 'Anti-Shield',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/e/ea/Offensive_Tech_4b_-_Anti-Shield_Icon.png/revision/latest/scale-to-width-down/70?cb=20181209074200',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj5gt00jwgyxxfvpnh06i',
            text: '+20% Tech Damage Bonus to Shields',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj5gt00jxgyxx4sdpclbh',
        rank: 5,
        name: 'Detonators',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/4/4f/Offensive_Tech_3_-_Detonators_Icon.png/revision/latest/scale-to-width-down/70?cb=20181209074159',
        description: 'Increased combo detonation damage from tech detonators.',
        bonuses: [
          {
            id: 'ckqgnj5gt00jygyxx3tgs14a9',
            text: '+30% Tech Detonator Damage Bonus',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj5gt00jzgyxx4g5f52nh',
        rank: 5,
        name: 'Anti-Synthetic',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/8/88/Offensive_Tech_5b_-_Anti-Synthetic_Icon.png/revision/latest/scale-to-width-down/70?cb=20181209074202',
        description:
          'Improves existing damage bonuses against synthetic enemies for electric powers.',
        bonuses: [
          {
            id: 'ckqgnj5gt00k0gyxx3k728kh9',
            text: '+25% Electric Damage Bonus to Synthetics',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj5gt00k1gyxx6a7s0q7m',
        rank: 6,
        name: 'Elemental Tech',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/1/14/Offensive_Tech_6a_-_Elemental_Tech_Icon.png/revision/latest/scale-to-width-down/70?cb=20181209074205',
        description:
          "Enemies suffering ongoing effects of the user's tech powers take increased damage from heat, cold, and electricity.",
        bonuses: [
          {
            id: 'ckqgnj5gt00k2gyxxcqey5qfw',
            text: 'Elemental Defense Debuff: 35%',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj5gt00k3gyxxaujl24a8',
        rank: 6,
        name: 'Technical Rounds',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/4/45/Offensive_Tech_6a_-_Weapon_Boost_Icon.png/revision/latest/scale-to-width-down/70?cb=20190303013029',
        description:
          'Increases gun damage for a short period after using a tech power.',
        bonuses: [
          {
            id: 'ckqgnj5gt00k4gyxx020e1938',
            text: 'Weapon Damage Bonus: 30%',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj5gt00k5gyxxg39igcsd',
            text: 'Weapon Damage Bonus Duration: 5',
            value: 0,
            attribute: '',
          },
        ],
      },
    ],
  },
  {
    id: 'ckqgnj5mn00m1gyxx14y9ds8a',
    name: 'Auxiliary Systems',
    url: '/wiki/Auxiliary_Systems',
    type: 'passive',
    stats: ['+2% Tech Effect Duration'],
    description:
      'Improves the effectiveness of tech powers and constructs in a variety of ways, thanks to customized omni-tool and hardsuit subsystems.\n',
    ranks: [
      {
        id: 'ckqgnj5mf00ljgyxx0ix0167b',
        rank: 1,
        name: 'Duration',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/d/d3/Auxiliary_Systems_1_-_Duration_Icon.png/revision/latest/scale-to-width-down/70?cb=20181209034121',
        description:
          'Increases tech effect duration with each skill point invested in the Tech Skill Group.',
        bonuses: [
          {
            id: 'ckqgnj5mg00lkgyxx43xl33kq',
            text: '+2% Tech Effect Duration',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj5mg00llgyxx2n0dha05',
        rank: 2,
        name: 'Force',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/2/2c/Auxiliary_Systems_2_-_Force_Icon.png/revision/latest/scale-to-width-down/70?cb=20181209034122',
        description:
          'Increases tech power force with each skill point invested in the Tech Skill Group.',
        bonuses: [
          {
            id: 'ckqgnj5mg00lmgyxx7mpj9xt8',
            text: '+2% Tech Force',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj5mg00lngyxxci0dc8zj',
        rank: 3,
        name: 'Constructs',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/4/4e/Support_Systems_2_-_Defense_Systems_Icon.png/revision/latest/scale-to-width-down/70?cb=20181211002948',
        description:
          'Improves tech construct health and damage output with each skill point invested in the Tech Skill Group.',
        bonuses: [
          {
            id: 'ckqgnj5mg00logyxx7ojl424j',
            text: '+2% Tech Construct Damage',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj5mg00lpgyxxc9sp0paj',
            text: '+2% Tech Construct Health',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj5mg00lqgyxx0kwjd9t4',
        rank: 4,
        name: 'Weapon Mass Reduction',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/0/08/Auxiliary_Systems_4a_-_Weapon_Mass_Reduction_Icon.png/revision/latest/scale-to-width-down/70?cb=20181209034124',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj5mg00lrgyxxewyj73ei',
            text: '+40% Weapon Weight Capacity',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj5mh00lsgyxxfd9jdt9b',
        rank: 4,
        name: 'Priming',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/0/0d/Auxiliary_Systems_4b_-_Priming_Icon.png/revision/latest/scale-to-width-down/70?cb=20181209034124',
        description:
          "Increases combo detonation priming rate for guns, melee attacks, powers, and constructs (for attacks that don't prime instantly).",
        bonuses: [
          {
            id: 'ckqgnj5mh00ltgyxx87rk33lk',
            text: '+100% Combo Priming Rate',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj5mh00lugyxx64ed9rw7',
        rank: 5,
        name: 'Enduring Tech',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/c/ce/Support_Systems_4a_-_Tech_Duration_Icon.png/revision/latest/scale-to-width-down/70?cb=20181211002952',
        description:
          "Increases the duration of the user's ongoing tech power effects on enemies and allies.",
        bonuses: [
          {
            id: 'ckqgnj5mh00lvgyxxfq543ycz',
            text: '+25% Tech Effect Duration',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj5mh00lwgyxx9dth973p',
        rank: 5,
        name: 'Impact Dilation',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/5/5c/Support_Systems_4b_-_Tech_Radius_Icon.png/revision/latest/scale-to-width-down/70?cb=20181211002953',
        description:
          'Increases the radius of all tech powers that affect an area (including the area attacks of tech constructs).',
        bonuses: [
          {
            id: 'ckqgnj5mh00lxgyxx321tf1dq',
            text: '+25% Tech Area of Effect Radius',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj5mh00lygyxxa4m6c3gx',
        rank: 6,
        name: 'Shield Feedback',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/5/5c/Support_Systems_6a_-_Shield_Reset_Icon.png/revision/latest/scale-to-width-down/70?cb=20181211002958',
        description:
          'Begins shield regeneration immediately, eliminating any delay, when a tech power is activated. Only functions once every 12 sec.',
        bonuses: [],
      },
      {
        id: 'ckqgnj5mn00lzgyxx7i4vcv0c',
        rank: 6,
        name: 'Omni-Vents',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/2/2c/Auxiliary_Systems_6b_-_Omni-Vents_Icon.png/revision/latest/scale-to-width-down/70?cb=20181209034129',
        description:
          'Improves all recharge rates for currently recharging powers by 50% when a tech power is activated. Only functions once every 15 sec.',
        bonuses: [
          {
            id: 'ckqgnj5mn00m0gyxx5j8tdcj7',
            text: 'Power Recharge Time Rebate: 50%',
            value: 0,
            attribute: '',
          },
        ],
      },
    ],
  },
]

export const bioticSkills: Skill[] = [
  {
    id: 'ckqgnj3t70017gyxx9rv573t8',
    name: 'Pull',
    url: '/wiki/Pull',
    type: 'passive',
    stats: ['Duration (s): 5', 'Recharge Time (s): 10'],
    description:
      'TAP BUTTON: Lifts an unshielded, unarmored enemy helplessly in the air and primes the target for combo detonations.\n\nHOLD BUTTON: Drags the target enemy or object along with the user.\n\nCombine with the Throw power to hurl a held target.\n',
    ranks: [
      {
        id: 'ckqgnj3t5000ogyxx4y2q73yh',
        rank: 1,
        name: 'Pull',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/2/28/Pull_1_Icon.png/revision/latest/scale-to-width-down/70?cb=20181207060912',
        description:
          ' TAP BUTTON: Lifts an unshielded, unarmored enemy helplessly in the air and primes the target for combo detonations.\n\nHOLD BUTTON: Drags the target enemy or object along with the user.\n\nCombine with the Throw power to hurl a held target.',
        bonuses: [
          {
            id: 'ckqgnj3t5000pgyxxfytc1vw2',
            text: 'Duration (s): 5',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj3t5000qgyxx1ocj7b5j',
            text: 'Recharge Time (s): 10',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj3t5000rgyxx6wds6bhd',
        rank: 2,
        name: 'Recharge Speed',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/5/5a/Annihilation_2_-_Recharge_Penalty_Icon.png/revision/latest/scale-to-width-down/70?cb=20181202180339',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj3t5000sgyxx5mho9cmr',
            text: '+30% Recharge Speed',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj3t6000tgyxxgvr280w5',
        rank: 3,
        name: 'Duration',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/f/f2/Pull_3_-_Duration_Icon.png/revision/latest/scale-to-width-down/70?cb=20181207060917',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj3t6000ugyxx5f4m4iks',
            text: '+40% Duration',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj3t6000vgyxxaxh762mb',
        rank: 4,
        name: 'Duration',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/f/f2/Pull_3_-_Duration_Icon.png/revision/latest/scale-to-width-down/70?cb=20181207060917',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj3t6000wgyxx6mb28gsi',
            text: '+50% Duration',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj3t6000xgyxx5gmm5j6h',
        rank: 4,
        name: 'Radius',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/b/bd/Annihilation_4a_-_Radius_Icon.png/revision/latest/scale-to-width-down/70?cb=20181202180340',
        description: 'Pull affects up to two enemies within a radius.',
        bonuses: [
          {
            id: 'ckqgnj3t6000ygyxxe6jz32cs',
            text: 'Radius (m): 4',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj3t6000zgyxx5fbx1svz',
        rank: 5,
        name: 'Crushing Grip',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/8/8a/Pull_5a_-_Crushing_Grip_Icon.png/revision/latest/scale-to-width-down/70?cb=20181207060922',
        description: 'Targets take damage while in the air.',
        bonuses: [
          {
            id: 'ckqgnj3t60010gyxxa1gj3z10',
            text: 'Damage per Second 35',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj3t70011gyxx2vtj3egs',
        rank: 5,
        name: 'Expose',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/7/7f/Pull_5b_-_Expose_Icon.png/revision/latest/scale-to-width-down/70?cb=20181207060923',
        description: 'Affected targets take more damage from all sources.',
        bonuses: [
          {
            id: 'ckqgnj3t70012gyxx7i993des',
            text: 'Defense Debuff: 30%',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj3t70013gyxx0dkd8781',
        rank: 6,
        name: 'Anti-Shields',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/b/b3/Lance_5b_-_Anti-Shield_Icon.png/revision/latest/scale-to-width-down/70?cb=20181201210018',
        description:
          'Drains enemy shields on initial hit (but targets whose shields endure still cannot be lifted or held).',
        bonuses: [
          {
            id: 'ckqgnj3t70014gyxxadccbsy3',
            text: 'Shield Damage Bonus: 600',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj3t70015gyxx1q8hafae',
        rank: 6,
        name: 'Biotic Drain',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/a/a5/Annihilation_6a_-_Draining_Field_Icon.png/revision/latest/scale-to-width-down/70?cb=20181202180343',
        description:
          'Restores shields while Pull is maintained to hold an enemy.',
        bonuses: [
          {
            id: 'ckqgnj3t70016gyxxef1m3luy',
            text: 'Shields Restored per Second: 10%',
            value: 0,
            attribute: '',
          },
        ],
      },
    ],
  },
  {
    id: 'ckqgnj3zo0031gyxx0dvs334c',
    name: 'Throw',
    url: '/wiki/Throw',
    type: 'passive',
    stats: [
      'Force: 850',
      'Damage on World Collision: 250',
      'Recharge Time (s): 10',
    ],
    description:
      'Hurls a gravity field projectile to throw unshielded and unarmored targets away and detonate combo primers.\n\nCombine with the Pull power to hurl held targets.\n',
    ranks: [
      {
        id: 'ckqgnj3zm002fgyxx672td8q3',
        rank: 1,
        name: 'Throw',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/4/4e/Throw_1_Icon.png/revision/latest/scale-to-width-down/70?cb=20181202044843',
        description:
          ' Hurls a gravity field projectile to throw unshielded and unarmored targets away and detonate combo primers.\n\nCombine with the Pull power to hurl held targets.',
        bonuses: [
          {
            id: 'ckqgnj3zm002ggyxxb8ynhhc9',
            text: 'Force: 850',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj3zm002hgyxxer5ldtsp',
            text: 'Damage on World Collision: 250',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj3zm002igyxxbe533m3r',
            text: 'Recharge Time (s): 10',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj3zm002jgyxxgsawbsbk',
        rank: 2,
        name: 'Recharge Speed',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/5/5a/Annihilation_2_-_Recharge_Penalty_Icon.png/revision/latest/scale-to-width-down/70?cb=20181202180339',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj3zm002kgyxx1sr8bm07',
            text: '+25% Recharge Speed',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj3zm002lgyxxf2yn9cdr',
        rank: 3,
        name: 'Damage & Force',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/4/4b/Annihilation_3_-_Damage_Icon.png/revision/latest/scale-to-width-down/70?cb=20181202180340',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj3zm002mgyxxh4dv3v38',
            text: '+20% All Damage',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj3zm002ngyxxck3dd36u',
            text: '+20% All Force',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj3zn002ogyxxetvz7urv',
        rank: 4,
        name: 'Damage & Force',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/4/4b/Annihilation_3_-_Damage_Icon.png/revision/latest/scale-to-width-down/70?cb=20181202180340',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj3zn002pgyxxbg544bib',
            text: '+30% All Damage',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj3zn002qgyxx85iv9irp',
            text: '+30% All Force',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj3zn002rgyxxcjyedyku',
        rank: 4,
        name: 'Radius',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/b/bd/Annihilation_4a_-_Radius_Icon.png/revision/latest/scale-to-width-down/70?cb=20181202180340',
        description: 'Throw affects nearby enemies in a radius.',
        bonuses: [
          {
            id: 'ckqgnj3zn002sgyxx5t1vaul4',
            text: 'Radius (m): 2.5',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj3zn002tgyxx42e59s2s',
        rank: 5,
        name: 'Duration',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/f/f2/Pull_3_-_Duration_Icon.png/revision/latest/scale-to-width-down/70?cb=20181207060917',
        description:
          ' Extends float duration and length of time targets are primed for combo detonations.',
        bonuses: [
          {
            id: 'ckqgnj3zn002ugyxx6h4m7u0v',
            text: '+400% Duration',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj3zo002vgyxxhmhc92jq',
        rank: 5,
        name: 'Recharge Speed',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/5/5a/Annihilation_2_-_Recharge_Penalty_Icon.png/revision/latest/scale-to-width-down/70?cb=20181202180339',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj3zo002wgyxx20yhfjkt',
            text: '+30% Recharge Speed',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj3zo002xgyxxekx46odr',
        rank: 6,
        name: 'Double Throw',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/5/5d/Throw_6a_-_Double_Throw_Icon.png/revision/latest/scale-to-width-down/70?cb=20181202044848',
        description: 'Launches two projectiles that seek separate targets.',
        bonuses: [],
      },
      {
        id: 'ckqgnj3zo002ygyxx5oxfdgh8',
        rank: 6,
        name: 'Swift Detonation',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/5/5e/Throw_6b_-_Swift_Detonation_Icon.png/revision/latest/scale-to-width-down/70?cb=20181202044848',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj3zo002zgyxx2u21d7b3',
            text: '+30% Combo Detonation Damage',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj3zo0030gyxxcaho17fm',
            text: '+50% Recharge Speed',
            value: 0,
            attribute: '',
          },
        ],
      },
    ],
  },
  {
    id: 'ckqgnj45n0058gyxxaivf1veh',
    name: 'Charge',
    url: '/wiki/Charge',
    type: 'passive',
    stats: [
      'Damage: 275',
      'Force: 500',
      'Recharge Time (s): 8',
      'Shields Restored: 50%',
    ],
    description:
      "Alters the biotic's mass, launching the user at an opponent. Restores some shield strengt at the charge's end. Charge detonates combo primers on targets.\n",
    ranks: [
      {
        id: 'ckqgnj45k004hgyxx92o96z34',
        rank: 1,
        name: 'Charge',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/f/fe/Charge_1_Icon.png/revision/latest/scale-to-width-down/70?cb=20181201191502',
        description:
          " Alters the biotic's mass, launching the user at an opponent. Restores some shield strength at the charge's end. Charge detonates combo primers on targets.",
        bonuses: [
          {
            id: 'ckqgnj45k004igyxxduikfjjl',
            text: 'Damage: 275',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj45k004jgyxxhkwb1lho',
            text: 'Force: 500',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj45k004kgyxxbukz2tjo',
            text: 'Recharge Time (s): 8',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj45k004lgyxx877sdjxv',
            text: 'Shields Restored: 50%',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj45k004mgyxx5s8a9fj4',
        rank: 2,
        name: 'Recharge Speed',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/5/5a/Annihilation_2_-_Recharge_Penalty_Icon.png/revision/latest/scale-to-width-down/70?cb=20181202180339',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj45k004ngyxxdsee12p0',
            text: '+35% Recharge Speed',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj45l004ogyxxh7iq6ax1',
        rank: 3,
        name: 'Damage & Force',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/4/4b/Annihilation_3_-_Damage_Icon.png/revision/latest/scale-to-width-down/70?cb=20181202180340',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj45l004pgyxxb19803u1',
            text: '+25% Damage',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj45l004qgyxxghdc4ils',
            text: '+25% Force',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj45l004rgyxx6kuz912p',
        rank: 4,
        name: 'Damage & Force',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/4/4b/Annihilation_3_-_Damage_Icon.png/revision/latest/scale-to-width-down/70?cb=20181202180340',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj45l004sgyxx3p6tb57b',
            text: '+35% Damage',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj45l004tgyxxbuj7dwbt',
            text: '+35% Force',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj45l004ugyxx0g773lxv',
        rank: 4,
        name: 'Radius',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/b/bd/Annihilation_4a_-_Radius_Icon.png/revision/latest/scale-to-width-down/70?cb=20181202180340',
        description:
          'Damages enemies within a radius at the end point of the charge.',
        bonuses: [
          {
            id: 'ckqgnj45l004vgyxx2ek467kj',
            text: 'Radius (m): 3.5',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj45l004wgyxxfpxiajek',
        rank: 5,
        name: 'Weapons & Melee',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/b/b7/Charge_5a_-_Weapons_%26_Melee_Icon.png/revision/latest/scale-to-width-down/70?cb=20181201191506',
        description:
          'Improves weapon and melee damage for 3 sec after charging.',
        bonuses: [
          {
            id: 'ckqgnj45m004xgyxx07um3k5x',
            text: 'Gun Damage Bonus: 15%',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj45m004ygyxxfv6x8ie4',
            text: 'Melee Damage Bonus: 30%',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj45m004zgyxx200e7r7g',
        rank: 5,
        name: 'Power Synergy',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/e/e7/Charge_5b_-_Power_Synergy_Icon.png/revision/latest/scale-to-width-down/70?cb=20181201191506',
        description: 'Enhances all powers for 5 sec after charging.',
        bonuses: [
          {
            id: 'ckqgnj45m0050gyxx4de6874j',
            text: 'Power Damage Bonus: 25%',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj45m0051gyxx5p6n01gc',
            text: 'Power Force Bonus: 25%',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj45m0052gyxxd5pe0t1t',
        rank: 6,
        name: 'Shock Trooper',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/0/09/Charge_6a_-_Shock_Trooper_Icon.png/revision/latest/scale-to-width-down/70?cb=20181201191507',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj45m0053gyxx35rchgzx',
            text: '+75% Recharge Speed',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj45n0054gyxxacm520kq',
        rank: 6,
        name: 'Bastion',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/3/3f/Charge_6b_-_Bastion_Icon.png/revision/latest/scale-to-width-down/70?cb=20181201191508',
        description:
          'Fully restores shields and reduces incoming damage for 5 sec.',
        bonuses: [
          {
            id: 'ckqgnj45n0055gyxxgglddn6t',
            text: 'Damage Resistance: 75',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj45n0056gyxx1ff83dec',
            text: '+50% Shields Restored',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj45n0057gyxx8qjo4jl6',
            text: '+35% Damage',
            value: 0,
            attribute: '',
          },
        ],
      },
    ],
  },
  {
    id: 'ckqgnj4c30072gyxxc7jyhh2t',
    name: 'Nova',
    url: '/wiki/Nova',
    type: 'passive',
    stats: [
      'Area Damage: 450',
      'Effect Radius (m): 4',
      'Force: 450',
      'Recharge Time (s):12',
    ],
    description:
      'Channels energy into a point-blank, high-damage explosion around the user.\n',
    ranks: [
      {
        id: 'ckqgnj4c0006fgyxx7otu7xti',
        rank: 1,
        name: 'Nova',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/2/26/Nova_1_Icon.png/revision/latest/scale-to-width-down/70?cb=20181207012136',
        description:
          'Channels energy into a point-blank, high-damage explosion around the user.',
        bonuses: [
          {
            id: 'ckqgnj4c0006ggyxxemcy03pr',
            text: 'Area Damage: 450',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj4c0006hgyxxg0og9jys',
            text: 'Effect Radius (m): 4',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj4c0006igyxxbgdz7mef',
            text: 'Force: 450',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj4c0006jgyxx5f3chgwu',
            text: 'Recharge Time (s):12',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj4c1006kgyxx6auk0c0k',
        rank: 2,
        name: 'Radius',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/b/bd/Annihilation_4a_-_Radius_Icon.png/revision/latest/scale-to-width-down/70?cb=20181202180340',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj4c1006lgyxx6ybygnsc',
            text: '+25% Damage Radius',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj4c1006mgyxxh7iqbns4',
        rank: 3,
        name: 'Damage & Force',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/4/4b/Annihilation_3_-_Damage_Icon.png/revision/latest/scale-to-width-down/70?cb=20181202180340',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj4c1006ngyxxeeni6gmt',
            text: '+20% Damage',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj4c1006ogyxx2bt22el4',
            text: '+25% Force',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj4c1006pgyxx9mtd83ud',
        rank: 4,
        name: 'Damage & Force',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/4/4b/Annihilation_3_-_Damage_Icon.png/revision/latest/scale-to-width-down/70?cb=20181202180340',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj4c1006qgyxxf9mt6dnr',
            text: '+30% Damage',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj4c1006rgyxxcj979g4y',
            text: '+30% Force',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj4c1006sgyxx6it4gbkk',
        rank: 4,
        name: 'Radius',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/b/bd/Annihilation_4a_-_Radius_Icon.png/revision/latest/scale-to-width-down/70?cb=20181202180340',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj4c1006tgyxxdieqfabc',
            text: '+40% Damage Radius',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj4c2006ugyxx94wgg0y8',
        rank: 5,
        name: 'Anti-Armor',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/b/b9/Nova_5a_-_Anti-Armor_Icon.png/revision/latest/scale-to-width-down/70?cb=20181207012141',
        description: 'Increased damage to enemy armor.',
        bonuses: [
          {
            id: 'ckqgnj4c2006vgyxxdjlcat62',
            text: '+60% Damage vs. Armor',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj4c2006wgyxxdiy805dd',
        rank: 5,
        name: 'Anti-Shield',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/b/b3/Lance_5b_-_Anti-Shield_Icon.png/revision/latest/scale-to-width-down/70?cb=20181201210018',
        description: 'Increased damage to enemy shields.',
        bonuses: [
          {
            id: 'ckqgnj4c2006xgyxxgseh9xwi',
            text: '+60% Damage vs. Shields',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj4c2006ygyxx51w6aqdm',
        rank: 6,
        name: 'Seismic Nova',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/8/8f/Lance_6a_-_Knockdown_Icon.png/revision/latest/scale-to-width-down/70?cb=20181201210015',
        description:
          ' Knocks enemies to the ground and primes them for combo detonations. Only unarmored, unshielded, normal-sized enemies are affected.',
        bonuses: [
          {
            id: 'ckqgnj4c2006zgyxxelmb37ak',
            text: '+30% Damage',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj4c30070gyxxc0wlhl2j',
        rank: 6,
        name: 'Shield-Powered',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/3/3f/Lance_6b_-_Shield-Powered_Icon.png/revision/latest/scale-to-width-down/70?cb=20181201210018',
        description:
          'Nova has no recharge time, but consumes shields when used.',
        bonuses: [
          {
            id: 'ckqgnj4c30071gyxx1p8qcldq',
            text: 'Shield Cost: 100%',
            value: 0,
            attribute: '',
          },
        ],
      },
    ],
  },
  {
    id: 'ckqgnj4ia0099gyxx9a8nddvt',
    name: 'Shockwave',
    url: '/wiki/Shockwave',
    type: 'passive',
    stats: [
      'Damage: 260',
      'Force: 525',
      'Effect Radius (m): 1.5',
      'Recharge Time (s): 15',
    ],
    description:
      'Blasts enemies with a line of explosions that proceeds through walls and other solid objects. Shockwave detonates combo primers.\n',
    ranks: [
      {
        id: 'ckqgnj4i7008ogyxxe5tb3q9e',
        rank: 1,
        name: 'Shockwave',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/9/9a/Shockwave_1_Icon.png/revision/latest/scale-to-width-down/70?cb=20181202060911',
        description:
          ' Blasts enemies with a line of explosions that proceeds through walls and other solid objects. Shockwave detonates combo primers.',
        bonuses: [
          {
            id: 'ckqgnj4i7008pgyxx9ifshanh',
            text: 'Damage: 260',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj4i7008qgyxxgc227jeh',
            text: 'Force: 525',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj4i7008rgyxx7gq1h92i',
            text: 'Effect Radius (m): 1.5',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj4i8008sgyxxf1d7ch9w',
            text: 'Recharge Time (s): 15',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj4i8008tgyxxgcylf1uc',
        rank: 2,
        name: 'Recharge Speed',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/5/5a/Annihilation_2_-_Recharge_Penalty_Icon.png/revision/latest/scale-to-width-down/70?cb=20181202180339',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj4i8008ugyxxbf068imy',
            text: '+20% Recharge Speed',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj4i8008vgyxx5ec19dsn',
        rank: 3,
        name: 'Damage & Force',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/4/4b/Annihilation_3_-_Damage_Icon.png/revision/latest/scale-to-width-down/70?cb=20181202180340',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj4i8008wgyxx4z0ufw2k',
            text: '+20% Damage',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj4i8008xgyxxdq5v17dm',
            text: '+20% Force',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj4i9008ygyxxb3fc5yoo',
        rank: 4,
        name: 'Damage & Force',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/4/4b/Annihilation_3_-_Damage_Icon.png/revision/latest/scale-to-width-down/70?cb=20181202180340',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj4i9008zgyxxciz5d0ix',
            text: '+30% Damage',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj4i90090gyxx8khpamyg',
            text: '+30% Force',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj4i90091gyxx7a7ycavm',
        rank: 4,
        name: 'Radius',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/b/bd/Annihilation_4a_-_Radius_Icon.png/revision/latest/scale-to-width-down/70?cb=20181202180340',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj4i90092gyxx9zxr9wcn',
            text: '+100% Damage Radius',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj4i90093gyxxduztexb4',
        rank: 5,
        name: 'Recharge Speed',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/5/5a/Annihilation_2_-_Recharge_Penalty_Icon.png/revision/latest/scale-to-width-down/70?cb=20181202180339',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj4i90094gyxxc6dbgll4',
            text: '+35% Recharge Speed',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj4ia0095gyxxfn7m0m29',
        rank: 5,
        name: 'Reach',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/1/16/Shockwave_5b_-_Reach_Icon.png/revision/latest/scale-to-width-down/70?cb=20181202060915',
        description: 'Increases maximum Shockwave distance by 50%.',
        bonuses: [],
      },
      {
        id: 'ckqgnj4ia0096gyxxf0qcexc0',
        rank: 6,
        name: 'Anti-Armor',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/b/b3/Lance_5b_-_Anti-Shield_Icon.png/revision/latest/scale-to-width-down/70?cb=20181201210018',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj4ia0097gyxx9ug3dfwc',
            text: '+75% Damage vs. Armor',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj4ia0098gyxxeg7g5qko',
        rank: 6,
        name: 'Lifting Shockwave',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/8/8f/Lance_6a_-_Knockdown_Icon.png/revision/latest/scale-to-width-down/70?cb=20181201210015',
        description:
          ' Affected enemies are briefly suspended in midair and primed for combo detonations.',
        bonuses: [],
      },
    ],
  },
  {
    id: 'ckqgnj4o600b8gyxxh5fmfj0j',
    name: 'Annihilation',
    url: '/wiki/Annihilation',
    type: 'passive',
    stats: [
      'Effect Radius (m): 3.5',
      'Damage per Second: 55',
      'Power Recharge Penalty: 75%',
      'Recharge Time (s): 8',
    ],
    description:
      'Weaves rapidly shifting mass effect fields to slowly damage nearby enemies. Enemies caught are primed for combo detonations. Other powers activated while Annihilation is in use suffer reduced recharge speed.\n',
    ranks: [
      {
        id: 'ckqgnj4o400apgyxx2lj42ez2',
        rank: 1,
        name: 'Annihilation',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/7/7a/Annihilation_1_Icon.png/revision/latest/scale-to-width-down/70?cb=20181202180338',
        description:
          ' Weaves rapidly shifting mass effect fields to slowly damage nearby enemies. Enemies caught are primed for combo detonations. Other powers activated while Annihilation is in use suffer reduced recharge speed.',
        bonuses: [
          {
            id: 'ckqgnj4o400aqgyxx8kpafj98',
            text: 'Effect Radius (m): 3.5',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj4o400argyxx86hc3niq',
            text: 'Damage per Second: 55',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj4o400asgyxxara72xaq',
            text: 'Power Recharge Penalty: 75%',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj4o400atgyxxhcms46ur',
            text: 'Recharge Time (s): 8',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj4o400augyxxfbzdhkta',
        rank: 2,
        name: 'Recharge Penalty',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/5/5a/Annihilation_2_-_Recharge_Penalty_Icon.png/revision/latest/scale-to-width-down/70?cb=20181202180339',
        description: 'Reduces the recharge speed penalty on other powers.',
        bonuses: [
          {
            id: 'ckqgnj4o500avgyxx09babbl1',
            text: '-10% Power Recharge Penalty',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj4o500awgyxxdewqeidh',
        rank: 3,
        name: 'Damage',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/4/4b/Annihilation_3_-_Damage_Icon.png/revision/latest/scale-to-width-down/70?cb=20181202180340',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj4o500axgyxx8ilaapi7',
            text: '+15% Damage',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj4o500aygyxx07s1guwi',
        rank: 4,
        name: 'Radius',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/b/bd/Annihilation_4a_-_Radius_Icon.png/revision/latest/scale-to-width-down/70?cb=20181202180340',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj4o500azgyxx8r55hrz4',
            text: '+35% Damage Radius',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj4o500b0gyxx3gaq2n6x',
        rank: 4,
        name: 'Recharge Penalty',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/5/5a/Annihilation_2_-_Recharge_Penalty_Icon.png/revision/latest/scale-to-width-down/70?cb=20181202180339',
        description: 'Reduces the recharge speed penalty on other powers.',
        bonuses: [
          {
            id: 'ckqgnj4o500b1gyxx812welqk',
            text: '-30% Power Recharge Penalty',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj4o500b2gyxxd59d2vmj',
        rank: 5,
        name: 'Damage Attractor',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/c/c5/Annihilation_5a_-_Damage_Attractor_Icon.png/revision/latest/scale-to-width-down/70?cb=20181202180342',
        description:
          'Enemies affected take 20% additional damage from all sources.',
        bonuses: [],
      },
      {
        id: 'ckqgnj4o600b3gyxx60z7fhbl',
        rank: 5,
        name: 'Biotic Wind',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/d/d0/Annihilation_5b_-_Biotic_Wind_Icon.png/revision/latest/scale-to-width-down/70?cb=20181202180343',
        description:
          "Increases movement speed for all allies (including the user) within Annihilation's radius.",
        bonuses: [
          {
            id: 'ckqgnj4o600b4gyxxh3wlgvke',
            text: 'Movement Speed Bonus: 25%',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj4o600b5gyxx8jjc8q3o',
        rank: 6,
        name: 'Draining Field',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/a/a5/Annihilation_6a_-_Draining_Field_Icon.png/revision/latest/scale-to-width-down/70?cb=20181202180343',
        description:
          'Partially restores shields for all allies (including the user) within 8 m when an enemy affected by Annihilation dies.',
        bonuses: [
          {
            id: 'ckqgnj4o600b6gyxx5gimcjud',
            text: 'Shields Restored: 30%',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj4o600b7gyxxeo81b6o3',
        rank: 6,
        name: 'Vortex',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/8/89/Annihilation_6b_-_Vortex_Icon.png/revision/latest/scale-to-width-down/70?cb=20181202180344',
        description:
          'Unarmored, unshielded, normal-sized enemies are lifted into the air for 8 sec. Each enemy can only be affected once every 15 sec.',
        bonuses: [],
      },
    ],
  },
  {
    id: 'ckqgnj4u700d7gyxx5hgv6ifw',
    name: 'Backlash',
    url: '/wiki/Backlash',
    type: 'passive',
    stats: [
      'Aegis Health: 300',
      'Projectile Damage Returned: 120%',
      'Frontal Damage Resistance: 75',
      'Recharge Time (s): 20',
    ],
    description:
      'HOLD BUTTON: Generates a frontal biotic aegis barrier that reflects most projectiles and reduces the damage of other enemy attacks. A well-timed initial activation interrupts melee attacks.\n',
    ranks: [
      {
        id: 'ckqgnj4u500clgyxxeegncxfd',
        rank: 1,
        name: 'Backlash',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/e/ea/Backlash_1_Icon.png/revision/latest/scale-to-width-down/70?cb=20181207005210',
        description:
          'HOLD BUTTON: Generates a frontal biotic aegis barrier that reflects most projectiles and reduces the damage of other enemy attacks. A well-timed initial activation interrupts melee attacks.',
        bonuses: [
          {
            id: 'ckqgnj4u500cmgyxx4nsl1n0o',
            text: 'Aegis Health: 300',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj4u500cngyxx0a33cwbr',
            text: 'Projectile Damage Returned: 120%',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj4u500cogyxx2pbm1wl8',
            text: 'Frontal Damage Resistance: 75',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj4u500cpgyxxayogaut7',
            text: 'Recharge Time (s): 20',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj4u500cqgyxxhswd4xf5',
        rank: 2,
        name: 'Recharge Speed',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/5/5a/Annihilation_2_-_Recharge_Penalty_Icon.png/revision/latest/scale-to-width-down/70?cb=20181202180339',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj4u500crgyxxahmwcn53',
            text: '+25% Recharge Speed',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj4u600csgyxx6r9tcbf8',
        rank: 3,
        name: 'Durability',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/2/2b/Backlash_3_-_Durability_Icon.png/revision/latest/scale-to-width-down/70?cb=20181207005213',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj4u600ctgyxx4dde6jkc',
            text: '+35% Aegis Health',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj4u600cugyxx1agz1954',
        rank: 4,
        name: 'Durability',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/2/2b/Backlash_3_-_Durability_Icon.png/revision/latest/scale-to-width-down/70?cb=20181207005213',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj4u600cvgyxx8iel0zlc',
            text: '+40% Aegis Health',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj4u600cwgyxx6vb76eg0',
        rank: 4,
        name: 'Recharge Speed',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/5/5a/Annihilation_2_-_Recharge_Penalty_Icon.png/revision/latest/scale-to-width-down/70?cb=20181202180339',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj4u600cxgyxx0kav58k4',
            text: '+40% Recharge Speed',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj4u600cygyxxex438h5i',
        rank: 5,
        name: 'Durability',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/2/2b/Backlash_3_-_Durability_Icon.png/revision/latest/scale-to-width-down/70?cb=20181207005213',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj4u600czgyxx92cp58jv',
            text: '+40% Aegis Health',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj4u700d0gyxx90wcd6wq',
        rank: 5,
        name: 'Reflection',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/1/16/Backlash_5b_-_Reflection_Icon.png/revision/latest/scale-to-width-down/70?cb=20181207005221',
        description: 'Reflected projectiles inflict more damage.',
        bonuses: [
          {
            id: 'ckqgnj4u700d1gyxxen702hhi',
            text: '+100% Projectile Damage Returned',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj4u700d2gyxx6fsj0jne',
        rank: 6,
        name: 'Shield Resurgence',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/a/a5/Annihilation_6a_-_Draining_Field_Icon.png/revision/latest/scale-to-width-down/70?cb=20181202180343',
        description:
          'Restores shields over 3 sec after releasing Backlash. Can restore up to 50% of shield strength, scaled to damage absorbed by the aegis.',
        bonuses: [],
      },
      {
        id: 'ckqgnj4u700d3gyxx6ss265d5',
        rank: 6,
        name: 'Damage Aftermath',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/4/4b/Annihilation_3_-_Damage_Icon.png/revision/latest/scale-to-width-down/70?cb=20181202180340',
        description:
          'Increases damage inflicted for 3 sec after releasing Backlash. Scales with the amount of damage absorbed by the aegis.',
        bonuses: [
          {
            id: 'ckqgnj4u700d4gyxx732b5suo',
            text: '+20% Gun Damage Bonus',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj4u700d5gyxxeoeybfgr',
            text: '+30% Power Damage Bonus',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj4u700d6gyxx333p65fb',
            text: '+30% Melee Damage Bonus',
            value: 0,
            attribute: '',
          },
        ],
      },
    ],
  },
  {
    id: 'ckqgnj50400f2gyxxcz0sb7lp',
    name: 'Singularity',
    url: '/wiki/Singularity',
    type: 'passive',
    stats: [
      'Damage per Second: 35',
      'Radius (m): 3',
      'Duration (s): 8',
      'Recharge Time (s): 24',
    ],
    description:
      'TAP BUTTON: Deploys a gravity well that lifts and damages unshielded and unarmored enemies. Primes enemies for combo detonations.\n\nTAP AGAIN: End the effect early.\n',
    ranks: [
      {
        id: 'ckqgnj50200eigyxxb4gag9fu',
        rank: 1,
        name: 'Singularity',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/f/f0/Singularity_1_Icon.png/revision/latest/scale-to-width-down/70?cb=20181205064531',
        description:
          ' TAP BUTTON: Deploys a gravity well that lifts and damages unshielded and unarmored enemies.\nPrimes enemies for combo detonations.\n\nTAP AGAIN: End the effect early.',
        bonuses: [
          {
            id: 'ckqgnj50200ejgyxx4d5fcoxy',
            text: 'Damage per Second: 35',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj50200ekgyxx3v5kgalb',
            text: 'Radius (m): 3',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj50200elgyxxcya351g3',
            text: 'Duration (s): 8',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj50200emgyxxcav44s3y',
            text: 'Recharge Time (s): 24',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj50200engyxxhdip1uhe',
        rank: 2,
        name: 'Recharge Speed',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/5/5a/Annihilation_2_-_Recharge_Penalty_Icon.png/revision/latest/scale-to-width-down/70?cb=20181202180339',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj50200eogyxxa6gs7fly',
            text: '+10% Recharge Speed',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj50300epgyxx8feadqgi',
        rank: 3,
        name: 'Damage',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/4/4b/Annihilation_3_-_Damage_Icon.png/revision/latest/scale-to-width-down/70?cb=20181202180340',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj50300eqgyxxbsvgc90m',
            text: '+25% Damage per Second',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj50300ergyxx0nfo8fuc',
        rank: 4,
        name: 'Duration',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/f/f2/Pull_3_-_Duration_Icon.png/revision/latest/scale-to-width-down/70?cb=20181207060917',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj50300esgyxxahtw6ths',
            text: '+40% Duration',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj50300etgyxx2568gwfz',
        rank: 4,
        name: 'Radius',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/b/bd/Annihilation_4a_-_Radius_Icon.png/revision/latest/scale-to-width-down/70?cb=20181202180340',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj50300eugyxxax8e98o7',
            text: '+25% Effect Radius',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj50300evgyxxawy3hc2h',
        rank: 5,
        name: 'Anti-Shield',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/b/b3/Lance_5b_-_Anti-Shield_Icon.png/revision/latest/scale-to-width-down/70?cb=20181201210018',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj50300ewgyxxccmg8064',
            text: '+100% Damage vs. Shields',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj50300exgyxx4cmka191',
        rank: 5,
        name: 'Recharge Speed',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/5/5a/Annihilation_2_-_Recharge_Penalty_Icon.png/revision/latest/scale-to-width-down/70?cb=20181202180339',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj50300eygyxxh0yd4b2q',
            text: '+40% Recharge Speed',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj50400ezgyxx7tyv15r7',
        rank: 6,
        name: 'Exploding Singularity',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/a/a7/Singularity_6a_-_Exploding_Singularity_Icon.png/revision/latest/scale-to-width-down/70?cb=20181205064536',
        description:
          'The singularity explodes after the effect ends, dealing damage in a 7m radius.',
        bonuses: [
          {
            id: 'ckqgnj50400f0gyxxdpy92j6x',
            text: 'Area Damage: 350',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj50400f1gyxxe3iq0pqy',
        rank: 6,
        name: 'Expanding Singularity',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/b/b9/Singularity_6b_-_Expanding_Singularity_Icon.png/revision/latest/scale-to-width-down/70?cb=20181205064536',
        description: 'Radius expands by 200% over the singularity lifetime.',
        bonuses: [],
      },
    ],
  },
  {
    id: 'ckqgnj56000gygyxx2dzs90dd',
    name: 'Lance',
    url: '/wiki/Lance',
    type: 'passive',
    stats: [
      'Damage: 320',
      'Force: 400',
      'Impact Radius: 1',
      'Recharge Time (s): 10',
    ],
    description:
      'Devastates a small area with a swiftly thrown shaft of energy. Inflicts bonus damage against enemy weak points (such as heads) and detonates combo primers.\n',
    ranks: [
      {
        id: 'ckqgnj55y00gagyxx14j93dbx',
        rank: 1,
        name: 'Lance',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/8/8a/Lance_1_Icon.png/revision/latest/scale-to-width-down/70?cb=20181201210011',
        description:
          ' Devastates a small area with a swiftly thrown shaft of energy. Inflicts bonus damage against enemy weak points (such as heads) and detonates combo primers.',
        bonuses: [
          {
            id: 'ckqgnj55y00gbgyxxfwcv36vl',
            text: 'Damage: 320',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj55y00gcgyxxhlam4nxg',
            text: 'Force: 400',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj55y00gdgyxxbcicbm3y',
            text: 'Impact Radius: 1',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj55y00gegyxxg5bx29in',
            text: 'Recharge Time (s): 10',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj55z00gfgyxx1l7a4lp1',
        rank: 2,
        name: 'Recharge Speed',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/5/5a/Annihilation_2_-_Recharge_Penalty_Icon.png/revision/latest/scale-to-width-down/70?cb=20181202180339',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj55z00gggyxx9bvhfoi8',
            text: '+10% Recharge Speed',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj55z00ghgyxxeezn4u83',
        rank: 3,
        name: 'Damage & Force',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/4/4b/Annihilation_3_-_Damage_Icon.png/revision/latest/scale-to-width-down/70?cb=20181202180340',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj55z00gigyxxbw942h84',
            text: '+15% Damage',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj55z00gjgyxx797rbykl',
            text: '+15% Force',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj55z00gkgyxxh1c34xg3',
        rank: 4,
        name: 'Damage & Force',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/4/4b/Annihilation_3_-_Damage_Icon.png/revision/latest/scale-to-width-down/70?cb=20181202180340',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj55z00glgyxx7kfx2309',
            text: '+20% Damage',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj55z00gmgyxx59kofxch',
            text: '+20% Force',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj55z00gngyxx5b1f3vgj',
        rank: 4,
        name: 'Radius',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/b/bd/Annihilation_4a_-_Radius_Icon.png/revision/latest/scale-to-width-down/70?cb=20181202180340',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj55z00gogyxxfti3b4sy',
            text: '+100% Damage Radius',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj56000gpgyxxbrbn3hlk',
        rank: 5,
        name: 'Focused Blast',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/d/de/Lance_5a_-_Focused_Blast_Icon.png/revision/latest/scale-to-width-down/70?cb=20181201210014',
        description:
          'Increases bonus damage against heads and other weak points.',
        bonuses: [
          {
            id: 'ckqgnj56000gqgyxx8v0fcdcp',
            text: '+40% Headshot/Weak Point Bonus',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj56000grgyxx2pij8y6s',
        rank: 5,
        name: 'Anti-Shield',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/b/b3/Lance_5b_-_Anti-Shield_Icon.png/revision/latest/scale-to-width-down/70?cb=20181201210018',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj56000gsgyxxdrfkeyv9',
            text: '+35% Damage vs. Shields',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj56000gtgyxx0of95svn',
        rank: 6,
        name: 'Knockdown',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/8/8f/Lance_6a_-_Knockdown_Icon.png/revision/latest/scale-to-width-down/70?cb=20181201210015',
        description:
          "Enemies within 1.5m of the blast's impact are knocked to the ground. Only unarmored, unshielded, normal-sized enemies are affected.",
        bonuses: [
          {
            id: 'ckqgnj56000gugyxxc3wfgwm2',
            text: '+20% Damage',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj56000gvgyxx9zrs12kj',
            text: '+20% Force',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj56000gwgyxx50gdbttx',
        rank: 6,
        name: 'Shield-Powered',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/3/3f/Lance_6b_-_Shield-Powered_Icon.png/revision/latest/scale-to-width-down/70?cb=20181201210018',
        description:
          'Lance has no recharge time, but consumes shields when used.',
        bonuses: [
          {
            id: 'ckqgnj56000gxgyxx0ytqhxss',
            text: 'Shield Cost: 45%',
            value: 0,
            attribute: '',
          },
        ],
      },
    ],
  },
  {
    id: 'ckqgnj5c500j0gyxxagqpeagl',
    name: 'Barrier',
    url: '/wiki/Barrier',
    type: 'passive',
    stats: ['+2% Max Shields'],
    description:
      'Specialized training reinforces ordinary shields with biotically empowered mass effect fields.\n',
    ranks: [
      {
        id: 'ckqgnj5c300icgyxxejxs2wbc',
        rank: 1,
        name: 'Barrier',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/9/94/Barrier_1_Icon.png/revision/latest/scale-to-width-down/70?cb=20181207041418',
        description:
          'Maximum shield strength scales with each skill point invested in the Biotic Skill Group.',
        bonuses: [
          {
            id: 'ckqgnj5c300idgyxx8nvj72ej',
            text: '+2% Max Shields',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj5c300iegyxxh7kp3xji',
        rank: 2,
        name: 'Barrier Speed',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/d/dd/Barrier_2_-_Barrier_Regeneration_Icon.png/revision/latest/scale-to-width-down/70?cb=20181207044624',
        description:
          'Decreases the delay before shields begin regenerating with each skill point invested in the Biotic Skill Group.',
        bonuses: [
          {
            id: 'ckqgnj5c300ifgyxx3gn9btgd',
            text: '+2% Health &amp; Shield Regeneration Delay Reduction',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj5c400iggyxxh85nficf',
        rank: 3,
        name: 'Barrier Regeneration',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/0/09/Barrier_3_-_Barrier_Regeneration_Icon.png/revision/latest/scale-to-width-down/70?cb=20181207041420',
        description:
          'Increases shield regeneration speed with each skill point invested in the Biotic Skill Group.',
        bonuses: [
          {
            id: 'ckqgnj5c400ihgyxx37sygr8u',
            text: '+2% Shield Regeneration',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj5c400iigyxxdpzu6nxv',
        rank: 4,
        name: 'Unyielding Barrier',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/c/c9/Barrier_4a_-_Unyielding_Barrier_Icon.png/revision/latest/scale-to-width-down/70?cb=20181207041421',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj5c400ijgyxx5zo26tp2',
            text: '+10% Max Shields',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj5c400ikgyxxbtv9bdf0',
        rank: 4,
        name: 'Recuperative Barrier',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/5/5d/Barrier_4b_-_Recuperative_Barrier_Icon.png/revision/latest/scale-to-width-down/70?cb=20181207041422',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj5c400ilgyxx9wsvhs90',
            text: '+10% Health &amp; Shield Regeneration Delay Reduction',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj5c400imgyxx59z22gwj',
            text: '+10% Shield Regeneration',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj5c400ingyxx5q8uau7k',
        rank: 5,
        name: 'Biotic Link',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/e/e6/Barrier_5a_-_Biotic_Link_Icon.png/revision/latest/scale-to-width-down/70?cb=20181207041423',
        description:
          'Increases maximum shield strength while a biotic effect is active upon an enemy.',
        bonuses: [
          {
            id: 'ckqgnj5c400iogyxx05bifke7',
            text: 'Max Shields With an Active Biotic Effect: 40%',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj5c400ipgyxx0tbb1zzq',
            text: 'Biotic Link Cooldown (s): 5',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj5c500iqgyxx2jwxe6ha',
        rank: 5,
        name: 'Biotic Alacrity',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/2/2e/Barrier_5b_-_Biotic_Alacrity_Icon.png/revision/latest/scale-to-width-down/70?cb=20181207041424',
        description:
          'Reduces weapon weight and improves speed while shields are active. For biotic powers that deplete shields to activate, shield cost is reduced.',
        bonuses: [
          {
            id: 'ckqgnj5c500irgyxxdpfr8l1v',
            text: '+10% Weapon Weight Capacity',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj5c500isgyxx2qfo1045',
            text: '+10% Biotic Power Shield Cost Reduction',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj5c500itgyxxc03j1y6j',
            text: '+10% Movement Speed While Shields Active',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj5c500iugyxx16bq51js',
        rank: 6,
        name: 'Active Barrier',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/5/5f/Barrier_6a_-_Active_Barrier_Icon.png/revision/latest/scale-to-width-down/70?cb=20181207041426',
        description:
          'Restores shields after an enemy is killed by a biotic power. Also affects squadmates within 6 m.',
        bonuses: [
          {
            id: 'ckqgnj5c500ivgyxxgkoj3m90',
            text: 'Shields Restored on Biotic Kill: 10%',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj5c500iwgyxxe46ea17v',
        rank: 6,
        name: 'Saving Barrier',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/3/35/Barrier_6b_-_Saving_Barrier_Icon.png/revision/latest/scale-to-width-down/70?cb=20181207041428',
        description:
          'Automatically restores shields upon reaching low health on a cooldown.',
        bonuses: [
          {
            id: 'ckqgnj5c500ixgyxxbp02794e',
            text: 'Shields Restored at Low Health: 100%',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj5c500iygyxx9tdvadz4',
            text: 'Low Health Threshold: 20%',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj5c500izgyxx6lrm6xne',
            text: 'Saving Barrier Cooldown (s): 15',
            value: 0,
            attribute: '',
          },
        ],
      },
    ],
  },
  {
    id: 'ckqgnj5hs00ksgyxxhahn00hd',
    name: 'Offensive Biotics',
    url: '/wiki/Offensive_Biotics',
    type: 'passive',
    stats: ['+2% Biotic Power Damage'],
    description:
      'Allows a biotic to maximize damage against foes both directly and indirectly.\n',
    ranks: [
      {
        id: 'ckqgnj5hr00k7gyxx29oa2s8y',
        rank: 1,
        name: 'Offensive Biotics',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/7/77/Offensive_Biotics_1_Icon.png/revision/latest/scale-to-width-down/70?cb=20181202035029',
        description:
          'Increases biotic power damage and force with each skill point invested in the Biotic Skill Group.',
        bonuses: [
          {
            id: 'ckqgnj5hr00k8gyxxaslb7yr1',
            text: '+2% Biotic Power Damage',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj5hr00k9gyxxdvup5sei',
        rank: 2,
        name: 'Speed',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/0/00/Duelist_4b_-_Efficiency_Icon.png/revision/latest/scale-to-width-down/70?cb=20181207073814',
        description:
          'Improves biotic power recharge speeds with each skill point invested in the Biotic Skill Group.',
        bonuses: [
          {
            id: 'ckqgnj5hr00kagyxxek9y05q5',
            text: '+2% Biotic Recharge Speed',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj5hr00kbgyxx82uvbqx1',
        rank: 3,
        name: 'Detonators',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/3/39/Offensive_Biotics_3_-_Detonators_Icon.png/revision/latest/scale-to-width-down/70?cb=20181202035030',
        description:
          'Increases combo detonation damage from biotic detonators with each skill point invested in the Biotic Skill Group.',
        bonuses: [
          {
            id: 'ckqgnj5hr00kcgyxxe8nl7gd9',
            text: '+2% Biotic Detonator Damage Bonus',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj5hr00kdgyxx9grn4o0j',
        rank: 4,
        name: 'Amplitude',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/d/d4/Biotic_Ascension_2_-_Biotics_Icon.png/revision/latest/scale-to-width-down/70?cb=20181207082859',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj5hr00kegyxxezf74yxk',
            text: '+15% Biotic Power Damage',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj5hr00kfgyxxdrzf954p',
        rank: 4,
        name: 'Alacrity',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/6/6a/Offensive_Biotics_4b_-_Alacrity_Icon.png/revision/latest/scale-to-width-down/70?cb=20181202035032',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj5hr00kggyxx6cdydtwp',
            text: '+15% Biotic Recharge Speed',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj5hs00khgyxxe3r3cb1g',
        rank: 5,
        name: 'Exploitation',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/5/51/Offensive_Biotics_5a_-_Explotation_Icon.png/revision/latest/scale-to-width-down/70?cb=20181202035032',
        description:
          "Increases damage from all sources against enemies suffering ongoing effects of the user's biotic powers.",
        bonuses: [
          {
            id: 'ckqgnj5hs00kigyxxfbqxd90n',
            text: 'Defense Debuff from Biotic Effects: 20%',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj5hs00kjgyxxgvtj4dk4',
        rank: 5,
        name: 'Detonation',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/a/ac/Biotic_Ascension_5b_-_Combo_Detonation_Icon.png/revision/latest/scale-to-width-down/70?cb=20181207082900',
        description:
          'Increases combo detonation damage from biotic detonators and increases the radius of all combo detonations.',
        bonuses: [
          {
            id: 'ckqgnj5hs00kkgyxxclexfmwm',
            text: '+25% Biotic Detonator Damage Bonus',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj5hs00klgyxx07bv5cek',
            text: '+40% All Combo Radiuses',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj5hs00kmgyxxc9jo82zm',
        rank: 6,
        name: 'Biotic Expert',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/a/a0/Offensive_Biotics_6a_-_Biotic_Expert_Icon.png/revision/latest/scale-to-width-down/70?cb=20181202035034',
        description:
          'Increases power damage for 3 sec after using a biotic power.',
        bonuses: [
          {
            id: 'ckqgnj5hs00kngyxx5lsu1g1z',
            text: '+30% Biotic Damage Bonus',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj5hs00kogyxxcbgyf3c5',
        rank: 6,
        name: 'Biotic Warrior',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/1/1f/Duelist_6a_-_Biotic_Synergy_Icon.png/revision/latest/scale-to-width-down/70?cb=20181207073818',
        description:
          'Increases weapon and melee damage for 3 seconds after using a biotic power. During this time, melee attacks also knock down unarmored, unshielded, standard-sized enemies.',
        bonuses: [
          {
            id: 'ckqgnj5hs00kpgyxx8anwhqae',
            text: '+15% Weapon Damage Bonus',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj5hs00kqgyxx0ozb73vn',
            text: '+15% Melee Damage Bonus',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj5hs00krgyxx0psn7ibh',
            text: '+15% Melee Force',
            value: 0,
            attribute: '',
          },
        ],
      },
    ],
  },
  {
    id: 'ckqgnj5no00mkgyxx3kmv3ozg',
    name: 'Containment',
    url: '/wiki/Containment',
    type: 'passive',
    stats: ['+2% Biotic Effect Duration'],
    description:
      "Enhances a biotic's control over mass effect fields, allowing unsurpassed manipulation of enemies and objects.\n",
    ranks: [
      {
        id: 'ckqgnj5nm00m2gyxx069d5149',
        rank: 1,
        name: 'Containment',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/a/a8/Containment_1_Icon.png/revision/latest/scale-to-width-down/70?cb=20181207053213',
        description:
          'Increases the duration of biotic power effects with each skill point invested in the Biotic Skill Group.',
        bonuses: [
          {
            id: 'ckqgnj5nm00m3gyxxgo8r8t7v',
            text: '+2% Biotic Effect Duration',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj5nm00m4gyxxcvamfo05',
        rank: 2,
        name: 'Effectiveness',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/9/93/Containment_2_-_Effectiveness_Icon.png/revision/latest/scale-to-width-down/70?cb=20181207053213',
        description:
          'Improves biotic power force, biotic shield restoration effects, and defensive biotic effects with each skill point invested in the Biotic Skill Group.',
        bonuses: [
          {
            id: 'ckqgnj5nm00m5gyxxgadf12zj',
            text: '+2% Biotic Force',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj5nm00m6gyxxc0mt2cjh',
            text: '+5% Biotic Restoration &amp; Defense',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj5nn00m7gyxx9u5d3w4u',
        rank: 3,
        name: 'Anti-Shield',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/6/67/Containment_3_-_Anti-Shield_Icon.png/revision/latest/scale-to-width-down/70?cb=20181207053214',
        description:
          'Increases damage dealt to shields by biotic powers with each skill point invested in the Biotic Skill Group.',
        bonuses: [
          {
            id: 'ckqgnj5nn00m8gyxxgem9efcu',
            text: '+2% Biotic Damage Bonus to Shields',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj5nn00m9gyxx6pxcga5m',
        rank: 4,
        name: 'Radius',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/8/87/Containment_4a_-_Radius_Icon.png/revision/latest/scale-to-width-down/70?cb=20181207053215',
        description: 'Increases the radius of all biotic area effects.',
        bonuses: [
          {
            id: 'ckqgnj5nn00magyxx3d2t9dvd',
            text: '+15% Biotic Area of Effect Radius',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj5nn00mbgyxxf0j76huq',
        rank: 4,
        name: 'Duration',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/b/b6/Containment_4b_-_Duration_Icon.png/revision/latest/scale-to-width-down/70?cb=20181207053216',
        description: 'Increases the duration of biotic power effects.',
        bonuses: [
          {
            id: 'ckqgnj5nn00mcgyxx7blreqtc',
            text: '+15% Biotic Effect Duration',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj5nn00mdgyxx9k5v5giu',
        rank: 5,
        name: 'Shield Detonation',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/a/ac/Biotic_Ascension_5b_-_Combo_Detonation_Icon.png/revision/latest/scale-to-width-down/70?cb=20181207082900',
        description: 'Increases all combo detonation damage against shields.',
        bonuses: [
          {
            id: 'ckqgnj5nn00megyxxajhw5b7s',
            text: '+50% All Combo Damage vs. Shields',
            value: 0,
            attribute: '',
          },
        ],
      },
      {
        id: 'ckqgnj5no00mfgyxxgbgr5wo9',
        rank: 5,
        name: 'Concussive Detonation',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/a/ac/Biotic_Ascension_5b_-_Combo_Detonation_Icon.png/revision/latest/scale-to-width-down/70?cb=20181207082900',
        description:
          'Biotic combo detonations knock down unarmored, unshielded, normal-sized enemies.',
        bonuses: [],
      },
      {
        id: 'ckqgnj5no00mggyxx7ls29lde',
        rank: 6,
        name: 'Manifold Duration',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/b/b6/Containment_4b_-_Duration_Icon.png/revision/latest/scale-to-width-down/70?cb=20181207053216',
        description:
          'Increases duration of biotic power effects by 10% per affected enemy, up to a maximum of 40%.',
        bonuses: [],
      },
      {
        id: 'ckqgnj5no00mhgyxx0gh4eglo',
        rank: 6,
        name: 'Event Horizon',
        icon: 'https://static.wikia.nocookie.net/masseffectandromeda_gamepedia_en/images/d/d4/Biotic_Ascension_2_-_Biotics_Icon.png/revision/latest/scale-to-width-down/70?cb=20181207082859',
        description:
          'Increases the radius and force of all biotic area effects.',
        bonuses: [
          {
            id: 'ckqgnj5no00migyxx1h5h31fy',
            text: '+20% Biotic Area of Effect Radius',
            value: 0,
            attribute: '',
          },
          {
            id: 'ckqgnj5no00mjgyxx0zo2g3qp',
            text: '+40% Biotic Area of Effect Force',
            value: 0,
            attribute: '',
          },
        ],
      },
    ],
  },
]
