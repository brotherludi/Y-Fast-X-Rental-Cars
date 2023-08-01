const pg = require("pg");

const client = new pg.Client({
  connectionString: process.env.DATABASE_URL || "",
  ssl: process.env.DATABASE_URL ? { rejectUnauthorized: false } : false
/*  host: process.env.PGHOST,
 database: process.env.PGDATABASE,
 user: process.env.PGUSER,
 password: process.env.PGPASSWORD,
 port: process.env.PGPORT, */
});
client
  .connect()
  .catch(e => console.log(`Error connecting to Postgres server:\n${e}`));

module.exports = client;
