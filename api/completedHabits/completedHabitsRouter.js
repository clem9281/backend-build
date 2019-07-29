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
    const userHabitId = req.body.userHabit_id;
    try {
      const list = await completedDb.addCompleted(userHabitId, id);
      res.status(201).json(list);
    } catch (error) {
      res.status(500).json({
        errorMessage:
          "Something went wrong marking that habit as completed for today."
      });
    }
  });

router.route("/:userHabit_id").delete(async (req, res) => {
  const id = req.userId;
  const userHabitId = req.params.userHabit_id;
  try {
    const list = await completedDb.deleteCompleted(userHabitId, id);
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
 * @apiVersion 1.0.0
 * @apiName GetListToday
 * @apiGroup CompletedHabits
 * @apiExample Request
 * axios.get('/api/completed-today');
 * @apiHeader (token) {String} authorization Token from login
 * @apiHeaderExample {json} Auth-Example:
                 { "authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoyLCJ1c2VybmFtZSI6InRoZV9ncmV5IiwiaWF0IjoxNTY0MjUzODE0LCJle" }
 * @apiSuccess (Success 200) {Array} listArray Array of all habits with a completed field as either true or false
 * @apiSuccessExample Success-Response:
 *     200 OK
 *    [
        {
          "userHabit_id": 4,
          "habit_id": 4,
          "habit_name": "call eagles",
          "category_name": "relationships",
          "completed": false
        },
        {
          "userHabit_id": 3,
          "habit_id": 5,
          "habit_name": "walk into mordor",
          "category_name": "physical wellness",
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
 * @apiVersion 1.0.0
 * @apiName PostCompletedHabits
 * @apiGroup CompletedHabits
 * @apiExample Request
 * axios.post('/api/completed-today', {userHabit_id: 4});
 * @apiHeader (token) {String} authorization Token from login
 * @apiHeaderExample {json} Auth-Example:
                 { "authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoyLCJ1c2VybmFtZSI6InRoZV9ncmV5IiwiaWF0IjoxNTY0MjUzODE0LCJle" }
 * @apiParam (Body) {String} userHabit_id The id of the userHabit you would like to mark complete
 * @apiParamExample {json} Request-Body-Example:
 *     {
 *       "userHabit_id": 4
 *     }
 * @apiSuccess (Success 200) {Array} CompletedArray Array of habit objects, each object has the id of the relationship, habit_name property, habit_id property, category_name and a completed field that is either true or false
 * @apiSuccessExample Success-Response:
 *     201 OK
 *     [
        {
          "userHabit_id": 4,
          "habit_id": 4,
          "habit_name": "call eagles",
          "category_name": "relationships",
          "completed": true
        },
        {
          "userHabit_id": 3,
          "habit_id": 5,
          "habit_name": "walk into mordor",
          "category_name": "physical wellness",
          "completed": false
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
 * @api {delete} /api/completed-today/:userHabit_id Mark a User Habit as NOT Completed Today
 * @apiVersion 1.0.0
 * @apiName DeleteCompletedHabits
 * @apiGroup CompletedHabits
 * @apiExample Request
 * axios.delete('/api/completed-today/4');
 * @apiHeader (token) {String} authorization Token from login
 * @apiHeaderExample {json} Auth-Example:
                 { "authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoyLCJ1c2VybmFtZSI6InRoZV9ncmV5IiwiaWF0IjoxNTY0MjUzODE0LCJle" }
 * @apiParam (Param) {Number} userHabit_id The id of the userHabit you would like to mark incomplete
 * @apiParamExample {json} Request-Param-Example:
 *  "/api/completed-today/4"
 *     
 * @apiSuccess (Success 200) {Array} CompletedArray Array of habit objects, each object has the id of the relationship, habit_name property, habit_id property, category_name and a completed field that is either true or false
 * @apiSuccessExample Success-Response:
 *     201 OK
 *     [
        {
          "userHabit_id": 4,
          "habit_id": 4,
          "habit_name": "call eagles",
          "category_name": "relationships",
          "completed": false
        },
        {
          "userHabit_id": 3,
          "habit_id": 5,
          "habit_name": "walk into mordor",
          "category_name": "physical wellness",
          "completed": false
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
