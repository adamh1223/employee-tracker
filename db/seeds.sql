USE employee_tracker;

INSERT INTO department (name) VALUES ('Engineering'), ('Finance'), ('Human Resources');

INSERT INTO role (title, salary, department_id) VALUES 
('Software Engineer', 60000, 1),
('Accountant', 50000, 2),
('HR Manager', 70000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES 
('John', 'Doe', 1, NULL),
('Jane', 'Smith', 2, 1),
('Emma', 'Johnson', 3, NULL);
