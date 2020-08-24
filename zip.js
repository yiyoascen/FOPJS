function zipCode (code, location) {
  const _code = code
  const _location = location || ''

  return {
    code: function () {
      return _code
    },
    location: function () {
      return _location
    },
    fromString: function (str) {
      const parts = str.split('-')
      return zipCode(parts[0], parts[1])
    },
    toString: function () {
      return _code + '-' + _location
    }
  }
}

const princentonZip = zipCode('08544', '3345')
console.log(princentonZip.toString())
console.log(princentonZip.location())
