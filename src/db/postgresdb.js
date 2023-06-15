const dotenv = require("dotenv");
const pgconn = require("pg");

dotenv.config();

const { Pool } = pgconn;
const isProduction = process.env.NODE_ENV === "production";

const connectionString = process.env.POSTGRES_URL;

const pool = new Pool({
  connectionString: connectionString + "?sslmode=require",
  ssl: isProduction,
});
module.exports = { pool };
