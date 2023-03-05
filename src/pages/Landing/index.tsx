/** @jsxImportSource @emotion/react */
import { useState } from 'react'
import LandingDashboard from './LandingDashboard'
import LandingHeader from './LandingHeader'
import styled from '@emotion/styled'
import Person from '../../types/person'
import Item from '../../types/items'

const LandingBase = styled('div')`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`
const Landing = () => {
  const [persons, setpersons] = useState<Person[]>([])
  const [items, setitems] = useState<Item[]>([])
  return (
    <LandingBase>
      <LandingHeader />
      <LandingDashboard
        persons={persons}
        setpersons={setpersons}
        items={items}
        setitems={setitems}
      />
    </LandingBase>
  )
}
export default Landing
