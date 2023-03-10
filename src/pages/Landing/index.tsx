/** @jsxImportSource @emotion/react */
import { useState } from 'react'
import LandingDashboard from './LandingDashboard'
import LandingHeader from './LandingHeader'
import styled from '@emotion/styled'
import Person from '../../types/person'
import Item from '../../types/items'
import LandingDashboardResult from './LandingDashboardResult'
import PersonResult from '../../types/personResult'

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
  @media (max-width: 420px) {
    width: calc(100% - 60px);
    margin: 20px 40px;
  }
`
const Landing = () => {
  const [persons, setpersons] = useState<Person[]>([])
  const [items, setitems] = useState<Item[]>([])
  const [personsResult, setpersonsResult] = useState<PersonResult[]>([
    {
      name: 'آرشام رمضانی',
      moneyShouldPay: '443,312',
      paidMoney: '454,777',
      totalMoney: '912,453',
      shouldPay: true,
      items: [{ price: '34,234', title: 'چیپس' }]
    }
  ])
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
      <LandingDashboardResult
        totalMoney="5,000,000"
        personsResult={personsResult}
      />
    </LandingBase>
  )
}
export default Landing
