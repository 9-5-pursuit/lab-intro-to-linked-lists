const { nums, words } = require("./data/data.js");

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(data) {
    let newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  size() {
    let count = 0;
    let current = this.head;
    while (current) {
      count++;
      current = current.next;
    }
    return count;
  }

  delete(key) {
    if (this.head && this.head.data === key) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    let previous = null;

    while (current) {
      if (current.data === key) {
        previous.next = current.next;
        return;
      }
      previous = current;
      current = current.next;
    }
  }

  getFirst() {
    if (this.head) {
      return this.head;
    } else {
      return null;
    }
  }

  getLast() {
    let current = this.head;
    if (!current) {
      return null;
    }
    while (current.next) {
      current = current.next;
    }
    return current;
  }

  search(key) {
    let current = this.head;
    while (current) {
      if (current.data === key) {
        return current;
      }
      current = current.next;
    }
    return null;
  }

  getKth(index) {
    let currentNode = this.head;
    let count = 0;
    while (currentNode !== null) {
      if (count == index) return this.head;

      count++;
      currentNode = currentNode.next;
    }
    return null;
  }

  getKthToLast(k) {
    if (k < 0) {
      return null;
    }

    let fast = this.head;
    for (let i = 0; i < k; i++) {
      if (fast) {
        fast = fast.next;
      } else {
        return null;
      }
    }

    let slow = this.head;
    while (fast && fast.next) {
      fast = fast.next;
      slow = slow.next;
    }

    return slow;
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
    const set = new Set();
    let current = this.head;
    while (current) {
      if (set.has(current.data)) {
        return true;
      }
      set.add(current.data);
      current = current.next;
    }
    return false;
  }
}

module.exports = {
  Node,
  LinkedList,
};
