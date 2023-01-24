//? object1=fName,lName,age
//? object2=fName,lName,age,fullName
//? object3=title,number
//? arr=[12, "12", age, object3]
//? finalArr=[object1,object2 arr]

const object1 = {
  fName: "jon",
  lName: "doe",
  age: 33,
};

const object2 = {
  fName: "jon",
  lName: "doe",
  age: 33,
  fullName: `${object1.fName} | ${object1.lName}`,
};

const object3 = {
  title: "testTitle",
  number: 150,
};

const age = 33;

const arr = [12, "12", age, object3];

const finalArr = [object1, object2, arr];

console.log(finalArr);

//* but how i write this code

// const object1 = {
//   fName: "jon",
//   lName: "doe",
//   age: 33,
// };

// const fullName = `${object1.fName} | ${object1.lName}`;

// const object2 = { ...object1, fullName };

// const object3 = {
//   title: "testTitle",
//   number: 150,
// };

// const { age } = object1;

// const arr = [12, "12", age, object3];

// const finalArr = [object1, object2, arr];

// console.log(finalArr);
