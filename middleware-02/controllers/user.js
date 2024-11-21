const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.getAllUser = async (req, res) => {
  try {
    res.status(200).json({ message: "This is get route" });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

exports.register = async (req, res) => {
  try {
    res.status(200).json({ message: "This is register route" });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

exports.login = async (req, res) => {
  try {
    res.status(200).json({ message: "This is login Route" });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};
