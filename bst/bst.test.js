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

