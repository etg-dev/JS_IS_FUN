//!notice : Javascript is an Interpreted language. In interpreted languages, an interpreter translates the code line by line into a language understandable by the computer during execution.

// what is data Type
// A data type, in programming, is a classification that specifies which type of value a variable has and what type of mathematical, relational or logical operations can be applied to it without causing an error. A string, for example, is a data type that is used to classify text and an integer is a data type used to classify whole numbers.

// JavaScript has 8 Datatypes
// 1. String

// 2. Number
// 3. Bigint => Big Integer ! after 2020
// 4. Boolean
// 5. Undefined
// 5. Null
// 7. Symbol

// 8. Object => object | array | date   => non-primitive data type

//! fucntion type is non-premitibe data type

//In JS we have 3 main keywords for declaration
//var => no longer used
//let
//const

//!notice: we could declare varible without ant key but js assume its var and as we learn before var no longer used

//JS its caseSensetice lang

//?Numbers:
let height = 190;
let weight = 90;
weight = 80;
//result wight is 80

const test = 100;
//test = 200;  we get error
//or you can use scientific notations
let dummY = 1234e5;

//result is : 123400000
let dummYY = 1234e-5;

//result is : 0.01234

//!whats the maximum value we could put in number
//console.log(Number.MAX_SAFE_INTEGER);

/**
 * Most programming languages have many number types:
 * Whole numbers (integers):
 * byte (8-bit), short (16-bit), int (32-bit), long (64-bit)
 * Real numbers (floating-piont):
 * float (32-bit), double (64-bit).
 * Javascript are always one type:
 * double (64-bit floating point).
 * 9,223,372,036,854,775,807
 * 2^63-1
 */

//?Strings:
let firstName = "Erfan";
let lastName = "Taghinia";
//**or you can use single quotes for declaration

// Booleans
let a = true;
//result is true;
let b = false;

//result is false;
let x = 5;
let y = 5;
let z = 6;

//console.log(x == y); => false
//console.log(x == z); => true

//?Undefined
let erfan;

//result is undefined

// const NAME = Symbol();
// const personTest = {
//   [NAME]: "Flavio",
// };

// personTest[NAME]; //'Flavio'

// const RUN = Symbol();
// personTest[RUN] = () => "Person is running";
// console.log(personTest[RUN]()); //'Person is running'

//?Object:
//const person = {};

const person = {
  firstName: "John",
  lastName: "Doe",
};

person.firstName = "erfan";
person.lastName = "taghinia";

person["eyeColor"] = "brown";
person.job = "programmer";

//console.log(person.job);
//result is programmer

//console.log(Object.keys(person));
//console.log(Object.values(person));

//*Array object:
const programingLang = ["python", "java", "javaScript"];
//we discuss about array list later

//*Date object:
const date = new Date("2020-04-2");
//to find out the type of variable
//use typeof keyword
//console.log(typeof lastName);

//consider this example
let dummy = "coffee" + 44;
//is it posible ?
//in js everything its posible :)
//in other word JS will treat this as 2 string and cancat
//result is : "coffee44"

//=> put 12 , 12 and coffee in dummy let
//what is the result ?

//!JavaScript evaluates expressions from left to right. Different sequences can produce different results
let dummy2 = 12 + 12 + "coffee";
//result is: 24coffee
//but in this example
let dummy3 = "coffee" + 12 + 12;
//result is : coffee1212

//JavaScript has dynamic types.
//but what i mean by that
let dummy4 = "coffee";
//result of dummmy 4 is : coffee and its string
dummy4 = 25;
//but here its changed and result is : 25 and its number vividly

//?JavaScript BigInt
// is a new datatype (2020) that can be used to store integer values that are too big to be represented by a normal JavaScript Number.
let dummy5 = BigInt("123456789012345678901234567890");
let dummy55 = 123n;
// type of return BigInt

//?explain how primitive and non-primitive dataType Work
//consider this variable
const dummy10 = "test";
//copy dummy10 in other variable, named dummy11 and add "aa"
const dummy11 = dummy10 + "aa";
//if we loge dummy11 as you can see result is : testaa
//and result of dummy10 is : test
//as we expect !

//but consider this example
const personOne = {
  fName: "erfan",
  lName: "taghinia",
};

const personTwo = personOne;
//again copy personOne on other variable

//now change one of properties
personTwo.fName = "ali";
//log the result
//personOne is : fName:"ali" lName:"taghinia"
//personTwo is : lName:"ali" lName:"taghinai"

//As you can see both objects are changed due to object is non-primitive data type
