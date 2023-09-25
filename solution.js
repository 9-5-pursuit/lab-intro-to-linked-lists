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

  insert(data) {
    let temp = new Node(data);
    temp.next = this.head;
    this.head = temp;
  }

  size() {
    let count = 0;
    let head = this.head;
    while (head && ++count) head = head.next;
    return count;
  }

  delete(key) {
    let curr = this.head;
    if (curr && curr.data === key) {
      this.head = curr.next;
      return;
    }

    while (curr && curr.next) {
      if (curr.next.data === key) {
        curr.next = curr.next.next;
        return;
      }
      curr = curr.next;
    }
  }
}

module.exports = {
  Node,
  LinkedList,
};
