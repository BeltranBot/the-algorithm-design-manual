function find_match (needle, stack) {
  let n = needle.length
  let m = stack.length

  for (let i = 0; i < (m - n); i++) {
    let j = 0

    while (j < n && needle[j] === stack[i + j]) {
      j += 1
      if (j === n) return i
    }
  }
  return -1
}

console.log(find_match('needle', 'this is a stack of needles'))