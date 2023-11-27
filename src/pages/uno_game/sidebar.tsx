import { PlayerData } from "./playerData";
import { useGameContext, useGameUpdateContext } from "./unoContext";

export function Sidebar() {
  const gameState = useGameContext();
  const gameStateDispatch = useGameUpdateContext();

  const addPlayer = () => {
    gameStateDispatch({
      type: "addPlayer",
      newPlayer: new PlayerData(
        `Player ${gameState.allPlayers.length + 1}`,
        gameState.allPlayers.length,
      ),
    });
  };

  return (
    <>
      <p className="mb-2 text-center text-xl">Players</p>

      <div className="flex flex-col gap-2">
        {gameState.allPlayers.map((player) => {
          return (
            <div
              className="rounded-full bg-slate-300 text-center"
              key={player.id}
            >
              {player.name}: {player.cardsRemaining}
              <br />
              {player.debugDisplayCards()}
            </div>
          );
        })}

        <button
          className="rounded-full bg-slate-400 text-center"
          onClick={addPlayer}
        >
          Add Player
        </button>
      </div>
    </>
  );
}
