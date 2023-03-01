//In objects we cannot set duplicate key so map solve this problem

/*  The Map() object in JavaScript is a built-in data structure that allows you to store key-value pairs, where both the key and value can be of any data type. It is similar to an object, but with some important differences.

One key difference is that a Map preserves the order of its elements, whereas the order of properties in an object is not guaranteed. Additionally, the keys in a Map can be of any data type, whereas the keys in an object are limited to strings and symbols.

To create a Map in JavaScript, you can use the Map constructor or the Map literal syntax. Here's an example of using the constructor to create a new Map:

*/

//consider this example
const a = {};
const b = {};

const myObject = {};
myObject[a] = "a";
myObject[b] = "b";

console.log(myObject);
//just keep last one
//result is : {[object Object]: 'b'}

const tempMap = new Map([
  [a, "a"],
  [b, "b"],
]);

console.log(tempMap);

// To create a Map in JavaScript, you can use the Map constructor or the Map literal syntax. Here's an example of using the constructor to create a new Map:
const myMap = new Map();

//You can then add key-value pairs to the map using the set() method:
myMap.set("key1", "value1");
myMap.set("key2", "value2");

//You can retrieve the value associated with a particular key using the get() method:
const value = myMap.get("key1");
console.log(value);

//You can also check if a key exists in the map using the has() method:
const hasKey = myMap.has("key1");
console.log(hasKey);

//To remove a key-value pair from the map, you can use the delete() method:
myMap.delete("key1");

const size = myMap.size;
console.log(size);

//add more value
myMap.set("key3", { fName: "javad" });
myMap.set("key4", "hosein");

for (const i of myMap) {
  console.log(i);
}

myMap.forEach((elem) => {
  console.log(elem);
});
