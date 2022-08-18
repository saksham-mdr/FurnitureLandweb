const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  username: {
    type: String,
    required: true,
  },
  location: {
    type: String,
  },
  password: {
    type: String,
    minlength: 6,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
  },
  role: {
    type: String,
    required: true,
  },
  cart: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Furniture",
    },
  ],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
