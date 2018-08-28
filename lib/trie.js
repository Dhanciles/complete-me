import Node from './Node';

export default class Trie {
  constructor() {
    this.totalWords = 0;
    this.root = null;
  }
  insert(word){
    this.totalWords++;
    let currNode = this.root;
    if(this.root === null){
      this.root = new Node(word);
      
    } else {
    }
      
  }
  count(){
    return this.totalWords
  }
}



