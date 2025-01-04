"use client";

import useSocketIOStore, {
  connectSocketIO,
  disconnectSocketIO,
} from "@/store/socket-io";
import { useEffect } from "react";

const SocketIOClient = () => {
  const ioConn = useSocketIOStore.use.io();

  useEffect(() => {
    if (!ioConn) connectSocketIO();
    return () => {
      if (ioConn) disconnectSocketIO();
    };
  }, [ioConn]);

  return null;
};

export default SocketIOClient;
