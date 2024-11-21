const mongoose = require("mongoose");

const connect = () => {
  mongoose
    .connect("mongodb://localhost:27017/middleware")
    .then(() => {
      console.log("DATABASE is connected");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connect;
