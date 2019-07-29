const helmet = require("helmet");
const morgan = require("morgan");
const express = require("express");
const bodyParser = require("body-parser");

module.exports = server => {
  server.use(helmet());
  server.use(morgan("dev"));
  server.use(express.json());
  server.use(express.static("doc"));
  server.use(bodyParser.urlencoded({ extended: true }));
};
