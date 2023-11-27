import assert from "assert";

export enum Color {
  Red = "R",
  Blue = "B",
  Green = "G",
  Yellow = "Y",
  Wild = "W",
}

export enum Value {
  Zero = "0",
  One = "1",
  Two = "2",
  Three = "3",
  Four = "4",
  Five = "5",
  Six = "6",
  Seven = "7",
  Eight = "8",
  Nine = "9",
  Skip = "Skip",
  Reverse = "Reverse",
  DrawTwo = "+2",
  DrawFour = "+4",
  Wild = "W",
  ThemedWild = "+W",
}

export class UnoCard {
  public color: Color;
  public value: Value;

  constructor(color: Color, value: Value) {
    this.color = color;
    this.value = value;
  }

  public toString() {
    return `${this.color}${this.value}`;
  }
}

export class UnoDeck {
  public cards: UnoCard[] = [];

  public drawCard(): UnoCard {
    const card = this.cards.shift();

    if (!card) {
      throw new Error("No cards left in deck");
    }

    return card;
  }

  public drawCards(amount: number): UnoCard[] {
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

    const colors = [Color.Red, Color.Blue, Color.Green, Color.Yellow];
    const basicValues = [
      Value.One,
      Value.Two,
      Value.Three,
      Value.Four,
      Value.Five,
      Value.Six,
      Value.Seven,
      Value.Eight,
      Value.Nine,
      Value.DrawTwo,
      Value.Reverse,
      Value.Skip,
    ];
    const wildValues = [Value.Wild, Value.DrawFour, Value.ThemedWild];

    for (const color of colors) {
      this.cards.push(new UnoCard(color, Value.Zero));

      for (const value of basicValues) {
        for (let i = 0; i < 2; i++) {
          this.cards.push(new UnoCard(color, value));
        }
      }
    }

    for (const value of wildValues) {
      for (let i = 0; i < 4; i++) {
        this.cards.push(new UnoCard(Color.Wild, value));
      }
    }

    assert(this.cards.length === 112);
  }
}
