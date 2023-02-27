import { Member } from "./member.js";
import { Author } from "./author.js";
import { Staff } from "./staff.js";
import { Book } from "./book.js";

export class Library {
  #persons = [];
  #books = [];

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

  addToBooks(book) {
    this.#books.push(book);
  }

  createBook(books) {
    let book = null;
    const inputHandler = (bookInfo) => {
      book = new Book(bookInfo);
      if (book !== null) {
        this.addToBooks(book);
      }
    };
    if (Array.isArray(books)) {
      books.map((bookInfo) => {
        inputHandler(bookInfo);
      });
    } else if (
      typeof books === "object" &&
      !Array.isArray(books) &&
      books !== null
    ) {
      inputHandler(books);
    } else {
      console.log("You have to send an Array or Object");
    }
  }

  printAllBooks() {
    this.#books.map((book) => {
      console.log(book);
    });
  }

  #findBook(nameBook, returnIndex, valid, staffCode) {
    if (this.#isStaff(staffCode) || valid) {
      const foundBook = [];
      let foundBookIndex = [];
      this.#books.map((book, index) => {
        if (book.name === nameBook) {
          foundBook.push(book);
          foundBookIndex.push(index);
        }
      });
      if (returnIndex) {
        return foundBookIndex;
      } else {
        return foundBook;
      }
    } else {
      console.log("YOU DO NOT HAVE ACCESS");
    }
  }

  findBook(nameBook) {
    return this.#findBook(nameBook, false, true);
  }

  deleteBook(nameBook, staffCode) {
    const arrIndex = this.#findBook(nameBook, true, false, staffCode);
    let counter = 0;
    for (let i = 0; i < arrIndex.length; i++) {
      let deleteIndex = arrIndex[i] - counter;
      this.#books.splice(deleteIndex, 1);
      counter++;
    }
  }

  updateBooks(bookName, staffCode, newBookProperty) {
    const books = this.#findBook(bookName, false, false, staffCode);

    if (books && books.length > 0) {
      books.map((book) => {
        book.setAllProperty({ ...book.getAllProperty(), ...newBookProperty });
      });
    }
  }
}
