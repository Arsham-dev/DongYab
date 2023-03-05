/** @jsxImportSource @emotion/react */
import React from 'react'
import styled from '@emotion/styled'
import T from '../../../../assets/landing/T.svg'
interface TextFieldProps {
  size?: 'medium' | 'large'
  isPrice?: boolean
  placeholder?: string
  icon: string
}
const TextField: React.FC<TextFieldProps> = ({
  size = 'medium',
  isPrice,
  placeholder,
  icon
}) => {
  const MainContainer = styled('div')`
    display: flex;
    align-items: center;
    flex-direction: row;
    column-gap: 5px;
  `
  const InputContainer = styled('div')`
    width: ${size === 'medium' ? 170 : 236}px;
    background-color: #fff;
    padding: 15px 10px 14px 15px;
    border-radius: 26px;
    display: flex;
    align-items: center;
    height: 22px;
    justify-content: flex-start;
    flex-direction: row-reverse;
    position: relative;
  `
  const Input = styled('input')`
    border: none;
    background-color: #fff;
    width: 100%;
    width: ${size === 'medium' ? 145 : 211}px;
    height: 22px;
    outline: none;
    text-align: right;
    font-weight: 400;
    font-size: 16px;
    line-height: 23px;
    font-family: IRANYekanWeb;
  `

  const PriceLogo = styled('img')`
    position: absolute;
    left: 15px;
  `
  return (
    <MainContainer>
      <InputContainer>
        <Input placeholder={placeholder || ''} />
        {isPrice && <PriceLogo src={T} alt="T" />}
      </InputContainer>
      <img src={icon} alt="icon" />
    </MainContainer>
  )
}
export default TextField
