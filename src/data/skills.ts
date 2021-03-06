/* eslint-disable @typescript-eslint/no-non-null-assertion */
const BONUS = Object.freeze({
  DAMAGE: 'damage',
  MAXIMUM_DAMAGE: 'maximumDamage',
  INITIAL_DAMAGE: 'initialDamage',
  SHRAPNEL_DAMAGE: 'shrapnelDamage',
  SHRAPNEL_DAMAGE_VS_ARMOR: 'shrapnelDamageVsArmor',
  FORCE: 'force',
  RECHARGE_TIME: 'rechargeTime',
  AREA_DAMAGE: 'areaDamage',
  AREA_FORCE: 'areaForce',
  POWER_CELL_CAPACITY: 'powerCellCapacity',
  DAMAGE_PER_SECOND: 'damagePerSecond',
  DAMAGE_DURATION: 'damageDuration',
  DAMAGE_VS_ARMOR: 'damageVsArmor',
  DAMAGE_VS_SHIELD: 'damageVsShield',
  DAMAGE_VS_KNOCKED_DOWN: 'damageVsKnockedDown',
  DAMAGE_VS_SYNTHETICS: 'damageVsSynthetics',
  DURATION: 'duration',
  RADIUS: 'radius',
  REGENERATION_DELAY_REDUCTION: 'regenerationDelayReduction',
  GUN_DAMAGE_BONUS: 'gunDamageBonus',
  GUN_FORCE_BONUS: 'gunForceBonus',
  GUN_ACCURACY_BONUS: 'gunAccuracyBonus',
  GUN_STABILITY_BONUS: 'gunStabilityBonus',
  RATE_OF_FIRE_BONUS: 'rateOfFireBonus',
  CLIP_SIZE_BONUS: 'clipSizeBonus',
  TRIGGER_RADIUS: 'triggerRadius',
  LASER_RANGE: 'laserRange',
  COMBO_DETONATION_DAMAGE: 'comboDetonationDamage',
  STUN_DURATION: 'stunDuration',

  PISTOL_DAMAGE: 'pistolDamage',
  PISTOL_ACCURACY: 'pistolAccuracy',
  PISTOL_MOVEMENT_ACCURACY: 'pistolMovementAccuracy',
  ASSAULT_RIFLE_DAMAGE: 'assaultRifleDamage',
  ASSAULT_RIFLE_ACCURACY: 'assaultRifleAccuracy',
  ASSAULT_RIFLE_STABILITY: 'assaultRifleStability',
  SHOTGUN_DAMAGE: 'shotgunDamage',
  SHOTGUN_FORCE: 'shotgunForce',
  SHOTGUN_ACCURACTY: 'shotgunAccuracy',
  SHOTGUN_STABILITY: 'shotgunStability',
  SNIPER_RIFLE_DAMAGE: 'sniperRifleDamage',
  SNIPER_RIFLE_ACCURACY: 'sniperRifleAccuracy',
  SNIPER_RIFLE_HEADSHOT: 'sniperRifleHeadshot',

  MAX_HEALTH: 'maxHealth',
  MAX_SHIELDS: 'maxShields',
  WEAPON_LOADOUT_SIZE: 'weaponLoadoutSize',
  WEAPON_WEIGHT_CAPACITY: 'weaponWeightCapacity',
  COMBAT_DETONATOR_DAMAGE_BONUS: 'combatDetonatorDamageBonus',
  HOVER_DURATION: 'hoverDuration',
  WEAPON_ACCURACY_WHILE_AIRBORNE: 'weaponAccuracyWhileAirborne',

  INITIAL_DAMAGE_UNCHARGED: 'initialDamageUncharged',
  INITIAL_DAMAGE_CHARGED: 'initialDamageCharged',
  CHAIN_DAMAGE: 'chainDamage',

  BURNING_DURATION: 'burningDuration',
  SHIELD_DAMAGE_BONUS: 'shieldDamageBonus',
  SYNTHETIC_DAMAGE_BONUS: 'syntheticDamageBonus',
  ARMOR_DAMAGE_BONUS: 'armorDamageBonus',

  TURRET_HEALTH: 'turretHealth',
  DAMAGE_PER_SHOT: 'damagePerShot',
  AREA_DAMAGE_WHEN_DESTROYED: 'areaDamageWhenDestoryed',

  DEFENSE_DEBUFF_VS_ARMOR: 'defenseDebuffVsArmor',

  SHIELDS_RESTORED: 'shieldsRestored',

  POWER_DAMAGE_BONUS: 'powerDamageBonus',
  MELEE_DAMAGE_BONUS: 'meleeDamageBonus',
  COMBAT_POWER_DAMAGE: 'combatPowerDamage',
  TECH_POWER_DAMAGE: 'techPowerDamage',
  BIOTIC_POWER_DAMAGE: 'bioticPowerDamage',

  BURN_DAMAGE_PER_SECOND: 'burnDamagePerSecond',

  VI_HEALTH: 'viHealth',

  ENEMY_DEFENSE_DEBUFF: 'enemyDefenseDebuff',
  SPREAD_RADIUS: 'spreadRadius',

  TEAM_SHIELD: 'teamShield',
  POWER_RESTORATION_DEFENSE: 'powerRestorationDefense',
  TEAM_SHIELD_DELAY_REDUCTION: 'teamShieldDelayReduction',
  TEAM_SHIELD_REGENERATION: 'teamShieldRegenerations',
  TECH_CONSTRUCT_HEALTH_REGENERATION: 'techConstructHealthRegenration',

  TECH_RECHARGE_SPEED: 'techRechargeSpeed',
  TECH_DAMAGE_DETONATOR_BONUS: 'techDamageDetonatorBonus',
  TECH_EFFECT_DURATION: 'techEffectDuration',
  TECH_FORCE: 'techForce',
  TECH_CONSTRUCT_DAMAGE: 'techConstructDamage',
  TECH_CONSTRUCT_HEALTH: 'techConstractHealth',

  DAMAGE_ON_WORLD_COLLISION: 'damageOnWorldCollision',
  POWER_RECHARGE_PENALTY: 'powerRechargePenalty',

  AEGIS_HEALTH: 'aegisHealth',
  PROJECTILE_DAMAGE_RETURNED: 'projectileDamageReturned',
  FRONTAL_DAMAGE_RESISTANCE: 'frontalDamageResistance',

  HEALTH_SHIELD_REGENERATION_DELAY_REDUCTION:
    'healthShieldRegenerationDelayReduction',
  SHIELD_REGENERATION: 'shieldRegeneration',

  BIOTIC_RECHARGE_SPEED: 'bioticRechargeSpeed',
  BIOTIC_DETONATOR_DAMAGE_BONUS: 'bioticDetonatorDamageBonus',

  BIOTIC_EFFECT_DURATION: 'bioticEffectDuration',
  BIOTIC_FORCE: 'bioticForce',
  BIOTIC_RESTORATION_DEFENSE: 'bioticRestorationDefense',
  BIOTIC_DAMAGE_TO_SHIELDS: 'bioticDamageToShields',
} as const)

type BonusKeys = typeof BONUS[keyof typeof BONUS]
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type PartialRecord<K extends keyof any, T> = Partial<Record<K, T>>
type Primer = 'fire' | 'cryo' | 'tech' | 'biotic'
export type SkillStats = PartialRecord<BonusKeys, number> & {
  primer?: Primer
  detonator?: boolean
}
export interface SkillBonus {
  id: string
  text: (stats: SkillStats) => string
  showText?: boolean
  bonus?: (stats: SkillStats, skillCount?: number) => SkillStats
}
export interface SkillRank {
  id: string
  rank: number
  name: string
  icon: string
  description: string
  bonuses?: SkillBonus[]
}
export interface Skill {
  id: string
  name: string
  url: string
  type: 'active' | 'passive'
  description: string
  ranks: SkillRank[]
}

