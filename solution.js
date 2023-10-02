const { nums, words } = require("./data/data.js");
const { inspect } = require("util")
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class LinkedList {
  constructor(head=null){
    this.head = head
  }
  containsDuplicates(){
    let dupCounter = {}
    let node = this.head
    while (node) {
      if (dupCounter[node.data]){
        return true
      } else dupCounter[node.data] = 1
      node = node.next
    }
    return false
  }
  toArray(){
    let array = []
    let node = this.head

    while (node){
    array.push(node.data)
    node = node.next
    }
    return array
  }
  clear(){
    this.head = null
  }
  isEmpty(){
    let node = this.head
    return (!node ? true : false)
  }
  getKth(k){
    let node = this.head
    let counter = 1
    if (k > this.size()){
      return "Out of Bounds"
    }
    while(counter < k) {
      counter++
      node = node.next
    }
    return node

  }
  getKthToLast(k){
    let node = this.head
    if (k > this.size()){
      return "Out of Bounds"
    }
    let counter = 1
    while(counter < this.size()-k) {
      counter++
      node = node.next
    }
    return node
  }
  getFirst(){
    return this.head
  }
  getLast(){
    let node = this.head
    if (!node) return null
    while (node.next){
      node = node.next
    }
    return node
  }
  search(key) {
    let node = this.head;
    while(node !== null && node.data !== key) {
      node = node.next;
    }
    return node
  }
  size(){
    let count = 0;
    let node = this.head
    while (node){
      count++
      node = node.next
    }
    return count
  }
  insert(data){
    let newNode = new Node(data);
    if (!this.head) {
      this.head = newNode
    } else {
      newNode.next = this.head;
      this.head = newNode
    }
  }
  delete(key){
    let node = this.head
    let counter = 0
    while(node.data !== key && node.next){
      counter++
      node = node.next
    }
    let foundNode = node;
    node = this.head;
    for (let i = 1; i < counter; i++){
      node = node.next 
    }
    node.next = foundNode.next
  }
}

/*let previousNum = new Node(nums[0])
let previousWord = new Node(words[0])

let numList = new LinkedList(previousNum)
let wordList = new LinkedList(previousWord)

for (let i = 1; i < nums.length; i++){
  let currentNum = new Node(nums[i])
  previousNum.next = currentNum;
  previousNum = currentNum;
}
for (let i = 1; i < words.length; i++){
  let currentWord = new Node(words[i])
  previousWord.next = currentWord;
  previousWord = currentWord;
}

*/

module.exports = {
  Node,
  LinkedList,
};
