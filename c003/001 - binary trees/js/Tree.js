module.exports = class Tree {
  constructor (value, parent = null) {
    this._parent = parent
    this._value = value
    this._left = null
    this._right = null
  }

  insert (tree) {
    if (tree._value < this._value) {
      if (this._left === null) {
        tree._parent = this
        this._left = tree
      } else {
        this._left.insert(tree)
      }
    } else if (tree._value > this._value) {
      if (this._right === null) {
        tree._parent = this
        this._right = tree
      } else {
        this._right.insert(tree)
      }
    }
  }

  print (order = false) {
    if (order) {
      if (this._right !== null) this._right.print(order)
      console.log(this._value)
      if (this._left !== null) this._left.print(order)
    } else {
      if (this._left !== null) this._left.print(order)
      console.log(this._value)
      if (this._right !== null) this._right.print(order)
    }
  }

  search (value) {
    if (this._value === value) return this
    if (this._left !== null && value < this._value) {
      return this._left.search(value)
    } else if (this._right !== null && value > this._value) {
      return this._right.search(value)
    }
    return null
  }

  max () {
    if (this._right !== null) return this._right.max()
    return this._value
  }

  min () {
    if (this._left !== null) return this._left.min()
    return this._value
  }
  
  getMinNode () {
    if (this._left !== null) return this._left.getMinNode()
    return this

  }

  delete (value, root = this) {
    if (root == null) return null
    if (value < root._value) {
      root._left = root._left.delete(value)
    } else if (value > root._value) {
      root._right = root._right.delete(value)
    } else {
      // case 1: no child
      if (root._left === null && root._right === null) {
        root = null        
      } else if (root._left === null) { // case 2: one child
        let temp = root
        root = root._right
        temp = null
      } else if (root._right === null) {
        let temp = root
        root = root._left
        temp = null
      } else { // case 3: 2 children
        let minNode = root._right.getMinNode()
        root._value = minNode._value
        root._right = root._right.delete(minNode._value)
      }
    }
    return root
  }
}