// so in this lecture we will implement and learn how to inherite in oop with constructor function , ES6 classes and create objects

// 1. constructor function
//! unComment
// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//   console.log(2022 - this.birthYear);
// };

// const Student = function (firstName, birthYear, course) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
//   this.course = course;
// };

// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };

// const jon = new Student("jon", 1998, "Computer Science");
// jon.introduce();
//!

//as you can see in above code we have duplicate code which is not a good practice so in these cases its better using inheritance

//DRY => dont repeat your self
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2022 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

//Linking prototypes
Student.prototype = Object.create(Person.prototype);

//fix the constructor
Student.prototype.constructor = Student;

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const jon = new Student("jon", 1998, "Computer Science");
jon.introduce();
jon.calcAge();

console.log(jon);
console.log(jon.__proto__);
console.log(jon.__proto__.__proto__);

console.log(jon instanceof Student);
console.log(jon instanceof Person);
console.log(jon instanceof Object);

//console.log(Student.prototype.constructor);

// now its what we have to build
// and thats a good practice

//! Inheritance in ES6 calsses

// Consider this example
// We have a user who has a first and last name
// Also, we have the author which inherited the first and last name from the user and also has an age attribute, and the login methods have other logic to authenticate the logged-in user.

class User {
  constructor(fName, lName) {
    this._fName = fName;
    this._lName = lName;
  }

  login(pass) {
    if (pass) {
      return true;
    } else {
      return false;
    }
  }

  get fName() {
    return this._name;
  }

  set fName(name) {
    this._name = name;
  }

  get lName() {
    return this._lName;
  }
  set lName(lName) {
    this._lName = lName;
  }
}

class Author extends User {
  constructor(fName, lName, age) {
    super(fName, lName);
    this._age = age;
  }

  get age() {
    return this._age;
  }

  set age(age) {
    this._age = age;
  }

  login(pass, auth) {
    if (pass && auth) {
      return true;
    } else {
      return false;
    }
  }
}

const robert = new Author("Robertt", "Martin", 42);

robert.fName = "robert";

console.log(robert.fName);

console.log(robert);
