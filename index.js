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

// create an empty array to retrive the employees values
let team = [];

// create a function to start the program
async function startProgram(){
  addMember();
}
//create a function to start the user prompt to select employee category
 async function addMember () {
  await inquirer.prompt([
            {
              type: "list",
              name: "type",
              message: "Add an Employee to the team?",
              choices: ["Manager","Engineer", "Intern","Not at the momment"],
            },
          ])
          .then((val) => {
            if (val.type === "Manager") {
              manager();
            } else if (val.type === "Engineer") {
              engineer();
            } else if (val.type === "Intern") {
              intern();
            }else{
             
              createFile();
            }
          });
  }

  // add function for manager query and push the value to array team 
 async function manager(){
     await inquirer.prompt([
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
          console.log("Succefully add Manager to the team!")
      })
      addMember();
      
    }

 // add function for engineer query and push the value to array team 
    async function engineer(){
      await inquirer.prompt([
             {
                 type:'input',
                 name: 'name',
                 message: 'What is the name of the engineer?',
             },
     
             {
                 type:'input',
                 name: 'id',
                 message: 'What is the engineer ID ?',
             },
     
             {
                 type:'input',
                 name: 'email',
                 message: 'What is the email?',
     
             },
 
             {
                 type:'input',
                 name: 'gitHub',
                 message: 'What is the gitHub user name?',
             },
         ])
 
         .then((val) => {
           team.push(new Engineer(
               val.name,
               val.id,
               val.email,
               val.gitHub
           ));
           console.log("Succefully add Engineer to the team!")
       })

       addMember();
       
     }

 // add function for intern query and push the value to array team 
     async function intern(){
      await inquirer.prompt([
             {
                 type:'input',
                 name: 'name',
                 message: 'What is the name of the intern?',
             },
     
             {
                 type:'input',
                 name: 'id',
                 message: 'What is the intern ID ?',
             },
     
             {
                 type:'input',
                 name: 'email',
                 message: 'What is the email?',
     
             },
 
             {
                 type:'input',
                 name: 'schoolName',
                 message: 'What is the school name?',
             },
         ])
 
         .then((val) => {
           team.push(new Intern(
               val.name,
               val.id,
               val.email,
               val.schoolName
           ));
           console.log("Succefully add Intern to the team!")
       })
      
       addMember();
     }

  // let htmlDoc = render(team)

  //  await fs.writeFile(outputPath, htmlDoc);


startProgram()