// Here's an example of a recursive function that finds the greatest common divisor (GCD) of two numbers:

//greatest common divisor
const gcd = (a, b) => {
  if (b === 0) {
    return a;
  } else {
    return gcd(b, a % b);
  }
};

console.log(gcd(60, 48));

// In this example, the function gcd() takes in two numbers a and b, and uses the Euclidean algorithm for finding the GCD. The function checks if b is equal to 0. If it is, the function returns a as the GCD. If not, the function returns the result of calling the gcd() function with the inputs b and a % b.

// The function call stack will be like:

// gcd(60, 48)
// gcd(48, 12)
// gcd(12, 0)
// 12
