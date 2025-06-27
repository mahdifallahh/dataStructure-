const Stack = require("./stack");
const Queue = require("./queue");
const LinkedList = require("./linkedList");

// Example usage and simple tests
function testStack() {
  const stack = new Stack();
  stack.push(1);
  stack.push(2);
  stack.push(3);
  console.log("Stack:", stack.printStack()); // 1 2 3
  console.log("Pop:", stack.pop()); // 3
  console.log("Stack:", stack.printStack()); //1 2
  console.log("Peek:", stack.peek()); // 2
  console.log("IsEmpty:", stack.isEmpty()); // false
  stack.reverse();
  console.log("Reversed Stack:", stack.printStack()); // 2 1
  console.log("Size:", stack.size()); // 2
}

function testQueue() {
  const queue = new Queue();
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  console.log("Queue:", queue.printQueue()); // 1 2 3
  console.log("Dequeue:", queue.dequeue()); // 1
  console.log("Front:", queue.front()); // 2
  console.log("IsEmpty:", queue.isEmpty()); // false
}

function testLinkedList() {
  const list = new LinkedList();
  list.insert(1);
  list.insert(2);
  list.insert(3);
  console.log("LinkedList:", list.printList()); // 1 2 3
  list.delete(2);
  console.log("After delete 2:", list.printList()); // 1 3
  list.delete(1);
  console.log("After delete 1:", list.printList()); // 3
  list.delete(3);
  console.log("After delete 3:", list.printList()); // (empty)
}

console.log("--- Stack Test ---");
testStack();
console.log("\n--- Queue Test ---");
testQueue();
console.log("\n--- LinkedList Test ---");
testLinkedList();
