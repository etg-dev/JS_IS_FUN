{
  let fName = "erfan";
  var lName = "taghinia";
}

//if we run this we get an error
//console.log(fName);

//but if its var that ligal to run code
console.log(lName);

// block scop in if statement
const a = 2;
if (a >= 2) {
  const b = 0;
  console.log(a + b);
}

console.log(a);
//console.log(b) throw an error

for (let i = 0; i < 4; i++) {
  console.log(i);
}

//console.log(i); throw an error
//i is block scope
