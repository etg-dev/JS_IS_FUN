//Conditional Statements
const time = 16;

// Use if to specify a block of code to be executed, if a specified condition is true
let greeting = "";
if (time < 12) {
  greeting = "good Morning";
}

// Use else if to specify a new condition to test, if the first condition is false
else if (12 < time < 20) {
  greeting = "good evening";
} else if (time > 20) {
  greeting = "good Night";
}

// Use else to specify a block of code to be executed, if the same condition is false
else {
  greeting = "have good one";
}

console.log(greeting);

// Use switch to specify many alternative blocks of code to be executed

//first build this program with if and else
//and now build with switch and case and see
//thair diffrece

let day = 4;
switch (day) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}

console.log(day);
