import { expect } from 'chai';
import Player from '../../src/model/Player';

describe('Player Model', function(){
  it('draw card', function() {
    const player = new Player();
    player.drawCard();

    const cards = player.getPlayerHand();

    expect(cards.length).to.equal(1);
  });

  it('draw card with 5 cards on hand', function() {
    const player = new Player();
    player.drawCard();
    player.drawCard();
    player.drawCard();
    player.drawCard();
    player.drawCard();
    player.drawCard();

    const cards = player.getPlayerHand();

    expect(cards.length).to.equal(5);
  });

  it('playing a card', function() {
    const player = new Player();
    player.drawCard();

    const playedCard = player.playCard(0);
    const cards = player.getPlayerHand();

    expect(playedCard).to.be.an('object');
    expect(cards.length).to.equal(0);
  });

  it('playing card out of index', function() {
    const player = new Player();
    player.drawCard();

    const playedCard = player.playCard(2);
    const cards = player.getPlayerHand();

    expect(playedCard).to.be.null;
    expect(cards.length).to.equal(1);
  });

  it('increase and refill mana slots', function() {
    const player = new Player();
    player.increaseManaSlot();
    player.refillMana();

    const mana = player.getMana();

    expect(mana).to.equal(1);
  });

  it('increase and refill mana slots to 11', function() {
    const player = new Player();
    player.increaseManaSlot();
    player.increaseManaSlot();
    player.increaseManaSlot();
    player.increaseManaSlot();
    player.increaseManaSlot();
    player.increaseManaSlot();
    player.increaseManaSlot();
    player.increaseManaSlot();
    player.increaseManaSlot();
    player.increaseManaSlot();
    player.increaseManaSlot();
    player.refillMana();

    const mana = player.getMana();

    expect(mana).to.equal(10);
  });

  it('check is card playable without mana', function() {
    const player = new Player();
    player.drawCard();
    const playerHand = player.getPlayerHand();

    if (playerHand[0].getMana() <= player.getMana()) {
      expect(player.isPlayable(0)).to.be.true;
    } else {
      expect(player.isPlayable(0)).to.be.false;
    }
    
  });

  it('check is card playable with 10 mana', function() {
    const player = new Player();
    player.drawCard();
    player.increaseManaSlot();
    player.increaseManaSlot();
    player.increaseManaSlot();
    player.increaseManaSlot();
    player.increaseManaSlot();
    player.increaseManaSlot();
    player.increaseManaSlot();
    player.increaseManaSlot();
    player.increaseManaSlot();
    player.increaseManaSlot();
    player.increaseManaSlot();
    player.refillMana();

    expect(player.isPlayable(0)).to.be.true;
  });

  it('getting damage from enemy', function() {
    const player = new Player();
    const health = player.receiveDamage(6);

    expect(health).to.equal(24);
  });
});