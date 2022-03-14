DROP DATABASE IF EXISTS company;
CREATE DATABASE company;

USE company;

CREATE TABLE department(
    id INT AUTO_INCREMENT,
    PRIMARY KEY(id)
    department_name VARCHAR(30) NOT NULL,
    roles_id INT
);

CREATE TABLE roles(


);

CREATE TABLE employee(


);