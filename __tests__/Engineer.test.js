const { expect, test } = require('@jest/globals');
const Engineer = require('../lib/Engineer.js');

test('creates engineer object', () => {
    const engineer = new Engineer('Alina', 5, 'email@yahoo.com', 'misses-alina');

    expect(engineer.name).toBe('Alina');
    expect(engineer.id).toBeGreaterThanOrEqual(1);
    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
})

test('gets engineer name', () => {
    const engineer = new Engineer('Alina', 5, 'email@yahoo.com', 'misses-alina');

    const name = engineer.getName();

    expect(name).toEqual(expect.stringContaining(engineer.name));
});

test('gets engineer id', () => {
    const engineer = new Engineer('Alina', 5, 'email@yahoo.com', 'misses-alina');

    const id = engineer.getId();

    expect(id).toEqual(expect.stringContaining(engineer.id.toString()));
});

test('gets engineer email', () => {
    const engineer = new Engineer('Alina', 5, 'email@yahoo.com', 'misses-alina');

    const email = engineer.getEmail();

    expect(email).toEqual(expect.stringContaining(engineer.email));
});

test('gets engineer github', () => {
    const engineer = new Engineer('Alina', 5, 'email@yahoo.com', 'misses-alina');

    const github = engineer.getGithub();

    expect(github).toEqual(expect.stringContaining(engineer.github));
})

test('gets engineer role', () => {
    const engineer = new Engineer('Alina', 5, 'email@yahoo.com', 'misses-alina');

    const role = engineer.getRole();

    expect(role).toBe('Engineer');
})