export const combatSkills: Skill[] = [
  {
    id: 'ckqit2sgt000l76va017rgsd1',
    name: 'Omni Grenade',
    url: '/wiki/Omni_Grenade',
    type: 'active',
    description:
      "TAP BUTTON: Throws a grenade that causes massive area damage after a 2 sec fuse.\n\nHOLD BUTTON: Shortens the grenade's fuse timer before throwing. The grenade will explode if held too long.\n\nActivation requires one power cell from Omni Grenade's limited power cell supply.\n",
    ranks: [
      {
        id: 'ckqit2sgr000076vafml8g0n2',
        rank: 1,
        name: 'Omni Grenade',
        icon: 'C_Omni_Grenade_Icon.png',
        description:
          "TAP BUTTON: Throws a grenade that causes massive area damage after a 2 sec fuse.\n\nHOLD BUTTON: Shortens the grenade's fuse timer before throwing. The grenade will explode if held too long.\n\nActivation requires one power cell from Omni Grenade's limited power cell supply.",
        bonuses: [
          {
            id: 'ckqit2sgr000176vaac01b0rz',
            text: ({ areaDamage }) => `Area Damage: ${areaDamage}`,
            bonus: stats => ({
              ...stats,
              areaDamage: 1000,
            }),
          },
          {
            id: 'ckqit2sgr000276vab7ebbscr',
            text: ({ radius }) => `Damage Radius (m): ${radius}`,
            bonus: stats => ({
              ...stats,
              radius: 4,
            }),
          },
          {
            id: 'ckqit2sgr000376va3pkaasoo',
            text: ({ powerCellCapacity }) =>
              `Power Cell (Grenade) Capacity: ${powerCellCapacity}`,
            bonus: stats => ({
              ...stats,
              powerCellCapacity: 1,
            }),
          },
        ],
      },
      {
        id: 'ckqgnj3vx001cgyxx1ngq06qb',
        rank: 2,
        name: 'Grenade Capacity',
        icon: 'C_Power_Cells_Icon.png',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj3vx001dgyxx28y59rel',
            text: () => `+1 Power Cell (Grenade) Capacity`,
            showText: false,
            bonus: stats => ({
              ...stats,
              powerCellCapacity: stats.powerCellCapacity! + 1,
            }),
          },
        ],
      },
      {
        id: 'ckqgnj3vx001egyxx1t1cbw8e',
        rank: 3,
        name: 'Damage',
        icon: 'C_Damage_Icon.png',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj3vx001fgyxx2mp55sj9',
            text: () => `+20% Direct Damage`,
            showText: false,
            bonus: stats => ({
              ...stats,
              areaDamage: stats.areaDamage! * 1.2,
            }),
          },
        ],
      },
      {
        id: 'ckqgnj3vx001ggyxx94pcepoq',
        rank: 4.1,
        name: 'Sticky Grenade',
        icon: 'C_Sticky_Grenade_Icon.png',
        description:
          'Grenades stick to surfaces and enemies before detonating. Holding the button no longer affects fuse time (and the grenade can no longer explode while held).',
        bonuses: [],
      },
      {
        id: 'ckqgnj3vx001hgyxx5qo1gzj8',
        rank: 4.2,
        name: 'Frag Grenade',
        icon: 'C_Frag_Grenade_Icon.png',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj3vx001igyxx8du4bqek',
            text: () => `+25% Direct Damage`,
            showText: false,
            bonus: stats => ({
              ...stats,
              areaDamage: stats.areaDamage! * 1.25,
            }),
          },
          {
            id: 'ckqgnj3vx001jgyxxdq9i99gg',
            text: () => `+60% Damage Radius`,
            showText: false,
            bonus: stats => ({
              ...stats,
              radius: stats.radius! * 1.6,
            }),
          },
        ],
      },
      {
        id: 'ckqgnj3vy001kgyxx29hg1lgn',
        rank: 5.1,
        name: 'Grenade Capacity',
        icon: 'C_Power_Cells_Icon.png',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj3vy001lgyxx10jj3imd',
            text: () => `+2 Power Cell (Grenade) Capacity`,
            showText: false,
            bonus: stats => ({
              ...stats,
              powerCellCapacity: stats.powerCellCapacity! + 2,
            }),
          },
        ],
      },
      {
        id: 'ckqgnj3vy001mgyxxekvy00za',
        rank: 5.2,
        name: 'Shrapnel',
        icon: 'C_Shredder_Icon.png',
        description: 'Affected enemies take additional damage over time.',
        bonuses: [
          {
            id: 'ckqgnj3vy001ngyxx38jj67s3',
            text: ({ damagePerSecond }) =>
              `Damage per Second: ${damagePerSecond}`,
            bonus: stats => ({
              ...stats,
              damagePerSecond: 100,
            }),
          },
          {
            id: 'ckqgnj3vy001ogyxx0foh8fx0',
            text: ({ damageDuration }) =>
              `Damage Duration (s): ${damageDuration}`,
            bonus: stats => ({
              ...stats,
              damageDuration: 5,
            }),
          },
        ],
      },
      {
        id: 'ckqgnj3vy001pgyxx1ukufeyn',
        rank: 6.1,
        name: 'Anti-Armor',
        icon: 'C_Armor_Smasher_Icon.png',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj3vy001qgyxxez5ufxrp',
            text: () => `+50% Damage vs. Armor`,
            bonus: stats => ({
              ...stats,
              damageVsArmor: stats.areaDamage! * 1.5,
            }),
          },
        ],
      },
      {
        id: 'ckqgnj3vy001rgyxxc9b85zk2',
        rank: 6.2,
        name: 'Anti-Shield',
        icon: 'C_Anti-Shield_Icon.png',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj3vy001sgyxx4kjy70k3',
            text: () => `+50% Damage vs. Shields`,
            bonus: stats => ({
              ...stats,
              damageVsShields: stats.areaDamage! * 1.5,
            }),
          },
        ],
      },
    ],
  },
  {
    id: 'ckqit2sny002g76vaa9mg6o5r',
    name: 'Concussive Shot',
    url: '/wiki/Concussive_Shot',
    type: 'active',
    description:
      'Fires a target-seeking high-impact round that knocks down unarmored, unshielded, normal-sized enemies and detonates combo primers.\n',
    ranks: [
      {
        id: 'ckqit2snw001u76vaew5x0z45',
        rank: 1,
        name: 'Concussive Shot',
        icon: 'C_Concussive_Shot_Icon.png',
        description:
          ' Fires a target-seeking high-impact round that knocks down unarmored, unshielded, normal-sized enemies and detonates combo primers.',
        bonuses: [
          {
            id: 'ckqit2snw001v76va4hpi3wc0',
            text: () => `Damage: 350`,
            bonus: stats => ({ ...stats, damage: 350, detonator: true }),
          },
          {
            id: 'ckqit2snw001w76vaenep1dh0',
            text: () => `Force: 250`,
            bonus: stats => ({ ...stats, force: 250 }),
          },
          {
            id: 'ckqit2snw001x76va8n3e4ef3',
            text: ({ powerCellCapacity }) =>
              powerCellCapacity ? '' : `Recharge Time (s): 12`,
            bonus: stats => ({ ...stats, rechargeTime: 12 }),
          },
        ],
      },
      {
        id: 'ckqgnj41s0036gyxxdcnq20w2',
        rank: 2,
        name: 'Force',
        icon: 'C_Force_Icon.png',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj41s0037gyxxebc03ll0',
            text: () => `+25% Direct Force`,
            showText: false,
            bonus: stats => ({
              ...stats,
              force: stats.force! + 25,
            }),
          },
        ],
      },
      {
        id: 'ckqgnj41t0038gyxx6ci5fc7r',
        rank: 3,
        name: 'Damage',
        icon: 'C_Damage_Icon.png',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj41t0039gyxxeo862iz4',
            text: () => `+15% Direct Damage`,
            showText: false,
            bonus: stats => ({
              ...stats,
              damage: stats.damage! * 1.15,
            }),
          },
        ],
      },
      {
        id: 'ckqgnj41t003agyxxge180uta',
        rank: 4.1,
        name: 'Recharge Speed',
        icon: 'C_Recharge_Speed_Icon.png',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj41t003bgyxx2ac52my9',
            text: () => `+30% Recharge Speed`,
            showText: false,
            bonus: stats => ({
              ...stats,
              rechargeTime: stats.rechargeTime! * 0.7,
            }),
          },
        ],
      },
      {
        id: 'ckqgnj41t003cgyxxgj5d5084',
        rank: 4.2,
        name: 'Repeat Concussion',
        icon: 'C_Repeat_Concussion_Icon.png',
        description:
          'Concussive Shot has no recharge time but requires one power cell from a limited power cell supply to activate. The shot also inflicts bonus damage on knocked down or floating enemies.',
        bonuses: [
          {
            id: 'ckqgnj41t003dgyxxhwnfa78x',
            text: ({ powerCellCapacity }) =>
              `Power Cell Capacity: ${powerCellCapacity}`,
            bonus: (stats: SkillStats): SkillStats => {
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              const { rechargeTime, ...others } = stats
              return {
                ...others,
                powerCellCapacity: 5,
              }
            },
          },
          {
            id: 'ckqgnj41t003egyxxg7rc4diy',
            text: () => `Damage vs. Knocked Down Enemies: 100%`,
            bonus: stats => ({
              ...stats,
              damageVsKnockedDown: stats.damage! * 2,
            }),
          },
        ],
      },
      {
        id: 'ckqgnj41t003fgyxxhfxh2at0',
        rank: 5.1,
        name: 'Radius',
        icon: 'C_Radius_Icon.png',
        description: 'The shot damages enemies within a radius.',
        bonuses: [
          {
            id: 'ckqgnj41t003ggyxxcc4a5x1j',
            text: ({ radius }) => `Radius (m): ${radius}`,
            bonus: stats => ({
              ...stats,
              radius: 2.5,
            }),
          },
        ],
      },
      {
        id: 'ckqgnj41u003hgyxx5e9w70pu',
        rank: 5.2,
        name: 'Damage & Force',
        icon: 'C_Damage_Icon.png',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj41u003igyxx0lr2cxw5',
            text: () => `+25% Direct Damage`,
            showText: false,
            bonus: stats => ({
              ...stats,
              damage: stats.damage! * 1.25,
            }),
          },
          {
            id: 'ckqgnj41u003jgyxx3w6g0hsd',
            text: () => `+25% Direct Force`,
            showText: false,
            bonus: stats => ({
              ...stats,
              force: stats.force! * 1.25,
            }),
          },
        ],
      },
      {
        id: 'ckqgnj41u003kgyxxfny5d3bj',
        rank: 6.1,
        name: 'Anti-Armor',
        icon: 'C_Armor_Smasher_Icon.png',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj41u003lgyxxe4jpg3nn',
            text: () => `+125% Damage vs. Armor`,
            bonus: stats => ({
              ...stats,
              damageVsArmor: stats.damage! * 2.25,
            }),
          },
        ],
      },
      {
        id: 'ckqgnj41u003mgyxx97fq49h4',
        rank: 6.2,
        name: 'Anti-Shield',
        icon: 'C_Anti-Shield_Icon.png',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj41u003ngyxx3p3tgfcx',
            text: () => `+100% Damage vs. Shields`,
            bonus: stats => ({
              ...stats,
              damageVsShield: stats.damage! * 2,
            }),
          },
        ],
      },
    ],
  },
  {
    id: 'ckqit2swh005076va6iqu7tgx',
    name: 'Barricade',
    url: '/wiki/Barricade',
    type: 'active',
    description:
      "Deploys a temporary energy barricade that will boost shield regeneration for everyone who takes cover behind it. Upgraded versions provide additional combat bonuses for allies.\n\nActivation requires one power cell from Barricade's limited power cell supply.\n",
    ranks: [
      {
        id: 'ckqit2swe004h76va0wf1fa13',
        rank: 1,
        name: 'Barricade',
        icon: 'C_Barricade_Icon.png',
        description:
          "Deploys a temporary energy barricade that will boost shield regeneration for everyone who takes cover behind it. Upgraded versions provide additional combat bonuses for allies.\n\nActivation requires one power cell from Barricade's limited power cell supply.",
        bonuses: [
          {
            id: 'ckqit2swe004i76va0b3c95k4',
            text: ({ duration }) => `Duration (s): ${duration}`,
            bonus: stats => ({ ...stats, duration: 13 }),
          },
          {
            id: 'ckqit2swe004j76vaa6d09k6a',
            text: ({ powerCellCapacity }) =>
              `Power Cell Capacity: ${powerCellCapacity}`,
            bonus: stats => ({ ...stats, powerCellCapacity: 2 }),
          },
          {
            id: 'ckqit2swe004k76va3tkj36cv',
            text: ({ regenerationDelayReduction }) =>
              `Regeneration Delay Reduction: ${regenerationDelayReduction}%`,
            bonus: stats => ({ ...stats, regenerationDelayReduction: 40 }),
          },
        ],
      },
      {
        id: 'ckqgnj480005dgyxxarb62q09',
        rank: 2,
        name: 'Power Cells',
        icon: 'C_Power_Cells_Icon.png',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj480005egyxxgrhb2zz7',
            text: () => `+1 Power Cell Capacity`,
            showText: false,
            bonus: stats => ({
              ...stats,
              powerCellCapacity: stats.powerCellCapacity! + 1,
            }),
          },
        ],
      },
      {
        id: 'ckqgnj480005fgyxxe4hf2hat',
        rank: 3,
        name: 'Duration',
        icon: 'C_Duration_Icon.png',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj480005ggyxx85gzej3o',
            text: () => `+25% Duration`,
            showText: false,
            bonus: stats => ({
              ...stats,
              duration: stats.duration! * 1.25,
            }),
          },
        ],
      },
      {
        id: 'ckqgnj480005hgyxxadj7acyt',
        rank: 4.1,
        name: 'Duration',
        icon: 'C_Duration_Icon.png',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj480005igyxx4arhethw',
            text: () => `+35% Duration`,
            showText: false,
            bonus: stats => ({
              ...stats,
              duration: stats.duration! * 1.35,
            }),
          },
        ],
      },
      {
        id: 'ckqgnj481005jgyxxfir6hzj7',
        rank: 4.2,
        name: 'Power Cells',
        icon: 'C_Power_Cells_Icon.png',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj481005kgyxxamcu22hc',
            text: () => `+1 Power Cell Capacity`,
            showText: false,
            bonus: stats => ({
              ...stats,
              powerCellCapacity: stats.powerCellCapacity! + 1,
            }),
          },
        ],
      },
      {
        id: 'ckqgnj481005lgyxxezgaf5ta',
        rank: 5.1,
        name: 'Weapon Feedback',
        icon: 'C_Weapon_Feedback_Icon.png',
        description:
          'Increases weapon damage and accuracy by 15% for all allies (including the user) behind the barricade.',
        bonuses: [],
      },
      {
        id: 'ckqgnj481005mgyxx8me35xto',
        rank: 5.2,
        name: 'Power Feedback',
        icon: 'C_Power_Feedback_Icon.png',
        description:
          'Increases power damage and force by 30% for all allies (including the user) behind the barricade.',
        bonuses: [],
      },
      {
        id: 'ckqgnj481005ngyxx2mpr5g6q',
        rank: 6.1,
        name: 'Regeneration',
        icon: 'C_Regeneration_Icon.png',
        description:
          'Greatly reduces shield regeneration delay for allies (including the user) behind the barricade.',
        bonuses: [],
      },
      {
        id: 'ckqgnj482005ogyxxe1rb1yeo',
        rank: 6.2,
        name: 'Electric Defense',
        icon: 'C_Electric_Defense_Icon.png',
        description:
          ' The barricade electrocutes nearby enemies with a chance to stun them. Especially damaging to shields and synthetic foes. Affected enemies are primed for combo detonations.',
        bonuses: [
          {
            id: 'ckqgnj482005pgyxx8heq61r7',
            text: () => `Damage per Second: 110`,
            bonus: stats => ({
              ...stats,
              damagePerSecond: 110,
              primer: 'tech',
            }),
          },
          {
            id: 'ckqgnj482005qgyxxcqbzcxaq',
            text: () => `Shield Damage Bonus: 100%`,
            bonus: stats => ({
              ...stats,
              damageVsShield: (stats.damagePerSecond || 110) * 2,
            }),
          },
          {
            id: 'ckqgnj482005rgyxxbr7n6hb8',
            text: () => `Synthetic Damage Bonus: 15%`,
            bonus: stats => ({
              ...stats,
              damageVsSynthetics: (stats.damagePerSecond || 110) * 1.15,
            }),
          },
        ],
      },
    ],
  },
  {
    id: 'ckqit2t4y007s76vag8nx87yh',
    name: 'Turbocharge',
    url: '/wiki/Turbocharge',
    type: 'active',
    description:
      'Temporarily vents weapon heat via armor to improve thermal clip efficiency and boost weapon firing rates.\n',
    ranks: [
      {
        id: 'ckqit2t4w007376vaajjidjae',
        rank: 1,
        name: 'Turbocharge',
        icon: 'C_Turbocharge_Icon.png',
        description:
          'Temporarily vents weapon heat via armor to improve thermal clip efficiency and boost weapon firing rates.',
        bonuses: [
          {
            id: 'ckqit2t4w007476vaa9ap7sca',
            text: ({ duration }) => `Duration (s): ${duration}`,
            bonus: stats => ({ ...stats, duration: 8 }),
          },
          {
            id: 'ckqit2t4w007576vabbqv4o5c',
            text: ({ rechargeTime }) => `Recharge Time (s): ${rechargeTime}`,
            bonus: stats => ({ ...stats, rechargeTime: 20 }),
          },
          {
            id: 'ckqit2t4w007676vabzeu5unp',
            text: ({ gunDamageBonus }) =>
              `+${gunDamageBonus}% Gun Damage Bonus`,
            bonus: stats => ({ ...stats, gunDamageBonus: 10 }),
          },
          {
            id: 'ckqit2t4w007776va3dfbh1oa',
            text: ({ rateOfFireBonus }) =>
              `+${rateOfFireBonus}% Rate of Fire Bonus`,
            bonus: stats => ({ ...stats, rateOfFireBonus: 20 }),
          },
          {
            id: 'ckqit2t4w007876va0i683cdp',
            text: ({ clipSizeBonus }) => `+${clipSizeBonus}% Clip Size Bonus`,
            bonus: stats => ({ ...stats, clipSizeBonus: 20 }),
          },
        ],
      },
      {
        id: 'ckqgnj4dw0079gyxxbfv39wjj',
        rank: 2,
        name: 'Recharge Speed',
        icon: 'C_Recharge_Speed_Icon.png',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj4dw007agyxxewcs3qfn',
            text: () => `+10% Recharge Speed`,
            showText: false,
            bonus: stats => ({
              ...stats,
              rechargeTime: stats.rechargeTime! * 0.9,
            }),
          },
        ],
      },
      {
        id: 'ckqgnj4dw007bgyxx4scqfbk9',
        rank: 3,
        name: 'Damage',
        icon: 'C_Damage_Icon.png',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj4dw007cgyxxefhw46i0',
            text: () => `+10% Gun Damage Bonus`,
            showText: false,
            bonus: stats => ({
              ...stats,
              gunDamageBonus: stats.gunDamageBonus! + 10,
            }),
          },
        ],
      },
      {
        id: 'ckqgnj4dw007dgyxxgio3cqdf',
        rank: 4.1,
        name: 'Recharge Speed',
        icon: 'C_Recharge_Speed_Icon.png',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj4dw007egyxxhugo9k5y',
            text: () => `+20% Recharge Speed`,
            showText: false,
            bonus: stats => ({
              ...stats,
              rechargeTime: stats.rechargeTime! * 0.8,
            }),
          },
        ],
      },
      {
        id: 'ckqgnj4dx007fgyxx8bpj4vxs',
        rank: 4.2,
        name: 'Duration',
        icon: 'C_Duration_Icon.png',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj4dx007ggyxx9ovdfnzt',
            text: () => `+50% Duration`,
            showText: false,
            bonus: stats => ({
              ...stats,
              duration: stats.duration! * 1.5,
            }),
          },
        ],
      },
      {
        id: 'ckqgnj4dx007hgyxxhfdobuc3',
        rank: 5.1,
        name: 'Damage & Force',
        icon: 'C_Damage_Icon.png',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj4dx007igyxx5cem72hi',
            text: () => `+15% Gun Damage Bonus`,
            showText: false,
            bonus: stats => ({
              ...stats,
              gunDamageBonus: stats.gunDamageBonus! + 15,
            }),
          },
          {
            id: 'ckqgnj4dx007jgyxx65ef1lr0',
            text: () => `+15% Gun Force Bonus`,
            bonus: stats => ({
              ...stats,
              gunForceBonus: 15,
            }),
          },
        ],
      },
      {
        id: 'ckqgnj4dx007kgyxx66e90y2f',
        rank: 5.2,
        name: 'Accuracy & Stability',
        icon: 'C_Accuracy_&_Stability_Icon.png',
        description:
          'Increases weapon stability and accuracy while Turbocharge is active.',
        bonuses: [
          {
            id: 'ckqgnj4dx007lgyxx4qctc10e',
            text: () => `+40% Gun Accuracy Bonus`,
            bonus: stats => ({
              ...stats,
              gunAccuracyBonus: 40,
            }),
          },
          {
            id: 'ckqgnj4dx007mgyxx7t8t1fab',
            text: () => `+40% Gun Stability Bonus`,
            bonus: stats => ({
              ...stats,
              gunStabilityBonus: 40,
            }),
          },
        ],
      },
      {
        id: 'ckqgnj4dx007ngyxx2zav5477',
        rank: 6.1,
        name: 'Supercharge',
        icon: 'C_Supercharge_Icon.png',
        description:
          'Increases weapon rate of fire and thermal clip size while Turbocharge is active.',
        bonuses: [
          {
            id: 'ckqgnj4dx007ogyxx7xjgd57a',
            text: () => `+20% Rate of Fire Bonus`,
            showText: false,
            bonus: stats => ({
              ...stats,
              rateOfFireBonus: stats.rateOfFireBonus! + 20,
            }),
          },
          {
            id: 'ckqgnj4dx007pgyxxhtw8gmjg',
            text: () => `+20% Clip Size Bonus`,
            showText: false,
            bonus: stats => ({
              ...stats,
              clipSizeBonus: stats.clipSizeBonus! + 20,
            }),
          },
        ],
      },
      {
        id: 'ckqgnj4dy007qgyxxfzih69t8',
        rank: 6.2,
        name: 'Dump Heat',
        icon: 'C_Dump_Heat_Icon.png',
        description:
          'Vastly increases thermal clip size while Turbocharge is active.',
        bonuses: [
          {
            id: 'ckqgnj4dy007rgyxxf2wpbcol',
            text: () => `+80% Clip Size Bonus`,
            showText: false,
            bonus: stats => ({
              ...stats,
              clipSizeBonus: stats.clipSizeBonus! + 80,
            }),
          },
        ],
      },
    ],
  },
  {
    id: 'ckqit2tcc00a076vadzjcfctq',
    name: 'Trip Mine',
    url: '/wiki/Trip_Mine',
    type: 'active',
    description:
      "Deploys an explosive mine that triggers when an enemy comes within proximity of or crosses a sensor laser. Enemies suffer more damage the closer they are to the mine.\n\nActivation requires one power cell from Trip Mine's limited power cell supply. The maximum number of active mines equals the current number of maximum power cells.\n",
    ranks: [
      {
        id: 'ckqit2tca009a76va378c7tiu',
        rank: 1,
        name: 'Trip Mine',
        icon: 'C_Trip_Mine_Icon.png',
        description:
          "Deploys an explosive mine that triggers when an enemy comes within proximity of or crosses a sensor laser. Enemies suffer more damage the closer they are to the mine.\n\nActivation requires one power cell from Trip Mine's limited power cell supply. The maximum number of active mines equals the current number of maximum power cells.",
        bonuses: [
          {
            id: 'ckqit2tca009b76va8igh89by',
            text: ({ maximumDamage }) => `Maximum Damage: ${maximumDamage}`,
            bonus: stats => ({ ...stats, maximumDamage: 1350 }),
          },
          {
            id: 'ckqit2tca009c76vaae7vhzzf',
            text: ({ radius }) => `Damage Radius (m): ${radius}`,
            bonus: stats => ({ ...stats, radius: 8 }),
          },
          {
            id: 'ckqit2tca009d76vac6btc73d',
            text: ({ triggerRadius }) => `Trigger Radius (m): ${triggerRadius}`,
            bonus: stats => ({ ...stats, triggerRadius: 0.5 }),
          },
          {
            id: 'ckqit2tca009e76vactz3hhzr',
            text: ({ laserRange }) => `Laser Range (m): ${laserRange}`,
            bonus: stats => ({ ...stats, laserRange: 5 }),
          },
          {
            id: 'ckqit2tca009f76va2qxt164q',
            text: ({ powerCellCapacity }) =>
              `Power Cell Capacity: ${powerCellCapacity}`,
            bonus: stats => ({ ...stats, powerCellCapacity: 2 }),
          },
        ],
      },
      {
        id: 'ckqgnj4k6009ggyxxa9zec3ma',
        rank: 2,
        name: 'Power Cells',
        icon: 'C_Power_Cells_Icon.png',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj4k6009hgyxx3habhs3j',
            text: () => `+1 Power Cell Capacity`,
            showText: false,
            bonus: stats => ({
              ...stats,
              powerCellCapacity: stats.powerCellCapacity! + 1,
            }),
          },
        ],
      },
      {
        id: 'ckqgnj4k6009igyxx5rym8s1t',
        rank: 3,
        name: 'Damage & Force',
        icon: 'C_Damage_Icon.png',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj4k6009jgyxxaiw1h8k9',
            text: () => `+15% Damage`,
            showText: false,
            bonus: stats => ({
              ...stats,
              maximumDamage: stats.maximumDamage! * 1.15,
            }),
          },
          {
            id: 'ckqgnj4k6009kgyxxauvkec26',
            text: () => `+15% Force`,
            showText: false,
            bonus: stats => ({ ...stats, force: stats.force! * 1.15 }),
          },
        ],
      },
      {
        id: 'ckqgnj4k6009lgyxx4cvj3vut',
        rank: 4.1,
        name: 'Sensor Range',
        icon: 'C_Sensor_Range_Icon.png',
        description:
          'Increases proximity trigger radius and laser sensor distance',
        bonuses: [
          {
            id: 'ckqgnj4k6009mgyxx43uf8ktp',
            text: () => `+100% Proximity Radius`,
            showText: false,
            bonus: stats => ({
              ...stats,
              triggerRadius: stats.triggerRadius! * 2,
            }),
          },
          {
            id: 'ckqgnj4k6009ngyxxem92cbsd',
            text: () => `+60% Laser Range (m)`,
            showText: false,
            bonus: stats => ({
              ...stats,
              laserRange: stats.laserRange! * 1.6,
            }),
          },
        ],
      },
      {
        id: 'ckqgnj4k6009ogyxx6u515c5s',
        rank: 4.2,
        name: 'Power Cells',
        icon: 'C_Power_Cells_Icon.png',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj4k6009pgyxx9else3bx',
            text: () => `+1 Power Cell Capacity`,
            showText: false,
            bonus: stats => ({
              ...stats,
              powerCellCapacity: stats.powerCellCapacity! + 1,
            }),
          },
        ],
      },
      {
        id: 'ckqgnj4k7009qgyxx1br32lmf',
        rank: 5.1,
        name: 'Damage & Force',
        icon: 'C_Damage_Icon.png',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj4k7009rgyxx2qzie4wn',
            text: () => `+30% Damage`,
            showText: false,
            bonus: stats => ({
              ...stats,
              maximumDamage: stats.maximumDamage! * 1.3,
            }),
          },
          {
            id: 'ckqgnj4k7009sgyxxd3es886k',
            text: () => `+30% Force`,
            showText: false,
            bonus: stats => ({ ...stats, force: stats.force! * 1.3 }),
          },
        ],
      },
      {
        id: 'ckqgnj4k7009tgyxxbsuy40zg',
        rank: 5.2,
        name: 'Blast Radius',
        icon: 'C_Radius_Icon.png',
        description: '',
        bonuses: [
          {
            id: 'ckqgnj4k7009ugyxxcqiy86am',
            text: () => `+30% Damage Radius`,
            showText: false,
            bonus: stats => ({ ...stats, radius: stats.radius! * 1.3 }),
          },
        ],
      },
      {
        id: 'ckqgnj4k7009vgyxxhsmdfbo7',
        rank: 6.1,
        name: 'Detonator',
        icon: 'C_Detonator_Icon.png',
        description: 'Mines act as combo detonators for all affected enemies.',
        bonuses: [
          {
            id: 'ckqgnj4k7009wgyxxe36heq0u',
            text: () => `+30% Combo Detonation Damage`,
            bonus: stats => ({
              ...stats,
              detonator: true,
              comboDetonationDamage: 30,
            }),
          },
        ],
      },
      {
        id: 'ckqgnj4k8009xgyxxdzy1ct7m',
        rank: 6.2,
        name: 'EMP',
        icon: 'C_EMP_Icon.png',
        description:
          'Mines deliver an electromagnetic pulse, stunning enemies and causing added damage to shields. Electrified enemies are briefly primed for combo detonations.',
        bonuses: [
          {
            id: 'ckqgnj4k8009ygyxx99q5fszk',
            text: () => `Stun Duration (s): 2`,
            bonus: stats => ({
              ...stats,
              stunDuration: 2,
              primer: 'tech',
            }),
          },
          {
            id: 'ckqgnj4k8009zgyxxdpe70p0c',
            text: () => `+35% Damage vs. Shields`,
            bonus: stats => ({
              ...stats,
              damageVsShields: stats.damage! * 1.35,
            }),
          },
        ],
      },
    ],
  },
  {
    id: 'ckqit2tlu00bx76vahd7whvr4',
    name: 'Flak Cannon',
    url: '/wiki/Flak_Cannon',
    type: 'active',
    description:
      "Fires krogan-designed shells that burst into shrapnel upon impact. Shrapnel damage is reduced against armored enemies.\n\nActivation requires one power cell from Flak Cannon's limited power cell supply.\n",
    ranks: [
      {
        id: 'ckqit2tls00b976vafu0o6j3e',
        rank: 1,
        name: 'Flak Cannon',
        icon: 'C_Flak_Cannon_Icon.png',
        description:
          "Fires krogan-designed shells that burst into shrapnel upon impact. Shrapnel damage is reduced against armored enemies.\n\nActivation requires one power cell from Flak Cannon's limited power cell supply.",
        bonuses: [
          {
            id: 'ckqit2tls00ba76vac7d2gphu',
            text: ({ initialDamage }) => `Initial Damage: ${initialDamage}`,
            bonus: stats => ({
              ...stats,
              initialDamage: 180,
            }),
          },
          {
            id: 'ckqit2tls00bb76va5l5t6mkc',
            text: ({ shrapnelDamage }) => `Shrapnel Damage: ${shrapnelDamage}`,
            bonus: stats => ({
              ...stats,
              shrapnelDamage: 75,
            }),
          },
          {
            id: 'ckqit2tls00bc76vafsqwh2hl',
            text: ({ powerCellCapacity }) =>
              `Power Cell Capacity: ${powerCellCapacity}`,
            bonus: stats => ({ ...stats, powerCellCapacity: 2 }),
          },
          {
            id: 'ckqit2tls00bd76va3x5xemx3',
            text: ({ shrapnelDamageVsArmor }) =>
              `-${shrapnelDamageVsArmor}% Shrapnel Damage vs. Armor`,
            bonus: stats => ({
              ...stats,
              shrapnelDamageVsArmor: 30,
            }),
          },
        ],
      },
      {
        id: 'ckqit2tls00be76va7eyl3tvq',
        rank: 2,
        name: 'Power Cells',
        icon: 'C_Power_Cells_Icon.png',
        description: '',
        bonuses: [
          {
            id: 'ckqit2tls00bf76vaap8i38lv',
            text: () => `+2 Power Cell Capacity`,
            showText: false,
            bonus: stats => ({
              ...stats,
              powerCellCapacity: stats.powerCellCapacity! + 2,
            }),
          },
        ],
      },
      {
        id: 'ckqit2tlt00bg76vah20z620f',
        rank: 3,
        name: 'Damage & Force',
        icon: 'C_Damage_Icon.png',
        description: '',
        bonuses: [
          {
            id: 'ckqit2tlt00bh76va0pfd5363',
            text: ({ areaDamage }) => `+${areaDamage}% Area Damage`,
            bonus: stats => ({ ...stats, areaDamage: 25 }),
          },
          {
            id: 'ckqit2tlt00bi76va76grfygj',
            text: ({ areaForce }) => `+${areaForce}% Area Force`,
            bonus: stats => ({ ...stats, areaForce: 25 }),
          },
        ],
      },
      {
        id: 'ckqit2tlt00bj76va4ioyer6h',
        rank: 4.1,
        name: 'Damage & Force',
        icon: 'C_Damage_Icon.png',
        description: '',
        bonuses: [
          {
            id: 'ckqit2tlt00bk76va6lrd2env',
            text: () => `+35 Area Damage`,
            showText: false,
            bonus: stats => ({ ...stats, areaDamage: stats.areaDamage! + 35 }),
          },
          {
            id: 'ckqit2tlt00bl76va5z4z97ir',
            text: () => `+35% Area Force`,
            showText: false,
            bonus: stats => ({ ...stats, areaForce: stats.areaForce! + 25 }),
          },
        ],
      },
      {
        id: 'ckqit2tlt00bm76vae4k0e5cn',
        rank: 4.2,
        name: 'Power Cells',
        icon: 'C_Power_Cells_Icon.png',
        description: '',
        bonuses: [
          {
            id: 'ckqit2tlt00bn76vacqoiebwk',
            text: () => `+3 Power Cell Capacity`,
            showText: false,
            bonus: stats => ({
              ...stats,
              powerCellCapacity: stats.powerCellCapacity! + 3,
            }),
          },
        ],
      },
      {
        id: 'ckqit2tlt00bo76va2dzph1uo',
        rank: 5.1,
        name: 'Anti-Armor',
        icon: 'C_Armor_Smasher_Icon.png',
        description:
          'Increases both initial and shrapnel damage against enemy armor.',
        bonuses: [
          {
            id: 'ckqit2tlt00bp76vaecc29f3q',
            text: () => `+50% Damage vs. Armor`,
            bonus: stats => ({ ...stats, damageVsArmor: 50 }),
          },
        ],
      },
      {
        id: 'ckqit2tlt00bq76va3tqb6hhm',
        rank: 5.2,
        name: 'Stunning',
        icon: 'C_Disrupting_Strike_Icon.png',
        description: 'Briefly stuns affected enemies.',
        bonuses: [
          {
            id: 'ckqit2tlt00br76vadz5h4sya',
            text: () => `Stun Duration (s): 2`,
            bonus: stats => ({ ...stats, stunDuration: 2 }),
          },
        ],
      },
      {
        id: 'ckqit2tlu00bs76va78uadbjs',
        rank: 6.1,
        name: 'Flak',
        icon: 'C_Flak_Icon.png',
        description: '',
        bonuses: [
          {
            id: 'ckqit2tlu00bt76vadnci9l6q',
            text: () => '50% more shrapnel explosions.',
          },
        ],
      },
      {
        id: 'ckqit2tlu00bu76va9f1hdo8p',
        rank: 6.2,
        name: 'Shredder',
        icon: 'C_Shredder_Icon.png',
        description: 'Shrapnel inflicts additional damage over time.',
        bonuses: [
          {
            id: 'ckqit2tlu00bv76vaedy9a8ko',
            text: ({ damagePerSecond }) =>
              `Damage per Second: ${damagePerSecond}`,
            bonus: stats => ({
              ...stats,
              damagePerSecond: (stats.damagePerSecond || 0) + 100,
            }),
          },
          {
            id: 'ckqit2tlu00bw76va6p2y2jjr',
            text: ({ damageDuration }) =>
              `Damage Duration (s): ${damageDuration}`,
            bonus: stats => ({
              ...stats,
              damageDuration: (stats.damageDuration || 0) + 8,
            }),
          },
        ],
      },
    ],
  },
  {
    id: 'ckqit2tpi00d376va15pk9xjn',
    name: 'Pistols',
    url: '/wiki/Pistols',
    type: 'passive',
    description:
      'Improves sidearm training for pistols (including submachine guns). Pistols are designed largely for short to mid-range combat and shooting on the move.\n',
    ranks: [
      {
        id: 'ckqit2tpg00cl76va3o0af0cj',
        rank: 1,
        name: 'Pistols',
        icon: 'C_Pistols_Icon.png',
        description:
          'Increases pistol damage with each skill point invested in the Combat Skill Group.',
        bonuses: [
          {
            id: 'ckqit2tpg00cm76va6r9f7jp6',
            text: ({ pistolDamage }) => `+${pistolDamage}% Pistol Damage`,
            bonus: (stats, skillCount) => ({
              ...stats,
              pistolDamage: 2 + Math.floor((skillCount || 0) * (38 / 252)),
            }),
          },
        ],
      },
      {
        id: 'ckqit2tpg00cn76va0bk0d4n9',
        rank: 2,
        name: 'Accuracy',
        icon: 'C_Accuracy_Icon.png',
        description:
          'Increases pistol accuracy with each skill point invested in the Combat Skill Group.',
        bonuses: [
          {
            id: 'ckqit2tpg00co76va513fbukb',
            text: ({ pistolAccuracy }) => `+${pistolAccuracy}% Pistol Accuracy`,
            bonus: (stats, skillCount) => ({
              ...stats,
              pistolAccuracy: 2 + Math.floor((skillCount || 0) * (38 / 252)),
            }),
          },
        ],
      },
      {
        id: 'ckqit2tph00cp76va8j6q77g6',
        rank: 3,
        name: 'Mobility',
        icon: 'C_Mobility_Icon.png',
        description:
          'Reduces the accuracy penalty when firing pistols while moving with each skill point invested in the Combat Skill Group.',
        bonuses: [
          {
            id: 'ckqit2tph00cq76vah2kp23um',
            text: ({ pistolMovementAccuracy }) =>
              `+${pistolMovementAccuracy}% Movement Pistol Accuracy`,
            bonus: (stats, skillCount) => ({
              ...stats,
              pistolMovementAccuracy:
                2 + Math.floor((skillCount || 0) * (35 / 252)),
            }),
          },
        ],
      },
      {
        id: 'ckqit2tph00cr76vacbsp08ph',
        rank: 4.1,
        name: 'Weight',
        icon: 'C_Weapons_And_Melee_Icon.png',
        description: '',
        bonuses: [
          {
            id: 'ckqit2tph00cs76va0ptmb5gh',
            text: () => `-30% Pistol Weight`,
          },
        ],
      },
      {
        id: 'ckqit2tph00ct76vae7c55sz3',
        rank: 4.2,
        name: 'Spare Ammo',
        icon: 'C_Spare_Ammo_Icon.png',
        description: '',
        bonuses: [
          {
            id: 'ckqit2tph00cu76va46qj0yxm',
            text: () => `+20% Pistol Spare Ammo`,
          },
        ],
      },
      {
        id: 'ckqit2tph00cv76va7qor0bge',
        rank: 5.1,
        name: 'Reload',
        icon: 'C_Reload_Icon.png',
        description: '',
        bonuses: [
          {
            id: 'ckqit2tph00cw76vaffmiguda',
            text: () => `+15% Pistol Reload Speed`,
          },
        ],
      },
      {
        id: 'ckqit2tph00cx76va3lrjhc2w',
        rank: 5.2,
        name: 'Clip Size',
        icon: 'C_Clip_Size_Icon.png',
        description: '',
        bonuses: [
          {
            id: 'ckqit2tpi00cy76va8uouc3zc',
            text: () => `+20% Pistol Clip Size`,
          },
        ],
      },
      {
        id: 'ckqit2tpi00cz76vado3u1su5',
        rank: 6.1,
        name: 'Unassisted Targeting',
        icon: 'C_Unassisted_Targeting_Icon.png',
        description:
          'Increases pistol damage, and also increases accuracy and stability by 20% when firing without using the aim function.',
        bonuses: [
          {
            id: 'ckqit2tpi00d076va5iuygovt',
            text: () => `+20% Pistol Damage`,
            showText: false,
            bonus: stats => ({
              ...stats,
              pistolDamage: (stats.pistolDamage || 0) + 20,
            }),
          },
        ],
      },
      {
        id: 'ckqit2tpi00d176va7632dul6',
        rank: 6.2,
        name: 'Augmented Targeting Assistance',
        icon: 'C_Augmented_Targeting_Assistance_Icon.png',
        description:
          'Increases pistol damage, and also increases accuracy and weak point bonus damage by 20% when using the aim function to shoot.',
        bonuses: [
          {
            id: 'ckqit2tpi00d276vabnujba7v',
            text: () => `+20% Pistol Damage`,
            showText: false,
            bonus: stats => ({
              ...stats,
              pistolDamage: (stats.pistolDamage || 0) + 20,
            }),
          },
        ],
      },
    ],
  },
  {
    id: 'ckqit2txp00fm76vaccor8zcn',
    name: 'Assault Rifles',
    url: '/wiki/Assault_Rifles',
    type: 'passive',
    description:
      'Advanced training improves facility with assault rifles for dedicated combatants. Assault rifles offer moderate accuracy, range, and stopping power.\n',
    ranks: [
      {
        id: 'ckqit2txm00f376vaatyeamfa',
        rank: 1,
        name: 'Assault Rifles',
        icon: 'C_Assault_Rifles_Icon.png',
        description:
          'Increases assault rifle damage with each skill point invested in the Combat Skill Group.',
        bonuses: [
          {
            id: 'ckqit2txn00f476vadvhqg5ib',
            text: ({ assaultRifleDamage }) =>
              `+${assaultRifleDamage}% Assault Rifle Damage`,
            bonus: (stats, skillCount) => ({
              assaultRifleDamage:
                2 + Math.floor((skillCount || 0) * (38 / 252)),
            }),
          },
        ],
      },
      {
        id: 'ckqit2txn00f576va1lvyck2w',
        rank: 2,
        name: 'Accuracy',
        icon: 'C_Accuracy_Icon.png',
        description:
          'Increases assault rifle accuracy with each skill point invested in the Combat Skill Group.',
        bonuses: [
          {
            id: 'ckqit2txn00f676va6h6hgwpa',
            text: ({ assaultRifleAccuracy }) =>
              `+${assaultRifleAccuracy}% Assault Rifle Accuracy`,
            bonus: (stats, skillCount) => ({
              ...stats,
              assaultRifleAccuracy:
                2 + Math.floor((skillCount || 0) * (38 / 252)),
            }),
          },
        ],
      },
      {
        id: 'ckqit2txo00f776vafe8z59v5',
        rank: 3,
        name: 'Stability',
        icon: 'C_Stability_Icon.png',
        description:
          'Increases assault rifle stability, reducing recoil with each skill point invested in the Combat Skill Group.',
        bonuses: [
          {
            id: 'ckqit2txo00f876vaaflg7i07',
            text: ({ assaultRifleStability }) =>
              `+${assaultRifleStability}% Assault Rifle Stability`,
            bonus: (stats, skillCount) => ({
              ...stats,
              assaultRifleStability:
                2 + Math.floor((skillCount || 0) * (38 / 252)),
            }),
          },
        ],
      },
      {
        id: 'ckqit2txo00f976va3guac0gp',
        rank: 4.1,
        name: 'Weight',
        icon: 'C_Weapons_And_Melee_Icon.png',
        description: '',
        bonuses: [
          {
            id: 'ckqit2txo00fa76vaaqdbffzl',
            text: () => `-25% Assault Rifle Weight`,
          },
        ],
      },
      {
        id: 'ckqit2txo00fb76va4cua12ut',
        rank: 4.2,
        name: 'Spare Ammo',
        icon: 'C_Spare_Ammo_Icon.png',
        description: '',
        bonuses: [
          {
            id: 'ckqit2txo00fc76vaa8egepe0',
            text: () => `+15% Assault Rifle Spare Ammo`,
          },
        ],
      },
      {
        id: 'ckqit2txo00fd76vaczv6ffoh',
        rank: 5.1,
        name: 'Reload',
        icon: 'C_Reload_Icon.png',
        description: '',
        bonuses: [
          {
            id: 'ckqit2txo00fe76vagfx1gonp',
            text: () => `+15% Assault Rifle Reload Speed`,
          },
        ],
      },
      {
        id: 'ckqit2txo00ff76va6c4v6xbw',
        rank: 5.2,
        name: 'Clip Size',
        icon: 'C_Clip_Size_Icon.png',
        description: '',
        bonuses: [
          {
            id: 'ckqit2txo00fg76va8vidft59',
            text: () => `+25% Assault Rifle Clip Size`,
          },
        ],
      },
      {
        id: 'ckqit2txp00fh76va1prkf3ac',
        rank: 6.1,
        name: 'Shatter Defenses',
        icon: 'C_Shatter_Defenses_Icon.png',
        description:
          'Enemies hit by assault rifle fire take increased damage from all sources by 2% per assault rifle hit, to a maximum of 24%. Resets when the rifle user has not hit the target for 2 sec.',
        bonuses: [],
      },
      {
        id: 'ckqit2txp00fi76vah1kl01tz',
        rank: 6.2,
        name: 'Critical Hits',
        icon: 'C_Critical_Hits_Icon.png',
        description:
          'Increases headshot and other weak point damage from assault rifles, in addition to improved aiming.',
        bonuses: [
          {
            id: 'ckqit2txp00fj76va853m6g6g',
            text: () => `+25% Assault Rifle Headshot/Weak Point Bonus`,
          },
          {
            id: 'ckqit2txp00fk76va5ya4hhpx',
            text: () => `+15% Assault Rifle Accuracy`,
            showText: false,
            bonus: stats => ({
              ...stats,
              assaultRifleAccuracy: (stats.assaultRifleAccuracy || 0) + 15,
            }),
          },
          {
            id: 'ckqit2txp00fl76va0txp6bfg',
            text: () => `+15% Assault Rifle Stability`,
            showText: false,
            bonus: stats => ({
              ...stats,
              assaultRifleStability: (stats.assaultRifleStability || 0) + 15,
            }),
          },
        ],
      },
    ],
  },
  {
    id: 'ckqit2u4h00gx76va74ch8w4t',
    name: 'Shotguns',
    url: '/wiki/Shotguns',
    type: 'passive',
    description:
      'Specialized training for close-quarters combatants. Shotguns deal high damage at short range at the expense of poor accuracy at long distances.\n',
    ranks: [
      {
        id: 'ckqit2u4f00gc76vaaeu85p3x',
        rank: 1,
        name: 'Shotguns',
        icon: 'C_Shotgun_Icon.png',
        description:
          'Increases shotgun damage and force with each skill point invested in the Combat Skill Group.',
        bonuses: [
          {
            id: 'ckqit2u4f00gd76va32sy0ei0',
            text: ({ shotgunDamage }) => `+${shotgunDamage}% Shotgun Damage`,
            bonus: (stats, skillCount) => ({
              ...stats,
              shotgunDamage: 2 + Math.floor((skillCount || 0) * (38 / 252)),
            }),
          },
          {
            id: 'ckqit2u4f00ge76va5lo4488v',
            text: ({ shotgunForce }) => `+${shotgunForce}% Shotgun Force`,
            bonus: (stats, skillCount) => ({
              ...stats,
              shotgunForce: 2 + Math.floor((skillCount || 0) * (38 / 252)),
            }),
          },
        ],
      },
      {
        id: 'ckqit2u4f00gf76va26z3ed87',
        rank: 2,
        name: 'Stability',
        icon: 'C_Stability_Icon.png',
        description:
          'Decreases shotgun recoil and climb with each skill point invested in the Combat Skill Group.',
        bonuses: [
          {
            id: 'ckqit2u4f00gg76va5rxj0v4a',
            text: ({ shotgunStability }) =>
              `+${shotgunStability}% Shotgun Stability`,
            bonus: (stats, skillCount) => ({
              ...stats,
              shotgunStability: 2 + Math.floor((skillCount || 0) * (35 / 252)),
            }),
          },
        ],
      },
      {
        id: 'ckqit2u4g00gh76vagiubavxo',
        rank: 3,
        name: 'Precision',
        icon: 'C_Accuracy_Icon.png',
        description:
          'Increases shotgun accuracy and reduces spread with each skill point invested in the Combat Skill Group.',
        bonuses: [
          {
            id: 'ckqit2u4g00gi76va5th9c4ht',
            text: ({ shotgunAccuracy }) =>
              `+${shotgunAccuracy}% Shotgun Accuracy`,
            bonus: (stats, skillCount) => ({
              ...stats,
              shotgunAccuracy: 2 + Math.floor((skillCount || 0) * (38 / 252)),
            }),
          },
        ],
      },
      {
        id: 'ckqit2u4g00gj76vaekee1djs',
        rank: 4.1,
        name: 'Weight',
        icon: 'C_Weapons_And_Melee_Icon.png',
        description: '',
        bonuses: [
          {
            id: 'ckqit2u4g00gk76vab64f8hkt',
            text: () => `-25% Shotgun Weight`,
          },
        ],
      },
      {
        id: 'ckqit2u4g00gl76vaesxm7757',
        rank: 4.2,
        name: 'Spare Ammo',
        icon: 'C_Spare_Ammo_Icon.png',
        description: '',
        bonuses: [
          {
            id: 'ckqit2u4g00gm76vaaujq6sga',
            text: () => `+15% Shotgun Spare Ammo`,
          },
        ],
      },
      {
        id: 'ckqit2u4g00gn76vaf7569uff',
        rank: 5.1,
        name: 'Reload',
        icon: 'C_Reload_Icon.png',
        description: '',
        bonuses: [
          {
            id: 'ckqit2u4g00go76va195vc1rw',
            text: () => `+15% Shotgun Reload Speed`,
          },
        ],
      },
      {
        id: 'ckqit2u4g00gp76vaantg6ckl',
        rank: 5.2,
        name: 'Clip Size',
        icon: 'C_Clip_Size_Icon.png',
        description: '',
        bonuses: [
          {
            id: 'ckqit2u4g00gq76vaej7p6v50',
            text: () => `+25% Shotgun Clip Size`,
          },
        ],
      },
      {
        id: 'ckqit2u4h00gr76vad9hzhds9',
        rank: 6.1,
        name: 'Damage & Force',
        icon: 'C_Explosive_Icon.png',
        description: '',
        bonuses: [
          {
            id: 'ckqit2u4h00gs76va3bys84vt',
            text: () => `+20% Shotgun Damage`,
            showText: false,
            bonus: stats => ({
              ...stats,
              shotgunDamage: (stats.shotgunDamage || 0) + 20,
            }),
          },
          {
            id: 'ckqit2u4h00gt76va8rcvhd90',
            text: () => `+30% Shotgun Force`,
            showText: false,
            bonus: stats => ({
              ...stats,
              shotgunForce: (stats.shotgunForce || 0) + 30,
            }),
          },
        ],
      },
      {
        id: 'ckqit2u4h00gu76va2zwm8yrm',
        rank: 6.2,
        name: 'Melee Synergy',
        icon: 'C_Melee_Synergy_Icon.png',
        description:
          'Melee hits boost shotgun damage for 3 sec. Shotgun hits boost melee damage for 3 sec.',
        bonuses: [
          {
            id: 'ckqit2u4h00gv76va4y2t3448',
            text: () => `Shotgun Damage Boost: 25%`,
          },
          {
            id: 'ckqit2u4h00gw76va1ici095j',
            text: () => `Melee Damage Boost: 40%`,
          },
        ],
      },
    ],
  },
  {
    id: 'ckqit2uc800iv76vahfxi9d2x',
    name: 'Sniper Rifles',
    url: '/wiki/Sniper_Rifles',
    type: 'passive',
    description:
      'Improves specialist sniper training for long-range combatants. Sniper rifles deal high damage at a distance at the cost of slow firing rates and capacities.\n',
    ranks: [
      {
        id: 'ckqit2uc600ia76va0t7y77ww',
        rank: 1,
        name: 'Sniper Rifles',
        icon: 'C_Sniper_Rifles_Icon.png',
        description:
          'Increases sniper rifle damage with each skill point invested in the Combat Skill Group.',
        bonuses: [
          {
            id: 'ckqit2uc600ib76vad27sblgy',
            text: ({ sniperRifleDamage }) =>
              `+${sniperRifleDamage}% Sniper Rifle Damage`,
            bonus: (stats, skillCount) => ({
              ...stats,
              sniperRifleDamage: 2 + Math.floor((skillCount || 0) * (38 / 252)),
            }),
          },
        ],
      },
      {
        id: 'ckqit2uc600ic76vae54r1i51',
        rank: 2,
        name: 'Accuracy',
        icon: 'C_Accuracy_Icon.png',
        description:
          'Increases sniper rifle accuracy with each skill point invested in the Combat Skill Group.',
        bonuses: [
          {
            id: 'ckqit2uc600id76va5yug1zuq',
            text: ({ sniperRifleAccuracy }) =>
              `+${sniperRifleAccuracy}% Sniper Rifle Accuracy`,
            bonus: (stats, skillCount) => ({
              ...stats,
              sniperRifleAccuracy:
                2 + Math.floor((skillCount || 0) * (38 / 252)),
            }),
          },
        ],
      },
      {
        id: 'ckqit2uc700ie76vac64lbfe0',
        rank: 3,
        name: 'Headshots',
        icon: 'C_Headshots_Icon.png',
        description:
          'Increases headshot and other weak point damage from sniper rifles with each skill point invested in the Combat Skill Group.',
        bonuses: [
          {
            id: 'ckqit2uc700if76va5r5e5twd',
            text: ({ sniperRifleHeadshot }) =>
              `+${sniperRifleHeadshot}% Sniper Rifle Headshot/Weak Point Bonus`,
            bonus: (stats, skillCount) => ({
              ...stats,
              sniperRifleHeadshot:
                2 + Math.floor((skillCount || 0) * (38 / 252)),
            }),
          },
        ],
      },
      {
        id: 'ckqit2uc700ig76vabg6qbjrs',
        rank: 4.1,
        name: 'Weight',
        icon: 'C_Weapons_And_Melee_Icon.png',
        description: '',
        bonuses: [
          {
            id: 'ckqit2uc700ih76va9m584xvb',
            text: () => `-25% Sniper Rifle Weight`,
          },
        ],
      },
      {
        id: 'ckqit2uc700ii76va1eel07wy',
        rank: 4.2,
        name: 'Spare Ammo',
        icon: 'C_Spare_Ammo_Icon.png',
        description: '',
        bonuses: [
          {
            id: 'ckqit2uc700ij76vabvyld7kh',
            text: () => `+15% Sniper Rifle Spare Ammo`,
          },
        ],
      },
      {
        id: 'ckqit2uc700ik76va1j3jcuns',
        rank: 5.1,
        name: 'Reload',
        icon: 'C_Reload_Icon.png',
        description: '',
        bonuses: [
          {
            id: 'ckqit2uc700il76va8tm1begf',
            text: () => `+15% Sniper Rifle Reload Speed`,
          },
        ],
      },
      {
        id: 'ckqit2uc700im76va4ssrdmoc',
        rank: 5.2,
        name: 'Clip Size',
        icon: 'C_Clip_Size_Icon.png',
        description: '',
        bonuses: [
          {
            id: 'ckqit2uc700in76va6e740qbh',
            text: () => `+25% Sniper Rifle Clip Size`,
          },
        ],
      },
      {
        id: 'ckqit2uc700io76va8q324xrj',
        rank: 6.1,
        name: 'Damage & Force',
        icon: 'C_Explosive_Icon.png',
        description: '',
        bonuses: [
          {
            id: 'ckqit2uc700ip76vaavpwdkbb',
            text: () => `+20% Sniper Rifle Damage`,
            showText: false,
            bonus: stats => ({
              ...stats,
              sniperRifleDamage: (stats.sniperRifleDamage || 0) + 20,
            }),
          },
          {
            id: 'ckqit2uc800iq76vabxrxe54d',
            text: () => `+20% Sniper Rifle Force`,
          },
        ],
      },
      {
        id: 'ckqit2uc800ir76vahzuh4y85',
        rank: 6.2,
        name: 'Killing Spree',
        icon: 'C_Killing_Spree_Icon.png',
        description:
          'Improves rate of fire, stability, and reload time for 5 sec after killing an enemy with a sniper rifle.',
        bonuses: [
          {
            id: 'ckqit2uc800is76va61jw3qx8',
            text: () => `On-Kill Rate of Fire Boost: 30%`,
          },
          {
            id: 'ckqit2uc800it76va8r554m6k',
            text: () => `On-Kill Stability Boost: 40%`,
          },
          {
            id: 'ckqit2uc800iu76va34fmaag3',
            text: () => `On-Kill Reload Speed Boost: 25%`,
          },
        ],
      },
    ],
  },
  {
    id: 'ckqit2uk100ky76va6ie4cr7g',
    name: 'Combat Fitness',
    url: '/wiki/Combat_Fitness',
    type: 'passive',
    description:
      "Intense physical and survival training designed to improve a combatant's stamina and versatility in battle.\n",
    ranks: [
      {
        id: 'ckqit2ujq00k976vadcq7exos',
        rank: 1,
        name: 'Health',
        icon: 'C_Health_Icon.png',
        description:
          'Increases maximum health with each skill point invested in the Combat Skill Group.',
        bonuses: [
          {
            id: 'ckqit2ujq00ka76vacvgierml',
            text: ({ maxHealth }) => `+${maxHealth}% Max Health`,
            bonus: (stats, skillCount) => ({
              ...stats,
              maxHealth: 2 + Math.floor((skillCount || 0) * (57 / 252)),
            }),
          },
        ],
      },
      {
        id: 'ckqit2ujr00kb76va8nnnfhra',
        rank: 2,
        name: 'Shields',
        icon: 'C_Shields_Icon.png',
        description:
          'Increases maximum shield rating with each skill point invested in the Combat Skill Group.',
        bonuses: [
          {
            id: 'ckqit2ujr00kc76vaawaohurj',
            text: ({ maxShields }) => `+${maxShields}% Max Shields`,
            bonus: (stats, skillCount) => ({
              ...stats,
              maxShields: 2 + Math.floor((skillCount || 0) * (57 / 252)),
            }),
          },
        ],
      },
      {
        id: 'ckqit2ujr00kd76va5l7d537t',
        rank: 3,
        name: 'Extra Holster',
        icon: 'C_Extra_Holster_Icon.png',
        description:
          'Up to three weapons can be equipped at once and carrying capacity is increased.',
        bonuses: [
          {
            id: 'ckqit2ujr00ke76va82mkgv3i',
            text: ({ weaponLoadoutSize }) =>
              `+${weaponLoadoutSize} Weapon Loadout Size`,
            bonus: stats => ({
              ...stats,
              weaponLoadoutSize: (stats.weaponLoadoutSize || 0) + 1,
            }),
          },
          {
            id: 'ckqit2ujr00kf76vag7l00ykr',
            text: ({ weaponWeightCapacity }) =>
              `+${weaponWeightCapacity}% Weapon Weight Capacity`,
            bonus: stats => ({
              ...stats,
              weaponWeightCapacity: (stats.weaponWeightCapacity || 0) + 25,
            }),
          },
        ],
      },
      {
        id: 'ckqit2ujr00kg76vaennk55or',
        rank: 4.1,
        name: 'Consumables',
        icon: 'C_Consumables_Icon.png',
        description:
          'Improves the effectiveness of all consumables (such as overdrive packs and shield capacitors).',
        bonuses: [
          {
            id: 'ckqit2ujr00kh76vacnxmcbgo',
            text: () => `+30% Consumable Effectiveness`,
          },
        ],
      },
      {
        id: 'ckqit2ujr00ki76vaaeqs3oyq',
        rank: 4.2,
        name: 'Regeneration',
        icon: 'C_Regeneration_P_Icon.png',
        description: 'Improves health and shield regeneration rates.',
        bonuses: [
          {
            id: 'ckqit2ujr00kj76vae9ss0f0d',
            text: () => `+20% Health Regeneration Cap`,
          },
          {
            id: 'ckqit2ujr00kk76vadno5768g',
            text: () => `+50% Health Regeneration`,
          },
          {
            id: 'ckqit2ujr00kl76va6xvv1c9q',
            text: () => `+20% Shield Regeneration`,
          },
        ],
      },
      {
        id: 'ckqit2ujr00km76va8v0ccrj5',
        rank: 5.1,
        name: 'Extra Holster',
        icon: 'C_Extra_Holster_Icon.png',
        description:
          'Up to four weapons can be equipped at once and carrying capacity is increased.',
        bonuses: [
          {
            id: 'ckqit2ujr00kn76va3ey55943',
            text: () => `+1 Weapon Loadout Size`,
            showText: false,
            bonus: stats => ({
              ...stats,
              weaponLoadoutSize: (stats.weaponLoadoutSize || 0) + 1,
            }),
          },
          {
            id: 'ckqit2ujr00ko76vaa58da3pf',
            text: () => `+25% Weapon Weight Capacity`,
            showText: false,
            bonus: stats => ({
              ...stats,
              weaponWeightCapacity: (stats.weaponWeightCapacity || 0) + 25,
            }),
          },
        ],
      },
      {
        id: 'ckqit2ujs00kp76vahwy44ug4',
        rank: 5.2,
        name: 'Heavy Lifting',
        icon: 'C_Heavy_Lifting_Icon.png',
        description:
          'Improves thermal clip size, and thermal clip and power cell carrying capacity.',
        bonuses: [
          {
            id: 'ckqit2ujs00kq76vagvax8b0a',
            text: () => `+20% Weapon Clip Size`,
          },
          {
            id: 'ckqit2ujs00kr76vactyocina',
            text: () => `+25% Weapon Spare Ammo`,
          },
          {
            id: 'ckqit2ujs00ks76vae22ta524',
            text: () => `+1 to all Combat Power Cell Capacities`,
          },
        ],
      },
      {
        id: 'ckqit2ujs00kt76va1ytg787v',
        rank: 6.1,
        name: 'Hold the Line',
        icon: 'C_Hold_The_Line_Icon.png',
        description:
          'Dramatically increases Damage resistance when below 30% health.',
        bonuses: [
          {
            id: 'ckqit2ujs00ku76va5cas2mq7',
            text: () => `Low Health Damage Resistance: 200`,
          },
        ],
      },
      {
        id: 'ckqit2ujs00kv76vahjm374l0',
        rank: 6.2,
        name: 'In the Trenches',
        icon: 'C_Defensive_Positioning_Icon.png',
        description:
          'Improves Damage Resistance and reduces Shield Regeneration Delay while in cover.',
        bonuses: [
          {
            id: 'ckqit2uk000kw76va3tic5w7e',
            text: () => `Regen Delay Reduction In Cover: 50%`,
          },
          {
            id: 'ckqit2uk100kx76vabxy65352',
            text: () => `Damage Resistance in Cover: 100`,
          },
        ],
      },
    ],
  },
  {
    id: 'ckqit2uqj00mq76vagsv7a3x9',
    name: 'Combat Tools',
    url: '/wiki/Combat_Tools',
    type: 'passive',
    description:
      'Specialized training that allows the user to expertly wield jump-jets and melee weapons in combat.\n',
    ranks: [
      {
        id: 'ckqit2uqh00m276vah7hecnke',
        rank: 1,
        name: 'Power Damage',
        icon: 'C_Power_Damage_Icon.png',
        description:
          'Increases combat power damage with each skill point invested in the Combat Skill Group.',
        bonuses: [
          {
            id: 'ckqit2uqh00m376va6z09e3lc',
            text: ({ combatPowerDamage }) =>
              `+${combatPowerDamage}% Combat Power Damage`,
            bonus: (stats, skillCount) => ({
              ...stats,
              combatPowerDamage: 2 + Math.floor((skillCount || 0) * (38 / 252)),
            }),
          },
        ],
      },
      {
        id: 'ckqit2uqh00m476va8vs874vf',
        rank: 2,
        name: 'Melee',
        icon: 'C_Melee_Icon.png',
        description:
          'Increases melee damage with each skill point invested in the Combat Skill Group.',
        bonuses: [
          {
            id: 'ckqit2uqh00m576vaesvzggvy',
            text: ({ meleeDamageBonus }) =>
              `+${meleeDamageBonus}% Melee Damage`,
            bonus: (stats, skillCount) => ({
              ...stats,
              meleeDamageBonus: 2 + Math.floor((skillCount || 0) * (38 / 252)),
            }),
          },
        ],
      },
      {
        id: 'ckqit2uqh00m676vahra8aej9',
        rank: 3,
        name: 'Detonators',
        icon: 'C_Detonators_Icon.png',
        description:
          'Increases combo detonation damage from combat detonators with each skill point invested in the Combat Skill Group.',
        bonuses: [
          {
            id: 'ckqit2uqh00m776vaakgo9pus',
            text: ({ combatDetonatorDamageBonus }) =>
              `+${combatDetonatorDamageBonus}% Combat Detonator Damage Bonus`,
            bonus: (stats, skillCount) => ({
              ...stats,
              combatDetonatorDamageBonus:
                2 + Math.floor((skillCount || 0) * (38 / 252)),
            }),
          },
        ],
      },
      {
        id: 'ckqit2uqh00m876va2z9a8fwy',
        rank: 4.1,
        name: 'Hover',
        icon: 'C_Hover_Icon.png',
        description: 'Improves hover duration and gun accuracy while hovering.',
        bonuses: [
          {
            id: 'ckqit2uqh00m976va7dyo9kxm',
            text: ({ hoverDuration }) => `+${hoverDuration}% Hover Duration`,
            bonus: stats => ({
              ...stats,
              hoverDuration: (stats.hoverDuration || 0) + 50,
            }),
          },
          {
            id: 'ckqit2uqh00ma76va8s43aosx',
            text: ({ weaponAccuracyWhileAirborne }) =>
              `+${weaponAccuracyWhileAirborne}% Weapon Accuracy While Airborne`,
            bonus: stats => ({
              ...stats,
              weaponAccuracyWhileAirborne:
                (stats.weaponAccuracyWhileAirborne || 0) + 25,
            }),
          },
        ],
      },
      {
        id: 'ckqit2uqi00mb76va00vwh69w',
        rank: 4.2,
        name: 'Evasion',
        icon: 'C_Aerial_Evasion_Icon.png',
        description: 'Reduces incoming damage while evading.',
        bonuses: [
          {
            id: 'ckqit2uqi00mc76va4smt9sww',
            text: () => `+100 Damage Resistance While Evading`,
          },
        ],
      },
      {
        id: 'ckqit2uqi00md76vad6477sw0',
        rank: 5.1,
        name: 'Aerial Melee',
        icon: 'C_Dive_Bomb_Icon.png',
        description: 'Improves melee damage and radius while jumping.',
        bonuses: [
          {
            id: 'ckqit2uqi00me76vafh618yjd',
            text: () => `+20% Jump Melee Damage`,
          },
          {
            id: 'ckqit2uqi00mf76vaeqirey11',
            text: () => `+40% Jump Melee Area of Effect Radius`,
          },
        ],
      },
      {
        id: 'ckqit2uqi00mg76vaerph48xj',
        rank: 5.2,
        name: 'Detonators',
        icon: 'C_Detonators_Icon.png',
        description: '',
        bonuses: [
          {
            id: 'ckqit2uqi00mh76vabe3eazit',
            text: () => `+30% Combat Detonator Damage Bonus`,
            showText: false,
            bonus: stats => ({
              ...stats,
              combatDetonatorDamageBonus:
                (stats.combatDetonatorDamageBonus || 0) + 30,
            }),
          },
        ],
      },
      {
        id: 'ckqit2uqi00mi76vabxcfdkxx',
        rank: 6.1,
        name: 'Aerial Combat',
        icon: 'C_Special_Combat_Training_Icon.png',
        description:
          'Reduces incoming damage while hovering. Improves hover duration and gun accuracy while hovering.',
        bonuses: [
          {
            id: 'ckqit2uqi00mj76vaawnxe9i2',
            text: () => `+30 Damage Resistance While Airborne`,
          },
          {
            id: 'ckqit2uqi00mk76va7az28wal',
            text: () => `+100% Hover Duration`,
            showText: false,
            bonus: stats => ({
              ...stats,
              hoverDuration: (stats.hoverDuration || 0) + 100,
            }),
          },
          {
            id: 'ckqit2uqi00ml76vadllxeed6',
            text: () => `+40% Weapon Accuracy While Airborne`,
            showText: false,
            bonus: stats => ({
              ...stats,
              weaponAccuracyWhileAirborne:
                (stats.weaponAccuracyWhileAirborne || 0) + 40,
            }),
          },
        ],
      },
      {
        id: 'ckqit2uqi00mm76va6jem388z',
        rank: 6.2,
        name: 'Martial Arts',
        icon: 'C_Close-Quarters_Momentum_Icon.png',
        description:
          'Improved melee damage with each melee hit or melee kill. Ends after 20 seconds have passed without a melee kill.',
        bonuses: [
          {
            id: 'ckqit2uqi00mn76vab4el36vo',
            text: () => `Melee Bonus Per Hit: 5%`,
          },
          {
            id: 'ckqit2uqi00mo76vadkjr3g2b',
            text: () => `Melee Bonus Per Kill: 20%`,
          },
          {
            id: 'ckqit2uqi00mp76vah94ybe88',
            text: () => `Max Melee Bonus: 65%`,
          },
        ],
      },
    ],
  },
]

