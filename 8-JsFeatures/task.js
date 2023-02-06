////////////////////////////////////////////////////////////

//task 1
console.log("*** Refactoring Array ***");

const countries = ["Iran", "Spain", "Russia", "Turkey"];

//convert above array to this :

//! IRAN Country , SPAIN Country ,  RUSSIA Country , TURKEY Country

//!solution
const result = countries.map((country) => {
  return `${country.toUpperCase()} Country`;
});

console.log(result);
//!

///////////////////////////////////////////////////////////

//task 2
//console.log("\n*** Filtering Array ***");

const cities = {
  Iran: ["tehran", "shiraz", "mashhad", "yazd"],
  Turkey: ["Istanbul", "Ankara", "Izmir"],
  Russia: ["Moscow", "Saint Petersburg", "Kazan"],
};

//loop through the above array and find Iran
//and return each city which is contain at least one z letter
//!in this case you must return this array = ["shiraz","yazd"]

//!solution
const arr = [];
for (const key in cities) {
  if (key === "Iran") {
    cities[key].map((city) => {
      if (city.includes("z")) {
        arr.push(city);
      }
    });
  }
}
console.log(arr);
//!

///////////////////////////////////////////////////////////
