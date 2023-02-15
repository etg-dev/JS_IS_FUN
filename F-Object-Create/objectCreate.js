//another way to create objects in java script

// const PersonProto = {
//   calcAge() {
//     console.log(2022 - this.birthYear);
//   },
// };

// const jon = Object.create(PersonProto);
// jon.name = "jon";
// jon.birthYear = 1980;

// jon.calcAge();

const PersonProto = {
  calcAge() {
    console.log(2022 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const jon = Object.create(PersonProto);
jon.init("jon", 1980);

console.log(jon.firstName);
jon.calcAge();

console.log(jon.__proto__ === PersonProto);

//we will back and use Object.create in inheritance section
