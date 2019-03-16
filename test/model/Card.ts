import { expect } from 'chai';
import Card from '../../src/model/Card';

describe('Card Model', function(){
  it('init', function() { 
    const card = new Card(1);

    expect(card.getMana()).to.equal(1);
  });

  it('damage', function() {
    const card = new Card(1);

    expect(card.damage()).to.equal(1);
  });
});