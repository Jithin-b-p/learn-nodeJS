import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8000 });

wss.on("connection", (socket) => {
  socket.on("message", (msg) => {
    if (msg.toString() === "hai") {
      socket.send("Hello!!");
    }
  });
});
