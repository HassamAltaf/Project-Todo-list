#!/usr/bin/env node

import inquirer from "inquirer";

let todos: string[] = [];
let loop = true;

while(loop){
    const answers: {
        Todo: string,
        addmore: boolean
    } = await inquirer.prompt([
        {
            type: "input",
            name: "Todo",
            message: "What do you want to add in your todo list? "
        },
        {
            type: "confirm",
            name: "addmore",
            message: "Do you want to add more in your todo list? ",
            default: false
        }
    ])
    const {Todo, addmore} = answers;
    loop = addmore
    if(Todo){
        todos.push(Todo)
    }else{
        console.log("Please add correct input")
    }
}

if(todos.length > 0){
    console.log("Your Todo List is: ")
    todos.forEach(todo => {
      console.log(todo)  
    });
}else{
    console.log("You did not add todo or todo not found!")
}
