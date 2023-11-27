import { useContext } from "react";
import { GameContext } from "../index";

export function Sidebar() {
  const gameState = useContext(GameContext);

  return (
    <>
      <p className="text-center text-xl mb-2">Players</p>

      <div className="flex flex-col gap-2">
        {gameState.allPlayers.map((player) => {
          return (
            <div
              className="rounded-full bg-slate-300 text-center"
              key={player.id}
            >
              {player.name}: {player.cardsRemaining}
            </div>
          );
        })}
      </div>
    </>
  );
}
