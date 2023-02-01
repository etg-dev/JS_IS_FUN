//consider this example
//? If you uncomment, these 2 lines will definitely get an ugly error and the program will crash
// try {
//   console.log(test);
//   const test = "ali";
// } catch (error) {
//   console.log(error);
// }

// console.log("test");

//but we can handle the errors in our program
//in diffrent way

//?               using try and catch
try {
  console.log(test);
  const test = "ali";
} catch (error) {
  console.log(error.message);
}

try {
  console.log(test);
  const test = "ali";
} catch (e) {
  console.error("error", e.message);
} finally {
  console.log("finally");
}

console.log("\n***RealWorld example with throw error***\n");
const input = 3;
try {
  switch (input) {
    case 1:
      console.log("1");
      break;
    case 2:
      console.log("2");
      break;
    case 3:
      console.log("3");
      break;
    default:
      throw new Error("input is not valid number");
  }
} catch (err) {
  console.error("output" + " " + err.message);
} finally {
  console.log("run finally");
}

console.log("\n***nested try and catch with throw error message***\n");

try {
  try {
    throw new Error("sth went wrong");
  } catch (ex) {
    console.error("inner", ex.message);
    throw ex;
  } finally {
    console.log("finally");
  }
} catch (ex) {
  console.error("outer", ex.message);
}

console.log("\n***Custom error***\n");
const UserException = (message) => {
  this.message = message;
  this.name = "UserException";
};

function getMonthName(mo) {
  mo--; // Adjust month number for array index (1 = Jan, 12 = Dec)
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  if (months[mo] !== undefined) {
    return months[mo];
  } else {
    throw new UserException("InvalidMonthNo");
  }
}

let monthName;

try {
  const myMonth = 15;
  monthName = getMonthName(myMonth);
} catch (e) {
  monthName = "unknown";
  console.error(e.message, e.name); // pass exception object to err handler
}

console.log("***DEBUGGER CONSOLE***");

const number = 3;

const isPrime = (n) => {
  for (let i = 0; i < n / 2; i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
};

const result = isPrime(number);

if (result === true) {
  console.log(`${number} is prime`);
} else {
  console.log(`${number} is not prime`);
}
