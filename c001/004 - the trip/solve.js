function solve (n) {
  n = n.split('\r\n')

  let ret = []

  for (let i = 0; i < n.length; i++) {
    num = parseInt(n[i])
    if (num === 0) break

    let amounts = []

    for (let j = 1; j <= num; j++) {
      amounts.push(parseFloat(n[i + j]))
    }
    
    ret.push(tripChange(amounts))
    i += num
  }

  return ret.join('\n')
}

function tripChange (amounts) {
  let solution = 0.0

  amounts.sort((a, b) => a - b)

  for (let j = 0; j < Math.floor(amounts.length / 2); j++) {
    let [a, b] = [amounts[j], amounts[amounts.length - 1 - j]]
    if (a !== b) {
      let c = (a + b) / 2
      c = Math.round(100 * c) / 100
      solution += c - a
    }
  }

  return '$' + solution.toFixed(2)
}

module.exports = { solve }