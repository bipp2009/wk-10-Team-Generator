
const Employee = require ("../classes/employee")

test("I can successfully create a new employee instance", () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe("object")
})

test("Details set by contructor all work as expected", () => {
    const employee = new Employee("John", 123, "john@gmail.com");
    expect(employee.name).toBe("John");
    expect(employee.id).toBe(123);
    expect(employee.email).toBe("john@gmail.com")
})