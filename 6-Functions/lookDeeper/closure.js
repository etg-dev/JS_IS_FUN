const wrapValue = (n) => {
  let local = n;
  return () => local;
};

let wrap1 = wrapValue(1);
console.log(wrap1());

let wrap2 = wrapValue(2);
console.log(wrap1());

//other example
const multiplier = (factor) => {
  return (number) => number * factor;
};

let twice = multiplier(2);
console.log(twice(5));

//we call this closure

function makeCounter() {
  let count = 0;
  return function () {
    return count++;
  };
}

let counter = makeCounter();
console.log(counter()); // 0
console.log(counter()); // 1
console.log(counter()); // 2

///
function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}

let add5 = makeAdder(5);
console.log(add5(3)); // 8
console.log(add5(4)); // 9

let add10 = makeAdder(10);
console.log(add10(3)); // 13
console.log(add10(4)); // 14

// In this example, the makeAdder function takes a single argument x and returns a new function that takes a single argument y and returns the sum of x and y. The returned function is a closure because it has access to the x variable that was passed to the makeAdder function, even after the makeAdder function has finished executing.

// In the code above, makeAdder function returns a closure function that takes an input y and adds it to the variable x passed to the makeAdder function. We call makeAdder(5) which returned a function that we assigned to variable add5 and when we called add5(3) it returns 8 because it added 3 to 5. And when we call add5(4) it returns 9 because it added 4 to 5.

// We also created another closure function add10 and it works the same as add5 but it has it's own closure variable x which is 10.

// Closures allow you to create functions that can remember some of the context in which they were created, and this can be a powerful technique for creating abstractions and simplifying complex code.
