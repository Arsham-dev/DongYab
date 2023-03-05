import React from 'react'
import styled from '@emotion/styled'
interface ButtonProps {
  title: string
  size: 'medium' | 'large'
  icon?: string
}
const Button: React.FC<ButtonProps> = ({ title, size = 'medium', icon }) => {
  const ButtonBase = styled('button')`
    display: flex;
    flex-direction: row;
    align-items: center;
    column-gap: 20px;
    background: #ebff00;
    border: 1px solid #000000;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 25px;
    font-weight: 700;
    font-size: 20px;
    line-height: 28px;
    text-align: center;
    color: #000000;
    padding: ${size === 'medium' ? '12px 44px' : '18px 43px'};
    font-family: IRANYekanWeb;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
      opacity: 0.8;
    }
  `
  return (
    <ButtonBase>
      <span>{title}</span>
      {icon && <img src={icon} alt="icon" />}
    </ButtonBase>
  )
}
export default Button
