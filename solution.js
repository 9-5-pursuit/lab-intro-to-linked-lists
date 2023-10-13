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
    let count = 0;
    let currentNode = this.head;

    while (currentNode) {
      count++;
      currentNode = currentNode.next;
    }
    return count;
  }

  delete(key) {
    let currentNode = this.head;
    let previousNode = null;

    if (this.head) {
      this.head = currentNode.next;
      return;
    }

    while (currentNode.data && currentNode.next !== key) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }

    if (currentNode) {
      previousNode.next = currentNode.next;
    }
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
    return null;
  }

  getKth(k) {
    let currentNode = this.head;
    let i = 0;
    while (currentNode) {
      if (i === k - 1) {
        return currentNode;
      }
      i++;
      currentNode = currentNode.next;
    }
    return null;
  }

  getKthToLast(k) {
    // a condition if the list is empty
    if (this.isEmpty()) {
      return "The list is empty";
    }
    // get the size of the list
    let length = this.size();

    // a variable for getting the last kth of element
    let keyItem = length - k;

    let currentNode = this.head;
    let i = 0;

    while (currentNode) {
      // a condition if the keyItem is equal to i
      // keyItem is length - k and - 1 is the index when i is 0
      if (keyItem - 1 === i) {
        return currentNode;
      }
      i++;
      currentNode = currentNode.next;
    }
  }

  isEmpty() {
    if (!this.head) {
      return true;
    } else {
      return false;
    }
  }

  clear() {
    this.head = null;
  }

  toArray() {
    let currentNode = this.head;
    let newArr = [];
    while (currentNode) {
      newArr.push(currentNode.data);
      currentNode = currentNode.next;
    }
    return newArr;
  }

  containsDuplicates() {
    const arr = [];

    let currentNode = this.head;

    while (currentNode) {
      // checks if the arr has currentNode.data
      if (arr.includes(currentNode.data)) {
        return true;
      }
      
      // if it does not have currentNode.data push it to the arr
      arr.push(currentNode.data);

      currentNode = currentNode.next;
    }

    return false;
  }
}

module.exports = {
  Node,
  LinkedList,
};
