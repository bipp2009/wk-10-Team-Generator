const inquirer = require("inquirer");
const fs = require('fs');
const util = require('util');
const path = require("path")
const randerHtml = require("./utils/generatehtml");
const Manager = require("./classes/manager");

const output_dir = path.resolve(__dirname, "output");
const output_path = path.join(output_dir, "team.html");

const teamArray = [];

function init() {

    function managerCreation() {
        inquirer.prompt([
            {
                type: "input",
                name: "managerName",
                message: "What is the managers name?"
            }, 
            {
                type: "input",
                name: "managerId",
                message: "What is the managers id?"
            },
            {
                type: "input",
                name: "managerEmail",
                message: "What is the managers email?"
            },
            {
                type: "input",
                name: "officeNumber",
                message: "What is the managers office number?"
            }
        ]).then(answers => {
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.officeNumber); 
            teamArray.push(manager);
            console.log(teamArray);
            teamCreation();
        })
    }

 function teamCreation(){

 }

 function engineerCreation() {

 }

 function internCreation(){

 }

 function generateHtmlPage(){

 }

 managerCreation();
}


init();

