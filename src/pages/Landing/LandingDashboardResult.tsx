/** @jsxImportSource @emotion/react */

import styled from '@emotion/styled'
import React from 'react'
import ResultInfoItemContainer from './components/ResultInfoItem/ResultInfoItemContainer'
const LandingDashboardResultBase = styled('div')`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`
const LandingDashboardResultHeader = styled('div')`
  font-style: normal;
  font-weight: 800;
  font-size: 20px;
  text-align: center;
  color: #ffffff;
  margin-bottom: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
interface LandingDashboardResultProps {
  totalMoney: string
}
const LandingDashboardResult: React.FC<LandingDashboardResultProps> = ({
  totalMoney
}) => {
  return (
    <LandingDashboardResultBase>
      <LandingDashboardResultHeader>
        T&nbsp;&nbsp;{`مجموع خرج های انجام شده: ${totalMoney} `}
      </LandingDashboardResultHeader>
      <ResultInfoItemContainer />
    </LandingDashboardResultBase>
  )
}
export default LandingDashboardResult
