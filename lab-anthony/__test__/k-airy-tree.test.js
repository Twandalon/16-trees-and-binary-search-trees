'use strict';

const KAryTree = require('../lib/k-airy-tree.js');

describe('k-airy-tree testing', () => {

  let one = new KAryTree(1);
  let two = new KAryTree(2);
  let three = new KAryTree(3);
  let four = new KAryTree(4);
  let five = new KAryTree(5);
  let six = new KAryTree(6);
  let seven = new KAryTree(7);
  let eight = new KAryTree(8);

  one.appendChild(two);
  one.appendChild(three);
  one.appendChild(four);

  three.appendChild(five);
  three.appendChild(six);
  three.appendChild(seven);

  six.appendChild(eight);

  test('breadthFirstSearch should return a value if present in a k-airy-tree', () =>{
    expect(one.breadthFirstSearch(4)).toEqual(four);
  });

  test('breadthFirstSearch should return null if not present in a k-airy-tree', () =>{
    expect(one.breadthFirstSearch(20)).toEqual(null);
  });

  test('breadthFirstToString should return a string if a valid k-airy-tree is passed in as an argument', () =>{
    expect(one.breadthFirstToString()).toEqual(`1\n2\n3\n4\n5\n6\n7\n8\n`);
  });

  test('breadthFirstToString should return a string if a valid k-airy-tree is passed in as an argument', () =>{
    expect(three.breadthFirstToString()).toEqual(`3\n5\n6\n7\n8\n`);
  });

  test('depthFirstToString should return an array if a valid k-airy-tree is passed in as an argument', () =>{
    expect(one.depthFirstToArray()).toEqual([1, 4, 3, 7, 6, 8, 5, 2]);
  });

  test('depthFirstToString should return an array if a valid k-airy-tree is passed in as an argument', () =>{
    expect(three.depthFirstToArray()).toEqual([3, 7, 6, 8, 5]);
  });
});
