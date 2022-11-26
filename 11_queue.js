//Create a queue that will implement operations to add elements to the end of the queue,
//remove the first element, and calculate the size of the queue with the complexity of the O(1) algorithm.

// class Queue {
//   #storage = {};
//   #last = 0;
//   #first = 0;

//   enqueue(item) {
//     this.#storage[this.#last] = item;
//     this.#last++;
//   }

//   dequeue() {
//     if (this.size === 0) {
//       return;
//     }
//     const value = this.#storage[this.#first];
//     delete this.#storage[this.#first];
//     this.#first++;

//     return value;
//   }

//   get size() {
//     return this.#last - this.#first;
//   }
// }

// const table = new Queue();

// table.enqueue(1);
// table.enqueue(2);
// table.enqueue(42);

// table.dequeue();

// console.log(table.size);

// ---------------------------------------------------------------- //

class LinkedList {
  #length = 0;
  #head;
  #tail;

  addToTail(value) {
    const node = {
      value,
      next: null,
    };

    if (this.#length === 0) {
      this.#head = node;
      this.#tail = node;
    } else {
      this.#tail = node;
    }

    this.#length++;
  }

  removeFromHead() {
    if (this.#length === 0) {
      return;
    }

    const value = this.#head.value;
    this.#head = this.#head.next;
    this.#length--;
    return value;
  }

  size() {
    return this.#length;
  }
}

class Queue extends LinkedList {
  constructor() {
    super();

    this.enqueue = this.addToTail;
    this.dequeue = this.removeFromHead;
  }

  get size() {
    return super.size();
  }
}


const queue = new Queue()

queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)

queue.dequeue()

console.log(queue.size)