const express = require("express");
const users = require("./data");

const app = express();
app.use(express.json());

app.put("/api/users/:id", (req, res) => {
  const { name } = req.body;
  const { id } = req.params;

  if (!id) {
    return res
      .status(401)
      .json({ status: "failed", message: "provide the id!!" });
  }

  const user = users.filter((user) => user.id === Number(id));
  if (!user.length) {
    return res.status(401).json({ status: "failed", message: "Invalid ID" });
  }

  const updatedUser = users.map((user) => {
    if (user.id === Number(id)) {
      user.name = name;
    }

    return user;
  });

  return res.status(201).json({ status: "success", data: updatedUser });
});

app.listen(3000, () => console.log("Server up and running at port 3000.."));
