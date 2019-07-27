const express = require("express");
const userHabitsDb = require("./userHabitsModel");
const { validateUserHabitBody } = require("../middelware");

// DOCUMENTATION AT BOTTOM

const router = express.Router();

module.exports = router;
