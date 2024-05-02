const http = require("http");

const server = http.createServer((req, res) => {
  console.log("req catched");
  res.end("Hello world!");
});

server.listen(5000, () => console.log("Server listening at port 5000..."));
