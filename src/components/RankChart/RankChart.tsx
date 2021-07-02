/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from 'react'

import styled from 'styled-components'
import { useRanks } from '../../context/ranks.context'
import { SkillRank } from '../../data/skills'

import Rank from '../RankChartItem/RankChartItem'

type Props = {
  ranks: SkillRank[]
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 200px 30px 200px;
  grid-template-rows: repeat(6, min-content);
  gap: 8px;

  .rank {
    grid-column: 1 span 1;
  }
  .rank-1,
  .rank-2,
  .rank-3 {
    grid-column: 1 / span 3;
    align-self: center;
  }
  .rank-4-2,
  .rank-5-2,
  .rank-6-2 {
    grid-column: 3 / span 1;
  }

  .divider {
    margin-top: 16px;
  }
`

const RankChart = (props: Props): JSX.Element => {
  const { ranks: selectedRanks, setRanks } = useRanks()
  const { ranks } = props

  const isActive = (id: string) => selectedRanks.includes(id)
  const isDisabled = (rank: number) => {
    if (rank === 4.1)
      return selectedRanks.includes(ranks.find(r => r.rank === 4.2)!.id)
    if (rank === 4.2)
      return selectedRanks.includes(ranks.find(r => r.rank === 4.1)!.id)
    if (rank === 5.1)
      return selectedRanks.includes(ranks.find(r => r.rank === 5.2)!.id)
    if (rank === 5.2)
      return selectedRanks.includes(ranks.find(r => r.rank === 5.1)!.id)
    if (rank === 6.1)
      return selectedRanks.includes(ranks.find(r => r.rank === 6.2)!.id)
    if (rank === 6.2)
      return selectedRanks.includes(ranks.find(r => r.rank === 6.1)!.id)

    return false
  }
  const isTop = (rank: number) =>
    Number(rank - Math.floor(rank)).toFixed(1) === '0.1'

  const onRankClick = (id: string) => {
    const selected = ranks.find(r => r.id === id)!
    const highestRanked = ranks
      .filter(r => selectedRanks.includes(r.id))
      .sort((a, b) => {
        if (a.rank < b.rank) return 1
        if (a.rank > b.rank) return -1
        return 0
      })[0]

    if (
      !highestRanked ||
      highestRanked.id === id ||
      Math.floor(selected.rank - 1) === Math.floor(highestRanked.rank)
    ) {
      setRanks(id)
    }
  }

  return (
    <Wrapper>
      {ranks.map((rank, index) => (
        <>
          <Rank
            key={rank.id}
            rank={rank}
            active={isActive(rank.id)}
            disabled={isDisabled(rank.rank)}
            topRow={isTop(rank.rank)}
            setRanks={onRankClick}
          />
          {index === 3 || index === 5 || index === 7 ? (
            <span className="divider">OR</span>
          ) : (
            ''
          )}
        </>
      ))}
    </Wrapper>
  )
}

export default RankChart
