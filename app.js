const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output"); // add path for this to be rendered in the output folder, with blank html page
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

// Write code to use inquirer to gather information about the development team members,
// empty array to push responses into
const teamArr = [];

// creating different funciton to prompt the user with inquierer

function teamPrompt() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Please provide your name",
        validate: (response) => {
          if (response !== "") {
            //entered in validaiton so the return msut be a string
            return true;
          } else {
            return "please enter a valid charater input";
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "Please provide your employee ID",
        validate: (response) => {
          // created Validation so the user must input a number
          const valid = response.match(/^[1-9]\d*$/); // this syntax for the match took a while to reasearch/ get right
          if (valid) {
            return true;
          } else {
            return "You must endter a number between 1-10";
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "Please provide your email",
        validate: (response) => {
          if (response !== "") {
            return true;
          } else {
            return "please enter a valid charater input";
          }
        },
      },
      {
        type: "input",
        name: "officeNumber",
        message: "Please Enter Your Office Number:",
        validate: (response) => {
          const valid = response.match(/^[1-9]\d*$/);
          if (valid) {
            return true;
          } else {
            return "You must endter a valid number";
          }
        },
      },
    ])
    .then((answer) => {
      const manager = new Manager(
        answer.name,
        answer.id,
        answer.email,
        answer.officeNumber
      );
      teamArr.push(manager);
      chooseTeam();
    })
    .catch((err) => {
      throw err;
    });
}
// promp the manager to choose their team, picking from either engineer, or intern, also a choice to end adding employees.
function chooseTeam() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "userchoice",
        message: "Which role would you like to add to your team?",
        choices: [
          "Engineer",
          "Intern",
          "I do not want to add anyone else to my team",
        ],
      },
    ])
    .then(({ userchoice }) => {
      switch (userchoice) {
        case "Engineer":
          addEngineer();
          break;
        case "Intern":
          addIntern();
          break;
        default:
          createTeam();
      }
    })
    .catch((err) => {
      throw err;
    });
}
// funciton for adding the software engineers
function addEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Please provide your Engineer's name",
        validate: (response) => {
          if (response !== "") {
            return true;
          } else {
            return "please enter a valid charater input";
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "Please provide your Engineer's employee ID",
        validate: (response) => {
          const valid = response.match(/^[1-9]\d*$/);
          if (valid) {
            return true;
          } else {
            return "You must endter a number between 1-10";
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "Please provide your Engineer's email",
        validate: (response) => {
          if (response !== "") {
            return true;
          } else {
            return "please enter a valid charater input";
          }
        },
      },
      {
        type: "input",
        name: "github",
        message: "Please Enter Your Engineer's GitHub Username:",
        validate: (response) => {
          if (response !== "") {
            return true;
          } else {
            return "please enter a valid charater input";
          }
        },
      },
    ])
    .then((answer) => {
      const engineer = new Engineer(
        answer.name,
        answer.id,
        answer.email,
        answer.github
      );
      teamArr.push(engineer);
      chooseTeam();
    })
    .catch((err) => {
      throw err;
    });
}
// funciton for adding interns
function addIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Please provide Intern's your name",
        validate: (response) => {
          if (response !== "") {
            return true;
          } else {
            return "please enter a valid charater input";
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "Please provide your Intern's employee ID",
        validate: (response) => {
          const valid = response.match(/^[1-9]\d*$/);
          if (valid) {
            return true;
          } else {
            return "You must endter a number between 1-10";
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "Please provide Intern's your email",
        validate: (response) => {
          if (response !== "") {
            return true;
          } else {
            return "please enter a valid charater input";
          }
        },
      },
      {
        type: "input",
        name: "school",
        message: "Please Enter the name of your Intern's School:",
        validate: (response) => {
          if (response !== "") {
            return true;
          } else {
            return "please enter a valid charater input";
          }
        },
      },
    ])
    .then((answer) => {
      const intern = new Intern(
        answer.name,
        answer.id,
        answer.email,
        answer.school
      );
      teamArr.push(intern);
      chooseTeam();
    })
    .catch((err) => {
      throw err;
    });
}
//  create team HTML

function createTeam() {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR);
  }
  fs.writeFileSync(outputPath, render(teamArr), "utf-8");
}
// call team prompt funciton
teamPrompt();

// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
