// flat() example
const a = [[1, 2], [3, 4, [5, 6, 7]], 8, [[[9, 10]]]]
console.log(a.flat()) // same as a.flat(1)
console.log(a.flat(2))
console.log(a.flat(Infinity))
console.log(...a)

const distances = [
  [0, 20, 35, 40],
  [20, 0, 10, 50],
  [35, 10, 0, 30],
  [40, 50, 30, 0]
]
const maxDist1 = Math.max(...distances.flat())

const maxDist2 = distances.flat().reduce((p, d) => Math.max(p, d), 0)

console.log(maxDist1, maxDist2)
const apiAnswer = [
  {
    country: 'AR',
    name: 'Argentine',
    states: [
      {
        state: '1',
        name: 'Buenos Aires',
        cities: [{ city: 3846864, name: 'Lincoln' }]
      }
    ]
  },
  {
    country: 'GB',
    name: 'Great Britain',
    states: [
      {
        state: 'ENG',
        name: 'England',
        cities: [{ city: 2644487, name: 'Lincoln' }]
      }
    ]
  },
  {
    country: 'US',
    name: 'United States of America',
    states: [
      {
        state: 'CA',
        name: 'California',
        cities: [{ city: 5072006, name: 'Lincoln' }]
      },
      {
        state: 'IL',
        name: 'Illinois',
        cities: [
          { city: 4899911, name: 'Lincoln Park' },
          { city: 4899966, name: 'Lincoln Square' }
        ]
      }
    ]
  }
]

console.log(
  apiAnswer
    .map(x => x.states)
    .flat()
    .map(y => y.cities)
    .flat()
)
