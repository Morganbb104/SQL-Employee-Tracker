USE comapny;

INSERT INTO deparment(id,department_name)
VALUES
(1,'HR'),
(2,'PR'),
(3,'Technology'),
(4,'Administration')

INSERT INTO roles(id,title,salary,department_id)
VALUES
(1,'HR',50000,1),
(2,'Manager',55000,2),
(3,'Administrator',53000,3)
(4,'Technician Junior',60000,4),
(5,'Technician Senior',70000,5)


INSERT INTO employee(id,first_name,last_name,role_id,manager_id)
VALUES
(1,'Cheng-Chien','Huang','1','1'),
(2,'Stone','Comstock','2','2'),
(3,'Mike','Sanders','3','3'),
(4,'Namees','Albayate ','4','4'),
(5,'Sonia','Craciun','1','2'),
(6,'Andrew','An','3','4'),
