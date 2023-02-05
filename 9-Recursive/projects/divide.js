const div_rec = (a, b) => {
  if (b == 0) {
    return 0;
  }
  if (a - b == 0) {
    return 1;
  }
  if (a < b) {
    return -1;
  } else {
    return 1 + div_rec(a - b, b);
  }
};

const a = 6;
const b = 2;

const result = div_rec(a, b);

console.log(`${a} / ${b} = ${result}`);
