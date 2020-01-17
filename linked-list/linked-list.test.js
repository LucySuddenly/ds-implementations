const LinkedList = require('./linked-list')

test("new LinkedList should return a LinkedList object",() => {
    expect(new LinkedList().constructor).toBe(LinkedList)
})

test("new LinkedList should be initialized with a null a root node", () => {
    expect(new LinkedList().root).toBe(null)
})