const express = require("express");
const router = express.Router();
const { productController } = require("../controllers");
router
  .route("/")
  .post(productController.createProduct)
  .get(productController.getAllProduct);

router
  .route("/:id")
  .get(productController.getProduct)
  .delete(productController.deleteProduct)
  .patch(productController.updateProduct);
module.exports = router;
