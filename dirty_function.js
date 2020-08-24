function newCounter () {
  let count = 0
  return function () {
    count++
    return count
  }
}
const counter = newCounter()
console.log(counter())
console.log(counter())
console.log(counter())
