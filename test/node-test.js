import { expect } from 'chai';
import Node from '../lib/node';

describe('NODE', () => {
  let node;
  beforeEach(() => {
    node = new Node('P');
  }); 

  it('should exist', () => {
    expect(node).to.exist;
  }); 

  it('should take letter as argument and assign it to the letter property', () => {
    expect(node.letter).to.equal('P');
  }); 

  it('should default end to false', () => {
    expect(node.end).to.equal(false)
  }); 

  it('should default children to null', () => {
    expect(node.children).to.deep.equal({});
  }); 

})