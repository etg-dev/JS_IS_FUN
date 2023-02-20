// Encapsulation in JavaScript refers to the practice of hiding the implementation details of an object or module, and exposing only a public interface for interacting with it. This allows for greater control over the way that the object is used, and helps to prevent unintended changes or errors in the code.

// In JavaScript, encapsulation can be achieved through the use of closures and object-oriented programming techniques. A common way to implement encapsulation is to use closures to create an object that has private properties and methods, and a public interface for interacting with those properties and methods.

//let's create a bank account

// class Account {
//   constructor(owner, currency, pin) {
//     this.owner = owner;
//     this.currency = currency;
//     this.pin = pin;
//     this.movements = [];
//     this.locale = navigator.language;

//     console.log(`Thanks for opening an account, ${this.owner}`);
//   }
// }

// const acc1 = new Account("jon", "EUR", 1111);

// acc1.movements.push(250);
// acc1.movements.push(-140);
// console.log(acc1);

//but that's not a good practice

class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    //protected property
    this._pin = pin;
    //protected property
    this._movments = [];
    this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${this.owner}`);
  }

  getMovements() {
    return this._movments;
  }

  //Public interface
  deposit(val) {
    this._movments.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

  _approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log("Loan approved");
    }
  }
}

const acc1 = new Account("jon", "EUR", 1111);

acc1.deposit(250);
//abstraction
//hide un necessary logic from user
acc1.withdraw(140);
console.log(acc1);
console.log(acc1.getMovements());

//let get a loan from bank
acc1.requestLoan(1000);
//that work, but we have problem
//as you can see user can access to approveLoan that's a secret method
//acc1.approveLoan(1000) **

//!so what should I do ?
//solution that soo easy just make it that method static
//now im not access to approveLoan outside of class

//so now I want to block the access of pin outside of class
//how should I do ?

//let now truly private method and property's
class AccountTwo {
  //1. Public fields (instances)
  locale = navigator.language;

  //2. Private fields
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    //protected property
    this.#pin = pin;

    console.log(`Thanks for opening an account, ${this.owner}`);
  }

  getMovements() {
    return this.#movements;
  }

  //Public interface
  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  #approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log("Loan approved");
      return this;
    }
  }
}

//!return this make it method chainable
