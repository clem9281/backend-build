const express = require("express");
const habitDb = require("./habitModel");
const {
  habitBody,
  userHabitBody,
  userHabitAndCategoryUnique
} = require("../middelware");

// DOCUMENTATION AT BOTTOM

const router = express.Router();

router.route("/").get(async (req, res) => {
  const user_id = req.userId;
  try {
    const habits = await habitDb.find();
    res.status(200).json(habits);
  } catch (error) {
    res.status(500).json({
      errorMessage: "Something went wrong getting the list of habits"
    });
  }
});

// DON'T THINK YOU NEED THIS REQUEST BUT SAVE IT FOR NOW IF YOU KEEP IT YOU NEED TO ADD UNIQUNESS MIDDLEWARE
// .post(habitBody, async (req, res) => {
//   const newHabitInfo = req.body;
//   try {
//     const habits = await habitDb.addHabit(newHabitInfo);
//     res.status(201).json(habits);
//   } catch (error) {
//     res
//       .status(500)
//       .json({ errorMessage: "Something went wrong when adding the habit" });
//   }
// });

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
  .post(userHabitBody, userHabitAndCategoryUnique, async (req, res) => {
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

router
  .route("/user/:userHabit_id")
  .put(userHabitBody, userHabitAndCategoryUnique, async (req, res) => {
    const id = req.userId;
    const userHabit_id = req.params.userHabit_id;
    const newHabitInfo = req.body;
    try {
      const habits = await habitDb.updateUserHabit(
        { ...newHabitInfo, userHabit_id },
        id
      );
      if (habits) {
        res.status(200).json(habits);
      } else {
        res.status(404).json({
          errorMessage: "The user does not have that habit to update"
        });
      }
    } catch (error) {
      res.status(500).json({
        errorMessage: "Something went wrong when updating the user's habit"
      });
    }
  })
  .delete(async (req, res) => {
    const user_id = req.userId;
    const userHabit_id = req.params.userHabit_id;
    try {
      const habits = await habitDb.deleteUserHabit(userHabit_id, user_id);
      if (habits) {
        res.status(201).json(habits);
      } else {
        res.status(404).json({
          errorMessage: "That user does not have that habit to delete"
        });
      }
    } catch (error) {
      res
        .status(500)
        .json({ errorMessage: "Something went wrong when deleting the habit" });
    }
  });
module.exports = router;

/**
 * @api {get} /api/habits Get All Habits
 * @apiVersion 1.0.0
 * @apiName GetHabits
 * @apiGroup Habits
 * @apiExample Request
 * axios.get('/api/habits');
 * @apiHeader (token) {String} authorization Token from login
 * @apiHeaderExample {json} Auth-Example:
                 { "authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoyLCJ1c2VybmFtZSI6InRoZV9ncmV5IiwiaWF0IjoxNTY0MjUzODE0LCJle" }
 * @apiSuccess (Success 200) {Array} HabitArray Array of habit objects, each object has habit_name property and id
 * @apiSuccessExample Success-Response:
 *     200 OK
 * [
 *    {
 *       "id": 1,
 *       "habit_name": "Carry the ring to mordor",
 *     },
 *      {
 *       "id": 2,
 *       "habit_name": "Don't put on the ring",
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
 * @apiError (500) InternalServerError Something went wrong getting the habits.
 * @apiErrorExample 500 Internal Server Error:
 *     500 Internal Server Error
 *     {
 *       "errorMessage": "Something went wrong getting the list of habits"
 *     }
 */

/**
 * @api {get} /api/habits/user Get User Habits
 * @apiVersion 1.0.0
 * @apiName GetUserHabits
 * @apiGroup Habits
 * @apiExample Request
 * axios.get('/api/habits/user);
 * @apiHeader (token) {String} authorization Token from login
 * @apiHeaderExample {json} Auth-Example:
                 { "authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoyLCJ1c2VybmFtZSI6InRoZV9ncmV5IiwiaWF0IjoxNTY0MjUzODE0LCJle" }
 * @apiSuccess (Success 200) {Array} HabitArray Array of habit objects, each object has habit_name property, category_name and id
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
 * @apiError (500) InternalServerError Something went wrong getting your habit info.
 * @apiErrorExample 500 Internal Server Error:
 *     500 Internal Server Error
 *     {
 *       "errorMessage": "Something went wrong getting your habit info"
 *     }
 */

/**
 * @api {post} /api/habits/user Post New Habit To User
 * @apiVersion 1.0.0
 * @apiName PostUserHabits
 * @apiGroup Habits
 * @apiExample Request
 * axios.post('/api/habits/user', {habit_name: "Save Rohan", category_name: "relationships"});
 * @apiHeader (token) {String} authorization Token from login
 * @apiHeaderExample {json} Auth-Example:
                 { "authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoyLCJ1c2VybmFtZSI6InRoZV9ncmV5IiwiaWF0IjoxNTY0MjUzODE0LCJle" }
 * @apiParam (Body) {String} habit_name The name of the habit you want to add
 * @apiParam (Body) {String} category_name The category of the habit you want to add
 * @apiParamExample {json} Request-Body-Example:
 *     {
          "habit_name": "Save Rohan",
          "category_name": "relationships"
        }
 * @apiSuccess (Success 200) {Array} HabitArray Array of habit objects, including the new habit, each object has habit_name property, category_name, userHAbit_id and habit_id
 * @apiSuccessExample Success-Response:
 *     201 OK
 *     [
          {
            "userHabit_id": 4,
            "habit_id": 4,
            "habit_name": "call eagles",
            "category_name": "relationships"
          },
          {
            "userHabit_id": 3,
            "habit_id": 5,
            "habit_name": "walk into mordor",
            "category_name": "physical wellness"
          },
          {
            "userHabit_id": 5,
            "habit_id": 6,
            "habit_name": "Save Rohan",
            "category_name": "relationships"
          }
      ]
 *
 * @apiError (4xx) BadRequest: Either the request is missing the habit_name property or a habit already exists with that category
 * @apiErrorExample 400 Bad Request:
 *     400 Bad Request
 *     {
 *       "errorMessage": "Please include a habit_name for the habit you would like to add"
 *     }
 *
 * @apiErrorExample 400 BadRequest:
 *     400 Bad Request
 *     {
 *       "errorMessage": "There is already a habit with that category"
 *     }
 * 
 * @apiError (4xx) Unauthorized: You don't have authorization for this request
 * @apiErrorExample 401 Unauthorized:
 *     401 Unauthorized
 *     {
 *       "errorMessage": "Unauthorized: You don't have authorization for this request"
 *     }
 *
 * @apiError (500) InternalServerError Something went wrong adding the habit.
 * @apiErrorExample 500 Internal Server Error:
 *     500 Internal Server Error
 *     {
 *       "errorMessage": "Something went wrong when adding the habit"
 *     }
 */

/**
 * @api {put} /api/habits/user/:userHabit_id Update the User's Habit
 * @apiVersion 1.0.0
 * @apiName PutUserHabits
 * @apiGroup Habits
 * @apiExample Request
 * axios.put('/api/habits/user/:3', { habit_name: "Walk into Mordor", "category_name": "Fitness"});
 * @apiHeader (token) {String} authorization Token from login
 * @apiHeaderExample {json} Auth-Example:
                 { "authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoyLCJ1c2VybmFtZSI6InRoZV9ncmV5IiwiaWF0IjoxNTY0MjUzODE0LCJle" }
 * @apiParam (Body) {String} habit_name The name of the habit you want to change to
 * @apiParam (Body) {String} category_name The category of the habit you want to change to
 * @apiParam (Params) {Number} userHabit_id The id of the userHabit relationship you want to alter
 * @apiParamExample {json} Request-Body-Example:
 *     {
 *       "habit_name": "Walk into mordor",
 *       "category_name": "Fitness"
 *     }
 * @apiParamExample {Number} Request-PArams-Example:
 *     "/api/habits/user/3"
 * @apiSuccess (Success 200) {Array} HabitArray Array of habit objects, including the new habit, each object has habit_name property, category_name userHabit_id and habit_id
 * @apiSuccessExample Success-Response:
 *     201 OK
 *     [
          {
            "userHabit_id": 4,
            "habit_id": 4,
            "habit_name": "call eagles",
            "category_name": "relationships"
          },
          {
            "userHabit_id": 3,
            "habit_id": 5,
            "habit_name": "walk into mordor",
            "category_name": "physical wellness"
          }
        ]
 *
 * @apiError (4xx) BadRequest: Either the request is missing the habit_name or category name property or a habit already exists with that category
 * @apiErrorExample 400 Bad Request:
 *     400 Bad Request
 *     {
 *       "errorMessage": "Please include a habit_name and category_name for the habit you would like to add"
 *     }
 *
 * @apiErrorExample 400 BadRequest:
 *     400 Bad Request
 *     {
 *       "errorMessage": "There is already a habit with that category"
 *     }
 * 
 * @apiErrorExample 401 Unauthorized:
 *     401 Unauthorized
 *     {
 *       "errorMessage": "Unauthorized: You don't have authorization for this request"
 *     }
 *  @apiErrorExample 404 NotFound:
 *     401 NotFound
 *     {
 *       "errorMessage": "The user does not have that habit to update"
 *     }
 * @apiError (500) InternalServerError Something went wrong adding the habit.
 * @apiErrorExample 500 Internal Server Error:
 *     500 Internal Server Error
 *     {
 *       "errorMessage": "Something went wrong when adding the habit"
 *     }
 */

/**
 * @api {delete} /api/habits/user/:userHabit_id Delete the User's Habit
 * @apiVersion 1.0.0
 * @apiName DeleteUserHabits
 * @apiGroup Habits
 * @apiExample Request
 * axios.delete('/api/habits/user/1');
 * @apiHeader (token) {String} authorization Token from login
 * @apiHeaderExample {json} Auth-Example:
                 { "authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoyLCJ1c2VybmFtZSI6InRoZV9ncmV5IiwiaWF0IjoxNTY0MjUzODE0LCJle" }
 * @apiParam (Params) {Number} userHabit_id The id of the userHabit relationship you want to delete
 * @apiParamExample {Number} Request-PArams-Example:
 *     "/api/habits/user/3"
 * @apiSuccess (Success 200) {Array} HabitArray Array of habit objects, minus the deleted habit, each object has habit_name property, category_name and uerHabit_id and habit_id
 * @apiSuccessExample Success-Response:
 *     201 OK
 *     [
          {
            "userHabit_id": 4,
            "habit_id": 4,
            "habit_name": "call eagles",
            "category_name": "relationships"
          }
        ]
 * 
 * @apiErrorExample 401 Unauthorized:
 *     401 Unauthorized
 *     {
 *       "errorMessage": "Unauthorized: You don't have authorization for this request"
 *     }
 *  @apiErrorExample 404 NotFound:
 *     401 NotFound
 *     {
 *       "errorMessage": "The user does not have that habit to delete"
 *     }
 * @apiError (500) InternalServerError Something went wrong adding the habit.
 * @apiErrorExample 500 Internal Server Error:
 *     500 Internal Server Error
 *     {
 *       "errorMessage": "Something went wrong when adding the habit"
 *     }
 */
