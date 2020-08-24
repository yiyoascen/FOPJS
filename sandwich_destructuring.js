const sandwich = {
  bread: 'dutch cruch',
  meat: 'tuna',
  cheese: 'swiss',
  toppings: ['lettuce', 'tomato', 'mustard']
}

const { bread, meat } = sandwich
console.log(bread, meat)

const [element] = [1, 2, 3]
console.log(element)
const [, second] = [1, 2, 3]
console.log(second)
const literalEnhancement = { bread, meat }
console.log(literalEnhancement)

const peaks = ['Tallac', 'ralston', 'rose']
const crayons = ['ward', 'blackwood']
const tahoe = [...peaks, ...crayons]
console.log(tahoe.join('SEX'))
const [last] = [...peaks].reverse()
console.log(last)

const lakes = ['a', 'b', 'c', 'd']
const [first, ...rest] = lakes
console.log(first, rest.join('FAIL'))
