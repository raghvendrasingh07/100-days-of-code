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

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// -------------------------filter----------------------

// Get 21 and older

// const canDrink = ages.filter(function (age) {
//   if (age >= 21) {
//     return true;
//   }
// });

const canDrink = ages.filter((age) => age >= 21);
console.log(canDrink);

const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
];

// Filter retail companies

const retailCompanies = companies.filter(
  (company) => company.category === "Retail"
);

console.log(retailCompanies);

// ---------------------------Map-----------------------------

// Create array of company names

const companiesNames = companies.map((company) => company.name);
console.log(companiesNames);

// -------------------------- Reduce method -------------------

const totalYears = companies.reduce(
  (total, company) => total + (company.end - company.start),
  0
);
console.log(totalYears);
