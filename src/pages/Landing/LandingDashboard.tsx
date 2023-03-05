/** @jsxImportSource @emotion/react */
import React from 'react'
import LandingDashboardInputs from './LandingDashboardInputs'
import LandingDashboardData from './LandingDashboardData'
import styled from '@emotion/styled'
import Person from '../../types/person'
import Item from '../../types/items'

const LandingDashboardBase = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
`

interface LandingDashboardProps {
  persons: Person[]
  setpersons: React.Dispatch<React.SetStateAction<Person[]>>
  items: Item[]
  setitems: React.Dispatch<React.SetStateAction<Item[]>>
}
const LandingDashboard: React.FC<LandingDashboardProps> = ({
  persons,
  setpersons,
  items,
  setitems
}) => {
  const removeItem = (index: number) => {
    const newItems = [...items]
    newItems.splice(index, 1)
    setitems(newItems)
  }
  const removePerson = (index: number) => {
    const newPersons = [...persons]
    newPersons.splice(index, 1)
    setpersons(newPersons)
  }
  return (
    <LandingDashboardBase>
      <LandingDashboardInputs
        items={items}
        setitems={setitems}
        persons={persons}
        setpersons={setpersons}
      />
      <LandingDashboardData
        items={items}
        persons={persons}
        removeItem={removeItem}
        removePerson={removePerson}
      />
    </LandingDashboardBase>
  )
}
export default LandingDashboard
