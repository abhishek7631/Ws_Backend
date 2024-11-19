const express = require("express");
const { model } = require("mongoose");

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ message: "this is get route" });
});

router.post("/register", (req, res) => {
  res.status(200).json({ message: "this is get route" });
});

router.post("/login", (req, res) => {
  res.status(200).json({ message: "this is get route" });
});

module.exports = router;
