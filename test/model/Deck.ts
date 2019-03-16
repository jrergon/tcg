import { expect } from 'chai';
import Deck from '../../src/model/Deck';

describe('Deck Model', function(){
  it('init', function() { 
    const deck = new Deck();

    expect(deck.size()).to.equal(20);
  });

  it('drawing card from deck', function() {
    const deck = new Deck();
    const card = deck.drawCard();

    expect(deck.size()).to.equal(19);
  });
});