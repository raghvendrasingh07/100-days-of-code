function Circle(radius) {
  this.radius = radius;
  let defaultLocation = function (factor) {
    // ...
  };
  this.draw = function () {
    defaultLocation(2);
    console.log("draw");
  };
}

const circle = new Circle(3);
circle.location = { x: 2, y: 5 };
console.log(circle);

delete circle["location"];
console.log(circle);

// enumerating objects

for (let key in circle) {
  if (typeof circle[key] !== "function") console.log(key, circle[key]);
}

// another way to check key in object
const keys = Object.keys(circle);
console.log(keys);

// another way to check key in object
if ("radius" in circle) {
  console.log("Circle has a radius");
}

//==========Abstration: Hiding complexity and exposing important =====
circle.draw(); // we can't access defaultLocation member because it's local/say private which is done with decalaring as variable
//=======================================================

let obj1 = { value: 10 };

function increase(obj) {
  //address is copied and then object is passed
  obj.value++;
}
increase(obj1);
console.log(obj1); // 11

let x = 10;

function increase(x) {
  //value is copied and then passed
  x++;
}
increase(x);
console.log(x); // 10

// getter and setter methods

function Square(width, height) {
  this.width = width;
  this.height = height;
  let defaultLocation = { x: 0, y: 0 };
  this.getDefaultLocation = function () {
    return defaultLocation;
  };
  this.draw = function () {
    console.log(
      "Square is drawn with " +
        " width " +
        this.width +
        " and " +
        " height " +
        this.height
    );
  };

  Object.defineProperty(this, "defaultLocation", {
    get: function () {
      return defaultLocation;
    },
    set: function (value) {
      if (!value.x || !value.y) {
        throw new Error("Invalid Location");
      }
      defaultLocation = value;
    },
  });
}

const square = new Square(2, 3);
square.draw();
square.defaultLocation;
square.defaultLocation["x"] = 1;

// ========== Stopwatch Exercise ================

function Stopwatch() {
  let startTime,
    endTime,
    running,
    duration = 0;
  this.start = function () {
    if (running) {
      throw new Error("Stopwatch already started");
    }
    running = true;
    startTime = new Date();
  };
  this.stop = function () {
    if (!running) {
      throw new Error("Stopwatch not started");
    }
    running = false;
    endTime = new Date();
    const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
    duration += seconds;
  };
  this.reset = function () {
    startTime = null;
    endTime = null;
    duration = 0;
    running = false;
  };
  Object.defineProperty(this, "duration", {
    get: function () {
      return duration;
    },
  });
}

// const sw = new Stopwatch();
// sw.start();
// sw.stop();
// console.log(sw.duration);

//===============================================

// getter and setter

let person = {
  name: "John",
  age: 34,
  get nameOne() {
    return this.name;
  },
  set nameOne(value) {
    this.name = value;
  },
};

console.log(person);
console.log(person.nameOne); // "John"
person.nameOne = "Smith";
console.log(person.nameOne); // "Smith"

// ==============================================

/***************************************
Property Descriptors Methods and Usage
Object.defineProperty(obj, propName, {} )
Object.defineProperties(obj, props)
Object.getOwnPropertyNames(obj)
Object.getOwnPropertyDescriptor(obj, prop)
Object.getOwnPropertyDescriptors(obj)
Object.keys(obj) - list of enumerable properties
Object.values(obj) - list of enumerable prop values
obj.propertyIsEnumerable(prop)
obj.hasOwnProperty(prop)
Objects can be
1. Extensible - new properties added
2. Frozen - props cannot be changed in any way
3. Sealed - props can't be deleted or configured
          but are still writable
Object PROPERTIES can be 
1. Writable - change the value
2. Enumerable - seen through a for...in loop
3. Configurable - change the property descriptors
Object.isExtensible(obj)
Object.isFrozen(obj)
Object.isSealed(obj)
Object.preventExtensions(obj)
Object.freeze(obj)
Object.seal(obj)
Descriptor Groups
DATA            ACCESSOR          
value           get
writable        set
configurable    configurable
enumerable      enumerable
****************************************/
let log = console.log;
let obj = {
  name: "Bob",
  age: 45,
};
Object.defineProperty(obj, "test", {
  value: "Shagadelic",
  writable: true,
  configurable: true,
  enumerable: false,
});

Object.defineProperty(obj, "frank", {
  configurable: true,
  enumerable: true,
  get: () => this.value,
  set: (_val) => {
    this.value = _val + " baby!";
  },
});

for (let prop in obj) {
  log(prop);
}
log(obj, obj.test, obj.frank);
obj.frank = "Shagadelic";
log(obj.frank);

class Car {
  constructor(name) {
    this.name = name;
  }
  show() {
    return this.name;
  }
}

class Model extends Car {
  constructor(name, model) {
    super(name);
    this.model = model;
  }
  present() {
    return this.show() + this.model;
  }
}

let myCar = new Model("Range Rover", 2020);
console.log(myCar);

// add getters and setters in the class

class Person {
  constructor(name) {
    this.name = name;
  }
  get pname() {
    return this.name;
  }
  set pname(value) {
    this.name = value;
  }
}

const personOne = new Person("Harry");
personOne.pname = "Kyle";
console.log(personOne.pname);

// JavaScript Static Methods

class Truck {
  constructor(name) {
    this.name = name;
  }
  static hello() {
    return this.name + " from hello static method";
  }
}

const myTruck = new Truck("Dasun");
console.log(Truck.hello(myTruck));
