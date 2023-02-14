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

//if we wanna get prototype of an instance of object
//we must use __proto__
//and this exactly the same Person.prototype
console.log(lida.__proto__);

console.log(Person.prototype);

console.log(lida.__proto__ === Person.prototype);
//result is true

//console.log(Person.prototype.isPrototypeOf(lida));
//result is true

console.log("\n***Another Example***");
function Animal(name, sound) {
  this.name = name;
  this.sound = sound;
}

Animal.prototype.makeSound = function () {
  console.log(this.sound);
};

const dog = new Animal("dog", "bark");
const cat = new Animal("cat", "meow");

dog.makeSound(); // Output: "bark"
cat.makeSound(); // Output: "meow"

console.log(Animal.prototype);
console.log(cat.__proto__);

//also we can set properties
Animal.prototype.skinColor = "black";
console.log(dog.skinColor);
console.log(cat.skinColor);

//check has own propery
console.log("\n***has own property***");
console.log(dog.hasOwnProperty("name"));
console.log(dog.hasOwnProperty("skinColor"));

//Object.prototype (top of prototype chain)
console.log(dog.__proto__.__proto__);

const arr = [3, 6, 4, 5, 6, 9, 3]; // new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

//lets create new method for Array
console.log("\n***Add a new method to the Array***");
Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

//not using this

console.dir((x) => x + 1);
