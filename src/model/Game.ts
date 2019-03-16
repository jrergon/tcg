import Card from "./Card";
import Player from "./Player";

export default class Game {
  // players array
  private players: Player[] = [];

  // active player index
  private activePlayer: number = -1;

  /**
   * Preparing players
   */
  constructor() {
    // create players and prepare for battle
    for (let i = 0; i < 2; i++) {
      const player = new Player();

      // draw 3 cards for each player
      for (let k = 0; k < 3; k++) {
        player.drawCard();
      }

      this.players.push(player);
    }
  }

  /**
   * @returns {Player[]} players of game
   */
  public getPlayers(): Player[] {
    return this.players;
  }

  /**
   * Prepare player for next round and returns active player
   * @returns {Player} active player
   */
  public nextTurn(): Player {
    if (this.activePlayer === 0) {
      this.activePlayer = 1;
    } else {
      this.activePlayer = 0;
    }

    const player = this.getActivePlayer();
    player.drawCard();
    player.increaseManaSlot();
    player.refillMana();

    return player;
  }

  /**
   * Playing card from player's hand and dealing damage to enemy
   * @param {number} cardIndex played card number
   * @returns {boolean} is card played or not
   */
  public playCard(cardIndex: number): boolean {
    const activePlayer = this.getActivePlayer();
    const enemyPlayer = this.getEnemy();

    if (!activePlayer.isPlayable(cardIndex)) {
      return false;
    }

    const playedCard = activePlayer.playCard(cardIndex);

    if (playedCard === null) {
      return false;
    }

    activePlayer.consumeMana(playedCard.getMana());
    enemyPlayer.receiveDamage(playedCard.damage());

    return true;
  }

  /**
   * @returns {number} enemy's health
   */
  public getEnemyHealth(): number {
    const enemy = this.getEnemy();

    return enemy.getHealth();
  }

  /**
   * @returns {number} active player index
   */
  public getActivePlayerIndex(): number {
    return this.activePlayer;
  }

  /**
   * @returns {Player} active player
   */
  private getActivePlayer(): Player {
    return this.players[this.activePlayer];
  }

  private getEnemy(): Player {
    if (this.activePlayer === 1) {
      return this.players[0];
    }

    return this.players[1];
  }
}
