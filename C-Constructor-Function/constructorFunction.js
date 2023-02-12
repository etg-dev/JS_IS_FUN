//First look at the object data structure
const myObject = {
  fName: "jon",
  lName: "doe",
  fullName() {
    console.log(this.fName + " " + this.lName);
  },
  setAge: function (age) {
    this.age = age;
  },
};

myObject.setAge(40);
console.log(myObject.age);

//there is convention => constructor function
//must start with Capital letter (PascalCase)

// you cannot use this keyword in arrow function
//so you can use decoration and exprestion function
//to create constuctor function

const Person = function (firstName, birthYear) {
  //fist just log this keyword
  //console.log(this);
  //result : Person {}

  //but if assing to the object
  //Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
  //console.log(this);
  //result : Person {firstName: 'jon', birthYear: 1980}

  //now lets add method
  //   this.calcAge = function () {
  //     console.log(2022 - this.birthYear);
  //   };
  //but never do this
  //each time we create new instance
  //behind the scenes java script coppy that function
  //for each instance so thats not a good practice

  //! so how i add method
  //! we use prototype
};

// const joe = Person("joe", 2000);
// console.log(joe);

const jon = new Person("jon", 1980);
console.log(jon);
//exactly result like print this keyword

//!what happend under the hood
//* 1. New {} is created
//* 2. function is called, this = {}
//* 3. {} linked to prototype
//* 4. function automatically return {}

//lets create new person
const lida = new Person("lida", 1990);
const fred = new Person("fred", 2000);
console.log(lida);
console.log(fred);

const danial = "danial";

//We can check which class an object is an instance of
console.log(lida instanceof Person);
//result is true

console.log(danial instanceof Person);
//result is false
