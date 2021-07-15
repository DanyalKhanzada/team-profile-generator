const Intern = require('../lib/Intern');
const { expectToBe, expectStr, expectNum } = require('../utils/expect');

const intern = new Intern('Ahmed', 'Bashir', 1, 'UCF');

test('creates an intern object', () => {
    expectToBe(intern.firstName, 'Ahmed');
    expectToBe(intern.lastName, 'Bashir');
    expectNum(intern.id);
    expectStr(intern.email, '@');
    expectToBe(intern.role, 'Intern');
    expectToBe(intern.school, 'UCF');
    expectToBe(intern.icon, 'fas fa-graduation-cap');
});

test('gets intern\'s name', () => {
    expectStr(intern.getName(), `${intern.firstName} ${intern.lastName}`);
});

test('gets intern\'s ID', () => {
    expectStr(intern.getId(), `${intern.id}`);
});

test('gets intern\'s email', () => {
    expectStr(intern.getEmail(), intern.email);
});

test('gets intern\'s role', () => {
    expectStr(intern.getRole(), intern.role);
});

test('gets intern\'s school', () => {
    expectStr(intern.getSchool(), intern.school);
});

test('gets intern\'s icon', () => {
    expectStr(intern.getIcon(), intern.icon);
});