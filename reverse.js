const reverseString = str => {
  return str.split('').reduceRight((x, y) => x + y)
}
console.log(reverseString('abc'))

const markers = [
  { name: 'UY', lat: -34.9, lon: -56.2 },
  { name: 'AR', lat: -34.6, lon: -58.4 },
  { name: 'BR', lat: -15.8, lon: -47.9 },
  { name: 'BO', lat: -16.5, lon: -68.1 }]
function average (x) {
  return x.reduce((x, y) => x + y) / x.length
}

console.log(average(markers.map(x => x.lat)))
console.log(average(markers.map(x => x.lon)))

// tacit programming gives an erroneous result
console.log(['1', '2', '3', '4', '1.1'].map(parseFloat))
// more refined
console.log(['1', '2', '3', '4', '1.1'].map(x => parseFloat(x)))
