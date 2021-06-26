import axios from 'axios'
import cheerio, { Cheerio, Element } from 'cheerio'
import cuid from 'cuid'
import fs from 'fs/promises'

const instance = axios.create({
  baseURL: 'https://masseffectandromeda.fandom.com'
})

interface SkillRank {
  id: string;
  rank: number;
  name: string;
  icon: string;
  description: string;
  bonuses: string[];
}
interface Skill {
  id: string;
  name: string;
  url: string;
  type: 'active' | 'passive';
  stats: string[];
  description: string;
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

const getSkillData = async (skill: any) => {
  const { data } = await instance.get(skill.url)
  const $ = cheerio.load(data)

  const infobox = $('table.infobox')
  const baseStats = formatList($(infobox).find('tbody tr:nth-child(4) td:not(.infoboxlabel)'))
  const description = stripHtml($(infobox).find('tbody tr:last-child td'))

  const ranks: any[] = []
  const rankRows = $('table.wikitable tbody tr:not(:first-child)').toArray()

  rankRows.forEach(el => {
    const [, rank, name] = /(\d) - (.*)/.exec($(el).find('td:nth-child(1)').text()) ?? ['', '', '']
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
      bonuses,
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
    const url = el('a:not(:has(>img))').first().attr('href')
    const type = el('a:has(>img) img').first().attr('alt') === 'Active Combat Skill Icon.png' ? 'active' : 'passive'

    return {
      name,
      url,
      type,
    }
  })

  const skillData = []
  for (let skill of skills) {
    const item = await getSkillData(skill)
    skillData.push(item)
  }

  return skillData
}

async function main() {
  const [
    combatSkills,
    bioticSkills,
    techSkills,
  ]: Skill[][] = await Promise.all([
    getSkill('/wiki/Combat_skill', 'combat'),
    getSkill('/wiki/Biotic_skill', 'biotic'),
    getSkill('/wiki/Tech_skill', 'tech')
  ])

  const content = `export interface SkillRank {
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

export const combatSkills: Skill[] = ${JSON.stringify(combatSkills, null, 2)}

export const techSkills: Skill[] = ${JSON.stringify(techSkills, null, 2)}

export const bioticSkills: Skill[] = ${JSON.stringify(bioticSkills, null, 2)}

  `

  await fs.writeFile('./src/data/skills.ts', content, { flag: 'w+' })
}


main()