const mongoose = require("mongoose");
const userSchema = require("./user");
const mapSchema = require("./map");

module.exports = {
  User: mongoose.model("User", userSchema()),
  Map: mongoose.model("Map", mapSchema()),
}