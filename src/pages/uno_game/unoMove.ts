import { type UnoCard } from "./unoDeck";

export class UnoMove {
  public turnNumber: number;
  public playerName: string;
  public playedCard: UnoCard;

  constructor(
    turnNumber: number,
    playerName: string,
    playedCard: UnoCard,
  ) {
    this.turnNumber = turnNumber;
    this.playerName = playerName;
    this.playedCard = playedCard;
  }
}
