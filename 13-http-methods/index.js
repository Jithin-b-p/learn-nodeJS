const express = require("express");
const users = require("./data");

const app = express();

// get method -> read data
app.get("/api/users", (req, res) => {
  res.send(users);
});

//post method -> insert data
app.listen(3000, () => console.log("Server starts running at port 3000.."));
