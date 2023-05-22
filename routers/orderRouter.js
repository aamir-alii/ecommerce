const express = require("express");
const router = express.Router();
const { orderController } = require("../controllers");
router
  .route("/")
  .post(orderController.getOrderAmount, orderController.createOrder)
  .get(orderController.getAllOrder);

router
  .route("/:id")
  .get(orderController.getOrder)
  .delete(orderController.deleteOrder)
  .patch(orderController.getOrderAmount, orderController.updateOrder);

module.exports = router;
