const db = require("../../data/dbConfig");

module.exports = { findHabitsBy };

function findHabitsBy(filter) {
  return db("userHabits")
    .join("habits", "habits.id", "userHabits.habit_id")
    .join("categories", "categories.id", "userHabits.category_id")
    .select("habits.id", "habits.habit_name", "categories.category_name")
    .where(filter);
}
