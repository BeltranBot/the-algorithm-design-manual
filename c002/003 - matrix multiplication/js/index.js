function matrix_multiplication (a, b) {
  let x = a.length
  let y = b[0].length
  let z = b.length
  let c = []

  for (let i = 0; i < x; i++) {
    c.push([])
    for (let j = 0; j < y; j++) {
      c[i].push(0)
      for (let k = 0; k < z; k++) {
        c[i][j] += a[i][k] * b[k][j]
      }
    }
  }
  return c
}

function main () {

  const a = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]
  
  const b = [
    [9, 8, 7],
    [6, 5, 4],
    [3, 2, 1]
  ]
  
  console.log(matrix_multiplication(a, b))
}

main()
