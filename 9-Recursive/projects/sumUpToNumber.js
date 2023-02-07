const sum = (n) => {
  if (n == 0 || n == 1) {
    return n;
  } else {
    return n + sum(n - 1);
  }
};

const number = 10;

const result = sum(number);
console.log(`Sum of numbers up to ${number} is :${result}`);
