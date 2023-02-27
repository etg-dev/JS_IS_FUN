export class Book {
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
