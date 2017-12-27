'use strict';

const Queue = require('./queue');
const Stack = require('./stack');


const KAryTree = function(value) {
  this.value = value;
  this._children = [];
};


KAryTree.prototype.appendChild = function(tree) {
  if(!(tree instanceof KAryTree))
    throw new TypeError('must be a k-ary tree');
  this._children.push(tree);
};

KAryTree.prototype.breadthFirstSearch = function(value){
  let queue = new Queue();
  queue.enqueue(this);

  let current = null;

  while(queue.getLength() > 0){
    current = queue.dequeue();

    for(let child of current._children)
      queue.enqueue(child);
    if(value === current.value)
      return current;
  }
  return null;
};

KAryTree.prototype.breadthFirstToString = function(){
  let queue = new Queue();
  queue.enqueue(this);

  let current = null;
  let string = '';

  while(queue.getLength() > 0){
    current = queue.dequeue();
    string += current.value.toString() + `\n`;

    for(let child of current._children)
      queue.enqueue(child);
  }
  return string;
};

KAryTree.prototype.depthFirstToArray = function(){
  let stack = new Stack();
  stack.push(this);

  let current = null;
  let array = [];

  while(stack.getLength() > 0){
    current = stack.pop();
    array.push(current.value);

    for(let child of current._children)
      stack.push(child);
  }
  return array;
};

module.exports = KAryTree;
