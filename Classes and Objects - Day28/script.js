// Create a constructor function Calculator that creates objects with 3 methods:

// read() asks for two values using prompt and remembers them in object properties.
// sum() returns the sum of these properties.
// mul() returns the multiplication product of these properties.

function Calculator() {
  this.read = function (firstNum, secondNum) {
    this.firstNum = firstNum;
    this.secondNum = secondNum;
  };
  this.sum = function () {
    return this.firstNum + this.secondNum;
  };
  this.mul = function () {
    return this.firstNum * this.secondNum;
  };
}

let calculator = new Calculator();
calculator.read(3, 4);

console.log("Sum: " + calculator.sum());
console.log("Mul: " + calculator.mul());
