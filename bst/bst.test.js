const BST = require("./bst.js")

test("new BST should return a BST object",() => {
    expect(new BST().constructor).toBe(BST)
})

test("new BST should be initialized without a root node", () => {
    expect(new BST().root).toBe(null)
})