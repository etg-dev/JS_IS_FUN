import { Library } from "./library.js";
import { members, staff, books, book } from "./data.js";

const sajadLib = new Library();

//!  add a book for author
// const mockBookOne = {
//   name: "Clean Code",
//   price: "15$",
//   publish: new Date("01/03/1999"),
//   authors: ["Robert C.Martin"],
// };

// const mockBookTwo = {
//   name: "Code Complete (2 Edition)",
//   price: "13$",
//   publish: new Date("02/09/2003"),
//   authors: ["Robert C.Martin", "corman"],
// };

// const bob = new Author("Robert", "Martin", 1751345566);
// bob.addBook(mockBookOne);
// bob.addBook(mockBookTwo);
// console.log(bob);

//CRUD => CREATE READ UPDATE DELETE
//!

console.log("\nCREATE MEMBER\n");
sajadLib.createMember(members);
sajadLib.createMember(staff);

console.log("\nBEFORE DELETE\n");
sajadLib.printAllMember();

console.log("\nAFTER DELETE\n");
sajadLib.deleteMember("0926067060", 123);
sajadLib.printAllMember();

console.log("\nFIND MEMBER\n");
const found = sajadLib.findMember("0926063055", 123);
console.log(found);

console.log("\nBEFORE UPDATE\n");
sajadLib.printAllMember();

console.log("\nAFTER UPDATE\n");
sajadLib.updateMember("0926063055", 123, { fName: "ali" });
sajadLib.printAllMember();

console.log("\nCREATE BOOK\n");
sajadLib.createBook(books);
sajadLib.createBook(book);

console.log("\nBEFORE DELETE\n");
sajadLib.printAllBooks();

console.log("\nAFTER DELETE\n");
sajadLib.deleteBook("Clean Code", 123);
sajadLib.printAllBooks();

console.log("\nFIND BOOK\n");
const foundBook = sajadLib.findBook("Code Complete (2 Edition)");
console.log(foundBook);

console.log("\nBEFORE UPDATE\n");
sajadLib.printAllBooks();

console.log("\nAFTER UPDATE\n");
sajadLib.updateBooks("Code Complete (2 Edition)", 123, {
  name: "Clean Code",
  price: "10$",
});
sajadLib.printAllBooks();
