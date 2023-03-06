//FIFO -> First in first out
//What we need ?
// 1. size()
// 2. add(v)
// 3. take()
// 4. head()
// 5. tail()
// 6. print()

class Queue {
  #list;

  constructor() {
    this.#list = [];
  }

  size() {
    return this.#list.length;
  }

  add(v) {
    this.#list.push(v);
  }

  take() {
    if (this.size() === 0) return null;
    this.#list.shift();
    return true;
  }

  head() {
    if (this.size() === 0) return null;
    return this.#list[0];
  }

  tail() {
    if (this.size() === 0) return null;
    const lastElement = this.size() - 1;
    return this.#list[lastElement];
  }

  print() {
    if (this.size() === 0) return null;

    this.#list.map((element) => {
      console.log(element);
    });
  }
}

const queue = new Queue();

queue.add(1);
queue.add(2);
queue.add(3);

queue.print();

const length = queue.size();

const head = queue.head();

const tail = queue.tail();

console.log(`Size of the list : ${length}`);
console.log(`Top element is  : ${head}`);
console.log(`Last element is  : ${tail}`);

queue.take();

queue.print();
