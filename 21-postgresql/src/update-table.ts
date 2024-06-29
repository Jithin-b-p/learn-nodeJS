import { getClient } from "./db/db.config.js";

export const updateTodo = async (todoId: number) => {
  const client = await getClient();
  const updateQuery = `UPDATE todos SET status = $1 WHERE id = $2`;

  await client.query(updateQuery, [true, todoId]);

  console.log(`update the todo with id:  ${todoId}`);
};
