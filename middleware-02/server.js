const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connect = require("./config/data");
const userRoute = require("./routes/userRoutes");

connect();

dotenv.config();
const port = process.env.port;

app.use(express.json());
app.use("/api", userRoute);

app.listen(port, () => {
  console.log(`server is running at this port ${port}`);
});
