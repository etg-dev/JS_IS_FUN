//! Date Section
console.log("***Date***");
const date = new Date();
const Customdate = new Date("2022-01-25");
console.log(date);
console.log(Customdate);
const year = date.getFullYear();
const Customyear = Customdate.getFullYear();
console.log(year);
console.log(Customyear);

//! Array and Object Section
console.log("\n***Array and object method in Java Script***");
// JavaScript provides a number of built-in methods and properties that can be used to work with arrays. Here are a few examples:
const arr = [1, 2, 3];

// .length property: returns the number of elements in the array.
console.log("\n***length***");
const length = arr.length;
console.log(length);

// .push(element) method: adds one or more elements to the end of the array and returns the new length of the array.
console.log("\n***push***");
console.log(arr);
arr.push(4, 5);
console.log(arr);

// .pop() method: removes the last element from the array and returns that element.
console.log("\n***pop***");
console.log("Befor :");
console.log(arr);
const last = arr.pop();
console.log("After :");
console.log(arr);
console.log("deleted item : " + last);

// .shift() method: removes the first element from the array and returns that element.
console.log("\n***shift***");
console.log(arr);
const first = arr.shift();
console.log(first);
console.log(arr);

// .unshift(element) method: adds one or more elements to the beginning of the array and returns the new length of the array.
console.log("\n***unshift***");
console.log("Befor :");
console.log(arr);
console.log("After :");
arr.unshift(4, 5);
console.log(arr);

// .slice(start, end) method: returns a shallow copy of a portion of the array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array.
console.log("\n***slice***");
console.log("Befor :");
console.log(arr);
console.log("After :");
const subArr = arr.slice(1, 4);
console.log(subArr);

// .splice(index, howmany, item1, ....., itemX) method: changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
console.log("\n***splice***");
const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
//const fruits = ["Banana",  "Apple", "Mango", "Kiwi"];
//const fruits = ["Banana", 6, 7,"Mango", "Kiwi"];
fruits.splice(1, 1);
console.log(fruits);

// .join(separator) method: joins all elements of an array into a string.
console.log("\n***join***");
console.log("Befor :");
console.log(arr);
console.log("After :");
const elements = ["Fire", "Air", "Water"];

console.log(elements.join());
// Expected output: "Fire,Air,Water"

console.log(elements.join(" "));
// Expected output: "FireAirWater"

console.log(elements.join("*"));
// Expected output: "Fire-Air-Water"

//.reverse(): reverses the order of the elements in an array in place.
console.log("\n***reverse***");
console.log(arr);
arr.reverse();
console.log(arr);

// .sort() method: sorts the elements of an array in place and returns the array.
console.log("\n***sort***");
arr.sort();
const arr0 = [100, 0, 5, 44, 15];
console.log(arr0);
//u can use reverse and sort together
//or use this syntax
const sorted = arr0.sort((a, b) => b - a);
console.log(sorted);

// .map(function) method: creates a new array with the results of calling a provided function on every element in the calling array.
console.log("\n***map***");
const doubled = arr.map((num) => num * 2);
console.log(doubled);

// .filter(function) method: creates a new array with all elements that pass the test implemented by the provided function.
console.log("\n***filter***");
const evenNumbers = arr.filter((num) => num % 2 === 0);
console.log(evenNumbers);

// .reduce(function) method: applies a function against an accumulator and each value of the array (from left-to-right) to reduce it to a single value.
console.log("\n***reduce***");
const sum = arr.reduce((acc, num) => acc + num, 0);
console.log(sum);

// .forEach(function) method: calls a function for each element in the array.
console.log("\n***forEach***");
arr.forEach((num) => console.log(num));

// .some(function) method: tests whether at least one element in the array passes the test implemented by the provided function.
console.log("\n***some***");
const hasEven = arr.some((num) => num % 2 === 0);
console.log(hasEven);

// .every(function) method: tests whether all elements in the array pass the test implemented by the provided function.
console.log("\n***every***");
const allPositive = arr.every((num) => num > 0);
console.log(allPositive);

// .indexOf(element) method: returns the first index at which a given element can be found in the array, or -1 if it is not present.
console.log("\n***indexOf***");
console.log(arr);
const index = arr.indexOf(4);
console.log(index);

