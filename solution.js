const { nums, words } = require("./data/data.js");

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(head) {
    this.head = head;
  }

  insert(data) {

    let currentNode = this.head;
    let newNode = new Node(data);

    if (!currentNode) {
      currentNode = newNode;
    } else {
      newNode.next = currentNode;

      currentNode = newNode;
    }
  }

  size() {
    let count = 0;
    let currentNode = this.head;

    while(currentNode) {
      count++;
      currentNode = currentNode.next;
    }

    return count;
  }

  delete(key) {
    if (!this.head) return console.log("List is empty")

    let currentNode = this.head;
    let counter = 0;

    while (currentNode.data !== key && currentNode.next) {
      counter ++;
      currentNode = currentNode.next;
    }

    let foundNode = currentNode;

    currentNode = this.head;

    for (let i = 1; i < counter; i++) {
      currentNode = currentNode.next;
    }

    currentNode.next = foundNode.next;
  }

  getFirst() {
    if (!this.head) return console.log("List is empty");

    return this.head.data;
  }

  
}

module.exports = {
  Node,
  LinkedList,
};
