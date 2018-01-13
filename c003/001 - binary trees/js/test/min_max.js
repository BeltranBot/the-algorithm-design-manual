const assert = require('chai').assert
const Tree = require('../Tree')

describe('Min Max', function () {

  describe('Min Max', function () {
    let tree = null
    let mySet = new Set
    let search = []
    let min_val = Infinity
    let max_val = -1

    while (mySet.size < 10) {
      let num = Math.round(Math.random() * 99) + 1
      mySet.add(num)
      if (num < min_val) min_val = num
      if (num > max_val) max_val = num
      if (mySet.size % 2 == 0) {
        search.push(num)
      }
      if (tree === null) {
        tree = new Tree(num)
      } else {
        tree.insert(new Tree(num))
      }
    }

    it('print set', function () {
      console.log(mySet)
    })

    it('min value should be ' + min_val, function () {
      assert.equal(min_val, tree.min())
    })
    
    it('max value should be ' + max_val, function () {
      assert.equal(max_val, tree.max())
    })
  })
})
