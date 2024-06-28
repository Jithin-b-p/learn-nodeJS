import { connectDB } from "./db/db.config.js";

export const createTable = async () => {
  const createUserTableQuery = `CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
  )`;

  const createTodoTableQuery = `CREATE TABLE todos (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT,
    user_id INTEGER REFERENCES users(id),
    status BOOLEAN DEFAULT FALSE 
  )`;

  try {
    const client = await connectDB();
    client.query(createUserTableQuery);
    client.query(createTodoTableQuery);
  } catch (error) {
    console.log("error in querying");
  }
};
