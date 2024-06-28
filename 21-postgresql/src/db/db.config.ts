import pg from "pg";

export const connectDB = async () => {
  const url = process.env.PG_URL;
  const client = new pg.Client(url);
  await client.connect();
  return client;
};