export const techSkills: Skill[] = [
  {
    id: 'ckqit2shx001t76vafy38hcr0',
    name: 'Overload',
    url: '/wiki/Overload',
    type: 'active',
    description:
      'TAP BUTTON: Unleashes an electrostatic discharge upon a target. High damage to shields and synthetic enemies. Detonates combo primers.\n\nHOLD BUTTON: Charges Overload, causing it to "chain" to two additional targets.\n',
    ranks: [
      {
        id: 'ckqit2shv001676vacsoqcqne',
        rank: 1,
        name: 'Overload',
        icon: 'T_Overload_Icon.png',
        description:
          ' TAP BUTTON: Unleashes an electrostatic discharge upon a target. High damage to shields and synthetic enemies. Detonates combo primers.\n\nHOLD BUTTON: Charges Overload, causing it to "chain" to two additional targets.',
        bonuses: [
          {
            id: 'ckqit2shv001776va56vdh4zo',
            text: ({ initialDamageUncharged }) =>
              `Initial Damage (Uncharged): ${initialDamageUncharged}`,
            bonus: stats => ({
              ...stats,
              initialDamageUncharged: 150,
              detonator: true,
            }),
          },
          {
            id: 'ckqit2shv001876vaf9fc5kzo',
            text: ({ initialDamageCharged }) =>
              `Initial Damage (Charged): ${initialDamageCharged}`,
            bonus: stats => ({ ...stats, initialDamageCharged: 200 }),
          },
          {
            id: 'ckqit2shv001976vah83w98qd',
            text: ({ chainDamage }) => `Chain Damage: ${chainDamage}`,
            bonus: stats => ({ ...stats, chainDamage: 100 }),
          },
          {
            id: 'ckqit2shv001a76va5mds0kpt',
            text: ({ shieldDamageBonus }) =>
              `Shield Damage Bonus: ${shieldDamageBonus}%`,
            bonus: stats => ({ ...stats, shieldDamageBonus: 125 }),
          },
          {
            id: 'ckqit2shv001b76vah7zx2gjs',
            text: ({ syntheticDamageBonus }) =>
              `Synthetic Damage Bonus: ${syntheticDamageBonus}%`,
            bonus: stats => ({ ...stats, syntheticDamageBonus: 30 }),
          },
          {
            id: 'ckqit2shv001c76vadil4e3ab',
            text: ({ rechargeTime }) => `Recharge Time (s): ${rechargeTime}`,
            bonus: stats => ({ ...stats, rechargeTime: 15 }),
          },
        ],
      },
      {
        id: 'ckqit2shw001d76va3uwshhjo',
        rank: 2,
        name: 'Recharge Speed',
        icon: 'T_Recharge_Speed_Icon.png',
        description: '',
        bonuses: [
          {
            id: 'ckqit2shw001e76va2ve6bud2',
            text: () => `+10% Recharge Speed`,
            showText: false,
            bonus: stats => ({
              ...stats,
              rechargeTime: stats.rechargeTime! * 1.1,
            }),
          },
        ],
      },
      {
        id: 'ckqit2shw001f76va8q6kdi79',
        rank: 3,
        name: 'Damage',
        icon: 'T_Damage_Icon.png',
        description: '',
        bonuses: [
          {
            id: 'ckqit2shw001g76vacj8969wo',
            text: () => `+15% All Damage`,
            showText: false,
            bonus: stats => ({
              ...stats,
              initialDamageCharged: stats.initialDamageCharged! * 1.15,
              initialDamageUncharged: stats.initialDamageUncharged! * 1.15,
              chainDamage: stats.chainDamage! * 1.15,
            }),
          },
        ],
      },
      {
        id: 'ckqit2shw001h76vahrc62s16',
        rank: 4.1,
        name: 'Damage',
        icon: 'T_Damage_Icon.png',
        description: '',
        bonuses: [
          {
            id: 'ckqit2shw001i76vae58v4t28',
            text: () => `+25% All Damage`,
            showText: false,
            bonus: stats => ({
              ...stats,
              initialDamageCharged: stats.initialDamageCharged! * 1.25,
              initialDamageUncharged: stats.initialDamageUncharged! * 1.25,
              chainDamage: stats.chainDamage! * 1.25,
            }),
          },
        ],
      },
      {
        id: 'ckqit2shw001j76va6uvo9fqq',
        rank: 4.2,
        name: 'Recharge Speed',
        icon: 'T_Recharge_Speed_Icon.png',
        description: '',
        bonuses: [
          {
            id: 'ckqit2shw001k76vae7o74xe2',
            text: () => `+25% Recharge Speed`,
            showText: false,
            bonus: stats => ({
              ...stats,
              rechargeTime: stats.rechargeTime! * 1.25,
            }),
          },
        ],
      },
      {
        id: 'ckqit2shx001l76vaaqbq0vcs',
        rank: 5.1,
        name: 'Charged Overload',
        icon: 'T_Charged_Overload_Icon.png',
        description: 'Chains to one additional target when charged.',
        bonuses: [],
      },
      {
        id: 'ckqit2shx001m76va2y7x6mjx',
        rank: 5.2,
        name: 'Anti-Shield',
        icon: 'T_Anti-Shield_Icon.png',
        description: '',
        bonuses: [
          {
            id: 'ckqit2shx001n76va6ust4na6',
            text: () => `+60% Damage vs. Shields`,
            showText: false,
            bonus: stats => ({
              ...stats,
              shieldDamageBonus: stats.shieldDamageBonus! + 60,
            }),
          },
        ],
      },
      {
        id: 'ckqit2shx001o76va676ydbt9',
        rank: 6.1,
        name: 'Maximum Charge',
        icon: 'T_Charged_Overload_Icon.png',
        description:
          'When charged, chains to an additional target and deals increased damage to chained enemies.',
        bonuses: [
          {
            id: 'ckqit2shx001p76vah56997up',
            text: () => `+30% All Damage`,
            showText: false,
            bonus: stats => ({
              ...stats,
              initialDamageCharged: stats.initialDamageCharged! * 1.3,
              initialDamageUncharged: stats.initialDamageUncharged! * 1.3,
              chainDamage: stats.chainDamage! * 1.3,
            }),
          },
        ],
      },
      {
        id: 'ckqit2shx001q76va8quh70nd',
        rank: 6.2,
        name: 'EMP',
        icon: 'T_EMP_Icon.png',
        description: '',
        bonuses: [
          {
            id: 'ckqit2shx001r76vafl4h7c4h',
            text: () => `+60% Damage vs. Shields`,
            showText: false,
            bonus: stats => ({
              ...stats,
              shieldDamageBonus: stats.shieldDamageBonus! + 60,
            }),
          },
          {
            id: 'ckqit2shx001s76vah3sabcw2',
            text: () => `+15% Damage vs. Synthetics`,
            bonus: stats => ({
              ...stats,
              syntheticDamageBonus: stats.syntheticDamageBonus! + 60,
            }),
          },
        ],
      },
    ],
  },
  {
    id: 'ckqit2sp0003176va4uw32k2j',
    name: 'Incinerate',
    url: '/wiki/Incinerate',
    type: 'active',
    description:
      'Fires a plasma projectile that does bonus damage to armor and inflicts ongoing burning damage to unshielded foes. Burning enemies are primed for combo detonations.\n',
    ranks: [
      {
        id: 'ckqit2sox002h76va0hmnepc6',
        rank: 1,
        name: 'Incinerate',
        icon: 'T_Incinerate_Icon.png',
        description:
          ' Fires a plasma projectile that does bonus damage to armor and inflicts ongoing burning damage to unshielded foes. Burning enemies are primed for combo detonations.',
        bonuses: [
          {
            id: 'ckqit2soy002i76va0ku38iue',
            text: ({ initialDamage }) => `Initial Damage: ${initialDamage}`,
            bonus: stats => ({ ...stats, initialDamage: 120, primer: 'fire' }),
          },
          {
            id: 'ckqit2soy002j76vah30yd0t4',
            text: ({ damagePerSecond }) =>
              `Damage per Second: ${damagePerSecond}`,
            bonus: stats => ({
              ...stats,
              damagePerSecond: (stats.damagePerSecond || 0) + 50,
            }),
          },
          {
            id: 'ckqit2soy002k76vabi24c4ok',
            text: ({ burningDuration }) =>
              `Burning Duration (s): ${burningDuration}`,
            bonus: stats => ({ ...stats, burningDuration: 6 }),
          },
          {
            id: 'ckqit2soy002l76va8dl5enwf',
            text: ({ armorDamageBonus }) =>
              `Armor Damage Bonus: ${armorDamageBonus}%`,
            bonus: stats => ({ ...stats, armorDamageBonus: 60 }),
          },
          {
            id: 'ckqit2soy002m76vaaqkngkga',
            text: () => `Recharge Time (s): 12`,
            bonus: stats => ({ ...stats, rechargeTime: 12 }),
          },
        ],
      },
      {
        id: 'ckqit2soy002n76vab1qxb5u2',
        rank: 2,
        name: 'Recharge Speed',
        icon: 'T_Recharge_Speed_Icon.png',
        description: '',
        bonuses: [
          {
            id: 'ckqit2soy002o76va3bsv6x3o',
            text: () => `+15% Recharge Speed`,
            showText: false,
            bonus: stats => ({
              ...stats,
              rechargeTime: stats.rechargeTime! * 1.15,
            }),
          },
        ],
      },
      {
        id: 'ckqit2soy002p76va9p6e0ljf',
        rank: 3,
        name: 'Damage',
        icon: 'T_Damage_Icon.png',
        description: '',
        bonuses: [
          {
            id: 'ckqit2soy002q76vad2ju4vyb',
            text: () => `+25% All Damage`,
            showText: false,
            bonus: stats => ({
              ...stats,
              initialDamage: stats.initialDamage! * 1.25,
              damagePerSecond: stats.damagePerSecond! * 1.25,
            }),
          },
        ],
      },
      {
        id: 'ckqit2soy002r76va2b3o6rtc',
        rank: 4.1,
        name: 'Radius',
        icon: 'T_Radius_Icon.png',
        description: 'The projectile affects all enemies in a 2 m radius.',
        bonuses: [],
      },
      {
        id: 'ckqit2soy002s76vadt79cqy6',
        rank: 4.2,
        name: 'Burning',
        icon: 'T_Burning_Icon.png',
        description: '',
        bonuses: [
          {
            id: 'ckqit2soy002t76vag6bs6vfz',
            text: () => `+30% Damage Over Time`,
            showText: false,
            bonus: stats => ({
              ...stats,
              damagePerSecond: stats.damagePerSecond! * 1.3,
            }),
          },
          {
            id: 'ckqit2soy002u76va7hvj2z8u',
            text: () => `+50% Duration`,
            showText: false,
            bonus: stats => ({
              ...stats,
              burningDuration: stats.burningDuration! * 1.5,
            }),
          },
        ],
      },
      {
        id: 'ckqit2soz002v76va5artd30c',
        rank: 5.1,
        name: 'Impact',
        icon: 'T_Damage_Icon.png',
        description: '',
        bonuses: [
          {
            id: 'ckqit2soz002w76va80iz0zrb',
            text: () => `+30% Initial Damage`,
            showText: false,
            bonus: stats => ({
              ...stats,
              initialDamage: stats.initialDamage! * 1.3,
            }),
          },
        ],
      },
      {
        id: 'ckqit2soz002x76va2w9922na',
        rank: 5.2,
        name: 'Anti-Armor',
        icon: 'T_Anti-Armor_Icon.png',
        description: '',
        bonuses: [
          {
            id: 'ckqit2soz002y76vahvtjah5i',
            text: () => `+50% Damage vs. Armor`,
            bonus: stats => ({
              ...stats,
              armorDamageBonus: (stats.armorDamageBonus || 0) + 50,
            }),
          },
        ],
      },
      {
        id: 'ckqit2soz002z76vae1iz3dce',
        rank: 6.1,
        name: 'Detonator',
        icon: 'T_Detonator_Icon.png',
        description:
          "Incinerate's initial attack now triggers combo detonations.",
        bonuses: [
          {
            id: 'ckqit2soz002y76vaasdjah5i',
            text: () => ``,
            bonus: stats => ({ ...stats, detonator: true }),
          },
        ],
      },
      {
        id: 'ckqit2sp0003076vag9f1cwej',
        rank: 6.2,
        name: 'Double Incinerate',
        icon: 'T_Double_Incinerate_Icon.png',
        description:
          'Launches two projectiles (instead of one) that seek separate targets.',
        bonuses: [],
      },
    ],
  },
  {
    id: 'ckqit2sx8005s76va3pfzf73i',
    name: 'Assault Turret',
    url: '/wiki/Assault_Turret',
    type: 'active',
    description:
      'Deploys an automated assault turret that counts as a tech construct.\n\nTAP BUTTON: Directs the turret to attack a particular target.\n\nHOLD BUTTON: Detonates the turret, damaging nearby enemies.\n',
    ranks: [
      {
        id: 'ckqit2sx5005176va7q2o31pn',
        rank: 1,
        name: 'Assault Turret',
        icon: 'T_Assault_Turret_Icon.png',
        description:
          'Deploys an automated assault turret that counts as a tech construct.\n\nTAP BUTTON: Directs the turret to attack a particular target.\n\nHOLD BUTTON: Detonates the turret, damaging nearby enemies.',
        bonuses: [
          {
            id: 'ckqit2sx5005276vaaegt5mc6',
            text: ({ turretHealth }) => `Turret Base Health: ${turretHealth}`,
            bonus: stats => ({ ...stats, turretHealth: 400 }),
          },
          {
            id: 'ckqit2sx5005376vaba8b1scu',
            text: ({ damagePerShot }) => `Damage Per Shot: ${damagePerShot}`,
            bonus: stats => ({ ...stats, damagePerShot: 23 }),
          },
          {
            id: 'ckqit2sx5005476vahwelgs9h',
            text: ({ rechargeTime }) => `Recharge Time (s): ${rechargeTime}`,
            bonus: stats => ({ ...stats, rechargeTime: 24 }),
          },
          {
            id: 'ckqit2sx5005576vab5gm244w',
            text: ({ areaDamageWhenDestoryed }) =>
              `Area Damage When Destroyed: ${areaDamageWhenDestoryed}`,
            bonus: stats => ({ ...stats, areaDamageWhenDestoryed: 340 }),
          },
        ],
      },
      {
        id: 'ckqit2sx6005676vadk8p326q',
        rank: 2,
        name: 'Durability',
        icon: 'T_Durability_Icon.png',
        description: '',
        bonuses: [
          {
            id: 'ckqit2sx6005776va2m4d35xk',
            text: () => `+50% Turret Health`,
            showText: false,
            bonus: stats => ({
              ...stats,
              turretHealth: stats.turretHealth! * 1.5,
            }),
          },
        ],
      },
      {
        id: 'ckqit2sx6005876vabiergx2i',
        rank: 3,
        name: 'Damage',
        icon: 'T_Damage_Icon.png',
        description: '',
        bonuses: [
          {
            id: 'ckqit2sx6005976va846ge7fr',
            text: () => `+20% Turret Gun Damage`,
            showText: false,
            bonus: stats => ({
              ...stats,
              damagePerShot: stats.damagePerShot! * 1.2,
            }),
          },
        ],
      },
      {
        id: 'ckqit2sx6005a76va0q48712s',
        rank: 4.1,
        name: 'Durability',
        icon: 'T_Durability_Icon.png',
        description: '',
        bonuses: [
          {
            id: 'ckqit2sx6005b76va4t49eqwx',
            text: () => `+75% Turret Health`,
            showText: false,
            bonus: stats => ({
              ...stats,
              turretHealth: stats.turretHealth! * 1.75,
            }),
          },
        ],
      },
      {
        id: 'ckqit2sx6005c76va2iz20f6z',
        rank: 4.2,
        name: 'Recharge Speed',
        icon: 'T_Recharge_Speed_Icon.png',
        description: '',
        bonuses: [
          {
            id: 'ckqit2sx6005d76va2vlkfon6',
            text: () => `+200% Recharge Speed`,
            showText: false,
            bonus: stats => ({
              ...stats,
              rechargeTime: stats.rechargeTime! * 3,
            }),
          },
        ],
      },
      {
        id: 'ckqit2sx6005e76va6mvg6wz0',
        rank: 5.1,
        name: 'Damage',
        icon: 'T_Damage_Icon.png',
        description: '',
        bonuses: [
          {
            id: 'ckqit2sx6005f76vac7a85smk',
            text: () => `+35% Turret Gun Damage`,
            showText: false,
            bonus: stats => ({
              ...stats,
              damagePerShot: stats.damagePerShot! * 1.35,
            }),
          },
        ],
      },
      {
        id: 'ckqit2sx7005g76vadvibdl25',
        rank: 5.2,
        name: 'Omni-Link',
        icon: 'T_Omni-Link_Icon.png',
        description:
          'While its creator is in close proximity, the turret repairs itself (via omni-tool link) and improves tech power refresh rates.',
        bonuses: [
          {
            id: 'ckqit2sx7005h76va4cz22csg',
            text: () => `Omni-Link Range (m): 10`,
          },
          {
            id: 'ckqit2sx7005i76va0jrl8z5d',
            text: () => `Omni-Link Tech Recharge Speed: 35%`,
          },
          {
            id: 'ckqit2sx7005j76vaew63cwht',
            text: () => `Omni-Link Turret Heal per Second: 3%`,
          },
        ],
      },
      {
        id: 'ckqit2sx7005k76va81hzeb67',
        rank: 6.1,
        name: 'Cryo Ammo',
        icon: 'T_Cryo_Ammo_Icon.png',
        description:
          'Turret shots chill enemies, slowing them and weakening armor. Sustained fire can freeze targets solid, priming them for combo detonations.',
        bonuses: [
          {
            id: 'ckqit2sx7005l76vadetyfelq',
            text: () => `Armor Defense Debuff: 100%`,
            bonus: stats => ({ ...stats, primer: 'cryo' }),
          },
          {
            id: 'ckqit2sx7005m76va9ztk7bcu',
            text: () => `+60% Turret Gun Damage`,
            showText: false,
            bonus: stats => ({
              ...stats,
              damagePerShot: stats.damagePerShot! * 1.6,
            }),
          },
        ],
      },
      {
        id: 'ckqit2sx7005n76va6a8vefmj',
        rank: 6.2,
        name: 'Flamethrower',
        icon: 'T_Flamethrower_Icon.png',
        description:
          'At close range, the turret employs a short-range flamethrower to burn enemies, causing bonus damage to armor and priming enemies for combo detonations.',
        bonuses: [
          {
            id: 'ckqit2sx8005o76va3e3eh6x0',
            text: () => `Flamethrower Damage per Second: 45`,
            bonus: stats => ({ ...stats, primer: 'fire' }),
          },
          {
            id: 'ckqit2sx8005p76va638g5iqd',
            text: () => `Burn Damage per Second: 22`,
          },
          {
            id: 'ckqit2sx8005q76va3lha03we',
            text: () => `Flamethrower Range (m): 15`,
          },
          {
            id: 'ckqit2sx8005r76va5c0j2vto',
            text: () => `Flamethrower Damage Bonus vs. Armor: 60%`,
          },
        ],
      },
    ],
  },
  {
    id: 'ckqit2t4j007276va5o8jdtlb',
    name: 'Cryo Beam',
    url: '/wiki/Cryo_Beam',
    type: 'active',
    description:
      'HOLD BUTTON: Directs a continuous stream of super-cooled particles that freezes targets, priming them for combo detonations. Freezing disables unarmored enemies and weakens enemy armor, but has no effect on shielded foes.\n',
    ranks: [
      {
        id: 'ckqit2t4h006h76va1863g5ph',
        rank: 1,
        name: 'Cryo Beam',
        icon: 'T_Cryo_Beam_Icon.png',
        description:
          ' HOLD BUTTON: Directs a continuous stream of super-cooled particles that freezes targets, priming them for combo detonations.\nFreezing disables unarmored enemies and weakens enemy armor, but has no effect on shielded foes.',
        bonuses: [
          {
            id: 'ckqit2t4h006i76va1xst6woz',
            text: ({ damagePerSecond }) =>
              `Damage per Second: ${damagePerSecond}`,
            bonus: stats => ({
              ...stats,
              damagePerSecond: (stats.damagePerSecond || 0) + 135,
              primer: 'cryo',
            }),
          },
          {
            id: 'ckqit2t4h006j76vaeq4w6qec',
            text: ({ defenseDebuffVsArmor }) =>
              `Defense Debuff vs. Armor: ${defenseDebuffVsArmor}%`,
            bonus: stats => ({ ...stats, defenseDebuffVsArmor: 50 }),
          },
          {
            id: 'ckqit2t4h006k76va926dcz4w',
            text: ({ rechargeTime }) => `Recharge Time (s): ${rechargeTime}`,
            bonus: stats => ({ ...stats, rechargeTime: 15 }),
          },
        ],
      },
      {
        id: 'ckqit2t4i006l76vaeq8x6ey1',
        rank: 2,
        name: 'Recharge Speed',
        icon: 'T_Recharge_Speed_Icon.png',
        description: '',
        bonuses: [
          {
            id: 'ckqit2t4i006m76va9v6dgkcd',
            text: () => `+10% Recharge Speed`,
            showText: false,
            bonus: stats => ({
              ...stats,
              rechargeTime: stats.rechargeTime! * 1.1,
            }),
          },
        ],
      },
      {
        id: 'ckqit2t4i006n76va9z82brzl',
        rank: 3,
        name: 'Damage',
        icon: 'T_Damage_Icon.png',
        description: '',
        bonuses: [
          {
            id: 'ckqit2t4i006o76vaal5u97yz',
            text: () => `+20% Damage`,
            showText: false,
            bonus: stats => ({
              ...stats,
              damagePerSecond: stats.damagePerSecond! * 1.2,
            }),
          },
        ],
      },
      {
        id: 'ckqit2t4i006p76vadad49g29',
        rank: 4.1,
        name: 'Damage',
        icon: 'T_Damage_Icon.png',
        description: '',
        bonuses: [
          {
            id: 'ckqit2t4i006q76va0usi1er4',
            text: () => `+40% Damage`,
            showText: false,
            bonus: stats => ({
              ...stats,
              damagePerSecond: stats.damagePerSecond! * 1.4,
            }),
          },
        ],
      },
      {
        id: 'ckqit2t4i006r76vaf04mdnv7',
        rank: 4.2,
        name: 'Recharge Speed',
        icon: 'T_Recharge_Speed_Icon.png',
        description: '',
        bonuses: [
          {
            id: 'ckqit2t4i006s76vah50p4ct9',
            text: () => `+30% Recharge Speed`,
            showText: false,
            bonus: stats => ({
              ...stats,
              rechargeTime: stats.rechargeTime! * 1.3,
            }),
          },
        ],
      },
      {
        id: 'ckqit2t4j006t76va7r5l3bmu',
        rank: 5.1,
        name: 'Brittle Freeze',
        icon: 'T_Weaken_Icon.png',
        description: '',
        bonuses: [
          {
            id: 'ckqit2t4j006u76vafrgp7bmy',
            text: () => `+65% Armor Defense Debuff`,
            showText: false,
            bonus: stats => ({
              ...stats,
              defenseDebuffVsArmor: stats.defenseDebuffVsArmor! * 1.65,
            }),
          },
        ],
      },
      {
        id: 'ckqit2t4j006v76va99xn3z80',
        rank: 5.2,
        name: 'Radius',
        icon: 'T_Radius_Icon.png',
        description:
          'The beam freezes targets in a small radius around its impact point.',
        bonuses: [
          {
            id: 'ckqit2t4j006w76va0fysamsh',
            text: () => `Radius (m): 2.5`,
          },
        ],
      },
      {
        id: 'ckqit2t4j006x76va0est95bg',
        rank: 6.1,
        name: 'Snap Freeze',
        icon: 'T_Snap_Freeze_Icon.png',
        description:
          'Shattering frozen targets causes additional damage to nearby foes and snap-freezes nearby defenseless enemies.',
        bonuses: [
          {
            id: 'ckqit2t4j006y76va86vpck74',
            text: () => `+200% Frozen Shatter Damage`,
          },
          {
            id: 'ckqit2t4j006z76vafwz8hvkj',
            text: () => `+100% Frozen Shatter Force`,
          },
          {
            id: 'ckqit2t4j007076vachql6zfq',
            text: () => `+150% Frozen Shatter Radius`,
          },
        ],
      },
      {
        id: 'ckqit2t4j007176vab54fh1g5',
        rank: 6.2,
        name: 'Cryo Trap',
        icon: 'T_Cryo_Trap_Icon.png',
        description:
          ' When aimed away from a direct target, the beam creates a temporary freezing zone that chills enemies who enter.',
        bonuses: [],
      },
    ],
  },
  {
    id: 'ckqit2tby009976vabliha37g',
    name: 'Energy Drain',
    url: '/wiki/Energy_Drain',
    type: 'active',
    description:
      'Restores shields by sapping electromagnetic energy around a target. Causes bonus damage to shields and synthetic enemies and detonates combo primers on all primed enemies.\n',
    ranks: [
      {
        id: 'ckqit2tbw008f76va9ju0022o',
        rank: 1,
        name: 'Energy Drain',
        icon: 'T_Energy_Drain_Icon.png',
        description:
          ' Restores shields by sapping electromagnetic energy around a target. Causes bonus damage to shields and synthetic enemies and detonates combo primers on all primed enemies.',
        bonuses: [
          {
            id: 'ckqit2tbw008g76va173d4633',
            text: ({ shieldsRestored }) =>
              `Shields Restored: ${shieldsRestored}%`,
            bonus: stats => ({
              ...stats,
              shieldsRestored: 35,
              detonator: true,
            }),
          },
          {
            id: 'ckqit2tbw008h76vagovf253j',
            text: ({ damage }) => `Primary Damage: ${damage}`,
            bonus: stats => ({ ...stats, damage: 160 }),
          },
          {
            id: 'ckqit2tbw008i76vabbgxerre',
            text: ({ shieldDamageBonus }) =>
              `Energy Drain Shield Damage Bonus: ${shieldDamageBonus}%`,
            bonus: stats => ({ ...stats, shieldDamageBonus: 100 }),
          },
          {
            id: 'ckqit2tbw008j76va7ic64cef',
            text: ({ syntheticDamageBonus }) =>
              `Synthetic Damage Bonus: ${syntheticDamageBonus}%`,
            bonus: stats => ({ ...stats, syntheticDamageBonus: 15 }),
          },
          {
            id: 'ckqit2tbw008k76va4tfwc6wq',
            text: ({ rechargeTime }) => `Recharge Time (s): ${rechargeTime}`,
            bonus: stats => ({ ...stats, rechargeTime: 15 }),
          },
        ],
      },
      {
        id: 'ckqit2tbw008l76vaejnhcr9i',
        rank: 2,
        name: 'Recharge Speed',
        icon: 'T_Recharge_Speed_Icon.png',
        description: '',
        bonuses: [
          {
            id: 'ckqit2tbw008m76va6zhddtxz',
            text: () => `+10% Recharge Speed`,
            showText: false,
            bonus: stats => ({
              ...stats,
              rechargeTime: stats.rechargeTime! * 1.1,
            }),
          },
        ],
      },
      {
        id: 'ckqit2tbw008n76va4e7c5oor',
        rank: 3,
        name: 'Effectiveness',
        icon: 'T_Effectiveness_Icon.png',
        description: '',
        bonuses: [
          {
            id: 'ckqit2tbw008o76va3kkm0ncz',
            text: () => `+15% Damage`,
            showText: false,
            bonus: stats => ({ ...stats, damage: stats.damage! * 1.15 }),
          },
          {
            id: 'ckqit2tbw008p76vagl76feig',
            text: () => `+15% Shields Restored`,
            showText: false,
            bonus: stats => ({
              ...stats,
              shieldsRestored: stats.shieldsRestored! + 15,
            }),
          },
        ],
      },
      {
        id: 'ckqit2tbx008q76va1l0r7ova',
        rank: 4.1,
        name: 'Effectiveness',
        icon: 'T_Effectiveness_Icon.png',
        description: '',
        bonuses: [
          {
            id: 'ckqit2tbx008r76va5v7l32qx',
            text: () => `+20% Damage`,
            showText: false,
            bonus: stats => ({ ...stats, damage: stats.damage! * 1.2 }),
          },
          {
            id: 'ckqit2tbx008s76vad2ut5bwg',
            text: () => `+20% Shields Restored`,
            showText: false,
            bonus: stats => ({
              ...stats,
              shieldsRestored: stats.shieldsRestored! + 20,
            }),
          },
        ],
      },
      {
        id: 'ckqit2tbx008t76vae16p19xs',
        rank: 4.2,
        name: 'Recharge Speed',
        icon: 'T_Recharge_Speed_Icon.png',
        description: '',
        bonuses: [
          {
            id: 'ckqit2tbx008u76va2hh68hs0',
            text: () => `+30% Recharge Speed`,
            showText: false,
            bonus: stats => ({
              ...stats,
              rechargeTime: stats.rechargeTime! * 1.3,
            }),
          },
        ],
      },
      {
        id: 'ckqit2tbx008v76va6lt127ii',
        rank: 5.1,
        name: 'Extended Drain',
        icon: 'T_Extended_Drain_Icon.png',
        description:
          ' Restores additional shields over time, and the target is primed for combo detonations for the same duration.',
        bonuses: [
          {
            id: 'ckqit2tbx008w76va7v639l9t',
            text: () => `Shields Restored per Second: 6%`,
            bonus: stats => ({ ...stats, primer: 'tech' }),
          },
          {
            id: 'ckqit2tbx008x76va01gffruv',
            text: () => `Shield Restore Duration (s): 4`,
          },
        ],
      },
      {
        id: 'ckqit2tbx008y76va2tg2danv',
        rank: 5.2,
        name: 'Auxiliary Drain',
        icon: 'T_Radius_Icon.png',
        description:
          'Affects up to three additional nearby enemies, and grants added delayed shield restoration per additional enemy hit.',
        bonuses: [
          {
            id: 'ckqit2tbx008z76va40n4dfd3',
            text: () => `Impact Radius (m): 8`,
          },
          {
            id: 'ckqit2tbx009076va23gufcn0',
            text: () => `Shields Restored per Additional Target 33%`,
          },
        ],
      },
      {
        id: 'ckqit2tby009176va0wcccfzi',
        rank: 6.1,
        name: 'Damage',
        icon: 'T_Damage_Icon.png',
        description:
          'Increases both standard damage and damage bonus against shields and synthetic enemies.',
        bonuses: [
          {
            id: 'ckqit2tby009276vafhwy6ege',
            text: () => `+25% Damage`,
            showText: false,
            bonus: stats => ({ ...stats, damage: stats.damage! * 1.25 }),
          },
          {
            id: 'ckqit2tby009376va2o9e60fd',
            text: () => `+50% Damage vs. Shields`,
            showText: false,
            bonus: stats => ({
              ...stats,
              shieldDamageBonus: stats.shieldDamageBonus! + 50,
            }),
          },
          {
            id: 'ckqit2tby009476vafx45ewlk',
            text: () => `+15% Damage vs. Synthetics`,
            showText: false,
            bonus: stats => ({
              ...stats,
              syntheticDamageBonus: stats.syntheticDamageBonus! + 15,
            }),
          },
        ],
      },
      {
        id: 'ckqit2tby009576va7iy34n9b',
        rank: 6.2,
        name: 'Team Drain',
        icon: 'T_Team_Drain_Icon.png',
        description:
          'Initial draining effect also restores the shields of allies near the user.',
        bonuses: [
          {
            id: 'ckqit2tby009676vah0rsemtf',
            text: () => `Ally Shields Restored: 50%`,
          },
          {
            id: 'ckqit2tby009776va1jr09wls',
            text: () => `Ally Effect Radius: 8`,
          },
          {
            id: 'ckqit2tby009876vabft586l1',
            text: () => `+25% Shields Restored`,
          },
        ],
      },
    ],
  },
  {
    id: 'ckqit2tj300b876vaeuvaaz8h',
    name: 'Tactical Cloak',
    url: '/wiki/Tactical_Cloak',
    type: 'active',
    description:
      'Employs light-bending technology to render the user invisible at the cost of shield and health regeneration. Guns, powers, and melee attacks used from cloak gain a damage bonus but break the cloaking effect.\n',
    ranks: [
      {
        id: 'ckqit2tj000al76va6nssgrck',
        rank: 1,
        name: 'Tactical Cloak',
        icon: 'T_Tactical_Cloak_Icon.png',
        description:
          'Employs light-bending technology to render the user invisible at the cost of shield and health regeneration. Guns, powers, and melee attacks used from cloak gain a damage bonus but break the cloaking effect.',
        bonuses: [
          {
            id: 'ckqit2tj000am76vaayye6shu',
            text: ({ duration }) => `Duration (s): ${duration}`,
            bonus: stats => ({ ...stats, duration: 6.5 }),
          },
          {
            id: 'ckqit2tj000an76vafiag08n4',
            text: ({ rechargeTime }) => `Recharge Time (s): ${rechargeTime}`,
            bonus: stats => ({ ...stats, rechargeTime: 15 }),
          },
          {
            id: 'ckqit2tj000ao76va7na27dpc',
            text: ({ gunDamageBonus }) =>
              `Gun Damage Bonus: ${gunDamageBonus}%`,
            bonus: stats => ({ ...stats, gunDamageBonus: 50 }),
          },
          {
            id: 'ckqit2tj000ap76va678k2x7j',
            text: ({ powerDamageBonus }) =>
              `Power Damage Bonus: ${powerDamageBonus}%`,
            bonus: stats => ({ ...stats, powerDamageBonus: 50 }),
          },
          {
            id: 'ckqit2tj000aq76va6pqp8pxf',
            text: ({ meleeDamageBonus }) =>
              `Melee Damage Bonus: ${meleeDamageBonus}%`,
            bonus: stats => ({ ...stats, meleeDamageBonus: 75 }),
          },
        ],
      },
      {
        id: 'ckqit2tj100ar76vadi5w4qiy',
        rank: 2,
        name: 'Recharge Speed',
        icon: 'T_Recharge_Speed_Icon.png',
        description: '',
        bonuses: [
          {
            id: 'ckqit2tj100as76vaeju3frga',
            text: () => `+15% Recharge Speed`,
            showText: false,
            bonus: stats => ({
              ...stats,
              rechargeTime: stats.rechargeTime! * 1.15,
            }),
          },
        ],
      },
      {
        id: 'ckqit2tj100at76va9vicdnut',
        rank: 3,
        name: 'Duration',
        icon: 'T_Extended_Drain_Icon.png',
        description: '',
        bonuses: [
          {
            id: 'ckqit2tj100au76va2w743i78',
            text: () => `+25% Duration`,
            showText: false,
            bonus: stats => ({ ...stats, duration: stats.duration! * 1.25 }),
          },
        ],
      },
      {
        id: 'ckqit2tj200av76va062l2hdu',
        rank: 4.1,
        name: 'Recharge Speed',
        icon: 'T_Recharge_Speed_Icon.png',
        description: '',
        bonuses: [
          {
            id: 'ckqit2tj200aw76vad7t798j2',
            text: () => `+30% Recharge Speed`,
            showText: false,
            bonus: stats => ({
              ...stats,
              rechargeTime: stats.rechargeTime! * 1.3,
            }),
          },
        ],
      },
      {
        id: 'ckqit2tj200ax76va8rcj9v9p',
        rank: 4.2,
        name: 'Damage Bonus',
        icon: 'T_Damage_Icon.png',
        description: '',
        bonuses: [
          {
            id: 'ckqit2tj200ay76vadefqc8f3',
            text: () => `+40% Gun Damage Bonus`,
            showText: false,
            bonus: stats => ({
              ...stats,
              gunDamageBonus: stats.gunDamageBonus! + 40,
            }),
          },
          {
            id: 'ckqit2tj200az76vaagzz9lmb',
            text: () => `+50% Power Damage Bonus`,
            showText: false,
            bonus: stats => ({
              ...stats,
              powerDamageBonus: stats.powerDamageBonus! + 50,
            }),
          },
          {
            id: 'ckqit2tj200b076va2pm53ic9',
            text: () => `+50% Melee Damage Bonus`,
            showText: false,
            bonus: stats => ({
              ...stats,
              meleeDamageBonus: stats.meleeDamageBonus! + 50,
            }),
          },
        ],
      },
      {
        id: 'ckqit2tj200b176vafu0cfvk8',
        rank: 5.1,
        name: 'Duration',
        icon: 'T_Extended_Drain_Icon.png',
        description: '',
        bonuses: [
          {
            id: 'ckqit2tj200b276vafsj8ajei',
            text: () => `+50% Duration`,
            showText: false,
            bonus: stats => ({ ...stats, duration: stats.duration! * 1.5 }),
          },
        ],
      },
      {
        id: 'ckqit2tj200b376vagsxng9f2',
        rank: 5.2,
        name: 'Speed',
        icon: 'T_Speed_Icon.png',
        description: '',
        bonuses: [
          {
            id: 'ckqit2tj200b476va102h3icn',
            text: () => `+20% Movement Speed While Cloaked`,
          },
        ],
      },
      {
        id: 'ckqit2tj200b576va3amraq2f',
        rank: 6.1,
        name: 'Escape Artist',
        icon: 'T_Escape_Artist_Icon.png',
        description:
          'Melee kills briefly activate Tactical Cloak and the cloak no longer prevents health and shield regeneration.',
        bonuses: [],
      },
      {
        id: 'ckqit2tj300b676vae0h96mol',
        rank: 6.2,
        name: 'Combat Cloak',
        icon: 'T_Combat_Cloak_Icon.png',
        description:
          'Tactical Cloak remains active briefly after attacking. Damage bonuses remain in effect during this time.',
        bonuses: [
          {
            id: 'ckqit2tj300b776vadd5y7xay',
            text: () => `Cloak Duration After Attack (s): 2`,
          },
        ],
      },
    ],
  },
  {
    id: 'ckqit2tpy00dq76va32ga5jn3',
    name: 'Flamethrower',
    url: '/wiki/Flamethrower',
    type: 'active',
    description:
      'HOLD BUTTON: Unleashes a short-range jet of flame that causes bonus damage to armor and ongoing burn damage. Unshielded enemies held in the jet catch fire, priming them for combo detonations.\n',
    ranks: [
      {
        id: 'ckqit2tpx00d476va5717cbwp',
        rank: 1,
        name: 'Flamethrower',
        icon: 'T_Flamethrower_Icon.png',
        description:
          ' HOLD BUTTON: Unleashes a short-range jet of flame that causes bonus damage to armor and ongoing burn damage. Unshielded enemies held in the jet catch fire, priming them for combo detonations.',
        bonuses: [
          {
            id: 'ckqit2tpx00d576va5p1a8is9',
            text: ({ damagePerSecond }) =>
              `Sustained Damage per Second: ${damagePerSecond}`,
            bonus: stats => ({
              ...stats,
              damagePerSecond: 225,
              primer: 'fire',
            }),
          },
          {
            id: 'ckqit2tpx00d676va4phk83as',
            text: ({ burnDamagePerSecond }) =>
              `Burn Damage per Second: ${burnDamagePerSecond}`,
            bonus: stats => ({ ...stats, burnDamagePerSecond: 120 }),
          },
          {
            id: 'ckqit2tpx00d776vae7x2dzzu',
            text: ({ burningDuration }) =>
              `Burning Duration (s): ${burningDuration}`,
            bonus: stats => ({ ...stats, burningDuration: 5 }),
          },
          {
            id: 'ckqit2tpx00d876vaauxm1ojt',
            text: ({ armorDamageBonus }) =>
              `Armor Damage Bonus: ${armorDamageBonus}%`,
            bonus: stats => ({ ...stats, armorDamageBonus: 25 }),
          },
          {
            id: 'ckqit2tpx00d976va6xolhca8',
            text: ({ rechargeTime }) => `Recharge Time (s): ${rechargeTime}`,
            bonus: stats => ({ ...stats, rechargeTime: 12 }),
          },
        ],
      },
      {
        id: 'ckqit2tpx00da76va7fkle0uq',
        rank: 2,
        name: 'Recharge Speed',
        icon: 'T_Recharge_Speed_Icon.png',
        description: '',
        bonuses: [
          {
            id: 'ckqit2tpx00db76vagngqa6cy',
            text: () => `+20% Recharge Speed`,
            showText: false,
            bonus: stats => ({
              ...stats,
              rechargeTime: stats.rechargeTime! * 1.2,
            }),
          },
        ],
      },
      {
        id: 'ckqit2tpx00dc76vae5su5xne',
        rank: 3,
        name: 'Damage',
        icon: 'T_Damage_Icon.png',
        description: '',
        bonuses: [
          {
            id: 'ckqit2tpx00dd76va6hz90frp',
            text: () => `+15% All Damage`,
            showText: false,
            bonus: stats => ({
              ...stats,
              damagePerSecond: stats.damagePerSecond! * 1.15,
              burnDamagePerSecond: stats.burnDamagePerSecond! * 1.15,
            }),
          },
        ],
      },
      {
        id: 'ckqit2tpx00de76vaeqet8714',
        rank: 4.1,
        name: 'Damage',
        icon: 'T_Damage_Icon.png',
        description: '',
        bonuses: [
          {
            id: 'ckqit2tpx00df76va4tx3801f',
            text: () => `+25% All Damage`,
            showText: false,
            bonus: stats => ({
              ...stats,
              damagePerSecond: stats.damagePerSecond! * 1.25,
              burnDamagePerSecond: stats.burnDamagePerSecond! * 1.25,
            }),
          },
        ],
      },
      {
        id: 'ckqit2tpx00dg76vadl0raclv',
        rank: 4.2,
        name: 'Recharge Speed',
        icon: 'T_Recharge_Speed_Icon.png',
        description: '',
        bonuses: [
          {
            id: 'ckqit2tpx00dh76va0t7d8onu',
            text: () => `+30% Recharge Speed`,
            showText: false,
            bonus: stats => ({
              ...stats,
              rechargeTime: stats.rechargeTime! * 1.3,
            }),
          },
        ],
      },
      {
        id: 'ckqit2tpy00di76vac7y634nu',
        rank: 5.1,
        name: 'Reach',
        icon: 'T_Reach_Icon.png',
        description: "Increases the flamethrower's range.",
        bonuses: [
          {
            id: 'ckqit2tpy00dj76vaf5bn0g2y',
            text: () => `+50% Damage Radius`,
          },
        ],
      },
      {
        id: 'ckqit2tpy00dk76va4a2p9icn',
        rank: 5.2,
        name: 'Lingering Burn',
        icon: 'T_Extended_Drain_Icon.png',
        description: 'Increases burning damage and duration.',
        bonuses: [
          {
            id: 'ckqit2tpy00dl76vaatrq4fcb',
            text: () => `+40% Damage Over Time`,
            showText: false,
            bonus: stats => ({
              ...stats,
              burnDamagePerSecond: stats.burnDamagePerSecond! * 1.4,
            }),
          },
          {
            id: 'ckqit2tpy00dm76vaeg67812b',
            text: () => `+50% Duration`,
            showText: false,
            bonus: stats => ({
              ...stats,
              burningDuration: stats.burningDuration! * 1.5,
            }),
          },
        ],
      },
      {
        id: 'ckqit2tpy00dn76vab0jg2x4j',
        rank: 6.1,
        name: 'Anti-Armor',
        icon: 'T_Anti-Armor_Icon.png',
        description: '',
        bonuses: [
          {
            id: 'ckqit2tpy00do76va91258yao',
            text: () => `+65% Damage vs. Armor`,
            bonus: stats => ({
              ...stats,
              armorDamageBonus: stats.armorDamageBonus! + 65,
            }),
          },
        ],
      },
      {
        id: 'ckqit2tpy00dp76va39hr3dqs',
        rank: 6.2,
        name: 'Blinding Heat',
        icon: 'T_Blinding_Heat_Icon.png',
        description: 'Damage output from enemies on fire is reduced by 50%.',
        bonuses: [],
      },
    ],
  },
  {
    id: 'ckqit2tws00f276vabkofb48h',
    name: 'Remnant VI',
    url: '/wiki/Remnant_VI',
    type: 'active',
    description:
      'Deploys a retrofitted Remnant Observer that repairs itself over time, cloaks when critically damaged and counts as a tech construct.\n\nTAP BUTTON: Directs the VI to attack a particular target.\n\nHOLD BUTTON: Deactivates the VI.\n',
    ranks: [
      {
        id: 'ckqit2twq00ec76va1op6h55b',
        rank: 1,
        name: 'Remnant VI',
        icon: 'T_Remnant_VI_Icon.png',
        description:
          'Deploys a retrofitted Remnant Observer that repairs itself over time, cloaks when critically damaged and counts as a tech construct.\n\nTAP BUTTON: Directs the VI to attack a particular target.\n\nHOLD BUTTON: Deactivates the VI.',
        bonuses: [
          {
            id: 'ckqit2twq00ed76va36c8cel7',
            text: ({ viHealth }) => `VI Health: ${viHealth}`,
            bonus: stats => ({ ...stats, viHealth: 800 }),
          },
          {
            id: 'ckqit2twq00ee76vagfyk4qvt',
            text: ({ damagePerSecond }) =>
              `Beam Damage per Second: ${damagePerSecond}`,
            bonus: stats => ({ ...stats, damagePerSecond: 66 }),
          },
          {
            id: 'ckqit2twq00ef76va42hb6xns',
            text: ({ rechargeTime }) => `Recharge Time (s): ${rechargeTime}`,
            bonus: stats => ({ ...stats, rechargeTime: 24 }),
          },
        ],
      },
      {
        id: 'ckqit2twq00eg76vaangkdkh6',
        rank: 2,
        name: 'Durability',
        icon: 'T_Durability_Icon.png',
        description: '',
        bonuses: [
          {
            id: 'ckqit2twq00eh76vaefz61e32',
            text: () => `+50 VI Health`,
            showText: false,
            bonus: stats => ({ ...stats, viHealth: stats.viHealth! + 50 }),
          },
        ],
      },
      {
        id: 'ckqit2twq00ei76va4xun1uns',
        rank: 3,
        name: 'Beam Damage',
        icon: 'T_Damage_Icon.png',
        description: '',
        bonuses: [
          {
            id: 'ckqit2twq00ej76vaafco14yo',
            text: () => `+25% VI Beam Damage`,
            showText: false,
            bonus: stats => ({
              ...stats,
              damagePerSecond: stats.damagePerSecond! * 1.25,
            }),
          },
        ],
      },
      {
        id: 'ckqit2twq00ek76va8x1a783p',
        rank: 4.1,
        name: 'Expedited Repairs',
        icon: 'T_Omni-Link_Icon.png',
        description: '',
        bonuses: [
          {
            id: 'ckqit2twq00el76va4wkqh6ve',
            text: () => `+50% VI Health Regen`,
          },
          {
            id: 'ckqit2twq00em76vadk49ass9',
            text: () => `+80% VI Health Regen Delay Reduction`,
          },
        ],
      },
      {
        id: 'ckqit2twr00en76vadzio0u7c',
        rank: 4.2,
        name: 'Recharge Speed',
        icon: 'T_Recharge_Speed_Icon.png',
        description: '',
        bonuses: [
          {
            id: 'ckqit2twr00eo76va9rt9doon',
            text: () => `+40% Recharge Speed`,
            showText: false,
            bonus: stats => ({
              ...stats,
              rechargeTime: stats.rechargeTime! * 1.4,
            }),
          },
        ],
      },
      {
        id: 'ckqit2twr00ep76vagg6vhnna',
        rank: 5.1,
        name: 'Focus Module',
        icon: 'T_Focus_Module_Icon.png',
        description: '',
        bonuses: [
          {
            id: 'ckqit2twr00eq76va2h7q4kjm',
            text: () => `+50% VI Beam Damage`,
            showText: false,
            bonus: stats => ({
              ...stats,
              damagePerSecond: stats.damagePerSecond! * 1.5,
            }),
          },
        ],
      },
      {
        id: 'ckqit2twr00er76vaa98x7xu6',
        rank: 5.2,
        name: 'Close Combat Module',
        icon: 'T_Close_Combat_Module_Icon.png',
        description:
          "The VI engages enemies at a closer range, demanding foes' attention. Also improves VI health.",
        bonuses: [
          {
            id: 'ckqit2twr00es76vaayuqe483',
            text: () => `+200% VI Health`,
            showText: false,
            bonus: stats => ({ ...stats, viHealth: stats.viHealth! * 3 }),
          },
        ],
      },
      {
        id: 'ckqit2twr00et76va5so9acez',
        rank: 6.1,
        name: 'Detonating Missiles',
        icon: 'T_Detonator_Icon.png',
        description:
          "Adds explosive missiles to the VI's arsenal (in addition to its beam weapon). Missiles trigger combo detonations.",
        bonuses: [
          {
            id: 'ckqit2twr00eu76va3kxxcis7',
            text: () => `Missile Damage: 90`,
            bonus: stats => ({ ...stats, detonator: true }),
          },
          {
            id: 'ckqit2twr00ev76va842v3ew3',
            text: () => `Missile Damage Radius (m): 2.5`,
          },
          {
            id: 'ckqit2twr00ew76vaf3pkce87',
            text: () => `Missile Frequency (s): 6`,
          },
        ],
      },
      {
        id: 'ckqit2twr00ex76va4e187j9p',
        rank: 6.2,
        name: 'Electric Beam',
        icon: 'T_Electric_Beam_Icon.png',
        description:
          "The VI's beam attack has a chance to electrically prime enemies for combo detonations and stun them. Increases damage to shields and synthetic enemies.",
        bonuses: [
          {
            id: 'ckqit2tws00ey76vagv0cho7o',
            text: () => `Shield Damage Bonus: 75%`,
            bonus: stats => ({ ...stats, primer: 'tech' }),
          },
          {
            id: 'ckqit2tws00ez76va6x1859vo',
            text: () => `Synthetic Damage Bonus: 15%`,
          },
          {
            id: 'ckqit2tws00f076va2c7aa2g4',
            text: () => `Stun Duration (s): 1`,
          },
          {
            id: 'ckqit2tws00f176vafwr1a4hi',
            text: () => `+50% VI Beam Damage`,
            showText: false,
            bonus: stats => ({
              ...stats,
              damagePerSecond: stats.damagePerSecond! * 1.5,
            }),
          },
        ],
      },
    ],
  },
  {
    id: 'ckqit2u6x00hk76vaanmv20l8',
    name: 'Invasion',
    url: '/wiki/Invasion',
    type: 'active',
    description:
      'Infects opponents with an invasive VI-controlled machine swarm that weakens defenses and spreads itself to nearby enemies.\n',
    ranks: [
      {
        id: 'ckqit2u6v00gy76va22ac3drb',
        rank: 1,
        name: 'Invasion',
        icon: 'T_Invasion_Icon.png',
        description:
          'Infects opponents with an invasive VI-controlled machine swarm that weakens defenses and spreads itself to nearby enemies.',
        bonuses: [
          {
            id: 'ckqit2u6v00gz76va2o06gkup',
            text: ({ enemyDefenseDebuff }) =>
              `Enemy Defense Debuff: ${enemyDefenseDebuff}%`,
            bonus: stats => ({ ...stats, enemyDefenseDebuff: 30 }),
          },
          {
            id: 'ckqit2u6v00h076vad2jf3sg3',
            text: ({ duration }) => `Duration (s): ${duration}`,
            bonus: stats => ({ ...stats, duration: 15 }),
          },
          {
            id: 'ckqit2u6v00h176va7ncgh5si',
            text: ({ damage }) => `Damage: ${damage}`,
            bonus: stats => ({ ...stats, damage: 30 }),
          },
          {
            id: 'ckqit2u6v00h276va1g1r6723',
            text: ({ rechargeTime }) => `Recharge Time (s): ${rechargeTime}`,
            bonus: stats => ({ ...stats, rechargeTime: 24 }),
          },
          {
            id: 'ckqit2u6v00h376va7xasga1m',
            text: ({ spreadRadius }) => `Spread Radius (m): ${spreadRadius}`,
            bonus: stats => ({ ...stats, spreadRadius: 6 }),
          },
        ],
      },
      {
        id: 'ckqit2u6v00h476va9thm77vi',
        rank: 2,
        name: 'Recharge Speed',
        icon: 'T_Recharge_Speed_Icon.png',
        description: '',
        bonuses: [
          {
            id: 'ckqit2u6v00h576va0svse6f7',
            text: () => `+10% Recharge Speed`,
            showText: false,
            bonus: stats => ({
              ...stats,
              rechargeTime: stats.rechargeTime! * 1.1,
            }),
          },
        ],
      },
      {
        id: 'ckqit2u6w00h676va2v8aav54',
        rank: 3,
        name: 'Duration',
        icon: 'T_Extended_Drain_Icon.png',
        description: '',
        bonuses: [
          {
            id: 'ckqit2u6w00h776vabbv7exxj',
            text: () => `+30% Duration`,
            showText: false,
            bonus: stats => ({ ...stats, duration: stats.duration! * 1.3 }),
          },
        ],
      },
      {
        id: 'ckqit2u6w00h876vadh0p66dw',
        rank: 4.1,
        name: 'Recharge Speed',
        icon: 'T_Recharge_Speed_Icon.png',
        description: '',
        bonuses: [
          {
            id: 'ckqit2u6w00h976vab6s25oe8',
            text: () => `+40% Recharge Speed`,
            showText: false,
            bonus: stats => ({
              ...stats,
              rechargeTime: stats.rechargeTime! * 1.4,
            }),
          },
        ],
      },
      {
        id: 'ckqit2u6w00ha76va1c067p92',
        rank: 4.2,
        name: 'Outbreak',
        icon: 'T_Radius_Icon.png',
        description:
          'Invasion now infects up to three enemies near the target location.',
        bonuses: [
          {
            id: 'ckqit2u6w00hb76va7b2r635x',
            text: () => `Effect Radius: 4`,
          },
        ],
      },
      {
        id: 'ckqit2u6w00hc76vaefkr7uoz',
        rank: 5.1,
        name: 'Epidemic',
        icon: 'T_Epidemic_Icon.png',
        description:
          'Invasion now lasts longer and spreads to more distant enemies.',
        bonuses: [
          {
            id: 'ckqit2u6w00hd76va7phv0tvh',
            text: () => `+40% Duration`,
            showText: false,
            bonus: stats => ({ ...stats, duration: stats.duration! * 1.4 }),
          },
          {
            id: 'ckqit2u6w00he76vaggxb34ku',
            text: () => `+30% Spread Radius (m)`,
            showText: false,
            bonus: stats => ({
              ...stats,
              spreadRadius: stats.spreadRadius! * 1.3,
            }),
          },
        ],
      },
      {
        id: 'ckqit2u6w00hf76va36oz0q4o',
        rank: 5.2,
        name: 'Weaken',
        icon: 'T_Weaken_Icon.png',
        description: '',
        bonuses: [
          {
            id: 'ckqit2u6w00hg76va04aa6jc4',
            text: () => `+10% Enemy Defense Debuff`,
            showText: false,
            bonus: stats => ({
              ...stats,
              enemyDefenseDebuff: stats.enemyDefenseDebuff! * 1.1,
            }),
          },
        ],
      },
      {
        id: 'ckqit2u6x00hh76va9cvhb612',
        rank: 6.1,
        name: 'Virulence',
        icon: 'T_Virulence_Icon.png',
        description:
          'When an affected enemy falls below 15% health, Invasion triggers an explosion that damage the enemy and other enemies nearby.',
        bonuses: [],
      },
      {
        id: 'ckqit2u6x00hi76vab7hd23f6',
        rank: 6.2,
        name: 'Sabotage',
        icon: 'T_Sabotage_Icon.png',
        description: 'Affected enemies do less weapon damage.',
        bonuses: [
          {
            id: 'ckqit2u6x00hj76va1eda2o9o',
            text: () => `-15% Enemy Weapon Damage`,
          },
        ],
      },
    ],
  },
  {
    id: 'ckqit2udw00jm76va2eqo0zss',
    name: 'Team Support',
    url: '/wiki/Team_Support',
    type: 'passive',
    description:
      'Improves defenses and support for the whole squad through kinetic barrier generator and hardsuit enhancements.\n',
    ranks: [
      {
        id: 'ckqit2udu00iw76va7br202su',
        rank: 1,
        name: 'Shields',
        icon: 'T_Shields_Icon.png',
        description:
          'Improves maximum shields for the user and all squadmates with each skill point invested in the Tech Skill Group.',
        bonuses: [
          {
            id: 'ckqit2udu00ix76vahr75abf3',
            text: ({ teamShield }) => `+${teamShield}% Team Shields`,
            bonus: (stats, skillCount) => ({
              ...stats,
              teamShield: 2 + Math.floor((skillCount || 0) * (38 / 252)),
            }),
          },
        ],
      },
      {
        id: 'ckqit2udu00iy76va44it5h02',
        rank: 2,
        name: 'Shield Recovery',
        icon: 'T_Shield_Feedback_Icon.png',
        description:
          'Improves shield regeneration speed for the user and squadmates, as well as health recovery speed for tech constructs, with each skill point invested in the Tech Skill Group.',
        bonuses: [
          {
            id: 'ckqit2udu00iz76vafsle5c19',
            text: ({ teamShieldDelayReduction }) =>
              `+${teamShieldDelayReduction}% Team Shield Delay Reduction`,
            bonus: (stats, skillCount) => ({
              ...stats,
              teamShieldDelayReduction:
                2 + Math.floor((skillCount || 0) * (38 / 252)),
            }),
          },
          {
            id: 'ckqit2udu00j076vacqzv9ura',
            text: ({ teamShieldRegenerations }) =>
              `+${teamShieldRegenerations}% Team Shield Regeneration`,
            bonus: (stats, skillCount) => ({
              ...stats,
              teamShieldRegenerations:
                2 + Math.floor((skillCount || 0) * (38 / 252)),
            }),
          },
          {
            id: 'ckqit2udu00j176vacucoex8n',
            text: ({ techConstructHealthRegenration }) =>
              `+${techConstructHealthRegenration}% Tech Construct Health Regeneration`,
            bonus: (stats, skillCount) => ({
              ...stats,
              techConstructHealthRegenration:
                2 + Math.floor((skillCount || 0) * (38 / 252)),
            }),
          },
        ],
      },
      {
        id: 'ckqit2udu00j276va7my663de',
        rank: 3,
        name: 'Support',
        icon: 'T_Support_Icon.png',
        description:
          'Improves shield restoration and defensive effects from powers with each skill point invested in the Tech Skill Group.',
        bonuses: [
          {
            id: 'ckqit2udu00j376vab51j5a7g',
            text: ({ powerRestorationDefense }) =>
              `+${powerRestorationDefense}% Power Restoration &amp; Defense`,
            bonus: (stats, skillCount) => ({
              ...stats,
              powerRestorationDefense:
                2 + Math.floor((skillCount || 0) * (38 / 252)),
            }),
          },
        ],
      },
      {
        id: 'ckqit2udv00j476vacp3d17lo',
        rank: 4.1,
        name: 'Squad Offense',
        icon: 'T_Squad_Offense_Icon.png',
        description:
          'Increases damage from tech constructs and squadmate powers.',
        bonuses: [
          {
            id: 'ckqit2udv00j576vacz0h6iis',
            text: () => `+20% Squadmate Power Damage`,
          },
          {
            id: 'ckqit2udv00j676va64hvahgw',
            text: () => `+20% Tech Construct Damage`,
          },
        ],
      },
      {
        id: 'ckqit2udv00j776vahetq33lf',
        rank: 4.2,
        name: 'Support',
        icon: 'T_Support_Icon.png',
        description: 'Improves all shield restoration and defensive effects.',
        bonuses: [
          {
            id: 'ckqit2udv00j876vae2cx15np',
            text: () => `+20% Power Restoration &amp; Defense`,
            showText: false,
            bonus: stats => ({
              ...stats,
              powerRestorationDefense: stats.powerRestorationDefense! + 20,
            }),
          },
        ],
      },
      {
        id: 'ckqit2udv00j976vaco4b2tvj',
        rank: 5.1,
        name: 'Team Recovery',
        icon: 'T_Team_Recovery_Icon.png',
        description:
          'Reduces shield regeneration delay and improves shield regeneration rate for the user and squadmates. Increases health recovery rate for tech constructs.',
        bonuses: [
          {
            id: 'ckqit2udv00ja76va4oww94hd',
            text: () => `+15% Team Shield Delay Reduction`,
            showText: false,
            bonus: stats => ({
              ...stats,
              teamShieldDelayReduction: stats.teamShieldDelayReduction! + 15,
            }),
          },
          {
            id: 'ckqit2udv00jb76va0m6jfb71',
            text: () => `+15% Team Shield Regeneration`,
            showText: false,
            bonus: stats => ({
              ...stats,
              teamShieldRegenerations: stats.teamShieldRegenerations! + 15,
            }),
          },
          {
            id: 'ckqit2udv00jc76va1ipe3v6v',
            text: () => `15% Tech Construct Health Regeneration`,
            showText: false,
            bonus: stats => ({
              ...stats,
              techConstructHealthRegenration:
                stats.techConstructHealthRegenration! + 15,
            }),
          },
        ],
      },
      {
        id: 'ckqit2udv00jd76vad5mk475l',
        rank: 5.2,
        name: 'Tactical Revive',
        icon: 'T_Tactical_Revive_Icon.png',
        description:
          'Grants Damage Resistance during squadmate revival and for 5 sec afterwards. Restores shields to maximum upon reviving a squadmate. Both effects also apply to successfully revived squadmates.',
        bonuses: [
          {
            id: 'ckqit2udv00je76va12fi490u',
            text: () => `Damage Resistance During Revive: 120`,
          },
          {
            id: 'ckqit2udv00jf76va4knm64hw',
            text: () => `Damage Resistance after Revive: 120`,
          },
        ],
      },
      {
        id: 'ckqit2udv00jg76va7q4k980d',
        rank: 6.1,
        name: 'Defense Grid',
        icon: 'T_Defense_Grid_Icon.png',
        description:
          'Increases Damage Resistance for each conscious squadmate or tech construct within 8 m. The increase applies to the user and those squadmates and tech constructs.',
        bonuses: [
          {
            id: 'ckqit2udv00jh76va7bae4wuh',
            text: () => `Damage Resistance per Ally: 6`,
          },
        ],
      },
      {
        id: 'ckqit2udw00ji76vahwea8gm5',
        rank: 6.2,
        name: 'Life Support',
        icon: 'T_Regeneration_Icon.png',
        description:
          'Improves health regeneration rate for the user and nearby squadmates and tech constructs for 3 sec after using a tech power.',
        bonuses: [
          {
            id: 'ckqit2udw00jj76va047i6k0r',
            text: () => `Health Regeneration Bonus: 150%`,
          },
          {
            id: 'ckqit2udw00jk76vaglmucild',
            text: () => `Health Regeneration Cap: 50%`,
          },
          {
            id: 'ckqit2udw00jl76vafvlv5f0m',
            text: () => `Life Support Cooldown (s): 8`,
          },
        ],
      },
    ],
  },
  {
    id: 'ckqit2um700m176vaaz535ujx',
    name: 'Offensive Tech',
    url: '/wiki/Offensive_Tech',
    type: 'passive',
    description:
      'Maximizes the offensive capabilities of tech powers through specialized omni-tool software and hardware.\n',
    ranks: [
      {
        id: 'ckqit2um600li76va0ed7fzjf',
        rank: 1,
        name: 'Damage',
        icon: 'T_Offensive_Tech_Icon.png',
        description:
          'Increases tech power damage with each skill point invested in the Tech Skill Group.',
        bonuses: [
          {
            id: 'ckqit2um600lj76vabgx54fax',
            text: ({ techPowerDamage }) =>
              `+${techPowerDamage}% Tech Power Damage`,
            bonus: (stats, skillCount) => ({
              ...stats,
              techPowerDamage: 2 + Math.floor((skillCount || 0) * (38 / 252)),
            }),
          },
        ],
      },
      {
        id: 'ckqit2um600lk76vaaeai62ki',
        rank: 2,
        name: 'Recharge Speed',
        icon: 'T_Augmentation_Icon.png',
        description:
          'Improves tech power recharge speeds with each skill point invested in the Tech Skill Group.',
        bonuses: [
          {
            id: 'ckqit2um600ll76va1gby4ohk',
            text: ({ techRechargeSpeed }) =>
              `+${techRechargeSpeed}% Tech Recharge Speed`,
            bonus: (stats, skillCount) => ({
              ...stats,
              techRechargeSpeed: 2 + Math.floor((skillCount || 0) * (38 / 252)),
            }),
          },
        ],
      },
      {
        id: 'ckqit2um600lm76vahiglewvv',
        rank: 3,
        name: 'Detonators',
        icon: 'T_Detonators_Icon.png',
        description:
          'Increases combo detonation damage from tech detonators with each skill point invested in the Tech Skill Group.',
        bonuses: [
          {
            id: 'ckqit2um600ln76vaariyeatv',
            text: ({ techDamageDetonatorBonus }) =>
              `+${techDamageDetonatorBonus}% Tech Detonator Damage Bonus`,
            bonus: (stats, skillCount) => ({
              ...stats,
              techDamageDetonatorBonus:
                2 + Math.floor((skillCount || 0) * (38 / 252)),
            }),
          },
        ],
      },
      {
        id: 'ckqit2um600lo76va45qt45q7',
        rank: 4.1,
        name: 'Anti-Armor',
        icon: 'T_Anti-Armor_P_Icon.png',
        description: '',
        bonuses: [
          {
            id: 'ckqit2um600lp76vadmmbf5ow',
            text: () => `+20% Tech Damage Bonus to Armor`,
          },
        ],
      },
      {
        id: 'ckqit2um600lq76va9cvahch7',
        rank: 4.2,
        name: 'Anti-Shield',
        icon: 'T_Anti-Shield_P_Icon.png',
        description: '',
        bonuses: [
          {
            id: 'ckqit2um700lr76va1ljr5527',
            text: () => `+20% Tech Damage Bonus to Shields`,
          },
        ],
      },
      {
        id: 'ckqit2um700ls76va7hhicux3',
        rank: 5.1,
        name: 'Detonators',
        icon: 'T_Detonators_Icon.png',
        description: 'Increased combo detonation damage from tech detonators.',
        bonuses: [
          {
            id: 'ckqit2um700lt76vahuywbf8v',
            text: () => `+30% Tech Detonator Damage Bonus`,
          },
        ],
      },
      {
        id: 'ckqit2um700lu76va0hm02xaw',
        rank: 5.2,
        name: 'Anti-Synthetic',
        icon: 'T_Anti-Synthetic_Icon.png',
        description:
          'Improves existing damage bonuses against synthetic enemies for electric powers.',
        bonuses: [
          {
            id: 'ckqit2um700lv76va9dl4f5sw',
            text: () => `+25% Electric Damage Bonus to Synthetics`,
          },
        ],
      },
      {
        id: 'ckqit2um700lw76vahuxlhxng',
        rank: 6.1,
        name: 'Elemental Tech',
        icon: 'T_Elemental_Tech_Icon.png',
        description:
          "Enemies suffering ongoing effects of the user's tech powers take increased damage from heat, cold, and electricity.",
        bonuses: [
          {
            id: 'ckqit2um700lx76vab6c49dug',
            text: () => `Elemental Defense Debuff: 35%`,
          },
        ],
      },
      {
        id: 'ckqit2um700ly76va0b7c5diu',
        rank: 6.2,
        name: 'Technical Rounds',
        icon: 'T_Weapon_Boost_Icon.png',
        description:
          'Increases gun damage for a short period after using a tech power.',
        bonuses: [
          {
            id: 'ckqit2um700lz76va17fo9g2a',
            text: () => `Weapon Damage Bonus: 30%`,
          },
          {
            id: 'ckqit2um700m076vaepn42w23',
            text: () => `Weapon Damage Bonus Duration: 5`,
          },
        ],
      },
    ],
  },
  {
    id: 'ckqit2uud00n976vacgkz3gm5',
    name: 'Auxiliary Systems',
    url: '/wiki/Auxiliary_Systems',
    type: 'passive',
    description:
      'Improves the effectiveness of tech powers and constructs in a variety of ways, thanks to customized omni-tool and hardsuit subsystems.\n',
    ranks: [
      {
        id: 'ckqit2uub00mr76va1zy4220q',
        rank: 1,
        name: 'Duration',
        icon: 'T_Duration_Icon.png',
        description:
          'Increases tech effect duration with each skill point invested in the Tech Skill Group.',
        bonuses: [
          {
            id: 'ckqit2uub00ms76vah43o102n',
            text: ({ techPowerDamage }) =>
              `+${techPowerDamage}% Tech Effect Duration`,
            bonus: (stats, skillCount) => ({
              ...stats,
              techPowerDamage: 2 + Math.floor((skillCount || 0) * (38 / 252)),
            }),
          },
        ],
      },
      {
        id: 'ckqit2uub00mt76vab3eq9o9j',
        rank: 2,
        name: 'Force',
        icon: 'T_Force_Icon.png',
        description:
          'Increases tech power force with each skill point invested in the Tech Skill Group.',
        bonuses: [
          {
            id: 'ckqit2uub00mu76va5tbed0t6',
            text: ({ techForce }) => `+${techForce}% Tech Force`,
            bonus: (stats, skillCount) => ({
              ...stats,
              techForce: 2 + Math.floor((skillCount || 0) * (57 / 252)),
            }),
          },
        ],
      },
      {
        id: 'ckqit2uuc00mv76vah6naaafg',
        rank: 3,
        name: 'Constructs',
        icon: 'T_Defense_Systems_Icon.png',
        description:
          'Improves tech construct health and damage output with each skill point invested in the Tech Skill Group.',
        bonuses: [
          {
            id: 'ckqit2uuc00mw76vaadsx6y0n',
            text: ({ techConstructDamage }) =>
              `+${techConstructDamage}% Tech Construct Damage`,
            bonus: (stats, skillCount) => ({
              ...stats,
              techConstructDamage:
                2 + Math.floor((skillCount || 0) * (38 / 252)),
            }),
          },
          {
            id: 'ckqit2uuc00mx76va212fgyrw',
            text: ({ techConstractHealth }) =>
              `+${techConstractHealth}% Tech Construct Health`,
            bonus: (stats, skillCount) => ({
              ...stats,
              techConstractHealth:
                2 + Math.floor((skillCount || 0) * (57 / 252)),
            }),
          },
        ],
      },
      {
        id: 'ckqit2uuc00my76vadu4a1p3c',
        rank: 4.1,
        name: 'Weapon Mass Reduction',
        icon: 'T_Weapon_Mass_Reduction_Icon.png',
        description: '',
        bonuses: [
          {
            id: 'ckqit2uuc00mz76va1tz0c4fq',
            text: () => `+40% Weapon Weight Capacity`,
            bonus: stats => ({
              ...stats,
              weaponWeightCapacity: (stats.weaponWeightCapacity || 0) + 40,
            }),
          },
        ],
      },
      {
        id: 'ckqit2uuc00n076va7t7e5wsc',
        rank: 4.2,
        name: 'Priming',
        icon: 'T_Priming_Icon.png',
        description:
          "Increases combo detonation priming rate for guns, melee attacks, powers, and constructs (for attacks that don't prime instantly).",
        bonuses: [
          {
            id: 'ckqit2uuc00n176vaf0lte1ox',
            text: () => `+100% Combo Priming Rate`,
          },
        ],
      },
      {
        id: 'ckqit2uuc00n276vafrwt7k56',
        rank: 5.1,
        name: 'Enduring Tech',
        icon: 'T_Tech_Duration_Icon.png',
        description:
          "Increases the duration of the user's ongoing tech power effects on enemies and allies.",
        bonuses: [
          {
            id: 'ckqit2uuc00n376va4lxh4g9t',
            text: () => `+25% Tech Effect Duration`,
            showText: false,
            bonus: stats => ({
              ...stats,
              techEffectDuration: stats.techEffectDuration! + 25,
            }),
          },
        ],
      },
      {
        id: 'ckqit2uuc00n476vag7yhcnnb',
        rank: 5.2,
        name: 'Impact Dilation',
        icon: 'T_Tech_Radius_Icon.png',
        description:
          'Increases the radius of all tech powers that affect an area (including the area attacks of tech constructs).',
        bonuses: [
          {
            id: 'ckqit2uuc00n576vaf6f5dnbt',
            text: () => `+25% Tech Area of Effect Radius`,
          },
        ],
      },
      {
        id: 'ckqit2uud00n676va5aivfp6e',
        rank: 6.1,
        name: 'Shield Feedback',
        icon: 'T_Shield_Reset_Icon.png',
        description:
          'Begins shield regeneration immediately, eliminating any delay, when a tech power is activated. Only functions once every 12 sec.',
        bonuses: [],
      },
      {
        id: 'ckqit2uud00n776vae4zma13r',
        rank: 6.2,
        name: 'Omni-Vents',
        icon: 'T_Omni-Vents_Icon.png',
        description:
          'Improves all recharge rates for currently recharging powers by 50% when a tech power is activated. Only functions once every 15 sec.',
        bonuses: [
          {
            id: 'ckqit2uud00n876vad3jc2n51',
            text: () => `Power Recharge Time Rebate: 50%`,
          },
        ],
      },
    ],
  },
]

