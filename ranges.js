const range = (start, stop) =>
  new Array(stop - start).fill(0).map((v, i) => start + i)
const from2To6 = range(1, 20)
console.log(from2To6)

const a = [1, 2, 3, 4]
console.log(a.map(x => x + 1))

const factorialByRange = n =>
  range(1, n + 1).reduce((x, y) => x * y, 1)
console.log(factorialByRange(5))
console.log(factorialByRange(3))

const ALPHABET = range('A'.charCodeAt(), 'Z'.charCodeAt() + 1).map(x =>
  String.fromCharCode(x)
)
console.log(ALPHABET.reduce((x, y) => x + y))
