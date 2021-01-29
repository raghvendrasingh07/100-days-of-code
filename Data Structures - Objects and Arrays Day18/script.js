let journal = [];

function addEntry(events, squirrel) {
  journal.push({ events, squirrel });
  /* shorthand for declaring properties like events: events i.e. —if a property name in brace notation isn’t followed by a value, 
  its value is taken from the binding with the same name.*/
}

addEntry(["work", "touched tree", "pizza", "running", "television"], false);
addEntry(
  [
    "work",
    "ice cream",
    "cauliflower",
    "lasagna",
    "touched tree",
    "brushed teeth",
  ],
  false
);

console.log(journal);

let numbers = [10, 12, 37, 26];

const checkValueInArray = (n) => {
  if (numbers.includes(n)) {
    // Arrays have an includes method that checks whether a given value exists in the array.
    console.log(`Array have value ${n}.`);
  }
};

checkValueInArray(12);

for (let value of numbers) {
  console.log(value);
}

let object = {
  name: "Surat",
  age: 18,
  city: "New York",
};

// iterate over javascript object using for (..in) loop

for (let key in object) {
  console.log(key + " : " + object[key]);
}

// With ES6, if you need both keys and values simultaneously

for (let [key, value] of Object.entries(object)) {
  console.log(key + " : " + value);
}

// To avoid logging inherited properties

for (let key in object) {
  if (object.hasOwnProperty(key)) {
    console.log(key + " : " + object[key]);
  }
}

console.log([1, 2, 3, 2, 1].indexOf(2)); // indexOf() method returns the index at which the requested value was found
// → 1
console.log([1, 2, 3, 2, 1].lastIndexOf(2)); // To search from the end instead of the start, there’s a similar method called lastIndexOf.
// → 3

// --------------------- slice method --------------------------

console.log([0, 1, 2, 3, 4].slice(2, 4));
// → [2, 3]
console.log([0, 1, 2, 3, 4].slice(2));
// → [2, 3, 4]

// --------------------- concat and slice in action. ------------------

function remove(array, index) {
  return array.slice(0, index).concat(array.slice(index + 1));
}
console.log(remove(["a", "b", "c", "d", "e"], 2));
// → ["a", "b", "d", "e"]

// --------------------- padStart method ----------------------------

console.log(String(6).padStart(3, "0"));
// → 006

// --------------------- Alternative of padStart method ----------------------------

function zeroPad(number, width) {
  let string = String(number);
  while (string.length < width) {
    string = "0" + string;
  }
  return string;
}

console.log(zeroPad(7, 5));

// --------------------- split and join method ----------------------------

let sentence = "Secretarybirds specialize in stomping";
let words = sentence.split(" ");
console.log(words);
// → ["Secretarybirds", "specialize", "in", "stomping"]
console.log(words.join(". "));
// → Secretarybirds. specialize. in. stomping

// -------------------- Rest parameter ----------------------------------

function max(...numbers) {
  let result = -Infinity;
  for (let number of numbers) {
    if (number > result) result = number;
  }
  return result;
}
console.log(max(4, 1, 9, -2));
// → 9

// =======================================================================
// =============================== Day 19 ================================
// =======================================================================

/* Write a range function that takes two arguments, start and end, and returns
 an array containing all the numbers from start up to (and including) end. */

function rangeFun(start, end) {
  let arr = [];
  for (let i = start; i <= end; i++) {
    arr[i] = i;
  }
  return arr;
}

console.log(rangeFun(1, 10));

/* write a sum function that takes an array of numbers and returns the
sum of these numbers. Run the example program and see whether it does
indeed return 55.*/

function sum(...numbers) {
  let result = 0;
  for (let i = 0; i < numbers.length; i++) {
    result += numbers[i];
  }
  return result;
}

console.log(sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
