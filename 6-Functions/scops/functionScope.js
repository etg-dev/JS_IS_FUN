const fullName = (lName) => {
  var fName = "jon";
  age = 50;
  return fName + " " + lName;
};

const nameAndLname = fullName("doe");

console.log(nameAndLname);

//if we run this code we get nasty error
//so var is limited in function scope
console.log(fName);

//but if we do not defint var or let or const
//java script consider this as global variable
console.log(age);

function printName() {
  var fName = "erfan"; // Function Scope
}
function printName() {
  let fName = "erfan"; // Function Scope
}
function printName() {
  const fName = "erfan"; // Function Scope
}
