const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bcrypt = require("bcrypt");

app.use(express.json());

dotenv.config();

const port = process.env.port;

mongoose
  .connect("mongodb://localhost:27017/add")
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log(err);
  });

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);

app.post("/register", async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const hashPassword = await bcrypt.hash(password, 10);

    const user = await User.create({ username, email, password: hashPassword });
    res.status(200).json({ message: "Registration Successfull" });
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "wrong credentials" });

    const compare = await bcrypt.compare(password, user.password);

    if (!compare) return res.status(400).json({ message: "wrong password" });

    res.status(200).json({ message: "Login Successfull" });
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

app.listen(port, () => {
  console.log(`server is running at port ${port}`);
});
