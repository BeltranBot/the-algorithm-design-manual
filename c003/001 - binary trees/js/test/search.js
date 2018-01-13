const assert = require('chai').assert
const Tree = require('../Tree')

describe('Search Tree', function () {

  describe('Search Tree', function () {
    let tree = null
    let mySet = new Set
    let search = []

    while (mySet.size < 10) {
      let num = Math.round(Math.random() * 99) + 1
      mySet.add(num)
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

    it('look the three for ' + search[0], function () {
      assert.equal(true, tree.search(search[0]) !== null)
    })
    it('look the three for ' + search[1], function () {
      assert.equal(true, tree.search(search[1]) !== null)
    })
    it('look the three for ' + search[2], function () {
      assert.equal(true, tree.search(search[2]) !== null)
    })
    it('look the three for ' + search[3], function () {
      assert.equal(true, tree.search(search[3]) !== null)
    })
  })
})
