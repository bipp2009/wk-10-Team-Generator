const Manager = require ("../classes/manager")

test("I can successfully create a new manager instance", () => {
    const manager = new Manager();
    expect(typeof(manager)).toBe("object")
})

test("Details set by contructor all work as expected", () => {
    const manager = new Manager("John", 123, "john@gmail.com", "A12");
    expect(manager.name).toBe("John");
    expect(manager.id).toBe(123);
    expect(manager.email).toBe("john@gmail.com");
    expect(manager.officeNumber).toBe("A12")
})