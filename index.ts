#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk"
// 1) computer will generate a random  number
// 2) user input for guessing number
// 3) compare user input with computer generated number and show result


const randomNumber = Math.floor(Math.random()*6+1)
const answer = await inquirer.prompt([
  {
    name: "userGuessNumber",
    type: "number",
    message: chalk.blue("Please Guess a Number between 1 to 6:"),
  },
]);
if (answer.userGuessNumber === randomNumber) {
  console.log(chalk.green("Congratulations! You Guess Right Number"));
} else {
  console.log(chalk.red("Sorry! You Guess Wrong Number"));
}


