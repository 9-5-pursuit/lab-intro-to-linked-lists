const { nums, words } = require("./data/data.js");

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0];

const words = [
  "the",
  "quick",
  "brown",
  "fox",
  "jumps",
  "over",
  "the",
  "lazy",
  "dog",
];

class Node {
  constructor(data, next = null){
    this.data = data;
    this.next = next;
  }
}

class LinkedList{
  constructor(){
    this.head = null;

  }
}

insert(data); {
  this.head = new Node(data, this.head);
}

size(); {
  let count = 0;
  let node = this.head;

  while(node){
    count++;
    node = node.next
  }
  return count;
}





module.exports = {
  Node,
  LinkedList,
};
