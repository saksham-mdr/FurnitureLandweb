const express = require("express");
const methodOverride = require("method-override");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const path = require("path");
const connectDB = require("./server/db");

require("dotenv/config");

const app = express();

/** Cross Platfrom **/
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept,Authorization"
  );
 // res.setHeader("Access-Control-Allow-Credentials","true")
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,DELETE,PATCH,OPTIONS");
  next();
});

app.use(bodyParser.json()); //returns middleware that only parses json.
app.use(methodOverride("_method")); //used for request like patch.
app.use(cookieParser()); //a middleware which parses cookies attached to the client request object.
app.use(express.json()); //returns middleware that only parses json but with buit in express.
app.use(express.urlencoded({ extended: true })); //TO GET FORM DATA
app.use(express.static(path.join(__dirname, "static")));
app.use(express.static("./public"));
app.use("/uploads", express.static(__dirname + '/uploads'));
//app.use("/uploads/images", express.static(path.join("uploads", "images"))); //Multer directory for images
//app.use("/uploads/files", express.static(path.join("uploads", "files"))); //Multer directory for files
//app.use("/uploads/gallery", express.static(path.join("uploads", "gallery")));

app.use(require("./routes/auth"));
app.use(require("./routes/cart"));
app.use(require("./routes/furniture"));

connectDB();

app.listen(5000, () => {
  console.log(`Server Connected at Port 5000`);
});
