import { useGameUpdateContext } from "./unoContext";

export function PlayerControls() {
  const gameStateDispatch = useGameUpdateContext();

  const resetGame = () => {
    gameStateDispatch({
      type: "resetGame",
    });
  };

  const startGame = () => {
    gameStateDispatch({
      type: "startGame",
    });
  };

  return (
    <div className="grid grid-flow-row gap-2">
      <div className="w-fit">player controls</div>
      <button
        className="w-fit rounded-full bg-red-300 px-2"
        onClick={resetGame}
      >
        reset game
      </button>
      <button
        className="w-fit rounded-full bg-red-300 px-2"
        onClick={startGame}
      >
        start game
      </button>
    </div>
  );
}
