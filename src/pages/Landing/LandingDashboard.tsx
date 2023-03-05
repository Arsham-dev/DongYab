/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import priceVector from '../../assets/landing/price-vector.svg'
import objectVector from '../../assets/landing/object-vector.svg'
import TextFieldContianer from './components/TextFieldContainer'
const HeaderTitle = styled('span')`
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  line-height: 34px;
  color: #ffffff;
`
const LandingDashboard = () => {
  return (
    <div
      id="dashboard"
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
      `}>
      <div
        id="header"
        css={css`
          display: flex;
          flex-direction: row;
          justify-content: space-evenly;
          width: 100%;
          margin-bottom: 5px;
        `}>
        <HeaderTitle>اقلام</HeaderTitle>
        <HeaderTitle>راهنما</HeaderTitle>
        <HeaderTitle>اشخاص</HeaderTitle>
      </div>
      <div
        css={css`
          background: #fff;
          border: 2px solid #ebff00;
          border-radius: 51px;
          padding: 12px 20px;
          display: flex;
          flex-direction: row;
          align-items: center;
          column-gap: 8px;
        `}>
        <TextFieldContianer
          priceIcon={priceVector}
          pricePlacerHolder="مثال: 1,500,000"
          namePlacerHolder="مثال: ناهار جوجه کباب"
          nameIcon={objectVector}
        />
        <div />
        <TextFieldContianer
          priceIcon={priceVector}
          pricePlacerHolder="مثال: 1,500,000"
          namePlacerHolder="مثال: ناهار جوجه کباب"
          nameIcon={objectVector}
        />
      </div>
    </div>
  )
}
export default LandingDashboard
