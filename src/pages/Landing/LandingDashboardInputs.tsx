/** @jsxImportSource @emotion/react */

import React, { useState } from 'react'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import priceVector from '../../assets/landing/price-vector.svg'
import objectVector from '../../assets/landing/object-vector.svg'
import personVector from '../../assets/landing/person-vector.svg'
import TextFieldContianer from './components/TextFieldContainer'
import Item from '../../types/items'
import Person from '../../types/person'
import LandingGuideModal from './LandingGuideModal'

const HeaderTitle = styled('span')`
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  line-height: 34px;
  color: #ffffff;
`
const SepratorLine = styled('div')`
  height: 100%;
  border: 2px solid #ebff00;
`
const GuideButton = styled('button')`
  width: 86px;
  height: 34px;
  background: #1cc976;
  border: 1px solid #ebff00;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'IRANYekanWeb';
  font-weight: 900;
  font-size: 20px;
  text-align: center;
  color: #ebff00;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    opacity: 0.8;
  }
`
interface LandingDashboardInputsProps {
  items: Item[]
  setitems: React.Dispatch<React.SetStateAction<Item[]>>
  persons: Person[]
  setpersons: React.Dispatch<React.SetStateAction<Person[]>>
}

const LandingDashboardInputs: React.FC<LandingDashboardInputsProps> = ({
  items,
  setitems,
  persons,
  setpersons
}) => {
  const [isOpen, setisOpen] = useState<boolean>(false)
  return (
    <>
      <div
        id="header"
        css={css`
          display: flex;
          flex-direction: row-reverse;
          justify-content: space-evenly;
          width: 100%;
          margin-bottom: 5px;
          position: relative;
          right: 15px;
        `}>
        <HeaderTitle>اقلام</HeaderTitle>
        <GuideButton onClick={() => setisOpen(true)}>راهنما</GuideButton>
        <HeaderTitle>اشخاص</HeaderTitle>
      </div>
      <div
        css={css`
          background: #fff;
          border: 2px solid #ebff00;
          border-radius: 51px;
          padding: 12px 20px;
          display: flex;
          flex-direction: row-reverse;
          align-items: center;
          column-gap: 8px;
        `}>
        <TextFieldContianer
          priceIcon={priceVector}
          pricePlacerHolder="مثال: 1,500,000"
          namePlacerHolder="مثال: ناهار جوجه کباب"
          nameIcon={objectVector}
          data={items}
          setData={setitems}
        />
        <SepratorLine />
        <TextFieldContianer
          priceIcon={priceVector}
          pricePlacerHolder="مثال: 0"
          namePlacerHolder="مثال: محمد رفیعی"
          nameIcon={personVector}
          data={persons}
          setData={setpersons}
        />
      </div>
      <LandingGuideModal isOpen={isOpen} onClose={() => setisOpen(false)} />
    </>
  )
}
export default LandingDashboardInputs
