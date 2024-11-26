const jwt = require("jsonwebtoken");

exports.auth = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    if (!token) return res.status(400).json({ message: "token missing" });

    decode = jwt.verify(token, process.env.secret_key);

    req.user = decode;
    next();
  } catch (error) {
    res.status(400).json({ message: error });
  }
};
