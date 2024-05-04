const express = require("express");

const app = express();

// static assets
app.use(express.static("./public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post("/api/user", (req, res) => {
  console.log(req.body);

  const { name } = req.body;
  if (name) {
    return res.status(201).json({ success: "true", name: name });
  }

  res
    .status(400)
    .json({ success: "false", message: "please provide a name!!" });
});

app.post("/login", (req, res) => {
  const { email } = req.body;
  if (email) {
    return res.send("Login success");
  }

  res.status(401).send("please provide valid email!!");
});
app.listen(3000, () => console.log("server starts running at port 3000..."));
