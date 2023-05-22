const { userRouter, productRouter, orderRouter } = require("../routers/");
module.exports = (app) => {
  app.use("/api/v1/users", userRouter);
  app.use("/api/v1/products", productRouter);
  app.use("/api/v1/orders", orderRouter);
  console.log("Routes Initialized");
};
