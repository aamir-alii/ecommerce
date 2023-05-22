const { Product } = require("../models/");
const factory = require("./factory");

const createProduct = factory.createOne(Product, "product");
const getProduct = factory.getOne(Product, "product");
const getAllProduct = factory.getAll(Product, "product");
const updateProduct = factory.updateOne(Product, "product");
const deleteProduct = factory.deleteOne(Product, "product");

module.exports = {
  createProduct,
  getProduct,
  getAllProduct,
  updateProduct,
  deleteProduct,
};
