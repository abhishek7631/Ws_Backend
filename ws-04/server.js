const express = require("express");
const { createConnection } = require("mysql");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

require("dotenv").config();

const port = process.env.port;

app.use(express.json());
app.use(cors());

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

app.get("/:id", (req, res) => {
  const { id } = req.params;
  const q = `select * from blog where id=${id}`;
  db.query(q, (err, result) => {
    if (err) return res.status(400).json({ message: err });

    res.status(200).json(result);
  });
});

app.post("/add", (req, res) => {
  const { title, description, image } = req.body;
  const q = `insert into blog (title,description,image) values ('${title}','${description}','${image}')`;
  db.query(q, (err, result) => {
    if (err) return res.status(400).json({ message: err });

    res.status(200).json({ message: "blog has been added successfully" });
  });
});

app.put("/update/:id", (req, res) => {
  const { id } = req.params;
  const { title, description, image } = req.body;
  const q = `update blog set title='${title}',description='${description}', '${image}' where id='${id}'`;

  db.query(q, (err, result) => {
    if (err) return res.status(400).json({ message: err });

    res.status(200).json({ message: "blog has been added successfully" });
  });
});

app.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  const q = `delete from blog where id='${id}'`;
  db.query(q, (err, result) => {
    if (err) return res.status(400).json({ message: err });

    res.status(200).json({ message: "blog has been deleted successfully" });
  });
});

app.listen(port, () => {
  console.log(`app is listen in server ${port}`);
});
