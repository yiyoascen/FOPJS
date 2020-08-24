const fact = n => (n === 0 ? 1 : n * fact(n - 1))
console.log(fact(10))

const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 0]
const numbers2 = [1, 2, 1, 3, 4, 1, 5, 5, 6, 7]
console.log(...numbers, ...numbers2)
