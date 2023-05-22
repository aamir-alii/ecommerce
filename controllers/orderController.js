const { AppError } = require("../libs");
const { Order, Product } = require("../models");
const getOrderAmount = async (req, res, next) => {
  try {
    if (!req.body.product || !req.body.quantity) next();
    const product = await Product.findById(req.body.product);
    if (!product) return next(new AppError("product not found", 404));
    req.body.amount = product.price * req.body.quantity;
    next();
  } catch (error) {
    return next(new AppError(error.message, 500));
  }
};
const factory = require("./factory");
const createOrder = factory.createOne(Order, "order");
const getOrder = factory.getOne(Order, "order");
const getAllOrder = factory.getAll(Order, "order");
const updateOrder = factory.updateOne(Order, "order");
const deleteOrder = factory.deleteOne(Order, "order");

module.exports = {
  createOrder,
  getAllOrder,
  getOrder,
  updateOrder,
  deleteOrder,
  getOrderAmount,
};
