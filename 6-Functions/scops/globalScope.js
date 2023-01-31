var globalNameVar = "erfan";
let globalNameLet = "erfan";
const globalNameConst = "erfan";

const printName = () => {
  console.log(globalNameConst);
  console.log(globalNameLet);
  console.log(globalNameVar);
  console.log("*****");
};

printName();

const holderName = () => {
  f = "erfan";
  var lName = "taghinia";
};

holderName();

console.log(f);

//but if run this code we get an error
//console.log(lName);
//so do not defint variable with out declaration key like var const let
