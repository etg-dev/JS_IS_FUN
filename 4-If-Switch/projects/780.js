const firstInput = prompt("for using program enter *780#");

if (firstInput === "*780#") {
  const secondInput = +prompt(
    "choose your program:\n1.Bill\n2.charge\n3.Internet"
  );
  switch (secondInput) {
    case 1:
      const bill = +prompt("choose your program:\n1.tellphone\n2.mobile");
      switch (bill) {
        case 1:
          alert("tellphone");
          break;
        case 2:
          alert("mobile");
          break;
        default:
          alert("wrongInput");
      }
      break;
    case 2:
      const charge = +prompt("choose your program:\n1.Irancell\n2.HamrahAvall");
      switch (charge) {
        case 1:
          alert("Irancell");
          break;
        case 2:
          alert("HamrahAvall");
          break;
        default:
          alert("wrongInput");
      }
      break;
    case 3:
      const Internet = +prompt("choose your program:\n1.shatel\n2.Irancell");
      break;
    default:
      switch (Internet) {
        case 1:
          alert("shatel");
          break;
        case 2:
          alert("Irancell");
          break;
        default:
          alert("wrongInput");
      }
      break;
  }
} else {
  alert("wrong input");
}
