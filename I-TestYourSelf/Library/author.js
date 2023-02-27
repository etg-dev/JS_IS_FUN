import { Member } from "./member.js";

export class Author extends Member {
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
