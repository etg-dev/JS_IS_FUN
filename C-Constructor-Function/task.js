/*
we saw earlier how to use Error which is built-in
constructor function in javascript 
now we want to create a custom built-in constructor function for error handling

let's create a switch and case and pass a key if that key is 1 or 2 just print that, 
otherwise  throw a custom new error using a constructor function

*/

const CustomError = function (name, message) {
  this.name = name;
  this.message = message;
};

const key = 3;

try {
  switch (key) {
    case 1:
      console.log("1");
      break;
    case 2:
      console.log("2");
      break;
    default:
      throw new CustomError(
        "switchError",
        "You have got only two choise 1 or 2"
      );
      break;
  }
} catch (error) {
  console.log(error.message);
}
