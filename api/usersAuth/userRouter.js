const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userDb = require("./userModel");

// DOCUMENTATION AT BOTTOM

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

router.post("/login", validateSimpleUserInfoExists, async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await userDb.findBy({ username });
    if (user && bcrypt.compareSync(password, user.password)) {
      const token = generateToken(user);
      res.status(200).json({ token });
    } else {
      res.status(401).json({ errorMessage: "Bad credentials" });
    }
  } catch (error) {
    res.status(500).json({
      errorMessage: "Something went wrong when registering the user"
    });
  }
});

function generateToken(user) {
  const payload = {
    subject: user.id,
    username: user.username
  };
  const options = {
    expiresIn: "1d"
  };
  const secret = process.env.JWT_SECRET;
  return jwt.sign(payload, secret, options);
}
module.exports = router;

/**
 * @api {post} /api/register Create New User
 * @apiName RegisterUser
 * @apiGroup UserAuth
 *
 * @apiSuccess {Object} UserObject Object with user name and username
 * @apiSuccessExample Success-Response:
 *     200 OK
 *     {
 *       "name": "Frodo Baggins",
 *       "username": "FrodoRingBearer"
 *     }
 *
 * @apiError (400) BadRequest Username already exists or required information was not supplied to request body
 *
 * @apiErrorExample 400 Bad Request:
 *     400 Bad Request
 *     {
 *       "errorMessage": "Username already exists"
 *     }
 *
 * @apiErrorExample 400 Bad Request:
 *     400 Bad Request
 *     {
 *       "errorMessage": "Bad request: please include a username, password, name and email"
 *     }
 *
 * @apiError (500) InternalServerError Something went wrong when registering the user.
 * @apiErrorExample 500 Internal Server Error:
 *     500 Internal Server Error
 *     {
 *       "errorMessage": "Something went wrong when registering the user"
 *     }
 */

/**
 * @api {post} /api/login Login User
 * @apiName LoginUser
 * @apiGroup UserAuth
 *
 * @apiSuccess {Object} UserObject Object with token: the token in this example is not valid
 * @apiSuccessExample Success-Response:
 *     200 OK
 *     {
 *       "token": "cCI6IkpXVCJ9.eyJzdWJqZWN0IjozLCJ1c2VybmFtZSI6Im5hbWUxIiwiaWF0IjoxNTY0MDc3Njc3LCJleHAiOjE1NjQxNjQwNz"
 *     }
 *
 * @apiError (400) BadRequest Required information was not supplied to request body
 *
 * @apiErrorExample 400 Bad Request:
 *     400 Bad Request
 *     {
 *       "errorMessage": "Bad request: please include a username and password"
 *     }
 *
 * @apiError (500) InternalServerError Something went wrong when registering the user.
 * @apiErrorExample 500 Internal Server Error:
 *     500 Internal Server Error
 *     {
 *       "errorMessage": "Something went wrong when logging in the user"
 *     }
 */
