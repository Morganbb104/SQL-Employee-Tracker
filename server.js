const mysql = require("mysql2");
const express = require('express');
const inquirer = require("inquirer");
const { connection } = require('./db');
const consoleTable = require("console.table");
const cTable = require('console.table');;

const db = mysql.createConnection({
    host: "localhost",
    port: 3001,
    user: "root",
    password: "cchs8217291HCC",
    database: "company"
},
console.log('successfully connect to db')
);

// importing questions for inquirer
const { initialQ, employeeAdd, roleAdd, departmentAdd } = require('./utils/questions');



// viewDepartments() 
// viewRoles()