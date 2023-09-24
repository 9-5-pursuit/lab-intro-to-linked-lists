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
    // get current node
    let currentNode = this.head;

    // make a new node
    let newNode = new Node(data);

    if (!currentNode) {
      // If there is no list, update the head immediately
      currentNode = newNode;
    } else {
      // Save the current list in "next"
      newNode.next = currentNode;
      // Update the head to the new node
      currentNode = newNode;
    }
  }
}

let previousNode = new Node(nums)
let numList = new LinkedList(previousNode)

for (let i = 0; i < nums.length; i++) {
  // create a new node for each month
  let currentNode = new Node(nums[i]);
  // setup the next property for each node
  previousNode.next = currentNode;
  // update the node we're working with
  previousNode = currentNode;
}

numList.printListData();

module.exports = {
  Node,
  LinkedList,
};
