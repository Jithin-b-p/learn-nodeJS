import express from "express";
import mongoose from "mongoose";
import product from "./routes/product.route.mjs";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api/products", product);

await mongoose
  .connect("mongodb+srv://<username>:<password>@cluster0.wmbjfwt.mongodb.net/")
  .then(() => console.log("connected!!"))
  .catch((err) => console.log(err));

app.listen(3000, () => console.log("Server start running at port 3000..."));
