export class PlayerData {
  public name: string;
  public id: number;
  private cards: string[] = [];

  public get cardsRemaining(): number {
    return this.cards.length;
  }

  public giveCard(card: string) {
    this.cards.push(card);
  }

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}
