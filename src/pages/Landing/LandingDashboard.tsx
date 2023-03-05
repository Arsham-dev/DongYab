/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import LandingDashboardInputs from './LandingDashboardInputs'
import LandingDashboardData from './LandingDashboardData'

const LandingDashboard = () => {
  return (
    <div
      id="dashboard"
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
      `}>
      <LandingDashboardInputs />
      <LandingDashboardData />
    </div>
  )
}
export default LandingDashboard
