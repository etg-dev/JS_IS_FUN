// In computer science, time complexity is the measure of the amount of time it takes for an algorithm to run as a function of the size of the input data. It's used to compare the performance of different algorithms and to predict the performance of an algorithm for large input sizes. The time complexity of an algorithm is usually expressed using big O notation, which gives an upper bound on the number of operations performed by the algorithm.

// In JavaScript, you can use the performance.now() method to measure the time it takes for a piece of code to run. Here's an example that compares the time it takes for a linear search and a binary search to find a specific value in an array:

const linearSearch = (arr, x) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === x) return i;
  }
  return -1;
};

const binarySearch = (arr, x) => {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === x) return mid;
    else if (arr[mid] < x) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const x = 8;
const t1 = performance.now();
console.log(linearSearch(arr, x));
const t2 = performance.now();
console.log(`Linear search took ${(t2 - t1).toFixed(4)} milliseconds.`);

const t3 = performance.now();
console.log(binarySearch(arr, x));
const t4 = performance.now();
console.log(`Binary search took ${(t4 - t3).toFixed(4)} milliseconds.`);

// As you can see, in the linear search, we check all the elements of the array in order, which results in the time complexity of O(n) where n is the size of the input array, this means that the time it takes to run the linear search increases linearly with the size of the input array.

// On the other hand, the binary search, we divide the array into two parts at each step, thus it takes logarithmic time (O(log n)) to run, this means that the time it takes to run the binary search increases logarithmically with the size of the input array, which is much faster than linear search for large input sizes.

// It's worth noting that the time complexity of an algorithm can be affected by the specific implementation, for example, if we use a recursive implementation for the binary search it will take O(log n) in the best case and O(n) in the worst case.

// Also, it's important to note that Time Complexity is just one aspect of evaluating an algorithm performance, there are other factors such as space complexity, constant factors, and the performance on specific inputs that may affect the performance of an algorithm.

const t5 = performance.now();
for (let i = 0; i < 10; i = i + 1) {}
const t6 = performance.now();

console.log(t6 - t5);

const t7 = performance.now();
for (let i = 0; i < 10; i = i + 2) {}
const t8 = performance.now();

console.log(t8 - t7);
