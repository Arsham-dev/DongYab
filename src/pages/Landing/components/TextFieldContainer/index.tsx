/** @jsxImportSource @emotion/react */

import React, { useState } from 'react'
import styled from '@emotion/styled'
import TextField from '../TextField'
import addButton from '../../../../assets/landing/add-button.svg'
import Item from '../../../../types/items'

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
interface TextFieldContianerProps {
  namePlacerHolder: string
  pricePlacerHolder: string
  nameIcon: string
  priceIcon: string
  addInfoFunction?: () => void
  data: Item[]
  setData: React.Dispatch<React.SetStateAction<Item[]>>
}
const TextFieldContianer: React.FC<TextFieldContianerProps> = ({
  nameIcon,
  priceIcon,
  namePlacerHolder,
  pricePlacerHolder,
  data,
  setData
}) => {
  const formatter = new Intl.NumberFormat('en-US', {
    currency: 'IRR',
    style: 'currency'
  })
  const setPriceFunction = (number: string) => {
    return formatter
      .format(
        Number(
          number
            .split('')
            .map((item) => (/^\d+$/.test(item) ? item : ''))
            .join('') || '0'
        )
      )
      .slice(4)
  }
  const [title, settitle] = useState('')
  const [price, setprice] = useState('')
  const addData = () => {
    if (title !== '' && price !== '') {
      if (data.some((item) => item.title === title)) {
        return
      } else {
        setData([...data, { title, price }])
      }
      settitle('')
      setprice('')
    }
  }
  return (
    <MainContainer>
      <TextField
        placeholder={namePlacerHolder}
        icon={nameIcon}
        size="large"
        value={title}
        onChange={(info) => settitle(info)}
      />
      <TextField
        isPrice
        placeholder={pricePlacerHolder}
        icon={priceIcon}
        value={price}
        onChange={(info) => setprice(setPriceFunction(info))}
      />
      <AddButton src={addButton} alt="addButton" onClick={addData} />
    </MainContainer>
  )
}
export default TextFieldContianer
