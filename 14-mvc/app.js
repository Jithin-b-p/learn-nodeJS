const express = require("express");
const users = require("./routes/users");
const app = express();

app.use(express.json());

app.use("/api/users", users);

app.listen(3000, () => console.log("server start running on port 3000.."));
