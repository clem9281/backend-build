const express = require("express");
const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
const userDb = require("./userModel");

const {
  validateComplexUserInfoExists,
  validateSimpleUserInfoExists,
  validateUsernameUnique
} = require("../middelware");

const router = express.Router();

router.post(
  "/register",
  validateComplexUserInfoExists,
  validateUsernameUnique,
  async (req, res) => {
    const user = req.body;
    const hash = bcrypt.hashSync(user.password, 14);
    user.password = hash;
    console.log(user);
    try {
      const newUser = await userDb.add(user);

      res.status(201).json(newUser);
    } catch (error) {
      res.status(500).json({
        errorMessage: "Something went wrong when registering the user"
      });
    }
  }
);

module.exports = router;
