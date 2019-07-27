const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userInfoDb = require("./userInfoModel");

// DOCUMENTATION AT BOTTOM

const {
  validateComplexUserInfoExists,
  validateSimpleUserInfoExists,
  validateUsernameUnique
} = require("../middelware");

const router = express.Router();

router.get("/", async (req, res) => {
  const id = req.userId;
  try {
    const userInfo = await userInfoDb.getUserInfo({ id });
    res.status(200).json(userInfo);
  } catch (error) {
    res
      .status(500)
      .json({ errorMessage: "Something went wrong getting the user info" });
  }
});
module.exports = router;

/**
 * @api {get} /api/me Get User Info
 * @apiName GetBasicUserInfo
 * @apiGroup UserInfo
 *
 * @apiSuccess {Object} UserObject Object with user id, username, name and email
 * @apiSuccessExample Success-Response:
 *     200 OK
 *     {
 *        "id": 1
 *       "name": "Frodo Baggins",
 *       "username": "FrodoRingBearer",
 *       "email": "ringbearer@thefellowship.com"
 *     }
 *
 * @apiError (401) Unauthorized: You don't have authorization for this request
 *
 * @apiErrorExample 401 Unauthorized:
 *     401 Unauthorized
 *     {
 *       "errorMessage": "Unauthorized: You don't have authorization for this request"
 *     }
 *
 * @apiError (500) InternalServerError Something went wrong getting the user info.
 * @apiErrorExample 500 Internal Server Error:
 *     500 Internal Server Error
 *     {
 *       "errorMessage": "SSomething went wrong getting the user info"
 *     }
 */
