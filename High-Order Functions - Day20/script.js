//--------------- Abstraction ---------------

function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}
repeat(3, console.log);

let labels = [];
repeat(5, (i) => {
  labels.push(`Unit ${i + 1}`);
});

console.log(labels);

// we have functions that create new functions.

function greaterThan(n) {
  return (m) => m > n;
}
let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));
// → true

//  Functions that change other functions.

function noisy(f) {
  return (...args) => {
    console.log("calling with", args);
    let result = f(...args);
    console.log("called with", args, ", returned", result);
    return result;
  };
}
noisy(Math.max)(3, 1, 4);

// Functions that provide new types of control flow.

function unless(test, then) {
  if (test) then();
}

function unless(test, then) {
  if (!test) then();
}
repeat(3, (n) => {
  unless(n % 2 == 1, () => {
    console.log(n, "is even");
  });
});

// forEach function example

let arr = ["A", "B"];
arr.forEach((l) => console.log(l));
