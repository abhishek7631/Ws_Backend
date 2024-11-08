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

app.put("/update/:id", (req, res) => {
  const { name, age, status } = req.body;
  const { id } = req.params;
  db.query(
    `update student set name='${name}',age='${age}',status='${status}' where id=${id}`,
    (err, result) => {
      if (err) return res.status(400).json({ message: err });
      res.status(201).json({ message: "profile updated" });
    }
  );
});

app.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  db.query(`delete from student where id=${id}`, (err, result) => {
    if (err) return res.status(400).json({ message: err });
    res.status(201).json({ message: "profile deleted" });
  });
});

app.listen(port, () => {
  console.log(`server is listin at port ${port}`);
});
