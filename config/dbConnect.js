require("dotenv").config();
const mysql = require("mysql");

const getConnection = () =>
  mysql.createConnection({
    host: "localhost",
    user: "todouser",
    password: "password",
    database: "todo",
  });

const dbConnection = getConnection();

module.exports = dbConnection;
