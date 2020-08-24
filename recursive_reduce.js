const flatAll = arr =>
  arr.reduce((f, v) => f.concat(Array.isArray(v) ? flatAll(v) : v), [])

console.log(flatAll([1, 2, [3, 4], 5, [[6, 7], 8, [9]]]))
console.log([1, 2, [3, 4], 5, [[6, 7], 8, [9]]].flat(Infinity))
