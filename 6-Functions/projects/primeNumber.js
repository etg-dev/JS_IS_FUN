//?program to check if a number is prime or not

// take input from the user
const number = +prompt("Enter a positive number: ");
//or you can use parseInt

const findPrimeNumber = (n) => {
  if (n === 1) {
    alert("1 is neither prime nor composite number.");
  } else if (n > 1) {
    for (let i = 2; i <= n / 2; i++) {
      if (n % i == 0) {
        return false;
      }
    }
    return true;
  }
  // check if number is less than 1
  else {
    alert("Please enter a positive number!");
  }
};

const printPrimeNumber = (Prime) => {
  if (Prime) {
    alert(`${number} is a prime number`);
  } else {
    alert(`${number} is a not prime number`);
  }
};

const resultPrime = findPrimeNumber(number);

printPrimeNumber(resultPrime);
