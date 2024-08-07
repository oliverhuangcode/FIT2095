class Queue {
  constructor() {
      this.q = [];
  };
// get the current number of elements in the queue
//Getter function
  get length() {
      return this.q.length
  };
//Get all the elements 
  get queue() {
      return this.q;
  };
// Boolean function: returns true if the queue is empty, false otherwise 
  isEmpty() {
      return 0 == this.q.length;
  };
//adds new element to the end of the quue
  enqueue(newItem) {
      this.q.push(newItem)
  };
//Boolean function: returns true if an item is found (first occurnace); false otherwise
  inQueue(item) {
      let i = 0;
      let isFound = false;
      while (i < this.q.length && !isFound) {
          if (this.q[i] === item) {
              isFound = true;
          } else
              i++;
      }
      return (isFound);
  };
// pop an item from the queue
  dequeue() {
      if (0 != this.q.length) {
          let c = this.q[0];
          this.q.splice(0, 1);
          return c
      }
  };

// Removes all the elements in the queue
  removeAll() {
    this.q = [];
  };

// Adds a set of items to the queue 
  addAll(items) {
    for (const i of items) {
      this.q.push(i);
    }
  };

// Pops (dequeues) N elements from the queue. Rejects the input if there are not enough elements to remove.
  dequeueN(n) {
    if (n > this.q.length) {
      console.log("N bigger than queue length");
      return;
    }
    return this.q.splice(0, n);
  };
// Prints the content of the queue with their indexes.
  printQueue() {
    this.q.forEach(x => console.log(`${this.q.indexOf(x) + 1  }-->${x}`));
  }
};




let queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
console.log(queue.length);
console.log(queue.queue);
queue.dequeue();
queue.enqueue(33);
console.log(queue.q);
console.log(queue.inQueue(33));
console.log(queue.inQueue(88));
queue.removeAll();
console.log(queue.queue);
queue.addAll([3,7,1,9]);
console.log(queue.queue);
console.log(queue.dequeueN(2));
console.log(queue.queue);
queue.printQueue();
