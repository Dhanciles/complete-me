import { expect } from 'chai'; 
import Node from '../lib/node'; 

describe('Node', () => {
  let node; 

  beforeEach(() => {
    node = new Node('z'); 
  })

  it('should exist', () => {
    expect(node).to.exist; 
  }); 

  it('should take a letter as an argument and assign it as a value to our key', () =>  {
    expect(node.letter).to.equal('r'); 
  }); 

  it('should default end to false', () => {
    expect(node.end).to.equal(false); 
  }); 

  it('should have children that have a default property of null', () => {
    expect(node.children).to.equal(null); 
  }); 
})