import { getClient } from "./db/db.config.js";

export const insertIntoTable = async () => {
  const client = await getClient();

  // const insertIntoUserTable = `INSERT INTO users (email, password) VALUES ($1, $2) RETURNING id`;
  // const userValues = ["jithinbp007@gmail.com", "jithinbp@123"];
  // const response = await client.query(insertIntoUserTable, userValues);

  // console.log("inserted into user table!");

  const insertIntoTodoTable = `INSERT INTO todos (title, description, user_id, status) VALUES ($1, $2, $3, $4) RETURNING id`;
  const todoValues = [
    "Walking",
    "Brist walking is good for health do it for 30min",
    2,
    false,
  ];
  await client.query(insertIntoTodoTable, todoValues);

  console.log("inserted into Todo table!");
};
