import dotenv from "dotenv";
import path from "path";

console.log({ hola: path.join(process.cwd(), ".env") });
dotenv.config({ path: path.join(process.cwd(), ".env") });

export default {
  node_env: process.env.NODE_ENV,
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
};
