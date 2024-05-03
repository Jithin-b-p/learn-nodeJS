const express = require("express");
const { users } = require("./data");

const app = express();

app.get("/api/users/query", (req, res) => {
  const { limit, search } = req.query;

  let sortedUsers = [...users];
  // sending limited number of users
  if (limit) {
    sortedUsers = users.slice(0, Number(limit));
  }

  // sending users starting with specified value.
  if (search) {
    sortedUsers = users.filter((user) =>
      user.name.toLowerCase().startsWith(search)
    );
  }

  if (sortedUsers.length < 1) {
    return res.status(200).json({ success: true, data: [] });
  }

  return res.status(200).json(sortedUsers);
});

app.listen(3000, () => console.log("Server running on port 3000..."));
