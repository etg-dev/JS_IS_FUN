//LIFO -> Last in first out
//What we need ?
// 1. size()
// 2. push(v)
// 3. pop()
// 4. top()
// 5. print()

class StackV1 {
    #list;

    constructor() {
        this.#list = []
    }

    size() {
        // let i = 0;
        // while (true) {
        //     if (this.#list[i]) {
        //         i++
        //     } else {
        //         break;
        //     }
        // }
        // return i;
        return this.#list.length;
    }

    push(v) {
        this.#list.push(v);
    }

    pop() {
        if (this.size() === 0) return null;

        return this.#list.pop();
    }

    top() {
        if (this.size() === 0) return null;

        const lastIndex = this.size() - 1
        return this.#list[lastIndex];
    }

    print() {
        this.#list.map(element => {
            console.log(element);
        })
    }


}

const stack = new StackV1();

stack.push(1);
stack.push(2);
stack.push(3);

const top = stack.top();

stack.pop();

stack.print();
