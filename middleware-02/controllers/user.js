const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.getAllUser = async (req, res) => {
  try {
    res.status(200).json({ message: "This is get route" });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

exports.register = async (req, res) => {
  const { username, email, password, role } = req.body;
  try {
    const hashPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      username,
      email,
      password: hashPassword,
      role,
    });
    res.status(200).json({ message: "registration successfull" });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });

    if (!user) return res.status(400).json({ message: "user not found" });

    const compare = await bcrypt.compare(password, user.password);

    if (!compare)
      return res.status(400).json({ message: "email or password wrong" });

    res.status(200).json({ message: "login successfull" });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};
