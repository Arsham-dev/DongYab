/** @jsxImportSource @emotion/react */
import React, { useState } from 'react'
import styled from '@emotion/styled'
import T from '../../../../assets/landing/T.svg'
import { css } from '@emotion/react'

const Input = styled('input')`
  border: none;
  background-color: #fff;
  width: 100%;
  height: 22px;
  outline: none;
  text-align: right;
  font-weight: 400;
  font-size: 16px;
  line-height: 23px;
  font-family: IRANYekanWeb;
`
const MainContainer = styled('div')`
  display: flex;
  align-items: center;
  flex-direction: row;
  column-gap: 5px;
`
const InputContainer = styled('div')`
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

const PriceLogo = styled('img')`
  position: absolute;
  left: 15px;
`
interface TextFieldProps {
  size?: 'medium' | 'large'
  isPrice?: boolean
  placeholder?: string
  icon: string
  value?: string
  onChange: (data: string) => void
}
const TextField: React.FC<TextFieldProps> = ({
  size = 'medium',
  isPrice,
  placeholder,
  icon,
  value,
  onChange
}) => {
  const [focused, setFocused] = useState(false)
  const onFocus = () => setFocused(true)
  const onBlur = () => setFocused(false)
  return (
    <MainContainer>
      <InputContainer
        css={css`
          width: ${size === 'medium' ? 145 : 211}px;
          border: ${focused ? '1.5px solid #000' : '1.5px solid transparent'};
          transition: border 0.4s ease-in-out;
          @media (max-width: 420px) {
            width: 100%;
          }
        `}>
        <Input
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={onFocus}
          onBlur={onBlur}
        />
        {isPrice && <PriceLogo src={T} alt="T" />}
      </InputContainer>
      <img src={icon} alt="icon" />
    </MainContainer>
  )
}
export default TextField
