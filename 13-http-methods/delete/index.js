const express = require("express");
const { users } = require("./data");

const app = express();

app.delete("/api/users/:id", (req, res) => {
  const { id } = req.params;

  const user = users.find((user) => user.id === Number(id));

  if (!user) {
    return res.status(404).json({ status: "failure", message: "invalid ID" });
  }

  const newUsers = users.filter((user) => user.id !== Number(id));

  res.send({ status: "success", data: newUsers });
});

app.listen(3000, () => console.log("server start running at port 3000..."));
