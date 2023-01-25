const limit = prompt("please enter your limit");
let temp = -1;
for (let i = 0; i < limit; i++) {
  const number = prompt("please enter posetive number :");
  if (number > temp) {
    temp = number;
  }
}
if (temp == -1) {
  alert("sth went wrong!");
} else {
  alert(temp);
}
