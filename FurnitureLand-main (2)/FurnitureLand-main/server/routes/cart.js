const express = require("express");
const router = express.Router();

const {
  addToCart,
  getUserCart,
  deleteUserCart,
  CheckoutCart,
  ToBeDelivered,
  deleteSellerItem,
  getOrders,
  deleteUserOrder,
} = require("../controllers/cart");
const auth = require("../middleware/auth");

router.post("/cart/:productid/add", auth, addToCart);

router.post("/checkout", auth, CheckoutCart);

router.get("/user/cart", auth, getUserCart);

router.get("/getorders", auth, getOrders);

router.get("/tobedilivered", auth, ToBeDelivered);

router.delete("/cart/:id/remove", auth, deleteUserCart);

router.delete("/checkout/:id/remove", auth, deleteUserOrder);

router.delete("/sellerItem/:id/remove", auth, deleteSellerItem);

module.exports = router;
