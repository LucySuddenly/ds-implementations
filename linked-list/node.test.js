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

test('a new Node should have a next pointer that defaults to null', () => {
    const node = new Node("test")
    expect(node.next).toBe(null)
})

test('a node should allow setting of next pointer to other nodes', () => {
    const node0 = new Node(0)
    const node1 = new Node(1)
    node0.next = node1
    expect(node0.next).toBe(node1)
})