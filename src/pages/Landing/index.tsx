/** @jsxImportSource @emotion/react */
import LandingDashboard from './LandingDashboard'
import LandingHeader from './LandingHeader'
const Landing = () => {
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
      }}>
      <LandingHeader />
      <LandingDashboard />
    </div>
  )
}
export default Landing
