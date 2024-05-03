const app = require("express")();

/*
app.get
app.put
app.post
app.delete
app.use -> for setting up static and middleware
app.all -> for any http method
*/

app.get("/", (req, res) => {
  res.send("Home page");
});

app.get("/about", (req, res) => {
  res.send("About page");
});

// for any http method with any routes
app.all("*", (req, res) => {
  res.status(404).send("<h1>Resource not found!!</h1>");
});

app.listen(3000);
