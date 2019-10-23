class Node{
    constructor(data){
      if (data === undefined){
        throw "input cannot be undefined"
      }
      this.data = data
      this.left = null
      this.right = null
    }
}

module.exports = Node  