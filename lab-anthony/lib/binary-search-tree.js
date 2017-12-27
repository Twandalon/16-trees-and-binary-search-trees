'use strict';

class BinarySearchTree{
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value){
    if(typeof value !== 'number')
      throw new TypeError('Binary Search Tree - value should be a number');

    if(this.value === value)
      throw new Error('Binary Search Tree - value is already present');

    if(value < this.value){
      if(!this.left){
        this.left = new BinarySearchTree(value);
        return;
      }
      this.left.insert(value);
      return;
    }
    if(!this.right){
      this.right = new BinarySearchTree(value);
      return;
    }
    this.right.insert(value);
    return;
  }

  find(value){
    if(typeof value !== 'number')
      throw new TypeError('Binary Search Tree - value should be a number');

    if(value === this.value)
      return this;

    if(value > this.value){
      if(this.right !== null)
        return this.right.find(value);
      else
        return null;
    }
    if(this.left !== null)
      return this.left.find(value);
    else
      return null;
  }

  findMin(){
    if(this.left){
      return this.left.findMin();
    } else {
      return this.value;
    }
  }

  remove(value){
    if(typeof value !== 'number')
      throw new TypeError('Binary Search Tree - value should be a number');

    if(!value)
      return null;

    if(value < this.value) {
      if(this.left)
        this.left = this.left.remove(value);
    } else if(value > this.value) {
      if(this.right)
        this.right = this.right.remove(value);
    } else {
      if(this.left === null && this.right === null)
        return null;
      if(this.left === null) {
        return this.right;
      }
      else if(this.right === null) {
        return this.left;
      }
      let rightMinValue = this.right.findMin();
      this.value = rightMinValue;
      this.right = this.right.remove(rightMinValue);
      return this;
    }

  }
}

module.exports = BinarySearchTree;
