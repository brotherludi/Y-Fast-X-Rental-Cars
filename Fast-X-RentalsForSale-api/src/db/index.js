const pg = require("pg");

const config = {  // connectionString: process.env.DATABASE_URL || "",
  // ssl: process.env.DATABASE_URL ? { rejectUnauthorized: false } : false,
 host: process.env.PGHOST,
 database: process.env.PGDATABASE,
 user: process.env.PGUSER,
 password: process.env.PGPASSWORD,
 port: process.env.PGPORT}

const client = new pg.Client(config);


// const dbConfig = {
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   host: process.env.DB_HOST,
//   port: process.env.DB_PORT,
//   database: process.env.DB_NAME,
// };

client
  .connect()
  .catch(e => console.log(`Error connecting to Postgres server:\n${e}`));

module.exports = client;
