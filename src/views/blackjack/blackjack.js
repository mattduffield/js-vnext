import {Cards} from './cards';
import {Templates} from './templates';
import {Utils} from './utils';

export class Blackjack {
  static inject = [Cards, Templates, Utils];

  app;
  statusEl;
  dealerEl;
  playerEl;
  buttonsEl;
  deck;
  dealerHand;
  playerHand;

  constructor(cards, templates, utils) {
    this.cards = cards;
    this.templates = templates;
    this.utils = utils;
  }
  attached() {
    this.app = document.querySelector('#blackjack');
    this.statusEl = this.app.querySelector('.status');

    this.dealerEl = this.app.querySelector('.dealer');
    this.playerEl = this.app.querySelector('.player');
    this.buttonsEl = this.app.querySelector('.buttons');
    
    this.deck = this.cards.createDeck();
    this.dealerHand = new Set();
    this.cards.dealInitialHand(this.dealerHand, this.deck);
    this.cards.flipCardDown([ ...this.dealerHand ][0]);

    this.playerHand = new Set();
    this.cards.dealInitialHand(this.playerHand, this.deck);

    this.render(this.dealerEl, this.dealerHand);
    this.render(this.playerEl, this.playerHand);
  }

  *dealerPlay() {
    this.dealerEl.querySelector('.card').classList.add("flipped");
    // keep hitting until you at least tie
    while(this.cards.countHand(this.dealerHand) < this.cards.countHand(this.playerHand)) {
      this.addCard(this.dealerEl, this.dealerHand, this.cards.pop(this.deck));
      yield;
    }
    // if tied but less than 17, hit again for the win
    if (this.cards.countHand(this.dealerHand) === this.cards.countHand(this.playerHand)) {
      if (this.cards.countHand(this.dealerHand) < 17) {
        this.addCard(this.dealerEl, this.dealerHand, this.cards.pop(this.deck));
        yield;
      }
    }
  }

  dealerTurn(callback) {
    this.utils.wait(this.dealerPlay(), 1000, callback);
  }

  hit() {
    this.addCard(this.playerEl, this.playerHand, this.cards.pop(this.deck));
    this.updateLabel(this.playerEl, this.playerHand);
    const score = this.cards.countHand(this.playerHand);
    if (score > 21) {
      this.buttonsEl.classList.add('hidden');
      this.status('Bust!');
    } else if (score === 21) {
      this.stay();
    }
  }

  stay() {
    this.buttonsEl.classList.add('hidden');
    this.dealerEl.querySelector('.score').classList.remove('hidden');
    this.dealerTurn(() => {
      this.updateLabel(this.dealerEl, this.dealerHand);
      const dealerScore = this.cards.countHand(this.dealerHand);
      const playerScore = this.cards.countHand(this.playerHand);
      if (dealerScore > 21 || dealerScore < playerScore) {
        this.status('You win!');
      } else if (dealerScore === playerScore) {
        this.status('Push.');
      } else {
        this.status('Dealer wins!');
      }
    });
  }
  /* Elements */
  domNode(str) {
    var template = document.createElement('template');
    template.innerHTML = str;
    return template.content.firstChild;
  }
  render(element, hand) {
    element.querySelector('.hand').innerHTML = [...hand].map(this.templates.cardTemplate.bind(this)).join('');
    element.querySelector('.score').innerHTML = this.cards.countHand(hand);
    this.updateLabel(element, hand);
  }
  addCard(element, hand, card) {
    hand.add(card);
    const cardNode = this.domNode(this.templates.cardTemplate(card));
    element.querySelector('.hand').classList.add("adding");
    element.querySelector('.hand').appendChild(cardNode);
    element.querySelector('.score').innerHTML = this.cards.countHand(hand);
    setTimeout(() => element.querySelector('.hand').classList.remove("adding"), 10);
  }
  updateLabel(element, hand) {
    const scoreEl = element.querySelector('.score');
    const score = this.cards.countHand(hand);
    if (score > 21) {
      scoreEl.classList.add('bust');
    } else if (score === 21) {
      scoreEl.classList.add('blackjack');
    }
  }
  status(msg) {
    this.statusEl.classList.remove('hidden');
    this.statusEl.innerHTML = msg;
  }
}
