#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";


let myBalance: number = 100000;
let myPin: number = 1234;
console.log(chalk.greenBright("\n\t\t\t\t\t\t\t  WELCOME TO A.T.M \t\t\t\t\t\t\t\t\t\n"));


let pinAsk = await inquirer.prompt([
  {
    name: "pin",
    type: "number",
    message: chalk.blue(" Enter Your Pin : "),
  },
]);
if (pinAsk.pin === myPin) {
  console.log(chalk.yellow("\nCongratulation ! You've Enter A Right Pin.\n"));
  let optionsAsk = await inquirer.prompt([
    {
      name: "options",
      type: "list",
      message: chalk.rgb(255,140,0)("Select One Of The Option :"),
      choices: ["withdraw","checkbalance"],
    },
  ]);
  if (optionsAsk.options === "withdraw") {
    let moneyAsk = await inquirer.prompt([
      {
        name: "money",
        type: "number",
        message: chalk.green("\nEnter How Much Money You Want To Get : \n"),
      },
    ]);
    if (moneyAsk.money >= myBalance) {
      console.log(chalk.red("\nSorry ! You Dont Have Money.\n"));
      
    } else {
      console.log (chalk.rgb(170, 51, 106)(
        `\n Your Withdraw Amount Is ${moneyAsk.money}, Now Your Current Balance Is ${myBalance - moneyAsk.money}. `
      ));
    }
  } else if (optionsAsk.options === "checkbalance") {
    console.log(myBalance);
  }
} else {
  console.log(chalk.red("\nSorry ! You've Entered A Wrong Pin.\n"));
}
