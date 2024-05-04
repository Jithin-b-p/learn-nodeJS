const express = require("express");
const logger = require("./logger");
const authorize = require("./authorize");
const app = express();

// req  => middleware => res

/* 
==========================================
middleware -> our own/ express/ thirdparty

middleware provided by express
app.use(express.static("./public"));

morgan is a third party middleware used as logger
==========================================
*/
// app.get("/", logger, (req, res) => {
//   res.send("Home page");
// });

// app.get("/about", logger, (req, res) => {
//   res.send("about page");
// });

// app.use("/api", logger);

// multiple middleware
// app.use("/api", [logger, authorize]);

app.get("/", (req, res) => {
  res.send("Home page");
});

app.get("/about", (req, res) => {
  res.send("about page");
});

app.get("/api/users", [logger, authorize], (req, res) => {
  res.send(req.user);
});

app.get("/api/items", (req, res) => {
  res.send("items");
});

app.listen(3000, () => console.log("server is listening at port 3000..."));