// .lastIndexOf(element) method: returns the last index at which a given element can be found in the array, or -1 if it is not present.
console.log("\n***lastIndexOf***");
console.log(arr);
const lastIndexOf = arr.lastIndexOf(4);
console.log(lastIndexOf);

// .find(function) method: returns the value of the first element in the array that satisfies the provided testing function; otherwise undefined.
console.log("\n***find***");
const firstEven = arr.find((num) => num % 2 === 0);
console.log(firstEven);
const arr2 = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
  { id: 3, name: "Bob" },
];
const findId = arr2.find((person) => person.id === 3);
console.log(findId);

// .findIndex(function) method: returns the index of the first element in the array that satisfies the provided testing function; otherwise -1.
console.log("\n***findIndex***");
const firstEvenIndex = arr.findIndex((num) => num % 2 === 0);
console.log(firstEvenIndex);
const findIndex = arr2.findIndex((person) => person.id === 3);
console.log(findIndex);

// .includes(element) method: determines whether an array includes a certain element, returning true or false.
console.log("\n***includes***");
const key = 4;
const isInclude = arr.includes(key);
console.log(isInclude);

//.flat(depth): creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
console.log("\n***flat***");
const arr3 = [1, 2, [3, 4, [5, 6]]];
const flat = arr3.flat(1);
console.log(flat);
//result is: [1, 2, 3, 4, [5, 6]]
//if flat(2)
//result is:[1, 2, 3, 4, 5, 6]

// Additionally, ECMAScript 6 (ES6) introduced new features to JavaScript such as the .from(), .of(), .entries(), .keys(), .values() and .copyWithin() methods that you can use to work with arrays.

// Array.isArray(object): returns true if the passed object is an array, false otherwise.
console.log("\n***is Array***");
const testObject = {
  title: "random",
  text: "this is random text",
  date: new Date("02/03/2023"),
};
const isArray = Array.isArray(testObject);
console.log(isArray);
const isArray2 = Array.isArray(arr);
console.log(isArray2);

// Array.of(element1, element2, ...): creates a new Array instance with a variable number of arguments, regardless of number or type of the arguments.
console.log("\n***Create Array another way***");
const newArray = Array.of(12, "13", { title: "test", number: 10 }, [
  "hey",
  "whats App",
]);
console.log(newArray);

// Object.keys(obj): returns an array of a given object's own enumerable property keys.
console.log("\n***object keys***");
const tempObject = {
  title: "random",
  text: "this is random text",
  date: new Date("02/03/2023"),
};

const keys = Object.keys(tempObject);
console.log(keys);

// Object.values(obj): returns an array of a given object's own enumerable property values.
console.log("\n***object values***");
const values = Object.values(tempObject);
console.log(values);

// Object.entries(obj): returns an array of a given object's own enumerable property [key, value] pairs.
console.log("\n***object entries***");
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};

let text = Object.entries(person);
//without using flat(1)
// [
//   ["firstName", "John"],
//   ["lastName", "Doe"],
//   ["age", 50],
//   ["eyeColor", "blue"],
// ];
console.log(text.flat(1));

//! String Section
console.log("\n***string method in Java Script***");

const fName = "erfan";

//length: returns the length of the string.
console.log("\n***length of string***");
const len = fName.length;
console.log(len);

//toUpperCase(): returns the string in uppercase.
console.log("\n***to UpperCase***");
const upperCaseFName = fName.toUpperCase();
console.log(upperCaseFName);

//toLowerCase(): returns the string in lowercase.
console.log("\n***to LowerCase***");
const lowerCaseFName = fName.toLowerCase();
console.log(lowerCaseFName);

//indexOf(substring): returns the index of the first occurrence of the specified substring, or -1 if not found.
console.log("\n***index of string***");
console.log(fName.indexOf("fan"));

//lastIndexOf(substring): returns the index of the last occurrence of the specified substring, or -1 if not found.
console.log("\n***last index of string***");
const name = "erfanerfan";
console.log(name.lastIndexOf("er"));

//slice(start, end): returns a new string containing the extracted characters from the original string. The first parameter is the index at which to begin extraction and the second parameter is the index at which to end extraction.
console.log("\n***slice in string***");
console.log(fName.slice(1, 3));

//substring(start, end): similar to .slice(), but does not support negative indexes.
console.log("\n***substring in string***");
console.log(fName.substring(1, 3));