export const bioticSkills: Skill[] = [
  {
    id: 'ckqit2sha001576vadx9d3q0c',
    name: 'Pull',
    url: '/wiki/Pull',
    type: 'active',
    description:
      'TAP BUTTON: Lifts an unshielded, unarmored enemy helplessly in the air and primes the target for combo detonations.\n\nHOLD BUTTON: Drags the target enemy or object along with the user.\n\nCombine with the Throw power to hurl a held target.\n',
    ranks: [
      {
        id: 'ckqit2sh8000m76vag6k2f3dr',
        rank: 1,
        name: 'Pull',
        icon: 'B_Pull_Icon.png',
        description:
          ' TAP BUTTON: Lifts an unshielded, unarmored enemy helplessly in the air and primes the target for combo detonations.\n\nHOLD BUTTON: Drags the target enemy or object along with the user.\n\nCombine with the Throw power to hurl a held target.',
        bonuses: [
          {
            id: 'ckqit2sh8000n76va39y7837i',
            text: ({ duration }) => `Duration (s): ${duration}`,
            bonus: stats => ({ ...stats, duration: 5, primer: 'biotic' }),
          },
          {
            id: 'ckqit2sh8000o76vafau0bxx7',
            text: ({ rechargeTime }) => `Recharge Time (s): ${rechargeTime}`,
            bonus: stats => ({ ...stats, rechargeTime: 10 }),
          },
        ],
      },
      {
        id: 'ckqit2sh8000p76va80iabwdg',
        rank: 2,
        name: 'Recharge Speed',
        icon: 'B_Recharge_Penalty_Icon.png',
        description: '',
        bonuses: [
          {
            id: 'ckqit2sh9000q76va7ybjd4hv',
            text: () => `+30% Recharge Speed`,
            showText: false,
            bonus: stats => ({
              ...stats,
              rechargeTime: stats.rechargeTime! * 1.3,
            }),
          },
        ],
      },
      {
        id: 'ckqit2sh9000r76vad2c90rdb',
        rank: 3,
        name: 'Duration',
        icon: 'B_Duration_Icon.png',
        description: '',
        bonuses: [
          {
            id: 'ckqit2sh9000s76va1qc7c8m7',
            text: () => `+40% Duration`,
            showText: false,
            bonus: stats => ({ ...stats, duration: stats.duration! * 1.4 }),
          },
        ],
      },
      {
        id: 'ckqit2sh9000t76va3g2c65wb',
        rank: 4.1,
        name: 'Duration',
        icon: 'B_Duration_Icon.png',
        description: '',
        bonuses: [
          {
            id: 'ckqit2sh9000u76vad1g98lur',
            text: () => `+50% Duration`,
            showText: false,
            bonus: stats => ({ ...stats, duration: stats.duration! * 1.5 }),
          },
        ],
      },
      {
        id: 'ckqit2sh9000v76va3zekah7r',
        rank: 4.2,
        name: 'Radius',
        icon: 'B_Radius_Icon.png',
        description: 'Pull affects up to two enemies within a radius.',
        bonuses: [
          {
            id: 'ckqit2sh9000w76va5r295ghr',
            text: () => `Radius (m): 4`,
          },
        ],
      },
      {
        id: 'ckqit2sh9000x76vagbio3243',
        rank: 5.1,
        name: 'Crushing Grip',
        icon: 'B_Crushing_Grip_Icon.png',
        description: 'Targets take damage while in the air.',
        bonuses: [
          {
            id: 'ckqit2sh9000y76va6jhf5h36',
            text: () => `Damage per Second 35`,
          },
        ],
      },
      {
        id: 'ckqit2sha000z76vagkulawic',
        rank: 5.2,
        name: 'Expose',
        icon: 'B_Expose_Icon.png',
        description: 'Affected targets take more damage from all sources.',
        bonuses: [
          {
            id: 'ckqit2sha001076vahxex9tog',
            text: () => `Defense Debuff: 30%`,
          },
        ],
      },
      {
        id: 'ckqit2sha001176va1pwb27iy',
        rank: 6.1,
        name: 'Anti-Shields',
        icon: 'B_Anti-Shield_Icon.png',
        description:
          'Drains enemy shields on initial hit (but targets whose shields endure still cannot be lifted or held).',
        bonuses: [
          {
            id: 'ckqit2sha001276vaauxqfiw5',
            text: () => `Shield Damage Bonus: 600`,
          },
        ],
      },
      {
        id: 'ckqit2sha001376va8sv44ll7',
        rank: 6.2,
        name: 'Biotic Drain',
        icon: 'B_Draining_Field_Icon.png',
        description:
          'Restores shields while Pull is maintained to hold an enemy.',
        bonuses: [
          {
            id: 'ckqit2sha001476vadfws99ij',
            text: () => `Shields Restored per Second: 10%`,
          },
        ],
      },
    ],
  },
  {
    id: 'ckqit2spf003o76va1vg84bka',
    name: 'Throw',
    url: '/wiki/Throw',
    type: 'active',
    description:
      'Hurls a gravity field projectile to throw unshielded and unarmored targets away and detonate combo primers.\n\nCombine with the Pull power to hurl held targets.\n',
    ranks: [
      {
        id: 'ckqit2spd003276va4qimercy',
        rank: 1,
        name: 'Throw',
        icon: 'B_Throw_Icon.png',
        description:
          ' Hurls a gravity field projectile to throw unshielded and unarmored targets away and detonate combo primers.\n\nCombine with the Pull power to hurl held targets.',
        bonuses: [
          {
            id: 'ckqit2spd003376va5qxb3w8b',
            text: ({ force }) => `Force: ${force}`,
            bonus: stats => ({ ...stats, force: 850, detonator: true }),
          },
          {
            id: 'ckqit2spd003476vaheis3gey',
            text: ({ damageOnWorldCollision }) =>
              `Damage on World Collision: ${damageOnWorldCollision}`,
            bonus: stats => ({ ...stats, damageOnWorldCollision: 250 }),
          },
          {
            id: 'ckqit2spd003576va01nx32v9',
            text: ({ rechargeTime }) => `Recharge Time (s): ${rechargeTime}`,
            bonus: stats => ({ ...stats, rechargeTime: 10 }),
          },
        ],
      },
      {
        id: 'ckqit2spd003676va2omz2gf8',
        rank: 2,
        name: 'Recharge Speed',
        icon: 'B_Recharge_Penalty_Icon.png',
        description: '',
        bonuses: [
          {
            id: 'ckqit2spd003776va86ughqzb',
            text: () => `+25% Recharge Speed`,
            showText: false,
            bonus: stats => ({
              ...stats,
              rechargeTime: stats.rechargeTime! * 1.25,
            }),
          },
        ],
      },
      {
        id: 'ckqit2spe003876va7wylhqoc',
        rank: 3,
        name: 'Damage & Force',
        icon: 'B_Damage_Icon.png',
        description: '',
        bonuses: [
          {
            id: 'ckqit2spe003976va6lghfqs5',
            text: () => `+20% All Damage`,
            showText: false,
            bonus: stats => ({
              ...stats,
              damageOnWorldCollision: stats.damageOnWorldCollision! * 1.2,
            }),
          },
          {
            id: 'ckqit2spe003a76vaeiufdzjk',
            text: () => `+20% All Force`,
            showText: false,
            bonus: stats => ({ ...stats, force: stats.force! * 1.2 }),
          },
        ],
      },
      {
        id: 'ckqit2spe003b76va9qnyeqcl',
        rank: 4.1,
        name: 'Damage & Force',
        icon: 'B_Damage_Icon.png',
        description: '',
        bonuses: [
          {
            id: 'ckqit2spe003c76vage17d7ue',
            text: () => `+30% All Damage`,
            showText: false,
            bonus: stats => ({
              ...stats,
              damageOnWorldCollision: stats.damageOnWorldCollision! * 1.3,
            }),
          },
          {
            id: 'ckqit2spe003d76vaa2f7dmo8',
            text: () => `+30% All Force`,
            showText: false,
            bonus: stats => ({ ...stats, force: stats.force! * 1.3 }),
          },
        ],
      },
      {
        id: 'ckqit2spe003e76va5lhrhz8q',
        rank: 4.2,
        name: 'Radius',
        icon: 'B_Radius_Icon.png',
        description: 'Throw affects nearby enemies in a radius.',
        bonuses: [
          {
            id: 'ckqit2spe003f76vafl0ug8ri',
            text: () => `Radius (m): 2.5`,
          },
        ],
      },
      {
        id: 'ckqit2spe003g76vaef8i22ul',
        rank: 5.1,
        name: 'Duration',
        icon: 'B_Duration_Icon.png',
        description:
          ' Extends float duration and length of time targets are primed for combo detonations.',
        bonuses: [
          {
            id: 'ckqit2spe003h76va1itu16q4',
            text: () => `+400% Duration`,
            showText: false,
            bonus: stats => ({
              ...stats,
              duration: stats.duration! * 5,
              primer: 'biotic',
            }),
          },
        ],
      },
      {
        id: 'ckqit2spf003i76va52fyg56l',
        rank: 5.2,
        name: 'Recharge Speed',
        icon: 'B_Recharge_Penalty_Icon.png',
        description: '',
        bonuses: [
          {
            id: 'ckqit2spf003j76vad14w75s4',
            text: () => `+30% Recharge Speed`,
            showText: false,
            bonus: stats => ({
              ...stats,
              rechargeTime: stats.rechargeTime! * 1.3,
            }),
          },
        ],
      },
      {
        id: 'ckqit2spf003k76vagd6l99ff',
        rank: 6.1,
        name: 'Double Throw',
        icon: 'B_Double_Throw_Icon.png',
        description: 'Launches two projectiles that seek separate targets.',
        bonuses: [],
      },
      {
        id: 'ckqit2spf003l76va1i8hc19c',
        rank: 6.2,
        name: 'Swift Detonation',
        icon: 'B_Swift_Detonation_Icon.png',
        description: '',
        bonuses: [
          {
            id: 'ckqit2spf003m76va7dcz0pxw',
            text: () => `+30% Combo Detonation Damage`,
          },
          {
            id: 'ckqit2spf003n76va4pm1dath',
            text: () => `+50% Recharge Speed`,
            showText: false,
            bonus: stats => ({
              ...stats,
              rechargeTime: stats.rechargeTime! * 1.5,
            }),
          },
        ],
      },
    ],
  },
  {
    id: 'ckqit2sts004g76vab2kx3ymw',
    name: 'Charge',
    url: '/wiki/Charge',
    type: 'active',
    description:
      "Alters the biotic's mass, launching the user at an opponent. Restores some shield strengt at the charge's end. Charge detonates combo primers on targets.\n",
    ranks: [
      {
        id: 'ckqit2stq003p76vaen8o9mwl',
        rank: 1,
        name: 'Charge',
        icon: 'B_Charge_Icon.png',
        description:
          " Alters the biotic's mass, launching the user at an opponent. Restores some shield strength at the charge's end. Charge detonates combo primers on targets.",
        bonuses: [
          {
            id: 'ckqit2stq003q76va4p8807d4',
            text: ({ damage }) => `Damage: ${damage}`,
            bonus: stats => ({ ...stats, damage: 275, detonator: true }),
          },
          {
            id: 'ckqit2stq003r76vabx8w072v',
            text: ({ force }) => `Force: ${force}`,
            bonus: stats => ({ ...stats, force: 500 }),
          },
          {
            id: 'ckqit2stq003s76vabzaa0iik',
            text: ({ rechargeTime }) => `Recharge Time (s): ${rechargeTime}`,
            bonus: stats => ({ ...stats, rechargeTime: 8 }),
          },
          {
            id: 'ckqit2stq003t76va3rmud39s',
            text: ({ shieldsRestored }) =>
              `Shields Restored: ${shieldsRestored}%`,
            bonus: stats => ({ ...stats, shieldsRestored: 50 }),
          },
        ],
      },
      {
        id: 'ckqit2stq003u76vad2oa7ni5',
        rank: 2,
        name: 'Recharge Speed',
        icon: 'B_Recharge_Penalty_Icon.png',
        description: '',
        bonuses: [
          {
            id: 'ckqit2stq003v76va6jaf4ao4',
            text: () => `+35% Recharge Speed`,
            showText: false,
            bonus: stats => ({
              ...stats,
              rechargeTime: stats.rechargeTime! * 1.35,
            }),
          },
        ],
      },
      {
        id: 'ckqit2stq003w76va4v70cs12',
        rank: 3,
        name: 'Damage & Force',
        icon: 'B_Damage_Icon.png',
        description: '',
        bonuses: [
          {
            id: 'ckqit2stq003x76va4eozb1d3',
            text: () => `+25% Damage`,
            showText: false,
            bonus: stats => ({ ...stats, damage: stats.damage! * 1.25 }),
          },
          {
            id: 'ckqit2stq003y76vaaxs3fgij',
            text: () => `+25% Force`,
            showText: false,
            bonus: stats => ({ ...stats, force: stats.force! * 1.25 }),
          },
        ],
      },
      {
        id: 'ckqit2stq003z76va8l9neeo5',
        rank: 4.1,
        name: 'Damage & Force',
        icon: 'B_Damage_Icon.png',
        description: '',
        bonuses: [
          {
            id: 'ckqit2stq004076va1x89f092',
            text: () => `+35% Damage`,
            showText: false,
            bonus: stats => ({ ...stats, damage: stats.damage! * 1.35 }),
          },
          {
            id: 'ckqit2stq004176va5465gc9w',
            text: () => `+35% Force`,
            showText: false,
            bonus: stats => ({ ...stats, force: stats.force! * 1.35 }),
          },
        ],
      },
      {
        id: 'ckqit2str004276va08e67w5n',
        rank: 4.2,
        name: 'Radius',
        icon: 'B_Radius_Icon.png',
        description:
          'Damages enemies within a radius at the end point of the charge.',
        bonuses: [
          {
            id: 'ckqit2str004376vaek57al8z',
            text: () => `Radius (m): 3.5`,
          },
        ],
      },
      {
        id: 'ckqit2str004476vah6bi2onr',
        rank: 5.1,
        name: 'Weapons & Melee',
        icon: 'B_Weapons_&_Melee_Icon.png',
        description:
          'Improves weapon and melee damage for 3 sec after charging.',
        bonuses: [
          {
            id: 'ckqit2str004576va4qy9e1fz',
            text: () => `Gun Damage Bonus: 15%`,
          },
          {
            id: 'ckqit2str004676va82269lx6',
            text: () => `Melee Damage Bonus: 30%`,
          },
        ],
      },
      {
        id: 'ckqit2str004776va25fm1w2f',
        rank: 5.2,
        name: 'Power Synergy',
        icon: 'B_Power_Synergy_Icon.png',
        description: 'Enhances all powers for 5 sec after charging.',
        bonuses: [
          {
            id: 'ckqit2str004876va56l9ajol',
            text: () => `Power Damage Bonus: 25%`,
          },
          {
            id: 'ckqit2str004976vaff3a5yhm',
            text: () => `Power Force Bonus: 25%`,
          },
        ],
      },
      {
        id: 'ckqit2str004a76vaeicl8r1g',
        rank: 6.1,
        name: 'Shock Trooper',
        icon: 'B_Shock_Trooper_Icon.png',
        description: '',
        bonuses: [
          {
            id: 'ckqit2str004b76va1585gy6z',
            text: () => `+75% Recharge Speed`,
            showText: false,
            bonus: stats => ({
              ...stats,
              rechargeTime: stats.rechargeTime! * 1.75,
            }),
          },
        ],
      },
      {
        id: 'ckqit2sts004c76va54n8bynq',
        rank: 6.2,
        name: 'Bastion',
        icon: 'B_Bastion_Icon.png',
        description:
          'Fully restores shields and reduces incoming damage for 5 sec.',
        bonuses: [
          {
            id: 'ckqit2sts004d76vaepnwaa3x',
            text: () => `Damage Resistance: 75`,
          },
          {
            id: 'ckqit2sts004e76vafyyga1gy',
            text: () => `+50% Shields Restored`,
            showText: false,
            bonus: stats => ({
              ...stats,
              shieldsRestored: stats.shieldsRestored! + 50,
            }),
          },
          {
            id: 'ckqit2sts004f76vaa9alg73d',
            text: () => `+35% Damage`,
            showText: false,
            bonus: stats => ({ ...stats, damage: stats.damage! * 1.35 }),
          },
        ],
      },
    ],
  },
  {
    id: 'ckqit2t0f006g76va8wv57fq1',
    name: 'Nova',
    url: '/wiki/Nova',
    type: 'active',
    description:
      'Channels energy into a point-blank, high-damage explosion around the user.\n',
    ranks: [
      {
        id: 'ckqit2t0c005t76vaaraq0nfc',
        rank: 1,
        name: 'Nova',
        icon: 'B_Nova_Icon.png',
        description:
          'Channels energy into a point-blank, high-damage explosion around the user.',
        bonuses: [
          {
            id: 'ckqit2t0c005u76vadz3pagmr',
            text: ({ areaDamage }) => `Area Damage: ${areaDamage}`,
            bonus: stats => ({ ...stats, areaDamage: 450 }),
          },
          {
            id: 'ckqit2t0c005v76va4fyifxeb',
            text: ({ radius }) => `Effect Radius (m): ${radius}`,
            bonus: stats => ({ ...stats, radius: 4 }),
          },
          {
            id: 'ckqit2t0c005w76va90072jun',
            text: ({ force }) => `Force: ${force}`,
            bonus: stats => ({ ...stats, force: 450 }),
          },
          {
            id: 'ckqit2t0c005x76va991w1aes',
            text: ({ rechargeTime }) => `Recharge Time (s): ${rechargeTime}`,
            bonus: stats => ({ ...stats, rechargeTime: 12 }),
          },
        ],
      },
      {
        id: 'ckqit2t0c005y76vad88l6v9u',
        rank: 2,
        name: 'Radius',
        icon: 'B_Radius_Icon.png',
        description: '',
        bonuses: [
          {
            id: 'ckqit2t0c005z76vad0p30jr7',
            text: () => `+25% Damage Radius`,
            showText: false,
            bonus: stats => ({ ...stats, radius: stats.radius! * 1.25 }),
          },
        ],
      },
      {
        id: 'ckqit2t0c006076va4ywg4iy1',
        rank: 3,
        name: 'Damage & Force',
        icon: 'B_Damage_Icon.png',
        description: '',
        bonuses: [
          {
            id: 'ckqit2t0c006176vadwus08wk',
            text: () => `+20% Damage`,
            showText: false,
            bonus: stats => ({ ...stats, damage: stats.damage! * 1.2 }),
          },
          {
            id: 'ckqit2t0c006276va2gu00dxm',
            text: () => `+25% Force`,
            showText: false,
            bonus: stats => ({ ...stats, force: stats.force! * 1.25 }),
          },
        ],
      },
      {
        id: 'ckqit2t0d006376va3vmt9z92',
        rank: 4.1,
        name: 'Damage & Force',
        icon: 'B_Damage_Icon.png',
        description: '',
        bonuses: [
          {
            id: 'ckqit2t0d006476vaebzd4qsy',
            text: () => `+30% Damage`,
            showText: false,
            bonus: stats => ({ ...stats, damage: stats.damage! * 1.3 }),
          },
          {
            id: 'ckqit2t0d006576vadhat5fmk',
            text: () => `+30% Force`,
            showText: false,
            bonus: stats => ({ ...stats, force: stats.force! * 1.3 }),
          },
        ],
      },
      {
        id: 'ckqit2t0d006676va27zp5d31',
        rank: 4.2,
        name: 'Radius',
        icon: 'B_Radius_Icon.png',
        description: '',
        bonuses: [
          {
            id: 'ckqit2t0d006776vag65zas9k',
            text: () => `+40% Damage Radius`,
            showText: false,
            bonus: stats => ({ ...stats, radius: stats.radius! * 1.4 }),
          },
        ],
      },
      {
        id: 'ckqit2t0d006876vad3t0hejf',
        rank: 5.1,
        name: 'Anti-Armor',
        icon: 'B_Anti-Armor_Icon.png',
        description: 'Increased damage to enemy armor.',
        bonuses: [
          {
            id: 'ckqit2t0d006976vabcw208q4',
            text: () => `+60% Damage vs. Armor`,
            bonus: stats => ({
              ...stats,
              damageVsArmor: (stats.damageVsArmor || 0) + 60,
            }),
          },
        ],
      },
      {
        id: 'ckqit2t0d006a76vafb2kf9dr',
        rank: 5.2,
        name: 'Anti-Shield',
        icon: 'B_Anti-Shield_Icon.png',
        description: 'Increased damage to enemy shields.',
        bonuses: [
          {
            id: 'ckqit2t0d006b76vabswiblm0',
            text: () => `+60% Damage vs. Shields`,
            bonus: stats => ({
              ...stats,
              damageVsShield: (stats.damageVsShield || 0) + 60,
            }),
          },
        ],
      },
      {
        id: 'ckqit2t0f006c76va5i199ud8',
        rank: 6.1,
        name: 'Seismic Nova',
        icon: 'B_Knockdown_Icon.png',
        description:
          ' Knocks enemies to the ground and primes them for combo detonations. Only unarmored, unshielded, normal-sized enemies are affected.',
        bonuses: [
          {
            id: 'ckqit2t0f006d76va6etf6jdj',
            text: () => `+30% Damage`,
            showText: false,
            bonus: stats => ({
              ...stats,
              damage: stats.damage! * 1.3,
              primer: 'biotic',
            }),
          },
        ],
      },
      {
        id: 'ckqit2t0f006e76va7lis7d42',
        rank: 6.2,
        name: 'Shield-Powered',
        icon: 'B_Shield-Powered_Icon.png',
        description:
          'Nova has no recharge time, but consumes shields when used.',
        bonuses: [
          {
            id: 'ckqit2t0f006f76va9ir11dzt',
            text: () => `Shield Cost: 100%`,
            bonus: (stats: SkillStats): SkillStats => {
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              const { rechargeTime, ...other } = stats
              return other
            },
          },
        ],
      },
    ],
  },
  {
    id: 'ckqit2t7a008e76vaf764810v',
    name: 'Shockwave',
    url: '/wiki/Shockwave',
    type: 'active',
    description:
      'Blasts enemies with a line of explosions that proceeds through walls and other solid objects. Shockwave detonates combo primers.\n',
    ranks: [
      {
        id: 'ckqit2t78007t76vaa37q2skd',
        rank: 1,
        name: 'Shockwave',
        icon: 'B_Shockwave_Icon.png',
        description:
          ' Blasts enemies with a line of explosions that proceeds through walls and other solid objects. Shockwave detonates combo primers.',
        bonuses: [
          {
            id: 'ckqit2t78007u76va08zj1pq3',
            text: ({ damage }) => `Damage: ${damage}`,
            bonus: stats => ({ ...stats, damage: 260, detonator: true }),
          },
          {
            id: 'ckqit2t78007v76va37tc0iuh',
            text: ({ force }) => `Force: ${force}`,
            bonus: stats => ({ ...stats, force: 525 }),
          },
          {
            id: 'ckqit2t78007w76vad8003aox',
            text: ({ radius }) => `Effect Radius (m): ${radius}`,
            bonus: stats => ({ ...stats, radius: 1.5 }),
          },
          {
            id: 'ckqit2t78007x76va6ot70fhw',
            text: ({ rechargeTime }) => `Recharge Time (s): ${rechargeTime}`,
            bonus: stats => ({ ...stats, rechargeTime: 15 }),
          },
        ],
      },
      {
        id: 'ckqit2t78007y76vahyqdgvhy',
        rank: 2,
        name: 'Recharge Speed',
        icon: 'B_Recharge_Penalty_Icon.png',
        description: '',
        bonuses: [
          {
            id: 'ckqit2t78007z76va2jcv3htf',
            text: () => `+20% Recharge Speed`,
            showText: false,
            bonus: stats => ({
              ...stats,
              rechargeTime: stats.rechargeTime! * 1.2,
            }),
          },
        ],
      },
      {
        id: 'ckqit2t78008076vaggxc9z73',
        rank: 3,
        name: 'Damage & Force',
        icon: 'B_Damage_Icon.png',
        description: '',
        bonuses: [
          {
            id: 'ckqit2t79008176vaeq90bmlk',
            text: () => `+20% Damage`,
            showText: false,
            bonus: stats => ({ ...stats, damage: stats.damage! * 1.2 }),
          },
          {
            id: 'ckqit2t79008276va4bzz5voj',
            text: () => `+20% Force`,
            showText: false,
            bonus: stats => ({ ...stats, force: stats.force! * 1.2 }),
          },
        ],
      },
      {
        id: 'ckqit2t79008376vagjp5czzg',
        rank: 4.1,
        name: 'Damage & Force',
        icon: 'B_Damage_Icon.png',
        description: '',
        bonuses: [
          {
            id: 'ckqit2t79008476va4ol26p5x',
            text: () => `+30% Damage`,
            showText: false,
            bonus: stats => ({ ...stats, damage: stats.damage! * 1.3 }),
          },
          {
            id: 'ckqit2t79008576vaheqhaxu5',
            text: () => `+30% Force`,
            showText: false,
            bonus: stats => ({ ...stats, force: stats.force! * 1.3 }),
          },
        ],
      },
      {
        id: 'ckqit2t79008676vaabem7i52',
        rank: 4.2,
        name: 'Radius',
        icon: 'B_Radius_Icon.png',
        description: '',
        bonuses: [
          {
            id: 'ckqit2t79008776vad3xzgenr',
            text: () => `+100% Damage Radius`,
            showText: false,
            bonus: stats => ({ ...stats, radius: stats.radius! * 2 }),
          },
        ],
      },
      {
        id: 'ckqit2t79008876vadlddhn80',
        rank: 5.1,
        name: 'Recharge Speed',
        icon: 'B_Recharge_Penalty_Icon.png',
        description: '',
        bonuses: [
          {
            id: 'ckqit2t79008976va3gmwdv2q',
            text: () => `+35% Recharge Speed`,
            showText: false,
            bonus: stats => ({
              ...stats,
              rechargeTime: stats.rechargeTime! * 1.35,
            }),
          },
        ],
      },
      {
        id: 'ckqit2t79008a76va1rk9cr1w',
        rank: 5.2,
        name: 'Reach',
        icon: 'B_Reach_Icon.png',
        description: 'Increases maximum Shockwave distance by 50%.',
        bonuses: [],
      },
      {
        id: 'ckqit2t79008b76va3vi62nr9',
        rank: 6.1,
        name: 'Anti-Armor',
        icon: 'B_Anti-Shield_Icon.png',
        description: '',
        bonuses: [
          {
            id: 'ckqit2t7a008c76va220b0v5r',
            text: () => `+75% Damage vs. Armor`,
            bonus: stats => ({
              ...stats,
              damageVsArmor: (stats.damageVsArmor || 0) + 75,
            }),
          },
        ],
      },
      {
        id: 'ckqit2t7a008d76va4c5u65cb',
        rank: 6.2,
        name: 'Lifting Shockwave',
        icon: 'B_Knockdown_Icon.png',
        description:
          ' Affected enemies are briefly suspended in midair and primed for combo detonations.',
        bonuses: [
          {
            id: 'ckqit2tffs8c76va220b0v5r',
            text: () => ``,
            bonus: stats => ({ ...stats, primer: 'biotic' }),
          },
        ],
      },
    ],
  },
  {
    id: 'ckqit2tei00ak76va3rgthsk5',
    name: 'Annihilation',
    url: '/wiki/Annihilation',
    type: 'active',
    description:
      'Weaves rapidly shifting mass effect fields to slowly damage nearby enemies. Enemies caught are primed for combo detonations. Other powers activated while Annihilation is in use suffer reduced recharge speed.\n',
    ranks: [
      {
        id: 'ckqit2teh00a176vafla7c203',
        rank: 1,
        name: 'Annihilation',
        icon: 'B_Annihilation_Icon.png',
        description:
          ' Weaves rapidly shifting mass effect fields to slowly damage nearby enemies. Enemies caught are primed for combo detonations. Other powers activated while Annihilation is in use suffer reduced recharge speed.',
        bonuses: [
          {
            id: 'ckqit2teh00a276va3iu4fj4c',
            text: ({ radius }) => `Effect Radius (m): ${radius}`,
            bonus: stats => ({ ...stats, radius: 3.5, primer: 'biotic' }),
          },
          {
            id: 'ckqit2teh00a376vacbbk89mf',
            text: ({ damagePerSecond }) =>
              `Damage per Second: ${damagePerSecond}`,
            bonus: stats => ({
              ...stats,
              damagePerSecond: (stats.damagePerSecond || 0) + 55,
            }),
          },
          {
            id: 'ckqit2teh00a476vafqt9by5r',
            text: ({ powerRechargePenalty }) =>
              `Power Recharge Penalty: ${powerRechargePenalty}%`,
            bonus: stats => ({ ...stats, powerRechargePenalty: 75 }),
          },
          {
            id: 'ckqit2teh00a576va1rbjcfvk',
            text: ({ rechargeTime }) => `Recharge Time (s): ${rechargeTime}`,
            bonus: stats => ({ ...stats, rechargeTime: 8 }),
          },
        ],
      },
      {
        id: 'ckqit2teh00a676va4ugs3q82',
        rank: 2,
        name: 'Recharge Penalty',
        icon: 'B_Recharge_Penalty_Icon.png',
        description: 'Reduces the recharge speed penalty on other powers.',
        bonuses: [
          {
            id: 'ckqit2teh00a776va067474vz',
            text: () => `-10% Power Recharge Penalty`,
            showText: false,
            bonus: stats => ({
              ...stats,
              powerRechargePenalty: stats.powerRechargePenalty! - 10,
            }),
          },
        ],
      },
      {
        id: 'ckqit2teh00a876vabmtd7mws',
        rank: 3,
        name: 'Damage',
        icon: 'B_Damage_Icon.png',
        description: '',
        bonuses: [
          {
            id: 'ckqit2teh00a976vahvhd4q3u',
            text: () => `+15% Damage`,
            showText: false,
            bonus: stats => ({ ...stats, damage: stats.damage! * 1.15 }),
          },
        ],
      },
      {
        id: 'ckqit2teh00aa76va8k4t4kl2',
        rank: 4.1,
        name: 'Radius',
        icon: 'B_Radius_Icon.png',
        description: '',
        bonuses: [
          {
            id: 'ckqit2teh00ab76va66qd67qf',
            text: () => `+35% Damage Radius`,
            showText: false,
            bonus: stats => ({ ...stats, radius: stats.radius! * 1.35 }),
          },
        ],
      },
      {
        id: 'ckqit2tei00ac76va32f0axb6',
        rank: 4.2,
        name: 'Recharge Penalty',
        icon: 'B_Recharge_Penalty_Icon.png',
        description: 'Reduces the recharge speed penalty on other powers.',
        bonuses: [
          {
            id: 'ckqit2tei00ad76vahicah3p9',
            text: () => `-30% Power Recharge Penalty`,
            showText: false,
            bonus: stats => ({
              ...stats,
              powerRechargePenalty: stats.powerRechargePenalty! - 30,
            }),
          },
        ],
      },
      {
        id: 'ckqit2tei00ae76vahjjs2lr7',
        rank: 5.1,
        name: 'Damage Attractor',
        icon: 'B_Damage_Attractor_Icon.png',
        description:
          'Enemies affected take 20% additional damage from all sources.',
        bonuses: [],
      },
      {
        id: 'ckqit2tei00af76va062f4vhl',
        rank: 5.2,
        name: 'Biotic Wind',
        icon: 'B_Biotic_Wind_Icon.png',
        description:
          "Increases movement speed for all allies (including the user) within Annihilation's radius.",
        bonuses: [
          {
            id: 'ckqit2tei00ag76vafvwb9euc',
            text: () => `Movement Speed Bonus: 25%`,
          },
        ],
      },
      {
        id: 'ckqit2tei00ah76va3n7z0n8o',
        rank: 6.1,
        name: 'Draining Field',
        icon: 'B_Draining_Field_Icon.png',
        description:
          'Partially restores shields for all allies (including the user) within 8 m when an enemy affected by Annihilation dies.',
        bonuses: [
          {
            id: 'ckqit2tei00ai76va0xx5414l',
            text: () => `Shields Restored: 30%`,
          },
        ],
      },
      {
        id: 'ckqit2tei00aj76va8c63246z',
        rank: 6.2,
        name: 'Vortex',
        icon: 'B_Vortex_Icon.png',
        description:
          'Unarmored, unshielded, normal-sized enemies are lifted into the air for 8 sec. Each enemy can only be affected once every 15 sec.',
        bonuses: [],
      },
    ],
  },
  {
    id: 'ckqit2tma00ck76va99c72r7l',
    name: 'Backlash',
    url: '/wiki/Backlash',
    type: 'active',
    description:
      'HOLD BUTTON: Generates a frontal biotic aegis barrier that reflects most projectiles and reduces the damage of other enemy attacks. A well-timed initial activation interrupts melee attacks.\n',
    ranks: [
      {
        id: 'ckqit2tm800by76vagxyehobd',
        rank: 1,
        name: 'Backlash',
        icon: 'B_Backlash_Icon.png',
        description:
          'HOLD BUTTON: Generates a frontal biotic aegis barrier that reflects most projectiles and reduces the damage of other enemy attacks. A well-timed initial activation interrupts melee attacks.',
        bonuses: [
          {
            id: 'ckqit2tm800bz76va6hiig0u6',
            text: ({ aegisHealth }) => `Aegis Health: ${aegisHealth}`,
            bonus: stats => ({ ...stats, aegisHealth: 300 }),
          },
          {
            id: 'ckqit2tm800c076va0v0l6j5j',
            text: ({ projectileDamageReturned }) =>
              `Projectile Damage Returned: ${projectileDamageReturned}%`,
            bonus: stats => ({ ...stats, projectileDamageReturned: 120 }),
          },
          {
            id: 'ckqit2tm800c176vaasrm22o4',
            text: ({ frontalDamageResistance }) =>
              `Frontal Damage Resistance: ${frontalDamageResistance}`,
            bonus: stats => ({ ...stats, frontalDamageResistance: 75 }),
          },
          {
            id: 'ckqit2tm800c276vafgbygx6a',
            text: ({ rechargeTime }) => `Recharge Time (s): ${rechargeTime}`,
            bonus: stats => ({ ...stats, rechargeTime: 20 }),
          },
        ],
      },
      {
        id: 'ckqit2tm900c376va6rz65r37',
        rank: 2,
        name: 'Recharge Speed',
        icon: 'B_Recharge_Penalty_Icon.png',
        description: '',
        bonuses: [
          {
            id: 'ckqit2tm900c476va80852di6',
            text: () => `+25% Recharge Speed`,
            showText: false,
            bonus: stats => ({
              ...stats,
              rechargeTime: stats.rechargeTime! * 1.25,
            }),
          },
        ],
      },
      {
        id: 'ckqit2tm900c576va4xgn6mni',
        rank: 3,
        name: 'Durability',
        icon: 'B_Durability_Icon.png',
        description: '',
        bonuses: [
          {
            id: 'ckqit2tm900c676vagf4tebry',
            text: () => `+35% Aegis Health`,
            showText: false,
            bonus: stats => ({
              ...stats,
              aegisHealth: stats.aegisHealth! * 1.3,
            }),
          },
        ],
      },
      {
        id: 'ckqit2tm900c776vafdqeayyt',
        rank: 4.1,
        name: 'Durability',
        icon: 'B_Durability_Icon.png',
        description: '',
        bonuses: [
          {
            id: 'ckqit2tm900c876va17g6af10',
            text: () => `+40% Aegis Health`,
            showText: false,
            bonus: stats => ({
              ...stats,
              aegisHealth: stats.aegisHealth! * 1.4,
            }),
          },
        ],
      },
      {
        id: 'ckqit2tm900c976vagv9wggcb',
        rank: 4.2,
        name: 'Recharge Speed',
        icon: 'B_Recharge_Penalty_Icon.png',
        description: '',
        bonuses: [
          {
            id: 'ckqit2tm900ca76va80yw3et1',
            text: () => `+40% Recharge Speed`,
            showText: false,
            bonus: stats => ({
              ...stats,
              rechargeTime: stats.rechargeTime! * 1.4,
            }),
          },
        ],
      },
      {
        id: 'ckqit2tm900cb76va0gqnayqz',
        rank: 5.1,
        name: 'Durability',
        icon: 'B_Durability_Icon.png',
        description: '',
        bonuses: [
          {
            id: 'ckqit2tm900cc76vafqvebjr2',
            text: () => `+40% Aegis Health`,
            showText: false,
            bonus: stats => ({
              ...stats,
              aegisHealth: stats.aegisHealth! * 1.4,
            }),
          },
        ],
      },
      {
        id: 'ckqit2tma00cd76vahasrbvii',
        rank: 5.2,
        name: 'Reflection',
        icon: 'B_Reflection_Icon.png',
        description: 'Reflected projectiles inflict more damage.',
        bonuses: [
          {
            id: 'ckqit2tma00ce76va8hvp07am',
            text: () => `+100% Projectile Damage Returned`,
            showText: false,
            bonus: stats => ({
              ...stats,
              projectileDamageReturned: stats.projectileDamageReturned! + 100,
            }),
          },
        ],
      },
      {
        id: 'ckqit2tma00cf76vacpvc63fx',
        rank: 6.1,
        name: 'Shield Resurgence',
        icon: 'B_Draining_Field_Icon.png',
        description:
          'Restores shields over 3 sec after releasing Backlash. Can restore up to 50% of shield strength, scaled to damage absorbed by the aegis.',
        bonuses: [],
      },
      {
        id: 'ckqit2tma00cg76va38z5f9rx',
        rank: 6.2,
        name: 'Damage Aftermath',
        icon: 'B_Damage_Icon.png',
        description:
          'Increases damage inflicted for 3 sec after releasing Backlash. Scales with the amount of damage absorbed by the aegis.',
        bonuses: [
          {
            id: 'ckqit2tma00ch76vaf0qm0naj',
            text: () => `+20% Gun Damage Bonus`,
            bonus: stats => ({ ...stats, gunDamageBonus: 20 }),
          },
          {
            id: 'ckqit2tma00ci76va82m4c8o0',
            text: () => `+30% Power Damage Bonus`,
            bonus: stats => ({ ...stats, powerDamageBonus: 30 }),
          },
          {
            id: 'ckqit2tma00cj76vabq8che3t',
            text: () => `+30% Melee Damage Bonus`,
            bonus: stats => ({ ...stats, meleeDamageBonus: 30 }),
          },
        ],
      },
    ],
  },
  {
    id: 'ckqit2ttl00eb76va1rga7vkc',
    name: 'Singularity',
    url: '/wiki/Singularity',
    type: 'active',
    description:
      'TAP BUTTON: Deploys a gravity well that lifts and damages unshielded and unarmored enemies. Primes enemies for combo detonations.\n\nTAP AGAIN: End the effect early.\n',
    ranks: [
      {
        id: 'ckqit2tti00dr76vadmds22xy',
        rank: 1,
        name: 'Singularity',
        icon: 'B_Singularity_Icon.png',
        description:
          ' TAP BUTTON: Deploys a gravity well that lifts and damages unshielded and unarmored enemies.\nPrimes enemies for combo detonations.\n\nTAP AGAIN: End the effect early.',
        bonuses: [
          {
            id: 'ckqit2tti00ds76vacth607k0',
            text: ({ damagePerSecond }) =>
              `Damage per Second: ${damagePerSecond}`,
            bonus: stats => ({
              ...stats,
              damagePerSecond: 35,
              primer: 'biotic',
            }),
          },
          {
            id: 'ckqit2tti00dt76vaa9d25ini',
            text: ({ radius }) => `Radius (m): ${radius}`,
            bonus: stats => ({ ...stats, radius: 3 }),
          },
          {
            id: 'ckqit2tti00du76va02go09b1',
            text: ({ duration }) => `Duration (s): ${duration}`,
            bonus: stats => ({ ...stats, duration: 8 }),
          },
          {
            id: 'ckqit2tti00dv76vahumf08bm',
            text: ({ rechargeTime }) => `Recharge Time (s): ${rechargeTime}`,
            bonus: stats => ({ ...stats, rechargeTime: 24 }),
          },
        ],
      },
      {
        id: 'ckqit2tti00dw76va0jryc0oz',
        rank: 2,
        name: 'Recharge Speed',
        icon: 'B_Recharge_Penalty_Icon.png',
        description: '',
        bonuses: [
          {
            id: 'ckqit2tti00dx76vaez35a4d6',
            text: () => `+10% Recharge Speed`,
            showText: false,
            bonus: stats => ({
              ...stats,
              rechargeTime: stats.rechargeTime! * 1.1,
            }),
          },
        ],
      },
      {
        id: 'ckqit2ttj00dy76va5g1y1p1z',
        rank: 3,
        name: 'Damage',
        icon: 'B_Damage_Icon.png',
        description: '',
        bonuses: [
          {
            id: 'ckqit2ttj00dz76va62zn2040',
            text: () => `+25% Damage per Second`,
            showText: false,
            bonus: stats => ({
              ...stats,
              damagePerSecond: stats.damagePerSecond! * 1.25,
            }),
          },
        ],
      },
      {
        id: 'ckqit2ttj00e076vaby9a045u',
        rank: 4.1,
        name: 'Duration',
        icon: 'B_Duration_Icon.png',
        description: '',
        bonuses: [
          {
            id: 'ckqit2ttj00e176va8b1vfl23',
            text: () => `+40% Duration`,
            showText: false,
            bonus: stats => ({ ...stats, duration: stats.duration! * 1.4 }),
          },
        ],
      },
      {
        id: 'ckqit2ttj00e276va2gphglj4',
        rank: 4.2,
        name: 'Radius',
        icon: 'B_Radius_Icon.png',
        description: '',
        bonuses: [
          {
            id: 'ckqit2ttj00e376vaapgm4vr0',
            text: () => `+25% Effect Radius`,
            showText: false,
            bonus: stats => ({ ...stats, radius: stats.radius! * 1.25 }),
          },
        ],
      },
      {
        id: 'ckqit2ttj00e476va69bfhwdv',
        rank: 5.1,
        name: 'Anti-Shield',
        icon: 'B_Anti-Shield_Icon.png',
        description: '',
        bonuses: [
          {
            id: 'ckqit2ttj00e576va81co41m9',
            text: () => `+100% Damage vs. Shields`,
          },
        ],
      },
      {
        id: 'ckqit2ttj00e676va9yrp8ov8',
        rank: 5.2,
        name: 'Recharge Speed',
        icon: 'B_Recharge_Penalty_Icon.png',
        description: '',
        bonuses: [
          {
            id: 'ckqit2ttj00e776vaaz288cfo',
            text: () => `+40% Recharge Speed`,
            showText: false,
            bonus: stats => ({
              ...stats,
              rechargeTime: stats.rechargeTime! * 1.4,
            }),
          },
        ],
      },
      {
        id: 'ckqit2ttk00e876va3twtdfkz',
        rank: 6.1,
        name: 'Exploding Singularity',
        icon: 'B_Exploding_Singularity_Icon.png',
        description:
          'The singularity explodes after the effect ends, dealing damage in a 7m radius.',
        bonuses: [
          {
            id: 'ckqit2ttk00e976vaeypoe7ly',
            text: ({ areaDamage }) => `Area Damage: ${areaDamage}`,
            bonus: stats => ({ ...stats, areaDamage: 350 }),
          },
        ],
      },
      {
        id: 'ckqit2ttl00ea76va3i2yddpu',
        rank: 6.2,
        name: 'Expanding Singularity',
        icon: 'B_Expanding_Singularity_Icon.png',
        description: 'Radius expands by 200% over the singularity lifetime.',
        bonuses: [],
      },
    ],
  },
  {
    id: 'ckqit2u0z00gb76vaaq966toz',
    name: 'Lance',
    url: '/wiki/Lance',
    type: 'active',
    description:
      'Devastates a small area with a swiftly thrown shaft of energy. Inflicts bonus damage against enemy weak points (such as heads) and detonates combo primers.\n',
    ranks: [
      {
        id: 'ckqit2u0x00fn76vadfll3v76',
        rank: 1,
        name: 'Lance',
        icon: 'B_Lance_Icon.png',
        description:
          ' Devastates a small area with a swiftly thrown shaft of energy. Inflicts bonus damage against enemy weak points (such as heads) and detonates combo primers.',
        bonuses: [
          {
            id: 'ckqit2u0y00fo76vagr2lfpwr',
            text: ({ damage }) => `Damage: ${damage}`,
            bonus: stats => ({ ...stats, damage: 320, detonator: true }),
          },
          {
            id: 'ckqit2u0y00fp76va44vnhyh5',
            text: ({ force }) => `Force: ${force}`,
            bonus: stats => ({ ...stats, force: 400 }),
          },
          {
            id: 'ckqit2u0y00fq76va3z6q0c9h',
            text: ({ radius }) => `Impact Radius: ${radius}`,
            bonus: stats => ({ ...stats, radius: 1 }),
          },
          {
            id: 'ckqit2u0y00fr76vadlxh1xxl',
            text: () => `Recharge Time (s): 10`,
            bonus: stats => ({ ...stats, rechargeTime: 10 }),
          },
        ],
      },
      {
        id: 'ckqit2u0y00fs76va0q7b8sk9',
        rank: 2,
        name: 'Recharge Speed',
        icon: 'B_Recharge_Penalty_Icon.png',
        description: '',
        bonuses: [
          {
            id: 'ckqit2u0y00ft76vab18cbvi0',
            text: () => `+10% Recharge Speed`,
            showText: false,
            bonus: stats => ({
              ...stats,
              rechargeTime: stats.rechargeTime! * 1.1,
            }),
          },
        ],
      },
      {
        id: 'ckqit2u0y00fu76vae8286nd6',
        rank: 3,
        name: 'Damage & Force',
        icon: 'B_Damage_Icon.png',
        description: '',
        bonuses: [
          {
            id: 'ckqit2u0y00fv76vadcksa46l',
            text: () => `+15% Damage`,
            showText: false,
            bonus: stats => ({ ...stats, damage: stats.damage! * 1.15 }),
          },
          {
            id: 'ckqit2u0y00fw76vahvjtgu5c',
            text: () => `+15% Force`,
            showText: false,
            bonus: stats => ({ ...stats, force: stats.force! * 1.15 }),
          },
        ],
      },
      {
        id: 'ckqit2u0y00fx76va1cs556hp',
        rank: 4.1,
        name: 'Damage & Force',
        icon: 'B_Damage_Icon.png',
        description: '',
        bonuses: [
          {
            id: 'ckqit2u0y00fy76va5tev2lxz',
            text: () => `+20% Damage`,
            showText: false,
            bonus: stats => ({ ...stats, damage: stats.damage! * 1.2 }),
          },
          {
            id: 'ckqit2u0y00fz76vaa0xkgy1j',
            text: () => `+20% Force`,
            showText: false,
            bonus: stats => ({ ...stats, force: stats.force! * 1.2 }),
          },
        ],
      },
      {
        id: 'ckqit2u0y00g076vaasjm2oe0',
        rank: 4.2,
        name: 'Radius',
        icon: 'B_Radius_Icon.png',
        description: '',
        bonuses: [
          {
            id: 'ckqit2u0y00g176va65hx25gk',
            text: () => `+100% Damage Radius`,
            showText: false,
            bonus: stats => ({ ...stats, radius: stats.radius! * 2 }),
          },
        ],
      },
      {
        id: 'ckqit2u0z00g276va8nz9bypa',
        rank: 5.1,
        name: 'Focused Blast',
        icon: 'B_Focused_Blast_Icon.png',
        description:
          'Increases bonus damage against heads and other weak points.',
        bonuses: [
          {
            id: 'ckqit2u0z00g376va10tehjut',
            text: () => `+40% Headshot/Weak Point Bonus`,
          },
        ],
      },
      {
        id: 'ckqit2u0z00g476vadpnc7ilf',
        rank: 5.2,
        name: 'Anti-Shield',
        icon: 'B_Anti-Shield_Icon.png',
        description: '',
        bonuses: [
          {
            id: 'ckqit2u0z00g576va7zujh0vu',
            text: () => `+35% Damage vs. Shields`,
          },
        ],
      },
      {
        id: 'ckqit2u0z00g676va7hthe827',
        rank: 6.1,
        name: 'Knockdown',
        icon: 'B_Knockdown_Icon.png',
        description:
          "Enemies within 1.5m of the blast's impact are knocked to the ground. Only unarmored, unshielded, normal-sized enemies are affected.",
        bonuses: [
          {
            id: 'ckqit2u0z00g776vaan0e0dnd',
            text: () => `+20% Damage`,
            showText: false,
            bonus: stats => ({ ...stats, damage: stats.damage! * 1.2 }),
          },
          {
            id: 'ckqit2u0z00g876vae0rmcscw',
            text: () => `+20% Force`,
            showText: false,
            bonus: stats => ({ ...stats, force: stats.force! * 1.2 }),
          },
        ],
      },
      {
        id: 'ckqit2u0z00g976vaaw2l90wa',
        rank: 6.2,
        name: 'Shield-Powered',
        icon: 'B_Shield-Powered_Icon.png',
        description:
          'Lance has no recharge time, but consumes shields when used.',
        bonuses: [
          {
            id: 'ckqit2u0z00ga76vae1ss98je',
            text: () => `Shield Cost: 45%`,
            bonus: (stats: SkillStats): SkillStats => {
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              const { rechargeTime, ...others } = stats
              return others
            },
          },
        ],
      },
    ],
  },
  {
    id: 'ckqit2u7x00i976va9gq20e22',
    name: 'Barrier',
    url: '/wiki/Barrier',
    type: 'passive',
    description:
      'Specialized training reinforces ordinary shields with biotically empowered mass effect fields.\n',
    ranks: [
      {
        id: 'ckqit2u7w00hl76va23rh91xt',
        rank: 1,
        name: 'Barrier',
        icon: 'B_Barrier_Icon.png',
        description:
          'Maximum shield strength scales with each skill point invested in the Biotic Skill Group.',
        bonuses: [
          {
            id: 'ckqit2u7w00hm76vabwvfdc35',
            text: ({ maxShields }) => `+${maxShields}% Max Shields`,
            bonus: (stats, skillCount) => ({
              ...stats,
              maxShields: 2 + Math.floor((skillCount || 0) * (38 / 252)),
            }),
          },
        ],
      },
      {
        id: 'ckqit2u7w00hn76vac3ni98eo',
        rank: 2,
        name: 'Barrier Speed',
        icon: 'B_Barrier_Regeneration_Icon.png',
        description:
          'Decreases the delay before shields begin regenerating with each skill point invested in the Biotic Skill Group.',
        bonuses: [
          {
            id: 'ckqit2u7w00ho76va7980aats',
            text: ({ healthShieldRegenerationDelayReduction }) =>
              `+${healthShieldRegenerationDelayReduction}% Health &amp; Shield Regeneration Delay Reduction`,
            bonus: (stats, skillCount) => ({
              ...stats,
              healthShieldRegenerationDelayReduction:
                2 + Math.floor((skillCount || 0) * (38 / 252)),
            }),
          },
        ],
      },
      {
        id: 'ckqit2u7w00hp76va7y7n3ki8',
        rank: 3,
        name: 'Barrier Regeneration',
        icon: 'B_Barrier_Regeneration_Icon.png',
        description:
          'Increases shield regeneration speed with each skill point invested in the Biotic Skill Group.',
        bonuses: [
          {
            id: 'ckqit2u7w00hq76vad4h3b6p3',
            text: ({ shieldRegeneration }) =>
              `+${shieldRegeneration}% Shield Regeneration`,
            bonus: (stats, skillCount) => ({
              ...stats,
              shieldRegeneration:
                2 + Math.floor((skillCount || 0) * (38 / 252)),
            }),
          },
        ],
      },
      {
        id: 'ckqit2u7w00hr76vahnrl5g2i',
        rank: 4.1,
        name: 'Unyielding Barrier',
        icon: 'B_Unyielding_Barrier_Icon.png',
        description: '',
        bonuses: [
          {
            id: 'ckqit2u7w00hs76va96xsfiu1',
            text: () => `+10% Max Shields`,
            showText: false,
            bonus: stats => ({
              ...stats,
              maxShields: (stats.maxShields || 0) + 10,
            }),
          },
        ],
      },
      {
        id: 'ckqit2u7w00ht76va92l43xx9',
        rank: 4.2,
        name: 'Recuperative Barrier',
        icon: 'B_Recuperative_Barrier_Icon.png',
        description: '',
        bonuses: [
          {
            id: 'ckqit2u7w00hu76vadwh51w4n',
            text: () => `+10% Health &amp; Shield Regeneration Delay Reduction`,
            showText: false,
            bonus: stats => ({
              ...stats,
              healthShieldRegenerationDelayReduction:
                stats.healthShieldRegenerationDelayReduction! + 10,
            }),
          },
          {
            id: 'ckqit2u7w00hv76vab3tb6cax',
            text: () => `+10% Shield Regeneration`,
            showText: false,
            bonus: stats => ({
              ...stats,
              shieldRegeneration: stats.shieldRegeneration! + 10,
            }),
          },
        ],
      },
      {
        id: 'ckqit2u7x00hw76vacjpk5auw',
        rank: 5.1,
        name: 'Biotic Link',
        icon: 'B_Biotic_Link_Icon.png',
        description:
          'Increases maximum shield strength while a biotic effect is active upon an enemy.',
        bonuses: [
          {
            id: 'ckqit2u7x00hx76va6ili5n5m',
            text: () => `Max Shields With an Active Biotic Effect: 40%`,
          },
          {
            id: 'ckqit2u7x00hy76va88p2fciq',
            text: () => `Biotic Link Cooldown (s): 5`,
          },
        ],
      },
      {
        id: 'ckqit2u7x00hz76vaan2w17ns',
        rank: 5.2,
        name: 'Biotic Alacrity',
        icon: 'B_Biotic_Alacrity_Icon.png',
        description:
          'Reduces weapon weight and improves speed while shields are active. For biotic powers that deplete shields to activate, shield cost is reduced.',
        bonuses: [
          {
            id: 'ckqit2u7x00i076va6js9f80b',
            text: () => `+10% Weapon Weight Capacity`,
            bonus: stats => ({
              ...stats,
              weaponWeightCapacity: (stats.weaponWeightCapacity || 0) + 10,
            }),
          },
          {
            id: 'ckqit2u7x00i176va00utcqxo',
            text: () => `+10% Biotic Power Shield Cost Reduction`,
          },
          {
            id: 'ckqit2u7x00i276vahnba520b',
            text: () => `+10% Movement Speed While Shields Active`,
          },
        ],
      },
      {
        id: 'ckqit2u7x00i376vag94oappo',
        rank: 6.1,
        name: 'Active Barrier',
        icon: 'B_Active_Barrier_Icon.png',
        description:
          'Restores shields after an enemy is killed by a biotic power. Also affects squadmates within 6 m.',
        bonuses: [
          {
            id: 'ckqit2u7x00i476vaaeutd734',
            text: () => `Shields Restored on Biotic Kill: 10%`,
          },
        ],
      },
      {
        id: 'ckqit2u7x00i576va8jt24ejj',
        rank: 6.2,
        name: 'Saving Barrier',
        icon: 'B_Saving_Barrier_Icon.png',
        description:
          'Automatically restores shields upon reaching low health on a cooldown.',
        bonuses: [
          {
            id: 'ckqit2u7x00i676va3iuc118k',
            text: () => `Shields Restored at Low Health: 100%`,
          },
          {
            id: 'ckqit2u7x00i776va1vpa6o7f',
            text: () => `Low Health Threshold: 20%`,
          },
          {
            id: 'ckqit2u7x00i876vaczl383u8',
            text: () => `Saving Barrier Cooldown (s): 15`,
          },
        ],
      },
    ],
  },
  {
    id: 'ckqit2uey00k876va6oeicltl',
    name: 'Offensive Biotics',
    url: '/wiki/Offensive_Biotics',
    type: 'passive',
    description:
      'Allows a biotic to maximize damage against foes both directly and indirectly.\n',
    ranks: [
      {
        id: 'ckqit2uew00jn76va95if3n32',
        rank: 1,
        name: 'Offensive Biotics',
        icon: 'B_Offensive_Biotics_Icon.png',
        description:
          'Increases biotic power damage and force with each skill point invested in the Biotic Skill Group.',
        bonuses: [
          {
            id: 'ckqit2uex00jo76vad9qu5fgl',
            text: ({ bioticPowerDamage }) =>
              `+${bioticPowerDamage}% Biotic Power Damage`,
            bonus: (stats, skillCount) => ({
              ...stats,
              bioticPowerDamage: 2 + Math.floor((skillCount || 0) * (38 / 252)),
            }),
          },
        ],
      },
      {
        id: 'ckqit2uex00jp76va5aqs45z6',
        rank: 2,
        name: 'Speed',
        icon: 'B_Efficiency_Icon.png',
        description:
          'Improves biotic power recharge speeds with each skill point invested in the Biotic Skill Group.',
        bonuses: [
          {
            id: 'ckqit2uex00jq76vac9h72lrb',
            text: ({ bioticRechargeSpeed }) =>
              `+${bioticRechargeSpeed}% Biotic Recharge Speed`,
            bonus: (stats, skillCount) => ({
              ...stats,
              bioticRechargeSpeed:
                2 + Math.floor((skillCount || 0) * (38 / 252)),
            }),
          },
        ],
      },
      {
        id: 'ckqit2uex00jr76vaauki7ekd',
        rank: 3,
        name: 'Detonators',
        icon: 'B_Detonators_Icon.png',
        description:
          'Increases combo detonation damage from biotic detonators with each skill point invested in the Biotic Skill Group.',
        bonuses: [
          {
            id: 'ckqit2uex00js76va5fbn28rt',
            text: ({ bioticDetonatorDamageBonus }) =>
              `+${bioticDetonatorDamageBonus}% Biotic Detonator Damage Bonus`,
            bonus: (stats, skillCount) => ({
              ...stats,
              bioticDetonatorDamageBonus:
                2 + Math.floor((skillCount || 0) * (38 / 252)),
            }),
          },
        ],
      },
      {
        id: 'ckqit2uex00jt76vabublc1be',
        rank: 4.1,
        name: 'Amplitude',
        icon: 'B_Biotics_Icon.png',
        description: '',
        bonuses: [
          {
            id: 'ckqit2uex00ju76vafc329y3x',
            text: () => `+15% Biotic Power Damage`,
            showText: false,
            bonus: stats => ({
              ...stats,
              bioticPowerDamage: stats.bioticPowerDamage! + 15,
            }),
          },
        ],
      },
      {
        id: 'ckqit2uex00jv76va92cphgch',
        rank: 4.2,
        name: 'Alacrity',
        icon: 'B_Alacrity_Icon.png',
        description: '',
        bonuses: [
          {
            id: 'ckqit2uex00jw76vacffy71j1',
            text: () => `+15% Biotic Recharge Speed`,
            showText: false,
            bonus: stats => ({
              ...stats,
              bioticRechargeSpeed: stats.bioticRechargeSpeed! + 15,
            }),
          },
        ],
      },
      {
        id: 'ckqit2uey00jx76vad5qd53u0',
        rank: 5.1,
        name: 'Exploitation',
        icon: 'B_Explotation_Icon.png',
        description:
          "Increases damage from all sources against enemies suffering ongoing effects of the user's biotic powers.",
        bonuses: [
          {
            id: 'ckqit2uey00jy76va3s02ckzr',
            text: () => `Defense Debuff from Biotic Effects: 20%`,
          },
        ],
      },
      {
        id: 'ckqit2uey00jz76vadlsc7z8g',
        rank: 5.2,
        name: 'Detonation',
        icon: 'B_Detonators_Icon.png',
        description:
          'Increases combo detonation damage from biotic detonators and increases the radius of all combo detonations.',
        bonuses: [
          {
            id: 'ckqit2uey00k076vahlyrarra',
            text: () => `+25% Biotic Detonator Damage Bonus`,
            showText: false,
            bonus: stats => ({
              ...stats,
              bioticDetonatorDamageBonus:
                stats.bioticDetonatorDamageBonus! + 25,
            }),
          },
          {
            id: 'ckqit2uey00k176vacghp4aqc',
            text: () => `+40% All Combo Radiuses`,
          },
        ],
      },
      {
        id: 'ckqit2uey00k276vadvl84ge2',
        rank: 6.1,
        name: 'Biotic Expert',
        icon: 'B_Biotic_Expert_Icon.png',
        description:
          'Increases power damage for 3 sec after using a biotic power.',
        bonuses: [
          {
            id: 'ckqit2uey00k376vaelu581z7',
            text: () => `+30% Biotic Damage Bonus`,
          },
        ],
      },
      {
        id: 'ckqit2uey00k476vac6bj3tzx',
        rank: 6.2,
        name: 'Biotic Warrior',
        icon: 'B_Biotic_Synergy_Icon.png',
        description:
          'Increases weapon and melee damage for 3 seconds after using a biotic power. During this time, melee attacks also knock down unarmored, unshielded, standard-sized enemies.',
        bonuses: [
          {
            id: 'ckqit2uey00k576va2oim1qs4',
            text: () => `+15% Weapon Damage Bonus`,
          },
          {
            id: 'ckqit2uey00k676vag9fd9gop',
            text: () => `+15% Melee Damage Bonus`,
          },
          {
            id: 'ckqit2uey00k776va9e7adu5d',
            text: () => `+15% Melee Force`,
          },
        ],
      },
    ],
  },
  {
    id: 'ckqit2ulq00lh76vaave8bk5n',
    name: 'Containment',
    url: '/wiki/Containment',
    type: 'passive',
    description:
      "Enhances a biotic's control over mass effect fields, allowing unsurpassed manipulation of enemies and objects.\n",
    ranks: [
      {
        id: 'ckqit2ulp00kz76vabx9x0zzw',
        rank: 1,
        name: 'Containment',
        icon: 'B_Containment_Icon.png',
        description:
          'Increases the duration of biotic power effects with each skill point invested in the Biotic Skill Group.',
        bonuses: [
          {
            id: 'ckqit2ulp00l076va6snn423y',
            text: ({ bioticEffectDuration }) =>
              `+${bioticEffectDuration}% Biotic Effect Duration`,
            bonus: (stats, skillCount) => ({
              ...stats,
              bioticEffectDuration:
                2 + Math.floor((skillCount || 0) * (38 / 252)),
            }),
          },
        ],
      },
      {
        id: 'ckqit2ulp00l176vabsvyevcv',
        rank: 2,
        name: 'Effectiveness',
        icon: 'B_Effectiveness_Icon.png',
        description:
          'Improves biotic power force, biotic shield restoration effects, and defensive biotic effects with each skill point invested in the Biotic Skill Group.',
        bonuses: [
          {
            id: 'ckqit2ulp00l276va4y5ndvqi',
            text: ({ bioticForce }) => `+${bioticForce}% Biotic Force`,
            bonus: (stats, skillCount) => ({
              ...stats,
              bioticForce: 2 + Math.floor((skillCount || 0) * (38 / 252)),
            }),
          },
          {
            id: 'ckqit2ulp00l376va5imyfab8',
            text: ({ bioticRestorationDefense }) =>
              `+${bioticRestorationDefense}% Biotic Restoration &amp; Defense`,
            bonus: (stats, skillCount) => ({
              ...stats,
              bioticRestorationDefense:
                5 + Math.floor((skillCount || 0) * (45 / 252)),
            }),
          },
        ],
      },
      {
        id: 'ckqit2ulp00l476vagkugag1c',
        rank: 3,
        name: 'Anti-Shield',
        icon: 'B_Anti-Shield_P_Icon.png',
        description:
          'Increases damage dealt to shields by biotic powers with each skill point invested in the Biotic Skill Group.',
        bonuses: [
          {
            id: 'ckqit2ulp00l576vah0ww7yd2',
            text: ({ bioticDamageToShields }) =>
              `+${bioticDamageToShields}% Biotic Damage Bonus to Shields`,
            bonus: (stats, skillCount) => ({
              ...stats,
              bioticDamageToShields:
                2 + Math.floor((skillCount || 0) * (38 / 252)),
            }),
          },
        ],
      },
      {
        id: 'ckqit2ulq00l676vaaimvdkf1',
        rank: 4.1,
        name: 'Radius',
        icon: 'B_Radius_P_Icon.png',
        description: 'Increases the radius of all biotic area effects.',
        bonuses: [
          {
            id: 'ckqit2ulq00l776vac91u9pxs',
            text: () => `+15% Biotic Area of Effect Radius`,
          },
        ],
      },
      {
        id: 'ckqit2ulq00l876va5lxrbhwq',
        rank: 4.2,
        name: 'Duration',
        icon: 'B_Duration_P_Icon.png',
        description: 'Increases the duration of biotic power effects.',
        bonuses: [
          {
            id: 'ckqit2ulq00l976va9ny5cfpf',
            text: () => `+15% Biotic Effect Duration`,
            showText: false,
            bonus: stats => ({
              ...stats,
              bioticEffectDuration: stats.bioticEffectDuration! + 15,
            }),
          },
        ],
      },
      {
        id: 'ckqit2ulq00la76vadn1bgi2t',
        rank: 5.1,
        name: 'Shield Detonation',
        icon: 'B_Detonators_Icon.png',
        description: 'Increases all combo detonation damage against shields.',
        bonuses: [
          {
            id: 'ckqit2ulq00lb76vadj9z6gnx',
            text: () => `+50% All Combo Damage vs. Shields`,
          },
        ],
      },
      {
        id: 'ckqit2ulq00lc76va3kch1qno',
        rank: 5.2,
        name: 'Concussive Detonation',
        icon: 'B_Detonators_Icon.png',
        description:
          'Biotic combo detonations knock down unarmored, unshielded, normal-sized enemies.',
        bonuses: [],
      },
      {
        id: 'ckqit2ulq00ld76va1zc5b163',
        rank: 6.1,
        name: 'Manifold Duration',
        icon: 'B_Duration_P_Icon.png',
        description:
          'Increases duration of biotic power effects by 10% per affected enemy, up to a maximum of 40%.',
        bonuses: [],
      },
      {
        id: 'ckqit2ulq00le76va0s1ecaib',
        rank: 6.2,
        name: 'Event Horizon',
        icon: 'B_Biotics_Icon.png',
        description:
          'Increases the radius and force of all biotic area effects.',
        bonuses: [
          {
            id: 'ckqit2ulq00lf76vaarzcf0yv',
            text: () => `+20% Biotic Area of Effect Radius`,
          },
          {
            id: 'ckqit2ulq00lg76vacooh3zrf',
            text: () => `+40% Biotic Area of Effect Force`,
          },
        ],
      },
    ],
  },
]
