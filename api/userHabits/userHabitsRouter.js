const express = require("express");
const userHabitsDb = require("./userHabitsModel");

// DOCUMENTATION AT BOTTOM

const router = express.Router();

router.get("/", async (req, res) => {
  const user_id = req.userId;
  try {
    const userInfo = await userHabitsDb.findHabitsBy({ user_id });
    res.status(200).json(userInfo);
  } catch (error) {
    res
      .status(500)
      .json({ errorMessage: "Something went wrong getting your habit info" });
  }
});
module.exports = router;

/**
 * @api {get} /api/my-habits Get User Habits
 * @apiName GetUserHabits
 * @apiGroup UserHabits
 *
 * @apiSuccess {Array} Array of objects, each object has habit_name property, category_name and id
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
 *       "errorMessage": "SSomething went wrong getting your habit info"
 *     }
 */
