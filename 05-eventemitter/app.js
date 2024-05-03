const http = require("http");

// All objects that are exposed to events are instances of EventEmitter class. These objects
//  are exposed to eventEmitter.on() fn.
const server = http.createServer();

// using event emitter api
server.on("request", (req, res) => {
  console.log("request recieved !!");
  res.end("Hai");
});

server.listen(3000);
