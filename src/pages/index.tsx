import Head from "next/head";
import { PlayArea } from "./uno_game/playArea";
import { PlayerControls } from "./uno_game/playerControls";
import { Sidebar } from "./uno_game/sidebar";
import { useState } from "react";
import { createContext } from "react";
import { PlayerData } from "./uno_game/playerData";

interface UnoContext {
  allPlayers: PlayerData[];
  currentPlayer: number; // id of player whose turn it is
  deck: string[]; // current state of the uno deck
}

export const GameContext = createContext<UnoContext>({
  allPlayers: [],
  currentPlayer: 0,
  deck: [],
});

export default function Home() {
  const [allPlayers, setAllPlayers] = useState<PlayerData[]>([
    new PlayerData("Player 1", 1),
    new PlayerData("Player 2", 2),
    new PlayerData("Player 3", 3),
    new PlayerData("Player 4", 4),
  ]);
  const [currentPlayer, setCurrentPlayer] = useState<number>(0);

  const gameContext = {
    allPlayers,
    currentPlayer,
    deck: [],
  };

  return (
    <>
      <Head>
        <title>Uno</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <GameContext.Provider value={gameContext}>
          <div className="container grid min-h-screen grid-cols-4 grid-rows-4 gap-4 ">
            <div className="col-start-1 row-span-4 row-start-1 p-2 bg-red-300">
              <Sidebar />
            </div>

            <div className="col-span-3 col-start-2 row-span-3 row-start-1 p-2 bg-yellow-300">
              <PlayArea />
            </div>

            <div className="col-span-3 col-start-2 row-start-4 p-2 bg-green-300">
              <PlayerControls />
            </div>
          </div>
        </GameContext.Provider>
      </main>
    </>
  );
}
