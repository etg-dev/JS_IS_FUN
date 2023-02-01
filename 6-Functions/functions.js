//A JavaScript function is executed when "something" invokes it (calls it).

//*                     consider this example
let reuslt = 0;
const a = 3;
const b = 4;
reuslt = a * b;
reuslt = a * b;
reuslt = a + b;
//that not a good practice

//!when we wanna repeate or organize
//You can use the same code many times with different arguments, to produce different results.

/////////////////////////////////////////////////////////////
//?                      Funciton Syntax

// function name(parameter1, parameter2, parameter3) {
// code to be executed
//     }

function mult() {
  console.log(a * b);
}

function sum(a, b) {
  console.log(a + b);
}

//funciton with return
function toCelsius(fahrenheit) {
  return (5 / 9) * (fahrenheit - 32);
}

//Function Invocation
console.log("***mult function output***");
mult();

console.log("***sum function output***");
sum(12, 14);

let test = toCelsius(77);
console.log("***toCelsius function output***");
console.log("The temperature is " + toCelsius(77) + " Celsius");

//!                          rest args syntax
function infinitySum(...theArgs) {
  let total = 0;
  for (const arg of theArgs) {
    total += arg;
  }
  return total;
}

const resultInfinitySum = infinitySum(1, 2, 3, 4);
console.log("***infinitySum function output***");
console.log(resultInfinitySum);

/////////////////////////////////////////////////////////////
//?                          expression function

const pluseTwo = function (x) {
  return x + 2;
};
const resultPluseTwo = pluseTwo(2);

console.log("***testExpression function output***");
console.log(resultPluseTwo);

/////////////////////////////////////////////////////////////
//?                         Arrow function

const testArrow = (x) => {
  if (x > 10) {
    console.log("bigger than 10");
  }
};

console.log("***testArrow function output***");
testArrow(12);

///////////////////////////////////////////////////////////////
//?                         forEach

console.log("***forEach***");
const arr = ["erfan", "mohammad", "lorem", "lorem2"];
//! unComment
// const foreach = arr.forEach((elem,index) => {
//   console.log(elem);
// });
//!

const printIndex = function (elem, index) {
  console.log(elem);
  console.log(index);
};
const foreach = arr.forEach(printIndex);

///////////////////////////////////////////////////////////////
//?                         function inside objects

//can i define function in objects ?
//the answer is yes consider this example
// const object1 = {
//   fName: "erfan",
//   lName: "taghinia",
//   fullName: fName + lName,
// };
//! if i run above code  we get a nasty error

// what if i write this
// const object1 = {
//   fName: "erfan",
//   lName: "taghinia",
//   fullName: object1.fName + object1.lName,
// };
//! if i run above code  again we get an error

//so whats the solution

// const object1 = {
//   fName: "erfan",
//   lName: "taghinia",
//   fullName: function () {
//     return object1.fName + " " + object1.lName;
//   },
// };

// const fullName = object1.fullName();

// console.log(fullName);

//but that would be great to use this instead of objectName
console.log("\n***this and inner functions***\n");
const object1 = {
  fName: "erfan",
  lName: "taghinia",
  fullName: function () {
    return this.fName + " " + this.lName;
  },
};

const fullName = object1.fullName();

console.log(fullName);

//!what is the this key
//this is refer to parent
//if we use this globally refer to window object
console.log(this);

//but if inner fuction in object refer to the object
const object2 = {
  fName: "erfan",
  lName: "taghinia",
  fullName: function () {
    console.log(this);
  },
};

console.log(object2.fullName());

//! notice : you cannot use this when you defined arrowfunctions
console.log("\n***Object with ArrowFunction and this***\n");
const object3 = {
  fName: "erfan",
  lName: "taghinia",
  fullName: () => {
    console.log(this);
  },
};

console.log(object3.fullName());

///////////////////////////////////////////////////////////////

//!           last but not least

//!           Advance section

//*                 Scope
// Before ES6 (2015), JavaScript had only Global Scope and Function Scope.

// ES6 introduced two important new JavaScript keywords: let and const.

// These two keywords provide Block Scope in JavaScript.

// Variables declared inside a { } block cannot be accessed from outside the block:

//?Block Scope
{
  let x = 2;
  var y = 2;
}
console.log("y = " + y);
//if we do thid / we get an error
//console.log("x = " + x);
// x can NOT be used here

//?Local Scope
// code here can NOT use fName

function printName() {
  let fName = "erfan";
  // code here CAN use fName
  console.log(fName);
}

// code here can NOT use fName

//!Notice Since local variables are only recognized inside their functions, variables with the same name can be used in different functions.

//! Local variables are created when a function starts, and deleted when the function is completed.

//?Function Scope
// JavaScript has function scope: Each function creates a new scope.

// Variables defined inside a function are not accessible (visible) from outside the function.

// Variables declared with var, let and const are quite similar when declared inside a function.

//! They all have Function Scope:

function printName() {
  var fName = "erfan"; // Function Scope
}
function printName() {
  let fName = "erfan"; // Function Scope
}
function printName() {
  const fName = "erfan"; // Function Scope
}

//?Global Scope
// Variables declared Globally (outside any function) have Global Scope.

// Global variables can be accessed from anywhere in a JavaScript program.

// Variables declared with var, let and const are quite similar when declared outside a block.

// They all have Global Scope:

//?Automatically Global
myFunction();

// code here can use carName
console.log("***Automatically Global***");
console.log(carName);

function myFunction() {
  carName = "BMW";
}

//!The Lifetime of JavaScript Variables
// The lifetime of a JavaScript variable starts when it is declared.

// Function (local) variables are deleted when the function is completed.

// In a web browser, global variables are deleted when you close the browser window (or tab).

//!Function arguments (parameters) work as local variables inside functions.

//?Hoisting
// In JavaScript, a variable can be declared after it has been used.

// In other words; a variable can be used before it has been declared.
var oddX = "5";
let result = oddX + " " + evenY;
var evenY = "4";
console.log("***Hoisting***");
console.log(result);

result = oddX + " " + evenY;
console.log("***Hoisting***");
console.log(result);

//but consider this example
//if run this we get an error

// if (true) {
//   console.log(fName);

//   let fName = "erfan";
// }

//?Lexical Scoping
// console.log("***Lexical Scoping var***");
// for (var k = 0; k <= 4; k++) {
//   setTimeout(() => {
//     console.log(k);
//   }, 1000);
// }

//result is : 5 5 5 5

// console.log("***Lexical Scoping let***");
// for (let i = 0; i <= 3; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000);
// }

//result is 0 1 2 3

//All the previous definitions are true for distructions as well
const properties = {
  hair: "brown",
  eyes: "black",
};

const { hair, eyes } = properties;

console.log(hair);

//and for group definition as well
let count = 10,
  isActive = false,
  name = "erfan";
//we could use const

//* SUMMARY

//! let:   cannot redeclaration

//! const: cannot redeclaration or reassignment

//! hoisting: The hoisting process is a process in which variables and declarations are transferred with their own scope and are accessible from there.The hoisting process is a process in which variables and declarations are transferred with their own scope and are accessible from there.

//!scope:  The concept of scope is a space where the variables in that space exist and are meaningful.

//            BlockSoped       TDZ       CreatesGlobalProperty       Reassignable      Redeclarable

// var        false           false      true                        true              true

// let        true            true       false                       true              false

// const      true            true       false                       false             false
