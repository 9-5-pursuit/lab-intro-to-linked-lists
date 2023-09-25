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

  isEmpty() {
    if (!this.head) return true
    else return false
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
    if (this.isEmpty()) return "list is empty"

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
    if (this.isEmpty()) return "list is empty"

    return this.head.data;
  }

  getLast() {
    if (this.isEmpty()) return "list is empty"

    let currentNode = this.head;

    while (currentNode) {
      currentNode = currentNode.next;
    }

    return currentNode;
  }

  search(key) {
    if (this.isEmpty()) return "list is empty"

    let currentNode = this.head;

    while (currentNode.next) {
      if (currentNode !== data) {
        let currentNode = currentNode.next
      } else {
        return currentNode
      }
    }

    return null;
  }

  getKth(k) {
    if (this.isEmpty()) return "list is empty"
    
    if (k < 0) {
      return "invalid number";
    }

    let count = 0;
    let currentNode = this.head;

    while(currentNode) {
      if (k === count) {
        return currentNode;
      } else {
        count++;
        currentNode = currentNode.next;
      }
    }

    return null;
  }

  getKthToLast(k) {
    if (this.isEmpty()) return "list is empty"

    let total = this.size();

    let key = total - k;

    let count = 0;
    let currentNode = this.head()

    while (currentNode) {
      if (key === count) {
        return currentNode;
      } else {
        count++;
        currentNode = currentNode.next;
      }
    }
  }

  clear() {
    this.head = null;
  }

  toArray() {
    if (this.isEmpty()) return "list is empty";

    let currentNode = this.head;

    let nodeArray = [];

    while (currentNode) {
      nodeArray.push(node);

      currentNode = currentNode.next;
    }

    return nodeArray;
  }
}

module.exports = {
  Node,
  LinkedList,
};
