const getInputFromUser = (text, programs, number) => {
  let input = "";
  if (number) {
    input = +prompt(`${text}\n${programs ?? ""}`);
  } else {
    input = prompt(`${text}\n${programs ?? ""}`);
  }
  return input;
};

const validation = (input, ...theArgs) => {
  let validate = true;
  for (const i of theArgs) {
    if (input === i) {
      validate = false;
    }
  }
  return validate;
};

const switchHandler = (input, ...theArgs) => {
  const error = "nothing to show";
  switch (input) {
    case 1:
      alert(theArgs[0] ? theArgs[0] : error);
      break;
    case 2:
      alert(theArgs[1] ? theArgs[1] : error);
      break;
    case 3:
      alert(theArgs[2] ? theArgs[2] : error);
      break;
    default:
      alert("Please try again");
      break;
  }
};

let input = "";
while (input !== "*780#") {
  input = getInputFromUser("for using this program enter *780#");
}

if (input === "*780#") {
  let val = false;
  let innerInput = "";
  do {
    innerInput = getInputFromUser(
      "choose your program",
      "1.Bill\n2.Internet\n3.charity",
      true
    );
    val = validation(innerInput, 1, 2, 3);
  } while (val);
  switchHandler(innerInput, "Bill", "Internet", "Charity");
} else {
  alert("sth went wrong");
}
