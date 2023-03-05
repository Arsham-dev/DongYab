/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react'
import styled from '@emotion/styled'
import Button from './components/Button'
import InfoItemContainer from './components/InfoItem/InfoItemContainer'
const ButtonConatiner = styled('div')`
  margin: 0 45px;
`
const firstMockData = [
  {
    title: 'چیپس',
    price: '150,000'
  },
  {
    title: 'پفک',
    price: '200,000'
  },
  {
    title: 'اجاره خانه',
    price: '1,000,000'
  }
]
const seondMockData = [
  {
    title: 'آرشام رمضانی',
    price: '150,000'
  },
  {
    title: 'محمد رفیعی',
    price: '200,000'
  },
  {
    title: 'دانیال فرهانی',
    price: '1,000,000'
  }
]
const LandingDashboardData = () => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-around;
        margin-top: 28px;
        margin-bottom: 100px;
      `}>
      <InfoItemContainer data={firstMockData} />
      <ButtonConatiner>
        <Button title="محاسبه دنگ" size="medium" />
      </ButtonConatiner>
      <InfoItemContainer data={seondMockData} />
    </div>
  )
}
export default LandingDashboardData
