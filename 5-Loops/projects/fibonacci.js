//fibo sequence : 1 1 2 3 5 8 13 21 34

const number = +prompt("please enter number !");

let a = 1;
let b = 1;

if (number == 1) {
  alert(a);
} else if (number == 2) {
  alert(a);
} else {
  let temp = 0;
  for (let i = 2; i < +number; i++) {
    temp = a + b;
    b = a;
    a = temp;
  }
  alert(temp);
}
