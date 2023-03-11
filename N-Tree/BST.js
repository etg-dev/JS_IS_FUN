class Node {
  #value;
  #left;
  #right;

  constructor(value) {
    this.#value = value;
    this.#left = null;
    this.#right = null;
  }

  get value() {
    return this.#value;
  }

  set value(value) {
    this.#value = value;
  }

  get left() {
    return this.#left;
  }

  set left(left) {
    this.#left = left;
  }

  get right() {
    return this.#right;
  }

  set right(right) {
    this.#right = right;
  }
}

class BST {
  #root;

  constructor() {
    this.#root = null;
  }

  insert(value) {
    const insertion = (value) => {
      const newNode = new Node(value);
      if (!this.#root) {
        this.#root = newNode;
        return;
      }
      let curr = this.#root;
      while (true) {
        if (value < curr.value) {
          if (!curr.left) {
            curr.left = newNode;
            return;
          }
          curr = curr.left;
        } else if (value > curr.value) {
          if (!curr.right) {
            curr.right = newNode;
            return;
          }
          curr = curr.right;
        } else {
          console.log("STH WENT WRONG");
        }
      }
    };

    if (Array.isArray(value)) {
      value.map((elem) => {
        insertion(elem);
      });
    } else {
      insertion(value);
    }
  }

  log() {
    console.log(this.#root.value);
    console.log(this.#root.left.value);
    console.log(this.#root.right.value);
    console.log(this.#root.left.left.value);
    console.log(this.#root.left.right.value);
  }
}

// we wanna create this binary search tree

//          60
//         /   \
//        25   70
//       / \
//     20   50

const tree = new BST();

tree.insert([60, 25, 70, 20, 50]);

// tree.insert(60)
// tree.insert(25)
// tree.insert(70)
// tree.insert(20)
// tree.insert(50)

tree.log();
