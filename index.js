const inquirer = require('inquirer')
const Employee = require('./lib/Employee.js');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const pageTemplate = require('./src/template.js');
const { generatePage, copyCSS } = require('./src/generate-page.js');

// check if string contains a letter
const regExp = /[a-zA-Z]/g;
// check if string is in email format
const regExpEmail = /\S+@\S+\.\S+/;
const employees = [];

// prompt user for team members
const promptManager = () => {
    console.log(`
▫ ╔═══════════════╗ ▫
╔═╝               ╚═╗
║ Your team profile ║
╚═╗               ╔═╝
▫ ╚═══════════════╝ ▫
`);
    return inquirer
        .prompt([{
            type: 'text',
            name: 'name',
            message: 'Please enter your manager\'s name',
            validate: nameInput => {
                if (!regExp.test(nameInput)) {
                    return 'Please enter a valid name.';
                }
                else {
                    return true;
                }
            }
        },
        {
            type: 'text',
            name: 'id',
            message: 'Please enter your manager\'s ID',
            validate: idInput => {
                if (!idInput || isNaN(idInput)) {
                    return 'Please enter a valid ID.';
                }
                else {
                    return true;
                }
            }
        },
        {
            type: 'text',
            name: 'email',
            message: 'Please enter your manager\'s email',
            validate: emailInput => {
                if (!regExpEmail.test(emailInput)) {
                    return 'Please enter a valid email.';
                }
                else {
                    return true;
                }
            }
        },
        {
            type: 'text',
            name: 'officeNumber',
            message: 'Please enter your manager\'s office number',
            validate: numberInput => {
                if (!numberInput || isNaN(numberInput)) {
                    return 'Please enter a valid number.';
                }
                else {
                    return true;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to enter another employee?',
            default: false
        }])
        // destructure manager properties from the prompt object
        .then(({ name, id, email, officeNumber, confirmAddEmployee }) => {
            let employee = new Manager(name, id, email, officeNumber);
            employees.push(employee);
            // if user chooses to enter another employee
            if (confirmAddEmployee) {
                return inquirer
                    .prompt([{
                        type: 'list',
                        name: 'whichEmployee',
                        message: 'Please choose an employee to add to your team.',
                        choices: ['Engineer', 'Intern']
                    }])
                    .then(({ whichEmployee }) => {
                        if (whichEmployee === 'Engineer') {
                            return promptEngineer();
                        }
                        else {
                            return promptIntern();
                        }
                    })
            }
            else {
                return employees;
            }
        })
}

const promptEngineer = () => {
    return inquirer
        .prompt([{
            type: 'text',
            name: 'name',
            message: 'Please enter your engineer\'s name',
            validate: nameInput => {
                if (!regExp.test(nameInput)) {
                    return 'Please enter a valid name.';
                }
                else {
                    return true;
                }
            }
        },
        {
            type: 'text',
            name: 'id',
            message: 'Please enter your engineer\'s ID',
            validate: idInput => {
                if (!idInput || isNaN(idInput)) {
                    return 'Please enter a valid ID.';
                }
                else {
                    return true;
                }
            }
        },
        {
            type: 'text',
            name: 'email',
            message: 'Please enter your engineer\'s email',
            validate: emailInput => {
                if (!regExpEmail.test(emailInput)) {
                    return 'Please enter a valid email.';
                }
                else {
                    return true;
                }
            }
        },
        {
            type: 'text',
            name: 'github',
            message: 'Please enter your engineer\'s GitHub username',
            validate: githubInput => {
                if (!githubInput || githubInput.includes(' ')) {
                    return 'Please enter a username.';
                }
                else {
                    return true;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to enter another employee?',
            default: false
        }])
        .then(({ name, id, email, github, confirmAddEmployee }) => {
            let employee = new Engineer(name, id, email, github);
            employees.push(employee);
            // if user chooses to add another employee
            if (confirmAddEmployee) {
                return inquirer
                    .prompt([{
                        type: 'list',
                        name: 'whichEmployee',
                        message: 'Please choose an employee to add to your team.',
                        choices: ['Engineer', 'Intern']
                    }])
                    .then(({ whichEmployee }) => {
                        if (whichEmployee === 'Engineer') {
                            return promptEngineer();
                        }
                        else {
                            return promptIntern();
                        }
                    })
            }
            else {
                return employees;
            }
        })
}

const promptIntern = () => {
    return inquirer
        .prompt([{
            type: 'text',
            name: 'name',
            message: 'Please enter your intern\'s name',
            validate: nameInput => {
                if (!regExp.test(nameInput)) {
                    return 'Please enter a valid name.';
                }
                else {
                    return true;
                }
            }
        },
        {
            type: 'text',
            name: 'id',
            message: 'Please enter your intern\'s ID',
            validate: idInput => {
                if (!idInput || isNaN(idInput)) {
                    return 'Please enter a valid ID.';
                }
                else {
                    return true;
                }
            }
        },
        {
            type: 'text',
            name: 'email',
            message: 'Please enter your intern\'s email',
            validate: emailInput => {
                if (!regExpEmail.test(emailInput)) {
                    return 'Please enter a valid email.';
                }
                else {
                    return true;
                }
            }
        },
        {
            type: 'text',
            name: 'school',
            message: 'Please enter your intern\'s school',
            validate: schoolInput => {
                if (!regExp.test(schoolInput)) {
                    return 'Please enter a valid school.';
                }
                else {
                    return true;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to enter another employee?',
            default: false
        }])
        .then(({ name, id, email, school, confirmAddEmployee }) => {
            let employee = new Intern(name, id, email, school);
            employees.push(employee);
            // if user chooses to add another employee
            if (confirmAddEmployee) {
                return inquirer
                    .prompt([{
                        type: 'list',
                        name: 'whichEmployee',
                        message: 'Please choose an employee to add to your team.',
                        choices: ['Engineer', 'Intern']
                    }])
                    .then(({ whichEmployee }) => {
                        if (whichEmployee === 'Engineer') {
                            return promptEngineer();
                        }
                        else {
                            return promptIntern();
                        }
                    })
            }
            else {
                return employees;
            }
        })
}

promptManager()
    .then(data => pageTemplate(data))
    .then(content => generatePage(content))
    .then(copyCSS());