import * as readlineSync from "readline-sync";
import Game from './src/model/Game';

const game = new Game();
let isGameActive: boolean = true;

while (isGameActive) {
  const activePlayer = game.nextTurn();
  const activePlayerIndex = game.getActivePlayerIndex() + 1;

  while(true) {
    console.log("Player " + activePlayerIndex + " Turn");
    console.log("Current Health: " + activePlayer.getHealth());
    console.log("Current Mana: " + activePlayer.getMana());
    console.log("Enemy Health: " + game.getEnemyHealth());
    let cardOptions: string[] = [];
    const playerHand = activePlayer.getPlayerHand();

    for (let i = 0; i < playerHand.length; i++) {
      const cardPower = playerHand[i].damage();
      const cardMana = playerHand[i].getMana();

      const cardString = "Card " + (i + 1) + ": Mana (" +
        cardMana + ") Power (" + cardPower + ")";
      
      cardOptions.push(cardString);
    }

    let selectedCardIndex = 
      readlineSync.keyInSelect(cardOptions, 'Select a Card');

    if(selectedCardIndex === -1) {
      break;
    }

    const isPlayed = game.playCard(selectedCardIndex);
    const enemyHealth = game.getEnemyHealth();

    if(isPlayed === false) {
      console.log("You cannot afford this card.");
    }

    if(isPlayed === true && enemyHealth > 0) {
      console.log("Enemy Health: " + enemyHealth);
    } else if(enemyHealth <= 0) {
      console.log("Player " + activePlayerIndex + " Won");
      isGameActive = false;
      break;
    }
  }
}