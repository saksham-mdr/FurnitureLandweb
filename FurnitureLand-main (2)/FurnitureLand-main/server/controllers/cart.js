const User = require("../model/users");
const Product = require("../model/furniture");
const Cart = require("../model/cart");
const Checkout = require("../model/checkout");
const Furniture = require("../model/furniture");
const fs = require("fs");

exports.addToCart = async (req, res) => {
  const { productid } = req.params;

  const product = await Product.findById(productid);

  const currentUser = req.userData;

  try {
    await Cart.create({
      name: product.name,
      furnitureID: product.id,
      price: product.price,
      creatorID: product.creatorID,
      buyerID: currentUser.userId,
      img: product.img,
    });
    return res.json({
      status: 200,
      message: "Item added to your cart successfully",
      value: "true",
    });
  } catch (e) {
    console.log(e);
    return res.json({
      status: 400,
      e,
      value: "true",
    });
  }
};

exports.getUserCart = async (req, res) => {
  const userid = req.userData.userId;

  const cart = await Cart.find({ buyerID: userid });

  res.json({ cart });
};

exports.deleteUserCart = async (req, res) => {
  const productid = req.params.id;
  await Cart.findByIdAndDelete(productid);

  res.json({
    status: 400,
    message: "Remove Sucessfull",
    value: "true",
  });
};

exports.CheckoutCart = async (req, res) => {
  const cart = await Cart.findOne({ buyerID: req.userData.userId });
  const user = await User.findById(req.userData.userId);
  await Cart.findByIdAndDelete(cart.id);
  try {
    await Checkout.create({
      name: cart.name,
      furnitureID: cart.furnitureID,
      price: cart.price,
      creatorID: cart.creatorID,
      buyerID: cart.buyerID,
      location: user.location,
      img: cart.img,
    });
    await Cart.findByIdAndDelete(cart.id);
    return res.json({
      status: 200,
      message: "The Items will be delivered Soon",
      value: "true",
    });
  } catch (e) {
    console.log(e);
    return res.json({
      status: 400,
      e,
      value: "true",
    });
  }
};

exports.getOrders = async (req, res) => {
  try {
    const data = await Checkout.find({ buyerID: req.userData.userId });

    res.json(data);
  } catch (e) {
    console.log(e);
  }
};

exports.deleteUserOrder = async (req, res) => {
  const productid = req.params.id;

  await Checkout.findByIdAndDelete(productid);

  res.json({
    status: 400,
    message: "Remove Sucessfull",
    value: "true",
  });
};

exports.ToBeDelivered = async (req, res) => {
  try {
    const data = await Checkout.find({ creatorID: req.userData.userId });

    res.json(data);
  } catch (e) {
    console.log(e);
  }
};

exports.deleteSellerItem = async (req, res) => {
  try {
    const { id } = req.params;
    const img_path = await Furniture.findById(id);

    if (img_path.img != null) {
      fs.unlink(img_path.img, async (err) => {
        if (err == null) {
          await Furniture.findByIdAndDelete(id);
        }
      });
    } else {
      await Furniture.findByIdAndDelete(id);
    }
    res.json({
      success: true,
      status: 200,
      message: "Product deleted Succesfully",
    });
  } catch (e) {
    res.json(e);
  }
};
