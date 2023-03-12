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

  add(value) {
    const newNode = new Node(value);
    if (!this.#root) {
      this.#root = newNode;
    } else {
      const exploreTree = (rootNode) => {
        if (value < rootNode.value) {
          if (rootNode.left) {
            exploreTree(rootNode.left);
          }
          if (!rootNode.left) {
            rootNode.left = newNode;
          }
        } else if (value > rootNode.value) {
          if (rootNode.right) {
            exploreTree(rootNode.right);
          }
          if (!rootNode.right) {
            rootNode.right = newNode;
          }
        } else {
          console.log("STH WEND WRONG");
        }
      };
      exploreTree(this.#root);
    }
  }

  inOrder() {
    if (!this.#root) {
      console.log("tree is empty");
      return;
    } else {
      let txt = "";
      const exploreTree = (rootNode) => {
        if (rootNode.left) {
          exploreTree(rootNode.left);
        }
        txt += rootNode.value + " ";
        if (rootNode.right) {
          exploreTree(rootNode.right);
        }
      };
      exploreTree(this.#root);
      console.log("in order : { " + txt + " }");
    }
  }

  postOrder() {
    if (!this.#root) {
      console.log("tree is empty");
      return;
    } else {
      let txt = "";
      const exploreTree = (rootNode) => {
        if (rootNode.left) {
          exploreTree(rootNode.left);
        }

        if (rootNode.right) {
          exploreTree(rootNode.right);
        }

        txt += rootNode.value + " ";
      };
      exploreTree(this.#root);
      console.log("post order : { " + txt + " }");
    }
  }

  preOrder() {
    if (!this.#root) {
      console.log("tree is empty");
      return;
    } else {
      let txt = "";
      const exploreTree = (rootNode) => {
        txt += rootNode.value + " ";
        if (rootNode.left) {
          exploreTree(rootNode.left);
        }

        if (rootNode.right) {
          exploreTree(rootNode.right);
        }
      };
      exploreTree(this.#root);
      console.log("pre order : { " + txt + " }");
    }
  }

  max() {
    let curr = this.#root;
    if (!this.#root) {
      console.log("tree is empty");
      return;
    }
    while (true) {
      if (!curr.right) {
        console.log("max : " + curr.value);
        return;
      }
      curr = curr.right;
    }
  }

  min() {
    let curr = this.#root;
    if (!this.#root) {
      console.log("tree is empty");
      return;
    }
    while (true) {
      if (!curr.left) {
        console.log("min : " + curr.value);
        return;
      }
      curr = curr.left;
    }
  }

  findNode(value) {
    let curr = this.#root;
    let seq = "";
    if (!this.#root) {
      console.log("tree is empty");
      return;
    } else {
      while (true) {
        if (value < curr.value) {
          seq += curr.value + " ";
          curr = curr.left;
        } else if (value > curr.value) {
          seq += curr.value + " ";
          curr = curr.right;
        }
        if (!curr) {
          console.log("Not found !");
          return null;
        }
        if (curr.value === value) {
          seq += curr.value;
          console.log(
            `The value was found & the sequence is : { ${seq.trim()} }`
          );
          return curr;
        }
      }
    }
  }

  levelOrder() {
    console.log(
      "{ " + this.root.value,
      this.root.left.value,
      this.root.right.value,
      this.root.left.left.value,
      this.root.left.right.value,
      this.root.right.left.value,
      this.root.right.right.value + " }"
    );
  }
}

// we wanna create this binary search tree

//          60
//         /   \
//        25   70
//       / \
//     20   50

const tree = new BST();

//tree.insert([60, 25, 70, 20, 50]);

// tree.insert(60)
// tree.insert(25)
// tree.insert(70)
// tree.insert(20)
// tree.insert(50)

tree.add(60);
tree.add(25);
tree.add(70);
tree.add(20);
tree.add(50);

tree.max();
tree.min();

tree.preOrder();
tree.inOrder();
tree.postOrder();

tree.findNode(20);
