const { nums, words } = require("./data/data.js");

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}



// console.log(firstNode);

class LinkedList {
  constructor(head = null) {
      this.head = head
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

 
  search(value) {
      
      let currentNode = this.head;
      while (currentNode !== null && currentNode.data !== value) {
          currentNode = currentNode.next
      }
      return currentNode
  }

  clear() {
      this.head = null;
  }
  
  getFirst() {
      return this.head;
  }
  
  getLast () {
      let lastNode = this.head;
      if(lastNode) {
        while (lastNode.next) {
          lastNode = lastNode.next;
        }
        return lastNode
      }
    }

  
  insert() {}
  
  delete(data) {
    if (!this.head) {
        return;
    }

    if (this.head.data === data) {
        this.head = this.head.next;
        return;
    }

    let currentNode = this.head;
    while (currentNode.next && currentNode.next.data !== data) {
        currentNode = currentNode.next;
    }

    if (currentNode.next) {
        currentNode.next = currentNode.next.next;
    }
}

}


const firstNode = new Node(1);
const secondNode = new Node(2);

const wordList = new LinkedList(firstNode);
const numList = new LinkedList(secondNode);







module.exports = {
  Node,
  LinkedList,
};
