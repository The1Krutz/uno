import {
  type PropsWithChildren,
  createContext,
  useContext,
  useReducer,
  type Dispatch,
} from "react";
import { PlayerData } from "./playerData";
import { Color, UnoCard, UnoDeck, Value } from "./unoDeck";
import { UnoMove } from "./unoMove";

interface UnoGameState {
  allPlayers: PlayerData[]; // list of all players
  currentPlayerIndex: number; // index of player whose turn it is
  deck: UnoDeck; // current state of the uno deck
  moveHistory: UnoMove[]; // complete move history of the game, starting with dealer turning over the first card as move 0
  showingCard: UnoCard; // the card showing for the current player to try and match
  isGameStarted: boolean;
}

const initialState: UnoGameState = {
  allPlayers: [
    new PlayerData("Player 1", 0),
    new PlayerData("Player 2", 1),
    new PlayerData("Player 3", 2),
    new PlayerData("Player 4", 3),
  ],
  currentPlayerIndex: 0,
  deck: new UnoDeck(),
  showingCard: new UnoCard(Color.Wild, Value.Wild),
  isGameStarted: false,
  moveHistory: [
    // new UnoMove(86, "Player 4", new UnoCard(Color.Red, Value.Five)),
    // new UnoMove(85, "Player 3", new UnoCard(Color.Red, Value.Five)),
    // new UnoMove(84, "Player 2", new UnoCard(Color.Red, Value.Five)),
    // new UnoMove(83, "Player 1", new UnoCard(Color.Red, Value.Five)),
    // new UnoMove(82, "Player 4", new UnoCard(Color.Red, Value.Five)),
    // new UnoMove(81, "Player 3", new UnoCard(Color.Red, Value.Five)),
    // new UnoMove(80, "Player 2", new UnoCard(Color.Red, Value.Five)),
    // new UnoMove(79, "Player 1", new UnoCard(Color.Red, Value.Five)),
    // new UnoMove(78, "Player 4", new UnoCard(Color.Red, Value.Five)),
    // new UnoMove(77, "Player 3", new UnoCard(Color.Red, Value.Five)),
    // new UnoMove(76, "Player 2", new UnoCard(Color.Red, Value.Five)),
    // new UnoMove(75, "Player 1", new UnoCard(Color.Red, Value.Five)),
    // new UnoMove(74, "Player 4", new UnoCard(Color.Red, Value.Five)),
    // new UnoMove(73, "Player 3", new UnoCard(Color.Red, Value.Five)),
    // new UnoMove(72, "Player 2", new UnoCard(Color.Red, Value.Five)),
    // new UnoMove(71, "Player 1", new UnoCard(Color.Red, Value.Five)),
    // new UnoMove(70, "Player 4", new UnoCard(Color.Red, Value.Five)),
    // new UnoMove(69, "Player 3", new UnoCard(Color.Red, Value.Five)),
    // new UnoMove(68, "Player 2", new UnoCard(Color.Red, Value.Five)),
    // new UnoMove(67, "Player 1", new UnoCard(Color.Red, Value.Five)),
    // new UnoMove(66, "Player 4", new UnoCard(Color.Red, Value.Five)),
    // new UnoMove(65, "Player 3", new UnoCard(Color.Red, Value.Five)),
    // new UnoMove(64, "Player 2", new UnoCard(Color.Red, Value.Five)),
    // new UnoMove(63, "Player 1", new UnoCard(Color.Red, Value.Five)),
    // new UnoMove(62, "Player 4", new UnoCard(Color.Red, Value.Five)),
    // new UnoMove(61, "Player 3", new UnoCard(Color.Red, Value.Five)),
    // new UnoMove(60, "Player 2", new UnoCard(Color.Red, Value.Five)),
    // new UnoMove(59, "Player 1", new UnoCard(Color.Red, Value.Five)),
    // new UnoMove(58, "Player 4", new UnoCard(Color.Red, Value.Five)),
    // new UnoMove(57, "Player 3", new UnoCard(Color.Red, Value.Five)),
    // new UnoMove(56, "Player 2", new UnoCard(Color.Red, Value.Five)),
    // new UnoMove(55, "Player 1", new UnoCard(Color.Red, Value.Five)),
    // new UnoMove(54, "Player 4", new UnoCard(Color.Red, Value.Five)),
    // new UnoMove(53, "Player 3", new UnoCard(Color.Red, Value.Five)),
    // new UnoMove(52, "Player 2", new UnoCard(Color.Red, Value.Five)),
    // new UnoMove(51, "Player 1", new UnoCard(Color.Red, Value.Five)),
    // new UnoMove(50, "Player 4", new UnoCard(Color.Red, Value.Five)),
    // new UnoMove(49, "Player 3", new UnoCard(Color.Red, Value.Five)),
    // new UnoMove(48, "Player 2", new UnoCard(Color.Red, Value.Five)),
    // new UnoMove(47, "Player 1", new UnoCard(Color.Red, Value.Five)),
    // new UnoMove(46, "Player 4", new UnoCard(Color.Red, Value.Five)),
    // new UnoMove(45, "Player 3", new UnoCard(Color.Red, Value.Five)),
    // new UnoMove(44, "Player 2", new UnoCard(Color.Red, Value.Five)),
    // new UnoMove(43, "Player 1", new UnoCard(Color.Red, Value.Five)),
    // new UnoMove(42, "Player 4", new UnoCard(Color.Red, Value.Five)),
    // new UnoMove(41, "Player 3", new UnoCard(Color.Red, Value.Five)),
    // new UnoMove(40, "Player 2", new UnoCard(Color.Red, Value.Five)),
    // new UnoMove(39, "Player 1", new UnoCard(Color.Red, Value.Five)),
    // new UnoMove(38, "Player 4", new UnoCard(Color.Red, Value.Five)),
    // new UnoMove(37, "Player 3", new UnoCard(Color.Red, Value.Five)),
    // new UnoMove(36, "Player 2", new UnoCard(Color.Red, Value.Five)),
    // new UnoMove(35, "Player 1", new UnoCard(Color.Red, Value.Five)),
    // new UnoMove(34, "Player 4", new UnoCard(Color.Red, Value.Five)),
    // new UnoMove(33, "Player 3", new UnoCard(Color.Red, Value.Five)),
    // new UnoMove(32, "Player 2", new UnoCard(Color.Red, Value.Five)),
    // new UnoMove(31, "Player 1", new UnoCard(Color.Red, Value.Five)),
    // new UnoMove(30, "Player 4", new UnoCard(Color.Red, Value.Five)),
    // new UnoMove(29, "Player 3", new UnoCard(Color.Red, Value.Five)),
    // new UnoMove(28, "Player 2", new UnoCard(Color.Red, Value.Five)),
    // new UnoMove(27, "Player 1", new UnoCard(Color.Red, Value.Five)),
    // new UnoMove(26, "Player 4", new UnoCard(Color.Red, Value.Five)),
    // new UnoMove(25, "Player 3", new UnoCard(Color.Red, Value.Five)),
    // new UnoMove(24, "Player 2", new UnoCard(Color.Red, Value.Five)),
    // new UnoMove(23, "Player 1", new UnoCard(Color.Red, Value.Five)),
    // new UnoMove(22, "Player 4", new UnoCard(Color.Red, Value.Five)),
    // new UnoMove(21, "Player 3", new UnoCard(Color.Red, Value.Five)),
    // new UnoMove(20, "Player 2", new UnoCard(Color.Red, Value.Five)),
    // new UnoMove(19, "Player 1", new UnoCard(Color.Red, Value.Five)),
    // new UnoMove(18, "Player 4", new UnoCard(Color.Red, Value.Five)),
    // new UnoMove(17, "Player 3", new UnoCard(Color.Red, Value.Five)),
    // new UnoMove(16, "Player 2", new UnoCard(Color.Red, Value.Five)),
    // new UnoMove(15, "Player 1", new UnoCard(Color.Red, Value.Five)),
    // new UnoMove(14, "Player 4", new UnoCard(Color.Red, Value.Five)),
    // new UnoMove(13, "Player 3", new UnoCard(Color.Red, Value.Five)),
    // new UnoMove(12, "Player 2", new UnoCard(Color.Red, Value.Five)),
    // new UnoMove(11, "Player 1", new UnoCard(Color.Red, Value.Five)),
    new UnoMove(10, "Player 2", new UnoCard(Color.Red, Value.Five)),
    new UnoMove(9, "Player 1", new UnoCard(Color.Red, Value.Five)),
    new UnoMove(8, "Player 4", new UnoCard(Color.Red, Value.Five)),
    new UnoMove(7, "Player 3", new UnoCard(Color.Red, Value.Five)),
    new UnoMove(6, "Player 2", new UnoCard(Color.Red, Value.Five)),
    new UnoMove(5, "Player 1", new UnoCard(Color.Red, Value.Five)),
    new UnoMove(4, "Player 4", new UnoCard(Color.Red, Value.Five)),
    new UnoMove(3, "Player 3", new UnoCard(Color.Red, Value.Five)),
    new UnoMove(2, "Player 2", new UnoCard(Color.Red, Value.Five)),
    new UnoMove(1, "Player 1", new UnoCard(Color.Red, Value.Five)),
    new UnoMove(0, "Dealer", new UnoCard(Color.Red, Value.Five)),
  ],
};

