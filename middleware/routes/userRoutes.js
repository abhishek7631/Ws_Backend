const express = require("express");
const {
  getAllUser,
  register,
  login,
} = require("../controllers/userControllers");

const router = express.Router();

router.get("/", getAllUser);

router.post("/register", register);

router.post("/login", login);

module.exports = router;
