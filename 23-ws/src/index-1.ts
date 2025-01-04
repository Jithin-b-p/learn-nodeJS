import http from "http";
import { WebSocketServer, WebSocket } from "ws";

/*
======================================
WEBSOCKET with nodejs
======================================
*/

//1 -> we need to set up and http server. Later to be used as a websocket server
const server = http.createServer((req, res) => {
  console.log(`${new Date()} Request received from ${req.url}`);
  res.end("hi");
});

//3-> creating a wss using the http server. This websocket server will listen for any incoming websocket connection from the client.(upgrading from http to websocket)
const wss = new WebSocketServer({ server });

//This event listener will be called whenever a new websocket client connects to the server
wss.on("connection", (ws) => {
  //This will listen to any error event in the ws
  ws.on("error", (err) => {
    console.log(err);
  });

  //listening to the message event in the ws(This event get triggered when server recieves a message from the client)
  //The data part can be text or binary data. isbinary denotes whether its text or binary.
  ws.on("message", (data, isbinary) => {
    //this clients contains the clients that are established connection with ws server
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(data, { binary: isbinary });
      }
    });
  });

  //Whenever a connect is established with client, server sends this message!!
  ws.send("Message from the server !!");
});

//2 -> getting the server listen to port 8080
server.listen(8080, () => {
  console.log(`${new Date()} listening to port 8080!!`);
});
