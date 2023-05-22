const multer = require("multer");
const { User } = require("../models/");
const factory = require("./factory");
const { apiResponse, AppError } = require("../libs/");

const multerStorage = multer.diskStorage({
  filename: function (req, file, cb) {
    const fileName = Date.now();
    const ext = file.mimetype.split("/")[1];
    cb(null, `${fileName}.${ext}`);
  },
  destination: (file, req, cb) => {
    cb(null, "public/images");
  },
});

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(new AppError("Not an image! Please upload an image", 400), false);
  }
};

const upload = multer({ storage: multerStorage, fileFilter: multerFilter });
const uploadPhoto = upload.single("photo");

const createUser = factory.createOne(User, "user");
const getUser = factory.getOne(User, "user");
const getAllUser = factory.getAll(User, "user");
const updateUser = factory.updateOne(User, "user");
const deleteUser = factory.deleteOne(User, "user");

module.exports = {
  createUser,
  getUser,
  getAllUser,
  updateUser,
  deleteUser,
  uploadPhoto,
};
