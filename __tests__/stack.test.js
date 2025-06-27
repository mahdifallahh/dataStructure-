const Stack = require('../src/stack');

describe('Stack', () => {
  let stack;
  beforeEach(() => {
    stack = new Stack();
  });

  test('push and printStack', () => {
    stack.push(1);
    stack.push(2);
    expect(stack.printStack()).toBe('1 2');
  });

  test('pop returns last element', () => {
    stack.push(1);
    stack.push(2);
    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(1);
    expect(stack.pop()).toBe('Underflow');
  });

  test('peek returns top element', () => {
    stack.push(5);
    expect(stack.peek()).toBe(5);
    stack.push(10);
    expect(stack.peek()).toBe(10);
  });

  test('isEmpty', () => {
    expect(stack.isEmpty()).toBe(true);
    stack.push(1);
    expect(stack.isEmpty()).toBe(false);
  });

  test('size', () => {
    expect(stack.size()).toBe(0);
    stack.push(1);
    stack.push(2);
    expect(stack.size()).toBe(2);
  });

  test('reverse', () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.reverse();
    expect(stack.printStack()).toBe('3 2 1');
  });
});
