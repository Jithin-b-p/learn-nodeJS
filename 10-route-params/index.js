const express = require("express");
const { users } = require("./data.js");

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Home page</h1> <a href='/api/users'>users</a>");
});

app.get("/api/users", (req, res) => {
  res.json(users);
});

app.get("/api/users/:id", (req, res) => {
  const { id } = req.params;

  const user = users.filter((user) => user.id === Number(id));

  if (!user.length) {
    return res.status(404).send("User not found!!");
  }
  return res.json(user);
});

app.listen(3000, () => console.log("Server runs on port 3000..."));
