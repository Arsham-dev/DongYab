/** @jsxImportSource @emotion/react */
import LandingDashboard from './LandingDashboard'
import LandingHeader from './LandingHeader'
import { css } from '@emotion/react'
const Landing = () => {
  return (
    <div
      css={css({
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
      })}>
      <LandingHeader />
      <LandingDashboard />
    </div>
  )
}
export default Landing
