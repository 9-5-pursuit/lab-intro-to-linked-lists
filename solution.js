const { nums, words } = require("./data/data.js");

//class like componets are meant to be capitalized
class Node {
  //these are the properties of the class
  constructor(data, next) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  //these are called methods ----------------- work just like function

  //insert at the head of the list
  insert(data) {
    //get the head of the list
    let currentNode = this.head;

    //creat a new node
    let newNode = new Node(data);

    if (!currentNode) {
      //if there is no head(first node on the list) new node is now the head
      this.head = newNode;
    } else {
      //the new Node's(the node you want to insert) next section is now equal
      //to the head of the list you want to add to
      newNode.next = currentNode;

      //asign the node you inserted the value of the current first node (the head)
      this.head = newNode;
    }
  }

  // size
  size() {
    let count = 0;
    let currentNode = this.head;

    while (currentNode) {
      count++;
      currentNode = currentNode.next;
    }

    return count;
  }

  delete(data) {
    // Is the list empty?
    if (!this.head) return console.log("List is empty!");

    // get the data of the node you want to delete(left side of the box chart)
    // let nodeData = this.data;

    //look throught the array to find the node you are looking for
    // If the currentNode doesn't match the data and it has a next value,
    // increase the counter & move to the next node
    while (currentNode.data !== data && currentNode.next) {
      counter++;
      currentNode = currentNode.next;
    }

    // Store the node that matches the data in a new variable
    let foundNode = currentNode;

    // Reset current node to the first node in the list
    currentNode = this.head;

    // finding the location of the found node
    for (let i = 1; i < counter; i++) {
      currentNode = currentNode.next;
    }
    currentNode.next = foundNode.next;
  }

  getFirst() {
    // if( this.data === this.head){
    //   return head
    // }
    if (!this.head) return null;

    return this.head;
  }

  getLast() {
    if (!this.head) return console.log("this list is empty!");

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

  getKth(k) {

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
  }

  getKthToLast(k) {
    let size = this.size()

    let last = size - k

    return this.getKth(last)
  }

  isEmpty() {
    if (this.head) {
      return false;
    } else {
      return true;
    }
  }

  clear() {
    this.head = null;
  }

  toArray() {
    if (this.head === null) return "list is empty";

    let currentNode = this.head;

    let nodeArray = [];

    while (currentNode) {
      nodeArray.push(currentNode.data);
      currentNode = currentNode.next;
    }
    return nodeArray;
  }

  containsDuplicates() {


  }
}

module.exports = {
  Node,
  LinkedList,
};
