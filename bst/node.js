class Node{
    constructor(data){
      if (data === undefined){
        throw "a new Node requires an argument, data cannot be undefined"
      }
      this.data = data
      this.left = null
      this.right = null
    }
}

module.exports = Node  