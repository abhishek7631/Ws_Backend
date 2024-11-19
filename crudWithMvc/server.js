const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connect = require("./config/db");
const route = require("./routes/route");

connect;
dotenv.config();
const port = process.env.port;

app.use(express.json());

app.use("/api/", route);

app.listen(port, () => {
  console.log(`server is listin in this ${port}`);
});
