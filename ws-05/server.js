const express = require("express");

const app = express();

require("dotenv").config();

const port = process.env.port;

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

app.put("/update", (re, res) => {
  try {
    res.status(200).json({ message: "this is upadte route" });
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

app.delete("/delete", (req, res) => {
  try {
    res.status(200).json({ message: "this is delete route" });
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

app.listen(port, () => {
  console.log(`server is listining on port ${port}`);
});
