const Blog = require("../models/blog");

exports.getBlog = async (req, res) => {
  try {
    const blog = await Blog.find();
    res.status(200).json(blog);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

exports.createBlog = async (req, res) => {
  const { title, content } = req.body;

  try {
    const blog = await Blog.create({ title, content });
    res.status(200).json({ message: "Blog has been Created" });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};
