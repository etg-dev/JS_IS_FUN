/*

Objects, in JavaScript, are the most important data type and form the building blocks for modern JavaScript. These objects are quite different from JavaScript’s primitive data types (Number, String, Boolean, null, undefined, and symbol) in the sense that these primitive data types all store a single value each (depending on their types).


const myObject = new Object(value)

myObject.name = "erfan";

let object_name = {
    key_name : value,
    ...
}

*/

//We earlier learned array features in jsFeatures section

//Just for review check these examples

const firstObject = {
  fName: "John",
  lName: "Doe",
};

console.log(firstObject.fName);
console.log(firstObject["lName"]);

//you can also add property to firstObject after declaration

firstObject.age = 48;

console.log(firstObject["age"]);

//getter and setter syntax in javaScript

const secondObject = {
  _fName: "John",
  _lName: "Doe",

  get fName() {
    return this._fName;
  },

  set fName(fName) {
    this._fName = fName;
  },
};

secondObject.fName = "Joe";

console.log(secondObject.fName);

// => object its non-primitive

const a = { x: 1 };

const b = { x: 1 };

console.log(a === b);
//result is false

const c = a;

console.log(c === a);
//result is true

//also you can itrate throgh object with for in loop

const myObject = {
  fName: "John",
  lName: "Doe",
  eyeColor: "Brown",
  score: [1, 2, 3, 4, { a: "inner Object", b: "b", c: 12 }],
};

// print "inner Object" without using any key directly !
// I mean you cannot wirte this if (key === " score") { do sth }

//one of the solution is :

for (const key in myObject) {
  if (Array.isArray(myObject[key])) {
    for (const i of myObject[key]) {
      if (!Array.isArray(i) && typeof i === "object") {
        for (const innerKey in i) {
          if (i[innerKey] === "inner Object") {
            console.log(i[innerKey]);
          }
        }
      }
    }
  }
}
