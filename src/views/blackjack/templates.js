import {Cards} from './cards';

export class Templates {
  static inject = [Cards];

  constructor(cards) {
    this.cards = cards;
  }

  suitIcon(card) {
    const Spades = '\u2660';
    const Clubs = '\u2663';
    const Diamonds = '\u2666';
    const Hearts = '\u2665';
    return { Spades, Clubs, Diamonds, Hearts }[card.suit];
  }

  getCssClass(card) {
    // console.log('isFlipped', this.cards.isFlipped(card));
    // return `card ${card.suit.toLowerCase()} ${this.cards.isCardFlipped.get(card) ? 'flipped' : ''}`;
    return `game-card ${card.suit.toLowerCase()} ${this.cards.isCardFlipped.get(card) && 'flipped'}`;
  }

  cardTemplate(card) {
    return `<div
      class="${this.getCssClass(card)}">
      <div class="side back">\uD83D\uDC09</div>
      <div class="side front" data-suit="${this.suitIcon(card)}" data-face="${card.face}">
        ${card.face}
      </div>
    </div>`;
  }

}
