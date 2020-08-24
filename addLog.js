// Log the args
// call the original function
// log that value
// return to the caller
const addLogging = fn => (...args) => {
  console.log(`entering ${fn.name}: ${args}`)
  const valueToReturn = fn(...args)
  console.log(`exiting ${fn.name}: ${valueToReturn}`)
  return valueToReturn
}

function subtract (a, b) {
  b = changeSign(b)
  return a + b
}

function changeSign (c) {
  return -c
}

subtract = addLogging(subtract)
changeSign = addLogging(changeSign)

const x = subtract(7, 5)

console.log(x)
