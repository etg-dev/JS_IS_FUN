// value    next    value    next    value   next    value   next
// a        =>      b        =>      c       =>      d       =>    null
// head             node             node            tail

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
  #head = null;
  #tail = null;

  constructor() {
    this.#head = null;
    this.#tail = null;
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
    if (index < 0 && !this.#head) {
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

  printList() {
    if (!this.#head) {
      return;
    }
    let curr = this.#head;
    while (curr) {
      console.log(curr.val);
      curr = curr.next;
    }
  }
}

const list = new LinkedList();

//CREATE
list.prepend(0);
list.prepend(-1);

list.append(1);
list.append(2);

list.addToIndex(4, 2.5);
//list.addToIndex(0, -2);

list.append(3);
list.append(4);

//-1 0 1 2 2.5 2 3 4

//READ ONE OR FIND

//READ ALL
list.printList();

//UPDATE

//DELETE ONE
