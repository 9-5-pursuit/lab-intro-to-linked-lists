const { nums, words } = require("./data/data.js");

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
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

  delete(value) {
    let current = this.head;
    let previous = null;

    while (current !== null && current.data !== value) {
      previous = current;
      current = current.next;
    }

    if (current !== null) {
      if (previous === null) {
        this.head = current.next;
      } else {
        previous.next = current.next;
      }
    }
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let currentNode = this.head;

    while (currentNode && currentNode.next) {
      currentNode = currentNode.next;
    }

    return currentNode;
  }

  search(value) {
    let currentNode = this.head;

    while (currentNode !== null && currentNode.data !== value) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  getKth(k) {
    let count = 0;
    let node = this.head;

    while (node) {
      count++;
      if (count == k) {
        return node;
      }
      node = node.next;
    }
  }

  getKthToLast() {
    let currentNode = this.head;
    let previousNode = null;
    while (currentNode && currentNode.next) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }

    return previousNode;
  }

  isEmpty() {
    return this.head === null;
  }

  clear() {
    this.head = null;
  }

  toArray() {
    const array = [];
    let current = this.head;

    while (current) {
      array.push(current.data);
      current = current.next;
    }

    return array;
  }

  containsDuplicates() {
    let valsSeen = {};
    let node = this.head;

    while (node) {
      valsSeen[node.data] = (valsSeen[node.data] || 0) + 1;

      if (valsSeen[node.data] > 1) {
        return true;
      }
      node = node.next;
    }

    return false;
  }
}

module.exports = {
  Node,
  LinkedList,
};
