const sumArray = (arr) => {
  if (arr.length === 0) {
    return 0;
  } else {
    return arr[0] + sumArray(arr.slice(1));
  }
};

console.log(sumArray([1, 2, 3, 4, 5]));

// In this example, the function sumArray() takes in an array arr and checks if its length is equal to 0. If it is, the function returns 0. If not, the function returns the first element of the array arr[0] added to the result of calling the sumArray() function with the input arr.slice(1). This continues until the entire array has been traversed and the sum of all elements is returned.

// The function call stack will be like:

// sumArray([1, 2, 3, 4, 5])
// 1 + sumArray([2, 3, 4, 5])
// 1 + (2 + sumArray([3, 4, 5]))
// 1 + (2 + (3 + sumArray([4, 5])))
// 1 + (2 + (3 + (4 + sumArray([5]))))
// 1 + (2 + (3 + (4 + 5)))
// 1 + (2 + (3 + 9))
// 1 + (2 + 12)
// 1 + 14
// 15

arr = [1, 2, 3, 4, 5];
console.log(arr.slice(2));
