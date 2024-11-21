const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connect = require("./config/data");

connect();

dotenv.config();
const port = process.env.port;

app.listen(port, () => {
  console.log(`server is running at this port ${port}`);
});
