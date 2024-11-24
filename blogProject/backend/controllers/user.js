const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.getAllUser = async (req, res) => {
  try {
    const user = await User.find();
    res.status(200).json({ message: user });
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
    res.status(200).json({ message: "Registration Successfull" });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not found" });

    const compare = await bcrypt.compare(password, user.password);

    if (!compare)
      return res.status(400).json({ message: "wrong email or password" });

    const options = {
      id: user._id,
      email: user.email,
      role: user.role,
    };

    const token = jwt.sign(options, process.env.secret_key);

    res.status(400).json({ message: "Login Successfull", token });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};
