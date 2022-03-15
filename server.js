const mysql = require("mysql2");
const express = require('express');
const inquirer = require("inquirer");
const { connection } = require('./db');
const consoleTable = require("console.table");
const cTable = require('console.table');;

//connect to db
const db = mysql.createConnection({
    host: "localhost",
    port: 3001,
    user: "root",
    password: "cchs8217291HCC", //remember to hide your pw
    database: "company"
},
console.log('successfully connect to db')
);
db.connect((err) => {
    if(err) throw err;
    console.log('connected to db');
    beginPrompts();
  }
  );

// importing questions for inquirer
const {Start_Q, addEmployee, addRole, addDepartment} = require('./utils/questions');
dotenv.config();

function start() {
    inquirer.prompt(Start_Q)
        .then((answer) => {
            switch (answer.choice) {
                
                case 'View Employees':
                    
                    viewEmployees();
                    break;
                case 'View Roles':

                    viewRoles();
                    break;
                case 'View Departments':

                    viewDepartments();
                    break;
                case 'Add New Employee':

                    addEmployee();
                    break;
                case 'Add Role':

                    addRole();

                case 'Add Department':

                    addDepartment();

                case 'Quit':

                    Quit();
                    break;
            }

        }

        )
}


function viewEmployees() {
    const request = "SELECT * FROM employees";
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
           }
       })
    })
}
