import React, { ReactNode, useMemo, useState } from 'react'
import LZUTF8 from 'lzutf8'
import { combatSkills, techSkills, bioticSkills, Skill } from '../data/skills'

type RanksContextResponse = {
  skillString: string
  skillCounts: {
    combat: number
    tech: number
    biotic: number
  }
  ranks: string[]
  encodedString: string
  setRanks: (id: string) => void
  importRanks: (str: string) => void
}

type Props = {
  children: ReactNode
}

const orders: { [key: string]: string } = {
  '': '0',
  '1': '1',
  '1-2': '2',
  '1-2-3': '3',
  '1-2-3-4.1': '4',
  '1-2-3-4.2': '5',
  '1-2-3-4.1-5.1': '6',
  '1-2-3-4.1-5.2': '7',
  '1-2-3-4.2-5.1': '8',
  '1-2-3-4.2-5.2': '9',
  '1-2-3-4.1-5.1-6.1': 'a',
  '1-2-3-4.1-5.1-6.2': 'b',
  '1-2-3-4.1-5.2-6.1': 'c',
  '1-2-3-4.1-5.2-6.2': 'd',
  '1-2-3-4.2-5.1-6.1': 'e',
  '1-2-3-4.2-5.1-6.2': 'f',
  '1-2-3-4.2-5.2-6.1': 'g',
  '1-2-3-4.2-5.2-6.2': 'h',
}

const getRankOrders = (rankString: string) => {
  let order = ''
  Object.keys(orders).forEach(o => {
    if (orders[o] === rankString) {
      order = o
    }
  })
  return order.split('-')
}

const getRankString = (skillArray: Skill[], ranks: string[]) =>
  skillArray
    .map(sk => {
      const r = sk.ranks
        .filter(item => ranks.includes(item.id))
        .sort((a, b) => {
          if (a.rank < b.rank) return -1
          if (a.rank > b.rank) return 1
          return 0
        })
        .map(ran => ran.rank)
        .join('-')
      return orders[r] || '0'
    })
    .join('')

const getSkillCount = (skillArray: Skill[], ranks: string[]) => {
  const selected = skillArray
    .map(s => s.ranks)
    .reduce((a, b) => a.concat(b), [])
    .filter(r => ranks.includes(r.id))

  return selected.reduce((a, b) => a + Math.floor(b.rank), 0) ?? 0
}

export const RanksContext = React.createContext<RanksContextResponse>({
  skillString: '',
  skillCounts: { combat: 0, tech: 0, biotic: 0 },
  ranks: [],
  encodedString: '',
  setRanks: () => {}, // eslint-disable-line
  importRanks: () => {},// eslint-disable-line
})

export const RanksProvider = ({ children }: Props): JSX.Element => {
  const [encodedString, setEncodedString] = useState('')
  const [ranks, setRanksState] = useState<string[]>([])

  const importRanks = (urlString: string) => {
    const decodedString = LZUTF8.decompress(urlString, {
      inputEncoding: 'Base64',
    })
    const [combatStr, bioticStr, techStr]: string[] = decodedString.split('-')

    const setRanks = (string: string, skillArray: Skill[]) => {
      string.split('').forEach((str, index) => {
        const skill = skillArray[index]
        const order = getRankOrders(str)
        const selectedRanks = skill.ranks
          .filter(rank => order.includes(`${rank.rank}`))
          .map(rank => rank.id)

        if (selectedRanks.length) {
          setRanksState(prevRanks =>
            Array.from(new Set([...prevRanks, ...selectedRanks]))
          )
        }
      })
    }
    setRanks(combatStr, combatSkills)
    setRanks(bioticStr, bioticSkills)
    setRanks(techStr, techSkills)
  }

  const skillString = useMemo(() => {
    const combatSkillString = getRankString(combatSkills, ranks)
    const bioticSkillString = getRankString(bioticSkills, ranks)
    const techSkillString = getRankString(techSkills, ranks)
    const str = `${combatSkillString}-${bioticSkillString}-${techSkillString}`
    setEncodedString(LZUTF8.compress(str, { outputEncoding: 'Base64' }))

    return str
  }, [ranks])

  const skillCounts = useMemo(
    () => ({
      combat: getSkillCount(combatSkills, ranks),
      tech: getSkillCount(techSkills, ranks),
      biotic: getSkillCount(bioticSkills, ranks),
    }),
    [ranks]
  )

  const setRanks = (id: string) => {
    setRanksState(prevRanks => {
      if (prevRanks.includes(id)) {
        return prevRanks.filter(r => r !== id)
      }
      return [...prevRanks, id]
    })
  }

  return (
    <RanksContext.Provider
      value={{
        skillString,
        ranks,
        setRanks,
        skillCounts,
        importRanks,
        encodedString,
      }}
    >
      {children}
    </RanksContext.Provider>
  )
}

export const useRanks = (): RanksContextResponse =>
  React.useContext(RanksContext)
