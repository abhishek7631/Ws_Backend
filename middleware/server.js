const express = require("express");
const dotenv = require("dotenv");
const connect = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const app = express();

connect();
dotenv.config();

const port = process.env.port;

app.use(express.json());
app.use("/api", userRoutes);

app.listen(port, () => {
  console.log(`server is running at port ${port}`);
});
