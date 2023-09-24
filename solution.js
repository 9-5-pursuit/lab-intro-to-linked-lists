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
    this.tail = null;
  }

  printListData() {
    let currentNode = this.head;

    while (currentNode) {
      // log the data
      console.log(currentNode);
      // setup the next node
      currentNode = currentNode.next;
    }
  }

  insert(data) {
    // make a new node
    let newNode = new Node(data);

    if (!this.head) {
      // If there is no list, update both head and tail immediately
      this.head = newNode;
      this.tail = newNode;
    } else {
      // Save the current head in "next" of the new node
      newNode.next = this.head;
      // Update the head to the new node
      this.head = newNode;
    }
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    return this.tail;
  }

  clear() {
    this.head = null;
  }

  size() {
    let count = 0;
    let currentNode = this.head;

    while (currentNode) {
      count++;
      currentNode = currentNode.next;
    }

    return count;
  }

  isEmpty() {
    return !this.head ? true : false;
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

  getKth(index) {
    let currentNode = this.head;
    let currentIndex = 1;

    while (currentNode) {
      if (currentIndex === index) {
        return currentNode;
      }
      currentNode = currentNode.next;
      currentIndex++;
    }
    return null;
  }

  getKthToLast(k) {

    let firstPointer = this.head.next;
    let secondPointer = this.head;

    // Move the first pointer k nodes ahead
    for (let i = 0; i < k; i++) {
      if (firstPointer === null) {
        // Handle the case where k is greater than the length of the list
        return null;
      }
      firstPointer = firstPointer.next;
    }

    // Move both pointers until the first pointer reaches the end
    while (firstPointer !== null) {
      firstPointer = firstPointer.next;
      secondPointer = secondPointer.next;
    }

    // At this point, the second pointer is at the kth to last element
    return secondPointer;
  }
}

module.exports = {
  Node,
  LinkedList,
};
