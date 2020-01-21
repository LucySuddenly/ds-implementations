const LinkedList = require('./linked-list.js')

let ll = new LinkedList()


describe("new LinkedList should", () => {
    test("return a LinkedList object",() => {
        expect(ll.constructor).toBe(LinkedList)
    })

    test("be initialized with a null root node pointer", () => {
        expect(ll.root).toBe(null)
    })
    test("be initialized with a size counter equal to zero", () => {
        expect(ll.size).toBe(0)
    })
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
    test("should increase the size counter by one for every new node", () => {
        expect(ll.size).toBe(6)
    })
})
