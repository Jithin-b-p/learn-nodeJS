import { getClient } from "./db/db.config.js";

export const deleteFromTodo = async (id: number) => {
  const client = await getClient();
  const deleteQuery = `DELETE FROM todos WHERE id = $1`;

  await client.query(deleteQuery, [id]);

  console.log(`deleted todo with id: ${id}`);
};
