import chalk from "chalk";
import inquirer from "inquirer";
class player {
    constructor(name) {
        this.fuel = 100;
        this.name = name;
    }
    FuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    FuelIncrease() {
        this.fuel = 100;
    }
}
class Opponent {
    constructor(name) {
        this.fuel = 100;
        this.name = name;
    }
    FuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
let players = await inquirer.prompt({
    type: "input",
    name: "name",
    message: "please enter your name",
});
let Opponents = await inquirer.prompt({
    type: "list",
    name: "select",
    message: "Select Your Opponent",
    choices: ["Skeleton", "Assassin", "Zombie"],
});
let p1 = new player(player.name);
let o1 = new Opponents(Opponents.select);
if (Opponents.select == "Skeleton") {
    console.log(`${chalk.bold.green(p1.name)} vs ${chalk.bold.red(o1.name)}`);
    let ask = await inquirer.prompt({
        type: "list",
        name: "opt",
        message: "Select Your Opponent",
        choices: ["Attack", "Drink portion", "Run For Your Life"],
    });
    if (ask.opt == "Attack") {
        let num = Math.floor(Math.random() * 2);
        if (num > 0) {
            p1.FuelDecrease();
            console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
            console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
        }
        if (num <= 0) {
            o1.FuelDecrease();
            console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
            console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
        }
    }
    if (ask.opt == "Drink Portion") {
        p1.FuelIncrease();
    }
    if (ask.opt == "Run For Your Life ") {
        console.log(chalk.red.bold.italic("You Lose, Better Luck Next Time"));
    }
}
