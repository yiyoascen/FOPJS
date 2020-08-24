const serviceResult = { accountsData: [{ id: 'F220960K', balance: 1024 }, { id: 'S120456T', balance: 2260 }, { id: 'J140793A', balance: -38 }, { id: 'M120396V', balance: -114 }, { id: 'A120289L', balance: 55000 }] }
const delinquent = serviceResult.accountsData.filter(v => v.balance < 0)
const delinquentId = delinquent.map(v => v.id)
console.log(delinquent)
console.log(delinquentId)

const numbers = [1, 2, 3, 4, 5, NaN]
console.log(numbers.filter(x => x % 2 === 0))
console.log(numbers.findIndex(x => x === 3))

const markers = [
  { name: 'UY', lat: -34.9, lon: -56.2 },
  { name: 'AR', lat: -34.6, lon: -58.4 },
  { name: 'BR', lat: -15.8, lon: -47.9 },
  // …
  { name: 'BO', lat: -16.5, lon: -68.1 }
]

const brazilData = markers.find(x => x.name === 'BR')
console.log(brazilData)
console.log('urugay data', markers.filter(country => country.name === 'UY'))
console.log(numbers.findIndex(x => isNaN(x)))
console.log(numbers.every(number => Number.isInteger(number)))
console.log(numbers.some(number => Number.isInteger(number)))
