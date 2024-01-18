const { nums, words } = require("./data/data.js");

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null) {
      this.head = head
  }

  insert(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
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

  search(value) {
    let currentNode = this.head;
    while (currentNode !== null && currentNode.data !== value) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

 
 

}


const firstNode = new Node(1);
const secondNode = new Node(2);

const wordList = new LinkedList(firstNode);
const numList = new LinkedList(secondNode);







module.exports = {
  Node,
  LinkedList,
};
