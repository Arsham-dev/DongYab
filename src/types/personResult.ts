import Item from './items'

export default interface PersonResult {
  name: string
  items: Item[]
  totalMoney: string
  paidMoney: string
  moneyShouldPay: string
  shouldPay: boolean
}
