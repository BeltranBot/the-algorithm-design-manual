function count_carries (a, b) {
  let arr_a = a.split('')
  let arr_b = b.split('')
  let len_a = a.length
  let len_b = b.length
  let max_len = (len_a > len_b) ? len_a : len_b
  let carry = 0
  let carry_count = 0

  for (let i = 0; i < max_len; i++) {
    let num_a = (i >= len_a) ? 0 : +arr_a[len_a - i - 1]
    let num_b = (i >= len_b) ? 0 : +arr_b[len_b - i - 1]
    let c = num_a + num_b + carry
    carry = 0
    if (c >= 10) carry_count += ++carry
  }
  return carry_count
}

function solve (n) {
  n = n.split('\r\n').map(x => x.split(' '))
  let output = ''

  for (const line of n) {
    if (line[0] === '0' && line[1] === '0') break
    let carry = count_carries(line[0], line[1])
    let num = carry

    if (carry === 0) num = 'No'
    output +=
      ((carry > 1) ? num + ' carry operations.' : num + ' carry operation.') +
        '\n'
  }
  return output
}

module.exports = { solve }