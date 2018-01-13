const assert = require('chai').assert
const Tree = require('../Tree')

describe('Delete node from tree', function () {

  describe('Delete node from tree', function () {
    let tree = null
    let mySet = new Set

    mySet.add(2)
    mySet.add(1)
    mySet.add(7)
    mySet.add(4)
    mySet.add(8)
    mySet.add(3)
    mySet.add(6)
    mySet.add(5)

    tree = new Tree(2)
    tree.insert(new Tree(1))
    tree.insert(new Tree(7))
    tree.insert(new Tree(4))
    tree.insert(new Tree(8))
    tree.insert(new Tree(3))
    tree.insert(new Tree(6))
    tree.insert(new Tree(5))

    it('print set', function () {
      console.log(mySet)
    })

    it('delete node 7', function () {
      tree.delete(7)
      tree.print()
    })

    it('delete node 5', function () {
      tree.delete(5)
      tree.print()
    })
  })
})
