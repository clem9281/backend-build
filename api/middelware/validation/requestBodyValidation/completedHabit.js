const habitsDb = require("../../../habits/habitModel");

module.exports = async (req, res, next) => {
  console.log(req.body);
  if (!req.body.habit_id) {
    res.status(400).json({
      errorMessage: "Bad Request: please include the habit_id with your request"
    });
  } else {
    const userHabit = await habitsDb
      .findUserHabitsBy({
        habit_id: req.body.habit_id,
        user_id: req.userId
      })
      .first();
    if (userHabit) {
      next();
    } else {
      res
        .status(404)
        .json({ errorMessage: "We could not find that habit for that user" });
    }
  }
};
