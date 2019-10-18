const utils = {
  suits: ["Hearts", "Clubs", "Diamonds", "Spades"],
  values: [
    "Ace",
    "King",
    "Queen",
    "Jack",
    "Ten",
    "Nine",
    "Eight",
    "Seven",
    "Six",
    "Five",
    "Four",
    "Three",
    "Two"
  ],

  createDeck() {
    let deck = [];
    for (let suitIdx = 0; suitIdx < this.suits.length; suitIdx++) {
      for (let valueIdx = 0; valueIdx < this.values.length; valueIdx++) {
        let card = {
          suit: this.suits[suitIdx],
          value: this.values[valueIdx]
        };
        deck.push(card);
      }
    }
    return deck;
  },
  shuffleDeck(deck) {
    for (let i = 0; i < deck.length; i++) {
      let swapIdx = Math.trunc(Math.random() * deck.length);
      let tmp = deck[swapIdx];
      deck[swapIdx] = deck[i];
      deck[i] = tmp;
    }
    return deck;
  },
  getNextCard(deck) {
    return deck.shift();
  },
  getCardNumericValue(card) {
    switch (card.value) {
      case "Ace":
        return 1;
      case "Two":
        return 2;
      case "Three":
        return 3;
      case "Four":
        return 4;
      case "Five":
        return 5;
      case "Six":
        return 6;
      case "Seven":
        return 7;
      case "Eight":
        return 8;
      case "Nine":
        return 9;
      default:
        return 10;
    }
  },
  getScore(cardArray) {
    if (!cardArray || cardArray.length == 0) {
      console.log("No card on player's hand.");
      return 0;
    }

    let score = 0;
    let hasAce = false;
    for (let i = 0; i < cardArray.length; i++) {
      let card = cardArray[i];
      score += this.getCardNumericValue(card);
      if (card.value === "Ace") {
        hasAce = true;
      }
    }
    if (hasAce && score + 10 <= 21) {
      return score + 10;
    }
    return score;
  }
};

export default utils;
