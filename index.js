const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const path = require("path");
const randerHtml = require("./utils/generatehtml");
const Manager = require("./classes/manager");
const Engineer = require("./classes/engineer");
const Intern = require("./classes/intern");

const output_dir = path.resolve(__dirname, "output");
const output_path = path.join(output_dir, "team.html");

const teamArray = [];

function init() {
  function managerCreation() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "managerName",
          message: "What is the managers name?",
        },
        {
          type: "input",
          name: "managerId",
          message: "What is the managers id?",
        },
        {
          type: "input",
          name: "managerEmail",
          message: "What is the managers email?",
        },
        {
          type: "input",
          name: "officeNumber",
          message: "What is the managers office number?",
        },
      ])
      .then((answers) => {
        const manager = new Manager(
          answers.managerName,
          answers.managerId,
          answers.managerEmail,
          answers.officeNumber
        );
        teamArray.push(manager);
        console.log(teamArray);
        teamCreation();
      });
  }

  function teamCreation() {
    inquirer
      .prompt([
        {
          type: "list",
          name: "nextMove",
          message: "Would you like to add any more employees?",
          choices: ["Add an Engineer", "Add an Intern", "I'm finished"],
        },
      ])
      .then((answer) => {
        if (answer.nextMove === "Add an Engineer") {
          engineerCreation();
        } else if (answer.nextMove === "Add an Intern") {
          internCreation();
        } else {
          generateHtmlPage();
        }
      });
  }

  function engineerCreation() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "engineerName",
          message: "What is the engineers name?",
        },
        {
          type: "input",
          name: "engineerId",
          message: "What is the engineers id?",
        },
        {
          type: "input",
          name: "engineerEmail",
          message: "What is the engineers email?",
        },
        {
          type: "input",
          name: "github",
          message: "What is the engineers github?",
        },
      ])
      .then((answers) => {
        const engineer = new Engineer(
          answers.engineerName,
          answers.engineerId,
          answers.engineerEmail,
          answers.github
        );
        teamArray.push(engineer);
        console.log(teamArray);
        teamCreation();
      });
  }

  function internCreation() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "internName",
          message: "What is the interns name?",
        },
        {
          type: "input",
          name: "internId",
          message: "What is the interns id?",
        },
        {
          type: "input",
          name: "internEmail",
          message: "What is the engineers email?",
        },
        {
          type: "input",
          name: "school",
          message: "What is the interns school?",
        },
      ])
      .then((answers) => {
        const intern = new Intern(
          answers.internName,
          answers.internId,
          answers.internEmail,
          answers.school
        );
        teamArray.push(intern);
        console.log(teamArray);
        teamCreation();
      });
  }

  function generateHtmlPage() {}

  managerCreation();
}

init();
