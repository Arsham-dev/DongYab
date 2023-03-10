import styled from '@emotion/styled'
import ResultInfoItem from '.'
import PersonResult from '../../../../types/personResult'
import { FC } from 'react'
const InfoItemContainerBase = styled('div')`
  display: flex;
  flex-direction: column;
  row-gap: 34px;
  width: calc(100% - 380px);
  margin-bottom: 100px;
  @media (max-width: 420px) {
    width: 100%;
  }
`
interface ResultInfoItemContainerProps {
  personsResult: PersonResult[]
}
const ResultInfoItemContainer: FC<ResultInfoItemContainerProps> = ({
  personsResult
}) => {
  return (
    <InfoItemContainerBase>
      {personsResult.map(
        (
          { name, moneyShouldPay, totalMoney, items, paidMoney, shouldPay },
          index
        ) => (
          <ResultInfoItem
            title={name}
            price={moneyShouldPay}
            shouldPay={shouldPay}
            index={index + 1}
            totalMoney={totalMoney}
            items={items}
            paidMoney={paidMoney}
            key={index}
          />
        )
      )}
    </InfoItemContainerBase>
  )
}
export default ResultInfoItemContainer
