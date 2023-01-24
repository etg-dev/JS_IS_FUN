// Underweight = <18.5
// Normal weight = 18.5–24.9
// Overweight = 25–29.9
//weight / height * height

const weight = +prompt("please enter your weight KG");
const height = +prompt("please enter your height CM");
const reuslt = weight / (height * height);

if (reuslt < 18.5) {
  alert("Underweight");
} else if (reuslt < 24.9 && reuslt > 18.5) {
  alert("normal");
} else {
  alert("Overweight");
}

//rebuild this with switch and case
