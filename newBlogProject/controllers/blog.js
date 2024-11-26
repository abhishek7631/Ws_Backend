const Blog = require("../models/blog");

exports.getBlog = async (req, res) => {
  try {
    const blog = await Blog.find().populate("author", "name -_id");
    res.status(200).json(blog);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

exports.createBlog = async (req, res) => {
  const { title, content } = req.body;

  console.log(req.user.id);
  try {
    const blog = await Blog.create({ title, content, author: req.user.id });
    res.status(200).json({ message: "Blog has been Created" });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};
