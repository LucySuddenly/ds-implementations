const Node = require('./node.js')

class LinkedList{
    constructor(){
        this.root = null
        this.size = 0
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
        this.size++
    }
}

module.exports = LinkedList