const arr = [1, 2, 3, 3, 4, 5, 5, 1, 2];
const mySet = new Set(arr);

console.log("\n***  Array ***");
console.log(arr);
//result is : [1, 2, 3, 3, 4, 5, 5, 1, 2]

console.log("\n*** Set ***");
console.log(mySet);
//result is : Set(5) {size: 5, 1, 2, 3, 4, 5}

const uniqueArray = [...mySet];
//result is => new array which is not contain duplicate numbers
console.log("\n*** Uniqure Array ***");
console.log(uniqueArray);
//resutl is => [1, 2, 3, 4, 5]

//let see methods which is have in set class
const tempSet = new Set();

//add() any data type

tempSet.add(6);
tempSet.add({ name: "erfan" });
const newArr = [1, 22, 22, 34, 1];
tempSet.add(newArr);
//result is : Set(3) {size: 3, 6, {name: 'erfan'}, (5) [1, 22, 22,34,1]}
console.log("\n*** add() ***");
console.log(tempSet);

//delete() pass a value
//! how to delete 22 in array
// tempSet.forEach((el) => {
//   if (Array.isArray(el)) {
//     const index = el.findIndex((elem) => elem === 22);
//     if (index) {
//       el.splice(index, 1);
//     }
//   }
// });
tempSet.delete(6);
tempSet.delete(newArr);
console.log("\n*** delete() ***");
console.log(tempSet);
//result is : {size: 1, {name: 'erfan'}}

//has()
//add new value and check the set has that value
tempSet.add(7);
console.log("\n*** has() ***");
console.log(tempSet.has(7));
console.log(tempSet.has(9));
//result is : true

//size
console.log("\n*** size ***");
console.log(tempSet);
console.log(tempSet.size);

console.log("*******");
for (const i of tempSet) {
  console.log(i);
}

tempSet.forEach((elem) => {
  console.log(elem);
});

console.log("*******");

//clear()
tempSet.clear();
console.log("\n*** clear() ***");
console.log(tempSet);
//result is : Set(0) {size: 0}
