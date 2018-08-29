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
   if (Object.keys(this.root).includes(entry[0])) {
    let splitEntry = entry.split(''); 
    let path = splitEntry.reduce( (key, letter) => {
      
      return key[letter]; 
    }, this.root); 
    return this.getWords(path, entry)
   } else {
      return 'no bueno'; 
   }
  }

  getWords(obj, entry) {
    let results = []; 
    let arr = Object.keys(obj); 

    arr.forEach(key => {
      if (key !== 'end') {
        results.push(...this.getWords(obj[key], entry + key)); 
      } else if (obj.end) {
        results.push(entry); 
      }
    })
    return results; 
  }  
}



