// firt of all
// different types of JavaScript operators:

// Arithmetic Operators
// Assignment Operators
// Comparison Operators
// Logical Operators
// Conditional Operators
// Type Operators

//Arithmetic Operations in JS are quite similar to math operations you've seen before
//! - * ** / % ++ --

//But in almost all programming languages equal sign means the assignment

// Assign the value 10 to x
const a = 10;
// Assign the value 6 to y
const b = 6;

//Addition Operator
// Assign the value x + y to result:
const additions = a + b;
//result is : 16

//Subtraction Operator
const subtraction = a - b;
//result is : 4

//Multiplication Operator
const multiplication = a * b;
//result is : 60

//Exponentiation Operator
const exponentiation = a ** b;
//result is :1000000

//Division Operator
const division = a / b;
//result is : 1.6666666666666667

//Modulus(Division Remainder) Operator
const remainderOne = a % 2;
//result is : 0
const remainderTwo = a % 3;
//result is : 1

//Increment Operator a=a+1
//if we increment directly a
//const increment=a++ ???
//we get error becuase const connot increment
let temp = 10;
const increment = ++temp;

//result is : 11;

//Decrement Operator a=a-1
const decrement = --temp;
//result is : 10;

//now if we increment after assign
//console.log(temp++); => 10
//if put in the varible and print that
// const testIncrement=temp++; =>10
//console.log(testIncrement); =>11
//we get same result
//console.log(temp); => 11
//exact same with decrement
// console.log(temp--);
// console.log(temp);

//Assignment Operator
// Operator	      Example	Same As
// =	            x = y	      x = y
// +=	            x += y	x = x + y
// -=	            x -= y	x = x - y
// *=	            x *= y	x = x * y
// /=	            x /= y	x = x / y
// %=       	x %= y	x = x % y
// **=           	x **= y	x = x ** y
let c = 15;
let assignOperator = (c += 5);
//result is : 20

//Obviously, we can merge the operator together
//like this example
const mergeOperatorOne = (100 + 50) * a + b;
//result is :1506
const mergeOperatorTwo = (100 + 50) * a + b ** 2 - 4;
//result is :1532

//Additional Operator can also be used add strings (cancatenate)
const name = "Erfan";
const lastName = "Taghinia";
const FullName = name + lastName;
//result is : ErfanTaghinia
//also const FullName=name+" "+lastName

//TIP
//The += assignment operator can also be used to add (concatenate) strings:
let greet = "Hey ! ";
greet += "erfan";
//result is :Hey ! erfan

// Adding Strings and Numbers
// Adding two numbers, will return the sum, but adding a number and a string will return a string:
const d = 1 + 2;
//result is : 2
const E = "1" + 2;
//result is : 12
const F = "test" + 5;
//result is : test5
//and type is string

//;)
//!iteral Expression backtick
const fullName = `${name} | ${lastName}`;
console.log(fullName);
