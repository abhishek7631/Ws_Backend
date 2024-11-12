const express = require("express");
const app = express();

require("dotenv").config();

const port = process.env.port;

app.listen(port, () => {
  console.log(`server is running this port ${port}`);
});
