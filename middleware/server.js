const express = require("express");
const dotenv = require("dotenv");
const connect = require("./config/db");
const app = express();

connect();
dotenv.config();

const port = process.env.port;

app.listen(() => {
  console.log(`server is running at port ${port}`);
});
