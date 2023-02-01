//you can run this code with out error
//java script will defind counter as global variable

//? do not unComment all code together

//! unComment this
const canYouSpotTheProblem = () => {
  for (counter = 0; counter < 10; counter++) {
    console.log("Happy happy" + counter);
  }
};

canYouSpotTheProblem();
//!

//but in this case you cannot defind variable with out
//declaration key such as let
//and java script throw a error

//!unComment this
// const canYouSpotTheProblem = () => {
//   "use strict";
//   for (counter = 0; counter < 10; counter++) {
//     console.log("Happy happy");
//   }
// };
//!

//canYouSpotTheProblem();

//!unComment this
// function Person(name) {
//   this.name = name;
// }

// const fered = Person("fred");
// console.log(name);
//!

//now use strict

//! unComment this
// ("use strict");
// function Person(name) {
//   this.name = name;
// }

// const fered = Person("fred");
// console.log(name);
//!

//if you using new key again you get an error
//but in this case is different error
//name its not defind
