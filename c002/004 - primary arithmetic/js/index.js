let fs = require('fs')
const path = require('path')
const { solve } = require('./solve')

const input = fs.readFileSync(path.join(__dirname, '../test_input.txt'), {
  encoding: 'utf-8'
})

function main (data) {
  console.time('solve()')
  let sol = solve(data)
  console.timeEnd('solve()')

  fs.writeFile(path.join(__dirname, '../js_output.txt'), sol, function (err) {
    if (err) return console.log(err)
    console.log("finished")
  })
}

main(input)