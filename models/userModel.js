const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "A user must have a name"],
    },
    age: {
      type: Number,
    },
    email: {
      type: String,
      unique: [true, "Email already registered"],
      required: [true, "A user must have an email"],
    },
    password: {
      type: String,
      required: [true, "A user must have a password"],
    },
    image: {
      type: String,
    },
  },
  {
    toJSON: { virtuals: true }, // So `res.json()` and other `JSON.stringify()` functions include virtuals
    toObject: { virtuals: true }, // So `console.log()` and other functions that use `toObject()` include virtuals
  }
);

// Middleware to hash password
userSchema.pre("save", async function (next) {
  if (this.isModified("password"))
    this.password = await bcrypt.hash(this.password, 12);
  next();
});

userSchema.virtual("orders", {
  ref: "Order",
  foreignField: "buyer",
  localField: "_id",
});

userSchema.pre(/^find/, function (next) {
  this.populate({ path: "orders" });
  next();
});
module.exports = mongoose.model("User", userSchema);
