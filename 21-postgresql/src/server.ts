import express from "express";
import { getClient } from "./db/db.config.js";
import { createTable } from "./create-table.js";
import { insertIntoTable } from "./insert-into-table.js";
import {
  getAllUsers,
  getTodoFromUserId,
  getUserIdFromEmail,
} from "./get-from-table.js";
import { updateTodo } from "./update-table.js";

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
// createTable();

// getAllUsers();

// const id = await getUserIdFromEmail("jithinbp007@gmail.com");
// getTodoFromUserId(id);

updateTodo(1);
