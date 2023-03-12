import Item from '../types/items'
import stringToNumber from './stringToNumber'

const calculatePrices = (items: Item[]) => {
  let total = 0

  items.forEach((item) => {
    const number = stringToNumber(item.price)
    total += number
  })

  return total
}
export default calculatePrices
