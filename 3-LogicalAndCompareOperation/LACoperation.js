//JavaScript Comparison && Logical && Type && Bitwise Operators

// ==	            equal to
const a = 12;
const b = 12;
const equal = a == b;
//result is : true
const c = "erfan";
const d = "ali";
const stringEqual = c == d;
//result is : false
//if d = erfan result is : true

// ===	      equal value and equal type
const e = "12";
const equalNoTypeCheck = e == a;
//result is : true;
//but in with === we can check type too
const equalTypeCheck = e === a;
//result is : false

// !=	            not equal
const notEqual = a != b;
//result is:false;

// !==      	not equal value or not equal type
const notEuqalWithTypeCheck = a !== e;
//result is : true

// >	            greater than
const greater = a > b;
//result is : false

// <	            less than
const less = a < b;
//result is : false

// >=	            greater than or equal to
const greateOrEqual = a >= b;
//result is :true

// <=	            less than or equal to
const lessOrEqual = a <= b;
//result is : true

// ?	            ternary operator
//we will consider this in if section

//Logical Operator
// Operator	      Description
const flagFalse = false;
const flagTrue = true;

// &&	            logical and
const logicalAnd = flagFalse && flagTrue;
//result is : false

// ||	            logical or
const logicalOr = flagFalse || flagTrue;
//result is : true

// !	            logical not
const notFlagTrue = !flagTrue;
const logicalOrTwo = notFlagTrue || flagFalse;
//result is : false

//Type Operators
// Operator	      Description

// typeof	      Returns the type of a variable
const typeString = "erfan";
//result is : string

// instanceof	Returns true if an object is an instance of an object type
//we will consider this in the object section

//Bitwise Operators
const bitwiseA = 2;
const bitwiseB = 3;
// Operator	            Description	            Example	      Same as	            Result	      Decimal

// &	                  AND	                  5 & 1	            0101 & 0001	            0001	            1
const bitwiseAnd = bitwiseA & bitwiseB;
//result is : 0010 & 0011 => 0010 = 2

// |	                  OR	                  5 | 1	            0101 | 0001	            0101	            5
const bitwiseOr = bitwiseA | bitwiseB;
//result is : 0010 | 0011 => 0011 = 3

// ~	                  NOT	                  ~ 5
//its two-complement

// ^	                  XOR	                  5 ^ 1	            0101 ^ 0001	            0100	            4
const bitwiseXor = bitwiseA ^ bitwiseB;
//result is : 0010 ^ 0011 => 0001 =1

// <<	                  left shift	            5 << 1	      0101 << 1	            1010	            10
const bitwiseLeftShift = bitwiseA << 1;
//reuslt is : 0010 << 1 => 0100 = 4

// >>	                  right shift	            5 >> 1	      0101 >> 1	            0010	            2
const bitwiseRightShift = bitwiseA >> 1;
//result is : 0010 >> 1 => 0001 = 1
