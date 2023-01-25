//Loops in JS

// for - loops through a block of code a number of times
for (let step = 0; step < 5; step++) {
  // Runs 5 times, with values of step 0 through 4.
  //console.log(step)
}

//assume we wanna get five number from user
for (let i = 0; i < 5; i++) {
  //const input = prompt("please enter a valid number !");
  //console.log(input);
}

let i = 0;
for (; i < 5; ) {
  console.log("other way to declear loop");
  i++;
}

// for/in - loops through the properties of an object
const person = { fName: "ali", lName: "moini", age: 24 };
for (let x in person) {
  console.log(person[x]);
}
//console.log(Object.values(person));
//console.log(Object.keys(person));

//for Each => we talk about this in funciton section
// const numbers = [1, 2, 3, 4, 5, 6];
// numbers.forEach((number, index) => {
//   console.log(number);
// });

// for/of - loops through the values of an iterable object
let language = "JavaScript";

let text = "";
for (let x of language) {
  text += x + " ";
}
console.log(text);

// while - loops through a block of code while a specified condition is true

let k = 0;
while (k < 5) {
  console.log(k);
  k++;
}

// do/while - also loops through a block of code while a specified condition is true
let z = 0;
do {
  console.log(z);
  z++;
} while (z < 5);
//Do not forget to increase the variable used in the condition, otherwise the loop will never end!
