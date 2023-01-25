const data = {
  e1: {
    title: "lorem1",
    description: "lorem lorem lorem",
    location: "5-Loops/projects/convert.html",
    image: "test//convert.html",
  },
  e2: {
    title: "lorem2",
    description: "lorem2 lorem2 lorem2",
    location: "5-Loops/projects/convert.html",
    image: "test//convert.html",
  },
  e3: {
    title: "lorem3",
    description: "lorem3 lorem3 lorem3",
    location: "5-Loops/projects/convert.html",
    image: "test//convert.html",
  },
};

const convertData = [];

for (const key in data) {
  convertData.push({
    id: key,
    ...data[key],
  });
}

console.log(data);

console.log(convertData);

// const convertData = [];

// for (const key in data) {
//   const object = {};
//   object.id = key;
//   for (const i in data[key]) {
//     object[i] = data[key][i];
//   }
//   convertData.push(object);
// }

// console.log(convertData);
