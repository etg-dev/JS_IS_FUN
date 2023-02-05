// A recursive function in JavaScript is a function that calls itself until a certain condition is met. Here's an example of a recursive function that calculates the factorial of a given number:
console.log("\nRecursive factorial");

const factorial = (n) => {
  if (n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
};

console.log(factorial(5));

// In this example, the function factorial() takes in a number n and checks if it is equal to 1. If it is, the function returns 1. If not, the function returns n multiplied by the result of calling the factorial() function with the input n - 1. This continues until n is equal to 1, at which point the recursive calls will stop and the final result will be returned.

// factorial(5)
// 5 * factorial(4)
// 5 * (4 * factorial(3))
// 5 * (4 * (3 * factorial(2)))
// 5 * (4 * (3 * (2 * factorial(1))))
// 5 * (4 * (3 * (2 * 1)))
// 5 * (4 * 6)
// 5 * 24
// 120

//Sure, here's an example of a recursive function that finds the nth number in the Fibonacci sequence:
console.log("\nRecursive fibonacci");

const fibonacci = (n) => {
  if (n <= 2) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
};

console.log(fibonacci(8));

//In this example, the function fibonacci() takes in a number n and checks if it is less than or equal to 2. If it is, the function returns 1. If not, the function returns the sum of the results of calling the fibonacci() function with the inputs n - 1 and n - 2.

//The function call stack will be like:

//fibonacci(8)

// fibonacci(7) + fibonacci(6)

// (fibonacci(6) + fibonacci(5)) + (fibonacci(5) + fibonacci(4))

// ((fibonacci(5) + fibonacci(4)) + (fibonacci(4) + fibonacci(3))) + ((fibonacci(4) + fibonacci(3)) + (fibonacci(3) + fibonacci(2)))

// (((fibonacci(4) + fibonacci(3)) + (fibonacci(3) + fibonacci(2))) + ((fibonacci(3) + fibonacci(2)) + (fibonacci(2) + fibonacci(1)))) + (((fibonacci(3) + fibonacci(2)) + (fibonacci(2) + fibonacci(1))) + ((fibonacci(2) + fibonacci(1)) + (fibonacci(1) + fibonacci(0))))

//21

//As you can see it's very inefficient, the time complexity of this algorithm is O(2^n), which makes it impractical for large values of n. There are different ways to optimize the function such as using a dynamic programming approach.
