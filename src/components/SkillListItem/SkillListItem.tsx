import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
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

  let rankNum = parseInt(rank, 18)

  if (rankNum > 3 && rankNum <= 5) rankNum = 4
  if (rankNum > 5 && rankNum <= 9) rankNum = 5
  if (rankNum > 9) rankNum = 6

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
          active={index < rankNum}
        />
      ))}
    </Link>
  )
}

export default SkillListItem
