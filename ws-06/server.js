const express = require("express");
const mongoose = require("mongoose");
const dontev = require("dotenv");
const app = express();

dontev.config();
app.use(express.json());
const port = process.env.port;

mongoose
  .connect(process.env.db)
  .then(() => {
    console.log("database connected");
  })
  .catch((err) => {
    console.log(err);
  });

const newSchema = new mongoose.Schema({
  title: { type: String, required: true },
  para: { type: String, required: true },
});

const Blog = mongoose.model("Blog", newSchema);

app.get("/", async (req, res) => {
  try {
    const blog = await Blog.find();
    res.status(200).json(blog);
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

app.post("/add", async (req, res) => {
  const { title, para } = req.body;
  try {
    const blog = Blog({ title, para });
    await blog.save();
    res.status(200).json({ message: "Blog has been created" });
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

app.listen(port, () => {
  console.log(`server is listining on port ${port}`);
});
