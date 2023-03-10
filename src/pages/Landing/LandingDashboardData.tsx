/** @jsxImportSource @emotion/react */
import React from 'react'
import styled from '@emotion/styled'
import Button from './components/Button'
import InfoItemContainer from './components/InfoItem/InfoItemContainer'
import Item from '../../types/items'
import Person from '../../types/person'
const ButtonConatiner = styled('div')`
  margin: 0 45px;
  @media (max-width: 420px) {
    margin: 0;
    width: 100%;
  }
`
const LandingDashboardDataBase = styled('div')`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: flex-start;
  justify-items: center;
  margin-top: 28px;
  @media (max-width: 420px) {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    row-gap: 10px;
  }
`

interface LandingDashboardDataProps {
  items: Item[]
  persons: Person[]
  removeItem: (index: number) => void
  removePerson: (index: number) => void
}
const LandingDashboardData: React.FC<LandingDashboardDataProps> = ({
  items,
  persons,
  removeItem,
  removePerson
}) => {
  return (
    <LandingDashboardDataBase>
      <InfoItemContainer data={persons} removeFunction={removePerson} />
      <ButtonConatiner>
        <Button title="محاسبه دنگ" size="medium" />
      </ButtonConatiner>
      <InfoItemContainer data={items} removeFunction={removeItem} />
    </LandingDashboardDataBase>
  )
}
export default LandingDashboardData
