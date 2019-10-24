const BST = require("./bst.js")

test("new BST should return a BST object",() => {
    expect(new BST().constructor).toBe(BST)
})