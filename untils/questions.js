const Start_Q = [
    {
        name: 'what do you want',
        type: 'list',
        message: `What would you like to do here?`,
        choices: ['View all departments', 'View all roles', 'View all employees', 'Add new department', 'Add new role', 'Add new employee', 'Update employee role', 'Exit'],
        default: 'View all departments'
    }
];

const addEmployee = [
    {
        name: 'firstName',
        type: 'input',
        message: `type employee's first name`
    },
    {
        name: 'lastName',
        type: 'input',
        message: `type employee's last name?`
    },
    {
        name: 'role',
        type: 'list',
        message: `What is the role of this employee?`,
        // connect roles from the db 
        choices: [`${roles}`]
    },
    {
        name: 'manager',
        type: 'list',
        message: `Who is this employee's manager?`,
        // connect employees with manager id from the db 
        choices: ['None', `${managers}`]
    },
];


const addRole = [
    {
        name: 'roleName',
        type: 'input',
        message: `What is the name of this role?`
    },
    {
        name: 'lastName',
        type: 'input',
        message: `What is the salary of this role?`
    },
    {
        name: 'department',
        type: 'list',
        message: `Which department is this role belonging to?`,
        // connect departments from the db 
        choices: [`${departments}`]
    }
];


const addDepartment = [
    {
        name: 'departmentName',
        type: 'input',
        message: `What is the name of the department?`
    }
];

module.exports = {Start_Q, addEmployee, addRole, addDepartment};