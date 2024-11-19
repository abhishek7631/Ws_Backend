const express = require("express");
const { getAlluser, register, login } = require("../controllers/user");

const router = express.Router();

router.get("/", getAlluser);

router.post("/register", register);

router.post("/login", login);

module.exports = router;
