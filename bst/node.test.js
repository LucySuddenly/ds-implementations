const Node = require("./node.js")

test('new Node should return a Node object', () => {
    expect(new Node("test").constructor).toBe(Node)
})

test('new Node should be initialized with data', () => {
    const node = new Node("test")
    expect(node.data).toBeTruthy()
    expect(node.data).toBe("test")
})

test('new Node should throw error if initialized without data', () => {
    expect(() => {new Node}).toThrow()
})