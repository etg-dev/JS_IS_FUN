import { Member } from "./member.js";

export class Staff extends Member {
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
