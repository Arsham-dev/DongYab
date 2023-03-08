/** @jsxImportSource @emotion/react */

import { FC } from 'react'
import Item from '../../../../types/items'
import Modal from 'react-modal'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import CloseIcon from '../../../../assets/landing/close-icon.svg'
import ResultItemsInfo from './ResultItemsInfo'
interface ResultMoreInfoModalProps {
  isOpen: boolean
  onClose: () => void
  items: Item[]
  totalItemsPrice: string
  paidMoney: string
  moneyShouldPay: string
}
const CloseButton = styled('img')`
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  width: 17.5px;
  height: 17.5px;
  &:hover {
    opacity: 0.8;
  }
`
const ModalBody = styled('div')`
  display: flex;
  flex-direction: column;
  margin: 0 13.75px 16.25px 13.75px;
`
const ModalHeader = styled('span')`
  width: 233px;
  font-weight: 800;
  font-size: 16px;
  text-align: center;
  color: #000000;
  margin: auto;
  margin-bottom: 40px;
  margin-top: 0;
`
const ItemsContainer = styled('div')`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  margin-bottom: 10px;
`
const SepratorLine = styled('div')`
  width: 100%;
  height: 1px;
  background: #000000;
  margin-bottom: 20px;
`
const TotalItemsPrice = styled('span')`
  font-weight: 700;
  font-size: 16px;
  color: #000000;
  margin-bottom: 30px;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
`
const PaidMoney = styled('span')`
  font-weight: 700;
  font-size: 16px;
  text-align: center;
  color: #000000;
  margin-bottom: 52px;
`
const MoneyShouldPay = styled('div')`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 16px;
`
const ResultMoreInfoModal: FC<ResultMoreInfoModalProps> = ({
  isOpen,
  onClose,
  items,
  totalItemsPrice,
  paidMoney,
  moneyShouldPay
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      css={css`
        width: 457px;
        background: #ebff00;
        border-radius: 20px;
        margin: 10vh auto;
        padding: 26.25px;
        display: flex;
        flex-direction: column;
      `}>
      <CloseButton src={CloseIcon} alt="close" onClick={onClose} />
      <ModalBody>
        <ModalHeader>
          قیمت ها به صورت سهم هرکس از آن کالا نوشته شده است
        </ModalHeader>
        <ItemsContainer>
          {items.map((item, index) => (
            <ResultItemsInfo
              price={item.price}
              title={item.title}
              key={item.title}
              index={index + 1}
            />
          ))}
        </ItemsContainer>
        <SepratorLine />
        <TotalItemsPrice>
          <span>:مجموع</span>&nbsp;
          <span>{totalItemsPrice}</span>
          &nbsp; &nbsp;
          <span>T</span>
        </TotalItemsPrice>
        <PaidMoney>میزان پرداختی از قبل: {paidMoney} T</PaidMoney>
        <MoneyShouldPay>
          <span>:در مجموع</span>
          &nbsp;
          <span>{moneyShouldPay}</span>
          &nbsp;&nbsp;
          <span>T</span>
          &nbsp;
          <span>طلبکار</span>
        </MoneyShouldPay>
      </ModalBody>
    </Modal>
  )
}
export default ResultMoreInfoModal
