const mongoose = require("mongoose");

const connect = mongoose
  .connect("mongodb://localhost:27017/middleware-03")
  .then(() => {
    console.log("database is connected");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = connect;
