// Stack implementation with high performance and clean code
class Stack {
  constructor() {
    this._storage = Object.create(null);
    this._top = 0;
  }

  push(element) {
    this._storage[this._top++] = element;
  }

  pop() {
    if (this.isEmpty()) return 'Underflow';
    const item = this._storage[--this._top];
    delete this._storage[this._top];
    return item;
  }

  peek() {
    if (this.isEmpty()) return undefined;
    return this._storage[this._top - 1];
  }

  isEmpty() {
    return this._top === 0;
  }

  printStack() {
    let result = [];
    for (let i = 0; i < this._top; i++) {
      result.push(this._storage[i]);
    }
    return result.join(' ');
  }

  size() {
    return this._top;
  }

  reverse() {
    let left = 0, right = this._top - 1;
    while (left < right) {
      const temp = this._storage[left];
      this._storage[left] = this._storage[right];
      this._storage[right] = temp;
      left++;
      right--;
    }
  }
}

module.exports = Stack;
