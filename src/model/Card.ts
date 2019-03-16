export default class Card {
  // required mana amount
  private mana: number;

  /**
   * Creates a Card Object
   * @param {number} mana required mana amount
   */
  constructor(mana: number) {
    this.mana = mana;
  }

  /**
   * Returns required mana amount
   * @returns {number} the required mana amount
   */
  public getMana(): number {
    return this.mana;
  }

  /**
   * Returns damage amount that the card deals
   * It's equal to consumed mana when card used
   * @returns {number} damage amount that card deals
   */
  public damage(): number {
    return this.mana;
  }
}
