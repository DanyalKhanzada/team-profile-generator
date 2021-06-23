test('creates intern object', () => {
    const intern = new Intern('Rebecca', 304, 'email@uoft.com', 'University of Toronto');

    expect(intern.name).toBe('Rebecca');
    expect(intern.id).toBeGreaterThanOrEqual(1);
    expect(intern.name).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
})

test('gets intern name', () => {
    const intern = new Intern('Rebecca', 304, 'email@uoft.com', 'University of Toronto');

    const name = intern.getName();

    expect(name).toEqual(expect.stringContaining(intern.name));
});

test('gets intern id', () => {
    const intern = new Intern('Rebecca', 304, 'email@uoft.com', 'University of Toronto');

    const id = intern.getId();

    expect(id).toEqual(expect.stringContaining(intern.id.toString()));
});

test('gets intern email', () => {
    const intern = new Intern('Rebecca', 304, 'email@uoft.com', 'University of Toronto');

    const email = intern.getEmail();

    expect(email).toEqual(expect.stringContaining(intern.email));
});

test('gets intern school', () => {
    const intern = new Intern('Rebecca', 304, 'email@uoft.com', 'University of Toronto');

    const school = intern.getSchool();

    expect(school).toEqual(expect.stringContaining(intern.school));
})

test('gets intern role', () => {
    const intern = new Intern('Rebecca', 304, 'email@uoft.com', 'University of Toronto');

    const role = intern.getRole();

    expect(role).toBe('Intern');
})