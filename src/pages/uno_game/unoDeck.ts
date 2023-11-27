import assert from "assert";

enum Color {
  Red = "Red",
  Blue = "Blue",
  Green = "Green",
  Yellow = "Yellow",
  Wild = "Wild",
}

enum Value {
  Zero = 0,
  One = 1,
  Two = 2,
  Three = 3,
  Four = 4,
  Five = 5,
  Six = 6,
  Seven = 7,
  Eight = 8,
  Nine = 9,
  Skip = 10,
  Reverse = 11,
  DrawTwo = 12,
  DrawFour = 13,
  Wild = 14,
  ThemedWild = 15,
}

export class UnoCard {
  public color: Color;
  public value: Value;

  constructor(color: Color, value: Value) {
    this.color = color;
    this.value = value;
  }
}

export class UnoDeck {
  public cards: UnoCard[] = [];

  public drawCard(): UnoCard | Error {
    const card = this.cards.shift();

    if (card) {
      return card;
    } else {
      return new Error("No cards left in deck");
    }
  }

  public drawCards(amount: number): (UnoCard | Error)[] {
    const cards = [];
    for (let i = 0; i < amount; i++) {
      cards.push(this.drawCard());
    }

    return cards;
  }

  public shuffle() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j]!, this.cards[i]!];
    }
  }

  constructor() {
    this.generateDeck();

    console.log('tomato')
  }

  private generateDeck() {
    this.cards = [];

    for (const color of [Color.Red, Color.Blue, Color.Green, Color.Yellow]) {
      this.cards.push(new UnoCard(color, Value.Zero));

      for (let i = 0; i < 2; i++) {
        this.cards.push(new UnoCard(color, Value.One));
        this.cards.push(new UnoCard(color, Value.Two));
        this.cards.push(new UnoCard(color, Value.Three));
        this.cards.push(new UnoCard(color, Value.Four));
        this.cards.push(new UnoCard(color, Value.Five));
        this.cards.push(new UnoCard(color, Value.Six));
        this.cards.push(new UnoCard(color, Value.Seven));
        this.cards.push(new UnoCard(color, Value.Eight));
        this.cards.push(new UnoCard(color, Value.Nine));
        this.cards.push(new UnoCard(color, Value.DrawTwo));
        this.cards.push(new UnoCard(color, Value.Reverse));
        this.cards.push(new UnoCard(color, Value.Skip));
      }
    }

    for (let i = 0; i < 4; i++) {
      this.cards.push(new UnoCard(Color.Wild, Value.Wild));
      this.cards.push(new UnoCard(Color.Wild, Value.DrawFour));
      this.cards.push(new UnoCard(Color.Wild, Value.ThemedWild));
    }

    assert(this.cards.length === 112);
  }
}
