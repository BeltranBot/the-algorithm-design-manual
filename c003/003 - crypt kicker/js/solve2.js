/* incorrect solution */

function clone_map(a) {
  let b = {}
  for (const key in a) {
    b[key] = a[key]
  }
  return b
}

function check_word (a, b, c = {}, d = {}) {
  if (a.length !== b.length) return 0

  let check = ''

  for (let i = 0; i < a.length; i++) {
    let letter_a = a[i]
    let letter_b = b[i]

    if (!c[letter_a] && !d[letter_b]) {
      c[letter_a] = letter_b
      d[letter_b] = letter_a
    } else if (c[letter_a] !== letter_b || d[letter_b] !== letter_a) {
      return 0
    }
    check += c[letter_a]
  }

  return (b == check) ? 1 : 0
}

function crypt_kicker(words, line) {
  line = line.split(' ')
  let line_words = []
  line.forEach(word => {
    if (line_words.indexOf(word) === -1) line_words.push(word)
  })  
  let letters = {}
  let letters2 = {}

  while (true) {
    let matrix = Array(words.length)
      .fill(0)
      .map(x => Array(line_words.length).fill(0))

    words.forEach((word, i) => {
      line_words.forEach((line_word, j) => {
        matrix[i][j] = check_word(word, line_word, clone_map(letters), clone_map(letters2))
      })
    })

    let rows = []
    for (let i = 0; i < matrix.length; i++) {
      let row_check = 0
      for (let j = 0; j < matrix[i].length; j++) {
        row_check += matrix[i][j]
      }
      if (row_check === 1) rows.push(i)
    }
    if (rows.length === 0) return line.join(' ').replace(/\w/g, '*')
    console.log('check', 1)

    let cols = []
    let valid_rows = []
    for (let i = 0; i < line_words.length; i++) {
      let col_check = 0
      let valid_row = -1
      for (let j = 0; j < rows.length; j++) {
        if (matrix[rows[j]][i] === 1) valid_row = rows[j]
        col_check += matrix[rows[j]][i]
      }
      if (col_check === 1) {
        cols.push(i)
        valid_rows.push(valid_row)
      }
    }
    console.log(rows, cols)
    if (cols.length === 0) return line.join(' ').replace(/\w/g, '*')
    console.log('check', 2)

    rows = valid_rows

    for (let i = 0; i < rows.length; i++) {
      let a = words[rows[i]]
      let b = line_words[cols[i]]

      for (let j = 0; j < a.length; j++) {
        if (!letters[a[j]]) {
          letters[a[j]] = b[j]
          letters2[b[j]] = a[j]
        } else if (letters[a[j]] !== b[j] || letters2[b[j]] !== a[j]) {
          return line.join(' ').replace(/\w/g, '*')
          console.log('check', 3)
        }
      }
    }
    
    let new_words = []
    for (let i = 0; i < words.length; i++) {
      if (rows.indexOf(i) !== -1) continue
      new_words.push(words[i])      
    }
    words = new_words

    if (words.length === 0) break

    let new_line = []
    for (let i = 0; i < line_words.length; i++) {
      if (cols.indexOf(i) !== -1) continue
      new_line.push(line_words[i])
    }
    line_words = new_line

    if (line_words.length === 0) break
  }

  let answer = []
  for (const word of line) {
    let answer_word = ''
    for (const letter of word) {
      answer_word += letters2[letter]
    }
    answer.push(answer_word)    
  }

  return answer.join(' ')
}

function solve (n) {
  n = n.split('\r\n')
  let output = ''
  let cases = +n[0]
  let index = 1
  let words = []

  for (let i = 1; i <= cases; i++) {
    if (words.indexOf(n[index]) === -1) words.push(n[index])
    index++
  }
  
  while (true) {
    if (n[index] === '') break
    let line = n[index]
    output += crypt_kicker(words.slice(), line) + '\n'
    index++
  }

  return output
}

module.exports = { solve, check_word }