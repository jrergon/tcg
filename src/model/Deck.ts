import Card from "./Card";

export default class Deck {
  // Deck cards
  private cards: Card[] = [];

  /**
   * Creates a deck of 20 cards
   */
  constructor() {
    this.cards.push(new Card(0));
    this.cards.push(new Card(0));
    this.cards.push(new Card(1));
    this.cards.push(new Card(1));
    this.cards.push(new Card(2));
    this.cards.push(new Card(2));
    this.cards.push(new Card(2));
    this.cards.push(new Card(3));
    this.cards.push(new Card(3));
    this.cards.push(new Card(3));
    this.cards.push(new Card(3));
    this.cards.push(new Card(4));
    this.cards.push(new Card(4));
    this.cards.push(new Card(4));
    this.cards.push(new Card(5));
    this.cards.push(new Card(5));
    this.cards.push(new Card(6));
    this.cards.push(new Card(6));
    this.cards.push(new Card(7));
    this.cards.push(new Card(8));
  }

  /**
   * Returns a card and remove it from deck
   * @return {Card|null} returns a card from deck
   */
  public drawCard(): Card|null {
    if (this.cards.length === 0) {
      return null;
    }

    const index = this.random();
    const card = this.cards[index];
    this.cards.splice(index, 1);

    return card;
  }

  /**
   * @returns {number} size of deck
   */
  public size(): number {
    return this.cards.length;
  }

  /**
   * Generating random number between 0 and cards array length
   * @returns {number} random index of cards array
   */
  private random(): number {
    return Math.floor(Math.random() * this.cards.length);
  }
}
