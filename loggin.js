const addLogging = fn => (...args) => {
  console.log(`entering ${fn.name}: ${args}`)
  const valueToReturn = fn(...args)
  console.log(`exiting ${fn.name}: ${valueToReturn}`)
  return valueToReturn
}
addLogging(x => x + 1, [1, 2, 3])
