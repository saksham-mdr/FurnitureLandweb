const express = require("express");
const router = express.Router();

const { login, register, myProfile,updateProfile } = require("../controllers/auth");
const auth = require("../middleware/auth");

router.route("/login").post(login);

router.route("/register").post(register);

router.get("/myprofile", auth, myProfile);

router.patch("/updateProfile", auth, updateProfile);

module.exports = router;
