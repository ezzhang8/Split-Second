
import socketClient  from "socket.io-client";

export const server = "http://localhost:9000/"
export const socket = socketClient(server);


