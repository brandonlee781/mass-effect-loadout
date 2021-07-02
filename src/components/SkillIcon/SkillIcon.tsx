import React from 'react'
import styled from 'styled-components'

type Props = {
  icon: string
  detonator?: boolean
  primer?: 'cryo' | 'fire' | 'tech' | 'biotic'
  height: number
  width: number
}

const Combo = styled.img<{
  primer?: boolean
  detonator?: boolean
  left?: number
}>`
  position: absolute;
  height: 20px;
  width: 20px;
  object-fit: contain;
  left: ${props => (props.detonator ? `${(props.left || 64) - 14}px` : '0')};
  top: -6px;
`

const SkillIcon = (props: Props): JSX.Element => {
  const { icon, detonator, primer = '', height, width } = props
  const primerImg = `/src/assets/icons/${
    primer.charAt(0).toUpperCase() + primer.slice(1)
  }_Primer_Icon.png`
  return (
    <div style={{ position: 'relative' }}>
      <img
        className="icon"
        src={`/src/assets/icons/${icon}`}
        alt={icon}
        style={{ height, width }}
      />
      {detonator && (
        <Combo
          detonator={!!detonator}
          src="/src/assets/icons/Detonator_Icon.png"
          alt="Detonator Icon"
          left={width}
        />
      )}
      {primer && (
        <Combo primer={!!primer} src={primerImg} alt="Detonator Icon" />
      )}
    </div>
  )
}

export default SkillIcon
