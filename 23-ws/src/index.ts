import express from "express";
import { WebSocketServer, WebSocket } from "ws";

/*
===================================
websocket with express
===================================
*/

const app = express();

const httpServer = app.listen(8080, () => {
  console.log("server connected to port 8080!!");
});

const wss = new WebSocketServer({ server: httpServer });

wss.on("connection", (ws) => {
  ws.on("error", (error) => {
    console.log(error);
  });

  ws.on("message", (data, isBinary) => {
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(data, { binary: isBinary });
      }
    });
  });

  ws.send("connection established from the server!!");
});
