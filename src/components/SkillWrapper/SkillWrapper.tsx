import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { FaFolderOpen } from 'react-icons/fa'
import { useRanks } from '../../context/ranks.context'
import { Skill } from '../../data/skills'

import SkillListItem from '../SkillListItem/SkillListItem'
import SkillDetail from '../SkillDetail/SkillDetail'

type Props = {
  skills: Skill[]
  detail: Skill | undefined
  category: 'combat' | 'biotic' | 'tech'
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 20rem 1fr;
`
const SkillPoints = styled.div`
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.6);
  font-weight: 500;
  text-align: right;
  padding-right: 8px;

  .points {
    color: rgb(81, 194, 188);
  }
`
export const List = styled.ul``
export const ListItem = styled.li<{ padding: number }>`
  --right: 18px;
  margin-right: ${props => `${props.padding}px`};
  border-top-right-radius: var(--right);
  border-bottom-right-radius: var(--right);
  padding: 6px var(--right);

  &:hover {
    background: radial-gradient(
      circle at 0%,
      transparent,
      rgba(81, 194, 188, 0.2) 50%,
      rgba(81, 194, 188, 0.4) 75%,
      rgba(81, 194, 188, 0.7)
    );

    span {
      color: white;
    }
  }
`
const Controls = styled.div`
  position: fixed;
  bottom: 64px;
  right: 0;
  left: 0;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;

  & button {
    padding: 16px;
    border: 1px solid rgba(255, 255, 255, 0.4);
    border-radius: 10px;
    color: rgba(255, 255, 255, 0.4);
  }
`
const Title = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: flex-end;
  font-size: 1.2rem;
  color: white;
  font-weight: 500;
  padding-right: 8px;
  text-transform: uppercase;

  .folder {
    color: rgb(81, 194, 188);
  }
`

export const getItemDistance = (i: number): number => Math.log10(i) * 48

const SkillWrapper = (props: Props): JSX.Element => {
  const { skillString, skillCounts, encodedString } = useRanks()
  const history = useHistory()
  const { skills, detail, category } = props
  let ranks = ''

  /* eslint-disable @typescript-eslint/no-extra-semi */
  if (category === 'combat') {
    ;[ranks] = skillString.split('-')
  }
  if (category === 'biotic') {
    ;[, ranks] = skillString.split('-')
  }
  if (category === 'tech') {
    ;[, , ranks] = skillString.split('-')
  }
  /* eslint-enable @typescript-eslint/no-extra-semi */

  const listDistance = (i: number) => {
    if (i <= 6) return getItemDistance(i + 1)
    if (i >= 7) return getItemDistance(Math.abs(12 - i))
    return 0
  }

  const shareLoadout = () => {
    navigator.clipboard.writeText(encodedString).then(() => {
      alert('Successfully Copied')
    })
  }

  return (
    <Wrapper>
      <div>
        <Title>
          <FaFolderOpen className="folder mr-1" /> <span>{category}</span>
        </Title>
        <SkillPoints>
          <span className="points">{skillCounts[category]} Points </span>
          <span>Invested in skills</span>
        </SkillPoints>
        <List>
          {skills.map((sk, i) => (
            <ListItem key={sk.id} padding={listDistance(i)}>
              <SkillListItem skill={sk} rank={ranks[i]} category={category} />
            </ListItem>
          ))}
        </List>
      </div>

      {detail?.id && <SkillDetail skill={detail} category="biotic" />}

      <Controls>
        <button
          className="h-16 mr-4"
          type="button"
          onClick={() => history.push('/mass-effect-loadout')}
        >
          Back
        </button>
        <button className="h-16" type="button" onClick={shareLoadout}>
          <div className="mb-1 text-xs leading-none">Share Loadout:</div>
          <div className="text-xs leading-none">{encodedString}</div>
        </button>
      </Controls>
    </Wrapper>
  )
}

export default SkillWrapper
