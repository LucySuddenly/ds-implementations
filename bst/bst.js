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
        return node.data
      } else {
        return this.minNode(node.left)
      }
    }
    inOrder(node) {
      if (node !== null){
        this.inOrder(node.left)
        console.log(node.data)
        this.inOrder(node.right)
      }
    }
    getRootNode() { 
      return this.root; 
    } 
    search(node, data) {
      if (node === null)
        return null
      else if (node.data > data)
        return this.search(node.left, data)
      else if (node.data < data)
        return this.search(node.right, data)
      else
        console.log(node)
    }
}

module.exports = BST