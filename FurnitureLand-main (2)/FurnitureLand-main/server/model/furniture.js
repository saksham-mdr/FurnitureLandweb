const mongoose = require("mongoose");

const furnitureSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  catagory:{
    type: String,
    required: true,
  },
  price: {
    type: Number,
    min: 0,
  },
  img: {
    type: String,
    trim: true,
  },
  creatorID:{
    type: String,
  },
  desc: {
    type: String,
    trim: true,
  },
  location:{
    type:String,
  },
  reviews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
});

const Furniture = mongoose.model("Furniture", furnitureSchema);

module.exports = Furniture;
