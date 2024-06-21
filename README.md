# Logo Maker

## Description

Welcome to Logo Maker! This CLI application creates a customized shape with text in a few short steps. When you type in node index in the terminal, you'll be asked a few quick questions: what text would you like on the shape, what color, and what shape would you like to generate. When you've answered the questions, an svg file will be generated at the root level. You can open this with default browser or live server to see your generated shape! You can also bring this svg out of the project and use it elsewhere!

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Technologies Used](#technologies-used)
- [Links](#link-to-github-repository)

## Installation

Ensure that you've download the inquirer dependency using the command "npm i inquirer@8.2.4". Also install jest. To launch the application, simply type in node index into the terminal, and you'll be prompted with the first question.

## Usage

To use the application, You simply type in node index, answer the questions, and when you're finished with the last question, the svg file will be generated.

## Contributing

For future contibutors of this application, It woud be useful to be able to customize the size, or pick a color from a color wheel when selecting color. Feel free to ask questions, request new features, improve documentation, use visual aids, or add new innovative technology to reduce the size of the application.

## Tests

In shapes.test.js, I tested for each shape to accept a color, and anticipated that the output would be the color set with the method setColor(). These tests passed for all shapes.

In svg.test.js, the setText() suite tested if an error would be thrown if the user typed in more than 3 characters, and if it would successfully create the shape in an instance where there was 3 characters or less. Both of these tests passed.

In the setShape() test suite, I tested if the setShape() function is passed a circle, if it would in fact generate a circle. This test passed.

In the render() test suite, I tested if the render function returned an svg with the given shapeData and textData. I also tested scenarios where no shapeData was entered but textData was, or vice versa, and all tests passed.

## Questions

If you have any questions about the project, please contact me via:

- GitHub: [Adamh1223](https://github.com/Adamh1223)
- Email: [adam@hussmedia.io](mailto:adam@hussmedia.io)

## User Story

AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business

## Acceptance Criteria

GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database

## Technologies Used

Built with:

- HTML5
- CSS
- JavaScript
- Node.js

## Link to GitHub Repository

https://github.com/adamh1223/logo-maker

## Link to video demonstration

https://vimeo.com/963728495?share=copy

### <p align="center">[Back to Top](#logo-maker)</p>
