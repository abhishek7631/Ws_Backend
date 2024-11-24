const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connect = require("./config/data");

dotenv.config();

connect();

const port = process.env.port;

app.listen(port, () => {
  console.log(`server is litning on port ${port}`);
});
