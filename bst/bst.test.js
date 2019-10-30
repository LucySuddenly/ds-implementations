const BST = require("./bst.js")

test("new BST should return a BST object",() => {
    expect(new BST().constructor).toBe(BST)
})

test("new BST should be initialized with a null a root node", () => {
    expect(new BST().root).toBe(null)
})

test("if a BST's root is null, .insert creates a root node whose data is equal to .insert's argument", () => {
    let bst = new BST()
    bst.insert("test")
    expect(bst.root.data).toBe("test")
})

describe("if a BST's root data !null,", () => {
    let bst = new BST()
    bst.insert(1)
    bst.insert(0)
    bst.insert(2)
    test(".insert adds a node to the left pointer if its argument is less than the root's data", () => {
        expect(bst.root.left.data).toBe(0)
    })
    test(".insert adds a node to the right pointer if its argument is less than the root's data", () => {
        expect(bst.root.right.data).toBe(2)
    })
})

test(".minNode returns the leftmost node", () => {
    let bst = new BST()
    bst.insert(10)
    bst.insert(9)
    bst.insert(8)
    bst.insert(7)
    bst.insert(6)
    bst.insert(5)
    bst.insert(4)
    bst.insert(3)
    let root = bst.getRootNode()
    let min = bst.minNode(root)
    expect(min.data).toBe(3)
})

test(".inOrder returns an array of sorted ascending values", () => {
    let bst = new BST()
    bst.insert(10)
    bst.insert(3)
    bst.insert(7)
    bst.insert(2)
    bst.insert(11)
    bst.insert(14)
    bst.insert(8)
    bst.insert(9)
    bst.insert(1)
    let root = bst.getRootNode()
    let result = true
    let inOrder = bst.inOrder(root)
    let test = [1,2,3,7,8,9,10,11,14]
    for (let i = 0; i < inOrder.length; i++) {
        if (inOrder[i] !== test[i]) {
            result = false
        }
    }
    expect(result).toBe(true)
})