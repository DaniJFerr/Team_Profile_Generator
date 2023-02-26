const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

// const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(__dirname, "team.html");

const render = require("./src/page-template.js");

// create an empty array to retrive the employee value
let team = [];

// create a function to start the program
async function startProgram(){
  addMember();
}
//create a function to start the user prompt list to select employee category and execute the category function  
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

//function to create a file in the output folder and method to passing in the outputPath, render(team) and "UTF-8" as parameters. 
   function createFile() {
      fs.writeFileSync(outputPath, render(team), "UTF-8");
      console.log("File Succefully created in the output folder");
  }

startProgram()