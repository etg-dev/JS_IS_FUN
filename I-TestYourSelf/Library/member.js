export class Member {
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
