import { useGameContext } from "./unoContext";

export function PlayArea() {
  const gameState = useGameContext();

  return (
    <div className="flex h-full flex-row gap-2">
      <div className="h-full w-4/6 bg-lime-300">game info display area</div>
      <div className="h-full w-2/6 bg-lime-200 overflow-y-scroll max-h-full">
        <p className="mb-2 text-center text-xl sticky top-0">Move History</p>

        <div className="flex flex-col gap-1 px-1">
          {gameState.moveHistory.map((move) => {
            return (
              <a
                className="rounded-full bg-slate-200 ps-2 text-left text-xs"
                key={move.turnNumber}
              >
                {move.turnNumber}: {move.playerName} played {move.playedCard.toString()}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
