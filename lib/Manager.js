// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, number){ // adding in the number for the manager, as well as name, id, and email from employee class
    super (name, id, email); // using the super constructor here to pull info form the employee class
    this.officeNumber = number;
    }
    getRole(){
    let role = "Manager"
    return role;
    }
    getOfficeNumber(){
        return this.officeNumber // calling for the return of the office number
    }

}

module.exports = Manager