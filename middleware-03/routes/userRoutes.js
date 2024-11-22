const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ message: "This is get route" });
});

router.post("/register", (req, res) => {
  res.status(200).json({ message: "This is register route" });
});

router.post("/login", (req, res) => {
  res.status(200).json({ message: "This is login route" });
});

module.exports = router;
