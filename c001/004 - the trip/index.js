let fs = require('fs')
const path = require('path')
const { solve } = require('./solve')

const input = fs.readFileSync(path.join(__dirname, 'test_input.txt'), {
  encoding: 'utf-8'
})

function main(data) {
  console.time('solve()')
  let sol = solve(data)
  console.timeEnd('solve()')
  console.log(sol)
}

main(input)