const User = require("../models/user");
const bcrypt = require("bcrypt");

exports.register = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const hashPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashPassword });
    res.status(200).json({ message: "User Registered Successfully" });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not Found" });

    const compare = await bcrypt.compare(password, user.password);
    if (!compare)
      return res.status(400).json({ message: "Wrong Email or Password" });
    res.status(200).json({ message: "Login Successfull" });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};
