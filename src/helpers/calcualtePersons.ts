import Item from '../types/items'
import Person from '../types/person'
import PersonResult from '../types/personResult'
import calculatePrices from './calculatePrices'
import numberToString from './numberToString'
import stringToNumber from './stringToNumber'

const calcualtePersons = (persons: Person[], items: Item[]) => {
  const totlaPrices = calculatePrices(items)
  const totalPersons = persons.length
  const average = totlaPrices / totalPersons

  const personsResults = persons.map((person) => {
    const personResult: PersonResult = {
      items: items.map((item) => {
        return {
          title: item.title,
          price: numberToString(stringToNumber(item.price) / persons.length)
        }
      }),
      name: person.title,
      totalMoney: numberToString(average),
      paidMoney: person.price,
      moneyShouldPay: numberToString(
        Math.abs(average - stringToNumber(person.price))
      ),
      shouldPay: average - stringToNumber(person.price) > 0
    }
    return personResult
  })
  return personsResults
}
export default calcualtePersons
