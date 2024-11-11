const express = require("express");
const { createConnection } = require("mysql");
const app = express();
const mysql = require("mysql");

require("dotenv").config();

const port = process.env.port;

app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "crud",
});

app.get("/", (req, res) => {
  const q = `select * from blog`;
  db.query(q, (err, result) => {
    if (err) return res.status(400).json({ message: err });

    res.status(200).json(result);
  });
});

app.post("/add", (req, res) => {
  const { title, description, image } = req.body;
  const q = `insert into blog (title,description,image) values (`${title})`;
});

app.put("/update/:id", (req, res) => {
  res.status(200).json({ message: "This is put rote" });
});

app.delete("/delete/:id", (req, res) => {
  res.status(200).json({ message: "This is delete rote" });
});

app.listen(port, () => {
  console.log(`app is listen in server ${port}`);
});
