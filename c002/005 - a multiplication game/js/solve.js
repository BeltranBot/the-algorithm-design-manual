function get_winner (n) {
  let p = 1
  let i = 1

  while (true) {
    p *= i
    if (n <= p && i == 9) return 'Stan wins.'
    if (n <= p && i == 2) return 'Ollie wins.'
    i = (i == 9) ? 2 : 9
  }
}

function solve (n) {
  n = n.split('\r\n')
  let output = ''

  for (const line of n) {
    if (line === '') break
    output += get_winner(+line) + '\n'
  }
  return output
}

module.exports = { solve }