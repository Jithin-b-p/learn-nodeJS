const express = require("express");
const path = require("path");
const app = express();

// specifying static folder.
// with express we can simple dump the static file in a common folder
// and specify it to express. This is easy when compare to what we have
// done with pure node code.
app.use(express.static("./public"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./public/index.html"));
});

app.listen(3000, () =>
  console.log("Server is up and running on port 3000.....")
);
