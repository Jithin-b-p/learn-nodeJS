import { getClient } from "../db/db.config.js";

export const getDetailsFromTables = async (id: number) => {
  const client = await getClient();

  const query = `SELECT users.email, todos.title, todos.description, todos.status FROM users LEFT JOIN todos ON users.id = todos.id WHERE users.id = $1`;
  const { rows } = await client.query(query, [id]);

  console.log(`details:
  email: ${rows[0].email},
  title: ${rows[0].title},
  description: ${rows[0].description},
  status: ${rows[0].status}
  `);
};
