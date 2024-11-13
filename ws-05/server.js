const express = require("express");
const { default: mongoose } = require("mongoose");
const cors = require("cors");

const app = express();

require("dotenv").config();

const port = process.env.port;

app.use(express.json());
app.use(cors());

mongoose
  .connect("mongodb://localhost:27017/student")
  .then(() => {
    console.log("database has been connected");
  })
  .catch((err) => {
    console.log(err);
  });

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const Student = mongoose.model("Student", studentSchema);

app.get("/", async (req, res) => {
  try {
    const student = await Student.find();
    res.status(200).json({ student });
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const student = await Student.create({ name, email, password });
    res.status(201).json({ message: "Registration successfull" });
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const student = await Student.findOne({ email });

    if (password == student.password) {
      return res.status(200).json({ message: "login successfull" });
    } else {
      return res.status(400).json({ message: "Wrong password or email" });
    }
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

app.listen(port, () => {
  console.log(`server is listining on port ${port}`);
});
