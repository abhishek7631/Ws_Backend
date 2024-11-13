const express = require("express");
const { default: mongoose } = require("mongoose");

const app = express();

require("dotenv").config();

const port = process.env.port;

mongoose
  .connect("mongodb://localhost:27017/wsDemo")
  .then(() => {
    console.log("database has been connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  try {
    res.status(200).json({ message: "running get route" });
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

app.post("/add", (req, res) => {
  try {
    res.status(200).json({ message: "this is add route" });
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

app.put("/update/:id", (re, res) => {
  try {
    res.status(200).json({ message: "this is upadte route" });
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

app.delete("/delete/:id", (req, res) => {
  try {
    res.status(200).json({ message: "this is delete route" });
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

app.listen(port, () => {
  console.log(`server is listining on port ${port}`);
});
