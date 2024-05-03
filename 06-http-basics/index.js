const http = require("http");

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "content-type": "text/html" });
//   // res.write("<h1>Welcome !!</h1>");
//   // res.end();
//   res.end("<h1>Welcome !!</h1>");
// });

// server.listen(3000);

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.end("<h1>Home page</h1>");
  } else if (url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.end("<h1>About page</h1>");
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.end("<h1>Page not found</h1>");
  }
});

server.listen(3000);
