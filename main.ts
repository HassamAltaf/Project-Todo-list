#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

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
        console.log(chalk.bgCyanBright.black("Please add correct input!"))
    }
}

if(todos.length > 0){
    console.log(chalk.bgCyan.black("Your Todo List is: "))
    todos.forEach(todo => {
      console.log(chalk.bgCyanBright.black(todo))  
    });
}else{
    console.log(chalk.bgCyan.black("You did not add todo or todo not found!"))
}
