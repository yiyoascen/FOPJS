// too slow
const fib = n => {
  if (n === 0) {
    return 0
  } else if (n === 1) {
    return 1
  } else {
    return fib(n - 2) + fib(n - 1)
  }
}
console.time('fib()')
console.log(fib(45))
console.timeEnd('fib()')
// faster but impure, but will get fixed
const cache = []
const fib2 = n => {
  if (cache[n] === undefined) {
    if (n === 0) {
      cache[0] = 0
    } else if (n === 1) {
      cache[1] = 1
    } else {
      cache[n] = fib2(n - 2) + fib2(n - 1)
    }
  }
  return cache[n]
}
console.time('fib2()')
console.log(fib2(45))
console.timeEnd('fib2()')

const fib4 = (n, a = 0, b = 1) => (n === 0 ? a : fib4(n - 1, b, a + b))

console.time('fib4()')
console.log(fib4(45))
console.timeEnd('fib4()')
