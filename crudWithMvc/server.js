const express = require("express");
const app = express();
const dotenv = require("dotenv");

dotenv.config();
const port = process.env.port;

const connect = require("./config/db");
connect;

app.listen(port, () => {
  console.log(`server is listin in this ${port}`);
});
