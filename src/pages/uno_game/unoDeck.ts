import assert from "assert";

export enum Color {
  Red = "Red",
  Blue = "Blue",
  Green = "Green",
  Yellow = "Yellow",
  Wild = "Wild",
}

export enum Value {
  Zero = "Zero",
  One = "One",
  Two = "Two",
  Three = "Three",
  Four = "Four",
  Five = "Five",
  Six = "Six",
  Seven = "Seven",
  Eight = "Eight",
  Nine = "Nine",
  Skip = "Skip",
  Reverse = "Reverse",
  DrawTwo = "DrawTwo",
  DrawFour = "DrawFour",
  Wild = "Wild",
  ThemedWild = "ThemedWild",
}

export class UnoCard {
  public color: Color;
  public value: Value;

  constructor(color: Color, value: Value) {
    this.color = color;
    this.value = value;
  }

  public toString() {
    return `${this.color} ${this.value}`;
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

  public toString() {
    return this.cards.map((card) => card.toString());
  }

  constructor() {
    this.generateDeck();

    this.shuffle();
    this.shuffle();
    this.shuffle();
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
