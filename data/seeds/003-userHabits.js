exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("userHabits")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("userHabits").insert([
        { user_id: 1, habit_id: 1 },
        { user_id: 1, habit_id: 2 },
        { user_id: 2, habit_id: 3 },
        { user_id: 2, habit_id: 4 }
      ]);
    });
};
