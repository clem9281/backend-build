const express = require("express");

const dashDb = require("./dashModel");
const { restricted } = require("../middelware");

const router = express.Router();

router.route("/").get(async (req, res) => {
  try {
    const info = await dashDb.findBy;
  } catch (error) {}
});

module.exports = router;
