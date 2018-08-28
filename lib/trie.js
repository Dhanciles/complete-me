import Node from './node'; 

export default class Trie {
  constructor() {
    this.totalWords = 0; 
    this.root = null; 
    this.words = []; 
  }

  count() {
    return this.totalWords; 
  }

  insert(newWord) {
    this.totalWord++; 
    this.newWord = newWord; 
  }
}


 