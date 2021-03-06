const Node = require('./node.js')

class BST{
    constructor(){
      this.root = null
    }
    insert(data){
      let newNode = new Node(data)
      if (this.root === null){
        this.root = newNode
      } else {
        this.insertNode(this.root, newNode)
      }
    }
    insertNode(node, newNode) {
      if (node.data > newNode.data) {
        if (node.left === null) {
          node.left = newNode
        } else {
          this.insertNode(node.left, newNode)
        }
      } else {
        if (node.right === null) {
          node.right = newNode
        } else {
          this.insertNode(node.right, newNode)
        }
      }
    }
    minNode(node) {
      if (node.left === null) {
        return node
      } else {
        return this.minNode(node.left)
      }
    }
    inOrder(root) {
      // if (node !== null){
      //   this.inOrder(node.left)
      //   console.log(node.data)
      //   this.inOrder(node.right)
      // }
      let current = root 
      let stack = []
      let output = []
      while (true) {
        if (current !== null){
          stack.push(current)
          current = current.left
        } else if (stack.length > 0){
          current = stack.pop()
          output.push(current.data)
          current = current.right
        } else {
          break
        }
      }
      return output
    }
    getRootNode() { 
      return this.root; 
    } 
    search(node, data) {
      if (node === null)
        return -1
      else if (node.data > data)
        return this.search(node.left, data)
      else if (node.data < data)
        return this.search(node.right, data)
      else 
        return node
    }
}

module.exports = BST