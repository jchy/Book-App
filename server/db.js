const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "2611",
  host: "localhost",
  port: 5432,
  database: "bookstore",
});

module.exports = pool;
