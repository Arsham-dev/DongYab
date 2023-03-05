/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react'
import styled from '@emotion/styled'
import Button from './components/Button'
const ButtonConatiner = styled('div')`
  margin: 45px 0;
`
const LandingDashboardData = () => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        margin-top: 28px;
      `}>
      <div />
      <ButtonConatiner>
        <Button title="محاسبه دنگ" size="medium" />
      </ButtonConatiner>
      <div />
    </div>
  )
}
export default LandingDashboardData
