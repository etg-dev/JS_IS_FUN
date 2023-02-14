//?           class expression
//const PersonCl =class{}

//?           class declaration
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  //all the methods which is defind here
  //automatically set in prototype

  calcAge() {
    console.log(2022 - this.birthYear);
  }
}

const jon = new PersonCl("jon", 1980);
console.log("\n*** check is jon instance of personc1 ***");
console.log(jon.__proto__ === PersonCl.prototype);

console.log("\n*** PersonC1 ***");
console.log(jon);
jon.calcAge();

//also we can add methods to prototype manually
PersonCl.prototype.greet = function () {
  console.log(`Hey ${this.firstName}`);
};

console.log("\n*** Add method to prototype manually ***");
jon.greet();

//*es6 syntax is exactly constructor function

//! 1. Classes are NOT hoisted
//! 2. Classes are executed in strict mode

//?           lets look deeper in object
//getter and setter

const account = {
  owner: "erfan",
  movements: [200, 530, 120],

  get latest() {
    return this.movements.slice(-2, -1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log("\n*** getter and setter in objects ***");
console.log(account.latest);

account.latest = 4444;
console.log(account.movements);

//we also have get and set in classes
class PersonC2 {
  constructor(firstName, birthYear) {
    this._firstName = firstName;
    this._birthYear = birthYear;
  }

  get age() {
    return this._birthYear;
  }

  set age(age) {
    this._birthYear = age;
  }
}

const linda = new PersonC2("linda", 1998);
linda.age = 2000;
console.log(linda.age);

//?           static
//we earlier learn about what if i add method to constructor function without using .prototype.method

//also we can do this in ES6 syntax by using static key
//consider this example

class PersonC3 {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  getName() {
    return this._name;
  }

  static greet() {
    console.log(`hi there`);
  }
}

const danial = new PersonC3("danial", "30");
console.log("\n*** non static method ***");
console.log(danial.getName());

console.log("\n***  static method ***");
//if we run this line we get an error
//danial.greet();

//but i can access inner of class
PersonC3.greet();
