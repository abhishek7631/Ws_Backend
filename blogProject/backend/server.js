const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const connect = require("./config/data");
const userRoute = require("./routes/userRoutes");

dotenv.config();

connect();

const port = process.env.port;

app.use(cors());
app.use(express.json());

app.use("/api", userRoute);

app.listen(port, () => {
  console.log(`server is litning on port ${port}`);
});
