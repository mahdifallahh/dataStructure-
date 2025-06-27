const LinkedList = require('../src/linkedList');

describe('LinkedList', () => {
  let list;
  beforeEach(() => {
    list = new LinkedList();
  });

  test('insert and printList', () => {
    list.insert(1);
    list.insert(2);
    list.insert(3);
    expect(list.printList()).toBe('1 2 3');
  });

  test('delete removes correct element', () => {
    list.insert(1);
    list.insert(2);
    list.insert(3);
    expect(list.delete(2)).toBe(true);
    expect(list.printList()).toBe('1 3');
    expect(list.delete(1)).toBe(true);
    expect(list.printList()).toBe('3');
    expect(list.delete(3)).toBe(true);
    expect(list.printList()).toBe('');
    expect(list.delete(4)).toBe(false);
  });
});
