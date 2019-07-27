exports.seed = function(knex) {
  return knex("userHabits").insert([
    { user_id: 1, habit_id: 1, category_id: 1 },
    { user_id: 1, habit_id: 2, category_id: 4 },
    { user_id: 2, habit_id: 3, category_id: 2 },
    { user_id: 2, habit_id: 4, category_id: 3 }
  ]);
};
