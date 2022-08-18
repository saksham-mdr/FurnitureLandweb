const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  furnitureID: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    min: 0,
  },
  creatorID: {
    type: String,
  },
  buyerID: {
    type: String,
  },
  img:{
    type: String,
  }
});

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;
