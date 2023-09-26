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
    let newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }
  size() {
    let temp = this.head;
    let count = 0;
    while (temp != null) {
      count++;
      temp = temp.next;
    }
    return count;
  }
  delete(data) {
    let main = this.head;
    let counter = 0;
    while (main.data !== data && main.next) {
      counter++;
      main = main.next;
    }
    let found = main;
    let current = this.head;
    for (let i = 0; i < counter; i++) {
      current = current.next;
    }
    current.next = found.next;
    this.head = current;
  }
  getFirst() {
    return this.head;
  }
  getLast() {
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }
  search(key) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.data === key) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
  }
  clear() {
    this.head = null;
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
  getKthToLast(kth) {
    let localArr = this.toArray();
    localArr.reverse();
    let result = localArr[kth];
    //result = JSON.parse(JSON.stringify(result));

    return { data: result };
  }
  isEmpty() {
    return !this.head;
  }
  toArray() {
    let current = this.head;
    let arr = [];
    while (current) {
      arr.push(current.data);
      current = current.next;
    }
    return arr;
  }

  containsDuplicates() {
    let toggle = false;
    let current = this.head;
    while (current.next !== null) {
      let nextNode = current.next;
      while (nextNode !== null) {
        if (current.data === nextNode.data) {
          toggle = true;
          break;
        }
        nextNode = nextNode.next;
      }
      current = current.next;
    }
    return toggle;
  }
}

module.exports = {
  Node,
  LinkedList,
};
