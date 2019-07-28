const db = require("../../data/dbConfig");
const moment = require("moment");

module.exports = {
  getList,
  addCompleted,
  deleteCompleted
};

async function getList(id) {
  // Get a list of the tasks that were completed today
  const completedToday = await db("userCompleted").where(
    "completed_date",
    moment().format("YYYY-M-D")
  );
  // isolate an array of just the userHabits_id, that is the key that corresponds to the userHabits table
  const completedTodayIds = completedToday.map(el => el.userHabit_id);
  // Get a list of all the user habits, we really only need the id of the relationship, the habit name and the category name though
  const allUserHabits = await db("userHabits")
    .where({ user_id: id })
    .join("habits", "habits.id", "userHabits.habit_id")
    .join("categories", "categories.id", "userHabits.category_id")
    .select(
      "userHabits.id as id",
      "habits.id as habit_id",
      "habits.habit_name",
      "categories.category_name"
    );
  // make sure there is a list of userHabits to map over before we try to map over it, then map over it and if the completedTodayIds contains the id of the userHabit, then it is complete mark it true, otherwise mark it false
  if (allUserHabits.length > 0) {
    let list = allUserHabits.map(el => {
      if (completedTodayIds.includes(el.id)) {
        return { ...el, completed: true };
      } else {
        return { ...el, completed: false };
      }
    });
    return list;
    // return an empty list if the user has no habits
  } else {
    return [];
  }
}

async function addCompleted(habitId, userId) {
  const userHabit = await db("userHabits")
    .where({
      user_id: userId,
      habit_id: habitId
    })
    .first();
  const [id] = await db("userCompleted").insert(
    {
      userHabit_id: userHabit.id,
      completed_date: moment().format("YYYY-M-D")
    },
    "id"
  );
  return getList(userId);
}

async function deleteCompleted(habitId, userId) {
  const userHabit = await db("userHabits")
    .where({
      user_id: userId,
      habit_id: habitId
    })
    .first();
  const count = await db("userCompleted")
    .where({ userHabit_id: userHabit.id })
    .del();
  return getList(userId);
}
