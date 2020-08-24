function selector (country, school) {
  return function (student) {
    return student.address.country() === country &&
      student.school() === school
  }
}
const findStudentsBy = function (friends, selector) {
  return friends.filter(selector)
}
