const os = require("os");

console.log("Arch: " + os.arch());

let Totalmemory = os.totalmem();
console.log("Total memory: " + Totalmemory / 1024 / 1024 / 1024);

console.log("Host Name: " + os.hostname());
console.log("PlatForm: " + os.platform());
