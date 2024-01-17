const { nums, words } = require("./data/data.js");

class Node {
  constructor(data = null, next = null) {
    this.data = data
    this.next = next
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head
  }

  insert(data) {
    const newNode = new Node(data)
    newNode.next = this.head
    this.head = newNode
  }

  size() {
    let traverse = this.head
    let count = 0
    while (traverse) {
      traverse = traverse.next
      count++
    }
    return count
  }

  delete(key) {
    let traverse = this.head
    while (traverse) {
      if (traverse.next.data === key) {
        traverse.next = traverse.next.next
        break
      }
    }
  }

  getFirst(){
    return this.head
  }

  getLast(){
    let traverse = this.head
    while(traverse){
      if(traverse.next===null)
        return traverse
      traverse = traverse.next
    }
  }

  search(value){
    let traverse = this.head
    while(traverse){
      if(traverse.data===value)
        return traverse
      traverse = traverse.next
    }
  }

  getKth(position){
    let count = 1
    let traverse = this.head
    while(traverse){
      if(count===position)
        return traverse
      count++
      traverse = traverse.next
    }
  }

  getKthToLast(position){
    let count = this.size()-1
    let traverse = this.head
    while(traverse){
      if(count===position)
        return traverse
      count--
      traverse = traverse.next
    }
  }

  isEmpty(){
    return !this.head
  }

  clear(){
    this.head = null
  }

  toArray(){
    let traverse = this.head
    const listToArray = []
    while(traverse){
      listToArray.push(traverse.data)
      traverse = traverse.next
    }
    return listToArray
  }

  containsDuplicates(){
    let traverse = this.head
    const setOfList = new Set()
    while(traverse){
      if(setOfList.has(traverse.data))
        return true
      setOfList.add(traverse.data)
      traverse = traverse.next
    }
    return false
  }

}

module.exports = {
  Node,
  LinkedList,
};
