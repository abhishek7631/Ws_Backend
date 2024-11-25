const express = require("express");
const { getBlog, createBlog } = require("../controllers/blog");

const router = express.Router();

router.get("/", getBlog);

router.post("/create", createBlog);

module.exports = router;
