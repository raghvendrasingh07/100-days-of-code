const fs = require("fs");

const userObj = {
  name: "Sunny",
  age: 34,
  location: "Kota",
};

const jsonData = JSON.stringify(userObj);
fs.writeFile("users.json", jsonData, () => {
  console.log("Data written");
});
fs.readFile("users.json", "utf-8", (error, data) => {
  console.log(data);
});

fs.readFile("users.json", "utf-8", (error, data) => {
  const jsonConvertedUserData = JSON.parse(data);
  console.log(jsonConvertedUserData);
});
