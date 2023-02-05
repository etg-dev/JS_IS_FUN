const power_rec = (a, b) => {
  if (b == 1) {
    return a;
  } else if (b < 0) {
    return -1;
  } else {
    return a * power_rec(a, b - 1);
  }
};

const a = 3;
const b = 3;

const result = power_rec(a, b);

if (result < 0) {
  console.log("wrong input");
} else {
  console.log(`${a} ^ ${b} = ${result}`);
}
