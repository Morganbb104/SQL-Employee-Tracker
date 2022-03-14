DROP DATABASE IF EXISTS comapny;
CREATE DATABASE company;

USE company;

CREATE TABLE employeeInfo(
    id INT NOT NULL AUTO_INCREMENT,
    first_Name VARCHAR(30)NOT NULL,
    last_Name VARCHAR(20)NOT NULL,
    primary key (id)



);