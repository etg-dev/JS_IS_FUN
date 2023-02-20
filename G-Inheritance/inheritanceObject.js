console.log("*** Student ***\n");

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

const StudentProto = Object.create(PersonProto);

StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and i study ${this.course}`);
};

const linda = Object.create(StudentProto);
linda.init("linda", 1998, "Computer Science");

console.log(linda);
linda.introduce();
linda.calcAge();

//lets re-build car project here with using Object.create
//why not  :)
console.log("\n*** EV ****\n");

const CarProto = {
  init(type, speed) {
    this.type = type;
    this.speed = speed;
  },

  accelerate(speed) {
    this.speed += speed;
  },

  break(speed) {
    this.speed -= speed;
  },
};

const EVProto = Object.create(CarProto);

EVProto.init = function (type, speed, charge) {
  CarProto.init.call(this, type, speed);
  this.charge = charge;
};

EVProto.accelerate = function (speed) {
  this.speed += speed;
  this.charge -= 1;
};

EVProto.info = function () {
  console.log(`${this.type} is going At ${this.speed} with ${this.charge}%`);
};

const tesla = Object.create(EVProto);

tesla.init("BMW", 100, 100);

tesla.accelerate(10);
tesla.accelerate(10);
tesla.accelerate(10);
tesla.accelerate(10);
tesla.accelerate(10);
tesla.break(10);

tesla.info();
