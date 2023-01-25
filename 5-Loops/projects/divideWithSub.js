const a = 12;
const b = 4;

// 10 / 2 => ? * 2 = 10 or 10 8 6 4 2 0
let counter = 0;
for (let i = a; i > 0; i = i - b) {
  counter++;
}
console.log(counter);
