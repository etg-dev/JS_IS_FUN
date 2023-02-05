const isPrime = (n) => {
  if (n === 1) {
    alert("1 is neither prime nor composite number.");
  } else if (n > 1) {
    for (let i = 2; i <= n / 2; i++) {
      if (n % i == 0) {
        return false;
      }
    }
    return true;
  } else {
    alert("Please enter a positive number!");
  }
};

const printPrime = (n) => {
  for (let i = 2; i < n; i++) {
    if (isPrime(i)) {
      console.log(i);
    }
  }
};

printPrime(20);
