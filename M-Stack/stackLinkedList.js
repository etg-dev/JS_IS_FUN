//LIFO -> Last in first out
//What we need ?
// 1. size()
// 2. push(v)
// 3. pop()
// 4. top()
// 5. print()

//Doubly Ended QueueV1

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

class Stack {
    #list;

    constructor() {
        this.#list = new LinkedList();
    }

    size() {
        return this.#list.length;
    }

    push(v) {
        this.#list.prepend(v);
    }

    pop() {
        if (this.size() === 0) return null;

        return this.#list.deleteElement(0);
    }

    top() {
        if (this.size() === 0) return null;

        return this.#list.findElem(0);
    }

    print() {
        if (this.size() === 0) return null;

        this.#list.printList();
    }
}

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);

const top = stack.top();

stack.pop();

stack.print();
