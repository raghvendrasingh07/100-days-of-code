const { error } = require("console");
const fs = require("fs");

// ============================== Sync Way ===============================

// fs.writeFileSync("hello.txt", "This is my first line of nodejs.");
// fs.appendFileSync("hello.txt", "Appending new line");

// const red = fs.readFileSync("hello.txt", "utf-8");
// console.log(red);

// fs.renameSync("hello.txt", "newHello.txt");

// fs.mkdirSync("pathHello");
// fs.rmdirSync("pathHello");

// fs.unlinkSync("newHello.txt");

// ============================== Async Way ==============================

// fs.writeFile("look.txt", "This is async writing.", (error) => {
//   console.log(error);
// });

// fs.appendFile("look.txt", "Appending a line in async way", (error) => {
//   console.log(error);
// });

// fs.rename("look.txt", "newlook.txt", (error) => {
//   console.log(error);
// });

// fs.readFile("newlook.txt", "utf-8", (error, data) => {
//   console.log(data);
// });

// fs.unlink("newlook.txt", (message) => {
//   console.log("File deleted successfully!");
// });
