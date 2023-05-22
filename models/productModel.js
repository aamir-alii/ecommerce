const { default: mongoose } = require("mongoose");
const moongose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "A product must have name"],
      unique: [true, "Product name must be unique"],
    },
    category: {
      type: String,
      required: [true, "A product must have a category"],
    },
    price: {
      type: Number,
      required: [true, "A product must have a price"],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

productSchema.virtual("orders", {
  ref: "Order",
  foreignField: "product",
  localField: "_id",
});

productSchema.pre(/^find/, function (next) {
  this.populate("orders");
  next();
});

module.exports = mongoose.model("Product", productSchema);
