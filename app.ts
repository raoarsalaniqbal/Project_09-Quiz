#!usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";

let a = await inquirer.prompt({
    type: "input",
    name: "fname",
    message: "What is your name",

})
console.log(chalk.blue(a.fname));

let b = await inquirer.prompt({
    type: "input",
    name: "fname",
    message: "Where Are You From?",

})

console.log(chalk.blue(b.fname));

let c = await inquirer.prompt({
    type: "input",
    name: "fname",
    message: "What is Your Education?",

})

console.log(chalk.blue(c.fname));


