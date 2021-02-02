let rabbit = {};
rabbit.speak = (speaks) => {
  console.log(`Rabbit speak "${speaks}"`);
};
rabbit.speak("Hello");

function speak(line) {
  console.log(`The ${this.type} rabbit speaks '${line}'`);
}

let whiteRabbit = { type: "white", speak };
whiteRabbit.speak("Hello, I'm white");

let hungryRabbit = { type: "hungry", speak };
speak.call(hungryRabbit, "Burp!");

let empty = {};
console.log(empty.toString());

var Human = function () {
  this.canSpeak = true;
};
// Basic greet function which will greet based on the canSpeak flag
Human.prototype.greet = function () {
  if (this.canSpeak) {
    console.log("Hi, I am " + this.name);
  }
};
var Student = function (name, title) {
  Human.call(this); // Instantiating the Human object and getting the memebers of the class
  this.name = name; // inheriting the name from the human class
  this.title = title; // getting the title from the called function
};
Student.prototype = Object.create(Human.prototype);
Student.prototype.constructor = Student;
Student.prototype.greet = function () {
  if (this.canSpeak) {
    console.log("Hi, I am " + this.name + ", the " + this.title);
  }
};
