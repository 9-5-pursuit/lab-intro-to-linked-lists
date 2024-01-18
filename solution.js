const { nums, words } = require("./data/data.js");

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

const firstNode = new Node(1);
const secondNode = new Node(2);
firstNode.next = secondNode;

// console.log(firstNode);

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }
  size() {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }
}
const wordList = new LinkedList(firstNode);







module.exports = {
  Node,
  LinkedList,
};
