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

  getFirst() {
    return this.head;
  }

  getLast(args) {
    let arr = [];
    let head = this.head;
    while (head) {
      arr.push(head.data);
      if (!head.next) break;
      head = head.next;
    }
    return args ? arr : head;
  }

  search(key) {
    let head = this.head;
    while (head) {
      if ((head.data = key)) return head;
      head = head.next;
    }
  }
  getKth(idx) {
    let c = 0;
    let head = this.head;
    while (head && ++c) {
      if (c == idx) return head;
      head = head.next;
    }
    return null;
  }

  getKthToLast(idx) {
    let s = this.size();
    let end = s - idx;
    return this.getKth(end);
  }

  isEmpty() {
    return this.head == null;
  }

  clear() {
    this.head = null;
  }

  toArray() {
    return this.getLast(true);
  }

  containsDuplicates() {
    return this.getLast(1).length !== new Set(this.getLast(1)).size
  }
}

module.exports = {
  Node,
  LinkedList,
};
