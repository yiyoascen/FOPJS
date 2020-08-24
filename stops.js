const directions = (...args) => {
  const [start, ...remaining] = args
  const [finish, ...stops] = remaining.reverse()
  console.log(`drive through ${args.length} towns`)
  console.log(`start in ${start}`)
  console.log(`the destination is ${finish}`)
  console.log(`stopping ${stops.length} times in between`)
}
directions(
  'truckee',
  'tahoe',
  'sunnyside',
  'homewood',
  'tahoma'
)
