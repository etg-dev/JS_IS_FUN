// Ternary search is a search algorithm that is used to find the maximum or minimum value of a function within a given range. It's similar to the binary search algorithm but instead of dividing the search range into two parts, it divides the search range into three parts.

// Here's an example of a recursive implementation of the ternary search algorithm in JavaScript:

//mid1 = l + (r-l)/3
//mid2 = r – (r-l)/3

const ternarySearch1 = (left, right, key, arr) => {
  while (right >= left) {
    let mid1 = left + Math.floor((right - left) / 3);
    let mid2 = right - Math.floor((right - left) / 3);

    if (arr[mid1] == key) {
      return mid1;
    }
    if (arr[mid2] == key) {
      return mid2;
    }

    if (key < arr[mid1]) {
      right = mid1 - 1;
    } else if (key > arr[mid2]) {
      left = mid2 + 1;
    } else {
      left = mid1 + 1;
      right = mid2 - 1;
    }
  }

  return -1;
};

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const left1 = 0;

const right1 = arr1.length - 1;

const key1 = 1;

const t3 = performance.now();
const result1 = ternarySearch1(left1, right1, key1, arr1);
const t4 = performance.now();

console.log("Loop");
console.log(t4 - t3);

//console.log(result1);

///////////////////////////////////////

const ternarySearch = (left, right, key, arr) => {
  if (right >= left) {
    let mid1 = left + Math.floor((right - left) / 3);
    let mid2 = right - Math.floor((right - left) / 3);

    if (arr[mid1] == key) {
      return mid1;
    }
    if (arr[mid2] == key) {
      return mid2;
    }

    if (key < arr[mid1]) {
      return ternarySearch(left, mid1 - 1, key, arr);
    } else if (key > arr[mid2]) {
      return ternarySearch(mid2 + 1, right, key, arr);
    } else {
      return ternarySearch(mid1 + 1, mid2 - 1, key, arr);
    }
  }

  return -1;
};

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const left = 0;

const right = arr.length - 1;

const key = 5;

const t1 = performance.now();
const result = ternarySearch(left, right, key, arr);
const t2 = performance.now();

console.log("recursive : ");
console.log(t2 - t1);

//console.log(result);
