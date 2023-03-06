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
  #head;
  #tail;

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
const foundIndex = list.hasElement(3);
console.log("Found Index : " + foundIndex);

//READ ALL
console.log("Before delete & update");
list.printList();

//UPDATE
list.updateElement(2, 150);

//DELETE ONE
//list.deleteElement(0);
console.log("After delete & update");
list.printList();

//get length
const size = list.length;
console.log("length of list : " + size);

//READ ONE => find First & find Last
console.log("New Append ");
list.append(150);
list.printList();
const foundFirst = list.findFirst(150);
const foundLast = list.findLast(150);
console.log("First Element : " + foundFirst);
console.log("Second Element : " + foundLast);
