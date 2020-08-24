// async functions examples
const fakeAPI = (delay, value) => new Promise(resolve => setTimeout(() => resolve(value), delay))

const useResult = x => console.log(new Date(), x);
(async () => {
  console.log('start')
  console.log(new Date())
  const result = await fakeAPI(1000, 229)
  useResult(result)
  console.log('end')
})();

(() => {
  console.log('START FOREACH');
  [1, 2, 3, 4].forEach(async n => {
    const x = await fakeAPI(n * 1000, n)
    useResult(x)
  })
  console.log('END FOREACH')
})()

const forEachAsync = (arr, fn) =>
  arr.reduce(
    (promise, value) => promise.then(() => fn(value)),
    Promise.resolve()
  );
(async () => {
  console.log('START FOREACH VIA REDUCE')
})()

const mapAsync = (arr, fn) => Promise.all(arr.map(fn));

(async () => {
  console.log('start map')

  const mapped = await mapAsync([1, 2, 3, 4], async n => {
    const x = await fakeAPI(n * 1000, n)
    return x
  })

  useResult(mapped)
  console.log('end map')
})()
