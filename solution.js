const { nums, words } = require("./data/data.js");

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(data = null) {
    this.head = new Node (data);
  }

  size() {
    let count = -1;
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

  clear() {
    this.head = null;
  }

  getLast() {
    let currentNode = this.head;

    while (currentNode && currentNode.next && currentNode.next.data !== null) {
      currentNode = currentNode.next;
    }
  
    return currentNode;
  }

  getFirst() {
    return this.head;
  }

  insert(data) {
    const newNode = new Node (data)

    if (!this.head) {
      this.head = newNode
    }

    newNode.next = this.head
    this.head = newNode
  }

  delete(data) {
    if (this.head.data === data) {
      this.head = this.head.next;
      return;
    }

    let currentNode = this.head.next;
    let previousNode = this.head;

    while (currentNode) {
      if (currentNode.data === data) {
        previousNode.next = currentNode.next;
        return;
      }

      previousNode = previousNode.next;
      currentNode = currentNode.next;
    }

  }

  isEmpty() {
    if (this.head.data !== null) {
      return false
    }
    return true
  }

  toArray() {
    const dataArray = []
    let currentNode = this.head

    while (currentNode.data !== null && currentNode) {
      dataArray.push(currentNode.data)
      currentNode = currentNode.next
    }

    return dataArray;
  }

  containsDuplicates() {
    const set = new Set ()
    let currentNode = this.head
    
    while (currentNode !== null) {
      if (set.has(currentNode.data)) {
        return true
      }
      set.add(currentNode.data)
      currentNode = currentNode.next
    }
    return false;
  }

  getKth(data) {
    let count = 1;
    let node = this.head;

    while (node) {
      if (count === data)
      return node
      count++;
      node = node.next;
  }

  }

  getKthToLast(data) {
    let count = 0;
    let node = this.head;
    data = this.size() - data - 1

    while (node) {
      if (count === data)
      return node
      count++;
      node = node.next;
  }

  }
}



module.exports = {
  Node,
  LinkedList,
};
