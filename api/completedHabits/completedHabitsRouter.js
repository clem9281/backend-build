const express = require("express");
const completedDb = require("./completedHabitsmodel");
const { completedHabit } = require("../middelware");

// DOCUMENTATION AT BOTTOM

const router = express.Router();

router
  .route("/")
  .get(async (req, res) => {
    const id = req.userId;
    try {
      const list = await completedDb.getList(id);
      res.status(200).json(list);
    } catch (error) {
      res.status(500).json({
        errorMessage:
          "Something went wrong when getting the list of completed habits"
      });
    }
  })
  .post(completedHabit, async (req, res) => {
    const id = req.userId;
    const habitId = req.body.habit_id;
    try {
      const list = await completedDb.addCompleted(habitId, id);
      res.status(201).json(list);
    } catch (error) {
      res.status(500).json({
        errorMessage:
          "Something went wrong marking that habit as completed for today."
      });
    }
  })
  .delete(completedHabit, async (req, res) => {
    const id = req.userId;
    const habitId = req.body.habit_id;
    try {
      const list = await completedDb.deleteCompleted(habitId, id);
      res.status(200).json(list);
    } catch (error) {
      res.status(500).json({
        errorMessage:
          "Something went wrong marking that habit as NOT completed for today."
      });
    }
  });

module.exports = router;

/**
 * @api {get} /api/completed-today List of Tasks Completed Today
 * @apiName GetListToday
 * @apiGroup CompletedHabits
 * @apiHeader (token) {String} authorization Token from login
 * @apiHeaderExample {json} Auth-Example:
                 { "authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoyLCJ1c2VybmFtZSI6InRoZV9ncmV5IiwiaWF0IjoxNTY0MjUzODE0LCJle" }
 * @apiSuccess {Array} CategoryArray Array of category objects, each object has category_name property and id
 * @apiSuccessExample Success-Response:
 *     200 OK
 *    [
        {
          "id": 1,
          "habit_id": 1,
          "habit_name": "get to mordor",
          "category_name": "physical wellness",
          "completed": true
        },
        {
          "id": 2,
          "habit_id": 2,
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
 * @apiError (500) InternalServerError Something went wrong getting the list of habits.
 * @apiErrorExample 500 Internal Server Error:
 *     500 Internal Server Error
 *     {
 *       "errorMessage": "Something went wrong getting the list of habits"
 *     }
 */

/**
 * @api {post} /api/completed-today Mark a User Habit as Completed Today
 * @apiName PostCompletedHabits
 * @apiGroup CompletedHabits
 * @apiHeader (token) {String} authorization Token from login
 * @apiHeaderExample {json} Auth-Example:
                 { "authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoyLCJ1c2VybmFtZSI6InRoZV9ncmV5IiwiaWF0IjoxNTY0MjUzODE0LCJle" }
 * @apiParam (Body) {String} habit_id The id of the habit you would like to mark complete
 * @apiParamExample {json} Request-Body-Example:
 *     {
 *       "habit_id": 2
 *     }
 * @apiSuccess {Array} CompletedArray Array of habit objects, each object has the id of the relationship, habit_name property, habit_id property, category_name and a completed field that is either true or false
 * @apiSuccessExample Success-Response:
 *     201 OK
 *     [
        {
          "id": 1,
          "habit_id": 1,
          "habit_name": "get to mordor",
          "category_name": "physical wellness",
          "completed": true
        },
        {
          "id": 2,
          "habit_id": 2,
          "habit_name": "destroy the ring",
          "category_name": "spirituality",
          "completed": true
        }
      ]
 *
 * @apiError (4xx) BadRequest: Either the request is missing the habit_id property or that habit/user relationship does not exist
 * @apiErrorExample 400 Bad Request:
 *     400 Bad Request
 *     {
 *       "errorMessage": "Bad Request: please include the habit_id with your request"
 *     }
 *
 * @apiErrorExample 404 NotFound:
 *     404 Not Found
 *     {
 *       "errorMessage": "We could not find that habit for that user"
 *     }
 * 
 * @apiError (4xx) Unauthorized: You don't have authorization for this request
 * @apiErrorExample 401 Unauthorized:
 *     401 Unauthorized
 *     {
 *       "errorMessage": "Unauthorized: You don't have authorization for this request"
 *     }
 *
 * @apiError (500) InternalServerError Something went wrong marking that habit as completed.
 * @apiErrorExample 500 Internal Server Error:
 *     500 Internal Server Error
 *     {
 *       "errorMessage": "Something went wrong marking that habit as completed for today."
 *     }
 */

/**
 * @api {delete} /api/completed-today Mark a User Habit as NOT Completed Today
 * @apiName DeleteCompletedHabits
 * @apiGroup CompletedHabits
 * @apiHeader (token) {String} authorization Token from login
 * @apiHeaderExample {json} Auth-Example:
                 { "authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoyLCJ1c2VybmFtZSI6InRoZV9ncmV5IiwiaWF0IjoxNTY0MjUzODE0LCJle" }
 * @apiParam (Body) {String} habit_id The id of the habit you would like to mark complete
 * @apiParamExample {json} Request-Body-Example:
 *     {
 *       "habit_id": 1
 *     }
 * @apiSuccess {Array} CompletedArray Array of habit objects, each object has the id of the relationship, habit_name property, habit_id property, category_name and a completed field that is either true or false
 * @apiSuccessExample Success-Response:
 *     201 OK
 *     [
        {
          "id": 1,
          "habit_id": 1,
          "habit_name": "get to mordor",
          "category_name": "physical wellness",
          "completed": false
        },
        {
          "id": 2,
          "habit_id": 2,
          "habit_name": "destroy the ring",
          "category_name": "spirituality",
          "completed": true
        }
      ]
 *
 * @apiError (4xx) BadRequest: Either the request is missing the habit_id property or that habit/user relationship does not exist
 * @apiErrorExample 400 Bad Request:
 *     400 Bad Request
 *     {
 *       "errorMessage": "Bad Request: please include the habit_id with your request"
 *     }
 *
 * @apiErrorExample 404 NotFound:
 *     404 Not Found
 *     {
 *       "errorMessage": "We could not find that habit for that user"
 *     }
 * 
 * @apiError (4xx) Unauthorized: You don't have authorization for this request
 * @apiErrorExample 401 Unauthorized:
 *     401 Unauthorized
 *     {
 *       "errorMessage": "Unauthorized: You don't have authorization for this request"
 *     }
 *
 * @apiError (500) InternalServerError Something went wrong marking that habit as incomplete.
 * @apiErrorExample 500 Internal Server Error:
 *     500 Internal Server Error
 *     {
 *       "errorMessage": "Something went wrong marking that habit as NOT completed for today."
 *     }
 */
