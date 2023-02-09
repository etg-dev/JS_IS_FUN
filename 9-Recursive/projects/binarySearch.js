const binarySearch = (arr, target, low, high) => {
  if (low > high) {
    return -1;
  }
  let mid = Math.floor((low + high) / 2);
  if (arr[mid] === target) {
    return mid;
  }
  if (arr[mid] > target) {
    return binarySearch(arr, target, low, mid - 1);
  }
  if (arr[mid] < target) {
    return binarySearch(arr, target, mid + 1, high);
  }
};

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(binarySearch(arr, 5, 0, arr.length - 1));

// In this example, the function binarySearch(arr, target, low, high) takes in an array, a target value, and the low and high indices of the current search range. The function first checks if the low index is greater than the high index, which means that the target value is not in the array and returns -1.

// Next, the function calculates the middle index of the current search range and compares the value at that index to the target value. If they are equal, the function returns the middle index as the result.

// If the value at the middle index is greater than the target value, the function recursively calls itself with the same array, target value, and a new high index that is the middle index minus 1.

// If the value at the middle index is less than the target value, the function recursively calls itself with the same array, target value, and a new low index that is the middle index plus 1.

// This process will continue until it reaches the base case where the target value is found or the low index is greater than the high index, at which point the function will return the index of the target value or -1 if it's not found.

// It's important to note that this example assumes that the input array is already sorted, and the time complexity of this algorithm is O(log n) where n is the size of the input array, it means that this function will use logarithmic time to find the target value, in other words, the time it takes to run this function increases logarithmically as the size of the input array increases.
