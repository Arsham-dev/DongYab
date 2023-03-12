const stringToNumber = (str: string): number => {
  const number = str.replaceAll(',', '')
  return Number(number)
}

export default stringToNumber
