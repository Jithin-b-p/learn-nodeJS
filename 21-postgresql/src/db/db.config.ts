import pg from "pg";

export const getClient = async () => {
  const url = process.env.PG_URL;
  const client = new pg.Client(url);
  await client.connect();
  return client;
};
