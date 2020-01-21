const LinkedList = require('./linked-list.js')

let ll = new LinkedList()

test("new LinkedList should return a LinkedList object",() => {
    expect(ll.constructor).toBe(LinkedList)
})

test("new LinkedList should be initialized with a null a root node", () => {
    expect(ll.root).toBe(null)
})

describe(".insert()", () => {
    test("if LinkedList root is null, sets the root node", () => {
        ll.insert(5)
        expect(ll.root.data).toBe(5)
    })
    test("if LinkedList root !null, adds a node to the end of the LL", () => {
        ll.insert(10)
        ll.insert(11)
        ll.insert(12)
        ll.insert(13)
        ll.insert(14)
        expect(ll.root.next.next.next.next.next.data).toBe(14)
    })
})
