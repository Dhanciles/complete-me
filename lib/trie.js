import Node from './Node';

export default class Trie {
  constructor() {
    this.totalWords = 0;
    this.root = new Node();
  }

  insert(word) {
    let currNode = this.root; 
    let wordArray = [...word]; 
    this.insertRecursive(wordArray, currNode); 
    this.totalWords++; 
  }

  insertRecursive(wordArray, currNode) {
    if (wordArray.length < 1) {
      currNode.end = true; 
      return;
    } 
    if (currNode[wordArray[0]]) {
      currNode = currNode[wordArray.shift()]; 
    } else {
      let letter = wordArray[0]

      currNode[letter] = new Node();
      currNode = currNode[letter]; 
      wordArray.shift()
    }
    return this.insertRecursive(wordArray, currNode); 
  }

  count(){
    return this.totalWords
  }

  suggest(entry = '') {
    let wordArray = [...string]; 
    if (Object.keys(this.root).includes(wordArray[0])) {
    let path = splitEntry.reduce( (key, letter) => {      
      return key[letter]; 
    }, this.root); 
    return this.getWords(path, string)
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
    })
    return results; 
  }

  populate(dictionary) {
    dictionary.forEach(word => {
      this.insert(word); 
    })
  }  
}



