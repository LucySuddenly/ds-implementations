const LinkedList = require('./linked-list')

let ll = new LinkedList()

test("new LinkedList should return a LinkedList object",() => {
    expect(ll.constructor).toBe(LinkedList)
})

test("new LinkedList should be initialized with a null a root node", () => {
    expect(ll.root).toBe(null)
})

test("if LinkedList root is null, .insert() sets the root node", () => {
    ll.insert(5)
    expect(ll.root.data).toBe(5)
})