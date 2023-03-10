/** @jsxImportSource @emotion/react */

import React, { useState } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import upIcon from '../../../../assets/landing/up-icon.svg'
import ResultMoreInfoModal from '../ResultMoreInfoModal'
import Item from '../../../../types/items'
const InfoItemBase = styled('div')`
  display: grid;
  grid-template-columns: 22fr 13fr;
  column-gap: 42px;
  align-items: center;
  justify-items: flex-end;
  @media (max-width: 420px) {
    display: flex;
    flex-direction: column-reverse;
    row-gap: 10px;
  }
`
const InfoItemText = styled('div')`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  font-weight: 800;
  font-size: 20px;
  line-height: 28px;
  text-align: center;
  color: #ffffff;
`
const MoreInfoButton = styled('button')`
  font-family: IRANYekanWeb;
  font-weight: 700;
  font-size: 16px;
  text-align: center;
  color: #ebff00;
  width: 135px;
  height: 32px;
  background: #1cc976;
  border: 1px solid #ebff00;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  column-gap: 10px;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    opacity: 0.8;
  }
`
interface ResultInfoItemProps {
  index: number
  title: string
  price: string
  shouldPay: boolean
  totalMoney: string
  items: Item[]
  paidMoney: string
}
const ResultInfoItem: React.FC<ResultInfoItemProps> = ({
  index,
  title,
  price,
  shouldPay,
  totalMoney,
  items,
  paidMoney
}) => {
  const [isOpen, setisOpen] = useState<boolean>(false)
  return (
    <>
      <InfoItemBase>
        <MoreInfoButton onClick={() => setisOpen(true)}>
          <span>ریز هزینه‌ها</span>
          <img src={upIcon} alt="upIcon" />
        </MoreInfoButton>
        <InfoItemText>
          <span>-{index}</span>
          &nbsp;
          <span>:{title}</span>
          &nbsp;
          <span>{price}</span>
          &nbsp; &nbsp;
          <span>T</span>
          &nbsp; &nbsp;
          <span
            css={css`
              color: ${shouldPay ? '#FF0000' : '#000'};
            `}>
            {shouldPay ? 'بدهکار' : 'طلبکار'}
          </span>
        </InfoItemText>
      </InfoItemBase>
      <ResultMoreInfoModal
        isOpen={isOpen}
        onClose={() => setisOpen(false)}
        totalItemsPrice={totalMoney}
        items={items}
        moneyShouldPay={price}
        paidMoney={paidMoney}
      />
    </>
  )
}
export default ResultInfoItem
