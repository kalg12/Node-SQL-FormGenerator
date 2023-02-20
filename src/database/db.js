const mysql = require("mysql2");
const {
  dbHost,
  dbPort,
  dbUser,
  dbPassword,
  dbName,
} = require("../configs/index");

const connection = mysql.createPool({
  host: dbHost,
  port: dbPort,
  user: dbUser,
  password: dbPassword,
  database: dbName,
});

module.exports = connection;
