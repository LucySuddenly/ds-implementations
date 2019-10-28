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

test('a new Node should have null left and right pointers', () => {
    const node = new Node("test")
    expect(node.left).toBe(null)
    expect(node.right).toBe(null)
})

test('a node should allow setting of right and left pointers to other nodes', () => {
    const node1 = new Node(1)
    const node2 = new Node(2)
    node1.right = node2 
    expect(node1.right).toBe(node2)
})