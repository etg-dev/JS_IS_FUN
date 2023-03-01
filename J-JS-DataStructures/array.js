// An array in JavaScript is a data structure used to store a collection of values of the same type or different types. In JavaScript, arrays are objects that have special properties and methods specifically designed for working with sequential data.

// Under the hood, arrays in JavaScript are implemented as objects with numeric keys that represent the index of each element in the array. These keys are converted to strings and used as property names for the array object. The values associated with these properties are the elements themselves.

// When you create an array in JavaScript, the engine reserves a contiguous block of memory for the array's elements. Each element is stored at a specific memory address, which can be accessed using the element's index.

// JavaScript arrays are dynamic in size, meaning that you can add or remove elements at any time. When you add an element to an array, the engine allocates additional memory to accommodate the new element. When you remove an element, the engine frees up the memory associated with that element.

// JavaScript arrays have many built-in methods for manipulating the data they store. Some of the most commonly used methods include push(), pop(), shift(), unshift(), splice(), slice(), concat(), and sort(). These methods make it easy to add, remove, and modify elements in an array without having to manually manipulate the underlying memory.

// Overall, arrays in JavaScript are a powerful and flexible data structure that can be used to store and manipulate collections of data efficiently.

const arr = [];

console.log(arr.length);

const arr2 = new Array(3);

console.log(arr2.length);

arr.push(1, 2, 3, 4, 5, 6);

arr.map((elem) => {
  console.log(elem);
});

for (const i of arr) {
  console.log(i);
}

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

const deletedIndex = arr.pop();
console.log(deletedIndex);

arr.push(1, 2, 3, 4, 5, 6);

arr.unshift(0, 1);

arr.shift();

console.log(arr);

let newArray = arr.slice(1);

console.log(newArray);

newArray = arr.slice(-2);

console.log(newArray);

//We earlier learned array features in jsFeatures section
