class Member {
  #nCode;
  #fName;
  #lName;
  constructor(fName, lName, nCode) {
    this.#fName = fName;
    this.#lName = lName;
    this.#nCode = nCode;
  }

  get fName() {
    return this.#fName;
  }

  set fName(newName) {
    this.#fName = newName;
  }

  get lName() {
    return this.#lName;
  }

  set lName(newLastName) {
    this.#lName = newLastName;
  }

  get nCode() {
    return this.#nCode;
  }

  set nCode(newNCode) {
    this.#nCode = newNCode;
  }

  getAllProperty() {
    return { nCode: this.#nCode, fName: this.#fName, lName: this.#lName };
  }

  setAllProperty({ nCode, fName, lName }) {
    this.#nCode = nCode;
    this.#fName = fName;
    this.#lName = lName;
  }
}

class Staff extends Member {
  #staffCode;
  constructor(fName, lName, nCode) {
    super(fName, lName, nCode);
    this.#staffCode = 123;
  }

  get staffCode() {
    return this.#staffCode;
  }

  set staffCode(staffCode) {
    this.#staffCode = staffCode;
  }
}

class Author extends Member {
  #authorCode;
  #books = [];

  constructor(fName, lName, nCode) {
    super(fName, lName, nCode);
    this.#authorCode = Math.random();
  }

  addBook(book) {
    const newBook = new Book(book);
    this.#books.push(newBook);
    return newBook;
  }

  bookCount() {
    return this.#books.length;
  }
}

class Book {
  #id;
  #name;
  #price;
  #publish;
  #authors;
  constructor({ name, price, publish, authors }) {
    this.#authors = [];
    this.#id = Math.random().toFixed(6).toString().split(".").toString();
    this.#name = name;
    this.#price = price;
    this.#publish = publish;
    if (Array.isArray(authors)) {
      authors.map((author) => {
        this.#authors.push(author);
      });
    } else {
      this.#authors = [];
    }
    console.log(
      `Your book has been created and your BOOK ID is : ${this.#id.slice(2)}`
    );
  }

  get name() {
    return this.#name;
  }

  set name(name) {
    this.#name = name;
    return this;
  }

  get price() {
    return this.#price;
  }

  set price(newPrice) {
    this.#price = newPrice;
    return this;
  }

  get publish() {
    return this.#publish;
  }

  set publish(date) {
    this.#publish = date;
    return this;
  }

  get authors() {
    return this.#authors;
  }

  set authors(authors) {
    if (Array.isArray(authors)) {
      authors.map((author) => {
        authors.push(author);
      });
    } else {
      console.log("YOU HAVE TO PASS AN ARRAY");
    }
  }

  getAllProperty() {
    return {
      id: this.#id,
      name: this.#name,
      price: this.#price,
      publish: this.#publish,
      authors: this.#authors,
    };
  }

  setAllProperty({ id, name, price, publish, authors }) {
    this.#id = id;
    this.#name = name;
    this.#price = price;
    this.#publish = publish;
    this.#authors = authors;
  }
}
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

class Library {
  #persons = [];

  constructor() {}

  addToPersons(person) {
    this.#persons.push(person);
  }

  /**
   * @param {persons} person
   * @typedef {persons} Object
   * @memberof Library
   * Documentation : Pass an array or object as parameter
   */
  createMember(persons) {
    let person = null;
    const inputHandler = (personInfo) => {
      const { fName, lName, nCode, memberType } = personInfo;
      switch (memberType) {
        case "AUTHOR":
          person = new Author(fName, lName, nCode);
          break;
        case "STAFF":
          person = new Staff(fName, lName, nCode);
          break;
        case "MEMBER":
          person = new Member(fName, lName, nCode);
          console.log("MEMBER");
          break;
        default:
          console.log("YOU HAVE TO SET YOUR TYPE");
          break;
      }
      if (person !== null) {
        this.addToPersons(person);
        const ID = Date.now();
        console.log(
          `${person.fName} ${
            person.lName
          } added as ${memberType}  & membership ID : ${ID + Math.random()}`
        );
      }
    };

    if (Array.isArray(persons)) {
      persons.map((personInfo) => {
        inputHandler(personInfo);
      });
    } else if (
      typeof persons === "object" &&
      !Array.isArray(persons) &&
      persons !== null
    ) {
      inputHandler(persons);
    } else {
      console.log("You have to send an Array or Object");
    }
  }

  #isStaff(staffCode) {
    let validation = false;
    this.#persons.map((person) => {
      if (person.staffCode === staffCode) {
        validation = true;
      }
    });
    return validation;
  }

  #findMember(nCode, staffCode, returnIndex) {
    let foundIndex = -1;
    let foundMember = -1;
    if (this.#isStaff(staffCode)) {
      this.#persons.map((person, index) => {
        if (person.nCode === nCode) {
          foundIndex = index;
          foundMember = person;
        }
      });
      if (returnIndex) {
        return foundIndex;
      } else {
        return foundMember;
      }
    } else {
      console.log("YOU DO NOT HAVE ACCESS");
    }
  }

  findMember(nCode, staffCode) {
    const result = this.#findMember(nCode, staffCode);
    if (!result) return null;
    return result;
  }

  deleteMember(nCode, staffCode) {
    const memberIndex = this.#findMember(nCode, staffCode, true);
    if (memberIndex >= 0) {
      this.#persons.splice(memberIndex, 1);
    } else {
      console.log("Person Not Found");
    }
  }

  printAllMember() {
    this.#persons.map((person) => {
      console.log(person);
    });
  }

  updateMember(nCode, staffCode, newProp) {
    const member = this.#findMember(nCode, staffCode);
    if (member !== -1) {
      const oldObject = member.getAllProperty();
      member.setAllProperty({ ...oldObject, ...newProp });
    } else {
      console.log("NOT FOUND");
    }
  }

  //
}

const members = [
  {
    fName: "Erfan",
    lName: "Taghinia",
    nCode: "0926068090",
    memberType: "AUTHOR",
  },
  {
    fName: "Ali",
    lName: "Hoseini",
    nCode: "0926067060",
    memberType: "AUTHOR",
  },
  {
    fName: "Mohammad",
    lName: "Javadi",
    nCode: "0926063055",
    memberType: "AUTHOR",
  },
];

const staff = {
  fName: "Erfan",
  lName: "Taghinia",
  nCode: "0926068090",
  memberType: "STAFF",
};

const sajadLib = new Library();

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

//! Task => complete these methods
// Implement CRUD for books
// Each book have these property {name:... , price:... , publish:... , authors:...}
/*
  addToBooks(book) {}

  createBook(bookInfo) {}

  findBook(bookName, returnIndex) {}

  removeFromBooks(bookIndex) {}

  deleteBook(bookName) {}

  readAllBooks() {}

  updateBooks(bookName, newBookProperty) {}
*/
