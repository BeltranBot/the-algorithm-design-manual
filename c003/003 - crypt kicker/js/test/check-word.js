const assert = require('chai').assert
const check_word = require('../solve').check_word

describe('', function () {
  let a = 'twelve'
  let b = 'qlxhix'

  it('is qlxhix a possible value for twelve? should return 1', () => {
    assert.equal(1, check_word(a, b))
  })

  a = 'boring'
  it('is qlxhix a possible value for boring? should return 0', () => {
    assert.equal(0, check_word(a, b))
  })
  
})
