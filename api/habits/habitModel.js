const categoriesDb = require("../categories/categoriesModel");

const db = require("../../data/dbConfig");

module.exports = {
  findHabitsBy,
  addHabit,
  findUserHabitsBy,
  addUserHabit,
  find
};

function find() {
  return db("habits");
}
function findHabitsBy(filter) {
  console.log(filter);
  return db("habits")
    .where(filter)
    .first();
}

function addHabit(habit) {
  return db("habits")
    .insert(habit, "id")
    .then(([id]) => findHabitsBy({ id }));
}

// Find user habits by filter
function findUserHabitsBy(filter) {
  return db("userHabits")
    .join("habits", "habits.id", "userHabits.habit_id")
    .join("categories", "categories.id", "userHabits.category_id")
    .select("habits.id", "habits.habit_name", "categories.category_name")
    .where(filter);
}

async function addUserHabit(newHabitInfo) {
  // check if the habit already exists
  let habit = await findHabitsBy({
    habit_name: newHabitInfo.habit_name
  });
  // get the category by the category name: we have the name but need the id
  const category = await categoriesDb.findCategoryBy({
    category_name: newHabitInfo.category_name
  });
  // console.log(category);
  // if the habit is not already in the habit table add it to the habit table first
  if (!habit) {
    habit = await addHabit({ habit_name: newHabitInfo.habit_name });
  }
  // console.log(habit);
  const userHabitId = await db("userHabits").insert(
    {
      habit_id: habit.id,
      user_id: newHabitInfo.user_id,
      category_id: category.id
    },
    "id"
  );
  return findUserHabitsBy({ user_id: newHabitInfo.user_id });
}
