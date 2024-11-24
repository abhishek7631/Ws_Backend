const express = require("express");
const { getAllUser, register, login } = require("../controllers/user");
const { auth } = require("../middleware/auth");

const router = express.Router();

router.get("/", auth, getAllUser);

router.post("/register", register);

router.post("/login", login);

module.exports = router;