type UnoGameUpdateAction =
  | { type: "addPlayer"; newPlayer: PlayerData }
  | { type: "resetGame" }
  | { type: "startGame" };

function gameUpdateReducer(
  gameState: UnoGameState,
  action: UnoGameUpdateAction,
): UnoGameState {
  switch (action.type) {
    case "addPlayer": {
      return {
        ...gameState,
        allPlayers: [...gameState.allPlayers, action.newPlayer],
      };
    }
    case "resetGame": {
      return {
        ...initialState,
      };
    }
    case "startGame": {

      console.log(gameState)

      const firstPlayerIndex = Math.floor(
        Math.random() * gameState.allPlayers.length,
      );
      const deck = new UnoDeck();

      // deal 7 cards to each player
      for (const player of gameState.allPlayers) {
        const cards = deck.drawCards(7);
        player.giveCards(cards);
      }

      const showingCard = deck.drawCard();

      return {
        ...gameState,
        currentPlayerIndex: firstPlayerIndex,
        deck,
        showingCard,
        isGameStarted: true,
        moveHistory: [new UnoMove(0, "Dealer", showingCard)],
      };
    }
    default: {
      throw Error("Unknown action");
    }
  }
}

const GameContext = createContext({} as UnoGameState);
const GameUpdateContext = createContext({} as Dispatch<UnoGameUpdateAction>);

export function GameState({ children }: PropsWithChildren) {
  const [gameState, dispatch] = useReducer(gameUpdateReducer, initialState);

  return (
    <GameContext.Provider value={gameState}>
      <GameUpdateContext.Provider value={dispatch}>
        {children}
      </GameUpdateContext.Provider>
    </GameContext.Provider>
  );
}

export function useGameContext() {
  return useContext(GameContext);
}

export function useGameUpdateContext() {
  return useContext(GameUpdateContext);
}
