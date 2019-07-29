const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userDb = require("./userModel");

// DOCUMENTATION AT BOTTOM

const {
  registerUserInfoExists,
  loginUserInfoExists,
  usernameUnique,
  emailUnique,
  simpleUserInfoExists
} = require("../middelware");

const router = express.Router();

router.post(
  "/unique-username",
  simpleUserInfoExists.username,
  usernameUnique,
  (req, res) => {
    res.status(200).json({ message: "That username is available!" });
  }
);

router.post(
  "/unique-email",
  simpleUserInfoExists.email,
  emailUnique,
  (req, res) => {
    res
      .status(200)
      .json({ message: "We don't have an account with that email!" });
  }
);

router.post(
  "/register",
  registerUserInfoExists,
  usernameUnique,
  emailUnique,
  async (req, res) => {
    const user = req.body;
    const hash = bcrypt.hashSync(user.password, 14);
    user.password = hash;
    console.log("here");
    try {
      const newUser = await userDb.add(user);

      res.status(201).json(newUser);
    } catch (error) {
      res.status(500).json({
        errorMessage: "Something went wrong when registering the user."
      });
    }
  }
);

router.post("/login", loginUserInfoExists, async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await userDb.findBy({ username });
    if (user && bcrypt.compareSync(password, user.password)) {
      const token = generateToken(user);
      res
        .status(200)
        .json({ message: `Welcome ${username}, you are logged in`, token });
    } else {
      res
        .status(401)
        .json({ errorMessage: "That username or password is not correct." });
    }
  } catch (error) {
    res.status(500).json({
      errorMessage: "Something went wrong when registering the user."
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
 * @api {post} /api/auth/unique-username Check if Username is Available
 *  @apiVersion 1.0.0
 * @apiName uniqueusername
 * @apiGroup UserAuth
 *  @apiExample Request
 * axios.post('/api/auth/unique-username', {
 *       "username": "the_grey"
 *     });
 * @apiHeader (token) {String} authorization Token from login
 * @apiHeaderExample {json} Auth-Example:
                 { "authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoyLCJ1c2VybmFtZSI6InRoZV9ncmV5IiwiaWF0IjoxNTY0MjUzODE0LCJle" }
 * @apiParam (Body) {String} username The username of the user you want to check
 * @apiParamExample {json} Request-Body-Example:
 *     {
 *       "username": "the_grey"
 *     }
 * @apiSuccess {Object} MessageObject Object with message
 * @apiSuccessExample Success-Response:
 *     200 OK
 *     {
 *       "message": "That username is available!"
 *     }
 *
 * @apiError (4xx) BadRequest Username already exists or required information was not supplied to request body
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
 *       "errorMessage": ""Bad request: please include a username""
 *     }
 *
 * @apiError (500) InternalServerError Something went wrong when registering the user.
 * @apiErrorExample 500 Internal Server Error:
 *     500 Internal Server Error
 *     {
 *       "errorMessage": "Something went wrong validating that username, please try again"
 *     }
 */

/**
 * @api {post} /api/auth/unique-email Check if Email is Available
 *  @apiVersion 1.0.0
 * @apiName uniqueemail
 * @apiGroup UserAuth
 *  @apiExample Request
 * axios.post('/api/auth/unique-email', {
 *       "email": "that_wizard@the_fellowship.com"
 *     });
 * @apiHeader (token) {String} authorization Token from login
 * @apiHeaderExample {json} Auth-Example:
                 { "authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoyLCJ1c2VybmFtZSI6InRoZV9ncmV5IiwiaWF0IjoxNTY0MjUzODE0LCJle" }
 *@apiParam (Body) {String} email The email of the user you want to check
 * @apiParamExample {json} Request-Body-Example:
 *     {
 *       "email": "that_wizard@the_fellowship.com"
 *     }
 * @apiSuccess {Object} MessageObject Object with message
 * @apiSuccessExample Success-Response:
 *     200 OK
 *     {
 *       "message": "We don't have an account with that email!"
 *     }
 *
 * @apiError (4xx) BadRequest Email already exists or required information was not supplied to request body
 *
 * @apiErrorExample 400 Bad Request:
 *     400 Bad Request
 *     {
 *       "errorMessage": "We already have an account with that email address"
 *     }
 *
 * @apiErrorExample 400 Bad Request:
 *     400 Bad Request
 *     {
 *       "errorMessage": "Bad request: please include an email"
 *     }
 *
 * @apiError (500) InternalServerError Something went wrong when validating the user.
 * @apiErrorExample 500 Internal Server Error:
 *     500 Internal Server Error
 *     {
 *       "errorMessage": "Something went wrong validating that email, please try again"
 *     }
 */

/**
 * @api {post} /api/auth/register Create New User
 *  @apiVersion 1.0.0
 * @apiName RegisterUser
 * @apiGroup UserAuth
 *@apiExample Request
 * axios.post('/api/auth/register', {
        "username": "myName",
        "password": "pass",
        "name": "name",
        "email": "fake@fake.com"
      });
 * @apiParam (Body) {String} email The email of the user you want to register
 * @apiParam (Body) {String} name The name of the user you want to register
 * @apiParam (Body) {String} username The username of the user you want to register
 * @apiParam (Body) {String} password The password of the user you want to register
 * @apiParamExample {json} Request-Body-Example:
 *     {
        "username": "myName",
        "password": "pass",
        "name": "name",
        "email": "fake@fake.com"
      }
 * @apiSuccess (Success 200) {Object} UserObject Object with user id, name and username
 * @apiSuccessExample Success-Response:
 *     200 OK
 *     {
 *       "id": 1,
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
 * @api {post} /api/auth/login Login User
 * @apiName LoginUser
 * @apiGroup UserAuth
 * @apiExample Request
 * axios.post('/api/auth/login', {
        "username": "myName",
        "password": "pass"
      });
 * @apiParam (Body) {String} username The username of the user you want to login
 * @apiParam (Body) {String} password The password of the user you want to login
 * @apiParamExample {json} Request-Body-Example:
 *     {
        "username": "myName",
        "password": "pass"
      }
 * @apiSuccess (Success 200) {Object} UserObject Object with token: the token in this example is not valid
 * @apiSuccessExample Success-Response:
 *     200 OK
 *     {
 *        "message": "Welcome username, you are logged in",
 *       "token": "cCI6IkpXVCJ9.eyJzdWJqZWN0IjozLCJ1c2VybmFtZSI6Im5hbWUxIiwiaWF0IjoxNTY0MDc3Njc3LCJleHAiOjE1NjQxNjQwNz"
 *     }
 *
 * @apiError (4xx) BadRequest Required information was not supplied to request body
 *
 * @apiErrorExample 400 Bad Request:
 *     400 Bad Request
 *     {
 *       "errorMessage": "Bad request: please include a username and password"
 *     }
 *@apiError (4xx) Unauthorized That username or password is not correct.
 *
 * @apiErrorExample 401 Unauthorized:
 *     401 Unauthorized
 *     {
 *       "errorMessage": "That username or password is not correct."
 *     }
 *
 * @apiError (500) InternalServerError Something went wrong when logging in the user.
 * @apiErrorExample 500 Internal Server Error:
 *     500 Internal Server Error
 *     {
 *       "errorMessage": "Something went wrong when logging in the user"
 *     }
 */
