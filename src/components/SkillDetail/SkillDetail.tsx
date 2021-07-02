/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-danger */
import React, { useEffect, useState, useMemo } from 'react'
import styled from 'styled-components'
import { useRanks } from '../../context/ranks.context'
import { Skill, SkillRank, SkillStats } from '../../data/skills'
import RankChart from '../RankChart/RankChart'
import SkillIcon from '../SkillIcon/SkillIcon'

interface Props {
  skill: Skill
  category: 'combat' | 'biotic' | 'tech'
}

const Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  color: #78afa1;
  font-weight: 500;
  font-size: 1.2rem;
  padding-left: 16px;

  & .highlight {
    color: #97c96e;
  }
`

const Title = styled.div`
  position: relative;
  display: grid;
  grid-template-areas:
    'icon name'
    'icon category';
  grid-template-columns: 64px 1fr;
  grid-template-rows: 36px 28px;

  .icon {
    grid-area: icon;
  }

  .name {
    grid-area: name;
    padding-left: 12px;
    font-size: 32px;
    color: white;
  }

  .category {
    grid-area: category;
    padding-left: 24px;
    text-transform: capitalize;
    color: rgba(255, 255, 255, 0.6);
  }
`

export const getDescription = (desc: string): string =>
  desc
    .replace(/\n/gi, '<br />')
    .replace(
      /(TAP BUTTON:)|(HOLD BUTTON:)|((?:trigger|triggers) combo detonations)(combo detonators)/gi,
      '<span class="highlight">$&</span>'
    )
    .replace(
      /((?:primed|priming|primes|prime)(?:\sthem\s|\senemies\s|\sthe\starget\s|\s)for combo detonations)/gi,
      '<span class="highlight">$&</span>'
    )
    .replace(
      /((?:trigger\s|triggers\s|detonates\s|detonate\s|)combo (?:detonations|detonators|primers))/gi,
      '<span class="highlight">$&</span>'
    )

const SkillDetail = (props: Props): JSX.Element => {
  const { skill, category } = props
  const { ranks, skillCounts } = useRanks()

  const [stats, setStats] = useState<SkillStats>({})
  const [bonuses, setBonuses] = useState([])

  const getBonuses = (rankArray: SkillRank[]) => {
    if (!rankArray || !rankArray.length) return
    let tempStats = {}
    const tempBonuses: any = []
    rankArray.forEach(rank => {
      rank.bonuses?.forEach(bonus => {
        if (bonus.bonus) {
          tempStats = bonus.bonus(tempStats, skillCounts[category])
          if (bonus.showText !== false) {
            tempBonuses.push(bonus.text)
          }
        }
      })
    })
    setStats(tempStats)
    setBonuses(
      Array.from(
        new Set(
          tempBonuses.map((t: (obj: SkillStats) => string) => t(tempStats))
        )
      )
    )
  }

  const firstRank = skill.ranks[0]

  if (!skill?.id) {
    return <span>No Such Skill</span>
  }

  useEffect(() => {
    const selectedRanks = skill.ranks.filter(r => ranks.includes(r.id))
    getBonuses(selectedRanks.length ? selectedRanks : [firstRank])
  }, [skill.id, ranks])

  const description = useMemo(
    () => getDescription(skill.description),
    [skill.id]
  )

  return (
    <Wrapper>
      <div>
        <Title>
          <SkillIcon
            icon={firstRank.icon}
            detonator={stats.detonator}
            primer={stats.primer}
            height={64}
            width={64}
          />
          <span className="name">{skill.name}</span>
          <span className="category">{category} Power</span>
        </Title>
        <div
          className="mb-5"
          dangerouslySetInnerHTML={{ __html: description }}
        />
        {bonuses.map((bonus, i) => (
          <div key={i} className="highlight">
            {bonus}
          </div>
        ))}
      </div>
      <RankChart ranks={skill.ranks} />
    </Wrapper>
  )
}

export default SkillDetail
