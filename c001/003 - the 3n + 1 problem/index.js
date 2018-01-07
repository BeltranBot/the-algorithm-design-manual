function three_n_plus_one (n) {
  let cycle = 0
  while (true) {
    cycle++
    if (n === 1) break
    n = ((n % 2) == 1) ? (3 * n) + 1 : n / 2
  }
  return cycle
}

function main () {
  let [a, b] = process.argv.slice(2).map(Number)
  let max_cycle = 0

  for (let i = a; i <= b; i++) {
    let cycle = three_n_plus_one(i)
    max_cycle = (cycle > max_cycle) ? cycle : max_cycle
  }

  return [a, b, max_cycle]
}

console.time('3n + 1')
let sol = main()
console.timeEnd('3n + 1')
console.log(sol.join(' '))
