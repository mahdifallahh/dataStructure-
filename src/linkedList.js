// Linked List implementation with high performance and clean code
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  insert(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  delete(data) {
    if (!this.head) return false;
    if (this.head.data === data) {
      this.head = this.head.next;
      if (!this.head) this.tail = null;
      this.length--;
      return true;
    }
    let current = this.head;
    while (current.next && current.next.data !== data) {
      current = current.next;
    }
    if (current.next) {
      if (current.next === this.tail) this.tail = current;
      current.next = current.next.next;
      this.length--;
      return true;
    }
    return false;
  }

  printList() {
    let result = [];
    let current = this.head;
    while (current) {
      result.push(current.data);
      current = current.next;
    }
    return result.join(' ');
  }
}

module.exports = LinkedList;
