const multer = require("multer");

const IMG_TYPE = {
  "image/png": "png",
  "image/jpeg": "jpeg",
  "image/jpg": "jpg",
};

exports.imageUpload = multer({
  limits: 50000,
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "./uploads/images");
    },
    filename: (req, file, cb) => {
      const ext = IMG_TYPE[file.mimetype];
      cb(null, Date.now() + "-" + file.originalname);
    },
  }),
  fileFilter: (req, file, cb) => {
    const isValid = !!IMG_TYPE[file.mimetype];
    let error = isValid ? null : new Error("Invalid Image type");
    cb(error, isValid);
  },
});

