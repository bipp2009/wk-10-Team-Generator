const Engineer = require ("../classes/engineer")

test("I can successfully create a new engineer instance", () => {
    const engineer = new Engineer();
    expect(typeof(engineer)).toBe("object")
})

test("Details set by contructor all work as expected", () => {
    const engineer = new Engineer("John", 123, "john@gmail.com", "github");
    expect(engineer.name).toBe("John");
    expect(engineer.id).toBe(123);
    expect(engineer.email).toBe("john@gmail.com");
    expect(engineer.github).toBe("github")
})