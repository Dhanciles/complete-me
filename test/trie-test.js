import { expect } from 'chai';
import Trie from '../lib/Trie'; 
import Node from '../lib/Node'; 
import fs from 'fs';
require('locus'); 

describe('TRIE', () => {
  let trie;
  const text = "/usr/share/dict/words";
  const dictionary = fs.readFileSync(text).toString().trim().split('\n')

  beforeEach(() => {
    trie = new Trie();
  });

  it('should exist', () => {
    expect(trie).to.exist;
  })

  it('should start with zero elements', () => {
    expect(trie.totalWords).to.equal(0);
  });

  it('should increase totalWords each time we instantiate a new word', () => {
    expect(trie.totalWords).to.eq(0);
    trie.insert('hello')
    expect(trie.totalWords).to.eq(1)
  });

  it('should insert a word by invoking the insert method', () => {
    trie.insert('need');
     
    expect(trie.root).to.have.property('n')
  }); 

  it('should suggest an array of words', () => {
    trie.insert('lap'); 
    trie.insert('lost'); 
    trie.insert('calm'); 

    let response = trie.suggest('l'); 
    // console.log(JSON.stringify(trie, null, 4))
    expect(response).to.deep.eq(['lap', 'lost']); 
  }); 

  it('should populate with words', () => {
    trie.populate(dictionary); 
    expect(trie.totalWords).to.eq(235886); 
  }).timeout(6000)
});