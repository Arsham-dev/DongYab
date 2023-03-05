import styled from '@emotion/styled'
import ResultInfoItem from '.'
const InfoItemContainerBase = styled('div')`
  display: flex;
  flex-direction: column;
  row-gap: 34px;
  width: calc(100% - 380px);
  margin-bottom: 100px;
`
const ResultInfoItemContainer = () => {
  return (
    <InfoItemContainerBase>
      {Array(3)
        .fill(null)
        .map((_, index) => (
          <ResultInfoItem
            title="آرشام رمضانی"
            price="140,233,000"
            shouldPay={index % 2 === 0}
            index={index + 1}
            key={index}
          />
        ))}
    </InfoItemContainerBase>
  )
}
export default ResultInfoItemContainer
