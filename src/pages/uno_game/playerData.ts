import { type UnoCard } from "./unoDeck";

export class PlayerData {
  public name: string;
  public id: number;
  private cards: UnoCard[] = [];

  public get cardsRemaining(): number {
    return this.cards.length;
  }

  public giveCard(card: UnoCard) {
    this.cards.push(card);
  }

  public giveCards(cards: UnoCard[]) {
    this.cards.push(...cards);
  }

  public debugDisplayCards(): string {
    return this.cards.map((card) => card.toString()).join(", ");
  }

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}
