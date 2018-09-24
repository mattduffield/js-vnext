
export class Cards {

  suits = new Set(['Spades', 'Clubs', 'Diamonds', 'Hearts']);
  faces = new Set([
    '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'
  ]);
  faceValues = new Map([
    ['2', 2], ['3', 3], ['4', 4], ['5', 5], ['6', 6], ['7', 7], ['8', 8],
    ['9', 9], ['10', 10], ['J', 10], ['Q', 10], ['K', 10]
  ]);
  isCardFlipped = new Map();

  constructor() {
    
  }

  flipCardUp(card) {
    this.isCardFlipped.set(card, true);
  }

  flipCardDown(card) {
    this.isCardFlipped.set(card, false);
  }
  shuffle(deck) {
    const cards = [ ...deck ];
    let idx = cards.length;
    while (idx > 0) {
      idx--
      const swap = Math.floor(Math.random() * cards.length);
      const card = cards[swap];
      cards[swap] = cards[idx];
      cards[idx] = card;
    }
    deck.clear();
    cards.forEach(card => deck.add(card));
  }
  pop(deck) {
    const card = [ ...deck ].pop()
    this.isCardFlipped.set(card, true)
    deck.delete(card)
    return card
  }
  createDeck() {
    const deck = new Set();
    for (const suit of this.suits) {
      for (const face of this.faces) {
        deck.add({ face, suit });
      }
    }
    this.shuffle(deck);
    return deck;
  }
  dealInitialHand(hand, deck) {
    hand.add(this.pop(deck));
    hand.add(this.pop(deck));
  }
  countHand(hand) {
    let count = 0;
    const aces = new Set();
    for (const card of hand) {
      const { face } = card;
      if (face === 'A') {
        count += 1;
        aces.add(card);
      } else {
        count += this.faceValues.get(face);
      }
    }
    for (const card of aces) {
      if (count <= 11) {
        count += 10;
      }
    }
    return count;
  }
}
