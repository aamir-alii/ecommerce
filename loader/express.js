const bodyParser = require("body-parser");
const express = require("express");
module.exports = (app) => {
  app.use(express.json());
  app.use(bodyParser.urlencoded({ extended: true }));
};
