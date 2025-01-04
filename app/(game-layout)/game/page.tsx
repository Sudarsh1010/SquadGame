"use client";

import { GameGrid } from "@/components/game/game-grid";
import { GameChat } from "@/components/game/game-chat";
import { GameHeader } from "@/components/game/game-header";
import { BackgroundDecoration } from "@/components/game/background-decoration";
import { useEffect, useState } from "react";
import { checkAuth } from "../../actions";

export default function GamePage() {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    checkAuth().then(setToken);
  }, []);

  return (
    <div className="relative h-screen w-full bg-black overflow-hidden">
      <BackgroundDecoration />
      <div className="relative z-10 h-full w-full">
        <GameHeader />
        <div className="flex h-[calc(100vh-4rem)] gap-4 p-6 pt-2 pb-12">
          <div className="w-3/4">
            <GameGrid />
          </div>
          <div className="w-1/4">
            <GameChat authToken={token} />
          </div>
        </div>
      </div>
    </div>
  );
}
