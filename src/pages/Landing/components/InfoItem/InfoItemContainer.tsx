import React from 'react'
import styled from '@emotion/styled'
import InfoItem from '.'
const InfoItemContainerBase = styled('div')`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  padding-top: 12px;
`

interface InfoItemContainerProps {
  data: {
    title: string
    price: string
  }[]
}
const InfoItemContainer: React.FC<InfoItemContainerProps> = ({ data }) => {
  return (
    <InfoItemContainerBase>
      {data.map(({ title, price }, index) => (
        <InfoItem
          title={title}
          price={price}
          index={index + 1}
          key={title + index + price}
        />
      ))}
    </InfoItemContainerBase>
  )
}
export default InfoItemContainer
