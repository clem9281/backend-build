const db = require("../../data/dbConfig");
const habitsDb = require("../habits/habitModel");
const categoriesDb = require("../categories/categoriesModel");

module.exports = { findHabitsBy, addHabit };

function findHabitsBy(filter) {
  return db("userHabits")
    .join("habits", "habits.id", "userHabits.habit_id")
    .join("categories", "categories.id", "userHabits.category_id")
    .select("habits.id", "habits.habit_name", "categories.category_name")
    .where(filter);
}

async function addHabit(newHabitInfo) {
  let habit = await habitsDb.findHabitsBy({
    habit_name: newHabitInfo.habit_name
  });
  const category = await categoriesDb.findCategoryBy({
    category_name: newHabitInfo.category_name
  });
  // if the habit is not already in the habit table add it to the habit table first
  if (!habit) {
    habit = await habitsDb.add({ habit_name: newHabitInfo.habit_name });
  }
  const userHabitId = await db("userHabits").insert({
    habit_id: habit.id,
    user_id: newHabitInfo.user_id,
    category_id: category.id
  });
  return findHabitsBy({ user_id: newHabitInfo.user_id });
}
