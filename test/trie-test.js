import  { expect } from 'chai';  
import Trie from '../lib/trie'; 

describe('Trie', () => {
  let prefixTrie; 

  beforeEach(() => {
    prefixTrie = new Trie(); 
  });

  it('should exist', () => {
    expect(prefixTrie).to.exist; 
  }); 

  it('should default start with zero words', () => {
    expect(prefixTrie.totalWords).to.equal(0); 
  }); 

  it('should default root to null', () => {
    expect(prefixTrie.root).to.equal(null); 
  }); 

  it('should increase the amount of words each time we instantiate a new word', () => {
    expect(prefixTrie.count()).to.equal(0); 
    prefixTrie.insert('hello'); 
    expect(prefixTrie.count()).to.equal(1); 
  }); 
}); 