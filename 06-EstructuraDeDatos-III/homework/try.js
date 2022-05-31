class BinarySearchTree {

  constructor(value) {
    this.data = value
    this.left = null
    this.right = null
  }

  size() {
		let len = 0
		if (!this.left && !this.right)
			return 0
		if (this.left) len++
		if (this.right) len++

	}

  insert(value) {
		const pointer = (value > this.data) ? this.right : this.left
		if (pointer)
			pointer.insert(value)
		else {
			let node = new BinarySearchTree(value)
			value > this.data ? this.right = node : this.left = node
		}
  }

  contains(value) {}

  depthFirstForEach(order = 'in-order') {}

  breadthFirstForEach() {}
}

const three = new BinarySearchTree(10)
three.insert(5)
three.insert(20)
three.insert(15)
three.insert(40)
three.insert(7)
three.insert(30)
three.insert(2)
three.insert(8)
console.log(three)