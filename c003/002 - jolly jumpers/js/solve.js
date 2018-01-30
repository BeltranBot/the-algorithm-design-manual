function jolly_jumpers (nums) {
  let n = nums[0]
  let arr = nums.slice(1, nums.length)
  let distances = new Set

  for (let i = 0; i < arr.length - 1; i++) {
    let c = Math.abs(arr[i] - arr[i + 1])
    distances.add(c)
  }

  for (let i = 1; i < n; i++) {
    if (!distances.has(i)) return 'Not jolly'
  }

  return 'Jolly'
}

function solve (n) {
  n = n.split('\r\n')
  let output = ''

  for (let line of n) {
    if (line === '') break
    output += jolly_jumpers(line.split(' ').map(Number)) + '\n'
  }
  return output
}

module.exports = { solve }