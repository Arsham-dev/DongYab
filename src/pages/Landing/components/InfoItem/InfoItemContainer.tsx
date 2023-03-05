/** @jsxImportSource @emotion/react */

import React from 'react'
import styled from '@emotion/styled'
import InfoItem from '.'
const InfoItemContainerBase = styled('div')`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  padding-top: 12px;
`
const InfoItemNoData = styled('div')`
  font-family: IRANYekanWeb;
  font-weight: 800;
  font-size: 20px;
  color: #ffffff;
`
interface InfoItemContainerProps {
  data: {
    title: string
    price: string
  }[]
  removeFunction: (index: number) => void
}
const InfoItemContainer: React.FC<InfoItemContainerProps> = ({
  data,
  removeFunction
}) => {
  return (
    <InfoItemContainerBase>
      {data.length > 0 ? (
        data.map(({ title, price }, index) => (
          <InfoItem
            title={title}
            price={price}
            index={index + 1}
            key={title + index + price}
            removeFunction={() => removeFunction(index)}
          />
        ))
      ) : (
        <InfoItemNoData>هیچ موردی وجود ندارد</InfoItemNoData>
      )}
    </InfoItemContainerBase>
  )
}
export default InfoItemContainer
