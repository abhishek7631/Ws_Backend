const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const app = express();

mongoose
  .connect("mongodb://localhost:27017/biodata")
  .then(() => console.log("database connected"))
  .catch((err) => {
    console.log(err);
  });

const biodataSchema = mongoose.Schema({
  name: { type: String, required: true },
  age: { type: String, required: true },
  photo: String,
});

const Bio = mongoose.model("Bio", biodataSchema);

const port = 4000;

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "./uploads"),
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`),
});

const upload = multer({ storage });

app.post("/uploads", upload.single("photo"), async (req, res) => {
  const { name, age } = req.body;
  const photo = req.file.path;

  const user = await Bio.create({ name, age, photo });

  res.status(200).json({ message: "photo has been uploaded successfully" });
});

app.listen(port, () => {
  console.log(`server is listining on ${port}`);
});
