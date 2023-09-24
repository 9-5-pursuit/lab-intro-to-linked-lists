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
}

// let previousNode = null;
// for (let i = 0; i < nums.length; i++) {
//   // create a new node for each number
//   let currentNode = new Node(nums[i]);
//   // setup the next property for each node
//   currentNode.next = previousNode;
//   // update the node we're working with
//   previousNode = currentNode; // Update previousNode to the current node
// }
// let numList = new LinkedList(previousNode);

// console.log(numList)
// numList.printListData()

module.exports = {
  Node,
  LinkedList,
};
