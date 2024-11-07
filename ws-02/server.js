const express = require("express");
const app = express();
require("dotenv").config();

const port = process.env.port;

app.get("/", (req, res) => {
  res.status(200).json({ message: "this is get route" });
});

app.post("/add", (req, res) => {
  res.status(200).json({ message: "this is post route" });
});

app.put("/update", (req, res) => {
  res.status(200).json({ message: "this is put route" });
});

app.delete("/delete", (req, res) => {
  res.status(200).json({ message: "this is delete route" });
});

app.listen(port, () => {
  console.log(`server is listin on port ${port}`);
});
