/** @jsxImportSource @emotion/react */

import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
interface ButtonProps {
  title: string
  size: 'medium' | 'large'
  icon?: string
  onClick?: () => void
}
const ButtonBase = styled('button')`
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 20px;
  background: #ebff00;
  border: 1px solid #000000;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
  text-align: center;
  color: #000000;
  font-family: IRANYekanWeb;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    opacity: 0.8;
  }
  @media (max-width: 420px) {
    column-gap: 10px;
    margin: 0 30px;
  }
`
const Button: React.FC<ButtonProps> = ({
  title,
  size = 'medium',
  icon,
  onClick
}) => {
  return (
    <ButtonBase
      onClick={onClick}
      css={css`
        padding: ${size === 'medium' ? '12px 44px' : '18px 43px'};
        border-radius: ${size === 'medium' ? '25px' : '39.5px'};
        @media (max-width: 420px) {
          padding: ${size === 'medium' ? '12px 44px' : '18px 20px'};
        }
      `}>
      <span>{title}</span>
      {icon && <img src={icon} alt="icon" />}
    </ButtonBase>
  )
}
export default Button
