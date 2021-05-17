const Intern = require ("../classes/intern")

test("I can successfully create a new intern instance", () => {
    const intern = new Intern();
    expect(typeof(intern)).toBe("object")
})

test("Details set by contructor all work as expected", () => {
    const intern = new Intern("John", 123, "john@gmail.com", "Leeds");
    expect(intern.name).toBe("John");
    expect(intern.id).toBe(123);
    expect(intern.email).toBe("john@gmail.com");
    expect(intern.school).toBe("Leeds")
})