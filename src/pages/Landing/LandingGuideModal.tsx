/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react'
import styled from '@emotion/styled'
import React from 'react'
import Modal from 'react-modal'
import CloseIcon from '../../assets/landing/close-icon.svg'

interface LandingGuideModalProps {
  isOpen: boolean
  onClose: () => void
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
  margin: 16.25px 13.75px;
`
const ModalHeaderText = styled('span')`
  ont-family: 'IRANYekanWeb';
  font-weight: 800;
  font-size: 16px;
  text-align: center;
  text-decoration-line: underline;
  color: #000000;
  margin-bottom: 25px;
`
const ModalBodyText = styled('span')`
  font-family: 'IRANYekanWeb';
  font-weight: 300;
  font-size: 16px;
  text-align: center;
  color: #000000;
  margin-bottom: 50px;
`
const LandingGuideModal: React.FC<LandingGuideModalProps> = ({
  isOpen,
  onClose
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
        @media (max-width: 480px) {
          width: calc(100% - 100px);
        }
      `}>
      <CloseButton onClick={onClose} src={CloseIcon} alt="close-icon" />
      <ModalBody>
        <ModalHeaderText>اقلام</ModalHeaderText>
        <ModalBodyText>
          شما در قسمت اقلام کافیست نام کلا و یا پرداختی مربوطه همچون ( قیمت یک
          وعده غذا یا قیمت اجاره خونه و .... ) را وارد کرده و قیمت آن را نیز در
          روبه رویش وارد نمایید
        </ModalBodyText>
        <ModalHeaderText>اشخاص</ModalHeaderText>
        <ModalBodyText>
          شما در قسمت اشخاص کافیست نام افراد سهیم در دنگ هزینه های انجام شده در
          قسمت اقلام را وارد کرده و در روبه رویش هزینه پرداختی آن ها را تا آن
          لحظه وارد نمایید تا در نهایت با انجام محاسبات و مشخص شدن بدهی کلی هر
          شخص از روی قیمت اقلام ما‌ به تفاوت هزینه ای که هر شخص باید بیشتر
          پرداخت کند یا بدهکار می شود مشخص گردد
        </ModalBodyText>
      </ModalBody>
    </Modal>
  )
}
export default LandingGuideModal
