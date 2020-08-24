const impure = (obj, arr, num) => {
  obj.jaja = 'haha'
  arr.push(10000)
  num += 1
}

const objeto = {}
const array = [1, 2, 3]
const numero = 0
impure(objeto, array, numero)

console.log(objeto, array, numero)
// function that avoids mutation
const maxStrings = a => [...a].sort().pop()

maxStrings(array)
console.log(array)
