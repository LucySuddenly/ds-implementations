const BST = require("./bst.js")

test("new BST should return a BST object",() => {
    expect(new BST().constructor).toBe(BST)
})

test("new BST should be initialized with a null a root node", () => {
    expect(new BST().root).toBe(null)
})