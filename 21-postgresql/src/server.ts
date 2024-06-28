import express from "express";
import { connectDB } from "./db/db.config.js";
import { createTable } from "./create-table.js";

const app = express();

// const start = async () => {
//   try {
//     const client = await connectDB();
//     app.listen(3000, () => console.log("Server start running..."));
//   } catch (error) {
//     console.log("db error");
//   }
// };

// start();
createTable();
