import Card from "./Card";
import Deck from "./Deck";

export default class Player {
  // Player's Deck
  private deck: Deck = new Deck();

  // Mana slot of player
  private manaSlot: number = 0;

  // Mana amount of player
  private mana: number = 0;

  // Player health
  private health: number = 30;

  // Player's card that holds in hand
  private playerHand: Card[] = [];

  /**
   * @returns {number} current mana amount of player
   */
  public getMana(): number {
    return this.mana;
  }

  /**
   * increase mana slots up to 10
   */
  public increaseManaSlot() {
    if (this.manaSlot < 10) {
      this.manaSlot++;
    }
  }

  /**
   * Refilling mana slots of player
   */
  public refillMana() {
    this.mana = this.manaSlot;
  }

  /**
   * Draw card from deck
   */
  public drawCard() {
    const card = this.deck.drawCard();

    if (card !== null && this.getPlayerHand().length !== 5) {
      this.playerHand.push(card);
    }
  }

  /**
   * @returns {Card[]} returns card list that in player's hand
   */
  public getPlayerHand(): Card[] {
    return this.playerHand;
  }

  /**
   * Playing card, remove from player's hand
   * and returning damage that card deals
   * @param {number} index playing card that is given index
   * @return {Card|null} played card
   */
  public playCard(index: number): Card|null {
    if (index >= this.getPlayerHand().length) {
      return null;
    }

    const card = this.playerHand[index];
    this.playerHand.splice(index, 1);

    return card;
  }

  /**
   * @param manaAmount mana amount to consume
   */
  public consumeMana(manaAmount: number) {
    this.mana -= manaAmount;
  }

  /**
   * Check player able to play this card
   * @param {number} index checking card that is given index
   * @return {boolean} true if player able to play given card, otherwise false
   */
  public isPlayable(index: number): boolean {
    if (index >= this.getPlayerHand().length) {
      return false;
    }

    const card = this.playerHand[index];

    if (card.getMana() <= this.mana) {
      return true;
    }

    return false;
  }

  /**
   * Getting damage from enemy's card and returns health of player
   * @param {number} damage getting damage from enemy
   * @returns {number} current health of player
   */
  public receiveDamage(damage: number): number {
    this.health -= damage;

    return this.health;
  }

  /**
   * @returns {number} current health
   */
  public getHealth(): number {
    return this.health;
  }
}
