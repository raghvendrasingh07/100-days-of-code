const chalk = require("chalk");

console.log(chalk.blue.bgRed("Hello world!"));

console.log(chalk.white.bgGreen("Hello world!"));

console.log(chalk.white.bgGreen("This is nodemon"));

var validator = require("validator");

const res = validator.isEmail("foo@bar");
console.log(res ? chalk.white.bgGreen(res) : chalk.white.bgRed(res));
