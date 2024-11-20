const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.getAllUser = async (req, res) => {
  try {
    const User = await User.find();
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

exports.register = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const hashPassword = await bcrypt.hash(password, 10);
    const user = await User({ username, email, password: hashPassword });
    await user.save();
    res.status(201).json({ message: "registration successfull" });
  } catch (error) {}
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "user not found" });

    const compare = await bcrypt.compare(password, user.password);

    if (!compare) return res.json({ message: "invalid password" });

    const token = jwt.sign({ id: user._id }, "secretkey");

    res.json({ message: "login successfull" });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};
