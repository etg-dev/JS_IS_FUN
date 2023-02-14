///Coding Challenge #1

/*
1. Use a constructor function to implement a Car.A
car has a make and a speed property. The speed property
is the current speed of the car in km/h.

2.Implement the cars speed by 10, and log the new speed
increase the cars speed by 10, and log the new speed
to the console.

3.Impelemt a "break" method that will decrease the cars speed by 5 and log the new speed to the console.

4.Create 2 car objects and experiment with calling 
"accelerate" and "breke" multiple time on each of them

DATA CAR 1: "BMW" going at 120 km/h
DATA CAR 1: "Mercedes" going at 95 km/h
*/

const CAR = function (type, speed) {
  this.speed = speed;
  this.type = type;
};

CAR.prototype.accelerate = function (number) {
  this.speed += number;
};

CAR.prototype.break = function (number) {
  this.speed -= number;
};

CAR.prototype.printSpeed = function () {
  console.log(`${this.type} is going at ${this.speed} km/h`);
};

const bmw = new CAR("BMW", 100);
const mercedes = new CAR("BNZ", 100);

bmw.accelerate(10);
bmw.printSpeed();

mercedes.break(5);
mercedes.printSpeed();
