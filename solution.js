const { nums, words } = require("./data/data.js");


class Node {
  constructor(data,next){
    this.data = data;
    this.next = next;
  }
}

class LinkedList{
  constructor(head = null){
    this.head = head;
  }
clear(){
  return this.head = null;
}
getFirst() {
  return this.head;
}

getLast() {
  let currentNode = this.head;
  // establishes the start node 
  while (currentNode && currentNode.next) {
    currentNode = currentNode.next;
}
// while loop starts count, condition states that as long as theres a node to count NEXT, then count NEXT - until NULL is next to be counted
return currentNode

}
insert(data) {
  //creating a new class "node", with properties different of the original (data,next to data,this.head)
  const newNode = new Node(data, this.head);
  //now this.head (the designated first node) will be the first node established in the "new class"
  this.head = newNode;
}

size() {
  // create a count to COUNT along as we MOVE along nodes 
  let count = 0;
  // create start to your linked list. STANDARD this.head is the STARTING NODE
  let node = this.head;
  // while loop to MOVE along the Linked list 
  while(node) {
      // while node(s) exist, count up nodes as we move along  
      count++
      //node will equal the next node down the list, until the NEXT NODE IS NULL 
      node = node.next
  }
  // the count at the end of the loop of the nodes will be returned/submitted
  return count
}

isEmpty() {
  let count = 0;

  let node = this.head;

  while(node) {
    count ++

    node = node.next
  }

  if(count !== 0){
    return false
  }
  return true 
}
search(key) {
  // start at the top
  let currentNode = this.head;
  // while we have value and its NOT what we want
  while (currentNode !== null && currentNode.data !== key) {
      // keep searching (line 77 moves us along in the hunt)
      currentNode = currentNode.next
  }
  return currentNode
}

}
  module.exports = {
  Node,
  LinkedList,
};