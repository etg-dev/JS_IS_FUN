const human = (factor) => {
  const ingredient = (amount, unit, name) => {
    let ingredientAmount = amount * factor;
    if (ingredientAmount > 1) {
      unit += 1;
    }
    console.log(`${ingredient} ${unit} ${name}`);
  };
  ingredient(1, "can", "chickpeas");
  ingredient(1, "clove", "garlic");
  ingredient(1, "can", "chickpeas");
};

//factor its accesible in ingredient function
//but unit and ingredientAmount can not accessible in human function
//this variable => Lexical Scoping

//another example for lexical scoping
let x = 10;

function outer() {
  let y = 20;

  function inner() {
    let z = 30;
    console.log(x + y + z);
  }

  inner();
}

outer(); // Output: 60
console.log(x); // Output: 10
//console.log(y); // ReferenceError: y is not defined
//console.log(z); // ReferenceError: z is not defined

//!                 another example
let X = "I am a global variable";

function outerFunction() {
  let y = "I am a local variable in outerFunction";

  function innerFunction() {
    let z = "I am a local variable in innerFunction";
    console.log(X); // this will output "I am a global variable"
    console.log(y); // this will output "I am a local variable in outerFunction"
    console.log(z); // this will output "I am a local variable in innerFunction"
  }

  innerFunction();
  console.log(X); // this will output "I am a global variable"
  console.log(y); // this will output "I am a local variable in outerFunction"
  //console.log(z); // this will throw a ReferenceError, because z is not defined in the outerFunction scope
}

outerFunction();
console.log(X); // this will output "I am a global variable"
//console.log(y); // this will throw a ReferenceError, because y is not defined in the global scope
//console.log(z); // this will throw a ReferenceError, because z is not defined in the global scope
