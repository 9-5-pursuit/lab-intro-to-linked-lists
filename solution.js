const { nums, words } = require("./data/data.js");

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
const fisrtNode = new Node(1);

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }
  insert(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  isEmpty() {
    return this.head === null;
  }

  containsDuplicates() {
    const seen = new Set();
    let currentNode = this.head;

    while (currentNode) {
      if (seen.has(currentNode.data)) {
        return true;
      }
      seen.add(currentNode.data);
      currentNode = currentNode.next;
    }

    return false;
  }

  getKth(k) {
    if (k < 0 || k >= this.size()) {
      return null;
    }

    let currentNode = this.head;
    for (let i = 0; i < k - 1; i++) {
      currentNode = currentNode.next;
    }

    return currentNode;
  }

  getKthToLast(k) {
    if (k < 0) {
      return null;
    }

    let fastPointer = this.head;
    let slowPointer = this.head;

    for (let i = 0; i < k; i++) {
      if (fastPointer === null) {
        return null;
      }
      fastPointer = fastPointer.next;
    }

    while (fastPointer.next !== null) {
      fastPointer = fastPointer.next;
      slowPointer = slowPointer.next;
    }

    return slowPointer;
  }

  toArray() {
    const result = [];
    let currentNode = this.head;

    while (currentNode) {
      result.push(currentNode.data);
      currentNode = currentNode.next;
    }

    return result;
  }

  search(value) {
    let currentNode = this.head;

    while (currentNode !== null && currentNode.data !== value) {
      currentNode = currentNode.next;
    }
    return currentNode;
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
  delete(value) {
    if (!this.head) return;

    if (this.head.data === value) {
      this.head = this.head.next;
      return;
    }

    let currentNode = this.head;

    while (currentNode.next && currentNode.next.data !== value) {
      currentNode = currentNode.next;
    }

    if (currentNode.next) {
      currentNode.next = currentNode.next.next;
    }
  }
  clear() {
    this.head = null;
  }

  getLast() {
    let currentNode = this.head;

    while (currentNode && currentNode.next) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  getFirst() {
    return this.head;
  }
}

module.exports = {
  Node,
  LinkedList,
};
