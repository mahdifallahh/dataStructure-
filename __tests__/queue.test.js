const Queue = require('../src/queue');

describe('Queue', () => {
  let queue;
  beforeEach(() => {
    queue = new Queue();
  });

  test('enqueue and printQueue', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.printQueue()).toBe('1 2');
  });

  test('dequeue returns front element', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.dequeue()).toBe(1);
    expect(queue.dequeue()).toBe(2);
    expect(queue.dequeue()).toBe('Underflow');
  });

  test('front returns front element', () => {
    expect(queue.front()).toBe('No elements in Queue');
    queue.enqueue(5);
    expect(queue.front()).toBe(5);
    queue.enqueue(10);
    expect(queue.front()).toBe(5);
  });

  test('isEmpty', () => {
    expect(queue.isEmpty()).toBe(true);
    queue.enqueue(1);
    expect(queue.isEmpty()).toBe(false);
  });
});
