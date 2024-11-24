const express = require("express");
const { getAllUser, register, login } = require("../controllers/user");
const { auth, isAdmin, isStudent } = require("../middleware/auth");

const router = express.Router();

router.get("/", auth, getAllUser);

router.post("/register", register);

router.post("/login", login);

router.get("/student", auth, isStudent, (req, res) => {
  res.status(200).json({ message: "This is only Students Route" });
});

router.get("/admin", auth, isAdmin, (req, res) => {
  res.status(200).json({ message: "This is only Admin Route" });
});

module.exports = router;
