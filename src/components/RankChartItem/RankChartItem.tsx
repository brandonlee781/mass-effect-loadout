/* eslint-disable react/no-array-index-key */
import React, { PropsWithChildren, useMemo } from 'react'
import styled from 'styled-components'
import { SkillRank, SkillStats } from '../../data/skills'
import useMousePosition from '../../hooks/useMousePosition'
import { getDescription } from '../SkillDetail/SkillDetail'
import SkillIcon from '../SkillIcon/SkillIcon'

const RankItem = styled.div<{
  active: boolean
  disabled: boolean
  topRow: boolean
}>`
  display: flex;
  flex-flow: column;
  text-align: ${props => (props.topRow ? 'right' : 'left')};
  cursor: pointer;

  &.rank-1,
  &.rank-2,
  &.rank-3 {
    display: grid;
    grid-template-columns: 200px 1fr;
    grid-template-rows: 28px 1fr;
    gap: 0 8px;

    .image-wrapper {
      grid-row: 1 / span 2;
      margin-left: auto;
    }
  }

  &.rank-4-1,
  &.rank-5-1,
  &.rank-6-1 {
    align-items: flex-end;
  }

  &.rank-4-2,
  &.rank-5-2,
  &.rank-6-2 {
    align-items: flex-start;
  }

  .image-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 64px;
    width: 64px;
    padding: 4px;
    border: solid 2px transparent;
    border-radius: 50%;
    ${({ active }) =>
      !active &&
      `
    opacity: 0.6;
  `}

    img {
      ${props => props.disabled && 'filter: grayscale(100%)'}
    }
  }

  &:hover .image-wrapper {
    border-color: rgba(255, 255, 255, 0.6);
  }

  .detail-card {
  }
  &:hover .detail-card {
    display: flex;
  }
`

const DetailCard = styled.div.attrs({
  className: 'rounded overflow-hidden shadow-lg detail-card',
})`
  display: none;
  position: absolute;
  flex-flow: column nowrap;
  align-items: flex-start !important;
  width: 20rem;
  padding: 8px;
  background-color: rgb(54, 53, 53);
  border: 1px solid rgba(255, 255, 255, 0.12);
  opacity: 1 !important;
  z-index: 3;
  text-align: left;

  .header {
    display: grid;
    grid-template-columns: 48px 1fr;
    grid-template-rows: 28px 1fr;
    gap: 0 8px;
    margin-bottom: 8px;

    img {
      grid-row: 1 / span 2;
      align-self: center;
    }

    .name {
      grid-column: 2 / span 1;
      grid-row: 2 / span 1;
    }
  }
`

// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface RankProps extends PropsWithChildren<any> {
  rank: SkillRank
  active: boolean
  disabled: boolean
  topRow?: boolean
  setRanks: (id: string) => void
}
const RankChartItem = (props: RankProps): JSX.Element => {
  const { rank, active, disabled, topRow = false, setRanks } = props
  const rankText = `rank rank-${rank.rank}`.replace('.', '-')
  const { x, y } = useMousePosition()

  const onClickRank = () => {
    if (!disabled) {
      setRanks(rank.id)
    }
  }

  const rankStats = useMemo<SkillStats>(() => {
    let tempStats = {}
    rank.bonuses?.forEach(b => {
      if (b.bonus) {
        tempStats = b.bonus(tempStats)
      }
    })
    return tempStats
  }, [rank])

  const bonuses = useMemo(
    () =>
      rank.bonuses
        ?.map(b => {
          if (b.showText !== false) {
            return b.text(rankStats)
          }
          return b.text({})
        })
        .filter(Boolean) ?? [],
    [rank, rankStats]
  )

  const description = getDescription(rank.description)

  return (
    <RankItem
      className={rankText}
      active={active}
      disabled={disabled}
      topRow={topRow}
      onClick={onClickRank}
    >
      <div className="image-wrapper">
        <SkillIcon
          icon={rank.icon}
          primer={rankStats.primer}
          detonator={rankStats.detonator}
          height={48}
          width={48}
        />
      </div>
      <span className="rank">Rank {Math.floor(rank.rank)}</span>
      <span className="name">{rank.name}</span>

      <DetailCard style={{ top: y, left: x - 336 }}>
        <div className="header">
          <SkillIcon
            icon={rank.icon}
            primer={rankStats.primer}
            detonator={rankStats.detonator}
            height={48}
            width={48}
          />
          <span className="rank">Rank {Math.floor(rank.rank)}</span>
          <span className="name">{rank.name}</span>
        </div>
        <div
          className="mb-5"
          dangerouslySetInnerHTML={{ __html: description }}
        />
        {bonuses.map((bonus, i) => (
          <div key={i} className="highlight">
            {bonus}
          </div>
        ))}
      </DetailCard>
    </RankItem>
  )
}

export default RankChartItem
