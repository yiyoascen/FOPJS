const arr = [1, 2, 3, 4, 5]
const sum = (x, y) => x + y
console.log(arr.reduce(sum, 0)) // dyadic function and an initial value, you can skip that value

// impure function to show the inner working of reduce
const sumAndLog = (x, y) => {
  console.log(`${x}+${y} = ${x + y}`)
  return x + y
}
console.log(arr.reduce(sumAndLog))
const average = arr => arr.reduce(sum) / arr.length
console.log(average([6, 8, 6, 8]))

const average3 = arr => {
  const sc = arr.reduce(
    (ac, val) => ({ sum: val + ac.sum, count: ac.count + 1 }),
    { sum: 0, count: 0 }
  )
  return sc.sum / sc.count
}

console.log(average3(arr))

console.log([1, 2, 3, 4, 5].reduceRight(sumAndLog, 0))
