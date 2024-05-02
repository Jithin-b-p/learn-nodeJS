const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to home page");
  } else if (req.url === "/about") {
    res.end("This is the about page!!");
  } else {
    res.end(`<h1>404 Error</h1>
    <p>The page not present</p>
    <a href="/">Go to home page</a>`);
  }
});

server.listen(3000);
