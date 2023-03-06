//Refactor linkedList V2
//DRY

class Node {
  //Make it private
  #val;
  #next;
  constructor(val) {
    // The value of the node
    this.#val = val;
    // The reference to the next node in the list
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
    // The head of the linked list
    this.#head = null;
    // The tail of the linked list
    this.#tail = null;
    // The number of nodes in the linked list
    this.length = 0;
  }

  // CREATE: Add a node to the tail of the linked list
  append(val) {
    // Create a new node with the given value
    const newNode = new Node(val);
    // If the linked list is empty, set the new node as both the head and tail
    if (!this.#head) {
      this.#head = newNode;
    }
    if (this.#tail) {
      // Otherwise, set the next node of the current tail to be the new node
      this.#tail.next = newNode;
    }
    // Set the new node as the current tail
    this.#tail = newNode;
    // Increment the length of the linked list
    this.length++;
  }

  prepend(val) {
    const newNode = new Node(val);
    newNode.next = this.#head;

    this.#head = newNode;

    if (!this.#tail) {
      this.#tail = newNode;
    }
    // Increment the length of the linked list
    this.length++;
  }

  // READ: Get the value of a node at a specific index
  findElem(index) {
    // Check if the index is out of bounds
    if (index < 0 || index >= this.length) return null;
    // Start at the head of the linked list
    let current = this.#head;
    // Loop through the linked list until we reach the node at the specified index
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    // Return the value of the node at the specified index
    return current.val;
  }

  // UPDATE: Update the value of a node at a specific index

  updateElement(index, val) {
    // Check if the index is out of bounds
    if (index < 0 || index >= this.length) return false;
    // Start at the head of the linked list
    let current = this.#head;
    // Loop through the linked list until we reach the node at the specified index
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    // Update the value of the node at the specified index
    current.val = val;
    // Return true to indicate that the update was successful
    return true;
  }

  // DELETE: Remove a node at a specific index
  deleteElement(index) {
    // Check if the index is out of bounds
    if (index < 0 || index >= this.length) return false;
    // If the node to be removed is the head of the linked list, set the head to be the next node
    if (index === 0) {
      this.#head = this.#head.next;
      // Decrement the length of the linked list
      this.length--;
      // Return true to indicate that the node was successfully removed
      return true;
    }
    // Start at the head of the linked list
    let current = this.#head;
    // Loop through the linked list until we reach the node before the one we want to remove
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }
    // Set the next node of the current node to be the node after the one we want to remove
    current.next = current.next.next;
    // Decrement the length of the linked list
    this.length--;
    // Return true to indicate that the node was successfully removed
    return true;
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

const list = new LinkedList();
list.append(10);
list.append(20);
list.append(30);
list.prepend(0);

console.log(list.findElem(1));
list.updateElement(1, 25);
console.log(list.findElem(1));
list.deleteElement(1);
console.log(list.findElem(1));

console.log("\nFinal list\n");
list.printList();
