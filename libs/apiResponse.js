module.exports = (
  res,
  statusCode,
  status,
  message = "Something Went Wrong",
  data = null
) => {
  res.status(statusCode).json({
    status,
    message,
    data,
  });
};
