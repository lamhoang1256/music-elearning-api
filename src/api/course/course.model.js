const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema(
  {
    courseName: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      default: null,
    },
    thumbnailVideo: {
      type: String,
      default: null,
    },
    previewVideo: {
      type: String,
      default: null,
    },
    price: {
      type: Number,
      default: 0,
    },
    author: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    students: [
      {
        student: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        registerAt: { type: String },
      },
    ],
    benefits: {
      type: [String],
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Course", courseSchema);
