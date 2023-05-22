const express = require("express");
const { userController } = require("../controllers");
const router = express.Router();
router
  .route("/")
  .post(userController.uploadPhoto, userController.createUser)
  .get(userController.getAllUser);

router
  .route("/:id")
  .get(userController.getUser)
  .delete(userController.deleteUser)
  .patch(userController.uploadPhoto, userController.updateUser);
module.exports = router;
