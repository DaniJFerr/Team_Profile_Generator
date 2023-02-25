// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require ("./Employee")

 class Intern extends Employee {

  constructor(name, id, email, school) {

    super();

    this.name = name;
    this.id = id;
    this.email = email;
    this.school = school;
  }

  getRole() {
    
    console.log("Intern");
    return "Intern";
  }

  getSchool() {
    
    console.log("My School");
     return this.school;
   
    }

 }

 module.exports = Intern;