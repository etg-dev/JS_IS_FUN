// get width and height from user and create a shape
// but if user enter negetive height or width throw an error
//and you have to handle it

//let create this project

const printShape = (width, height) => {
  for (let i = 0; i < height; i++) {
    let stars = "";
    for (let j = 0; j < width; j++) {
      stars += "*";
    }
    console.log(stars);
  }
};

const validationAndRun = (width, height) => {
  if (width <= 0 || height <= 0) {
    throw new Error("width or height can not be negative");
  } else {
    printShape(width, height);
  }
};

const width = +prompt("Please enter width : ");

const height = +prompt("Please enter height : ");

try {
  validationAndRun(width, height);
} catch (error) {
  console.log(error.message);
}

console.log("run");
