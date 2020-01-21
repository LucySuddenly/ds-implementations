const Node = require('./node.js')

class LinkedList{
    constructor(){
        this.root = null
    }
    insert(data){
        let newNode = new Node(data)
        if (this.root === null){
            this.root = newNode
        } else {
            let currentNode = this.root
            while(currentNode.next){
                currentNode = currentNode.next
            }
            currentNode.next = newNode
        }
    }
}

module.exports = LinkedList