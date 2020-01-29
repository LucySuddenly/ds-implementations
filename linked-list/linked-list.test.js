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

describe(".insert(data)", () => {
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
        expect(ll.lastNode().data).toBe(14)
    })
    test("should increase the size counter by one for every new node", () => {
        expect(ll.size).toBe(6)
    })
})

describe(".insertAt(data, index)", () => {
    test("should throw if the index is less than -1, greater than the size of the ll, or NaN", () => {
        expect(() => ll.insertAt(0, -2)).toThrow()
    })
    test("should insert a new node at the specified index", () => {
        ll.insertAt(20, 0)
        expect(ll.root.data).toBe(20)
        ll.insertAt(30, 1)
        expect(ll.root.next.data).toBe(30)
    })
    test("should insert a new node at the end if the specified index is -1", () => {
        ll.insertAt(40, -1)
        expect(ll.lastNode().data).toBe(40)
    })
})

describe(".removeAt(index)", () => {
    test("should throw if the index is less than -1, greater than the size of the ll, or NaN", () => {
        expect(() => ll.removeAt(-2)).toThrow()
    })
    test("should remove a node at the given index", () => {
        expect(ll.removeAt(0)).toBe(20)
        expect(ll.size).toBe(9)
    })
})

describe(".search(data)", () => {
    test("should return the node associated with the data", () => {
        expect(ll.search(20).data).toBe(20)
    })
})