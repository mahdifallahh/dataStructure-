// Queue implementation with high performance using head/tail pointers
class Queue {
  constructor() {
    this._storage = Object.create(null);
    this._head = 0;
    this._tail = 0;
  }

  enqueue(element) {
    this._storage[this._tail++] = element;
  }

  dequeue() {
    if (this.isEmpty()) return 'Underflow';
    const item = this._storage[this._head];
    delete this._storage[this._head++];
    return item;
  }

  front() {
    if (this.isEmpty()) return 'No elements in Queue';
    return this._storage[this._head];
  }

  isEmpty() {
    return this._tail === this._head;
  }

  printQueue() {
    let result = [];
    for (let i = this._head; i < this._tail; i++) {
      result.push(this._storage[i]);
    }
    return result.join(' ');
  }
}

module.exports = Queue;
