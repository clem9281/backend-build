const habitDb = require("../../../habits/habitModel");

module.exports = async (req, res, next) => {
  const { habit_name, category_name } = req.body;
  const habits = await habitDb.findUserHabitsBy({ habit_name, category_name });
  if (habits.length !== 0) {
    res
      .status(400)
      .json({ errorMessage: "There is already a habit with that category" });
  } else {
    next();
  }
};
