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
    let current = this.head;

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
      };

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
      };

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
      };

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

//super bonus part for fun.
function node(data){
  this.val = data;
  this.prev = null;
  this.next = null;
};

function insertNode(head, data){
  let newNode = new node(data);

  if(!head){
    head = newNode;
    tail = newNode;
  }
  else{
    newNode.next = head;
    head.prev = newNode;
    head = newNode;
  }

  return head;
};

function lengthOfNode(head){
  if(!head){
    return 0;
  }

  return 1 + lengthOfNode(head.next);
};

function getFirstElement(head){
  return head;
};

function getLastElement(head){
  return tail;
};

function searchNode(head, data){
  if(!head){
    return ;
  }

  let current = head;

  while(current){
    if(current.data == data){
      return current;
    }
    current = current.next;
  };
};

function isListEmpty(head){
  return head ? true : false;
}

function clearLinkedList(head){
  head = null;
  return head;
};

function deleteNode(head, data){
  if(!head){
    return ;
  };

  if(head.data == data){
    head = head.next;
    return head;
  }

  let prev = head;
  let current = head.next;

  while(current){
    if(current.data == data){
      current.next.prev = prev;
      prev.next = current.next;
      return head;
    }

    current = current.next;
    prev = prev.next;
  }

  return head;
}

module.exports = {
  Node,
  LinkedList,
};
