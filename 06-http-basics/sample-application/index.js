const http = require("http");
const { readFileSync } = require("fs");

const homepage = readFileSync("./content/index.html");
const homepageStyles = readFileSync("./content/styles.css");
const homepageFunctionality = readFileSync("./content/app.js");

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.end(homepage);
  } else if (url === "/styles.css") {
    res.writeHead(200, { "content-type": "text/css" });
    res.end(homepageStyles);
  } else if (url === "/app.js") {
    res.writeHead(200, { "content-type": "text/javascript" });
    res.end(homepageFunctionality);
  }
});

server.listen(3000);
