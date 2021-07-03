import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components'

import { ListItem, List } from '../../components/SkillWrapper/SkillWrapper'
import SkillListItem from '../../components/SkillListItem/SkillListItem'
import { useRanks } from '../../context/ranks.context'

import { combatSkills, bioticSkills, techSkills } from '../../data/skills'

const ListLink = styled(Link)`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  text-align: right;
  color: #51c2bc;
  margin-right: 4px;
  text-transform: uppercase;
  font-weight: 500;

  &:hover {
    color: white;
  }
`

const Main = (): JSX.Element => {
  const { urlString } = useParams<{ urlString?: string }>()
  const { importRanks, skillString } = useRanks()
  const [comRanks, bioRanks, techRanks] = skillString.split('-')

  useEffect(() => {
    if (urlString?.length) {
      importRanks(urlString)
    }
  }, [urlString])

  return (
    <nav className="w-full flex flex-row justify-around">
      <List>
        {combatSkills.map((sk, i) => (
          <ListItem key={sk.id} padding={0}>
            <SkillListItem skill={sk} rank={comRanks[i]} category="combat" />
          </ListItem>
        ))}
      </List>
      <List>
        {bioticSkills.map((sk, i) => (
          <ListItem key={sk.id} padding={0}>
            <SkillListItem skill={sk} rank={bioRanks[i]} category="biotic" />
          </ListItem>
        ))}
      </List>
      <List>
        {techSkills.map((sk, i) => (
          <ListItem key={sk.id} padding={0}>
            <SkillListItem skill={sk} rank={techRanks[i]} category="tech" />
          </ListItem>
        ))}
      </List>
    </nav>
  )
}

export default Main
