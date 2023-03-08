import styled from '@emotion/styled'
import { FC } from 'react'
interface ResultItemsInfoProps {
  index: number
  title: string
  price: string
}
const InfoItemText = styled('div')`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  font-weight: 400;
  font-size: 20px;
  text-align: center;
  color: #000;
`
const ResultItemsInfo: FC<ResultItemsInfoProps> = ({ index, title, price }) => {
  return (
    <InfoItemText>
      <span>-{index}</span>
      &nbsp;
      <span>:{title}</span>
      &nbsp;
      <span>{price}</span>
      &nbsp; &nbsp;
      <span>T</span>
      &nbsp; &nbsp;
    </InfoItemText>
  )
}
export default ResultItemsInfo
