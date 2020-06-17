const mongoose = require("mongoose");
const Schema = mongoose.Schema;

function mapScema() {
  return Schema({
    name: { type: String, required: true },
    location: {
      type: { type: String },
      coordinates: []
    },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }
  })
}
module.exports = mapScema