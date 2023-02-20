const carProto = {
    init(brand, speed) {
        this.brand = brand;
        this.speed = speed;
    },

    increaseSpeed(speed) {
        this.speed += speed;
    },

    decreaseSpeed() {
        this.speed -= 5;
    }
}

const EV=Object.create(carProto);

EV.init=function (brand, speed,battery){
    carProto.init.call(this,brand,speed);
    this.battery=battery;
}

const tesla=Object.create(EV);

tesla.init("Tesla",100,100);

console.log(tesla.brand);
console.log(tesla.speed);
console.log(tesla.battery);

