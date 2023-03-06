class Node {
  #val = null;
  #next = null;

  constructor(val) {
    this.#val = val;
    this.#next = null;
  }

  get val() {
    return this.#val;
  }

  set val(val) {
    this.#val = val;
  }

  get next() {
    return this.#next;
  }

  set next(next) {
    this.#next = next;
  }
}

class LinkedList {
  #head;
  #tail;

  constructor() {
    this.#head = null;
    this.#tail = null;
  }

  get head() {
    return this.#head;
  }

  get tail() {
    return this.#tail;
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
  }

  prepend(val) {
    const newNode = new Node(val);
    newNode.next = this.#head;

    this.#head = newNode;

    if (!this.#tail) {
      this.#tail = newNode;
    }
  }

  addToIndex(index, value) {
    const newNode = new Node(value);
    if (index < 0 || !this.#head) {
      return -1;
    }
    if (index === 0) {
      this.prepend(value);
      return;
    }
    let counter = 0;
    let curr = this.#head;
    while (curr) {
      if (!curr.next && counter === index - 1) {
        this.append(value);
        return;
      }
      if (counter === index - 1) {
        newNode.next = curr.next;
        curr.next = newNode;
        return;
      }
      curr = curr.next;
      counter++;
    }
    return -1;
  }

  hasElement(index) {
    if (index < 0) {
      return -1;
    }
    let current = this.#head;
    let counter = 0;
    while (current) {
      if (counter === index) {
        return current.val;
      }
      current = current.next;
      counter++;
    }
    return -1;
  }

  updateElement(index, val) {
    let current = this.#head;
    let counter = 0;
    while (current) {
      if (index === counter) {
        current.val = val;
      }
      current = current.next;
      counter++;
    }
  }

  deleteElement(index) {
    let current = this.#head;
    let counter = 0;

    if (index < 0 && !this.#head) {
      return;
    }

    if (index === 0) {
      this.#head = current.next;
      return;
    }
    while (current && current.next) {
      if (counter === index - 1) {
        current.next = current.next.next;
      }
      counter++;
      current = current.next;
    }
  }

  get length() {
    let current = this.#head;
    let counter = 0;

    while (current) {
      current = current.next;
      counter++;
    }

    return counter;
  }

  findFirst(val) {
    if (!this.#head) {
      return;
    }
    let current = this.#head;
    let counter = 0;
    while (current) {
      if (current.val === val) {
        return counter;
      }
      current = current.next;
      counter++;
    }
  }

  findLast(val) {
    if (!this.#head) {
      return;
    }
    let current = this.#head;
    let counter = 0;
    let lastIndex = -1;
    while (current) {
      if (current.val === val) {
        lastIndex = counter;
      }
      current = current.next;
      counter++;
    }
    return lastIndex;
  }

  printList() {
    if (!this.#head) {
      return;
    }
    let temp = "";
    let curr = this.#head;
    while (curr) {
      temp += curr.val;
      if (curr.next) {
        temp += " , ";
      }
      curr = curr.next;
    }
    console.log("{ " + temp + " }");
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
    this.#list.deleteElement(0);
    return true;
  }

  head() {
    if (this.size() === 0) {
      return null;
    }
    return this.#list.head.val;
  }

  tail() {
    if (this.size() === 0) {
      return null;
    }
    return this.#list.tail.val;
  }

  print() {
    this.#list.printList();
  }
}

const queue = new Queue();

queue.add(1);
queue.add(2);
queue.add(3);

console.log("Before remove");
queue.print();

console.log("\nQueue length");
console.log(queue.size());

console.log("\nTop element in queue");
console.log(queue.head());

console.log("\nLast element in queue");
console.log(queue.tail());

console.log("\nRemove top element in queue");
console.log(queue.take());

console.log("\nAfter remove");
queue.print();
