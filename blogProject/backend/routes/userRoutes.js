const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  try {
    res.status(200).json({ message: "This is get Route" });
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

router.post("/register", (req, res) => {
  try {
    res.status(200).json({ message: "This is Register Route" });
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

router.post("/login", (req, res) => {
  try {
    res.status(200).json({ message: "This is Login route" });
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

module.exports = router;
