const mysql = require("mysql2");
const express = require('express');
const inquirer = require("inquirer");
// const { connection } = require('./db');
const consoleTable = require("console.table");
const router = express.Router();

//connect to db
const db = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "cchs8217291HCC", //remember to hide your pw
    database: "company"
},
console.log('successfully connect to db')
);
db.connect((err) => {
    if(err) throw err;
    console.log('connected to db');
    start();
  }
  );

// importing questions for inquirer
const {Start_Q, addEmployee, addRole, addDepartment} = require('./untils/questions.js');
// dotenv.config();

function start() {
    inquirer.prompt(Start_Q)
        .then((answer) => {
            switch (answer.choice) {
                
                case 'View all employees':
                    
                    viewEmployees();
                    break;
                case 'View all roles':

                    viewRoles();
                    break;
                case 'View all departments':

                    viewDepartments();
                    break;
                case 'Add new employee':

                    addEmployeeFunc();
                    break;
                case 'Add new role':

                    addRoleFunc();
                    break;
                case 'Add new department':

                    addDepartmentFunc();
                    break;
                case 'Quit':

                    Quit();
                    break;
            }

        }

        )
}


function viewEmployees() {
    const request = "SELECT * FROM employee";
    db.query(request, function(err, res) {
      if (err) throw err;
      console.log("Viewing All Employees");
      console.table(res);
      inquirer.prompt([
          {
              type: 'list',
              name: 'choice',
              message: 'select an option.',
              choices: [
                  'Main Menu',
                  'Quit'
              ],
          }
      ])
      .then((answer) => {
          switch (answer.choice) {
              case 'Main Menu':
                  start();
                break;
                case 'Quit':
                    Quit();
                    break;
          }
      })
    //   start();
    }) 
  };


  function viewRoles() {
    let request = "SELECT * FROM roles";
    db.query(request, function(err, res) {
        if (err) throw err;
        console.log("Viewing All Roles");
        console.table(res);
        inquirer.prompt([
            {
                type: 'list',
                name: 'choice',
                message: 'select an option.',
                choices: [
                    'Main Menu',
                    'Quit'
                ]
            }
        ])
        .then((answer)=>{
            switch (answer.choice) {
                case 'Main Menu':
                    start();
                    break;
                case 'Quit':
                Quit();
                break;
            }
        })
        
    })
}

function viewDepartments() {
    const request = "SELECT * FROM department";
    db.query(request, function(err, res) {
        if (err) throw err;
        console.log("Viewing All Departments");
        console.table(res);
        inquirer.prompt([
            {
                type: 'list',
                name: 'choice',
                message: 'select an option.',
                choices: [
                    'Main Menu',
                    'Quit'
                ]
            }
        ])
       .then((answer) => {
           switch (answer.choice){
               case 'Main Menu':
                   start();
                   break;
                   case 'Quit':
                       Quit();
                       break;
           }
       })
    })
}


function addEmployeeFunc() {
    console.log('add new employee')
    inquirer.prompt (addEmployee) // from untilis/ const addEmployee
    .then(function (response) {
        connection.query('INSERT INTO employee(first_name, last_name, roles_id, manager_id) VALUES (?,?,?,?)', 
        [response.first_name, response.last_name, response.role_id, response.manager_id]), function(err,res) {
            if (err) throw err;
            console.table(res);
            inquirer.prompt([
                {
                    type: 'list',
                    name: 'choice',
                    message: 'select an option.',
                    choices: [
                        'Main Menu',
                        'Quit'
                    ]
                }
            ])
           .then((answer) => {
               switch (answer.choice){
                   case 'Main Menu':
                       start();
                       break;
                       case 'Quit':
                           Quit();
                           break;
               }
           })
        }
    })
}


function  addRoleFunc() {
    console.log('add new employee')
    let request = "SELECT * FROM department";
    console.log("request")
    db.query(request,function(err,res){
        console.log("this is query")
    if (err) throw err;
    // console.log(res)
    let department = res.map((x)=>({name:x.department_name,value:x.id}))
    // console.log(department)
    let roleQuestion = addRole(department)
    
    inquirer.prompt (roleQuestion) // from untilis/ const addRole
    .then(function (response) {
        db.query('INSERT INTO roles(title, salary, department_id) VALUES (?,?,?)', 
        [ response.title, response.salary, response.department_id], function(err,res) {
            if (err) throw err;
            console.table(res);
            inquirer.prompt([
                {
                    type: 'list',
                    name: 'choice',
                    message: 'select an option.',
                    choices: [
                        'Main Menu',
                        'Quit'
                    ]
                }
            ])
           .then((answer) => {
               switch (answer.choice){
                   case 'Main Menu':
                       start();
                       break;
                       case 'Quit':
                           Quit();
                           break;
               }
           })
        })
    })
})
}


function  addDepartmentFunc() {
    console.log('add new employee')
    inquirer.prompt (addDepartment) // from untilis/ const addDepartment
    .then(function (response) {
        db.query('INSERT INTO department(department_name) VALUES (?)', 
        response.department_name, function(err,res) {
            if (err) throw err;
            console.table(res);
            inquirer.prompt([
                {
                    type: 'list',
                    name: 'choice',
                    message: 'select an option.',
                    choices: [
                        'Main Menu',
                        'Quit'
                    ]
                }
            ])
           .then((answer) => {
               switch (answer.choice){
                   case 'Main Menu':
                       start();
                       break;
                       case 'Quit':
                           Quit();
                           break;
               }
           })
        })
    })
}


function Quit() {
    console.log('Goodbye! see you!');
    process.exit();
    
    
}