const BST = require('./bst.js')

let tree = new BST
tree.insert(10)
tree.insert(20)
tree.insert(5)
tree.insert(7)
tree.insert(9)

let root = tree.getRootNode()

tree.minNode(root)
tree.inOrder(root)
tree.search(5)