//replace(oldValue, newValue): returns a new string with some or all matches of a pattern replaced by a replacement. The first parameter is the value or pattern to be replaced and the second parameter is the replacement value.
console.log("\n***replace in string***");
console.log(fName.replace("fan", "fun"));

//trim(): removes whitespace from both ends of a string.
console.log("\n***trim***");
const name2 = "  erfan ";
console.log(name2.trim());

//charAt(index): returns the character at the specified index.
console.log("\n***char At***");
console.log(fName.charAt(2));

//charCodeAt(index): returns the Unicode of the character at the specified index.
console.log("\n***char Code At***");
console.log(fName.charCodeAt(2));

//concat(string1, string2, ...): joins two or more strings.
console.log("\n***concat***");
console.log(fName.concat(" is", " my", " name"));

// endsWith(searchString, length): determines whether a string ends with the characters of a specified string. The second parameter is optional and specifies the end position of the string to be searched.
console.log("\n***ends with***");
console.log(fName.endsWith("n")); // true

//startsWith(searchString, position): determines whether a string begins with the characters of a specified string. The second parameter is optional and specifies the position of the string to be searched.
console.log("\n***start with***");
console.log(fName.startsWith("e"));

//split(separator, limit): splits a string into an array of substrings by a specified separator. The second parameter is optional and specifies the number of elements to be returned in the array.
console.log("\n***split***");
console.log(fName.split(""));

//repeat(count): returns a new string with a specified number of copies of the original string.
console.log("\n***repeat***");
console.log(fName.repeat(3));

//match(regexp): searches a string for a match against a regular expression and returns the matches.
console.log("\n***match***");
console.log(fName.match(/[a-e]/g));

//search(regexp): searches a string for a match against a regular expression and returns the index of the first match.
console.log("\n***search***");
console.log(fName.search(/[a-z]/));

//! Math Object Section
console.log("\n***Math Object in javascript***");

//Math.abs(x): Returns the absolute value of a number
console.log("\n***abs in Math***");
console.log(Math.abs(-5)); // Output: 5
console.log(Math.abs(5)); // Output: 5

//Math.ceil(x): Returns the smallest integer greater than or equal to a number
console.log("\n***ceil in Math***");
console.log(Math.ceil(5.1)); // Output: 6
console.log(Math.ceil(-5.1)); // Output: -5

//Math.floor(x): Returns the largest integer less than or equal to a number
console.log("\n***floor in Math***");
console.log(Math.floor(5.9)); // Output: 5
console.log(Math.floor(-5.1)); // Output: -6

//Math.round(x): Returns the nearest integer to a number
console.log("\n***round in Math***");
console.log(Math.round(5.5)); // Output: 6
console.log(Math.round(5.4)); // Output: 5

//Math.max(x1, x2, ...): Returns the largest number in a list of numbers
console.log("\n***Max in Math***");
console.log(Math.max(1, 2, 3, 4, 5)); // Output: 5
console.log(Math.max(-1, -2, -3, -4, -5)); // Output: -1

//Math.min(x1, x2, ...): Returns the smallest number in a list of numbers
console.log("\n***Min in Math***");
console.log(Math.min(1, 2, 3, 4, 5)); // Output: 1
console.log(Math.min(-1, -2, -3, -4, -5)); // Output: -5

//Math.pow(x, y): Returns x raised to the power of y
console.log("\n***pow in Math***");
console.log(Math.pow(2, 3)); // Output: 8
console.log(Math.pow(5, 2)); // Output: 25

//Math.sqrt(x): Returns the square root of a number
console.log("\n***sqrt in Math***");
console.log(Math.sqrt(9)); // Output: 3
console.log(Math.sqrt(16)); // Output: 4

//Math.random(): Returns a random number between 0 and 1
console.log("\n***random in Math***");
console.log(Math.random());

//Math.PI: Returns the value of pi (3.14159)
console.log("\n***PI in Math***");
console.log(Math.PI); // Output: 3.141592653589793

//Math.sin(x), Math.cos(x), Math.tan(x): Returns the sine, cosine, and tangent of an angle, respectively
console.log(Math.sin(90)); //
console.log(Math.cos(90)); //
console.log(Math.tan(90)); //
