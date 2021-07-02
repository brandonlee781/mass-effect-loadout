import React from 'react'

interface Props {
  type: 'active' | 'passive'
  category: 'combat' | 'biotic' | 'tech'
  active: boolean
}

const RankSymbol = (props: Props): JSX.Element => {
  const size = 10
  const { type, category, active } = props

  let color = ''

  switch (category) {
    case 'combat':
      color = '#C65953'
      // inactiveColor = '#683134'
      break
    case 'biotic':
      color = '#8F88BF'
      // inactiveColor = '#4D4B63'
      break
    case 'tech':
      color = '#C38867'
      // inactiveColor = '#654B3B'
      break
    default:
      break
  }
  // const color = active ? activeColor : inactiveColor

  return (
    <div
      className="flex items-center justify-center"
      style={{ margin: '0 1px' }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox={`0 0 ${size} ${size}`}
        style={{
          height: size,
          width: size,
          marginTop: 2,
          opacity: active ? 1 : 0.4,
        }}
      >
        {type === 'active' && (
          <circle
            r={size / 2}
            cy={size / 2}
            cx={size / 2}
            strokeWidth="0"
            fill={color}
          />
        )}
        {type === 'passive' && (
          <polygon points={`0 0,${size} 0, ${size / 2} ${size}`} fill={color} />
        )}
      </svg>
    </div>
  )
}

export default RankSymbol
