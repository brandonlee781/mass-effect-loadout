import React from 'react'
import styled from 'styled-components'

export type RankBorder = 'top' | 'bottom' | null
interface Props {
  type: 'active' | 'passive'
  category: 'combat' | 'biotic' | 'tech'
  rank: number | undefined
}

const CircleBorder = styled.circle<{ loc: RankBorder }>`
  fill: transparent;
  stroke-width: 2;
  stroke-dasharray: 510;
  stroke-dashoffset: ${({ loc }) => (loc === 'top' ? 1002 : 491)}; ;
`

const RankSymbol = (props: Props): JSX.Element => {
  const size = 14
  const { type, category, rank } = props

  let color = ''

  let rankBorder: RankBorder = null
  if (rank && rank > 3 && (rank - Math.floor(rank)).toFixed(1) === '0.1') {
    rankBorder = 'top'
  } else if (
    rank &&
    rank > 3 &&
    (rank - Math.floor(rank)).toFixed(1) === '0.2'
  ) {
    rankBorder = 'bottom'
  }

  switch (category) {
    case 'combat':
      color = '#C65953'
      break
    case 'biotic':
      color = '#8F88BF'
      break
    case 'tech':
      color = '#C38867'
      break
    default:
      break
  }

  return (
    <div
      className="flex items-center justify-center"
      style={{ margin: '0 1px' }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox={`0 0 ${size} ${size}`}
        style={{
          height: size + 4,
          width: size + 4,
          marginTop: 2,
          opacity: rank ? 1 : 0.4,
        }}
      >
        {type === 'active' && (
          <circle
            r={size / 3}
            cy={size / 2}
            cx={size / 2}
            strokeWidth="0"
            fill={color}
          />
        )}
        {rankBorder && type === 'active' && (
          <CircleBorder
            r={size - 8}
            cy={size / 2}
            cx={size / 2}
            stroke={color}
            loc={rankBorder}
          />
        )}
        {type === 'passive' && (
          <polygon
            points={`3 3,${size - 3} 3, ${size / 2} ${size - 3}`}
            fill={color}
          />
        )}
        {rankBorder === 'top' && type === 'passive' && (
          <polygon
            points={`1 0, ${size - 1} 0`}
            stroke={color}
            fill="transparent"
            strokeWidth="4"
          />
        )}
        {rankBorder === 'bottom' && type === 'passive' && (
          <>
            <polygon
              points={`1 3, ${size / 2} ${size}`}
              stroke={color}
              fill="transparent"
              strokeWidth="2"
            />
            <polygon
              points={`${size / 2} ${size}, ${size - 1} 3`}
              stroke={color}
              fill="transparent"
              strokeWidth="2"
            />
          </>
        )}
      </svg>
    </div>
  )
}

export default RankSymbol
