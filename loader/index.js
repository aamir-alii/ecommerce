const { errorController } = require("../controllers");
const expressLoader = require("./express");
const routesLoader = require("./routes");
module.exports = (app) => {
  expressLoader(app);
  routesLoader(app);
  app.use(errorController);
};
