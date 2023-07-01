const mongoose = require("mongoose");

const menteeSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    language: {
      type: Array,
      default: [],
      required: true,
    },
    education: {
      type: String,
      required: true,
    },
    aspiration: {
      type: String,
      required: true,
    },
    collegeName: {
      type: String,
      required: true,
    },
    currentPeer: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Mentee", menteeSchema);
