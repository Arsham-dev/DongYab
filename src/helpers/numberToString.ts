const numberToString = (num: number) => {
  const formatter = new Intl.NumberFormat('en-US', {
    currency: 'IRR',
    style: 'currency'
  })
  return formatter.format(num).slice(4)
}
export default numberToString
