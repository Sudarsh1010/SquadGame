import { create } from "zustand";
import io, { type Socket } from "socket.io-client";

import { createSelectors } from "../zustand";

export interface SocketIOStateInterface {
  io: Socket | null;
  connected: boolean;
  connecting: boolean;
  error: string | null;

  connect: () => void;
  disconnect: () => void;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  emit: (content: { action: string; data: any }) => void;
  setError: (error: string | null) => void;
}

const _useSocketIOStore = create<SocketIOStateInterface>()((set, get) => ({
  io: null,
  connected: false,
  connecting: false,
  error: null,

  connect: () => {
    let ioConn = get().io;
    if (ioConn && ioConn?.active) {
      console.log("Socket is already connected");
      return;
    }

    set({ connecting: true, error: null });
    ioConn = io("ws://localhost:3001", {
      transports: ["websocket"],
      autoConnect: true, // Prevent auto-connection
      reconnection: true,
      reconnectionAttempts: 5,
      reconnectionDelay: 1000,
    });

    ioConn.on("connect_error", (err) => {
      console.log(err);
      console.log(err.message);
    });

    ioConn.on("connect", () => {
      set({ io: ioConn, connected: true, connecting: false });
      console.log(ioConn.id, "socket-io connection opened");
    });

    ioConn.on("disconnect", () => {
      set({ io: null, connected: false, connecting: false });
      console.log("socket-io connection closed");
    });

    set({ io: ioConn });
  },

  disconnect: () => {
    const { io: ioConn } = get();
    if (ioConn) {
      ioConn.close();
      set({ io: null, connected: false, connecting: false });
      console.log("WebSocket connection closed");
    }
  },

  emit: (content) => {
    const { io: ioConn, connected } = get();
    if (ioConn && connected) {
      ioConn.emit(content.action, JSON.stringify(content.data));
      console.log("Message sent:", content);
    } else {
      console.error("WebSocket is not connected.");
      set({ error: "WebSocket is not connected" });
    }
  },

  setError: (error: string | null) => set({ error }),
}));

export const useSocketIOStore = createSelectors(_useSocketIOStore);

export const connectSocketIO = _useSocketIOStore.getState().connect;
export const emitIOMessage = _useSocketIOStore.getState().emit;
export const disconnectSocketIO = _useSocketIOStore.getState().disconnect;
export const setSocketIOError = _useSocketIOStore.getState().setError;
export const getSocketIOConn = () => _useSocketIOStore.getState().io;

export default useSocketIOStore;
