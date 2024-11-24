const jwt = require("jsonwebtoken");

exports.auth = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];

    if (!token) return res.status(400).json({ message: "token is missing" });

    const decode = jwt.verify(token, process.env.secret_key);

    req.user = decode;

    next();
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

exports.isAdmin = (req, res, next) => {
  try {
    if (req.user !== "Admin")
      return res.status(400).json({ message: "You are unauthorized person" });
    next();
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

exports.isStudent = (req, res, next) => {
  try {
    if (req.user !== "Student")
      return res.status(400).json({ message: "You are unauthorized person" });
    next();
  } catch (error) {
    res.status(400).json({ message: error });
  }
};
