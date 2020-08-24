const someArray = ['1', 1, 0, {}, 'aaaaaaa', '']
console.log(someArray.filter(Boolean))
const myData = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]

function dataToCsv (data) {
  return data.map(x => x + '\n').flat()
}
const myCSV = dataToCsv(myData)
console.log(...myCSV)
