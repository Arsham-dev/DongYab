/** @jsxImportSource @emotion/react */
import { useState } from 'react'
import LandingDashboard from './LandingDashboard'
import LandingHeader from './LandingHeader'
import styled from '@emotion/styled'
import Person from '../../types/person'
import Item from '../../types/items'
import LandingDashboardResult from './LandingDashboardResult'

const LandingBase = styled('div')`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`
const SepratorLine = styled('div')`
  height: 1px;
  background-color: #ebff00;
  margin: 100px 0 30px 0;
  width: calc(100% - 380px);
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
      <SepratorLine />
      <LandingDashboardResult totalMoney="5,000,000" />
    </LandingBase>
  )
}
export default Landing
