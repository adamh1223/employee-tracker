const inquirer = require("inquirer");
const cTable = require("console.table");
const {
  getDepartments,
  getRoles,
  getEmployees,
  addDepartment,
  addRole,
  addEmployee,
  updateEmployeeRole,
} = require("./db/queries");

const mainMenu = () => {
  inquirer
    .prompt({
      name: "action",
      type: "list",
      message: "What would you like to do?",
      choices: [
        "View all departments",
        "View all roles",
        "View all employees",
        "Add a department",
        "Add a role",
        "Add an employee",
        "Update an employee role",
        "Exit",
      ],
    })
    .then((answer) => {
      switch (answer.action) {
        case "View all departments":
          viewDepartments();
          break;
        case "View all roles":
          viewRoles();
          break;
        case "View all employees":
          viewEmployees();
          break;
        case "Add a department":
          promptAddDepartment();
          break;
        case "Add a role":
          promptAddRole();
          break;
        case "Add an employee":
          promptAddEmployee();
          break;
        case "Update an employee role":
          promptUpdateEmployeeRole();
          break;
        case "Exit":
          connection.end();
          break;
      }
    });
};

const viewDepartments = () => {
  getDepartments().then(([rows]) => {
    console.table(rows);
    mainMenu();
  });
};

const viewRoles = () => {
  getRoles().then(([rows]) => {
    console.table(rows);
    mainMenu();
  });
};

const viewEmployees = () => {
  getEmployees().then(([rows]) => {
    console.table(rows);
    mainMenu();
  });
};

const promptAddDepartment = () => {
  inquirer
    .prompt({
      name: "name",
      type: "input",
      message: "Enter the name of the department:",
    })
    .then((answer) => {
      addDepartment(answer.name).then(() => {
        console.log("Department added!");
        mainMenu();
      });
    });
};

const promptAddRole = () => {
  getDepartments().then(([departments]) => {
    inquirer
      .prompt([
        {
          name: "title",
          type: "input",
          message: "Enter the name of the role:",
        },
        {
          name: "salary",
          type: "input",
          message: "Enter the salary of the role:",
        },
        {
          name: "department_id",
          type: "list",
          message: "Select the department for the role:",
          choices: departments.map((department) => ({
            name: department.name,
            value: department.id,
          })),
        },
      ])
      .then((answer) => {
        addRole(answer.title, answer.salary, answer.department_id).then(() => {
          console.log("Role added!");
          mainMenu();
        });
      });
  });
};

const promptAddEmployee = () => {
  Promise.all([getRoles(), getEmployees()]).then(([[roles], [employees]]) => {
    inquirer
      .prompt([
        {
          name: "first_name",
          type: "input",
          message: "Enter the first name of the employee:",
        },
        {
          name: "last_name",
          type: "input",
          message: "Enter the last name of the employee:",
        },
        {
          name: "role_id",
          type: "list",
          message: "Select the role of the employee:",
          choices: roles.map((role) => ({ name: role.title, value: role.id })),
        },
        {
          name: "manager_id",
          type: "list",
          message: "Select the manager of the employee:",
          choices: [{ name: "None", value: null }].concat(
            employees.map((employee) => ({
              name: `${employee.first_name} ${employee.last_name}`,
              value: employee.id,
            }))
          ),
        },
      ])
      .then((answer) => {
        addEmployee(
          answer.first_name,
          answer.last_name,
          answer.role_id,
          answer.manager_id
        ).then(() => {
          console.log("Employee added!");
          mainMenu();
        });
      });
  });
};

const promptUpdateEmployeeRole = () => {
  Promise.all([getEmployees(), getRoles()]).then(([[employees], [roles]]) => {
    inquirer
      .prompt([
        {
          name: "employee_id",
          type: "list",
          message: "Select the employee to update:",
          choices: employees.map((employee) => ({
            name: `${employee.first_name} ${employee.last_name}`,
            value: employee.id,
          })),
        },
        {
          name: "role_id",
          type: "list",
          message: "Select the new role of the employee:",
          choices: roles.map((role) => ({ name: role.title, value: role.id })),
        },
      ])
      .then((answer) => {
        updateEmployeeRole(answer.employee_id, answer.role_id).then(() => {
          console.log("Employee role updated!");
          mainMenu();
        });
      });
  });
};

// Start the application
mainMenu();
