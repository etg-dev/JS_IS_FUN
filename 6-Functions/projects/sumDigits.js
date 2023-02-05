//create function which is get number and return sum of all digits

//solution one :
const n = "1234";

const sumDigits = (number) => {
  let temp = 0;
  for (let i = 0; i < number.length; i++) {
    temp += +number[i];
  }
  return temp;
};

const result = sumDigits(n);
//console.log(result);

//solution two :

const m = 1234;

const sumDigitsTwo = (number) => {
  let temp = 0;
  for (let i = 0; number > 0; i++) {
    temp += number % 10;
    console.log(temp);
    number = Math.floor(number / 10);
  }
  return temp;
};

const resultTwo = sumDigitsTwo(m);
console.log(resultTwo);
