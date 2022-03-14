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
    id INT AUTO_INCREMENT,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT,
    PRIMARY KEY(id),
    FOREIGN KEY(id),
    FOREIGN KEY (department_id) REFERENCES department(id)

);

CREATE TABLE employee(
    id INT AUTO_INCREMENT,
    first_Name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT,
    PRIMARY KEY(id),
    FOREIGN KEY(manager_id) REFERENCES employees (id)



);