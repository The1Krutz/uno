import {
  type PropsWithChildren,
  createContext,
  useContext,
  useReducer,
  type Dispatch,
} from "react";
import { PlayerData } from "./playerData";
import { UnoDeck } from "./unoDeck";

interface UnoGameState {
  allPlayers: PlayerData[];
  currentPlayer: number; // id of player whose turn it is
  deck: UnoDeck; // current state of the uno deck
}

export const initialState: UnoGameState = {
  allPlayers: [
    new PlayerData("Player 1", 0),
    new PlayerData("Player 2", 1),
    new PlayerData("Player 3", 2),
    new PlayerData("Player 4", 3),
  ],
  currentPlayer: 0,
  deck: new UnoDeck(),
};

type UnoGameUpdateAction =
  | { type: "addPlayer"; newPlayer: PlayerData }
  | { type: "changed" }
  | { type: "deleted" };

function gameUpdateReducer(
  gameState: UnoGameState,
  action: UnoGameUpdateAction,
) {
  switch (action.type) {
    case "addPlayer": {
      return {
        ...gameState,
        allPlayers: [...gameState.allPlayers, action.newPlayer],
      };
    }
    default: {
      throw Error("Unknown action: " + action.type);
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
