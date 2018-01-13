const assert = require('chai').assert
const Tree = require('../Tree')

describe('Create Tree', function () {

  describe('Create tree', function () {
    let tree = new Tree(2)
    let left = new Tree(1)
    let right = new Tree(3)

    tree.insert(left)
    tree.insert(right)

    it('left node value should be 1', function () {
      assert.equal(tree._left._value, 1)
    })

    it('rigth node value should be 3', function () {
      assert.equal(tree._right._value, 3)
    })

    it('root value should be 2', function () {
      assert.equal(tree._left._parent._value, 2)
    })
  })
})
