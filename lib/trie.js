import Node from './Node';

export default class Trie {
  constructor() {
    this.totalWords = 0;
    this.root = new Node();
  }

  insert(word) {
    let currNode = this.root; 
    let wordArray = [...word]; 
    
    this.insertLetter(wordArray, currNode); 
    this.totalWords++; 
  }

  insertLetter(wordArray, currNode) {
    if (!wordArray.length) {
      currNode.end = true; 
      return;
    } 
    let letter = wordArray.shift(); 
    
    if (!currNode[letter]) {
      currNode[letter] = new Node();
    }
    currNode = currNode[letter]; 
    return this.insertLetter(wordArray, currNode);
  }

  count() {
    return this.totalWords; 
  }

  suggest(string) {
    let wordArray = [...string]; 
    
    if (Object.keys(this.root).includes(wordArray[0])) {
      let path = wordArray.reduce((key, letter) => {      
      
        return key[letter]; 
      }, this.root); 
      return this.returnWords(path, string); 
    } else {
      return 'no bueno'; 
    }
  }

  returnWords(path, string) {
    let results = []; 
    
    Object.keys(path).forEach(key => {
      if (key !== 'end') {
        results.push(...this.returnWords(path[key], string + key)); 
      } else if (path.end) {
        results.push(string); 
      }
    }); 
    return results;
  }

  populate(dictionary) {
    dictionary.forEach(word => {
      this.insert(word); 
    }); 
  }  
}