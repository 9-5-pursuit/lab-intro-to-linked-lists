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

  isEmpty() {
    if (this.head) return false;
    else return true;
  }

  insert(data) {
    let currentNode = this.head;
    let newNode = new Node(data);

    if (!currentNode) {
      this.head = newNode
    } else {
      newNode.next = currentNode;

      this.head = newNode;
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

  delete(value) {
    if (this.isEmpty()) return "list is empty";

    if (this.head.data === value) {
      this.head = this.head.next
      return "success"
    } else {
      let currentNode = this.head;
      let counter = 0;

      while (currentNode.next.data !== value && currentNode.next) {
        currentNode = currentNode.next;
      }

      if (currentNode.next) {
        let removedNode = currentNode.next
        currentNode.next = removedNode.next
        return value
      }

      return "unsuccessful"
    }
  }

  getFirst() {
    if (this.isEmpty()) return "list is empty";

    return this.head;
  }

  getLast() {
    if (this.isEmpty()) return "list is empty";

    let currentNode = this.head;

    while (currentNode.next) {
      currentNode = currentNode.next;
    }

    return currentNode;
  }

  search(key) {
    if (this.isEmpty()) return "list is empty";

    let currentNode = this.head;

    while (currentNode.next) {
      if (currentNode.data !== key) {
        currentNode = currentNode.next;
      } else {
        return currentNode;
      }
    }

    return null;
  }

  getKth(k) {
    if (this.isEmpty()) return "list is empty";
    
    if (k < 0) {
      return "invalid number";
    }

    let count = 0;
    let currentNode = this.head;

    while(currentNode) {
      if (k - 1 === count) {
        return currentNode;
      } else {
        count++;
        currentNode = currentNode.next;
      }
    }

    return null;
  }
t
  getKthToLast(k) {
    if (this.isEmpty()) return "list is empty";

    let total = this.size();

    let key = total - k;

    let count = 0;
    let currentNode = this.head

    while (currentNode) {
      if (key - 1 === count) {
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
      nodeArray.push(currentNode.data);

      currentNode = currentNode.next;
    }

    return nodeArray;
  }

  containsDuplicates() {
    let nodeArray = this.toArray();

    let currentNode = this.head;

    let containsDuplicates = false;

    let freqObj = {}

    for (const node of nodeArray) {
      if (freqObj[node]) {
        freqObj[node]++
        return !containsDuplicates
      } else {
        freqObj[node] = 1
      }
    }

    return containsDuplicates;
  }
}

let firstNode = new Node(1)

let newList = new LinkedList(firstNode)

newList.insert(2)
newList.insert(3)

newList.delete(2)

console.log(newList.toArray())

console.log(newList.containsDuplicates())

module.exports = {
  Node,
  LinkedList,
};
