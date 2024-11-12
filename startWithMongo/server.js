const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();

require("dotenv").config();

const port = process.env.port;

mongoose
  .connect("mongodb://localhost:27017/crud")
  .then(() => {
    console.log("database has been connected");
  })
  .catch((err) => {
    console.log(err);
  });

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);

app.use(express.json());

app.post("/register", (req, res) => {
  const { name, email, password } = req.body;
  try {
    const user = User.create({ name, email, password });
    res.status(201).json({ message: "Registration successfull" });
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

app.post("/login", (req, res) => {
  console.log("This is login route");
});

app.listen(port, () => {
  console.log(`server is running this port ${port}`);
});
