const express = require("express");
const { getBlog, createBlog } = require("../controllers/blog");
const { auth } = require("../middleware/auth");

const router = express.Router();

router.get("/", getBlog);

router.post("/create", auth, createBlog);

module.exports = router;
