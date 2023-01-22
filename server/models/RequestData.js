const mongoose = require("mongoose");

const RequestDataSchema = new mongoose.Schema(
  {
    summary: {
      type: String,
    },
    tags: {
      type: Array,
    },
  },
  { timestamps: true }
);

module.exports = Book = mongoose.model("requestData", RequestDataSchema);
