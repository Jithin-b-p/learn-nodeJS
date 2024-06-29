import { getClient } from "./db/db.config.js";

export const getAllUsers = async () => {
  const client = await getClient();

  const getAllUsersQuery = `SELECT * FROM users`;

  const { rows: users } = await client.query(getAllUsersQuery);

  for (const user of users) {
    console.log(`User id: ${user.id}, email: ${user.email}`);
  }
};

export const getUserIdFromEmail = async (email: string) => {
  const client = await getClient();

  const getUserQuery = `SELECT * FROM users WHERE email = $1`;

  const { rows } = await client.query(getUserQuery, [email]);

  console.log(`Id is: ${rows[0].id}`);
  return rows[0].id;
};

export const getTodoFromUserId = async (userId: number) => {
  const client = await getClient();
  const getTodoQuery = `SELECT * FROM todos WHERE user_id = $1`;

  const { rows } = await client.query(getTodoQuery, [userId]);

  for (const todo of rows) {
    console.log(
      `todo details are => title: ${todo.title}, description: ${todo.description}`
    );
  }
};
