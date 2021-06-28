import axios from 'axios'
import cheerio, { Cheerio, Element } from 'cheerio'
import cuid from 'cuid'
import { promises as fs } from 'fs'

const BONUS = {
  AREA_DAMAGE: 'areaDamage',
  DAMAGE_RADIUS: 'damageRadius',
  POWER_CELL_CAPACITY: 'grenadeCapacity',
  DIRECT_DAMAGE: 'directDamage',
  DAMAGE_PER_SECOND: 'damagePerSecond',
  DAMAGE_DURATION: 'damageDuration',
  DAMAGE_VS_ARMOR: 'damageVsArmor',
  DAMAGE_VS_SHIELD: 'damageVsShield',
  DAMAGE: 'damage',
  FORCE: 'force',
  RECHARGE_TIME: 'rechargeTime',
  DIRECT_FORCE: 'directForce',
  RECHARGE_SPEED: 'rechargeSpeed',
  DAMAGE_VS_KNOCKED_DOWN: 'damageVsKnockedDown',
}

const instance = axios.create({
  baseURL: 'https://masseffectandromeda.fandom.com',
})
interface SkillBonus {
  id: string
  text: string
  attribute: string
  value: number
}
interface SkillRank {
  id: string
  rank: number
  name: string
  icon: string
  description: string
  bonuses: SkillBonus[]
}
interface Skill {
  id: string
  name: string
  url: string
  type: 'active' | 'passive'
  stats: string[]
  description: string
  ranks: SkillRank[]
}

const stripHtml = (el: Cheerio<Element>) => {
  if (!el) return null
  return el
    .html()
    ?.replace(/<br>/gi, '\n')
    .replace(/<(?!\/>)[^>]*>/gi, '')
}

const formatList = (el: Cheerio<Element>) => {
  if (!el) return []
  return stripHtml(el.first())?.split('\n').filter(Boolean) ?? []
}

const getBonusData = (bonus: string): SkillBonus => {
  let attr = {
    value: 0,
    attribute: '',
  }

  bonusRegex.forEach(item => {
    const match = item.regex.exec(bonus) ?? []
    if (match.length > 1) {
      attr = item.match(...match)
    }
  })

  return {
    id: cuid(),
    text: bonus,
    ...attr,
  }
}

const getSkillData = async (skill: any) => {
  const { data } = await instance.get(skill.url)
  const $ = cheerio.load(data)

  const infobox = $('table.infobox')
  const baseStats = formatList(
    $(infobox).find('tbody tr:nth-child(4) td:not(.infoboxlabel)')
  )
  const description = stripHtml($(infobox).find('tbody tr:last-child td'))

  const ranks: any[] = []
  const rankRows = $('table.wikitable tbody tr:not(:first-child)').toArray()

  rankRows.forEach(el => {
    const [, rank, name] = /(\d) - (.*)/.exec(
      $(el).find('td:nth-child(1)').text()
    ) ?? ['', '', '']
    // const name = $(el).find('td:nth-child(1)').text().replace(/\d - /gi, '')
    const icon = $(el).find('td:nth-child(2) a img').attr('src')
    const desc = stripHtml($(el).find('td:nth-child(3)'))
    const bonuses = formatList($(el).find('td:last-child'))

    ranks.push({
      id: cuid(),
      rank: parseInt(rank, 10),
      name,
      icon,
      description: desc,
      bonuses: bonuses.map(b => getBonusData(b)),
    })
  })

  return {
    id: cuid(),
    ...skill,
    stats: baseStats,
    description,
    ranks,
  }
}

const getSkill = async (url: string, type: string) => {
  const { data } = await instance.get(url)
  const $ = cheerio.load(data)
  const skillEls = $(`h2:contains("List of ${type} skills") + ul li`).toArray()

  const skills = skillEls.map(element => {
    const el = cheerio.load(element)
    const name = el('a:not(:has(>img))').first().attr('title')
    const iconUrl = el('a:not(:has(>img))').first().attr('href')
    const skillType =
      el('a:has(>img) img').first().attr('alt') ===
      'Active Combat Skill Icon.png'
        ? 'active'
        : 'passive'

    return {
      name,
      url: iconUrl,
      type: skillType,
    }
  })

  const skillData = []
  for (const skill of skills) {
    const item = await getSkillData(skill)
    skillData.push(item)
  }

  return skillData
}

async function main() {
  const [combatSkills, bioticSkills, techSkills]: Skill[][] = await Promise.all(
    [
      getSkill('/wiki/Combat_skill', 'combat'),
      getSkill('/wiki/Biotic_skill', 'biotic'),
      getSkill('/wiki/Tech_skill', 'tech'),
    ]
  )

  let allBonuses = [...combatSkills, ...bioticSkills, ...techSkills]
    .map(skill => skill.ranks)
    .reduce((a, b) => a.concat(b), [])
    .map(rank => rank.bonuses)
    .reduce((a, b) => a.concat(b), [])
    .map(bonus => bonus.text)

  allBonuses = Array.from(new Set(allBonuses))

  await fs.writeFile(
    './src/data/allBonuses.ts',
    `${JSON.stringify(allBonuses)}`,
    {
      flag: 'w+',
    }
  )

  const content = `export interface SkillBonus {
  id: string;
  text: string;
  attribute: string;
  value: number;
}
export interface SkillRank {
  id: string;
  rank: number;
  name: string;
  icon: string;
  description: string;
  bonuses: SkillBonus[];
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

export const combatSkills: Skill[] = ${JSON.stringify(combatSkills, null, 2)}

export const techSkills: Skill[] = ${JSON.stringify(techSkills, null, 2)}

export const bioticSkills: Skill[] = ${JSON.stringify(bioticSkills, null, 2)}

  `

  await fs.writeFile('./src/data/skills.ts', content, { flag: 'w+' })
}

main()
