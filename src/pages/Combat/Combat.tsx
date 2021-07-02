import React from 'react'
import { useParams } from 'react-router-dom'
import { combatSkills } from '../../data/skills'
import SkillWrapper from '../../components/SkillWrapper/SkillWrapper'

interface Params {
  skillId: string
}

const CombatPage = (): JSX.Element => {
  const { skillId } = useParams<Params>()
  const skill = combatSkills.find(sk => sk.id === skillId)

  return <SkillWrapper skills={combatSkills} detail={skill} category="combat" />
}

export default CombatPage
