const express = require("express");
const userInfoDb = require("./userInfoModel");

// DOCUMENTATION AT BOTTOM
const {
  simpleUserInfoExists,
  usernameUnique,
  emailUnique
} = require("../middelware");

const router = express.Router();

router
  .route("/")
  .get(async (req, res) => {
    const id = req.userId;
    try {
      const userInfo = await userInfoDb.getUserInfo({ id });
      res.status(200).json(userInfo);
    } catch (error) {
      res
        .status(500)
        .json({ errorMessage: "Something went wrong getting the user info" });
    }
  })
  .put(
    simpleUserInfoExists.all,
    usernameUnique,
    emailUnique,
    async (req, res) => {
      const id = req.userId;
      try {
        const updated = await userInfoDb.updateUser(req.body, id);
        if (!updated) {
          res.status(404).json({
            errorMessage: "Something went wrong, that user doesn't exist!"
          });
        } else {
          res.status(200).json(updated);
        }
      } catch (error) {
        res
          .status(500)
          .json({
            errorMessage: "Something went wrong updating the user info"
          });
      }
    }
  )
  .delete(async (req, res) => {
    const id = req.userId;
    try {
      const deleted = await userInfoDb.deleteUser(id);
      if (deleted) {
        res
          .status(200)
          .json({ message: "Your account has been successfully deleted" });
      } else {
        res.status(404).json({
          errorMessage:
            "Something went wrong we cannot find that user to delete them"
        });
      }
    } catch (error) {
      res
        .status(500)
        .json({ errorMessage: "Something went wrong getting the user info" });
    }
  });
module.exports = router;

/**
 * @api {get} /api/user-info Get User Info
 * @apiName GetBasicUserInfo
 * @apiGroup UserInfo
 * @apiHeader {json} authorization Token from login
 * @apiHeaderExample {json} Auth-Example:
                 { "authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoyLCJ1c2VybmFtZSI6InRoZV9ncmV5IiwiaWF0IjoxNTY0MjUzODE0LCJle" }
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

/**
 * @api {put} /api/user-info Update the User Info
 * @apiName updateUserInfo
 * @apiGroup UserInfo
 *@apiHeader {json} authorization Token from login
 * @apiHeaderExample {json} Auth-Example:
                 { "authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoyLCJ1c2VybmFtZSI6InRoZV9ncmV5IiwiaWF0IjoxNTY0MjUzODE0LCJle" }
 @apiParam (Body) {String} username The username of the user you want to update
 @apiParam (Body) {String} email The email of the user you want to update
 @apiParam (Body) {String} name The name of the user you want to update
 * @apiParamExample {json} Request-Body-Example:
 *     {
 *        "username": "the_wizard_of_many_colors",
          "name": "Gandalf",
          "email": "that_wizard@the_fellowship.com"
 *     }
 * @apiSuccess {Object} UserObject Object with user properties: name email id and username
 * @apiSuccessExample Success-Response:
 *     200 OK
 *     {
          "id": 2,
          "username": "the_wizard_of_many_colors",
          "name": "Gandalf",
          "email": "that_wizard@the_fellowship.com"
      }
 *
 * @apiError (4xx) BadRequest Username or email already exists or required information was not supplied to request body. It's highly unlikely we will hit the 404 error on this endpoint, as we are finding the user based on the token, but I included it for clarity
 *
 *@apiErrorExample 400 Bad Request:
 *     400 Bad Request
 *     {
 *       "errorMessage": "Username already exists"
 *     }
 * @apiErrorExample 400 Bad Request:
 *     400 Bad Request
 *     {
 *       "errorMessage": "We already have an account with that email address"
 *     }
 *
 * @apiErrorExample 400 Bad Request:
 *     400 Bad Request
 *     {
 *       "errorMessage": "Bad request: please include a username, name and email"
 *     }
 * 
 *  @apiErrorExample 404 Not Found:
 *     404 Not Found
 *     {
 *       "errorMessage": "Something went wrong, that user doesn't exist!"
 *     }
 *
 * @apiError (500) InternalServerError Something went wrong when updating the user.
 * @apiErrorExample 500 Internal Server Error:
 *     500 Internal Server Error
 *     {
 *       "errorMessage": "Something went wrong updating the user info"
 *     }
 */

/**
 * @api {delete} /api/user-info Delete the User
 * @apiName deleteUser
 * @apiGroup UserInfo
 * @apiHeader {json} authorization Token from login
 * @apiHeaderExample {json} Auth-Example:
                 { "authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoyLCJ1c2VybmFtZSI6InRoZV9ncmV5IiwiaWF0IjoxNTY0MjUzODE0LCJle" }
 * @apiSuccess {Object} MessageObject Object with delete success message
 * @apiSuccessExample Success-Response:
 *     200 OK
 *     {
          "message": "Your account has been successfully deleted"
      }
 *
 * @apiError (404) NotFound If the user is not found we cannot delete them. It's unlikely we will hit this error, since we are using the token to find the user, but I included it for clarity.
 *
 *  @apiErrorExample 404 Not Found:
 *     404 Not Found
 *     {
 *       "errorMessage": "Something went wrong, that user doesn't exist!"
 *     }
 *
 * @apiError (500) InternalServerError Something went wrong when deleting the user.
 * @apiErrorExample 500 Internal Server Error:
 *     500 Internal Server Error
 *     {
 *       "errorMessage": "Something went wrong when deleting the user"
 *     }
 */
