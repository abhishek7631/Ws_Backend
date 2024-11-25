const express = require("express");
const dotenv = require("dotenv");
const connect = require("./config/db");
const userRoute = require("./routes/user");
const blogRoute = require("./routes/blog");
const app = express();

dotenv.config();
connect();

const port = process.env.port;

app.use(express.json());
app.use("/api/user", userRoute);
app.use("/api/blog", blogRoute);

app.listen(port, () => {
  console.log(`server is listin at ${port}`);
});
