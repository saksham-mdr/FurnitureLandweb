const User = require("../model/users");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const jwtSecret = process.env.SECRET;

exports.register = async (req, res, next) => {
  const { email, password, role, phoneNumber, organization, username, gender } =
    req.body;

  if (password.length < 6) {
    return res.json({
      status: 400,
      message: "Password less than 6 characters",
    });
  }

  bcrypt.hash(password, 10).then(async (hash) => {
    await User.create({
      email,
      password: hash,
      role,
      phoneNumber,
      organization,
      username,
      gender,
    })
      .then(() => {
        res.json({
          status: 200,
          message: "Registration successful, You can now login",
        });
      })
      .catch((error) =>
        res.json({
          status: 400,
          message: "User not successfully created",
          error: error.message,
        })
      );
  });
};

exports.login = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      res.json({
        status: 400,
        message: "Login not successful",
        error: "User not found",
      });
    } else {
      // comparing given password with hashed password
      bcrypt.compare(password, user.password).then(function (result) {
        if (result) {
          const maxAge = 3 * 60 * 60;
          const token = jwt.sign({ id: user._id, role: user.role }, jwtSecret, {
            expiresIn: maxAge, // 3hrs in sec
          });
          res.cookie("jwt", token, {
            httpOnly: false,
            maxAge: maxAge * 1000,
          });

          res.json({
            status: 200,
            message: "User successfully Logged in",
            user: user._id,
            username: user.username,
            role: user.role,
            token: token,
          });
        } else {
          res.json({
            status: 401,
            message: "Login not succesful",
            error: "Incorrect Password",
          });
        }
      });
    }
  } catch (error) {
    res.status(400).json({
      message: "An error occurred",
      error: error.message,
    });
  }
};

exports.myProfile = async (req, res, next) => {
  const user = req.userData.userId;

  try {
    const data = await User.findById(user);

    res.json(data);
  } catch (e) {
    res.json(e);
  }
};

exports.updateProfile = async (req, res, next) => {
  const id = req.userData.userId;
  const updatedProfile = { ...req.body };
  try {
    await User.findByIdAndUpdate(id, updatedProfile);

    res.json({
      status: 200,
      message: "User Updated Sucessfully",
    });
  } catch (e) {
    res.json(e);
  }
};
