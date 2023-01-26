let input = prompt("for run this program call *780#");

while (input !== "*780#") {
  input = prompt("for run this program call *780#");
}

if (input === "*780#") {
  let input2;
  do {
    input2 = +prompt("please choose your program\n1.Bill\n2.charge\n3.charity");
  } while (input2 !== 1 && input2 !== 2 && input2 !== 3);
  switch (input2) {
    case 1:
      let Bill = "";
      do {
        Bill = +prompt("choose your program:\n1.tellphone\n2.mobile");
      } while (Bill !== 1 && Bill !== 2);
      switch (Bill) {
        case 1:
          alert("tellphone");
          break;
        case 2:
          alert("mobile");
          break;
        default:
          alert("wrong input");
          break;
      }
      break;
    case 2:
      let charge = "";
      do {
        charge = +prompt("choose your program:\n1.inrancell\n2.hamrahaval");
      } while (charge !== 1 && charge !== 2);
      switch (charge) {
        case 1:
          alert("inrancell");
          break;
        case 2:
          alert("hamrahaval");
          break;
        default:
          alert("wrong input");
          break;
      }
      break;
    case 3:
      let charity = "";
      do {
        charity = +prompt("choose your program:\n1.emamali\n2.mahak");
      } while (charity !== 1 && charity !== 2);
      switch (charity) {
        case 1:
          alert("emamali");
          break;
        case 2:
          alert("mahak");
          break;
        default:
          alert("wrong input");
          break;
      }
      break;
    default:
      alert("wrong input");
      break;
  }
} else {
  console.log("wrong input");
}
