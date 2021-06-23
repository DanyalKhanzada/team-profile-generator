test('creates manager object', () => {
    const manager = new Manager('Zeenab', 1, 'email@qadam.ca', 200);

    expect(manager.name).toBe('Zeenab');
    expect(manager.id).toBeGreaterThanOrEqual(1);
    expect(manager.name).toEqual(expect.any(String));
    expect(manager.officeNumber).toBeGreaterThanOrEqual(1);
});

test('gets manager name', () => {
    const manager = new Manager('Zeenab', 1, 'email@qadam.ca', 200);

    const name = manager.getName();

    expect(name).toEqual(expect.stringContaining(manager.name));
});

test('gets manager id', () => {
    const manager = new Manager('Zeenab', 1, 'email@qadam.ca', 200);

    const id = manager.getId();

    expect(id).toEqual(expect.stringContaining(manager.id.toString()));
});

test('gets manager email', () => {
    const manager = new Manager('Zeenab', 1, 'email@qadam.ca', 200);

    const email = manager.getEmail();

    expect(email).toEqual(expect.stringContaining(manager.email));
});

test('gets manager office number', () => {
    const manager = new Manager('Zeenab', 1, 'email@qadam.ca', 200);

    const officeNumber = manager.getOfficeNumber();

    expect(officeNumber).toEqual(expect.stringContaining(manager.officeNumber.toString()));
});

test('gets manager role', () => {
    const manager = new Manager('Zeenab', 1, 'email@qadam.ca', 200);

    const role = manager.getRole();

    expect(role).toBe('Manager');
});