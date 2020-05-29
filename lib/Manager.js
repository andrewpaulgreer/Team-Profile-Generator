// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, number){
    super (name, id, email);
    this.officeNumber = number;
    }
    getRole(){
    let role = "Manager"
    return role;
    }
    getOfficeNumber(){
        return this.officeNumber
    }

}
const newManager = new Employee("jeff", 2, "jeff@yahoo.com", "manager", 1800)
console.log(newManager)

module.exports = Manager