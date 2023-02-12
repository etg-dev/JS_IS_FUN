//! lets create prototypes
// A prototype in JavaScript is an object that acts as a template for creating other objects. It's a blueprint for creating objects that share the same structure and behavior. Each object created from a prototype inherits properties and methods from the prototype. This means that new objects can access and modify properties and methods of the prototype, and any changes made to the prototype are reflected in all objects created from it. Prototypes are a key aspect of object-oriented programming in JavaScript and are commonly used to create reusable components.

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const jon = new Person("jon", 1980);
const lida = new Person("lida", 1990);
const fred = new Person("fred", 2000);

Person.prototype.calcAge = function () {
  console.log(2022 - this.birthYear);
};

console.log(Person.prototype);

lida.calcAge();
//reuslt is
//its work
