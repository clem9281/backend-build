const moment = require("moment");
const completedDb = require("../../../completedHabits/completedHabitsmodel");

module.exports = async (req, res, next) => {
  const userId = req.userId;
  const userHabit_id = req.body.userHabit_id;
  try {
    //   if there is already a completed entry for that habit, we'll just go ahead and stop the response. If we control it right on the front end this request won't even get triggered, but just in case
    const completed = completedDb
      .getBy({
        userHabit_id,
        completed_date: moment().format("YYYY-M-D")
      })
      .first();
    if (completed) {
      res.status(204).end();
    } else {
      next();
    }
  } catch (error) {
    res
      .status(500)
      .json({
        errorMessage:
          "Something went wrong when we were checking if that habit was completed already today."
      });
  }
};
