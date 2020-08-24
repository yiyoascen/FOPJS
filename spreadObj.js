const morning = {
  breakfast: 'oatmeal',
  lunch: 'peanuts'
}

const dinner = 'mac and cheese'
const backpack = {
  ...morning,
  dinner
}

console.log(backpack)
