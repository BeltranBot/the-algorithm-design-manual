const assert = require('chai').assert
const Tree = require('../Tree')

describe('Print Tree', function () {

  describe('Print Tree', function () {
    let tree = null
    let mySet = new Set

    while (mySet.size < 10) {
      let num = Math.round(Math.random() * 9) + 1
      if (!mySet.has(num)) {
        mySet.add(num)
        if (tree === null) {
          tree = new Tree(num)
        } else {
          tree.insert(new Tree(num))
        }
      }
    }
    
    it('print set', function () {
      console.log(mySet)
    })

    it('print tree ascending order', function () {
      tree.print()
    })

    it('print tree descending order', function () {
      tree.print(true)
    })
  })
})
