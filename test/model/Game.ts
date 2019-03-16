import { expect } from 'chai';
import Game from '../../src/model/Game';
import Card from '../../src/model/Card';

describe('Game Model', function(){
  it('init', function() { 
    const game = new Game();

    expect(game.getPlayers().length).to.equal(2);
    expect(game.getPlayers()[0].getPlayerHand().length).to.equal(3);
    expect(game.getPlayers()[1].getPlayerHand().length).to.equal(3);
  });

  it('next turn', function() {
    const game = new Game();
    const activePlayer = game.nextTurn();

    expect(activePlayer.getMana()).to.equal(1);
    expect(activePlayer.getPlayerHand().length).to.equal(4);
  });

  it('play a card', function() {
    const game = new Game();
    const activePlayer = game.nextTurn();
    const playable = activePlayer.isPlayable(0);
    const isPlayed = game.playCard(0);

    if (playable) {
      expect(isPlayed).to.equal(true);
    }else {
      expect(isPlayed).to.equal(false);
    }
  });
});