const User = require("../models/user");
const bcrypt = require("bcrypt");

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
    res.status(200).json({ message: "Register Successfull" });
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
      return res.status(400).json({ message: "Wrong email or password" });

    res.status(200).json({ message: "Login successfull" });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};
