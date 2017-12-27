'use strict';

const BinarySearchTree = require('../lib/binary-search-tree');

describe('Binary Seach Tree', () => {

  let bst = new BinarySearchTree(10);
  bst.insert(5);
  bst.insert(11);
  bst.insert(14);
  bst.insert(4);

  test('Binary Search Tree insert test', () => {
    console.log(bst);
    expect(bst.left.value).toBe(5);
    expect(bst.right.value).toBe(11);
  });

  test('Binary Search Tree insert test', () => {
    expect(() => bst.insert(5)).toThrow();
  });

  test('Binary Search Tree should return a node if one has been found', () => {
    expect(bst.find(11).value).toBe(11);
  });

  test('Binary Search Tree should return bull if a node is not found', () => {
    expect(bst.find(20)).toBe(null);
  });

  test('Binary Search Tree should remove a node if found', () => {
    bst.remove(11);
    console.log(bst);
    expect(bst.right.value).toBe(14);
    expect(bst.left.value).toBe(5);
    expect(bst.left.left.value).toBe(4);
  });

  test('Binary Search Tree should remove a node if found', () => {
    bst.remove(10);
    expect(bst.value).toBe(14);
  });
});
