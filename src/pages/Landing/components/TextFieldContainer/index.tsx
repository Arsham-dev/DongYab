import React from 'react'
import styled from '@emotion/styled'
import TextField from '../TextField'
import addButton from '../../../../assets/landing/add-button.svg'
interface TextFieldContianerProps {
  namePlacerHolder: string
  pricePlacerHolder: string
  nameIcon: string
  priceIcon: string
  addInfoFunction?: () => void
}
const TextFieldContianer: React.FC<TextFieldContianerProps> = ({
  nameIcon,
  priceIcon,
  namePlacerHolder,
  pricePlacerHolder
}) => {
  const MainContainer = styled('div')`
    display: flex;
    flex-direction: row-reverse;
    background: #d9d9d9;
    border-radius: 35.5px;
    padding: 13px 20px 13px 15px;
    column-gap: 10px;
  `
  const AddButton = styled('img')`
    cursor: pointer;
    margin-right: 10px;
    transition: all 0.3s ease-in-out;
    &:hover {
      opacity: 0.8;
    }
  `
  return (
    <MainContainer>
      <TextField placeholder={namePlacerHolder} icon={nameIcon} size="large" />
      <TextField isPrice placeholder={pricePlacerHolder} icon={priceIcon} />
      <AddButton src={addButton} alt="addButton" />
    </MainContainer>
  )
}
export default TextFieldContianer
