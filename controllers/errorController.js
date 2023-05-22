const { apiResponse } = require("../libs/");
const errorController = (error, req, res, next) => {
  const statusCode = error.statusCode || 500;
  return apiResponse(res, statusCode, false, error.message);
};

module.exports = errorController;
