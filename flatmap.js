const names = [
  'winston spence churchill',
  'plato',
  'abraham lincoln',
  'socrates',
  'charles darwin'
]

const lastNames = names.flatMap(x => {
  const s = x.split(' ')
  return s.length === 1 ? [] : s.splice(1)
})

console.log(lastNames)
