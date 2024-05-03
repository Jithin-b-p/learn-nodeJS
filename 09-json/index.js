const express = require("express");
const { users } = require("./data.js");

const app = express();

app.get("/", (req, res) => {
  //This method will sends a response, that is the parameter converted to JSON string.
  res.json(users);
});

app.listen(3000, () => console.log("server is running on port 3000..."));
