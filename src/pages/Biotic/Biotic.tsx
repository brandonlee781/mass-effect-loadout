import React from 'react'
import { useParams } from 'react-router-dom'
import { bioticSkills } from '../../data/skills'
import SkillWrapper from '../../components/SkillWrapper/SkillWrapper'

interface Params {
  skillId: string
}

const BioticPage = (): JSX.Element => {
  const { skillId } = useParams<Params>()
  const skill = bioticSkills.find(sk => sk.id === skillId)

  return <SkillWrapper skills={bioticSkills} detail={skill} category="biotic" />
}

export default BioticPage
