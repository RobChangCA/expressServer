require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
//routes
const todoRoutes = require("../v1/routes/todoRoutes");
const userRoutes = require("../v1/routes/userRoutes");

const app = express();

app.use(bodyParser.json());
todoRoutes(app);
userRoutes(app);
module.exports = app;
