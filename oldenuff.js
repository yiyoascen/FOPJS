const isOldEnough = (currentYear, birthYear) => birthYear <= currentYear - 18

describe('isOldEnough', function () {
  it('is false for people younger than 18', () => {
    expect(isOldEnough(2020, 2015)).toBe(false)
  })
  it('it is true for people older than 18', () => {
    expect(isOldEnough(2020, 2000)).toBe(true)
  })
  it('is true for people exactly 18', () => {
    expect(isOldEnough(2020, 2002)).toBe(true)
  })
})
