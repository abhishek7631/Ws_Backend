const express = require("express");
const {
  getAllUser,
  register,
  login,
  auth,
} = require("../controllers/userControllers");

const router = express.Router();

router.get("/", getAllUser);

router.post("/register", register);

router.post("/login", login);

router.post("/auth", auth);

module.exports = router;
