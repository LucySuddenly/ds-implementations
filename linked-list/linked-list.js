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
            this.lastNode().next = newNode
        }
        this.size++
    }
    insertAt(data, index){
        if (index.constructor !== Number || 
            index > this.size - 1 || 
            index < 0 ){
            throw "index argument must be a positive integer less than the size of the linked list minus 1"
        }
        let newNode = new Node(data)
        if (index === 0) {
            newNode.next = this.root
            this.root = newNode
        } else {
            let prev 
            let curr = this.root 
            let i = 0
            while (i < index){
                prev = curr
                curr = curr.next
                i++
            }
            newNode.next = curr 
            prev.next = newNode
        }
        this.size++
    }
    lastNode(){
        let currentNode = this.root
        while(currentNode.next){
            currentNode = currentNode.next
        }
        return currentNode
    }
}

module.exports = LinkedList