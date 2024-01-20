const { nums, words } = require("./data/data.js");

class Node {
  constructor(data){
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null){
    this.head = head
  }

  insert(node){
  
    let newNode = new Node(node)
    let currentNode = this.head

    this.head = newNode
    newNode.next = currentNode

  }
  size(){
    let count = 0;
    let node = this.head
    while(node){
      count++
      node = node.next
    }
    return count
  }
  delete(key){
    let previousNode = null
    let currentNode = this.head

    //edge case for first
    if (this.head.data === key  || this.head === key) {
        this.head = this.head.next;
        return;
    }

    while(currentNode !== null && currentNode.data !== key){
        previousNode = currentNode
        currentNode = currentNode.next
    }

    if(currentNode !== null){
        previousNode.next = currentNode.next;
    }

    return currentNode
  }

  getFirst(){
    return this.head
  }

  getLast(){
    let node = this.head
    while(node){
      if(node.next){
        node = node.next
      } else {
        break
      }
    }
    return node
  }
  search(key){
    let currentNode = this.head
    while(currentNode != null && currentNode.data != key){
      currentNode = currentNode.next
    }
    return currentNode
  }

  getKth(num){
    let count = 1
    let currentNode = this.head

    while(currentNode != null && count < num){
      currentNode = currentNode.next
      count++
    }
    return currentNode
  }


  getKthToLast(num){
    let count = 1
    let currentNode = this.head
    let goal = this.size() - num
    while(currentNode != null && count < goal){
      currentNode = currentNode.next
      count++
    }
    return currentNode
  }
  isEmpty(){
    return this.head ? false : true
  }
  clear(){
    this.head = null
    this.next = null
  }
  toArray(){
    let array = [];
    let currentNode = this.head
    while(currentNode){
      array.push(currentNode.data)
      currentNode = currentNode.next
    }
    return array

  }
  containsDuplicates(){
    let dict = {}
    let currentNode = this.head;
    while(currentNode){
      if(dict[currentNode.data]){
        return true
      } else {
        dict[currentNode.data] = 1
      }
      currentNode = currentNode.next
    }
    return false
  }



}

module.exports = {
  Node,
  LinkedList,
};
