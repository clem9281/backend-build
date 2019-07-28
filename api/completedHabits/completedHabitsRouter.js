const express = require("express");
const completedDb = require("./completedHabitsmodel");
const { categoryBody, categoryUnique } = require("../middelware");

// DOCUMENTATION AT BOTTOM

const router = express.Router();

router.route("/").get(async (req, res) => {
  const id = req.userId;
  try {
    const list = await completedDb.getList(id);
    res.status(200).json(list);
  } catch (error) {
    res.status(500).json({
      errorMessage: "Something went wrong when get the list of completed habits"
    });
  }
});

module.exports = router;

/**
 * @api {get} /api/completed-today List of Tasks Completed Today
 * @apiName GetListToday
 * @apiGroup CompletedHabits
 * @apiHeader {String} authorization Token from login
 * @apiHeaderExample {json} Auth-Example:
                 { "authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoyLCJ1c2VybmFtZSI6InRoZV9ncmV5IiwiaWF0IjoxNTY0MjUzODE0LCJle" }
 * @apiSuccess {Array} CategoryArray Array of category objects, each object has category_name property and id
 * @apiSuccessExample Success-Response:
 *     200 OK
 *    [
        {
          "id": 1,
          "habit_name": "get to mordor",
          "category_name": "physical wellness",
          "completed": true
        },
        {
          "id": 2,
          "habit_name": "destroy the ring",
          "category_name": "spirituality",
          "completed": false
        }
      ]
 *
 * @apiError (401) Unauthorized: You don't have authorization for this request
 * @apiErrorExample 401 Unauthorized:
 *     401 Unauthorized
 *     {
 *       "errorMessage": "Unauthorized: You don't have authorization for this request"
 *     }
 *
 * @apiError (500) InternalServerError Something went wrong getting the list of categories.
 * @apiErrorExample 500 Internal Server Error:
 *     500 Internal Server Error
 *     {
 *       "errorMessage": "Something went wrong getting the list of habits"
 *     }
 */
