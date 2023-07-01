const mongoose = require("mongoose");

const aspModuleSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    modules: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("AspModuleRel", aspModuleSchema);
