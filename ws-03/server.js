const express = require("express");
const app = express();
const mysql = require("mysql");

require("dotenv").config();

const port = process.env.port;

app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "b35",
});

app.get("/", (req, res) => {
  db.query(`select * from b35`, (err, result) => {
    if (err) return res.status(400).json({ message: err });

    res.status(200).json(result);
  });
});

app.post("/add", (req, res) => {
  const { name, age, status } = req.body;
  db.query(
    `insert into student (name,age,status) values ('${name}','${age}','${status}')`,
    (err, result) => {
      if (err) return res.status(400).json({ message: err });
      res.status(201).json({ message: "profile added" });
    }
  );
});

app.listen(port, () => {
  console.log(`server is listin at port ${port}`);
});
