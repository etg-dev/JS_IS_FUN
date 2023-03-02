class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node("A");
const b = new Node("B");
const c = new Node("C");
const d = new Node("D");

a.next = b;
b.next = c;
c.next = d;

// A -> B -> C -> D -> NULL
// cur
//      cur
//           cur
//                cur

const printLinkedList = (head) => {
  let currentNode = head;
  while (currentNode) {
    console.log(currentNode.val);
    currentNode = currentNode.next;
  }
};

//recursive traversal
const recPrintLinkedList = (head) => {
  if (head === null) return;
  console.log(head.val);
  recPrintLinkedList(head.next);
};

recPrintLinkedList(a);

printLinkedList(a);

//traverse with array
console.log("\n******\n");
const linkedListValue = (head) => {
  const values = [];
  let cur = head;
  while (cur) {
    values.push(cur.val);
    cur = cur.next;
  }
  return values;
};

const recLinkedListValue = (head) => {
  const values = [];
  fillValues(head, values);
  return values;
};

const fillValues = (head, values) => {
  if (head === null) return;
  values.push(head.val);
  fillValues(head.next, values);
};

const values = linkedListValue(a);
console.log(values);

const recValues = recLinkedListValue(a);
console.log(recValues);

console.log("\n******\n");
