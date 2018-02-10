function checkUpLeft (grid, j, i, word, n = 1) {
  if ((--j >= 0) && (--i >= 0) && grid[j][i] === word[n]) {
    if (++n === word.length) return true
    return checkUpLeft(grid, j, i, word, n)
  }
  return false
}

function checkUp (grid, j, i, word, n = 1) {
  if ((--j >= 0) && grid[j][i] === word[n]) {
    if (++n === word.length) return true
    return  checkUp(grid, j, i, word, n)
  }
  return false
}

function checkUpRight (grid, j, i, word, n = 1) {
  if ((--j >= 0) && (++i < grid[j].length) && grid[j][i] === word[n]) {
    if (++n === word.length) return true
    return checkUpRight(grid, j, i, word, n)
  }
  return false
}

function checkLeft (grid, j, i, word, n = 1) {
  if ((--i >= 0) && grid[j][i] === word[n]) {
    if (++n === word.length) return true
    return checkLeft(grid, j, i, word, n)
  }
  return false
}

function checkRight (grid, j, i, word, n = 1) {
  if ((++i < grid[j].length) && grid[j][i] === word[n]) {
    if (++n === word.length) return true
    return checkRight(grid, j, i, word, n)
  }
  return false
}

function checkDownLeft (grid, j, i, word, n = 1) {
  if ((++j < grid.length) && (--i > 0) && grid[j][i] === word[n]) {
    if (++n === word.length) return true
    return checkDownLeft(grid, j, i, word, n)
  }
  return false  
}

function checkDown (grid, j, i, word, n = 1) {
  if((++j < grid.length) && grid[j][i] === word[n]) {
    if (++n === word.length) return true
    return checkDown(grid, j, i, word, n)
  }
  return false
}

function checkDownRight (grid, j, i, word, n = 1) {
  if ((++j < grid.length) && (++i < grid[j].length) && grid[j][i] === word[n]) {
    if (++n === word.length) return true
    return checkDownRight(grid, j, i, word, n)
  }
  return false
}

function checkForWord (grid, j, i, word) {
  if (checkUpLeft(grid, j, i, word)) return true
  if (checkUp(grid, j, i, word)) return true
  if (checkUpRight(grid, j, i, word)) return true
  if (checkLeft(grid, j, i, word)) return true
  if (checkRight(grid, j, i, word)) return true
  if (checkDownLeft(grid, j, i, word)) return true
  if (checkDown(grid, j, i, word)) return true
  if (checkDownRight(grid, j, i, word)) return true

  return false
}

function findWord (grid, word) {
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      if (grid[y][x] == word[0]) {
        if (word.length == 1) return [y + 1, x + 1].join(' ')
        if (checkForWord(grid, y, x, word)) return [y + 1, x + 1]. join(' ')
      }      
    }
  }
}

function solve (n) {
  n = n.split('\r\n')
  let index = 0
  let cases = +n[index++]
  let output = ''

  for (let i = 0; i < cases; i++) {
    index++
    
    let [rows, cols] = n[index++].split(' ').map(Number)
    let grid = []
    for (let row = 0; row < rows; row++) {
      grid.push(n[index++].split('').map(l => l.toLowerCase()))
    }

    let nWords = +n[index++]
    for (let j = 0; j < nWords; j++) {
      output += findWord(
        grid,
        n[index++].split('').map(l => l.toLowerCase())
      ) + '\n'
    }
    if (i != (cases - 1)) output += '\n'
  }

  return output
}

module.exports = { solve }
