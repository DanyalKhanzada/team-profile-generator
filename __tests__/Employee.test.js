const { expect, test } = require('@jest/globals');
const Employee = require('../lib/Employee.js');

test('creates employee object', () => {
    const employee = new Employee('Vardah', 123, 'email@icloud.com');

    expect(employee.name).toBe('Vardah');
    expect(employee.id).toBeGreaterThanOrEqual(1);
    expect(employee.name).toEqual(expect.any(String));
});

test('gets employee name', () => {
    const employee = new Employee('Vardah', 123, 'email@icloud.com');

    const name = employee.getName();

    expect(name).toEqual(expect.stringContaining(employee.name));
});

test('gets employee id', () => {
    const employee = new Employee('Vardah', 123, 'email@icloud.com');

    const id = employee.getId();

    expect(id).toEqual(expect.stringContaining(employee.id.toString()));
});

test('gets employee email', () => {
    const employee = new Employee('Vardah', 123, 'email@icloud.com');

    const email = employee.getEmail();

    expect(email).toEqual(expect.stringContaining(employee.email));
});

test('gets employee role', () => {
    const employee = new Employee('Vardah', 123, 'email@icloud.com');

    const role = employee.getRole();

    expect(role).toBe('Employee');
});