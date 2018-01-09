function is_on (n) {
  return (Number.isInteger(Math.sqrt(n))) ? 'yes' : 'no'
}

function solve (n) {
  n = n.split('\r\n')
  let output = ''

  for (const line of n) {
    if (line === '0') break
    output += is_on(+line) + '\n'
  }
  return output
}

module.exports = { solve }