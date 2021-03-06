const Start_Q = [{
        name: 'choice',
        type: 'list',
        message: `What would you like to do here?`,
        choices: [
            'View all departments',
            'View all roles',
            'View all employees',
            'Add new department',
            'Add new role',
            'Add new employee',
            'Update employee role',
            'Exit'
        ],
        default: 'View all departments'
    }];

const addEmployee = (roles, managers) => {
    return [
        {
            name: 'first_name',
            type: 'input',
            message: `type employee's first name`
        }, {
            name: 'last_name',
            type: 'input',
            message: `type employee's last name?`
        }, {
            name: 'role',
            type: 'list',
            message: `What is the role of this employee?`,
            // connect roles from the db
            choices: roles
        }, {
            name: 'manager',
            type: 'list',
            message: `Who is this employee's manager?`,
            // connect employees with manager id from the db
            choices: managers
        },
    ];

}


const addRole = (departments) => {

    return [
        {
            name: 'title',
            type: 'input',
            message: `What is the name of this role?`
        }, {
            name: 'salary',
            type: 'input',
            message: `What is the salary of this role(type number)?`
        }, {
            name: 'department_id',
            type: 'list',
            message: `Which department is this role belonging to?`,
            // connect departments from the db
            choices: departments
        }
    ];
}

const addDepartment = [{
        name: 'department_name',
        type: 'input',
        message: `What is the name of the department?`
    }];

const updateEmployee = (employeeList, roleLists) => {
    return [
        {
            name: 'update',
            type: 'list',
            message: 'Update Employee option',
            choices: employeeList
        }, {
            name: 'role',
            type: 'list',
            message: 'Pick a new role',
            choices: roleLists
        }
    ];
};

module.exports = {
    Start_Q,
    addEmployee,
    addRole,
    addDepartment,
    updateEmployee
};
