function sum() {
  var add = 2 + 2;
  console.log(this);
}
sum();

let person = {
  name: "Sunny",
  age: 34,
  greet: function () {
    console.log(`Hello ${this.name}. Your age is ${this.age}.`);

    function child() {
      var name = "John";
      console.log(`Child name ${name}`);
      console.log(this);
    }
    child();
  },
};

person.greet();

async function newHello() {
  console.log("Before response");
  let response = await fetch("https://jsonplaceholder.typicode.com/posts");
  console.log("After response");
  let res = response.json();
  return res;
}

console.log(newHello().then((res) => console.log(res)));
console.log("Promise pending");
