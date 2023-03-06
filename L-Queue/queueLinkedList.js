class Node {
  #val;
  #next;
  constructor(val) {
    this.#val = val;
    this.#next = null;
  }

  set val(val) {
    this.#val = val;
  }

  get val() {
    return this.#val;
  }

  set next(next) {
    this.#next = next;
  }

  get next() {
    return this.#next;
  }
}

class LinkedList {
  #head;
  #tail;
  constructor() {
    this.#head = null;
    this.#tail = null;

    this.length = 0;
  }

  append(val) {
    const newNode = new Node(val);

    if (!this.#head) {
      this.#head = newNode;
    }
    if (this.#tail) {
      this.#tail.next = newNode;
    }

    this.#tail = newNode;

    this.length++;
  }

  /**
   *
   * @param {*} value
   *
   * Documentation:
   *
   * Add to top of the list
   */
  prepend(val) {
    const newNode = new Node(val);
    newNode.next = this.#head;

    this.#head = newNode;

    if (!this.#tail) {
      this.#tail = newNode;
    }

    this.length++;
  }

  findElem(index) {
    if (index < 0 || index >= this.length) return null;

    let current = this.#head;

    for (let i = 0; i < index; i++) {
      current = current.next;
    }

    return current.val;
  }

  /**
   * Documentation: Get index and value and replace it
   *
   *
   * @param {index} Send index which is you want to replace
   * @param {val} This param that replace to old value
   * @returns True or False
   *
   */
  updateElement(index, val) {
    if (index < 0 || index >= this.length) return false;

    let current = this.#head;

    for (let i = 0; i < index; i++) {
      current = current.next;
    }

    current.val = val;

    return true;
  }

  deleteElement(index) {
    if (index < 0 || index >= this.length) return false;

    if (index === 0) {
      let temp = this.#head;
      this.#head = this.#head.next;

      this.length--;

      return temp.val;
    }

    let current = this.#head;

    let temp = null;
    for (let i = 0; i < index - 1; i++) {
      if (i === index - 1) {
        temp = current.val;
      }
      current = current.next;
    }

    current.next = current.next.next;

    this.length--;

    return temp;
  }

  //READ ALL
  printList() {
    let current = this.#head;
    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }
}

class Queue {
  #list = new LinkedList();
  constructor() {}

  size() {
    return this.#list.length;
  }

  add(v) {
    this.#list.append(v);
  }

  take() {
    if (this.size() === 0) {
      return null;
    }
    return this.#list.deleteElement(0);
  }

  head() {
    if (this.size() === 0) {
      return null;
    }
    return this.#list.findElem(0);
  }

  tail() {
    if (this.size() === 0) {
      return null;
    }
    const length = this.size() - 1;
    return this.#list.findElem(length);
  }

  print() {
    this.#list.printList();
  }
}

const queue = new Queue();

queue.add(1);
queue.add(2);
queue.add(3);

console.log(queue);
console.log(queue.size());
console.log(queue.head());
console.log(queue.tail());
console.log(queue.take());
console.log("******");
queue.print();
