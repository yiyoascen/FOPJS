const oranges = ['orange', 'orange']
const apples = ['apple', 'rotten apple', 'apple']

oranges.forEach(fruit => {
  console.count(fruit)
})

apples.forEach(fruit => {
  console.count(fruit)
})

const doSomething = () => console.log('test')
const measureDoingSOmething = () => {
  console.time('doSomething()')
  // do something, and measure the time it takes
  doSomething()
  console.timeEnd('doSomething()')
}
measureDoingSOmething()
