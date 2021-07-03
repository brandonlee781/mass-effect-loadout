import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { orders } from '../../context/ranks.context'
import { Skill } from '../../data/skills'

import RankSymbol from '../RankSymbol/RankSymbol'

interface Props {
  skill: Skill
  category: 'combat' | 'biotic' | 'tech'
  rank: string
}

const Name = styled.span`
  color: #51c2bc;
  margin-right: 4px;
  text-transform: uppercase;
  font-weight: 500;
`

const getRanks = () => new Array(6).fill(false)

const SkillListItem = (props: Props): JSX.Element => {
  const { skill, category, rank } = props
  const ranks = getRanks()

  let skillRanks: number[] = []
  Object.keys(orders).forEach(key => {
    if (rank !== '0' && orders[key] === rank) {
      skillRanks = key.split('-').map(str => +str)
    }
  })

  return (
    <Link
      to={`/mass-effect-loadout/${category}/${skill.id}`}
      className="flex flex-row flex-nowrap items-center justify-end"
    >
      <Name>{skill.name}</Name>
      {ranks.map((_, index) => (
        <RankSymbol
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          type={skill.type}
          category={category}
          rank={skillRanks[index]}
        />
      ))}
    </Link>
  )
}

export default SkillListItem
