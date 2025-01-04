import type { ReactNode } from "react";
import SocketIOClient from "@/components/socket-io-client";

export default function GameLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <SocketIOClient />
      {children}
    </>
  );
}
