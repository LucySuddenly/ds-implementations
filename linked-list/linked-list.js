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
            index < -1 ){
            throw "index argument must be a positive integer less than the size of the linked list minus 1 or -1 for last node"
        }
        let newNode = new Node(data)
        if (index === 0) {
            this.root = newNode
        } else if (index === -1) {
            this.lastNode().next = newNode
        } else {
            let [prev, curr] = this.nodesAtIndexAndPrev(index)
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
    removeAt(index){
        if (index.constructor !== Number || 
            index > this.size - 1 || 
            index < -1 ){
            throw "index argument must be a positive integer less than the size of the linked list minus 1 or -1 for last node"
        } 
        if (index === 0){
            let ret = this.root
            this.root = this.root.next
            this.size--
            return ret.data
        } else {
            let [prev, curr] = this.nodesAtIndexAndPrev(index)
            prev.next = curr.next
            this.size--
            return curr.data
        }
    }
    nodesAtIndexAndPrev(index){
        let prev 
        let curr = this.root 
        let i = 0
        while (i < index){
            prev = curr
            curr = curr.next
            i++
        }
        return [prev, curr]
    }
}

module.exports = LinkedList