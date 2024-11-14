const express = require("express");
const mongoose = require("mongoose");
const dontev = require("dotenv");
const app = express();

dontev.config();

const port = process.env.port;

mongoose
  .connect(process.env.db)
  .then(() => {
    console.log("database connected");
  })
  .catch((err) => {
    console.log(err);
  });

const newSchema = new mongoose.Schema({
  title: { type: String, required: true },
  para: { type: String, required: true },
});

const Blog = mongoose.model("Blog", newSchema);

app.listen(port, () => {
  console.log(`server is listining on port ${port}`);
});
