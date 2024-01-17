const { nums, words } = require("./data/data.js");

class Node {
  constructor(val){
    this.data = val;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList{
  constructor(val){
    this.head = new Node(val);
    this.tail = this.head;
  }

  insert(val){
    let newNode = new Node(val);
    newNode.next = this.head;
    
    this.head = newNode;
    if(!this.tail || this.tail.data == null){
      this.tail = newNode;
    }
    this.head.next.prev = this.head;
  };

  size(){
    let count = -1;
    let current = this.head
    while(current){
      count++;
      current = current.next;
    }
    return count;
  };

  delete(val){
    let current = this.head;
    let prev = this.head;
    if(this.head.data == val){
      this.head = this.head.next;
      return ;
    }

    current = current.next;

    while(current){
      if(current.data == val){
        prev.next = current.next;
        if(!prev.next){
          this.tail = prev;
        }
      }
      prev = prev.next;
      current = current.next;
    }    
  };

  getFirst(){
    return this.head;
  };

  getLast(){
    return this.tail;
  };

  search(val){
    let current = this.head;
    while(current){
      if(current.data == val){
        return current;
      }
      current = current.next;
    }
    return null;
  }

  getKth(index){
    let current = this.head;
    let count = 1;
    if(this.size() <= index){
      return ;
    }
    while(current){
      if(count == index){
        return current;
      }
      current = current.next;
      count++;
    }
    return current;
  };

  getKthToLast(index){
    let current = this.tail;
    let count = 0;
    if(this.size() - index < 0){
      return ;
    }
    while(current){
      if(count == index){
        return current;
      }
      current = current.prev;
      count++;
    }
  }

  clear(){
    this.head = null;
  };

  isEmpty(){
    if(!this.head || this.head.data == null){
      return true;
    }
    return false;
  }

  containsDuplicates(){
    let set = new Set();
    let current = this.head;
    while(current){
      if(set.has(current.data)){
        return true;
      }
      set.add(current.data);
      current = current.next;
    }
    return false;
  };

  toArray(){
    let arr = [];
    let current = this.head;
    while(current && current.data != null){
      arr.push(current.data);
      current = current.next;
    }
    return arr;
  }
}

module.exports = {
  Node,
  LinkedList,
};
