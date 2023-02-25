const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");
const Employee = require("./lib/Employee");

// TODO: Write Code to gather information about the development team members, and render the HTML file.

let team = [];

async function startProgram(){
    manager();

  function addMember () {
        inquirer.prompt([
            {
              type: "list",
              name: "type",
              message: "Add an Employee to the team?",
              choices: ["Manager","Engineer", "Intern"],
            },
          ])
          .then((val) => {
            if (val.type === "Manager") {
              engineerQuery();
            } else if (val.type === "Engineer") {
              internQuery();
            } else if (val.type === "Intern") {
                internQuery();
            } else {
              createFile();
            }
          });
  }
  
  function manager(){
        inquirer.prompt([
            {
                type:'input',
                name: 'name',
                message: 'What is the name of the manager?',
            },
    
            {
                type:'input',
                name: 'id',
                message: 'What is the manager ID ?',
            },
    
            {
                type:'input',
                name: 'email',
                message: 'What is the email?',
    
            },

            {
                type:'input',
                name: 'officeNumber',
                message: 'What is the office number?',
            },
        ])

    .then((val) => {
        team.push(new Manager(
            val.name,
            val.id,
            val.email,
            val.officeNumber
        ));
    })
    addMember();

  }
   
  let htmlDoc = render(team)

   await fs.writeFile(outputPath, htmlDoc);

}

startProgram()