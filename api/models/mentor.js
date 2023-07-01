const mongoose = require("mongoose");

const mentorSchema = new mongoose.Schema(
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
    skills: {
      type: Array,
      default: [],
      required: true,
    },
    currentPeer: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Mentor", mentorSchema);
