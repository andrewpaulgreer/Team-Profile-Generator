// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email
    }
    
    getName(){
    return this.name
    }
    
    getId(){
    return this.id
    }
    
    getEmail(){
    return this.email
    }

    getRole(){
    let role = "Employee"
    return role;
    }
}
module.exports = Employee

// =====================Classes Example Tmplate to work off of================================
// todo.js
// class Todo {
// constuctor(text){
// this.text = text;
// this.completed = false;
// }
// complete(){ // replacing this.prototype
//     this.completed = true;
// }
// updateText(text) {
//     this.text = text
// }

// }
// module.exports = Todo;

// // say i want colors on my todo
// //TodoColor.js
// const Todo = require("./Todo"); // bringing in the original Todo 

// class TodoColor extends Todo{
//     constructor(text, color){
//         super(text);
//         this.color = color;
//     }
//     getColor(){
//         return this.color;
//     }
// }

// module.exports = TodoColor;


// // app.js
// const myTodo = new Todo("teach classes");
// myTodo.updateText("teach es6 Classes"); // update text for todo
// myTodo.complete();

// const myRedTodo = new TodoColor("important: Buy milk", "red");
// myRedTodo.getColor() // red
// myRedTodo.updateText() // updates text
// myRedTodo.complete();


//==============================================================



