const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'.split('')

function valid_sub (enc, word, subs) {
  if (enc.length !== word.length) return false
  for (let i = 0; i < word.length; i++) {
    if (subs[enc[i]] && subs[enc[i]] !== word[i]) return false
  }
  return true
}

function create_sub (enc, word, subs) {
  let new_subs = {}
  for (const letter in subs) new_subs[letter] = subs[letter]

  for (let i = 0; i < word.length; i++) {
    let e = enc[i]
    let w = word[i]

    if (new_subs[e] === w) continue
    if (new_subs[e] !== null) throw Error
    if (Object.values(new_subs).indexOf(w) !== - 1) throw Error

    new_subs[e] = w
  }

  return new_subs
}

function decrypt (enc, words, subs = null) {
  if (!subs) {
    subs = {}
    ALPHABET.forEach(x => subs[x] = null)
  }

  for (const word of words[enc[0].length]) {
    if (!valid_sub(enc[0], word, subs)) continue

    try {
      let new_subs = create_sub(enc[0], word, subs)
      if (enc.length === 1) return [word]

      dec = decrypt(enc.slice(1, enc.length), words, new_subs)
      if (dec !== null) return [word].concat(dec)

    } catch (error) {
      continue
    }
    
  }
  return null
}

function solve (n) {
  n = n.split('\r\n')
  let output = ''
  let cases = +n[0]
  let index = 1
  let words = {}

  for (let i = 0; i < cases; i++) {
    let keyLength = n[index].length
    if (!words[keyLength]) words[keyLength] = []
    words[keyLength].push(n[index])
    index++
  }

  while(n[index] !== '') {
    let enc = n[index++].split(' ')
    let dec = decrypt(enc, words)

    if (dec) {
      output += dec.join(' ') + '\n'
    } else {
      output += enc.join(' ').replace(/\w/g, '*') + '\n'
    }
  }

  return output
}

module.exports = { solve }
