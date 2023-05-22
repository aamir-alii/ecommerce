const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: [true, "An order must have an amount"],
  },
  buyTime: {
    type: Date,
    default: Date.now(),
  },
  quantity: {
    type: Number,
    default: 1,
  },
  buyer: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: [true, "An order must have a buyer"],
  },
  product: {
    type: mongoose.Schema.ObjectId,
    ref: "Product",
    required: [true, "An order must have a product"],
  },
});

module.exports = mongoose.model("Order", orderSchema);
