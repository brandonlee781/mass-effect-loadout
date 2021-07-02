import React from 'react'
import { useParams } from 'react-router-dom'
import { techSkills } from '../../data/skills'
import SkillWrapper from '../../components/SkillWrapper/SkillWrapper'

interface Params {
  skillId: string
}

const TechPage = (): JSX.Element => {
  const { skillId } = useParams<Params>()
  const skill = techSkills.find(sk => sk.id === skillId)

  return <SkillWrapper skills={techSkills} detail={skill} category="tech" />
}

export default TechPage
