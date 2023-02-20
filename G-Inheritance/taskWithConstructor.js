/*
1.Use a constructor function to implement an Electric Car (called Ev) as a CHILD "class" of Car.
Besides a make and current speed, the EV also has the current battery charge in % ("charge" property);

2.Implement a "chargeBattry" method charge to "chargeTo"

3.Implement an "accelerate" method that will increase the car speed by 20, and decrease the charge by 1%, Then load a message like this "Tesla going at 140 km/h" with a charge of 22%;

4.Create an electric car object and experiment with calling "accelerate", "breke" and "chargeBattery" (charge to 90%) . Notice what happens when you "accelerate" HINT: Review the definition of  polymorphism

DATA CAE : "Tesla" going at 120 km/h, with a charge of 23%

GOOD LUCK
*/

const CAR = function (type, speed) {
  this.type = type;
  this.speed = speed;
};

CAR.prototype.accelarate = function (speed) {
  this.speed += speed;
};

CAR.prototype.break = function (speed) {
  this.speed -= speed;
};

const EV = function (type, speed, charge) {
  CAR.call(this, type, speed);
  this.charge = charge;
};

EV.prototype = Object.create(CAR.prototype);

EV.prototype.constructor = EV;

EV.prototype.accelarate = function (number) {
  this.speed += number;
  this.charge--;
};

EV.prototype.info = function () {
  console.log(
    `${this.type} is going At ${this.speed} with ${this.charge}% charge`
  );
};

EV.prototype.chargeBattry = function (number) {
  this.charge += number;
};

const tesla = new EV("Tesla", 100, 100);

tesla.accelarate(10);
tesla.accelarate(10);
tesla.accelarate(10);
tesla.accelarate(10);

tesla.info();
