//! TIP : if you do not have new property in child class its not neccessay to write constructor java script will handle this for us

class CAR {
  constructor(type, speed) {
    this.type = type;
    this.speed = speed;
  }

  accelerate(speed) {
    this.speed += speed;
  }

  break(speed) {
    this.speed -= speed;
  }
}

class EV extends CAR {
  constructor(type, speed, charge) {
    super(type, speed);
    this.charge = charge;
  }

  accelerate(speed) {
    this.speed += speed;
    this.charge -= 1;
  }

  info() {
    console.log(`${this.type} is going At ${this.speed} with ${this.charge}%`);
  }
}

const tesla = new EV("tesla", 100, 100);

tesla.accelerate(10);
tesla.accelerate(10);
tesla.accelerate(10);
tesla.accelerate(10);
tesla.accelerate(10);
tesla.break(10);

tesla.info();
