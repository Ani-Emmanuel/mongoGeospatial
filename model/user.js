const mongoose = require("mongoose");

const Schema = mongoose.Schema;

function userSchemas() {
  return Schema({
    fullName: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true }
  },
    { timestamps: { createdAt: "created_at" } }
  );
}

module.exports = userSchemas;
