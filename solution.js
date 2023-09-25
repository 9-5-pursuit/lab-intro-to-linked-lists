const { nums, words } = require("./data/data.js");

class Node{
  constructor(data){
    this.data = data;
    this.next = null;
  }
}

class LinkedList{
  constructor(head){
    this.head = head;
  }

  insert(data){
    let currentNode = this.head;
    let newNode = new Node(data);

    if(!currentNode){
      this.head = newNode;
    }else{
      newNode.next = currentNode;
      this.head = newNode;
    }
    
  }

  size(){
    let counter = 0;
    let currentNode = this.head;

    while(currentNode){
      counter++
      currentNode = currentNode.next;
    }
    return counter;
  }

  delete(key){
    let currentNode = this.head;
    let prevNode = null;
    while(currentNode){
      if(currentNode.data === key){
        let nextNode = currentNode.next;
        prevNode.next = nextNode;
      }
      prevNode = currentNode;
      currentNode = currentNode.next;
    }
  } 
  
  search(key){
    let currentNode = this.head;
    while(currentNode){
      if(currentNode.data === key){return currentNode}
      currentNode = currentNode.next;
    }
  }

  getFirst(){
    return this.head;
  }

  getLast(){
    let currentNode = this.head;
    let prevNode
    while(currentNode){
      prevNode = currentNode
      currentNode = currentNode.next
    }
    return prevNode;
  }

  getKth(kth){
    let currentNode = this.head;
    for(let x = 1; x < kth; x++){
      currentNode.next
    }
    return currentNode;
  }

  getKthToLast(kth){
    let currentNode = this.head;
    let listSize = this.size();
    let target = listSize - kth
    for(let x = 1; x < target; x++){
      currentNode = currentNode.next
    }
    return currentNode;
  }

  isEmpty(){
    return this.head ? false : true;
  }

  clear(){
    return this.head = null;
  }

  toArray(){
    let currentNode = this.head;
    let array = []
    while(currentNode){
      array.push(currentNode.data)
      currentNode = currentNode.next
    }
    return array;
  }

  containsDuplicates(){
    let array = this.toArray()
    for(let x of array){
      let ocurrencesCount = array.filter(y => y === x)
      if(ocurrencesCount.length > 1){
        return true;
      }
    }
    return false;
  }

}

module.exports = {
  Node,
  LinkedList,
};
