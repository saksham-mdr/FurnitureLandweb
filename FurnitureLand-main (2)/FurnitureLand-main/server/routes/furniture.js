const express = require("express");
const router = express.Router();

const {
  getFurniture,
  postFurniture,
  getFurnitureByID,
  getEditFurnitureByID,
  patchFurnitureByID,
  deleteFurniture,
  postFurnitureReview,
  getMyFurniture,
} = require("../controllers/furniture");

const auth = require("../middleware/auth");
const { imageUpload } = require("../middleware/upload");
// Get all the products
router.get("/furniture", getFurniture);

router.get("/myfurniture", auth, getMyFurniture);

// create a new product with the given payload
router.post("/addFurniture", imageUpload.single("image"), auth, postFurniture);

// Show a particular product
router.get("/furniture/:id", getFurnitureByID);

// getting the edit form prefilled with the data
router.get("/furniture/:id/edit", getEditFurnitureByID);

// updating the product with the given payload
router.patch("/furniture/:id", patchFurnitureByID);

// deleting the product
router.delete("/furniture/:id", deleteFurniture);

// Creating a review for each product
router.post("/furniture/:id/review", postFurnitureReview);

module.exports = router;
