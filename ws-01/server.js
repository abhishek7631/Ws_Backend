const express = require("express");
const app = express();

require("dotenv").config();

console.log(process);
const port = process.env.port;

app.get("/", (req, res) => {
  res.send(`<h1>Welcome to Backend</h1>`);
});

app.post("/add", (req, res) => {
  res.send(`this is add route`);
});

app.put("/update", (req, res) => {
  res.send(`this is upadte route`);
});

app.delete("/delete", (req, res) => {
  res.send(`this is delete route`);
});

app.listen(port, () => {
  console.log(`app is listing in port ${port}`);
});
