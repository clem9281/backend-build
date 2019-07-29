const habitsDb = require("../../../habits/habitModel");

module.exports = async (req, res, next) => {
  if (!req.body.userHabit_id) {
    res.status(400).json({
      errorMessage:
        "Bad Request: please include the userHabit_id with your request"
    });
  } else {
    const userHabit = await habitsDb
      .findUserHabitsBy({
        userHabit_id: req.body.userHabit_id
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
