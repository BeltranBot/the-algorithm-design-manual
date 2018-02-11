const PLAIN_TEXT = 'the quick brown fox jumps over the lazy dog'.split(' ')

/**
 * Returns true if the words are possible permutation of each other given
 * 2 dictionaries that store previous matches in either directions,
 * returns false otherwise
 * @param {string} a - word we want to compare against
 * @param {string} b - word we want to compar against
 * @param {dictionary} c - stores exchange from a -> b
 * @param {dictionary} d - stores exchange from b -> a
 */
function wordsMatch (a, b, c = {}, d = {}) {
  if (a.length !== b.length) return false

  let check = ''

  for (let i = 0; i < a.length; i++) {
    let letter_a = a[i]
    let letter_b = b[i]

    if (!c[letter_a] && !d[letter_b]) {
      c[letter_a] = letter_b
      d[letter_b] = letter_a
    } else if (c[letter_a] !== letter_b || d[letter_b] !== letter_a) {
      return false
    }
    check += c[letter_a]
  }

  return (b == check)
}

/**
 * Returns true if b is a possible permutation of a, returns false otherwise
 * @param {array} a - an array representing a line of text
 * @param {array} b - an array representing a line of text
 */
function linesMatch (a, b) {
  if (a.length !== b.length) return false
  let c = {}
  let d = {}

  for (let i = 0; i < a.length; i++) {
    if (!wordsMatch(a[i], b[i], c, d)) return false
  }

  return true  
}

function makeDictionary (a, b) {
  let c = {}

  for (let i = 0; i < b.length; i++) {
    for (let j = 0; j < b[i].length; j++) {
      c[b[i][j]] = a[i][j]
    }    
  }

  return c
}

function decryptLine(dic, line) {
  let s = ''

  for (let i = 0; i < line.length; i++) {
    for (let j = 0; j < line[i].length; j++) {
      s += dic[line[i][j]]
    }
    if (i !== (line.length - 1)) s += ' '
  }

  return s
}

function solve (n) {
  n = n.split('\r\n')
  let index = 0
  let cases = +n[index++]
  let output = ''  

  for (let i = 0; i < cases; i++) {
    index++

    let enc_lines = []
    let dic = null

    while(n[index] !== '') {
      let enc_line = n[index].split(' ')
      enc_lines.push(enc_line)
      if (!dic && linesMatch(PLAIN_TEXT, enc_line)) {
        dic = makeDictionary(PLAIN_TEXT, enc_line)
      }
      index++
    }

    if (!dic) {
      output += 'No solution.' + '\n'
    } else {
      for (const enc_line of enc_lines) {
        output += decryptLine(dic, enc_line) + '\n'        
      }
    }

    if (i !== (cases - 1)) output += '\n'
  }

  return output
}

module.exports = { solve }
