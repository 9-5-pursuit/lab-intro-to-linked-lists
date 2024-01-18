const { nums, words } = require("./data/data.js");
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0];

const words = [
  "the",
  "quick",
  "brown",
  "fox",
  "jumps",
  "over",
  "the",
  "lazy",
  "dog",
];

class Node {
  constructor(data, next = null){
    this.data = data;
    this.next = next;
  }
}
module.exports = {
  Node,
  LinkedList,
};
