const mongoose = require("mongoose");

const RequestDataSchema = new mongoose.Schema(
  {
    description: {
      type: String,
    },
    disease: {
      type: String,
    },
    sex: {
      type: String,
    },
    age: {
      type: String,
    },
    race: {
      type: String,
    }
  },
  { timestamps: true }
);

module.exports = Book = mongoose.model("book", BookSchema);
