const express = require("express");
const habitDb = require("./habitModel");
const { validateHabitBody, validateUserHabitBody } = require("../middelware");

// DOCUMENTATION AT BOTTOM

const router = express.Router();

router
  .route("/")
  .get(async (req, res) => {
    const user_id = req.userId;
    try {
      const habits = await habitDb.find();
      res.status(200).json(habits);
    } catch (error) {
      res.status(500).json({
        errorMessage: "Something went wrong getting the list of habits"
      });
    }
  })
  .post(validateHabitBody, async (req, res) => {
    const newHabitInfo = req.body;
    try {
      const habits = await habitDb.addHabit(newHabitInfo);
      res.status(201).json(habits);
    } catch (error) {
      res
        .status(500)
        .json({ errorMessage: "Something went wrong when adding the habit" });
    }
  });

router
  .route("/user")
  .get(async (req, res) => {
    console.log(req.userId);
    const user_id = req.userId;
    try {
      const userHabits = await habitDb.findUserHabitsBy({ user_id });
      res.status(200).json(userHabits);
    } catch (error) {
      res
        .status(500)
        .json({ errorMessage: "Something went wrong getting your habit info" });
    }
  })
  .post(validateUserHabitBody, async (req, res) => {
    const user_id = req.userId;
    const newHabitInfo = req.body;
    try {
      const habits = await habitDb.addUserHabit({ user_id, ...newHabitInfo });
      res.status(201).json(habits);
    } catch (error) {
      res
        .status(500)
        .json({ errorMessage: "Something went wrong when adding the habit" });
    }
  });
module.exports = router;

/**
 * @api {get} /api/habits/user Get User Habits
 * @apiName GetUserHabits
 * @apiGroup UserHabits
 * @apiHeader {String} authorization Token from login
 * @apiHeaderExample {json} Auth-Example:
                 { "authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoyLCJ1c2VybmFtZSI6InRoZV9ncmV5IiwiaWF0IjoxNTY0MjUzODE0LCJle" }
 * @apiSuccess {Array} HabitArray Array of habit objects, each object has habit_name property, category_name and id
 * @apiSuccessExample Success-Response:
 *     200 OK
 * [
 *    {
 *       "id": 1,
 *       "habit_name": "Carry the ring to mordor",
 *        "category_name": "Fitness"
 *     },
 *      {
 *       "id": 2,
 *       "habit_name": "Don't put on the ring",
 *        "category_name": "Spirituality"
 *     },
 * ]
 *
 * @apiError (401) Unauthorized: You don't have authorization for this request
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
 *       "errorMessage": "Something went wrong getting your habit info"
 *     }
 */

/**
 * @api {post} /api/habits/user Post New Habit To User
 * @apiName PostUserHabits
 * @apiGroup UserHabits
 * @apiHeader {json} authorization Token from login
 * @apiHeaderExample {json} Auth-Example:
                 { "authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoyLCJ1c2VybmFtZSI6InRoZV9ncmV5IiwiaWF0IjoxNTY0MjUzODE0LCJle" }
 * @apiParam (Body) {String} habit_name The name of the habit you want to add
 * @apiParam (Body) {String} category_name The category of the habit you want to add
 * @apiParamExample {json} Request-Body-Example:
 *     {
 *       "habit_name": "Walk into mordor",
 *       "category_name": "Fitness"
 *     }
 * @apiSuccess {Array} HabitArray Array of habit objects, including the new habit, each object has habit_name property, category_name and id
 * @apiSuccessExample Success-Response:
 *     201 OK
 *     [
 *        {
 *          "id": 1,
 *          "habit_name": "Walk into mordor",
 *          "category_name": "Fitness"
 *        },
 *        {
 *          "id": 2,
 *          "habit_name": "Don't put on the ring",
 *          "category_name": "Spirituality"
 *        },
 *      ]
 *
 * @apiError (401) Unauthorized: You don't have authorization for this request
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
 *       "errorMessage": "Something went wrong when adding the habit"
 *     }
 */
