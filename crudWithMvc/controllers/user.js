const User = require("../models/user");

exports.getAlluser = async (req, res) => {
  try {
    const user = await User.find();
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

exports.register = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const user = await User.create({ username, email, password });
    res.status(200).json({ message: "register successfull" });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = User.findOne({ email });

    if (password == user.password) {
      return res.status(200).json({ message: "login successfull" });
    } else {
      return res.status(400).json({ message: "wrong email or password" });
    }
  } catch (error) {
    res.status(400).json({ message: error });
  }
};
