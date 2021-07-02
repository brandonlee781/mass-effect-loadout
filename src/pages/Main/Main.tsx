import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components'

import { FaFolderOpen } from 'react-icons/fa'
import {
  ListItem,
  List,
  getItemDistance,
} from '../../components/SkillWrapper/SkillWrapper'
import { useRanks } from '../../context/ranks.context'

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
  const { importRanks } = useRanks()

  useEffect(() => {
    if (urlString?.length) {
      importRanks(urlString)
    }
  }, [urlString])

  return (
    <nav>
      <List>
        <ListItem padding={getItemDistance(1)}>
          <ListLink to="/mass-effect-loadout/combat">
            <FaFolderOpen className="mr-1" />
            <span>Combat</span>
          </ListLink>
        </ListItem>
        <ListItem padding={getItemDistance(2)}>
          <ListLink to="/mass-effect-loadout/biotic">
            <FaFolderOpen className="mr-1" />
            <span>Biotic</span>
          </ListLink>
        </ListItem>
        <ListItem padding={getItemDistance(3)}>
          <ListLink to="/mass-effect-loadout/tech">
            <FaFolderOpen className="mr-1" />
            <span>Tech</span>
          </ListLink>
        </ListItem>
      </List>
    </nav>
  )
}

export default Main
